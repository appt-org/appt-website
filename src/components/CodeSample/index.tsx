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

export function CodeSample({ id, platform }: CodeSampleProps) {
  const defaultPlatforms = [
    'android',
    'jetpack-compose',
    'ios',
    'swiftui',
    'flutter',
    'react-native',
    'net-maui',
    'xamarin',
  ];
  const platformLabels = [
    { id: 'android', label: 'Android' },
    { id: 'jetpack-compose', label: 'Jetpack Compose' },
    { id: 'ios', label: 'iOS' },
    { id: 'swiftui', label: 'SwiftUI' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'react-native', label: 'React Native' },
    { id: 'net-maui', label: '.NET MAUI' },
    { id: 'xamarin', label: 'Xamarin' },
  ];
  const platforms = platform ? [platform] : defaultPlatforms;

  const [codeBlocks, setCodeBlocks] = useState(null);

  useEffect(() => {
    const getBlocks = async () => {
      const codeBlocks = [...platforms].map(async platform => {
        try {
          const module = await import(`@site/src/data/code-samples/en/${id}/${platform}.md`);

          return {
            platform,
            platformLabel: platformLabels.find(label => label.id === platform).label,
            CodeBlock: module.default,
          };
        } catch (error) {
          console.error('Failed to import MDX content:', error);
        }
      });

      return Promise.all(codeBlocks);
    };

    const setBlocks = async () => {
      const codeBlocks = (await getBlocks()).filter(block => block);
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
