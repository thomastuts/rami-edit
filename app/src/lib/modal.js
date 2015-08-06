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

  /**
   * Adds event listeners that can influence the modal.
   */
  this.addEventListeners = () => {
    this.find('*[data-action="close"]').on('click', () => this.hide());

    $(window).on('keyup', (e) => {
      if (e.which === ESC_KEYCODE && this.options.closeOnEsc) {
        this.hide();
      }
    });
  };

  /**
   * If the given option is a string, we need to execute the method if it exists. If the given options are either empty
   * or an object, we initialize the modal by settings the options and adding event listeners.
   */
  if ($.type(options) === 'string') {
    let method = this[options];
    if ($.isFunction(method)) {
      method();
    }
  }
  else {
    this.options = $.extend(DEFAULT_OPTIONS, $.isPlainObject(options) ? options : {});
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
  this.toggle = () => this.isVisible ? this.hide() : this.show();

  return this;
};

let $modal = $('#modal-one');
let $triggerButton = $('#activate-modal');

$modal.MonoModal({
  closeOnEsc: false
});
$triggerButton.on('click', () => $modal.MonoModal('show'));
