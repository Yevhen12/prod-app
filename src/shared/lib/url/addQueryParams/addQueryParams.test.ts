import { getQueryParams } from './addQueryParams'

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({ value: 'test' })

    expect(params).toBe('?value=test')
  })

  test('test with two params', () => {
    const params = getQueryParams({ value: 'test', second: 'test2' })

    expect(params).toBe('?value=test&second=test2')
  })

  test('test with one param undefined', () => {
    const params = getQueryParams({ value: 'test', second: undefined })

    expect(params).toBe('?value=test')
  })
})
