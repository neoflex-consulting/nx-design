import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography } from '../../../Typography';

export const TextExampleLabelAndData = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <div className={wp.decorator({ 'indent-b': 'm' })}>
        <Typography
          as="div"
          align="left"
          size="s"
          view="secondary"
          type="p"
        >
          ФИО
        </Typography>
        <Typography as="div" align="left" size="l" view="primary">
          Иванов Дмитрий Петрович
        </Typography>
      </div>
      <div className={wp.decorator({ 'indent-b': 'm' })}>
        <Typography
          as="div"
          align="left"
          size="s"
          view="secondary"
          type="p"
        >
          Должность
        </Typography>
        <Typography as="div" align="left" size="l" view="primary">
          Инженер по бурению
        </Typography>
      </div>
      <div className={wp.decorator({ 'indent-b': 'm' })}>
        <Typography
          as="div"
          align="left"
          size="s"
          view="secondary"
          type="p"
        >
          Подразделение
        </Typography>
        <Typography as="div" align="left" size="l" view="primary">
          Группа разведки и бурения
        </Typography>
      </div>
    </div>
  );
};
