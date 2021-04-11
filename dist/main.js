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

const Task = (id, title, description="", dueDate, priority, notes="") => {    
    let isCompleted = false;
    const priorityChange = function(newPriority) {
        priority = newPriority
    }
    
    return {title, description, dueDate, priority, priorityChange}
}

const Project = (id, name, description="") => {
    let tasks = []
    
    const addItem = function(item) {
        items.push(item)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    return {id, name, description, addItem}
}

const ProjectList = () => {
    let projects = []
    const defaultProject = Project("default")

    const addProject = function(project) {
        projects.push(project)
        pubsub.publish('projectAdded', project)
    }

    const removeProject = function(project) {
        const pos = project.indexOf()
    }
    return {addProject, removeProject}
}




/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsView": () => (/* binding */ projectsView),
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");




const projectsView = (() => {
    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectAdded", (data, topic) => {
        console.log('Project added')
        console.log({data})
        const projectContainerDOM = document.querySelector('.project-container')
        if(!projectContainerDOM) {
            console.log({projectContainerDOM})
        }
        
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", data.id)
        newProjectDOM.textContent = data.name
        newProjectDOM.onclick = (e) => {

        }
        console.log(projectContainerDOM.hasChildNodes())
        if(!projectContainerDOM.hasChildNodes()) {
            newProjectDOM.classList.add('active')
        }
        projectContainerDOM.appendChild(newProjectDOM)
    })

    document.getElementById("new-project-form").addEventListener("submit", e => {
        e.preventDefault()
        const name = e.target.elements["name"].value;
        const description = e.target.elements["description"].value
        _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("newInfoSubmitted", {name, description})
    })
    

    const test = (() => {
    })

    return {test}

})()

