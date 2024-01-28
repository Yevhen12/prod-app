import { classNames } from './classNames'

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('test')).toBe('test')
  })

  test('with additional params', () => {
    const expected = 'test test2 test3 test4'
    expect(classNames('test', {}, ['test2', 'test3', 'test4'])).toBe(expected)
  })

  test('with mods', () => {
    const testMode = { hovered: true }
    const expected = 'test test2 test3 test4 hovered'
    expect(classNames('test', testMode, ['test2', 'test3', 'test4'])).toBe(expected)
  })
})
