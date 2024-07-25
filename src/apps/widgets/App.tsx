import { FieldSet } from "../../ui/Fieldset";
import { AvailableWidgets, SelectedWidgets } from "./Widgets";

function App() {
  return (
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
  );
}

export default App;
