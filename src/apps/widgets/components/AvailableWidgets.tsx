import { AvailableWidget } from "./AvailableWidget";
import { availableWidgets } from "../Widgets.constants";

export const AvailableWidgets = () => {
  return (
    <div>
      {availableWidgets.map((widget) => (
        <AvailableWidget {...widget} key={widget.type} />
      ))}
    </div>
  );
};
