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
})({"../node_modules/gridjs/dist/gridjs.production.es.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = P;
exports.className = et;
exports.h = exports.createElement = m;
exports.createRef = b;
exports.html = $;
exports.useEffect = oe;
exports.useRef = ie;
exports.Row = exports.PluginPosition = exports.PluginBaseComponent = exports.Grid = exports.Dispatcher = exports.Config = exports.Cell = exports.BaseStore = exports.BaseComponent = exports.BaseActions = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t = function (e, n) {
  return (t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  })(e, n);
};

function e(e, n) {
  function r() {
    this.constructor = e;
  }

  t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
}

var n = function () {
  return (n = Object.assign || function (t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

    return t;
  }).apply(this, arguments);
};

function r(t, e, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function s(t) {
      try {
        u(r.next(t));
      } catch (t) {
        i(t);
      }
    }

    function a(t) {
      try {
        u(r.throw(t));
      } catch (t) {
        i(t);
      }
    }

    function u(t) {
      var e;
      t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
        t(e);
      })).then(s, a);
    }

    u((r = r.apply(t, e || [])).next());
  });
}

function o(t, e) {
  var n,
      r,
      o,
      i,
      s = {
    label: 0,
    sent: function () {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return i = {
    next: a(0),
    throw: a(1),
    return: a(2)
  }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;

  function a(i) {
    return function (a) {
      return function (i) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; s;) try {
          if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

          switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;

            case 4:
              return s.label++, {
                value: i[1],
                done: !1
              };

            case 5:
              s.label++, r = i[1], i = [0];
              continue;

            case 7:
              i = s.ops.pop(), s.trys.pop();
              continue;

            default:
              if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                s = 0;
                continue;
              }

              if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                s.label = i[1];
                break;
              }

              if (6 === i[0] && s.label < o[1]) {
                s.label = o[1], o = i;
                break;
              }

              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(i);
                break;
              }

              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }

          i = e.call(t, s);
        } catch (t) {
          i = [6, t], r = 0;
        } finally {
          n = o = 0;
        }

        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, a]);
    };
  }
}

function i() {
  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;

  var r = Array(t),
      o = 0;

  for (e = 0; e < n; e++) for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];

  return r;
}

var s,
    a,
    u,
    p,
    l,
    c,
    h,
    f = {},
    d = [],
    _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function g(t, e) {
  for (var n in e) t[n] = e[n];

  return t;
}

function y(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}

function m(t, e, n) {
  var r,
      o,
      i,
      s = arguments,
      a = {};

  for (i in e) "key" == i ? r = e[i] : "ref" == i ? o = e[i] : a[i] = e[i];

  if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(s[i]);
  if (null != n && (a.children = n), "function" == typeof t && null != t.defaultProps) for (i in t.defaultProps) void 0 === a[i] && (a[i] = t.defaultProps[i]);
  return v(t, a, r, o, null);
}

function v(t, e, n, r, o) {
  var i = {
    type: t,
    props: e,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (i.__v = i), null != s.vnode && s.vnode(i), i;
}

function b() {
  return {
    current: null
  };
}

function w(t) {
  return t.children;
}

function P(t, e) {
  this.props = t, this.context = e;
}

function S(t, e) {
  if (null == e) return t.__ ? S(t.__, t.__.__k.indexOf(t) + 1) : null;

  for (var n; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) return n.__e;

  return "function" == typeof t.type ? S(t) : null;
}

function k(t) {
  var e, n;

  if (null != (t = t.__) && null != t.__c) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) {
      t.__e = t.__c.base = n.__e;
      break;
    }

    return k(t);
  }
}

function x(t) {
  (!t.__d && (t.__d = !0) && u.push(t) && !C.__r++ || l !== s.debounceRendering) && ((l = s.debounceRendering) || p)(C);
}

function C() {
  for (var t; C.__r = u.length;) t = u.sort(function (t, e) {
    return t.__v.__b - e.__v.__b;
  }), u = [], t.some(function (t) {
    var e, n, r, o, i, s, a;
    t.__d && (s = (i = (e = t).__v).__e, (a = e.__P) && (n = [], (r = g({}, i)).__v = r, o = L(a, i, r, e.__n, void 0 !== a.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? S(i) : s, i.__h), R(n, i), o != s && k(i)));
  });
}

function N(t, e, n, r, o, i, s, a, u, p) {
  var l,
      c,
      h,
      _,
      g,
      m,
      b,
      P = r && r.__k || d,
      k = P.length;

  for (u == f && (u = null != s ? s[0] : k ? S(r, 0) : null), n.__k = [], l = 0; l < e.length; l++) if (null != (_ = n.__k[l] = null == (_ = e[l]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ ? v(null, _, null, null, _) : Array.isArray(_) ? v(w, {
    children: _
  }, null, null, null) : null != _.__e || null != _.__c ? v(_.type, _.props, _.key, null, _.__v) : _)) {
    if (_.__ = n, _.__b = n.__b + 1, null === (h = P[l]) || h && _.key == h.key && _.type === h.type) P[l] = void 0;else for (c = 0; c < k; c++) {
      if ((h = P[c]) && _.key == h.key && _.type === h.type) {
        P[c] = void 0;
        break;
      }

      h = null;
    }
    g = L(t, _, h = h || f, o, i, s, a, u, p), (c = _.ref) && h.ref != c && (b || (b = []), h.ref && b.push(h.ref, null, _), b.push(c, _.__c || g, _)), null != g ? (null == m && (m = g), u = T(t, _, h, P, s, g, u), p || "option" != n.type ? "function" == typeof n.type && (n.__d = u) : t.value = "") : u && h.__e == u && u.parentNode != t && (u = S(h));
  }

  if (n.__e = m, null != s && "function" != typeof n.type) for (l = s.length; l--;) null != s[l] && y(s[l]);

  for (l = k; l--;) null != P[l] && A(P[l], P[l]);

  if (b) for (l = 0; l < b.length; l++) j(b[l], b[++l], b[++l]);
}

function T(t, e, n, r, o, i, s) {
  var a, u, p;
  if (void 0 !== e.__d) a = e.__d, e.__d = void 0;else if (o == n || i != s || null == i.parentNode) t: if (null == s || s.parentNode !== t) t.appendChild(i), a = null;else {
    for (u = s, p = 0; (u = u.nextSibling) && p < r.length; p += 2) if (u == i) break t;

    t.insertBefore(i, s), a = s;
  }
  return void 0 !== a ? a : i.nextSibling;
}

function F(t, e, n) {
  "-" === e[0] ? t.setProperty(e, n) : t[e] = null == n ? "" : "number" != typeof n || _.test(e) ? n : n + "px";
}

function O(t, e, n, r, o) {
  var i, s, a;
  if (o && "className" == e && (e = "class"), "style" === e) {
    if ("string" == typeof n) t.style.cssText = n;else {
      if ("string" == typeof r && (t.style.cssText = r = ""), r) for (e in r) n && e in n || F(t.style, e, "");
      if (n) for (e in n) r && n[e] === r[e] || F(t.style, e, n[e]);
    }
  } else "o" === e[0] && "n" === e[1] ? (i = e !== (e = e.replace(/Capture$/, "")), (s = e.toLowerCase()) in t && (e = s), e = e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, a = i ? E : D, n ? r || t.addEventListener(e, a, i) : t.removeEventListener(e, a, i)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && "download" !== e && "href" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n));
}

function D(t) {
  this.l[t.type + !1](s.event ? s.event(t) : t);
}

function E(t) {
  this.l[t.type + !0](s.event ? s.event(t) : t);
}

function I(t, e, n) {
  var r, o;

  for (r = 0; r < t.__k.length; r++) (o = t.__k[r]) && (o.__ = t, o.__e && ("function" == typeof o.type && o.__k.length > 1 && I(o, e, n), e = T(n, o, o, t.__k, null, o.__e, e), "function" == typeof t.type && (t.__d = e)));
}

function L(t, e, n, r, o, i, a, u, p) {
  var l,
      c,
      h,
      f,
      d,
      _,
      y,
      m,
      v,
      b,
      S,
      k = e.type;

  if (void 0 !== e.constructor) return null;
  null != n.__h && (p = n.__h, u = e.__e = n.__e, e.__h = null, i = [u]), (l = s.__b) && l(e);

  try {
    t: if ("function" == typeof k) {
      if (m = e.props, v = (l = k.contextType) && r[l.__c], b = l ? v ? v.props.value : l.__ : r, n.__c ? y = (c = e.__c = n.__c).__ = c.__E : ("prototype" in k && k.prototype.render ? e.__c = c = new k(m, b) : (e.__c = c = new P(m, b), c.constructor = k, c.render = H), v && v.sub(c), c.props = m, c.state || (c.state = {}), c.context = b, c.__n = r, h = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != k.getDerivedStateFromProps && (c.__s == c.state && (c.__s = g({}, c.__s)), g(c.__s, k.getDerivedStateFromProps(m, c.__s))), f = c.props, d = c.state, h) null == k.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);else {
        if (null == k.getDerivedStateFromProps && m !== f && null != c.componentWillReceiveProps && c.componentWillReceiveProps(m, b), !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(m, c.__s, b) || e.__v === n.__v) {
          c.props = m, c.state = c.__s, e.__v !== n.__v && (c.__d = !1), c.__v = e, e.__e = n.__e, e.__k = n.__k, c.__h.length && a.push(c), I(e, u, t);
          break t;
        }

        null != c.componentWillUpdate && c.componentWillUpdate(m, c.__s, b), null != c.componentDidUpdate && c.__h.push(function () {
          c.componentDidUpdate(f, d, _);
        });
      }
      c.context = b, c.props = m, c.state = c.__s, (l = s.__r) && l(e), c.__d = !1, c.__v = e, c.__P = t, l = c.render(c.props, c.state, c.context), c.state = c.__s, null != c.getChildContext && (r = g(g({}, r), c.getChildContext())), h || null == c.getSnapshotBeforeUpdate || (_ = c.getSnapshotBeforeUpdate(f, d)), S = null != l && l.type == w && null == l.key ? l.props.children : l, N(t, Array.isArray(S) ? S : [S], e, n, r, o, i, a, u, p), c.base = e.__e, e.__h = null, c.__h.length && a.push(c), y && (c.__E = c.__ = null), c.__e = !1;
    } else null == i && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = U(n.__e, e, n, r, o, i, a, p);

    (l = s.diffed) && l(e);
  } catch (t) {
    e.__v = null, (p || null != i) && (e.__e = u, e.__h = !!p, i[i.indexOf(u)] = null), s.__e(t, e, n);
  }

  return e.__e;
}

