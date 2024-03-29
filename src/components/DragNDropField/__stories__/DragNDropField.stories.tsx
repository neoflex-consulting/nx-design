import React, { useRef } from 'react';
import { array, boolean, number } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import { Attachment } from '../../Attachment/Attachment';
import { DragNDropField } from '../DragNDropField';

import mdx from './DragNDropField.docs.mdx';

export function Playground() {
  const ref = useRef(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const withCustomChildren = boolean('С кастомным контентом', false);
  return (
    <>
      <DragNDropField
        ref={ref}
        multiple={boolean('multiple', true)}
        accept={array('accept', ['image/*'])}
        maxSize={number('maxSize', 0)}
        onDropFiles={setFiles}
      >
        {withCustomChildren
          ? ({ openFileDialog }) => (
              <>
                Перетяните сюда
                <br />
                <br />
                <div>
                  <button type="button" onClick={openFileDialog}>
                    Выбрать файл
                  </button>{' '}
                  <button type="button" onClick={() => alert('Другое действие')}>
                    Другое действие
                  </button>
                </div>
                <br />
                <a href="#a">Ссылка</a>
              </>
            )
          : undefined}
      </DragNDropField>
      {files.map((file) => (
        <Attachment
          key={file.name}
          fileExtension={file.name.match(/\.(?!.*\.)(\w*)/)?.[1]}
          fileName={file.name}
          fileDescription={file.type}
        />
      ))}
    </>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/DragNDropField',
  id: 'components/DragNDropField',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
