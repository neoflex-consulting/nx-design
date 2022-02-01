import './NotificationExampleIcon.css';

import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Item, Notification } from '../../../Notification';
import {CheckStatus} from "../../../../../icons/CheckStatus/CheckStatus";
import {Info} from "../../../../../icons/Info/Info";
import {Warning} from "../../../../../icons/Warning/Warning";
import {CheckC} from "../../../../../icons/CheckC/CheckC";
import {Settings} from "../../../../../icons/Settings/Settings";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {Pin} from "../../../../../icons/Pin/Pin";

const cnNotificationExampleIcon = cn('NotificationExampleIcon');

const items: Item[] = [
  {
    key: 1,
    title: 'Info',
    status: "info",
    message: 'Интернет внезапно кончился',
    icon: <Info size={"l"}/> ,
  },
  {
    key: 2,
    title: 'Error',
    status: "error",
    message: 'Интернет внезапно кончился',
    icon: <Warning size={"l"}/> ,
  },
  {
    key: 3,
    title: 'Warning',
    status: "warning",
    message: 'Интернет внезапно кончился',
    icon: <Info size={"l"}/>  ,
  },
  {
    key: 4,
    title: 'Success',
    status: "success",
    message: 'Интернет внезапно кончился',
    icon: <CheckC size={"l"}/> ,
  },
  {
    key: 5,
    title: 'System',
    status: "system",
    message: 'Интернет внезапно кончился',
    icon: <Settings size={"l"}/>,
  },
  {
    key: 6,
    title: 'Basic',
    message: 'Интернет внезапно кончился',
    icon: <Pin size={"l"}/> ,
  },
  {
    key: 7,
    message: 'Без заголовка',
    icon: <CheckStatus size={"l"}/> ,
  }
];

export const NotificationExampleIcon = () => {
  return (
  <div className={cnNotificationExampleIcon('', [cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])])}>
      <Notification className={cnNotificationExampleIcon('Notification')} items={items} />
    </div>
  );
};
