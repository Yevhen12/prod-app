import { Currency } from '../../model/types/currency'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Listbox } from '@/shared/ui/Popups'
import { LabelOption } from '@/shared/ui/Select/Select'
import { Counter } from '@/enteties/Counter'

const tets = {
  Counter
}

console.log(tets)

export const CURRENCY_OPTIONS: Array<LabelOption<Currency>> = [
  { value: Currency.UA, content: Currency.UA },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (val: Currency) => void
  readonly?: boolean
}

const CurrencySelect: FC<CurrencySelectProps> = memo(({ className = '', value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeCurrencyHandler = useCallback((val: string) => {
    onChange?.(val as Currency)
  }, [onChange])

  return (
    <Listbox
      className={classNames('', {}, [className])}
      onChange={onChangeCurrencyHandler}
      items={CURRENCY_OPTIONS}
      value={value}
      defaultValue={t('chooseCurrency')}
      label={t('chooseCurrency')}
      readonly={readonly}
      direction='top_right'
    />
  )
})

CurrencySelect.displayName = 'CurrencySelect'

export default CurrencySelect
