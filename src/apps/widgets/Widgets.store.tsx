import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WidgetType } from "./Widgets.types";

interface LessonProps {
  name: string;
  widgets: WidgetType[];
}

interface LessonActions {
  addWidget: (widget: WidgetType) => void;
  removeWidget: (id: string) => void;
  updateWidget: (widget: WidgetType) => void;
  reset: () => void;
}

type LessonState = LessonProps & LessonActions;

const initialLessonState: LessonProps = {
  name: "",
  widgets: [],
};

export const useLessonState = create<LessonState>()(
  persist(
    (set, get) => ({
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

      updateWidget: (widget: WidgetType) => {
        const widgets = get().widgets.map((w) => {
          if (w.id === widget.id) {
            return widget;
          }
          return w;
        });

        set((state: LessonState) => ({
          ...state,
          widgets,
        }));
      },

      reset: () => set(initialLessonState),
    }),
    { name: "lesson-storage" }
  )
);
