import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Typography } from '../../../../Typography/Typography';
import { DragNDropField } from '../../../DragNDropField';

import imageFile from './images/too_big_file.png';

export default {
  title: 'Ошибка: файл слишком большой',
};

const image = {
  src: imageFile,
  alt: 'Ошибка: файл слишком большой',
};

export const DragNDropFieldExampleMaxSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <div>
      <DragNDropField maxSize={1 * 1024 * 1024} onDropFiles={(files) => console.log(files)}>
        <Typography>Сюда можно перетаскивать файлы</Typography>
        <Typography>размером 1 Мб или меньше</Typography>
      </DragNDropField>
    </div>
  </StoryBookExample>
);

export const DragNDropFieldExampleMaxSizeError = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <div>
      <img src={image.src} alt={image.alt} style={{ maxWidth: 700 }} />
    </div>
  </StoryBookExample>
);
