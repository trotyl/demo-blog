import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import * as MarkdownIt from 'markdown-it';

import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  md: any;
  id: string;
  article: FirebaseObjectObservable<Article>;
  htmlPreview: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fire: AngularFire,
  ) { }

  ngOnInit(): void {
    this.md = new MarkdownIt();

    const snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    this.article = this.fire.database.object(`/articles/${this.id}`);
    this.article.subscribe((article: Article) => {
      this.htmlPreview = this.md.render(article.content);
    });
  }

  delete(): void {
    this.article.remove()
      .then(() => {
        this.router.navigate(['/']);
      });
  }
}
