import React from 'react';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image">
        <img src="img/photo.png" />
      </div>
    );
  }
}
