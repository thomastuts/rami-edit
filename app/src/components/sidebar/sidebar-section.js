import React from 'react';

export default class SidebarSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar__content__section">
        <div className="sidebar__content__section__header">
          {this.props.title}
          <div className="sidebar__content__section__header__toggle-icon">
            <img src="img/angle-down.svg" />
          </div>
        </div>
        <div className="sidebar__content__section__content">{this.props.children}</div>
      </div>
    );
  }
}
