import React from 'react';
import { action } from '@storybook/addon-actions';

import { DocRightClose } from '../../../../../icons/DocRightClose/DocRightClose';
import { Wifi } from '../../../../../icons/Wifi/Wifi';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Tag } from '../../../Tag';

const emptyFunction = action('emptyFunction');

export const TagExampleIcon = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <Tag onClick={emptyFunction} icon={DocRightClose} label="Луна" />
    <Tag onClick={emptyFunction} icon={Wifi} label="Солнце" />
  </StoryBookExample>
);
