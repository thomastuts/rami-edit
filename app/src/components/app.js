import React from 'react';
import OsxMenuBar from './osx-menu-bar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appTitle: 'Rami Edit',
      menuItems: ['File', 'Edit', 'View', 'Window', 'Help']
    };
  }

  render() {
    return (
      <div className="app">
        <OsxMenuBar appTitle={this.state.appTitle} menuItems={this.state.menuItems} />
      </div>
    );
  }
}
