import './NotificationExampleIcon.css';

import React from 'react';

import { IconDisconnection } from '../../../../../icons/IconDisconnection/IconDisconnection';
import { IconMoon } from '../../../../../icons/IconMoon/IconMoon';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';

const cnNotificationExampleIcon = cn('NotificationExampleIcon');

const items: Item[] = [
  {
    key: 1,
    message: 'Тихо, тигры спят!',
    status: 'alert',
    icon: IconMoon,
  },
  {
    key: 2,
    message: 'Интернет внезапно кончился',
    status: 'warning',
    icon: IconDisconnection,
  },
];

export const NotificationExampleIcon = () => {
  return (
    <div className={cnNotificationExampleIcon('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleIcon('Notification')} items={items} />
    </div>
  );
};