function R(t, e) {
  s.__c && s.__c(e, t), t.some(function (e) {
    try {
      t = e.__h, e.__h = [], t.some(function (t) {
        t.call(e);
      });
    } catch (t) {
      s.__e(t, e.__v);
    }
  });
}

function U(t, e, n, r, o, i, s, a) {
  var u,
      p,
      l,
      c,
      h,
      _ = n.props,
      g = e.props;
  if (o = "svg" === e.type || o, null != i) for (u = 0; u < i.length; u++) if (null != (p = i[u]) && ((null === e.type ? 3 === p.nodeType : p.localName === e.type) || t == p)) {
    t = p, i[u] = null;
    break;
  }

  if (null == t) {
    if (null === e.type) return document.createTextNode(g);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, g.is && {
      is: g.is
    }), i = null, a = !1;
  }

  if (null === e.type) _ === g || a && t.data === g || (t.data = g);else {
    if (null != i && (i = d.slice.call(t.childNodes)), l = (_ = n.props || f).dangerouslySetInnerHTML, c = g.dangerouslySetInnerHTML, !a) {
      if (null != i) for (_ = {}, h = 0; h < t.attributes.length; h++) _[t.attributes[h].name] = t.attributes[h].value;
      (c || l) && (c && (l && c.__html == l.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }

    (function (t, e, n, r, o) {
      var i;

      for (i in n) "children" === i || "key" === i || i in e || O(t, i, null, n[i], r);

      for (i in e) o && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || O(t, i, e[i], n[i], r);
    })(t, g, _, o, a), c ? e.__k = [] : (u = e.props.children, N(t, Array.isArray(u) ? u : [u], e, n, r, "foreignObject" !== e.type && o, i, s, f, a)), a || ("value" in g && void 0 !== (u = g.value) && (u !== t.value || "progress" === e.type && !u) && O(t, "value", u, _.value, !1), "checked" in g && void 0 !== (u = g.checked) && u !== t.checked && O(t, "checked", u, _.checked, !1));
  }
  return t;
}

function j(t, e, n) {
  try {
    "function" == typeof t ? t(e) : t.current = e;
  } catch (t) {
    s.__e(t, n);
  }
}

function A(t, e, n) {
  var r, o, i;

  if (s.unmount && s.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || j(r, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (r = t.__c)) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (t) {
      s.__e(t, e);
    }
    r.base = r.__P = null;
  }

  if (r = t.__k) for (i = 0; i < r.length; i++) r[i] && A(r[i], e, n);
  null != o && y(o);
}

function H(t, e, n) {
  return this.constructor(t, n);
}

function M(t, e, n) {
  var r, o, i;
  s.__ && s.__(t, e), o = (r = n === c) ? null : n && n.__k || e.__k, t = m(w, null, [t]), i = [], L(e, (r ? e : n || e).__k = t, o || f, f, void 0 !== e.ownerSVGElement, n && !r ? [n] : o ? null : e.childNodes.length ? d.slice.call(e.childNodes) : null, i, n || f, r), R(i, t);
}

function W() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
    var e = 16 * Math.random() | 0;
    return ("x" == t ? e : 3 & e | 8).toString(16);
  });
}

s = {
  __e: function (t, e) {
    for (var n, r, o, i = e.__h; e = e.__;) if ((n = e.__c) && !n.__) try {
      if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(t)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(t), o = n.__d), o) return e.__h = i, n.__E = n;
    } catch (e) {
      t = e;
    }

    throw t;
  }
}, a = function (t) {
  return null != t && void 0 === t.constructor;
}, P.prototype.setState = function (t, e) {
  var n;
  n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = g({}, this.state), "function" == typeof t && (t = t(g({}, n), this.props)), t && g(n, t), null != t && this.__v && (e && this.__h.push(e), x(this));
}, P.prototype.forceUpdate = function (t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), x(this));
}, P.prototype.render = w, u = [], p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, c = f, h = 0;

var B = function () {
  function t(t) {
    this._id = t || W();
  }

  return Object.defineProperty(t.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}();

var q = {
  search: {
    placeholder: "Type a keyword..."
  },
  sort: {
    sortAsc: "Sort column ascending",
    sortDesc: "Sort column descending"
  },
  pagination: {
    previous: "Previous",
    next: "Next",
    navigate: function (t, e) {
      return "Page " + t + " of " + e;
    },
    page: function (t) {
      return "Page " + t;
    },
    showing: "Showing",
    of: "of",
    to: "to",
    results: "results"
  },
  loading: "Loading...",
  noRecordsFound: "No matching records found",
  error: "An error happened while fetching the data"
},
    G = function () {
  function t(t) {
    this._language = t, this._defaultLanguage = q;
  }

  return t.prototype.getString = function (t, e) {
    if (!e || !t) return null;
    var n = t.split("."),
        r = n[0];

    if (e[r]) {
      var o = e[r];
      return "string" == typeof o ? function () {
        return o;
      } : "function" == typeof o ? o : this.getString(n.slice(1).join("."), o);
    }

    return null;
  }, t.prototype.translate = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

    var r,
        o = this.getString(t, this._language);
    return (r = o || this.getString(t, this._defaultLanguage)) ? r.apply(void 0, e) : t;
  }, t;
}();

var z = function (t) {
  function n(e, n) {
    var r,
        o = t.call(this, e, n) || this;
    return o.config = function (t) {
      if (!t) return null;
      var e = Object.keys(t);
      return e.length ? t[e[0]].props.value : null;
    }(n), o.config && (o._ = (r = o.config.translator, function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

      return r.translate.apply(r, i([t], e));
    })), o;
  }

  return e(n, t), n;
}(P),
    K = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.render = function () {
    return m(this.props.parentElement, {
      dangerouslySetInnerHTML: {
        __html: this.props.content
      }
    });
  }, n.defaultProps = {
    parentElement: "span"
  }, n;
}(z);

exports.BaseComponent = z;

function $(t, e) {
  return m(K, {
    content: t,
    parentElement: e
  });
}

var V = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.update(e), n;
  }

  return e(n, t), n.prototype.cast = function (t) {
    return t instanceof HTMLElement ? $(t.outerHTML) : t;
  }, n.prototype.update = function (t) {
    return this.data = this.cast(t), this;
  }, n;
}(B),
    Y = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.cells = e || [], n;
  }

  return e(n, t), n.prototype.cell = function (t) {
    return this._cells[t];
  }, Object.defineProperty(n.prototype, "cells", {
    get: function () {
      return this._cells;
    },
    set: function (t) {
      this._cells = t;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.toArray = function () {
    return this.cells.map(function (t) {
      return t.data;
    });
  }, n.fromCells = function (t) {
    return new n(t.map(function (t) {
      return new V(t.data);
    }));
  }, Object.defineProperty(n.prototype, "length", {
    get: function () {
      return this.cells.length;
    },
    enumerable: !1,
    configurable: !0
  }), n;
}(B);

exports.Row = Y;
exports.Cell = V;

var X = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.rows = e instanceof Array ? e : e instanceof Y ? [e] : [], n;
  }

  return e(n, t), Object.defineProperty(n.prototype, "rows", {
    get: function () {
      return this._rows;
    },
    set: function (t) {
      this._rows = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "length", {
    get: function () {
      return this._length || this.rows.length;
    },
    set: function (t) {
      this._length = t;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.toArray = function () {
    return this.rows.map(function (t) {
      return t.toArray();
    });
  }, n.fromRows = function (t) {
    return new n(t.map(function (t) {
      return Y.fromCells(t.cells);
    }));
  }, n.fromArray = function (t) {
    return new n((t = function (t) {
      return !t[0] || t[0] instanceof Array ? t : [t];
    }(t)).map(function (t) {
      return new Y(t.map(function (t) {
        return new V(t);
      }));
    }));
  }, n;
}(B);

var Z,
    J = function () {
  function t() {}

  return t.prototype.init = function (t) {
    this.callbacks || (this.callbacks = {}), t && !this.callbacks[t] && (this.callbacks[t] = []);
  }, t.prototype.on = function (t, e) {
    return this.init(t), this.callbacks[t].push(e), this;
  }, t.prototype.off = function (t, e) {
    var n = t;
    return this.init(), this.callbacks[n] && 0 !== this.callbacks[n].length ? (this.callbacks[n] = this.callbacks[n].filter(function (t) {
      return t != e;
    }), this) : this;
  }, t.prototype.emit = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

    var r = t;
    return this.init(r), this.callbacks[r].length > 0 && (this.callbacks[r].forEach(function (t) {
      return t.apply(void 0, e);
    }), !0);
  }, t;
}();

!function (t) {
  t[t.Initiator = 0] = "Initiator", t[t.ServerFilter = 1] = "ServerFilter", t[t.ServerSort = 2] = "ServerSort", t[t.ServerLimit = 3] = "ServerLimit", t[t.Extractor = 4] = "Extractor", t[t.Transformer = 5] = "Transformer", t[t.Filter = 6] = "Filter", t[t.Sort = 7] = "Sort", t[t.Limit = 8] = "Limit";
}(Z || (Z = {}));

var Q = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n._props = {}, n.id = W(), e && n.setProps(e), n;
  }

  return e(n, t), n.prototype.process = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

    this.validateProps instanceof Function && this.validateProps.apply(this, t), this.emit.apply(this, i(["beforeProcess"], t));

    var n = this._process.apply(this, t);

    return this.emit.apply(this, i(["afterProcess"], t)), n;
  }, n.prototype.setProps = function (t) {
    return Object.assign(this._props, t), this.emit("propsUpdated", this), this;
  }, Object.defineProperty(n.prototype, "props", {
    get: function () {
      return this._props;
    },
    enumerable: !1,
    configurable: !0
  }), n;
}(J),
    tt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Filter;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._process = function (t) {
    return this.props.keyword ? (e = String(this.props.keyword).trim(), n = t, r = this.props.selector, e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), new X(n.rows.filter(function (t, n) {
      return t.cells.some(function (t, o) {
        if (!t) return !1;
        var i = "";
        if ("function" == typeof r) i = r(t.data, n, o);else if ("object" == typeof t.data) {
          var s = t.data;
          s && s.props && s.props.content && (i = s.props.content);
        } else i = String(t.data);
        return new RegExp(e, "gi").test(i);
      });
    }))) : t;
    var e, n, r;
  }, n;
}(Q);

