import './Time.css';

import React, {Component} from 'react';
// import ReactSlider from 'react-slider';
import moment from 'moment';

interface Props {
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
}

interface State {
  value: any,
  selected?: any,
}

class Time extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      value: this.getCurrentMoment(props)
    };
  }

  componentWillReceiveProps(props:any) {
    this.setState({
      value: this.getCurrentMoment(props)
    });
  }

  getCurrentMoment = (props:any) => {
    const {range, rangeAt} = props;
    let result = props.value;

    if (result) {
      if (range) {
        result = result[rangeAt] || moment().hours(0).minutes(0);
      }
    } else {
      result = moment().hours(0).minutes(0);
    }

    return result;
  }

  handleChange = (type:any, value:any) => {
    const {onChange, range, rangeAt} = this.props;
    const _value = this.state.value.clone();
    let selected = this.props.value;

    _value[type](value);

    if (range) {
      const copyed = selected ? Object.assign(selected, {}) : {};

      copyed[rangeAt] = _value;
    } else {
      selected = _value;
    }

    this.setState({
      value: _value
    });
    onChange && onChange(selected);
  }

  render() {
    const _value = this.state.value;
    const {style} = this.props;

    return (
      <div style={style}>
        <div className="time">
          <div className="show-time">
            <span className="text">{_value.format('HH')}</span>
            <span className="separater">:</span>
            <span className="text">{_value.format('mm')}</span>
          </div>
          <div className="sliders">
            <span className="slider-text">Hours:</span>
            {/*<ReactSlider min={0} max={23} value={_value.hour()} onChange={this.handleChange.bind(this, 'hours')} withBars />*/}
            <span className="slider-text">Minutes:</span>
            {/*<ReactSlider min={0} max={59} value={_value.minute()} onChange={this.handleChange.bind(this, 'minutes')} withBars />*/}
          </div>
        </div>
      </div>
    );
  }
}


export default Time;
