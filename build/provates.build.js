"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _privateField = new WeakMap();

var _mymessage = new WeakSet();

var MyPrivateClass = /*#__PURE__*/function () {
  // private member
  function MyPrivateClass() {
    _classCallCheck(this, MyPrivateClass);

    _mymessage.add(this);

    _privateField.set(this, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _privateField, 100);
  } // private method


  _createClass(MyPrivateClass, [{
    key: "printMessage",
    value: function printMessage() {
      _classPrivateMethodGet(this, _mymessage, _mymessage2).call(this);
    }
  }, {
    key: "PrivateField",
    get: function get() {
      return _classPrivateFieldGet(this, _privateField);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _privateField, v);
    }
  }], [{
    key: "message",
    value: function message() {
      console.log("I am static");
    }
  }]);

  return MyPrivateClass;
}();

function _mymessage2() {
  console.log('I am private method');
}

var o = new MyPrivateClass();
o.printMessage();
o.PrivateField = 10000;
console.log(o.PrivateField);
MyPrivateClass.message();
