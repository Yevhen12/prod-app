import { ChangeEvent, FC, memo, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface LabelOption {
  value?: string
  content?: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: LabelOption[]
  value?: string
  onChange?: (val: string) => void
  readonly?: boolean
}

const Select: FC<SelectProps> = memo(({ className = '', label, options, value, onChange, readonly = true }: SelectProps) => {
  const mods: Mods = {
    [cls.readonly]: readonly
  }

  const optionsList = useMemo(() => options?.map(({ value, content }) => (
    <option key={value} value={value} className={cls.option}>{content}</option>
  )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select className={cls.select} onChange={onChangeHandler} value={value} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  )
})

Select.displayName = 'Select'

export default Select
