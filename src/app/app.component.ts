import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = [{
    title: 'This is title 1',
    createdAt: new Date(),
  }, {
    title: 'This is title 2',
    createdAt: new Date(),
  }];
}
