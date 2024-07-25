/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { AvailableWidgetType } from "./Widgets.types";

const ChoiceWidget = lazy(() => import("./components/ChoiceWidget"));
const MultipleChoiceWidget = lazy(
  () => import("./components/MultipleChoiceWidget")
);
const OpenQuestionWidget = lazy(
  () => import("./components/OpenQuestionWidget")
);

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
