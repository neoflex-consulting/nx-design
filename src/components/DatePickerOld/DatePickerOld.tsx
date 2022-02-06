import './DatePickerOld.css';

// import React, { ChangeEventHandler } from 'react';

// import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
// import { cn } from '../../utils/bem';
// import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';

// export const datePickerPropSize = ['m', 'l'] as const;
// export type DatePickerPropSize = typeof datePickerPropSize[number];
// export const datePickerPropSizeDefault: DatePickerPropSize = datePickerPropSize[0];
//
// export const datePickerPropView = ['primary', 'ghost'] as const;
// export type DatePickerPropView = typeof datePickerPropView[number];
// export const datePickerPropViewDefault: DatePickerPropView = datePickerPropView[0];
//
// export const datePickerPropAlign = ['center', 'top'] as const;
// export type DatePickerPropAlign = typeof datePickerPropAlign[number];
// export const datePickerPropAlignDefault: DatePickerPropAlign = datePickerPropAlign[0];
//
// export type RadioPropOnChange = (object: {
//   e: React.ChangeEvent<HTMLInputElement>;
//   checked: boolean;
// }) => void;
//
// export type Props = {
//   checked: boolean | undefined;
//   size?: DatePickerPropSize;
//   view?: DatePickerPropView;
//   align?: DatePickerPropAlign;
//   disabled?: boolean;
//   className?: string;
//   label?: string;
//   onChange?: RadioPropOnChange;
//   name?: string;
//   onFocus?: React.FocusEventHandler<HTMLInputElement>;
//   onBlur?: React.FocusEventHandler<HTMLInputElement>;
//   autoFocus?: boolean;
//   readOnly?: boolean;
//   required?: boolean;
//   step?: number | string;
//   tabIndex?: number;
//   inputRef?: React.Ref<HTMLInputElement>;
//   children?: never;
// };
//
// export type DatePickerProps = PropsWithHTMLAttributes<Props, HTMLLabelElement>;
//
// export const cnDatePicker = cn('DatePicker');
//
// export const DatePicker = React.forwardRef<HTMLLabelElement, DatePickerProps>((props, ref) => {
//   const {
//     checked = false,
//     name,
//     size = datePickerPropSizeDefault,
//     view = datePickerPropViewDefault,
//     align = datePickerPropAlignDefault,
//     disabled,
//     className,
//     label,
//     onChange,
//     onFocus,
//     onBlur,
//     readOnly,
//     required,
//     step,
//     tabIndex,
//     inputRef,
//     ...otherProps
//   } = props;
//
//   const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     if (onChange) {
//       onChange({ e, checked: !checked });
//     }
//   };
//
//   return (
//     <label
//       {...otherProps}
//       className={cnDatePicker({ size, view, disabled, align }, [className])}
//       ref={ref}
//     >
//       <input
//         type="radio"
//         name={name}
//         className={cnDatePicker('Input', [cnMixFocus()])}
//         checked={checked}
//         disabled={disabled}
//         onChange={handleChange}
//         onFocus={onFocus}
//         onBlur={onBlur}
//         readOnly={readOnly}
//         required={required}
//         step={step}
//         tabIndex={tabIndex}
//         ref={inputRef}
//       />
//       {label && <span className={cnDatePicker('Label')}>{label}</span>}
//     </label>
//   );
// });

import React, {useState} from 'react';
import classNames from 'classnames/bind';
// import blacklist from 'blacklist';

import {Calendar} from './panels/Calendar/Calendar';
import Time from './panels/Time/Time';
import Shortcuts from './panels/Shortcuts/Shortcuts';
import {PropsWithHTMLAttributes} from "../../utils/types/PropsWithHTMLAttributes";
import {usePropsHandler} from "../EventInterceptor/usePropsHandler";
import {cn} from "../../utils/bem";
import {cnDatetimeTrigger} from "./Trigger";

export const pickerPropPanel = ['calendar', 'time', 'shortcuts'] as const;
export type PickerPropPanel = typeof pickerPropPanel[number];
export const pickerPropPanelDefault: PickerPropPanel = pickerPropPanel[0];

type Props = {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
  className?: any,
  onSelect?: any,
  value?: any,
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
//   value?: any,
//   selected?: any,
//   panel?: any
// }

export const cnPicker = cn('Picker');

export type PickerProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const DatePickerOld = React.forwardRef<HTMLDivElement, PickerProps>((props, ref) => {
  const pickerRef = ref || React.useRef<HTMLDivElement>(null);
  const {
    isOpen = true,
    shortcuts,
    splitPanel,
    showTimePicker = true,
    showCalendarPicker = true,
    className,
    onSelect,
    value,
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
        className={cnPicker({split: splitPanel},[className])}
        style={{display: isOpen ? 'block' : 'none'}}
        onClick={(evt) => evt.stopPropagation()}
        {...otherProps}
        ref={pickerRef}
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

