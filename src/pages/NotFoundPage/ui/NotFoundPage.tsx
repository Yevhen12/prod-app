import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}
const NotFoundPage: FC<NotFoundPageProps> = memo(
  ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
      <Page data-testid="NotFoundPage" className={cls.notFoundPage}>
        {t('notFoundPage')}
      </Page>
    );
  },
);

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
