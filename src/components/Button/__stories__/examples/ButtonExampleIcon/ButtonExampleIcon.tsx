import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {NeoIcon} from "neo-icon";

export function ButtonExampleIconBasic() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" iconLeft={<NeoIcon icon={"arrow-left"} color={'white'}/>} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" iconRight={<NeoIcon icon={"arrow-right"} color={'white'}/>} />
      </div>
    </div>
  );
}

export function ButtonExampleIconOnly() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={<NeoIcon icon={"menu"} />} onlyIcon />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={<NeoIcon icon={"calendar"} />} onlyIcon />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" view="ghost" iconRight={<NeoIcon icon={"filter"} />} onlyIcon />
      </div>
    </div>
  );
}
