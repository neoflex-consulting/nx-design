import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { IconDataHistogram } from "../../../../IconDataHistogram/IconDataHistogram";

export const IconExampleViewAlert = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="alert" />
  </StoryBookExample>
);

export const IconExampleViewBrand = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="brand" />
  </StoryBookExample>
);

export const IconExampleViewGhost = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="ghost" />
  </StoryBookExample>
);

export const IconExampleViewLink = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="link" />
  </StoryBookExample>
);

export const IconExampleViewPrimary = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="primary" />
  </StoryBookExample>
);

export const IconExampleViewSecondary = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="secondary" />
  </StoryBookExample>
);

export const IconExampleViewWarning = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="warning" />
  </StoryBookExample>
);

export const IconExampleViewSuccess = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram view="success" />
  </StoryBookExample>
);

export const IconExampleViewCustom = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <IconDataHistogram style={{color: 'green'}}/>
    <div style={{display: "initial", color: 'green'}} >
      <IconDataHistogram/>
    </div>
  </StoryBookExample>
);
