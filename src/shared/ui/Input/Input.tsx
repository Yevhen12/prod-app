/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder = '',
    autofocus,
    ...otherProps
  } = props
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [caretPosition, setCaretPosition] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus()
      setIsFocused(true)
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
    <div className={cls.inputWrapper}>
      <div className={cls.placeholder}>
        {placeholder + '>'}
      </div>
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 7}px` }}></span>}
      </div>
    </div>
  )
})

Input.displayName = 'Input'

export default Input
