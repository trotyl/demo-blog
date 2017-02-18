import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

import { ArticleListComponent } from './article-list';
import { ArticleDetailComponent } from './article-detail';

const firebaseConfig = {
  apiKey: 'AIzaSyDc2PkvcTA4WL4kGyRVT96OooxFpCcnuDo',
  authDomain: 'fir-blog-8c3fd.firebaseapp.com',
  databaseURL: 'https://fir-blog-8c3fd.firebaseio.com',
  storageBucket: 'fir-blog-8c3fd.appspot.com',
  messagingSenderId: '678204448995'
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
