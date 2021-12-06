import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { DataHistogram } from "../../../../DataHistogram/DataHistogram";
import {Button} from "../../../../../components/Button/Button";
import {Edit} from "../../../../Edit/Edit";

export const IconExampleViewAlert = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="alert" />
  </StoryBookExample>
);

export const IconExampleViewBrand = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="brand" />
  </StoryBookExample>
);

export const IconExampleViewGhost = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="ghost" />
  </StoryBookExample>
);

export const IconExampleViewLink = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="link" />
  </StoryBookExample>
);

export const IconExampleViewPrimary = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="primary" />
  </StoryBookExample>
);

export const IconExampleViewSecondary = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="secondary" />
  </StoryBookExample>
);

export const IconExampleViewWarning = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="warning" />
  </StoryBookExample>
);

export const IconExampleViewSuccess = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram view="success" />
  </StoryBookExample>
);

export const IconExampleViewCustom = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <DataHistogram style={{color: 'green'}}/>
    <div style={{display: "initial", color: 'green'}} >
      <DataHistogram/>
    </div>
  </StoryBookExample>
);
