import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDc2PkvcTA4WL4kGyRVT96OooxFpCcnuDo',
  authDomain: 'fir-blog-8c3fd.firebaseapp.com',
  databaseURL: 'https://fir-blog-8c3fd.firebaseio.com',
  storageBucket: 'fir-blog-8c3fd.appspot.com',
  messagingSenderId: '678204448995'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
