import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'enteties/Notification'
import { FC } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Icon from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/call-20-20.svg'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton: FC<NotificationButtonProps> = ({ className = '' }) => {
  return (
    <Popover
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon inverted Svg={NotificationIcon} />
        </Button>
      )}
      direction='bottom_left'
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
}

export default NotificationButton
