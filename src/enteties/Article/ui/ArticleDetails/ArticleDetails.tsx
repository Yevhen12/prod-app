/* eslint-disable indent */
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'enteties/Article/model/selectors/articleDetails'
import { fetchArticleById } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById'
import { FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import cls from './ArticleDetails.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice'
import Avatar from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-outlined.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import Icon from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from 'enteties/Article/model/types/article'
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { HStack, VStack } from 'shared/ui/Stack'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const data = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />
      default:
        return null
    }
  }, [])

  const renderAllBlocks = data?.blocks.map(renderBlock)

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width='200px' height='200px' border='50%' />
        <Skeleton className={cls.title} width='300px' height='32px' />
        <Skeleton className={cls.skeleton} width='600px' height='24px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
      </>
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
      <>
        <HStack justify='center' max className={cls.avaterWrapper}>
          <Avatar
            src={data?.img}
            size={200}
            className={cls.avatar}
          />
        </HStack>
        <VStack gap='4' max>
          <Text
            className={cls.title}
            title={data?.title}
            text={data?.subtitle}
            size={TextSize.L}
          />
          <HStack gap='8' className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={`${data?.views}`} />
          </HStack>
          <HStack gap='8' className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text text={`${data?.createdAt}`} />
          </HStack>
        </VStack>
        {renderAllBlocks}
      </>
    )
  }
  // const { t } = useTranslation()

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap='16' max>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'

export default ArticleDetails
