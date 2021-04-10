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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var PubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! PubSub */ "./node_modules/PubSub/dist/PubSub.esm.min.js");
// import { IS_FINISHED } from './event-types.js'
// import {projectsView} from './UI.js'



const pubsub = new PubSub__WEBPACK_IMPORTED_MODULE_0__.default()

const Task = (title, description="", dueDate, priority, notes="") => {
    let isCompleted = false;
    const pubsub = new PubSub__WEBPACK_IMPORTED_MODULE_0__.default();
    const priorityChange = function(newPriority) {
        priority = newPriority
    }
    
    return {title, description, dueDate, priority, priorityChange}
}

const Project = (name, description="") => {
    let tasks = []
    
    const addItem = function(item) {
        items.push(item)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    return {name, description, addItem}
}

const ProjectList = () => {
    let projects = []
    const defaultProject = project("default")

    const addProject = function(project) {
        projects.push(project)
    }

    const removeProject = function(project) {
        const pos = project.indexOf()
    }

}

function projectsView() {
    const myProjects = ProjectList
    document.getElementById("new-project-form").addEventListener("submit", e => {
        const name = e.target.elements["name"].value;
        const description = e.target.elements["description"].value
    })

    
}
projectsView()





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvUHViU3ViL2Rpc3QvUHViU3ViLmVzbS5taW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHlDQUF5QyxrREFBa0QsV0FBVyxnQkFBZ0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNEJBQTRCLHVEQUF1RCxzQkFBc0IsU0FBUyxjQUFjLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHlDQUF5QyxZQUFZLHFJQUFxSSxnRUFBZ0UsR0FBRyxTQUFTLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLG1CQUFtQixhQUFhLG9DQUFvQyxvREFBb0Qsb0RBQW9ELDZDQUE2QyxxRkFBcUYsZ0JBQWdCLDRKQUE0SixHQUFHLGdCQUFnQixvQ0FBb0MsMkJBQTJCLElBQUksY0FBYyxTQUFTLHNCQUFzQiwrRkFBK0YsU0FBUyxtQkFBbUIsNERBQTRELElBQUksTUFBTSx3QkFBd0IsZ0RBQWdELGVBQWUsRUFBRSxTQUFTLGNBQWMsZUFBZSxFQUFFLFNBQVMsdUJBQXVCLFFBQVEsS0FBSywrQkFBK0IsZUFBZSxzREFBc0QsSUFBSSx3QkFBd0IscUNBQXFDLHFCQUFxQixnRUFBZ0UsU0FBUyxTQUFTLGNBQWMsY0FBYyxlQUFlLDhFQUE4RSxTQUFTLHNCQUFzQix5Q0FBeUMsRUFBRSx1QkFBdUIsS0FBSyxVQUFVLGdCQUFnQixzQ0FBc0MscURBQXFELG1IQUFtSCx5RUFBeUUsRUFBRSx3Q0FBd0MsK0JBQStCLEVBQUUsZ0NBQWdDLHNEQUFzRCxJQUFJLHdCQUF3QixtREFBbUQsRUFBRSxvQ0FBb0Msc0RBQXNELElBQUksd0JBQXdCLG1EQUFtRCxFQUFFLG9DQUFvQywrQkFBK0IsbUVBQW1FLHNCQUFzQixFQUFFLEVBQUUsaUZBQWlGLDREQUE0RCxtQkFBbUIsVUFBVSxFQUFFLHNDQUFzQyw2QkFBNkIsT0FBTyxFQUFFLHVDQUF1QywrQkFBK0IsbUNBQW1DLG9CQUFvQixpREFBaUQsRUFBRSxtQ0FBbUMsU0FBUyw0Q0FBNEMsVUFBVSxNQUFNLEVBQUUsMkNBQTJDLDREQUE0RCxFQUFFLDhCQUE4QixXQUFXLDBCQUEwQixRQUFRLHVEQUF1RCw4Q0FBOEMsSUFBSSxzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUyxpQ0FBaUMsR0FBRyw2QkFBNkIsaUJBQWlCLGlFQUFlLENBQUMsRUFBQzs7Ozs7OztVQ1Zodkk7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxhQUFhOztBQUVJOztBQUU1QixtQkFBbUIsMkNBQU07O0FBRXpCO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBQdWJTdWJcbiAqIEphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFB1Ymxpc2gvU3Vic2NyaWJlIHBhdHRlcm4uXG4gKlxuICogQHZlcnNpb24gdjQuMC4wXG4gKiBAYXV0aG9yIEdlb3JnZSBSYXB0aXMgPGdlb3JhcGJveEBnbWFpbC5jb20+XG4gKiBAaG9tZXBhZ2UgaHR0cHM6Ly9naXRodWIuY29tL2dlb3JhcGJveC9QdWJTdWIjcmVhZG1lXG4gKiBAcmVwb3NpdG9yeSBodHRwczovL2dpdGh1Yi5jb20vZ2VvcmFwYm94L1B1YlN1Yi5naXRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPWVbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1mdW5jdGlvbiBlKHQsZSxyKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPXIsdH1mdW5jdGlvbiByKHQsZSl7dmFyIHI9T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYobj1uLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBuKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBvPW51bGwhPWFyZ3VtZW50c1tuXT9hcmd1bWVudHNbbl06e307biUyP3IoT2JqZWN0KG8pLCEwKS5mb3JFYWNoKChmdW5jdGlvbihyKXtlKHQscixvW3JdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyh0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG8pKTpyKE9iamVjdChvKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sZSkpfSkpfXJldHVybiB0fWZ1bmN0aW9uIG8odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGkodCl9KHQpfHxmdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBBcnJheS5mcm9tKHQpfSh0KXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGkodCxlKTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJnQuY29uc3RydWN0b3ImJihyPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4gaSh0LGUpfSh0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkoZSk7cjxlO3IrKyluW3JdPXRbcl07cmV0dXJuIG59dmFyIHU9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbiBpbiB0KWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZlJiYhMT09PWUuY2FsbChyLHRbbl0sbix0KSlyZXR1cm47cmV0dXJuIHR9LGM9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbj1yLl9wdWJzdWJfdG9waWNzLGk9blt0XT9vKG5bdF0pOltdLHU9MCxjPWkubGVuZ3RoO3U8Yzt1Kz0xKXt2YXIgYT1pW3VdLnRva2VuLHM9aVt1XTtpZihyLl9vcHRpb25zLmltbWVkaWF0ZUV4Y2VwdGlvbnMpcy5jYWxsYmFjayhlLHtuYW1lOnQsdG9rZW46YX0pO2Vsc2UgdHJ5e3MuY2FsbGJhY2soZSx7bmFtZTp0LHRva2VuOmF9KX1jYXRjaCh0KXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Rocm93IHR9KSwwKX0hMD09PXMub25jZSYmci51bnN1YnNjcmliZShhKX19LGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoZT4xP2UtMTowKSxuPTE7bjxlO24rKylyW24tMV09YXJndW1lbnRzW25dO3JldHVybiByLmxlbmd0aDw9MT9yWzBdOltdLmNvbmNhdChyKX0scz1mdW5jdGlvbih0LGUscixuKXtyZXR1cm4hIXQuX3B1YnN1Yl90b3BpY3NbZV0mJihuP2MoZSxyLHQpOnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7YyhlLHIsdCl9KSwwKSwhMCl9LGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dGhpcy5fcHVic3ViX3RvcGljcz17fSx0aGlzLl9wdWJzdWJfdWlkPS0xLHRoaXMuX29wdGlvbnM9bihuKHt9LHtpbW1lZGlhdGVFeGNlcHRpb25zOiExfSksdCl9dmFyIHIsaSxjO3JldHVybiByPWUsKGk9W3trZXk6XCJzdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbih0LGUscil7dmFyIG49dGhpcy5fcHVic3ViX3RvcGljcyxvPXRoaXMuX3B1YnN1Yl91aWQrPTEsaT17fTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJXaGVuIHN1YnNjcmliaW5nIGZvciBhbiBldmVudCwgYSBjYWxsYmFjayBmdW5jdGlvbiBtdXN0IGJlIGRlZmluZWQuXCIpO3JldHVybiBuW3RdfHwoblt0XT1bXSksaS50b2tlbj1vLGkuY2FsbGJhY2s9ZSxpLm9uY2U9ISFyLG5bdF0ucHVzaChpKSxvfX0se2tleTpcInN1YnNjcmliZU9uY2VcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnN1YnNjcmliZSh0LGUsITApfX0se2tleTpcInB1Ymxpc2hcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheShlPjE/ZS0xOjApLG49MTtuPGU7bisrKXJbbi0xXT1hcmd1bWVudHNbbl07cmV0dXJuIHModGhpcyx0LGEuYXBwbHkodm9pZCAwLFt0XS5jb25jYXQocikpLCExKX19LHtrZXk6XCJwdWJsaXNoU3luY1wiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KGU+MT9lLTE6MCksbj0xO248ZTtuKyspcltuLTFdPWFyZ3VtZW50c1tuXTtyZXR1cm4gcyh0aGlzLHQsYS5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChyKSksITApfX0se2tleTpcInVuc3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcHVic3ViX3RvcGljcyxyPSExO2Zvcih2YXIgbiBpbiBlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZlW25dKXtmb3IodmFyIG89ZVtuXS5sZW5ndGg7bzspe2lmKG8tPTEsZVtuXVtvXS50b2tlbj09PXQpcmV0dXJuIGVbbl0uc3BsaWNlKG8sMSksMD09PWVbbl0ubGVuZ3RoJiZkZWxldGUgZVtuXSx0O249PT10JiYoZVtuXS5zcGxpY2UobywxKSwwPT09ZVtuXS5sZW5ndGgmJmRlbGV0ZSBlW25dLHI9ITApfWlmKCEwPT09cilyZXR1cm4gdH1yZXR1cm4hMX19LHtrZXk6XCJ1bnN1YnNjcmliZUFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3B1YnN1Yl90b3BpY3M9e30sdGhpc319LHtrZXk6XCJoYXNTdWJzY3JpYmVyc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3B1YnN1Yl90b3BpY3Mscj0hMTtyZXR1cm4gbnVsbD09dD8odShlLChmdW5jdGlvbih0LGUpe2lmKGUpcmV0dXJuIHI9ITAsITF9KSkscik6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9fSx7a2V5Olwic3Vic2NyaWJlcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXt9O3JldHVybiB1KHRoaXMuX3B1YnN1Yl90b3BpY3MsKGZ1bmN0aW9uKGUscil7dFtyXT1vKGUpfSkpLHR9fSx7a2V5Olwic3Vic2NyaWJlcnNCeVRvcGljXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3B1YnN1Yl90b3BpY3NbdF0/byh0aGlzLl9wdWJzdWJfdG9waWNzW3RdKTpbXX19LHtrZXk6XCJhbGlhc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXRoaXM7cmV0dXJuIHUodCwoZnVuY3Rpb24obixvKXt2YXIgaSx1O2UucHJvdG90eXBlW29dJiYoZS5wcm90b3R5cGVbdFtvXV09KGk9byx1PXIsZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyllW3JdPWFyZ3VtZW50c1tyXTtyZXR1cm4gdVtpXS5hcHBseSh1LGUpfSkpfSkpLHRoaXN9fV0pJiZ0KHIucHJvdG90eXBlLGkpLGMmJnQocixjKSxlfSgpO2IuY3JlYXRlSW5zdGFuY2U9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBiKHQpfTtleHBvcnQgZGVmYXVsdCBiO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgeyBJU19GSU5JU0hFRCB9IGZyb20gJy4vZXZlbnQtdHlwZXMuanMnXG4vLyBpbXBvcnQge3Byb2plY3RzVmlld30gZnJvbSAnLi9VSS5qcydcblxuaW1wb3J0IFB1YlN1YiBmcm9tICdQdWJTdWInO1xuXG5jb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKClcblxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzPVwiXCIpID0+IHtcbiAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKCk7XG4gICAgY29uc3QgcHJpb3JpdHlDaGFuZ2UgPSBmdW5jdGlvbihuZXdQcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJpb3JpdHlDaGFuZ2V9XG59XG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb249XCJcIikgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdXG4gICAgXG4gICAgY29uc3QgYWRkSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKVxuICAgIH0gICBcblxuICAgIGNvbnN0IHJlbW92ZWl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGl0ZW1zLmluZGV4T2YoaXRlbXMpXG4gICAgICAgIGl0ZW1zLnNwbGljZShwb3MsIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCBkZXNjcmlwdGlvbiwgYWRkSXRlbX1cbn1cblxuY29uc3QgUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJkZWZhdWx0XCIpXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcG9zID0gcHJvamVjdC5pbmRleE9mKClcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gcHJvamVjdHNWaWV3KCkge1xuICAgIGNvbnN0IG15UHJvamVjdHMgPSBQcm9qZWN0TGlzdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZWxlbWVudHNbXCJuYW1lXCJdLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0LmVsZW1lbnRzW1wiZGVzY3JpcHRpb25cIl0udmFsdWVcbiAgICB9KVxuXG4gICAgXG59XG5wcm9qZWN0c1ZpZXcoKVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9