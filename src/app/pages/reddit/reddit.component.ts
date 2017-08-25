import { Component, OnInit } from '@angular/core';

import { ArticleService } from './services/article.service';
import { Article } from './models/article';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  public dataArticles: Article[];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService
      .getArticles()
      .subscribe(
        (value) => {
          return this.dataArticles = value;
        }
      );
  }

  voiteUp(article: Article) {
    article.points++;
    this.updateArticle(article);
  }

  voiteDown(article: Article) {
    article.points--; 
    this.updateArticle(article);
  }  

  updateArticle(article: Article) {
    return this.articleService
      .updateArticle(article)
      .subscribe((newDataArticle) => {
        console.log(newDataArticle);
      })
  }

  addArticle(article: Article) {
    this.articleService
      .addArticle(article)
      .subscribe((newDataArticle) => {
        this.getArticles(); 
      }); 
  }

  sortArticle() {
    if (this.dataArticles == null) {
      return this.dataArticles;
    }

    return this.dataArticles.sort((a: Article, b: Article) => {
      return b.points - a.points;
    })
  }
}