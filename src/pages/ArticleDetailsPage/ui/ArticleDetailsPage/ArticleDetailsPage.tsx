import { FC } from 'react';
import { ArticleDetails } from '@/enteties/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { getFeatureFlag } from '@/shared/features/setGetFeatures';
import { toggleFeatures } from '@/shared/features/toggleFeatures';
import Card from '@/shared/ui/Card/Card';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlag('isArticleEnabled');
  const isCounterEnabled = getFeatureFlag('isCounterEnabled');

  console.log('isArticleRatingEnabled', isArticleRatingEnabled);
  console.log('isCounterEnabled', isCounterEnabled);

  if (!id) {
    return <Page>{t('articleNotFound')}</Page>;
  }

  const articleRating = toggleFeatures({
    name: 'isArticleEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>Coming Soon!</Card>,
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRating}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
