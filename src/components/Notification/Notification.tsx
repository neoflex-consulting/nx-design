import './Notification.css';

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {IconComponent, IconProps, IconPropSize} from '../../icons/_Icon/Icon';
import { cn } from '../../utils/bem';
import { cnForCssTransition } from '../../utils/cnForCssTransition';
import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';

import { NotificationItem } from './Item/Notification-Item';
import {ButtonPropView} from "../Button/Button";

export type NotificationPropItemAction = {
  label: string | number;
  onClick: React.EventHandler<React.MouseEvent>;
  iconLeft?: IconComponent;
  iconSize?: IconPropSize;
  view?: ButtonPropView;
};

export const notificationItemStatus = ['info', 'system', 'success', 'warning', 'error'] as const;
export type NotificationItemStatus = typeof notificationItemStatus[number];
export const notificationItemStatusDefault: NotificationItemStatus = notificationItemStatus[0];

export const notificationItemView = ['outlined', 'filled'] as const;
export type NotificationItemView = typeof notificationItemView[number];
export const notificationItemViewDefault: NotificationItemView = notificationItemView[0];

export type Item = {
  key: string | number;
  message?: string | number;
  title?: string | number;
  status?: NotificationItemStatus
  view?: NotificationItemView;
  autoClose?: boolean | number;
  icon?: React.ReactNode | React.FC<IconProps>;
  actions?: NotificationPropItemAction[];
  onClose?: (item: Item) => void;
  withCloseButton?: boolean;
  onAutoClose?: (item: Item) => void;
  onlyMessage?: boolean;
};

type Props = {
  items: Item[];
  children?: never;
};

export type NotificationProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const COMPONENT_NAME = 'Notification' as const;
export const cnNotification = cn(COMPONENT_NAME);

export const cnNotificationItem = cn('Notification', 'Item');

const cssTransitionClassNames = cnForCssTransition(cnNotificationItem);

export const Notification: React.FC<NotificationProps> = (props) => {
  const { items, className, ...otherProps } = usePropsHandler(COMPONENT_NAME, props);

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
