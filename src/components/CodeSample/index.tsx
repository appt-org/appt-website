import { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';

import styles from './styles.module.css';

export type CodeSampleProps = {
  id: string;
  platform?: string;
  locale: string;
};

export function CodeSample({ id, platform, locale }: CodeSampleProps) {
  const defaultPlatforms = ['android', 'ios', 'flutter', 'react-native', 'xamarin'];
  const platformLabels = [
    { id: 'android', label: 'Android' },
    { id: 'ios', label: 'iOS' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'react-native', label: 'React Native' },
    { id: 'xamarin', label: 'Xamarin' },
  ];
  const platforms = platform ? [platform] : defaultPlatforms;

  const [codeBlocks, setCodeBlocks] = useState(null);

  useEffect(() => {
    const getBlocks = async () => {
      try {
        const codeBlocks = [...platforms].map(async platform => {
          const currentLocale = locale || 'en';
          const module = await import(`@site/src/data/code-samples/${currentLocale}/${id}/${platform}.md`);

          return {
            platform,
            platformLabel: platformLabels.find(label => label.id === platform).label,
            CodeBlock: module.default,
          };
        });

        return Promise.all(codeBlocks);
      } catch (error) {
        console.error('Failed to import MDX content:', error);
      }
    };

    const setBlocks = async () => {
      const codeBlocks = await getBlocks();
      setCodeBlocks(codeBlocks);
    };

    setBlocks();
  }, []);

  if (codeBlocks) {
    const firstCodeBlock = codeBlocks[0];

    return (
      <div className={clsx(styles.codeSampleContainer, 'mt-10 mb-12 last:mb-0 md:mb-20')}>
        {codeBlocks.length > 1 && (
          <Tabs className={styles.codeSampleTabs} groupId="platform" queryString>
            {codeBlocks.map((codeBlock, index) => (
              <TabItem key={index} value={codeBlock.platform} label={codeBlock.platformLabel}>
                <codeBlock.CodeBlock />
              </TabItem>
            ))}
          </Tabs>
        )}
        {codeBlocks.length === 1 && <firstCodeBlock.CodeBlock />}
      </div>
    );
  }
}
