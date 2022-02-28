import './NotificationExampleWithButtons.css';

import React, { useReducer } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { IconPlus } from '../../../../../icons/IconPlus/IconPlus';
import { cn } from '../../../../../utils/bem';
import { Button } from '../../../../Button/Button';
import { Item, Notification, NotificationItemStatus } from '../../../Notification';
import {IconPin} from "../../../../../icons/IconPin/IconPin";
import {IconSettings} from "../../../../../icons/IconSettings/IconSettings";
import {IconCheckC} from "../../../../../icons/IconCheckC/IconCheckC";
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";
import {IconWarning} from "../../../../../icons/IconWarning/IconWarning";
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';

type State = Item[];
type Action = { type: 'add'; item: Item } | { type: 'remove'; key: number | string };

const cnNotificationExampleWithButtons = cn('NotificationExampleWithButtons');

const getItemIconByStatus = (status: NotificationItemStatus): React.FC<IconProps> | undefined => {
  const mapIconByStatus: Record<NotificationItemStatus, React.FC<IconProps>> = {
    success: IconCheckC,
    warning: IconInfo,
    error: IconWarning,
    system: IconSettings,
    info: IconInfo,
    basic: IconPin
  };
  return mapIconByStatus[status];
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return state.filter((item) => item.key !== action.key);
  }
}

export function NotificationExampleWithButtons() {
  const [items, dispatchItems] = useReducer(reducer, []);
  const generateHandleAdd = (status: NotificationItemStatus) => () => {
    const key = items.length + 1;
    const item: Item = {
      key,
      message: `Сообщение о каком-то событии - ${key}`,
      status,
      icon: getItemIconByStatus(status),
      onClose: () => dispatchItems({ type: 'remove', key }),
    };
    dispatchItems({ type: 'add', item });
  };

  const handleSuccessAdd = generateHandleAdd('success');
  const handleWarningAdd = generateHandleAdd('warning');
  const handleAlertAdd = generateHandleAdd('error');
  const handleSystemAdd = generateHandleAdd('system');
  const handleNormalAdd = generateHandleAdd('info');
  const handleBasicAdd = generateHandleAdd('basic');

  React.useEffect(() => handleNormalAdd(), []);

  return (
    <div className={cnNotificationExampleWithButtons('', [cnDocsDecorator('Section')])}>
      <div className={cnNotificationExampleWithButtons('Buttons')}>
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Выполненно"
          onClick={handleSuccessAdd}
        />
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Ошибка"
          onClick={handleAlertAdd}
        />
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Предупреждение"
          onClick={handleWarningAdd}
        />
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Системное"
          onClick={handleSystemAdd}
        />
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Нормальное"
          onClick={handleNormalAdd}
        />
        <Button
          className={cnNotificationExampleWithButtons('ButtonAdd')}
          iconLeft={IconPlus}
          label="Базовое"
          onClick={handleBasicAdd}
        />
      </div>
      <Notification className={cnNotificationExampleWithButtons('Notification')} items={items} />
    </div>
  );
}
