import { Fragment } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../../../Button/Button'
import { LabelOption } from '../../../Select/Select'
import { HStack } from '../../../Stack'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClasses } from '../../consts/consts'
import popupCls from '../../styles/Popup.module.scss'

export interface ListboxItem extends LabelOption<string> {
  disabled?: boolean
}

interface ListboxProps {
  value?: string
  defaultValue?: string
  items?: ListboxItem[]
  onChange?: <T extends string>(value: T) => void
  className?: string
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const Listbox: React.FC<ListboxProps> = (props: ListboxProps) => {
  const {
    items = [],
    value,
    defaultValue,
    onChange,
    className = '',
    readonly = false,
    direction = 'bottom_right',
    label
  } = props

  const additionalClasses = [mapDirectionClasses[direction]]

  return (
    <HStack gap='4'>
      {label && <span className={classNames(cls.label, { [cls.disabled]: readonly }, [])}>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as='div'
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as='div' className={cls.trigger}>
          <Button theme={ButtonTheme.OUTLINE} disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, additionalClasses)}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: Boolean(item.disabled) }, [])}>
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}

            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}

export default Listbox
