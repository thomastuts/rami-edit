import React from 'react';
import SimpleSlider from './simple-slider';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  toggleSidebar = () => {
    console.log(this);
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    let sidebarClasses = ['sidebar'];

    if (this.state.isVisible) {
      sidebarClasses.push('sidebar--visible');
    }

    return (
      <div className={sidebarClasses.join(' ')}>
        <div className="sidebar__close-anchor" onClick={this.toggleSidebar}></div>
        <div className="sidebar__content">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
