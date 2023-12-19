import { FC, Fragment, ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
  disabled?: boolean
  content?: string
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
  bottom_left: cls.optionsBottomLeft,
  bottom_right: cls.optionsBottomRight,
  top_left: cls.optionsTopLeft,
  top_right: cls.optionsTopRight
}

const Dropdown: FC<DropdownProps> = ({
  className = '',
  items,
  trigger,
  direction = 'bottom_right'
}) => {
  const menuClasses = [mapDirectionClasses[direction]]

  return (
    <Menu as='div' className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active }, [])}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item key={item.content} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={item.content} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
