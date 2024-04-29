import type { Props } from '@theme/MDXComponents/Ul';
import clsx from 'clsx';

function transformUlClassName(className?: string): string | undefined {
  return clsx(
    'list-disc ml-7',
    className,
    // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') ? 'list-none' : 'list-disc',
  );
}

export default function MDXUl(props: Props): JSX.Element {
  return <ul {...props} className={transformUlClassName(props.className)} />;
}