const projectController = (() => {
    const myProjects = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.ProjectList)()
    let newID = 1
    const defaultProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Project)(0, "default", "")

    myProjects.addProject(defaultProject)

    _logic__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Project)(newID++, data.name, data.description)
        myProjects.addProject(newProject)
    })
    
    // document.querySelector('.project-container').addEventListener('click', e => {
    //     pubsub.subscribe("projectSelected", e.target.)
    // })

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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
// import { IS_FINISHED } from './event-types.js'









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvUHViU3ViL2Rpc3QvUHViU3ViLmVzbS5taW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHlDQUF5QyxrREFBa0QsV0FBVyxnQkFBZ0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNEJBQTRCLHVEQUF1RCxzQkFBc0IsU0FBUyxjQUFjLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHlDQUF5QyxZQUFZLHFJQUFxSSxnRUFBZ0UsR0FBRyxTQUFTLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLG1CQUFtQixhQUFhLG9DQUFvQyxvREFBb0Qsb0RBQW9ELDZDQUE2QyxxRkFBcUYsZ0JBQWdCLDRKQUE0SixHQUFHLGdCQUFnQixvQ0FBb0MsMkJBQTJCLElBQUksY0FBYyxTQUFTLHNCQUFzQiwrRkFBK0YsU0FBUyxtQkFBbUIsNERBQTRELElBQUksTUFBTSx3QkFBd0IsZ0RBQWdELGVBQWUsRUFBRSxTQUFTLGNBQWMsZUFBZSxFQUFFLFNBQVMsdUJBQXVCLFFBQVEsS0FBSywrQkFBK0IsZUFBZSxzREFBc0QsSUFBSSx3QkFBd0IscUNBQXFDLHFCQUFxQixnRUFBZ0UsU0FBUyxTQUFTLGNBQWMsY0FBYyxlQUFlLDhFQUE4RSxTQUFTLHNCQUFzQix5Q0FBeUMsRUFBRSx1QkFBdUIsS0FBSyxVQUFVLGdCQUFnQixzQ0FBc0MscURBQXFELG1IQUFtSCx5RUFBeUUsRUFBRSx3Q0FBd0MsK0JBQStCLEVBQUUsZ0NBQWdDLHNEQUFzRCxJQUFJLHdCQUF3QixtREFBbUQsRUFBRSxvQ0FBb0Msc0RBQXNELElBQUksd0JBQXdCLG1EQUFtRCxFQUFFLG9DQUFvQywrQkFBK0IsbUVBQW1FLHNCQUFzQixFQUFFLEVBQUUsaUZBQWlGLDREQUE0RCxtQkFBbUIsVUFBVSxFQUFFLHNDQUFzQyw2QkFBNkIsT0FBTyxFQUFFLHVDQUF1QywrQkFBK0IsbUNBQW1DLG9CQUFvQixpREFBaUQsRUFBRSxtQ0FBbUMsU0FBUyw0Q0FBNEMsVUFBVSxNQUFNLEVBQUUsMkNBQTJDLDREQUE0RCxFQUFFLDhCQUE4QixXQUFXLDBCQUEwQixRQUFRLHVEQUF1RCw4Q0FBOEMsSUFBSSxzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUyxpQ0FBaUMsR0FBRyw2QkFBNkIsaUJBQWlCLGlFQUFlLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwdEk7QUFDNUIsbUJBQW1CLDJDQUFNOztBQUV6QiwwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7Ozs7QUFJMUQ7QUFDQSxJQUFJLG9EQUFnQjtBQUNwQjtBQUNBLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQWMsc0JBQXNCLGtCQUFrQjtBQUM5RCxLQUFLOzs7QUFHTDtBQUNBLEtBQUs7O0FBRUwsWUFBWTs7QUFFWixDQUFDOztBQUVEO0FBQ0EsdUJBQXVCLG1EQUFXO0FBQ2xDO0FBQ0EsMkJBQTJCLCtDQUFPOztBQUVsQzs7QUFFQSxJQUFJLG9EQUFnQjtBQUNwQiwyQkFBMkIsK0NBQU87QUFDbEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFROztBQUVSLENBQUM7Ozs7Ozs7O1VDMUREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkEsV0FBVyxjQUFjO0FBQytCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFB1YlN1YlxuICogSmF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUHVibGlzaC9TdWJzY3JpYmUgcGF0dGVybi5cbiAqXG4gKiBAdmVyc2lvbiB2NC4wLjBcbiAqIEBhdXRob3IgR2VvcmdlIFJhcHRpcyA8Z2VvcmFwYm94QGdtYWlsLmNvbT5cbiAqIEBob21lcGFnZSBodHRwczovL2dpdGh1Yi5jb20vZ2VvcmFwYm94L1B1YlN1YiNyZWFkbWVcbiAqIEByZXBvc2l0b3J5IGh0dHBzOi8vZ2l0aHViLmNvbS9nZW9yYXBib3gvUHViU3ViLmdpdFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIHQodCxlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49ZVtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbi5rZXksbil9fWZ1bmN0aW9uIGUodCxlLHIpe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09cix0fWZ1bmN0aW9uIHIodCxlKXt2YXIgcj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihuPW4uZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIG4odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIG89bnVsbCE9YXJndW1lbnRzW25dP2FyZ3VtZW50c1tuXTp7fTtuJTI/cihPYmplY3QobyksITApLmZvckVhY2goKGZ1bmN0aW9uKHIpe2UodCxyLG9bcl0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobykpOnIoT2JqZWN0KG8pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobyxlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gbyh0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gaSh0KX0odCl8fGZ1bmN0aW9uKHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCkpcmV0dXJuIEFycmF5LmZyb20odCl9KHQpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gaSh0LGUpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmdC5jb25zdHJ1Y3RvciYmKHI9dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20odCk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiBpKHQsZSl9KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGkodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheShlKTtyPGU7cisrKW5bcl09dFtyXTtyZXR1cm4gbn12YXIgdT1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBuIGluIHQpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbikmJmUmJiExPT09ZS5jYWxsKHIsdFtuXSxuLHQpKXJldHVybjtyZXR1cm4gdH0sYz1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBuPXIuX3B1YnN1Yl90b3BpY3MsaT1uW3RdP28oblt0XSk6W10sdT0wLGM9aS5sZW5ndGg7dTxjO3UrPTEpe3ZhciBhPWlbdV0udG9rZW4scz1pW3VdO2lmKHIuX29wdGlvbnMuaW1tZWRpYXRlRXhjZXB0aW9ucylzLmNhbGxiYWNrKGUse25hbWU6dCx0b2tlbjphfSk7ZWxzZSB0cnl7cy5jYWxsYmFjayhlLHtuYW1lOnQsdG9rZW46YX0pfWNhdGNoKHQpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dGhyb3cgdH0pLDApfSEwPT09cy5vbmNlJiZyLnVuc3Vic2NyaWJlKGEpfX0sYT1mdW5jdGlvbih0KXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheShlPjE/ZS0xOjApLG49MTtuPGU7bisrKXJbbi0xXT1hcmd1bWVudHNbbl07cmV0dXJuIHIubGVuZ3RoPD0xP3JbMF06W10uY29uY2F0KHIpfSxzPWZ1bmN0aW9uKHQsZSxyLG4pe3JldHVybiEhdC5fcHVic3ViX3RvcGljc1tlXSYmKG4/YyhlLHIsdCk6c2V0VGltZW91dCgoZnVuY3Rpb24oKXtjKGUscix0KX0pLDApLCEwKX0sYj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKTt0aGlzLl9wdWJzdWJfdG9waWNzPXt9LHRoaXMuX3B1YnN1Yl91aWQ9LTEsdGhpcy5fb3B0aW9ucz1uKG4oe30se2ltbWVkaWF0ZUV4Y2VwdGlvbnM6ITF9KSx0KX12YXIgcixpLGM7cmV0dXJuIHI9ZSwoaT1be2tleTpcInN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10aGlzLl9wdWJzdWJfdG9waWNzLG89dGhpcy5fcHVic3ViX3VpZCs9MSxpPXt9O2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIldoZW4gc3Vic2NyaWJpbmcgZm9yIGFuIGV2ZW50LCBhIGNhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgZGVmaW5lZC5cIik7cmV0dXJuIG5bdF18fChuW3RdPVtdKSxpLnRva2VuPW8saS5jYWxsYmFjaz1lLGkub25jZT0hIXIsblt0XS5wdXNoKGkpLG99fSx7a2V5Olwic3Vic2NyaWJlT25jZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuc3Vic2NyaWJlKHQsZSwhMCl9fSx7a2V5OlwicHVibGlzaFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KGU+MT9lLTE6MCksbj0xO248ZTtuKyspcltuLTFdPWFyZ3VtZW50c1tuXTtyZXR1cm4gcyh0aGlzLHQsYS5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChyKSksITEpfX0se2tleTpcInB1Ymxpc2hTeW5jXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoZT4xP2UtMTowKSxuPTE7bjxlO24rKylyW24tMV09YXJndW1lbnRzW25dO3JldHVybiBzKHRoaXMsdCxhLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KHIpKSwhMCl9fSx7a2V5OlwidW5zdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wdWJzdWJfdG9waWNzLHI9ITE7Zm9yKHZhciBuIGluIGUpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJmVbbl0pe2Zvcih2YXIgbz1lW25dLmxlbmd0aDtvOyl7aWYoby09MSxlW25dW29dLnRva2VuPT09dClyZXR1cm4gZVtuXS5zcGxpY2UobywxKSwwPT09ZVtuXS5sZW5ndGgmJmRlbGV0ZSBlW25dLHQ7bj09PXQmJihlW25dLnNwbGljZShvLDEpLDA9PT1lW25dLmxlbmd0aCYmZGVsZXRlIGVbbl0scj0hMCl9aWYoITA9PT1yKXJldHVybiB0fXJldHVybiExfX0se2tleTpcInVuc3Vic2NyaWJlQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHVic3ViX3RvcGljcz17fSx0aGlzfX0se2tleTpcImhhc1N1YnNjcmliZXJzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcHVic3ViX3RvcGljcyxyPSExO3JldHVybiBudWxsPT10Pyh1KGUsKGZ1bmN0aW9uKHQsZSl7aWYoZSlyZXR1cm4gcj0hMCwhMX0pKSxyKTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX19LHtrZXk6XCJzdWJzY3JpYmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9e307cmV0dXJuIHUodGhpcy5fcHVic3ViX3RvcGljcywoZnVuY3Rpb24oZSxyKXt0W3JdPW8oZSl9KSksdH19LHtrZXk6XCJzdWJzY3JpYmVyc0J5VG9waWNcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcHVic3ViX3RvcGljc1t0XT9vKHRoaXMuX3B1YnN1Yl90b3BpY3NbdF0pOltdfX0se2tleTpcImFsaWFzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9dGhpcztyZXR1cm4gdSh0LChmdW5jdGlvbihuLG8pe3ZhciBpLHU7ZS5wcm90b3R5cGVbb10mJihlLnByb3RvdHlwZVt0W29dXT0oaT1vLHU9cixmdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKWVbcl09YXJndW1lbnRzW3JdO3JldHVybiB1W2ldLmFwcGx5KHUsZSl9KSl9KSksdGhpc319XSkmJnQoci5wcm90b3R5cGUsaSksYyYmdChyLGMpLGV9KCk7Yi5jcmVhdGVJbnN0YW5jZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGIodCl9O2V4cG9ydCBkZWZhdWx0IGI7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ1B1YlN1Yic7XG5jb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKClcblxuY29uc3QgVGFzayA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uPVwiXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcz1cIlwiKSA9PiB7ICAgIFxuICAgIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByaW9yaXR5Q2hhbmdlID0gZnVuY3Rpb24obmV3UHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByaW9yaXR5Q2hhbmdlfVxufVxuXG5jb25zdCBQcm9qZWN0ID0gKGlkLCBuYW1lLCBkZXNjcmlwdGlvbj1cIlwiKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBcbiAgICBjb25zdCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSAgIFxuXG4gICAgY29uc3QgcmVtb3ZlaXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcG9zID0gaXRlbXMuaW5kZXhPZihpdGVtcylcbiAgICAgICAgaXRlbXMuc3BsaWNlKHBvcywgMSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgYWRkSXRlbX1cbn1cblxuY29uc3QgUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoXCJkZWZhdWx0XCIpXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBwcm9qZWN0KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHByb2plY3QuaW5kZXhPZigpXG4gICAgfVxuICAgIHJldHVybiB7YWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH1cbn1cblxuZXhwb3J0IHtUYXNrLCBQcm9qZWN0LCBQcm9qZWN0TGlzdCwgcHVic3VifVxuIiwiaW1wb3J0IHtUYXNrLCBQcm9qZWN0LCBQcm9qZWN0TGlzdCwgcHVic3VifSBmcm9tICcuL2xvZ2ljJ1xuXG5cblxuY29uc3QgcHJvamVjdHNWaWV3ID0gKCgpID0+IHtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdEFkZGVkXCIsIChkYXRhLCB0b3BpYykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBhZGRlZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHtkYXRhfSlcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgICAgIGlmKCFwcm9qZWN0Q29udGFpbmVyRE9NKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7cHJvamVjdENvbnRhaW5lckRPTX0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdQcm9qZWN0RE9NLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwicHJvamVjdC1saW5rXCIpXG4gICAgICAgIG5ld1Byb2plY3RET00uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SURcIiwgZGF0YS5pZClcbiAgICAgICAgbmV3UHJvamVjdERPTS50ZXh0Q29udGVudCA9IGRhdGEubmFtZVxuICAgICAgICBuZXdQcm9qZWN0RE9NLm9uY2xpY2sgPSAoZSkgPT4ge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckRPTS5oYXNDaGlsZE5vZGVzKCkpXG4gICAgICAgIGlmKCFwcm9qZWN0Q29udGFpbmVyRE9NLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgbmV3UHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RDb250YWluZXJET00uYXBwZW5kQ2hpbGQobmV3UHJvamVjdERPTSlcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZWxlbWVudHNbXCJuYW1lXCJdLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0LmVsZW1lbnRzW1wiZGVzY3JpcHRpb25cIl0udmFsdWVcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJuZXdJbmZvU3VibWl0dGVkXCIsIHtuYW1lLCBkZXNjcmlwdGlvbn0pXG4gICAgfSlcbiAgICBcblxuICAgIGNvbnN0IHRlc3QgPSAoKCkgPT4ge1xuICAgIH0pXG5cbiAgICByZXR1cm4ge3Rlc3R9XG5cbn0pKClcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG15UHJvamVjdHMgPSBQcm9qZWN0TGlzdCgpXG4gICAgbGV0IG5ld0lEID0gMVxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgwLCBcImRlZmF1bHRcIiwgXCJcIilcblxuICAgIG15UHJvamVjdHMuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJuZXdJbmZvU3VibWl0dGVkXCIsIChkYXRhLCBpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5ld0lEKyssIGRhdGEubmFtZSwgZGF0YS5kZXNjcmlwdGlvbilcbiAgICAgICAgbXlQcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgfSlcbiAgICBcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIC8vICAgICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdFNlbGVjdGVkXCIsIGUudGFyZ2V0LilcbiAgICAvLyB9KVxuXG59KSgpXG5cbmV4cG9ydCB7cHJvamVjdHNWaWV3LCBwcm9qZWN0Q29udHJvbGxlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7IElTX0ZJTklTSEVEIH0gZnJvbSAnLi9ldmVudC10eXBlcy5qcydcbmltcG9ydCB7cHJvamVjdHNWaWV3LCBwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9yZW5kZXInXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=