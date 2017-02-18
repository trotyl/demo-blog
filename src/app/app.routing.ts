import { Route } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Route[] = [{
  path: '',
  component: ArticleListComponent,
  pathMatch: 'full'
}, {
  path: 'articles/:id',
  component: ArticleDetailComponent,
}];