function et() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

  var n = "gridjs";
  return "" + n + t.reduce(function (t, e) {
    return t + "-" + e;
  }, "");
}

function nt() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

  return t.filter(function (t) {
    return t;
  }).reduce(function (t, e) {
    return (t || "") + " " + e;
  }, "").trim();
}

var rt,
    ot = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.dispatcher = e, n._state = n.getInitialState(), e.register(n._handle.bind(n)), n;
  }

  return e(n, t), n.prototype._handle = function (t) {
    this.handle(t.type, t.payload);
  }, n.prototype.setState = function (t) {
    var e = this._state;
    this._state = t, this.emit("updated", t, e);
  }, Object.defineProperty(n.prototype, "state", {
    get: function () {
      return this._state;
    },
    enumerable: !1,
    configurable: !0
  }), n;
}(J),
    it = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.getInitialState = function () {
    return {
      keyword: null
    };
  }, n.prototype.handle = function (t, e) {
    if ("SEARCH_KEYWORD" === t) {
      var n = e.keyword;
      this.search(n);
    }
  }, n.prototype.search = function (t) {
    this.setState({
      keyword: t
    });
  }, n;
}(ot),
    st = function () {
  function t(t) {
    this.dispatcher = t;
  }

  return t.prototype.dispatch = function (t, e) {
    this.dispatcher.dispatch({
      type: t,
      payload: e
    });
  }, t;
}(),
    at = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.search = function (t) {
    this.dispatch("SEARCH_KEYWORD", {
      keyword: t
    });
  }, n;
}(st),
    ut = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), Object.defineProperty(r.prototype, "type", {
    get: function () {
      return Z.ServerFilter;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._process = function (t) {
    if (!this.props.keyword) return t;
    var e = {};
    return this.props.url && (e.url = this.props.url(t.url, this.props.keyword)), this.props.body && (e.body = this.props.body(t.body, this.props.keyword)), n(n({}, t), e);
  }, r;
}(Q),
    pt = new (function () {
  function t() {}

  return t.prototype.format = function (t, e) {
    return "[Grid.js] [" + e.toUpperCase() + "]: " + t;
  }, t.prototype.error = function (t, e) {
    void 0 === e && (e = !1);
    var n = this.format(t, "error");
    if (e) throw Error(n);
    console.error(n);
  }, t.prototype.warn = function (t) {
    console.warn(this.format(t, "warn"));
  }, t.prototype.info = function (t) {
    console.info(this.format(t, "info"));
  }, t;
}())(),
    lt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n;
}(z);

exports.PluginBaseComponent = lt;
exports.BaseActions = st;
exports.BaseStore = ot;
exports.PluginPosition = rt;
!function (t) {
  t[t.Header = 0] = "Header", t[t.Footer = 1] = "Footer", t[t.Cell = 2] = "Cell";
}(rt || (exports.PluginPosition = rt = {}));

var ct = function () {
  function t() {
    this.plugins = [];
  }

  return t.prototype.get = function (t) {
    var e = this.plugins.filter(function (e) {
      return e.id === t;
    });
    return e.length > 0 ? e[0] : null;
  }, t.prototype.add = function (t) {
    return t.id ? null !== this.get(t.id) ? (pt.error("Duplicate plugin ID: " + t.id), this) : (this.plugins.push(t), this) : (pt.error("Plugin ID cannot be empty"), this);
  }, t.prototype.remove = function (t) {
    return this.plugins.splice(this.plugins.indexOf(this.get(t)), 1), this;
  }, t.prototype.list = function (t) {
    return (null != t || null != t ? this.plugins.filter(function (e) {
      return e.position === t;
    }) : this.plugins).sort(function (t, e) {
      return t.order - e.order;
    });
  }, t;
}(),
    ht = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), r.prototype.render = function () {
    var t = this;

    if (this.props.pluginId) {
      var e = this.config.plugin.get(this.props.pluginId);
      return e ? m(w, {}, m(e.component, n(n({
        plugin: e
      }, e.props), this.props.props))) : null;
    }

    return void 0 !== this.props.position ? m(w, {}, this.config.plugin.list(this.props.position).map(function (e) {
      return m(e.component, n(n({
        plugin: e
      }, e.props), t.props.props));
    })) : null;
  }, r;
}(z),
    ft = function (t) {
  function n(e, n) {
    var r = t.call(this, e, n) || this;
    r.actions = new at(r.config.dispatcher), r.store = new it(r.config.dispatcher);
    var o = e.enabled,
        i = e.keyword;

    if (o) {
      i && r.actions.search(i), r.storeUpdatedFn = r.storeUpdated.bind(r), r.store.on("updated", r.storeUpdatedFn);
      var s = void 0;
      s = e.server ? new ut({
        keyword: e.keyword,
        url: e.server.url,
        body: e.server.body
      }) : new tt({
        keyword: e.keyword,
        selector: e.selector
      }), r.searchProcessor = s, r.config.pipeline.register(s);
    }

    return r;
  }

  return e(n, t), n.prototype.componentWillUnmount = function () {
    this.config.pipeline.unregister(this.searchProcessor), this.store.off("updated", this.storeUpdatedFn);
  }, n.prototype.storeUpdated = function (t) {
    this.searchProcessor.setProps({
      keyword: t.keyword
    });
  }, n.prototype.onChange = function (t) {
    var e = t.target.value;
    this.actions.search(e);
  }, n.prototype.render = function () {
    if (!this.props.enabled) return null;
    var t,
        e,
        n,
        r = this.onChange.bind(this);
    return this.searchProcessor instanceof ut && (t = r, e = this.props.debounceTimeout, r = function () {
      for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];

      return new Promise(function (o) {
        n && clearTimeout(n), n = setTimeout(function () {
          return o(t.apply(void 0, r));
        }, e);
      });
    }), m("div", {
      className: et("search")
    }, m("input", {
      type: "search",
      placeholder: this._("search.placeholder"),
      "aria-label": this._("search.placeholder"),
      onInput: r,
      className: nt(et("input"), et("search", "input")),
      value: this.store.state.keyword
    }));
  }, n.defaultProps = {
    debounceTimeout: 250
  }, n;
}(lt),
    dt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.validateProps = function () {
    if (isNaN(Number(this.props.limit)) || isNaN(Number(this.props.page))) throw Error("Invalid parameters passed");
  }, Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Limit;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._process = function (t) {
    var e = this.props.page,
        n = e * this.props.limit,
        r = (e + 1) * this.props.limit;
    return new X(t.rows.slice(n, r));
  }, n;
}(Q),
    _t = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), Object.defineProperty(r.prototype, "type", {
    get: function () {
      return Z.ServerLimit;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._process = function (t) {
    var e = {};
    return this.props.url && (e.url = this.props.url(t.url, this.props.page, this.props.limit)), this.props.body && (e.body = this.props.body(t.body, this.props.page, this.props.limit)), n(n({}, t), e);
  }, r;
}(Q),
    gt = function (t) {
  function n(e, n) {
    var r = t.call(this, e, n) || this;
    return r.state = {
      limit: e.limit,
      page: e.page || 0,
      total: 0
    }, r;
  }

  return e(n, t), n.prototype.componentWillMount = function () {
    var t = this;

    if (this.props.enabled) {
      var e = void 0;
      this.setTotalFromTabularFn = this.setTotalFromTabular.bind(this), this.props.server ? (e = new _t({
        limit: this.state.limit,
        page: this.state.page,
        url: this.props.server.url,
        body: this.props.server.body
      }), this.config.pipeline.on("afterProcess", this.setTotalFromTabularFn)) : (e = new dt({
        limit: this.state.limit,
        page: this.state.page
      })).on("beforeProcess", this.setTotalFromTabularFn), this.processor = e, this.config.pipeline.register(e), this.config.pipeline.on("error", function () {
        t.setState({
          total: 0,
          page: 0
        });
      });
    }
  }, n.prototype.setTotalFromTabular = function (t) {
    this.setTotal(t.length);
  }, n.prototype.onUpdate = function (t) {
    this.props.resetPageOnUpdate && t !== this.processor && this.setPage(0);
  }, n.prototype.componentDidMount = function () {
    this.onUpdateFn = this.onUpdate.bind(this), this.config.pipeline.on("updated", this.onUpdateFn);
  }, n.prototype.componentWillUnmount = function () {
    this.config.pipeline.unregister(this.processor), this.config.pipeline.off("updated", this.onUpdateFn);
  }, Object.defineProperty(n.prototype, "pages", {
    get: function () {
      return Math.ceil(this.state.total / this.state.limit);
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.setPage = function (t) {
    if (t >= this.pages || t < 0 || t === this.state.page) return null;
    this.setState({
      page: t
    }), this.processor.setProps({
      page: t
    });
  }, n.prototype.setTotal = function (t) {
    this.setState({
      total: t
    });
  }, n.prototype.renderPages = function () {
    var t = this;
    if (this.props.buttonsCount <= 0) return null;
    var e = Math.min(this.pages, this.props.buttonsCount),
        n = Math.min(this.state.page, Math.floor(e / 2));
    return this.state.page + Math.floor(e / 2) >= this.pages && (n = e - (this.pages - this.state.page)), m(w, null, this.pages > e && this.state.page - n > 0 && m(w, null, m("button", {
      tabIndex: 0,
      onClick: this.setPage.bind(this, 0),
      title: this._("pagination.firstPage")
    }, this._("1")), m("button", {
      tabIndex: -1,
      className: et("spread")
    }, "...")), Array.from(Array(e).keys()).map(function (e) {
      return t.state.page + (e - n);
    }).map(function (e) {
      return m("button", {
        tabIndex: 0,
        onClick: t.setPage.bind(t, e),
        className: t.state.page === e ? et("currentPage") : null,
        title: t._("pagination.page", e + 1)
      }, t._("" + (e + 1)));
    }), this.pages > e && this.pages > this.state.page + n + 1 && m(w, null, m("button", {
      tabIndex: -1,
      className: et("spread")
    }, "..."), m("button", {
      tabIndex: 0,
      onClick: this.setPage.bind(this, this.pages - 1),
      title: this._("pagination.page", this.pages)
    }, this._("" + this.pages))));
  }, n.prototype.renderSummary = function () {
    return m(w, null, this.props.summary && this.state.total > 0 && m("div", {
      role: "status",
      className: et("summary"),
      title: this._("pagination.navigate", this.state.page + 1, this.pages)
    }, this._("pagination.showing"), " ", m("b", null, this._("" + (this.state.page * this.state.limit + 1))), " ", this._("pagination.to"), " ", m("b", null, this._("" + Math.min((this.state.page + 1) * this.state.limit, this.state.total))), " ", this._("pagination.of"), " ", m("b", null, this._("" + this.state.total)), " ", this._("pagination.results")));
  }, n.prototype.render = function () {
    return this.props.enabled ? m("div", {
      className: et("pagination")
    }, this.renderSummary(), m("div", {
      className: et("pages")
    }, this.props.prevButton && m("button", {
      tabIndex: 0,
      disabled: 0 === this.state.page,
      onClick: this.setPage.bind(this, this.state.page - 1)
    }, this._("pagination.previous")), this.renderPages(), this.props.nextButton && m("button", {
      tabIndex: 0,
      disabled: this.pages === this.state.page + 1 || 0 === this.pages,
      onClick: this.setPage.bind(this, this.state.page + 1)
    }, this._("pagination.next")))) : null;
  }, n.defaultProps = {
    summary: !0,
    nextButton: !0,
    prevButton: !0,
    buttonsCount: 3,
    limit: 10,
    resetPageOnUpdate: !0
  }, n;
}(lt);

function yt(t, e) {
  return "string" == typeof t ? t.indexOf("%") > -1 ? e / 100 * parseInt(t, 10) : parseInt(t, 10) : t;
}

function mt(t) {
  return t ? Math.floor(t) + "px" : "";
}

function vt(t, e) {
  if (!t) return null;
  var n = t.querySelector('thead th[data-column-id="' + e + '"]');
  return n ? n.clientWidth : null;
}

var bt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.render = function () {
    if (this.props.tableRef.current) {
      var t = this.props.tableRef.current.base.cloneNode(!0);
      return t.className += " " + et("shadowTable"), t.style.position = "absolute", t.style.zIndex = "-2147483640", t.style.visibility = "hidden", t.style.tableLayout = "auto", t.style.width = "auto", t.style.padding = "0", t.style.margin = "0", t.style.border = "none", t.style.outline = "none", m("div", {
        ref: function (e) {
          e && e.appendChild(t);
        }
      });
    }

    return null;
  }, n;
}(z);

function wt(t) {
  if (!t) return "";
  var e = t.split(" ");
  return 1 === e.length && /([a-z][A-Z])+/g.test(t) ? t : e.map(function (t, e) {
    return 0 == e ? t.toLowerCase() : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  }).join("");
}

var Pt,
    St = function (t) {
  function r() {
    var e = t.call(this) || this;
    return e._columns = [], e;
  }

  return e(r, t), Object.defineProperty(r.prototype, "columns", {
    get: function () {
      return this._columns;
    },
    set: function (t) {
      this._columns = t;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.adjustWidth = function (t, e, n, o) {
    if (void 0 === o && (o = !0), !t) return this;
    var i = t.clientWidth,
        s = {
      current: null
    };

    if (e.current && o) {
      var a = m(bt, {
        tableRef: e
      });
      a.ref = s, M(a, n.current);
    }

    for (var u = 0, p = r.tabularFormat(this.columns).reduce(function (t, e) {
      return t.concat(e);
    }, []); u < p.length; u++) {
      var l = p[u];
      l.columns && l.columns.length > 0 || (!l.width && o ? l.width = mt(vt(s.current.base, l.id)) : l.width = mt(yt(l.width, i)));
    }

    return e.current && o && M(null, n.current), this;
  }, r.prototype.setSort = function (t, e) {
    for (var r = 0, o = e || this.columns || []; r < o.length; r++) {
      var i = o[r];
      i.columns && i.columns.length > 0 && (i.sort = {
        enabled: !1
      }), void 0 === i.sort && t.sort && (i.sort = {
        enabled: !0
      }), i.sort ? "object" == typeof i.sort && (i.sort = n({
        enabled: !0
      }, i.sort)) : i.sort = {
        enabled: !1
      }, i.columns && this.setSort(t, i.columns);
    }
  }, r.prototype.setFixedHeader = function (t, e) {
    for (var n = 0, r = e || this.columns || []; n < r.length; n++) {
      var o = r[n];
      void 0 === o.fixedHeader && (o.fixedHeader = t.fixedHeader), o.columns && this.setFixedHeader(t, o.columns);
    }
  }, r.prototype.setID = function (t) {
    for (var e = 0, n = t || this.columns || []; e < n.length; e++) {
      var r = n[e];
      r.id || "string" != typeof r.name || (r.id = wt(r.name)), r.id || pt.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'), r.columns && this.setID(r.columns);
    }
  }, r.prototype.populatePlugins = function (t, e) {
    for (var r = 0, o = e; r < o.length; r++) {
      var i = o[r];
      void 0 !== i.plugin && t.plugin.add(n(n({
        id: i.id,
        props: {}
      }, i.plugin), {
        position: rt.Cell
      }));
    }
  }, r.fromColumns = function (t) {
    for (var e = new r(), n = 0, o = t; n < o.length; n++) {
      var i = o[n];
      if ("string" == typeof i || a(i)) e.columns.push({
        name: i
      });else if ("object" == typeof i) {
        var s = i;
        s.columns && (s.columns = r.fromColumns(s.columns).columns), "object" == typeof s.plugin && void 0 === s.data && (s.data = null), e.columns.push(i);
      }
    }

    return e;
  }, r.fromUserConfig = function (t) {
    var e = new r();
    return t.from ? e.columns = r.fromHTMLTable(t.from).columns : t.columns ? e.columns = r.fromColumns(t.columns).columns : !t.data || "object" != typeof t.data[0] || t.data[0] instanceof Array || (e.columns = Object.keys(t.data[0]).map(function (t) {
      return {
        name: t
      };
    })), e.columns.length ? (e.setID(), e.setSort(t), e.setFixedHeader(t), e.populatePlugins(t, e.columns), e) : null;
  }, r.fromHTMLTable = function (t) {
    for (var e = new r(), n = 0, o = t.querySelector("thead").querySelectorAll("th"); n < o.length; n++) {
      var i = o[n];
      e.columns.push({
        name: i.innerHTML,
        width: i.width
      });
    }

    return e;
  }, r.tabularFormat = function (t) {
    var e = [],
        n = t || [],
        r = [];

    if (n && n.length) {
      e.push(n);

      for (var o = 0, i = n; o < i.length; o++) {
        var s = i[o];
        s.columns && s.columns.length && (r = r.concat(s.columns));
      }

      r.length && (e = e.concat(this.tabularFormat(r)));
    }

    return e;
  }, r.leafColumns = function (t) {
    var e = [],
        n = t || [];
    if (n && n.length) for (var r = 0, o = n; r < o.length; r++) {
      var i = o[r];
      i.columns && 0 !== i.columns.length || e.push(i), i.columns && (e = e.concat(this.leafColumns(i.columns)));
    }
    return e;
  }, r.maximumDepth = function (t) {
    return this.tabularFormat([t]).length - 1;
  }, r;
}(B),
    kt = function () {
  function t() {
    this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
  }

  return t.prototype.register = function (t) {
    var e = "ID_" + this._lastID++;
    return this._callbacks[e] = t, e;
  }, t.prototype.unregister = function (t) {
    if (!this._callbacks[t]) throw Error("Dispatcher.unregister(...): " + t + " does not map to a registered callback.");
    delete this._callbacks[t];
  }, t.prototype.waitFor = function (t) {
    if (!this._isDispatching) throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");

    for (var e = 0; e < t.length; e++) {
      var n = t[e];

      if (this._isPending[n]) {
        if (!this._isHandled[n]) throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for " + n + ".");
      } else {
        if (!this._callbacks[n]) throw Error("Dispatcher.waitFor(...): " + n + " does not map to a registered callback.");

        this._invokeCallback(n);
      }
    }
  }, t.prototype.dispatch = function (t) {
    if (this._isDispatching) throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");

    this._startDispatching(t);

    try {
      for (var e in this._callbacks) this._isPending[e] || this._invokeCallback(e);
    } finally {
      this._stopDispatching();
    }
  }, t.prototype.isDispatching = function () {
    return this._isDispatching;
  }, t.prototype._invokeCallback = function (t) {
    this._isPending[t] = !0, this._callbacks[t](this._pendingPayload), this._isHandled[t] = !0;
  }, t.prototype._startDispatching = function (t) {
    for (var e in this._callbacks) this._isPending[e] = !1, this._isHandled[e] = !1;

    this._pendingPayload = t, this._isDispatching = !0;
  }, t.prototype._stopDispatching = function () {
    delete this._pendingPayload, this._isDispatching = !1;
  }, t;
}(),
    xt = function () {},
    Ct = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.set(e), n;
  }

  return e(n, t), n.prototype.get = function () {
    return r(this, void 0, void 0, function () {
      var t;
      return o(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.data()];

          case 1:
            return [2, {
              data: t = e.sent(),
              total: t.length
            }];
        }
      });
    });
  }, n.prototype.set = function (t) {
    return t instanceof Array ? this.data = function () {
      return t;
    } : t instanceof Function && (this.data = t), this;
  }, n;
}(xt),
    Nt = function (t) {
  function r(e) {
    var n = t.call(this) || this;
    return n.options = e, n;
  }

  return e(r, t), r.prototype.handler = function (t) {
    return "function" == typeof this.options.handle ? this.options.handle(t) : t.ok ? t.json() : (pt.error("Could not fetch data: " + t.status + " - " + t.statusText, !0), null);
  }, r.prototype.get = function (t) {
    var e = n(n({}, this.options), t);
    return "function" == typeof e.data ? e.data(e) : fetch(e.url, e).then(this.handler.bind(this)).then(function (t) {
      return {
        data: e.then(t),
        total: "function" == typeof e.total ? e.total(t) : void 0
      };
    });
  }, r;
}(xt),
    Tt = function () {
  function t() {}

  return t.createFromUserConfig = function (t) {
    var e = null;
    return t.data && (e = new Ct(t.data)), t.from && (e = new Ct(this.tableElementToArray(t.from)), t.from.style.display = "none"), t.server && (e = new Nt(t.server)), e || pt.error("Could not determine the storage type", !0), e;
  }, t.tableElementToArray = function (t) {
    for (var e = [], n = 0, r = t.querySelector("tbody").querySelectorAll("tr"); n < r.length; n++) {
      for (var o = [], i = 0, s = r[n].querySelectorAll("td"); i < s.length; i++) {
        var a = s[i];
        1 === a.childNodes.length && a.childNodes[0].nodeType === Node.TEXT_NODE ? o.push(a.innerHTML) : o.push($(a.innerHTML));
      }

      e.push(o);
    }

    return e;
  }, t;
}(),
    Ft = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n._steps = new Map(), n.cache = new Map(), n.lastProcessorIndexUpdated = -1, e && e.forEach(function (t) {
      return n.register(t);
    }), n;
  }

  return e(n, t), n.prototype.clearCache = function () {
    this.cache = new Map(), this.lastProcessorIndexUpdated = -1;
  }, n.prototype.register = function (t, e) {
    if (void 0 === e && (e = null), null === t.type) throw Error("Processor type is not defined");
    t.on("propsUpdated", this.processorPropsUpdated.bind(this)), this.addProcessorByPriority(t, e), this.afterRegistered(t);
  }, n.prototype.unregister = function (t) {
    if (t) {
      var e = this._steps.get(t.type);

      e && e.length && (this._steps.set(t.type, e.filter(function (e) {
        return e != t;
      })), this.emit("updated", t));
    }
  }, n.prototype.addProcessorByPriority = function (t, e) {
    var n = this._steps.get(t.type);

    if (!n) {
      var r = [];
      this._steps.set(t.type, r), n = r;
    }

    if (null === e || e < 0) n.push(t);else if (n[e]) {
      var o = n.slice(0, e - 1),
          i = n.slice(e + 1);

      this._steps.set(t.type, o.concat(t).concat(i));
    } else n[e] = t;
  }, Object.defineProperty(n.prototype, "steps", {
    get: function () {
      for (var t = [], e = 0, n = this.getSortedProcessorTypes(); e < n.length; e++) {
        var r = n[e],
            o = this._steps.get(r);

        o && o.length && (t = t.concat(o));
      }

      return t.filter(function (t) {
        return t;
      });
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.getStepsByType = function (t) {
    return this.steps.filter(function (e) {
      return e.type === t;
    });
  }, n.prototype.getSortedProcessorTypes = function () {
    return Object.keys(Z).filter(function (t) {
      return !isNaN(Number(t));
    }).map(function (t) {
      return Number(t);
    });
  }, n.prototype.process = function (t) {
    return r(this, void 0, void 0, function () {
      var e, n, r, i, s, a, u;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            e = this.lastProcessorIndexUpdated, n = this.steps, r = t, o.label = 1;

          case 1:
            o.trys.push([1, 7,, 8]), i = 0, s = n, o.label = 2;

          case 2:
            return i < s.length ? (a = s[i], this.findProcessorIndexByID(a.id) >= e ? [4, a.process(r)] : [3, 4]) : [3, 6];

          case 3:
            return r = o.sent(), this.cache.set(a.id, r), [3, 5];

          case 4:
            r = this.cache.get(a.id), o.label = 5;

          case 5:
            return i++, [3, 2];

          case 6:
            return [3, 8];

          case 7:
            throw u = o.sent(), pt.error(u), this.emit("error", r), u;

          case 8:
            return this.lastProcessorIndexUpdated = n.length, this.emit("afterProcess", r), [2, r];
        }
      });
    });
  }, n.prototype.findProcessorIndexByID = function (t) {
    return this.steps.findIndex(function (e) {
      return e.id == t;
    });
  }, n.prototype.setLastProcessorIndex = function (t) {
    var e = this.findProcessorIndexByID(t.id);
    this.lastProcessorIndexUpdated > e && (this.lastProcessorIndexUpdated = e);
  }, n.prototype.processorPropsUpdated = function (t) {
    this.setLastProcessorIndex(t), this.emit("propsUpdated"), this.emit("updated", t);
  }, n.prototype.afterRegistered = function (t) {
    this.setLastProcessorIndex(t), this.emit("afterRegister"), this.emit("updated", t);
  }, n;
}(J),
    Ot = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Extractor;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._process = function (t) {
    return r(this, void 0, void 0, function () {
      return o(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.props.storage.get(t)];

          case 1:
            return [2, e.sent()];
        }
      });
    });
  }, n;
}(Q),
    Dt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Transformer;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._process = function (t) {
    var e = X.fromArray(t.data);
    return e.length = t.total, e;
  }, n;
}(Q),
    Et = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), Object.defineProperty(r.prototype, "type", {
    get: function () {
      return Z.Initiator;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._process = function () {
    return Object.entries(this.props.serverStorageOptions).filter(function (t) {
      t[0];
      return "function" != typeof t[1];
    }).reduce(function (t, e) {
      var r,
          o = e[0],
          i = e[1];
      return n(n({}, t), ((r = {})[o] = i, r));
    }, {});
  }, r;
}(Q),
    It = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Transformer;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.castData = function (t) {
    if (!t || !t.length) return [];
    if (!this.props.header || !this.props.header.columns) return t;
    var e = St.leafColumns(this.props.header.columns);
    return t[0] instanceof Array ? t.map(function (t) {
      var n = 0;
      return e.map(function (e, r) {
        return void 0 !== e.data ? (n++, "function" == typeof e.data ? e.data(t) : e.data) : t[r - n];
      });
    }) : "object" != typeof t[0] || t[0] instanceof Array ? [] : t.map(function (t) {
      return e.map(function (e, n) {
        return void 0 !== e.data ? "function" == typeof e.data ? e.data(t) : e.data : e.id ? t[e.id] : (pt.error("Could not find the correct cell for column at position " + n + ".\n                          Make sure either 'id' or 'selector' is defined for all columns."), null);
      });
    });
  }, n.prototype._process = function (t) {
    return {
      data: this.castData(t.data),
      total: t.total
    };
  }, n;
}(Q),
    Lt = function () {
  function t() {}

  return t.createFromConfig = function (t) {
    var e = new Ft();
    return t.storage instanceof Nt && e.register(new Et({
      serverStorageOptions: t.server
    })), e.register(new Ot({
      storage: t.storage
    })), e.register(new It({
      header: t.header
    })), e.register(new Dt()), e;
  }, t;
}(),
    Rt = function () {
  function t(e) {
    Object.assign(this, n(n({}, t.defaultConfig()), e)), this._userConfig = {};
  }

  return t.prototype.assign = function (t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var r = n[e];
      "_userConfig" !== r && (this[r] = t[r]);
    }

    return this;
  }, t.prototype.update = function (e) {
    return e ? (this._userConfig = n(n({}, this._userConfig), e), this.assign(t.fromUserConfig(this._userConfig)), this) : this;
  }, t.defaultConfig = function () {
    return {
      plugin: new ct(),
      dispatcher: new kt(),
      tableRef: {
        current: null
      },
      tempRef: {
        current: null
      },
      width: "100%",
      height: "auto",
      autoWidth: !0,
      style: {},
      className: {}
    };
  }, t.fromUserConfig = function (e) {
    var r = new t(e);
    return r._userConfig = e, "boolean" == typeof e.sort && e.sort && r.assign({
      sort: {
        multiColumn: !0
      }
    }), r.assign({
      header: St.fromUserConfig(r)
    }), r.assign({
      storage: Tt.createFromUserConfig(e)
    }), r.assign({
      pipeline: Lt.createFromConfig(r)
    }), r.assign({
      translator: new G(e.language)
    }), r.plugin.add({
      id: "search",
      position: rt.Header,
      component: ft,
      props: n({
        enabled: !0 === e.search || e.search instanceof Object
      }, e.search)
    }), r.plugin.add({
      id: "pagination",
      position: rt.Footer,
      component: gt,
      props: n({
        enabled: !0 === e.pagination || e.pagination instanceof Object
      }, e.pagination)
    }), r;
  }, t;
}();

