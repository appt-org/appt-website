import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FloatingFocus = any;
let floatingFocusInstance: FloatingFocus;

export default function Root({ children }) {
  useEffect(() => {
    async function initFloatingFocus() {
      const FloatingFocus = (await import('@q42/floating-focus-a11y')).default;
      floatingFocusInstance = new FloatingFocus();
    }

    if (!floatingFocusInstance) {
      initFloatingFocus();
    }
  }, []);
  return <div className="font-rubik">{children}</div>;
}
