import './NotificationExampleView.css';

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

const itemsFilled: Item[] = [
  {
    key: 1,
    message: 'Сообщение — info',
    status: 'info',
    view: "filled",
    withCloseButton: true,
    icon: <IconInfo size={"xs"}/>
  },
  {
    key: 2,
    message: 'Ошибка — error',
    status: 'error',
    view: "filled",
    withCloseButton: true,
    icon: <IconWarning size={"xs"}/>
  },
  {
    key: 3,
    message: 'Предупреждение — warning',
    status: 'warning',
    view: "filled",
    withCloseButton: true,
    icon: <IconInfo size={"xs"}/>
  },
  {
    key: 4,
    message: 'Успех — success',
    status: 'success',
    view: "filled",
    withCloseButton: true,
    icon: <IconCheck size={"xs"}/>
  },
  {
    key: 5,
    message: 'Системное — system',
    status: 'system',
    view: "filled",
    withCloseButton: true,
    icon: <IconInfo size={"xs"}/>
  },
];

const itemsOutlined: Item[] = [
  {
    key: 1,
    message: 'Сообщение — info',
    status: 'info',
    view: "outlined",
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
    onlyMessage: true
  },
  {
    key: 2,
    message: 'Ошибка — error',
    status: 'error',
    view: "outlined",
    withCloseButton: true,
    icon: <IconWarning size={"m"}/>,
    onlyMessage: true
  },
  {
    key: 3,
    message: 'Предупреждение — warning',
    status: 'warning',
    view: "outlined",
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
    onlyMessage: true
  },
  {
    key: 4,
    message: 'Успех — success',
    status: 'success',
    view: "outlined",
    withCloseButton: true,
    icon: <IconCheck size={"m"}/>,
    onlyMessage: true
  },
  {
    key: 5,
    message: 'Системное — system',
    status: 'system',
    view: "outlined",
    withCloseButton: true,
    icon: <IconInfo size={"m"}/>,
    onlyMessage: true
  },
];

export const NotificationExampleView: React.FC = () => {
  return (
    <Theme preset={presetDatagram}>
      <div className={cnNotificationExampleStatus('', [cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])])}>
        <Notification className={cnNotificationExampleStatus('Notification')} items={itemsOutlined}  />
        <Notification className={cnNotificationExampleStatus('Notification')} items={itemsFilled}  />
      </div>
    </Theme>
  );
};
