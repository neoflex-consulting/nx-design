import './DatePicker.css';

import React, {Component} from 'react';

import Calendar from './panels/Calendar/Calendar';
import Time from './panels/Time/Time';
import Shortcuts from './panels/Shortcuts/Shortcuts';
import {cn} from "../../utils/bem";

interface Props {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
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

export const cnDatePicker = cn('DatePicker');

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
      showCalendarPicker = true,
      className
    } = this.props;
    const {panel} = this.state;
    const isTimePanel = panel === 'time';
    const isCalendarPanel = panel === 'calendar';

    return (
      <div className={cnDatePicker(
        {
          split: splitPanel
        },
        [className],
      )}
           style={{display: isOpen ? 'block' : 'none'}} onClick={(evt) => evt.stopPropagation()}>
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
