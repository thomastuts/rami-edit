import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  render() {
    let sidebarClasses = ['sidebar'];

    if (this.state.isVisible) {
      sidebarClasses.push('sidebar--visible');
    }

    return (
      <div className={sidebarClasses.join(' ')}>
        <div className="sidebar__close-anchor"></div>
        <div className="sidebar__content"></div>
      </div>
    );
  }
}
