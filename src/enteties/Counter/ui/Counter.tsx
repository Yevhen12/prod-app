import { FC } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter: FC = () => {
  const counterValue = useCounterValue();
  const { increment, decrement } = useCounterActions();

  const handleInc = () => {
    increment();
  };
  const handleDec = () => {
    decrement();
  };
  return (
    <div>
      <h1 data-testid="value-title">Value: {counterValue}</h1>
      <Button
        data-testid="increment"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={handleInc}
      >
        +
      </Button>
      <Button
        data-testid="decrement"
        theme={ButtonTheme.OUTLINE}
        onClick={handleDec}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
