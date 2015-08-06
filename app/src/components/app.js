import React from 'react';
import OsxMenuBar from './osx-menu-bar';
import Toolbar from './toolbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appTitle: 'Rami Edit',
      menuItems: ['File', 'Edit', 'View', 'Window', 'Help'],
      toolbarTitle: 'filename-DS13893.jpg'
    };
  }

  render() {
    return (
      <div className="app">
        <OsxMenuBar appTitle={this.state.appTitle} menuItems={this.state.menuItems} />
        <Toolbar title={this.state.toolbarTitle} />
      </div>
    );
  }
}
