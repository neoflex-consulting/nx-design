import React from 'react';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import { Item, Notification } from '../../../Notification/Notification';
import { useNotificationEventsHandler } from '../useNotificationEventsHandler';

type Props = React.ComponentProps<typeof Notification>;

const testId = 'Notification';
const items: Item[] = [
  {
    key: 1,
    message: 'message',
    status: 'normal',
  },
];
const defaultProps = {
  items,
};

const eventHandler = jest.fn();
const renderComponent = (props: Props = defaultProps) => {
  return render(<Notification data-testid={testId} {...props} />);
};

describe('useNotificationEventsHandler', () => {
  const { result } = renderHook(() => useNotificationEventsHandler(defaultProps, eventHandler));

  it('возвращает пропсы в том же виде, что и получил', () => {
    let props = {};

    act(() => {
      props = result.current;
    });

    expect(props).toEqual(defaultProps);
  });

  it('при изменении items вызывается eventHandler', () => {
    renderComponent(result.current);

    expect(eventHandler).toHaveBeenCalledTimes(1);
  });
});
