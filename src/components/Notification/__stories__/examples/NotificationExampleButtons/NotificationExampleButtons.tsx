import './NotificationExampleButtons.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';

const cnNotificationExampleButtons = cn('NotificationExampleButtons');

const items: Item[] = [
  {
    key: 1,
    message: 'С этим сообщением нельзя не согласиться',
    status: 'info',
    actions: [
      {
        label: 'Согласен',
        onClick: () => {
          console.log('Согласен');
        },
      },
      {
        label: 'Не согласен',
        onClick: () => {
          console.log('Не согласен');
        },
      },
    ],
  },
];

export const NotificationExampleButtons: React.FC = () => {
  return (
    <div className={cnNotificationExampleButtons('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleButtons('Notification')} items={items} />
    </div>
  );
};
