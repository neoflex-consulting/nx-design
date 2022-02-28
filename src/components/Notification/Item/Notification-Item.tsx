import '../../Theme/_color/Theme_color_gpnDefault.css';
import './Notification-Item.css';

import React, { useEffect, useState } from 'react';

import { IconClose } from '../../../icons/IconClose/IconClose';
import {Button} from '../../Button/Button';
import { Typography } from '../../Typography/Typography';
import { cnTheme } from '../../Theme/Theme';
import { NotificationActionButton } from '../ActionButton/Notification-ActionButton';
import {cnNotification, cnNotificationItem, Item, notificationItemStatusDefault} from '../Notification';
import { NotificationTimer, NotificationTimerPropOnMount } from '../Timer/Notification-Timer';

export type NotificationItemProps = {
  item: Item;
};

const defaultInitialTimerTime = 3;

const getAutoCloseTime = (autoClose: boolean | number | undefined): number | false => {
  if (autoClose) {
    if (typeof autoClose === 'number') {
      return autoClose;
    }
    return defaultInitialTimerTime;
  }
  return false;
};

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { item } = props;
  const {
    onClose,
    autoClose,
    icon,
    message,
    title,
    actions,
    status = notificationItemStatusDefault,
    onAutoClose: onAutoCloseProp,
  } = item;
  const [timerFunctions, setTimerFunctions] = useState<{
    start: () => void;
    pause: () => void;
  } | null>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [timeIsOver, setTimeIsOver] = useState<boolean>(false);
  const handleMountTimer: NotificationTimerPropOnMount = (timerFunctions) =>
    setTimerFunctions(timerFunctions);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const autoCloseTime = getAutoCloseTime(autoClose);
  const onAutoClose = (item: Item) => {
    if (onAutoCloseProp) {
      onAutoCloseProp(item);
    } else {
      onClose && onClose(item);
    }
  };

  useEffect(() => {
    if (!timeIsOver) {
      if (hover) {
        timerFunctions && timerFunctions.pause();
      } else {
        timerFunctions && timerFunctions.start();
      }
    }
  }, [hover, timeIsOver, timerFunctions]);

  const handleTimeIsOver = () => {
    setTimeIsOver(true);
    onAutoClose(item);
  };

  const handleClose = onClose ? () => onClose(item) : undefined;

  const Icon: any = item.icon;

  return (
    <div
      className={cnNotificationItem({ status }, [cnTheme({ color: 'gpnDefault' })])}
      onMouseEnter={autoCloseTime ? handleMouseEnter : undefined}
      onMouseLeave={autoCloseTime ? handleMouseLeave : undefined}
    >
      {autoCloseTime && (
        <NotificationTimer
          onMount={handleMountTimer}
          onTimeIsOver={handleTimeIsOver}
          startTime={autoCloseTime}
        />
      )}
      {!autoCloseTime && Icon && !React.isValidElement(icon) && <Icon className={cnNotification('Icon')} size="l" />}
      {!autoCloseTime && Icon && React.isValidElement(icon) && <span className={cnNotification('Icon')}> {icon} </span>}
      <div className={cnNotification('Content')}>
        {title && (
          <Typography className={cnNotification('Title')} weight="bold">
            {title}
          </Typography>
        )}
        {message && (
          <Typography className={cnNotification('Message')}>
            {message}
          </Typography>
        )}
        {actions && <NotificationActionButton actions={actions} />}
      </div>
      {onClose && (
        <Button
          className={cnNotification('CloseButton')}
          view="ghost"
          iconLeft={IconClose}
          form="round"
          size="l"
          onClick={handleClose}
        />
      )}
    </div>
  );
};
