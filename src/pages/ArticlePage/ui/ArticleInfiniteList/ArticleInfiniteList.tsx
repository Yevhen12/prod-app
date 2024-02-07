import { ArticleList } from '@/enteties/Article';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { initArticlePage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slices/articlePageSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import Text from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams));
  });

  if (error) {
    return <Text text={t('errorOccur')} />;
  }

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view}
      className={className}
    />
  );
};

export default ArticleInfiniteList;
