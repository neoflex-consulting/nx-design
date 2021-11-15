import './DragNDropFieldTooltip.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { Typography } from '../../Typography/Typography';
import { Tooltip } from '../../Tooltip/Tooltip';

type DragNDropFieldTooltipProps = {
  anchorRef: React.RefObject<HTMLElement>;
  errors: string[];
};

const cnDragNDropFieldTooltip = cn('DragNDropFieldTooltip');

export const DragNDropFieldTooltip: React.FC<DragNDropFieldTooltipProps> = ({
  anchorRef,
  errors,
}) => {
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    setIsHidden(false);
  }, [errors]);

  return isHidden || errors.length === 0 ? null : (
    <Tooltip
      anchorRef={anchorRef}
      status="alert"
      size="l"
      isInteractive={false}
      onClickOutside={() => setIsHidden(true)}
    >
      <Typography size="body">
        {errors.length === 1 ? (
          errors[0]
        ) : (
          <ul className={cnDragNDropFieldTooltip('List')}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </Typography>
    </Tooltip>
  );
};
