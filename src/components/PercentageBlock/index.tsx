import { Card, PercentageProgress, Typography } from '@site/src/components';
import _kebabCase from 'lodash/kebabCase';

type Metric = {
  title?: string;
  number: number;
  isPercentage: boolean;
};

export type PercentageBlockProps = {
  text?: string;
  id: string;
  baseValue?: number;
  metrics: Metric[];
  link?: { label: string; url: string };
};

function getMetricText(metric: Metric) {
  return `${metric.number}${metric.isPercentage ? '%' : ''}`;
}

export function PercentageBlock({ text, id, baseValue, metrics, link }: PercentageBlockProps) {
  /**
   * Render a single metric as a large percentage/number with text
   */
  function renderMetric() {
    const metric = metrics[0];
    return (
      <>
        {metric.isPercentage && <PercentageProgress className="mb-4" percentage={metric.number} />}
        <div className="flex flex-col sm:flex-row">
          <Typography className="mr-0 break-all sm:mr-8" tag="p" size="heading-xl">
            {getMetricText(metric)}
          </Typography>
          {text && (
            <Typography className="flex-1 text-body max-w-[44rem] break-words text-paragraph leading-paragraph font-normal my-4">
              {text}
            </Typography>
          )}
        </div>
      </>
    );
  }

  /**
   * Render multiple metrics as text and a descending bar chart
   */
  function renderMetrics() {
    const metricBaseValue = baseValue ?? Math.max(...metrics.map(metric => metric.number));

    return (
      <div className="flex flex-col md:flex-row">
        {text && (
          <div className="flex-1 mb-4 md:mb-0 md:mr-8" id={id}>
            {text}
          </div>
        )}
        <ul className="flex-1" aria-labelledby={id}>
          {metrics
            .sort((a, b) => b.number - a.number)
            .map(metric => {
              const id = `${_kebabCase(metric.title)}-${metric.number}`;
              const metricProgressPercentage = metric.isPercentage
                ? metric.number
                : (metric.number / metricBaseValue) * 100;
              const metricLabel = `${metric.title} ${getMetricText(metric)}`;

              return (
                <li key={id} aria-label={metricLabel}>
                  <Typography tag="p" size="paragraph">
                    {metric.title}
                  </Typography>
                  <div className="flex items-center -mt-3">
                    <PercentageProgress className="mr-4 flex-1" percentage={metricProgressPercentage} />
                    <Typography className="flex-grow-0" tag="p" size="paragraph">
                      {getMetricText(metric)}
                    </Typography>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  return (
    <Card className="flex-1">
      {metrics.length === 1 ? renderMetric() : renderMetrics()}
      {link && <div className="flex justify-end mt-4">TODO: Add link component</div>}
    </Card>
  );
}
