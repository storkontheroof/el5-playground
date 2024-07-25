import { Widgets } from "../Widgets.constants";
import { useLessonState } from "../Widgets.store";
import { WidgetType } from "../Widgets.types";

export const SelectedWidgets = () => {
  const widgets = useLessonState((state) => state.widgets);

  return (
    <div>
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
