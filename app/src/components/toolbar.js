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
        <ul className="toolbar__icon-tray">
          <li className="active">
            <img src="img/icon-pen.svg" className="toolbar__icon-tray__icon" />
            <div className="toolbar__icon-tray__title">Edit</div>
          </li>
          <li>
            <img src="img/icon-books.svg" className="toolbar__icon-tray__icon" />
            <div className="toolbar__icon-tray__title">Library</div>
          </li>
          <li>
            <img src="img/icon-slideshow.svg" className="toolbar__icon-tray__icon" />
            <div className="toolbar__icon-tray__title">Slideshow</div>
          </li>
        </ul>
      </div>
    );
  }
}
