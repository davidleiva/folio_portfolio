webpackHotUpdate("commons",{

/***/ "./src/components/HeyRecruiter/index.js":
/*!**********************************************!*\
  !*** ./src/components/HeyRecruiter/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/HeyRecruiter/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var HeyRecruiter = function HeyRecruiter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 14
    }
  }, "hey recruiter"));
};

var _default = HeyRecruiter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HeyRecruiter, "HeyRecruiter", "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/HeyRecruiter/index.js");
  reactHotLoader.register(_default, "default", "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/HeyRecruiter/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PageWrapper/PageWrapper.js":
/*!***************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _HeyRecruiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HeyRecruiter */ "./src/components/HeyRecruiter/index.js");
var _this = undefined,
    _jsxFileName = "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/PageWrapper/PageWrapper.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false
};

var PageWrapper = function PageWrapper(_ref) {
  var children = _ref.children,
      _ref$darkTheme = _ref.darkTheme,
      darkTheme = _ref$darkTheme === void 0 ? false : _ref$darkTheme,
      _ref$themeConfig = _ref.themeConfig,
      themeConfig = _ref$themeConfig === void 0 ? null : _ref$themeConfig;
  var gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (darkTheme) {
      gContext.changeTheme({
        headerDark: true,
        bodyDark: true,
        footerDark: true
      });
    } else {
      gContext.changeTheme(Object.assign({}, themeConfigDefault, themeConfig));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeyRecruiter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

__signature__(PageWrapper, "useContext{gContext}\nuseEffect{}");

var _default = PageWrapper;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(themeConfigDefault, "themeConfigDefault", "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/PageWrapper/PageWrapper.js");
  reactHotLoader.register(PageWrapper, "PageWrapper", "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/PageWrapper/PageWrapper.js");
  reactHotLoader.register(_default, "default", "/Users/davidleiva/Projects/personal/folio-gatsby-files/folio-gatsby/src/components/PageWrapper/PageWrapper.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.9ac313010ed53a0b43f8.hot-update.js.map