import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {NeoIcon} from "neo-icon/lib";

export function ButtonExampleIconBasic() {
  const iconLeft = <NeoIcon icon={"arrow-left"}/>
  const iconRight = <NeoIcon icon={"arrow-right"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" iconLeft={iconLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" iconRight={iconRight} />
      </div>
    </div>
  );
}

export function ButtonExampleIconOnly() {
  const iconLeft = <NeoIcon icon={"menu"}/>
  const iconLeft_ = <NeoIcon icon={"calendar"}/>
  const iconRight = <NeoIcon icon={"filter"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={iconLeft} onlyIcon />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Назад" view="ghost" iconLeft={iconLeft_} onlyIcon />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Вперёд" view="ghost" iconRight={iconRight} onlyIcon />
      </div>
    </div>
  );
}
