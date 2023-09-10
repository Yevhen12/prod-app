import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'

export interface renderComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (component: ReactNode, options: renderComponentOptions = {}) => {
  const {
    route = '/',
    initialState = {}
  } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        <StoreProvider initialState={initialState as StateSchema}>
          {component}
        </StoreProvider>
      </I18nextProvider>
    </MemoryRouter>
  )
}
