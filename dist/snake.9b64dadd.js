// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"79UsM":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "72251f289b64dadd";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"l5Vr7":[function(require,module,exports) {
var _rage = require("./rage");
var _vector2D = require("vector2d");
let rage;
const winWidth = 1280;
const winHight = 720;
const main = ()=>{
    rage = new (0, _rage.Rage)("snake-canvas", winWidth, winHight);
    rage.clearColor = "#202020";
    requestAnimationFrame(gameLoop);
};
const state = {
    score: 0,
    isGameOver: false
};
const snake = {
    x: winWidth / 2,
    y: winHight / 2,
    width: 40,
    height: 40,
    dirUp: false,
    dirDown: false,
    dirLeft: false,
    dirRight: false,
    tick: 0,
    speed: 40,
    total: 0,
    tail: []
};
const fruit = {
    x: Math.floor(Math.random() * 32) * 40,
    y: Math.floor(Math.random() * 18) * 40,
    width: 40,
    height: 40,
    tick: 0
};
const gameLoop = ()=>{
    update();
    draw();
    requestAnimationFrame(gameLoop);
};
const draw = ()=>{
    rage.clearScreen();
    rage.drawRect(snake.x, snake.y, snake.width, snake.height, "#330000");
    rage.drawRect(fruit.x, fruit.y, fruit.width, fruit.height, "green");
    for(let i = 0; i < snake.tail.length; i++)if (snake.tail[i]) rage.drawRect(snake.tail[i].x, snake.tail[i].y, snake.width, snake.height, "#490000");
    rage.drawText(winWidth / 2, 10, "white", 40, `${state.score}`);
};
const update = ()=>{
    const dt = rage.getDT();
    snake.tick += 8 * dt;
    fruit.tick += 1 * dt;
    if (rage.isKeyDown("r")) {
        state.isGameOver = false;
        snake.x = winWidth / 2;
        snake.y = winHight / 2;
        fruit.x = Math.floor(Math.random() * 32) * 40;
        fruit.y = Math.floor(Math.random() * 18) * 40;
        snake.total = 0;
        snake.tail.length = 0;
        state.score = 0;
    }
    if (state.isGameOver) return;
    for(let i = 0; i < snake.tail.length; i++)if (rage.checkCollisionsRecs(snake.tail[i].x, snake.tail[i].y, snake.width, snake.height, snake.x, snake.y, snake.width, snake.height)) state.isGameOver = true;
    snakeMovement();
    snakeWallPassThrough();
    fruitSpawn();
};
const fruitSpawn = ()=>{
    if (fruit.tick >= 20) {
        fruit.tick = 0;
        fruit.x = Math.floor(Math.random() * 32) * 40;
        fruit.y = Math.floor(Math.random() * 18) * 40;
    }
    if (rage.checkCollisionsRecs(snake.x, snake.y, snake.width, snake.height, fruit.x, fruit.y, fruit.width, fruit.height)) {
        fruit.tick = 0;
        snake.total++;
        state.score++;
        fruit.x = Math.floor(Math.random() * 32) * 40;
        fruit.y = Math.floor(Math.random() * 18) * 40;
    }
};
const snakeMovement = ()=>{
    if (snake.tick >= 1) {
        snake.tick = 0;
        if (rage.isKeyDown("w") && !snake.dirDown) {
            snake.speed = -40;
            snake.dirUp = true;
            snake.dirDown = false;
            snake.dirLeft = false;
            snake.dirRight = false;
        }
        if (rage.isKeyDown("s") && !snake.dirUp) {
            snake.speed = 40;
            snake.dirUp = false;
            snake.dirDown = true;
            snake.dirLeft = false;
            snake.dirRight = false;
        }
        if (rage.isKeyDown("a") && !snake.dirRight) {
            snake.speed = -40;
            snake.dirUp = false;
            snake.dirDown = false;
            snake.dirLeft = true;
            snake.dirRight = false;
        }
        if (rage.isKeyDown("d") && !snake.dirLeft) {
            snake.speed = 40;
            snake.dirUp = false;
            snake.dirDown = false;
            snake.dirLeft = false;
            snake.dirRight = true;
        }
        for(let i = 0; i < snake.tail.length - 1; i++)snake.tail[i] = snake.tail[i + 1];
        if (snake.total >= 1) snake.tail[snake.total - 1] = new _vector2D.Vector(snake.x, snake.y);
        if (snake.dirLeft || snake.dirRight) snake.x += snake.speed;
        else snake.y += snake.speed;
    }
};
const snakeWallPassThrough = ()=>{
    if (snake.x >= winWidth + 40) snake.x = 0;
    else if (snake.x <= -40) snake.x = winWidth;
    if (snake.y >= winHight + 40) snake.y = 0;
    else if (snake.y <= -40) snake.y = winHight;
};
addEventListener("DOMContentLoaded", main);

},{"./rage":"bt3J1","vector2d":"7nJvp"}],"bt3J1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rage", ()=>Rage);
class Rage {
    previousTimeStamp = 0;
    dt = 0;
    tick = 0;
    framecount = 0;
    FPS = 0;
    keyMap = {};
    clearColor = "black";
    constructor(canvasID, width, height){
        this.canvas = document.getElementById(canvasID);
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
        this.width = width;
        this.height = height;
        window.addEventListener("keydown", this.handleKeyDown.bind(this), false);
        window.addEventListener("keyup", this.handleKeyUp.bind(this), false);
        this.previousTimeStamp = Date.now();
    }
    getDT() {
        return this.dt;
    }
    showFPS(x, y) {
        this.drawText(x, y, "lightgreen", 24, "FPS: " + this.FPS);
    }
    getFPS() {
        return this.FPS;
    }
    clearScreen() {
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        const currentTime = Date.now();
        this.dt = (currentTime - this.previousTimeStamp) / 1000;
        this.previousTimeStamp = currentTime;
        this.tick += this.dt;
        this.framecount += 1;
        if (this.tick >= 1) {
            this.FPS = this.framecount;
            this.framecount = 0;
            this.tick = 0;
        }
    }
    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }
    drawText(x, y, color, fonstsize, text) {
        this.ctx.font = `${fonstsize}px arial`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y + 24);
    }
    drawLine(x1, y1, x2, y2, width, color) {
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    checkCollisionsRecs(x1, y1, width1, height1, x2, y2, width2, height2) {
        if (x1 < x2 + width2 && x1 + width1 > x2 && y1 < y2 + height2 && height1 + y1 > y2) return true;
        else return false;
    }
    isKeyDown(key) {
        return this.keyMap[key] ? true : false;
    }
    handleKeyDown(ev) {
        this.keyMap[ev.key] = true;
    }
    handleKeyUp(ev) {
        this.keyMap[ev.key] = false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7nJvp":[function(require,module,exports) {
"use strict";
function __export(m) {
    for(var p in m)if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
__export(require("./AbstractVector"));
__export(require("./ArrayVector"));
__export(require("./Float32Vector"));
__export(require("./Vector"));

},{"./AbstractVector":"5TFH0","./ArrayVector":"fIDBK","./Float32Vector":"9Ibma","./Vector":"5cW2K"}],"5TFH0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * These values are used by the `AbstractVector.round` method to increase
 * performance vs. using  Number.toFixed.
 */ var precision = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
    10000000000
];
/**
 * The class that all other vector representations are derived from.
 *
 * Contains the core implementation for all methods that will be exposed by
 * vector instances.
 *
 * Example of creating a custom implementation:
 *
 * ```ts
 * import { AbstractVector } from "./AbstractVector"
 *
 * export class MyCustomVector extends AbstractVector {
 *  constructor (x: number, y: number) {
 *    super(CustomVectorType)
 *  }
 * }
 * ```
 */ var AbstractVector = /** @class */ function() {
    function AbstractVector(ctor) {
        this.ctor = ctor;
    }
    /**
     * Set both x and y axis value
     * @param x   New x val
     * @param y   New y val
     */ AbstractVector.prototype.setAxes = function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * Getter for x the axis value
     */ AbstractVector.prototype.getX = function() {
        return this.x;
    };
    /**
     * Setter for x axis value
     */ AbstractVector.prototype.setX = function(x) {
        this.x = x;
        return this;
    };
    /**
     * Getter for y axis value
     */ AbstractVector.prototype.getY = function() {
        return this.y;
    };
    /**
     * Setter for y axis.
     */ AbstractVector.prototype.setY = function(y) {
        this.y = y;
        return this;
    };
    /**
     * Return the vector as a formatted string, e.g "(0, 4)"
     */ AbstractVector.prototype.toString = function(round) {
        if (round === void 0) round = false;
        if (round) return "(" + Math.round(this.x) + ", " + Math.round(this.y) + ")";
        return "(" + this.x + ", " + this.y + ")";
    };
    /**
     * Return an Array containing the vector axes, e.g [0, 4]
     */ AbstractVector.prototype.toArray = function() {
        return [
            this.x,
            this.y
        ];
    };
    /**
     * Return an Object containing the vector axes, e.g { x: 0, y: 4 }
     */ AbstractVector.prototype.toObject = function() {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Add the provided vector to this one
     */ AbstractVector.prototype.add = function(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    /**
     * Subtract the provided vector from this one
     */ AbstractVector.prototype.subtract = function(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    /**
     * Check if the provided vector equal to this one
     */ AbstractVector.prototype.equals = function(vec) {
        return vec.x === this.x && vec.y === this.y;
    };
    /**
     * Multiply this vector by the provided vector
     */ AbstractVector.prototype.multiplyByVector = function(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    };
    /**
     * Multiply this vector by the provided vector
     */ AbstractVector.prototype.mulV = function(vec) {
        return this.multiplyByVector(vec);
    };
    /**
     * Divide this vector by the provided vector
     */ AbstractVector.prototype.divideByVector = function(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    };
    /**
     * Divide this vector by the provided vector
     */ AbstractVector.prototype.divV = function(v) {
        return this.divideByVector(v);
    };
    /**
     * Multiply this vector by the provided number
     */ AbstractVector.prototype.multiplyByScalar = function(n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    /**
     * Multiply this vector by the provided number
     */ AbstractVector.prototype.mulS = function(n) {
        return this.multiplyByScalar(n);
    };
    /**
     * Divive this vector by the provided number
     */ AbstractVector.prototype.divideByScalar = function(n) {
        this.x /= n;
        this.y /= n;
        return this;
    };
    /**
     * Divive this vector by the provided number
     */ AbstractVector.prototype.divS = function(n) {
        return this.divideByScalar(n);
    };
    /**
     * Normalise this vector
     */ AbstractVector.prototype.normalise = function() {
        return this.divideByScalar(this.magnitude());
    };
    /**
     * For American spelling. Same as unit/normalise function
     */ AbstractVector.prototype.normalize = function() {
        return this.normalise();
    };
    /**
     * The same as normalise and normalize
     */ AbstractVector.prototype.unit = function() {
        return this.normalise();
    };
    /**
     * Returns the magnitude (length) of this vector
     */ AbstractVector.prototype.magnitude = function() {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Returns the magnitude (length) of this vector
     */ AbstractVector.prototype.length = function() {
        return this.magnitude();
    };
    /**
     * Returns the squred length of this vector
     */ AbstractVector.prototype.lengthSq = function() {
        var x = this.x;
        var y = this.y;
        return x * x + y * y;
    };
    /**
     * Returns the dot product of this vector by another
     */ AbstractVector.prototype.dot = function(vec) {
        return vec.x * this.x + vec.y * this.y;
    };
    /**
     * Returns the cross product of this vector by another.
     */ AbstractVector.prototype.cross = function(vec) {
        return this.x * vec.y - this.y * vec.x;
    };
    /**
     * Reverses this vector i.e multiplies it by -1
     */ AbstractVector.prototype.reverse = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    /**
     * Set the vector axes values to absolute values
     */ AbstractVector.prototype.abs = function() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    };
    /**
     * Zeroes the vector i.e sets all axes to 0
     */ AbstractVector.prototype.zero = function() {
        this.x = this.y = 0;
        return this;
    };
    /**
     * Returns the distance between this vector and another
     */ AbstractVector.prototype.distance = function(v) {
        var x = this.x - v.x;
        var y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Rotates the vetor by provided radians
     */ AbstractVector.prototype.rotate = function(rads) {
        var cos = Math.cos(rads);
        var sin = Math.sin(rads);
        var ox = this.x;
        var oy = this.y;
        this.x = ox * cos - oy * sin;
        this.y = ox * sin + oy * cos;
        return this;
    };
    /**
     * Rounds this vector to n decimal places
     */ AbstractVector.prototype.round = function(n) {
        if (n === void 0) n = 2;
        var p = precision[n];
        // This performs waaay better than toFixed and give Float32 the edge again.
        // http://www.dynamicguru.com/javascript/round-numbers-with-precision/
        this.x = (0.5 + this.x * p << 0) / p;
        this.y = (0.5 + this.y * p << 0) / p;
        return this;
    };
    /**
     * Returns a copy of this vector
     */ AbstractVector.prototype.clone = function() {
        return new this.ctor(this.x, this.y);
    };
    return AbstractVector;
}();
exports.AbstractVector = AbstractVector;

},{}],"fIDBK":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var AbstractVector_1 = require("./AbstractVector");
/**
 * A vector representation that stores the axes in an Array
 *
 * ```
 * const v = new Vec2D.ArrayVector(2, 5)
 * ```
 */ var ArrayVector = /** @class */ function(_super) {
    __extends(ArrayVector, _super);
    function ArrayVector(x, y) {
        var _this = _super.call(this, ArrayVector) || this;
        _this.axes = [
            x,
            y
        ];
        _this.ctor = ArrayVector;
        return _this;
    }
    Object.defineProperty(ArrayVector.prototype, "x", {
        get: function() {
            return this.axes[0];
        },
        set: function(x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayVector.prototype, "y", {
        get: function() {
            return this.axes[1];
        },
        set: function(y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayVector;
}(AbstractVector_1.AbstractVector);
exports.ArrayVector = ArrayVector;

},{"./AbstractVector":"5TFH0"}],"9Ibma":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var AbstractVector_1 = require("./AbstractVector");
/**
 * A vector representation that stores the axes in a Float32Array
 *
 * ```
 * const v = new Vec2D.Float32Vector(2, 5)
 * ```
 */ var Float32Vector = /** @class */ function(_super) {
    __extends(Float32Vector, _super);
    function Float32Vector(x, y) {
        var _this = _super.call(this, Float32Vector) || this;
        _this.axes = new Float32Array(2);
        _this.axes[0] = x;
        _this.axes[1] = y;
        return _this;
    }
    Object.defineProperty(Float32Vector.prototype, "x", {
        get: function() {
            return this.axes[0];
        },
        set: function(x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Float32Vector.prototype, "y", {
        get: function() {
            return this.axes[1];
        },
        set: function(y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector;
}(AbstractVector_1.AbstractVector);
exports.Float32Vector = Float32Vector;

},{"./AbstractVector":"5TFH0"}],"5cW2K":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var AbstractVector_1 = require("./AbstractVector");
/**
 * A vector representation that stores the axes as part of the instance itself
 *
 * ```ts
 * const v = new Vec2D.Vector(2, 5)
 * ```
 */ var Vector = /** @class */ function(_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        var _this = _super.call(this, Vector) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function() {
            return this._x;
        },
        set: function(x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function() {
            return this._y;
        },
        set: function(y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}(AbstractVector_1.AbstractVector);
exports.Vector = Vector;

},{"./AbstractVector":"5TFH0"}]},["79UsM","l5Vr7"], "l5Vr7", "parcelRequire5a2c")

//# sourceMappingURL=snake.9b64dadd.js.map
