import './CalendarAdditionalControls.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { AdditionalControlRenderType, CalendarAdditionalControlRenderProp } from '../helpers';

type Props = {
  renderAdditionalControls?: CalendarAdditionalControlRenderProp;
  currentVisibleDate?: Date;
};

function isRenderFn(fn: CalendarAdditionalControlRenderProp): fn is AdditionalControlRenderType {
  return (fn as AdditionalControlRenderType).call !== undefined;
}

const cnCalendarAdditionalControls = cn('CalendarAdditionalControls');

export const CalendarAdditionalControls: React.FC<Props> = (props) => {
  const { renderAdditionalControls, currentVisibleDate } = props;

  if (typeof renderAdditionalControls !== 'undefined') {
    const content = isRenderFn(renderAdditionalControls)
      ? renderAdditionalControls({ currentVisibleDate })
      : renderAdditionalControls;
    return <div className={cnCalendarAdditionalControls()}>{content}</div>;
  }
  return null;
};
