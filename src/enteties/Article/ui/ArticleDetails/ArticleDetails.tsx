import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'enteties/Article/model/selectors/articleDetails'
import { fetchArticleById } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById'
import { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import cls from './ArticleDetails.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
// import { useTranslation } from 'react-i18next'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  // const isLoading = useSelector(getArticleDetailsIsLoading)
  const isLoading = true
  const data = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  let content

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width='200px' height='200px' border='50%' />
        <Skeleton className={cls.title} width='300px' height='32px' />
        <Skeleton className={cls.skeleton} width='600px' height='24px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={error}
      />
    )
  } else {
    content = (
      <div>{data?.title}</div>
    )
  }
  // const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'

export default ArticleDetails
