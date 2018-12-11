!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=0;o<n.length;o++)t[n[o].split(".").pop()]=r(n[o],e);return t}function t(r){if(-1===a.indexOf(r)){try{var n=e[r]}catch(e){a.push(r)}this(r,n)}}var o,i=$__System,a=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.registry.set("@@global-helpers",i.newModule({prepareGlobal:function(r,i,a){var f=e.define;e.define=void 0;var l;if(a){l={};for(var s in a)l[s]=e[s],e[s]=a[s]}return i||(o={},Object.keys(e).forEach(t,function(e,r){o[e]=r})),function(){var r,a=i?n(i):{},s=!!i;if(i||Object.keys(e).forEach(t,function(e,n){o[e]!==n&&void 0!==n&&(i||(a[e]=n,void 0!==r?s||r===n||(s=!0):r=n))}),a=s?a:r,l)for(var c in l)e[c]=l[c];return e.define=f,a}}}))}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this);

$__System.registerDynamic("b", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    window.ESPA = window.ESPA || {}, window.ESPA.route = function () {
      "use strict";
      function e(e) {
        return e.split(/[\/?#]/);
      }function t(e, t) {
        var n = t.replace(/\?/g, "\\?").replace(/\*/g, "([^/?#]+?)").replace(/\.\./, ".*"),
            r = new RegExp("^" + n + "$"),
            i = e.match(r);return i ? i.slice(1) : void 0;
      }function n(e, t) {
        var n;return function () {
          clearTimeout(n), n = setTimeout(e, t);
        };
      }function r(e) {
        p = n(c, 1), K[A](E, p), K[A](P, p), N[A](k, l), e && c(!0);
      }function i() {
        this.$ = [], g(this), q.on("stop", this.s.bind(this)), q.on("emit", this.e.bind(this));
      }function o(e) {
        return e.replace(/^\/|\/$/, "");
      }function u(e) {
        return "string" == typeof e;
      }function a(e) {
        return (e || T.href).replace(b, "");
      }function f(e) {
        return "#" === h[0] ? (e || T.href || "").split(h)[1] || "" : (T ? a(e) : e || "").replace(h, "");
      }function c(e) {
        var t = 0 === _;if (!(_ >= x) && (_++, R.push(function () {
          var t = f();(e || t !== d) && (q[$]("emit", t), d = t);
        }), t)) {
          for (var n; n = R.shift();) n();_ = 0;
        }
      }function l(e) {
        if (!(1 !== e.which || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)) {
          for (var t = e.target; t && "A" !== t.nodeName;) t = t.parentNode;!t || "A" !== t.nodeName || t[S]("download") || !t[S]("href") || t.target && "_self" !== t.target || -1 === t.href.indexOf(T.href.match(b)[0]) || (t.href === T.href || !(t.href.split("#")[0] === T.href.split("#")[0] || "#" !== h[0] && 0 !== a(t.href).indexOf(h) || "#" === h[0] && t.href.split(h)[0] !== T.href.split(h)[0]) && s(f(t.href), t.title || N.title)) && e.preventDefault();
        }
      }function s(e, t, n) {
        return O ? (e = h + o(e), t = t || N.title, n ? O.replaceState(null, t, e) : O.pushState(null, t, e), N.title = t, L = !1, c(), L) : q[$]("emit", f(e));
      }var p,
          h,
          d,
          m,
          v,
          g = function (e) {
        e = e || {};var t = {},
            n = Array.prototype.slice;return Object.defineProperties(e, { on: { value: function (n, r) {
              return "function" == typeof r && (t[n] = t[n] || []).push(r), e;
            }, enumerable: !1, writable: !1, configurable: !1 }, off: { value: function (n, r) {
              if ("*" != n || r) {
                if (r) for (var i, o = t[n], u = 0; i = o && o[u]; ++u) i == r && o.splice(u--, 1);else delete t[n];
              } else t = {};return e;
            }, enumerable: !1, writable: !1, configurable: !1 }, one: { value: function (t, n) {
              function r() {
                e.off(t, r), n.apply(e, arguments);
              }return e.on(t, r);
            }, enumerable: !1, writable: !1, configurable: !1 }, trigger: { value: function (r) {
              var i,
                  o,
                  u,
                  a = arguments,
                  f = arguments.length - 1,
                  c = new Array(f);for (u = 0; f > u; u++) c[u] = a[u + 1];for (i = n.call(t[r] || [], 0), u = 0; o = i[u]; ++u) o.apply(e, c);return t["*"] && "*" != r && e.trigger.apply(e, ["*", r].concat(c)), e;
            }, enumerable: !1, writable: !1, configurable: !1 } }), e;
      },
          b = /^.+?\/\/+[^\/]+/,
          w = "EventListener",
          y = "remove" + w,
          A = "add" + w,
          S = "hasAttribute",
          E = "popstate",
          P = "hashchange",
          $ = "trigger",
          x = 3,
          K = "undefined" != typeof window && window,
          N = "undefined" != typeof document && document,
          O = K && history,
          T = K && (O.location || K.location),
          j = i.prototype,
          k = N && N.ontouchstart ? "touchstart" : "click",
          q = g(),
          D = !1,
          L = !1,
          R = [],
          _ = 0;j.m = function (e, t, n) {
        !u(e) || t && !u(t) ? t ? this.r(e, t) : this.r("@", e) : s(e, t, n || !1);
      }, j.s = function () {
        this.off("*"), this.$ = [];
      }, j.e = function (e) {
        this.$.concat("@").some(function (t) {
          var n = ("@" === t ? m : v)(o(e), o(t));return "undefined" != typeof n ? (this[$].apply(null, [t].concat(n)), L = !0) : void 0;
        }, this);
      }, j.r = function (e, t) {
        "@" !== e && (e = "/" + o(e), this.$.push(e)), this.on(e, t);
      };var z = new i(),
          B = z.m.bind(z);return B.create = function () {
        var e = new i(),
            t = e.m.bind(e);return t.stop = e.s.bind(e), t;
      }, B.base = function (e) {
        h = e || "#", d = f();
      }, B.exec = function () {
        c(!0);
      }, B.parser = function (n, r) {
        n || r || (m = e, v = t), n && (m = n), r && (v = r);
      }, B.query = function () {
        var e = {},
            t = T.href || d;return t.replace(/[?&](.+?)=([^&]*)/g, function (t, n, r) {
          e[n] = r;
        }), e;
      }, B.stop = function () {
        D && (K && (K[y](E, p), K[y](P, p), N[y](k, l)), q[$]("stop"), D = !1);
      }, B.start = function (e) {
        D || (K && ("interactive" === document.readyState || "complete" === document.readyState ? r(e) : document.onreadystatechange = function () {
          "interactive" === document.readyState && setTimeout(function () {
            r(e);
          }, 1);
        }), D = !0);
      }, window.ESPA.observable = g, B.base(), B.parser(), B;
    }();
  })(this);

  return _retrieveGlobal();
});
$__System.register('a', ['b'], function (_export, _context) {
    "use strict";

    var resourceCache, loadResource, logger, store, tmpl, routeData, routeCallback, polyfillArrReady, hosts, __useDefault, __useDefault$1, factoryScope, factory, state, wizardListener, viewData, serviceData, factoryScope$1, factory$1, factoryScope$2, factory$2, __useDefault$2, wizardPage, viewData$1, serviceData$1, factoryScope$3, factory$3, __useDefault$3, wizardPage$1, viewData$2, serviceData$2, factoryScope$4, factory$4, __useDefault$4, wizardPage$2, viewData$3, serviceData$3, factoryScope$5, factory$5, __useDefault$5, wizardPage$3, viewData$4, serviceData$4, factoryScope$6, factory$6;

    function getQueryString(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function navigate(controller, viewData) {
        ESPA.logger.log('navigate to: ' + controller);

        routeData[controller] = viewData || {};
        ESPA.route(controller);
        ESPA.trigger('/controllers', controller, routeData);
        ESPA.trigger('/controllers/' + controller + '/view-data', routeData);

        //for prod code, we need to reject promise to explicitly terminate the chain
        //for unit test, we need to resolve promise so that the test does not fail prematurely
        if (ESPA.store.get('app/context/mode') === 'non-test') {
            return Promise.reject({ error: 'navigating to ' + controller });
        } else {
            return Promise.resolve({ data: 'navigating to ' + controller });
        }
    }

    function registerRoute(controller, callback) {
        ESPA.logger.log('registerRoute: ' + controller);

        if (!callback) {
            throw new Error('callback not defined, registerRoute needs a callback');
        }

        routeCallback[controller] = callback;

        ESPA.route(controller, function () {
            routeCallback[controller](routeData[controller]);
        });
    }

    function factoryMixin(factory, injected) {
        if (factory === null || typeof factory === 'undefined') {
            throw new Error('factory not defined');
        }
        if (injected === null || typeof injected === 'undefined') {
            return factory;
        }
        for (var prop in factory) {
            if (factory.hasOwnProperty(prop) && injected.hasOwnProperty(prop)) {
                factory[prop] = injected[prop];
            }
        }
        return factory;
    }

    function getSpaHost() {
        return 'http://localhost:8888/';
    }

    function getCss() {
        return getSpaHost() + 'src/build/' + getCurrentContext() + '/styles/' + getCurrentContext() + '.css';
    }

    function getCurrentContext() {
        return ESPA.store.get('app/context/name');
    }

    function bindEvents(obj) {
        for (var key in obj) {
            var keyArr = key.split(' ');
            var event = keyArr[0];
            var selector = keyArr[1];
            var handler = obj[key];
            var els = document.querySelectorAll(selector);

            for (var i = 0; i < els.length; ++i) {
                var el = els[i];
                el.addEventListener(event, handler);
            }
        }
    }

    function _checkPolyfillReady(polyfillArr, polyfillArrReady, callback) {
        if (polyfillArr.length === polyfillArrReady.length) {
            if (polyfillArr.sort().join(',') === polyfillArrReady.sort().join(',')) {
                ESPA.logger.info('Polyfill check complete');
                callback();
            } else {
                ESPA.logger.error('Polyfill check error');
            }
        }
    }

    function polyfill(polyfillArr, callback) {
        var _loop = function _loop(i) {
            var ns = polyfillArr[i];

            var s = ns.split('.');
            var obj = window;
            for (var _i = 0; _i < s.length; _i++) {
                obj = obj[s[_i]];

                if (!obj) {
                    // BREAK IF PATH DOESN'T EXISTS TO POLYFILL
                    break;
                }
            }

            if (obj) {
                ESPA.logger.debug('utils.polyfill, already exists: ' + ns);
                polyfillArrReady.push(ns);
                _checkPolyfillReady(polyfillArr, polyfillArrReady, callback);
            } else {
                ESPA.logger.debug('utils.polyfill, loading: ' + ns);
                ESPA.loadResource.jsCallback(getSpaHost() + 'src/build/' + getCurrentContext() + '/polyfill/' + ns.toLowerCase() + '.js', function () {
                    polyfillArrReady.push(ns);
                    _checkPolyfillReady(polyfillArr, polyfillArrReady, callback);
                });
            }
        };

        for (var i = 0; i < polyfillArr.length; ++i) {
            _loop(i);
        }
    }

    function apiGetAsPromise(host, obj) {
        //check cache
        var cacheKey = host + '/' + obj.url;
        var cache = ESPA.store.get(cacheKey);
        if (cache) {
            ESPA.logger.debug('return cached data for GET cacheKey=' + cacheKey);
            ESPA.trigger('/fetches/apiGET/' + obj.url + '/data', cache);
            return cache;
        }
        ESPA.logger.debug('request: GET url=' + obj.url);
        return _apiSend(host, obj.url, {
            method: 'GET'
        }).then(function (response) {
            ESPA.logger.debug('response: ' + obj.url, response);
            ESPA.trigger('/fetches/apiGET/' + obj.url + '/data', response);
            //cache data
            if (obj.cache) {
                ESPA.store.set(cacheKey, response);
            }
            return response;
        }).catch(function (e) {
            ESPA.logger.error(e);
            throw new Error('apiGet error');
        });
    }

    function _apiSend(host, url, data) {
        return fetch(host + url, Object.assign(data, {
            headers: _getHeaders(),
            credentials: 'include'
        })).then(function (resp) {
            return resp.json();
        }).catch(function (e) {
            ESPA.logger.error(e);
            throw new Error('_apiSend error');
        });
    }

    function _getHeaders() {
        var tokenEl = document.querySelector('input[name="__RequestVerificationToken"]');
        var headers = {
            'Content-Type': 'application/json',
            'X-Frame-Options': 'SAMEORIGIN',
            'X-XSRF-Token': tokenEl ? tokenEl.value : ''
        };
        return headers;
    }

    function registerHost(hostKey, host) {
        hosts[hostKey] = host;
    }

    function get(hostKey, obj) {
        if (hosts[hostKey]) {
            return apiGetAsPromise(hosts[hostKey], obj);
        } else {
            throw new Error('${hostKey} Does not exist');
        }
    }

    function registerApiHosts() {
        registerHost('local', 'http://localhost:8888/');
        registerHost('wizardappapi', 'https://wizardappapi.azurewebsites.net');
    }

    function getDummyJsonAsPromise() {
        return get("local", {
            url: 'src/build/myapp/mock/dummy.json',
            cache: true
        });
    }

    function getState() {
        return ESPA.store.get('myapp/state') || {};
    }

    function setState(obj) {
        ESPA.store.set('myapp/state', obj);
    }

    function onStateChange(state) {
        throw new Error('You must implement onStateChange method');
    }

    function getCurrentState() {
        return state;
    }
    function setCurrentState(wizard) {
        state.currentPage = wizard.currentPage;
        state.nextPage = wizard.nextPage;
        state.backPage = wizard.backPage;
        state.back = wizard.back;
        state.next = wizard.next;
        state.finish = wizard.finish;
        state.cancel = wizard.cancel;

        if (state.stateListener) {
            //if onStateChange defined, then fire it
            state.stateListener.onStateChange && state.stateListener.onStateChange(state);
        }
    }

    function registerStateListener(stateListener) {
        state.stateListener = stateListener;
    }

    function onNextWizardPage() {
        if (state.currentPage) {
            return state.currentPage.onNext();
        } else {
            return Promise.reject("currentPage not defined");
        }
    }

    function onBackWizardPage() {
        if (state.currentPage) {
            return state.currentPage.onBack();
        } else {
            return Promise.reject("currentPage not defined");
        }
    }

    function onCancelWizardPage() {
        if (state.currentPage) {
            return state.currentPage.onCancel();
        } else {
            return Promise.reject("currentPage not defined");
        }
    }

    function init() {
        ESPA.registerRoute('wizard-container', _registerRouteCallback);
        registerStateListener(wizardListener);
    }

    function _registerRouteCallback(data) {
        viewData = data || {};

        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData = results[1];
            viewData = Object.assign(viewData, serviceData);
            setState({});
            _displayView();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main-content').innerHTML = ESPA.tmpl(factoryScope$1.tpl, viewData);
        document.getElementById('wizard-button-bar').innerHTML = ESPA.tmpl(factoryScope$1.tplBar, viewData);
        document.getElementById('main-container').style.display = 'block';

        bindEvents({
            'click #back-wizard': _onBackWizard,
            'click #next-wizard': _onNextWizard,
            'click #cancel-wizard': _onCancelWizard
        });
        setCurrentState({
            currentPage: null,
            nextPage: null,
            backPage: null,
            back: false,
            next: false,
            cancel: true
        });
        ESPA.navigate('page-id-token');
    }

    function _onBackWizard(e) {
        e.preventDefault();

        console.log("_onBackWizard");
        onBackWizardPage().then(function (result) {
            if (result) {
                var state = getCurrentState();
                ESPA.navigate(state.backPage);
            }
        });
    }

    function _onNextWizard(e) {
        e.preventDefault();

        console.log("_onNextWizard");
        onNextWizardPage().then(function (result) {
            if (result) {
                var state = getCurrentState();
                ESPA.navigate(state.nextPage);
            }
        });
    }

    function _onCancelWizard(e) {
        e.preventDefault();

        console.log("_onCancelWizard");
        var ok = onCancelWizardPage();
    }

    function onNext() {
        throw new Error('You must implement onNext method');
    }

    function onBack() {
        throw new Error('You must implement onBack method');
    }

    function onCancel() {
        throw new Error('You must implement onCancel method');
    }

    function valueAsPromise(value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    }

    function init$1() {
        ESPA.registerRoute('page-one', _registerRouteCallback$1);
    }

    function _registerRouteCallback$1(data) {
        viewData$1 = data || {};
        var state = getState();
        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData$1 = results[1];
            viewData$1 = Object.assign(viewData$1, serviceData$1);
            state.identity.forEach(function (entry) {
                if (entry.name == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier") {
                    viewData$1.user = entry.value;
                }

                console.log(entry);
            });
            viewData$1.entitlements = state.entitlements;
            _displayView$1();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$1() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(factoryScope$3.tpl, viewData$1);
        document.getElementById('main-container').style.display = 'block';

        bindEvents({
            'click #submitActivationKey': _onSumbitActivationKey
        });
        setCurrentState({
            currentPage: wizardPage,
            nextPage: "page-two",
            backPage: "page-access-token",
            back: true,
            next: true,
            cancel: true
        });
    }

    function _onSumbitActivationKey(e) {
        e.preventDefault();
        var today = new SimpleDate(2000, 2, 28);
        today.addDays(1);
        var state = getState();
        var dd = document.getElementById('activationKey');
        state.activationKey = dd.value;
        dd = document.getElementById('activationKeyEcho');
        dd.value = state.activationKey;
    }

    function init$2() {
        ESPA.registerRoute('page-two', _registerRouteCallback$2);
    }

    function _registerRouteCallback$2(data) {
        viewData$2 = data || {};

        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData$2 = results[1];
            viewData$2 = Object.assign(viewData$2, serviceData$2);
            _displayView$2();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$2() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(factoryScope$4.tpl, viewData$2);
        document.getElementById('main-container').style.display = 'block';

        bindEvents({
            'click #submitActivationKey': _onSumbitActivationKey$1
        });
        setCurrentState({
            currentPage: wizardPage$1,
            nextPage: null,
            backPage: "page-one",
            back: true,
            next: false,
            finish: true,
            cancel: true
        });
    }

    function _onSumbitActivationKey$1(e) {
        e.preventDefault();
        var state = getState();
        var dd = document.getElementById('activationKey');
        state.activationKey = dd.value;
        dd = document.getElementById('activationKeyEcho');
        dd.value = state.activationKey;
    }

    function fetch$1(input, init) {
        if (!init) {
            init = {};
        }
        if (!init.headers) {
            init.headers = {};
        }
        if (!init.credentials) {
            init.credentials = 'include';
        }
        // we are a json shop
        if (!init.headers['Content-Type']) {
            init.headers['Content-Type'] = 'application/json';
        }
        if (!init.headers['Accept']) {
            init.headers['Accept'] = 'application/json';
        }
        if (init.body) {
            var type = typeof init.body;

            if (type === 'object') {
                init.body = JSON.stringify(init.body);
            }
        }

        var result = {};
        return window.fetch(input, init).then(function (response) {
            result.response = response;
            return response;
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            if (init.method === 'HEAD') ;else {
                result.json = data;
                result.error = null;
            }
            return result;
        }).catch(function (e) {
            ESPA.logger.error(e);
            result.error = 'exception caught';
            result.exception = e;
            return result;
        });
    }

    function fetchIdToken() {
        var details = {
            'grant_type': "arbitrary_identity",
            'client_id': "arbitrary-resource-owner-client",
            'client_secret': "secret",
            'scope': "wizard",
            'arbitrary_claims': "{'preferred_username': ['porky@pig.com'],'name': ['porky@pig.com']}",
            'subject': "PorkyPig",
            'arbitrary_amrs': "['agent:username:agent0@supporttech.com','agent:challenge:fullSSN','agent:challenge:homeZip']",
            'arbitrary_audiences': "['cat','dog']",
            'custom_payload': "{'b':['cat','dog'],'a': {'0': {'Street1': '0 Montana Ave','Street2': null,'Street3': null,'Zip': '90403','City': 'Santa Monica','State': 'California','Country': 'USA'},'1': {'Street1': '1 Montana Ave','Street2': null,'Street3': null,'Zip': '90403','City': 'Santa Monica','State': 'California','Country': 'USA'}}}"
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // do a thing, possibly async, then…
        return fetch$1('https://p7identityserver4.azurewebsites.net/connect/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: formBody
        });
    }
    function bind(id_token) {
        var details = {
            'id_token': id_token
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // do a thing, possibly async, then…
        return fetch$1('https://wizardappapi.azurewebsites.net/api/Identity/bind', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: formBody
        });
    }
    function fetchIdentity(access_token) {
        // do a thing, possibly async, then…
        return fetch$1('https://wizardappapi.azurewebsites.net/api/Identity/closed', {
            headers: {
                "Authorization": "Bearer " + access_token,
                "x-authScheme": "One"
            }
        });
    }
    function fetchEntitlements(access_token) {
        // do a thing, possibly async, then…
        return fetch$1('https://wizardappapi.azurewebsites.net/api/RemoteJsonFile/closed?file=entitlements.json', {
            headers: {
                "Authorization": "Bearer " + access_token,
                "x-authScheme": "One"
            }
        });
    }

    function init$3() {
        ESPA.registerRoute('page-access-token', _registerRouteCallback$3);
    }

    function _registerRouteCallback$3(data) {
        viewData$3 = data || {};
        var state = getState();
        return Promise.all([ESPA.loadResource.css(getCss())]).then(function (results) {
            viewData$3 = Object.assign(viewData$3, serviceData$3);
            viewData$3.access_token = state.access_token;
            viewData$3.data = {
                bar: "Bar This"
            };
            _displayView$3();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$3() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(factoryScope$5.tpl, viewData$3);
        document.getElementById('main-container').style.display = 'block';

        bindEvents({});
        var state = getState();
        if (state.access_token) {
            var el = document.getElementById('access_token');
            el.value = state.access_token;
        }
        setCurrentState({
            currentPage: wizardPage$2,
            nextPage: "page-one",
            backPage: "page-id-token",
            back: true,
            next: true,
            cancel: true
        });
    }

    function init$4() {
        ESPA.registerRoute('page-id-token', _registerRouteCallback$4);
    }

    function _registerRouteCallback$4(data) {
        viewData$4 = data || {};
        var state = getState();
        return Promise.all([ESPA.loadResource.css(getCss()), fetchIdToken()]).then(function (results) {
            var idTokenResult = results[1];
            viewData$4 = Object.assign(viewData$4, serviceData$4);
            if (idTokenResult.response.status != 200) {
                var el = document.getElementById('id_token_error');
                el.innerHTML = "id_token has not been created!";
            } else {
                var json = idTokenResult.json;
                state.id_token = json.id_token;
            }

            viewData$4.id_token = state.id_token;
            viewData$4.data = {
                bar: "id_token"
            };
            _displayView$4();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$4() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(factoryScope$6.tpl, viewData$4);
        document.getElementById('main-container').style.display = 'block';

        bindEvents({});
        var state = getState();
        if (state.access_token) {
            var el = document.getElementById('id_token');
            el.value = state.id_token;
        }
        setCurrentState({
            currentPage: wizardPage$3,
            nextPage: "page-access-token",
            backPage: null,
            back: false,
            next: true,
            cancel: true
        });
    }

    function registerRoutes() {
        //your routes here
        factory$1();

        factory$3();
        factory$4();
        factory$5();
        factory$6();
        //reset the default route
        ESPA.navigate('/');
    }

    function _main() {
        registerApiHosts();
        registerRoutes();
        //auto start the first route
        var state = getState();
        state.main = "started";
        ESPA.navigate('wizard-container');
    }
    return {
        setters: [function (_b) {}],
        execute: function () {
            resourceCache = {};

            loadResource = function () {
                function _load(tag) {
                    return function (url) {
                        // This promise will be used by Promise.all to determine success or failure
                        return new Promise(function (resolve, reject) {
                            if (resourceCache[url]) {
                                resolve(url);
                            } else {
                                var element = document.createElement(tag);
                                var parent = 'body';
                                var attr = 'src';

                                // Important success and error for the promise
                                element.onload = function () {
                                    resolve(url);
                                    //dont cache bootstrap script
                                    if (url.toLowerCase().indexOf('espa-bootstrap.js') == -1) {
                                        resourceCache[url] = url;
                                    }
                                };
                                element.onerror = function () {
                                    reject(url);
                                };

                                // Need to set different attributes depending on tag type
                                switch (tag) {
                                    case 'script':
                                        element.async = true;
                                        break;
                                    case 'link':
                                        element.type = 'text/css';
                                        element.rel = 'stylesheet';
                                        attr = 'href';
                                        parent = 'head';
                                }

                                // Inject into document to kick off loading
                                element[attr] = url;
                                document[parent].appendChild(element);
                            }
                        });
                    };
                }

                function _loadCallback(tag) {
                    return function (url, callback) {
                        if (resourceCache[url]) {
                            callback(url);
                        } else {
                            var element = document.createElement(tag);
                            var parent = 'body';
                            var attr = 'src';

                            // Important success and error for the promise
                            element.onload = function () {
                                callback(url);
                                //dont cache bootstrap script
                                if (url.toLowerCase().indexOf('espa-bootstrap.js') == -1) {
                                    resourceCache[url] = url;
                                }
                            };
                            element.onerror = function () {
                                callback(url, 'fail to load resource');
                            };

                            // Need to set different attributes depending on tag type
                            switch (tag) {
                                case 'script':
                                    element.async = true;
                                    break;
                                case 'link':
                                    element.type = 'text/css';
                                    element.rel = 'stylesheet';
                                    attr = 'href';
                                    parent = 'head';
                            }

                            // Inject into document to kick off loading
                            element[attr] = url;
                            document[parent].appendChild(element);
                        }
                    };
                }

                return {
                    css: _load('link'),
                    js: _load('script'),
                    img: _load('img'),
                    cssCallback: _loadCallback('link'),
                    jsCallback: _loadCallback('script'),
                    imgCallback: _loadCallback('img')
                };
            }();

            logger = function () {

                return {
                    trace: console.trace,
                    log: console.log,
                    debug: console.debug,
                    info: console.info,
                    warn: console.warn,
                    error: console.error
                };
            }();

            store = function () {
                var _store = [];
                function get(key) {
                    var value = _store[key];
                    if (typeof value !== 'undefined') {
                        ESPA.logger.debug('found ' + key + ' in store with value: ', value);
                        return value;
                    } else {
                        ESPA.logger.debug('cannot find key in store: ' + key);
                        return null;
                    }
                }

                function set(key, value) {
                    if (key) {
                        ESPA.logger.debug('save ' + key + ' in store with value: ', value);
                        _store[key] = value;
                    } else {
                        ESPA.logger.debug('cannot set key in store as key is empty');
                    }
                }

                return {
                    get: get,
                    set: set
                };
            }();

            tmpl = function () {
                var cache = {};

                return function (str, data) {
                    // Figure out if we're getting a template, or if we need to
                    // load the template - and be sure to cache the result.
                    var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :

                    // Generate a reusable function that will serve as a template
                    // generator (and which will be cached).
                    new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Introduce the data as local variables using with(){}
                    "with(obj){p.push('" +

                    // Convert the template into pure JavaScript
                    str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");

                    // Provide some basic currying to the user
                    return data ? fn(data) : fn;
                };
            }();

            routeData = {};
            routeCallback = {};

            //start listening to routes
            ESPA.route.start();window.ESPA = window.ESPA || {};
            window.ESPA.loadResource = loadResource;
            window.ESPA.getQueryString = getQueryString;
            window.ESPA.navigate = navigate;
            window.ESPA.registerRoute = registerRoute;
            window.ESPA.factoryMixin = factoryMixin;
            window.ESPA.logger = logger;
            window.ESPA.store = store;
            window.ESPA.tmpl = tmpl;

            window.ESPA.observable(window.ESPA);polyfillArrReady = [];
            hosts = {};
            __useDefault = "<div class=\"container\">\r\n    <h1 class=\"display-3\">\r\n        <%= data.wizard %>!</h1>\r\n    <p>\r\n        <div id=\"wizard-content\"></div>\r\n    </p>\r\n\r\n    <p>\r\n        <div id=\"wizard-button-bar\"></div>\r\n    </p>\r\n</div>";
            __useDefault$1 = "<div class=\"container\">\r\n    <p>\r\n        <a id=\"back-wizard\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Back &raquo;</a>\r\n        <a id=\"next-wizard\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Next &raquo;</a>\r\n        <a id=\"cancel-wizard\" class=\"btn btn-primary btn-lg\" disabled href=\"#\" role=\"button\">Cancel &raquo;</a>\r\n    </p>\r\n</div>";
            factoryScope = null;

            factory = function factory(injected) {
                var self = {
                    onStateChange: injected && injected.onStateChange ? injected.onStateChange : onStateChange

                    //overridding
                };factoryScope = ESPA.factoryMixin(self, injected);

                return factoryScope;
            };

            state = {
                currentPage: null,
                nextPage: null,
                backPage: null,
                back: null,
                next: null,
                finish: null,
                cancel: null,
                stateListener: null
            };
            wizardListener = factory({
                onStateChange: function onStateChange(state) {
                    ESPA.logger.log('onStateChange');
                    var backButtonClasses = document.getElementById("back-wizard").classList;
                    var nextButtonClasses = document.getElementById("next-wizard").classList;
                    var cancelButtonClasses = document.getElementById("cancel-wizard").classList;
                    if (state.next) {
                        nextButtonClasses.remove("disabled");
                    } else {
                        nextButtonClasses.add("disabled");
                    }
                    if (state.back) {
                        backButtonClasses.remove("disabled");
                    } else {
                        backButtonClasses.add("disabled");
                    }
                    if (state.cancel) {
                        cancelButtonClasses.remove("disabled");
                    } else {
                        cancelButtonClasses.add("disabled");
                    }
                }
            });
            viewData = null;
            serviceData = null;
            factoryScope$1 = null;

            factory$1 = function factory$$1(injected) {
                var self = {
                    cfg: injected && injected.cfg ? injected.cfg : null,
                    tpl: injected && injected.tpl ? injected.tpl : __useDefault,
                    tplBar: injected && injected.tplBar ? injected.tplBar : __useDefault$1

                    //overridding
                };factoryScope$1 = ESPA.factoryMixin(self, injected);

                init();

                return factoryScope$1;
            };

            factoryScope$2 = null;

            factory$2 = function factory(injected) {
                var self = {
                    onNext: injected && injected.onNext ? injected.onNext : onNext,
                    onBack: injected && injected.onBack ? injected.onBack : onBack,
                    onCancel: injected && injected.onCancel ? injected.onCancel : onCancel

                    //overridding
                };factoryScope$2 = ESPA.factoryMixin(self, injected);

                return factoryScope$2;
            };

            __useDefault$2 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">\r\n        <%= user %>\r\n    </h1>\r\n    <p>\r\n        <input id=\"activationKey\" placeholder=\"enter your activation key...\">\r\n        <input id=\"submitActivationKey\" type=\"button\" value=\"Submit Activation Key\"></p>\r\n\r\n    </p>\r\n    <p id=\"activationKeyEcho\"></p>\r\n    <ul id=\"my-list\">\r\n        <% for ( var i = 0; i < entitlements.length; i++ ) { \r\n                var entitlement = entitlements[i];%>\r\n        <li>\r\n            <%= entitlement.name %>\r\n        </li>\r\n\r\n        <% } %>\r\n\r\n\r\n    </ul>\r\n\r\n\r\n\r\n</div>";
            wizardPage = factory$2({
                onNext: function onNext() {
                    console.log("onNext");
                    return valueAsPromise(true);
                },
                onBack: function onBack() {
                    console.log("onBack");
                    return valueAsPromise(true);
                },
                onCancel: function onCancel() {
                    console.log("onCancel");
                    return valueAsPromise(true);
                }
            });
            viewData$1 = null;
            serviceData$1 = null;
            factoryScope$3 = null;

            factory$3 = function factory$$1(injected) {
                var self = {
                    cfg: injected && injected.cfg ? injected.cfg : null,
                    tpl: injected && injected.tpl ? injected.tpl : __useDefault$2

                    //overridding
                };factoryScope$3 = ESPA.factoryMixin(self, injected);

                init$1();

                return factoryScope$3;
            };

            __useDefault$3 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">Page Two</h1>\r\n    <p>\r\n        <input id=\"activationKey\" placeholder=\"enter your activation key...\">\r\n        <input id=\"submitActivationKey\" type=\"button\" value=\"Submit Activation Key\"></p>\r\n\r\n    </p>\r\n    <p id=\"activationKeyEcho\"></p>\r\n\r\n</div>";
            wizardPage$1 = factory$2({
                onNext: function onNext() {
                    console.log("onNext");
                    return valueAsPromise(true);
                },
                onBack: function onBack() {
                    console.log("onBack");
                    return valueAsPromise(true);
                },
                onCancel: function onCancel() {
                    console.log("onCancel");
                    return valueAsPromise(true);
                }
            });
            viewData$2 = null;
            serviceData$2 = null;
            factoryScope$4 = null;

            factory$4 = function factory$$1(injected) {
                var self = {
                    cfg: injected && injected.cfg ? injected.cfg : null,
                    tpl: injected && injected.tpl ? injected.tpl : __useDefault$3

                    //overridding
                };factoryScope$4 = ESPA.factoryMixin(self, injected);

                init$2();

                return factoryScope$4;
            };

            __useDefault$4 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">access_token</h1>\r\n    <p>\r\n\r\n        <input id=\"access_token\" placeholder=\"enter your access_token...\" value=\"<%= access_token%>\"\">\r\n    </p>\r\n    <p id=\"access_token_error\"></p>\r\n\r\n</div>";
            wizardPage$2 = factory$2({
                onNext: function onNext() {
                    console.log("onNext");
                    var el = document.getElementById('access_token');
                    var state = getState();
                    state.access_token = el.value;
                    var promise = Promise.all([fetchIdentity(state.access_token).then(function (result) {
                        return result;
                    }).catch(function (error) {
                        ESPA.logger.error(e);
                        throw new Error('apiPost error');
                    }), fetchEntitlements(state.access_token).then(function (result) {
                        return result;
                    }).catch(function (error) {
                        ESPA.logger.error(e);
                        throw new Error('apiPost error');
                    })]).then(function (results) {
                        var success = false;
                        var identityResult = results[0];
                        var entitlementResult = results[1];
                        if (identityResult.response.status != 200) {
                            var el = document.getElementById('access_token_error');
                            el.innerHTML = "access_token has been rejected!";
                        } else {
                            state.identity = identityResult.json;
                            success = true;
                        }
                        if (entitlementResult.response.status != 200) {
                            var el = document.getElementById('access_token_error');
                            el.innerHTML = "entitlementResult!";
                        } else {
                            state.entitlements = entitlementResult.json.entitlements;
                        }
                        return success;
                    }).catch(function (e) {
                        ESPA.logger.error(e);
                        return Promise.reject({
                            error: '_registerRouteCallback promise chain terminated'
                        });
                    });
                    var promise2 = new Promise(function (resolve, reject) {
                        // do a thing, possibly async, then…
                        fetchIdentity(state.access_token).then(function (result) {
                            if (result.response.status != 200) {
                                var el = document.getElementById('access_token_error');
                                el.innerHTML = "access_token has been rejected!";
                                resolve(false);
                            } else {
                                state.identity = result.json;
                                resolve(true);
                            }
                        }).catch(function (error) {
                            reject(false);
                            console.log('There has been a problem with your fetch operation: ', error.message);
                        });
                    });
                    return promise;
                },
                onBack: function onBack() {
                    console.log("onBack");
                    return valueAsPromise(true);
                },
                onCancel: function onCancel() {
                    console.log("onCancel");
                    return valueAsPromise(true);
                }
            });
            viewData$3 = null;
            serviceData$3 = null;
            factoryScope$5 = null;

            factory$5 = function factory$$1(injected) {
                var self = {
                    cfg: injected && injected.cfg ? injected.cfg : null,
                    tpl: injected && injected.tpl ? injected.tpl : __useDefault$4

                    //overridding
                };factoryScope$5 = ESPA.factoryMixin(self, injected);

                init$3();

                return factoryScope$5;
            };

            __useDefault$5 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">id_token</h1>\r\n    <p>\r\n\r\n        <input id=\"id_token\" placeholder=\"enter your id_token...\" value=\"<%= id_token%>\"\">\r\n    </p>\r\n    <p id=\"id_token_error\"></p>\r\n\r\n</div>";
            wizardPage$3 = factory$2({
                onNext: function onNext() {
                    console.log("onNext");
                    var el = document.getElementById('id_token');
                    var state = getState();
                    state.id_token = el.value;
                    var promise = new Promise(function (resolve, reject) {
                        // do a thing, possibly async, then…
                        bind(state.id_token).then(function (result) {
                            if (result.response.status != 200) {
                                var el = document.getElementById('id_token_error');
                                el.innerHTML = "id_token has been rejected!";
                                resolve(false);
                            } else {
                                var json = result.json;
                                state.access_token = json.access_token;
                                resolve(true);
                            }
                        }).catch(function (error) {
                            reject(false);
                            console.log('There has been a problem with your fetch operation: ', error.message);
                        });
                    });
                    return promise;
                },
                onBack: function onBack() {
                    console.log("onBack");
                    return valueAsPromise(true);
                },
                onCancel: function onCancel() {
                    console.log("onCancel");
                    return valueAsPromise(true);
                }
            });
            viewData$4 = null;
            serviceData$4 = null;
            factoryScope$6 = null;

            factory$6 = function factory$$1(injected) {
                var self = {
                    cfg: injected && injected.cfg ? injected.cfg : null,
                    tpl: injected && injected.tpl ? injected.tpl : __useDefault$5

                    //overridding
                };factoryScope$6 = ESPA.factoryMixin(self, injected);

                init$4();

                return factoryScope$6;
            };

            ESPA.store.set('app/context/name', 'myapp');
            if (!ESPA.store.get('app/context/mode')) {
                ESPA.store.set('app/context/mode', 'non-test');
            }

            if (ESPA.store.get('app/context/mode') === 'non-test') {
                polyfill(['Object.assign', 'Object.defineProperties', 'Object.entries', 'Object.keys', 'Object.values', 'fetch', 'Promise'], _main);
            }
        }
    };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=main.js.map