exports.Config = Rt;
exports.Dispatcher = kt;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Loading = 1] = "Loading", t[t.Loaded = 2] = "Loaded", t[t.Rendered = 3] = "Rendered", t[t.Error = 4] = "Error";
}(Pt || (Pt = {}));

var Ut = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), r.prototype.content = function () {
    return this.props.column && "function" == typeof this.props.column.formatter ? this.props.column.formatter(this.props.cell.data, this.props.row, this.props.column) : this.props.column && this.props.column.plugin ? m(ht, {
      pluginId: this.props.column.id,
      props: {
        column: this.props.column,
        cell: this.props.cell,
        row: this.props.row
      }
    }) : this.props.cell.data;
  }, r.prototype.handleClick = function (t) {
    this.config.eventEmitter.emit("cellClick", t, this.props.cell, this.props.column, this.props.row);
  }, r.prototype.getCustomAttributes = function (t) {
    return t ? "function" == typeof t.attributes ? t.attributes(this.props.cell.data, this.props.row, this.props.column) : t.attributes : {};
  }, r.prototype.render = function () {
    return m("td", n({
      role: this.props.role,
      colSpan: this.props.colSpan,
      "data-column-id": this.props.column && this.props.column.id,
      className: nt(et("td"), this.props.className, this.config.className.td),
      style: n(n({}, this.props.style), this.config.style.td),
      onClick: this.handleClick.bind(this)
    }, this.getCustomAttributes(this.props.column)), this.content());
  }, r;
}(z),
    jt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.getColumn = function (t) {
    if (this.props.header) {
      var e = St.leafColumns(this.props.header.columns);
      if (e) return e[t];
    }

    return null;
  }, n.prototype.handleClick = function (t) {
    this.config.eventEmitter.emit("rowClick", t, this.props.row);
  }, n.prototype.getChildren = function () {
    var t = this;
    return this.props.children ? this.props.children : m(w, null, this.props.row.cells.map(function (e, n) {
      var r = t.getColumn(n);
      return r && r.hidden ? null : m(Ut, {
        key: e.id,
        cell: e,
        row: t.props.row,
        column: r
      });
    }));
  }, n.prototype.render = function () {
    return m("tr", {
      className: et("tr"),
      onClick: this.handleClick.bind(this)
    }, this.getChildren());
  }, n;
}(z),
    At = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.render = function () {
    return m(jt, null, m(Ut, {
      role: "alert",
      colSpan: this.props.colSpan,
      cell: new V(this.props.message),
      className: nt(et("message"), this.props.className ? this.props.className : null)
    }));
  }, n;
}(z),
    Ht = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.headerLength = function () {
    return this.props.header ? this.props.header.columns.length : 0;
  }, n.prototype.render = function () {
    var t = this;
    return m("tbody", {
      className: et("tbody")
    }, this.props.data && this.props.data.rows.map(function (e) {
      return m(jt, {
        key: e.id,
        row: e,
        header: t.props.header
      });
    }), this.props.status === Pt.Loading && (!this.props.data || 0 === this.props.data.length) && m(At, {
      message: this._("loading"),
      colSpan: this.headerLength(),
      className: et("loading")
    }), this.props.status === Pt.Rendered && this.props.data && 0 === this.props.data.length && m(At, {
      message: this._("noRecordsFound"),
      colSpan: this.headerLength(),
      className: et("notfound")
    }), this.props.status === Pt.Error && m(At, {
      message: this._("error"),
      colSpan: this.headerLength(),
      className: et("error")
    }));
  }, n;
}(z),
    Mt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.validateProps = function () {
    for (var t = 0, e = this.props.columns; t < e.length; t++) {
      var n = e[t];
      void 0 === n.direction && (n.direction = 1), 1 !== n.direction && -1 !== n.direction && pt.error("Invalid sort direction " + n.direction);
    }
  }, Object.defineProperty(n.prototype, "type", {
    get: function () {
      return Z.Sort;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.compare = function (t, e) {
    return t > e ? 1 : t < e ? -1 : 0;
  }, n.prototype.compareWrapper = function (t, e) {
    for (var n = 0, r = 0, o = this.props.columns; r < o.length; r++) {
      var i = o[r];
      if (0 !== n) break;
      var s = t.cells[i.index].data,
          a = e.cells[i.index].data;
      "function" == typeof i.compare ? n |= i.compare(s, a) * i.direction : n |= this.compare(s, a) * i.direction;
    }

    return n;
  }, n.prototype._process = function (t) {
    var e = i(t.rows);
    e.sort(this.compareWrapper.bind(this));
    var n = new X(e);
    return n.length = t.length, n;
  }, n;
}(Q),
    Wt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.getInitialState = function () {
    return [];
  }, n.prototype.handle = function (t, e) {
    if ("SORT_COLUMN" === t) {
      var n = e.index,
          r = e.direction,
          o = e.multi,
          i = e.compare;
      this.sortColumn(n, r, o, i);
    } else if ("SORT_COLUMN_TOGGLE" === t) {
      n = e.index, o = e.multi, i = e.compare;
      this.sortToggle(n, o, i);
    }
  }, n.prototype.sortToggle = function (t, e, n) {
    var r = i(this.state).find(function (e) {
      return e.index === t;
    });
    r ? this.sortColumn(t, 1 === r.direction ? -1 : 1, e, n) : this.sortColumn(t, 1, e, n);
  }, n.prototype.sortColumn = function (t, e, n, r) {
    var o = i(this.state),
        s = o.length,
        a = o.find(function (e) {
      return e.index === t;
    }),
        u = !1,
        p = !1,
        l = !1,
        c = !1;
    if (void 0 !== a ? n ? -1 === a.direction ? l = !0 : c = !0 : 1 === s ? c = !0 : s > 1 && (p = !0, u = !0) : 0 === s ? u = !0 : s > 0 && !n ? (u = !0, p = !0) : s > 0 && n && (u = !0), p && (o = []), u) o.push({
      index: t,
      direction: e,
      compare: r
    });else if (c) {
      var h = o.indexOf(a);
      o[h].direction = e;
    } else if (l) {
      var f = o.indexOf(a);
      o.splice(f, 1);
    }
    this.setState(o);
  }, n;
}(ot),
    Bt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.sortColumn = function (t, e, n, r) {
    this.dispatch("SORT_COLUMN", {
      index: t,
      direction: e,
      multi: n,
      compare: r
    });
  }, n.prototype.sortToggle = function (t, e, n) {
    this.dispatch("SORT_COLUMN_TOGGLE", {
      index: t,
      multi: e,
      compare: n
    });
  }, n;
}(st),
    qt = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), Object.defineProperty(r.prototype, "type", {
    get: function () {
      return Z.ServerSort;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._process = function (t) {
    var e = {};
    return this.props.url && (e.url = this.props.url(t.url, this.props.columns)), this.props.body && (e.body = this.props.body(t.body, this.props.columns)), n(n({}, t), e);
  }, r;
}(Q),
    Gt = function (t) {
  function r(e, n) {
    var r = t.call(this, e, n) || this;
    return r.actions = new Bt(r.config.dispatcher), r.store = new Wt(r.config.dispatcher), e.enabled && (r.sortProcessor = r.getOrCreateSortProcessor(), r.updateStateFn = r.updateState.bind(r), r.store.on("updated", r.updateStateFn), r.state = {
      direction: 0
    }), r;
  }

  return e(r, t), r.prototype.componentWillUnmount = function () {
    this.config.pipeline.unregister(this.sortProcessor), this.store.off("updated", this.updateStateFn), this.updateSortProcessorFn && this.store.off("updated", this.updateSortProcessorFn);
  }, r.prototype.updateState = function () {
    var t = this,
        e = this.store.state.find(function (e) {
      return e.index === t.props.index;
    });
    e ? this.setState({
      direction: e.direction
    }) : this.setState({
      direction: 0
    });
  }, r.prototype.updateSortProcessor = function (t) {
    this.sortProcessor.setProps({
      columns: t
    });
  }, r.prototype.getOrCreateSortProcessor = function () {
    var t = Z.Sort;
    this.config.sort && "object" == typeof this.config.sort.server && (t = Z.ServerSort);
    var e,
        r = this.config.pipeline.getStepsByType(t);
    return r.length > 0 ? e = r[0] : (this.updateSortProcessorFn = this.updateSortProcessor.bind(this), this.store.on("updated", this.updateSortProcessorFn), e = t === Z.ServerSort ? new qt(n({
      columns: this.store.state
    }, this.config.sort.server)) : new Mt({
      columns: this.store.state
    }), this.config.pipeline.register(e)), e;
  }, r.prototype.changeDirection = function (t) {
    t.preventDefault(), t.stopPropagation(), this.actions.sortToggle(this.props.index, !0 === t.shiftKey && this.config.sort.multiColumn, this.props.compare);
  }, r.prototype.render = function () {
    if (!this.props.enabled) return null;
    var t = this.state.direction,
        e = "neutral";
    return 1 === t ? e = "asc" : -1 === t && (e = "desc"), m("button", {
      tabIndex: -1,
      "aria-label": this._("sort.sort" + (1 === t ? "Desc" : "Asc")),
      title: this._("sort.sort" + (1 === t ? "Desc" : "Asc")),
      className: nt(et("sort"), et("sort", e)),
      onClick: this.changeDirection.bind(this)
    });
  }, r;
}(z),
    zt = function (t) {
  function r(e, n) {
    var r = t.call(this, e, n) || this;
    return r.sortRef = {
      current: null
    }, r.thRef = {
      current: null
    }, r.state = {
      style: {}
    }, r;
  }

  return e(r, t), r.prototype.isSortable = function () {
    return this.props.column.sort.enabled;
  }, r.prototype.onClick = function (t) {
    t.stopPropagation(), this.isSortable() && this.sortRef.current.changeDirection(t);
  }, r.prototype.keyDown = function (t) {
    this.isSortable() && 13 === t.which && this.onClick(t);
  }, r.prototype.componentDidMount = function () {
    var t = this;
    setTimeout(function () {
      if (t.props.column.fixedHeader && t.thRef.current) {
        var e = t.thRef.current.offsetTop;
        "number" == typeof e && t.setState({
          style: {
            top: e
          }
        });
      }
    }, 0);
  }, r.prototype.content = function () {
    return void 0 !== this.props.column.name ? this.props.column.name : void 0 !== this.props.column.plugin ? m(ht, {
      pluginId: this.props.column.plugin.id,
      props: {
        column: this.props.column
      }
    }) : null;
  }, r.prototype.render = function () {
    var t = {};
    return this.isSortable() && (t.tabIndex = 0), m("th", n({
      ref: this.thRef,
      "data-column-id": this.props.column && this.props.column.id,
      className: nt(et("th"), this.isSortable() ? et("th", "sort") : null, this.props.column.fixedHeader ? et("th", "fixed") : null, this.config.className.th),
      onClick: this.onClick.bind(this),
      style: n(n(n(n({}, this.config.style.th), {
        width: this.props.column.width
      }), this.state.style), this.props.style),
      onKeyDown: this.keyDown.bind(this),
      rowSpan: this.props.rowSpan > 1 ? this.props.rowSpan : void 0,
      colSpan: this.props.colSpan > 1 ? this.props.colSpan : void 0
    }, t), this.content(), this.isSortable() && m(Gt, n({
      ref: this.sortRef,
      index: this.props.index
    }, this.props.column.sort)));
  }, r;
}(z);

var Kt,
    $t,
    Vt,
    Yt = function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(n, t), n.prototype.renderColumn = function (t, e, n, r) {
    var o = function (t, e, n) {
      var r = St.maximumDepth(t),
          o = n - e;
      return {
        rowSpan: Math.floor(o - r - r / o),
        colSpan: t.columns && t.columns.length || 1
      };
    }(t, e, r),
        i = o.rowSpan,
        s = o.colSpan;

    return m(zt, {
      column: t,
      index: n,
      colSpan: s,
      rowSpan: i
    });
  }, n.prototype.renderRow = function (t, e, n) {
    var r = this,
        o = St.leafColumns(this.props.header.columns);
    return m(jt, null, t.map(function (t) {
      return t.hidden ? null : r.renderColumn(t, e, o.indexOf(t), n);
    }));
  }, n.prototype.renderRows = function () {
    var t = this,
        e = St.tabularFormat(this.props.header.columns);
    return e.map(function (n, r) {
      return t.renderRow(n, r, e.length);
    });
  }, n.prototype.render = function () {
    return this.props.header ? m("thead", {
      key: this.props.header.id,
      className: et("thead")
    }, this.renderRows()) : null;
  }, n;
}(z),
    Xt = function (t) {
  function r() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e(r, t), r.prototype.render = function () {
    return m("table", {
      role: "grid",
      className: nt(et("table"), this.config.className.table),
      style: n(n({}, this.config.style.table), {
        width: this.props.width,
        height: this.props.height
      })
    }, m(Yt, {
      header: this.props.header
    }), m(Ht, {
      data: this.props.data,
      status: this.props.status,
      header: this.props.header
    }));
  }, r;
}(z),
    Zt = 0,
    Jt = [],
    Qt = s.__r,
    te = s.diffed,
    ee = s.__c,
    ne = s.unmount;

function re(t, e) {
  s.__h && s.__h($t, t, Zt || e), Zt = 0;
  var n = $t.__H || ($t.__H = {
    __: [],
    __h: []
  });
  return t >= n.__.length && n.__.push({}), n.__[t];
}

function oe(t, e) {
  var n = re(Kt++, 3);
  !s.__s && le(n.__H, e) && (n.__ = t, n.__H = e, $t.__H.__h.push(n));
}

function ie(t) {
  return Zt = 5, function (t, e) {
    var n = re(Kt++, 7);
    return le(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
  }(function () {
    return {
      current: t
    };
  }, []);
}

function se() {
  Jt.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(ue), t.__H.__h.forEach(pe), t.__H.__h = [];
    } catch (e) {
      t.__H.__h = [], s.__e(e, t.__v);
    }
  }), Jt = [];
}

