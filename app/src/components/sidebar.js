import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__close-anchor"></div>
        <div className="sidebar__content"></div>
      </div>
    );
  }
}
