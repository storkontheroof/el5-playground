import { PropsWithChildren } from "react";

interface FieldsetProps {
  legend: string;
}
export const FieldSet = ({
  children,
  legend,
}: PropsWithChildren<FieldsetProps>) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};
