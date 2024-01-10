import { Loader } from '@/shared/ui/Loader/Loader'
import { FC, lazy, Suspense } from 'react'
import { ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy = lazy<FC<ArticleRatingProps>>(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
