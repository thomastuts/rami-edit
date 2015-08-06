import React from 'react';

export default class OsxMenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="osx-menu-bar osx-menu-bar--white">
        <ul className="osx-menu-bar__menu">
          <li className="osx-menu-bar__menu__logo">
            <img src="img/apple.svg" alt={this.props.appTitle} />
          </li>
          <li><strong>{this.props.appTitle}</strong></li>
          {this.props.menuItems.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}
