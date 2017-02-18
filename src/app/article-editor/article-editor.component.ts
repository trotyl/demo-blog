import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Article } from '../article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent {
  @ViewChild('articleForm') form: NgForm;

  article: Observable<Article>;

  constructor(private route: ActivatedRoute, private fire: AngularFire) {
    const snapshot = route.snapshot;

    if (snapshot.data['isNew']) {
      this.article = Observable.of({
        id: null,
        title: '',
        createdAt: new Date().toISOString(),
        content: '',
      });
    } else {
      this.article = fire.database.object(`/articles/${snapshot.params['id']}`);
    }
  }
}
