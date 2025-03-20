import {
  require_prop_types
} from "./chunk-FWNK54VO.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/chained-function/lib/chained-function.js
var require_chained_function = __commonJS({
  "node_modules/chained-function/lib/chained-function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function() {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }
      return funcs.filter(function(func) {
        return typeof func === "function";
      }).reduce(function(accumulator, func) {
        if (accumulator === null) {
          return func;
        }
        return function chainedFunction() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          accumulator.apply(this, args);
          func.apply(this, args);
        };
      }, null);
    };
  }
});

// node_modules/chained-function/lib/index.js
var require_lib = __commonJS({
  "node_modules/chained-function/lib/index.js"(exports, module) {
    "use strict";
    var _chainedFunction = require_chained_function();
    var _chainedFunction2 = _interopRequireDefault(_chainedFunction);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = _chainedFunction2.default;
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
  }
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var init_objectWithoutPropertiesLoose = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"() {
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant3 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant3;
  }
});

// node_modules/uncontrollable/lib/esm/utils.js
function readOnlyPropType(handler, name) {
  return function(props, propName) {
    if (props[propName] !== void 0) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function(prop) {
    propTypes[defaultKey(prop)] = noop;
    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === "string" && handler.trim().length) ? true ? (0, import_invariant.default)(false, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", displayName, prop) : (0, import_invariant.default)(false) : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== void 0;
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
  return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}
var import_invariant, noop;
var init_utils = __esm({
  "node_modules/uncontrollable/lib/esm/utils.js"() {
    import_invariant = __toESM(require_browser());
    noop = function noop2() {
    };
  }
});

// node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
var import_react;
var init_hook = __esm({
  "node_modules/uncontrollable/lib/esm/hook.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    import_react = __toESM(require_react());
    init_utils();
  }
});

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
var init_setPrototypeOf = __esm({
  "node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"() {
  }
});

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
var init_inheritsLoose = __esm({
  "node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"() {
    init_setPrototypeOf();
  }
});

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var init_react_lifecycles_compat_es = __esm({
  "node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
  }
});

