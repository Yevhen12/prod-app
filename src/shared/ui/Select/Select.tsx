import { ChangeEvent, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface LabelOption<T extends string> {
  value?: T
  content?: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<LabelOption<T>>
  value?: T
  onChange?: (val: T) => void
  readonly?: boolean
}

const Select = <T extends string>({ className = '', label, options, value, onChange, readonly = false }: SelectProps<T>) => {
  const mods: Mods = {
    [cls.readonly]: readonly
  }

  const optionsList = useMemo(() => options?.map(({ value, content }) => (
    <option key={value} value={value} className={cls.option}>{content}</option>
  )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select className={cls.select} onChange={onChangeHandler} value={value} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  )
}

Select.displayName = 'Select'

export default Select
