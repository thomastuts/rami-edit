import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toolbar">
        <ul className="toolbar__system-buttons">
          <li className="toolbar__system-button__orb toolbar__system-button__orb--close"></li>
          <li className="toolbar__system-button__orb toolbar__system-button__orb--minimize"></li>
          <li className="toolbar__system-button__orb toolbar__system-button__orb--maximize"></li>
        </ul>
        <div className="toolbar__window-title">{this.props.title}</div>
      </div>
    );
  }
}
