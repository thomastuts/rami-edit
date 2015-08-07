import React from 'react';
import SidebarSection from './sidebar-section';
import SimpleSlider from '../simple-slider';

export default class SidebarColorSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarSection title={'Colors'}>
        <div className="input-group">
          <label className="input-group__label">Red</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={25} gradient={'red'} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Green</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={218} gradient={'green'} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Blue</label>
          <div className="input-group__input">
            <SimpleSlider min={0} max={255} value={63} gradient={'blue'} />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Effects</label>
          <div className="segmented-button-group">
            <button>Sepia</button>
            <button>Vintage</button>
            <button>B&amp;W</button>
          </div>
        </div>
      </SidebarSection>
    );
  }
}
