import { FC } from 'react';
import { Page } from '@/widgets/Page';
// import { useTranslation } from 'react-i18next'

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = ({ className }) => {
  // const { t } = useTranslation()
  return <Page data-testid="AdminPanelPage">AdminPanelPage</Page>;
};

export default AdminPanelPage;
