import { getArticleDetailsData } from 'enteties/Article'
import { getUserCanEditArticle } from '../../model/selectors/articles'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ className }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getUserCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
    <HStack max justify='between' className={classNames('', {}, [])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('backToList')}
      </Button>
      {canEdit && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('edit')}
        </Button>
      )}
    </HStack>
  )
}

export default ArticleDetailsPageHeader
