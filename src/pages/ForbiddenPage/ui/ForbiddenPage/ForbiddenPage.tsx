import { FC } from 'react';
import { Page } from '@/widgets/Page';
// import { useTranslation } from 'react-i18next'

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = ({ className }) => {
  // const { t } = useTranslation()
  return <Page data-testid="ForbiddenPage">ForbiddenPage</Page>;
};

export default ForbiddenPage;
