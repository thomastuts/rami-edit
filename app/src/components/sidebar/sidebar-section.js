import React from 'react';
import $ from 'jquery';

export default class SidebarSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null,
      actualHeight: 0,
      isExpanded: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      let sectionHeight = $(this.refs.section.getDOMNode()).height();
      this.setState({
        actualHeight: sectionHeight,
        height: sectionHeight
      });
    }, 100);
  }

  toggle = () => {
    console.log('Toggling');
    this.setState({
      height: this.state.isExpanded ? 40 : this.state.actualHeight,
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    let sectionStyle = {
      height: this.state.height + 'px'
    };

    let contentStyle = {
      visibility: this.state.isExpanded ? 'visible' : 'hidden',
      opacity: this.state.isExpanded ? 1 : 0
    };

    return (
      <div className="sidebar__content__section" style={sectionStyle} ref="section">
        <div className="sidebar__content__section__header" onClick={this.toggle}>
          {this.props.title}
          <div className="sidebar__content__section__header__toggle-icon">
            <span className={this.state.isExpanded ? 'icon-angle-up' : 'icon-angle-down'}></span>
          </div>
        </div>
        <div className="sidebar__content__section__content" style={contentStyle}>{this.props.children}</div>
      </div>
    );
  }
}