s.__r = function (t) {
  Qt && Qt(t), Kt = 0;
  var e = ($t = t.__c).__H;
  e && (e.__h.forEach(ue), e.__h.forEach(pe), e.__h = []);
}, s.diffed = function (t) {
  te && te(t);
  var e = t.__c;
  e && e.__H && e.__H.__h.length && (1 !== Jt.push(e) && Vt === s.requestAnimationFrame || ((Vt = s.requestAnimationFrame) || function (t) {
    var e,
        n = function () {
      clearTimeout(r), ae && cancelAnimationFrame(e), setTimeout(t);
    },
        r = setTimeout(n, 100);

    ae && (e = requestAnimationFrame(n));
  })(se));
}, s.__c = function (t, e) {
  e.some(function (t) {
    try {
      t.__h.forEach(ue), t.__h = t.__h.filter(function (t) {
        return !t.__ || pe(t);
      });
    } catch (n) {
      e.some(function (t) {
        t.__h && (t.__h = []);
      }), e = [], s.__e(n, t.__v);
    }
  }), ee && ee(t, e);
}, s.unmount = function (t) {
  ne && ne(t);
  var e = t.__c;
  if (e && e.__H) try {
    e.__H.__.forEach(ue);
  } catch (t) {
    s.__e(t, e.__v);
  }
};
var ae = "function" == typeof requestAnimationFrame;

