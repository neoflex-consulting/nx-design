import './TableFilterContainer.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Typography } from '../../Typography/Typography';
import {IconCheck} from "../../../icons/IconCheck/IconCheck";
import {IconBlock} from "../../../icons/IconBlock/IconBlock";

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
  confirmButtonLabel,
  cancelButtonLabel,
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
        <Button label={confirmButtonLabel || "Применить"} iconLeft={IconCheck} iconSize={"xs"} size="m" view="primary" onClick={onConfirm} />
        <Button label={cancelButtonLabel || "Отмена"} iconLeft={IconBlock} iconSize={"xs"} size="m" view="secondary" onClick={onCancel} />
      </div>
    </div>
  );
};
