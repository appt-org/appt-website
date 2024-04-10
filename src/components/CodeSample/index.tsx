import { useEffect, useState } from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';

import styles from './styles.module.css';

export type CodeSampleProps = {
  id: string;
  platformId?: string[];
  locale: string;
};

export function CodeSample({ id, platformId, locale }: CodeSampleProps) {
  const defaultPlatforms = [
    "Android",
    "iOS",
    "Flutter",
    "react-native",
    "Xamarin",
  ];
  const platformLabels = [
    { id: "Android", label: "Android" },
    { id: "iOS", label: "iOS" },
    { id: "Flutter", label: "Flutter" },
    { id: "react-native", label: "React Native" },
    { id: "Xamarin", label: "Xamarin" }
  ];
  const platforms = platformId || defaultPlatforms;

  const [codeBlocks, setCodeBlocks] = useState(null);

  useEffect(() => {
    const getBlocks = async () => {
      try {
        const codeBlocks = [...platforms].map(async (platform) => {
          const module = await import(
            `@site/src/data/code-samples/${locale}/${id}/${platform.toLocaleLowerCase()}.md`
          );

          return {
            platform,
            platformLabel: platformLabels.find((label) => label.id === platform).label,
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
    }

    setBlocks();
  }, []);


  if (codeBlocks) {
    return (
      <div className={clsx(styles.codeSampleContainer, 'mt-10 mb-12 last:mb-0 md:mb-20')}>
        <Tabs className={styles.codeSampleTabs} groupId="platform">
          {codeBlocks.map((codeBlock, index) => (
            <TabItem key={index} value={codeBlock.platform} label={codeBlock.platformLabel}>
              <codeBlock.CodeBlock />
            </TabItem>
          ))}
      </Tabs>
    </div>
    )
  }
}