function ue(t) {
  "function" == typeof t.__c && t.__c();
}

function pe(t) {
  t.__c = t.__();
}

function le(t, e) {
  return !t || t.length !== e.length || e.some(function (e, n) {
    return e !== t[n];
  });
}

var ce = function (t) {
  function r(e, n) {
    var r = t.call(this, e, n) || this;
    return r.headerRef = ie(null), r.state = {
      isActive: !0
    }, r;
  }

  return e(r, t), r.prototype.componentDidMount = function () {
    0 === this.headerRef.current.children.length && this.setState({
      isActive: !1
    });
  }, r.prototype.render = function () {
    return this.state.isActive ? m("div", {
      ref: this.headerRef,
      className: nt(et("head"), this.config.className.header),
      style: n({}, this.config.style.header)
    }, m(ht, {
      position: rt.Header
    })) : null;
  }, r;
}(z),
    he = function (t) {
  function r(e, n) {
    var r = t.call(this, e, n) || this;
    return r.footerRef = ie(null), r.state = {
      isActive: !0
    }, r;
  }

  return e(r, t), r.prototype.componentDidMount = function () {
    0 === this.footerRef.current.children.length && this.setState({
      isActive: !1
    });
  }, r.prototype.render = function () {
    return this.state.isActive ? m("div", {
      ref: this.footerRef,
      className: nt(et("footer"), this.config.className.footer),
      style: n({}, this.config.style.footer)
    }, m(ht, {
      position: rt.Footer
    })) : null;
  }, r;
}(z),
    fe = function (t) {
  function i(e, n) {
    var r = t.call(this, e, n) || this;
    return r.configContext = function (t, e) {
      var n = {
        __c: e = "__cC" + h++,
        __: t,
        Consumer: function (t, e) {
          return t.children(e);
        },
        Provider: function (t, n, r) {
          return this.getChildContext || (n = [], (r = {})[e] = this, this.getChildContext = function () {
            return r;
          }, this.shouldComponentUpdate = function (t) {
            this.props.value !== t.value && n.some(x);
          }, this.sub = function (t) {
            n.push(t);
            var e = t.componentWillUnmount;

            t.componentWillUnmount = function () {
              n.splice(n.indexOf(t), 1), e && e.call(t);
            };
          }), t.children;
        }
      };
      return n.Provider.__ = n.Consumer.contextType = n;
    }(null), r.state = {
      status: Pt.Loading,
      header: e.header,
      data: null
    }, r;
  }

  return e(i, t), i.prototype.processPipeline = function () {
    return r(this, void 0, void 0, function () {
      var t, e;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            this.props.config.eventEmitter.emit("beforeLoad"), this.setState({
              status: Pt.Loading
            }), n.label = 1;

          case 1:
            return n.trys.push([1, 3,, 4]), [4, this.props.pipeline.process()];

          case 2:
            return t = n.sent(), this.setState({
              data: t,
              status: Pt.Loaded
            }), this.props.config.eventEmitter.emit("load", t), [3, 4];

          case 3:
            return e = n.sent(), pt.error(e), this.setState({
              status: Pt.Error,
              data: null
            }), [3, 4];

          case 4:
            return [2];
        }
      });
    });
  }, i.prototype.componentDidMount = function () {
    return r(this, void 0, void 0, function () {
      var t;
      return o(this, function (e) {
        switch (e.label) {
          case 0:
            return t = this.props.config, [4, this.processPipeline()];

          case 1:
            return e.sent(), t.header && this.state.data && this.state.data.length && this.setState({
              header: t.header.adjustWidth(t.container, t.tableRef, t.tempRef, t.autoWidth)
            }), this.processPipelineFn = this.processPipeline.bind(this), this.props.pipeline.on("updated", this.processPipelineFn), [2];
        }
      });
    });
  }, i.prototype.componentWillUnmount = function () {
    this.props.pipeline.off("updated", this.processPipelineFn);
  }, i.prototype.componentDidUpdate = function (t, e) {
    e.status != Pt.Rendered && this.state.status == Pt.Loaded && (this.setState({
      status: Pt.Rendered
    }), this.props.config.eventEmitter.emit("ready"));
  }, i.prototype.render = function () {
    return m(this.configContext.Provider, {
      value: this.props.config
    }, m("div", {
      role: "complementary",
      className: nt("gridjs", et("container"), this.state.status === Pt.Loading ? et("loading") : null, this.props.config.className.container),
      style: n(n({}, this.props.config.style.container), {
        width: this.props.width
      })
    }, this.state.status === Pt.Loading && m("div", {
      className: et("loading-bar")
    }), m(ce, null), m("div", {
      className: et("wrapper"),
      style: {
        width: this.props.width,
        height: this.props.height
      }
    }, m(Xt, {
      ref: this.props.config.tableRef,
      data: this.state.data,
      header: this.state.header,
      width: this.props.width,
      height: this.props.height,
      status: this.state.status
    })), m(he, null)), m("div", {
      ref: this.props.config.tempRef,
      id: "gridjs-temp",
      className: et("temp")
    }));
  }, i;
}(z),
    de = function (t) {
  function n(e) {
    var n = t.call(this) || this;
    return n.config = new Rt({
      instance: n,
      eventEmitter: n
    }).update(e), n.plugin = n.config.plugin, n;
  }

  return e(n, t), n.prototype.updateConfig = function (t) {
    return this.config.update(t), this;
  }, n.prototype.createElement = function () {
    return m(fe, {
      config: this.config,
      pipeline: this.config.pipeline,
      header: this.config.header,
      width: this.config.width,
      height: this.config.height
    });
  }, n.prototype.forceRender = function () {
    return this.config && this.config.container || pt.error("Container is empty. Make sure you call render() before forceRender()", !0), this.config.pipeline.clearCache(), M(null, this.config.container), M(this.createElement(), this.config.container), this;
  }, n.prototype.render = function (t) {
    return t || pt.error("Container element cannot be null", !0), t.childNodes.length > 0 ? (pt.error("The container element " + t + " is not empty. Make sure the container is empty and call render() again"), this) : (this.config.container = t, M(this.createElement(), t), this);
  }, n;
}(J);

