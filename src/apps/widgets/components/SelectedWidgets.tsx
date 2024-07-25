import { Widgets } from "../Widgets.constants";
import { useLessonState } from "../Widgets.store";
import { WidgetType } from "../Widgets.types";

export const SelectedWidgets = () => {
  const widgets = useLessonState((state) => state.widgets);
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <p>Number of widgets: {widgets.length ?? 0}</p>
      <ul>
        {widgets.map((widget) => {
          const TheWidget = Widgets[
            widget.type
          ] as React.ComponentType<WidgetType>;

          return <TheWidget key={widget.id} {...widget} />;
        })}
      </ul>
    </div>
  );
};
