import { memo } from "react";

import { deepEqual } from "../../../utils/deepEqual";
import { useLessonState } from "../Widgets.store";
import { OpenQuestionWidgetInterface } from "../Widgets.types";

import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";

// eslint-disable-next-line react-refresh/only-export-components
function OpenQuestionWidget(widget: OpenQuestionWidgetInterface) {
  const updateWidget = useLessonState((state) => state.updateWidget);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateWidget({
      ...widget,
      props: {
        ...widget.props,
        title: e.target.value,
      },
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateWidget({
      ...widget,
      props: {
        ...widget.props,
        description: e.target.value,
      },
    });
  };

  return (
    <div>
      <WidgetHeader id={widget.id} title={widget.title} />

      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          defaultValue={widget.props.title}
          onBlur={handleTitleChange}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <textarea
          defaultValue={widget.props.description}
          onBlur={handleTextChange}
        ></textarea>
      </p>

      <WidgetFooter id={widget.id} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(OpenQuestionWidget, deepEqual<OpenQuestionWidgetInterface>);
