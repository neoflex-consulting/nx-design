import './NotificationExampleStatus.css';

import React from 'react';

import {cnDocsDecorator} from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import {cn} from '../../../../../utils/bem';
import {Item, Notification} from '../../../Notification';
import {presetDatagram, Theme} from "../../../../Theme/Theme";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";
import {IconWarning} from "../../../../../icons/IconWarning/IconWarning";
import {IconCheck} from "../../../../../icons/IconCheck/IconCheck";

const cnNotificationExampleStatus = cn('NotificationExampleStatus');

const items: Item[] = [
  {
    key: 1,
    message: 'This is dialog',
    status: 'info',
    title: 'Label Header',
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
  },
  {
    key: 2,
    message: 'Ошибка — error',
    status: 'error',
    title: 'Error',
    withCloseButton: true,
    icon: <IconWarning size={"m"}/>,
  },
  {
    key: 3,
    message: 'Предупреждение — warning',
    status: 'warning',
    title: 'Warning',
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
  },
  {
    key: 4,
    message: 'Успех — success',
    status: 'success',
    title: 'Success',
    withCloseButton: true,
    icon: <IconCheck size={"m"}/>,
  },
  {
    key: 5,
    message: 'Системное — system',
    status: 'system',
    title: 'System',
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
  },
];

export const NotificationExampleStatus: React.FC = () => {
  return (
    <Theme preset={presetDatagram}>
      <div className={cnNotificationExampleStatus('', [cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])])}>
        <Notification className={cnNotificationExampleStatus('Notification')} items={items}  />
      </div>
     </Theme>
  );
};
