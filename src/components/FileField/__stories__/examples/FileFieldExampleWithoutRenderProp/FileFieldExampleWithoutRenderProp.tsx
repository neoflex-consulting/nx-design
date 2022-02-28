import React from 'react';

import { IconPlus } from '../../../../../icons/IconPlus/IconPlus';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Typography } from '../../../../Typography/Typography';
import { FileField } from '../../../FileField';

export function FileFieldExampleWithoutRenderProp() {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <FileField id="FileFieldExampleWithoutRenderProp">
        <Typography>Нажми меня</Typography>
      </FileField>
    </StoryBookExample>
  );
}

export function FileFieldExampleWithoutRenderPropIcon() {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <FileField id="FileFieldExampleWithoutRenderPropIcon">
        <IconPlus view="alert" />
      </FileField>
    </StoryBookExample>
  );
}
