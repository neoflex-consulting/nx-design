import React from 'react';

import { cnNotification, NotificationProps } from '../../Notification/Notification';
import { EventInterceptorHandler, EventInterceptorPropComponent } from '../EventInterceptor';

export const useNotificationEventsHandler = (
  props: NotificationProps,
  handler: EventInterceptorHandler,
) => {
  const newProps = { ...props };

  React.useEffect(() => {
    if (newProps.items.length) {
      const value = {
        component: cnNotification() as EventInterceptorPropComponent,
        event: 'change',
        options: {
          pageURL: window.location.href,
          DOMRef: document.getElementsByClassName(cnNotification())[0],
          items: newProps.items,
        },
      };

      handler!(value);
    }
  }, [newProps.items.length]);

  return newProps;
};
