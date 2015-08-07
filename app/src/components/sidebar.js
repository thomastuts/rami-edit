import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  toggleSidebar = () => {
    console.log(this);
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    let sidebarClasses = ['sidebar'];

    if (this.state.isVisible) {
      sidebarClasses.push('sidebar--visible');
    }

    return (
      <div className={sidebarClasses.join(' ')}>
        <div className="sidebar__close-anchor" onClick={this.toggleSidebar}></div>
        <div className="sidebar__content"></div>
      </div>
    );
  }
}
