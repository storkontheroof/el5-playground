import { create } from "zustand";

interface CounterState {
  counter: number;
  incrCounter: () => void;
  setCounter: (val: number) => void;
}

const useCounter = create<CounterState>((set) => {
  return {
    counter: 0,

    incrCounter: () =>
      set((state: CounterState) => ({ ...state, counter: state.counter + 1 })),

    setCounter: (val: number) =>
      set((state: CounterState) => ({ ...state, counter: val })),
  };
});

export const DisplayCounter = () => {
  const counter = useCounter((state) => state.counter);
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <p>Counter: {counter}</p>
    </div>
  );
};

export const CounterControl = () => {
  const setCounter = useCounter((state) => state.setCounter);
  const incrCounter = useCounter((state) => state.incrCounter);

  return (
    <div>
      <button onClick={() => setCounter(0)}>Set Counter to 0</button>
      <button onClick={incrCounter}>Incr. Counter</button>
    </div>
  );
};
