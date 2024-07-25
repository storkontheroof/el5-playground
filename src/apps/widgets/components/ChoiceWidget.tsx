import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";
import { ChoiceWidgetInterface } from "../Widgets.types";

export const ChoiceWidget = (props: ChoiceWidgetInterface) => {
  return (
    <div>
      <WidgetHeader id={props.id} title={props.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answer</p>
      <WidgetFooter id={props.id} />
    </div>
  );
};
