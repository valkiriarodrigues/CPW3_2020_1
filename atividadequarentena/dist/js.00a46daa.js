// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/model/entity/Jogador.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jogador = function Jogador(time_campeao, ano, tecnico, time_derrotado) {
  _classCallCheck(this, Jogador);

  Object.assign(this, {
    time_campeao: time_campeao,
    ano: ano,
    tecnico: tecnico,
    time_derrotado: time_derrotado
  });
};

exports.default = Jogador;
},{}],"js/db/jogador.json":[function(require,module,exports) {
module.exports = {
  "dados": [{
    "time_campeao": "França",
    "ano": "2018",
    "tecnico": "Deschamps",
    "time_derrotado": "Croácia"
  }, {
    "time_campeao": "Alemanha",
    "ano": "2014",
    "tecnico": "Low",
    "time_derrotado": "Argentina"
  }, {
    "time_campeao": "Espanha",
    "ano": "2010",
    "tecnico": "Vicente Del Bosque",
    "time_derrotado": "Holanda"
  }, {
    "time_campeao": "Italia",
    "ano": "2006",
    "tecnico": "Marcello Lippi",
    "time_derrotado": "França"
  }, {
    "time_campeao": "Brasil",
    "ano": "2002",
    "tecnico": "Luiz Felipe Scolari",
    "time_derrotado": "Alemanha"
  }, {
    "time_campeao": "França",
    "ano": "1998",
    "tecnico": "Aimé Jacquet",
    "time_derrotado": "Brasil"
  }, {
    "time_campeao": "Brasil",
    "ano": "1994",
    "tecnico": "Carlos Alberto Pereira",
    "time_derrotado": "Italia"
  }, {
    "time_campeao": "Alemanha Ocidental",
    "ano": "1990",
    "tecnico": "Beckenbawer",
    "time_derrotado": "Argentina"
  }, {
    "time_campeao": "Argentina",
    "ano": "1986",
    "tecnico": "Carlos Bilardo",
    "time_derrotado": "Alemanha Ocidental"
  }, {
    "time_campeao": "Italia",
    "ano": "1982",
    "tecnico": "Enzo Bearzot",
    "time_derrotado": "Alemanha Ocidental"
  }, {
    "time_campeao": "Argentina",
    "ano": "1978",
    "tecnico": "César Luis Menotti",
    "time_derrotado": "Holanda"
  }, {
    "time_campeao": "Alemanha Ocidental",
    "ano": "1974",
    "tecnico": "Fußball-Weltmeisterschaft ",
    "time_derrotado": "Holanda"
  }, {
    "time_campeao": "Brasil",
    "ano": "1970",
    "tecnico": "Mario Zagallo",
    "time_derrotado": "Italia"
  }, {
    "time_campeao": "Inglaterra",
    "ano": "1966",
    "tecnico": "...",
    "time_derrotado": "Alemanha Ocidental"
  }, {
    "time_campeao": "Brasil",
    "ano": "1962",
    "tecnico": "Aymoré Moreira",
    "time_derrotado": "Tchecoslovaquia"
  }, {
    "time_campeao": "Brasil",
    "ano": "1958",
    "tecnico": "Vicente Feola",
    "time_derrotado": "Suecia"
  }, {
    "time_campeao": "Alemanha Ocidental",
    "ano": "1954",
    "tecnico": "Sepp Herberger",
    "time_derrotado": "Hungria"
  }, {
    "time_campeao": "Uruguai",
    "ano": "1950",
    "tecnico": "Juan Lopez",
    "time_derrotado": "Brasil"
  }, {
    "time_campeao": "Italia",
    "ano": "1938",
    "tecnico": "Alfredo Foni",
    "time_derrotado": "Hungria"
  }, {
    "time_campeao": "Italia",
    "ano": "1934",
    "tecnico": "Luigi Allemandi",
    "time_derrotado": "Tchecoslovaquia"
  }, {
    "time_campeao": "Ungria",
    "ano": "1930",
    "tecnico": "Ulises Sucedo",
    "time_derrotado": "Argentina"
  }]
};
},{}],"js/model/dao/JogadorDAO.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Jogador = _interopRequireDefault(require("../entity/Jogador"));

