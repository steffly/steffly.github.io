/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "LEGACY_TOKEN_KEY": () => (/* binding */ LEGACY_TOKEN_KEY),
    /* harmony export */   "REFRESH_TOKEN_KEY": () => (/* binding */ REFRESH_TOKEN_KEY),
    /* harmony export */   "USER_SEEN_KEY": () => (/* binding */ USER_SEEN_KEY),
    /* harmony export */   "getRefreshToken": () => (/* binding */ getRefreshToken),
    /* harmony export */   "handleAuthCallbackMessage": () => (/* binding */ handleAuthCallbackMessage),
    /* harmony export */   "initializeAuthServer": () => (/* binding */ initializeAuthServer),
    /* harmony export */   "isUserRecognized": () => (/* binding */ isUserRecognized),
    /* harmony export */   "logout": () => (/* binding */ logout),
    /* harmony export */   "recognizeUser": () => (/* binding */ recognizeUser),
    /* harmony export */   "storeRefreshToken": () => (/* binding */ storeRefreshToken),
    /* harmony export */   "triggerAuth": () => (/* binding */ triggerAuth)
    /* harmony export */ });
    /* harmony import */ var oauth4webapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! oauth4webapi */ "./node_modules/oauth4webapi/build/index.js");
    /* harmony import */ var typescript_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-cookie */ "./node_modules/typescript-cookie/dist/typescript-cookie.mjs");
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.ts");
    /* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urls */ "./urls.ts");
    /* harmony import */ var _cookiefier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookiefier */ "./cookiefier.ts");
    /* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ "./spinner.ts");
    /* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors */ "./errors.ts");
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    
    
    var USER_SEEN_KEY = 'user_seen';
    var REFRESH_TOKEN_KEY = 'refresh_token';
    var LEGACY_TOKEN_KEY = 'token';
    function isUserRecognized(state) {
      var userSeen = (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)(keyBySender(state, USER_SEEN_KEY));
      return userSeen == 'true';
    }
    function recognizeUser(state) {
      document.cookie = "".concat(keyBySender(state, USER_SEEN_KEY), "=true; Secure; Path=/");
    }
    function getRefreshToken(state) {
      return (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)(keyBySender(state, REFRESH_TOKEN_KEY)) || undefined;
    }
    function storeRefreshToken(state, token) {
      document.cookie = "".concat(keyBySender(state, REFRESH_TOKEN_KEY), "=").concat(token, "; Secure; Path=/; SameSite=Strict");
    }
    function keyBySender(state, subkey) {
      var _a;
      return "remitly_" + ((_a = state.sender.id) !== null && _a !== void 0 ? _a : "default_sender_id") + "_" + subkey;
    }
    function initializeAuthServer(_x) {
      return _initializeAuthServer.apply(this, arguments);
    }
    function _initializeAuthServer() {
      _initializeAuthServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(state) {
        var _a, issuer;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              issuer = new URL('https://auth-preprod.dev.remitly.com');
              if (state.environment === 'production') {
                issuer = new URL('https://auth.remitly.com/.well-known/openid-configuration');
              }
              _context.next = 4;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.discoveryRequest(issuer, {
                algorithm: 'oidc'
              }).then(function (response) {
                return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.processDiscoveryResponse(issuer, response);
              });
            case 4:
              state.authServer = _context.sent;
              if (!(((_a = state.authServer.code_challenge_methods_supported) === null || _a === void 0 ? void 0 : _a.includes('S256')) !== true)) {
                _context.next = 7;
                break;
              }
              throw new Error('Auth server does not support S256');
            case 7:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Auth issuer discovered");
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _initializeAuthServer.apply(this, arguments);
    }
    function triggerAuth(_x2) {
      return _triggerAuth.apply(this, arguments);
    }
    function _triggerAuth() {
      _triggerAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(state) {
        var refreshToken;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              refreshToken = getRefreshToken(state);
              if (refreshToken) {
                postRefreshAuth(state, refreshToken);
              } else {
                popupInitialAuth(state);
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return _triggerAuth.apply(this, arguments);
    }
    function popupInitialAuth(_x3) {
      return _popupInitialAuth.apply(this, arguments);
    }
    function _popupInitialAuth() {
      _popupInitialAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(state) {
        var authUrl, width, height, top, left;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getInitialAuthUrl(state);
            case 2:
              authUrl = _context3.sent;
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "No refresh token present; opening: ".concat(authUrl));
              width = 420;
              height = 640;
              top = window.screen.height / 2 - height / 2;
              left = window.screen.width / 2 - width / 2;
              window.open(authUrl.toString(), 'remitlyWindow', "width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left));
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return _popupInitialAuth.apply(this, arguments);
    }
    function postRefreshAuth(_x4, _x5) {
      return _postRefreshAuth.apply(this, arguments);
    }
    function _postRefreshAuth() {
      _postRefreshAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(state, refreshToken) {
        var response, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Refresh token present; making grant request");
              _context4.next = 3;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.refreshTokenGrantRequest(state.authServer, state.client, refreshToken);
            case 3:
              response = _context4.sent;
              _context4.next = 6;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.processRefreshTokenResponse(state.authServer, state.client, response);
            case 6:
              result = _context4.sent;
              if (!oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.isOAuth2Error(result)) {
                _context4.next = 11;
                break;
              }
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Error using refresh token: ".concat(result.error_description));
              // Retry, this time without the refresh token
              popupInitialAuth(state);
              return _context4.abrupt("return");
            case 11:
              _context4.next = 13;
              return downgradeAndRedirect(state, result);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return _postRefreshAuth.apply(this, arguments);
    }
    function getInitialAuthUrl(_x6) {
      return _getInitialAuthUrl.apply(this, arguments);
    }
    function _getInitialAuthUrl() {
      _getInitialAuthUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(state) {
        var code_challenge, code_challenge_method, authorizationUrl;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              state.codeVerifier = oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.generateRandomCodeVerifier();
              _context5.next = 3;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.calculatePKCECodeChallenge(state.codeVerifier);
            case 3:
              code_challenge = _context5.sent;
              code_challenge_method = 'S256';
              state.authState = Math.random().toString(36);
              // redirect user to as.authorization_endpoint
              authorizationUrl = new URL(state.authServer.authorization_endpoint);
              authorizationUrl.searchParams.set('code_challenge', code_challenge);
              authorizationUrl.searchParams.set('code_challenge_method', code_challenge_method);
              authorizationUrl.searchParams.set('client_id', state.client.client_id);
              authorizationUrl.searchParams.set('redirect_uri', state.authCallbackUrl);
              authorizationUrl.searchParams.set('response_type', 'code');
              authorizationUrl.searchParams.set('scope', 'offline_access auth_token_session');
              authorizationUrl.searchParams.set('state', state.authState);
              authorizationUrl.searchParams.set('country', state.sender.countryCodeAlpha3);
              authorizationUrl.searchParams.set('device_environment_id', state.deid);
              if (state.sender.email) {
                authorizationUrl.searchParams.set('login_hint', JSON.stringify({
                  "email": state.sender.email,
                  "register_account": !isUserRecognized(state)
                }));
              }
              return _context5.abrupt("return", authorizationUrl);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return _getInitialAuthUrl.apply(this, arguments);
    }
    function handleAuthCallbackMessage(_x7, _x8) {
      return _handleAuthCallbackMessage.apply(this, arguments);
    }
    function _handleAuthCallbackMessage() {
      _handleAuthCallbackMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(state, queryString) {
        var url, parameters, response, result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              (0,_spinner__WEBPACK_IMPORTED_MODULE_4__.showSpinner)(state);
              url = new URL(window.location.origin + queryString);
              parameters = oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.validateAuthResponse(state.authServer, state.client, url, state.authState);
              if (!oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.isOAuth2Error(parameters)) {
                _context6.next = 6;
                break;
              }
              throw new Error("Error : ".concat(JSON.stringify(parameters)));
            case 6:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Callback received from auth and validated; making auth code grant request");
              _context6.next = 9;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.authorizationCodeGrantRequest(state.authServer, state.client, parameters, state.authCallbackUrl, state.codeVerifier);
            case 9:
              response = _context6.sent;
              _context6.next = 12;
              return oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.processAuthorizationCodeOAuth2Response(state.authServer, state.client, response);
            case 12:
              result = _context6.sent;
              if (!oauth4webapi__WEBPACK_IMPORTED_MODULE_6__.isOAuth2Error(result)) {
                _context6.next = 15;
                break;
              }
              throw new Error(result.error_description);
            case 15:
              _context6.next = 17;
              return downgradeAndRedirect(state, result);
            case 17:
              _context6.next = 22;
              break;
            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](0);
              (0,_errors__WEBPACK_IMPORTED_MODULE_5__.handleError)(_context6.t0, 'handleAuthCallbackMessage');
            case 22:
              _context6.prev = 22;
              (0,_spinner__WEBPACK_IMPORTED_MODULE_4__.hideSpinner)(state);
              return _context6.finish(22);
            case 25:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 19, 22, 25]]);
      }));
      return _handleAuthCallbackMessage.apply(this, arguments);
    }
    function downgradeAndRedirect(_x9, _x10) {
      return _downgradeAndRedirect.apply(this, arguments);
    }
    function _downgradeAndRedirect() {
      _downgradeAndRedirect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(state, result) {
        var downgradeResult, downgradeJson, token, sendUrl;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              (0,_spinner__WEBPACK_IMPORTED_MODULE_4__.showSpinner)(state);
              if (result.access_token) {
                _context7.next = 4;
                break;
              }
              throw new Error('The access token was nil');
            case 4:
              if (result.refresh_token) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Fetched refresh token");
                storeRefreshToken(state, result.refresh_token);
              }
              _context7.next = 7;
              return fetch("".concat((0,_urls__WEBPACK_IMPORTED_MODULE_2__.getApiBase)(state), "/v1/b2b/downgrade_auth"), {
                method: 'POST',
                headers: {
                  'Authorization': "Bearer ".concat(result.access_token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  source_country_code: state.sender.countryCodeAlpha3,
                  target_country_code: state.recipient.countryCodeAlpha3
                })
              });
            case 7:
              downgradeResult = _context7.sent;
              _context7.next = 10;
              return downgradeResult.json();
            case 10:
              downgradeJson = _context7.sent;
              token = downgradeJson.auth_token;
              if (token) {
                _context7.next = 14;
                break;
              }
              throw new Error('The downgraded auth token was nil');
            case 14:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Auth complete");
              _context7.next = 17;
              return (0,_cookiefier__WEBPACK_IMPORTED_MODULE_3__.cookiefy)(state, token);
            case 17:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Cookiefy called");
              recognizeUser(state);
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "User recognized");
              sendUrl = (0,_urls__WEBPACK_IMPORTED_MODULE_2__.getSendUrl)(state); // After cookiefying the downgraded token, we have to make a subsequent request to see if it still exists;
              // If it doesn't, the client's browser is blocking cookies for iframes
              _context7.next = 23;
              return (0,_cookiefier__WEBPACK_IMPORTED_MODULE_3__.isUserLoggedIn)(state);
            case 23:
              if (!_context7.sent) {
                _context7.next = 28;
                break;
              }
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Iframe opening: ".concat(sendUrl));
              state.iframe.setAttribute("src", sendUrl);
              _context7.next = 30;
              break;
            case 28:
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Popup opening: ".concat(sendUrl));
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.openPopup)(sendUrl, 420, 640);
            case 30:
              _context7.next = 35;
              break;
            case 32:
              _context7.prev = 32;
              _context7.t0 = _context7["catch"](0);
              (0,_errors__WEBPACK_IMPORTED_MODULE_5__.handleError)(_context7.t0, 'handleAuthCallbackMessage');
            case 35:
              _context7.prev = 35;
              (0,_spinner__WEBPACK_IMPORTED_MODULE_4__.hideSpinner)(state);
              return _context7.finish(35);
            case 38:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 32, 35, 38]]);
      }));
      return _downgradeAndRedirect.apply(this, arguments);
    }
    function logout() {
      (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.removeCookie)(LEGACY_TOKEN_KEY);
      (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.removeCookie)(REFRESH_TOKEN_KEY);
    }
    
    /***/ }),
    
    /***/ "./cookiefier.ts":
    /*!***********************!*\
      !*** ./cookiefier.ts ***!
      \***********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "cookiefy": () => (/* binding */ cookiefy),
    /* harmony export */   "getDeidFromCookie": () => (/* binding */ getDeidFromCookie),
    /* harmony export */   "isUserLoggedIn": () => (/* binding */ isUserLoggedIn)
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.ts");
    /* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urls */ "./urls.ts");
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    // 1. Retrieves DE ID from a Remitly domain cookie if one exists
    // 2. Retrieves whether the user is logged in, depending on if a valid Remitly domain token exists
    function getCrossDomainCookieData(_x) {
      return _getCrossDomainCookieData.apply(this, arguments);
    } // Sets the token cookie if passing one into the Authorization header
    function _getCrossDomainCookieData() {
      _getCrossDomainCookieData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(state) {
        var urlPath, url, response, _yield$response$json, isUserLoggedIn, deid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              urlPath = "us/en/access/get_cross_domain_cookie_data";
              url = new URL(urlPath, (0,_urls__WEBPACK_IMPORTED_MODULE_1__.getBaseUrl)(state));
              _context.next = 4;
              return fetch(url.toString(), {
                method: 'GET',
                credentials: 'include'
              });
            case 4:
              response = _context.sent;
              if (!(!response.ok || !state.client.client_id)) {
                _context.next = 7;
                break;
              }
              throw new Error("Failure calling ".concat(urlPath));
            case 7:
              _context.next = 9;
              return response.json();
            case 9:
              _yield$response$json = _context.sent;
              isUserLoggedIn = _yield$response$json.is_token_exist;
              deid = _yield$response$json.de_id;
              return _context.abrupt("return", {
                isUserLoggedIn: isUserLoggedIn,
                deid: deid
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _getCrossDomainCookieData.apply(this, arguments);
    }
    function cookiefy(_x2, _x3) {
      return _cookiefy.apply(this, arguments);
    }
    function _cookiefy() {
      _cookiefy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(state, token) {
        var urlPath, url, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              urlPath = "us/en/access/set_access_token";
              url = new URL(urlPath, (0,_urls__WEBPACK_IMPORTED_MODULE_1__.getBaseUrl)(state));
              _context2.next = 4;
              return fetch(url.toString(), {
                method: 'GET',
                headers: {
                  'Authorization': "Bearer ".concat(token)
                },
                credentials: 'include'
              });
            case 4:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 7;
                break;
              }
              throw new Error("Failure calling ".concat(urlPath));
            case 7:
              (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)(state, "Auth token cookiefied");
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return _cookiefy.apply(this, arguments);
    }
    function getDeidFromCookie(_x4) {
      return _getDeidFromCookie.apply(this, arguments);
    }
    // This is a best guess: We can't really know if a user is logged in, because for security reasons
    // the get_cross_domain_cookie_data API won't tell us if a token is valid, only whether a token exists.
    function _getDeidFromCookie() {
      _getDeidFromCookie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(state) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getCrossDomainCookieData(state);
            case 3:
              return _context3.abrupt("return", _context3.sent.deid);
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", undefined);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }));
      return _getDeidFromCookie.apply(this, arguments);
    }
    function isUserLoggedIn(_x5) {
      return _isUserLoggedIn.apply(this, arguments);
    }
    function _isUserLoggedIn() {
      _isUserLoggedIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(state) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return getCrossDomainCookieData(state);
            case 3:
              return _context4.abrupt("return", _context4.sent.isUserLoggedIn);
            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", false);
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 6]]);
      }));
      return _isUserLoggedIn.apply(this, arguments);
    }
    
    /***/ }),
    
    /***/ "./device.ts":
    /*!*******************!*\
      !*** ./device.ts ***!
      \*******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "handleDeviceEnvironment": () => (/* binding */ handleDeviceEnvironment)
    /* harmony export */ });
    /* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urls */ "./urls.ts");
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.ts");
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    function handleDeviceEnvironment(_x, _x2) {
      return _handleDeviceEnvironment.apply(this, arguments);
    }
    function _handleDeviceEnvironment() {
      _handleDeviceEnvironment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(state, deid) {
        var dehash, method, requestInit, requestBody, deviceEnvironmentUrl, response, deData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dehash = undefined;
              method = deid ? 'PUT' : 'POST';
              requestInit = {
                method: method,
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              requestBody = createDeviceEnvironmentRequestBody(state.appId, dehash);
              requestInit.body = JSON.stringify(requestBody);
              deviceEnvironmentUrl = (0,_urls__WEBPACK_IMPORTED_MODULE_0__.getApiBase)(state) + "/proxy/ces/v1/device-environment";
              _context.next = 8;
              return fetch(deviceEnvironmentUrl.toString(), requestInit);
            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();
            case 11:
              deData = _context.sent;
              deid = deData.device_environment_id;
              dehash = deData.device_environment_data_hash;
              (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(state, "Device environment handled via method ".concat(method, ". DE ID: ").concat(deid, " DE Hash: ").concat(dehash));
              return _context.abrupt("return", {
                deid: deid,
                dehash: dehash
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _handleDeviceEnvironment.apply(this, arguments);
    }
    function createDeviceEnvironmentRequestBody(appId, dataHash) {
      return {
        app_data: {
          app_id: appId
        },
        environment_data: {
          environment_type: 'web'
        },
        data_hash: dataHash
      };
    }
    
    /***/ }),
    
    /***/ "./errors.ts":
    /*!*******************!*\
      !*** ./errors.ts ***!
      \*******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "catchErrors": () => (/* binding */ catchErrors),
    /* harmony export */   "handleError": () => (/* binding */ handleError)
    /* harmony export */ });
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    function handleError(error, name) {
      var message = "There was an unexpected error calling ".concat(name);
      if (error instanceof Error) {
        message += ": ".concat(error.message);
      }
      alert(message);
      // TODO https://remitly.atlassian.net/browse/CP-661: Add bugsnag
    }
    
    function catchErrors(func, name) {
      var safeFunc = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return func.apply(void 0, _args);
              case 3:
                _context.next = 8;
                break;
              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                handleError(_context.t0, name);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 5]]);
        }));
        return function safeFunc() {
          return _ref.apply(this, arguments);
        };
      }();
      return safeFunc;
    }
    
    /***/ }),
    
    /***/ "./initialize.ts":
    /*!***********************!*\
      !*** ./initialize.ts ***!
      \***********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "performInitializeCallsIfNeeded": () => (/* binding */ performInitializeCallsIfNeeded)
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.ts");
    /* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urls */ "./urls.ts");
    /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./auth.ts");
    /* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device */ "./device.ts");
    /* harmony import */ var _cookiefier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookiefier */ "./cookiefier.ts");
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    // All API calls needed for initialization should go here
    // They should not use any RemitlyCeConfiguration values that are calculated by the deriveValues() function
    function initializeCalls(_x) {
      return _initializeCalls.apply(this, arguments);
    }
    function _initializeCalls() {
      _initializeCalls = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(state) {
        var urlPath, url, response, appConfig, deid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_auth__WEBPACK_IMPORTED_MODULE_2__.initializeAuthServer)(state);
            case 2:
              urlPath = "v1/b2b/app/".concat(state.appId);
              url = new URL(urlPath, (0,_urls__WEBPACK_IMPORTED_MODULE_1__.getApiBase)(state));
              _context.next = 6;
              return fetch(url.toString());
            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();
            case 9:
              appConfig = _context.sent;
              state.client = {
                client_id: appConfig === null || appConfig === void 0 ? void 0 : appConfig.oauth_client_id,
                token_endpoint_auth_method: 'none'
              };
              if (!state.client.client_id && state.environment != 'production') {
                // Fallback Client ID to unblock testing
                state.client.client_id = '3aee13ea-3779-4c1c-9af0-700f7aecbd97';
              }
              if (!(!response.ok || !state.client.client_id)) {
                _context.next = 14;
                break;
              }
              throw new Error("Failure calling ".concat(urlPath));
            case 14:
              (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)(state, "Fetched client ID: ".concat(state.client.client_id));
              _context.next = 17;
              return (0,_cookiefier__WEBPACK_IMPORTED_MODULE_4__.getDeidFromCookie)(state);
            case 17:
              deid = _context.sent;
              _context.next = 20;
              return (0,_device__WEBPACK_IMPORTED_MODULE_3__.handleDeviceEnvironment)(state, deid);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _initializeCalls.apply(this, arguments);
    }
    var initializationTask;
    function performInitializeCallsIfNeeded(_x2) {
      return _performInitializeCallsIfNeeded.apply(this, arguments);
    }
    function _performInitializeCallsIfNeeded() {
      _performInitializeCallsIfNeeded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(state) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!initializationTask) {
                initializationTask = initializeCalls(state);
              }
              _context2.prev = 1;
              _context2.next = 4;
              return initializationTask;
            case 4:
              _context2.next = 10;
              break;
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              initializationTask = undefined;
              throw _context2.t0;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 6]]);
      }));
      return _performInitializeCallsIfNeeded.apply(this, arguments);
    }
    
    /***/ }),
    
    /***/ "./shapes.ts":
    /*!*******************!*\
      !*** ./shapes.ts ***!
      \*******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "getButtonShape": () => (/* binding */ getButtonShape),
    /* harmony export */   "getCurrentAndNextShapes": () => (/* binding */ getCurrentAndNextShapes),
    /* harmony export */   "getCurrentShape": () => (/* binding */ getCurrentShape),
    /* harmony export */   "getShape": () => (/* binding */ getShape)
    /* harmony export */ });
    /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./styles.ts");
    
    function getShape(state) {
      switch (state.displayStatus) {
        case "closed":
        case "hidden":
          if (state.isMobile) {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.hiddenAtBottomStyle;
          }
          if (state.layout.modalPosition === 'left') {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.hiddenLeftStyle;
          }
          if (state.layout.modalPosition === 'right') {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.hiddenRightStyle;
          }
          return _styles__WEBPACK_IMPORTED_MODULE_0__.hiddenCenterStyle;
        case "floating":
          if (state.isMobile) {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.bottomBarStyle;
          }
          return _styles__WEBPACK_IMPORTED_MODULE_0__.fabStyle;
        case "open":
        default:
          if (state.isMobile) {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.mobileModalStyle;
          }
          if (state.layout.modalPosition === 'left') {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.leftModalStyle;
          }
          if (state.layout.modalPosition === 'right') {
            return _styles__WEBPACK_IMPORTED_MODULE_0__.rightModalStyle;
          }
          return _styles__WEBPACK_IMPORTED_MODULE_0__.centerModalStyle;
      }
    }
    function getButtonShape(state) {
      var buttonContainerPos = state.buttonContainer.getBoundingClientRect();
      var top = buttonContainerPos.top,
        left = buttonContainerPos.left,
        width = buttonContainerPos.width,
        height = buttonContainerPos.height;
      return {
        position: 'fixed',
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        borderRadius: '0px',
        opacity: "1",
        transform: "none",
        bottom: "auto",
        right: "auto"
      };
    }
    function getCurrentShape(state) {
      if (state.displayStatus === 'closed' && state.isFromButton) {
        return getButtonShape(state);
      }
      return getShape(state);
    }
    function getCurrentAndNextShapes(state, newState) {
      var currentShape = getCurrentShape(state);
      var nextShape = getShape(Object.assign(Object.assign({}, state), newState));
      if (!currentShape) {
        currentShape = Object.assign(Object.assign({}, nextShape), {
          opacity: '0'
        });
      }
      return {
        currentShape: currentShape,
        nextShape: nextShape
      };
    }
    
    /***/ }),
    
    /***/ "./spinner.ts":
    /*!********************!*\
      !*** ./spinner.ts ***!
      \********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "attachSpinner": () => (/* binding */ attachSpinner),
    /* harmony export */   "hideSpinner": () => (/* binding */ hideSpinner),
    /* harmony export */   "showSpinner": () => (/* binding */ showSpinner)
    /* harmony export */ });
    function attachSpinner(container) {
      var spinner = document.createElement("div");
      spinner.className = "spinner";
      spinner.innerHTML = "<div></div><div></div><div></div><div></div>";
      container.appendChild(getSpinnerStyling());
      container.appendChild(spinner);
      return spinner;
    }
    function getSpinnerStyling() {
      var style = document.createElement('style');
      style.id = 'dynamic-style';
      style.innerHTML = "\n    .spinner {\n        display: inline-block;\n        width: 80px;\n        height: 80px;\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 100;\n      }\n      .spinner div {\n        box-sizing: border-box;\n        display: block;\n        position: absolute;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border: 8px solid #fff;\n        border-radius: 50%;\n        animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n        border-color: #fff transparent transparent transparent;\n      }\n      .spinner div:nth-child(1) {\n        animation-delay: -0.45s;\n      }\n      .spinner div:nth-child(2) {\n        animation-delay: -0.3s;\n      }\n      .spinner div:nth-child(3) {\n        animation-delay: -0.15s;\n      }\n      @keyframes spinner {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }";
      return style;
    }
    function showSpinner(state) {
      console.log('>>>>>>>>> showSpinner');
      state.spinner.style.display = "inline-block";
    }
    function hideSpinner(state) {
      console.log('>>>>>>>>> hideSpinner');
      state.spinner.style.display = "none";
    }
    
    /***/ }),
    
    /***/ "./styles.ts":
    /*!*******************!*\
      !*** ./styles.ts ***!
      \*******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "BackgroundColor": () => (/* binding */ BackgroundColor),
    /* harmony export */   "DarkBlue": () => (/* binding */ DarkBlue),
    /* harmony export */   "bottomBarStyle": () => (/* binding */ bottomBarStyle),
    /* harmony export */   "centerModalStyle": () => (/* binding */ centerModalStyle),
    /* harmony export */   "easeClose": () => (/* binding */ easeClose),
    /* harmony export */   "easeOpen": () => (/* binding */ easeOpen),
    /* harmony export */   "fabStyle": () => (/* binding */ fabStyle),
    /* harmony export */   "hiddenAtBottomStyle": () => (/* binding */ hiddenAtBottomStyle),
    /* harmony export */   "hiddenCenterStyle": () => (/* binding */ hiddenCenterStyle),
    /* harmony export */   "hiddenLeftStyle": () => (/* binding */ hiddenLeftStyle),
    /* harmony export */   "hiddenRightStyle": () => (/* binding */ hiddenRightStyle),
    /* harmony export */   "leftModalStyle": () => (/* binding */ leftModalStyle),
    /* harmony export */   "mobileModalStyle": () => (/* binding */ mobileModalStyle),
    /* harmony export */   "mobileWidth": () => (/* binding */ mobileWidth),
    /* harmony export */   "rightModalStyle": () => (/* binding */ rightModalStyle)
    /* harmony export */ });
    var BackgroundColor = '#FBF8F2';
    var DarkBlue = '#226ba4';
    var easeOpen = "cubic-bezier(0.7,0,0.3,1)";
    var easeClose = "cubic-bezier(0.7,0,0.3,1)";
    var mobileWidth = 480;
    var centerModalStyle = {
      position: "fixed",
      top: "50%",
      right: "auto",
      bottom: "auto",
      left: "50%",
      width: "380px",
      height: "100%",
      maxHeight: "680px",
      transform: "translate(-50%, -50%)",
      borderRadius: "16px",
      opacity: "1",
      borderWidth: "0px"
    };
    var leftModalStyle = Object.assign(Object.assign({}, centerModalStyle), {
      left: "6%",
      right: "auto",
      transform: "translate(0, -50%)"
    });
    var rightModalStyle = Object.assign(Object.assign({}, centerModalStyle), {
      right: "6%",
      left: "auto",
      transform: "translate(0, -50%)"
    });
    var mobileModalStyle = {
      position: "fixed",
      top: "auto",
      right: "auto",
      bottom: "0px",
      left: "auto",
      width: "100%",
      height: "90%",
      maxHeight: "none",
      transform: "none",
      borderRadius: "16px 16px 0px 0px",
      opacity: "1",
      borderWidth: "0px"
    };
    var fabStyle = {
      position: 'fixed',
      top: 'auto',
      right: "15%",
      bottom: "15%",
      left: 'auto',
      width: '64px',
      height: '64px',
      maxHeight: "none",
      transform: "none",
      borderRadius: '32px',
      opacity: "1",
      borderWidth: "2px"
    };
    var bottomBarStyle = {
      position: 'fixed',
      top: 'auto',
      right: "0px",
      bottom: "0px",
      left: '0',
      width: 'auto',
      height: '64px',
      maxHeight: "none",
      transform: "none",
      borderRadius: '16px',
      opacity: "1",
      borderWidth: "0px"
    };
    var hiddenAtBottomStyle = Object.assign(Object.assign({}, mobileModalStyle), {
      height: '0px'
    });
    var hiddenLeftStyle = Object.assign(Object.assign({}, leftModalStyle), {
      left: "-10%",
      opacity: "0"
    });
    var hiddenCenterStyle = Object.assign(Object.assign({}, centerModalStyle), {
      opacity: "0"
    });
    var hiddenRightStyle = Object.assign(Object.assign({}, rightModalStyle), {
      right: "-10%",
      opacity: "0"
    });
    
    /***/ }),
    
    /***/ "./urls.ts":
    /*!*****************!*\
      !*** ./urls.ts ***!
      \*****************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "getApiBase": () => (/* binding */ getApiBase),
    /* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl),
    /* harmony export */   "getSendUrl": () => (/* binding */ getSendUrl),
    /* harmony export */   "getSplashUrl": () => (/* binding */ getSplashUrl)
    /* harmony export */ });
    function getApiBase(config) {
      if (config.environment === "development" || config.environment === "staging") {
        return "https://api-preprod.dev.remitly.com";
      }
      return "https://api.remitly.io";
    }
    function getBaseUrl(state) {
      if (state.environment === "development" || state.environment === "staging") {
        return "https://preprod.dev.remitly.com";
      }
      return "https://remitly.com";
    }
    function getSplashUrl(state) {
      var _a;
      var baseUrl = getBaseUrl(state);
      var urlString = [baseUrl, state.sender.countryCodeAlpha3, state.sender.languageCode, state.recipient.countryCodeAlpha3, state.appId].filter(function (x) {
        return !!x;
      }).join("/");
      var url = new URL(urlString);
      var params = url.searchParams;
      params.set('utm_medium', 'channelpartner');
      params.set('utm_source', (_a = state.appId) !== null && _a !== void 0 ? _a : '');
      params.set('ce_boarding_page', 'welcome');
      return url.href;
    }
    function getSendUrl(state) {
      var _a, _b;
      var baseUrl = getBaseUrl(state);
      var urlString = [baseUrl, state.sender.countryCodeAlpha3, state.sender.languageCode, 'access', 'onboarding'].filter(function (x) {
        return !!x;
      }).join("/");
      var url = new URL(urlString);
      var params = url.searchParams;
      params.set('utm_medium', 'channelpartner');
      params.set('utm_source', (_a = state.appId) !== null && _a !== void 0 ? _a : '');
      params.set('app_id', (_b = state.appId) !== null && _b !== void 0 ? _b : '');
      return url.href;
    }
    
    /***/ }),
    
    /***/ "./utils.ts":
    /*!******************!*\
      !*** ./utils.ts ***!
      \******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "getIsMobile": () => (/* binding */ getIsMobile),
    /* harmony export */   "log": () => (/* binding */ log),
    /* harmony export */   "openPopup": () => (/* binding */ openPopup)
    /* harmony export */ });
    /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./styles.ts");
    
    var getIsMobile = function getIsMobile() {
      return window.innerWidth <= _styles__WEBPACK_IMPORTED_MODULE_0__.mobileWidth;
    };
    var log = function log(state, message) {
      if (state.enableConsoleLogs) {
        console.log(message);
      }
    };
    function openPopup(url, width, height) {
      var top = window.screen.height / 2 - height / 2;
      var left = window.screen.width / 2 - width / 2;
      window.open(url.toString(), 'remitlyWindow', "width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left));
    }
    
    /***/ }),
    
    /***/ "./node_modules/oauth4webapi/build/index.js":
    /*!**************************************************!*\
      !*** ./node_modules/oauth4webapi/build/index.js ***!
      \**************************************************/
    /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "OperationProcessingError": () => (/* binding */ OperationProcessingError),
    /* harmony export */   "UnsupportedOperationError": () => (/* binding */ UnsupportedOperationError),
    /* harmony export */   "authorizationCodeGrantRequest": () => (/* binding */ authorizationCodeGrantRequest),
    /* harmony export */   "calculatePKCECodeChallenge": () => (/* binding */ calculatePKCECodeChallenge),
    /* harmony export */   "clientCredentialsGrantRequest": () => (/* binding */ clientCredentialsGrantRequest),
    /* harmony export */   "deviceAuthorizationRequest": () => (/* binding */ deviceAuthorizationRequest),
    /* harmony export */   "deviceCodeGrantRequest": () => (/* binding */ deviceCodeGrantRequest),
    /* harmony export */   "discoveryRequest": () => (/* binding */ discoveryRequest),
    /* harmony export */   "expectNoNonce": () => (/* binding */ expectNoNonce),
    /* harmony export */   "expectNoState": () => (/* binding */ expectNoState),
    /* harmony export */   "generateKeyPair": () => (/* binding */ generateKeyPair),
    /* harmony export */   "generateRandomCodeVerifier": () => (/* binding */ generateRandomCodeVerifier),
    /* harmony export */   "generateRandomNonce": () => (/* binding */ generateRandomNonce),
    /* harmony export */   "generateRandomState": () => (/* binding */ generateRandomState),
    /* harmony export */   "getValidatedIdTokenClaims": () => (/* binding */ getValidatedIdTokenClaims),
    /* harmony export */   "introspectionRequest": () => (/* binding */ introspectionRequest),
    /* harmony export */   "isOAuth2Error": () => (/* binding */ isOAuth2Error),
    /* harmony export */   "issueRequestObject": () => (/* binding */ issueRequestObject),
    /* harmony export */   "parseWwwAuthenticateChallenges": () => (/* binding */ parseWwwAuthenticateChallenges),
    /* harmony export */   "processAuthorizationCodeOAuth2Response": () => (/* binding */ processAuthorizationCodeOAuth2Response),
    /* harmony export */   "processAuthorizationCodeOpenIDResponse": () => (/* binding */ processAuthorizationCodeOpenIDResponse),
    /* harmony export */   "processClientCredentialsResponse": () => (/* binding */ processClientCredentialsResponse),
    /* harmony export */   "processDeviceAuthorizationResponse": () => (/* binding */ processDeviceAuthorizationResponse),
    /* harmony export */   "processDeviceCodeResponse": () => (/* binding */ processDeviceCodeResponse),
    /* harmony export */   "processDiscoveryResponse": () => (/* binding */ processDiscoveryResponse),
    /* harmony export */   "processIntrospectionResponse": () => (/* binding */ processIntrospectionResponse),
    /* harmony export */   "processPushedAuthorizationResponse": () => (/* binding */ processPushedAuthorizationResponse),
    /* harmony export */   "processRefreshTokenResponse": () => (/* binding */ processRefreshTokenResponse),
    /* harmony export */   "processRevocationResponse": () => (/* binding */ processRevocationResponse),
    /* harmony export */   "processUserInfoResponse": () => (/* binding */ processUserInfoResponse),
    /* harmony export */   "protectedResourceRequest": () => (/* binding */ protectedResourceRequest),
    /* harmony export */   "pushedAuthorizationRequest": () => (/* binding */ pushedAuthorizationRequest),
    /* harmony export */   "refreshTokenGrantRequest": () => (/* binding */ refreshTokenGrantRequest),
    /* harmony export */   "revocationRequest": () => (/* binding */ revocationRequest),
    /* harmony export */   "skipAuthTimeCheck": () => (/* binding */ skipAuthTimeCheck),
    /* harmony export */   "skipStateCheck": () => (/* binding */ skipStateCheck),
    /* harmony export */   "skipSubjectCheck": () => (/* binding */ skipSubjectCheck),
    /* harmony export */   "userInfoRequest": () => (/* binding */ userInfoRequest),
    /* harmony export */   "validateAuthResponse": () => (/* binding */ validateAuthResponse),
    /* harmony export */   "validateJwtAuthResponse": () => (/* binding */ validateJwtAuthResponse)
    /* harmony export */ });
    let USER_AGENT;
    if (typeof navigator === 'undefined' || !navigator.userAgent?.startsWith?.('Mozilla/5.0 ')) {
        const NAME = 'oauth4webapi';
        const VERSION = 'v2.1.0';
        USER_AGENT = `${NAME}/${VERSION}`;
    }
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    function buf(input) {
        if (typeof input === 'string') {
            return encoder.encode(input);
        }
        return decoder.decode(input);
    }
    const CHUNK_SIZE = 0x8000;
    function encodeBase64Url(input) {
        if (input instanceof ArrayBuffer) {
            input = new Uint8Array(input);
        }
        const arr = [];
        for (let i = 0; i < input.byteLength; i += CHUNK_SIZE) {
            arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
        }
        return btoa(arr.join('')).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    }
    function decodeBase64Url(input) {
        try {
            const binary = atob(input.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''));
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            return bytes;
        }
        catch {
            throw new TypeError('The input to be decoded is not correctly encoded.');
        }
    }
    function b64u(input) {
        if (typeof input === 'string') {
            return decodeBase64Url(input);
        }
        return encodeBase64Url(input);
    }
    class LRU {
        constructor(maxSize) {
            this.cache = new Map();
            this._cache = new Map();
            this.maxSize = maxSize;
        }
        get(key) {
            let v = this.cache.get(key);
            if (v) {
                return v;
            }
            if ((v = this._cache.get(key))) {
                this.update(key, v);
                return v;
            }
            return undefined;
        }
        has(key) {
            return this.cache.has(key) || this._cache.has(key);
        }
        set(key, value) {
            if (this.cache.has(key)) {
                this.cache.set(key, value);
            }
            else {
                this.update(key, value);
            }
            return this;
        }
        delete(key) {
            if (this.cache.has(key)) {
                return this.cache.delete(key);
            }
            if (this._cache.has(key)) {
                return this._cache.delete(key);
            }
            return false;
        }
        update(key, value) {
            this.cache.set(key, value);
            if (this.cache.size >= this.maxSize) {
                this._cache = this.cache;
                this.cache = new Map();
            }
        }
    }
    class UnsupportedOperationError extends Error {
        constructor(message) {
            super(message ?? 'operation not supported');
            this.name = this.constructor.name;
            Error.captureStackTrace?.(this, this.constructor);
        }
    }
    class OperationProcessingError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
            Error.captureStackTrace?.(this, this.constructor);
        }
    }
    const OPE = OperationProcessingError;
    const dpopNonces = new LRU(100);
    function isCryptoKey(key) {
        return key instanceof CryptoKey;
    }
    function isPrivateKey(key) {
        return isCryptoKey(key) && key.type === 'private';
    }
    function isPublicKey(key) {
        return isCryptoKey(key) && key.type === 'public';
    }
    const SUPPORTED_JWS_ALGS = [
        'PS256',
        'ES256',
        'RS256',
        'PS384',
        'ES384',
        'RS384',
        'PS512',
        'ES512',
        'RS512',
        'EdDSA',
    ];
    function processDpopNonce(response) {
        const url = new URL(response.url);
        if (response.headers.has('dpop-nonce')) {
            dpopNonces.set(url.origin, response.headers.get('dpop-nonce'));
        }
        return response;
    }
    function normalizeTyp(value) {
        return value.toLowerCase().replace(/^application\//, '');
    }
    function isJsonObject(input) {
        if (input === null || typeof input !== 'object' || Array.isArray(input)) {
            return false;
        }
        return true;
    }
    function prepareHeaders(input) {
        if (input !== undefined && !(input instanceof Headers)) {
            throw new TypeError('"options.headers" must be an instance of Headers');
        }
        const headers = new Headers(input);
        if (USER_AGENT && !headers.has('user-agent')) {
            headers.set('user-agent', USER_AGENT);
        }
        if (headers.has('authorization')) {
            throw new TypeError('"options.headers" must not include the "authorization" header name');
        }
        if (headers.has('dpop')) {
            throw new TypeError('"options.headers" must not include the "dpop" header name');
        }
        return headers;
    }
    function signal(value) {
        if (typeof value === 'function') {
            value = value();
        }
        if (!(value instanceof AbortSignal)) {
            throw new TypeError('"options.signal" must return or be an instance of AbortSignal');
        }
        return value;
    }
    async function discoveryRequest(issuerIdentifier, options) {
        if (!(issuerIdentifier instanceof URL)) {
            throw new TypeError('"issuerIdentifier" must be an instance of URL');
        }
        if (issuerIdentifier.protocol !== 'https:' && issuerIdentifier.protocol !== 'http:') {
            throw new TypeError('"issuer.protocol" must be "https:" or "http:"');
        }
        const url = new URL(issuerIdentifier.href);
        switch (options?.algorithm) {
            case undefined:
            case 'oidc':
                url.pathname = `${url.pathname}/.well-known/openid-configuration`.replace('//', '/');
                break;
            case 'oauth2':
                if (url.pathname === '/') {
                    url.pathname = `.well-known/oauth-authorization-server`;
                }
                else {
                    url.pathname = `.well-known/oauth-authorization-server/${url.pathname}`.replace('//', '/');
                }
                break;
            default:
                throw new TypeError('"options.algorithm" must be "oidc" (default), or "oauth2"');
        }
        const headers = prepareHeaders(options?.headers);
        headers.set('accept', 'application/json');
        return fetch(url.href, {
            headers,
            method: 'GET',
            redirect: 'manual',
            signal: options?.signal ? signal(options.signal) : null,
        }).then(processDpopNonce);
    }
    function validateString(input) {
        return typeof input === 'string' && input.length !== 0;
    }
    async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
        if (!(expectedIssuerIdentifier instanceof URL)) {
            throw new TypeError('"expectedIssuer" must be an instance of URL');
        }
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            throw new OPE('"response" is not a conform Authorization Server Metadata response');
        }
        assertReadableResponse(response);
        let json;
        try {
            json = await response.json();
        }
        catch {
            throw new OPE('failed to parse "response" body as JSON');
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!validateString(json.issuer)) {
            throw new OPE('"response" body "issuer" property must be a non-empty string');
        }
        if (new URL(json.issuer).href !== expectedIssuerIdentifier.href) {
            throw new OPE('"response" body "issuer" does not match "expectedIssuer"');
        }
        return json;
    }
    function randomBytes() {
        return b64u(crypto.getRandomValues(new Uint8Array(32)));
    }
    function generateRandomCodeVerifier() {
        return randomBytes();
    }
    function generateRandomState() {
        return randomBytes();
    }
    function generateRandomNonce() {
        return randomBytes();
    }
    async function calculatePKCECodeChallenge(codeVerifier) {
        if (!validateString(codeVerifier)) {
            throw new TypeError('"codeVerifier" must be a non-empty string');
        }
        return b64u(await crypto.subtle.digest({ name: 'SHA-256' }, buf(codeVerifier)));
    }
    function getKeyAndKid(input) {
        if (input instanceof CryptoKey) {
            return { key: input };
        }
        if (!(input?.key instanceof CryptoKey)) {
            return {};
        }
        if (input.kid !== undefined && !validateString(input.kid)) {
            throw new TypeError('"kid" must be a non-empty string');
        }
        return { key: input.key, kid: input.kid };
    }
    function formUrlEncode(token) {
        return encodeURIComponent(token).replace(/%20/g, '+');
    }
    function clientSecretBasic(clientId, clientSecret) {
        const username = formUrlEncode(clientId);
        const password = formUrlEncode(clientSecret);
        const credentials = btoa(`${username}:${password}`);
        return `Basic ${credentials}`;
    }
    function psAlg(key) {
        switch (key.algorithm.hash.name) {
            case 'SHA-256':
                return 'PS256';
            case 'SHA-384':
                return 'PS384';
            case 'SHA-512':
                return 'PS512';
            default:
                throw new UnsupportedOperationError('unsupported RsaHashedKeyAlgorithm hash name');
        }
    }
    function rsAlg(key) {
        switch (key.algorithm.hash.name) {
            case 'SHA-256':
                return 'RS256';
            case 'SHA-384':
                return 'RS384';
            case 'SHA-512':
                return 'RS512';
            default:
                throw new UnsupportedOperationError('unsupported RsaHashedKeyAlgorithm hash name');
        }
    }
    function esAlg(key) {
        switch (key.algorithm.namedCurve) {
            case 'P-256':
                return 'ES256';
            case 'P-384':
                return 'ES384';
            case 'P-521':
                return 'ES512';
            default:
                throw new UnsupportedOperationError('unsupported EcKeyAlgorithm namedCurve');
        }
    }
    function keyToJws(key) {
        switch (key.algorithm.name) {
            case 'RSA-PSS':
                return psAlg(key);
            case 'RSASSA-PKCS1-v1_5':
                return rsAlg(key);
            case 'ECDSA':
                return esAlg(key);
            case 'Ed25519':
            case 'Ed448':
                return 'EdDSA';
            default:
                throw new UnsupportedOperationError('unsupported CryptoKey algorithm name');
        }
    }
    function epochTime() {
        return Math.floor(Date.now() / 1000);
    }
    function clientAssertion(as, client) {
        const now = epochTime();
        return {
            jti: randomBytes(),
            aud: [as.issuer, as.token_endpoint],
            exp: now + 60,
            iat: now,
            nbf: now,
            iss: client.client_id,
            sub: client.client_id,
        };
    }
    async function privateKeyJwt(as, client, key, kid) {
        return jwt({
            alg: keyToJws(key),
            kid,
        }, clientAssertion(as, client), key);
    }
    function assertAs(as) {
        if (typeof as !== 'object' || as === null) {
            throw new TypeError('"as" must be an object');
        }
        if (!validateString(as.issuer)) {
            throw new TypeError('"as.issuer" property must be a non-empty string');
        }
        return true;
    }
    function assertClient(client) {
        if (typeof client !== 'object' || client === null) {
            throw new TypeError('"client" must be an object');
        }
        if (!validateString(client.client_id)) {
            throw new TypeError('"client.client_id" property must be a non-empty string');
        }
        return true;
    }
    function assertClientSecret(clientSecret) {
        if (!validateString(clientSecret)) {
            throw new TypeError('"client.client_secret" property must be a non-empty string');
        }
        return clientSecret;
    }
    function assertNoClientPrivateKey(clientAuthMethod, clientPrivateKey) {
        if (clientPrivateKey !== undefined) {
            throw new TypeError(`"options.clientPrivateKey" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
        }
    }
    function assertNoClientSecret(clientAuthMethod, clientSecret) {
        if (clientSecret !== undefined) {
            throw new TypeError(`"client.client_secret" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
        }
    }
    async function clientAuthentication(as, client, body, headers, clientPrivateKey) {
        body.delete('client_secret');
        body.delete('client_assertion_type');
        body.delete('client_assertion');
        switch (client.token_endpoint_auth_method) {
            case undefined:
            case 'client_secret_basic': {
                assertNoClientPrivateKey('client_secret_basic', clientPrivateKey);
                headers.set('authorization', clientSecretBasic(client.client_id, assertClientSecret(client.client_secret)));
                break;
            }
            case 'client_secret_post': {
                assertNoClientPrivateKey('client_secret_post', clientPrivateKey);
                body.set('client_id', client.client_id);
                body.set('client_secret', assertClientSecret(client.client_secret));
                break;
            }
            case 'private_key_jwt': {
                assertNoClientSecret('private_key_jwt', client.client_secret);
                if (clientPrivateKey === undefined) {
                    throw new TypeError('"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"');
                }
                const { key, kid } = getKeyAndKid(clientPrivateKey);
                if (!isPrivateKey(key)) {
                    throw new TypeError('"options.clientPrivateKey.key" must be a private CryptoKey');
                }
                body.set('client_id', client.client_id);
                body.set('client_assertion_type', 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer');
                body.set('client_assertion', await privateKeyJwt(as, client, key, kid));
                break;
            }
            case 'none': {
                assertNoClientSecret('none', client.client_secret);
                assertNoClientPrivateKey('none', clientPrivateKey);
                body.set('client_id', client.client_id);
                break;
            }
            default:
                throw new UnsupportedOperationError('unsupported client token_endpoint_auth_method');
        }
    }
    async function jwt(header, claimsSet, key) {
        if (!key.usages.includes('sign')) {
            throw new TypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"');
        }
        const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(claimsSet)))}`;
        const signature = b64u(await crypto.subtle.sign(keyToSubtle(key), key, buf(input)));
        return `${input}.${signature}`;
    }
    async function issueRequestObject(as, client, parameters, privateKey) {
        assertAs(as);
        assertClient(client);
        if (!(parameters instanceof URLSearchParams)) {
            throw new TypeError('"parameters" must be an instance of URLSearchParams');
        }
        parameters = new URLSearchParams(parameters);
        const { key, kid } = getKeyAndKid(privateKey);
        if (!isPrivateKey(key)) {
            throw new TypeError('"privateKey.key" must be a private CryptoKey');
        }
        parameters.set('client_id', client.client_id);
        const now = epochTime();
        const claims = {
            ...Object.fromEntries(parameters.entries()),
            jti: randomBytes(),
            aud: as.issuer,
            exp: now + 60,
            iat: now,
            nbf: now,
            iss: client.client_id,
        };
        let resource;
        if (parameters.has('resource') &&
            (resource = parameters.getAll('resource')) &&
            resource.length > 1) {
            claims.resource = resource;
        }
        if (parameters.has('claims')) {
            const value = parameters.get('claims');
            if (value === '[object Object]') {
                throw new OPE('"claims" parameter must be passed as a UTF-8 encoded JSON');
            }
            try {
                claims.claims = JSON.parse(value);
            }
            catch {
                throw new OPE('failed to parse the "claims" parameter as JSON');
            }
            if (!isJsonObject(claims.claims)) {
                throw new OPE('"claims" parameter must be a top level object');
            }
        }
        return jwt({
            alg: keyToJws(key),
            typ: 'oauth-authz-req+jwt',
            kid,
        }, claims, key);
    }
    async function dpopProofJwt(headers, options, url, htm, accessToken) {
        const { privateKey, publicKey, nonce = dpopNonces.get(url.origin) } = options;
        if (!isPrivateKey(privateKey)) {
            throw new TypeError('"DPoP.privateKey" must be a private CryptoKey');
        }
        if (!isPublicKey(publicKey)) {
            throw new TypeError('"DPoP.publicKey" must be a public CryptoKey');
        }
        if (nonce !== undefined && !validateString(nonce)) {
            throw new TypeError('"DPoP.nonce" must be a non-empty string or undefined');
        }
        if (!publicKey.extractable) {
            throw new TypeError('"DPoP.publicKey.extractable" must be true');
        }
        const now = epochTime();
        const proof = await jwt({
            alg: keyToJws(privateKey),
            typ: 'dpop+jwt',
            jwk: await publicJwk(publicKey),
        }, {
            iat: now,
            jti: randomBytes(),
            htm,
            nonce,
            htu: `${url.origin}${url.pathname}`,
            ath: accessToken
                ? b64u(await crypto.subtle.digest({ name: 'SHA-256' }, buf(accessToken)))
                : undefined,
        }, privateKey);
        headers.set('dpop', proof);
    }
    let jwkCache;
    async function publicJwk(key) {
        jwkCache || (jwkCache = new WeakMap());
        if (jwkCache.has(key)) {
            return jwkCache.get(key);
        }
        const { kty, e, n, x, y, crv } = await crypto.subtle.exportKey('jwk', key);
        const jwk = { kty, e, n, x, y, crv };
        jwkCache.set(key, jwk);
        return jwk;
    }
    async function pushedAuthorizationRequest(as, client, parameters, options) {
        assertAs(as);
        assertClient(client);
        if (!(parameters instanceof URLSearchParams)) {
            throw new TypeError('"parameters" must be an instance of URLSearchParams');
        }
        if (typeof as.pushed_authorization_request_endpoint !== 'string') {
            throw new TypeError('"as.pushed_authorization_request_endpoint" must be a string');
        }
        const url = new URL(as.pushed_authorization_request_endpoint);
        const body = new URLSearchParams(parameters);
        body.set('client_id', client.client_id);
        const headers = prepareHeaders(options?.headers);
        headers.set('accept', 'application/json');
        if (options?.DPoP !== undefined) {
            await dpopProofJwt(headers, options.DPoP, url, 'POST');
        }
        return authenticatedRequest(as, client, 'POST', url, body, headers, options);
    }
    function isOAuth2Error(input) {
        const value = input;
        if (typeof value !== 'object' || Array.isArray(value) || value === null) {
            return false;
        }
        return value.error !== undefined;
    }
    function unquote(value) {
        if (value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
            return value.slice(1, -1);
        }
        return value;
    }
    const SPLIT_REGEXP = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/;
    const SCHEMES_REGEXP = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    function wwwAuth(scheme, params) {
        const arr = params.split(SPLIT_REGEXP).slice(1);
        if (!arr.length) {
            return { scheme: scheme.toLowerCase(), parameters: {} };
        }
        arr[arr.length - 1] = arr[arr.length - 1].replace(/,$/, '');
        const parameters = {};
        for (let i = 1; i < arr.length; i += 2) {
            const idx = i;
            if (arr[idx][0] === '"') {
                while (arr[idx].slice(-1) !== '"' && ++i < arr.length) {
                    arr[idx] += arr[i];
                }
            }
            const key = arr[idx - 1].replace(/^(?:, ?)|=$/g, '').toLowerCase();
            parameters[key] = unquote(arr[idx]);
        }
        return {
            scheme: scheme.toLowerCase(),
            parameters,
        };
    }
    function parseWwwAuthenticateChallenges(response) {
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (!response.headers.has('www-authenticate')) {
            return undefined;
        }
        const header = response.headers.get('www-authenticate');
        const result = [];
        for (const { 1: scheme, index } of header.matchAll(SCHEMES_REGEXP)) {
            result.push([scheme, index]);
        }
        if (!result.length) {
            return undefined;
        }
        const challenges = result.map(([scheme, indexOf], i, others) => {
            const next = others[i + 1];
            let parameters;
            if (next) {
                parameters = header.slice(indexOf, next[1]);
            }
            else {
                parameters = header.slice(indexOf);
            }
            return wwwAuth(scheme, parameters);
        });
        return challenges;
    }
    async function processPushedAuthorizationResponse(as, client, response) {
        assertAs(as);
        assertClient(client);
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 201) {
            let err;
            if ((err = await handleOAuthBodyError(response))) {
                return err;
            }
            throw new OPE('"response" is not a conform Pushed Authorization Request Endpoint response');
        }
        assertReadableResponse(response);
        let json;
        try {
            json = await response.json();
        }
        catch {
            throw new OPE('failed to parse "response" body as JSON');
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!validateString(json.request_uri)) {
            throw new OPE('"response" body "request_uri" property must be a non-empty string');
        }
        if (typeof json.expires_in !== 'number' || json.expires_in <= 0) {
            throw new OPE('"response" body "expires_in" property must be a positive number');
        }
        return json;
    }
    async function protectedResourceRequest(accessToken, method, url, headers, body, options) {
        if (!validateString(accessToken)) {
            throw new TypeError('"accessToken" must be a non-empty string');
        }
        if (!(url instanceof URL)) {
            throw new TypeError('"url" must be an instance of URL');
        }
        headers = prepareHeaders(headers);
        if (options?.DPoP === undefined) {
            headers.set('authorization', `Bearer ${accessToken}`);
        }
        else {
            await dpopProofJwt(headers, options.DPoP, url, 'GET', accessToken);
            headers.set('authorization', `DPoP ${accessToken}`);
        }
        return fetch(url.href, {
            body,
            headers,
            method,
            redirect: 'manual',
            signal: options?.signal ? signal(options.signal) : null,
        }).then(processDpopNonce);
    }
    async function userInfoRequest(as, client, accessToken, options) {
        assertAs(as);
        assertClient(client);
        if (typeof as.userinfo_endpoint !== 'string') {
            throw new TypeError('"as.userinfo_endpoint" must be a string');
        }
        const url = new URL(as.userinfo_endpoint);
        const headers = prepareHeaders(options?.headers);
        if (client.userinfo_signed_response_alg) {
            headers.set('accept', 'application/jwt');
        }
        else {
            headers.set('accept', 'application/json');
            headers.append('accept', 'application/jwt');
        }
        return protectedResourceRequest(accessToken, 'GET', url, headers, null, options);
    }
    let jwksCache;
    async function getPublicSigKeyFromIssuerJwksUri(as, options, header) {
        const { alg, kid } = header;
        checkSupportedJwsAlg(alg);
        let jwks;
        let age;
        jwksCache || (jwksCache = new WeakMap());
        if (jwksCache.has(as)) {
            ;
            ({ jwks, age } = jwksCache.get(as));
            if (age >= 300) {
                jwksCache.delete(as);
                return getPublicSigKeyFromIssuerJwksUri(as, options, header);
            }
        }
        else {
            jwks = await jwksRequest(as, options).then(processJwksResponse);
            age = 0;
            jwksCache.set(as, {
                jwks,
                iat: epochTime(),
                get age() {
                    return epochTime() - this.iat;
                },
            });
        }
        let kty;
        switch (alg.slice(0, 2)) {
            case 'RS':
            case 'PS':
                kty = 'RSA';
                break;
            case 'ES':
                kty = 'EC';
                break;
            case 'Ed':
                kty = 'OKP';
                break;
            default:
                throw new UnsupportedOperationError();
        }
        const candidates = jwks.keys.filter((jwk) => {
            if (jwk.kty !== kty) {
                return false;
            }
            if (kid !== undefined && kid !== jwk.kid) {
                return false;
            }
            if (jwk.alg !== undefined && alg !== jwk.alg) {
                return false;
            }
            if (jwk.use !== undefined && jwk.use !== 'sig') {
                return false;
            }
            if (jwk.key_ops?.includes('verify') === false) {
                return false;
            }
            switch (true) {
                case alg === 'ES256' && jwk.crv !== 'P-256':
                case alg === 'ES384' && jwk.crv !== 'P-384':
                case alg === 'ES512' && jwk.crv !== 'P-521':
                case alg === 'EdDSA' && !(jwk.crv === 'Ed25519' || jwk.crv === 'Ed448'):
                    return false;
            }
            return true;
        });
        const { 0: jwk, length } = candidates;
        if (!length) {
            if (age >= 60) {
                jwksCache.delete(as);
                return getPublicSigKeyFromIssuerJwksUri(as, options, header);
            }
            throw new OPE('error when selecting a JWT verification key, no applicable keys found');
        }
        else if (length !== 1) {
            throw new OPE('error when selecting a JWT verification key, multiple applicable keys found, a "kid" JWT Header Parameter is required');
        }
        const key = await importJwk(alg, jwk);
        if (key.type !== 'public') {
            throw new OPE('jwks_uri must only contain public keys');
        }
        return key;
    }
    const skipSubjectCheck = Symbol();
    function getContentType(response) {
        return response.headers.get('content-type')?.split(';')[0];
    }
    async function processUserInfoResponse(as, client, expectedSubject, response) {
        assertAs(as);
        assertClient(client);
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            throw new OPE('"response" is not a conform UserInfo Endpoint response');
        }
        let json;
        if (getContentType(response) === 'application/jwt') {
            assertReadableResponse(response);
            const { claims } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(undefined, client.userinfo_signed_response_alg, as.userinfo_signing_alg_values_supported), noSignatureCheck)
                .then(validateOptionalAudience.bind(undefined, client.client_id))
                .then(validateOptionalIssuer.bind(undefined, as.issuer));
            json = claims;
        }
        else {
            if (client.userinfo_signed_response_alg) {
                throw new OPE('JWT UserInfo Response expected');
            }
            assertReadableResponse(response);
            try {
                json = await response.json();
            }
            catch {
                throw new OPE('failed to parse "response" body as JSON');
            }
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!validateString(json.sub)) {
            throw new OPE('"response" body "sub" property must be a non-empty string');
        }
        switch (expectedSubject) {
            case skipSubjectCheck:
                break;
            default:
                if (!validateString(expectedSubject)) {
                    throw new OPE('"expectedSubject" must be a non-empty string');
                }
                if (json.sub !== expectedSubject) {
                    throw new OPE('unexpected "response" body "sub" value');
                }
        }
        return json;
    }
    async function authenticatedRequest(as, client, method, url, body, headers, options) {
        await clientAuthentication(as, client, body, headers, options?.clientPrivateKey);
        headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        return fetch(url.href, {
            body,
            headers,
            method,
            redirect: 'manual',
            signal: options?.signal ? signal(options.signal) : null,
        }).then(processDpopNonce);
    }
    async function tokenEndpointRequest(as, client, grantType, parameters, options) {
        if (typeof as.token_endpoint !== 'string') {
            throw new TypeError('"as.token_endpoint" must be a string');
        }
        const url = new URL(as.token_endpoint);
        parameters.set('grant_type', grantType);
        const headers = prepareHeaders(options?.headers);
        headers.set('accept', 'application/json');
        if (options?.DPoP !== undefined) {
            await dpopProofJwt(headers, options.DPoP, url, 'POST');
        }
        return authenticatedRequest(as, client, 'POST', url, parameters, headers, options);
    }
    async function refreshTokenGrantRequest(as, client, refreshToken, options) {
        assertAs(as);
        assertClient(client);
        if (!validateString(refreshToken)) {
            throw new TypeError('"refreshToken" must be a non-empty string');
        }
        const parameters = new URLSearchParams(options?.additionalParameters);
        parameters.set('refresh_token', refreshToken);
        return tokenEndpointRequest(as, client, 'refresh_token', parameters, options);
    }
    const idTokenClaims = new WeakMap();
    function getValidatedIdTokenClaims(ref) {
        if (!idTokenClaims.has(ref)) {
            throw new TypeError('"ref" was already garbage collected or did not resolve from the proper sources');
        }
        return idTokenClaims.get(ref);
    }
    async function processGenericAccessTokenResponse(as, client, response, ignoreIdToken = false, ignoreRefreshToken = false) {
        assertAs(as);
        assertClient(client);
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            let err;
            if ((err = await handleOAuthBodyError(response))) {
                return err;
            }
            throw new OPE('"response" is not a conform Token Endpoint response');
        }
        assertReadableResponse(response);
        let json;
        try {
            json = await response.json();
        }
        catch {
            throw new OPE('failed to parse "response" body as JSON');
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!validateString(json.access_token)) {
            throw new OPE('"response" body "access_token" property must be a non-empty string');
        }
        if (!validateString(json.token_type)) {
            throw new OPE('"response" body "token_type" property must be a non-empty string');
        }
        json.token_type = json.token_type.toLowerCase();
        if (json.token_type !== 'dpop' && json.token_type !== 'bearer') {
            throw new UnsupportedOperationError('unsupported `token_type` value');
        }
        if (json.expires_in !== undefined &&
            (typeof json.expires_in !== 'number' || json.expires_in <= 0)) {
            throw new OPE('"response" body "expires_in" property must be a positive number');
        }
        if (!ignoreRefreshToken &&
            json.refresh_token !== undefined &&
            !validateString(json.refresh_token)) {
            throw new OPE('"response" body "refresh_token" property must be a non-empty string');
        }
        if (json.scope !== undefined && typeof json.scope !== 'string') {
            throw new OPE('"response" body "scope" property must be a string');
        }
        if (!ignoreIdToken) {
            if (json.id_token !== undefined && !validateString(json.id_token)) {
                throw new OPE('"response" body "id_token" property must be a non-empty string');
            }
            if (json.id_token) {
                const { claims } = await validateJwt(json.id_token, checkSigningAlgorithm.bind(undefined, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported), noSignatureCheck)
                    .then(validatePresence.bind(undefined, ['aud', 'exp', 'iat', 'iss', 'sub']))
                    .then(validateIssuer.bind(undefined, as.issuer))
                    .then(validateAudience.bind(undefined, client.client_id));
                if (Array.isArray(claims.aud) && claims.aud.length !== 1 && claims.azp !== client.client_id) {
                    throw new OPE('unexpected ID Token "azp" (authorized party) claim value');
                }
                if (client.require_auth_time && typeof claims.auth_time !== 'number') {
                    throw new OPE('unexpected ID Token "auth_time" (authentication time) claim value');
                }
                idTokenClaims.set(json, claims);
            }
        }
        return json;
    }
    async function processRefreshTokenResponse(as, client, response) {
        return processGenericAccessTokenResponse(as, client, response);
    }
    function validateOptionalAudience(expected, result) {
        if (result.claims.aud !== undefined) {
            return validateAudience(expected, result);
        }
        return result;
    }
    function validateAudience(expected, result) {
        if (Array.isArray(result.claims.aud)) {
            if (!result.claims.aud.includes(expected)) {
                throw new OPE('unexpected JWT "aud" (audience) claim value');
            }
        }
        else if (result.claims.aud !== expected) {
            throw new OPE('unexpected JWT "aud" (audience) claim value');
        }
        return result;
    }
    function validateOptionalIssuer(expected, result) {
        if (result.claims.iss !== undefined) {
            return validateIssuer(expected, result);
        }
        return result;
    }
    function validateIssuer(expected, result) {
        if (result.claims.iss !== expected) {
            throw new OPE('unexpected JWT "iss" (issuer) claim value');
        }
        return result;
    }
    async function authorizationCodeGrantRequest(as, client, callbackParameters, redirectUri, codeVerifier, options) {
        assertAs(as);
        assertClient(client);
        if (!(callbackParameters instanceof CallbackParameters)) {
            throw new TypeError('"callbackParameters" must be an instance of CallbackParameters obtained from "validateAuthResponse()", or "validateJwtAuthResponse()');
        }
        if (!validateString(redirectUri)) {
            throw new TypeError('"redirectUri" must be a non-empty string');
        }
        if (!validateString(codeVerifier)) {
            throw new TypeError('"codeVerifier" must be a non-empty string');
        }
        const code = getURLSearchParameter(callbackParameters, 'code');
        if (!code) {
            throw new OPE('no authorization code in "callbackParameters"');
        }
        const parameters = new URLSearchParams(options?.additionalParameters);
        parameters.set('redirect_uri', redirectUri);
        parameters.set('code_verifier', codeVerifier);
        parameters.set('code', code);
        return tokenEndpointRequest(as, client, 'authorization_code', parameters, options);
    }
    const claimNames = {
        aud: 'audience',
        exp: 'expiration time',
        iat: 'issued at',
        iss: 'issuer',
        sub: 'subject',
    };
    function validatePresence(required, result) {
        for (const claim of required) {
            if (result.claims[claim] === undefined) {
                throw new OPE(`JWT "${claim}" (${claimNames[claim]}) claim missing`);
            }
        }
        return result;
    }
    const expectNoNonce = Symbol();
    const skipAuthTimeCheck = Symbol();
    async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge) {
        const result = await processGenericAccessTokenResponse(as, client, response);
        if (isOAuth2Error(result)) {
            return result;
        }
        if (!validateString(result.id_token)) {
            throw new OPE('"response" body "id_token" property must be a non-empty string');
        }
        maxAge ?? (maxAge = client.default_max_age ?? skipAuthTimeCheck);
        const claims = getValidatedIdTokenClaims(result);
        if ((client.require_auth_time || maxAge !== skipAuthTimeCheck) &&
            claims.auth_time === undefined) {
            throw new OPE('ID Token "auth_time" (authentication time) claim missing');
        }
        if (maxAge !== skipAuthTimeCheck) {
            if (typeof maxAge !== 'number' || maxAge < 0) {
                throw new TypeError('"options.max_age" must be a non-negative number');
            }
            const now = epochTime();
            const tolerance = 30;
            if (claims.auth_time + maxAge < now - tolerance) {
                throw new OPE('too much time has elapsed since the last End-User authentication');
            }
        }
        switch (expectedNonce) {
            case undefined:
            case expectNoNonce:
                if (claims.nonce !== undefined) {
                    throw new OPE('unexpected ID Token "nonce" claim value');
                }
                break;
            default:
                if (!validateString(expectedNonce)) {
                    throw new TypeError('"expectedNonce" must be a non-empty string');
                }
                if (claims.nonce === undefined) {
                    throw new OPE('ID Token "nonce" claim missing');
                }
                if (claims.nonce !== expectedNonce) {
                    throw new OPE('unexpected ID Token "nonce" claim value');
                }
        }
        return result;
    }
    async function processAuthorizationCodeOAuth2Response(as, client, response) {
        const result = await processGenericAccessTokenResponse(as, client, response, true);
        if (isOAuth2Error(result)) {
            return result;
        }
        if (result.id_token !== undefined) {
            if (typeof result.id_token === 'string' && result.id_token.length) {
                throw new OPE('Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing');
            }
            delete result.id_token;
        }
        return result;
    }
    function checkJwtType(expected, result) {
        if (typeof result.header.typ !== 'string' || normalizeTyp(result.header.typ) !== expected) {
            throw new OPE('unexpected JWT "typ" header parameter value');
        }
        return result;
    }
    async function clientCredentialsGrantRequest(as, client, parameters, options) {
        assertAs(as);
        assertClient(client);
        return tokenEndpointRequest(as, client, 'client_credentials', new URLSearchParams(parameters), options);
    }
    async function processClientCredentialsResponse(as, client, response) {
        const result = await processGenericAccessTokenResponse(as, client, response, true, true);
        if (isOAuth2Error(result)) {
            return result;
        }
        return result;
    }
    async function revocationRequest(as, client, token, options) {
        assertAs(as);
        assertClient(client);
        if (!validateString(token)) {
            throw new TypeError('"token" must be a non-empty string');
        }
        if (typeof as.revocation_endpoint !== 'string') {
            throw new TypeError('"as.revocation_endpoint" must be a string');
        }
        const url = new URL(as.revocation_endpoint);
        const body = new URLSearchParams(options?.additionalParameters);
        body.set('token', token);
        const headers = prepareHeaders(options?.headers);
        headers.delete('accept');
        return authenticatedRequest(as, client, 'POST', url, body, headers, options);
    }
    async function processRevocationResponse(response) {
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            let err;
            if ((err = await handleOAuthBodyError(response))) {
                return err;
            }
            throw new OPE('"response" is not a conform Revocation Endpoint response');
        }
        return undefined;
    }
    function assertReadableResponse(response) {
        if (response.bodyUsed) {
            throw new TypeError('"response" body has been used already');
        }
    }
    async function introspectionRequest(as, client, token, options) {
        assertAs(as);
        assertClient(client);
        if (!validateString(token)) {
            throw new TypeError('"token" must be a non-empty string');
        }
        if (typeof as.introspection_endpoint !== 'string') {
            throw new TypeError('"as.introspection_endpoint" must be a string');
        }
        const url = new URL(as.introspection_endpoint);
        const body = new URLSearchParams(options?.additionalParameters);
        body.set('token', token);
        const headers = prepareHeaders(options?.headers);
        if (options?.requestJwtResponse ?? client.introspection_signed_response_alg) {
            headers.set('accept', 'application/token-introspection+jwt');
        }
        else {
            headers.set('accept', 'application/json');
        }
        return authenticatedRequest(as, client, 'POST', url, body, headers, options);
    }
    async function processIntrospectionResponse(as, client, response) {
        assertAs(as);
        assertClient(client);
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            let err;
            if ((err = await handleOAuthBodyError(response))) {
                return err;
            }
            throw new OPE('"response" is not a conform Introspection Endpoint response');
        }
        let json;
        if (getContentType(response) === 'application/token-introspection+jwt') {
            assertReadableResponse(response);
            const { claims } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(undefined, client.introspection_signed_response_alg, as.introspection_signing_alg_values_supported), noSignatureCheck)
                .then(checkJwtType.bind(undefined, 'token-introspection+jwt'))
                .then(validatePresence.bind(undefined, ['aud', 'iat', 'iss']))
                .then(validateIssuer.bind(undefined, as.issuer))
                .then(validateAudience.bind(undefined, client.client_id));
            json = claims.token_introspection;
            if (!isJsonObject(json)) {
                throw new OPE('JWT "token_introspection" claim must be a JSON object');
            }
        }
        else {
            assertReadableResponse(response);
            try {
                json = await response.json();
            }
            catch {
                throw new OPE('failed to parse "response" body as JSON');
            }
            if (!isJsonObject(json)) {
                throw new OPE('"response" body must be a top level object');
            }
        }
        if (typeof json.active !== 'boolean') {
            throw new OPE('"response" body "active" property must be a boolean');
        }
        return json;
    }
    async function jwksRequest(as, options) {
        assertAs(as);
        if (typeof as.jwks_uri !== 'string') {
            throw new TypeError('"as.jwks_uri" must be a string');
        }
        const url = new URL(as.jwks_uri);
        const headers = prepareHeaders(options?.headers);
        headers.set('accept', 'application/json');
        headers.append('accept', 'application/jwk-set+json');
        return fetch(url.href, {
            headers,
            method: 'GET',
            redirect: 'manual',
            signal: options?.signal ? signal(options.signal) : null,
        }).then(processDpopNonce);
    }
    async function processJwksResponse(response) {
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            throw new OPE('"response" is not a conform JSON Web Key Set response');
        }
        assertReadableResponse(response);
        let json;
        try {
            json = await response.json();
        }
        catch {
            throw new OPE('failed to parse "response" body as JSON');
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!Array.isArray(json.keys)) {
            throw new OPE('"response" body "keys" property must be an array');
        }
        if (!Array.prototype.every.call(json.keys, isJsonObject)) {
            throw new OPE('"response" body "keys" property members must be JWK formatted objects');
        }
        return json;
    }
    async function handleOAuthBodyError(response) {
        if (response.status > 399 && response.status < 500) {
            assertReadableResponse(response);
            try {
                const json = await response.json();
                if (isJsonObject(json) && typeof json.error === 'string' && json.error.length) {
                    if (json.error_description !== undefined && typeof json.error_description !== 'string') {
                        delete json.error_description;
                    }
                    if (json.error_uri !== undefined && typeof json.error_uri !== 'string') {
                        delete json.error_uri;
                    }
                    if (json.algs !== undefined && typeof json.algs !== 'string') {
                        delete json.algs;
                    }
                    if (json.scope !== undefined && typeof json.scope !== 'string') {
                        delete json.scope;
                    }
                    return json;
                }
            }
            catch { }
        }
        return undefined;
    }
    function checkSupportedJwsAlg(alg) {
        if (!SUPPORTED_JWS_ALGS.includes(alg)) {
            throw new UnsupportedOperationError('unsupported JWS "alg" identifier');
        }
        return alg;
    }
    function checkRsaKeyAlgorithm(algorithm) {
        if (typeof algorithm.modulusLength !== 'number' || algorithm.modulusLength < 2048) {
            throw new OPE(`${algorithm.name} modulusLength must be at least 2048 bits`);
        }
    }
    function ecdsaHashName(namedCurve) {
        switch (namedCurve) {
            case 'P-256':
                return 'SHA-256';
            case 'P-384':
                return 'SHA-384';
            case 'P-521':
                return 'SHA-512';
            default:
                throw new UnsupportedOperationError();
        }
    }
    function keyToSubtle(key) {
        switch (key.algorithm.name) {
            case 'ECDSA':
                return {
                    name: key.algorithm.name,
                    hash: { name: ecdsaHashName(key.algorithm.namedCurve) },
                };
            case 'RSA-PSS': {
                checkRsaKeyAlgorithm(key.algorithm);
                switch (key.algorithm.hash.name) {
                    case 'SHA-256':
                    case 'SHA-384':
                    case 'SHA-512':
                        return {
                            name: key.algorithm.name,
                            saltLength: parseInt(key.algorithm.hash.name.slice(-3), 10) >> 3,
                        };
                    default:
                        throw new UnsupportedOperationError();
                }
            }
            case 'RSASSA-PKCS1-v1_5':
                checkRsaKeyAlgorithm(key.algorithm);
                return { name: key.algorithm.name };
            case 'Ed448':
            case 'Ed25519':
                return { name: key.algorithm.name };
        }
        throw new UnsupportedOperationError();
    }
    const noSignatureCheck = Symbol();
    async function validateJwt(jws, checkAlg, getKey) {
        const { 0: protectedHeader, 1: payload, 2: encodedSignature, length } = jws.split('.');
        if (length === 5) {
            throw new UnsupportedOperationError('JWE structure JWTs are not supported');
        }
        if (length !== 3) {
            throw new OPE('Invalid JWT');
        }
        let header;
        try {
            header = JSON.parse(buf(b64u(protectedHeader)));
        }
        catch {
            throw new OPE('failed to parse JWT Header body as base64url encoded JSON');
        }
        if (!isJsonObject(header)) {
            throw new OPE('JWT Header must be a top level object');
        }
        checkAlg(header);
        if (header.crit !== undefined) {
            throw new OPE('unexpected JWT "crit" header parameter');
        }
        const signature = b64u(encodedSignature);
        if (getKey !== noSignatureCheck) {
            const key = await getKey(header);
            const input = `${protectedHeader}.${payload}`;
            const verified = await crypto.subtle.verify(keyToSubtle(key), key, signature, buf(input));
            if (!verified) {
                throw new OPE('JWT signature verification failed');
            }
        }
        let claims;
        try {
            claims = JSON.parse(buf(b64u(payload)));
        }
        catch {
            throw new OPE('failed to parse JWT Payload body as base64url encoded JSON');
        }
        if (!isJsonObject(claims)) {
            throw new OPE('JWT Payload must be a top level object');
        }
        const now = epochTime();
        const tolerance = 30;
        if (claims.exp !== undefined) {
            if (typeof claims.exp !== 'number') {
                throw new OPE('unexpected JWT "exp" (expiration time) claim type');
            }
            if (claims.exp <= now - tolerance) {
                throw new OPE('unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()');
            }
        }
        if (claims.iat !== undefined) {
            if (typeof claims.iat !== 'number') {
                throw new OPE('unexpected JWT "iat" (issued at) claim type');
            }
        }
        if (claims.iss !== undefined) {
            if (typeof claims.iss !== 'string') {
                throw new OPE('unexpected JWT "iss" (issuer) claim type');
            }
        }
        if (claims.nbf !== undefined) {
            if (typeof claims.nbf !== 'number') {
                throw new OPE('unexpected JWT "nbf" (not before) claim type');
            }
            if (claims.nbf > now + tolerance) {
                throw new OPE('unexpected JWT "nbf" (not before) claim value, timestamp is > now()');
            }
        }
        if (claims.aud !== undefined) {
            if (typeof claims.aud !== 'string' && !Array.isArray(claims.aud)) {
                throw new OPE('unexpected JWT "aud" (audience) claim type');
            }
        }
        return { header, claims, signature };
    }
    async function validateJwtAuthResponse(as, client, parameters, expectedState, options) {
        assertAs(as);
        assertClient(client);
        if (parameters instanceof URL) {
            parameters = parameters.searchParams;
        }
        if (!(parameters instanceof URLSearchParams)) {
            throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
        }
        const response = getURLSearchParameter(parameters, 'response');
        if (!response) {
            throw new OPE('"parameters" does not contain a JARM response');
        }
        if (typeof as.jwks_uri !== 'string') {
            throw new TypeError('"as.jwks_uri" must be a string');
        }
        const { claims } = await validateJwt(response, checkSigningAlgorithm.bind(undefined, client.authorization_signed_response_alg, as.authorization_signing_alg_values_supported), getPublicSigKeyFromIssuerJwksUri.bind(undefined, as, options))
            .then(validatePresence.bind(undefined, ['aud', 'exp', 'iss']))
            .then(validateIssuer.bind(undefined, as.issuer))
            .then(validateAudience.bind(undefined, client.client_id));
        const result = new URLSearchParams();
        for (const [key, value] of Object.entries(claims)) {
            if (typeof value === 'string' && key !== 'aud') {
                result.set(key, value);
            }
        }
        return validateAuthResponse(as, client, result, expectedState);
    }
    function checkSigningAlgorithm(client, issuer, header) {
        if (client !== undefined) {
            if (header.alg !== client) {
                throw new OPE('unexpected JWT "alg" header parameter');
            }
            return;
        }
        if (Array.isArray(issuer)) {
            if (!issuer.includes(header.alg)) {
                throw new OPE('unexpected JWT "alg" header parameter');
            }
            return;
        }
        if (header.alg !== 'RS256') {
            throw new OPE('unexpected JWT "alg" header parameter');
        }
    }
    function getURLSearchParameter(parameters, name) {
        const { 0: value, length } = parameters.getAll(name);
        if (length > 1) {
            throw new OPE(`"${name}" parameter must be provided only once`);
        }
        return value;
    }
    const skipStateCheck = Symbol();
    const expectNoState = Symbol();
    class CallbackParameters extends URLSearchParams {
    }
    function validateAuthResponse(as, client, parameters, expectedState) {
        assertAs(as);
        assertClient(client);
        if (parameters instanceof URL) {
            parameters = parameters.searchParams;
        }
        if (!(parameters instanceof URLSearchParams)) {
            throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
        }
        if (getURLSearchParameter(parameters, 'response')) {
            throw new OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()');
        }
        const iss = getURLSearchParameter(parameters, 'iss');
        const state = getURLSearchParameter(parameters, 'state');
        if (!iss && as.authorization_response_iss_parameter_supported) {
            throw new OPE('response parameter "iss" (issuer) missing');
        }
        if (iss && iss !== as.issuer) {
            throw new OPE('unexpected "iss" (issuer) response parameter value');
        }
        switch (expectedState) {
            case undefined:
            case expectNoState:
                if (state !== undefined) {
                    throw new OPE('unexpected "state" response parameter encountered');
                }
                break;
            case skipStateCheck:
                break;
            default:
                if (!validateString(expectedState)) {
                    throw new OPE('"expectedState" must be a non-empty string');
                }
                if (state === undefined) {
                    throw new OPE('response parameter "state" missing');
                }
                if (state !== expectedState) {
                    throw new OPE('unexpected "state" response parameter value');
                }
        }
        const error = getURLSearchParameter(parameters, 'error');
        if (error) {
            return {
                error,
                error_description: getURLSearchParameter(parameters, 'error_description'),
                error_uri: getURLSearchParameter(parameters, 'error_uri'),
            };
        }
        const id_token = getURLSearchParameter(parameters, 'id_token');
        const token = getURLSearchParameter(parameters, 'token');
        if (id_token !== undefined || token !== undefined) {
            throw new UnsupportedOperationError('implicit and hybrid flows are not supported');
        }
        return new CallbackParameters(parameters);
    }
    function algToSubtle(alg, crv) {
        switch (alg) {
            case 'PS256':
            case 'PS384':
            case 'PS512':
                return { name: 'RSA-PSS', hash: { name: `SHA-${alg.slice(-3)}` } };
            case 'RS256':
            case 'RS384':
            case 'RS512':
                return { name: 'RSASSA-PKCS1-v1_5', hash: { name: `SHA-${alg.slice(-3)}` } };
            case 'ES256':
            case 'ES384':
                return { name: 'ECDSA', namedCurve: `P-${alg.slice(-3)}` };
            case 'ES512':
                return { name: 'ECDSA', namedCurve: 'P-521' };
            case 'EdDSA': {
                switch (crv) {
                    case 'Ed25519':
                        return { name: 'Ed25519' };
                    case 'Ed448':
                        return { name: 'Ed448' };
                    default:
                        throw new UnsupportedOperationError();
                }
            }
            default:
                throw new UnsupportedOperationError();
        }
    }
    async function importJwk(alg, jwk) {
        const { ext, key_ops, use, ...key } = jwk;
        return crypto.subtle.importKey('jwk', key, algToSubtle(alg, jwk.crv), true, ['verify']);
    }
    async function deviceAuthorizationRequest(as, client, parameters, options) {
        assertAs(as);
        assertClient(client);
        if (!(parameters instanceof URLSearchParams)) {
            throw new TypeError('"parameters" must be an instance of URLSearchParams');
        }
        if (typeof as.device_authorization_endpoint !== 'string') {
            throw new TypeError('"as.device_authorization_endpoint" must be a string');
        }
        const url = new URL(as.device_authorization_endpoint);
        const body = new URLSearchParams(parameters);
        body.set('client_id', client.client_id);
        const headers = prepareHeaders(options?.headers);
        headers.set('accept', 'application/json');
        return authenticatedRequest(as, client, 'POST', url, body, headers, options);
    }
    async function processDeviceAuthorizationResponse(as, client, response) {
        assertAs(as);
        assertClient(client);
        if (!(response instanceof Response)) {
            throw new TypeError('"response" must be an instance of Response');
        }
        if (response.status !== 200) {
            let err;
            if ((err = await handleOAuthBodyError(response))) {
                return err;
            }
            throw new OPE('"response" is not a conform Device Authorization Endpoint response');
        }
        assertReadableResponse(response);
        let json;
        try {
            json = await response.json();
        }
        catch {
            throw new OPE('failed to parse "response" body as JSON');
        }
        if (!isJsonObject(json)) {
            throw new OPE('"response" body must be a top level object');
        }
        if (!validateString(json.device_code)) {
            throw new OPE('"response" body "device_code" property must be a non-empty string');
        }
        if (!validateString(json.user_code)) {
            throw new OPE('"response" body "user_code" property must be a non-empty string');
        }
        if (!validateString(json.verification_uri)) {
            throw new OPE('"response" body "verification_uri" property must be a non-empty string');
        }
        if (typeof json.expires_in !== 'number' || json.expires_in <= 0) {
            throw new OPE('"response" body "expires_in" property must be a positive number');
        }
        if (json.verification_uri_complete !== undefined &&
            !validateString(json.verification_uri_complete)) {
            throw new OPE('"response" body "verification_uri_complete" property must be a non-empty string');
        }
        if (json.interval !== undefined && (typeof json.interval !== 'number' || json.interval <= 0)) {
            throw new OPE('"response" body "interval" property must be a positive number');
        }
        return json;
    }
    async function deviceCodeGrantRequest(as, client, deviceCode, options) {
        assertAs(as);
        assertClient(client);
        if (!validateString(deviceCode)) {
            throw new TypeError('"deviceCode" must be a non-empty string');
        }
        const parameters = new URLSearchParams(options?.additionalParameters);
        parameters.set('device_code', deviceCode);
        return tokenEndpointRequest(as, client, 'urn:ietf:params:oauth:grant-type:device_code', parameters, options);
    }
    async function processDeviceCodeResponse(as, client, response) {
        return processGenericAccessTokenResponse(as, client, response);
    }
    async function generateKeyPair(alg, options) {
        if (!validateString(alg)) {
            throw new TypeError('"alg" must be a non-empty string');
        }
        const algorithm = algToSubtle(alg, alg === 'EdDSA' ? options?.crv ?? 'Ed25519' : undefined);
        if (alg.startsWith('PS') || alg.startsWith('RS')) {
            Object.assign(algorithm, {
                modulusLength: options?.modulusLength ?? 2048,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            });
        }
        return (crypto.subtle.generateKey(algorithm, options?.extractable ?? false, ['sign', 'verify']));
    }
    
    
    /***/ }),
    
    /***/ "./node_modules/typescript-cookie/dist/typescript-cookie.mjs":
    /*!*******************************************************************!*\
      !*** ./node_modules/typescript-cookie/dist/typescript-cookie.mjs ***!
      \*******************************************************************/
    /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Cookies": () => (/* binding */ compat),
    /* harmony export */   "DEFAULT_ATTRIBUTES": () => (/* binding */ DEFAULT_ATTRIBUTES),
    /* harmony export */   "DEFAULT_CODEC": () => (/* binding */ DEFAULT_CODEC),
    /* harmony export */   "Types": () => (/* binding */ index),
    /* harmony export */   "getCookie": () => (/* binding */ getCookie),
    /* harmony export */   "getCookies": () => (/* binding */ getCookies),
    /* harmony export */   "removeCookie": () => (/* binding */ removeCookie),
    /* harmony export */   "setCookie": () => (/* binding */ setCookie)
    /* harmony export */ });
    /*! typescript-cookie v1.0.6 | MIT */
    var index = /*#__PURE__*/Object.freeze({
        __proto__: null
    });
    
    const encodeName = (name) => encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);
    const encodeValue = (value) => {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    };
    const decodeName = decodeURIComponent;
    const decodeValue = (value) => {
        if (value[0] === '"') {
            value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    };
    
    function stringifyAttributes(attributes) {
        // Copy incoming attributes as to not alter the original object..
        attributes = Object.assign({}, attributes);
        if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        }
        if (attributes.expires != null) {
            attributes.expires = attributes.expires.toUTCString();
        }
        return (Object.entries(attributes)
            .filter(([key, value]) => value != null && value !== false)
            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            .map(([key, value]) => value === true ? `; ${key}` : `; ${key}=${value.split(';')[0]}`)
            .join(''));
    }
    function get(name, decodeValue, decodeName) {
        const scan = /(?:^|; )([^=]*)=([^;]*)/g;
        const jar = {};
        let match;
        while ((match = scan.exec(document.cookie)) != null) {
            try {
                const found = decodeName(match[1]);
                jar[found] = decodeValue(match[2], found);
                if (name === found) {
                    break;
                }
            }
            catch (e) { }
        }
        return name != null ? jar[name] : jar;
    }
    const DEFAULT_CODEC = Object.freeze({
        decodeName: decodeName,
        decodeValue: decodeValue,
        encodeName: encodeName,
        encodeValue: encodeValue
    });
    const DEFAULT_ATTRIBUTES = Object.freeze({
        path: '/'
    });
    function setCookie(name, value, attributes = DEFAULT_ATTRIBUTES, { encodeValue: encodeValue$1 = encodeValue, encodeName: encodeName$1 = encodeName } = {}) {
        return (document.cookie = `${encodeName$1(name)}=${encodeValue$1(value, name)}${stringifyAttributes(attributes)}`);
    }
    function getCookie(name, { decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
        return get(name, decodeValue$1, decodeName$1);
    }
    function getCookies({ decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
        return get(undefined, decodeValue$1, decodeName$1);
    }
    function removeCookie(name, attributes = DEFAULT_ATTRIBUTES) {
        setCookie(name, '', Object.assign({}, attributes, {
            expires: -1
        }));
    }
    
    function init(converter, defaultAttributes) {
        const api = {
            set: function (name, value, attributes) {
                return setCookie(name, value, Object.assign({}, this.attributes, attributes), {
                    encodeValue: this.converter.write
                });
            },
            get: function (name) {
                if (arguments.length === 0) {
                    return getCookies(this.converter.read);
                }
                if (name == null) {
                    return;
                }
                return getCookie(name, this.converter.read);
            },
            remove: function (name, attributes) {
                removeCookie(name, Object.assign({}, this.attributes, attributes));
            },
            withAttributes: function (attributes) {
                return init(this.converter, Object.assign({}, this.attributes, attributes));
            },
            withConverter: function (converter) {
                return init(Object.assign({}, this.converter, converter), this.attributes);
            }
        };
        const config = {
            attributes: { value: Object.freeze(defaultAttributes) },
            converter: { value: Object.freeze(converter) }
        };
        return Object.create(api, config);
    }
    var compat = init({ read: DEFAULT_CODEC.decodeValue, write: DEFAULT_CODEC.encodeValue }, DEFAULT_ATTRIBUTES);
    
    
    
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
    /*!********************!*\
      !*** ./web-sdk.ts ***!
      \********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "RemitlyGlobals": () => (/* binding */ RemitlyGlobals)
    /* harmony export */ });
    /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./auth.ts");
    /* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes */ "./shapes.ts");
    /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./styles.ts");
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./utils.ts");
    /* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urls */ "./urls.ts");
    /* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors */ "./errors.ts");
    /* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialize */ "./initialize.ts");
    /* harmony import */ var _cookiefier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookiefier */ "./cookiefier.ts");
    /* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinner */ "./spinner.ts");
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    
    
    
    
    var getNextDisplayStatus = function getNextDisplayStatus(state, action) {
      if (action === 'close') {
        if (state.isFromButton && state.displayStatus === 'open') {
          return 'floating';
        }
        return 'hidden';
      } else {
        return 'open';
      }
    };
    var updateDisplayStatus = function updateDisplayStatus(state, action) {
      var _a;
      var nextDisplayStatus = getNextDisplayStatus(state, action);
      state.displayStatus = nextDisplayStatus;
      (_a = state.onStateChange) === null || _a === void 0 ? void 0 : _a.call(state, nextDisplayStatus);
    };
    var getConfig = function getConfig(state, config) {
      return Object.assign({
        environment: "production",
        onLoad: function onLoad() {
          (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(state, "onLoad");
        },
        onStateChange: function onStateChange(displayStatus) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(state, displayStatus);
        },
        onMessage: function onMessage() {
          (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(state, "onMessage");
        },
        enableConsoleLogs: state.environment === "staging"
      }, config);
    };
    var getMessageListener = function getMessageListener(state) {
      return function (message) {
        var _a, _b, _c, _d, _e;
        var messageDomain = new URL(message.origin).host;
        if (!state.remitlyDomain.includes(messageDomain) && !state.hostDomain.includes(messageDomain) && !messageDomain.includes('localhost:')) {
          return;
        }
        var event = JSON.parse(message.data);
        var topic = event === null || event === void 0 ? void 0 : event.topic;
        switch (topic) {
          case "authCallback":
            (0,_auth__WEBPACK_IMPORTED_MODULE_0__.handleAuthCallbackMessage)(state, event.queryString);
            break;
          case "exitCE":
            (_a = state.close) === null || _a === void 0 ? void 0 : _a.call(state);
            updateDisplayStatus(state, 'close');
            break;
          case "event":
            (_b = state.onMessage) === null || _b === void 0 ? void 0 : _b.call(state, event.payload.eventType);
            break;
          case "hideCloseButton":
            // We need to post the ce_login_redirect message after Narwhal is initialized and listening for events
            // Therefore we wait on the hideCloseButton event, which is fired once after Narwhal's initialization  
            var redirectPath = "".concat(state.recipient.countryCodeAlpha3, "/").concat(state.appId, "?utm_medium=channelpartner&utm_source=").concat(state.appId);
            // Using '*' is fine because the redirectPath is public information
            (_d = (_c = state.iframe.contentWindow) === null || _c === void 0 ? void 0 : _c.postMessage) === null || _d === void 0 ? void 0 : _d.call(_c, {
              topic: 'ce_login_redirect',
              payload: redirectPath
            }, '*');
            (_e = state.iframe.contentWindow) === null || _e === void 0 ? void 0 : _e.postMessage({
              topic: 'business_customer_id',
              payload: state.sender.id
            }, '*');
            break;
          case "landingPageButtonClick":
            (0,_auth__WEBPACK_IMPORTED_MODULE_0__.triggerAuth)(state);
            break;
          case "logout":
            (0,_auth__WEBPACK_IMPORTED_MODULE_0__.logout)();
          case "authExpired":
          case "exitCE":
            outputState.close();
            break;
          default:
            break;
        }
      };
    };
    // TODO: Debounce OR use the animation finish event to prevent simultaneous transformations
    function transformElements(state, newState, elements) {
      var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
      var _a;
      var _getCurrentAndNextSha = (0,_shapes__WEBPACK_IMPORTED_MODULE_1__.getCurrentAndNextShapes)(state, newState),
        currentShape = _getCurrentAndNextSha.currentShape,
        nextShape = _getCurrentAndNextSha.nextShape;
      var easing = ((_a = newState.displayStatus) !== null && _a !== void 0 ? _a : state.displayStatus) === "open" ? _styles__WEBPACK_IMPORTED_MODULE_2__.easeClose : _styles__WEBPACK_IMPORTED_MODULE_2__.easeOpen;
      elements.forEach(function (element) {
        return element.animate([currentShape, nextShape], {
          duration: duration,
          fill: "forwards",
          easing: easing
        });
      });
      state.iframe.style.borderRadius = nextShape.borderRadius;
    }
    function revealIframeContainer(state, duration) {
      state.iframeContainer.style.display = 'block';
      updateScrimPosition(state);
      state.scrim.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: duration,
        fill: "forwards",
        easing: _styles__WEBPACK_IMPORTED_MODULE_2__.easeOpen
      });
    }
    function hideIframeContainer(state, duration) {
      setTimeout(function () {
        state.iframeContainer.style.display = 'none';
      }, duration);
      state.scrim.animate([{
        width: '100%',
        opacity: 1
      }, {
        width: '100%',
        opacity: 0
      }], {
        duration: duration,
        fill: "forwards",
        easing: _styles__WEBPACK_IMPORTED_MODULE_2__.easeClose
      });
    }
    var updateScrimPosition = function updateScrimPosition(state) {
      if (state.layout.modalPosition === 'left') {
        state.scrim.style.background = 'linear-gradient(to right, #0008, #0000)';
      } else if (state.layout.modalPosition === 'right') {
        state.scrim.style.background = 'linear-gradient(to left, #0008, #0000)';
      } else {
        state.scrim.style.background = 'rgba(0, 0, 0, 0.6)';
      }
    };
    var openModal = function openModal(state) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
      revealIframeContainer(state, duration);
      state.isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getIsMobile)();
      var _getCurrentAndNextSha2 = (0,_shapes__WEBPACK_IMPORTED_MODULE_1__.getCurrentAndNextShapes)(state, {
          displayStatus: 'open'
        }),
        currentShape = _getCurrentAndNextSha2.currentShape,
        nextShape = _getCurrentAndNextSha2.nextShape;
      state.iframe.animate([currentShape, nextShape], {
        duration: duration,
        fill: "forwards",
        easing: _styles__WEBPACK_IMPORTED_MODULE_2__.easeOpen
      });
    };
    function closeModal(state) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
      hideIframeContainer(state, duration);
      var _getCurrentAndNextSha3 = (0,_shapes__WEBPACK_IMPORTED_MODULE_1__.getCurrentAndNextShapes)(state, {
          displayStatus: 'closed'
        }),
        currentShape = _getCurrentAndNextSha3.currentShape,
        nextShape = _getCurrentAndNextSha3.nextShape;
      state.iframe.animate([currentShape, nextShape], {
        duration: duration,
        fill: "forwards",
        easing: _styles__WEBPACK_IMPORTED_MODULE_2__.easeOpen
      });
    }
    function initializeRemitlyButton(state) {
      state.button.addEventListener('click', getOpenButton(state));
      state.buttonContainer.style.cssText = "\n        background-color: ".concat(_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundColor, ";\n        border: 2px solid ").concat(_styles__WEBPACK_IMPORTED_MODULE_2__.DarkBlue, ";\n        height: 80px;\n        width: 180px;\n    ");
      // TODO: Colors should be determined by the config
      state.button.style.cssText = "\n        background-color: rgb(0, 0, 0, 0);\n        color: ".concat(_styles__WEBPACK_IMPORTED_MODULE_2__.DarkBlue, ";\n        width: 100%;\n        height: 100%;\n        font-size: 21;\n        border: none;\n        font-weight: 600;\n    ");
    }
    var getOpenButton = function getOpenButton(state) {
      return function () {
        state.isFromButton = true;
        state.layout.modalPosition = 'center';
        prepareStateOnOpen(state);
        attachToParent(state);
        state.iframe.style.cssText = "\n        height: 100%;\n        width: 100%;\n    ";
        state.close = function () {
          hideIframeContainer(state, 200);
          getCloseButton(state)();
        };
        setTimeout(function () {
          return revealIframeContainer(state, 600);
        }, 200);
        transformElements(state, {
          displayStatus: 'open'
        }, [state.buttonContainer, state.iframe]);
        state.button.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 600,
          fill: "forwards",
          easing: _styles__WEBPACK_IMPORTED_MODULE_2__.easeOpen
        });
        updateDisplayStatus(state, 'open');
      };
    };
    var getCloseButton = function getCloseButton(state) {
      return function () {
        var nextDisplayStatus = getNextDisplayStatus(state, 'close');
        transformElements(state, {
          displayStatus: nextDisplayStatus
        }, [state.buttonContainer, state.iframe]);
        if (nextDisplayStatus === 'hidden') {
          state.isFromButton = false;
        }
      };
    };
    var getOpen = function getOpen(state) {
      return /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(layout) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_initialize__WEBPACK_IMPORTED_MODULE_6__.performInitializeCallsIfNeeded)(state);
              case 2:
                if (!state.isFromButton) {
                  _context.next = 5;
                  break;
                }
                getOpenButton(state)();
                return _context.abrupt("return");
              case 5:
                prepareStateOnOpen(state);
                attachToParent(state);
                Object.assign(state.layout, layout);
                openModal(state);
                state.close = function () {
                  return closeModal(state);
                };
                updateDisplayStatus(state, 'open');
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    };
    var getClose = function getClose(state) {
      return function () {
        var _a;
        (_a = state.close) === null || _a === void 0 ? void 0 : _a.call(state);
        if (state.displayStatus === 'closed') {
          document.removeEventListener("message", state.messageListener);
          state.iframe.removeEventListener("load", state.loadListener);
          state.mediaQueryList.removeEventListener("change", state.mediaListener);
        }
        updateDisplayStatus(state, 'close');
      };
    };
    function prepareStateInitial(inputState) {
      var state = inputState;
      var iframeContainer = document.createElement("div");
      var iframe = document.createElement("iframe");
      var scrim = document.createElement("div");
      iframeContainer.appendChild(scrim);
      var spinner = (0,_spinner__WEBPACK_IMPORTED_MODULE_8__.attachSpinner)(iframeContainer);
      iframeContainer.appendChild(iframe);
      state.remitlyDomain = new URL((0,_urls__WEBPACK_IMPORTED_MODULE_4__.getBaseUrl)(state)).host;
      state.hostDomain = window.location.host;
      iframeContainer.style.cssText = "\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        pointer-events: none;\n    ";
      scrim.style.cssText = "\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.6);\n        pointer-events: none;\n    ";
      iframe.style.cssText = "\n        width: 100%;\n        height: 100%;\n        pointer-events: auto;\n    ";
      var messageListener = getMessageListener(state);
      var loadListener = function loadListener() {
        var _a;
        return (_a = state.onLoad) === null || _a === void 0 ? void 0 : _a.call(state);
      };
      var mediaQueryList = window.matchMedia("(max-width: ".concat(_styles__WEBPACK_IMPORTED_MODULE_2__.mobileWidth, "px)"));
      var mediaListener = function mediaListener(e) {
        if (state.displayStatus === 'floating' || state.displayStatus === 'open') {
          var newState = {
            isMobile: e.matches
          };
          var elements = [state.iframe];
          if (state.isFromButton) {
            elements.push(state.buttonContainer);
          }
          transformElements(state, newState, elements);
        }
        state.isMobile = e.matches;
      };
      iframe.setAttribute("frameBorder", "0");
      iframe.setAttribute("id", "RemitlyFrame");
      iframe.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-same-origin allow-scripts allow-forms allow-modals allow-popups allow-top-navigation");
      iframe.setAttribute("referrerpolicy", "origin");
      iframeContainer.setAttribute("id", "RemitlyFrameContainer");
      scrim.setAttribute("id", "RemitlyScrim");
      return {
        iframe: iframe,
        iframeContainer: iframeContainer,
        spinner: spinner,
        scrim: scrim,
        mediaQueryList: mediaQueryList,
        mediaListener: mediaListener,
        messageListener: messageListener,
        loadListener: loadListener
      };
    }
    function openSplashSendOrAuth(_x2) {
      return _openSplashSendOrAuth.apply(this, arguments);
    }
    function _openSplashSendOrAuth() {
      _openSplashSendOrAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(state) {
        var sendUrl;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              (0,_spinner__WEBPACK_IMPORTED_MODULE_8__.showSpinner)(state);
              _context4.next = 3;
              return (0,_cookiefier__WEBPACK_IMPORTED_MODULE_7__.isUserLoggedIn)(state);
            case 3:
              if (!_context4.sent) {
                _context4.next = 10;
                break;
              }
              sendUrl = (0,_urls__WEBPACK_IMPORTED_MODULE_4__.getSendUrl)(state);
              (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(state, "User is logged in; opening: ".concat(sendUrl));
              state.iframe.setAttribute("src", sendUrl);
              (0,_spinner__WEBPACK_IMPORTED_MODULE_8__.hideSpinner)(state);
              _context4.next = 11;
              break;
            case 10:
              if ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.isUserRecognized)(state)) {
                (0,_auth__WEBPACK_IMPORTED_MODULE_0__.triggerAuth)(state);
              } else {
                state.iframe.setAttribute("src", (0,_urls__WEBPACK_IMPORTED_MODULE_4__.getSplashUrl)(state));
                (0,_spinner__WEBPACK_IMPORTED_MODULE_8__.hideSpinner)(state);
              }
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return _openSplashSendOrAuth.apply(this, arguments);
    }
    function prepareStateOnOpen(state) {
      openSplashSendOrAuth(state);
      window.addEventListener("message", state.messageListener);
      state.iframe.addEventListener("load", state.loadListener);
      state.mediaQueryList.addEventListener("change", state.mediaListener);
      state.isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getIsMobile)();
    }
    function attachToParent(state) {
      document.body.appendChild(state.iframeContainer);
    }
    function sanitizeInputConfig(config) {
      var authCallbackUrl = config.authCallbackUrl,
        onLoad = config.onLoad,
        onMessage = config.onMessage,
        onStateChange = config.onStateChange,
        enableConsoleLogs = config.enableConsoleLogs,
        appId = config.appId,
        environment = config.environment,
        inputSender = config.sender,
        inputRecipient = config.recipient;
      // TODO: Validate data types; try to defend against malicious props
      var sender = Object.assign({
        languageCode: 'en',
        countryCodeAlpha3: 'USA',
        email: '',
        segment: ''
      }, inputSender);
      var recipient = Object.assign({
        countryCodeAlpha3: 'PHL',
        email: ''
      }, inputRecipient);
      return {
        authCallbackUrl: authCallbackUrl,
        onLoad: onLoad,
        onMessage: onMessage,
        onStateChange: onStateChange,
        enableConsoleLogs: enableConsoleLogs,
        appId: appId,
        environment: environment,
        sender: sender,
        recipient: recipient
      };
    }
    var outputState = {
      open: function () {
        var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(layout) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                console.log("Please initialize Remitly before calling 'open'");
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function open(_x3) {
          return _open.apply(this, arguments);
        }
        return open;
      }(),
      close: function close() {
        console.log("Please initialize Remitly before calling 'close'");
      }
    };
    function initializeRemitly(_x4) {
      return _initializeRemitly.apply(this, arguments);
    }
    function _initializeRemitly() {
      _initializeRemitly = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(inputConfig) {
        var _a, _b, sanitizedConfig, buttonContainer, button, layout, initialState, state;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              sanitizedConfig = sanitizeInputConfig(inputConfig);
              buttonContainer = (_a = document.getElementById('remitly-button-container')) !== null && _a !== void 0 ? _a : undefined;
              button = (_b = document.getElementById('remitly-button')) !== null && _b !== void 0 ? _b : undefined;
              layout = {
                modalPosition: 'center'
              };
              initialState = {
                layout: layout,
                button: button,
                buttonContainer: buttonContainer,
                displayStatus: 'closed',
                isFromButton: false,
                close: undefined
              };
              Object.assign(initialState, getConfig(initialState, sanitizedConfig));
              Object.assign(initialState, prepareStateInitial(initialState));
              state = initialState;
              if (button && buttonContainer) {
                initializeRemitlyButton(state);
              }
              outputState.open = getOpen(state);
              outputState.close = getClose(state);
              (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(state, "<<<< Remitly SDK loaded >>>>");
              (0,_initialize__WEBPACK_IMPORTED_MODULE_6__.performInitializeCallsIfNeeded)(state)["catch"](function () {
                // Do nothing; error will be revealed at time of open
              });
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return _initializeRemitly.apply(this, arguments);
    }
    var RemitlyGlobals = {
      initialize: (0,_errors__WEBPACK_IMPORTED_MODULE_5__.catchErrors)(initializeRemitly, 'initialize'),
      open: (0,_errors__WEBPACK_IMPORTED_MODULE_5__.catchErrors)( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(layout) {
          var _a;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return outputState.open({
                  modalPosition: (_a = layout === null || layout === void 0 ? void 0 : layout.modalPosition) !== null && _a !== void 0 ? _a : 'center'
                });
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x5) {
          return _ref2.apply(this, arguments);
        };
      }(), 'open'),
      close: (0,_errors__WEBPACK_IMPORTED_MODULE_5__.catchErrors)(function () {
        return outputState.close();
      }, 'close')
    };
    console.log('vamos!')
    window.Remitly = RemitlyGlobals;
    })();
    
    /******/ })()
    ;
    //# sourceMappingURL=web-sdk.js.map
