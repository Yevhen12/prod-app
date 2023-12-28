import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

const Counter: FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1 data-testid="value-title">Value: {counterValue}</h1>
      <Button data-testid="increment" theme={ButtonTheme.BACKGROUND_INVERTED} onClick={increment}>+</Button>
      <Button data-testid="decrement" theme={ButtonTheme.OUTLINE} onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
