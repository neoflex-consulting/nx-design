import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Attachment } from '../../../../Attachment/Attachment';
import { Typography } from '../../../../Typography/Typography';
import { DragNDropField } from '../../../DragNDropField';

export const DragNDropFieldExampleOnDropFiles = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <div>
        <DragNDropField multiple onDropFiles={setFiles}>
          <Typography>Перетяните файлы сюда</Typography>
        </DragNDropField>
      </div>
      <div>
        {files.map((file) => (
          <Attachment
            key={file.name}
            fileExtension={file.name.match(/\.(?!.*\.)(\w*)/)?.[1]}
            fileName={file.name}
            fileDescription={file.type}
          />
        ))}
      </div>
    </StoryBookExample>
  );
};
