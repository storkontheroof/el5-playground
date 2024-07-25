export type AvailableWidgetType = Omit<WidgetType, "id" | "props"> & {
  intialProps: WidgetType["props"];
};

interface BaseWidgetInterface {
  id: string;
  type: string;
  title: string;
  props: unknown;
}

export interface OpenQuestionWidgetInterface extends BaseWidgetInterface {
  type: "open_question";
  props: {
    title: string;
    description: string;
  };
}

export interface ChoiceWidgetInterface extends BaseWidgetInterface {
  type: "choice";
  props: {
    title: string;
    description: string;
  };
}

export interface MultipleChoiceWidgetInterface extends BaseWidgetInterface {
  type: "multiple_choice";
  props: {
    title: string;
    description: string;
    choices: string[];
    answer: string;
  };
}

export type WidgetType =
  | OpenQuestionWidgetInterface
  | ChoiceWidgetInterface
  | MultipleChoiceWidgetInterface;
