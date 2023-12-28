import { DropdownDirection } from '@/shared/types/ui'
import cls from '../styles/Popup.module.scss'

export const mapDirectionClasses: Record<DropdownDirection, string> = {
  bottom_left: cls.optionsBottomLeft,
  bottom_right: cls.optionsBottomRight,
  top_left: cls.optionsTopLeft,
  top_right: cls.optionsTopRight
}
