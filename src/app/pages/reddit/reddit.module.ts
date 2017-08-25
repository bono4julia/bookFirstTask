import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleComponent } from './components/article/article.component';
import { RedditComponent } from './reddit.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleService } from './services/article.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AddArticleComponent, ArticleComponent, RedditComponent],
  exports: [RedditComponent],
  providers: [ArticleService]
})
export class RedditModule { }
