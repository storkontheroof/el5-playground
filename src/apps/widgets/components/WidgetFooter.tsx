import { useLessonState } from "../Widgets.store";
import { WidgetType } from "../Widgets.types";

export const WidgetFooter = ({ id }: Pick<WidgetType, "id">) => {
  const removeWidget = useLessonState((state) => state.removeWidget);

  return (
    <footer>
      <button onClick={() => removeWidget(id)}>Remove</button>
    </footer>
  );
};
