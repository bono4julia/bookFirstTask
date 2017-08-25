import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient
      .get<Article[]>('http://localhost:2403/links')
      .map((data) => { // Каждый item из JSON проводить через кончтруктор, чтобы не потерялись методы
        return data.map((item) => {
          return new Article(item);
        })
      });
  }

  updateArticle(article: Article) {
    return this.httpClient
      .put<Article>(`http://localhost:2403/links/${article.id}`, article);
  }

  addArticle(article: Article) {
    return this.httpClient
      .post<Article>('http://localhost:2403/links/', article);
  }

}
