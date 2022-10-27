import './NotificationExampleTimer.css';

import React, {useReducer} from 'react';
import {IconPlus} from '../../../../../icons/IconPlus/IconPlus';
import {cnDocsDecorator} from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import {cn} from '../../../../../utils/bem';
import {Button} from '../../../../Button/Button';
import {Item, Notification} from '../../../Notification';
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";

const cnNotificationExampleTimer = cn('NotificationExampleTimer');

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
  const [items, dispatchItems] = useReducer<React.Reducer<Item[], { type: 'add' | 'remove'; item: Item; key?: number | string }>>(reducer, []);
  const generateHandleAdd = (withAutoCloseTimer: boolean) => () => {
    const key = items.length + 1;
    const item: Item = {
      title: 'Работа таймера',
      key,
      message: `Через 5 секунд закроется уведомление № ${key}`,
      icon: <IconInfo/>,
      onClose: () => dispatchItems({ type: 'remove', item, key }),
      autoClose: 5,
      withAutoCloseTimer: withAutoCloseTimer
    };
    dispatchItems({ type: 'add', item });
  };

  const handleAlertAdd = generateHandleAdd( true);
  const handleNormalAdd = generateHandleAdd(false);

  React.useEffect(() => handleNormalAdd(), []);

  return (
    <div className={cnNotificationExampleTimer('', [cnDocsDecorator('Section')])}>
      <div className={cnNotificationExampleTimer('Buttons')}>
        <Button
          className={cnNotificationExampleTimer('ButtonAdd')}
          iconLeft={IconPlus}
          label="Со свойством withAutoCloseTimer"
          onClick={handleNormalAdd}
        />
        <Button
          className={cnNotificationExampleTimer('ButtonAdd')}
          iconLeft={IconPlus}
          label="Со своей иконкой"
          onClick={handleAlertAdd}
        />
      </div>
      <Notification className={cnNotificationExampleTimer('Notification')} items={items} />
    </div>
  );
};
