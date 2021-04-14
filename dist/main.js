/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/PubSub/dist/PubSub.esm.min.js":
/*!****************************************************!*\
  !*** ./node_modules/PubSub/dist/PubSub.esm.min.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * PubSub
 * Javascript implementation of the Publish/Subscribe pattern.
 *
 * @version v4.0.0
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/PubSub#readme
 * @repository https://github.com/georapbox/PubSub.git
 * @license MIT
 */
function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t,e,r){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e&&!1===e.call(r,t[n],n,t))return;return t},c=function(t,e,r){for(var n=r._pubsub_topics,i=n[t]?o(n[t]):[],u=0,c=i.length;u<c;u+=1){var a=i[u].token,s=i[u];if(r._options.immediateExceptions)s.callback(e,{name:t,token:a});else try{s.callback(e,{name:t,token:a})}catch(t){setTimeout((function(){throw t}),0)}!0===s.once&&r.unsubscribe(a)}},a=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.length<=1?r[0]:[].concat(r)},s=function(t,e,r,n){return!!t._pubsub_topics[e]&&(n?c(e,r,t):setTimeout((function(){c(e,r,t)}),0),!0)},b=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);this._pubsub_topics={},this._pubsub_uid=-1,this._options=n(n({},{immediateExceptions:!1}),t)}var r,i,c;return r=e,(i=[{key:"subscribe",value:function(t,e,r){var n=this._pubsub_topics,o=this._pubsub_uid+=1,i={};if("function"!=typeof e)throw new TypeError("When subscribing for an event, a callback function must be defined.");return n[t]||(n[t]=[]),i.token=o,i.callback=e,i.once=!!r,n[t].push(i),o}},{key:"subscribeOnce",value:function(t,e){return this.subscribe(t,e,!0)}},{key:"publish",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return s(this,t,a.apply(void 0,[t].concat(r)),!1)}},{key:"publishSync",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return s(this,t,a.apply(void 0,[t].concat(r)),!0)}},{key:"unsubscribe",value:function(t){var e=this._pubsub_topics,r=!1;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&e[n]){for(var o=e[n].length;o;){if(o-=1,e[n][o].token===t)return e[n].splice(o,1),0===e[n].length&&delete e[n],t;n===t&&(e[n].splice(o,1),0===e[n].length&&delete e[n],r=!0)}if(!0===r)return t}return!1}},{key:"unsubscribeAll",value:function(){return this._pubsub_topics={},this}},{key:"hasSubscribers",value:function(t){var e=this._pubsub_topics,r=!1;return null==t?(u(e,(function(t,e){if(e)return r=!0,!1})),r):Object.prototype.hasOwnProperty.call(e,t)}},{key:"subscribers",value:function(){var t={};return u(this._pubsub_topics,(function(e,r){t[r]=o(e)})),t}},{key:"subscribersByTopic",value:function(t){return this._pubsub_topics[t]?o(this._pubsub_topics[t]):[]}},{key:"alias",value:function(t){var r=this;return u(t,(function(n,o){var i,u;e.prototype[o]&&(e.prototype[t[o]]=(i=o,u=r,function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return u[i].apply(u,e)}))})),this}}])&&t(r.prototype,i),c&&t(r,c),e}();b.createInstance=function(t){return new b(t)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (b);


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");






var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * var result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with time zone, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getDate(), 2);
    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMonth() + 1, 2);
    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getHours(), 2);
    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMinutes(), 2);
    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54fca77f24a2e9fb597f.svg";

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5d5c51c61a034e5bedd.svg";

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
/* harmony import */ var PubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! PubSub */ "./node_modules/PubSub/dist/PubSub.esm.min.js");

const pubsub = new PubSub__WEBPACK_IMPORTED_MODULE_0__.default()
;


const Task = (id, name, dueDate) => {    
    let isCompleted = false;
    
    const setTaskInfo = (newName, newDueDate) => {
        name = newName
        dueDate = newDueDate
        pubsub('taskInfoChange', {name, dueDate})
    }

    const getTaskInfo = () => ({id, name, dueDate})

    
    
    return {setTaskInfo, getTaskInfo}
}

const Project = (id, name, description="") => {
    let list = []
    
    const addTask = function(task) {
        list.push(task)
        pubsub.publish("taskAdded", task)
        pubsub.publish('infoChanged', {})
        localStorage.setItem('currentTaskID', task.id)
    }   

    const removeTask = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    const setProjectInfo = (newName, newDescription) => {
        name = newName
        description = newDescription
        pubsub('projectInfoChanged', {name, description})
    }

    const getProjectInfo = () => ({id, name, description, list})

    return {addTask, getProjectInfo, setProjectInfo} 
}

const ProjectList = (() => {
    let list = []
    

    const addProject = function(project) {
        list.push(project)
        pubsub.publish('projectAdded', project)
        pubsub.publish('infoChanged', {})
        localStorage.setItem('currentProjectID', project.id)

    }

    const removeProject = function(project) {
        const pos = list.indexOf()
        pubsub.publish('infoChanged', {})
    }

    const findProject = (projectID) => { 
        return list.filter(project => project.getProjectInfo().id == projectID)[0]
    }

    return {addProject, removeProject, findProject, list}
})()




/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectListView": () => (/* binding */ projectListView),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "TaskListView": () => (/* binding */ TaskListView)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash.svg */ "./src/img/trash.svg");






const createProjectDOM = (project) => {
    const newProjectDOM = document.createElement('div')
    newProjectDOM.classList.add("project", "project-link")
    newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
    newProjectDOM.textContent = project.getProjectInfo().name

    if(!projectContainerDOM.hasChildNodes()) {
        newProjectDOM.classList.add('active')
    }

    return {newProjectDOM}
}

const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectAdded", (project, topic) => {
        console.log(createProjectDOM(project))
        const newProjectDOM = createProjectDOM(project)
        projectContainerDOM.appendChild(newProjectDOM)
    })

    const createProjectDOM = (project) => {
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
        newProjectDOM.textContent = project.getProjectInfo().name

        if(!projectContainerDOM.hasChildNodes()) {
            newProjectDOM.classList.add('active')
        }

        return newProjectDOM
    }
     

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('projectInfoChanged', (project, topic) => {
        const id = project.getProjectInfo().id
        const changedProjectDOM = document.querySelector(`div[data-projectid='${id}']`)
        changedProjectDOM.textContent = project.getProjectInfo().name
    })

    document.querySelector('.popup-submit-btn').addEventListener("click", e => {
        // e.preventDefault()
        const name = document.querySelector('#new-project-name').value;
        const description = document.querySelector('#new-project-description').value
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("newInfoSubmitted", {name, description})
        // return false;
    })
    
    projectContainerDOM.addEventListener('click', e => {
        if(!e.target.classList.contains('active'))
        {
            removeActiveDOM()
            e.target.classList.add('active')
            console.log(e.target.dataset.projectid)
            _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('projectSelected', e.target.dataset.projectid)
        }
        
    })

    function removeActiveDOM() {
        [...projectContainerDOM.children].forEach(node => {
            node.classList.remove('active')
        })
    }
    

    return {}

})()

const projectView = (() => {
    const projectNameDOM = document.querySelector('.project-info-name')
    const projectDescDOM = document.querySelector('.project-info-description')
    const infoContainer = document.querySelector('.project-info-container')
    const editContainer = document.querySelector(".edit-project-info-container")

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('changeProject', (project, info) => {
        projectNameDOM.textContent = project.getProjectInfo().name
        projectDescDOM.textContent = project.getProjectInfo().description
    })

    // edit project info
    document.querySelector('.project-icon-container').addEventListener('click', e => {
        document.getElementById('edit-input-name').value = projectNameDOM.textContent
        document.getElementById('edit-input-description').value = projectDescDOM.textContent
        toggleProjectEditDisplay()
    })


    // cancel
    document.getElementById('cancel-project-info-btn').addEventListener('click', e => {
        toggleProjectEditDisplay()
    })


    // submit project info
    document.getElementById('submit-project-info-btn').addEventListener('click', e => {
        e.preventDefault()
        const name = document.getElementById('edit-input-name').value
        const description = document.getElementById('edit-input-description').value
        projectNameDOM.textContent = name
        projectDescDOM.textContent = description

        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('projectInfoSubmitted', {title: name, description})
        toggleProjectEditDisplay()
    })

    // change project-info-container and its edit-container display
    function toggleProjectEditDisplay() { 
       
        [editContainer.style.display, infoContainer.style.display] = [window.getComputedStyle(infoContainer, null).display, window.getComputedStyle(editContainer, null).display]
    }

})()

