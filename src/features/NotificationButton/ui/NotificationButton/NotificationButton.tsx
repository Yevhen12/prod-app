import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'enteties/Notification'
import { FC, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import Icon from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/call-20-20.svg'
import cls from './NotificationButton.module.scss'
import Drawer from 'shared/ui/Drawer/Drawer'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton: FC<NotificationButtonProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpenDrawer = () => {
    setIsOpen(true)
  }

  const onCloseDrawer = () => {
    setIsOpen(false)
  }

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon inverted Svg={NotificationIcon} />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover
          trigger={trigger}
          direction='bottom_left'
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
}

export default NotificationButton
