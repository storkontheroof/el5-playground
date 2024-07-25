import "./App.css";
import { CounterControl, DisplayCounter } from "./Counter";
import { AvailableWidgets, SelectedWidgets } from "./Widgets";

const FieldSet = ({ children, legend }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

function App() {
  return (
    <div>
      <FieldSet legend="Counter">
        <CounterControl />
        <DisplayCounter />
      </FieldSet>

      <FieldSet legend="Widgets">
        <div style={{ display: "flex", gap: "24px" }}>
          <div>
            <AvailableWidgets />
          </div>
          <div>
            <SelectedWidgets />
          </div>
        </div>
      </FieldSet>
    </div>
  );
}

export default App;
