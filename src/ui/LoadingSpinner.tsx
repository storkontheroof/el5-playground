interface LoadingSpinnerProps {
  loadingMessage?: string;
}

export const LoadingSpinner = ({
  loadingMessage = "Loading...",
}: LoadingSpinnerProps) => {
  return <p>{loadingMessage}</p>;
};
