import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() voiteUp = new EventEmitter<Article>();
  @Output() voiteDown = new EventEmitter<Article>();

  constructor(

  ) { }

  ngOnInit() {
  }

  onVoiteUp() {
    this.voiteUp.emit(this.article);
    return false; //Чтобы не перегружалась стр. по href
  }

  onVoiteDown() {
    this.voiteDown.emit(this.article);
    return false;
  }

}
