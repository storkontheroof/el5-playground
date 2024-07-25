import { v4 as uuidv4 } from "uuid";
import { AvailableWidgetType } from "../Widgets.types";
import { useLessonState } from "../Widgets.store";
import { WidgetType } from "../Widgets.types";

export const AvailableWidget = (props: AvailableWidgetType) => {
  const addWidget = useLessonState((state) => state.addWidget);
  return (
    <div>
      <p>{props.title}</p>
      <button
        onClick={() =>
          addWidget({
            id: uuidv4(),
            type: props.type,
            title: props.title,
            props: props.intialProps,
          } as WidgetType)
        }
      >
        Add Widget
      </button>
    </div>
  );
};
