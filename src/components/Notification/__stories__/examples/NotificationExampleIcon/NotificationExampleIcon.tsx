import './NotificationExampleIcon.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';
import {IconCheckStatus} from "../../../../../icons/IconCheckStatus/IconCheckStatus";
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";
import {IconWarning} from "../../../../../icons/IconWarning/IconWarning";
import {IconCheckC} from "../../../../../icons/IconCheckC/IconCheckC";
import {IconSettings} from "../../../../../icons/IconSettings/IconSettings";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {IconPin} from "../../../../../icons/IconPin/IconPin";

const cnNotificationExampleIcon = cn('NotificationExampleIcon');

const items: Item[] = [
  {
    key: 1,
    title: 'Info',
    status: "info",
    message: 'Интернет внезапно кончился',
    icon: <IconInfo size={"l"}/> ,
  },
  {
    key: 2,
    title: 'Error',
    status: "error",
    message: 'Интернет внезапно кончился',
    icon: <IconWarning size={"l"}/> ,
  },
  {
    key: 3,
    title: 'Warning',
    status: "warning",
    message: 'Интернет внезапно кончился',
    icon: <IconInfo size={"l"}/>  ,
  },
  {
    key: 4,
    title: 'Success',
    status: "success",
    message: 'Интернет внезапно кончился',
    icon: <IconCheckC size={"l"}/> ,
  },
  {
    key: 5,
    title: 'System',
    status: "system",
    message: 'Интернет внезапно кончился',
    icon: <IconSettings size={"l"}/>,
  },
  {
    key: 6,
    title: 'Basic',
    message: 'Интернет внезапно кончился',
    icon: <IconPin size={"l"}/> ,
  },
  {
    key: 7,
    message: 'Без заголовка',
    icon: <IconCheckStatus size={"l"}/> ,
  }
];

export const NotificationExampleIcon = () => {
  return (
  <div className={cnNotificationExampleIcon('', [cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])])}>
      <Notification className={cnNotificationExampleIcon('Notification')} items={items} />
    </div>
  );
};