var db = _interopRequireWildcard(require("../../db/jogador.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JogadorDAO = /*#__PURE__*/function () {
  function JogadorDAO() {
    _classCallCheck(this, JogadorDAO);
  }

  _createClass(JogadorDAO, [{
    key: "recuperarTodos",
    value: function recuperarTodos() {
      var jogador = db.jogador.map(function (jogador) {
        return new _Jogador.default(jogador.time_campeao, jogador.ano, jogador.tecnico, jogador.time_derrotado);
      });
      return jogador;
    }
  }]);

  return JogadorDAO;
}();

exports.default = JogadorDAO;
},{"../entity/Jogador":"js/model/entity/Jogador.js","../../db/jogador.json":"js/db/jogador.json"}],"js/controller/JogadorController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _JogadorDAO = _interopRequireDefault(require("../model/dao/JogadorDAO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JogadorController = /*#__PURE__*/function () {
  function JogadorController() {
    _classCallCheck(this, JogadorController);

    this.jogadorDAO = new _JogadorDAO.default();
  }

  _createClass(JogadorController, [{
    key: "recuperarJogadores",
    value: function recuperarJogadores() {
      return this.jogadorDAO.recuperarTodos();
    }
  }]);

  return JogadorController;
}();

exports.default = JogadorController;
},{"../model/dao/JogadorDAO":"js/model/dao/JogadorDAO.js"}],"js/view/JogadorView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _JogadorController = _interopRequireDefault(require("../controller/JogadorController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JogadorView = /*#__PURE__*/function () {
  function JogadorView() {
    _classCallCheck(this, JogadorView);

    this.jogadorCtrl = new _JogadorController.default();
  }

  _createClass(JogadorView, [{
    key: "renderizarTabelaDeJogadores",
    value: function renderizarTabelaDeJogadores() {
      var jogadores = this.jogadorCtrl.recuperarjogadores();
      var cabecalho = this.criarCabecalhoDaTabelaDeJogadores();
      var corpo = this.criarCorpoDaTabelaDeJogadores(jogadores);
      var tabela = "<table>".concat(cabecalho).concat(corpo, "</table> ");
      document.getElementById('texto').innerHTML = tabela;
    }
  }, {
    key: "criarCabecalhoDaTabelaDeJogadores",
    value: function criarCabecalhoDaTabelaDeJogadores() {
      var cabecalho = "\n            <thead>\n                <tr>\n                    <th>Time Campe\xE3o</th>\n                    <th>Ano</th>\n                    <th>T\xE9cnico</th>\n                    <th>Time Derrotado</th>\n                </tr>\n            </thead>\n        ";
      return cabecalho;
    }
  }, {
    key: "criarCorpoDaTabelaDeJogadores",
    value: function criarCorpoDaTabelaDeJogadores(jogadores) {
      var corpo = '';
      jogadores.forEach(function (jogador) {
        var jogadorStr = "\n                <tr>\n                    <td>".concat(jogador.time_campeao, "</td>\n                    <td>").concat(jogador.ano, "</td>\n                    <td>").concat(jogador.tecnico, "</td>\n                    <td>").concat(jogador.time_derrotado, "</td>\n                </tr>\n            ");
        corpo += jogadorStr;
      });
      var tbody = "<tbody>".concat(corpo, "</tbody>");
      return tbody;
    }
  }]);

  return JogadorView;
}();

exports.default = JogadorView;
},{"../controller/JogadorController":"js/controller/JogadorController.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _JogadorView = _interopRequireDefault(require("./view/JogadorView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var view = new JogadorView();

window.onload = function () {
  return view.renderizarTabelaDeJogadores();
};
},{"./view/JogadorView":"js/view/JogadorView.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51752" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map