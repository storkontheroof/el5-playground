import { WidgetType } from "../Widgets.types";

export const WidgetHeader = ({
  id,
  title,
}: Pick<WidgetType, "id" | "title">) => {
  return (
    <header>
      <h3>
        {title} (<small>{id}</small>)
      </h3>
    </header>
  );
};
