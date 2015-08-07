import React from 'react';
import SimpleSlider from '../simple-slider';

export default class SidebarColorSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="sidebar__content__section">
      <div className="sidebar__content__section__header">
        Colors
        <div className="sidebar__content__section__header__toggle-icon">
          <img src="img/angle-down.svg" />
        </div>
      </div>
      <div className="sidebar__content__section__content">
        <div className="input-group">
          <label className="input-group__label">Red</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={125} gradient={'red'} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Green</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={125} gradient={'green'} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Blue</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={125} gradient={'blue'} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}