import './Calendar.css';

import React, {Component} from 'react';
// import moment from 'moment';

import Day from '../Day';
import Month from '../Month';
import Year from '../Year';
const moment = require('moment');

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

class Calendar extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      moment: this.getCurrentMoment(props),
      panel: props.minPanel || 'day'
    };
  }

  componentWillReceiveProps(props:any) {
    this.setState({
      moment: this.getCurrentMoment(props)
    });

    if (!props.isOpen) {
      this.setState({
        panel: props.minPanel || 'day'
      });
    }
  }

  getCurrentMoment = (props:any) => {
    const {range, rangeAt} = props;
    const now = this.state ? this.state.moment || moment() : moment();
    let result = props.moment;

    if (result) {
      if (range) {
        result = result[rangeAt] || now;
      }
    } else {
      result = now;
    }

    return result;
  }

  handleSelect = (selected:any) => {
    const {panel} = this.state;
    const {onChange, range, rangeAt, minPanel} = this.props;
    const nextPanel = (panel === 'year' ? 'month' : 'day') === 'month'
      ? minPanel === 'year' ? 'year' : 'month'
      : minPanel === 'month' ? 'month' : 'day';
    let _selected = this.props.moment;
    let shouldChange = panel === minPanel;

    if (_selected && !shouldChange) {
      if (range) {
        shouldChange = rangeAt === 'start' ? _selected.start : _selected.end;
      } else {
        shouldChange = true;
      }
    }

    if (range) {
      const copyed = _selected ? {..._selected} : {};

      copyed[rangeAt] = selected;
      _selected = copyed;
    } else {
      _selected = selected;
    }

    this.changePanel(nextPanel, selected);

    if (shouldChange) {
      onChange && onChange(_selected, panel);
    }
  }

  changePanel = (panel:any, moment = this.state.moment) => {
    this.setState({
      moment,
      panel
    });
  }

  render() {
    const {weeks, months, dayFormat, style, maxDate, minDate, dateLimit, range, rangeAt} = this.props;
    const props = {
      moment: this.state.moment,
      selected: this.props.moment,
      onSelect: this.handleSelect,
      changePanel: this.changePanel,
      weeks,
      months,
      dayFormat,
      maxDate,
      minDate,
      dateLimit,
      range,
      rangeAt
    };
    const {panel} = this.state;
    const isDayPanel = panel === 'day';
    const isMonthPanel = panel === 'month';
    const isYearPanel = panel === 'year';

    return (
      <div style={style}>
        <div className="Calendar">
          <Day
            {...props}
            style={{display: isDayPanel ? 'block' : 'none'}} />
          <Month
            {...props}
            style={{display: isMonthPanel ? 'block' : 'none'}} />
          <Year
            {...props}
            style={{display: isYearPanel ? 'block' : 'none'}} />
        </div>
      </div>
    );
  }
}


export default Calendar;
