$.fn.MonoModal = function (options) {
  const MODAL_VISIBLE_CLASS = 'modal--visible';
  const OPEN_EVENT = 'open';
  const CLOSE_EVENT = 'toggle';

  /**
   * The modal is hidden by default on initialization, so store the value in the modal object.
   */
  this.isVisible = false;

  /**
   * Store options in modal.
   */
  if ($.isPlainObject(options)) {
    this.options = options;
  }

  /**
   * If options is a string, this is an action instead and should do something.
   */
  if ($.type(options) === 'string') {
    let method = this[options];
    if ($.isFunction(method)) {
      method();
    }
  }

  /**
   * Add events listeners on any elements in the modal DOM element that can close the modal.
   */

  if (!$.isPlainObject(options) && $.isEmptyObject(options)) {
    this.find('*[data-action="close"]').on('click', () => this.hide());
  }

  /**
   * Shows the dialog.
   */
  this.show = () => {
    this.addClass(MODAL_VISIBLE_CLASS);
    this.isVisible = true;
    this.trigger(OPEN_EVENT);
  };

  /**
   * Hides the dialog.
   */
  this.hide = () => {
    this.removeClass(MODAL_VISIBLE_CLASS);
    this.isVisible = false;
    this.trigger(CLOSE_EVENT);
  };

  /**
   * Toggles the dialog.
   */
  this.toggle = () => {
    this.isVisible ? this.hide() : this.show();
  };

  return this;
};

let $modal = $('#modal-one');
let $triggerButton = $('#activate-modal');

$modal.MonoModal();
$triggerButton.on('click', $modal.MonoModal('show'));
