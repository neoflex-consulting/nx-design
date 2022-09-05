import './MixPopoverArrowExample.css';

import React, { useRef } from 'react';

import { Button } from '../../../../../components/Button/Button';
import { Popover } from '../../../../../components/Popover/Popover';
import { Typography } from '../../../../../components/Typography/Typography';
import { useFlag } from '../../../../../hooks/useFlag/useFlag';
import { cn } from '../../../../../utils/bem';
import { cnMixPopoverArrow } from '../../../MixPopoverArrow';

const cnMixPopoverArrowExample = cn('MixPopoverArrowExample');

export const MixPopoverArrowExample = () => {
  const [open, setOpen] = useFlag(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button label="Открыть" onClick={setOpen.toogle} ref={buttonRef} />
      {open && (
        <Popover
          className={cnMixPopoverArrowExample()}
          anchorRef={buttonRef}
          direction="downCenter"
          arrowOffset={16}
          offset={14}
        >
          <Typography>Стрелочка по центру сверху</Typography>
          <div className={cnMixPopoverArrow({ direction: 'downCenter' })} />
        </Popover>
      )}
    </>
  );
};
