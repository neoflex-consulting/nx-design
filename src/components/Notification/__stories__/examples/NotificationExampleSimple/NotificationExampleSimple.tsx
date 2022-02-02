import './NotificationExampleSimple.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Notification } from '../../../Notification';

const cnNotificationExampleSimple = cn('NotificationExampleSimple');

const items = [
  {
    key: 1,
    message: 'Сообщение',
  },
];

export const NotificationExampleSimple = () => {
  return (
    <div className={cnNotificationExampleSimple('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleSimple('Notification')} items={items} />
    </div>
  );
};
