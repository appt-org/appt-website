import { CloseIcon } from '@site/src/icons';
import type { Props } from '@theme/Icon/Close';

export default function IconClose({ ...restProps }: Props): JSX.Element {
  return <CloseIcon className="h-8 w-8 text-body" {...restProps} />;
}
