
/**
 * Module dependencies.
 */

var Menu = require('menu')
  , o = require('jquery');

/**
 * Expose `Dropdown`.
 */

module.exports = Dropdown;

/**
 * Initialize a new `Dropdown`.
 *
 * @param {String|Object} element reference
 *
 * Emits:
 *
 *   - "show" when shown
 *   - "hide" when hidden
 *   - "remove" with the item name when an item is removed
 *   - "select" (item) when an item is selected
 *   - * dropdown item events are emitted when clicked
 *
 * @api public
 */

function Dropdown(ref) {
  if (!(this instanceof Dropdown)) return new Dropdown(ref);
  Menu.call(this, this.dropdown);

  // add `dropdown` css class
  this.el.addClass('dropdown');

  this.ref = o(ref);
};

/**
 * Inherits from `Menu.prototype`.
 */

Dropdown.prototype.__proto__ = Menu.prototype;
