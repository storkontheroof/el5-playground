import { memo } from "react";
import isEqual from "react-fast-compare";

// import { deepEqual } from "../../../utils/deepEqual";
import { MultipleChoiceWidgetInterface } from "../Widgets.types";

import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";

// eslint-disable-next-line react-refresh/only-export-components
function MultipleChoiceWidget(widget: MultipleChoiceWidgetInterface) {
  console.log(">>> rendering MultipleChoiceWidget for widget.id", widget.id);

  return (
    <div>
      <WidgetHeader id={widget.id} title={widget.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answers</p>
      <WidgetFooter id={widget.id} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(
  MultipleChoiceWidget,
  isEqual<MultipleChoiceWidgetInterface, MultipleChoiceWidgetInterface>
);
