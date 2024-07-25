import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";
import { OpenQuestionWidgetInterface } from "../Widgets.types";

function OpenQuestionWidget(props: OpenQuestionWidgetInterface) {
  return (
    <div>
      <WidgetHeader id={props.id} title={props.title} />
      <p>
        <label>Title</label>
        <br />
        <input type="text" defaultValue={props.props.title} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <textarea defaultValue={props.props.description}></textarea>
      </p>
      <WidgetFooter id={props.id} />
    </div>
  );
}

export default OpenQuestionWidget;
