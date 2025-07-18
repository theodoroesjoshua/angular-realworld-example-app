import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { Article, ArticleListConfig, ArticlesService } from '../../core';
@Component({
    selector: 'app-article-list',
    styleUrls: ['article-list.component.css'],
    templateUrl: './article-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ArticleListComponent {
  constructor (
    private articlesService: ArticlesService,
    private cd: ChangeDetectorRef
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  trackByFn(index, item) {
    return index;
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.articlesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.articles;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
      this.cd.markForCheck();
    });
  }
}
