import { Fragment } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import { LabelOption } from '../Select/Select'
import { HStack } from '../Stack'

export interface ListboxItem extends LabelOption<string> {
  disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

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

const mapDirectionClasses: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

const Listbox = (props: ListboxProps) => {
  const {
    items = [],
    value,
    defaultValue,
    onChange,
    className = '',
    readonly = false,
    direction = 'bottom',
    label
  } = props

  const additionalClasses = [mapDirectionClasses[direction]]

  return (
    <HStack gap='4'>
      {label && <span className={classNames(cls.label, { [cls.disabled]: readonly }, [])}>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as='div'
        className={classNames(cls.listBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger}>
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
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: Boolean(item.disabled) }, [])}>
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
