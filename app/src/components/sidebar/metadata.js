import React from 'react';

export default class SidebarMetadataSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="sidebar__content__section">
      <div className="sidebar__content__section__header">
        Metadata
        <div className="sidebar__content__section__header__toggle-icon">
          <img src="img/angle-down.svg" />
        </div>
      </div>
      <div className="sidebar__content__section__content">
        <div className="input-group">
          <label className="input-group__label">Created</label>
          <div className="input-group__input input-group__input--ready-only">
            2015-01-25 14:34:02
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Modified</label>
          <div className="input-group__input input-group__input--ready-only">
            2015-01-26 01:07:39
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Format</label>
          <div className="input-group__input input-group__input--ready-only">
            image/jpeg
          </div>
        </div>

        <br/>

        <div className="input-group">
          <label className="input-group__label">Author</label>
          <div className="input-group__input">
            <input type="text" defaultValue="He Man" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label">Title</label>
          <div className="input-group__input">
            <input type="text" defaultValue="Leanne With Mom" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-group__label input-group__label--top">Description</label>
          <div className="input-group__input">
            <textarea name="" id="" rows="5"></textarea>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
