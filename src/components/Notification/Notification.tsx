import './Notification.css';

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { IconProps } from '../../icons/_Icon/Icon';
import { cn } from '../../utils/bem';
import { cnForCssTransition } from '../../utils/cnForCssTransition';
import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';

import { NotificationItem } from './Item/Notification-Item';

export type NotificationPropItemAction = {
  label: string | number;
  onClick: React.EventHandler<React.MouseEvent>;
};

export const notificationItemStatus = ['basic', 'info', 'system', 'success', 'warning', 'error'] as const;
export type NotificationItemStatus = typeof notificationItemStatus[number];
export const notificationItemStatusDefault: NotificationItemStatus = notificationItemStatus[0];

export type Item = {
  key: string | number;
  message?: string | number;
  title?: string | number;
  status?: NotificationItemStatus;
  autoClose?: boolean | number;
  icon?: React.ReactNode | React.FC<IconProps>;
  actions?: NotificationPropItemAction[];
  onClose?: (item: Item) => void;
  onAutoClose?: (item: Item) => void;
};

type Props = {
  items: Item[];
  children?: never;
};

export type NotificationProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnNotification = cn('Notification');
export const cnNotificationItem = cn('Notification', 'Item');

const cssTransitionClassNames = cnForCssTransition(cnNotificationItem);

export const Notification: React.FC<NotificationProps> = (props) => {
  const { items, className, ...otherProps } = usePropsHandler(cnNotification(), props);

  return (
    <TransitionGroup {...otherProps} className={cnNotification(null, [className])} appear enter exit>
      {items.map((item) => {
        return (
          <CSSTransition classNames={cssTransitionClassNames} key={item.key} timeout={200}>
            <NotificationItem item={item} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
