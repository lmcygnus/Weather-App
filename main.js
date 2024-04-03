/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/checkbox.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-color: rgb(4, 55, 75);
}

.checkbox-wrapper-19 {
    box-sizing: border-box;
    --background-color: #fff;
    --checkbox-height: 25px;
  }
  
  @-moz-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @-webkit-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  @-webkit-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  @-moz-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  .checkbox-wrapper-19 input[type=checkbox] {
    display: none;
  }
  
  .checkbox-wrapper-19 .check-box {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * .1) solid #000;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }
  
  .checkbox-wrapper-19 .check-box::before,
    .checkbox-wrapper-19 .check-box::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * .2);
    background-color: var(--main-color);
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  
  .checkbox-wrapper-19 .check-box::before {
    top: calc(var(--checkbox-height) * .72);
    left: calc(var(--checkbox-height) * .41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  
  .checkbox-wrapper-19 .check-box::after {
    top: calc(var(--checkbox-height) * .37);
    left: calc(var(--checkbox-height) * .05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
    .checkbox-wrapper-19 .check-box.checked {
    border-color: var(--main-color);
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
    .checkbox-wrapper-19 .check-box.checked::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    animation: dothabottomcheck-19 0.2s ease 0s forwards;
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
    .checkbox-wrapper-19 .check-box.checked::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
    animation: dothatopcheck-19 0.4s ease 0s forwards;
  }`, "",{"version":3,"sources":["webpack://./src/checkbox.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,8BAA8B;IAC9B,6BAA6B;IAC7B,6BAA6B;IAC7B,oDAAoD;IACpD,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,uCAAuC;IACvC,qCAAqC;IACrC,0CAA0C;IAC1C,kCAAkC;IAClC,eAAe;EACjB;;EAEA;;IAEE,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,wCAAwC;IACxC,mCAAmC;IACnC,qBAAqB;IACrB,+BAA+B;IAC/B,8BAA8B;IAC9B,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,iCAAiC;IACjC,4BAA4B;EAC9B;;EAEA;IACE,uCAAuC;IACvC,wCAAwC;IACxC,4EAA4E;IAC5E,+BAA+B;IAC/B,8BAA8B;IAC9B,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;EAC5B;;EAEA;IACE,uCAAuC;IACvC,wCAAwC;IACxC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,iCAAiC;IACjC,yBAAyB;EAC3B;;EAEA;;IAEE,+BAA+B;EACjC;;EAEA;;IAEE,wCAAwC;IACxC,yDAAyD;IACzD,uDAAuD;IACvD,4DAA4D;IAC5D,oDAAoD;EACtD;;EAEA;;IAEE,0CAA0C;IAC1C,sDAAsD;IACtD,oDAAoD;IACpD,yDAAyD;IACzD,iDAAiD;EACnD","sourcesContent":[":root {\n    --main-color: rgb(4, 55, 75);\n}\n\n.checkbox-wrapper-19 {\n    box-sizing: border-box;\n    --background-color: #fff;\n    --checkbox-height: 25px;\n  }\n  \n  @-moz-keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @-webkit-keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  @-webkit-keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  @-moz-keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox] {\n    display: none;\n  }\n  \n  .checkbox-wrapper-19 .check-box {\n    height: var(--checkbox-height);\n    width: var(--checkbox-height);\n    background-color: transparent;\n    border: calc(var(--checkbox-height) * .1) solid #000;\n    border-radius: 5px;\n    position: relative;\n    display: inline-block;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    -moz-transition: border-color ease 0.2s;\n    -o-transition: border-color ease 0.2s;\n    -webkit-transition: border-color ease 0.2s;\n    transition: border-color ease 0.2s;\n    cursor: pointer;\n  }\n  \n  .checkbox-wrapper-19 .check-box::before,\n    .checkbox-wrapper-19 .check-box::after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    position: absolute;\n    height: 0;\n    width: calc(var(--checkbox-height) * .2);\n    background-color: var(--main-color);\n    display: inline-block;\n    -moz-transform-origin: left top;\n    -ms-transform-origin: left top;\n    -o-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    transform-origin: left top;\n    border-radius: 5px;\n    content: \" \";\n    -webkit-transition: opacity ease 0.5;\n    -moz-transition: opacity ease 0.5;\n    transition: opacity ease 0.5;\n  }\n  \n  .checkbox-wrapper-19 .check-box::before {\n    top: calc(var(--checkbox-height) * .72);\n    left: calc(var(--checkbox-height) * .41);\n    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);\n    -moz-transform: rotate(-135deg);\n    -ms-transform: rotate(-135deg);\n    -o-transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n  }\n  \n  .checkbox-wrapper-19 .check-box::after {\n    top: calc(var(--checkbox-height) * .37);\n    left: calc(var(--checkbox-height) * .05);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,\n    .checkbox-wrapper-19 .check-box.checked {\n    border-color: var(--main-color);\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,\n    .checkbox-wrapper-19 .check-box.checked::after {\n    height: calc(var(--checkbox-height) / 2);\n    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,\n    .checkbox-wrapper-19 .check-box.checked::before {\n    height: calc(var(--checkbox-height) * 1.2);\n    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    animation: dothatopcheck-19 0.4s ease 0s forwards;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-color: rgb(0, 65, 119);
}
body {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  margin: 0%;
  color: white;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.sidebar {
  background-color: var(--main-color);
  /*display: none;*/
  padding: 15px;
}

h3 {
  border-bottom: 1px solid #979797;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 5%;
  width: 80%;
}

h4 {
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px;
  width: fit-content;
}

h4:hover {
  background-color: white;
  border: var(--main-color);
  color: var(--main-color);
  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;
}

#newProject {
  border: 2px solid white;
}

#newProject:hover {
  background-color: white;
  border: var(--main-color);
  color: var(--main-color);
  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;
}

.mainContent {
  margin: 5%;
  margin-left: 0%;
  color: #515151;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
}

dialog {
  max-width: 210px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  padding: 20px;
}

label {
  margin-left: 5%;
  color: #515151;
}
input[type="date"] {
  color: #515151;
}
input,
textarea {
  border: none;
  border-bottom: 1px solid #515151;
  margin: 5%;
}
input:focus,
textarea:focus {
  border: none;
  border-bottom: 1px solid #515151;
  outline: none;
}
button {
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--main-color);
  color: white;
  font-weight: bolder;
  max-height: 40px;
  font-size: 18px;
}

.taskData {
  display: flex;
  gap: 5%;
  color: rebeccapurple;
}
.taskDiv {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: var(--main-color);
  margin: 2%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  gap: 20px;
  width: 50%;
}

.checked {
  text-decoration: line-through;
  color: gray;
}
.deleteProject:hover {
  color: var(--main-color);
  background-color: white;
}

.projectLi {
  font-style: oblique;
}
.projectLi:focus {
  color: yellow;
}
.projectTitle {
  background-color: var(--main-color);
  color: white;
  font-size: 2rem;
  font-weight: bolder;
  box-shadow: var(--main-color) 0px 5px 15px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 50%;
}

.Details {
  font-size: 16px;
  border-top: 1px solid #919191;
}

.todoContainer {
  display: flex;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,mDAAmD;AACrD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,mDAAmD;AACrD;;AAEA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,4CAA4C;EAC5C,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,UAAU;AACZ;AACA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,oBAAoB;AACtB;AACA;EACE,4CAA4C;EAC5C,wBAAwB;EACxB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n:root {\n  --main-color: rgb(0, 65, 119);\n}\nbody {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr;\n  margin: 0%;\n  color: white;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.sidebar {\n  background-color: var(--main-color);\n  /*display: none;*/\n  padding: 15px;\n}\n\nh3 {\n  border-bottom: 1px solid #979797;\n  margin-left: 5%;\n  margin-right: 5%;\n  padding-left: 5%;\n  width: 80%;\n}\n\nh4 {\n  border: 2px solid white;\n  border-radius: 20px;\n  padding: 10px;\n  width: fit-content;\n}\n\nh4:hover {\n  background-color: white;\n  border: var(--main-color);\n  color: var(--main-color);\n  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;\n}\n\n#newProject {\n  border: 2px solid white;\n}\n\n#newProject:hover {\n  background-color: white;\n  border: var(--main-color);\n  color: var(--main-color);\n  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;\n}\n\n.mainContent {\n  margin: 5%;\n  margin-left: 0%;\n  color: #515151;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5%;\n}\n\ndialog {\n  max-width: 210px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 20px;\n}\n\nlabel {\n  margin-left: 5%;\n  color: #515151;\n}\ninput[type=\"date\"] {\n  color: #515151;\n}\ninput,\ntextarea {\n  border: none;\n  border-bottom: 1px solid #515151;\n  margin: 5%;\n}\ninput:focus,\ntextarea:focus {\n  border: none;\n  border-bottom: 1px solid #515151;\n  outline: none;\n}\nbutton {\n  border: none;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: var(--main-color);\n  color: white;\n  font-weight: bolder;\n  max-height: 40px;\n  font-size: 18px;\n}\n\n.taskData {\n  display: flex;\n  gap: 5%;\n  color: rebeccapurple;\n}\n.taskDiv {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  color: var(--main-color);\n  margin: 2%;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.5em;\n  gap: 20px;\n  width: 50%;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: gray;\n}\n.deleteProject:hover {\n  color: var(--main-color);\n  background-color: white;\n}\n\n.projectLi {\n  font-style: oblique;\n}\n.projectLi:focus {\n  color: yellow;\n}\n.projectTitle {\n  background-color: var(--main-color);\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  box-shadow: var(--main-color) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  width: 50%;\n}\n\n.Details {\n  font-size: 16px;\n  border-top: 1px solid #919191;\n}\n\n.todoContainer {\n  display: flex;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/checkbox.css":
/*!**************************!*\
  !*** ./src/checkbox.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContent: () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.css */ "./src/checkbox.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");





const mainContent = document.querySelector(".mainContent");
const dialog = document.querySelector(".newTodoDialog");
const newTodo = document.querySelector(".newToDo");
const closeBt = document.querySelector(".close");

//New Projects variables

const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");

//New to do variables

const taskForm = document.querySelector(".createTask");
const titleImput = document.querySelector(".title");
const descriptionImput = document.querySelector(".description");
const dueDateImput = document.querySelector(".date");

newTodo.onclick = () => {
  dialog.show();
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.todayDate)();
};

closeBt.onclick = () => {
  dialog.close();
};

newProjectBt.onclick = () => {
  projectDialog.show();
};

cancel.onclick = () => {
  projectDialog.close();
};

document.addEventListener("DOMContentLoaded", (e) => {
  const projectProperty = "project";
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.recoverProjects)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray, ul, projectProperty);

  const defaultProjectName = " All";
  const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.filterTasks)(
    _projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray,
    defaultProjectName,
    projectProperty
  );
  if (defaultProject.length === 0) {
    const defaultImput = document.querySelector("#newProject");
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(defaultImput, ul, e);
  }
  const allProjectBt = document.querySelector(".projectLi");
  allProjectBt.click();
});

projectForm.addEventListener("submit", (e) => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectImput, ul, e);
  projectForm.reset();
  projectDialog.close();
});

//toggleButton.addEventListener('click', function () {
//sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
//});

taskForm.addEventListener("submit", (e) => {
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.createNewToDo)(
    titleImput,
    descriptionImput,
    dueDateImput,
    currentProject,
    e,
    mainContent
  );
  dialog.close();
  taskForm.reset();
});

(0,_toDo__WEBPACK_IMPORTED_MODULE_3__.showTodayTasks)(mainContent);




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteFromLocalStorage: () => (/* binding */ deleteFromLocalStorage),
/* harmony export */   lookData: () => (/* binding */ lookData),
/* harmony export */   setData: () => (/* binding */ setData)
/* harmony export */ });
const setData = (name, object) => {
  localStorage.setItem(name, JSON.stringify(object));
};

const lookData = (object) => {
  const data = localStorage.getItem(object);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

const deleteFromLocalStorage = (
  array,
  propertyName,
  currentProject,
  setName
) => {
  let objectIndex = array.findIndex(
    (obj) => obj[propertyName] === currentProject
  );
  if (objectIndex !== -1) {
    array.splice(objectIndex, 1);
  }
  setData(setName, array);
};



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTasks: () => (/* reexport safe */ _toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   dateProperty: () => (/* binding */ dateProperty),
/* harmony export */   deleteTasks: () => (/* binding */ deleteTasks),
/* harmony export */   descriptionProperty: () => (/* binding */ descriptionProperty),
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   newProjectDOM: () => (/* binding */ newProjectDOM),
/* harmony export */   projectAddTask: () => (/* binding */ projectAddTask),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   recoverProjects: () => (/* binding */ recoverProjects),
/* harmony export */   recoverTasks: () => (/* binding */ recoverTasks),
/* harmony export */   titleProperty: () => (/* binding */ titleProperty)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");




let currentProject = " All";
const titleProperty = "title";
const descriptionProperty = "description";
const dateProperty = "dueDate";

class projects {
  constructor(project) {
    this.project = project;
  }
}

const deleteElements = (mainContent) => {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
};

let projectsArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("projects") || [];

const filterTasks = (array, currentProject, property) => {
  return array.filter(function (object) {
    return object[property] === currentProject;
  });
};

const deleteTasks = () => {
  const taskstoDelete = Array.from(document.querySelectorAll(".taskDiv"));
  taskstoDelete.forEach(function (element) {
    element.parentNode.removeChild(element);
  });
};

const recoverProjects = (array, parent, propertyName) => {
  array.forEach((element) => {
    newProjectDOM(element, parent, propertyName);
  });
};

const recoverTasks = (
  array,
  titleProperty,
  descriptionProperty,
  dateProperty,
  mainContent
) => {
  array.forEach((element) => {
    (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.newTodoDOM)(
      element[titleProperty],
      element[descriptionProperty],
      element[dateProperty],
      element,
      mainContent
    );
  });
};

const newProjectDOM = (input, parent, propertyName) => {
  const newProjectLi = document.createElement("li");

  const libutton = document.createElement("button");
  libutton.textContent = input[propertyName];
  libutton.classList.add("projectLi");

  const deleteProject = document.createElement("button");
  deleteProject.textContent = "🗑️";
  deleteProject.classList.add("deleteProject");

  deleteProject.addEventListener("click", () => {
    const projectProperty = "project";
    const setName = "projects";
    const setName2 = "tasks";
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      projectsArray,
      projectProperty,
      libutton.textContent,
      setName
    );
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      _toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray,
      projectProperty,
      libutton.textContent,
      setName2
    );
    parent.removeChild(newProjectLi);
  });

  let filteredTasks;

  newProjectLi.appendChild(libutton);
  newProjectLi.appendChild(deleteProject);
  parent.appendChild(newProjectLi);
  libutton.click();

  libutton.addEventListener("click", (event) => {
    currentProject = event.target.textContent;
    if (currentProject === "All") {
      let tasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("tasks");
      deleteTasks();
      projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, titleProperty);
      recoverTasks(
        tasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        ___WEBPACK_IMPORTED_MODULE_1__.mainContent
      );
      const projectTitleDiv = document.querySelector(".projectTitle");
      projectTitleDiv.textContent = currentProject;
      newProjectLi.removeChild(deleteProject);
    } else {
      const projectProperty = "project";
      filteredTasks = filterTasks(_toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray, currentProject, projectProperty);
      deleteTasks();
      projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, titleProperty);
      recoverTasks(
        filteredTasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        ___WEBPACK_IMPORTED_MODULE_1__.mainContent
      );
      const projectTitleDiv = document.querySelector(".projectTitle");
      projectTitleDiv.textContent = currentProject;
    }
  });
};

const projectAddTask = (mainContent, input, propertyName) => {
  deleteElements(mainContent);

  const projectTitle = document.createElement("div");

  if (propertyName === "value") {
    projectTitle.textContent = `${input.value}`;
  } else if (propertyName === "textContent") {
    projectTitle.textContent = `${input.textContent}`;
  } else if (propertyName === "project") {
    projectTitle.textContent = `${input.project}`;
  }

  projectTitle.classList.add("projectTitle");

  const addTask = document.createElement("button");
  addTask.classList.add("newToDo");
  addTask.textContent = "+Add Task";
  addTask.style.display = "block";

  mainContent.appendChild(projectTitle);
  mainContent.appendChild(addTask);
  addTask.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks)(mainContent);
  });
};

const createNewProject = (input, parent, e) => {
  e.preventDefault();
  if (projectsArray.some((object) => object.project === input.value)) {
    return;
  } else {
    const newProject = new projects(input.value);
    const newProperty = "value";
    projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, newProperty);
    newProjectDOM(input, parent, newProperty);
    projectsArray.push(newProject);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)("projects", projectsArray);
  }
};




/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo),
/* harmony export */   addNewTasks: () => (/* binding */ addNewTasks),
/* harmony export */   closeDialogs: () => (/* binding */ closeDialogs),
/* harmony export */   createNewToDo: () => (/* binding */ createNewToDo),
/* harmony export */   newTodoDOM: () => (/* binding */ newTodoDOM),
/* harmony export */   showTodayTasks: () => (/* binding */ showTodayTasks),
/* harmony export */   taskChecked: () => (/* binding */ taskChecked),
/* harmony export */   taskDone: () => (/* binding */ taskDone),
/* harmony export */   toDoArray: () => (/* binding */ toDoArray),
/* harmony export */   todayDate: () => (/* binding */ todayDate)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




let taskChecked;

class ToDo {
  constructor(title, description, dueDate, project, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.completed = completed;
  }
}

const seeDetails = (parent) => {
  const detailsDi = document.createElement("dialog");
  detailsDi.classList.add("Details");

  const title = document.createElement("div");
  title.classList.add("detailsTitle");

  const description = document.createElement("div");
  description.classList.add("descriptionDetails");

  const dueDate = document.createElement("div");
  dueDate.classList.add("duedateDescription");

  const closeDetails = document.createElement("button");
  closeDetails.textContent = "Close";
  closeDetails.addEventListener("click", () => {
    detailsDi.close();
  });

  detailsDi.appendChild(title);
  detailsDi.appendChild(description);
  detailsDi.appendChild(dueDate);
  detailsDi.appendChild(closeDetails);
  parent.appendChild(detailsDi);

  return detailsDi;
};

let numberForId = 0;
let toDoArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("tasks") || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput, obj, parent) => {
  numberForId++;

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("taskDiv");

  const container = document.createElement("div");
  container.classList.add("container1");

  const container2 = document.createElement("div");
  container2.classList.add("container2");

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.classList.add("checkbox-wrapper-19");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", `${numberForId}cbtest-19`);
  checkbox.setAttribute("type", "checkbox");

  const taskName = document.createElement("div");
  taskName.textContent = titleImput;

  checkbox.addEventListener("change", () => {
    taskDone(checkbox, taskName, toDoDiv);
  });

  const label = document.createElement("label");
  label.classList.add("check-box");
  label.setAttribute("for", `${numberForId}cbtest-19`);

  const seeDetailsbt = document.createElement("button");
  seeDetailsbt.classList.add("seeDetails");
  seeDetailsbt.textContent = "▼";

  const detailsDialog = seeDetails(toDoDiv);

  seeDetailsbt.addEventListener("click", (event) => {
    const toDoDiv = event.currentTarget.closest(".taskDiv");
    const descriptionDiv = toDoDiv.querySelector(".descriptionDetails");
    const dateDiv = toDoDiv.querySelector(".duedateDescription");

    descriptionDiv.textContent = `Description: ${descriptionImput}`;
    dateDiv.textContent = `Due Date: ${dateInput}`;

    detailsDialog.showModal();
  });

  const deleteTasks = document.createElement("button");
  deleteTasks.textContent = "🗑️";
  deleteTasks.addEventListener("click", () => {
    const titleProperty = "title";
    const setName = "tasks";
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      toDoArray,
      titleProperty,
      taskName.textContent,
      setName
    );
    parent.removeChild(toDoDiv);
  });
  checkboxWrapper.appendChild(checkbox);
  checkboxWrapper.appendChild(label);
  todoContainer.appendChild(checkboxWrapper);
  todoContainer.appendChild(taskName);
  container2.appendChild(seeDetailsbt);
  container2.appendChild(deleteTasks);
  toDoDiv.appendChild(todoContainer);
  toDoDiv.appendChild(container2);

  parent.appendChild(toDoDiv);
};

const createNewToDo = (
  titleImput,
  descriptionImput,
  dueDateImput,
  currentProject,
  e,
  completed,
  parent
) => {
  e.preventDefault();
  const newToDo = new ToDo(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    currentProject,
    completed
  );
  newTodoDOM(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    false,
    parent
  );
  toDoArray.push(newToDo);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)(`tasks`, toDoArray);
};

const todayDate = (input) => {
  let currentDate = new Date().toISOString().split("T")[0];
  input.value = currentDate;
};

const showTodayTasks = () => {
  const todayBt = document.querySelector("h4");
  const dateProperty = "dueDate";
  todayBt.addEventListener("click", () => {
    let currentDate = new Date().toISOString().split("T")[0];
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteTasks)();
    let todayTasks = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterTasks)(toDoArray, currentDate, dateProperty);
    console.log(todayTasks);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.recoverTasks)(
      todayTasks,
      _projects__WEBPACK_IMPORTED_MODULE_1__.titleProperty,
      _projects__WEBPACK_IMPORTED_MODULE_1__.descriptionProperty,
      dateProperty,
      ___WEBPACK_IMPORTED_MODULE_2__.mainContent
    );
    const projectTitleDiv = document.querySelector(".projectTitle");
    projectTitleDiv.textContent = "Today";
    const addTaskButton = document.querySelector(".newToDo");
    addTaskButton.style.display = "none";
  });
};

const closeDialogs = (dialogs, forms) => {
  forms.reset();
  dialogs.close();
};

const taskDone = (myCheckbox, taskText, toDoDiv) => {
  if (myCheckbox.checked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
    myCheckbox.classList.add("checked");
    setTimeout(() => {
      toDoDiv.style.display = "none";
    }, 3000);
    const titleProperty = "title";
    const setName = "tasks";
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      toDoArray,
      titleProperty,
      taskText.textContent,
      setName
    );
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "rgb(0, 65, 119)";
    myCheckbox.classList.remove("checked");
  }
};

const addNewTasks = (mainContent) => {
  const newTodoDialog = document.createElement("dialog");
  newTodoDialog.classList.add("newTodoDialog");
  newTodoDialog.style.width = "210px";
  newTodoDialog.open = true;

  const createTaskForm = document.createElement("form");
  createTaskForm.action = "submit";
  createTaskForm.classList.add("createTask");

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewToDo(
      titleInput,
      descriptionTextarea,
      dateInput,
      _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject,
      e,
      false,
      mainContent
    );
    closeDialogs(newTodoDialog, createTaskForm);
  });

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("title");
  titleInput.required = true;
  titleInput.placeholder = "Nombre";

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.name = "descripción";
  descriptionTextarea.classList.add("description");
  descriptionTextarea.cols = "20";
  descriptionTextarea.rows = "2";
  descriptionTextarea.placeholder = "Descripción";

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date:";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.classList.add("date");
  dateInput.required = true;
  todayDate(dateInput);

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Agregar";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cerrar");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancelar";

  dateLabel.appendChild(dateInput);
  createTaskForm.appendChild(titleInput);
  createTaskForm.appendChild(descriptionTextarea);
  createTaskForm.appendChild(document.createElement("br"));
  createTaskForm.appendChild(dateLabel);
  createTaskForm.appendChild(document.createElement("br"));
  createTaskForm.appendChild(addButton);
  createTaskForm.appendChild(cancelButton);
  newTodoDialog.appendChild(createTaskForm);
  mainContent.appendChild(newTodoDialog);
};




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZ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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFFOzs7Ozs7O1VDbFNGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tib3guY3NzP2E5NmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yOiByZ2IoNCwgNTUsIDc1KTtcbn1cblxuLmNoZWNrYm94LXdyYXBwZXItMTkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC0tY2hlY2tib3gtaGVpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICBALW1vei1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94IHtcbiAgICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XG4gICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMSkgc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC43Mik7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjQxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4zNyk7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3gsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveDo6YWZ0ZXIsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjphZnRlciB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmJlZm9yZSxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIC1tb3otYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2hlY2tib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLHdDQUF3QztJQUMxQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSx3Q0FBd0M7SUFDMUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0Usd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsMENBQTBDO0lBQzVDO0VBQ0Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvREFBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLDRFQUE0RTtJQUM1RSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSx3Q0FBd0M7SUFDeEMseURBQXlEO0lBQ3pELHVEQUF1RDtJQUN2RCw0REFBNEQ7SUFDNUQsb0RBQW9EO0VBQ3REOztFQUVBOztJQUVFLDBDQUEwQztJQUMxQyxzREFBc0Q7SUFDdEQsb0RBQW9EO0lBQ3BELHlEQUF5RDtJQUN6RCxpREFBaUQ7RUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6IHJnYig0LCA1NSwgNzUpO1xcbn1cXG5cXG4uY2hlY2tib3gtd3JhcHBlci0xOSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgLS1jaGVja2JveC1oZWlnaHQ6IDI1cHg7XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94IHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjEpIHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUge1xcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC43Mik7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC40MSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSkgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjM3KTtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveCxcXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtby1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjpiZWZvcmUsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIC1vLWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbWFpbi1jb2xvcjogcmdiKDAsIDY1LCAxMTkpO1xufVxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIG1hcmdpbjogMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5oMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmg0IHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuaDQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzE1KSAwcHggNXB4IDEwcHg7XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbiNuZXdQcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxNSkgMHB4IDVweCAxMHB4O1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIGNvbG9yOiAjNTE1MTUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUlO1xufVxuXG5kaWFsb2cge1xuICBtYXgtd2lkdGg6IDIxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICM1MTUxNTE7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGNvbG9yOiAjNTE1MTUxO1xufVxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XG4gIG1hcmdpbjogNSU7XG59XG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFza0RhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDUlO1xuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cbi50YXNrRGl2IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luOiAyJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBnYXA6IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jaGVja2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmF5O1xufVxuLmRlbGV0ZVByb2plY3Q6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdExpIHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5wcm9qZWN0TGk6Zm9jdXMge1xuICBjb2xvcjogeWVsbG93O1xufVxuLnByb2plY3RUaXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1jb2xvcikgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLkRldGFpbHMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTE5MTkxO1xufVxuXG4udG9kb0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjtBQUNBOztFQUVFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IHJnYigwLCA2NSwgMTE5KTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBtYXJnaW46IDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIC8qZGlzcGxheTogbm9uZTsqL1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuaDMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbmg0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmg0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTUpIDBweCA1cHggMTBweDtcXG59XFxuXFxuI25ld1Byb2plY3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNuZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTUpIDBweCA1cHggMTBweDtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIG1hcmdpbjogNSU7XFxuICBtYXJnaW4tbGVmdDogMCU7XFxuICBjb2xvcjogIzUxNTE1MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBjb2xvcjogIzUxNTE1MTtcXG59XFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxuICBtYXJnaW46IDUlO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrRGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1JTtcXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cXG4udGFza0RpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIG1hcmdpbjogMiU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLmRlbGV0ZVByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0TGkge1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuLnByb2plY3RMaTpmb2N1cyB7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4ucHJvamVjdFRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tY29sb3IpIDBweCA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLkRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5MTkxOTE7XFxufVxcblxcbi50b2RvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hlY2tib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jaGVja2JveC5jc3NcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGZpbHRlclRhc2tzLFxuICBwcm9qZWN0c0FycmF5LFxuICByZWNvdmVyUHJvamVjdHMsXG59IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvLCB0b2RheURhdGUsIHNob3dUb2RheVRhc2tzIH0gZnJvbSBcIi4vdG9Eb1wiO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvZG9EaWFsb2dcIik7XG5jb25zdCBuZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUb0RvXCIpO1xuY29uc3QgY2xvc2VCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XG5cbi8vTmV3IFByb2plY3RzIHZhcmlhYmxlc1xuXG5jb25zdCBuZXdQcm9qZWN0QnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2plY3RcIik7XG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaWFsb2dcIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbmNvbnN0IHByb2plY3RJbXB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTmV3UHJvamVjdEltcHV0XCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RcIik7XG5cbi8vTmV3IHRvIGRvIHZhcmlhYmxlc1xuXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlVGFza1wiKTtcbmNvbnN0IHRpdGxlSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbXB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5cbm5ld1RvZG8ub25jbGljayA9ICgpID0+IHtcbiAgZGlhbG9nLnNob3coKTtcbiAgdG9kYXlEYXRlKCk7XG59O1xuXG5jbG9zZUJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIGRpYWxvZy5jbG9zZSgpO1xufTtcblxubmV3UHJvamVjdEJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvdygpO1xufTtcblxuY2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RQcm9wZXJ0eSA9IFwicHJvamVjdFwiO1xuICByZWNvdmVyUHJvamVjdHMocHJvamVjdHNBcnJheSwgdWwsIHByb2plY3RQcm9wZXJ0eSk7XG5cbiAgY29uc3QgZGVmYXVsdFByb2plY3ROYW1lID0gXCIgQWxsXCI7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZmlsdGVyVGFza3MoXG4gICAgcHJvamVjdHNBcnJheSxcbiAgICBkZWZhdWx0UHJvamVjdE5hbWUsXG4gICAgcHJvamVjdFByb3BlcnR5XG4gICk7XG4gIGlmIChkZWZhdWx0UHJvamVjdC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBkZWZhdWx0SW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2plY3RcIik7XG4gICAgY3JlYXRlTmV3UHJvamVjdChkZWZhdWx0SW1wdXQsIHVsLCBlKTtcbiAgfVxuICBjb25zdCBhbGxQcm9qZWN0QnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RMaVwiKTtcbiAgYWxsUHJvamVjdEJ0LmNsaWNrKCk7XG59KTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RJbXB1dCwgdWwsIGUpO1xuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59KTtcblxuLy90b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vL3NpZGViYXIuc3R5bGUuZGlzcGxheSA9IChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICcnKSA/ICdibG9jaycgOiAnbm9uZSc7XG4vL30pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGNyZWF0ZU5ld1RvRG8oXG4gICAgdGl0bGVJbXB1dCxcbiAgICBkZXNjcmlwdGlvbkltcHV0LFxuICAgIGR1ZURhdGVJbXB1dCxcbiAgICBjdXJyZW50UHJvamVjdCxcbiAgICBlLFxuICAgIG1haW5Db250ZW50XG4gICk7XG4gIGRpYWxvZy5jbG9zZSgpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xufSk7XG5cbnNob3dUb2RheVRhc2tzKG1haW5Db250ZW50KTtcblxuZXhwb3J0IHsgbWFpbkNvbnRlbnQgfTtcbiIsImNvbnN0IHNldERhdGEgPSAobmFtZSwgb2JqZWN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufTtcblxuY29uc3QgbG9va0RhdGEgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvYmplY3QpO1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVGcm9tTG9jYWxTdG9yYWdlID0gKFxuICBhcnJheSxcbiAgcHJvcGVydHlOYW1lLFxuICBjdXJyZW50UHJvamVjdCxcbiAgc2V0TmFtZVxuKSA9PiB7XG4gIGxldCBvYmplY3RJbmRleCA9IGFycmF5LmZpbmRJbmRleChcbiAgICAob2JqKSA9PiBvYmpbcHJvcGVydHlOYW1lXSA9PT0gY3VycmVudFByb2plY3RcbiAgKTtcbiAgaWYgKG9iamVjdEluZGV4ICE9PSAtMSkge1xuICAgIGFycmF5LnNwbGljZShvYmplY3RJbmRleCwgMSk7XG4gIH1cbiAgc2V0RGF0YShzZXROYW1lLCBhcnJheSk7XG59O1xuZXhwb3J0IHsgc2V0RGF0YSwgbG9va0RhdGEsIGRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IHNldERhdGEsIGxvb2tEYXRhLCBkZWxldGVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBtYWluQ29udGVudCB9IGZyb20gXCIuXCI7XG5pbXBvcnQge1xuICBuZXdUb2RvRE9NLFxuICB0b0RvQXJyYXksXG4gIGFkZE5ld1Rhc2tzLFxufSBmcm9tIFwiLi90b0RvXCI7XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IFwiIEFsbFwiO1xuY29uc3QgdGl0bGVQcm9wZXJ0eSA9IFwidGl0bGVcIjtcbmNvbnN0IGRlc2NyaXB0aW9uUHJvcGVydHkgPSBcImRlc2NyaXB0aW9uXCI7XG5jb25zdCBkYXRlUHJvcGVydHkgPSBcImR1ZURhdGVcIjtcblxuY2xhc3MgcHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5jb25zdCBkZWxldGVFbGVtZW50cyA9IChtYWluQ29udGVudCkgPT4ge1xuICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5sZXQgcHJvamVjdHNBcnJheSA9IGxvb2tEYXRhKFwicHJvamVjdHNcIikgfHwgW107XG5cbmNvbnN0IGZpbHRlclRhc2tzID0gKGFycmF5LCBjdXJyZW50UHJvamVjdCwgcHJvcGVydHkpID0+IHtcbiAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdFtwcm9wZXJ0eV0gPT09IGN1cnJlbnRQcm9qZWN0O1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2tzID0gKCkgPT4ge1xuICBjb25zdCB0YXNrc3RvRGVsZXRlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tEaXZcIikpO1xuICB0YXNrc3RvRGVsZXRlLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVjb3ZlclByb2plY3RzID0gKGFycmF5LCBwYXJlbnQsIHByb3BlcnR5TmFtZSkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbmV3UHJvamVjdERPTShlbGVtZW50LCBwYXJlbnQsIHByb3BlcnR5TmFtZSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVjb3ZlclRhc2tzID0gKFxuICBhcnJheSxcbiAgdGl0bGVQcm9wZXJ0eSxcbiAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgZGF0ZVByb3BlcnR5LFxuICBtYWluQ29udGVudFxuKSA9PiB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBuZXdUb2RvRE9NKFxuICAgICAgZWxlbWVudFt0aXRsZVByb3BlcnR5XSxcbiAgICAgIGVsZW1lbnRbZGVzY3JpcHRpb25Qcm9wZXJ0eV0sXG4gICAgICBlbGVtZW50W2RhdGVQcm9wZXJ0eV0sXG4gICAgICBlbGVtZW50LFxuICAgICAgbWFpbkNvbnRlbnRcbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IG5ld1Byb2plY3RET00gPSAoaW5wdXQsIHBhcmVudCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBsaWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxpYnV0dG9uLnRleHRDb250ZW50ID0gaW5wdXRbcHJvcGVydHlOYW1lXTtcbiAgbGlidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RMaVwiKTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwi8J+Xke+4j1wiO1xuICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJkZWxldGVQcm9qZWN0XCIpO1xuXG4gIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0UHJvcGVydHkgPSBcInByb2plY3RcIjtcbiAgICBjb25zdCBzZXROYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIGNvbnN0IHNldE5hbWUyID0gXCJ0YXNrc1wiO1xuICAgIGRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICBwcm9qZWN0c0FycmF5LFxuICAgICAgcHJvamVjdFByb3BlcnR5LFxuICAgICAgbGlidXR0b24udGV4dENvbnRlbnQsXG4gICAgICBzZXROYW1lXG4gICAgKTtcbiAgICBkZWxldGVGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgdG9Eb0FycmF5LFxuICAgICAgcHJvamVjdFByb3BlcnR5LFxuICAgICAgbGlidXR0b24udGV4dENvbnRlbnQsXG4gICAgICBzZXROYW1lMlxuICAgICk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKG5ld1Byb2plY3RMaSk7XG4gIH0pO1xuXG4gIGxldCBmaWx0ZXJlZFRhc2tzO1xuXG4gIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChsaWJ1dHRvbik7XG4gIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaSk7XG4gIGxpYnV0dG9uLmNsaWNrKCk7XG5cbiAgbGlidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgbGV0IHRhc2tzID0gbG9va0RhdGEoXCJ0YXNrc1wiKTtcbiAgICAgIGRlbGV0ZVRhc2tzKCk7XG4gICAgICBwcm9qZWN0QWRkVGFzayhtYWluQ29udGVudCwgaW5wdXQsIHRpdGxlUHJvcGVydHkpO1xuICAgICAgcmVjb3ZlclRhc2tzKFxuICAgICAgICB0YXNrcyxcbiAgICAgICAgdGl0bGVQcm9wZXJ0eSxcbiAgICAgICAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgICAgICAgZGF0ZVByb3BlcnR5LFxuICAgICAgICBtYWluQ29udGVudFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Q7XG4gICAgICBuZXdQcm9qZWN0TGkucmVtb3ZlQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2plY3RQcm9wZXJ0eSA9IFwicHJvamVjdFwiO1xuICAgICAgZmlsdGVyZWRUYXNrcyA9IGZpbHRlclRhc2tzKHRvRG9BcnJheSwgY3VycmVudFByb2plY3QsIHByb2plY3RQcm9wZXJ0eSk7XG4gICAgICBkZWxldGVUYXNrcygpO1xuICAgICAgcHJvamVjdEFkZFRhc2sobWFpbkNvbnRlbnQsIGlucHV0LCB0aXRsZVByb3BlcnR5KTtcbiAgICAgIHJlY292ZXJUYXNrcyhcbiAgICAgICAgZmlsdGVyZWRUYXNrcyxcbiAgICAgICAgdGl0bGVQcm9wZXJ0eSxcbiAgICAgICAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgICAgICAgZGF0ZVByb3BlcnR5LFxuICAgICAgICBtYWluQ29udGVudFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Q7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3RBZGRUYXNrID0gKG1haW5Db250ZW50LCBpbnB1dCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIGRlbGV0ZUVsZW1lbnRzKG1haW5Db250ZW50KTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwidmFsdWVcIikge1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2lucHV0LnZhbHVlfWA7XG4gIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSBcInRleHRDb250ZW50XCIpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dC50ZXh0Q29udGVudH1gO1xuICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dC5wcm9qZWN0fWA7XG4gIH1cblxuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwibmV3VG9Eb1wiKTtcbiAgYWRkVGFzay50ZXh0Q29udGVudCA9IFwiK0FkZCBUYXNrXCI7XG4gIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTmV3VGFza3MobWFpbkNvbnRlbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAoaW5wdXQsIHBhcmVudCwgZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChwcm9qZWN0c0FycmF5LnNvbWUoKG9iamVjdCkgPT4gb2JqZWN0LnByb2plY3QgPT09IGlucHV0LnZhbHVlKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3RzKGlucHV0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IFwidmFsdWVcIjtcbiAgICBwcm9qZWN0QWRkVGFzayhtYWluQ29udGVudCwgaW5wdXQsIG5ld1Byb3BlcnR5KTtcbiAgICBuZXdQcm9qZWN0RE9NKGlucHV0LCBwYXJlbnQsIG5ld1Byb3BlcnR5KTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgc2V0RGF0YShcInByb2plY3RzXCIsIHByb2plY3RzQXJyYXkpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBwcm9qZWN0cyxcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgbmV3UHJvamVjdERPTSxcbiAgYWRkTmV3VGFza3MsXG4gIHByb2plY3RBZGRUYXNrLFxuICBkZWxldGVUYXNrcyxcbiAgZmlsdGVyVGFza3MsXG4gIHByb2plY3RzQXJyYXksXG4gIHJlY292ZXJQcm9qZWN0cyxcbiAgcmVjb3ZlclRhc2tzLFxuICBjdXJyZW50UHJvamVjdCxcbiAgdGl0bGVQcm9wZXJ0eSxcbiAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgZGF0ZVByb3BlcnR5LFxufTtcbiIsImltcG9ydCB7IHNldERhdGEsIGxvb2tEYXRhLCBkZWxldGVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge1xuICBjdXJyZW50UHJvamVjdCxcbiAgZmlsdGVyVGFza3MsXG4gIHRpdGxlUHJvcGVydHksXG4gIGRlc2NyaXB0aW9uUHJvcGVydHksXG4gIHJlY292ZXJUYXNrcyxcbiAgZGVsZXRlVGFza3MsXG59IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBtYWluQ29udGVudCB9IGZyb20gXCIuXCI7XG5cbmxldCB0YXNrQ2hlY2tlZDtcblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgY29tcGxldGVkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cblxuY29uc3Qgc2VlRGV0YWlscyA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgZGV0YWlsc0RpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGV0YWlsc0RpLmNsYXNzTGlzdC5hZGQoXCJEZXRhaWxzXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHNUaXRsZVwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbkRldGFpbHNcIik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZWRhdGVEZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZURldGFpbHMudGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gIGNsb3NlRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRldGFpbHNEaS5jbG9zZSgpO1xuICB9KTtcblxuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGRldGFpbHNEaS5hcHBlbmRDaGlsZChjbG9zZURldGFpbHMpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsc0RpKTtcblxuICByZXR1cm4gZGV0YWlsc0RpO1xufTtcblxubGV0IG51bWJlckZvcklkID0gMDtcbmxldCB0b0RvQXJyYXkgPSBsb29rRGF0YShcInRhc2tzXCIpIHx8IFtdO1xuXG5jb25zdCBuZXdUb2RvRE9NID0gKHRpdGxlSW1wdXQsIGRlc2NyaXB0aW9uSW1wdXQsIGRhdGVJbnB1dCwgb2JqLCBwYXJlbnQpID0+IHtcbiAgbnVtYmVyRm9ySWQrKztcblxuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lcjFcIik7XG5cbiAgY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lcjJcIik7XG5cbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9Db250YWluZXJcIik7XG5cbiAgY29uc3QgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC13cmFwcGVyLTE5XCIpO1xuXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtudW1iZXJGb3JJZH1jYnRlc3QtMTlgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0aXRsZUltcHV0O1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHRhc2tEb25lKGNoZWNrYm94LCB0YXNrTmFtZSwgdG9Eb0Rpdik7XG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stYm94XCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7bnVtYmVyRm9ySWR9Y2J0ZXN0LTE5YCk7XG5cbiAgY29uc3Qgc2VlRGV0YWlsc2J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VlRGV0YWlsc2J0LmNsYXNzTGlzdC5hZGQoXCJzZWVEZXRhaWxzXCIpO1xuICBzZWVEZXRhaWxzYnQudGV4dENvbnRlbnQgPSBcIuKWvFwiO1xuXG4gIGNvbnN0IGRldGFpbHNEaWFsb2cgPSBzZWVEZXRhaWxzKHRvRG9EaXYpO1xuXG4gIHNlZURldGFpbHNidC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG9Eb0RpdiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdChcIi50YXNrRGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gdG9Eb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uRGV0YWlsc1wiKTtcbiAgICBjb25zdCBkYXRlRGl2ID0gdG9Eb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmR1ZWRhdGVEZXNjcmlwdGlvblwiKTtcblxuICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9uSW1wdXR9YDtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke2RhdGVJbnB1dH1gO1xuXG4gICAgZGV0YWlsc0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrcy50ZXh0Q29udGVudCA9IFwi8J+Xke+4j1wiO1xuICBkZWxldGVUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlUHJvcGVydHkgPSBcInRpdGxlXCI7XG4gICAgY29uc3Qgc2V0TmFtZSA9IFwidGFza3NcIjtcbiAgICBkZWxldGVGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgdG9Eb0FycmF5LFxuICAgICAgdGl0bGVQcm9wZXJ0eSxcbiAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50LFxuICAgICAgc2V0TmFtZVxuICAgICk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRvRG9EaXYpO1xuICB9KTtcbiAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChzZWVEZXRhaWxzYnQpO1xuICBjb250YWluZXIyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tzKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZChjb250YWluZXIyKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUb0RvID0gKFxuICB0aXRsZUltcHV0LFxuICBkZXNjcmlwdGlvbkltcHV0LFxuICBkdWVEYXRlSW1wdXQsXG4gIGN1cnJlbnRQcm9qZWN0LFxuICBlLFxuICBjb21wbGV0ZWQsXG4gIHBhcmVudFxuKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VG9EbyA9IG5ldyBUb0RvKFxuICAgIHRpdGxlSW1wdXQudmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbXB1dC52YWx1ZSxcbiAgICBkdWVEYXRlSW1wdXQudmFsdWUsXG4gICAgY3VycmVudFByb2plY3QsXG4gICAgY29tcGxldGVkXG4gICk7XG4gIG5ld1RvZG9ET00oXG4gICAgdGl0bGVJbXB1dC52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbkltcHV0LnZhbHVlLFxuICAgIGR1ZURhdGVJbXB1dC52YWx1ZSxcbiAgICBmYWxzZSxcbiAgICBwYXJlbnRcbiAgKTtcbiAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gIHNldERhdGEoYHRhc2tzYCwgdG9Eb0FycmF5KTtcbn07XG5cbmNvbnN0IHRvZGF5RGF0ZSA9IChpbnB1dCkgPT4ge1xuICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICBpbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlO1xufTtcblxuY29uc3Qgc2hvd1RvZGF5VGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5QnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDRcIik7XG4gIGNvbnN0IGRhdGVQcm9wZXJ0eSA9IFwiZHVlRGF0ZVwiO1xuICB0b2RheUJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICBkZWxldGVUYXNrcygpO1xuICAgIGxldCB0b2RheVRhc2tzID0gZmlsdGVyVGFza3ModG9Eb0FycmF5LCBjdXJyZW50RGF0ZSwgZGF0ZVByb3BlcnR5KTtcbiAgICBjb25zb2xlLmxvZyh0b2RheVRhc2tzKTtcbiAgICByZWNvdmVyVGFza3MoXG4gICAgICB0b2RheVRhc2tzLFxuICAgICAgdGl0bGVQcm9wZXJ0eSxcbiAgICAgIGRlc2NyaXB0aW9uUHJvcGVydHksXG4gICAgICBkYXRlUHJvcGVydHksXG4gICAgICBtYWluQ29udGVudFxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvRG9cIik7XG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufTtcblxuY29uc3QgY2xvc2VEaWFsb2dzID0gKGRpYWxvZ3MsIGZvcm1zKSA9PiB7XG4gIGZvcm1zLnJlc2V0KCk7XG4gIGRpYWxvZ3MuY2xvc2UoKTtcbn07XG5cbmNvbnN0IHRhc2tEb25lID0gKG15Q2hlY2tib3gsIHRhc2tUZXh0LCB0b0RvRGl2KSA9PiB7XG4gIGlmIChteUNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgdGFza1RleHQuc3R5bGUuY29sb3IgPSBcImdyYXlcIjtcbiAgICBteUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9Eb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMzAwMCk7XG4gICAgY29uc3QgdGl0bGVQcm9wZXJ0eSA9IFwidGl0bGVcIjtcbiAgICBjb25zdCBzZXROYW1lID0gXCJ0YXNrc1wiO1xuICAgIGRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICB0b0RvQXJyYXksXG4gICAgICB0aXRsZVByb3BlcnR5LFxuICAgICAgdGFza1RleHQudGV4dENvbnRlbnQsXG4gICAgICBzZXROYW1lXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIHRhc2tUZXh0LnN0eWxlLmNvbG9yID0gXCJyZ2IoMCwgNjUsIDExOSlcIjtcbiAgICBteUNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICB9XG59O1xuXG5jb25zdCBhZGROZXdUYXNrcyA9IChtYWluQ29udGVudCkgPT4ge1xuICBjb25zdCBuZXdUb2RvRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgbmV3VG9kb0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwibmV3VG9kb0RpYWxvZ1wiKTtcbiAgbmV3VG9kb0RpYWxvZy5zdHlsZS53aWR0aCA9IFwiMjEwcHhcIjtcbiAgbmV3VG9kb0RpYWxvZy5vcGVuID0gdHJ1ZTtcblxuICBjb25zdCBjcmVhdGVUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjcmVhdGVUYXNrRm9ybS5hY3Rpb24gPSBcInN1Ym1pdFwiO1xuICBjcmVhdGVUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlVGFza1wiKTtcblxuICBjcmVhdGVUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZU5ld1RvRG8oXG4gICAgICB0aXRsZUlucHV0LFxuICAgICAgZGVzY3JpcHRpb25UZXh0YXJlYSxcbiAgICAgIGRhdGVJbnB1dCxcbiAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgZSxcbiAgICAgIGZhbHNlLFxuICAgICAgbWFpbkNvbnRlbnRcbiAgICApO1xuICAgIGNsb3NlRGlhbG9ncyhuZXdUb2RvRGlhbG9nLCBjcmVhdGVUYXNrRm9ybSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5vbWJyZVwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcGNpw7NuXCI7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSBcIjIwXCI7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IFwiMlwiO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwY2nDs25cIjtcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRvZGF5RGF0ZShkYXRlSW5wdXQpO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZ3JlZ2FyXCI7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZXJyYXJcIik7XG4gIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxhclwiO1xuXG4gIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gIG5ld1RvZG9EaWFsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zvcm0pO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvRGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7XG4gIFRvRG8sXG4gIHNob3dUb2RheVRhc2tzLFxuICBjcmVhdGVOZXdUb0RvLFxuICBuZXdUb2RvRE9NLFxuICB0b2RheURhdGUsXG4gIHRhc2tEb25lLFxuICBjbG9zZURpYWxvZ3MsXG4gIHRvRG9BcnJheSxcbiAgYWRkTmV3VGFza3MsXG4gIHRhc2tDaGVja2VkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9