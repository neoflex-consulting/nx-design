import React from 'react';
import { action } from '@storybook/addon-actions';

import { IconDocRightClose } from '../../../../../icons/IconDocRightClose/IconDocRightClose';
import { IconWifi } from '../../../../../icons/IconWifi/IconWifi';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Tag } from '../../../Tag';

const emptyFunction = action('emptyFunction');

export const TagExampleIcon = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <Tag onClick={emptyFunction} icon={IconDocRightClose} label="Луна" />
    <Tag onClick={emptyFunction} icon={IconWifi} label="Солнце" />
  </StoryBookExample>
);
