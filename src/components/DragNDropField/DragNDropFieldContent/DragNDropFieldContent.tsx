import './DragNDropFieldContent.css';

import React from 'react';

import { IconAttach } from '../../../icons/IconAttach/IconAttach';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Typography } from '../../Typography/Typography';
import { DragNDropFieldChildrenRenderProp } from '../DragNDropField';

import { formatFileRequirements } from './formatFileRequirements';

const cnDragNDropFieldContent = cn('DragNDropFieldContent');

export const DragNDropFieldContent: DragNDropFieldChildrenRenderProp = ({
  accept,
  maxSize,
  multiple,
  openFileDialog,
}) => {
  const requirements = formatFileRequirements(accept, maxSize);
  const fileText = multiple ? 'файлы' : 'файл';

  return (
    <>
      <Typography view="secondary" size="body" align="center">
        Перетащите {fileText} сюда или&nbsp;загрузите по&nbsp;кнопке
        {requirements && (
          <>
            <br />
            {requirements}
          </>
        )}
      </Typography>
      <Button
        className={cnDragNDropFieldContent('Button')}
        label={`Выбрать ${fileText}`}
        iconLeft={IconAttach}
        view="ghost"
        size="s"
        onClick={openFileDialog}
      />
    </>
  );
};
