import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  id: string;
  article: FirebaseObjectObservable<Article>;

  constructor(
    private route: ActivatedRoute,
    private fire: AngularFire,
  ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    this.article = this.fire.database.object(`/articles/${this.id}`);
  }
}
