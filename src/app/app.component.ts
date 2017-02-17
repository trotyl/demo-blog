import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

interface Article {
  id: string;
  title: string;
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: FirebaseListObservable<Article[]>;

  constructor(private fire: AngularFire) {
    this.articles = fire.database.list('/articles');
  }
}
