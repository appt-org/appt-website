import { createWebpackLoader, getTopic, type Locale, type Technique, type Framework } from '@appt.org/samples';
import { useEffect, useState } from 'react';
import MDXCode from '@theme/MDXComponents/Code';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const context = require.context('@appt.org/samples/samples', true, /\.md$/, 'lazy');
const loader = createWebpackLoader(context);

const frameworks: Framework[] = [
  'android',
  'jetpack-compose',
  'ios',
  'swiftui',
  'flutter',
  'react-native',
  'net-maui',
  'xamarin'
];

export type CodeSampleProps = {
  id: Technique;
  framework?: Framework;
  locale: Locale;
};

export function CodeSample({ id, framework }: CodeSampleProps) {
  const [codeBlocks, setCodeBlocks] = useState(null);

  useEffect(() => {
    const getBlocks = async () => {
      try {
        const topic = await getTopic(loader, {
          locale: ['en'],
          technique: id,
          frameworks: framework ? [framework] : undefined,
        });

        return topic.samples.map(sample => {
          // Inject `url` in metastring, used in `CodeBlockString` function
          const components = {
            code: props => {
              const urlMeta = `url="${sample.url}"`;
              const metastring = props.metastring ? `${props.metastring} ${urlMeta}` : urlMeta;

              return (
                <MDXCode {...props} metastring={metastring}>
                  {props.children}
                </MDXCode>
              );
            },
          };

          return {
            framework: sample.framework.id,
            label: sample.framework.label,
            locale: sample.locale,
            url: sample.url,
            content: <sample.content.default components={components} />,
          };
        });
      } catch (error) {
        console.error('Failed to import MDX content:', error);
        return [];
      }
    };

    const setBlocks = async () => {
      const codeBlocks = (await getBlocks()).filter(block => block);

      // Sort the code blocks according to the order in frameworks array
      const sortedCodeBlocks = [...codeBlocks].sort((a, b) => {
        const indexA = frameworks.indexOf(a.framework);
        const indexB = frameworks.indexOf(b.framework);
        return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
      });

      setCodeBlocks(sortedCodeBlocks);
    };

    setBlocks();
  }, []);

  if (codeBlocks) {
    const firstCodeBlock = codeBlocks[0];

    return (
      <div className={clsx(styles.codeSampleContainer, 'mt-10 mb-12 last:mb-0 md:mb-20')}>
        {codeBlocks.length > 1 && (
          <Tabs className={styles.codeSampleTabs} groupId="framework" queryString>
            {codeBlocks.map((codeBlock, index) => (
              <TabItem key={index} value={codeBlock.framework} label={codeBlock.label}>
                <div lang={codeBlock.locale}>
                  {codeBlock.content}
                </div>
              </TabItem>
            ))}
          </Tabs>
        )}
        {codeBlocks.length === 1 && firstCodeBlock.content}
      </div>
    );
  }
}
