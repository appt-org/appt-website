import { useEffect, useState } from 'react';
import MDXCode from '@theme/MDXComponents/Code'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';
import React from 'react';
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
          const url = `https://github.com/appt-org/appt-website/tree/develop/src/data/code-samples/en/${id}/${platform}.md?plain=1`

          // Inject `url` in metastring, used in `CodeBlockString` function
          const components = {
            code: (props) => {
              const urlMeta = `url="${url}"`
              const metastring = props.metastring ? `${props.metastring} ${urlMeta}` : urlMeta

              return <MDXCode {...props} metastring={metastring}>
                {props.children}
              </MDXCode>
            }
          }

          return {
            platform: platform,
            label: platformLabels.find(label => label.id === platform).label,
            url: url,
            content: <module.default components={components}/>
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
              <TabItem key={index} value={codeBlock.platform} label={codeBlock.label}>
                {codeBlock.content}
              </TabItem>
            ))}
          </Tabs>
        )}
        {codeBlocks.length === 1 && firstCodeBlock.content}
      </div>
    );
  }
}
