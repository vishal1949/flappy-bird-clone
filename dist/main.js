/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let ctx = document.getElementById('flappy-canvas').getContext('2d');\n\nclass Bird{\n    constructor(){\n        this.y = 600/2;\n        this.x = 25;\n        this.flappyBird = new Image();\n        this.flappyBird.src = '../img/flappybirdblue.jpg';\n        this.gravity = .6;\n        this.flight = 1.5;\n        this.velocity = this.gravity\n\n        this.show = this.show.bind(this);\n        this.takeFlight = this.takeFlight.bind(this);\n    }\n\n    // keyPressed(){\n    //     window.addEventListener('keypress', e => {\n    //         if(e.keyCode === 32){\n    //             this.takeFlight();\n    //         }\n    //     })\n    // }\n\n    show(){\n        ctx.drawImage(this.flappyBird, this.x, this.y, 60, 60);\n        if( this.y < 560 ){ //that way when the value is 561 we can check\n            this.y += this.velocity;\n            this.velocity += this.gravity;\n        }\n        console.log(this.y);\n    }\n\n    takeFlight(){\n        this.show();\n        window.addEventListener('keypress', e => {\n            if (e.keyCode === 32) {\n                if(this.velocity > -10){\n                    //you can times this.velocity by something less than 1 to add resistatnce \n                    this.velocity -= this.flight;\n                }\n            }\n            console.log('pressed');\n        })\n        // if (32 in window.keysdown && this.y > 0){\n        //     this.velocity -= this.flight;\n        //     if(this.y < 0){\n        //         this.y = 0;\n        //     }\n        //     console.log(this.velocity);\n        //     // this.y -= this.flight;\n        //     // this.velocity = 0;\n        // }\n    }\n}\n\nmodule.exports = Bird;\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bird = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\nconst Pipe = __webpack_require__(/*! ./pipe */ \"./src/pipe.js\");\nconst ctx = document.getElementById(\"flappy-canvas\").getContext('2d');\n\nclass Game {\n    constructor(){\n        this.width = 400;\n        this.height = 600;\n\n        this.bird = new Bird();\n        this.upPipe = new Pipe();\n\n\n        this.drawGame = this.drawGame.bind(this);\n        this.drawBird = this.drawBird.bind(this);\n        this.drawPipe = this.drawPipe.bind(this);\n\n        this.drawGame();\n    }\n\n    drawGame(){\n        requestAnimationFrame(() => {\n            ctx.clearRect(0, 0, this.width, this.height);\n            this.drawGame();\n            this.drawBird();\n            this.drawPipe();\n        })\n    }\n    \n    drawBird(){\n        // this.bird.show();\n        this.bird.takeFlight();\n        // ctx.drawImage(this.bird.flappybird, this.bird.width, this.bird.height, 40, 40);\n\n    }\n\n    drawPipe(){\n        this.upPipe.show();\n    }\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    window.keysdown = {};\n    new Game();\n    addEventListener(\"keydown\", function (e) { keysdown[e.keyCode] = true })\n    addEventListener(\"keyup\", function (e) { delete keysdown[e.keyCode] })\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const UP = 'UP';\nconst DOWN = 'DOWN';\nconst ctx = document.getElementById(\"flappy-canvas\").getContext('2d');\n\n\nclass Pipe{\n    constructor(side){\n        this.side = side;\n        this.upPipe = new Image();\n        this.upPipe.src = '../img/upPipe.jpg';\n        this.downPipe = new Image();\n        this.downPipe.src = '../img/downPipe.png'\n        this.width = 60;\n        this.upHeight = 200;\n        this.downHeight = 200;\n        this.xpos = 350;\n        this.upYpos = 550;\n        this.downYpos = 0;\n        this.gap = 140;\n\n        this.show = this.show.bind(this);\n        this.randomHeight = this.randomHeight.bind(this);\n    }\n\n    randomHeight(){\n        this.downHeight = Math.floor((Math.random() * 320) + 50);\n        this.upYpos = (this.downHeight + this.gap);\n        this.upHeight = 600 - this.upYpos;\n    }\n\n    show(){\n        if(this.xpos === 350 ){\n            this.randomHeight();\n            this.xpos++;\n        }\n        ctx.drawImage(this.upPipe, this.xpos, this.upYpos, this.width, this.upHeight);\n        ctx.drawImage(this.downPipe, this.xpos, this.downYpos, this.width, this.downHeight)\n    }\n}\n\nmodule.exports = Pipe;\n\n//# sourceURL=webpack:///./src/pipe.js?");

/***/ })

/******/ });