import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

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
  article$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fire: AngularFire,
  ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.isNew = snapshot.data['isNew'];

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
      this.article$ = this.fire.database.object(`/articles/${this.id}`)
        .do((article: Article) => this.createdAt = article.createdAt);
    }
  }

  onSubmit(): void {
    this.fire.database.object(`/articles/${this.id}`).set({
      id: this.id,
      createdAt: this.createdAt,
      title: this.form.get('title').value,
      content: this.form.get('content').value,
    }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
