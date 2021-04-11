"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// named class
var MyClass = /*#__PURE__*/function () {
  // class must have a constructor for defining the public members
  // all public members from the constructor will be prefixed with 'this'
  function MyClass(v) {
    _classCallCheck(this, MyClass);

    this.str = v; // public string
  } // default access specifier for the class functions is public


  _createClass(MyClass, [{
    key: "reverse",
    value: function reverse() {
      var res = '';

      for (var i = this.str.length - 1; i >= 0; i--) {
        res += this.str[i];
      }

      return res;
    }
  }]);

  return MyClass;
}(); // creating an instance of the class


var obj = new MyClass("ES6");
console.log("Reverse of ES6 is = ".concat(obj.reverse()));
