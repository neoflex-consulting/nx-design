import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {EveryUser, RightUser} from "@icon-park/react";
import {DownCircleOutlined, StepBackwardOutlined} from "@ant-design/icons";

export function ButtonExampleOtherIcons() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button
          iconLeft={<EveryUser theme="outline"/>}
          iconRight={<RightUser theme="outline"/>}
          label={'IconPark'}
        />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button
          iconLeft={<StepBackwardOutlined/>}
          iconRight={<DownCircleOutlined/>}
          label={'AntDesign'}
        />
      </div>
    </div>
  );
}
