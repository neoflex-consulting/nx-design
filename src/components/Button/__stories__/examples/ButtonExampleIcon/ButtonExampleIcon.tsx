import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {IconArrowLeft} from "../../../../../icons/IconArrowLeft/IconArrowLeft";
import {IconArrowRight} from "../../../../../icons/IconArrowRight/IconArrowRight";
import {IconMenu} from "../../../../../icons/IconMenu/IconMenu";
import {IconCalendar} from "../../../../../icons/IconCalendar/IconCalendar";
import {IconFilter} from "../../../../../icons/IconFilter/IconFilter";

export function ButtonExampleIconBasic() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" iconLeft={IconArrowLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" iconRight={IconArrowRight} />
      </div>
    </div>
  );
}

export function ButtonExampleIconOnly() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={IconMenu} onlyIcon />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={IconCalendar} onlyIcon />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" view="ghost" iconRight={IconFilter} onlyIcon />
      </div>
    </div>
  );
}
