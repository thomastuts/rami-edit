import React from 'react';
import SidebarSection from './sidebar-section';
import SimpleSlider from '../simple-slider';

export default class SidebarLightingSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarSection title={'Lighting'}>
        <div className="input-group">
          <label className="input-group__label">Exposure</label>

          <div className="input-group__input">
            <SimpleSlider min={0} max={100} value={50}/>
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Contrast</label>

          <div className="input-group__input">
            <SimpleSlider min={0} max={100} value={50}/>
          </div>
        </div>
      </SidebarSection>
    );
  }
}
