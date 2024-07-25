import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BaseWidgetInterface {
  id: string;
  type: string;
  title: string;
  props: unknown;
}

interface OpenQuestionWidgetInterface extends BaseWidgetInterface {
  type: "open_question";
  props: {
    title: string;
    description: string;
  };
}

interface ChoiceWidgetInterface extends BaseWidgetInterface {
  type: "choice";
  props: {
    title: string;
    description: string;
  };
}

interface MultipleChoiceWidgetInterface extends BaseWidgetInterface {
  type: "multiple_choice";
  props: {
    title: string;
    description: string;
    choices: string[];
    answer: string;
  };
}

type WidgetType =
  | OpenQuestionWidgetInterface
  | ChoiceWidgetInterface
  | MultipleChoiceWidgetInterface;

interface LessonProps {
  name: string;
  widgets: WidgetType[];
}

interface LessonActions {
  addWidget: (widget: WidgetType) => void;
  removeWidget: (id: string) => void;
  reset: () => void;
}

type LessonState = LessonProps & LessonActions;

const initialLessonState: LessonProps = {
  name: "",
  widgets: [],
};

const usLessonState = create<LessonState>()(
  persist(
    (set) => ({
      ...initialLessonState,

      addWidget: (widget: WidgetType) =>
        set((state: LessonState) => ({
          ...state,
          widgets: [...state.widgets, widget],
        })),

      removeWidget: (id: string) => {
        set((state: LessonState) => ({
          ...state,
          widgets: state.widgets.filter((widget) => widget.id !== id),
        }));
      },

      reset: () => set(initialLessonState),
    }),
    { name: "lesson-storage" }
  )
);

type AvailableWidgetType = Omit<WidgetType, "id" | "props"> & {
  intialProps: WidgetType["props"];
};

const availableWidgets: AvailableWidgetType[] = [
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

const WidgetHeader = ({ id, title }: Pick<WidgetType, "id" | "title">) => {
  return (
    <header>
      <h3>
        {title} (<small>{id}</small>)
      </h3>
    </header>
  );
};

const WidgetFooter = ({ id }: Pick<WidgetType, "id">) => {
  const removeWidget = usLessonState((state) => state.removeWidget);

  return (
    <footer>
      <button onClick={() => removeWidget(id)}>Remove</button>
    </footer>
  );
};

const OpenQuestionWidget = (props: OpenQuestionWidgetInterface) => {
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
};

const ChoiceWidget = (props: ChoiceWidgetInterface) => {
  return (
    <div>
      <WidgetHeader id={props.id} title={props.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answer</p>
      <WidgetFooter id={props.id} />
    </div>
  );
};

const MultipleChoiceWidget = (props: MultipleChoiceWidgetInterface) => {
  return (
    <div>
      <WidgetHeader id={props.id} title={props.title} />
      <p>component for adding multiple chouces</p>
      <p>component for determining the answers</p>
      <WidgetFooter id={props.id} />
    </div>
  );
};

const Widgets = {
  open_question: OpenQuestionWidget,
  choice: ChoiceWidget,
  multiple_choice: MultipleChoiceWidget,
};

export const SelectedWidgets = () => {
  const widgets = usLessonState((state) => state.widgets);
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <p>Number of widgets: {widgets.length ?? 0}</p>
      <ul>
        {widgets.map((widget) => {
          const TheWidget = Widgets[
            widget.type
          ] as React.ComponentType<WidgetType>;

          return <TheWidget key={widget.id} {...widget} />;
        })}
      </ul>
    </div>
  );
};

export const AvailableWidgets = () => {
  return (
    <div>
      {availableWidgets.map((widget) => (
        <Widget {...widget} key={widget.type} />
      ))}
    </div>
  );
};

const Widget = (props: AvailableWidgetType) => {
  const addWidget = usLessonState((state) => state.addWidget);
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
