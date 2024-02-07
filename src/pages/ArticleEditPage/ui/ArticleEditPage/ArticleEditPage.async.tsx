import { FC, lazy } from 'react';
import { ArticleEditPageProps } from './ArticleEditPage';

export const ArticleEditPageAsync = lazy<FC<ArticleEditPageProps>>(
  async () => await import('./ArticleEditPage'),
);
