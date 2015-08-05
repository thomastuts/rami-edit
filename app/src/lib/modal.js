$.fn.MonoModal = function (options) {
  const MODAL_VISIBLE_CLASS = 'modal--visible';
  const OPEN_EVENT = 'open';
  const CLOSE_EVENT = 'toggle';
  const ESC_KEYCODE = 27;
  const DEFAULT_OPTIONS = {
    closeOnEsc: true
  };

  /**
   * The modal is hidden by default on initialization, so store the value in the modal object.
   */
  this.isVisible = false;

  this.addEventListeners = () => {
    this.find('*[data-action="close"]').on('click', () => this.hide());

    $(window).on('keyup', (e) => {
      if (e.which === ESC_KEYCODE && this.options.closeOnEsc) {
        this.hide();
      }
    });
  };

  /**
   * Store options in modal.
   */
  if ($.isPlainObject(options)) {
    this.options = $.extend(DEFAULT_OPTIONS, options);
    this.addEventListeners();
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
   * Add events listeners.
   */

  if (!$.isPlainObject(options) && $.isEmptyObject(options)) {
    this.options = DEFAULT_OPTIONS;
    this.addEventListeners();
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

$modal.MonoModal({
  closeOnEsc: false
});
$triggerButton.on('click', () => $modal.MonoModal('show'));
