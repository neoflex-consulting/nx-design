import './TableFilterContainer.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Typography } from '../../Typography/Typography';

const cnTableFilterContainer = cn('TableFilterContainer');

export type TableFilterContainerProps = {
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  className?: string;
};

export const TableFilterContainer: React.FC<TableFilterContainerProps> = ({
  onConfirm,
  title,
  confirmButtonLabel = 'Применить',
  cancelButtonLabel = 'Отмена',
  onCancel,
  children,
  className,
}) => {
  return (
    <div className={cnTableFilterContainer(null, [className])}>
      {title && (
        <Typography view="primary" size="m" className={cnTableFilterContainer('Title')}>
          {title}
        </Typography>
      )}
      {children}
      <div className={cnTableFilterContainer('Buttons')}>
        <Button label={cancelButtonLabel} size="s" view="ghost" onClick={onCancel} />
        <Button label={confirmButtonLabel} size="s" view="primary" onClick={onConfirm} />
      </div>
    </div>
  );
};
