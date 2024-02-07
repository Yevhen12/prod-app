import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Card, { CardTheme } from '@/shared/ui/Card/Card';
import { Notification } from '../../model/types/notification';
import Text from '@/shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

const NotificationItem: FC<NotificationItemProps> = ({
  className = '',
  item,
}) => {
  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    <AppLink className={cls.link} to={item.href}>
      {content}
    </AppLink>;
  }

  return content;
};

export default NotificationItem;
