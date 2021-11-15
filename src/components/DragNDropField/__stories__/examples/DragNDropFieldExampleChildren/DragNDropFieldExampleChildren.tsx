import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Button } from '../../../../Button/Button';
import { Typography } from '../../../../Typography/Typography';
import { DragNDropField } from '../../../DragNDropField';

export const DragNDropFieldExampleRenderProps = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <div>
      <DragNDropField onDropFiles={(files) => console.log(files)}>
        {({ openFileDialog }) => (
          <>
            <Typography>Пример с Render Props,</Typography>
            <Typography>открывает окно для выбора файла из дочернего контента</Typography>
            <br />
            <Button onClick={openFileDialog} label="Выбрать файл" />
          </>
        )}
      </DragNDropField>
    </div>
  </StoryBookExample>
);

export const DragNDropFieldExampleChildren = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <div>
      <DragNDropField onDropFiles={(files) => console.log(files)}>
        <Typography>Здесь просто текст</Typography>
      </DragNDropField>
    </div>
  </StoryBookExample>
);

export const DragNDropFieldExampleEmpty = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <div>
      <DragNDropField onDropFiles={(files) => console.log(files)} />
    </div>
  </StoryBookExample>
);
