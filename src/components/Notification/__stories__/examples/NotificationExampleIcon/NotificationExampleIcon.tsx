import './NotificationExampleIcon.css';

import React from 'react';

import {cnDocsDecorator} from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import {cn} from '../../../../../utils/bem';
import {Item, Notification} from '../../../Notification';
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";
import {IconWarning} from "../../../../../icons/IconWarning/IconWarning";
import {IconCheckC} from "../../../../../icons/IconCheckC/IconCheckC";
import {IconSettings} from "../../../../../icons/IconSettings/IconSettings";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {presetDatagram} from "../../../../Theme/presets/presetDatagram";
import {Theme} from "../../../../Theme/Theme";

const cnNotificationExampleIcon = cn('NotificationExampleIcon');

const items: Item[] = [
  {
    key: 1,
    title: 'Info',
    status: "info",
    message: 'Интернет внезапно кончился',
    icon: <IconInfo size={"m"}/>
  },
  {
    key: 2,
    title: 'Error',
    status: "error",
    message: 'Интернет внезапно кончился',
    icon: <IconWarning size={"m"}/>
  },
  {
    key: 3,
    title: 'Warning',
    status: "warning",
    message: 'Интернет внезапно кончился',
    icon: <IconInfo size={"m"}/>
  },
  {
    key: 4,
    title: 'Success',
    status: "success",
    message: 'Интернет внезапно кончился',
    icon: <IconCheckC size={"m"}/>
  },
  {
    key: 5,
    title: 'System',
    status: "system",
    message: 'Интернет внезапно кончился',
    icon: <IconSettings size={"m"}/>
  }
];

export const NotificationExampleIcon = () => {
  return (
    <Theme preset={presetDatagram}>
      <div className={cnNotificationExampleIcon('', [cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])])}>
        <Notification className={cnNotificationExampleIcon('Notification')} items={items}  />
      </div>
    </Theme>
  );
};
