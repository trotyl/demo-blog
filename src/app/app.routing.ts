import { Route } from '@angular/router';
import { ArticleListComponent } from './article-list';
import { ArticleDetailComponent } from './article-detail';
import { ArticleEditorComponent } from './article-editor';

export const routes: Route[] = [{
  path: '',
  component: ArticleListComponent,
  pathMatch: 'full',
}, {
  path: 'articles/create',
  component: ArticleEditorComponent,
  data: { isNew: true },
  pathMatch: 'full',
}, {
  path: 'articles/:id',
  component: ArticleDetailComponent,
  pathMatch: 'full',
}, {
  path: 'articles/:id/edit',
  component: ArticleEditorComponent,
  data: { isNew: false },
  pathMatch: 'full',
}];