const TaskDOM = (task) => {
    const taskDOM = document.createElement('div')
    taskDOM.classList.add('task')
    const taskContentDOM = document.createElement('div')
    taskContentDOM.classList.add('task-content')
    taskContentDOM.setAttribute('data-taskid', task.getTaskInfo().id)
    
    const leftArea = document.createElement('div')
    leftArea.classList.add('task-area')
    
    const check = document.createElement('div')
    check.classList.add('check', 'project-link')
    
    const taskName = document.createElement('div')
    taskName.classList.add('task-name','project-link')
    taskName.textContent = task.getTaskInfo().name
    leftArea.appendChild(check)
    leftArea.appendChild(taskName)
    
    const rightArea = document.createElement('div')
    rightArea.classList.add('task-area')
    
    const remainTime = document.createElement('div')
    remainTime.classList.add('task-duedate')
    console.log(task.dueDate)
    remainTime.textContent = getDistanceFromNow(task.getTaskInfo().dueDate)
    
    
    
    const editTaskDOM = document.createElement('div')
    editTaskDOM.classList.add('edit-task-content')
    
    const leftEdit = document.createElement('div')
    leftEdit.classList.add('task-area')
    
    const editTaskName = document.createElement('input')
    editTaskName.id = 'edit-task-name'
    editTaskName.type = 'text'
    editTaskName.value = task.getTaskInfo().name
    editTaskName.classList.add("edit-task-input")
    
    const editTaskDueDate = document.createElement('input')
    editTaskDueDate.id = 'edit-task-duedate'
    editTaskDueDate.type = 'date'
    editTaskDueDate.value = task.getTaskInfo().dueDate
    editTaskDueDate.classList.add("edit-task-input")
    leftEdit.appendChild(editTaskName)
    leftEdit.appendChild(editTaskDueDate)

    const rightEdit = document.createElement('div')
    rightEdit.classList.add('task-area')
    
    const submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.value = 'Submit'
    submitButton.classList.add("edit-task-btn", "submit", "project-link")
    submitButton.addEventListener('click', e => {
        const newTaskTitle = editTaskName.value;
        const newTaskDueDate = editTaskDueDate.value
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('taskInfoSubmitted', {task, title: newTaskTitle, dueDate: newTaskDueDate})
        taskName.textContent = newTaskTitle
        remainTime.textContent = getDistanceFromNow(newTaskDueDate)
        _changeTaskDisplay() 
    })

    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.value = 'Cancel'
    cancelButton.classList.add("edit-task-btn", "cancel", "project-link")
    console.log({cancelButton})
    cancelButton.addEventListener('click', e => {
        _changeTaskDisplay()    
    })
    console.log({onlick: cancelButton.onlick})
    rightEdit.appendChild(submitButton)
    rightEdit.appendChild(cancelButton)
    editTaskDOM.appendChild(leftEdit)
    editTaskDOM.appendChild(rightEdit)

    const editIcon = new Image()
    editIcon.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__
    editIcon.classList.add('task-icon','edit-icon')
    editIcon.onclick = e => {
        _changeTaskDisplay()
    }
    
    const binIcon = new Image()
    binIcon.src = _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__
    binIcon.classList.add('task-icon','bin-icon')
    binIcon.addEventListener('click', e => {
        taskDOM.remove()
    })

    rightArea.appendChild(remainTime)
    rightArea.appendChild(editIcon)
    rightArea.appendChild(binIcon)
    taskContentDOM.appendChild(leftArea)
    taskContentDOM.appendChild(rightArea)
    taskDOM.appendChild(taskContentDOM)
    taskDOM.appendChild(editTaskDOM)

    function _changeTaskDisplay() { 
       
        [editTaskDOM.style.display, taskContentDOM.style.display] = [window.getComputedStyle(taskContentDOM, null).display, window.getComputedStyle(editTaskDOM, null).display]
    }

    function getDistanceFromNow(dateString){
        const baseDate = new Date()
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(dateString), baseDate, {
            addSuffix: true,
            unit: 'day' })
    }

    return taskDOM
}



const TaskListView = (() => {
    const taskListDOM = document.querySelector("#container > div.main-panel > div.tasks-container")
    const addTaskContainerDOM = document.querySelector('.add-task-container')

    const taskFormDOM = () => {
        const editTaskContainerDOM = document.createElement('div')
        editTaskContainerDOM.classList.add('task')
        editTaskContainerDOM.id = 'edit-task-form'
        const editTaskDOM = document.createElement('div')
        editTaskDOM.classList.add('new-task-form')
        
        const leftEdit = document.createElement('div')
        leftEdit.classList.add('task-area')
        
        const editTaskName = document.createElement('input')
        editTaskName.id = 'edit-task-name'
        editTaskName.type = 'text'
        editTaskName.value = Controller.defaultTaskName
        editTaskName.classList.add("edit-task-input")
        
        const editTaskDueDate = document.createElement('input')
        editTaskDueDate.id = 'edit-task-duedate'
        editTaskDueDate.type = 'date'
        editTaskDueDate.value = Controller.defaultDate
        editTaskDueDate.classList.add("edit-task-input")
        leftEdit.appendChild(editTaskName)
        leftEdit.appendChild(editTaskDueDate)
    
        const rightEdit = document.createElement('div')
        rightEdit.classList.add('task-area')
        
        const submitButton = document.createElement('input')
        submitButton.type = 'button'
        submitButton.value = 'Submit'
        submitButton.classList.add("edit-task-btn", "submit", "project-link")
        submitButton.addEventListener('click', e => {
            const title = editTaskName.value
            const dueDate = editTaskDueDate.value
            _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('newTaskSubmitted', {title, dueDate})
            editTaskContainerDOM.remove()
            addTaskContainerDOM.style.display = 'flex'
            
        })
    
        const cancelButton = document.createElement('input')
        cancelButton.type = 'button'
        cancelButton.value = 'Cancel'
        cancelButton.classList.add("edit-task-btn", "cancel", "project-link")
        console.log({cancelButton})
        cancelButton.addEventListener('click', e => {
            editTaskContainerDOM.remove()
            addTaskContainerDOM.style.display = 'flex'
        })
        rightEdit.appendChild(submitButton)
        rightEdit.appendChild(cancelButton)
        editTaskDOM.appendChild(leftEdit)
        editTaskDOM.appendChild(rightEdit)
        editTaskContainerDOM.appendChild(editTaskDOM)
    
        return editTaskContainerDOM
    }

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('loadTaskList', (taskList, info) => {
        taskList.forEach(createTaskDOM)
    })

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('taskAdded', (task, info) => {
        createTaskDOM(task)
    })

    function createTaskDOM(task) {
        const taskDOM = TaskDOM(task)
        taskListDOM.appendChild(taskDOM)
    }

    addTaskContainerDOM.addEventListener('click', makeNewTaskForm)

    function makeNewTaskForm() {
        const newTaskForm = taskFormDOM()
        taskListDOM.appendChild(newTaskForm)
        addTaskContainerDOM.style.display = 'none'
    }

    


    
})()

