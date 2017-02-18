import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles: FirebaseListObservable<Article[]>;

  constructor(
    private fire: AngularFire
  ) { }

  ngOnInit(): void {
    this.articles = this.fire.database.list('/articles');
  }
}
