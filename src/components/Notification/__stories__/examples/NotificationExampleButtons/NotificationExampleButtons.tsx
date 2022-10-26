import './NotificationExampleButtons.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';
import {IconCheck} from "../../../../../icons/IconCheck/IconCheck";
import {IconBlock} from "../../../../../icons/IconBlock/IconBlock";
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";

const cnNotificationExampleButtons = cn('NotificationExampleButtons');

const items: Item[] = [
  {
    key: 1,
    icon: <IconInfo size={"m"}/>,
    title: 'Это предлежение для вас',
    message: 'С ним нельзя не согласиться',
    status: 'info',
    actions: [
      {
        label: 'Да',
        onClick: () => {
          console.log('Да');
        },
        iconLeft: IconCheck,
      },
      {
        label: 'Нет',
        onClick: () => {
          console.log('Нет');
        },
        iconLeft: IconBlock,
        view: "secondary"
      }
    ],
    withCloseButton: true
  },
];

export const NotificationExampleButtons: React.FC = () => {
  return (
    <div className={cnNotificationExampleButtons('', [cnDocsDecorator('Section')])}>
      <Notification className={cnNotificationExampleButtons('Notification')} items={items} />
    </div>
  );
};
