import { ChoiceWidget } from "./components/ChoiceWidget";
import { MultipleChoiceWidget } from "./components/MultipleChoiceWidget";
import { OpenQuestionWidget } from "./components/OpenQuestionWidget";
import { AvailableWidgetType } from "./Widgets.types";

export const availableWidgets: AvailableWidgetType[] = [
  {
    type: "open_question",
    title: "Open Question",
    intialProps: {
      title: "",
      description: "",
    },
  },
  {
    type: "multiple_choice",
    title: "Multiple Choice",
    intialProps: {
      title: "",
      description: "",
      choices: [],
      answer: "",
    },
  },
  {
    type: "choice",
    title: "Choice",
    intialProps: {
      title: "",
      description: "",
    },
  },
];

export const Widgets = {
  open_question: OpenQuestionWidget,
  choice: ChoiceWidget,
  multiple_choice: MultipleChoiceWidget,
};
