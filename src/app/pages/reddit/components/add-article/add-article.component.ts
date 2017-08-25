import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Article } from '../../models/article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  @Output() addArticle = new EventEmitter<Article>();

  articleForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.articleForm = this.fb.group({
      'title': ['', Validators.required],
      'link': ['', Validators.required]
    })
  }

  onAddArticle() {
    this.submitted = true;

    if (this.articleForm.invalid) {
      return;
    }

    this.addArticle.emit(this.articleForm.value);
    this.articleForm.reset();
    this.submitted = false;
  }

}
