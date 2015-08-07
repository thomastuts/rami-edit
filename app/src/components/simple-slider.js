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
    let sliderClasses = ['slider slider--simple'];
    this.props.gradient ? sliderClasses.push('slider--gradient slider--gradient--' + this.props.gradient) : sliderClasses.push('slider--simple');

    return (
      <div className={sliderClasses.join(' ')}>
        <input ref="slider" type="range" min={this.props.min} max={this.props.max} defaultValue={this.props.value} />
        <input type="text" className="slider slider__text-input" defaultValue={this.props.value} />
      </div>
    );
  }
}
