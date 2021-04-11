"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function doWork(values) {
  var sum = 0;

  if (values.length > 0) {
    values.forEach(function (n, idx) {
      sum += n;
    });
  }

  return sum;
}

console.log("Add 2 ".concat(doWork([1, 2])));
console.log("Add 3 ".concat(doWork([1, 2, 3]))); // the same values will act as immutable object with varying paraeters

function doWorkSperad() {
  var sum = 0;

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  if (values.length > 0) {
    values.forEach(function (n, idx) {
      sum += n;
    });
  }

  return sum;
}

console.log("Add Spread 2 ".concat(doWorkSperad(1, 2)));
console.log("Add 3 ".concat(doWorkSperad(1, 2, 3)));
console.log();
console.log();
var arr = [10, 20, 30];
console.log(arr);
arr = [].concat(_toConsumableArray(arr), [40, 50, 60, 70]); // arr will be speared with new values in it

console.log(arr);
