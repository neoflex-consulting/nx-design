import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import {DataHistogram} from "../../../../DataHistogram/DataHistogram";

export const IconExampleSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram size="xs" />
    <DataHistogram size="s" />
    <DataHistogram size="m" />
  </StoryBookExample>
);
