import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { RedditModule } from './pages/reddit/reddit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RedditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
