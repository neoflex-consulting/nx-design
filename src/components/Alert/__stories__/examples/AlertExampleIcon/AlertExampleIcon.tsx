import React from 'react';

import { IconThumbUp } from '../../../../../icons/IconThumbUp/IconThumbUp';
import { IconTie } from '../../../../../icons/IconTie/IconTie';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Alert } from '../../../Alert';

export function AlertExampleIcon() {
  return (
    <div
      className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])}
    >
      <div className={cnDocsExample()}>
        <Alert label="Сообщение отправлено" view="outlined" status="success" icon={IconThumbUp} />
        <p className={cnDocsExample('Status', { view: 'right' })}>Правильно</p>
        <p className={cnDocsExample('Caption')}>Здесь графический элемент не спорит с окружением</p>
      </div>
      <div className={cnDocsExample()}>
        <Alert label="Сообщение отправлено" view="filled" status="success" icon={IconThumbUp} />
        <p className={cnDocsExample('Status', { view: 'right' })}>Правильно</p>
        <p className={cnDocsExample('Caption')}>Здесь графический элемент не спорит с окружением</p>
      </div>
      <div className={cnDocsExample()}>
        <Alert label="Вы вошли без галстука" view="bordered" status="error" icon={IconTie} />
        <p className={cnDocsExample('Status', { view: 'wrong' })}>Неправильно</p>
        <p className={cnDocsExample('Caption')}>
          Здесь уже есть один графический элемент — цветная полоска слева. Иконка не нужна
        </p>
      </div>
    </div>
  );
}
