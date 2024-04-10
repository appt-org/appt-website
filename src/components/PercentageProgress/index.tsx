import clsx from "clsx";

export type PercentageProgressProps = {
  percentage: number;
  className?: string;
};

export function PercentageProgress({
  className,
  percentage,
}: PercentageProgressProps) {
  const classes = clsx(
    "flex h-[0.25rem] bg-onsurface relative",
    className
  );

  return (
    <div className={classes} aria-hidden>
      <span
        className="absolute left-0 top-0 bottom-0 bg-accent"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
