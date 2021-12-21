import './colorConvert.stories.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { createMetadata } from '../../../utils/storybook';

import {ColorConvert} from "../colorConvert";


const cnColorConvertStoriesStories = cn('ColorConvertStories');
export function Playground() {
  return (
    <div className={cnColorConvertStoriesStories()}>
      <ColorConvert />
    </div>
  );
}

export default createMetadata({
  title: 'Helpers|/ColorConvert',
  id: 'Helpers|/ColorConvert',
});
