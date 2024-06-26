import { PropsWithChildren, useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card, CustomLink, PercentageProgress, Typography } from '@site/src/components';
import _kebabCase from 'lodash/kebabCase';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import dataJson from '@site/src/data/data-features';

import styles from './styles.module.css';

type ManualAccessibilityMetricApiModel = {
  title: string;
  number: number;
  isPercentage: boolean;
};

type GeneratedAccessibilityMetricApiModel = {
  key: string;
  title: string;
  isPercentage: boolean;
};

type GeneratedAccessibilityMetricJsonModel = {
  name: string;
  feature_key: string;
  property_key: string;
  platform: string;
  amount: number;
  percentage: number;
};

type AccessibilityMetricApiModel = ManualAccessibilityMetricApiModel | GeneratedAccessibilityMetricApiModel;

export type PercentageBlockProps = PropsWithChildren & {
  metrics?: AccessibilityMetricApiModel[];
  label?: string;
  url?: string;
  baseValue?: number;
};

function getMetricText(metric: ManualAccessibilityMetricApiModel, locale?: string) {
  const roundedNumber = metric.isPercentage ? roundPercentage(metric.number) : metric.number;
  const formattedNumber = roundedNumber.toLocaleString(locale);

  return `${formattedNumber}${metric.isPercentage ? '%' : ''}`;
}

function roundPercentage(percentage: number) {
  if (percentage < 1) {
    return percentage;
  }
  if (percentage < 10) {
    return Math.round(percentage * 10) / 10;
  }
  return Math.round(percentage);
}

export function PercentageBlock({ metrics, label, url, baseValue, children }: PercentageBlockProps) {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const id = uuidv4();

  const [allMetrics, setAllMetrics] = useState<ManualAccessibilityMetricApiModel[]>([]);
  useEffect(() => {
    const getMetrics = () => {
      const newMetrics = metrics.map(metric => {
        const isGeneratedMetric = 'key' in metric;

        if (!isGeneratedMetric) {
          return metric as ManualAccessibilityMetricApiModel;
        } else {
          const metricJson = dataJson[metric.key] as GeneratedAccessibilityMetricJsonModel;

          if (!metricJson) {
            return undefined;
          }

          return {
            title: metric.title,
            number: metric.isPercentage ? metricJson.percentage : metricJson.amount,
            isPercentage: metric.isPercentage,
          } as ManualAccessibilityMetricApiModel;
        }
      });

      return newMetrics;
    };

    const setMetrics = async () => {
      const combinedMetrics = (await getMetrics()).filter(metric => metric);
      setAllMetrics(combinedMetrics);
    };

    setMetrics();
  }, []);

  /**
   * Render a single metric as a large percentage/number with text
   */
  function renderMetric() {
    const metric = allMetrics[0];
    const classNames = clsx('flex-1 first:children:mt-0 first:children:mb-0', styles.percentageBlockContent);

    return (
      <>
        {metric.isPercentage && <PercentageProgress className="mb-4" percentage={metric.number} />}
        <div className="flex flex-col sm:flex-row">
          <Typography className="mr-0 break-all sm:mr-8" tag="p" size="heading-xl">
            {getMetricText(metric, locale)}
          </Typography>
          <div className={classNames} id={id}>
            {children}
          </div>
        </div>
      </>
    );
  }

  /**
   * Render multiple metrics as text and a descending bar chart
   */
  function renderMetrics() {
    const baseVal = baseValue ?? Math.max(...allMetrics.map(metric => metric.number));
    const classNames = clsx(
      'flex-1 mb-4 md:mb-0 md:mr-8 first:children:mt-0 first:children:mb-0',
      styles.percentageBlockContent,
    );

    return (
      <div className="flex flex-col md:flex-row">
        <div className={classNames} id={id}>
          {children}
        </div>
        <ul className="flex-1" aria-labelledby={id}>
          {allMetrics
            .sort((a, b) => b.number - a.number)
            .map((metric, i) => {
              const id = `${_kebabCase(metric.title)}-${metric.number}-${i}`;
              const metricProgressPercentage = metric.isPercentage ? metric.number : (metric.number / baseVal) * 100;
              const metricLabel = `${metric.title} ${getMetricText(metric, locale)}`;

              return (
                <li key={id} aria-label={metricLabel}>
                  <Typography tag="p" size="paragraph" className={i === 0 ? '!mt-0' : ''}>
                    {metric.title}
                  </Typography>
                  <div className="flex items-center -mt-3">
                    <PercentageProgress className="mr-4 flex-1" percentage={metricProgressPercentage} />
                    <Typography className="flex-grow-0" tag="p" size="paragraph">
                      {getMetricText(metric, locale)}
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
    <Card className="markdown-block flex-1">
      {allMetrics.length === 1 ? renderMetric() : renderMetrics()}
      {label && url && (
        <div className="flex justify-end mt-4">
          <CustomLink className="flex justify-end mt-4" url={url} label={label} />
        </div>
      )}
    </Card>
  );
}