const Controller = (() => {
    // if(!localStorage.getItem('projectList'))
    // {
    //     populateStorage()
    // }
    // else {
    //     const myProjectList = localStorage.getItem('projectList')
    // }

    // function populateStorage() {
        localStorage.setItem('projectList', JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList))
        let newProjectID = 1
        let newTaskID = 1
        localStorage.setItem('currentProjectID', newProjectID)
        localStorage.setItem('currentTaskID', newTaskID)
        
        const defaultProjectName = "Default Project"
        const defaultProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Project)(0, defaultProjectName, "")
        _logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList.addProject(defaultProject)
        let currentProject = defaultProject
        const defaultTaskName = "Default Task"
        const defaultDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(), 1), {representation: 'date'})
        const defaultTask = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Task)(0, defaultTaskName, defaultDate)
        defaultProject.addTask(defaultTask)
    // }
    

    

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Project)(newProjectID++, data.name, data.description)
        _logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList.addProject(newProject)
    })
    
    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('projectSelected', (data, info) => {
        const projectSelected = _logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList.findProject(data)
        console.log({projectSelected})
        currentProject = projectSelected
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('changeProject', projectSelected)
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('loadTaskList', projectSelected.getProjectInfo().list)

    })

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('projectInfoSubmitted', ({title, description},info) => {
        currentProject.name = title
        currentProject.description = description
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('infoChanged', {})
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('projectInfoChanged', currentProject)
    })
    

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('taskInfoSubmitted', ({task, title, dueDate}, info) => {
        task.name = title
        task.dueDate = dueDate
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('infoChanged', {})
    })

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('newTaskSubmitted', ({title, dueDate}, topic) => {
        const newTask = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Task)(newTaskID++, title, dueDate)
        currentProject.addTask(newTask)
    })

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('infoChanged', (data, topic) => {
        localStorage.setItem('projectList',  JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList))
    })

    
    return {defaultTaskName, defaultDate}
})()



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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
// import { IS_FINISHED } from './event-types.js'








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvUHViU3ViL2Rpc3QvUHViU3ViLmVzbS5taW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlU3RyaWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0SVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyxrQkFBa0IseUNBQXlDLGtEQUFrRCxXQUFXLGdCQUFnQixxQkFBcUIsaUNBQWlDLHNDQUFzQyw0QkFBNEIsdURBQXVELHNCQUFzQixTQUFTLGNBQWMsWUFBWSxtQkFBbUIsS0FBSyx5Q0FBeUMseUNBQXlDLFlBQVkscUlBQXFJLGdFQUFnRSxHQUFHLFNBQVMsY0FBYyxtQkFBbUIsZ0NBQWdDLGlCQUFpQixpRkFBaUYsbUJBQW1CLGFBQWEsb0NBQW9DLG9EQUFvRCxvREFBb0QsNkNBQTZDLHFGQUFxRixn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bnRlbnQiOlsiLyohXG4gKiBQdWJTdWJcbiAqIEphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFB1Ymxpc2gvU3Vic2NyaWJlIHBhdHRlcm4uXG4gKlxuICogQHZlcnNpb24gdjQuMC4wXG4gKiBAYXV0aG9yIEdlb3JnZSBSYXB0aXMgPGdlb3JhcGJveEBnbWFpbC5jb20+XG4gKiBAaG9tZXBhZ2UgaHR0cHM6Ly9naXRodWIuY29tL2dlb3JhcGJveC9QdWJTdWIjcmVhZG1lXG4gKiBAcmVwb3NpdG9yeSBodHRwczovL2dpdGh1Yi5jb20vZ2VvcmFwYm94L1B1YlN1Yi5naXRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPWVbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1mdW5jdGlvbiBlKHQsZSxyKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPXIsdH1mdW5jdGlvbiByKHQsZSl7dmFyIHI9T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYobj1uLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBuKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBvPW51bGwhPWFyZ3VtZW50c1tuXT9hcmd1bWVudHNbbl06e307biUyP3IoT2JqZWN0KG8pLCEwKS5mb3JFYWNoKChmdW5jdGlvbihyKXtlKHQscixvW3JdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyh0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG8pKTpyKE9iamVjdChvKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sZSkpfSkpfXJldHVybiB0fWZ1bmN0aW9uIG8odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGkodCl9KHQpfHxmdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBBcnJheS5mcm9tKHQpfSh0KXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGkodCxlKTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJnQuY29uc3RydWN0b3ImJihyPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4gaSh0LGUpfSh0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkoZSk7cjxlO3IrKyluW3JdPXRbcl07cmV0dXJuIG59dmFyIHU9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbiBpbiB0KWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZlJiYhMT09PWUuY2FsbChyLHRbbl0sbix0KSlyZXR1cm47cmV0dXJuIHR9LGM9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbj1yLl9wdWJzdWJfdG9waWNzLGk9blt0XT9vKG5bdF0pOltdLHU9MCxjPWkubGVuZ3RoO3U8Yzt1Kz0xKXt2YXIgYT1pW3VdLnRva2VuLHM9aVt1XTtpZihyLl9vcHRpb25zLmltbWVkaWF0ZUV4Y2VwdGlvbnMpcy5jYWxsYmFjayhlLHtuYW1lOnQsdG9rZW46YX0pO2Vsc2UgdHJ5e3MuY2FsbGJhY2soZSx7bmFtZTp0LHRva2VuOmF9KX1jYXRjaCh0KXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Rocm93IHR9KSwwKX0hMD09PXMub25jZSYmci51bnN1YnNjcmliZShhKX19LGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoZT4xP2UtMTowKSxuPTE7bjxlO24rKylyW24tMV09YXJndW1lbnRzW25dO3JldHVybiByLmxlbmd0aDw9MT9yWzBdOltdLmNvbmNhdChyKX0scz1mdW5jdGlvbih0LGUscixuKXtyZXR1cm4hIXQuX3B1YnN1Yl90b3BpY3NbZV0mJihuP2MoZSxyLHQpOnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7YyhlLHIsdCl9KSwwKSwhMCl9LGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dGhpcy5fcHVic3ViX3RvcGljcz17fSx0aGlzLl9wdWJzdWJfdWlkPS0xLHRoaXMuX29wdGlvbnM9bihuKHt9LHtpbW1lZGlhdGVFeGNlcHRpb25zOiExfSksdCl9dmFyIHIsaSxjO3JldHVybiByPWUsKGk9W3trZXk6XCJzdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbih0LGUscil7dmFyIG49dGhpcy5fcHVic3ViX3RvcGljcyxvPXRoaXMuX3B1YnN1Yl91aWQrPTEsaT17fTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJXaGVuIHN1YnNjcmliaW5nIGZvciBhbiBldmVudCwgYSBjYWxsYmFjayBmdW5jdGlvbiBtdXN0IGJlIGRlZmluZWQuXCIpO3JldHVybiBuW3RdfHwoblt0XT1bXSksaS50b2tlbj1vLGkuY2FsbGJhY2s9ZSxpLm9uY2U9ISFyLG5bdF0ucHVzaChpKSxvfX0se2tleTpcInN1YnNjcmliZU9uY2VcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnN1YnNjcmliZSh0LGUsITApfX0se2tleTpcInB1Ymxpc2hcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheShlPjE/ZS0xOjApLG49MTtuPGU7bisrKXJbbi0xXT1hcmd1bWVudHNbbl07cmV0dXJuIHModGhpcyx0LGEuYXBwbHkodm9pZCAwLFt0XS5jb25jYXQocikpLCExKX19LHtrZXk6XCJwdWJsaXNoU3luY1wiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KGU+MT9lLTE6MCksbj0xO248ZTtuKyspcltuLTFdPWFyZ3VtZW50c1tuXTtyZXR1cm4gcyh0aGlzLHQsYS5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChyKSksITApfX0se2tleTpcInVuc3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcHVic3ViX3RvcGljcyxyPSExO2Zvcih2YXIgbiBpbiBlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZlW25dKXtmb3IodmFyIG89ZVtuXS5sZW5ndGg7bzspe2lmKG8tPTEsZVtuXVtvXS50b2tlbj09PXQpcmV0dXJuIGVbbl0uc3BsaWNlKG8sMSksMD09PWVbbl0ubGVuZ3RoJiZkZWxldGUgZVtuXSx0O249PT10JiYoZVtuXS5zcGxpY2UobywxKSwwPT09ZVtuXS5sZW5ndGgmJmRlbGV0ZSBlW25dLHI9ITApfWlmKCEwPT09cilyZXR1cm4gdH1yZXR1cm4hMX19LHtrZXk6XCJ1bnN1YnNjcmliZUFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3B1YnN1Yl90b3BpY3M9e30sdGhpc319LHtrZXk6XCJoYXNTdWJzY3JpYmVyc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3B1YnN1Yl90b3BpY3Mscj0hMTtyZXR1cm4gbnVsbD09dD8odShlLChmdW5jdGlvbih0LGUpe2lmKGUpcmV0dXJuIHI9ITAsITF9KSkscik6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9fSx7a2V5Olwic3Vic2NyaWJlcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXt9O3JldHVybiB1KHRoaXMuX3B1YnN1Yl90b3BpY3MsKGZ1bmN0aW9uKGUscil7dFtyXT1vKGUpfSkpLHR9fSx7a2V5Olwic3Vic2NyaWJlcnNCeVRvcGljXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3B1YnN1Yl90b3BpY3NbdF0/byh0aGlzLl9wdWJzdWJfdG9waWNzW3RdKTpbXX19LHtrZXk6XCJhbGlhc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXRoaXM7cmV0dXJuIHUodCwoZnVuY3Rpb24obixvKXt2YXIgaSx1O2UucHJvdG90eXBlW29dJiYoZS5wcm90b3R5cGVbdFtvXV09KGk9byx1PXIsZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyllW3JdPWFyZ3VtZW50c1tyXTtyZXR1cm4gdVtpXS5hcHBseSh1LGUpfSkpfSkpLHRoaXN9fV0pJiZ0KHIucHJvdG90eXBlLGkpLGMmJnQocixjKSxlfSgpO2IuY3JlYXRlSW5zdGFuY2U9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBiKHQpfTtleHBvcnQgZGVmYXVsdCBiO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChkaXJ0eU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSAxMDAwICogNjA7XG52YXIgTUlOVVRFU19JTl9EQVkgPSA2MCAqIDI0O1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSBNSU5VVEVTX0lOX0RBWSAqIDMwO1xudmFyIE1JTlVURVNfSU5fWUVBUiA9IE1JTlVURVNfSU5fREFZICogMzY1O1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVN0cmljdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3Jkc1N0cmljdGAgdG8gYGZvcm1hdERpc3RhbmNlU3RyaWN0YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMjAxNSwgMCwgMiksXG4gKiAgICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqICAgKSAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAgIG5ldyBEYXRlKDIwMTUsIDAsIDIpXG4gKiAgICkgLy89PiAnNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnRpYWxNZXRob2RgIG9wdGlvbiBpcyByZW5hbWVkIHRvIGByb3VuZGluZ01ldGhvZGAuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyBwYXJ0aWFsTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IHJvdW5kaW5nTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqICAgYGBgXG4gKlxuICogLSBJZiBgcm91bmRpbmdNZXRob2RgIGlzIG5vdCBzcGVjaWZpZWQsIGl0IG5vdyBkZWZhdWx0cyB0byBgcm91bmRgIGluc3RlYWQgb2YgYGZsb29yYC5cbiAqXG4gKiAtIGB1bml0YCBvcHRpb24gbm93IGFjY2VwdHMgb25lIG9mIHRoZSBzdHJpbmdzOlxuICogICAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInIGluc3RlYWQgb2YgJ3MnLCAnbScsICdoJywgJ2QnLCAnTScgb3IgJ1knXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyB1bml0OiAnbScgfVxuICogICApXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZVN0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzMsIDEpLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyB1bml0OiAnbWludXRlJyB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0geydzZWNvbmQnfCdtaW51dGUnfCdob3VyJ3wnZGF5J3wnbW9udGgnfCd5ZWFyJ30gW29wdGlvbnMudW5pdF0gLSBpZiBzcGVjaWZpZWQsIHdpbGwgZm9yY2UgYSB1bml0XG4gKiBAcGFyYW0geydmbG9vcid8J2NlaWwnfCdyb3VuZCd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSdyb3VuZCddIC0gd2hpY2ggd2F5IHRvIHJvdW5kIHBhcnRpYWwgdW5pdHNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMucm91bmRpbmdNZXRob2RgIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMikpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIGluIG1pbnV0ZXM/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtaW51dGUnXG4gKiB9KVxuICogLy89PiAnNTI1NjAwIG1pbnV0ZXMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTVcbiAqIC8vIHRvIDI4IEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDI4KSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplLmZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgcm91bmRpbmdNZXRob2QgPSBvcHRpb25zLnJvdW5kaW5nTWV0aG9kID09IG51bGwgPyAncm91bmQnIDogU3RyaW5nKG9wdGlvbnMucm91bmRpbmdNZXRob2QpO1xuICB2YXIgcm91bmRpbmdNZXRob2RGbjtcblxuICBpZiAocm91bmRpbmdNZXRob2QgPT09ICdmbG9vcicpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5mbG9vcjtcbiAgfSBlbHNlIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ2NlaWwnKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguY2VpbDtcbiAgfSBlbHNlIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ3JvdW5kJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLnJvdW5kO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwicm91bmRpbmdNZXRob2QgbXVzdCBiZSAnZmxvb3InLCAnY2VpbCcgb3IgJ3JvdW5kJ1wiKTtcbiAgfVxuXG4gIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlUmlnaHQuZ2V0VGltZSgpIC0gZGF0ZUxlZnQuZ2V0VGltZSgpO1xuICB2YXIgbWludXRlcyA9IG1pbGxpc2Vjb25kcyAvIE1JTExJU0VDT05EU19JTl9NSU5VVEU7XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpOyAvLyBVc2UgRFNULW5vcm1hbGl6ZWQgZGlmZmVyZW5jZSBpbiBtaW51dGVzIGZvciB5ZWFycywgbW9udGhzIGFuZCBkYXlzO1xuICAvLyB1c2UgcmVndWxhciBkaWZmZXJlbmNlIGluIG1pbnV0ZXMgZm9yIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzLlxuXG4gIHZhciBkc3ROb3JtYWxpemVkTWludXRlcyA9IChtaWxsaXNlY29uZHMgLSB0aW1lem9uZU9mZnNldCkgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xuICB2YXIgdW5pdDtcblxuICBpZiAob3B0aW9ucy51bml0ID09IG51bGwpIHtcbiAgICBpZiAobWludXRlcyA8IDEpIHtcbiAgICAgIHVuaXQgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkge1xuICAgICAgdW5pdCA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgICB1bml0ID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgICB1bml0ID0gJ2RheSc7XG4gICAgfSBlbHNlIGlmIChkc3ROb3JtYWxpemVkTWludXRlcyA8IE1JTlVURVNfSU5fWUVBUikge1xuICAgICAgdW5pdCA9ICdtb250aCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSAneWVhcic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KTtcbiAgfSAvLyAwIHVwIHRvIDYwIHNlY29uZHNcblxuXG4gIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgIHZhciBzZWNvbmRzID0gcm91bmRpbmdNZXRob2RGbihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4U2Vjb25kcycsIHNlY29uZHMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gNjAgbWluc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgdmFyIHJvdW5kZWRNaW51dGVzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIHJvdW5kZWRNaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDI0IGhvdXJzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgdmFyIGhvdXJzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnZGF5Jykge1xuICAgIHZhciBkYXlzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMTIgbW9udGhzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21vbnRoJykge1xuICAgIHZhciBtb250aHMgPSByb3VuZGluZ01ldGhvZEZuKGRzdE5vcm1hbGl6ZWRNaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIG1vbnRocyA9PT0gMTIgPyBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIDEsIGxvY2FsaXplT3B0aW9ucykgOiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd5ZWFyJykge1xuICAgIHZhciB5ZWFycyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX1lFQVIpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ1bml0IG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlIGFjY29yZGluZyB0byB0aGUgSVNPIDg2MDEgc3RhbmRhcmQgKGh0dHA6Ly9zdXBwb3J0LnNhcy5jb20vZG9jdW1lbnRhdGlvbi9jZGwvZW4vbHJkaWN0LzY0MzE2L0hUTUwvZGVmYXVsdC92aWV3ZXIuaHRtI2EwMDMxNjk4MTQuaHRtKS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdC4gT3B0aW9ucyBtYXkgYmUgcGFzc2VkIHRvIGNvbnRyb2wgdGhlIHBhcnRzIGFuZCBub3RhdGlvbnMgb2YgdGhlIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7J2V4dGVuZGVkJ3wnYmFzaWMnfSBbb3B0aW9ucy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBpZiAnYmFzaWMnLCBoaWRlIGRlbGltaXRlcnMgYmV0d2VlbiBkYXRlIGFuZCB0aW1lIHZhbHVlcy5cbiAqIEBwYXJhbSB7J2NvbXBsZXRlJ3wnZGF0ZSd8J3RpbWUnfSBbb3B0aW9ucy5yZXByZXNlbnRhdGlvbj0nY29tcGxldGUnXSAtIGZvcm1hdCBkYXRlLCB0aW1lIHdpdGggdGltZSB6b25lLCBvciBib3RoLlxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5mb3JtYXRgIG11c3QgYmUgJ2V4dGVuZGVkJyBvciAnYmFzaWMnXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5yZXByZXNlbmF0aW9uYCBtdXN0IGJlICdkYXRlJywgJ3RpbWUnIG9yICdjb21wbGV0ZSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCAoVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSlcbiAqIC8vPT4gJzIwMTktMDktMThUMTk6MDA6NTJaJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEsIHNob3J0IGZvcm1hdCAoVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyBmb3JtYXQ6ICdiYXNpYycgfSlcbiAqIC8vPT4gJzIwMTkwOTE4VDE5MDA1MidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCwgZGF0ZSBvbmx5OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSlcbiAqIC8vPT4gJzIwMTktMDktMTgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSBmb3JtYXQsIHRpbWUgb25seSAoVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyByZXByZXNlbnRhdGlvbjogJ3RpbWUnIH0pXG4gKiAvLz0+ICcxOTowMDo1MlonXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0SVNPKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCIxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSBcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCwgXCIgcHJlc2VudFwiKSk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0ID09IG51bGwgPyAnZXh0ZW5kZWQnIDogU3RyaW5nKG9wdGlvbnMuZm9ybWF0KTtcbiAgdmFyIHJlcHJlc2VudGF0aW9uID0gb3B0aW9ucy5yZXByZXNlbnRhdGlvbiA9PSBudWxsID8gJ2NvbXBsZXRlJyA6IFN0cmluZyhvcHRpb25zLnJlcHJlc2VudGF0aW9uKTtcblxuICBpZiAoZm9ybWF0ICE9PSAnZXh0ZW5kZWQnICYmIGZvcm1hdCAhPT0gJ2Jhc2ljJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiZm9ybWF0IG11c3QgYmUgJ2V4dGVuZGVkJyBvciAnYmFzaWMnXCIpO1xuICB9XG5cbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSAnZGF0ZScgJiYgcmVwcmVzZW50YXRpb24gIT09ICd0aW1lJyAmJiByZXByZXNlbnRhdGlvbiAhPT0gJ2NvbXBsZXRlJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwicmVwcmVzZW50YXRpb24gbXVzdCBiZSAnZGF0ZScsICd0aW1lJywgb3IgJ2NvbXBsZXRlJ1wiKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIHR6T2Zmc2V0ID0gJyc7XG4gIHZhciBkYXRlRGVsaW1pdGVyID0gZm9ybWF0ID09PSAnZXh0ZW5kZWQnID8gJy0nIDogJyc7XG4gIHZhciB0aW1lRGVsaW1pdGVyID0gZm9ybWF0ID09PSAnZXh0ZW5kZWQnID8gJzonIDogJyc7IC8vIFJlcHJlc2VudGF0aW9uIGlzIGVpdGhlciAnZGF0ZScgb3IgJ2NvbXBsZXRlJ1xuXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnKSB7XG4gICAgdmFyIGRheSA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0RGF0ZSgpLCAyKTtcbiAgICB2YXIgbW9udGggPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgICB2YXIgeWVhciA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0RnVsbFllYXIoKSwgNCk7IC8vIHl5eXlNTWRkIG9yIHl5eXktTU0tZGQuXG5cbiAgICByZXN1bHQgPSBcIlwiLmNvbmNhdCh5ZWFyKS5jb25jYXQoZGF0ZURlbGltaXRlcikuY29uY2F0KG1vbnRoKS5jb25jYXQoZGF0ZURlbGltaXRlcikuY29uY2F0KGRheSk7XG4gIH0gLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICd0aW1lJyBvciAnY29tcGxldGUnXG5cblxuICBpZiAocmVwcmVzZW50YXRpb24gIT09ICdkYXRlJykge1xuICAgIC8vIEFkZCB0aGUgdGltZXpvbmUuXG4gICAgdmFyIG9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgdmFyIGFic29sdXRlT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgICAgIHZhciBob3VyT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzb2x1dGVPZmZzZXQgLyA2MCksIDIpO1xuICAgICAgdmFyIG1pbnV0ZU9mZnNldCA9IGFkZExlYWRpbmdaZXJvcyhhYnNvbHV0ZU9mZnNldCAlIDYwLCAyKTsgLy8gSWYgbGVzcyB0aGFuIDAsIHRoZSBzaWduIGlzICssIGJlY2F1c2UgaXQgaXMgYWhlYWQgb2YgdGltZS5cblxuICAgICAgdmFyIHNpZ24gPSBvZmZzZXQgPCAwID8gJysnIDogJy0nO1xuICAgICAgdHpPZmZzZXQgPSBcIlwiLmNvbmNhdChzaWduKS5jb25jYXQoaG91ck9mZnNldCwgXCI6XCIpLmNvbmNhdChtaW51dGVPZmZzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ek9mZnNldCA9ICdaJztcbiAgICB9XG5cbiAgICB2YXIgaG91ciA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0SG91cnMoKSwgMik7XG4gICAgdmFyIG1pbnV0ZSA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0TWludXRlcygpLCAyKTtcbiAgICB2YXIgc2Vjb25kID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRTZWNvbmRzKCksIDIpOyAvLyBJZiB0aGVyZSdzIGFsc28gZGF0ZSwgc2VwYXJhdGUgaXQgd2l0aCB0aW1lIHdpdGggJ1QnXG5cbiAgICB2YXIgc2VwYXJhdG9yID0gcmVzdWx0ID09PSAnJyA/ICcnIDogJ1QnOyAvLyBDcmVhdGVzIGEgdGltZSBzdHJpbmcgY29uc2lzdGluZyBvZiBob3VyLCBtaW51dGUsIGFuZCBzZWNvbmQsIHNlcGFyYXRlZCBieSBkZWxpbWl0ZXJzLCBpZiBkZWZpbmVkLlxuXG4gICAgdmFyIHRpbWUgPSBbaG91ciwgbWludXRlLCBzZWNvbmRdLmpvaW4odGltZURlbGltaXRlcik7IC8vIEhIbW1zcyBvciBISDptbTpzcy5cblxuICAgIHJlc3VsdCA9IFwiXCIuY29uY2F0KHJlc3VsdCkuY29uY2F0KHNlcGFyYXRvcikuY29uY2F0KHRpbWUpLmNvbmNhdCh0ek9mZnNldCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihkYXRlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGFyc2VQYXR0ZXJucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHZhbHVlID0gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcblxuICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cblxudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBQdWJTdWIgZnJvbSAnUHViU3ViJztcbmNvbnN0IHB1YnN1YiA9IG5ldyBQdWJTdWIoKVxuaW1wb3J0IHt9IGZyb20gJ2RhdGUtZm5zJ1xuXG5cbmNvbnN0IFRhc2sgPSAoaWQsIG5hbWUsIGR1ZURhdGUpID0+IHsgICAgXG4gICAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3Qgc2V0VGFza0luZm8gPSAobmV3TmFtZSwgbmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBuYW1lID0gbmV3TmFtZVxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgICAgICBwdWJzdWIoJ3Rhc2tJbmZvQ2hhbmdlJywge25hbWUsIGR1ZURhdGV9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT4gKHtpZCwgbmFtZSwgZHVlRGF0ZX0pXG5cbiAgICBcbiAgICBcbiAgICByZXR1cm4ge3NldFRhc2tJbmZvLCBnZXRUYXNrSW5mb31cbn1cblxuY29uc3QgUHJvamVjdCA9IChpZCwgbmFtZSwgZGVzY3JpcHRpb249XCJcIikgPT4ge1xuICAgIGxldCBsaXN0ID0gW11cbiAgICBcbiAgICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgICBsaXN0LnB1c2godGFzaylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0YXNrQWRkZWRcIiwgdGFzaylcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2luZm9DaGFuZ2VkJywge30pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VGFza0lEJywgdGFzay5pZClcbiAgICB9ICAgXG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zdCBwb3MgPSBpdGVtcy5pbmRleE9mKGl0ZW1zKVxuICAgICAgICBpdGVtcy5zcGxpY2UocG9zLCAxKVxuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3RJbmZvID0gKG5ld05hbWUsIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIG5hbWUgPSBuZXdOYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgcHVic3ViKCdwcm9qZWN0SW5mb0NoYW5nZWQnLCB7bmFtZSwgZGVzY3JpcHRpb259KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RJbmZvID0gKCkgPT4gKHtpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGxpc3R9KVxuXG4gICAgcmV0dXJuIHthZGRUYXNrLCBnZXRQcm9qZWN0SW5mbywgc2V0UHJvamVjdEluZm99IFxufVxuXG5jb25zdCBQcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBbXVxuICAgIFxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgbGlzdC5wdXNoKHByb2plY3QpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBwcm9qZWN0KVxuICAgICAgICBwdWJzdWIucHVibGlzaCgnaW5mb0NoYW5nZWQnLCB7fSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0SUQnLCBwcm9qZWN0LmlkKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcG9zID0gbGlzdC5pbmRleE9mKClcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2luZm9DaGFuZ2VkJywge30pXG4gICAgfVxuXG4gICAgY29uc3QgZmluZFByb2plY3QgPSAocHJvamVjdElEKSA9PiB7IFxuICAgICAgICByZXR1cm4gbGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkuaWQgPT0gcHJvamVjdElEKVswXVxuICAgIH1cblxuICAgIHJldHVybiB7YWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZmluZFByb2plY3QsIGxpc3R9XG59KSgpXG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QsIHB1YnN1Yn1cbiIsImltcG9ydCB7VGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QsIHB1YnN1Yn0gZnJvbSAnLi9sb2dpYydcbmltcG9ydCB7YWRkRGF5cywgZm9ybWF0SVNPLCBwYXJzZUlTTywgZm9ybWF0RGlzdGFuY2VTdHJpY3R9IGZyb20gJ2RhdGUtZm5zJ1xuXG5pbXBvcnQgZWRpdFNWRyBmcm9tICcuL2ltZy9lZGl0LnN2ZydcbmltcG9ydCBiaW5TVkcgZnJvbSAnLi9pbWcvdHJhc2guc3ZnJ1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0RE9NID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdQcm9qZWN0RE9NLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwicHJvamVjdC1saW5rXCIpXG4gICAgbmV3UHJvamVjdERPTS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJRFwiLCBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkuaWQpXG4gICAgbmV3UHJvamVjdERPTS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5uYW1lXG5cbiAgICBpZighcHJvamVjdENvbnRhaW5lckRPTS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbmV3UHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB7bmV3UHJvamVjdERPTX1cbn1cblxuY29uc3QgcHJvamVjdExpc3RWaWV3ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJylcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0QWRkZWRcIiwgKHByb2plY3QsIHRvcGljKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZVByb2plY3RET00ocHJvamVjdCkpXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RET00gPSBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3QpXG4gICAgICAgIHByb2plY3RDb250YWluZXJET00uYXBwZW5kQ2hpbGQobmV3UHJvamVjdERPTSlcbiAgICB9KVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdERPTSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdQcm9qZWN0RE9NLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwicHJvamVjdC1saW5rXCIpXG4gICAgICAgIG5ld1Byb2plY3RET00uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SURcIiwgcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLmlkKVxuICAgICAgICBuZXdQcm9qZWN0RE9NLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLm5hbWVcblxuICAgICAgICBpZighcHJvamVjdENvbnRhaW5lckRPTS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RET00uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0RE9NXG4gICAgfVxuICAgICBcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RJbmZvQ2hhbmdlZCcsIChwcm9qZWN0LCB0b3BpYykgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5pZFxuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXByb2plY3RpZD0nJHtpZH0nXWApXG4gICAgICAgIGNoYW5nZWRQcm9qZWN0RE9NLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLm5hbWVcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXN1Ym1pdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgICAgICBwdWJzdWIucHVibGlzaChcIm5ld0luZm9TdWJtaXR0ZWRcIiwge25hbWUsIGRlc2NyaXB0aW9ufSlcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgXG4gICAgcHJvamVjdENvbnRhaW5lckRPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlRE9NKClcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnByb2plY3RpZClcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0U2VsZWN0ZWQnLCBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RpZClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRE9NKCkge1xuICAgICAgICBbLi4ucHJvamVjdENvbnRhaW5lckRPTS5jaGlsZHJlbl0uZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge31cblxufSkoKVxuXG5jb25zdCBwcm9qZWN0VmlldyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbmZvLW5hbWUnKVxuICAgIGNvbnN0IHByb2plY3REZXNjRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5mby1kZXNjcmlwdGlvbicpXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWluZm8tY29udGFpbmVyJylcbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtaW5mby1jb250YWluZXJcIilcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2NoYW5nZVByb2plY3QnLCAocHJvamVjdCwgaW5mbykgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZURPTS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5uYW1lXG4gICAgICAgIHByb2plY3REZXNjRE9NLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIC8vIGVkaXQgcHJvamVjdCBpbmZvXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaWNvbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pbnB1dC1uYW1lJykudmFsdWUgPSBwcm9qZWN0TmFtZURPTS50ZXh0Q29udGVudFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pbnB1dC1kZXNjcmlwdGlvbicpLnZhbHVlID0gcHJvamVjdERlc2NET00udGV4dENvbnRlbnRcbiAgICAgICAgdG9nZ2xlUHJvamVjdEVkaXREaXNwbGF5KClcbiAgICB9KVxuXG5cbiAgICAvLyBjYW5jZWxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXByb2plY3QtaW5mby1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2dnbGVQcm9qZWN0RWRpdERpc3BsYXkoKVxuICAgIH0pXG5cblxuICAgIC8vIHN1Ym1pdCBwcm9qZWN0IGluZm9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QtaW5mby1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlucHV0LW5hbWUnKS52YWx1ZVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlucHV0LWRlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgcHJvamVjdE5hbWVET00udGV4dENvbnRlbnQgPSBuYW1lXG4gICAgICAgIHByb2plY3REZXNjRE9NLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cblxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdEluZm9TdWJtaXR0ZWQnLCB7dGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9ufSlcbiAgICAgICAgdG9nZ2xlUHJvamVjdEVkaXREaXNwbGF5KClcbiAgICB9KVxuXG4gICAgLy8gY2hhbmdlIHByb2plY3QtaW5mby1jb250YWluZXIgYW5kIGl0cyBlZGl0LWNvbnRhaW5lciBkaXNwbGF5XG4gICAgZnVuY3Rpb24gdG9nZ2xlUHJvamVjdEVkaXREaXNwbGF5KCkgeyBcbiAgICAgICBcbiAgICAgICAgW2VkaXRDb250YWluZXIuc3R5bGUuZGlzcGxheSwgaW5mb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5XSA9IFt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbmZvQ29udGFpbmVyLCBudWxsKS5kaXNwbGF5LCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlZGl0Q29udGFpbmVyLCBudWxsKS5kaXNwbGF5XVxuICAgIH1cblxufSkoKVxuXG5jb25zdCBUYXNrRE9NID0gKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRE9NLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICAgIGNvbnN0IHRhc2tDb250ZW50RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGVudERPTS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKVxuICAgIHRhc2tDb250ZW50RE9NLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmdldFRhc2tJbmZvKCkuaWQpXG4gICAgXG4gICAgY29uc3QgbGVmdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxlZnRBcmVhLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYXJlYScpXG4gICAgXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJywgJ3Byb2plY3QtbGluaycpXG4gICAgXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScsJ3Byb2plY3QtbGluaycpXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRhc2tJbmZvKCkubmFtZVxuICAgIGxlZnRBcmVhLmFwcGVuZENoaWxkKGNoZWNrKVxuICAgIGxlZnRBcmVhLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuICAgIFxuICAgIGNvbnN0IHJpZ2h0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYXJlYScpXG4gICAgXG4gICAgY29uc3QgcmVtYWluVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVtYWluVGltZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZWRhdGUnKVxuICAgIGNvbnNvbGUubG9nKHRhc2suZHVlRGF0ZSlcbiAgICByZW1haW5UaW1lLnRleHRDb250ZW50ID0gZ2V0RGlzdGFuY2VGcm9tTm93KHRhc2suZ2V0VGFza0luZm8oKS5kdWVEYXRlKVxuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXRUYXNrRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlZGl0VGFza0RPTS5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stY29udGVudCcpXG4gICAgXG4gICAgY29uc3QgbGVmdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxlZnRFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYXJlYScpXG4gICAgXG4gICAgY29uc3QgZWRpdFRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGVkaXRUYXNrTmFtZS5pZCA9ICdlZGl0LXRhc2stbmFtZSdcbiAgICBlZGl0VGFza05hbWUudHlwZSA9ICd0ZXh0J1xuICAgIGVkaXRUYXNrTmFtZS52YWx1ZSA9IHRhc2suZ2V0VGFza0luZm8oKS5uYW1lXG4gICAgZWRpdFRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2staW5wdXRcIilcbiAgICBcbiAgICBjb25zdCBlZGl0VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZWRpdFRhc2tEdWVEYXRlLmlkID0gJ2VkaXQtdGFzay1kdWVkYXRlJ1xuICAgIGVkaXRUYXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnXG4gICAgZWRpdFRhc2tEdWVEYXRlLnZhbHVlID0gdGFzay5nZXRUYXNrSW5mbygpLmR1ZURhdGVcbiAgICBlZGl0VGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1pbnB1dFwiKVxuICAgIGxlZnRFZGl0LmFwcGVuZENoaWxkKGVkaXRUYXNrTmFtZSlcbiAgICBsZWZ0RWRpdC5hcHBlbmRDaGlsZChlZGl0VGFza0R1ZURhdGUpXG5cbiAgICBjb25zdCByaWdodEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJpZ2h0RWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWFyZWEnKVxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gJ1N1Ym1pdCdcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1idG5cIiwgXCJzdWJtaXRcIiwgXCJwcm9qZWN0LWxpbmtcIilcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFza1RpdGxlID0gZWRpdFRhc2tOYW1lLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGVkaXRUYXNrRHVlRGF0ZS52YWx1ZVxuICAgICAgICBwdWJzdWIucHVibGlzaCgndGFza0luZm9TdWJtaXR0ZWQnLCB7dGFzaywgdGl0bGU6IG5ld1Rhc2tUaXRsZSwgZHVlRGF0ZTogbmV3VGFza0R1ZURhdGV9KVxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IG5ld1Rhc2tUaXRsZVxuICAgICAgICByZW1haW5UaW1lLnRleHRDb250ZW50ID0gZ2V0RGlzdGFuY2VGcm9tTm93KG5ld1Rhc2tEdWVEYXRlKVxuICAgICAgICBfY2hhbmdlVGFza0Rpc3BsYXkoKSBcbiAgICB9KVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSAnQ2FuY2VsJ1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWJ0blwiLCBcImNhbmNlbFwiLCBcInByb2plY3QtbGlua1wiKVxuICAgIGNvbnNvbGUubG9nKHtjYW5jZWxCdXR0b259KVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBfY2hhbmdlVGFza0Rpc3BsYXkoKSAgICBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHtvbmxpY2s6IGNhbmNlbEJ1dHRvbi5vbmxpY2t9KVxuICAgIHJpZ2h0RWRpdC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXG4gICAgcmlnaHRFZGl0LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcbiAgICBlZGl0VGFza0RPTS5hcHBlbmRDaGlsZChsZWZ0RWRpdClcbiAgICBlZGl0VGFza0RPTS5hcHBlbmRDaGlsZChyaWdodEVkaXQpXG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpXG4gICAgZWRpdEljb24uc3JjID0gZWRpdFNWR1xuICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ3Rhc2staWNvbicsJ2VkaXQtaWNvbicpXG4gICAgZWRpdEljb24ub25jbGljayA9IGUgPT4ge1xuICAgICAgICBfY2hhbmdlVGFza0Rpc3BsYXkoKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBiaW5JY29uID0gbmV3IEltYWdlKClcbiAgICBiaW5JY29uLnNyYyA9IGJpblNWR1xuICAgIGJpbkljb24uY2xhc3NMaXN0LmFkZCgndGFzay1pY29uJywnYmluLWljb24nKVxuICAgIGJpbkljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdGFza0RPTS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICByaWdodEFyZWEuYXBwZW5kQ2hpbGQocmVtYWluVGltZSlcbiAgICByaWdodEFyZWEuYXBwZW5kQ2hpbGQoZWRpdEljb24pXG4gICAgcmlnaHRBcmVhLmFwcGVuZENoaWxkKGJpbkljb24pXG4gICAgdGFza0NvbnRlbnRET00uYXBwZW5kQ2hpbGQobGVmdEFyZWEpXG4gICAgdGFza0NvbnRlbnRET00uYXBwZW5kQ2hpbGQocmlnaHRBcmVhKVxuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQodGFza0NvbnRlbnRET00pXG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZChlZGl0VGFza0RPTSlcblxuICAgIGZ1bmN0aW9uIF9jaGFuZ2VUYXNrRGlzcGxheSgpIHsgXG4gICAgICAgXG4gICAgICAgIFtlZGl0VGFza0RPTS5zdHlsZS5kaXNwbGF5LCB0YXNrQ29udGVudERPTS5zdHlsZS5kaXNwbGF5XSA9IFt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXNrQ29udGVudERPTSwgbnVsbCkuZGlzcGxheSwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWRpdFRhc2tET00sIG51bGwpLmRpc3BsYXldXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlzdGFuY2VGcm9tTm93KGRhdGVTdHJpbmcpe1xuICAgICAgICBjb25zdCBiYXNlRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlU3RyaWN0KHBhcnNlSVNPKGRhdGVTdHJpbmcpLCBiYXNlRGF0ZSwge1xuICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxuICAgICAgICAgICAgdW5pdDogJ2RheScgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0RPTVxufVxuXG5cblxuY29uc3QgVGFza0xpc3RWaWV3ID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyID4gZGl2Lm1haW4tcGFuZWwgPiBkaXYudGFza3MtY29udGFpbmVyXCIpXG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKVxuXG4gICAgY29uc3QgdGFza0Zvcm1ET00gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXJET00uY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyRE9NLmlkID0gJ2VkaXQtdGFzay1mb3JtJ1xuICAgICAgICBjb25zdCBlZGl0VGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVkaXRUYXNrRE9NLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbGVmdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZWZ0RWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWFyZWEnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdFRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBlZGl0VGFza05hbWUuaWQgPSAnZWRpdC10YXNrLW5hbWUnXG4gICAgICAgIGVkaXRUYXNrTmFtZS50eXBlID0gJ3RleHQnXG4gICAgICAgIGVkaXRUYXNrTmFtZS52YWx1ZSA9IENvbnRyb2xsZXIuZGVmYXVsdFRhc2tOYW1lXG4gICAgICAgIGVkaXRUYXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWlucHV0XCIpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGVkaXRUYXNrRHVlRGF0ZS5pZCA9ICdlZGl0LXRhc2stZHVlZGF0ZSdcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlLnZhbHVlID0gQ29udHJvbGxlci5kZWZhdWx0RGF0ZVxuICAgICAgICBlZGl0VGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1pbnB1dFwiKVxuICAgICAgICBsZWZ0RWRpdC5hcHBlbmRDaGlsZChlZGl0VGFza05hbWUpXG4gICAgICAgIGxlZnRFZGl0LmFwcGVuZENoaWxkKGVkaXRUYXNrRHVlRGF0ZSlcbiAgICBcbiAgICAgICAgY29uc3QgcmlnaHRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcmlnaHRFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYXJlYScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gJ1N1Ym1pdCdcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stYnRuXCIsIFwic3VibWl0XCIsIFwicHJvamVjdC1saW5rXCIpXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlZGl0VGFza05hbWUudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBlZGl0VGFza0R1ZURhdGUudmFsdWVcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCduZXdUYXNrU3VibWl0dGVkJywge3RpdGxlLCBkdWVEYXRlfSlcbiAgICAgICAgICAgIGVkaXRUYXNrQ29udGFpbmVyRE9NLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyRE9NLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gJ0NhbmNlbCdcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stYnRuXCIsIFwiY2FuY2VsXCIsIFwicHJvamVjdC1saW5rXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHtjYW5jZWxCdXR0b259KVxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGVkaXRUYXNrQ29udGFpbmVyRE9NLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyRE9NLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgfSlcbiAgICAgICAgcmlnaHRFZGl0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcbiAgICAgICAgcmlnaHRFZGl0LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcbiAgICAgICAgZWRpdFRhc2tET00uYXBwZW5kQ2hpbGQobGVmdEVkaXQpXG4gICAgICAgIGVkaXRUYXNrRE9NLmFwcGVuZENoaWxkKHJpZ2h0RWRpdClcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXJET00uYXBwZW5kQ2hpbGQoZWRpdFRhc2tET00pXG4gICAgXG4gICAgICAgIHJldHVybiBlZGl0VGFza0NvbnRhaW5lckRPTVxuICAgIH1cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2xvYWRUYXNrTGlzdCcsICh0YXNrTGlzdCwgaW5mbykgPT4ge1xuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKGNyZWF0ZVRhc2tET00pXG4gICAgfSlcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Rhc2tBZGRlZCcsICh0YXNrLCBpbmZvKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2tET00odGFzaylcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0RPTSh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tET00gPSBUYXNrRE9NKHRhc2spXG4gICAgICAgIHRhc2tMaXN0RE9NLmFwcGVuZENoaWxkKHRhc2tET00pXG4gICAgfVxuXG4gICAgYWRkVGFza0NvbnRhaW5lckRPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VOZXdUYXNrRm9ybSlcblxuICAgIGZ1bmN0aW9uIG1ha2VOZXdUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSB0YXNrRm9ybURPTSgpXG4gICAgICAgIHRhc2tMaXN0RE9NLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxuICAgICAgICBhZGRUYXNrQ29udGFpbmVyRE9NLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBcblxuXG4gICAgXG59KSgpXG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIC8vIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSlcbiAgICAvLyB7XG4gICAgLy8gICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICBjb25zdCBteVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JylcbiAgICAvLyB9XG5cbiAgICAvLyBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KFByb2plY3RMaXN0KSlcbiAgICAgICAgbGV0IG5ld1Byb2plY3RJRCA9IDFcbiAgICAgICAgbGV0IG5ld1Rhc2tJRCA9IDFcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0SUQnLCBuZXdQcm9qZWN0SUQpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VGFza0lEJywgbmV3VGFza0lEKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3ROYW1lID0gXCJEZWZhdWx0IFByb2plY3RcIlxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoMCwgZGVmYXVsdFByb2plY3ROYW1lLCBcIlwiKVxuICAgICAgICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBkZWZhdWx0UHJvamVjdFxuICAgICAgICBjb25zdCBkZWZhdWx0VGFza05hbWUgPSBcIkRlZmF1bHQgVGFza1wiXG4gICAgICAgIGNvbnN0IGRlZmF1bHREYXRlID0gZm9ybWF0SVNPKGFkZERheXMobmV3IERhdGUoKSwgMSksIHtyZXByZXNlbnRhdGlvbjogJ2RhdGUnfSlcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2sgPSBUYXNrKDAsIGRlZmF1bHRUYXNrTmFtZSwgZGVmYXVsdERhdGUpXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2soZGVmYXVsdFRhc2spXG4gICAgLy8gfVxuICAgIFxuXG4gICAgXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwibmV3SW5mb1N1Ym1pdHRlZFwiLCAoZGF0YSwgaW5mbykgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChuZXdQcm9qZWN0SUQrKywgZGF0YS5uYW1lLCBkYXRhLmRlc2NyaXB0aW9uKVxuICAgICAgICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgfSlcbiAgICBcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0U2VsZWN0ZWQnLCAoZGF0YSwgaW5mbykgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBQcm9qZWN0TGlzdC5maW5kUHJvamVjdChkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyh7cHJvamVjdFNlbGVjdGVkfSlcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U2VsZWN0ZWRcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2NoYW5nZVByb2plY3QnLCBwcm9qZWN0U2VsZWN0ZWQpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2FkVGFza0xpc3QnLCBwcm9qZWN0U2VsZWN0ZWQuZ2V0UHJvamVjdEluZm8oKS5saXN0KVxuXG4gICAgfSlcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RJbmZvU3VibWl0dGVkJywgKHt0aXRsZSwgZGVzY3JpcHRpb259LGluZm8pID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3QubmFtZSA9IHRpdGxlXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2luZm9DaGFuZ2VkJywge30pXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0SW5mb0NoYW5nZWQnLCBjdXJyZW50UHJvamVjdClcbiAgICB9KVxuICAgIFxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgndGFza0luZm9TdWJtaXR0ZWQnLCAoe3Rhc2ssIHRpdGxlLCBkdWVEYXRlfSwgaW5mbykgPT4ge1xuICAgICAgICB0YXNrLm5hbWUgPSB0aXRsZVxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdpbmZvQ2hhbmdlZCcsIHt9KVxuICAgIH0pXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCduZXdUYXNrU3VibWl0dGVkJywgKHt0aXRsZSwgZHVlRGF0ZX0sIHRvcGljKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKG5ld1Rhc2tJRCsrLCB0aXRsZSwgZHVlRGF0ZSlcbiAgICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayhuZXdUYXNrKVxuICAgIH0pXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdpbmZvQ2hhbmdlZCcsIChkYXRhLCB0b3BpYykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCAgSlNPTi5zdHJpbmdpZnkoUHJvamVjdExpc3QpKVxuICAgIH0pXG5cbiAgICBcbiAgICByZXR1cm4ge2RlZmF1bHRUYXNrTmFtZSwgZGVmYXVsdERhdGV9XG59KSgpXG5cbmV4cG9ydCB7cHJvamVjdExpc3RWaWV3LCBDb250cm9sbGVyLCBUYXNrTGlzdFZpZXd9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gaW1wb3J0IHsgSVNfRklOSVNIRUQgfSBmcm9tICcuL2V2ZW50LXR5cGVzLmpzJ1xuaW1wb3J0IHtwcm9qZWN0TGlzdFZpZXcsIENvbnRyb2xsZXIsIFRhc2tMaXN0Vmlld30gZnJvbSAnLi9yZW5kZXInXG5pbXBvcnQge1Rhc2ssIFByb2plY3QsIFByb2plY3RMaXN0fSBmcm9tICcuL2xvZ2ljJ1xuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=