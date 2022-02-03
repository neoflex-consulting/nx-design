import './Picker.css';

import React, {useState} from 'react';

import Calendar from '../panels/Calendar/Calendar';
import Time from '../panels/Time/Time';
import Shortcuts from '../panels/Shortcuts/Shortcuts';
import {cn} from "../../../utils/bem";
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";

export const pickerPropPanel = ['calendar', 'time', 'shortcuts'] as const;
export type PickerPropPanel = typeof pickerPropPanel[number];
export const pickerPropPanelDefault: PickerPropPanel = pickerPropPanel[0];

interface Props {
  isOpen?: boolean,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: boolean,
  showCalendarPicker?: boolean,
  className?: string,
  onSelect?: any,
  moment?: any,
  maxDate?: any,
  minDate?: any,
  selected?: any,
  range?: any,
  rangeAt?: any,
  dateLimit?: any,
  style?: any,
  onChange?: any,
  months?: any,
  changePanel?: any,
  dayFormat?: any,
  weeks?: any,
  minPanel?: any,
}

// interface State {
//   moment?: any,
//   selected?: any,
//   panel?: any
// }

export type PickerProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnPicker = cn('Picker');

export const Picker = React.forwardRef<HTMLDivElement, PickerProps>((props, ref) => {
  const pickerRef = ref || React.useRef<HTMLDivElement>(null);
  const {
    isOpen = true,
    shortcuts,
    splitPanel,
    showTimePicker = true,
    showCalendarPicker = true,
    className,
    onSelect,
    moment,
    maxDate,
    minDate,
    selected,
    range,
    rangeAt,
    dateLimit,
    style,
    onChange,
    months,
    changePanel,
    dayFormat,
    weeks,
    minPanel,
    ...otherProps
  } = usePropsHandler(cnPicker(), props, pickerRef as React.RefObject<HTMLDivElement>);
  const [panel, setPanel] = useState<PickerPropPanel>(pickerPropPanelDefault);

    const isTimePanel = panel === 'time';
    const isCalendarPanel = panel === 'calendar';

    return (
      <div
          className={cnPicker(
            {
              split: splitPanel,
              isOpen
            },
            [className],
          )}
         style={{display: isOpen ? 'block' : 'none'}}
         onClick={(evt) => evt.stopPropagation()}
         ref={pickerRef}
         {...otherProps}
      >
        {shortcuts
          ? <Shortcuts {...props} />
          : undefined
        }

        {splitPanel
          ? <div className="panel-nav">
            <button type="button" onClick={() => setPanel('calendar')} className={isCalendarPanel ? 'active' : ''}>
              <i className="fa fa-calendar-o"></i>Date
            </button>
            <button type="button" onClick={() => setPanel('time')} className={isTimePanel ? 'active' : ''}>
              <i className="fa fa-clock-o"></i>Time
            </button>
          </div>
          : undefined
        }

        {showCalendarPicker
          ? <Calendar {...props} isOpen={isOpen} style={{display: isCalendarPanel || !splitPanel ? 'block' : 'none'}} />
          : undefined
        }

        {showTimePicker
          ? <Time {...props} style={{display: isTimePanel || !splitPanel ? 'block' : 'none'}} />
          : undefined
        }
      </div>
    );

})

