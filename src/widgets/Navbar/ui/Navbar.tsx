/* eslint-disable indent */
import { LoginModal } from '@/features/AuthByUsername';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';
import { getUserAuthData } from '@/enteties/User';
import Text, { TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticlesNew } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/features/ToggleFeatures/ToggleFeatures';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo(
  ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const onOpenModal = useCallback(() => {
      setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
    }, []);

    if (authData) {
      return (
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <header className={classNames(cls.navbar, {}, [className ?? ''])}>
              <Text
                text="Production application"
                theme={TextTheme.INVERTED}
                className={cls.appName}
              />
              <AppLink
                to={getRouteArticlesNew()}
                theme={AppLinkTheme.SECONDARY}
                className={cls.createBtn}
              >
                {t('createArticle')}
              </AppLink>
              <HStack gap="16" justify="end" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            </header>
          }
          on={
            <header
              className={classNames(cls.navbarRedesigned, {}, [
                className ?? '',
              ])}
            >
              <HStack gap="16" justify="end" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            </header>
          }
        />
      );
    }

    return (
      <header className={classNames(cls.navbar, {}, [className ?? ''])}>
        <Button
          className={cls.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onOpenModal}
        >
          {t('signIn')}
        </Button>
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </header>
    );
  },
);

Navbar.displayName = 'Navbar';
