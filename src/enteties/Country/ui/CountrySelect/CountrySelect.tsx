import { Country } from 'enteties/Country/model/types/country'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Select, { LabelOption } from 'shared/ui/Select/Select'

export const COUNTRY_OPTIONS: LabelOption[] = [
  { value: Country.Australia, content: Country.Australia },
  { value: Country.England, content: Country.England },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.UnitedStates, content: Country.UnitedStates }
]

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (val: Country) => void
  readonly?: boolean
}

const CountrySelect: FC<CountrySelectProps> = memo(({ className = '', value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeCountryHandler = useCallback((val: string) => {
    onChange?.(val as Country)
  }, [onChange])

  return (
    <Select
      className={classNames('', {}, [className])}
      onChange={onChangeCountryHandler}
      label={t('yourCountry')}
      options={COUNTRY_OPTIONS}
      value={value}
      readonly={readonly}
    />
  )
})

CountrySelect.displayName = 'CurrencySelect'

export default CountrySelect
