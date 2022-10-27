import './NotificationExampleHiddenMessage.css';

import React, {useReducer} from 'react';
import {IconPlus} from '../../../../../icons/IconPlus/IconPlus';
import {cnDocsDecorator} from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import {cn} from '../../../../../utils/bem';
import {Button} from '../../../../Button/Button';
import {Item, Notification} from '../../../Notification';
import {IconInfo} from "../../../../../icons/IconInfo/IconInfo";

const cnNotificationExampleHiddenMessage = cn('NotificationExampleHiddenMessage');

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

export const NotificationExampleHiddenMessage: React.FC = () => {
  const [items, dispatchItems] = useReducer<React.Reducer<Item[], { type: 'add' | 'remove'; item: Item; key?: number | string }>>(reducer, []);
  const generateHandleAdd = (titleButtonMoreOn: string | undefined, titleButtonMoreOff: string | undefined) => () => {

    const key = items.length + 1;
    const item: Item = {
      title: 'Работа с сообщением',
      key,
      message: `Это сообщение слишком большое. Его нужно сократить, чтобы не нагромождать пространство на странице и не отвлекать пользователя от задач, которые он пришел решить на этой странице. И еще много всего.`,
      icon: <IconInfo/>,
      onClose: () => dispatchItems({ type: 'remove', item, key }),
      withCloseButton: true,
      hiddenMessage: true,
      titleButtonMoreOff: titleButtonMoreOff,
      titleButtonMoreOn: titleButtonMoreOn,
      autoClose: 5
    };
    dispatchItems({ type: 'add', item });
  };

  const handleAlertAdd = generateHandleAdd(undefined, undefined);
  const handleNormalAdd = generateHandleAdd('Покажи мне это', 'Скрой всё с глаз');

  React.useEffect(() => handleNormalAdd(), []);

  return (
    <div className={cnNotificationExampleHiddenMessage('', [cnDocsDecorator('Section')])}>
      <div className={cnNotificationExampleHiddenMessage('Buttons')}>
        <Button
          className={cnNotificationExampleHiddenMessage('ButtonAdd')}
          iconLeft={IconPlus}
          label="Сокращение сообщения"
          onClick={handleAlertAdd}
        />
        <Button
          className={cnNotificationExampleHiddenMessage('ButtonAdd')}
          iconLeft={IconPlus}
          label="Изменение кнопки"
          onClick={handleNormalAdd}
        />
      </div>
      <Notification className={cnNotificationExampleHiddenMessage('Notification')} items={items} />
    </div>
  );
};
