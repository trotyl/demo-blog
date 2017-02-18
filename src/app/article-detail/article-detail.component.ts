import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent {
  article: FirebaseObjectObservable<Article>;

  constructor(private route: ActivatedRoute, private fire: AngularFire) {
    const snapshot = route.snapshot;
    this.article = fire.database.object(`/articles/${snapshot.params['id']}`);
  }
}
