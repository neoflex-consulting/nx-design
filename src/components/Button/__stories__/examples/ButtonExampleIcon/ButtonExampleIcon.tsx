import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {Icon} from "nx-icon/lib";

export function ButtonExampleIconBasic() {
  const iconLeft = <Icon icon={"arrow-left"}/>
  const iconRight = <Icon icon={"arrow-right"}/>
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
  const iconLeft = <Icon icon={"menu"}/>
  const iconLeft_ = <Icon icon={"calendar"}/>
  const iconRight = <Icon icon={"filter"}/>
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