exports.Grid = de;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/gridjs/dist/theme/mermaid.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../data/grid.json":[function(require,module,exports) {
module.exports = {
  "schoolData": [{
    "school": "Columbia",
    "baseball": 25,
    "hockey": 25,
    "tennis": 25,
    "rowing": 40,
    "track": 35,
    "football": 25,
    "golf": 58,
    "basketball": 2,
    "xc": 45,
    "fencing": 2.63,
    "swim": 4,
    "volleyball": 4
  }, {
    "school": "Brown",
    "baseball": 16,
    "hockey": 14,
    "tennis": 12,
    "rowing": 10,
    "track": 12,
    "football": 7,
    "golf": 19,
    "basketball": 12,
    "xc": 40,
    "fencing": 12,
    "swim": 11,
    "volleyball": 12
  }, {
    "school": "Cornell",
    "baseball": 11,
    "hockey": 12,
    "tennis": 9,
    "rowing": 12,
    "track": 7,
    "football": 12,
    "golf": 24,
    "basketball": 12,
    "xc": 24,
    "fencing": 12,
    "swim": 9,
    "volleyball": 12
  }, {
    "school": "Darthmouth",
    "baseball": 7,
    "hockey": 13,
    "tennis": 12,
    "rowing": 13,
    "track": 4,
    "football": 4,
    "golf": 14,
    "basketball": 6,
    "xc": 14,
    "fencing": null,
    "swim": 5,
    "volleyball": 6
  }, {
    "school": "Harvard",
    "baseball": 17,
    "hockey": 17,
    "tennis": 20,
    "rowing": 14,
    "track": 16,
    "football": 17,
    "golf": 40,
    "basketball": 16,
    "xc": 45,
    "fencing": 6,
    "swim": 16,
    "volleyball": 6
  }, {
    "school": "Penn",
    "baseball": 17,
    "hockey": 18,
    "tennis": 9,
    "rowing": 20,
    "track": 3,
    "football": 3,
    "golf": 45,
    "basketball": 7,
    "xc": 0,
    "fencing": 4,
    "swim": 8,
    "volleyball": 7
  }, {
    "school": "Princeton",
    "baseball": 9,
    "hockey": 11,
    "tennis": 8,
    "rowing": 12,
    "track": 9,
    "football": 7,
    "golf": 24,
    "basketball": 10,
    "xc": 21,
    "fencing": 10,
    "swim": 12,
    "volleyball": 5
  }, {
    "school": "Yale",
    "baseball": 20,
    "hockey": 20,
    "tennis": 10,
    "rowing": 50,
    "track": 20,
    "football": 18,
    "golf": 28,
    "basketball": 9,
    "xc": 28,
    "fencing": 9,
    "swim": 9,
    "volleyball": 9
  }],
  "columns": [{
    "id": "school",
    "name": "School"
  }, {
    "id": "baseball",
    "name": "Baseball"
  }, {
    "id": "hockey",
    "name": "Field Hockey"
  }, {
    "id": "tennis",
    "name": "Tennis"
  }, {
    "id": "rowing",
    "name": "Rowing"
  }, {
    "id": "track",
    "name": "Track and Field"
  }, {
    "id": "football",
    "name": "Football"
  }, {
    "id": "golf",
    "name": "Golf"
  }, {
    "id": "basketball",
    "name": "Basketball"
  }, {
    "id": "xc",
    "name": "XC"
  }, {
    "id": "fencing",
    "name": "Fencing"
  }, {
    "id": "swim",
    "name": "Swimming and Diving"
  }, {
    "id": "volleyball",
    "name": "Volleyball"
  }]
};
},{}],"scripts/grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _gridjs = require("gridjs");

