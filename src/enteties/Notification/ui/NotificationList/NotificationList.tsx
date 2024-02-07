import { useNotifications } from '../../api/notificationApi';
import { FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import NotificationItem from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className = '' }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  const notificationList = useMemo(
    () =>
      notifications?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      )),
    [notifications],
  );

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.notificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.notificationList, {}, [className])}
    >
      {notificationList}
    </VStack>
  );
};

export default NotificationList;
