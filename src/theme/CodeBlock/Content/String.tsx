import { usePrismTheme, useThemeConfig } from '@docusaurus/theme-common';
import {
  containsLineNumbers,
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import type { Props } from '@theme/CodeBlock/Content/String';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Line from '@theme/CodeBlock/Line';
import Link from '@docusaurus/Link';
import { Highlight, type Language } from 'prism-react-renderer';

import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';

const languageLabels = [
  { id: 'xml', label: 'XML' },
  { id: 'kotlin', label: 'Kotlin' },
  { id: 'jsx', label: 'JSX' },
  { id: 'tsx', label: 'TSX' },
  { id: 'xaml', label: 'XAML' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'swift', label: 'Swift' },
  { id: 'dart', label: 'Dart' },
  { id: 'csharp', label: 'C#' },
  { id: 'java', label: 'Java' },
  { id: 'json', label: 'JSON' },
  { id: 'md', label: 'Markdown' },
];

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language: string | undefined): string | undefined {
  return language?.toLowerCase();
}

const urlRegex = /url=['"](.*?)['"]/;

function parseUrl(metastring?: string): string {
  return metastring?.match(urlRegex)?.[1];
}

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}: Props): JSX.Element {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language = normalizeLanguage(languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage);

  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;

  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers = showLineNumbersProp ?? containsLineNumbers(metastring);

  const url = parseUrl(metastring);

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`,
      )}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      {language && (
        <label className="p-3 rounded-lg relative inline-block cursor-pointer hover:underline text-body bg-onsurface">
          {languageLabels.find(label => label.id === language)?.label || language}
        </label>
      )}
      <div className={styles.codeBlockContent}>
        <Highlight theme={prismTheme} code={code} language={(language ?? 'text') as Language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              tabIndex={0}
              ref={wordWrap.codeBlockRef}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={style}>
              <code className={clsx(styles.codeBlockLines, showLineNumbers && styles.codeBlockLinesWithNumbering)}>
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <div className={clsx(styles.buttonGroup, 'p-4')}>
          <CopyButton code={code} />

          {url && (
            <Link
              to={url}
              target="_blank"
              className={clsx('clean-btn', 'rounded-lg text-accent inline-flex items-center bg-onsurface p-3 ml-1')}>
              {translate({ id: 'theme.CodeBlock.contribute' })}
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