require("gridjs/dist/theme/mermaid.css");

var _grid = _interopRequireDefault(require("../../data/grid.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var count = 4;

var intial_column = _grid.default.columns.slice(0, 4);

var selectedColumns = _grid.default.columns.slice(1, 4);

var grid = new _gridjs.Grid({
  columns: intial_column,
  sort: true,
  data: _grid.default.schoolData
});
var clicked = Array(11).fill(false);
var clicked_ids = []; //code for dropdown buttom

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  } else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;
}

function toggleMenuDisplay(e) {
  var dropdown = e.currentTarget.parentNode;
  var menu = dropdown.querySelector('.menu');
  var icon = dropdown.querySelector('.fa-angle-right');
  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
}

function handleOptionSelected(e) {
  var id = e.target.id;
  var titleElem = document.querySelector('.dropdown .title');
  var icon = document.querySelector('.dropdown .title .fa');
  var element = document.getElementById(id);
  var sport_id = parseInt(element.id);

  if (clicked[sport_id]) {
    element.style.backgroundColor = "rgba(0,0,0,0)";
    var index = selectedColumns.indexOf(_grid.default.columns[sport_id]);
    reRender(index, false);
    titleElem.textContent = 'Removed ' + e.target.textContent + ' ';
    clicked[sport_id] = false;
  } else {
    element.style.backgroundColor = "rgba(0,0,0,0.1)";
    reRender(sport_id, true);
    titleElem.textContent = 'Added ' + e.target.textContent + ' ';
    clicked[sport_id] = true;
    clicked_ids.push(sport_id);
  }

  titleElem.appendChild(icon); //trigger custom event

  document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); //setTimeout is used so transition is properly shown

  setTimeout(function () {
    return toggleClass(icon, 'rotate-90', 0);
  });
}

function reRender(sport, add) {
  //just need to change what you put into unshift
  //count is just a placeholder for now
  if (add) {
    selectedColumns.push(_grid.default.columns[sport]);
  } else {
    selectedColumns.splice(sport, 1);
  } //document.getElementById("button").innerHTML = count


  if (selectedColumns.length > 5) {
    //gets rid of the last column
    var removed_id = clicked_ids.shift();
    var element = document.getElementById(removed_id.toString());
    element.style.backgroundColor = "rgba(0,0,0,0)";
    clicked[removed_id] = false;
    selectedColumns.shift();
  } //updates the grid


  grid.updateConfig({
    columns: _grid.default.columns.slice(0, 1).concat(selectedColumns)
  }).forceRender();
}

function _default() {
  grid.render(document.getElementById('grid'));

  for (var i = 1; i < count; i++) {
    clicked_ids.push(i);
    clicked[i] = true;
    var element = document.getElementById(i.toString());
    element.style.backgroundColor = "rgba(0,0,0,0.1)";
  } //get elements


  var dropdownTitle = document.querySelector('.dropdown .title');
  var dropdownOptions = document.querySelectorAll('.dropdown .option'); //bind listeners to these elements

  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  dropdownOptions.forEach(function (option) {
    return option.addEventListener('click', handleOptionSelected);
  });
}
},{"gridjs":"../node_modules/gridjs/dist/gridjs.production.es.min.js","gridjs/dist/theme/mermaid.css":"../node_modules/gridjs/dist/theme/mermaid.css","../../data/grid.json":"../data/grid.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60913" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/grid.js"], "script")
//# sourceMappingURL=/grid.a3aad1ee.js.map