import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";
import { MultipleChoiceWidgetInterface } from "../Widgets.types";

export const MultipleChoiceWidget = (props: MultipleChoiceWidgetInterface) => {
  return (
    <div>
      <WidgetHeader id={props.id} title={props.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answers</p>
      <WidgetFooter id={props.id} />
    </div>
  );
};
