import { FC, ReactNode } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import cls from './Popover.module.scss'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClasses } from '../../consts/consts'
import popupCls from '../../styles/Popup.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface PopoverProps {
  className?: string
  children: ReactNode
  trigger: ReactNode
  direction?: DropdownDirection
}

const Popover: FC<PopoverProps> = ({
  className = '',
  trigger,
  direction = 'bottom_right',
  children
}) => {
  const menuClasses = [mapDirectionClasses[direction]]
  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}

export default Popover
