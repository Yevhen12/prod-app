import { FC, Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClasses } from '../../consts/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/Popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const Dropdown: FC<DropdownProps> = ({
  className = '',
  items,
  trigger,
  direction = 'bottom_right',
}) => {
  const menuClasses = [mapDirectionClasses[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                [],
              )}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={item.content}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={item.content}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
