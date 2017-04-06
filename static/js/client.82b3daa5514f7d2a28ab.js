webpackJsonp([0,2],{0:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}var n=r(1),i=_interopRequireWildcard(n),o=r(28),s=_interopRequireWildcard(o),c=r(166);s.render(i.createElement(c.App,null),document.getElementById("app"))},166:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireDefault(i),s=r(167),c=r(171),a=r(173);t.App=function(e){function App(e){_classCallCheck(this,App);var t=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e));return t.state={connected:!1,device:null,showMessage:!1,message:""},navigator.bluetooth||(t.state.showMessage=!0,t.state.message={__html:'Interface Web Bluetooth indisponible. Veuillez l\'activer :<p><a class=\'link\' target="_blank" href="chrome://flags/#enable-web-bluetooth">chrome://flags/#enable-web-bluetooth</a></p>'}),t}return _inherits(App,e),n(App,[{key:"render",value:function(){return o["default"].createElement("div",null,o["default"].createElement(a.Message,{show:this.state.showMessage,message:this.state.message}),this.state.connected?o["default"].createElement(c.Driver,{device:this.state.device,showMessage:this.showMessage.bind(this)}):o["default"].createElement(s.Connect,{connect:this.connect.bind(this),disconnect:this.disconnect.bind(this),showMessage:this.showMessage.bind(this)}))}},{key:"connect",value:function(e){this.setState({connected:!0,device:e})}},{key:"disconnect",value:function(){this.setState({connected:!1,device:null})}},{key:"showMessage",value:function(e){e?this.setState({showMessage:!0,message:{__html:e}}):this.setState({showMessage:!1,message:null})}}]),App}(o["default"].Component)},167:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Connect=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireWildcard(i),s=r(168),c=r(169),a=r(170),u=t.Connect=function(e){function Connect(e,t){_classCallCheck(this,Connect);var r=_possibleConstructorReturn(this,(Connect.__proto__||Object.getPrototypeOf(Connect)).call(this,e,t));return r.bluetoothDevice=new a.BluetoothDevice("LEO",r.onDisconnected.bind(r)),r.bluetoothDevice.addService("sCommand","6e400001-b5a3-f393-e0a9-e50e24dcca9e"),r.bluetoothDevice.addCharacteristic("sCommand","cCommand","6e400002-b5a3-f393-e0a9-e50e24dcca9e"),r}return _inherits(Connect,e),n(Connect,[{key:"render",value:function(){var e=this;return o.createElement(s.Baseplate,{width:18,height:26},o.createElement(c.BrickShape,{bricks:this.props.shapes[0].cells,classShape:"lego blue upper"}),o.createElement(c.BrickShape,{bricks:this.props.shapes[1].cells,onTouchEnd:function(t){return e.connect()},classShape:"lego grey upper"}))}},{key:"connect",value:function(){var e=this;this.showMessage("Connexion à Léo en cours..."),this.bluetoothDevice.connect().then(function(){return e.bluetoothDevice.getService("sCommand")}).then(function(e){return e.getCharacteristic("cCommand")}).then(function(){e.showMessage("Vous êtes maintenant connecté à Léo... à vous de jouer !"),setTimeout(function(){e.props.connect&&(e.showMessage(""),e.props.connect(e.bluetoothDevice))},1e3)})["catch"](function(t){e.showMessage("Erreur lors de la connexion à Léo : "+t),setTimeout(function(){e.showMessage()},3e3)})}},{key:"onDisconnected",value:function(){this.props.disconnect&&this.props.disconnect()}},{key:"showMessage",value:function(e){this.props.showMessage&&this.props.showMessage(e)}}]),Connect}(o.Component);u.defaultProps={shapes:[{cells:[{x:3,y:2},{x:3,y:3},{x:3,y:4},{x:3,y:5},{x:3,y:6},{x:4,y:6},{x:5,y:6},{x:6,y:6},{x:8,y:2},{x:8,y:3},{x:8,y:5},{x:8,y:6},{x:9,y:2},{x:10,y:2},{x:11,y:2},{x:9,y:4},{x:10,y:4},{x:9,y:6},{x:10,y:6},{x:11,y:6},{x:13,y:2},{x:13,y:3},{x:13,y:4},{x:13,y:5},{x:13,y:6},{x:14,y:2},{x:15,y:2},{x:14,y:6},{x:15,y:6},{x:16,y:6},{x:16,y:3},{x:16,y:4},{x:16,y:5}]},{cells:[{x:5,y:12},{x:6,y:12},{x:6,y:13},{x:7,y:13},{x:7,y:14},{x:8,y:14},{x:8,y:15},{x:5,y:20},{x:6,y:20},{x:6,y:19},{x:7,y:19},{x:7,y:18},{x:8,y:18},{x:8,y:17},{x:9,y:10},{x:9,y:11},{x:9,y:12},{x:9,y:13},{x:9,y:14},{x:9,y:15},{x:9,y:16},{x:9,y:17},{x:9,y:18},{x:9,y:19},{x:9,y:20},{x:9,y:21},{x:9,y:22},{x:10,y:10},{x:10,y:11},{x:10,y:12},{x:10,y:13},{x:10,y:14},{x:10,y:15},{x:10,y:16},{x:10,y:17},{x:10,y:18},{x:10,y:19},{x:10,y:20},{x:10,y:21},{x:10,y:22},{x:11,y:11},{x:11,y:12},{x:12,y:12},{x:12,y:13},{x:13,y:13},{x:13,y:14},{x:13,y:15},{x:14,y:14},{x:12,y:15},{x:12,y:16},{x:11,y:16},{x:12,y:17},{x:13,y:17},{x:13,y:18},{x:13,y:19},{x:14,y:18},{x:12,y:19},{x:12,y:20},{x:11,y:20},{x:11,y:21}]}]}},168:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Baseplate=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireWildcard(i),s=t.Baseplate=function(e){function Baseplate(e,t){_classCallCheck(this,Baseplate);var r=_possibleConstructorReturn(this,(Baseplate.__proto__||Object.getPrototypeOf(Baseplate)).call(this,e,t)),n={width:window.innerWidth,height:window.innerHeight},i=n.width/r.props.width;i=i>40?40:Math.floor(i);var o=n.height/r.props.height;o=o>40?40:Math.floor(o),i<o&&(o=i),o<i&&(i=o);var s=i,c={nbOfCellsX:2*Math.ceil(Math.ceil(n.width/s)/2),nbOfCellsY:2*Math.ceil(Math.ceil(n.height/s)/2)};return c.minX=(c.nbOfCellsX-r.props.width)/-2,c.maxX=(c.nbOfCellsX-r.props.width)/2+1+r.props.width,c.minY=(c.nbOfCellsY-r.props.height)/-2,c.maxY=(c.nbOfCellsY-r.props.height)/2+1+r.props.height,c.width=c.nbOfCellsX*s,c.height=c.nbOfCellsY*s,c.sizeElt=s,r.state=c,r}return _inherits(Baseplate,e),n(Baseplate,[{key:"render",value:function(){for(var e={width:this.state.sizeElt,height:this.state.sizeElt},t="lego darkgrey",r=[],n=this.state.minY;n<this.state.maxY;n++)if(0!==n)for(var i=this.state.minX;i<this.state.maxX;i++)0!==i&&r.push(o.createElement("div",{key:n+"_"+i,className:t,style:e,x:i,y:n}));return o.createElement("div",{className:"baseplate",style:{width:this.state.width,height:this.state.height}},r)}},{key:"componentDidMount",value:function(){this.props.children.forEach(function(e){var t=document.querySelectorAll(e.props.bricks.map(function(e){return"[x='"+e.x+"'][y='"+e.y+"']"}).join(","));t.forEach(function(r){r.className=e.props.classShape,(e.props.onTouchStart||e.props.onTouchEnd||e.props.activeClassShape)&&(r.addEventListener("touchstart",function(r){e.props.activeClassShape&&t.forEach(function(t){t.className=e.props.activeClassShape}),e.props.onTouchStart&&e.props.onTouchStart()}),r.addEventListener("touchend",function(n){e.props.classShape?t.forEach(function(t){t.className=e.props.classShape}):r.className="lego darkgrey",e.props.onTouchEnd&&e.props.onTouchEnd()}))})})}}]),Baseplate}(o.Component);s.defaultProps={height:10,width:10}},169:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.BrickShape=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireWildcard(i),s=t.BrickShape=function(e){function BrickShape(e,t){return _classCallCheck(this,BrickShape),_possibleConstructorReturn(this,(BrickShape.__proto__||Object.getPrototypeOf(BrickShape)).call(this,e,t))}return _inherits(BrickShape,e),n(BrickShape,[{key:"render",value:function(){}}]),BrickShape}(o.Component);s.defaultProps={height:1,width:1}},170:function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=(t.BluetoothDevice=function(){function BluetoothDevice(e,t){_classCallCheck(this,BluetoothDevice),this.name=e,this.services={},this.device=void 0,this.server=void 0,this.disconnectFct=t}return r(BluetoothDevice,[{key:"addService",value:function(e,t){this.services[e]=new n(t)}},{key:"addCharacteristic",value:function(e,t,r){if(!this.services[e])throw new Error("Service id unknowned :"+e);this.services[e].characteristics[t]=new i(r)}},{key:"getDevice",value:function(){var e=this;if(this.device)return Promise.resolve(this.device);var t=[{name:this.name}];return this.services&&(t[0].services=[],Object.keys(this.services).forEach(function(r){t[0].services.push(e.services[r].uuid)})),navigator.bluetooth.requestDevice({filters:t}).then(function(t){return e.device=t,t.addEventListener("gattserverdisconnected",e.onDisconnected.bind(e)),t})}},{key:"connect",value:function(){var e=this;return this.server?Promise.resolve(this.server):this.getDevice().then(function(e){return e.gatt.connect()}).then(function(t){return e.server=t,t})}},{key:"getService",value:function(e){var t=this;if(!this.services[e])throw new Error("Service id unknowned :"+e);if(!this.server)throw new Error("Server GATT not initialized.");return this.services[e].service?Promise.resolve(this.services[e]):this.connect().then(function(r){return t.server.getPrimaryService(t.services[e].uuid)}).then(function(r){return t.services[e].service=r,t.services[e]})}},{key:"onDisconnected",value:function(){this.server=void 0;for(var e in this.services){var t=this.services[e];delete t.service;for(var r in t.characteristics){var n=t.characteristics[r];delete n.characteristic}}this.disconnectFct&&this.disconnectFct()}},{key:"disconnect",value:function(){this.device&&this.device.gatt.connected&&this.device.gatt.disconnect()}}]),BluetoothDevice}(),t.BluetoothService=function(){function BluetoothService(e){_classCallCheck(this,BluetoothService),this.uuid=e,this.characteristics={},this.service=void 0}return r(BluetoothService,[{key:"addCharacteristic",value:function(e,t){this.characteristics[e]=new i(t)}},{key:"getCharacteristic",value:function(e){var t=this;if(!this.characteristics[e])throw new Error("Characteristic id unknowned :"+e);if(!this.service)throw new Error("Service not initialized.");return this.characteristics[e].characteristic?Promise.resolve(this.characteristics[e]):this.service.getCharacteristic(this.characteristics[e].uuid).then(function(r){return t.characteristics[e].characteristic=r,t.characteristics[e]})}}]),BluetoothService}()),i=t.BluetoothCharacteristic=function(){function BluetoothCharacteristic(e){_classCallCheck(this,BluetoothCharacteristic),this.uuid=e,this.characteristic=void 0}return r(BluetoothCharacteristic,[{key:"write",value:function(e){return this.characteristic||Promise.reject(new Error("Characteristic not initialized, use getCharacteristic on service.")),this.characteristic.writeValue(e)}}]),BluetoothCharacteristic}()},171:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Driver=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireWildcard(i),s=r(168),c=r(169),a=r(172),u=t.Driver=function(e){function Driver(e,t){_classCallCheck(this,Driver);var r=_possibleConstructorReturn(this,(Driver.__proto__||Object.getPrototypeOf(Driver)).call(this,e,t));return r.timeOutAction=null,r.timeOutSession=null,r}return _inherits(Driver,e),n(Driver,[{key:"render",value:function(){var e=this;return o.createElement(s.Baseplate,{width:18,height:26},o.createElement(c.BrickShape,{bricks:this.props.shapes[0].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.move(1)},onTouchEnd:function(){return e.move(0)}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[1].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.move(2)},onTouchEnd:function(){return e.move(0)}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[2].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.move(3)},onTouchEnd:function(){return e.move(0)}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[3].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.move(4)},onTouchEnd:function(){return e.move(0)}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[4].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.disconnect()}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[5].cells,classShape:"lego grey upper",activeClassShape:"lego blue upper",onTouchStart:function(){return e.move(5)},onTouchEnd:function(){return e.move(0)}}),o.createElement(c.BrickShape,{bricks:this.props.shapes[6].cells,classShape:"lego grey upper"}),o.createElement(c.BrickShape,{bricks:this.props.shapes[7].cells,classShape:"lego grey upper"}),o.createElement(c.BrickShape,{bricks:this.props.shapes[8].cells,classShape:"lego grey upper"}),o.createElement(c.BrickShape,{bricks:this.props.shapes[9].cells,classShape:"lego grey upper"}))}},{key:"componentDidMount",value:function(){this.timeOutSession=setTimeout(this.disconnect.bind(this),12e4),this.timeOutAction=setTimeout(this.disconnect.bind(this),1e4)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut),clearTimeout(this.timeOutSession)}},{key:"move",value:function(e){var t=this;clearTimeout(this.timeOutAction),this.props.device.getService("sCommand").then(function(e){return e.getCharacteristic("cCommand")}).then(function(r){return r.write(t.props.move.dataToSend([e])).then(function(){t.timeOutAction=setTimeout(t.disconnect.bind(t),1e4)})})["catch"](function(e){t.showMessage("Erreur lors de l'envoi de la commande à LEO : "+e+". Deconnexion en cours..."),setTimeout(function(){t.disconnect()},3e3)})}},{key:"disconnect",value:function(){var e=this;this.showMessage("Au revoir..."),setTimeout(function(){e.showMessage(""),e.props.device.disconnect()},1e3)}},{key:"showMessage",value:function(e){this.props.showMessage&&this.props.showMessage(e)}}]),Driver}(o.Component);u.defaultProps={move:new a.Order(2),color:new a.Order(3),shapes:[{cells:[{x:9,y:2},{x:10,y:2},{x:8,y:3},{x:9,y:3},{x:10,y:3},{x:11,y:3},{x:7,y:4},{x:8,y:4},{x:9,y:4},{x:10,y:4},{x:11,y:4},{x:12,y:4},{x:6,y:5},{x:7,y:5},{x:8,y:5},{x:9,y:5},{x:10,y:5},{x:11,y:5},{x:12,y:5},{x:13,y:5}]},{cells:[{x:9,y:17},{x:10,y:17},{x:8,y:16},{x:9,y:16},{x:10,y:16},{x:11,y:16},{x:7,y:15},{x:8,y:15},{x:9,y:15},{x:10,y:15},{x:11,y:15},{x:12,y:15},{x:6,y:14},{x:7,y:14},{x:8,y:14},{x:9,y:14},{x:10,y:14},{x:11,y:14},{x:12,y:14},{x:13,y:14}]},{cells:[{x:2,y:9},{x:2,y:10},{x:3,y:8},{x:3,y:9},{x:3,y:10},{x:3,y:11},{x:4,y:7},{x:4,y:8},{x:4,y:9},{x:4,y:10},{x:4,y:11},{x:4,y:12},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:5,y:9},{x:5,y:10},{x:5,y:11},{x:5,y:12},{x:5,y:13}]},{cells:[{x:17,y:9},{x:17,y:10},{x:16,y:8},{x:16,y:9},{x:16,y:10},{x:16,y:11},{x:15,y:7},{x:15,y:8},{x:15,y:9},{x:15,y:10},{x:15,y:11},{x:15,y:12},{x:14,y:6},{x:14,y:7},{x:14,y:8},{x:14,y:9},{x:14,y:10},{x:14,y:11},{x:14,y:12},{x:14,y:13}]},{cells:[{x:8,y:20},{x:11,y:20},{x:9,y:21},{x:10,y:21},{x:9,y:22},{x:10,y:22},{x:8,y:23},{x:11,y:23}]},{cells:[{x:7,y:7},{x:8,y:7},{x:9,y:7},{x:10,y:7},{x:11,y:7},{x:12,y:7},{x:7,y:8},{x:7,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:8,y:12},{x:9,y:12},{x:10,y:12},{x:11,y:12},{x:12,y:12},{x:12,y:9},{x:12,y:10},{x:12,y:11},{x:9,y:9},{x:10,y:9},{x:11,y:9},{x:9,y:10}]},{cells:[{x:3,y:3},{x:4,y:3},{x:5,y:3},{x:3,y:4},{x:3,y:5}]},{cells:[{x:14,y:3},{x:15,y:3},{x:16,y:3},{x:16,y:4},{x:16,y:5}]},{cells:[{x:3,y:14},{x:3,y:15},{x:3,y:16},{x:4,y:16},{x:5,y:16}]},{cells:[{x:14,y:16},{x:15,y:16},{x:16,y:16},{x:16,y:14},{x:16,y:15}]}]}},172:function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();t.Order=function(){function Order(e){_classCallCheck(this,Order),this.codeByte=e,this.headerBytes=[186,186,170,170]}return r(Order,[{key:"dataToSend",value:function(e){for(var t=new ArrayBuffer(this.headerBytes.length+1+e.length),r=new Uint8Array(t),n=0,i=0;i<this.headerBytes.length;i+=1)r[n++]=this.headerBytes[i];r[n++]=this.codeByte;for(var o=0;o<e.length;o+=1)r[n++]=e[o];return t}}]),Order}()},173:function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(1),o=_interopRequireWildcard(i),s=t.Message=function(e){function Message(e,t){return _classCallCheck(this,Message),_possibleConstructorReturn(this,(Message.__proto__||Object.getPrototypeOf(Message)).call(this,e,t))}return _inherits(Message,e),n(Message,[{key:"render",value:function(){return o.createElement("div",null,this.props.show&&o.createElement("div",{className:"popin"},o.createElement("div",{className:"message",dangerouslySetInnerHTML:this.props.message})))}}]),Message}(o.Component);s.defaultProps={show:!1}}});
//# sourceMappingURL=client.82b3daa5514f7d2a28ab.js.map