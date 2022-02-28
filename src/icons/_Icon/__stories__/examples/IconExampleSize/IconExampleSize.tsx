import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import {IconDataHistogram} from "../../../../IconDataHistogram/IconDataHistogram";

export const IconExampleSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram size="xs" />
    <IconDataHistogram size="s" />
    <IconDataHistogram size="m" />
    <IconDataHistogram size="l" />
  </StoryBookExample>
);
