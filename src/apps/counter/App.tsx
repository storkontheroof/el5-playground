import { FieldSet } from "../../ui/Fieldset";
import { CounterControl, DisplayCounter } from "./Counter";

function App() {
  return (
    <FieldSet legend="Counter">
      <CounterControl />
      <DisplayCounter />
    </FieldSet>
  );
}

export default App;
