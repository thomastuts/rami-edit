import React from 'react';
import RangeSlider from 'rangeslider.js';
import $ from 'jquery';

export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(this.refs.slider.getDOMNode()).rangeslider({
      polyfill: false
    });
  }

  render() {
    return (
      <div className="slider slider--simple">
        <input ref="slider" type="range" min={this.props.min} max={this.props.max} value={this.props.value} />
        <input type="text" className="slider slider__text-input" value={this.props.value} />
      </div>
    );
  }
}
