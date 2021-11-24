import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import {NeoIcon} from "neo-icon/lib";

export const IconExampleSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')} style={{fill: '#293468'}}>
    <NeoIcon icon={"check-on"} size={"xxs"}/>
    <NeoIcon icon={"check-on"} size={"xs"}/>
    <NeoIcon icon={"check-on"} size={"s"}/>
    <NeoIcon icon={"check-on"} size={"m"}/>
    <NeoIcon icon={"check-on"} size={"l"}/>
  </StoryBookExample>
);
