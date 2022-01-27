import './NotificationExampleTimer.css';

import React, { useReducer } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { IconAdd } from '../../../../../icons/IconAdd/IconAdd';
import { IconAlert } from '../../../../../icons/IconAlert/IconAlert';
import { IconRing } from '../../../../../icons/IconRing/IconRing';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cn } from '../../../../../utils/bem';
import { Button } from '../../../../Button/Button';
import { Item, Notification, NotificationItemStatus } from '../../../Notification';

const cnNotificationExampleTimer = cn('NotificationExampleTimer');

const mapIconByStatus: Record<NotificationItemStatus, React.FC<IconProps> | undefined> = {
  alert: IconAlert,
  normal: IconRing,
  system: undefined,
  success: undefined,
  warning: undefined,
};

const getItemIconByStatus = (status: NotificationItemStatus): React.FC<IconProps> | undefined =>
  mapIconByStatus[status];

function reducer(
  state: Item[],
  action: { type: 'add' | 'remove'; item: Item; key?: number | string },
): Item[] {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return state.filter((item) => item.key !== action.key);
  }
}

export const NotificationExampleTimer: React.FC = () => {
  const [items, dispatchItems] = useReducer<
    React.Reducer<Item[], { type: 'add' | 'remove'; item: Item; key?: number | string }>
  >(reducer, []);
  const generateHandleAdd = (status: NotificationItemStatus) => () => {
    const key = items.length + 1;
    const item: Item = {
      key,
      message: `Сейчас эта штука закроется ${key}`,
      status,
      icon: getItemIconByStatus(status),
      onClose: () => dispatchItems({ type: 'remove', item, key }),
      autoClose: 5,
    };
    dispatchItems({ type: 'add', item });
  };

  const handleAlertAdd = generateHandleAdd('alert');
  const handleNormalAdd = generateHandleAdd('normal');

  React.useEffect(() => handleNormalAdd(), []);

  return (
    <div className={cnNotificationExampleTimer('', [cnDocsDecorator('Section')])}>
      <div className={cnNotificationExampleTimer('Buttons')}>
        <Button
          className={cnNotificationExampleTimer('ButtonAdd')}
          iconLeft={IconAdd}
          label="Обычный таймер"
          onClick={handleNormalAdd}
        />
        <Button
          className={cnNotificationExampleTimer('ButtonAdd')}
          iconLeft={IconAdd}
          label="Тревожный таймер"
          onClick={handleAlertAdd}
        />
      </div>
      <Notification className={cnNotificationExampleTimer('Notification')} items={items} />
    </div>
  );
};
