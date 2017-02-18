import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent {
  articles: FirebaseListObservable<Article[]>;

  constructor(private fire: AngularFire) {
    this.articles = fire.database.list('/articles');
  }
}
