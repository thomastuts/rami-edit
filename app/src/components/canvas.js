import React from 'react';
import Image from './image';
import Sidebar from './sidebar';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="canvas">
        <Image />
        <Sidebar />
      </div>
    );
  }
}
