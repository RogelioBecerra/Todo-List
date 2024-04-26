/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listInfo: () => (/* binding */ listInfo)\n/* harmony export */ });\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.js\");\n\n\n\n\nconst newTaskBtn = document.querySelector(\"#newtaskContiner\");\nconst taskInfo = document.querySelector(\"#taskInfo\");\nconst closeBtn = document.querySelector(\"#close-btn\");\nconst taskInput = document.querySelector('#task');\nconst descriptionInput = document.querySelector('#description');\n\nlet myList = new _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskListManager(JSON.parse(localStorage.getItem('list')));\n    // myList.add('Clean Room', 'Fix Bed and clean Desk')\n    // myList.add('Read', 'Read 15 pages of Meditations')\nmyList.refresh();\ntaskInfo.style.display = 'none';\nlet isTaskInfoHidden = taskInfo.style.display;\n\n/**\n * \n * @returns return the list of task in a array\n */\nfunction listInfo(){\n    return myList.list;\n}\n\n/**\n * allow user to add new task, create a dropdown box to enter info\n */\nnewTaskBtn.addEventListener(\"click\", () => {\n    if (isTaskInfoHidden == 'none') {\n        taskInfo.style.display = 'block';\n        isTaskInfoHidden = 'block';\n    }\n\n})\n\n/**\n * closes the new task info box\n */\ncloseBtn.addEventListener(\"click\", () => {\n    if (isTaskInfoHidden != 'none') {\n        taskInfo.style.display = 'none';\n        isTaskInfoHidden = 'none';\n    }\n})\n\n/**\n * create new task, adds it to array, displays the elements in the array, resets the inputs\n */\ntaskInfo.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let title = taskInput.value;\n    let text = descriptionInput.value;\n    myList.add(title, text);\n    myList.refresh();\n    taskInfo.reset();\n})\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/main.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storedTask: () => (/* binding */ storedTask),\n/* harmony export */   updateJson: () => (/* binding */ updateJson)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\n\n\n/**\n * Stores the task in the Array by turning the array into JSON and storing it in localStorage\n */\nfunction updateJson() {\n    const jsonArray = JSON.stringify((0,_main__WEBPACK_IMPORTED_MODULE_0__.listInfo)());\n    localStorage.setItem('list', jsonArray);\n}\n\n/**\n * returns the stores array of task \n * @returns list of task\n */\nfunction storedTask(){\n    const tasks = localStorage.getItem('list')\n    return JSON.parse(tasks)\n}\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskListManager: () => (/* binding */ taskListManager),\n/* harmony export */   taskObj: () => (/* binding */ taskObj)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n;\n\nconst taskList = document.querySelector('.list');\n\n/**\n * Object that holds the information of a task\n * @param {String} task \n * @param {String} text \n */\nfunction taskObj(task, text, marked = false) {\n    this.task = task;\n    this.description = text;\n    this.marked = marked;\n}\n\n/**\n * the list manager the allows usesr to add and remove task\n */\nclass taskListManager {\n    constructor(arr = []) {\n        this.list = arr\n    }\n\n    /**\n     * create a new task and add it to the list\n     * @param {String} task \n     * @param {String} text \n     */\n    add(task, text) {\n        const newtask = new taskObj(task, text);\n        this.list.push(newtask);\n    }\n\n    /**\n     * Removes an item when button is clicked, is used in refresh method\n     */\n    remove() {\n        let rb = document.querySelectorAll(`.removeBtns`);\n        rb.forEach((ele) => {\n            ele.addEventListener('click', () => {\n                this.list.splice(ele.parentElement.parentElement.getAttribute('data-item'), 1);\n                this.refresh();\n            })\n        })\n    }\n\n    /** \n     * returns the number of task in the array \n     * */\n    size() {\n        return this.list.length;\n    }\n\n    /**\n     * displays the items in the array; adds remove function to task; \n     */\n    refresh() {\n        taskList.innerHTML = \"\";\n        this.list.forEach((ele, index) => {\n            createTask(ele.task, ele.description, index, ele.marked)\n        });\n        this.remove();\n        this.isChecked();\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateJson)();\n        this.list = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.storedTask)();\n    }\n\n    isChecked() {\n        let boxes = document.querySelectorAll(`.checkboxs`);\n\n        boxes.forEach((ele, index) => {\n            ele.checked = this.list[index].marked;\n\n            ele.addEventListener('click', () => {\n\n                // if(ele.checked == true){\n                //     this.list[index].marked = true;\n                    \n                // }\n                // else{\n                //     this.list[index].marked = false;\n                   \n                // }\n\n                ele.checked ? this.list[index].marked = true : this.list[index].marked = false;\n                \n                (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateJson)()\n            })\n        })\n\n    }\n}\n\n// ---------------------- HTML ELEMENT STUFF ---------------------\n/**\n * Takes a string version of html and convertes it to real HTML\n * @param {String} html\n * @returns HTML element or elements\n */\nfunction HTMLConverter(html) {\n    const templete = document.createElement(\"template\");\n    templete.innerHTML = html.trim();\n    return templete.content.firstElementChild;\n}\n/**\n * Adds the html created into Array of task\n * @param {String} task \n * @param {String} text \n * @param {Integer} index \n * @param {Boolean} checked \n */\nfunction createTask(task, text, index, checked) {\n\n    const html = HTMLConverter(`\n    <div class=\"listItems\" data-item=\"${index}\">\n        <div class=\"item-nav\">\n            <input type=\"checkbox\" name=\"${task.trim().toLowerCase()}\" id=\"${task.trim().toLowerCase()}\" class=\"checkboxs\" data-isChecked=\"${checked}\">\n            <label for=\"${task.trim().toLowerCase()}\" class=\"tasks\">${task.trim()}</label>\n            <i class='bx bx-x taskIcons removeBtns' id=\"remove-btn\"\"></i>\n        </div>\n        <p class=\"description\">${text.trim()}</p>\n    </div>\n     `);\n\n    taskList.appendChild(html);\n}\n\n\n//# sourceURL=webpack://todolist/./src/taskManager.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;