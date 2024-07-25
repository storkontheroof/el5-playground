import { memo } from "react";

import { deepEqual } from "../../../utils/deepEqual";
import { ChoiceWidgetInterface } from "../Widgets.types";

import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";

// eslint-disable-next-line react-refresh/only-export-components
function ChoiceWidget(widget: ChoiceWidgetInterface) {
  return (
    <div>
      <WidgetHeader id={widget.id} title={widget.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answer</p>
      <WidgetFooter id={widget.id} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ChoiceWidget, deepEqual<ChoiceWidgetInterface>);
