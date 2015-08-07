import React from 'react';
import SimpleSlider from '../simple-slider';

export default class SidebarLightingSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="sidebar__content__section">
      <div className="sidebar__content__section__header">
        Lighting
        <div className="sidebar__content__section__header__toggle-icon">
          <img src="img/angle-down.svg" />
        </div>
      </div>
      <div className="sidebar__content__section__content">
        <div className="input-group">
          <label className="input-group__label">Exposure</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={100} value={50} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Contrast</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={100} value={50} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
