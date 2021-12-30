import './DatePicker.css';

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

import React, {Component} from 'react';
import classNames from 'classnames/bind';
// import blacklist from 'blacklist';

import Calendar from './panels/Calendar';
import Time from './panels/Time';
import Shortcuts from './panels/Shortcuts';

interface Props {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
  className?: any,
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

interface State {
  moment?: any,
  selected?: any,
  panel?: any
}

class DatePicker extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      panel: 'calendar'
    };
  }

  changePanel = (panel:any) => {
    this.setState({
      panel
    });
  }

  render() {
    const {
      isOpen = true,
      shortcuts,
      splitPanel,
      showTimePicker = true,
      showCalendarPicker = true
    } = this.props;
    const {panel} = this.state;
    const isTimePanel = panel === 'time';
    const isCalendarPanel = panel === 'calendar';
    const className = classNames('datetime-picker', this.props.className, {
      split: splitPanel
    });
    // const props = blacklist(this.props, 'className', 'splitPanel', 'isOpen');

    return (
      <div className={className} style={{display: isOpen ? 'block' : 'none'}} onClick={(evt) => evt.stopPropagation()}>
        {shortcuts
          ? <Shortcuts {...this.props} />
          : undefined
        }

        {splitPanel
          ? <div className="panel-nav">
            <button type="button" onClick={this.changePanel.bind(this, 'calendar')} className={isCalendarPanel ? 'active' : ''}>
              <i className="fa fa-calendar-o"></i>Date
            </button>
            <button type="button" onClick={this.changePanel.bind(this, 'time')} className={isTimePanel ? 'active' : ''}>
              <i className="fa fa-clock-o"></i>Time
            </button>
          </div>
          : undefined
        }

        {showCalendarPicker
          ? <Calendar {...this.props} isOpen={isOpen} style={{display: isCalendarPanel || !splitPanel ? 'block' : 'none'}} />
          : undefined
        }

        {showTimePicker
          ? <Time {...this.props} style={{display: isTimePanel || !splitPanel ? 'block' : 'none'}} />
          : undefined
        }
      </div>
    );
  }
}


export default DatePicker;
