import './NotificationExampleStatus.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';

const cnNotificationExampleStatus = cn('NotificationExampleStatus');

const items: Item[] = [
  {
    key: 1,
    message: 'Сообщение — info',
    status: 'info',
    title: 'Info'
  },
  {
    key: 2,
    message: 'Ошибка — error',
    status: 'error',
    title: 'Error'
  },
  {
    key: 3,
    message: 'Предупреждение — warning',
    status: 'warning',
    title: 'Warning',
  },
  {
    key: 4,
    message: 'Успех — success',
    status: 'success',
    title: 'Success',
  },
  {
    key: 5,
    message: 'Системное — system',
    status: 'system',
    title: 'System',
  },
  {
    key: 6,
    message: 'Сообщение — basic',
    title: 'Basic'
  }
];

export const NotificationExampleStatus: React.FC = () => {
  return (
    <div className={cnNotificationExampleStatus('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleStatus('Notification')} items={items} />
    </div>
  );
};
