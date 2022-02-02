import './Notification.stories.css';

import * as React from 'react';
import {boolean, text} from '@storybook/addon-knobs';

import { IconProps } from '../../../icons/_Icon/Icon';
import { IconAdd } from '../../../icons/IconAdd/IconAdd';
import { IconAlert } from '../../../icons/IconAlert/IconAlert';
import { IconProcessing } from '../../../icons/IconProcessing/IconProcessing';
import { IconRing } from '../../../icons/IconRing/IconRing';
import { IconThumbUp } from '../../../icons/IconThumbUp/IconThumbUp';
import { cn } from '../../../utils/bem';
import { createMetadata } from '../../../utils/storybook';
import { Button } from '../../Button/Button';
import {
  eventInterceptorMap,
  EventInterceptorProvider,
} from '../../EventInterceptor/EventInterceptor';
import { Item, Notification, NotificationItemStatus } from '../Notification';

import mdx from './Notification.docs.mdx';

type State = Item[];
type Action = { type: 'add'; item: Item } | { type: 'remove'; key: number | string };

const defaultKnobs = () => ({
  title: text('title', 'Some title'),
  message: text('message', 'Hey there! I am Alert. Be ready to be informed :)'),
  withIcon: boolean('withIcon', false),
  withActionButtons: boolean('withActionButtons', false),
  withAutoClose: boolean('withAutoClose', false),
  withCloseButton: boolean('withCloseButton', true),
});

const getItemIconByStatus = (status: NotificationItemStatus): React.FC<IconProps> | undefined => {
  const mapIconByStatus: Record<NotificationItemStatus, React.FC<IconProps>> = {
    success: IconThumbUp,
    warning: IconAlert,
    error: IconAlert,
    system: IconProcessing,
    info: IconRing,
    basic: IconAlert
  };
  return mapIconByStatus[status];
};

const cnNotificationStories = cn('NotificationStories');

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return state.filter((item) => item.key !== action.key);
  }
}

export function Playground() {
  const { withIcon, withActionButtons, withAutoClose, withCloseButton, message, title } = defaultKnobs();
  const [items, dispatchItems] = React.useReducer(reducer, []);
  const generateHandleAdd = (status: NotificationItemStatus) => () => {
    const key = items.length + 1;
    const item: Item = {
      key,
      message: message,
      title: title,
      status,
      ...(withAutoClose && { autoClose: 5 }),
      ...(withIcon && { icon: getItemIconByStatus(status) }),
      ...(withActionButtons && {
        actions: [
          {
            label: 'Согласен',
            onClick: () => {
              console.log('Согласен');
            },
          },
          {
            label: 'Не согласен',
            onClick: () => {
              console.log('Не согласен');
            },
          },
        ],
      }),
      ...(withCloseButton && { onClose: () => dispatchItems({ type: 'remove', key }) }),
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
    <EventInterceptorProvider eventHandler={console.log} map={eventInterceptorMap}>
      <div className={cnNotificationStories()}>
        <div className={cnNotificationStories('Buttons')}>
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Выполненно"
            onClick={handleSuccessAdd}
          />
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Ошибка"
            onClick={handleAlertAdd}
          />
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Предупреждение"
            onClick={handleWarningAdd}
          />
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Системное"
            onClick={handleSystemAdd}
          />
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Нормальное"
            onClick={handleNormalAdd}
          />
          <Button
            className={cnNotificationStories('ButtonAdd')}
            iconLeft={IconAdd}
            view="ghost"
            size="s"
            width="full"
            label="Базовое"
            onClick={handleBasicAdd}
          />
        </div>
        <Notification className={cnNotificationStories('Notification')} items={items} />
      </div>
    </EventInterceptorProvider>
  );
}

export default createMetadata({
  title: 'Компоненты|/Обратная связь/Notification',
  id: 'components/Notification',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A11236',
    },
  },
});
