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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvUHViU3ViL2Rpc3QvUHViU3ViLmVzbS5taW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHlDQUF5QyxrREFBa0QsV0FBVyxnQkFBZ0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNEJBQTRCLHVEQUF1RCxzQkFBc0IsU0FBUyxjQUFjLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHlDQUF5QyxZQUFZLHFJQUFxSSxnRUFBZ0UsR0FBRyxTQUFTLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLG1CQUFtQixhQUFhLG9DQUFvQyxvREFBb0Qsb0RBQW9ELDZDQUE2QyxxRkFBcUYsZ0JBQWdCLDRKQUE0SixHQUFHLGdCQUFnQixvQ0FBb0MsMkJBQTJCLElBQUksY0FBYyxTQUFTLHNCQUFzQiwrRkFBK0YsU0FBUyxtQkFBbUIsNERBQTRELElBQUksTUFBTSx3QkFBd0IsZ0RBQWdELGVBQWUsRUFBRSxTQUFTLGNBQWMsZUFBZSxFQUFFLFNBQVMsdUJBQXVCLFFBQVEsS0FBSywrQkFBK0IsZUFBZSxzREFBc0QsSUFBSSx3QkFBd0IscUNBQXFDLHFCQUFxQixnRUFBZ0UsU0FBUyxTQUFTLGNBQWMsY0FBYyxlQUFlLDhFQUE4RSxTQUFTLHNCQUFzQix5Q0FBeUMsRUFBRSx1QkFBdUIsS0FBSyxVQUFVLGdCQUFnQixzQ0FBc0MscURBQXFELG1IQUFtSCx5RUFBeUUsRUFBRSx3Q0FBd0MsK0JBQStCLEVBQUUsZ0NBQWdDLHNEQUFzRCxJQUFJLHdCQUF3QixtREFBbUQsRUFBRSxvQ0FBb0Msc0RBQXNELElBQUksd0JBQXdCLG1EQUFtRCxFQUFFLG9DQUFvQywrQkFBK0IsbUVBQW1FLHNCQUFzQixFQUFFLEVBQUUsaUZBQWlGLDREQUE0RCxtQkFBbUIsVUFBVSxFQUFFLHNDQUFzQyw2QkFBNkIsT0FBTyxFQUFFLHVDQUF1QywrQkFBK0IsbUNBQW1DLG9CQUFvQixpREFBaUQsRUFBRSxtQ0FBbUMsU0FBUyw0Q0FBNEMsVUFBVSxNQUFNLEVBQUUsMkNBQTJDLDREQUE0RCxFQUFFLDhCQUE4QixXQUFXLDBCQUEwQixRQUFRLHVEQUF1RCw4Q0FBOEMsSUFBSSxzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUyxpQ0FBaUMsR0FBRyw2QkFBNkIsaUJBQWlCLGlFQUFlLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwdEk7QUFDNUIsbUJBQW1CLDJDQUFNOztBQUV6QiwwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRTJDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZTs7OztBQUkxRDtBQUNBLElBQUksb0RBQWdCO0FBQ3BCO0FBQ0EscUJBQXFCLEtBQUs7QUFDMUI7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBYyxzQkFBc0Isa0JBQWtCO0FBQzlELEtBQUs7OztBQUdMO0FBQ0EsS0FBSzs7QUFFTCxZQUFZOztBQUVaLENBQUM7O0FBRUQ7QUFDQSx1QkFBdUIsbURBQVc7QUFDbEM7QUFDQSwyQkFBMkIsK0NBQU87O0FBRWxDOztBQUVBLElBQUksb0RBQWdCO0FBQ3BCLDJCQUEyQiwrQ0FBTztBQUNsQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVE7O0FBRVIsQ0FBQzs7Ozs7Ozs7VUMxREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLGNBQWM7QUFDK0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogUHViU3ViXG4gKiBKYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQdWJsaXNoL1N1YnNjcmliZSBwYXR0ZXJuLlxuICpcbiAqIEB2ZXJzaW9uIHY0LjAuMFxuICogQGF1dGhvciBHZW9yZ2UgUmFwdGlzIDxnZW9yYXBib3hAZ21haWwuY29tPlxuICogQGhvbWVwYWdlIGh0dHBzOi8vZ2l0aHViLmNvbS9nZW9yYXBib3gvUHViU3ViI3JlYWRtZVxuICogQHJlcG9zaXRvcnkgaHR0cHM6Ly9naXRodWIuY29tL2dlb3JhcGJveC9QdWJTdWIuZ2l0XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj1lW3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLmtleSxuKX19ZnVuY3Rpb24gZSh0LGUscil7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1yLHR9ZnVuY3Rpb24gcih0LGUpe3ZhciByPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gbih0KXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgbz1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj9yKE9iamVjdChvKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24ocil7ZSh0LHIsb1tyXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvKSk6cihPYmplY3QobykpLmZvckVhY2goKGZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLGUpKX0pKX1yZXR1cm4gdH1mdW5jdGlvbiBvKHQpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBpKHQpfSh0KXx8ZnVuY3Rpb24odCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBpKHQsZSk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZ0LmNvbnN0cnVjdG9yJiYocj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIGkodCxlKX0odCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gaSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgcj0wLG49bmV3IEFycmF5KGUpO3I8ZTtyKyspbltyXT10W3JdO3JldHVybiBufXZhciB1PWZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIG4gaW4gdClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmZSYmITE9PT1lLmNhbGwocix0W25dLG4sdCkpcmV0dXJuO3JldHVybiB0fSxjPWZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIG49ci5fcHVic3ViX3RvcGljcyxpPW5bdF0/byhuW3RdKTpbXSx1PTAsYz1pLmxlbmd0aDt1PGM7dSs9MSl7dmFyIGE9aVt1XS50b2tlbixzPWlbdV07aWYoci5fb3B0aW9ucy5pbW1lZGlhdGVFeGNlcHRpb25zKXMuY2FsbGJhY2soZSx7bmFtZTp0LHRva2VuOmF9KTtlbHNlIHRyeXtzLmNhbGxiYWNrKGUse25hbWU6dCx0b2tlbjphfSl9Y2F0Y2godCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0aHJvdyB0fSksMCl9ITA9PT1zLm9uY2UmJnIudW5zdWJzY3JpYmUoYSl9fSxhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KGU+MT9lLTE6MCksbj0xO248ZTtuKyspcltuLTFdPWFyZ3VtZW50c1tuXTtyZXR1cm4gci5sZW5ndGg8PTE/clswXTpbXS5jb25jYXQocil9LHM9ZnVuY3Rpb24odCxlLHIsbil7cmV0dXJuISF0Ll9wdWJzdWJfdG9waWNzW2VdJiYobj9jKGUscix0KTpzZXRUaW1lb3V0KChmdW5jdGlvbigpe2MoZSxyLHQpfSksMCksITApfSxiPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpO3RoaXMuX3B1YnN1Yl90b3BpY3M9e30sdGhpcy5fcHVic3ViX3VpZD0tMSx0aGlzLl9vcHRpb25zPW4obih7fSx7aW1tZWRpYXRlRXhjZXB0aW9uczohMX0pLHQpfXZhciByLGksYztyZXR1cm4gcj1lLChpPVt7a2V5Olwic3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXRoaXMuX3B1YnN1Yl90b3BpY3Msbz10aGlzLl9wdWJzdWJfdWlkKz0xLGk9e307aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiV2hlbiBzdWJzY3JpYmluZyBmb3IgYW4gZXZlbnQsIGEgY2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBkZWZpbmVkLlwiKTtyZXR1cm4gblt0XXx8KG5bdF09W10pLGkudG9rZW49byxpLmNhbGxiYWNrPWUsaS5vbmNlPSEhcixuW3RdLnB1c2goaSksb319LHtrZXk6XCJzdWJzY3JpYmVPbmNlXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5zdWJzY3JpYmUodCxlLCEwKX19LHtrZXk6XCJwdWJsaXNoXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoZT4xP2UtMTowKSxuPTE7bjxlO24rKylyW24tMV09YXJndW1lbnRzW25dO3JldHVybiBzKHRoaXMsdCxhLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KHIpKSwhMSl9fSx7a2V5OlwicHVibGlzaFN5bmNcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheShlPjE/ZS0xOjApLG49MTtuPGU7bisrKXJbbi0xXT1hcmd1bWVudHNbbl07cmV0dXJuIHModGhpcyx0LGEuYXBwbHkodm9pZCAwLFt0XS5jb25jYXQocikpLCEwKX19LHtrZXk6XCJ1bnN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3B1YnN1Yl90b3BpY3Mscj0hMTtmb3IodmFyIG4gaW4gZSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmZVtuXSl7Zm9yKHZhciBvPWVbbl0ubGVuZ3RoO287KXtpZihvLT0xLGVbbl1bb10udG9rZW49PT10KXJldHVybiBlW25dLnNwbGljZShvLDEpLDA9PT1lW25dLmxlbmd0aCYmZGVsZXRlIGVbbl0sdDtuPT09dCYmKGVbbl0uc3BsaWNlKG8sMSksMD09PWVbbl0ubGVuZ3RoJiZkZWxldGUgZVtuXSxyPSEwKX1pZighMD09PXIpcmV0dXJuIHR9cmV0dXJuITF9fSx7a2V5OlwidW5zdWJzY3JpYmVBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wdWJzdWJfdG9waWNzPXt9LHRoaXN9fSx7a2V5OlwiaGFzU3Vic2NyaWJlcnNcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wdWJzdWJfdG9waWNzLHI9ITE7cmV0dXJuIG51bGw9PXQ/KHUoZSwoZnVuY3Rpb24odCxlKXtpZihlKXJldHVybiByPSEwLCExfSkpLHIpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfX0se2tleTpcInN1YnNjcmliZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD17fTtyZXR1cm4gdSh0aGlzLl9wdWJzdWJfdG9waWNzLChmdW5jdGlvbihlLHIpe3Rbcl09byhlKX0pKSx0fX0se2tleTpcInN1YnNjcmliZXJzQnlUb3BpY1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wdWJzdWJfdG9waWNzW3RdP28odGhpcy5fcHVic3ViX3RvcGljc1t0XSk6W119fSx7a2V5OlwiYWxpYXNcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj10aGlzO3JldHVybiB1KHQsKGZ1bmN0aW9uKG4sbyl7dmFyIGksdTtlLnByb3RvdHlwZVtvXSYmKGUucHJvdG90eXBlW3Rbb11dPShpPW8sdT1yLGZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspZVtyXT1hcmd1bWVudHNbcl07cmV0dXJuIHVbaV0uYXBwbHkodSxlKX0pKX0pKSx0aGlzfX1dKSYmdChyLnByb3RvdHlwZSxpKSxjJiZ0KHIsYyksZX0oKTtiLmNyZWF0ZUluc3RhbmNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYih0KX07ZXhwb3J0IGRlZmF1bHQgYjtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnUHViU3ViJztcbmNvbnN0IHB1YnN1YiA9IG5ldyBQdWJTdWIoKVxuXG5jb25zdCBUYXNrID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzPVwiXCIpID0+IHsgICAgXG4gICAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgcHJpb3JpdHlDaGFuZ2UgPSBmdW5jdGlvbihuZXdQcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJpb3JpdHlDaGFuZ2V9XG59XG5cbmNvbnN0IFByb2plY3QgPSAoaWQsIG5hbWUsIGRlc2NyaXB0aW9uPVwiXCIpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIFxuICAgIGNvbnN0IGFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSlcbiAgICB9ICAgXG5cbiAgICBjb25zdCByZW1vdmVpdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zdCBwb3MgPSBpdGVtcy5pbmRleE9mKGl0ZW1zKVxuICAgICAgICBpdGVtcy5zcGxpY2UocG9zLCAxKVxuICAgIH1cblxuICAgIHJldHVybiB7aWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBhZGRJdGVtfVxufVxuXG5jb25zdCBQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXVxuICAgIFxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgcHJvamVjdClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwb3MgPSBwcm9qZWN0LmluZGV4T2YoKVxuICAgIH1cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIHJlbW92ZVByb2plY3R9XG59XG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QsIHB1YnN1Yn1cbiIsImltcG9ydCB7VGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QsIHB1YnN1Yn0gZnJvbSAnLi9sb2dpYydcblxuXG5cbmNvbnN0IHByb2plY3RzVmlldyA9ICgoKSA9PiB7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3RBZGRlZFwiLCAoZGF0YSwgdG9waWMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3QgYWRkZWQnKVxuICAgICAgICBjb25zb2xlLmxvZyh7ZGF0YX0pXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKVxuICAgICAgICBpZighcHJvamVjdENvbnRhaW5lckRPTSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3Byb2plY3RDb250YWluZXJET019KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3UHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcInByb2plY3QtbGlua1wiKVxuICAgICAgICBuZXdQcm9qZWN0RE9NLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdElEXCIsIGRhdGEuaWQpXG4gICAgICAgIG5ld1Byb2plY3RET00udGV4dENvbnRlbnQgPSBkYXRhLm5hbWVcbiAgICAgICAgbmV3UHJvamVjdERPTS5vbmNsaWNrID0gKGUpID0+IHtcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXJET00uaGFzQ2hpbGROb2RlcygpKVxuICAgICAgICBpZighcHJvamVjdENvbnRhaW5lckRPTS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RET00uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyRE9NLmFwcGVuZENoaWxkKG5ld1Byb2plY3RET00pXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmVsZW1lbnRzW1wibmFtZVwiXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlLnRhcmdldC5lbGVtZW50c1tcImRlc2NyaXB0aW9uXCJdLnZhbHVlXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwibmV3SW5mb1N1Ym1pdHRlZFwiLCB7bmFtZSwgZGVzY3JpcHRpb259KVxuICAgIH0pXG4gICAgXG5cbiAgICBjb25zdCB0ZXN0ID0gKCgpID0+IHtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHt0ZXN0fVxuXG59KSgpXG5cbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBteVByb2plY3RzID0gUHJvamVjdExpc3QoKVxuICAgIGxldCBuZXdJRCA9IDFcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoMCwgXCJkZWZhdWx0XCIsIFwiXCIpXG5cbiAgICBteVByb2plY3RzLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwibmV3SW5mb1N1Ym1pdHRlZFwiLCAoZGF0YSwgaW5mbykgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChuZXdJRCsrLCBkYXRhLm5hbWUsIGRhdGEuZGVzY3JpcHRpb24pXG4gICAgICAgIG15UHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIH0pXG4gICAgXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAvLyAgICAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3RTZWxlY3RlZFwiLCBlLnRhcmdldC4pXG4gICAgLy8gfSlcblxufSkoKVxuXG5leHBvcnQge3Byb2plY3RzVmlldywgcHJvamVjdENvbnRyb2xsZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgeyBJU19GSU5JU0hFRCB9IGZyb20gJy4vZXZlbnQtdHlwZXMuanMnXG5pbXBvcnQge3Byb2plY3RzVmlldywgcHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcmVuZGVyJ1xuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9