import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {ArrowLeft} from "../../../../../icons/ArrowLeft/ArrowLeft";
import {ArrowRight} from "../../../../../icons/ArrowRight/ArrowRight";
import {Menu} from "../../../../../icons/Menu/Menu";
import {Calendar} from "../../../../../icons/Calendar/Calendar";
import {Filter} from "../../../../../icons/Filter/Filter";

export function ButtonExampleIconBasic() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" iconLeft={ArrowLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" iconRight={ArrowRight} />
      </div>
    </div>
  );
}

export function ButtonExampleIconOnly() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={Menu} onlyIcon />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={Calendar} onlyIcon />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" view="ghost" iconRight={Filter} onlyIcon />
      </div>
    </div>
  );
}
