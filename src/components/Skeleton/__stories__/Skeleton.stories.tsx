import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { createMetadata, createStory } from '../../../utils/storybook';
import { Grid } from '../../Grid/Grid';
import {
  Typography,
  textPropSize,
  textPropSizeDefault,
} from '../../Typography/Typography';
import { SkeletonBrick } from '../Skeleton';
import { SkeletonCircle } from '../SkeletonCircle/SkeletonCircle';
import { SkeletonText } from '../SkeletonText/SkeletonText';

import mdx from './Skeleton.docs.mdx';

export const SkeletonBrickStory = createStory(
  () => <SkeletonBrick width={text('width', '100%')} height={text('height', '100px')} />,
  {
    name: 'SkeletonBrick',
  },
);

export const SkeletonCircleStory = createStory(() => <SkeletonCircle size={number('size', 48)} />, {
  name: 'SkeletonCircle',
});

export const SkeletonTextStory = createStory(
  () => {
    const rows = number('rows', 4);
    const fontSize = select('fontSize', textPropSize, textPropSizeDefault);
    const showText = boolean('Показать текст для сравнения размеров', false);

    const skeletonText = <SkeletonText rows={rows} fontSize={fontSize} />;

    return showText ? (
      <Grid cols={2} gap="6xl">
        {skeletonText}
        <div>
          {new Array(rows).fill(null).map(() => (
            <Typography size={fontSize} >
              Lorem ipsum
            </Typography>
          ))}
        </div>
      </Grid>
    ) : (
      skeletonText
    );
  },
  {
    name: 'SkeletonText',
  },
);

export default createMetadata({
  title: 'Компоненты|/Отображение данных/Skeleton',
  id: 'components/Skeleton',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
