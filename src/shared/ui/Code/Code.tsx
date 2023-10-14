import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import cls from './Code.module.scss'
import CopyIcon from 'shared/assets/icons/copy.svg'

interface CodeProps {
  className?: string
  text: string
}

const Code: FC<CodeProps> = memo(({ className = '', text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  )
})

Code.displayName = 'Code'

export default Code
