"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = exports.Provider = void 0;

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Reducers = function Reducers(state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    type: "",
    payload: {}
  };
  var reducerFunc = reducers[action.type];
  return reducerFunc ? reducerFunc(state, action.payload) : state;
};

var Context = /*#__PURE__*/_react["default"].createContext();

var Provider = function Provider(_ref) {
  var _ref$store = _ref.store,
      store = _ref$store === void 0 ? {
    state: {},
    reducers: {}
  } : _ref$store,
      children = _ref.children;

  var _React$useReducer = _react["default"].useReducer(Reducers, store.state),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
    value: [state, dispatch]
  }, children);
};

exports.Provider = Provider;

var useStore = function useStore() {
  var _React$useContext = _react["default"].useContext(Context),
      _React$useContext2 = _slicedToArray(_React$useContext, 2),
      state = _React$useContext2[0],
      dispatch = _React$useContext2[1];

  return {
    state: state,
    dispatch: dispatch
  };
};

exports.useStore = useStore;
