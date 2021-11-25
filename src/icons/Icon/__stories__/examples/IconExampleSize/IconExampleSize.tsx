import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import {Icon} from "nx-icon/lib";

export const IconExampleSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')} style={{fill: '#293468'}}>
    <Icon icon={"check-on"} size={"xxs"}/>
    <Icon icon={"check-on"} size={"xs"}/>
    <Icon icon={"check-on"} size={"s"}/>
    <Icon icon={"check-on"} size={"m"}/>
    <Icon icon={"check-on"} size={"l"}/>
  </StoryBookExample>
);