// node_modules/uncontrollable/lib/esm/uncontrollable.js
function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || "Component";
  var canAcceptRef2 = canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef2 || !methods.length) ? true ? (0, import_invariant2.default)(false, "[uncontrollable] stateless function components cannot pass through methods because they have no associated instances. Check component: " + displayName + ", attempting to pass through methods: " + methods.join(", ")) : (0, import_invariant2.default)(false) : void 0;
  var UncontrolledComponent = function(_React$Component) {
    _inheritsLoose(UncontrolledComponent2, _React$Component);
    function UncontrolledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange2(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args2[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args2));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function(_ref) {
            var _extends2;
            var values2 = _ref.values;
            return {
              values: _extends(/* @__PURE__ */ Object.create(null), values2, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function(ref) {
        _this.inner = ref;
      };
      var values = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return !this._notifying;
    };
    UncontrolledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values, prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(/* @__PURE__ */ Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function(key) {
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function(prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function(propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== void 0 ? propValue : _this2.state.values[propName];
      });
      return import_react2.default.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent2;
  }(import_react2.default.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {
    }
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function(method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (import_react2.default.forwardRef) {
    WrappedComponent = import_react2.default.forwardRef(function(props, ref) {
      return import_react2.default.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
var import_react2, import_invariant2, _jsxFileName;
var init_uncontrollable = __esm({
  "node_modules/uncontrollable/lib/esm/uncontrollable.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    init_inheritsLoose();
    import_react2 = __toESM(require_react());
    init_react_lifecycles_compat_es();
    import_invariant2 = __toESM(require_browser());
    init_utils();
    _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
  }
});

// node_modules/uncontrollable/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  uncontrollable: () => uncontrollable,
  useUncontrolled: () => useUncontrolled,
  useUncontrolledProp: () => useUncontrolledProp
});
var init_esm = __esm({
  "node_modules/uncontrollable/lib/esm/index.js"() {
    init_hook();
    init_uncontrollable();
  }
});

// node_modules/@trendmicro/react-sidenav/node_modules/warning/browser.js
var require_browser2 = __commonJS({
  "node_modules/@trendmicro/react-sidenav/node_modules/warning/browser.js"(exports, module) {
    "use strict";
    var warning = function() {
    };
    if (true) {
      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (format.length < 10 || /^[s\W]*$/.test(format)) {
          throw new Error(
            "The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + format
          );
        }
        if (!condition) {
          var argIndex = 0;
          var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        }
      };
    }
    module.exports = warning;
  }
});

// node_modules/@trendmicro/react-sidenav/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@trendmicro/react-sidenav/lib/index.js"(exports, module) {
    module.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          /******/
          i: moduleId,
          /******/
          l: false,
          /******/
          exports: {}
          /******/
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {
            /******/
            configurable: false,
            /******/
            enumerable: true,
            /******/
            get: getter
            /******/
          });
        }
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? (
          /******/
          function getDefault() {
            return module2["default"];
          }
        ) : (
          /******/
          function getModuleExports() {
            return module2;
          }
        );
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 11);
    }([
      /* 0 */
      /***/
      function(module2, exports2) {
        module2.exports = require_react();
      },
      /* 1 */
      /***/
      function(module2, exports2) {
        module2.exports = require_classnames();
      },
      /* 2 */
      /***/
      function(module2, exports2) {
        module2.exports = require_prop_types();
      },
      /* 3 */
      /***/
      function(module2, exports2) {
        module2.exports = { "sidenav": "sidenav---sidenav---_2tBP", "collapsed": "sidenav---collapsed---LQDEv", "sidenav-nav": "sidenav---sidenav-nav---3tvij", "sidenavNav": "sidenav---sidenav-nav---3tvij", "sidenav-navitem": "sidenav---sidenav-navitem---uwIJ-", "sidenavNavitem": "sidenav---sidenav-navitem---uwIJ-", "sidenav-subnav": "sidenav---sidenav-subnav---1EN61", "sidenavSubnav": "sidenav---sidenav-subnav---1EN61", "expanded": "sidenav---expanded---1KdUL", "navicon": "sidenav---navicon---3gCRo", "navtext": "sidenav---navtext---1AE_f", "expandable": "sidenav---expandable---3_dr7", "navitem": "sidenav---navitem---9uL5T", "sidenav-subnavitem": "sidenav---sidenav-subnavitem---1cD47", "sidenavSubnavitem": "sidenav---sidenav-subnavitem---1cD47", "selected": "sidenav---selected---1EK3y", "sidenav-toggle": "sidenav---sidenav-toggle---1KRjR", "sidenavToggle": "sidenav---sidenav-toggle---1KRjR", "icon-bar": "sidenav---icon-bar---u1f02", "iconBar": "sidenav---icon-bar---u1f02", "highlighted": "sidenav---highlighted---oUx9u" };
      },
      /* 4 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var matchComponent = function matchComponent2(Component) {
          return function(c) {
            if (c.type === Component) {
              return true;
            }
            if (c.props && c.props.componentType === Component) {
              return true;
            }
            return false;
          };
        };
        exports2.default = matchComponent;
      },
      /* 5 */
      /***/
      function(module2, exports2) {
        module2.exports = require_lib();
      },
      /* 6 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _class, _temp2;
        var _chainedFunction = __webpack_require__(5);
        var _chainedFunction2 = _interopRequireDefault(_chainedFunction);
        var _classnames = __webpack_require__(1);
        var _classnames2 = _interopRequireDefault(_classnames);
        var _propTypes = __webpack_require__(2);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(0);
        var _react2 = _interopRequireDefault(_react);
        var _NavIcon = __webpack_require__(7);
        var _NavIcon2 = _interopRequireDefault(_NavIcon);
        var _NavText = __webpack_require__(8);
        var _NavText2 = _interopRequireDefault(_NavText);
        var _findComponent = __webpack_require__(12);
        var _findComponent2 = _interopRequireDefault(_findComponent);
        var _matchComponent = __webpack_require__(4);
        var _matchComponent2 = _interopRequireDefault(_matchComponent);
        var _index = __webpack_require__(3);
        var _index2 = _interopRequireDefault(_index);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var noop3 = function noop4() {
        };
        var NavItem = (_temp2 = _class = function(_PureComponent) {
          _inherits(NavItem2, _PureComponent);
          function NavItem2() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, NavItem2);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavItem2.__proto__ || Object.getPrototypeOf(NavItem2)).call.apply(_ref, [this].concat(args))), _this), _this.findNavIcon = (0, _findComponent2.default)(_NavIcon2.default), _this.findNavText = (0, _findComponent2.default)(_NavText2.default), _this.isNavItem = (0, _matchComponent2.default)(NavItem2), _this.isNavIcon = (0, _matchComponent2.default)(_NavIcon2.default), _this.isNavText = (0, _matchComponent2.default)(_NavText2.default), _this.handleSelect = function(event) {
              var _this$props = _this.props, disabled = _this$props.disabled, onSelect = _this$props.onSelect, eventKey = _this$props.eventKey;
              if (disabled) {
                event.preventDefault();
                return;
              }
              if (onSelect) {
                onSelect(eventKey, event);
              }
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(NavItem2, [{
            key: "render",
            value: function render() {
              var _this2 = this, _cx2, _cx3;
              var _props = this.props, componentType = _props.componentType, Component = _props.componentClass, active = _props.active, disabled = _props.disabled, expanded = _props.expanded, eventKey = _props.eventKey, onClick = _props.onClick, onSelect = _props.onSelect, selected = _props.selected, subnav = _props.subnav, navitemClassName = _props.navitemClassName, navitemStyle = _props.navitemStyle, subnavClassName = _props.subnavClassName, subnavStyle = _props.subnavStyle, className = _props.className, style = _props.style, children = _props.children, props = _objectWithoutProperties(_props, ["componentType", "componentClass", "active", "disabled", "expanded", "eventKey", "onClick", "onSelect", "selected", "subnav", "navitemClassName", "navitemStyle", "subnavClassName", "subnavStyle", "className", "style", "children"]);
              var navIcon = this.findNavIcon(children);
              var navText = this.findNavText(children);
              var _ref2 = navIcon ? _extends2({}, navIcon.props) : {}, navIconComponentType = _ref2.componentType, navIconClassName = _ref2.navIconClassName, navIconProps = _objectWithoutProperties(_ref2, ["componentType", "navIconClassName"]);
              var _ref3 = navText ? _extends2({}, navText.props) : {}, navTextComponentType = _ref3.componentType, navTextClassName = _ref3.navTextClassName, navTextProps = _objectWithoutProperties(_ref3, ["componentType", "navTextClassName"]);
              if (subnav) {
                var _cx;
                var _isNavItemSelected = active || !!selected && selected === this.props.eventKey;
                return _react2.default.createElement(
                  Component,
                  {
                    role: "presentation",
                    className: (0, _classnames2.default)(className, _index2.default.sidenavSubnavitem, (_cx = {}, _defineProperty(_cx, _index2.default.selected, _isNavItemSelected), _defineProperty(_cx, _index2.default.disabled, disabled), _cx)),
                    style
                  },
                  _react2.default.createElement(
                    "div",
                    _extends2({}, props, {
                      className: (0, _classnames2.default)(navitemClassName, _index2.default.navitem),
                      style: navitemStyle,
                      disabled,
                      role: "menuitem",
                      tabIndex: "-1",
                      onClick: (0, _chainedFunction2.default)(onClick, this.handleSelect)
                    }),
                    navIcon && _react2.default.createElement("div", _extends2({}, navIconProps, { className: (0, _classnames2.default)(navIconClassName, _index2.default.navicon) })),
                    navText && _react2.default.createElement("div", _extends2({}, navTextProps, { className: (0, _classnames2.default)(navTextClassName, _index2.default.navtext) }))
                  )
                );
              }
              var activeNavItems = [];
              var navItems = _react2.default.Children.toArray(children).filter(function(child) {
                return _react2.default.isValidElement(child) && _this2.isNavItem(child);
              }).map(function(child) {
                if (child.props.active || !!selected && selected === child.props.eventKey) {
                  activeNavItems.push(child);
                }
                return (0, _react.cloneElement)(child, {
                  subnav: true,
                  selected,
                  onSelect: (0, _chainedFunction2.default)(child.props.onSelect, onSelect)
                });
              });
              var others = _react2.default.Children.toArray(children).filter(function(child) {
                if (_react2.default.isValidElement(child) && (_this2.isNavIcon(child) || _this2.isNavText(child) || _this2.isNavItem(child))) {
                  return false;
                }
                return true;
              });
              var isNavItemSelected = active || !!selected && selected === this.props.eventKey || activeNavItems.length > 0;
              var isNavItemExpandable = navItems.length > 0;
              var isNavItemExpanded = isNavItemExpandable && expanded;
              var isNavItemHighlighted = isNavItemExpanded || isNavItemSelected;
              return _react2.default.createElement(
                Component,
                {
                  role: "presentation",
                  className: (0, _classnames2.default)(className, _index2.default.sidenavNavitem, (_cx2 = {}, _defineProperty(_cx2, _index2.default.selected, isNavItemSelected), _defineProperty(_cx2, _index2.default.highlighted, isNavItemHighlighted), _defineProperty(_cx2, _index2.default.expandable, isNavItemExpandable), _defineProperty(_cx2, _index2.default.expanded, isNavItemExpanded), _defineProperty(_cx2, _index2.default.disabled, disabled), _cx2)),
                  style
                },
                _react2.default.createElement(
                  "div",
                  _extends2({}, props, {
                    className: (0, _classnames2.default)(navitemClassName, _index2.default.navitem),
                    style: navitemStyle,
                    disabled,
                    role: "menuitem",
                    tabIndex: "-1",
                    onClick: (0, _chainedFunction2.default)(onClick, navItems.length === 0 ? this.handleSelect : noop3)
                  }),
                  navIcon && _react2.default.createElement("div", _extends2({}, navIconProps, { className: (0, _classnames2.default)(navIconClassName, _index2.default.navicon) })),
                  navText && _react2.default.createElement("div", _extends2({}, navTextProps, { className: (0, _classnames2.default)(navTextClassName, _index2.default.navtext) })),
                  others
                ),
                navItems.length > 0 && _react2.default.createElement(
                  "div",
                  {
                    role: "menu",
                    className: (0, _classnames2.default)(subnavClassName, _index2.default.sidenavSubnav),
                    style: subnavStyle
                  },
                  _react2.default.createElement(
                    Component,
                    {
                      role: "heading",
                      className: (0, _classnames2.default)(_index2.default.sidenavSubnavitem, (_cx3 = {}, _defineProperty(_cx3, _index2.default.highlighted, active), _defineProperty(_cx3, _index2.default.disabled, disabled), _cx3)),
                      style
                    },
                    navText && navText.props ? navText.props.children : null
                  ),
                  navItems
                )
              );
            }
          }]);
          return NavItem2;
        }(_react.PureComponent), _class.propTypes = {
          componentType: _propTypes2.default.any,
          // A custom element for this component.
          componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
          // Highlight the navigation item as active.
          active: _propTypes2.default.bool,
          // Disable the navigation item, making it unselectable.
          disabled: _propTypes2.default.bool,
          // Whether the navigation item is expanded or collapsed.
          expanded: _propTypes2.default.bool,
          // Value passed to the `onSelect` handler, useful for identifying the selected navigation item.
          eventKey: _propTypes2.default.any,
          // Callback fired when the navigation item is clicked.
          onClick: _propTypes2.default.func,
          // Callback fired when a navigation item is selected.
          onSelect: _propTypes2.default.func,
          //
          // Nav props
          //
          // The selected navigation item.
          selected: _propTypes2.default.any,
          //
          // Sub navigation item (internal use only)
          //
          // Whether it is a sub navigation item.
          subnav: _propTypes2.default.bool,
          navitemClassName: _propTypes2.default.string,
          navitemStyle: _propTypes2.default.object,
          subnavClassName: _propTypes2.default.string,
          subnavStyle: _propTypes2.default.object
        }, _class.defaultProps = {
          componentClass: "div",
          active: false,
          disabled: false,
          expanded: false
        }, _temp2);
        NavItem.defaultProps.componentType = NavItem;
        exports2.default = NavItem;
      },
      /* 7 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var NavIcon = function NavIcon2() {
          throw new Error("should not render NavIcon component");
        };
        NavIcon.defaultProps = _extends2({}, NavIcon.defaultProps, {
          componentType: NavIcon
        });
        exports2.default = NavIcon;
      },
      /* 8 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var NavText = function NavText2() {
          throw new Error("should not render NavText component");
        };
        NavText.defaultProps = _extends2({}, NavText.defaultProps, {
          componentType: NavText
        });
        exports2.default = NavText;
      },
      /* 9 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _class, _temp;
        var _classnames = __webpack_require__(1);
        var _classnames2 = _interopRequireDefault(_classnames);
        var _propTypes = __webpack_require__(2);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(0);
        var _react2 = _interopRequireDefault(_react);
        var _index = __webpack_require__(3);
        var _index2 = _interopRequireDefault(_index);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Toggle = (_temp = _class = function(_PureComponent) {
          _inherits(Toggle2, _PureComponent);
          function Toggle2() {
            _classCallCheck(this, Toggle2);
            return _possibleConstructorReturn(this, (Toggle2.__proto__ || Object.getPrototypeOf(Toggle2)).apply(this, arguments));
          }
          _createClass(Toggle2, [{
            key: "render",
            value: function render() {
              var _props = this.props, componentType = _props.componentType, Component = _props.componentClass, expanded = _props.expanded, className = _props.className, children = _props.children, props = _objectWithoutProperties(_props, ["componentType", "componentClass", "expanded", "className", "children"]);
              return _react2.default.createElement(
                Component,
                _extends2({}, props, {
                  role: "button",
                  className: (0, _classnames2.default)(className, _index2.default.sidenavToggle),
                  "aria-expanded": expanded
                }),
                _react2.default.createElement("span", { className: _index2.default.iconBar }),
                _react2.default.createElement("span", { className: _index2.default.iconBar }),
                _react2.default.createElement("span", { className: _index2.default.iconBar }),
                children
              );
            }
          }]);
          return Toggle2;
        }(_react.PureComponent), _class.propTypes = {
          componentType: _propTypes2.default.any,
          // A custom element for this component.
          componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
          // Whether the navigation toggle is disabled.
          disabled: _propTypes2.default.bool,
          // Whether the side navigation is expanded or collapsed.
          expanded: _propTypes2.default.bool
        }, _class.defaultProps = {
          componentClass: "button",
          disabled: false,
          expanded: false
        }, _temp);
        Toggle.defaultProps.componentType = Toggle;
        exports2.default = Toggle;
      },
      /* 10 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _class, _temp2;
        var _chainedFunction = __webpack_require__(5);
        var _chainedFunction2 = _interopRequireDefault(_chainedFunction);
        var _classnames = __webpack_require__(1);
        var _classnames2 = _interopRequireDefault(_classnames);
        var _propTypes = __webpack_require__(2);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(0);
        var _react2 = _interopRequireDefault(_react);
        var _NavItem = __webpack_require__(6);
        var _NavItem2 = _interopRequireDefault(_NavItem);
        var _matchComponent = __webpack_require__(4);
        var _matchComponent2 = _interopRequireDefault(_matchComponent);
        var _index = __webpack_require__(3);
        var _index2 = _interopRequireDefault(_index);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var noop3 = function noop4() {
        };
        var Nav = (_temp2 = _class = function(_PureComponent) {
          _inherits(Nav2, _PureComponent);
          function Nav2() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Nav2);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav2.__proto__ || Object.getPrototypeOf(Nav2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
              expandedNavItem: null,
              selected: _this.props.defaultSelected,
              defaultSelected: _this.props.defaultSelected
            }, _this.isNavItem = (0, _matchComponent2.default)(_NavItem2.default), _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(Nav2, [{
            key: "handleClickOnExpanded",
            value: function handleClickOnExpanded(eventKey, event) {
              if (this.props.expanded) {
                this.setState(function(state) {
                  return {
                    expandedNavItem: state.expandedNavItem !== eventKey ? eventKey : ""
                  };
                });
              }
            }
          }, {
            key: "renderNavItem",
            value: function renderNavItem(child, _ref2) {
              var _this2 = this;
              var onSelect = _ref2.onSelect, props = _objectWithoutProperties(_ref2, ["onSelect"]);
              var _child$props = _extends2({}, child.props), eventKey = _child$props.eventKey;
              return (0, _react.cloneElement)(child, _extends2({}, props, {
                onClick: (0, _chainedFunction2.default)(child.props.onClick, function(event) {
                  _this2.handleClickOnExpanded(eventKey, event);
                }),
                onSelect: (0, _chainedFunction2.default)(this.state.defaultSelected ? function(selected) {
                  _this2.setState({ selected });
                } : noop3, child.props.onSelect, onSelect)
              }));
            }
          }, {
            key: "render",
            value: function render() {
              var _this3 = this;
              var _props = this.props, componentType = _props.componentType, Component = _props.componentClass, onSelect = _props.onSelect, selected = _props.selected, defaultSelected = _props.defaultSelected, expanded = _props.expanded, className = _props.className, children = _props.children, props = _objectWithoutProperties(_props, ["componentType", "componentClass", "onSelect", "selected", "defaultSelected", "expanded", "className", "children"]);
              var currentSelected = this.state.defaultSelected ? this.state.selected : selected;
              return _react2.default.createElement(
                Component,
                _extends2({}, props, {
                  role: "menu",
                  className: (0, _classnames2.default)(className, _index2.default.sidenavNav, _defineProperty({}, _index2.default.expanded, expanded))
                }),
                _react2.default.Children.map(children, function(child) {
                  if (_react2.default.isValidElement(child) && _this3.isNavItem(child)) {
                    return _this3.renderNavItem(child, {
                      onSelect,
                      selected: currentSelected,
                      expanded: !!child.props.expanded || expanded && !!_this3.state.expandedNavItem && _this3.state.expandedNavItem === child.props.eventKey
                    });
                  }
                  return child;
                })
              );
            }
          }]);
          return Nav2;
        }(_react.PureComponent), _class.propTypes = {
          componentType: _propTypes2.default.any,
          // A custom element for this component.
          componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
          // Callback fired when a navigation item is selected.
          onSelect: _propTypes2.default.func,
          // The selected navigation item.
          selected: _propTypes2.default.any,
          // The initially selected navigation item.
          defaultSelected: _propTypes2.default.any,
          //
          // SideNav props
          //
          // Whether the side navigation is expanded or collapsed.
          expanded: _propTypes2.default.bool
        }, _class.defaultProps = {
          componentClass: "div"
        }, _temp2);
        Nav.defaultProps.componentType = Nav;
        exports2.default = Nav;
      },
      /* 11 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.NavText = exports2.NavIcon = exports2.NavItem = exports2.Nav = exports2.Toggle = void 0;
        var _Toggle = __webpack_require__(9);
        Object.defineProperty(exports2, "Toggle", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Toggle).default;
          }
        });
        var _Nav = __webpack_require__(10);
        Object.defineProperty(exports2, "Nav", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Nav).default;
          }
        });
        var _NavItem = __webpack_require__(6);
        Object.defineProperty(exports2, "NavItem", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_NavItem).default;
          }
        });
        var _NavIcon = __webpack_require__(7);
        Object.defineProperty(exports2, "NavIcon", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_NavIcon).default;
          }
        });
        var _NavText = __webpack_require__(8);
        Object.defineProperty(exports2, "NavText", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_NavText).default;
          }
        });
        var _SideNav = __webpack_require__(13);
        var _SideNav2 = _interopRequireDefault(_SideNav);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        module2.exports = _SideNav2.default;
      },
      /* 12 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(0);
        var _react2 = _interopRequireDefault(_react);
        var _matchComponent = __webpack_require__(4);
        var _matchComponent2 = _interopRequireDefault(_matchComponent);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var findComponent = function findComponent2(component) {
          return function(children) {
            var matchComponent = (0, _matchComponent2.default)(component);
            return _react2.default.Children.toArray(children).reduce(function(found, next) {
              if (found === null && next !== null && matchComponent(next)) {
                return next;
              }
              return found;
            }, null);
          };
        };
        exports2.default = findComponent;
      },
      /* 13 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _class, _temp2;
        var _chainedFunction = __webpack_require__(5);
        var _chainedFunction2 = _interopRequireDefault(_chainedFunction);
        var _classnames = __webpack_require__(1);
        var _classnames2 = _interopRequireDefault(_classnames);
        var _propTypes = __webpack_require__(2);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(0);
        var _react2 = _interopRequireDefault(_react);
        var _uncontrollable = __webpack_require__(14);
        var _warning = __webpack_require__(15);
        var _warning2 = _interopRequireDefault(_warning);
        var _Toggle = __webpack_require__(9);
        var _Toggle2 = _interopRequireDefault(_Toggle);
        var _Nav = __webpack_require__(10);
        var _Nav2 = _interopRequireDefault(_Nav);
        var _NavItem = __webpack_require__(6);
        var _NavItem2 = _interopRequireDefault(_NavItem);
        var _NavIcon = __webpack_require__(7);
        var _NavIcon2 = _interopRequireDefault(_NavIcon);
        var _NavText = __webpack_require__(8);
        var _NavText2 = _interopRequireDefault(_NavText);
        var _index = __webpack_require__(3);
        var _index2 = _interopRequireDefault(_index);
        var _matchComponent = __webpack_require__(4);
        var _matchComponent2 = _interopRequireDefault(_matchComponent);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var SideNav = (_temp2 = _class = function(_PureComponent) {
          _inherits(SideNav2, _PureComponent);
          function SideNav2() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, SideNav2);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideNav2.__proto__ || Object.getPrototypeOf(SideNav2)).call.apply(_ref, [this].concat(args))), _this), _this.isToggle = (0, _matchComponent2.default)(_Toggle2.default), _this.isNav = (0, _matchComponent2.default)(_Nav2.default), _this.child = {
              toggle: null,
              nav: null
            }, _this.handleClick = function(event) {
              if (_this.props.disabled) {
                return;
              }
              _this.toggleExpanded("click");
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(SideNav2, [{
            key: "toggleExpanded",
            value: function toggleExpanded(eventType) {
              var expanded = !this.props.expanded;
              if (this.props.onToggle) {
                this.props.onToggle(expanded);
              }
            }
          }, {
            key: "renderToggle",
            value: function renderToggle(child, props) {
              var _this2 = this;
              var ref = function ref2(c) {
                _this2.child.toggle = c;
              };
              if (typeof child.ref === "string") {
                (0, _warning2.default)(false, "String refs are not supported on `<SideNav.Toggle>` component. To apply a ref to the component use the callback signature:\n\n https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
              } else {
                ref = (0, _chainedFunction2.default)(child.ref, ref);
              }
              return (0, _react.cloneElement)(child, _extends2({}, props, {
                ref,
                onClick: (0, _chainedFunction2.default)(child.props.onClick, this.handleClick)
              }));
            }
          }, {
            key: "renderNav",
            value: function renderNav(child, _ref2) {
              var _this3 = this;
              var onSelect = _ref2.onSelect, props = _objectWithoutProperties(_ref2, ["onSelect"]);
              var ref = function ref2(c) {
                _this3.child.nav = c;
              };
              if (typeof child.ref === "string") {
                (0, _warning2.default)(false, "String refs are not supported on `<SideNav.Nav>` component. To apply a ref to the component use the callback signature:\n\n https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
              } else {
                ref = (0, _chainedFunction2.default)(child.ref, ref);
              }
              return (0, _react.cloneElement)(child, _extends2({}, props, {
                ref,
                onSelect: (0, _chainedFunction2.default)(child.props.onSelect, onSelect)
              }));
            }
          }, {
            key: "render",
            value: function render() {
              var _cx, _this4 = this;
              var _props = this.props, componentType = _props.componentType, Component = _props.componentClass, disabled = _props.disabled, expanded = _props.expanded, onToggle = _props.onToggle, onSelect = _props.onSelect, className = _props.className, children = _props.children, props = _objectWithoutProperties(_props, ["componentType", "componentClass", "disabled", "expanded", "onToggle", "onSelect", "className", "children"]);
              return _react2.default.createElement(
                Component,
                _extends2({}, props, {
                  className: (0, _classnames2.default)(className, _index2.default.sidenav, (_cx = {}, _defineProperty(_cx, _index2.default.disabled, disabled), _defineProperty(_cx, _index2.default.expanded, expanded), _defineProperty(_cx, _index2.default.collapsed, !expanded), _cx))
                }),
                _react2.default.Children.map(children, function(child) {
                  if (!_react2.default.isValidElement(child)) {
                    return child;
                  }
                  if (_this4.isToggle(child)) {
                    return _this4.renderToggle(child, {
                      disabled,
                      expanded
                    });
                  }
                  if (_this4.isNav(child)) {
                    return _this4.renderNav(child, {
                      onSelect,
                      expanded
                    });
                  }
                  return child;
                })
              );
            }
          }]);
          return SideNav2;
        }(_react.PureComponent), _class.propTypes = {
          componentType: _propTypes2.default.any,
          // A custom element for this component.
          componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
          // Whether the navigation toggle is disabled.
          disabled: _propTypes2.default.bool,
          // Whether the side navigation is expanded or collapsed.
          expanded: _propTypes2.default.bool,
          // Callback fired when toggling the side navigation between expanded and collapsed state.
          onToggle: _propTypes2.default.func,
          // Callback fired when a navigation item is selected.
          onSelect: _propTypes2.default.func
        }, _class.defaultProps = {
          componentClass: "nav"
        }, _temp2);
        SideNav.defaultProps.componentType = SideNav;
        var UncontrollableSideNav = (0, _uncontrollable.uncontrollable)(SideNav, {
          // Define the pairs of prop/handlers you want to be uncontrollable
          expanded: "onToggle"
        });
        UncontrollableSideNav.Toggle = _Toggle2.default;
        UncontrollableSideNav.Nav = _Nav2.default;
        UncontrollableSideNav.NavItem = _NavItem2.default;
        UncontrollableSideNav.NavIcon = _NavIcon2.default;
        UncontrollableSideNav.NavText = _NavText2.default;
        exports2.default = UncontrollableSideNav;
      },
      /* 14 */
      /***/
      function(module2, exports2) {
        module2.exports = (init_esm(), __toCommonJS(esm_exports));
      },
      /* 15 */
      /***/
      function(module2, exports2) {
        module2.exports = require_browser2();
      }
      /******/
    ]);
  }
});
export default require_lib2();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@trendmicro/react-sidenav/lib/index.js:
  (*! react-sidenav v0.5.0 | (c) 2020 Trend Micro Inc. | MIT | https://github.com/trendmicro-frontend/react-sidenav *)
*/
//# sourceMappingURL=@trendmicro_react-sidenav.js.map
