import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as MarkdownIt from 'markdown-it';

import { Article } from '../article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
  form: FormGroup;
  isNew: boolean;
  id: string;
  createdAt: string;
  md: any;
  htmlPreview: string;
  article$: Observable<Article>;

  get title(): string {
    return this.form.get('title').value;
  }

  set title(value: string) {
    this.form.get('title').setValue(value);
  }

  get content(): string {
    return this.form.get('content').value;
  }

  set content(value: string) {
    this.form.get('content').setValue(value);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fire: AngularFire,
  ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.isNew = snapshot.data['isNew'];
    this.md = new MarkdownIt();

    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });

    if (this.isNew) {
      this.id = Date.now().toString();
      this.createdAt = new Date().toISOString();
      this.article$ = Observable.of({
        id: null,
        createdAt: null,
        title: '',
        content: '',
      });
    } else {
      this.id = snapshot.params['id'];
      this.article$ = this.fire.database.object(`/articles/${this.id}`);
      this.article$.subscribe((article: Article) => {
        this.createdAt = article.createdAt;
        this.title = article.title;
        this.content = article.content;
      });
    }
  }

  preview(): boolean {
    this.htmlPreview = this.md.render(this.content);
    return false;
  }

  onSubmit(): void {
    const article$ = this.fire.database.object(`/articles/${this.id}`);
    let promise: any;

    if (this.isNew) {
      promise = article$.set({
        id: this.id,
        createdAt: this.createdAt,
        title: this.title,
        content: this.content,
      });
    } else {
      promise = article$.update({
        title: this.title,
        content: this.content,
      });
    }

    promise.then(() => {
      this.router.navigate(['/']);
    });
  }
}
