import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import Modal from '@/shared/ui/Modal/Modal';
import Text from '@/shared/ui/Text/Text';
import { saveJsonSettings, useJsonSettings } from '@/enteties/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ArticlePageGreetingProps {
  className?: string;
}

const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { isArticlePageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
    }
  }, [dispatch, isArticlePageWasOpened]);

  const onClose = () => setIsOpen(false);

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Text title={t('articleGreetingTitle')} text={t('articleGreetingText')} />
    </Modal>
  );
});

ArticlePageGreeting.displayName = 'ArticlePageGreeting';

export default ArticlePageGreeting;
