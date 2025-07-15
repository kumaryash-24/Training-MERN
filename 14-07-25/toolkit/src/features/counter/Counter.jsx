// src/features/counter/Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice.js';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
