import { ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from '@/shared/config/i18n/i18nForTests'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/const/theme'

export interface RenderComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: RenderComponentOptions
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props
  const {
    route = '/',
    initialState = {},
    asyncReducers = {},
    theme = Theme.LIGHT
  } = options
  return (
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </StoreProvider>
      </I18nextProvider>
    </MemoryRouter>
  )
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
