import './Notification-ActionButton.css';

import React from 'react';

import { Button } from '../../Button/Button';
import { cnNotification, NotificationPropItemAction } from '../Notification';

export type NotificationActionButtonProps = {
  actions: NotificationPropItemAction[];
};

export const NotificationActionButton: React.FC<NotificationActionButtonProps> = (props) => {
  const { actions } = props;

  if (actions.length < 1) {
    return null;
  }

  return (
    <div className={cnNotification('ActionButtonsWrapper')}>
      {actions.map((item, i) => (
        <Button
          className={cnNotification('ActionButton')}
          key={i}
          size="s"
          view={item.view || "primary"}
          label={item.label}
          iconLeft={item.iconLeft}
          iconSize={item.iconSize}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
