import { FC, useCallback } from 'react';
import DynamicModuleLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageSliceReducer } from '../../model/slices/articlePageSlice';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageSliceReducer,
};

const ArticlePage: FC<ArticlePageProps> = ({ className = '' }) => {
  const dispatch = useAppDispatch();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} data-testid="ArticlePage">
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlePage;
