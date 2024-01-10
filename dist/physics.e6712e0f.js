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
})({"5y3Iv":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "aab6793de6712e0f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3DX8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActiveCollisionTypes", ()=>UA);
parcelHelpers.export(exports, "ActiveEvents", ()=>FA);
parcelHelpers.export(exports, "ActiveHooks", ()=>qA);
parcelHelpers.export(exports, "Ball", ()=>EI);
parcelHelpers.export(exports, "BroadPhase", ()=>VA);
parcelHelpers.export(exports, "CCDSolver", ()=>mA);
parcelHelpers.export(exports, "Capsule", ()=>GI);
parcelHelpers.export(exports, "CharacterCollision", ()=>tI);
parcelHelpers.export(exports, "CoefficientCombineRule", ()=>KA);
parcelHelpers.export(exports, "Collider", ()=>qI);
parcelHelpers.export(exports, "ColliderDesc", ()=>RI);
parcelHelpers.export(exports, "ColliderSet", ()=>sI);
parcelHelpers.export(exports, "Cone", ()=>NI);
parcelHelpers.export(exports, "ConvexPolyhedron", ()=>KI);
parcelHelpers.export(exports, "Cuboid", ()=>DI);
parcelHelpers.export(exports, "Cylinder", ()=>UI);
parcelHelpers.export(exports, "DebugRenderBuffers", ()=>HI);
parcelHelpers.export(exports, "DebugRenderPipeline", ()=>lI);
parcelHelpers.export(exports, "EventQueue", ()=>dI);
parcelHelpers.export(exports, "FeatureType", ()=>yA);
parcelHelpers.export(exports, "FixedImpulseJoint", ()=>pA);
parcelHelpers.export(exports, "FixedMultibodyJoint", ()=>bA);
parcelHelpers.export(exports, "HalfSpace", ()=>iI);
parcelHelpers.export(exports, "Heightfield", ()=>JI);
parcelHelpers.export(exports, "ImpulseJoint", ()=>lA);
parcelHelpers.export(exports, "ImpulseJointSet", ()=>OA);
parcelHelpers.export(exports, "IntegrationParameters", ()=>HA);
parcelHelpers.export(exports, "IslandManager", ()=>XA);
parcelHelpers.export(exports, "JointData", ()=>TA);
parcelHelpers.export(exports, "JointType", ()=>aA);
parcelHelpers.export(exports, "KinematicCharacterController", ()=>pI);
parcelHelpers.export(exports, "MassPropsMode", ()=>hA);
parcelHelpers.export(exports, "MotorModel", ()=>MA);
parcelHelpers.export(exports, "MultibodyJoint", ()=>nA);
parcelHelpers.export(exports, "MultibodyJointSet", ()=>fA);
parcelHelpers.export(exports, "NarrowPhase", ()=>PA);
parcelHelpers.export(exports, "PhysicsPipeline", ()=>cI);
parcelHelpers.export(exports, "PointColliderProjection", ()=>_A);
parcelHelpers.export(exports, "PointProjection", ()=>vA);
parcelHelpers.export(exports, "Polyline", ()=>aI);
parcelHelpers.export(exports, "PrismaticImpulseJoint", ()=>eA);
parcelHelpers.export(exports, "PrismaticMultibodyJoint", ()=>WA);
parcelHelpers.export(exports, "Quaternion", ()=>oA);
parcelHelpers.export(exports, "QueryFilterFlags", ()=>NA);
parcelHelpers.export(exports, "QueryPipeline", ()=>YI);
parcelHelpers.export(exports, "Ray", ()=>$A);
parcelHelpers.export(exports, "RayColliderIntersection", ()=>II);
parcelHelpers.export(exports, "RayColliderToi", ()=>gI);
parcelHelpers.export(exports, "RayIntersection", ()=>AI);
parcelHelpers.export(exports, "RevoluteImpulseJoint", ()=>rA);
parcelHelpers.export(exports, "RevoluteMultibodyJoint", ()=>jA);
parcelHelpers.export(exports, "RigidBody", ()=>sA);
parcelHelpers.export(exports, "RigidBodyDesc", ()=>cA);
parcelHelpers.export(exports, "RigidBodySet", ()=>LA);
parcelHelpers.export(exports, "RigidBodyType", ()=>SA);
parcelHelpers.export(exports, "RotationOps", ()=>GA);
parcelHelpers.export(exports, "RoundCone", ()=>FI);
parcelHelpers.export(exports, "RoundConvexPolyhedron", ()=>yI);
parcelHelpers.export(exports, "RoundCuboid", ()=>oI);
parcelHelpers.export(exports, "RoundCylinder", ()=>hI);
parcelHelpers.export(exports, "RoundTriangle", ()=>SI);
parcelHelpers.export(exports, "SdpMatrix3", ()=>wA);
parcelHelpers.export(exports, "SdpMatrix3Ops", ()=>kA);
parcelHelpers.export(exports, "Segment", ()=>wI);
parcelHelpers.export(exports, "SerializationPipeline", ()=>LI);
parcelHelpers.export(exports, "Shape", ()=>QI);
parcelHelpers.export(exports, "ShapeColliderTOI", ()=>BI);
parcelHelpers.export(exports, "ShapeContact", ()=>uA);
parcelHelpers.export(exports, "ShapeTOI", ()=>CI);
parcelHelpers.export(exports, "ShapeType", ()=>JA);
parcelHelpers.export(exports, "SolverFlags", ()=>RA);
parcelHelpers.export(exports, "SphericalImpulseJoint", ()=>dA);
parcelHelpers.export(exports, "SphericalMultibodyJoint", ()=>xA);
parcelHelpers.export(exports, "TempContactForceEvent", ()=>rI);
parcelHelpers.export(exports, "TempContactManifold", ()=>zA);
parcelHelpers.export(exports, "TriMesh", ()=>MI);
parcelHelpers.export(exports, "Triangle", ()=>kI);
parcelHelpers.export(exports, "UnitImpulseJoint", ()=>tA);
parcelHelpers.export(exports, "UnitMultibodyJoint", ()=>ZA);
parcelHelpers.export(exports, "Vector3", ()=>iA);
parcelHelpers.export(exports, "VectorOps", ()=>DA);
parcelHelpers.export(exports, "World", ()=>eI);
parcelHelpers.export(exports, "default", ()=>PI);
parcelHelpers.export(exports, "init", ()=>XI);
parcelHelpers.export(exports, "version", ()=>VI);
let A;
const I = new Array(32).fill(void 0);
function g(A) {
    return I[A];
}
I.push(void 0, null, !0, !1);
let C = I.length;
function B(A) {
    const B = g(A);
    return function(A) {
        A < 36 || (I[A] = C, C = A);
    }(A), B;
}
function Q(A) {
    C === I.length && I.push(I.length + 1);
    const g = C;
    return C = I[g], I[g] = A, g;
}
function E(A) {
    return null == A;
}
let i = new Float64Array;
function D() {
    return 0 === i.byteLength && (i = new Float64Array(A.memory.buffer)), i;
}
let o = new Int32Array;
function G() {
    return 0 === o.byteLength && (o = new Int32Array(A.memory.buffer)), o;
}
const w = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
w.decode();
let k = new Uint8Array;
function S(I, g) {
    return w.decode((0 === k.byteLength && (k = new Uint8Array(A.memory.buffer)), k).subarray(I, I + g));
}
function a(A, I) {
    if (!(A instanceof I)) throw new Error(`expected instance of ${I.name}`);
    return A.ptr;
}
let M = new Float32Array;
function K() {
    return 0 === M.byteLength && (M = new Float32Array(A.memory.buffer)), M;
}
let y = 32;
function J(A) {
    if (1 == y) throw new Error("out of js stack");
    return I[--y] = A, y;
}
function U(A, I) {
    return K().subarray(A / 4, A / 4 + I);
}
let h = new Uint32Array;
function N() {
    return 0 === h.byteLength && (h = new Uint32Array(A.memory.buffer)), h;
}
let F = 0;
function q(A, I) {
    const g = I(4 * A.length);
    return K().set(A, g / 4), F = A.length, g;
}
function R(A, I) {
    const g = I(4 * A.length);
    return N().set(A, g / 4), F = A.length, g;
}
function s(I, g) {
    try {
        return I.apply(this, g);
    } catch (I) {
        A.__wbindgen_exn_store(Q(I));
    }
}
Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Spherical: 3,
    3: "Spherical",
    Generic: 4,
    4: "Generic"
}), Object.freeze({
    AccelerationBased: 0,
    0: "AccelerationBased",
    ForceBased: 1,
    1: "ForceBased"
});
const c = Object.freeze({
    X: 0,
    0: "X",
    Y: 1,
    1: "Y",
    Z: 2,
    2: "Z",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
});
Object.freeze({
    Dynamic: 0,
    0: "Dynamic",
    Fixed: 1,
    1: "Fixed",
    KinematicPositionBased: 2,
    2: "KinematicPositionBased",
    KinematicVelocityBased: 3,
    3: "KinematicVelocityBased"
}), Object.freeze({
    Vertex: 0,
    0: "Vertex",
    Edge: 1,
    1: "Edge",
    Face: 2,
    2: "Face",
    Unknown: 3,
    3: "Unknown"
}), Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolyhedron: 9,
    9: "ConvexPolyhedron",
    Cylinder: 10,
    10: "Cylinder",
    Cone: 11,
    11: "Cone",
    RoundCuboid: 12,
    12: "RoundCuboid",
    RoundTriangle: 13,
    13: "RoundTriangle",
    RoundCylinder: 14,
    14: "RoundCylinder",
    RoundCone: 15,
    15: "RoundCone",
    RoundConvexPolyhedron: 16,
    16: "RoundConvexPolyhedron",
    HalfSpace: 17,
    17: "HalfSpace"
});
class Y {
    static __wrap(A) {
        const I = Object.create(Y.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawbroadphase_free(I);
    }
    constructor(){
        const I = A.rawbroadphase_new();
        return Y.__wrap(I);
    }
}
class L {
    static __wrap(A) {
        const I = Object.create(L.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawccdsolver_free(I);
    }
    constructor(){
        const I = A.rawccdsolver_new();
        return L.__wrap(I);
    }
}
class H {
    static __wrap(A) {
        const I = Object.create(H.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcharactercollision_free(I);
    }
    constructor(){
        const I = A.rawcharactercollision_new();
        return H.__wrap(I);
    }
    handle() {
        return A.rawcharactercollision_handle(this.ptr);
    }
    translationApplied() {
        const I = A.rawcharactercollision_translationApplied(this.ptr);
        return QA.__wrap(I);
    }
    translationRemaining() {
        const I = A.rawcharactercollision_translationRemaining(this.ptr);
        return QA.__wrap(I);
    }
    toi() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    worldWitness1() {
        const I = A.rawcharactercollision_worldWitness1(this.ptr);
        return QA.__wrap(I);
    }
    worldWitness2() {
        const I = A.rawcharactercollision_worldWitness2(this.ptr);
        return QA.__wrap(I);
    }
    worldNormal1() {
        const I = A.rawcharactercollision_worldNormal1(this.ptr);
        return QA.__wrap(I);
    }
    worldNormal2() {
        const I = A.rawcharactercollision_worldNormal2(this.ptr);
        return QA.__wrap(I);
    }
}
class l {
    static __wrap(A) {
        const I = Object.create(l.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcolliderset_free(I);
    }
    coTranslation(I) {
        const g = A.rawcolliderset_coTranslation(this.ptr, I);
        return QA.__wrap(g);
    }
    coRotation(I) {
        const g = A.rawcolliderset_coRotation(this.ptr, I);
        return _.__wrap(g);
    }
    coSetTranslation(I, g, C, B) {
        A.rawcolliderset_coSetTranslation(this.ptr, I, g, C, B);
    }
    coSetTranslationWrtParent(I, g, C, B) {
        A.rawcolliderset_coSetTranslationWrtParent(this.ptr, I, g, C, B);
    }
    coSetRotation(I, g, C, B, Q) {
        A.rawcolliderset_coSetRotation(this.ptr, I, g, C, B, Q);
    }
    coSetRotationWrtParent(I, g, C, B, Q) {
        A.rawcolliderset_coSetRotationWrtParent(this.ptr, I, g, C, B, Q);
    }
    coIsSensor(I) {
        return 0 !== A.rawcolliderset_coIsSensor(this.ptr, I);
    }
    coShapeType(I) {
        return A.rawcolliderset_coShapeType(this.ptr, I) >>> 0;
    }
    coHalfspaceNormal(I) {
        const g = A.rawcolliderset_coHalfspaceNormal(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    coHalfExtents(I) {
        const g = A.rawcolliderset_coHalfExtents(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    coSetHalfExtents(I, g) {
        a(g, QA), A.rawcolliderset_coSetHalfExtents(this.ptr, I, g.ptr);
    }
    coRadius(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coRadius(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = K()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetRadius(I, g) {
        A.rawcolliderset_coSetRadius(this.ptr, I, g);
    }
    coHalfHeight(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHalfHeight(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = K()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetHalfHeight(I, g) {
        A.rawcolliderset_coSetHalfHeight(this.ptr, I, g);
    }
    coRoundRadius(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coRoundRadius(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = K()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetRoundRadius(I, g) {
        A.rawcolliderset_coSetRoundRadius(this.ptr, I, g);
    }
    coVertices(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coVertices(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = G()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = U(g, C).slice(), A.__wbindgen_free(g, 4 * C)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coIndices(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coIndices(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = G()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = (function(A, I) {
                return N().subarray(A / 4, A / 4 + I);
            })(g, C).slice(), A.__wbindgen_free(g, 4 * C)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldHeights(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldHeights(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = G()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = U(g, C).slice(), A.__wbindgen_free(g, 4 * C)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldScale(I) {
        const g = A.rawcolliderset_coHeightfieldScale(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    coHeightfieldNRows(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNRows(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = G()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldNCols(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNCols(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = G()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coParent(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coParent(B, this.ptr, I);
            var g = G()[B / 4 + 0], C = D()[B / 8 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetEnabled(I, g) {
        A.rawcolliderset_coSetEnabled(this.ptr, I, g);
    }
    coIsEnabled(I) {
        return 0 !== A.rawcolliderset_coIsEnabled(this.ptr, I);
    }
    coFriction(I) {
        return A.rawcolliderset_coFriction(this.ptr, I);
    }
    coRestitution(I) {
        return A.rawcolliderset_coRestitution(this.ptr, I);
    }
    coDensity(I) {
        return A.rawcolliderset_coDensity(this.ptr, I);
    }
    coMass(I) {
        return A.rawcolliderset_coMass(this.ptr, I);
    }
    coVolume(I) {
        return A.rawcolliderset_coVolume(this.ptr, I);
    }
    coCollisionGroups(I) {
        return A.rawcolliderset_coCollisionGroups(this.ptr, I) >>> 0;
    }
    coSolverGroups(I) {
        return A.rawcolliderset_coSolverGroups(this.ptr, I) >>> 0;
    }
    coActiveHooks(I) {
        return A.rawcolliderset_coActiveHooks(this.ptr, I) >>> 0;
    }
    coActiveCollisionTypes(I) {
        return A.rawcolliderset_coActiveCollisionTypes(this.ptr, I);
    }
    coActiveEvents(I) {
        return A.rawcolliderset_coActiveEvents(this.ptr, I) >>> 0;
    }
    coContactForceEventThreshold(I) {
        return A.rawcolliderset_coContactForceEventThreshold(this.ptr, I);
    }
    coContainsPoint(I, g) {
        a(g, QA);
        return 0 !== A.rawcolliderset_coContainsPoint(this.ptr, I, g.ptr);
    }
    coCastShape(I, g, C, B, Q, E, i, D) {
        a(g, QA), a(C, IA), a(B, QA), a(Q, _), a(E, QA);
        const o = A.rawcolliderset_coCastShape(this.ptr, I, g.ptr, C.ptr, B.ptr, Q.ptr, E.ptr, i, D);
        return 0 === o ? void 0 : BA.__wrap(o);
    }
    coCastCollider(I, g, C, B, Q, E) {
        a(g, QA), a(B, QA);
        const i = A.rawcolliderset_coCastCollider(this.ptr, I, g.ptr, C, B.ptr, Q, E);
        return 0 === i ? void 0 : gA.__wrap(i);
    }
    coIntersectsShape(I, g, C, B) {
        a(g, IA), a(C, QA), a(B, _);
        return 0 !== A.rawcolliderset_coIntersectsShape(this.ptr, I, g.ptr, C.ptr, B.ptr);
    }
    coContactShape(I, g, C, B, Q) {
        a(g, IA), a(C, QA), a(B, _);
        const E = A.rawcolliderset_coContactShape(this.ptr, I, g.ptr, C.ptr, B.ptr, Q);
        return 0 === E ? void 0 : CA.__wrap(E);
    }
    coContactCollider(I, g, C) {
        const B = A.rawcolliderset_coContactCollider(this.ptr, I, g, C);
        return 0 === B ? void 0 : CA.__wrap(B);
    }
    coProjectPoint(I, g, C) {
        a(g, QA);
        const B = A.rawcolliderset_coProjectPoint(this.ptr, I, g.ptr, C);
        return X.__wrap(B);
    }
    coIntersectsRay(I, g, C, B) {
        a(g, QA), a(C, QA);
        return 0 !== A.rawcolliderset_coIntersectsRay(this.ptr, I, g.ptr, C.ptr, B);
    }
    coCastRay(I, g, C, B, Q) {
        a(g, QA), a(C, QA);
        return A.rawcolliderset_coCastRay(this.ptr, I, g.ptr, C.ptr, B, Q);
    }
    coCastRayAndGetNormal(I, g, C, B, Q) {
        a(g, QA), a(C, QA);
        const E = A.rawcolliderset_coCastRayAndGetNormal(this.ptr, I, g.ptr, C.ptr, B, Q);
        return 0 === E ? void 0 : u.__wrap(E);
    }
    coSetSensor(I, g) {
        A.rawcolliderset_coSetSensor(this.ptr, I, g);
    }
    coSetRestitution(I, g) {
        A.rawcolliderset_coSetRestitution(this.ptr, I, g);
    }
    coSetFriction(I, g) {
        A.rawcolliderset_coSetFriction(this.ptr, I, g);
    }
    coFrictionCombineRule(I) {
        return A.rawcolliderset_coFrictionCombineRule(this.ptr, I) >>> 0;
    }
    coSetFrictionCombineRule(I, g) {
        A.rawcolliderset_coSetFrictionCombineRule(this.ptr, I, g);
    }
    coRestitutionCombineRule(I) {
        return A.rawcolliderset_coRestitutionCombineRule(this.ptr, I) >>> 0;
    }
    coSetRestitutionCombineRule(I, g) {
        A.rawcolliderset_coSetRestitutionCombineRule(this.ptr, I, g);
    }
    coSetCollisionGroups(I, g) {
        A.rawcolliderset_coSetCollisionGroups(this.ptr, I, g);
    }
    coSetSolverGroups(I, g) {
        A.rawcolliderset_coSetSolverGroups(this.ptr, I, g);
    }
    coSetActiveHooks(I, g) {
        A.rawcolliderset_coSetActiveHooks(this.ptr, I, g);
    }
    coSetActiveEvents(I, g) {
        A.rawcolliderset_coSetActiveEvents(this.ptr, I, g);
    }
    coSetActiveCollisionTypes(I, g) {
        A.rawcolliderset_coSetActiveCollisionTypes(this.ptr, I, g);
    }
    coSetShape(I, g) {
        a(g, IA), A.rawcolliderset_coSetShape(this.ptr, I, g.ptr);
    }
    coSetContactForceEventThreshold(I, g) {
        A.rawcolliderset_coSetContactForceEventThreshold(this.ptr, I, g);
    }
    coSetDensity(I, g) {
        A.rawcolliderset_coSetDensity(this.ptr, I, g);
    }
    coSetMass(I, g) {
        A.rawcolliderset_coSetMass(this.ptr, I, g);
    }
    coSetMassProperties(I, g, C, B, Q) {
        a(C, QA), a(B, QA), a(Q, _), A.rawcolliderset_coSetMassProperties(this.ptr, I, g, C.ptr, B.ptr, Q.ptr);
    }
    constructor(){
        const I = A.rawcolliderset_new();
        return l.__wrap(I);
    }
    len() {
        return A.rawcolliderset_len(this.ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawcolliderset_contains(this.ptr, I);
    }
    createCollider(I, g, C, B, Q, E, i, o, w, k, S, M, K, y, J, U, h, N, F, q, R, s, c, Y) {
        try {
            const l = A.__wbindgen_add_to_stack_pointer(-16);
            a(g, IA), a(C, QA), a(B, _), a(i, QA), a(o, QA), a(w, _), a(Y, v), A.rawcolliderset_createCollider(l, this.ptr, I, g.ptr, C.ptr, B.ptr, Q, E, i.ptr, o.ptr, w.ptr, k, S, M, K, y, J, U, h, N, F, q, R, s, c, Y.ptr);
            var L = G()[l / 4 + 0], H = D()[l / 8 + 1];
            return 0 === L ? void 0 : H;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    remove(I, g, C, B) {
        a(g, b), a(C, v), A.rawcolliderset_remove(this.ptr, I, g.ptr, C.ptr, B);
    }
    isHandleValid(I) {
        return 0 !== A.rawcolliderset_contains(this.ptr, I);
    }
    forEachColliderHandle(g) {
        try {
            A.rawcolliderset_forEachColliderHandle(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
}
class t {
    static __wrap(A) {
        const I = Object.create(t.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactforceevent_free(I);
    }
    collider1() {
        return A.rawcharactercollision_handle(this.ptr);
    }
    collider2() {
        return A.rawcontactforceevent_collider2(this.ptr);
    }
    total_force() {
        const I = A.rawcontactforceevent_total_force(this.ptr);
        return QA.__wrap(I);
    }
    total_force_magnitude() {
        return A.rawcontactforceevent_total_force_magnitude(this.ptr);
    }
    max_force_direction() {
        const I = A.rawcontactforceevent_max_force_direction(this.ptr);
        return QA.__wrap(I);
    }
    max_force_magnitude() {
        return A.rawcontactforceevent_max_force_magnitude(this.ptr);
    }
}
class p {
    static __wrap(A) {
        const I = Object.create(p.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactmanifold_free(I);
    }
    normal() {
        const I = A.rawcontactmanifold_normal(this.ptr);
        return QA.__wrap(I);
    }
    local_n1() {
        const I = A.rawcontactmanifold_local_n1(this.ptr);
        return QA.__wrap(I);
    }
    local_n2() {
        const I = A.rawcontactmanifold_local_n2(this.ptr);
        return QA.__wrap(I);
    }
    subshape1() {
        return A.rawcontactmanifold_subshape1(this.ptr) >>> 0;
    }
    subshape2() {
        return A.rawcontactmanifold_subshape2(this.ptr) >>> 0;
    }
    num_contacts() {
        return A.rawcontactmanifold_num_contacts(this.ptr) >>> 0;
    }
    contact_local_p1(I) {
        const g = A.rawcontactmanifold_contact_local_p1(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    contact_local_p2(I) {
        const g = A.rawcontactmanifold_contact_local_p2(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    contact_dist(I) {
        return A.rawcontactmanifold_contact_dist(this.ptr, I);
    }
    contact_fid1(I) {
        return A.rawcontactmanifold_contact_fid1(this.ptr, I) >>> 0;
    }
    contact_fid2(I) {
        return A.rawcontactmanifold_contact_fid2(this.ptr, I) >>> 0;
    }
    contact_impulse(I) {
        return A.rawcontactmanifold_contact_impulse(this.ptr, I);
    }
    contact_tangent_impulse_x(I) {
        return A.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, I);
    }
    contact_tangent_impulse_y(I) {
        return A.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, I);
    }
    num_solver_contacts() {
        return A.rawcontactmanifold_num_solver_contacts(this.ptr) >>> 0;
    }
    solver_contact_point(I) {
        const g = A.rawcontactmanifold_solver_contact_point(this.ptr, I);
        return 0 === g ? void 0 : QA.__wrap(g);
    }
    solver_contact_dist(I) {
        return A.rawcontactmanifold_solver_contact_dist(this.ptr, I);
    }
    solver_contact_friction(I) {
        return A.rawcontactmanifold_solver_contact_friction(this.ptr, I);
    }
    solver_contact_restitution(I) {
        return A.rawcontactmanifold_solver_contact_restitution(this.ptr, I);
    }
    solver_contact_tangent_velocity(I) {
        const g = A.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, I);
        return QA.__wrap(g);
    }
}
class e {
    static __wrap(A) {
        const I = Object.create(e.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactpair_free(I);
    }
    collider1() {
        return A.rawcontactpair_collider1(this.ptr);
    }
    collider2() {
        return A.rawcontactpair_collider2(this.ptr);
    }
    numContactManifolds() {
        return A.rawcontactpair_numContactManifolds(this.ptr) >>> 0;
    }
    contactManifold(I) {
        const g = A.rawcontactpair_contactManifold(this.ptr, I);
        return 0 === g ? void 0 : p.__wrap(g);
    }
}
class r {
    static __wrap(A) {
        const I = Object.create(r.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawdebugrenderpipeline_free(I);
    }
    constructor(){
        const I = A.rawdebugrenderpipeline_new();
        return r.__wrap(I);
    }
    vertices() {
        return B(A.rawdebugrenderpipeline_vertices(this.ptr));
    }
    colors() {
        return B(A.rawdebugrenderpipeline_colors(this.ptr));
    }
    render(I, g, C, B, Q) {
        a(I, v), a(g, l), a(C, n), a(B, j), a(Q, x), A.rawdebugrenderpipeline_render(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q.ptr);
    }
}
class d {
    static __wrap(A) {
        const I = Object.create(d.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawdeserializedworld_free(I);
    }
    takeGravity() {
        const I = A.rawdeserializedworld_takeGravity(this.ptr);
        return 0 === I ? void 0 : QA.__wrap(I);
    }
    takeIntegrationParameters() {
        const I = A.rawdeserializedworld_takeIntegrationParameters(this.ptr);
        return 0 === I ? void 0 : Z.__wrap(I);
    }
    takeIslandManager() {
        const I = A.rawdeserializedworld_takeIslandManager(this.ptr);
        return 0 === I ? void 0 : b.__wrap(I);
    }
    takeBroadPhase() {
        const I = A.rawdeserializedworld_takeBroadPhase(this.ptr);
        return 0 === I ? void 0 : Y.__wrap(I);
    }
    takeNarrowPhase() {
        const I = A.rawdeserializedworld_takeNarrowPhase(this.ptr);
        return 0 === I ? void 0 : x.__wrap(I);
    }
    takeBodies() {
        const I = A.rawdeserializedworld_takeBodies(this.ptr);
        return 0 === I ? void 0 : v.__wrap(I);
    }
    takeColliders() {
        const I = A.rawdeserializedworld_takeColliders(this.ptr);
        return 0 === I ? void 0 : l.__wrap(I);
    }
    takeImpulseJoints() {
        const I = A.rawdeserializedworld_takeImpulseJoints(this.ptr);
        return 0 === I ? void 0 : n.__wrap(I);
    }
    takeMultibodyJoints() {
        const I = A.rawdeserializedworld_takeMultibodyJoints(this.ptr);
        return 0 === I ? void 0 : j.__wrap(I);
    }
}
class T {
    static __wrap(A) {
        const I = Object.create(T.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_raweventqueue_free(I);
    }
    constructor(I){
        const g = A.raweventqueue_new(I);
        return T.__wrap(g);
    }
    drainCollisionEvents(g) {
        try {
            A.raweventqueue_drainCollisionEvents(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
    drainContactForceEvents(g) {
        try {
            A.raweventqueue_drainContactForceEvents(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
    clear() {
        A.raweventqueue_clear(this.ptr);
    }
}
class O {
    static __wrap(A) {
        const I = Object.create(O.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawgenericjoint_free(I);
    }
    static spherical(I, g) {
        a(I, QA), a(g, QA);
        const C = A.rawgenericjoint_spherical(I.ptr, g.ptr);
        return O.__wrap(C);
    }
    static prismatic(I, g, C, B, Q, E) {
        a(I, QA), a(g, QA), a(C, QA);
        const i = A.rawgenericjoint_prismatic(I.ptr, g.ptr, C.ptr, B, Q, E);
        return 0 === i ? void 0 : O.__wrap(i);
    }
    static fixed(I, g, C, B) {
        a(I, QA), a(g, _), a(C, QA), a(B, _);
        const Q = A.rawgenericjoint_fixed(I.ptr, g.ptr, C.ptr, B.ptr);
        return O.__wrap(Q);
    }
    static revolute(I, g, C) {
        a(I, QA), a(g, QA), a(C, QA);
        const B = A.rawgenericjoint_revolute(I.ptr, g.ptr, C.ptr);
        return 0 === B ? void 0 : O.__wrap(B);
    }
}
class n {
    static __wrap(A) {
        const I = Object.create(n.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawimpulsejointset_free(I);
    }
    jointType(I) {
        return A.rawimpulsejointset_jointType(this.ptr, I) >>> 0;
    }
    jointBodyHandle1(I) {
        return A.rawimpulsejointset_jointBodyHandle1(this.ptr, I);
    }
    jointBodyHandle2(I) {
        return A.rawimpulsejointset_jointBodyHandle2(this.ptr, I);
    }
    jointFrameX1(I) {
        const g = A.rawimpulsejointset_jointFrameX1(this.ptr, I);
        return _.__wrap(g);
    }
    jointFrameX2(I) {
        const g = A.rawimpulsejointset_jointFrameX2(this.ptr, I);
        return _.__wrap(g);
    }
    jointAnchor1(I) {
        const g = A.rawimpulsejointset_jointAnchor1(this.ptr, I);
        return QA.__wrap(g);
    }
    jointAnchor2(I) {
        const g = A.rawimpulsejointset_jointAnchor2(this.ptr, I);
        return QA.__wrap(g);
    }
    jointSetAnchor1(I, g) {
        a(g, QA), A.rawimpulsejointset_jointSetAnchor1(this.ptr, I, g.ptr);
    }
    jointSetAnchor2(I, g) {
        a(g, QA), A.rawimpulsejointset_jointSetAnchor2(this.ptr, I, g.ptr);
    }
    jointContactsEnabled(I) {
        return 0 !== A.rawimpulsejointset_jointContactsEnabled(this.ptr, I);
    }
    jointSetContactsEnabled(I, g) {
        A.rawimpulsejointset_jointSetContactsEnabled(this.ptr, I, g);
    }
    jointLimitsEnabled(I, g) {
        return 0 !== A.rawimpulsejointset_jointLimitsEnabled(this.ptr, I, g);
    }
    jointLimitsMin(I, g) {
        return A.rawimpulsejointset_jointLimitsMin(this.ptr, I, g);
    }
    jointLimitsMax(I, g) {
        return A.rawimpulsejointset_jointLimitsMax(this.ptr, I, g);
    }
    jointSetLimits(I, g, C, B) {
        A.rawimpulsejointset_jointSetLimits(this.ptr, I, g, C, B);
    }
    jointConfigureMotorModel(I, g, C) {
        A.rawimpulsejointset_jointConfigureMotorModel(this.ptr, I, g, C);
    }
    jointConfigureMotorVelocity(I, g, C, B) {
        A.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, I, g, C, B);
    }
    jointConfigureMotorPosition(I, g, C, B, Q) {
        A.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, I, g, C, B, Q);
    }
    jointConfigureMotor(I, g, C, B, Q, E) {
        A.rawimpulsejointset_jointConfigureMotor(this.ptr, I, g, C, B, Q, E);
    }
    constructor(){
        const I = A.rawimpulsejointset_new();
        return n.__wrap(I);
    }
    createJoint(I, g, C, B) {
        a(I, O);
        return A.rawimpulsejointset_createJoint(this.ptr, I.ptr, g, C, B);
    }
    remove(I, g) {
        A.rawimpulsejointset_remove(this.ptr, I, g);
    }
    len() {
        return A.rawimpulsejointset_len(this.ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawimpulsejointset_contains(this.ptr, I);
    }
    forEachJointHandle(g) {
        try {
            A.rawimpulsejointset_forEachJointHandle(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g, C) {
        try {
            A.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, g, J(C));
        } finally{
            I[y++] = void 0;
        }
    }
}
class Z {
    static __wrap(A) {
        const I = Object.create(Z.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawintegrationparameters_free(I);
    }
    constructor(){
        const I = A.rawintegrationparameters_new();
        return Z.__wrap(I);
    }
    get dt() {
        return A.rawintegrationparameters_dt(this.ptr);
    }
    get erp() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    get allowedLinearError() {
        return A.rawintegrationparameters_allowedLinearError(this.ptr);
    }
    get predictionDistance() {
        return A.rawintegrationparameters_predictionDistance(this.ptr);
    }
    get maxVelocityIterations() {
        return A.rawintegrationparameters_maxVelocityIterations(this.ptr) >>> 0;
    }
    get maxVelocityFrictionIterations() {
        return A.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr) >>> 0;
    }
    get maxStabilizationIterations() {
        return A.rawintegrationparameters_maxStabilizationIterations(this.ptr) >>> 0;
    }
    get minIslandSize() {
        return A.rawintegrationparameters_minIslandSize(this.ptr) >>> 0;
    }
    get maxCcdSubsteps() {
        return A.rawintegrationparameters_maxCcdSubsteps(this.ptr) >>> 0;
    }
    set dt(I) {
        A.rawintegrationparameters_set_dt(this.ptr, I);
    }
    set erp(I) {
        A.rawintegrationparameters_set_erp(this.ptr, I);
    }
    set allowedLinearError(I) {
        A.rawintegrationparameters_set_allowedLinearError(this.ptr, I);
    }
    set predictionDistance(I) {
        A.rawintegrationparameters_set_predictionDistance(this.ptr, I);
    }
    set maxVelocityIterations(I) {
        A.rawintegrationparameters_set_maxVelocityIterations(this.ptr, I);
    }
    set maxVelocityFrictionIterations(I) {
        A.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, I);
    }
    set maxStabilizationIterations(I) {
        A.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, I);
    }
    set minIslandSize(I) {
        A.rawintegrationparameters_set_minIslandSize(this.ptr, I);
    }
    set maxCcdSubsteps(I) {
        A.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, I);
    }
}
class b {
    static __wrap(A) {
        const I = Object.create(b.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawislandmanager_free(I);
    }
    constructor(){
        const I = A.rawislandmanager_new();
        return b.__wrap(I);
    }
    forEachActiveRigidBodyHandle(g) {
        try {
            A.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
}
class W {
    static __wrap(A) {
        const I = Object.create(W.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawkinematiccharactercontroller_free(I);
    }
    constructor(I){
        const g = A.rawkinematiccharactercontroller_new(I);
        return W.__wrap(g);
    }
    up() {
        const I = A.rawkinematiccharactercontroller_up(this.ptr);
        return QA.__wrap(I);
    }
    setUp(I) {
        a(I, QA), A.rawkinematiccharactercontroller_setUp(this.ptr, I.ptr);
    }
    offset() {
        return A.rawkinematiccharactercontroller_offset(this.ptr);
    }
    setOffset(I) {
        A.rawkinematiccharactercontroller_setOffset(this.ptr, I);
    }
    slideEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_slideEnabled(this.ptr);
    }
    setSlideEnabled(I) {
        A.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, I);
    }
    autostepMaxHeight() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMaxHeight(C, this.ptr);
            var I = G()[C / 4 + 0], g = K()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepMinWidth() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMinWidth(C, this.ptr);
            var I = G()[C / 4 + 0], g = K()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepIncludesDynamicBodies() {
        const I = A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
        return 16777215 === I ? void 0 : 0 !== I;
    }
    autostepEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_autostepEnabled(this.ptr);
    }
    enableAutostep(I, g, C) {
        A.rawkinematiccharactercontroller_enableAutostep(this.ptr, I, g, C);
    }
    disableAutostep() {
        A.rawkinematiccharactercontroller_disableAutostep(this.ptr);
    }
    maxSlopeClimbAngle() {
        return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
    }
    setMaxSlopeClimbAngle(I) {
        A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, I);
    }
    minSlopeSlideAngle() {
        return A.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
    }
    setMinSlopeSlideAngle(I) {
        A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, I);
    }
    snapToGroundDistance() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_snapToGroundDistance(C, this.ptr);
            var I = G()[C / 4 + 0], g = K()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    enableSnapToGround(I) {
        A.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, I);
    }
    disableSnapToGround() {
        A.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
    }
    snapToGroundEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr);
    }
    computeColliderMovement(g, C, B, Q, i, D, o, G, w, k, S) {
        try {
            a(C, v), a(B, l), a(Q, V), a(D, QA), A.rawkinematiccharactercontroller_computeColliderMovement(this.ptr, g, C.ptr, B.ptr, Q.ptr, i, D.ptr, o, !E(G), E(G) ? 0 : G, w, !E(k), E(k) ? 0 : k, J(S));
        } finally{
            I[y++] = void 0;
        }
    }
    computedMovement() {
        const I = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return QA.__wrap(I);
    }
    computedGrounded() {
        return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    }
    numComputedCollisions() {
        return A.rawkinematiccharactercontroller_numComputedCollisions(this.ptr) >>> 0;
    }
    computedCollision(I, g) {
        a(g, H);
        return 0 !== A.rawkinematiccharactercontroller_computedCollision(this.ptr, I, g.ptr);
    }
}
class j {
    static __wrap(A) {
        const I = Object.create(j.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawmultibodyjointset_free(I);
    }
    jointType(I) {
        return A.rawmultibodyjointset_jointType(this.ptr, I) >>> 0;
    }
    jointFrameX1(I) {
        const g = A.rawmultibodyjointset_jointFrameX1(this.ptr, I);
        return _.__wrap(g);
    }
    jointFrameX2(I) {
        const g = A.rawmultibodyjointset_jointFrameX2(this.ptr, I);
        return _.__wrap(g);
    }
    jointAnchor1(I) {
        const g = A.rawmultibodyjointset_jointAnchor1(this.ptr, I);
        return QA.__wrap(g);
    }
    jointAnchor2(I) {
        const g = A.rawmultibodyjointset_jointAnchor2(this.ptr, I);
        return QA.__wrap(g);
    }
    jointContactsEnabled(I) {
        return 0 !== A.rawmultibodyjointset_jointContactsEnabled(this.ptr, I);
    }
    jointSetContactsEnabled(I, g) {
        A.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, I, g);
    }
    jointLimitsEnabled(I, g) {
        return 0 !== A.rawmultibodyjointset_jointLimitsEnabled(this.ptr, I, g);
    }
    jointLimitsMin(I, g) {
        return A.rawmultibodyjointset_jointLimitsMin(this.ptr, I, g);
    }
    jointLimitsMax(I, g) {
        return A.rawmultibodyjointset_jointLimitsMax(this.ptr, I, g);
    }
    constructor(){
        const I = A.rawmultibodyjointset_new();
        return j.__wrap(I);
    }
    createJoint(I, g, C, B) {
        a(I, O);
        return A.rawmultibodyjointset_createJoint(this.ptr, I.ptr, g, C, B);
    }
    remove(I, g) {
        A.rawmultibodyjointset_remove(this.ptr, I, g);
    }
    contains(I) {
        return 0 !== A.rawmultibodyjointset_contains(this.ptr, I);
    }
    forEachJointHandle(g) {
        try {
            A.rawmultibodyjointset_forEachJointHandle(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g, C) {
        try {
            A.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, g, J(C));
        } finally{
            I[y++] = void 0;
        }
    }
}
class x {
    static __wrap(A) {
        const I = Object.create(x.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawnarrowphase_free(I);
    }
    constructor(){
        const I = A.rawnarrowphase_new();
        return x.__wrap(I);
    }
    contacts_with(I, g) {
        A.rawnarrowphase_contacts_with(this.ptr, I, Q(g));
    }
    contact_pair(I, g) {
        const C = A.rawnarrowphase_contact_pair(this.ptr, I, g);
        return 0 === C ? void 0 : e.__wrap(C);
    }
    intersections_with(I, g) {
        A.rawnarrowphase_intersections_with(this.ptr, I, Q(g));
    }
    intersection_pair(I, g) {
        return 0 !== A.rawnarrowphase_intersection_pair(this.ptr, I, g);
    }
}
class f {
    static __wrap(A) {
        const I = Object.create(f.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawphysicspipeline_free(I);
    }
    constructor(){
        const I = A.rawphysicspipeline_new();
        return f.__wrap(I);
    }
    step(I, g, C, B, Q, E, i, D, o, G) {
        a(I, QA), a(g, Z), a(C, b), a(B, Y), a(Q, x), a(E, v), a(i, l), a(D, n), a(o, j), a(G, L), A.rawphysicspipeline_step(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, E.ptr, i.ptr, D.ptr, o.ptr, G.ptr);
    }
    stepWithEvents(I, g, C, B, E, i, D, o, G, w, k, S, M, K) {
        a(I, QA), a(g, Z), a(C, b), a(B, Y), a(E, x), a(i, v), a(D, l), a(o, n), a(G, j), a(w, L), a(k, T), A.rawphysicspipeline_stepWithEvents(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, E.ptr, i.ptr, D.ptr, o.ptr, G.ptr, w.ptr, k.ptr, Q(S), Q(M), Q(K));
    }
}
class m {
    static __wrap(A) {
        const I = Object.create(m.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawpointcolliderprojection_free(I);
    }
    colliderHandle() {
        return A.rawpointcolliderprojection_colliderHandle(this.ptr);
    }
    point() {
        const I = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return QA.__wrap(I);
    }
    isInside() {
        return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C, this.ptr);
            var I = G()[C / 4 + 0], g = G()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
class X {
    static __wrap(A) {
        const I = Object.create(X.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawpointprojection_free(I);
    }
    point() {
        const I = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return QA.__wrap(I);
    }
    isInside() {
        return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    }
}
class V {
    static __wrap(A) {
        const I = Object.create(V.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawquerypipeline_free(I);
    }
    constructor(){
        const I = A.rawquerypipeline_new();
        return V.__wrap(I);
    }
    update(I, g) {
        a(I, v), a(g, l), A.rawquerypipeline_update(this.ptr, I.ptr, g.ptr);
    }
    castRay(g, C, B, Q, i, D, o, G, w, k, S) {
        try {
            a(g, v), a(C, l), a(B, QA), a(Q, QA);
            const M = A.rawquerypipeline_castRay(this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i, D, o, !E(G), E(G) ? 0 : G, !E(w), E(w) ? 0 : w, !E(k), E(k) ? 0 : k, J(S));
            return 0 === M ? void 0 : z.__wrap(M);
        } finally{
            I[y++] = void 0;
        }
    }
    castRayAndGetNormal(g, C, B, Q, i, D, o, G, w, k, S) {
        try {
            a(g, v), a(C, l), a(B, QA), a(Q, QA);
            const M = A.rawquerypipeline_castRayAndGetNormal(this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i, D, o, !E(G), E(G) ? 0 : G, !E(w), E(w) ? 0 : w, !E(k), E(k) ? 0 : k, J(S));
            return 0 === M ? void 0 : P.__wrap(M);
        } finally{
            I[y++] = void 0;
        }
    }
    intersectionsWithRay(g, C, B, Q, i, D, o, G, w, k, S, M) {
        try {
            a(g, v), a(C, l), a(B, QA), a(Q, QA), A.rawquerypipeline_intersectionsWithRay(this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i, D, J(o), G, !E(w), E(w) ? 0 : w, !E(k), E(k) ? 0 : k, !E(S), E(S) ? 0 : S, J(M));
        } finally{
            I[y++] = void 0, I[y++] = void 0;
        }
    }
    intersectionWithShape(g, C, B, Q, i, o, w, k, S, M) {
        try {
            const h = A.__wbindgen_add_to_stack_pointer(-16);
            a(g, v), a(C, l), a(B, QA), a(Q, _), a(i, IA), A.rawquerypipeline_intersectionWithShape(h, this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i.ptr, o, !E(w), E(w) ? 0 : w, !E(k), E(k) ? 0 : k, !E(S), E(S) ? 0 : S, J(M));
            var K = G()[h / 4 + 0], U = D()[h / 8 + 1];
            return 0 === K ? void 0 : U;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16), I[y++] = void 0;
        }
    }
    projectPoint(g, C, B, Q, i, D, o, G, w) {
        try {
            a(g, v), a(C, l), a(B, QA);
            const k = A.rawquerypipeline_projectPoint(this.ptr, g.ptr, C.ptr, B.ptr, Q, i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, !E(G), E(G) ? 0 : G, J(w));
            return 0 === k ? void 0 : m.__wrap(k);
        } finally{
            I[y++] = void 0;
        }
    }
    projectPointAndGetFeature(g, C, B, Q, i, D, o, G) {
        try {
            a(g, v), a(C, l), a(B, QA);
            const w = A.rawquerypipeline_projectPointAndGetFeature(this.ptr, g.ptr, C.ptr, B.ptr, Q, !E(i), E(i) ? 0 : i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, J(G));
            return 0 === w ? void 0 : m.__wrap(w);
        } finally{
            I[y++] = void 0;
        }
    }
    intersectionsWithPoint(g, C, B, Q, i, D, o, G, w) {
        try {
            a(g, v), a(C, l), a(B, QA), A.rawquerypipeline_intersectionsWithPoint(this.ptr, g.ptr, C.ptr, B.ptr, J(Q), i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, !E(G), E(G) ? 0 : G, J(w));
        } finally{
            I[y++] = void 0, I[y++] = void 0;
        }
    }
    castShape(g, C, B, Q, i, D, o, G, w, k, S, M, K) {
        try {
            a(g, v), a(C, l), a(B, QA), a(Q, _), a(i, QA), a(D, IA);
            const U = A.rawquerypipeline_castShape(this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i.ptr, D.ptr, o, G, w, !E(k), E(k) ? 0 : k, !E(S), E(S) ? 0 : S, !E(M), E(M) ? 0 : M, J(K));
            return 0 === U ? void 0 : gA.__wrap(U);
        } finally{
            I[y++] = void 0;
        }
    }
    intersectionsWithShape(g, C, B, Q, i, D, o, G, w, k, S) {
        try {
            a(g, v), a(C, l), a(B, QA), a(Q, _), a(i, IA), A.rawquerypipeline_intersectionsWithShape(this.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, i.ptr, J(D), o, !E(G), E(G) ? 0 : G, !E(w), E(w) ? 0 : w, !E(k), E(k) ? 0 : k, J(S));
        } finally{
            I[y++] = void 0, I[y++] = void 0;
        }
    }
    collidersWithAabbIntersectingAabb(g, C, B) {
        try {
            a(g, QA), a(C, QA), A.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, g.ptr, C.ptr, J(B));
        } finally{
            I[y++] = void 0;
        }
    }
}
class P {
    static __wrap(A) {
        const I = Object.create(P.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawraycolliderintersection_free(I);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.ptr);
    }
    normal() {
        const I = A.rawraycolliderintersection_normal(this.ptr);
        return QA.__wrap(I);
    }
    toi() {
        return A.rawraycolliderintersection_toi(this.ptr);
    }
    featureType() {
        return A.rawraycolliderintersection_featureType(this.ptr) >>> 0;
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawraycolliderintersection_featureId(C, this.ptr);
            var I = G()[C / 4 + 0], g = G()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
class z {
    static __wrap(A) {
        const I = Object.create(z.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawraycollidertoi_free(I);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.ptr);
    }
    toi() {
        return A.rawcharactercollision_toi(this.ptr);
    }
}
class u {
    static __wrap(A) {
        const I = Object.create(u.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrayintersection_free(I);
    }
    normal() {
        const I = A.rawcharactercollision_worldWitness1(this.ptr);
        return QA.__wrap(I);
    }
    toi() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    featureType() {
        return A.rawrayintersection_featureType(this.ptr) >>> 0;
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawrayintersection_featureId(C, this.ptr);
            var I = G()[C / 4 + 0], g = G()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
class v {
    static __wrap(A) {
        const I = Object.create(v.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrigidbodyset_free(I);
    }
    rbTranslation(I) {
        const g = A.rawrigidbodyset_rbTranslation(this.ptr, I);
        return QA.__wrap(g);
    }
    rbRotation(I) {
        const g = A.rawrigidbodyset_rbRotation(this.ptr, I);
        return _.__wrap(g);
    }
    rbSleep(I) {
        A.rawrigidbodyset_rbSleep(this.ptr, I);
    }
    rbIsSleeping(I) {
        return 0 !== A.rawrigidbodyset_rbIsSleeping(this.ptr, I);
    }
    rbIsMoving(I) {
        return 0 !== A.rawrigidbodyset_rbIsMoving(this.ptr, I);
    }
    rbNextTranslation(I) {
        const g = A.rawrigidbodyset_rbNextTranslation(this.ptr, I);
        return QA.__wrap(g);
    }
    rbNextRotation(I) {
        const g = A.rawrigidbodyset_rbNextRotation(this.ptr, I);
        return _.__wrap(g);
    }
    rbSetTranslation(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetTranslation(this.ptr, I, g, C, B, Q);
    }
    rbSetRotation(I, g, C, B, Q, E) {
        A.rawrigidbodyset_rbSetRotation(this.ptr, I, g, C, B, Q, E);
    }
    rbSetLinvel(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbSetLinvel(this.ptr, I, g.ptr, C);
    }
    rbSetAngvel(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbSetAngvel(this.ptr, I, g.ptr, C);
    }
    rbSetNextKinematicTranslation(I, g, C, B) {
        A.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, I, g, C, B);
    }
    rbSetNextKinematicRotation(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, I, g, C, B, Q);
    }
    rbRecomputeMassPropertiesFromColliders(I, g) {
        a(g, l), A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, I, g.ptr);
    }
    rbSetAdditionalMass(I, g, C) {
        A.rawrigidbodyset_rbSetAdditionalMass(this.ptr, I, g, C);
    }
    rbSetAdditionalMassProperties(I, g, C, B, Q, E) {
        a(C, QA), a(B, QA), a(Q, _), A.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, I, g, C.ptr, B.ptr, Q.ptr, E);
    }
    rbLinvel(I) {
        const g = A.rawrigidbodyset_rbLinvel(this.ptr, I);
        return QA.__wrap(g);
    }
    rbAngvel(I) {
        const g = A.rawrigidbodyset_rbAngvel(this.ptr, I);
        return QA.__wrap(g);
    }
    rbLockTranslations(I, g, C) {
        A.rawrigidbodyset_rbLockTranslations(this.ptr, I, g, C);
    }
    rbSetEnabledTranslations(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, I, g, C, B, Q);
    }
    rbLockRotations(I, g, C) {
        A.rawrigidbodyset_rbLockRotations(this.ptr, I, g, C);
    }
    rbSetEnabledRotations(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetEnabledRotations(this.ptr, I, g, C, B, Q);
    }
    rbDominanceGroup(I) {
        return A.rawrigidbodyset_rbDominanceGroup(this.ptr, I);
    }
    rbSetDominanceGroup(I, g) {
        A.rawrigidbodyset_rbSetDominanceGroup(this.ptr, I, g);
    }
    rbEnableCcd(I, g) {
        A.rawrigidbodyset_rbEnableCcd(this.ptr, I, g);
    }
    rbMass(I) {
        return A.rawrigidbodyset_rbMass(this.ptr, I);
    }
    rbInvMass(I) {
        return A.rawrigidbodyset_rbInvMass(this.ptr, I);
    }
    rbEffectiveInvMass(I) {
        const g = A.rawrigidbodyset_rbEffectiveInvMass(this.ptr, I);
        return QA.__wrap(g);
    }
    rbLocalCom(I) {
        const g = A.rawrigidbodyset_rbLocalCom(this.ptr, I);
        return QA.__wrap(g);
    }
    rbWorldCom(I) {
        const g = A.rawrigidbodyset_rbWorldCom(this.ptr, I);
        return QA.__wrap(g);
    }
    rbInvPrincipalInertiaSqrt(I) {
        const g = A.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, I);
        return QA.__wrap(g);
    }
    rbPrincipalInertiaLocalFrame(I) {
        const g = A.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, I);
        return _.__wrap(g);
    }
    rbPrincipalInertia(I) {
        const g = A.rawrigidbodyset_rbPrincipalInertia(this.ptr, I);
        return QA.__wrap(g);
    }
    rbEffectiveWorldInvInertiaSqrt(I) {
        const g = A.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, I);
        return $.__wrap(g);
    }
    rbEffectiveAngularInertia(I) {
        const g = A.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, I);
        return $.__wrap(g);
    }
    rbWakeUp(I) {
        A.rawrigidbodyset_rbWakeUp(this.ptr, I);
    }
    rbIsCcdEnabled(I) {
        return 0 !== A.rawrigidbodyset_rbIsCcdEnabled(this.ptr, I);
    }
    rbNumColliders(I) {
        return A.rawrigidbodyset_rbNumColliders(this.ptr, I) >>> 0;
    }
    rbCollider(I, g) {
        return A.rawrigidbodyset_rbCollider(this.ptr, I, g);
    }
    rbBodyType(I) {
        return A.rawrigidbodyset_rbBodyType(this.ptr, I) >>> 0;
    }
    rbSetBodyType(I, g, C) {
        A.rawrigidbodyset_rbSetBodyType(this.ptr, I, g, C);
    }
    rbIsFixed(I) {
        return 0 !== A.rawrigidbodyset_rbIsFixed(this.ptr, I);
    }
    rbIsKinematic(I) {
        return 0 !== A.rawrigidbodyset_rbIsKinematic(this.ptr, I);
    }
    rbIsDynamic(I) {
        return 0 !== A.rawrigidbodyset_rbIsDynamic(this.ptr, I);
    }
    rbLinearDamping(I) {
        return A.rawrigidbodyset_rbLinearDamping(this.ptr, I);
    }
    rbAngularDamping(I) {
        return A.rawrigidbodyset_rbAngularDamping(this.ptr, I);
    }
    rbSetLinearDamping(I, g) {
        A.rawrigidbodyset_rbSetLinearDamping(this.ptr, I, g);
    }
    rbSetAngularDamping(I, g) {
        A.rawrigidbodyset_rbSetAngularDamping(this.ptr, I, g);
    }
    rbSetEnabled(I, g) {
        A.rawrigidbodyset_rbSetEnabled(this.ptr, I, g);
    }
    rbIsEnabled(I) {
        return 0 !== A.rawrigidbodyset_rbIsEnabled(this.ptr, I);
    }
    rbGravityScale(I) {
        return A.rawrigidbodyset_rbGravityScale(this.ptr, I);
    }
    rbSetGravityScale(I, g, C) {
        A.rawrigidbodyset_rbSetGravityScale(this.ptr, I, g, C);
    }
    rbResetForces(I, g) {
        A.rawrigidbodyset_rbResetForces(this.ptr, I, g);
    }
    rbResetTorques(I, g) {
        A.rawrigidbodyset_rbResetTorques(this.ptr, I, g);
    }
    rbAddForce(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbAddForce(this.ptr, I, g.ptr, C);
    }
    rbApplyImpulse(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbApplyImpulse(this.ptr, I, g.ptr, C);
    }
    rbAddTorque(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbAddTorque(this.ptr, I, g.ptr, C);
    }
    rbApplyTorqueImpulse(I, g, C) {
        a(g, QA), A.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, I, g.ptr, C);
    }
    rbAddForceAtPoint(I, g, C, B) {
        a(g, QA), a(C, QA), A.rawrigidbodyset_rbAddForceAtPoint(this.ptr, I, g.ptr, C.ptr, B);
    }
    rbApplyImpulseAtPoint(I, g, C, B) {
        a(g, QA), a(C, QA), A.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, I, g.ptr, C.ptr, B);
    }
    rbUserData(I) {
        return A.rawrigidbodyset_rbUserData(this.ptr, I) >>> 0;
    }
    rbSetUserData(I, g) {
        A.rawrigidbodyset_rbSetUserData(this.ptr, I, g);
    }
    constructor(){
        const I = A.rawrigidbodyset_new();
        return v.__wrap(I);
    }
    createRigidBody(I, g, C, B, Q, E, i, D, o, G, w, k, S, M, K, y, J, U, h, N, F, q, R, s) {
        a(g, QA), a(C, _), a(i, QA), a(D, QA), a(o, QA), a(G, QA), a(w, _);
        return A.rawrigidbodyset_createRigidBody(this.ptr, I, g.ptr, C.ptr, B, Q, E, i.ptr, D.ptr, o.ptr, G.ptr, w.ptr, k, S, M, K, y, J, U, h, N, F, q, R, s);
    }
    remove(I, g, C, B, Q) {
        a(g, b), a(C, l), a(B, n), a(Q, j), A.rawrigidbodyset_remove(this.ptr, I, g.ptr, C.ptr, B.ptr, Q.ptr);
    }
    len() {
        return A.rawrigidbodyset_len(this.ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawrigidbodyset_contains(this.ptr, I);
    }
    forEachRigidBodyHandle(g) {
        try {
            A.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, J(g));
        } finally{
            I[y++] = void 0;
        }
    }
    propagateModifiedBodyPositionsToColliders(I) {
        a(I, l), A.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.ptr, I.ptr);
    }
}
class _ {
    static __wrap(A) {
        const I = Object.create(_.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrotation_free(I);
    }
    constructor(I, g, C, B){
        const Q = A.rawrotation_new(I, g, C, B);
        return _.__wrap(Q);
    }
    static identity() {
        const I = A.rawrotation_identity();
        return _.__wrap(I);
    }
    get x() {
        return A.rawintegrationparameters_dt(this.ptr);
    }
    get y() {
        return A.rawrotation_y(this.ptr);
    }
    get z() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    get w() {
        return A.rawrotation_w(this.ptr);
    }
}
class $ {
    static __wrap(A) {
        const I = Object.create($.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawsdpmatrix3_free(I);
    }
    elements() {
        return B(A.rawsdpmatrix3_elements(this.ptr));
    }
}
class AA {
    static __wrap(A) {
        const I = Object.create(AA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawserializationpipeline_free(I);
    }
    constructor(){
        const I = A.rawserializationpipeline_new();
        return AA.__wrap(I);
    }
    serializeAll(I, g, C, Q, E, i, D, o, G) {
        a(I, QA), a(g, Z), a(C, b), a(Q, Y), a(E, x), a(i, v), a(D, l), a(o, n), a(G, j);
        return B(A.rawserializationpipeline_serializeAll(this.ptr, I.ptr, g.ptr, C.ptr, Q.ptr, E.ptr, i.ptr, D.ptr, o.ptr, G.ptr));
    }
    deserializeAll(I) {
        const g = A.rawserializationpipeline_deserializeAll(this.ptr, Q(I));
        return 0 === g ? void 0 : d.__wrap(g);
    }
}
class IA {
    static __wrap(A) {
        const I = Object.create(IA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshape_free(I);
    }
    static cuboid(I, g, C) {
        const B = A.rawshape_cuboid(I, g, C);
        return IA.__wrap(B);
    }
    static roundCuboid(I, g, C, B) {
        const Q = A.rawshape_roundCuboid(I, g, C, B);
        return IA.__wrap(Q);
    }
    static ball(I) {
        const g = A.rawshape_ball(I);
        return IA.__wrap(g);
    }
    static halfspace(I) {
        a(I, QA);
        const g = A.rawshape_halfspace(I.ptr);
        return IA.__wrap(g);
    }
    static capsule(I, g) {
        const C = A.rawshape_capsule(I, g);
        return IA.__wrap(C);
    }
    static cylinder(I, g) {
        const C = A.rawshape_cylinder(I, g);
        return IA.__wrap(C);
    }
    static roundCylinder(I, g, C) {
        const B = A.rawshape_roundCylinder(I, g, C);
        return IA.__wrap(B);
    }
    static cone(I, g) {
        const C = A.rawshape_cone(I, g);
        return IA.__wrap(C);
    }
    static roundCone(I, g, C) {
        const B = A.rawshape_roundCone(I, g, C);
        return IA.__wrap(B);
    }
    static polyline(I, g) {
        const C = q(I, A.__wbindgen_malloc), B = F, Q = R(g, A.__wbindgen_malloc), E = F, i = A.rawshape_polyline(C, B, Q, E);
        return IA.__wrap(i);
    }
    static trimesh(I, g) {
        const C = q(I, A.__wbindgen_malloc), B = F, Q = R(g, A.__wbindgen_malloc), E = F, i = A.rawshape_trimesh(C, B, Q, E);
        return IA.__wrap(i);
    }
    static heightfield(I, g, C, B) {
        const Q = q(C, A.__wbindgen_malloc), E = F;
        a(B, QA);
        const i = A.rawshape_heightfield(I, g, Q, E, B.ptr);
        return IA.__wrap(i);
    }
    static segment(I, g) {
        a(I, QA), a(g, QA);
        const C = A.rawshape_segment(I.ptr, g.ptr);
        return IA.__wrap(C);
    }
    static triangle(I, g, C) {
        a(I, QA), a(g, QA), a(C, QA);
        const B = A.rawshape_triangle(I.ptr, g.ptr, C.ptr);
        return IA.__wrap(B);
    }
    static roundTriangle(I, g, C, B) {
        a(I, QA), a(g, QA), a(C, QA);
        const Q = A.rawshape_roundTriangle(I.ptr, g.ptr, C.ptr, B);
        return IA.__wrap(Q);
    }
    static convexHull(I) {
        const g = q(I, A.__wbindgen_malloc), C = F, B = A.rawshape_convexHull(g, C);
        return 0 === B ? void 0 : IA.__wrap(B);
    }
    static roundConvexHull(I, g) {
        const C = q(I, A.__wbindgen_malloc), B = F, Q = A.rawshape_roundConvexHull(C, B, g);
        return 0 === Q ? void 0 : IA.__wrap(Q);
    }
    static convexMesh(I, g) {
        const C = q(I, A.__wbindgen_malloc), B = F, Q = R(g, A.__wbindgen_malloc), E = F, i = A.rawshape_convexMesh(C, B, Q, E);
        return 0 === i ? void 0 : IA.__wrap(i);
    }
    static roundConvexMesh(I, g, C) {
        const B = q(I, A.__wbindgen_malloc), Q = F, E = R(g, A.__wbindgen_malloc), i = F, D = A.rawshape_roundConvexMesh(B, Q, E, i, C);
        return 0 === D ? void 0 : IA.__wrap(D);
    }
    castShape(I, g, C, B, Q, E, i, D, o) {
        a(I, QA), a(g, _), a(C, QA), a(B, IA), a(Q, QA), a(E, _), a(i, QA);
        const G = A.rawshape_castShape(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, E.ptr, i.ptr, D, o);
        return 0 === G ? void 0 : BA.__wrap(G);
    }
    intersectsShape(I, g, C, B, Q) {
        a(I, QA), a(g, _), a(C, IA), a(B, QA), a(Q, _);
        return 0 !== A.rawshape_intersectsShape(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q.ptr);
    }
    contactShape(I, g, C, B, Q, E) {
        a(I, QA), a(g, _), a(C, IA), a(B, QA), a(Q, _);
        const i = A.rawshape_contactShape(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q.ptr, E);
        return 0 === i ? void 0 : CA.__wrap(i);
    }
    containsPoint(I, g, C) {
        a(I, QA), a(g, _), a(C, QA);
        return 0 !== A.rawshape_containsPoint(this.ptr, I.ptr, g.ptr, C.ptr);
    }
    projectPoint(I, g, C, B) {
        a(I, QA), a(g, _), a(C, QA);
        const Q = A.rawshape_projectPoint(this.ptr, I.ptr, g.ptr, C.ptr, B);
        return X.__wrap(Q);
    }
    intersectsRay(I, g, C, B, Q) {
        a(I, QA), a(g, _), a(C, QA), a(B, QA);
        return 0 !== A.rawshape_intersectsRay(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q);
    }
    castRay(I, g, C, B, Q, E) {
        a(I, QA), a(g, _), a(C, QA), a(B, QA);
        return A.rawshape_castRay(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q, E);
    }
    castRayAndGetNormal(I, g, C, B, Q, E) {
        a(I, QA), a(g, _), a(C, QA), a(B, QA);
        const i = A.rawshape_castRayAndGetNormal(this.ptr, I.ptr, g.ptr, C.ptr, B.ptr, Q, E);
        return 0 === i ? void 0 : u.__wrap(i);
    }
}
class gA {
    static __wrap(A) {
        const I = Object.create(gA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshapecollidertoi_free(I);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.ptr);
    }
    toi() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    witness1() {
        const I = A.rawcharactercollision_worldWitness1(this.ptr);
        return QA.__wrap(I);
    }
    witness2() {
        const I = A.rawshapecollidertoi_witness2(this.ptr);
        return QA.__wrap(I);
    }
    normal1() {
        const I = A.rawcharactercollision_worldNormal1(this.ptr);
        return QA.__wrap(I);
    }
    normal2() {
        const I = A.rawshapecollidertoi_normal2(this.ptr);
        return QA.__wrap(I);
    }
}
class CA {
    static __wrap(A) {
        const I = Object.create(CA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshapecontact_free(I);
    }
    distance() {
        return A.rawshapecontact_distance(this.ptr);
    }
    point1() {
        const I = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return QA.__wrap(I);
    }
    point2() {
        const I = A.rawcharactercollision_worldWitness1(this.ptr);
        return QA.__wrap(I);
    }
    normal1() {
        const I = A.rawshapecollidertoi_witness2(this.ptr);
        return QA.__wrap(I);
    }
    normal2() {
        const I = A.rawcharactercollision_worldNormal1(this.ptr);
        return QA.__wrap(I);
    }
}
class BA {
    static __wrap(A) {
        const I = Object.create(BA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshapetoi_free(I);
    }
    toi() {
        return A.rawintegrationparameters_dt(this.ptr);
    }
    witness1() {
        const I = A.rawshapetoi_witness1(this.ptr);
        return QA.__wrap(I);
    }
    witness2() {
        const I = A.rawcontactforceevent_total_force(this.ptr);
        return QA.__wrap(I);
    }
    normal1() {
        const I = A.rawshapetoi_normal1(this.ptr);
        return QA.__wrap(I);
    }
    normal2() {
        const I = A.rawshapetoi_normal2(this.ptr);
        return QA.__wrap(I);
    }
}
class QA {
    static __wrap(A) {
        const I = Object.create(QA.prototype);
        return I.ptr = A, I;
    }
    __destroy_into_raw() {
        const A = this.ptr;
        return this.ptr = 0, A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawvector_free(I);
    }
    static zero() {
        const I = A.rawvector_zero();
        return QA.__wrap(I);
    }
    constructor(I, g, C){
        const B = A.rawvector_new(I, g, C);
        return QA.__wrap(B);
    }
    get x() {
        return A.rawintegrationparameters_dt(this.ptr);
    }
    set x(I) {
        A.rawintegrationparameters_set_dt(this.ptr, I);
    }
    get y() {
        return A.rawrotation_y(this.ptr);
    }
    set y(I) {
        A.rawvector_set_y(this.ptr, I);
    }
    get z() {
        return A.rawcharactercollision_toi(this.ptr);
    }
    set z(I) {
        A.rawintegrationparameters_set_erp(this.ptr, I);
    }
    xyz() {
        const I = A.rawvector_xyz(this.ptr);
        return QA.__wrap(I);
    }
    yxz() {
        const I = A.rawvector_yxz(this.ptr);
        return QA.__wrap(I);
    }
    zxy() {
        const I = A.rawvector_zxy(this.ptr);
        return QA.__wrap(I);
    }
    xzy() {
        const I = A.rawvector_xzy(this.ptr);
        return QA.__wrap(I);
    }
    yzx() {
        const I = A.rawvector_yzx(this.ptr);
        return QA.__wrap(I);
    }
    zyx() {
        const I = A.rawvector_zyx(this.ptr);
        return QA.__wrap(I);
    }
}
async function EA(I) {
    void 0 === I && (I = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
    const C = function() {
        const I = {
            wbg: {}
        };
        return I.wbg.__wbindgen_object_drop_ref = function(A) {
            B(A);
        }, I.wbg.__wbindgen_number_new = function(A) {
            return Q(A);
        }, I.wbg.__wbindgen_number_get = function(A, I) {
            const C = g(I), B = "number" == typeof C ? C : void 0;
            D()[A / 8 + 1] = E(B) ? 0 : B, G()[A / 4 + 0] = !E(B);
        }, I.wbg.__wbindgen_boolean_get = function(A) {
            const I = g(A);
            return "boolean" == typeof I ? I ? 1 : 0 : 2;
        }, I.wbg.__wbindgen_is_function = function(A) {
            return "function" == typeof g(A);
        }, I.wbg.__wbg_rawraycolliderintersection_new = function(A) {
            return Q(P.__wrap(A));
        }, I.wbg.__wbg_rawcontactforceevent_new = function(A) {
            return Q(t.__wrap(A));
        }, I.wbg.__wbg_call_168da88779e35f61 = function() {
            return s(function(A, I, C) {
                return Q(g(A).call(g(I), g(C)));
            }, arguments);
        }, I.wbg.__wbg_call_3999bee59e9f7719 = function() {
            return s(function(A, I, C, B) {
                return Q(g(A).call(g(I), g(C), g(B)));
            }, arguments);
        }, I.wbg.__wbg_call_e1f72c051cdab859 = function() {
            return s(function(A, I, C, B, E) {
                return Q(g(A).call(g(I), g(C), g(B), g(E)));
            }, arguments);
        }, I.wbg.__wbg_bind_10dfe70e95d2a480 = function(A, I, C, B) {
            return Q(g(A).bind(g(I), g(C), g(B)));
        }, I.wbg.__wbg_buffer_3f3d764d4747d564 = function(A) {
            return Q(g(A).buffer);
        }, I.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(A, I, C) {
            return Q(new Uint8Array(g(A), I >>> 0, C >>> 0));
        }, I.wbg.__wbg_new_8c3f0052272a457a = function(A) {
            return Q(new Uint8Array(g(A)));
        }, I.wbg.__wbg_set_83db9690f9353e79 = function(A, I, C) {
            g(A).set(g(I), C >>> 0);
        }, I.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(A) {
            return g(A).length;
        }, I.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4 = function(A, I, C) {
            return Q(new Float32Array(g(A), I >>> 0, C >>> 0));
        }, I.wbg.__wbg_set_0e0314cf6675c1b9 = function(A, I, C) {
            g(A).set(g(I), C >>> 0);
        }, I.wbg.__wbg_length_9a2deed95d22668d = function(A) {
            return g(A).length;
        }, I.wbg.__wbg_newwithlength_a7168e4a1e8f5e12 = function(A) {
            return Q(new Float32Array(A >>> 0));
        }, I.wbg.__wbindgen_throw = function(A, I) {
            throw new Error(S(A, I));
        }, I.wbg.__wbindgen_memory = function() {
            return Q(A.memory);
        }, I;
    }();
    ("string" == typeof I || "function" == typeof Request && I instanceof Request || "function" == typeof URL && I instanceof URL) && (I = fetch(I));
    const { instance: w, module: a } = await async function(A, I) {
        if ("function" == typeof Response && A instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming) try {
                return await WebAssembly.instantiateStreaming(A, I);
            } catch (I) {
                if ("application/wasm" == A.headers.get("Content-Type")) throw I;
                console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", I);
            }
            const g = await A.arrayBuffer();
            return await WebAssembly.instantiate(g, I);
        }
        {
            const g = await WebAssembly.instantiate(A, I);
            return g instanceof WebAssembly.Instance ? {
                instance: g,
                module: A
            } : g;
        }
    }(await I, C);
    return function(I, g) {
        return A = I.exports, EA.__wbindgen_wasm_module = g, M = new Float32Array, i = new Float64Array, o = new Int32Array, h = new Uint32Array, k = new Uint8Array, A;
    }(w, a);
}
class iA {
    constructor(A, I, g){
        this.x = A, this.y = I, this.z = g;
    }
}
class DA {
    static new(A, I, g) {
        return new iA(A, I, g);
    }
    static intoRaw(A) {
        return new QA(A.x, A.y, A.z);
    }
    static zeros() {
        return DA.new(0, 0, 0);
    }
    static fromRaw(A) {
        if (!A) return null;
        let I = DA.new(A.x, A.y, A.z);
        return A.free(), I;
    }
    static copy(A, I) {
        A.x = I.x, A.y = I.y, A.z = I.z;
    }
}
class oA {
    constructor(A, I, g, C){
        this.x = A, this.y = I, this.z = g, this.w = C;
    }
}
class GA {
    static identity() {
        return new oA(0, 0, 0, 1);
    }
    static fromRaw(A) {
        if (!A) return null;
        let I = new oA(A.x, A.y, A.z, A.w);
        return A.free(), I;
    }
    static intoRaw(A) {
        return new _(A.x, A.y, A.z, A.w);
    }
    static copy(A, I) {
        A.x = I.x, A.y = I.y, A.z = I.z, A.w = I.w;
    }
}
class wA {
    constructor(A){
        this.elements = A;
    }
    get m11() {
        return this.elements[0];
    }
    get m12() {
        return this.elements[1];
    }
    get m21() {
        return this.m12;
    }
    get m13() {
        return this.elements[2];
    }
    get m31() {
        return this.m13;
    }
    get m22() {
        return this.elements[3];
    }
    get m23() {
        return this.elements[4];
    }
    get m32() {
        return this.m23;
    }
    get m33() {
        return this.elements[5];
    }
}
class kA {
    static fromRaw(A) {
        const I = new wA(A.elements());
        return A.free(), I;
    }
}
var SA, aA, MA, KA, yA, JA, UA, hA, NA, FA, qA, RA;
!function(A) {
    A[A.Dynamic = 0] = "Dynamic", A[A.Fixed = 1] = "Fixed", A[A.KinematicPositionBased = 2] = "KinematicPositionBased", A[A.KinematicVelocityBased = 3] = "KinematicVelocityBased";
}(SA || (SA = {}));
class sA {
    constructor(A, I, g){
        this.rawSet = A, this.colliderSet = I, this.handle = g;
    }
    finalizeDeserialization(A) {
        this.colliderSet = A;
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    lockTranslations(A, I) {
        return this.rawSet.rbLockTranslations(this.handle, A, I);
    }
    lockRotations(A, I) {
        return this.rawSet.rbLockRotations(this.handle, A, I);
    }
    setEnabledTranslations(A, I, g, C) {
        return this.rawSet.rbSetEnabledTranslations(this.handle, A, I, g, C);
    }
    restrictTranslations(A, I, g, C) {
        this.setEnabledTranslations(A, I, g, C);
    }
    setEnabledRotations(A, I, g, C) {
        return this.rawSet.rbSetEnabledRotations(this.handle, A, I, g, C);
    }
    restrictRotations(A, I, g, C) {
        this.setEnabledRotations(A, I, g, C);
    }
    dominanceGroup() {
        return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(A) {
        this.rawSet.rbSetDominanceGroup(this.handle, A);
    }
    enableCcd(A) {
        this.rawSet.rbEnableCcd(this.handle, A);
    }
    translation() {
        let A = this.rawSet.rbTranslation(this.handle);
        return DA.fromRaw(A);
    }
    rotation() {
        let A = this.rawSet.rbRotation(this.handle);
        return GA.fromRaw(A);
    }
    nextTranslation() {
        let A = this.rawSet.rbNextTranslation(this.handle);
        return DA.fromRaw(A);
    }
    nextRotation() {
        let A = this.rawSet.rbNextRotation(this.handle);
        return GA.fromRaw(A);
    }
    setTranslation(A, I) {
        this.rawSet.rbSetTranslation(this.handle, A.x, A.y, A.z, I);
    }
    setLinvel(A, I) {
        let g = DA.intoRaw(A);
        this.rawSet.rbSetLinvel(this.handle, g, I), g.free();
    }
    gravityScale() {
        return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(A, I) {
        this.rawSet.rbSetGravityScale(this.handle, A, I);
    }
    setRotation(A, I) {
        this.rawSet.rbSetRotation(this.handle, A.x, A.y, A.z, A.w, I);
    }
    setAngvel(A, I) {
        let g = DA.intoRaw(A);
        this.rawSet.rbSetAngvel(this.handle, g, I), g.free();
    }
    setNextKinematicTranslation(A) {
        this.rawSet.rbSetNextKinematicTranslation(this.handle, A.x, A.y, A.z);
    }
    setNextKinematicRotation(A) {
        this.rawSet.rbSetNextKinematicRotation(this.handle, A.x, A.y, A.z, A.w);
    }
    linvel() {
        return DA.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    angvel() {
        return DA.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
        return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
        return DA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
        return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
        return DA.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
        return DA.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertiaSqrt() {
        return DA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
        return DA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
        return GA.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
        return kA.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
        return kA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
    }
    sleep() {
        this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
        this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
        return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
        return this.rawSet.rbNumColliders(this.handle);
    }
    collider(A) {
        return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A));
    }
    setEnabled(A) {
        this.rawSet.rbSetEnabled(this.handle, A);
    }
    isEnabled() {
        return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
        return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(A, I) {
        return this.rawSet.rbSetBodyType(this.handle, A, I);
    }
    isSleeping() {
        return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
        return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
        return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
        return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
        return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
        return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
        return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(A) {
        this.rawSet.rbSetLinearDamping(this.handle, A);
    }
    recomputeMassPropertiesFromColliders() {
        this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(A, I) {
        this.rawSet.rbSetAdditionalMass(this.handle, A, I);
    }
    setAdditionalMassProperties(A, I, g, C, B) {
        let Q = DA.intoRaw(I), E = DA.intoRaw(g), i = GA.intoRaw(C);
        this.rawSet.rbSetAdditionalMassProperties(this.handle, A, Q, E, i, B), Q.free(), E.free(), i.free();
    }
    setAngularDamping(A) {
        this.rawSet.rbSetAngularDamping(this.handle, A);
    }
    resetForces(A) {
        this.rawSet.rbResetForces(this.handle, A);
    }
    resetTorques(A) {
        this.rawSet.rbResetTorques(this.handle, A);
    }
    addForce(A, I) {
        const g = DA.intoRaw(A);
        this.rawSet.rbAddForce(this.handle, g, I), g.free();
    }
    applyImpulse(A, I) {
        const g = DA.intoRaw(A);
        this.rawSet.rbApplyImpulse(this.handle, g, I), g.free();
    }
    addTorque(A, I) {
        const g = DA.intoRaw(A);
        this.rawSet.rbAddTorque(this.handle, g, I), g.free();
    }
    applyTorqueImpulse(A, I) {
        const g = DA.intoRaw(A);
        this.rawSet.rbApplyTorqueImpulse(this.handle, g, I), g.free();
    }
    addForceAtPoint(A, I, g) {
        const C = DA.intoRaw(A), B = DA.intoRaw(I);
        this.rawSet.rbAddForceAtPoint(this.handle, C, B, g), C.free(), B.free();
    }
    applyImpulseAtPoint(A, I, g) {
        const C = DA.intoRaw(A), B = DA.intoRaw(I);
        this.rawSet.rbApplyImpulseAtPoint(this.handle, C, B, g), C.free(), B.free();
    }
}
class cA {
    constructor(A){
        this.enabled = !0, this.status = A, this.translation = DA.zeros(), this.rotation = GA.identity(), this.gravityScale = 1, this.linvel = DA.zeros(), this.mass = 0, this.massOnly = !1, this.centerOfMass = DA.zeros(), this.translationsEnabledX = !0, this.translationsEnabledY = !0, this.angvel = DA.zeros(), this.principalAngularInertia = DA.zeros(), this.angularInertiaLocalFrame = GA.identity(), this.translationsEnabledZ = !0, this.rotationsEnabledX = !0, this.rotationsEnabledY = !0, this.rotationsEnabledZ = !0, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = !0, this.sleeping = !1, this.ccdEnabled = !1, this.dominanceGroup = 0;
    }
    static dynamic() {
        return new cA(SA.Dynamic);
    }
    static kinematicPositionBased() {
        return new cA(SA.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
        return new cA(SA.KinematicVelocityBased);
    }
    static fixed() {
        return new cA(SA.Fixed);
    }
    static newDynamic() {
        return new cA(SA.Dynamic);
    }
    static newKinematicPositionBased() {
        return new cA(SA.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
        return new cA(SA.KinematicVelocityBased);
    }
    static newStatic() {
        return new cA(SA.Fixed);
    }
    setDominanceGroup(A) {
        return this.dominanceGroup = A, this;
    }
    setEnabled(A) {
        return this.enabled = A, this;
    }
    setTranslation(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The translation components must be numbers.");
        return this.translation = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setRotation(A) {
        return GA.copy(this.rotation, A), this;
    }
    setGravityScale(A) {
        return this.gravityScale = A, this;
    }
    setAdditionalMass(A) {
        return this.mass = A, this.massOnly = !0, this;
    }
    setLinvel(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The linvel components must be numbers.");
        return this.linvel = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setAngvel(A) {
        return DA.copy(this.angvel, A), this;
    }
    setAdditionalMassProperties(A, I, g, C) {
        return this.mass = A, DA.copy(this.centerOfMass, I), DA.copy(this.principalAngularInertia, g), GA.copy(this.angularInertiaLocalFrame, C), this.massOnly = !1, this;
    }
    enabledTranslations(A, I, g) {
        return this.translationsEnabledX = A, this.translationsEnabledY = I, this.translationsEnabledZ = g, this;
    }
    restrictTranslations(A, I, g) {
        return this.enabledTranslations(A, I, g);
    }
    lockTranslations() {
        return this.enabledTranslations(!1, !1, !1);
    }
    enabledRotations(A, I, g) {
        return this.rotationsEnabledX = A, this.rotationsEnabledY = I, this.rotationsEnabledZ = g, this;
    }
    restrictRotations(A, I, g) {
        return this.enabledRotations(A, I, g);
    }
    lockRotations() {
        return this.restrictRotations(!1, !1, !1);
    }
    setLinearDamping(A) {
        return this.linearDamping = A, this;
    }
    setAngularDamping(A) {
        return this.angularDamping = A, this;
    }
    setCanSleep(A) {
        return this.canSleep = A, this;
    }
    setSleeping(A) {
        return this.sleeping = A, this;
    }
    setCcdEnabled(A) {
        return this.ccdEnabled = A, this;
    }
    setUserData(A) {
        return this.userData = A, this;
    }
}
class YA {
    constructor(){
        this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array, this.size = 0;
    }
    set(A, I) {
        let g = this.index(A);
        for(; this.data.length <= g;)this.data.push(null);
        null == this.data[g] && (this.size += 1), this.data[g] = I;
    }
    len() {
        return this.size;
    }
    delete(A) {
        let I = this.index(A);
        I < this.data.length && (null != this.data[I] && (this.size -= 1), this.data[I] = null);
    }
    clear() {
        this.data = new Array;
    }
    get(A) {
        let I = this.index(A);
        return I < this.data.length ? this.data[I] : null;
    }
    forEach(A) {
        for (const I of this.data)null != I && A(I);
    }
    getAll() {
        return this.data.filter((A)=>null != A);
    }
    index(A) {
        return this.fconv[0] = A, this.uconv[0];
    }
}
class LA {
    constructor(A){
        this.raw = A || new v, this.map = new YA, A && A.forEachRigidBodyHandle((I)=>{
            this.map.set(I, new sA(A, null, I));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createRigidBody(A, I) {
        let g = DA.intoRaw(I.translation), C = GA.intoRaw(I.rotation), B = DA.intoRaw(I.linvel), Q = DA.intoRaw(I.centerOfMass), E = DA.intoRaw(I.angvel), i = DA.intoRaw(I.principalAngularInertia), D = GA.intoRaw(I.angularInertiaLocalFrame), o = this.raw.createRigidBody(I.enabled, g, C, I.gravityScale, I.mass, I.massOnly, Q, B, E, i, D, I.translationsEnabledX, I.translationsEnabledY, I.translationsEnabledZ, I.rotationsEnabledX, I.rotationsEnabledY, I.rotationsEnabledZ, I.linearDamping, I.angularDamping, I.status, I.canSleep, I.sleeping, I.ccdEnabled, I.dominanceGroup);
        g.free(), C.free(), B.free(), Q.free(), E.free(), i.free(), D.free();
        const G = new sA(this.raw, A, o);
        return G.userData = I.userData, this.map.set(o, G), G;
    }
    remove(A, I, g, C, B) {
        for(let I = 0; I < this.raw.rbNumColliders(A); I += 1)g.unmap(this.raw.rbCollider(A, I));
        C.forEachJointHandleAttachedToRigidBody(A, (A)=>C.unmap(A)), B.forEachJointHandleAttachedToRigidBody(A, (A)=>B.unmap(A)), this.raw.remove(A, I.raw, g.raw, C.raw, B.raw), this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    forEachActiveRigidBody(A, I) {
        A.forEachActiveRigidBodyHandle((A)=>{
            I(this.get(A));
        });
    }
    getAll() {
        return this.map.getAll();
    }
}
class HA {
    constructor(A){
        this.raw = A || new Z;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
        return this.raw.dt;
    }
    get erp() {
        return this.raw.erp;
    }
    get allowedLinearError() {
        return this.raw.allowedLinearError;
    }
    get predictionDistance() {
        return this.raw.predictionDistance;
    }
    get maxVelocityIterations() {
        return this.raw.maxVelocityIterations;
    }
    get maxVelocityFrictionIterations() {
        return this.raw.maxVelocityFrictionIterations;
    }
    get maxStabilizationIterations() {
        return this.raw.maxStabilizationIterations;
    }
    get minIslandSize() {
        return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
        return this.raw.maxCcdSubsteps;
    }
    set dt(A) {
        this.raw.dt = A;
    }
    set erp(A) {
        this.raw.erp = A;
    }
    set allowedLinearError(A) {
        this.raw.allowedLinearError = A;
    }
    set predictionDistance(A) {
        this.raw.predictionDistance = A;
    }
    set maxVelocityIterations(A) {
        this.raw.maxVelocityIterations = A;
    }
    set maxVelocityFrictionIterations(A) {
        this.raw.maxVelocityFrictionIterations = A;
    }
    set maxStabilizationIterations(A) {
        this.raw.maxStabilizationIterations = A;
    }
    set minIslandSize(A) {
        this.raw.minIslandSize = A;
    }
    set maxCcdSubsteps(A) {
        this.raw.maxCcdSubsteps = A;
    }
}
!function(A) {
    A[A.Revolute = 0] = "Revolute", A[A.Fixed = 1] = "Fixed", A[A.Prismatic = 2] = "Prismatic", A[A.Spherical = 3] = "Spherical";
}(aA || (aA = {})), function(A) {
    A[A.AccelerationBased = 0] = "AccelerationBased", A[A.ForceBased = 1] = "ForceBased";
}(MA || (MA = {}));
class lA {
    constructor(A, I, g){
        this.rawSet = A, this.bodySet = I, this.handle = g;
    }
    static newTyped(A, I, g) {
        switch(A.jointType(g)){
            case aA.Revolute:
                return new rA(A, I, g);
            case aA.Prismatic:
                return new eA(A, I, g);
            case aA.Fixed:
                return new pA(A, I, g);
            case aA.Spherical:
                return new dA(A, I, g);
            default:
                return new lA(A, I, g);
        }
    }
    finalizeDeserialization(A) {
        this.bodySet = A;
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    body1() {
        return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
        return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
        return this.rawSet.jointType(this.handle);
    }
    frameX1() {
        return GA.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
        return GA.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
        return DA.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
        return DA.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(A) {
        const I = DA.intoRaw(A);
        this.rawSet.jointSetAnchor1(this.handle, I), I.free();
    }
    setAnchor2(A) {
        const I = DA.intoRaw(A);
        this.rawSet.jointSetAnchor2(this.handle, I), I.free();
    }
    setContactsEnabled(A) {
        this.rawSet.jointSetContactsEnabled(this.handle, A);
    }
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
class tA extends lA {
    limitsEnabled() {
        return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
        return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
        return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(A, I) {
        this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A, I);
    }
    configureMotorModel(A) {
        this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A);
    }
    configureMotorVelocity(A, I) {
        this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), A, I);
    }
    configureMotorPosition(A, I, g) {
        this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), A, I, g);
    }
    configureMotor(A, I, g, C) {
        this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), A, I, g, C);
    }
}
class pA extends lA {
}
class eA extends tA {
    rawAxis() {
        return c.X;
    }
}
class rA extends tA {
    rawAxis() {
        return c.AngX;
    }
}
class dA extends lA {
}
class TA {
    constructor(){}
    static fixed(A, I, g, C) {
        let B = new TA;
        return B.anchor1 = A, B.anchor2 = g, B.frame1 = I, B.frame2 = C, B.jointType = aA.Fixed, B;
    }
    static spherical(A, I) {
        let g = new TA;
        return g.anchor1 = A, g.anchor2 = I, g.jointType = aA.Spherical, g;
    }
    static prismatic(A, I, g) {
        let C = new TA;
        return C.anchor1 = A, C.anchor2 = I, C.axis = g, C.jointType = aA.Prismatic, C;
    }
    static revolute(A, I, g) {
        let C = new TA;
        return C.anchor1 = A, C.anchor2 = I, C.axis = g, C.jointType = aA.Revolute, C;
    }
    intoRaw() {
        let A, I, g = DA.intoRaw(this.anchor1), C = DA.intoRaw(this.anchor2), B = !1, Q = 0, E = 0;
        switch(this.jointType){
            case aA.Fixed:
                let i = GA.intoRaw(this.frame1), D = GA.intoRaw(this.frame2);
                I = O.fixed(g, i, C, D), i.free(), D.free();
                break;
            case aA.Prismatic:
                A = DA.intoRaw(this.axis), this.limitsEnabled && (B = !0, Q = this.limits[0], E = this.limits[1]), I = O.prismatic(g, C, A, B, Q, E), A.free();
                break;
            case aA.Spherical:
                I = O.spherical(g, C);
                break;
            case aA.Revolute:
                A = DA.intoRaw(this.axis), I = O.revolute(g, C, A), A.free();
        }
        return g.free(), C.free(), I;
    }
}
class OA {
    constructor(A){
        this.raw = A || new n, this.map = new YA, A && A.forEachJointHandle((I)=>{
            this.map.set(I, lA.newTyped(A, null, I));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createJoint(A, I, g, C, B) {
        const Q = I.intoRaw(), E = this.raw.createJoint(Q, g, C, B);
        Q.free();
        let i = lA.newTyped(this.raw, A, E);
        return this.map.set(E, i), i;
    }
    remove(A, I) {
        this.raw.remove(A, I), this.unmap(A);
    }
    forEachJointHandleAttachedToRigidBody(A, I) {
        this.raw.forEachJointAttachedToRigidBody(A, I);
    }
    unmap(A) {
        this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    getAll() {
        return this.map.getAll();
    }
}
class nA {
    constructor(A, I){
        this.rawSet = A, this.handle = I;
    }
    static newTyped(A, I) {
        switch(A.jointType(I)){
            case aA.Revolute:
                return new jA(A, I);
            case aA.Prismatic:
                return new WA(A, I);
            case aA.Fixed:
                return new bA(A, I);
            case aA.Spherical:
                return new xA(A, I);
            default:
                return new nA(A, I);
        }
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(A) {
        this.rawSet.jointSetContactsEnabled(this.handle, A);
    }
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
class ZA extends nA {
}
class bA extends nA {
}
class WA extends ZA {
    rawAxis() {
        return c.X;
    }
}
class jA extends ZA {
    rawAxis() {
        return c.AngX;
    }
}
class xA extends nA {
}
class fA {
    constructor(A){
        this.raw = A || new j, this.map = new YA, A && A.forEachJointHandle((A)=>{
            this.map.set(A, nA.newTyped(this.raw, A));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    createJoint(A, I, g, C) {
        const B = A.intoRaw(), Q = this.raw.createJoint(B, I, g, C);
        B.free();
        let E = nA.newTyped(this.raw, Q);
        return this.map.set(Q, E), E;
    }
    remove(A, I) {
        this.raw.remove(A, I), this.map.delete(A);
    }
    unmap(A) {
        this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    forEachJointHandleAttachedToRigidBody(A, I) {
        this.raw.forEachJointAttachedToRigidBody(A, I);
    }
    getAll() {
        return this.map.getAll();
    }
}
!function(A) {
    A[A.Average = 0] = "Average", A[A.Min = 1] = "Min", A[A.Multiply = 2] = "Multiply", A[A.Max = 3] = "Max";
}(KA || (KA = {}));
class mA {
    constructor(A){
        this.raw = A || new L;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
}
class XA {
    constructor(A){
        this.raw = A || new b;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    forEachActiveRigidBodyHandle(A) {
        this.raw.forEachActiveRigidBodyHandle(A);
    }
}
class VA {
    constructor(A){
        this.raw = A || new Y;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
}
class PA {
    constructor(A){
        this.raw = A || new x, this.tempManifold = new zA(null);
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    contactsWith(A, I) {
        this.raw.contacts_with(A, I);
    }
    intersectionsWith(A, I) {
        this.raw.intersections_with(A, I);
    }
    contactPair(A, I, g) {
        const C = this.raw.contact_pair(A, I);
        if (C) {
            const I = C.collider1() != A;
            let B;
            for(B = 0; B < C.numContactManifolds(); ++B)this.tempManifold.raw = C.contactManifold(B), this.tempManifold.raw && g(this.tempManifold, I), this.tempManifold.free();
            C.free();
        }
    }
    intersectionPair(A, I) {
        return this.raw.intersection_pair(A, I);
    }
}
class zA {
    constructor(A){
        this.raw = A;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    normal() {
        return DA.fromRaw(this.raw.normal());
    }
    localNormal1() {
        return DA.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
        return DA.fromRaw(this.raw.local_n2());
    }
    subshape1() {
        return this.raw.subshape1();
    }
    subshape2() {
        return this.raw.subshape2();
    }
    numContacts() {
        return this.raw.num_contacts();
    }
    localContactPoint1(A) {
        return DA.fromRaw(this.raw.contact_local_p1(A));
    }
    localContactPoint2(A) {
        return DA.fromRaw(this.raw.contact_local_p2(A));
    }
    contactDist(A) {
        return this.raw.contact_dist(A);
    }
    contactFid1(A) {
        return this.raw.contact_fid1(A);
    }
    contactFid2(A) {
        return this.raw.contact_fid2(A);
    }
    contactImpulse(A) {
        return this.raw.contact_impulse(A);
    }
    contactTangentImpulseX(A) {
        return this.raw.contact_tangent_impulse_x(A);
    }
    contactTangentImpulseY(A) {
        return this.raw.contact_tangent_impulse_y(A);
    }
    numSolverContacts() {
        return this.raw.num_solver_contacts();
    }
    solverContactPoint(A) {
        return DA.fromRaw(this.raw.solver_contact_point(A));
    }
    solverContactDist(A) {
        return this.raw.solver_contact_dist(A);
    }
    solverContactFriction(A) {
        return this.raw.solver_contact_friction(A);
    }
    solverContactRestitution(A) {
        return this.raw.solver_contact_restitution(A);
    }
    solverContactTangentVelocity(A) {
        return DA.fromRaw(this.raw.solver_contact_tangent_velocity(A));
    }
}
class uA {
    constructor(A, I, g, C, B){
        this.distance = A, this.point1 = I, this.point2 = g, this.normal1 = C, this.normal2 = B;
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new uA(A.distance(), DA.fromRaw(A.point1()), DA.fromRaw(A.point2()), DA.fromRaw(A.normal1()), DA.fromRaw(A.normal2()));
        return A.free(), I;
    }
}
!function(A) {
    A[A.Vertex = 0] = "Vertex", A[A.Edge = 1] = "Edge", A[A.Face = 2] = "Face", A[A.Unknown = 3] = "Unknown";
}(yA || (yA = {}));
class vA {
    constructor(A, I){
        this.point = A, this.isInside = I;
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new vA(DA.fromRaw(A.point()), A.isInside());
        return A.free(), I;
    }
}
class _A {
    constructor(A, I, g, C, B){
        this.featureType = yA.Unknown, this.featureId = void 0, this.collider = A, this.point = I, this.isInside = g, void 0 !== B && (this.featureId = B), void 0 !== C && (this.featureType = C);
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new _A(A.get(I.colliderHandle()), DA.fromRaw(I.point()), I.isInside(), I.featureType(), I.featureId());
        return I.free(), g;
    }
}
class $A {
    constructor(A, I){
        this.origin = A, this.dir = I;
    }
    pointAt(A) {
        return {
            x: this.origin.x + this.dir.x * A,
            y: this.origin.y + this.dir.y * A,
            z: this.origin.z + this.dir.z * A
        };
    }
}
class AI {
    constructor(A, I, g, C){
        this.featureType = yA.Unknown, this.featureId = void 0, this.toi = A, this.normal = I, void 0 !== C && (this.featureId = C), void 0 !== g && (this.featureType = g);
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new AI(A.toi(), DA.fromRaw(A.normal()), A.featureType(), A.featureId());
        return A.free(), I;
    }
}
class II {
    constructor(A, I, g, C, B){
        this.featureType = yA.Unknown, this.featureId = void 0, this.collider = A, this.toi = I, this.normal = g, void 0 !== B && (this.featureId = B), void 0 !== C && (this.featureType = C);
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new II(A.get(I.colliderHandle()), I.toi(), DA.fromRaw(I.normal()), I.featureType(), I.featureId());
        return I.free(), g;
    }
}
class gI {
    constructor(A, I){
        this.collider = A, this.toi = I;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new gI(A.get(I.colliderHandle()), I.toi());
        return I.free(), g;
    }
}
class CI {
    constructor(A, I, g, C, B){
        this.toi = A, this.witness1 = I, this.witness2 = g, this.normal1 = C, this.normal2 = B;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new CI(I.toi(), DA.fromRaw(I.witness1()), DA.fromRaw(I.witness2()), DA.fromRaw(I.normal1()), DA.fromRaw(I.normal2()));
        return I.free(), g;
    }
}
class BI extends CI {
    constructor(A, I, g, C, B, Q){
        super(I, g, C, B, Q), this.collider = A;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new BI(A.get(I.colliderHandle()), I.toi(), DA.fromRaw(I.witness1()), DA.fromRaw(I.witness2()), DA.fromRaw(I.normal1()), DA.fromRaw(I.normal2()));
        return I.free(), g;
    }
}
class QI {
    static fromRaw(A, I) {
        const g = A.coShapeType(I);
        let C, B, Q, E, i, D, o;
        switch(g){
            case JA.Ball:
                return new EI(A.coRadius(I));
            case JA.Cuboid:
                return C = A.coHalfExtents(I), new DI(C.x, C.y, C.z);
            case JA.RoundCuboid:
                return C = A.coHalfExtents(I), B = A.coRoundRadius(I), new oI(C.x, C.y, C.z, B);
            case JA.Capsule:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new GI(i, D);
            case JA.Segment:
                return Q = A.coVertices(I), new wI(DA.new(Q[0], Q[1], Q[2]), DA.new(Q[3], Q[4], Q[5]));
            case JA.Polyline:
                return Q = A.coVertices(I), E = A.coIndices(I), new aI(Q, E);
            case JA.Triangle:
                return Q = A.coVertices(I), new kI(DA.new(Q[0], Q[1], Q[2]), DA.new(Q[3], Q[4], Q[5]), DA.new(Q[6], Q[7], Q[8]));
            case JA.RoundTriangle:
                return Q = A.coVertices(I), B = A.coRoundRadius(I), new SI(DA.new(Q[0], Q[1], Q[2]), DA.new(Q[3], Q[4], Q[5]), DA.new(Q[6], Q[7], Q[8]), B);
            case JA.HalfSpace:
                return o = DA.fromRaw(A.coHalfspaceNormal(I)), new iI(o);
            case JA.TriMesh:
                return Q = A.coVertices(I), E = A.coIndices(I), new MI(Q, E);
            case JA.HeightField:
                const G = A.coHeightfieldScale(I), w = A.coHeightfieldHeights(I), k = A.coHeightfieldNRows(I), S = A.coHeightfieldNCols(I);
                return new JI(k, S, w, G);
            case JA.ConvexPolyhedron:
                return Q = A.coVertices(I), E = A.coIndices(I), new KI(Q, E);
            case JA.RoundConvexPolyhedron:
                return Q = A.coVertices(I), E = A.coIndices(I), B = A.coRoundRadius(I), new yI(Q, E, B);
            case JA.Cylinder:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new UI(i, D);
            case JA.RoundCylinder:
                return i = A.coHalfHeight(I), D = A.coRadius(I), B = A.coRoundRadius(I), new hI(i, D, B);
            case JA.Cone:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new NI(i, D);
            case JA.RoundCone:
                return i = A.coHalfHeight(I), D = A.coRadius(I), B = A.coRoundRadius(I), new FI(i, D, B);
            default:
                throw new Error("unknown shape type: " + g);
        }
    }
    castShape(A, I, g, C, B, Q, E, i, D) {
        let o = DA.intoRaw(A), G = GA.intoRaw(I), w = DA.intoRaw(g), k = DA.intoRaw(B), S = GA.intoRaw(Q), a = DA.intoRaw(E), M = this.intoRaw(), K = C.intoRaw(), y = CI.fromRaw(null, M.castShape(o, G, w, K, k, S, a, i, D));
        return o.free(), G.free(), w.free(), k.free(), S.free(), a.free(), M.free(), K.free(), y;
    }
    intersectsShape(A, I, g, C, B) {
        let Q = DA.intoRaw(A), E = GA.intoRaw(I), i = DA.intoRaw(C), D = GA.intoRaw(B), o = this.intoRaw(), G = g.intoRaw(), w = o.intersectsShape(Q, E, G, i, D);
        return Q.free(), E.free(), i.free(), D.free(), o.free(), G.free(), w;
    }
    contactShape(A, I, g, C, B, Q) {
        let E = DA.intoRaw(A), i = GA.intoRaw(I), D = DA.intoRaw(C), o = GA.intoRaw(B), G = this.intoRaw(), w = g.intoRaw(), k = uA.fromRaw(G.contactShape(E, i, w, D, o, Q));
        return E.free(), i.free(), D.free(), o.free(), G.free(), w.free(), k;
    }
    containsPoint(A, I, g) {
        let C = DA.intoRaw(A), B = GA.intoRaw(I), Q = DA.intoRaw(g), E = this.intoRaw(), i = E.containsPoint(C, B, Q);
        return C.free(), B.free(), Q.free(), E.free(), i;
    }
    projectPoint(A, I, g, C) {
        let B = DA.intoRaw(A), Q = GA.intoRaw(I), E = DA.intoRaw(g), i = this.intoRaw(), D = vA.fromRaw(i.projectPoint(B, Q, E, C));
        return B.free(), Q.free(), E.free(), i.free(), D;
    }
    intersectsRay(A, I, g, C) {
        let B = DA.intoRaw(I), Q = GA.intoRaw(g), E = DA.intoRaw(A.origin), i = DA.intoRaw(A.dir), D = this.intoRaw(), o = D.intersectsRay(B, Q, E, i, C);
        return B.free(), Q.free(), E.free(), i.free(), D.free(), o;
    }
    castRay(A, I, g, C, B) {
        let Q = DA.intoRaw(I), E = GA.intoRaw(g), i = DA.intoRaw(A.origin), D = DA.intoRaw(A.dir), o = this.intoRaw(), G = o.castRay(Q, E, i, D, C, B);
        return Q.free(), E.free(), i.free(), D.free(), o.free(), G;
    }
    castRayAndGetNormal(A, I, g, C, B) {
        let Q = DA.intoRaw(I), E = GA.intoRaw(g), i = DA.intoRaw(A.origin), D = DA.intoRaw(A.dir), o = this.intoRaw(), G = AI.fromRaw(o.castRayAndGetNormal(Q, E, i, D, C, B));
        return Q.free(), E.free(), i.free(), D.free(), o.free(), G;
    }
}
!function(A) {
    A[A.Ball = 0] = "Ball", A[A.Cuboid = 1] = "Cuboid", A[A.Capsule = 2] = "Capsule", A[A.Segment = 3] = "Segment", A[A.Polyline = 4] = "Polyline", A[A.Triangle = 5] = "Triangle", A[A.TriMesh = 6] = "TriMesh", A[A.HeightField = 7] = "HeightField", A[A.ConvexPolyhedron = 9] = "ConvexPolyhedron", A[A.Cylinder = 10] = "Cylinder", A[A.Cone = 11] = "Cone", A[A.RoundCuboid = 12] = "RoundCuboid", A[A.RoundTriangle = 13] = "RoundTriangle", A[A.RoundCylinder = 14] = "RoundCylinder", A[A.RoundCone = 15] = "RoundCone", A[A.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", A[A.HalfSpace = 17] = "HalfSpace";
}(JA || (JA = {}));
class EI extends QI {
    constructor(A){
        super(), this.type = JA.Ball, this.radius = A;
    }
    intoRaw() {
        return IA.ball(this.radius);
    }
}
class iI extends QI {
    constructor(A){
        super(), this.type = JA.HalfSpace, this.normal = A;
    }
    intoRaw() {
        let A = DA.intoRaw(this.normal), I = IA.halfspace(A);
        return A.free(), I;
    }
}
class DI extends QI {
    constructor(A, I, g){
        super(), this.type = JA.Cuboid, this.halfExtents = DA.new(A, I, g);
    }
    intoRaw() {
        return IA.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
}
class oI extends QI {
    constructor(A, I, g, C){
        super(), this.type = JA.RoundCuboid, this.halfExtents = DA.new(A, I, g), this.borderRadius = C;
    }
    intoRaw() {
        return IA.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
}
class GI extends QI {
    constructor(A, I){
        super(), this.type = JA.Capsule, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return IA.capsule(this.halfHeight, this.radius);
    }
}
class wI extends QI {
    constructor(A, I){
        super(), this.type = JA.Segment, this.a = A, this.b = I;
    }
    intoRaw() {
        let A = DA.intoRaw(this.a), I = DA.intoRaw(this.b), g = IA.segment(A, I);
        return A.free(), I.free(), g;
    }
}
class kI extends QI {
    constructor(A, I, g){
        super(), this.type = JA.Triangle, this.a = A, this.b = I, this.c = g;
    }
    intoRaw() {
        let A = DA.intoRaw(this.a), I = DA.intoRaw(this.b), g = DA.intoRaw(this.c), C = IA.triangle(A, I, g);
        return A.free(), I.free(), g.free(), C;
    }
}
class SI extends QI {
    constructor(A, I, g, C){
        super(), this.type = JA.RoundTriangle, this.a = A, this.b = I, this.c = g, this.borderRadius = C;
    }
    intoRaw() {
        let A = DA.intoRaw(this.a), I = DA.intoRaw(this.b), g = DA.intoRaw(this.c), C = IA.roundTriangle(A, I, g, this.borderRadius);
        return A.free(), I.free(), g.free(), C;
    }
}
class aI extends QI {
    constructor(A, I){
        super(), this.type = JA.Polyline, this.vertices = A, this.indices = null != I ? I : new Uint32Array(0);
    }
    intoRaw() {
        return IA.polyline(this.vertices, this.indices);
    }
}
class MI extends QI {
    constructor(A, I){
        super(), this.type = JA.TriMesh, this.vertices = A, this.indices = I;
    }
    intoRaw() {
        return IA.trimesh(this.vertices, this.indices);
    }
}
class KI extends QI {
    constructor(A, I){
        super(), this.type = JA.ConvexPolyhedron, this.vertices = A, this.indices = I;
    }
    intoRaw() {
        return this.indices ? IA.convexMesh(this.vertices, this.indices) : IA.convexHull(this.vertices);
    }
}
class yI extends QI {
    constructor(A, I, g){
        super(), this.type = JA.RoundConvexPolyhedron, this.vertices = A, this.indices = I, this.borderRadius = g;
    }
    intoRaw() {
        return this.indices ? IA.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : IA.roundConvexHull(this.vertices, this.borderRadius);
    }
}
class JI extends QI {
    constructor(A, I, g, C){
        super(), this.type = JA.HeightField, this.nrows = A, this.ncols = I, this.heights = g, this.scale = C;
    }
    intoRaw() {
        let A = DA.intoRaw(this.scale), I = IA.heightfield(this.nrows, this.ncols, this.heights, A);
        return A.free(), I;
    }
}
class UI extends QI {
    constructor(A, I){
        super(), this.type = JA.Cylinder, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return IA.cylinder(this.halfHeight, this.radius);
    }
}
class hI extends QI {
    constructor(A, I, g){
        super(), this.type = JA.RoundCylinder, this.borderRadius = g, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return IA.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
}
class NI extends QI {
    constructor(A, I){
        super(), this.type = JA.Cone, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return IA.cone(this.halfHeight, this.radius);
    }
}
class FI extends QI {
    constructor(A, I, g){
        super(), this.type = JA.RoundCone, this.halfHeight = A, this.radius = I, this.borderRadius = g;
    }
    intoRaw() {
        return IA.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
}
!function(A) {
    A[A.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", A[A.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", A[A.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", A[A.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", A[A.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", A[A.FIXED_FIXED = 32] = "FIXED_FIXED", A[A.DEFAULT = 15] = "DEFAULT", A[A.ALL = 60943] = "ALL";
}(UA || (UA = {}));
class qI {
    constructor(A, I, g, C){
        this.colliderSet = A, this.handle = I, this._parent = g, this._shape = C;
    }
    finalizeDeserialization(A) {
        null != this.handle && (this._parent = A.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
        this._shape || (this._shape = QI.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
        return this.ensureShapeIsCached(), this._shape;
    }
    isValid() {
        return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
        return DA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    rotation() {
        return GA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    isSensor() {
        return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(A) {
        this.colliderSet.raw.coSetSensor(this.handle, A);
    }
    setShape(A) {
        let I = A.intoRaw();
        this.colliderSet.raw.coSetShape(this.handle, I), I.free(), this._shape = A;
    }
    setEnabled(A) {
        this.colliderSet.raw.coSetEnabled(this.handle, A);
    }
    isEnabled() {
        return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(A) {
        this.colliderSet.raw.coSetRestitution(this.handle, A);
    }
    setFriction(A) {
        this.colliderSet.raw.coSetFriction(this.handle, A);
    }
    frictionCombineRule() {
        return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(A) {
        this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A);
    }
    restitutionCombineRule() {
        return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(A) {
        this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A);
    }
    setCollisionGroups(A) {
        this.colliderSet.raw.coSetCollisionGroups(this.handle, A);
    }
    setSolverGroups(A) {
        this.colliderSet.raw.coSetSolverGroups(this.handle, A);
    }
    activeHooks() {
        return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(A) {
        this.colliderSet.raw.coSetActiveHooks(this.handle, A);
    }
    activeEvents() {
        return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(A) {
        this.colliderSet.raw.coSetActiveEvents(this.handle, A);
    }
    activeCollisionTypes() {
        return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(A) {
        return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, A);
    }
    contactForceEventThreshold() {
        return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(A) {
        this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A);
    }
    setDensity(A) {
        this.colliderSet.raw.coSetDensity(this.handle, A);
    }
    setMass(A) {
        this.colliderSet.raw.coSetMass(this.handle, A);
    }
    setMassProperties(A, I, g, C) {
        let B = DA.intoRaw(I), Q = DA.intoRaw(g), E = GA.intoRaw(C);
        this.colliderSet.raw.coSetMassProperties(this.handle, A, B, Q, E), B.free(), Q.free(), E.free();
    }
    setTranslation(A) {
        this.colliderSet.raw.coSetTranslation(this.handle, A.x, A.y, A.z);
    }
    setTranslationWrtParent(A) {
        this.colliderSet.raw.coSetTranslationWrtParent(this.handle, A.x, A.y, A.z);
    }
    setRotation(A) {
        this.colliderSet.raw.coSetRotation(this.handle, A.x, A.y, A.z, A.w);
    }
    setRotationWrtParent(A) {
        this.colliderSet.raw.coSetRotationWrtParent(this.handle, A.x, A.y, A.z, A.w);
    }
    shapeType() {
        return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
        return DA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(A) {
        const I = DA.intoRaw(A);
        this.colliderSet.raw.coSetHalfExtents(this.handle, I);
    }
    radius() {
        return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(A) {
        this.colliderSet.raw.coSetRadius(this.handle, A);
    }
    roundRadius() {
        return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(A) {
        this.colliderSet.raw.coSetRoundRadius(this.handle, A);
    }
    halfHeight() {
        return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(A) {
        this.colliderSet.raw.coSetHalfHeight(this.handle, A);
    }
    vertices() {
        return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
        return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
        return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
        let A = this.colliderSet.raw.coHeightfieldScale(this.handle);
        return DA.fromRaw(A);
    }
    heightfieldNRows() {
        return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
        return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
        return this._parent;
    }
    friction() {
        return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
        return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
        return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
        return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
        return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
        return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
        return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(A) {
        let I = DA.intoRaw(A), g = this.colliderSet.raw.coContainsPoint(this.handle, I);
        return I.free(), g;
    }
    projectPoint(A, I) {
        let g = DA.intoRaw(A), C = vA.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, g, I));
        return g.free(), C;
    }
    intersectsRay(A, I) {
        let g = DA.intoRaw(A.origin), C = DA.intoRaw(A.dir), B = this.colliderSet.raw.coIntersectsRay(this.handle, g, C, I);
        return g.free(), C.free(), B;
    }
    castShape(A, I, g, C, B, Q, E) {
        let i = DA.intoRaw(A), D = DA.intoRaw(g), o = GA.intoRaw(C), G = DA.intoRaw(B), w = I.intoRaw(), k = CI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, i, w, D, o, G, Q, E));
        return i.free(), D.free(), o.free(), G.free(), w.free(), k;
    }
    castCollider(A, I, g, C, B) {
        let Q = DA.intoRaw(A), E = DA.intoRaw(g), i = BI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, Q, I.handle, E, C, B));
        return Q.free(), E.free(), i;
    }
    intersectsShape(A, I, g) {
        let C = DA.intoRaw(I), B = GA.intoRaw(g), Q = A.intoRaw(), E = this.colliderSet.raw.coIntersectsShape(this.handle, Q, C, B);
        return C.free(), B.free(), Q.free(), E;
    }
    contactShape(A, I, g, C) {
        let B = DA.intoRaw(I), Q = GA.intoRaw(g), E = A.intoRaw(), i = uA.fromRaw(this.colliderSet.raw.coContactShape(this.handle, E, B, Q, C));
        return B.free(), Q.free(), E.free(), i;
    }
    contactCollider(A, I) {
        return uA.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, A.handle, I));
    }
    castRay(A, I, g) {
        let C = DA.intoRaw(A.origin), B = DA.intoRaw(A.dir), Q = this.colliderSet.raw.coCastRay(this.handle, C, B, I, g);
        return C.free(), B.free(), Q;
    }
    castRayAndGetNormal(A, I, g) {
        let C = DA.intoRaw(A.origin), B = DA.intoRaw(A.dir), Q = AI.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, C, B, I, g));
        return C.free(), B.free(), Q;
    }
}
!function(A) {
    A[A.Density = 0] = "Density", A[A.Mass = 1] = "Mass", A[A.MassProps = 2] = "MassProps";
}(hA || (hA = {}));
class RI {
    constructor(A){
        this.enabled = !0, this.shape = A, this.massPropsMode = hA.Density, this.density = 1, this.friction = .5, this.restitution = 0, this.rotation = GA.identity(), this.translation = DA.zeros(), this.isSensor = !1, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = KA.Average, this.restitutionCombineRule = KA.Average, this.activeCollisionTypes = UA.DEFAULT, this.activeEvents = 0, this.activeHooks = 0, this.mass = 0, this.centerOfMass = DA.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = DA.zeros(), this.angularInertiaLocalFrame = GA.identity();
    }
    static ball(A) {
        const I = new EI(A);
        return new RI(I);
    }
    static capsule(A, I) {
        const g = new GI(A, I);
        return new RI(g);
    }
    static segment(A, I) {
        const g = new wI(A, I);
        return new RI(g);
    }
    static triangle(A, I, g) {
        const C = new kI(A, I, g);
        return new RI(C);
    }
    static roundTriangle(A, I, g, C) {
        const B = new SI(A, I, g, C);
        return new RI(B);
    }
    static polyline(A, I) {
        const g = new aI(A, I);
        return new RI(g);
    }
    static trimesh(A, I) {
        const g = new MI(A, I);
        return new RI(g);
    }
    static cuboid(A, I, g) {
        const C = new DI(A, I, g);
        return new RI(C);
    }
    static roundCuboid(A, I, g, C) {
        const B = new oI(A, I, g, C);
        return new RI(B);
    }
    static heightfield(A, I, g, C) {
        const B = new JI(A, I, g, C);
        return new RI(B);
    }
    static cylinder(A, I) {
        const g = new UI(A, I);
        return new RI(g);
    }
    static roundCylinder(A, I, g) {
        const C = new hI(A, I, g);
        return new RI(C);
    }
    static cone(A, I) {
        const g = new NI(A, I);
        return new RI(g);
    }
    static roundCone(A, I, g) {
        const C = new FI(A, I, g);
        return new RI(C);
    }
    static convexHull(A) {
        const I = new KI(A, null);
        return new RI(I);
    }
    static convexMesh(A, I) {
        const g = new KI(A, I);
        return new RI(g);
    }
    static roundConvexHull(A, I) {
        const g = new yI(A, null, I);
        return new RI(g);
    }
    static roundConvexMesh(A, I, g) {
        const C = new yI(A, I, g);
        return new RI(C);
    }
    setTranslation(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The translation components must be numbers.");
        return this.translation = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setRotation(A) {
        return GA.copy(this.rotation, A), this;
    }
    setSensor(A) {
        return this.isSensor = A, this;
    }
    setEnabled(A) {
        return this.enabled = A, this;
    }
    setDensity(A) {
        return this.massPropsMode = hA.Density, this.density = A, this;
    }
    setMass(A) {
        return this.massPropsMode = hA.Mass, this.mass = A, this;
    }
    setMassProperties(A, I, g, C) {
        return this.massPropsMode = hA.MassProps, this.mass = A, DA.copy(this.centerOfMass, I), DA.copy(this.principalAngularInertia, g), GA.copy(this.angularInertiaLocalFrame, C), this;
    }
    setRestitution(A) {
        return this.restitution = A, this;
    }
    setFriction(A) {
        return this.friction = A, this;
    }
    setFrictionCombineRule(A) {
        return this.frictionCombineRule = A, this;
    }
    setRestitutionCombineRule(A) {
        return this.restitutionCombineRule = A, this;
    }
    setCollisionGroups(A) {
        return this.collisionGroups = A, this;
    }
    setSolverGroups(A) {
        return this.solverGroups = A, this;
    }
    setActiveHooks(A) {
        return this.activeHooks = A, this;
    }
    setActiveEvents(A) {
        return this.activeEvents = A, this;
    }
    setActiveCollisionTypes(A) {
        return this.activeCollisionTypes = A, this;
    }
    setContactForceEventThreshold(A) {
        return this.contactForceEventThreshold = A, this;
    }
}
class sI {
    constructor(A){
        this.raw = A || new l, this.map = new YA, A && A.forEachColliderHandle((A)=>{
            this.map.set(A, new qI(this, A, null));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    castClosure(A) {
        return (I)=>A ? A(this.get(I)) : void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createCollider(A, I, g) {
        let C = null != g && null != g;
        if (C && isNaN(g)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
        let B = I.shape.intoRaw(), Q = DA.intoRaw(I.translation), E = GA.intoRaw(I.rotation), i = DA.intoRaw(I.centerOfMass), D = DA.intoRaw(I.principalAngularInertia), o = GA.intoRaw(I.angularInertiaLocalFrame), G = this.raw.createCollider(I.enabled, B, Q, E, I.massPropsMode, I.mass, i, D, o, I.density, I.friction, I.restitution, I.frictionCombineRule, I.restitutionCombineRule, I.isSensor, I.collisionGroups, I.solverGroups, I.activeCollisionTypes, I.activeHooks, I.activeEvents, I.contactForceEventThreshold, C, C ? g : 0, A.raw);
        B.free(), Q.free(), E.free(), i.free(), D.free(), o.free();
        let w = C ? A.get(g) : null, k = new qI(this, G, w, I.shape);
        return this.map.set(G, k), k;
    }
    remove(A, I, g, C) {
        this.raw.remove(A, I.raw, g.raw, C), this.unmap(A);
    }
    unmap(A) {
        this.map.delete(A);
    }
    get(A) {
        return this.map.get(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    getAll() {
        return this.map.getAll();
    }
}
class cI {
    constructor(A){
        this.raw = A || new f;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    step(A, I, g, C, B, Q, E, i, D, o, G, w) {
        let k = DA.intoRaw(A);
        G ? this.raw.stepWithEvents(k, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw, o.raw, G.raw, w, w ? w.filterContactPair : null, w ? w.filterIntersectionPair : null) : this.raw.step(k, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw, o.raw), k.free();
    }
}
!function(A) {
    A[A.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", A[A.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", A[A.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", A[A.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", A[A.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", A[A.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", A[A.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", A[A.ONLY_FIXED = 6] = "ONLY_FIXED";
}(NA || (NA = {}));
class YI {
    constructor(A){
        this.raw = A || new V;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    update(A, I) {
        this.raw.update(A.raw, I.raw);
    }
    castRay(A, I, g, C, B, Q, E, i, D, o) {
        let G = DA.intoRaw(g.origin), w = DA.intoRaw(g.dir), k = gI.fromRaw(I, this.raw.castRay(A.raw, I.raw, G, w, C, B, Q, E, i, D, o));
        return G.free(), w.free(), k;
    }
    castRayAndGetNormal(A, I, g, C, B, Q, E, i, D, o) {
        let G = DA.intoRaw(g.origin), w = DA.intoRaw(g.dir), k = II.fromRaw(I, this.raw.castRayAndGetNormal(A.raw, I.raw, G, w, C, B, Q, E, i, D, o));
        return G.free(), w.free(), k;
    }
    intersectionsWithRay(A, I, g, C, B, Q, E, i, D, o, G) {
        let w = DA.intoRaw(g.origin), k = DA.intoRaw(g.dir);
        this.raw.intersectionsWithRay(A.raw, I.raw, w, k, C, B, (A)=>Q(II.fromRaw(I, A)), E, i, D, o, G), w.free(), k.free();
    }
    intersectionWithShape(A, I, g, C, B, Q, E, i, D, o) {
        let G = DA.intoRaw(g), w = GA.intoRaw(C), k = B.intoRaw(), S = this.raw.intersectionWithShape(A.raw, I.raw, G, w, k, Q, E, i, D, o);
        return G.free(), w.free(), k.free(), S;
    }
    projectPoint(A, I, g, C, B, Q, E, i, D) {
        let o = DA.intoRaw(g), G = _A.fromRaw(I, this.raw.projectPoint(A.raw, I.raw, o, C, B, Q, E, i, D));
        return o.free(), G;
    }
    projectPointAndGetFeature(A, I, g, C, B, Q, E, i) {
        let D = DA.intoRaw(g), o = _A.fromRaw(I, this.raw.projectPointAndGetFeature(A.raw, I.raw, D, C, B, Q, E, i));
        return D.free(), o;
    }
    intersectionsWithPoint(A, I, g, C, B, Q, E, i, D) {
        let o = DA.intoRaw(g);
        this.raw.intersectionsWithPoint(A.raw, I.raw, o, C, B, Q, E, i, D), o.free();
    }
    castShape(A, I, g, C, B, Q, E, i, D, o, G, w, k) {
        let S = DA.intoRaw(g), a = GA.intoRaw(C), M = DA.intoRaw(B), K = Q.intoRaw(), y = BI.fromRaw(I, this.raw.castShape(A.raw, I.raw, S, a, M, K, E, i, D, o, G, w, k));
        return S.free(), a.free(), M.free(), K.free(), y;
    }
    intersectionsWithShape(A, I, g, C, B, Q, E, i, D, o, G) {
        let w = DA.intoRaw(g), k = GA.intoRaw(C), S = B.intoRaw();
        this.raw.intersectionsWithShape(A.raw, I.raw, w, k, S, Q, E, i, D, o, G), w.free(), k.free(), S.free();
    }
    collidersWithAabbIntersectingAabb(A, I, g) {
        let C = DA.intoRaw(A), B = DA.intoRaw(I);
        this.raw.collidersWithAabbIntersectingAabb(C, B, g), C.free(), B.free();
    }
}
class LI {
    constructor(A){
        this.raw = A || new AA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    serializeAll(A, I, g, C, B, Q, E, i, D) {
        let o = DA.intoRaw(A);
        const G = this.raw.serializeAll(o, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw);
        return o.free(), G;
    }
    deserializeAll(A) {
        return eI.fromRaw(this.raw.deserializeAll(A));
    }
}
class HI {
    constructor(A, I){
        this.vertices = A, this.colors = I;
    }
}
class lI {
    constructor(A){
        this.raw = A || new r;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    render(A, I, g, C, B) {
        this.raw.render(A.raw, I.raw, g.raw, C.raw, B.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
}
class tI {
}
class pI {
    constructor(A, I, g, C, B){
        this.params = I, this.bodies = g, this.colliders = C, this.queries = B, this.raw = new W(A), this.rawCharacterCollision = new H, this._applyImpulsesToDynamicBodies = !1, this._characterMass = null;
    }
    free() {
        this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
        return this.raw.up();
    }
    setUp(A) {
        let I = DA.intoRaw(A);
        return this.raw.setUp(I);
    }
    applyImpulsesToDynamicBodies() {
        return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(A) {
        this._applyImpulsesToDynamicBodies = A;
    }
    characterMass() {
        return this._characterMass;
    }
    setCharacterMass(A) {
        this._characterMass = A;
    }
    offset() {
        return this.raw.offset();
    }
    setOffset(A) {
        this.raw.setOffset(A);
    }
    slideEnabled() {
        return this.raw.slideEnabled();
    }
    setSlideEnabled(A) {
        this.raw.setSlideEnabled(A);
    }
    autostepMaxHeight() {
        return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
        return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
        return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
        return this.raw.autostepEnabled();
    }
    enableAutostep(A, I, g) {
        this.raw.enableAutostep(A, I, g);
    }
    disableAutostep() {
        return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
        return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(A) {
        this.raw.setMaxSlopeClimbAngle(A);
    }
    minSlopeSlideAngle() {
        return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(A) {
        this.raw.setMinSlopeSlideAngle(A);
    }
    snapToGroundDistance() {
        return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(A) {
        this.raw.enableSnapToGround(A);
    }
    disableSnapToGround() {
        this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
        return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(A, I, g, C, B) {
        let Q = DA.intoRaw(I);
        this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, A.handle, Q, this._applyImpulsesToDynamicBodies, this._characterMass, g, C, this.colliders.castClosure(B)), Q.free();
    }
    computedMovement() {
        return DA.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
        return this.raw.computedGrounded();
    }
    numComputedCollisions() {
        return this.raw.numComputedCollisions();
    }
    computedCollision(A, I) {
        if (this.raw.computedCollision(A, this.rawCharacterCollision)) {
            let A = this.rawCharacterCollision;
            return (I = null != I ? I : new tI).translationApplied = DA.fromRaw(A.translationApplied()), I.translationRemaining = DA.fromRaw(A.translationRemaining()), I.toi = A.toi(), I.witness1 = DA.fromRaw(A.worldWitness1()), I.witness2 = DA.fromRaw(A.worldWitness2()), I.normal1 = DA.fromRaw(A.worldNormal1()), I.normal2 = DA.fromRaw(A.worldNormal2()), I.collider = this.colliders.get(A.handle()), I;
        }
        return null;
    }
}
class eI {
    constructor(A, I, g, C, B, Q, E, i, D, o, G, w, k, S){
        this.gravity = A, this.integrationParameters = new HA(I), this.islands = new XA(g), this.broadPhase = new VA(C), this.narrowPhase = new PA(B), this.bodies = new LA(Q), this.colliders = new sI(E), this.impulseJoints = new OA(i), this.multibodyJoints = new fA(D), this.ccdSolver = new mA(o), this.queryPipeline = new YI(G), this.physicsPipeline = new cI(w), this.serializationPipeline = new LI(k), this.debugRenderPipeline = new lI(S), this.characterControllers = new Set, this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    free() {
        this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((A)=>A.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0;
    }
    static fromRaw(A) {
        return A ? new eI(DA.fromRaw(A.takeGravity()), A.takeIntegrationParameters(), A.takeIslandManager(), A.takeBroadPhase(), A.takeNarrowPhase(), A.takeBodies(), A.takeColliders(), A.takeImpulseJoints(), A.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
        return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(A) {
        return (new LI).deserializeAll(A);
    }
    debugRender() {
        return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new HI(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(A, I) {
        this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, A, I), this.queryPipeline.update(this.bodies, this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
        this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    updateSceneQueries() {
        this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.bodies, this.colliders);
    }
    get timestep() {
        return this.integrationParameters.dt;
    }
    set timestep(A) {
        this.integrationParameters.dt = A;
    }
    get maxVelocityIterations() {
        return this.integrationParameters.maxVelocityIterations;
    }
    set maxVelocityIterations(A) {
        this.integrationParameters.maxVelocityIterations = A;
    }
    get maxVelocityFrictionIterations() {
        return this.integrationParameters.maxVelocityFrictionIterations;
    }
    set maxVelocityFrictionIterations(A) {
        this.integrationParameters.maxVelocityFrictionIterations = A;
    }
    get maxStabilizationIterations() {
        return this.integrationParameters.maxStabilizationIterations;
    }
    set maxStabilizationIterations(A) {
        this.integrationParameters.maxStabilizationIterations = A;
    }
    createRigidBody(A) {
        return this.bodies.createRigidBody(this.colliders, A);
    }
    createCharacterController(A) {
        let I = new pI(A, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
        return this.characterControllers.add(I), I;
    }
    removeCharacterController(A) {
        this.characterControllers.delete(A), A.free();
    }
    createCollider(A, I) {
        let g = I ? I.handle : void 0;
        return this.colliders.createCollider(this.bodies, A, g);
    }
    createImpulseJoint(A, I, g, C) {
        return this.impulseJoints.createJoint(this.bodies, A, I.handle, g.handle, C);
    }
    createMultibodyJoint(A, I, g, C) {
        return this.multibodyJoints.createJoint(A, I.handle, g.handle, C);
    }
    getRigidBody(A) {
        return this.bodies.get(A);
    }
    getCollider(A) {
        return this.colliders.get(A);
    }
    getImpulseJoint(A) {
        return this.impulseJoints.get(A);
    }
    getMultibodyJoint(A) {
        return this.multibodyJoints.get(A);
    }
    removeRigidBody(A) {
        this.bodies && this.bodies.remove(A.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(A, I) {
        this.colliders && this.colliders.remove(A.handle, this.islands, this.bodies, I);
    }
    removeImpulseJoint(A, I) {
        this.impulseJoints && this.impulseJoints.remove(A.handle, I);
    }
    removeMultibodyJoint(A, I) {
        this.impulseJoints && this.multibodyJoints.remove(A.handle, I);
    }
    forEachCollider(A) {
        this.colliders.forEach(A);
    }
    forEachRigidBody(A) {
        this.bodies.forEach(A);
    }
    forEachActiveRigidBody(A) {
        this.bodies.forEachActiveRigidBody(this.islands, A);
    }
    castRay(A, I, g, C, B, Q, E, i) {
        return this.queryPipeline.castRay(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
    }
    castRayAndGetNormal(A, I, g, C, B, Q, E, i) {
        return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
    }
    intersectionsWithRay(A, I, g, C, B, Q, E, i, D) {
        this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, A, I, g, C, B, Q, E ? E.handle : null, i ? i.handle : null, this.colliders.castClosure(D));
    }
    intersectionWithShape(A, I, g, C, B, Q, E, i) {
        let D = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
        return null != D ? this.colliders.get(D) : null;
    }
    projectPoint(A, I, g, C, B, Q, E) {
        return this.queryPipeline.projectPoint(this.bodies, this.colliders, A, I, g, C, B ? B.handle : null, Q ? Q.handle : null, this.colliders.castClosure(E));
    }
    projectPointAndGetFeature(A, I, g, C, B, Q) {
        return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, A, I, g, C ? C.handle : null, B ? B.handle : null, this.colliders.castClosure(Q));
    }
    intersectionsWithPoint(A, I, g, C, B, Q, E) {
        this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, A, this.colliders.castClosure(I), g, C, B ? B.handle : null, Q ? Q.handle : null, this.colliders.castClosure(E));
    }
    castShape(A, I, g, C, B, Q, E, i, D, o, G) {
        return this.queryPipeline.castShape(this.bodies, this.colliders, A, I, g, C, B, Q, E, i, D ? D.handle : null, o ? o.handle : null, this.colliders.castClosure(G));
    }
    intersectionsWithShape(A, I, g, C, B, Q, E, i, D) {
        this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, A, I, g, this.colliders.castClosure(C), B, Q, E ? E.handle : null, i ? i.handle : null, this.colliders.castClosure(D));
    }
    collidersWithAabbIntersectingAabb(A, I, g) {
        this.queryPipeline.collidersWithAabbIntersectingAabb(A, I, this.colliders.castClosure(g));
    }
    contactsWith(A, I) {
        this.narrowPhase.contactsWith(A.handle, this.colliders.castClosure(I));
    }
    intersectionsWith(A, I) {
        this.narrowPhase.intersectionsWith(A.handle, this.colliders.castClosure(I));
    }
    contactPair(A, I, g) {
        this.narrowPhase.contactPair(A.handle, I.handle, g);
    }
    intersectionPair(A, I) {
        return this.narrowPhase.intersectionPair(A.handle, I.handle);
    }
}
!function(A) {
    A[A.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", A[A.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
}(FA || (FA = {}));
class rI {
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
        return this.raw.collider1();
    }
    collider2() {
        return this.raw.collider2();
    }
    totalForce() {
        return DA.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
        return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
        return DA.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
        return this.raw.max_force_magnitude();
    }
}
class dI {
    constructor(A, I){
        this.raw = I || new T(A);
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(A) {
        this.raw.drainCollisionEvents(A);
    }
    drainContactForceEvents(A) {
        let I = new rI;
        this.raw.drainContactForceEvents((g)=>{
            I.raw = g, A(I), I.free();
        });
    }
    clear() {
        this.raw.clear();
    }
}
function TI(A, I, g, C) {
    return new (g || (g = Promise))(function(B, Q) {
        function E(A) {
            try {
                D(C.next(A));
            } catch (A) {
                Q(A);
            }
        }
        function i(A) {
            try {
                D(C.throw(A));
            } catch (A) {
                Q(A);
            }
        }
        function D(A) {
            var I;
            A.done ? B(A.value) : (I = A.value, I instanceof g ? I : new g(function(A) {
                A(I);
            })).then(E, i);
        }
        D((C = C.apply(A, I || [])).next());
    });
}
!function(A) {
    A[A.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", A[A.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
}(qA || (qA = {})), function(A) {
    A[A.EMPTY = 0] = "EMPTY", A[A.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
}(RA || (RA = {}));
for(var OI = {
    byteLength: function(A) {
        var I = fI(A), g = I[0], C = I[1];
        return 3 * (g + C) / 4 - C;
    },
    toByteArray: function(A) {
        var I, g, C = fI(A), B = C[0], Q = C[1], E = new bI(function(A, I, g) {
            return 3 * (I + g) / 4 - g;
        }(0, B, Q)), i = 0, D = Q > 0 ? B - 4 : B;
        for(g = 0; g < D; g += 4)I = ZI[A.charCodeAt(g)] << 18 | ZI[A.charCodeAt(g + 1)] << 12 | ZI[A.charCodeAt(g + 2)] << 6 | ZI[A.charCodeAt(g + 3)], E[i++] = I >> 16 & 255, E[i++] = I >> 8 & 255, E[i++] = 255 & I;
        2 === Q && (I = ZI[A.charCodeAt(g)] << 2 | ZI[A.charCodeAt(g + 1)] >> 4, E[i++] = 255 & I);
        1 === Q && (I = ZI[A.charCodeAt(g)] << 10 | ZI[A.charCodeAt(g + 1)] << 4 | ZI[A.charCodeAt(g + 2)] >> 2, E[i++] = I >> 8 & 255, E[i++] = 255 & I);
        return E;
    },
    fromByteArray: function(A) {
        for(var I, g = A.length, C = g % 3, B = [], Q = 16383, E = 0, i = g - C; E < i; E += Q)B.push(mI(A, E, E + Q > i ? i : E + Q));
        1 === C ? (I = A[g - 1], B.push(nI[I >> 2] + nI[I << 4 & 63] + "==")) : 2 === C && (I = (A[g - 2] << 8) + A[g - 1], B.push(nI[I >> 10] + nI[I >> 4 & 63] + nI[I << 2 & 63] + "="));
        return B.join("");
    }
}, nI = [], ZI = [], bI = "undefined" != typeof Uint8Array ? Uint8Array : Array, WI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jI = 0, xI = WI.length; jI < xI; ++jI)nI[jI] = WI[jI], ZI[WI.charCodeAt(jI)] = jI;
function fI(A) {
    var I = A.length;
    if (I % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var g = A.indexOf("=");
    return -1 === g && (g = I), [
        g,
        g === I ? 0 : 4 - g % 4
    ];
}
function mI(A, I, g) {
    for(var C, B, Q = [], E = I; E < g; E += 3)C = (A[E] << 16 & 16711680) + (A[E + 1] << 8 & 65280) + (255 & A[E + 2]), Q.push(nI[(B = C) >> 18 & 63] + nI[B >> 12 & 63] + nI[B >> 6 & 63] + nI[63 & B]);
    return Q.join("");
}
function XI() {
    return TI(this, void 0, void 0, function*() {
    });
}
function VI() {
    return function() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.version(C);
            var I = G()[C / 4 + 0], g = G()[C / 4 + 1];
            return S(I, g);
        } finally{
            A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I, g);
        }
    }();
}
ZI["-".charCodeAt(0)] = 62, ZI["_".charCodeAt(0)] = 63;
var PI = Object.freeze({
    __proto__: null,
    version: VI,
    Vector3: iA,
    VectorOps: DA,
    Quaternion: oA,
    RotationOps: GA,
    SdpMatrix3: wA,
    SdpMatrix3Ops: kA,
    get RigidBodyType () {
        return SA;
    },
    RigidBody: sA,
    RigidBodyDesc: cA,
    RigidBodySet: LA,
    IntegrationParameters: HA,
    get JointType () {
        return aA;
    },
    get MotorModel () {
        return MA;
    },
    ImpulseJoint: lA,
    UnitImpulseJoint: tA,
    FixedImpulseJoint: pA,
    PrismaticImpulseJoint: eA,
    RevoluteImpulseJoint: rA,
    SphericalImpulseJoint: dA,
    JointData: TA,
    ImpulseJointSet: OA,
    MultibodyJoint: nA,
    UnitMultibodyJoint: ZA,
    FixedMultibodyJoint: bA,
    PrismaticMultibodyJoint: WA,
    RevoluteMultibodyJoint: jA,
    SphericalMultibodyJoint: xA,
    MultibodyJointSet: fA,
    get CoefficientCombineRule () {
        return KA;
    },
    CCDSolver: mA,
    IslandManager: XA,
    BroadPhase: VA,
    NarrowPhase: PA,
    TempContactManifold: zA,
    Shape: QI,
    get ShapeType () {
        return JA;
    },
    Ball: EI,
    HalfSpace: iI,
    Cuboid: DI,
    RoundCuboid: oI,
    Capsule: GI,
    Segment: wI,
    Triangle: kI,
    RoundTriangle: SI,
    Polyline: aI,
    TriMesh: MI,
    ConvexPolyhedron: KI,
    RoundConvexPolyhedron: yI,
    Heightfield: JI,
    Cylinder: UI,
    RoundCylinder: hI,
    Cone: NI,
    RoundCone: FI,
    get ActiveCollisionTypes () {
        return UA;
    },
    Collider: qI,
    get MassPropsMode () {
        return hA;
    },
    ColliderDesc: RI,
    ColliderSet: sI,
    get FeatureType () {
        return yA;
    },
    Ray: $A,
    RayIntersection: AI,
    RayColliderIntersection: II,
    RayColliderToi: gI,
    PointProjection: vA,
    PointColliderProjection: _A,
    ShapeTOI: CI,
    ShapeColliderTOI: BI,
    ShapeContact: uA,
    World: eI,
    PhysicsPipeline: cI,
    SerializationPipeline: LI,
    get ActiveEvents () {
        return FA;
    },
    TempContactForceEvent: rI,
    EventQueue: dI,
    get ActiveHooks () {
        return qA;
    },
    get SolverFlags () {
        return RA;
    },
    DebugRenderBuffers: HI,
    DebugRenderPipeline: lI,
    get QueryFilterFlags () {
        return NA;
    },
    QueryPipeline: YI,
    init: XI,
    CharacterCollision: tI,
    KinematicCharacterController: pI
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kD5Ob"}]},["5y3Iv"], null, "parcelRequire05cf")

//# sourceMappingURL=physics.e6712e0f.js.map