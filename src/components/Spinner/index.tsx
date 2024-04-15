import clsx from "clsx";

export type SpinnerProps = {
  className?: string;
  loadingText: string;
};

export function Spinner({ className, loadingText }: SpinnerProps) {
  const classes = clsx("my-0 mx-auto w-8 h-8", className);

  return (
    <div className={classes} role="status">
      <svg className="spinner-circle" viewBox="25 25 50 50">
        <circle className="spinner-circle-path" cx="50" cy="50" r="20" />
      </svg>
      <span className="sr-only">{loadingText}</span>
      <style>{`
        .spinner-circle {
          animation: rotate 2s linear infinite;
        }

        .spinner-circle-path {
          fill: none;
          stroke: #ffffff;
          stroke-width: 3px;
          animation: animate-stroke 1.5s ease-in-out infinite;
          stroke-linecap: round;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes animate-stroke {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
      `}</style>
    </div>
  );
}
