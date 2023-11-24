import { FC, lazy } from 'react'
import { ArticlePageProps } from './ArticlePage'

export const ArticlePageAsync = lazy<FC<ArticlePageProps>>(async () => await import('./ArticlePage'))
