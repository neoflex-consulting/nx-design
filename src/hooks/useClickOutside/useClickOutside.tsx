import { RefObject, useEffect } from 'react';

export type ClickOutsideHandler = (event: MouseEvent) => void;

type UseClickOutsideProps = {
  isActive: boolean;
  ignoreClicksInsideRefs: ReadonlyArray<RefObject<HTMLElement>>;
  handler: ClickOutsideHandler;
};

export function useClickOutside({
  isActive,
  ignoreClicksInsideRefs,
  handler,
}: UseClickOutsideProps): void {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      handler(event)
    };
    document.addEventListener('mousedown', handleClick);

    const handleClickTab = (event: any) => {
      if (event.code === 'Tab' || event.code === 'Enter' || event.code === 'NumpadEnter') {
        handler(event);
      }
    };
    document.addEventListener('keydown', handleClickTab);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleClickTab);
    }
  }, [isActive, ignoreClicksInsideRefs, handler]);
}
