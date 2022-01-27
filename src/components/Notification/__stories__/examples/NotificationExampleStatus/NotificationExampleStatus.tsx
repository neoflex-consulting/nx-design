import './NotificationExampleStatus.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';

const cnNotificationExampleStatus = cn('NotificationExampleStatus');

const items: Item[] = [
  {
    key: 1,
    message: 'Сообщение — normal',
    status: 'normal',
  },
  {
    key: 2,
    message: 'Ошибка — alert',
    status: 'alert',
  },
  {
    key: 3,
    message: 'Предупреждение — warning',
    status: 'warning',
  },
  {
    key: 4,
    message: 'Успех — success',
    status: 'success',
  },
  {
    key: 5,
    message: 'Системное — system',
    status: 'system',
  },
];

export const NotificationExampleStatus: React.FC = () => {
  return (
    <div className={cnNotificationExampleStatus('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleStatus('Notification')} items={items} />
    </div>
  );
};
