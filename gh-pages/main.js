import {
  $ as me,
  $a as qs,
  $b as cr,
  A as lo,
  Aa as Ws,
  Ab as $t,
  B as Te,
  Ba as St,
  Bb as ge,
  Bc as zc,
  C as Sn,
  Ca as st,
  Cb as Ze,
  Cc as Wm,
  D as ci,
  Da as Mn,
  Db as Yt,
  Dc as Gm,
  E as er,
  Ea as gt,
  Eb as Qi,
  F as Ks,
  Fa as vm,
  Fb as ve,
  G as ir,
  Ga as Gs,
  Gb as Qt,
  H as Ct,
  Ha as bm,
  Hb as Zt,
  I as Sc,
  Ia as bi,
  Ib as Rm,
  J as $i,
  Ja as pe,
  Jb as Tm,
  K as gi,
  Ka as mo,
  Kb as lr,
  L as kc,
  La as or,
  Lb as Bt,
  M as Mc,
  Ma as sr,
  Mb as Fe,
  N as Lt,
  Na as _m,
  Nb as Tn,
  O as lm,
  Oa as ym,
  Ob as Fc,
  P as cm,
  Pa as wm,
  Pb as Pc,
  Q as Oe,
  Qa as xm,
  Qb as Lc,
  R as Ki,
  Ra as Cm,
  Rb as ce,
  S as Wi,
  Sa as Em,
  Sb as Tt,
  T as Rc,
  Ta as Im,
  Tb as Om,
  U as dm,
  Ua as De,
  Ub as be,
  V as um,
  Va as fo,
  Vb as _e,
  W as hm,
  Wa as ft,
  Wb as Fm,
  X as nr,
  Xa as P,
  Xb as Nc,
  Y as co,
  Ya as po,
  Yb as ta,
  Z as vi,
  Za as go,
  Zb as ea,
  _ as Ut,
  _a as Dm,
  _b as jc,
  a as C,
  aa as Vt,
  ab as Ys,
  ac as Vc,
  b as Z,
  ba as Et,
  bb as Qs,
  bc as Pm,
  c as rm,
  ca as rr,
  cb as ar,
  cc as ye,
  d as Hs,
  da as V,
  db as Oc,
  dc as Lm,
  e as s_,
  ea as ut,
  eb as qi,
  ec as we,
  f as a_,
  fa as mm,
  fb as Am,
  fc as yi,
  g as om,
  ga as Y,
  gb as Ht,
  gc as Xe,
  h as Ic,
  ha as Tc,
  hb as Sm,
  hc as dr,
  i as $e,
  ia as A,
  ib as Qe,
  ic as Nm,
  j as Ke,
  ja as B,
  jb as km,
  jc as jm,
  k as sm,
  ka as uo,
  kb as Mm,
  kc as dt,
  l as ai,
  la as kt,
  lb as Nt,
  lc as Zi,
  m as Dc,
  ma as ht,
  mb as Zs,
  mc as ia,
  n as Ac,
  na as mt,
  nb as Rn,
  nc as Vm,
  o as et,
  oa as fm,
  ob as Mt,
  oc as Bc,
  p as Gt,
  pa as kn,
  pb as le,
  pc as Bm,
  q as $s,
  qa as pm,
  qb as Rt,
  qc as zm,
  r as li,
  ra as gm,
  rb as vo,
  rc as wi,
  s as ao,
  sa as Gi,
  sb as te,
  sc as Um,
  t as We,
  ta as Ge,
  tb as Xs,
  tc as Hm,
  u as oe,
  ua as Ie,
  ub as Js,
  uc as na,
  v as W,
  va as qe,
  vb as at,
  vc as ra,
  w as An,
  wa as Ye,
  wb as ct,
  x as he,
  xa as fe,
  xb as qt,
  y as am,
  ya as ho,
  yb as Yi,
  yc as $m,
  z as Q,
  za as ee,
  zb as _i,
  zc as Km,
} from "./chunk-4T5CYZIO.js";
var wv = s_((hh, mh) => {
  "use strict";
  (function (n, e) {
    typeof hh == "object" && typeof mh < "u"
      ? (mh.exports = e())
      : typeof define == "function" && define.amd
        ? define(e)
        : ((n = typeof globalThis < "u" ? globalThis : n || self),
          (n.Dexie = e()));
  })(hh, function () {
    "use strict";
    var n = function (o, s) {
      return (
        (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (l, d) {
              l.__proto__ = d;
            }) ||
          function (l, d) {
            for (var u in d)
              Object.prototype.hasOwnProperty.call(d, u) && (l[u] = d[u]);
          }),
        n(o, s)
      );
    };
    function e(o, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError(
          "Class extends value " + String(s) + " is not a constructor or null",
        );
      n(o, s);
      function l() {
        this.constructor = o;
      }
      o.prototype =
        s === null ? Object.create(s) : ((l.prototype = s.prototype), new l());
    }
    var t = function () {
      return (
        (t =
          Object.assign ||
          function (s) {
            for (var l, d = 1, u = arguments.length; d < u; d++) {
              l = arguments[d];
              for (var m in l)
                Object.prototype.hasOwnProperty.call(l, m) && (s[m] = l[m]);
            }
            return s;
          }),
        t.apply(this, arguments)
      );
    };
    function i(o, s, l) {
      if (l || arguments.length === 2)
        for (var d = 0, u = s.length, m; d < u; d++)
          (m || !(d in s)) &&
            (m || (m = Array.prototype.slice.call(s, 0, d)), (m[d] = s[d]));
      return o.concat(m || Array.prototype.slice.call(s));
    }
    var r =
        typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
            ? self
            : typeof window < "u"
              ? window
              : global,
      a = Object.keys,
      c = Array.isArray;
    typeof Promise < "u" && !r.Promise && (r.Promise = Promise);
    function h(o, s) {
      return (
        typeof s != "object" ||
          a(s).forEach(function (l) {
            o[l] = s[l];
          }),
        o
      );
    }
    var f = Object.getPrototypeOf,
      b = {}.hasOwnProperty;
    function y(o, s) {
      return b.call(o, s);
    }
    function D(o, s) {
      typeof s == "function" && (s = s(f(o))),
        (typeof Reflect > "u" ? a : Reflect.ownKeys)(s).forEach(function (l) {
          z(o, l, s[l]);
        });
    }
    var U = Object.defineProperty;
    function z(o, s, l, d) {
      U(
        o,
        s,
        h(
          l && y(l, "get") && typeof l.get == "function"
            ? { get: l.get, set: l.set, configurable: !0 }
            : { value: l, configurable: !0, writable: !0 },
          d,
        ),
      );
    }
    function G(o) {
      return {
        from: function (s) {
          return (
            (o.prototype = Object.create(s.prototype)),
            z(o.prototype, "constructor", o),
            { extend: D.bind(null, o.prototype) }
          );
        },
      };
    }
    var H = Object.getOwnPropertyDescriptor;
    function it(o, s) {
      var l = H(o, s),
        d;
      return l || ((d = f(o)) && it(d, s));
    }
    var Ft = [].slice;
    function Kt(o, s, l) {
      return Ft.call(o, s, l);
    }
    function It(o, s) {
      return s(o);
    }
    function ze(o) {
      if (!o) throw new Error("Assertion Failed");
    }
    function ii(o) {
      r.setImmediate ? setImmediate(o) : setTimeout(o, 0);
    }
    function gn(o, s) {
      return o.reduce(function (l, d, u) {
        var m = s(d, u);
        return m && (l[m[0]] = m[1]), l;
      }, {});
    }
    function Me(o, s) {
      if (typeof s == "string" && y(o, s)) return o[s];
      if (!s) return o;
      if (typeof s != "string") {
        for (var l = [], d = 0, u = s.length; d < u; ++d) {
          var m = Me(o, s[d]);
          l.push(m);
        }
        return l;
      }
      var p = s.indexOf(".");
      if (p !== -1) {
        var g = o[s.substr(0, p)];
        return g == null ? void 0 : Me(g, s.substr(p + 1));
      }
    }
    function Ce(o, s, l) {
      if (
        !(!o || s === void 0) &&
        !("isFrozen" in Object && Object.isFrozen(o))
      )
        if (typeof s != "string" && "length" in s) {
          ze(typeof l != "string" && "length" in l);
          for (var d = 0, u = s.length; d < u; ++d) Ce(o, s[d], l[d]);
        } else {
          var m = s.indexOf(".");
          if (m !== -1) {
            var p = s.substr(0, m),
              g = s.substr(m + 1);
            if (g === "")
              l === void 0
                ? c(o) && !isNaN(parseInt(p))
                  ? o.splice(p, 1)
                  : delete o[p]
                : (o[p] = l);
            else {
              var v = o[p];
              (!v || !y(o, p)) && (v = o[p] = {}), Ce(v, g, l);
            }
          } else
            l === void 0
              ? c(o) && !isNaN(parseInt(s))
                ? o.splice(s, 1)
                : delete o[s]
              : (o[s] = l);
        }
    }
    function Av(o, s) {
      typeof s == "string"
        ? Ce(o, s, void 0)
        : "length" in s &&
          [].map.call(s, function (l) {
            Ce(o, l, void 0);
          });
    }
    function ph(o) {
      var s = {};
      for (var l in o) y(o, l) && (s[l] = o[l]);
      return s;
    }
    var Sv = [].concat;
    function gh(o) {
      return Sv.apply([], o);
    }
    var kv =
        "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
          .split(",")
          .concat(
            gh(
              [8, 16, 32, 64].map(function (o) {
                return ["Int", "Uint", "Float"].map(function (s) {
                  return s + o + "Array";
                });
              }),
            ),
          )
          .filter(function (o) {
            return r[o];
          }),
      vh = new Set(
        kv.map(function (o) {
          return r[o];
        }),
      );
    function bh(o) {
      var s = {};
      for (var l in o)
        if (y(o, l)) {
          var d = o[l];
          s[l] =
            !d || typeof d != "object" || vh.has(d.constructor) ? d : bh(d);
        }
      return s;
    }
    function Mv(o) {
      for (var s in o) if (y(o, s)) return !1;
      return !0;
    }
    var Kr = null;
    function vn(o) {
      Kr = new WeakMap();
      var s = Fl(o);
      return (Kr = null), s;
    }
    function Fl(o) {
      if (!o || typeof o != "object") return o;
      var s = Kr.get(o);
      if (s) return s;
      if (c(o)) {
        (s = []), Kr.set(o, s);
        for (var l = 0, d = o.length; l < d; ++l) s.push(Fl(o[l]));
      } else if (vh.has(o.constructor)) s = o;
      else {
        var u = f(o);
        (s = u === Object.prototype ? {} : Object.create(u)), Kr.set(o, s);
        for (var m in o) y(o, m) && (s[m] = Fl(o[m]));
      }
      return s;
    }
    var Rv = {}.toString;
    function Pl(o) {
      return Rv.call(o).slice(8, -1);
    }
    var Ll = typeof Symbol < "u" ? Symbol.iterator : "@@iterator",
      Tv =
        typeof Ll == "symbol"
          ? function (o) {
              var s;
              return o != null && (s = o[Ll]) && s.apply(o);
            }
          : function () {
              return null;
            };
    function bn(o, s) {
      var l = o.indexOf(s);
      return l >= 0 && o.splice(l, 1), l >= 0;
    }
    var Wn = {};
    function mi(o) {
      var s, l, d, u;
      if (arguments.length === 1) {
        if (c(o)) return o.slice();
        if (this === Wn && typeof o == "string") return [o];
        if ((u = Tv(o))) {
          for (l = []; (d = u.next()), !d.done; ) l.push(d.value);
          return l;
        }
        if (o == null) return [o];
        if (((s = o.length), typeof s == "number")) {
          for (l = new Array(s); s--; ) l[s] = o[s];
          return l;
        }
        return [o];
      }
      for (s = arguments.length, l = new Array(s); s--; ) l[s] = arguments[s];
      return l;
    }
    var Nl =
        typeof Symbol < "u"
          ? function (o) {
              return o[Symbol.toStringTag] === "AsyncFunction";
            }
          : function () {
              return !1;
            },
      Ov = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait",
      ],
      _h = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone",
      ],
      jl = Ov.concat(_h),
      Fv = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI:
          "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
      };
    function Gn(o, s) {
      (this.name = o), (this.message = s);
    }
    G(Gn)
      .from(Error)
      .extend({
        toString: function () {
          return this.name + ": " + this.message;
        },
      });
    function yh(o, s) {
      return (
        o +
        ". Errors: " +
        Object.keys(s)
          .map(function (l) {
            return s[l].toString();
          })
          .filter(function (l, d, u) {
            return u.indexOf(l) === d;
          }).join(`
`)
      );
    }
    function gs(o, s, l, d) {
      (this.failures = s),
        (this.failedKeys = d),
        (this.successCount = l),
        (this.message = yh(o, s));
    }
    G(gs).from(Gn);
    function qn(o, s) {
      (this.name = "BulkError"),
        (this.failures = Object.keys(s).map(function (l) {
          return s[l];
        })),
        (this.failuresByPos = s),
        (this.message = yh(o, this.failures));
    }
    G(qn).from(Gn);
    var Vl = jl.reduce(function (o, s) {
        return (o[s] = s + "Error"), o;
      }, {}),
      Pv = Gn,
      tt = jl.reduce(function (o, s) {
        var l = s + "Error";
        function d(u, m) {
          (this.name = l),
            u
              ? typeof u == "string"
                ? ((this.message = "".concat(u).concat(
                    m
                      ? `
 ` + m
                      : "",
                  )),
                  (this.inner = m || null))
                : typeof u == "object" &&
                  ((this.message = "".concat(u.name, " ").concat(u.message)),
                  (this.inner = u))
              : ((this.message = Fv[s] || l), (this.inner = null));
        }
        return G(d).from(Pv), (o[s] = d), o;
      }, {});
    (tt.Syntax = SyntaxError), (tt.Type = TypeError), (tt.Range = RangeError);
    var wh = _h.reduce(function (o, s) {
      return (o[s + "Error"] = tt[s]), o;
    }, {});
    function Lv(o, s) {
      if (
        !o ||
        o instanceof Gn ||
        o instanceof TypeError ||
        o instanceof SyntaxError ||
        !o.name ||
        !wh[o.name]
      )
        return o;
      var l = new wh[o.name](s || o.message, o);
      return (
        "stack" in o &&
          z(l, "stack", {
            get: function () {
              return this.inner.stack;
            },
          }),
        l
      );
    }
    var vs = jl.reduce(function (o, s) {
      return (
        ["Syntax", "Type", "Range"].indexOf(s) === -1 &&
          (o[s + "Error"] = tt[s]),
        o
      );
    }, {});
    (vs.ModifyError = gs), (vs.DexieError = Gn), (vs.BulkError = qn);
    function Dt() {}
    function Wr(o) {
      return o;
    }
    function Nv(o, s) {
      return o == null || o === Wr
        ? s
        : function (l) {
            return s(o(l));
          };
    }
    function _n(o, s) {
      return function () {
        o.apply(this, arguments), s.apply(this, arguments);
      };
    }
    function jv(o, s) {
      return o === Dt
        ? s
        : function () {
            var l = o.apply(this, arguments);
            l !== void 0 && (arguments[0] = l);
            var d = this.onsuccess,
              u = this.onerror;
            (this.onsuccess = null), (this.onerror = null);
            var m = s.apply(this, arguments);
            return (
              d &&
                (this.onsuccess = this.onsuccess ? _n(d, this.onsuccess) : d),
              u && (this.onerror = this.onerror ? _n(u, this.onerror) : u),
              m !== void 0 ? m : l
            );
          };
    }
    function Vv(o, s) {
      return o === Dt
        ? s
        : function () {
            o.apply(this, arguments);
            var l = this.onsuccess,
              d = this.onerror;
            (this.onsuccess = this.onerror = null),
              s.apply(this, arguments),
              l &&
                (this.onsuccess = this.onsuccess ? _n(l, this.onsuccess) : l),
              d && (this.onerror = this.onerror ? _n(d, this.onerror) : d);
          };
    }
    function Bv(o, s) {
      return o === Dt
        ? s
        : function (l) {
            var d = o.apply(this, arguments);
            h(l, d);
            var u = this.onsuccess,
              m = this.onerror;
            (this.onsuccess = null), (this.onerror = null);
            var p = s.apply(this, arguments);
            return (
              u &&
                (this.onsuccess = this.onsuccess ? _n(u, this.onsuccess) : u),
              m && (this.onerror = this.onerror ? _n(m, this.onerror) : m),
              d === void 0 ? (p === void 0 ? void 0 : p) : h(d, p)
            );
          };
    }
    function zv(o, s) {
      return o === Dt
        ? s
        : function () {
            return s.apply(this, arguments) === !1
              ? !1
              : o.apply(this, arguments);
          };
    }
    function Bl(o, s) {
      return o === Dt
        ? s
        : function () {
            var l = o.apply(this, arguments);
            if (l && typeof l.then == "function") {
              for (var d = this, u = arguments.length, m = new Array(u); u--; )
                m[u] = arguments[u];
              return l.then(function () {
                return s.apply(d, m);
              });
            }
            return s.apply(this, arguments);
          };
    }
    var ni =
      typeof location < "u" &&
      /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function xh(o, s) {
      ni = o;
    }
    var Gr = {},
      Ch = 100,
      zl =
        typeof Promise > "u"
          ? []
          : (function () {
              var o = Promise.resolve();
              if (typeof crypto > "u" || !crypto.subtle) return [o, f(o), o];
              var s = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
              return [s, f(s), o];
            })(),
      Eh = zl[0],
      Ih = zl[1],
      Uv = zl[2],
      Hv = Ih && Ih.then,
      qr = Eh && Eh.constructor,
      Ul = !!Uv;
    function $v() {
      queueMicrotask(Wv);
    }
    var Yr = function (o, s) {
        Qr.push([o, s]), bs && ($v(), (bs = !1));
      },
      Hl = !0,
      bs = !0,
      yn = [],
      _s = [],
      $l = Wr,
      Fi = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: Dt,
        pgp: !1,
        env: {},
        finalize: Dt,
      },
      J = Fi,
      Qr = [],
      wn = 0,
      ys = [];
    function $(o) {
      if (typeof this != "object")
        throw new TypeError("Promises must be constructed via new");
      (this._listeners = []), (this._lib = !1);
      var s = (this._PSD = J);
      if (typeof o != "function") {
        if (o !== Gr) throw new TypeError("Not a function");
        (this._state = arguments[1]),
          (this._value = arguments[2]),
          this._state === !1 && Wl(this, this._value);
        return;
      }
      (this._state = null), (this._value = null), ++s.ref, Ah(this, o);
    }
    var Kl = {
      get: function () {
        var o = J,
          s = Es;
        function l(d, u) {
          var m = this,
            p = !o.global && (o !== J || s !== Es),
            g = p && !Li(),
            v = new $(function (_, E) {
              Gl(m, new Dh(Mh(d, o, p, g), Mh(u, o, p, g), _, E, o));
            });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return (l.prototype = Gr), l;
      },
      set: function (o) {
        z(
          this,
          "then",
          o && o.prototype === Gr
            ? Kl
            : {
                get: function () {
                  return o;
                },
                set: Kl.set,
              },
        );
      },
    };
    D($.prototype, {
      then: Kl,
      _then: function (o, s) {
        Gl(this, new Dh(null, null, o, s, J));
      },
      catch: function (o) {
        if (arguments.length === 1) return this.then(null, o);
        var s = arguments[0],
          l = arguments[1];
        return typeof s == "function"
          ? this.then(null, function (d) {
              return d instanceof s ? l(d) : ws(d);
            })
          : this.then(null, function (d) {
              return d && d.name === s ? l(d) : ws(d);
            });
      },
      finally: function (o) {
        return this.then(
          function (s) {
            return $.resolve(o()).then(function () {
              return s;
            });
          },
          function (s) {
            return $.resolve(o()).then(function () {
              return ws(s);
            });
          },
        );
      },
      timeout: function (o, s) {
        var l = this;
        return o < 1 / 0
          ? new $(function (d, u) {
              var m = setTimeout(function () {
                return u(new tt.Timeout(s));
              }, o);
              l.then(d, u).finally(clearTimeout.bind(null, m));
            })
          : this;
      },
    }),
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        z($.prototype, Symbol.toStringTag, "Dexie.Promise"),
      (Fi.env = kh());
    function Dh(o, s, l, d, u) {
      (this.onFulfilled = typeof o == "function" ? o : null),
        (this.onRejected = typeof s == "function" ? s : null),
        (this.resolve = l),
        (this.reject = d),
        (this.psd = u);
    }
    D($, {
      all: function () {
        var o = mi.apply(null, arguments).map(Is);
        return new $(function (s, l) {
          o.length === 0 && s([]);
          var d = o.length;
          o.forEach(function (u, m) {
            return $.resolve(u).then(function (p) {
              (o[m] = p), --d || s(o);
            }, l);
          });
        });
      },
      resolve: function (o) {
        if (o instanceof $) return o;
        if (o && typeof o.then == "function")
          return new $(function (l, d) {
            o.then(l, d);
          });
        var s = new $(Gr, !0, o);
        return s;
      },
      reject: ws,
      race: function () {
        var o = mi.apply(null, arguments).map(Is);
        return new $(function (s, l) {
          o.map(function (d) {
            return $.resolve(d).then(s, l);
          });
        });
      },
      PSD: {
        get: function () {
          return J;
        },
        set: function (o) {
          return (J = o);
        },
      },
      totalEchoes: {
        get: function () {
          return Es;
        },
      },
      newPSD: Pi,
      usePSD: xn,
      scheduler: {
        get: function () {
          return Yr;
        },
        set: function (o) {
          Yr = o;
        },
      },
      rejectionMapper: {
        get: function () {
          return $l;
        },
        set: function (o) {
          $l = o;
        },
      },
      follow: function (o, s) {
        return new $(function (l, d) {
          return Pi(
            function (u, m) {
              var p = J;
              (p.unhandleds = []),
                (p.onunhandled = m),
                (p.finalize = _n(function () {
                  var g = this;
                  Gv(function () {
                    g.unhandleds.length === 0 ? u() : m(g.unhandleds[0]);
                  });
                }, p.finalize)),
                o();
            },
            s,
            l,
            d,
          );
        });
      },
    }),
      qr &&
        (qr.allSettled &&
          z($, "allSettled", function () {
            var o = mi.apply(null, arguments).map(Is);
            return new $(function (s) {
              o.length === 0 && s([]);
              var l = o.length,
                d = new Array(l);
              o.forEach(function (u, m) {
                return $.resolve(u)
                  .then(
                    function (p) {
                      return (d[m] = { status: "fulfilled", value: p });
                    },
                    function (p) {
                      return (d[m] = { status: "rejected", reason: p });
                    },
                  )
                  .then(function () {
                    return --l || s(d);
                  });
              });
            });
          }),
        qr.any &&
          typeof AggregateError < "u" &&
          z($, "any", function () {
            var o = mi.apply(null, arguments).map(Is);
            return new $(function (s, l) {
              o.length === 0 && l(new AggregateError([]));
              var d = o.length,
                u = new Array(d);
              o.forEach(function (m, p) {
                return $.resolve(m).then(
                  function (g) {
                    return s(g);
                  },
                  function (g) {
                    (u[p] = g), --d || l(new AggregateError(u));
                  },
                );
              });
            });
          }));
    function Ah(o, s) {
      try {
        s(
          function (l) {
            if (o._state === null) {
              if (l === o)
                throw new TypeError(
                  "A promise cannot be resolved with itself.",
                );
              var d = o._lib && Yn();
              l && typeof l.then == "function"
                ? Ah(o, function (u, m) {
                    l instanceof $ ? l._then(u, m) : l.then(u, m);
                  })
                : ((o._state = !0), (o._value = l), Sh(o)),
                d && Qn();
            }
          },
          Wl.bind(null, o),
        );
      } catch (l) {
        Wl(o, l);
      }
    }
    function Wl(o, s) {
      if ((_s.push(s), o._state === null)) {
        var l = o._lib && Yn();
        (s = $l(s)), (o._state = !1), (o._value = s), qv(o), Sh(o), l && Qn();
      }
    }
    function Sh(o) {
      var s = o._listeners;
      o._listeners = [];
      for (var l = 0, d = s.length; l < d; ++l) Gl(o, s[l]);
      var u = o._PSD;
      --u.ref || u.finalize(),
        wn === 0 &&
          (++wn,
          Yr(function () {
            --wn === 0 && ql();
          }, []));
    }
    function Gl(o, s) {
      if (o._state === null) {
        o._listeners.push(s);
        return;
      }
      var l = o._state ? s.onFulfilled : s.onRejected;
      if (l === null) return (o._state ? s.resolve : s.reject)(o._value);
      ++s.psd.ref, ++wn, Yr(Kv, [l, o, s]);
    }
    function Kv(o, s, l) {
      try {
        var d,
          u = s._value;
        !s._state && _s.length && (_s = []),
          (d =
            ni && s._consoleTask
              ? s._consoleTask.run(function () {
                  return o(u);
                })
              : o(u)),
          !s._state && _s.indexOf(u) === -1 && Yv(s),
          l.resolve(d);
      } catch (m) {
        l.reject(m);
      } finally {
        --wn === 0 && ql(), --l.psd.ref || l.psd.finalize();
      }
    }
    function Wv() {
      xn(Fi, function () {
        Yn() && Qn();
      });
    }
    function Yn() {
      var o = Hl;
      return (Hl = !1), (bs = !1), o;
    }
    function Qn() {
      var o, s, l;
      do
        for (; Qr.length > 0; )
          for (o = Qr, Qr = [], l = o.length, s = 0; s < l; ++s) {
            var d = o[s];
            d[0].apply(null, d[1]);
          }
      while (Qr.length > 0);
      (Hl = !0), (bs = !0);
    }
    function ql() {
      var o = yn;
      (yn = []),
        o.forEach(function (d) {
          d._PSD.onunhandled.call(null, d._value, d);
        });
      for (var s = ys.slice(0), l = s.length; l; ) s[--l]();
    }
    function Gv(o) {
      function s() {
        o(), ys.splice(ys.indexOf(s), 1);
      }
      ys.push(s),
        ++wn,
        Yr(function () {
          --wn === 0 && ql();
        }, []);
    }
    function qv(o) {
      yn.some(function (s) {
        return s._value === o._value;
      }) || yn.push(o);
    }
    function Yv(o) {
      for (var s = yn.length; s; )
        if (yn[--s]._value === o._value) {
          yn.splice(s, 1);
          return;
        }
    }
    function ws(o) {
      return new $(Gr, !1, o);
    }
    function Pt(o, s) {
      var l = J;
      return function () {
        var d = Yn(),
          u = J;
        try {
          return Ni(l, !0), o.apply(this, arguments);
        } catch (m) {
          s && s(m);
        } finally {
          Ni(u, !1), d && Qn();
        }
      };
    }
    var ne = { awaits: 0, echoes: 0, id: 0 },
      Qv = 0,
      xs = [],
      Cs = 0,
      Es = 0,
      Zv = 0;
    function Pi(o, s, l, d) {
      var u = J,
        m = Object.create(u);
      (m.parent = u),
        (m.ref = 0),
        (m.global = !1),
        (m.id = ++Zv),
        Fi.env,
        (m.env = Ul
          ? {
              Promise: $,
              PromiseProp: { value: $, configurable: !0, writable: !0 },
              all: $.all,
              race: $.race,
              allSettled: $.allSettled,
              any: $.any,
              resolve: $.resolve,
              reject: $.reject,
            }
          : {}),
        s && h(m, s),
        ++u.ref,
        (m.finalize = function () {
          --this.parent.ref || this.parent.finalize();
        });
      var p = xn(m, o, l, d);
      return m.ref === 0 && m.finalize(), p;
    }
    function Zn() {
      return ne.id || (ne.id = ++Qv), ++ne.awaits, (ne.echoes += Ch), ne.id;
    }
    function Li() {
      return ne.awaits
        ? (--ne.awaits === 0 && (ne.id = 0), (ne.echoes = ne.awaits * Ch), !0)
        : !1;
    }
    ("" + Hv).indexOf("[native code]") === -1 && (Zn = Li = Dt);
    function Is(o) {
      return ne.echoes && o && o.constructor === qr
        ? (Zn(),
          o.then(
            function (s) {
              return Li(), s;
            },
            function (s) {
              return Li(), Wt(s);
            },
          ))
        : o;
    }
    function Xv(o) {
      ++Es,
        (!ne.echoes || --ne.echoes === 0) &&
          (ne.echoes = ne.awaits = ne.id = 0),
        xs.push(J),
        Ni(o, !0);
    }
    function Jv() {
      var o = xs[xs.length - 1];
      xs.pop(), Ni(o, !1);
    }
    function Ni(o, s) {
      var l = J;
      if (
        ((s ? ne.echoes && (!Cs++ || o !== J) : Cs && (!--Cs || o !== J)) &&
          queueMicrotask(s ? Xv.bind(null, o) : Jv),
        o !== J && ((J = o), l === Fi && (Fi.env = kh()), Ul))
      ) {
        var d = Fi.env.Promise,
          u = o.env;
        (l.global || o.global) &&
          (Object.defineProperty(r, "Promise", u.PromiseProp),
          (d.all = u.all),
          (d.race = u.race),
          (d.resolve = u.resolve),
          (d.reject = u.reject),
          u.allSettled && (d.allSettled = u.allSettled),
          u.any && (d.any = u.any));
      }
    }
    function kh() {
      var o = r.Promise;
      return Ul
        ? {
            Promise: o,
            PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
            all: o.all,
            race: o.race,
            allSettled: o.allSettled,
            any: o.any,
            resolve: o.resolve,
            reject: o.reject,
          }
        : {};
    }
    function xn(o, s, l, d, u) {
      var m = J;
      try {
        return Ni(o, !0), s(l, d, u);
      } finally {
        Ni(m, !1);
      }
    }
    function Mh(o, s, l, d) {
      return typeof o != "function"
        ? o
        : function () {
            var u = J;
            l && Zn(), Ni(s, !0);
            try {
              return o.apply(this, arguments);
            } finally {
              Ni(u, !1), d && queueMicrotask(Li);
            }
          };
    }
    function Yl(o) {
      Promise === qr && ne.echoes === 0
        ? Cs === 0
          ? o()
          : enqueueNativeMicroTask(o)
        : setTimeout(o, 0);
    }
    var Wt = $.reject;
    function Ql(o, s, l, d) {
      if (!o.idbdb || (!o._state.openComplete && !J.letThrough && !o._vip)) {
        if (o._state.openComplete)
          return Wt(new tt.DatabaseClosed(o._state.dbOpenError));
        if (!o._state.isBeingOpened) {
          if (!o._state.autoOpen) return Wt(new tt.DatabaseClosed());
          o.open().catch(Dt);
        }
        return o._state.dbReadyPromise.then(function () {
          return Ql(o, s, l, d);
        });
      } else {
        var u = o._createTransaction(s, l, o._dbSchema);
        try {
          u.create(), (o._state.PR1398_maxLoop = 3);
        } catch (m) {
          return m.name === Vl.InvalidState &&
            o.isOpen() &&
            --o._state.PR1398_maxLoop > 0
            ? (console.warn("Dexie: Need to reopen db"),
              o.close({ disableAutoOpen: !1 }),
              o.open().then(function () {
                return Ql(o, s, l, d);
              }))
            : Wt(m);
        }
        return u
          ._promise(s, function (m, p) {
            return Pi(function () {
              return (J.trans = u), d(m, p, u);
            });
          })
          .then(function (m) {
            if (s === "readwrite")
              try {
                u.idbtrans.commit();
              } catch {}
            return s === "readonly"
              ? m
              : u._completion.then(function () {
                  return m;
                });
          });
      }
    }
    var Rh = "4.0.8",
      Cn = "\uFFFF",
      Zl = -1 / 0,
      fi =
        "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
      Th = "String expected.",
      Xn = [],
      Ds = "__dbnames",
      Xl = "readonly",
      Jl = "readwrite";
    function En(o, s) {
      return o
        ? s
          ? function () {
              return o.apply(this, arguments) && s.apply(this, arguments);
            }
          : o
        : s;
    }
    var Oh = {
      type: 3,
      lower: -1 / 0,
      lowerOpen: !1,
      upper: [[]],
      upperOpen: !1,
    };
    function As(o) {
      return typeof o == "string" && !/\./.test(o)
        ? function (s) {
            return s[o] === void 0 && o in s && ((s = vn(s)), delete s[o]), s;
          }
        : function (s) {
            return s;
          };
    }
    function Fh() {
      throw tt.Type();
    }
    function bt(o, s) {
      try {
        var l = Ph(o),
          d = Ph(s);
        if (l !== d)
          return l === "Array"
            ? 1
            : d === "Array"
              ? -1
              : l === "binary"
                ? 1
                : d === "binary"
                  ? -1
                  : l === "string"
                    ? 1
                    : d === "string"
                      ? -1
                      : l === "Date"
                        ? 1
                        : d !== "Date"
                          ? NaN
                          : -1;
        switch (l) {
          case "number":
          case "Date":
          case "string":
            return o > s ? 1 : o < s ? -1 : 0;
          case "binary":
            return eb(Lh(o), Lh(s));
          case "Array":
            return tb(o, s);
        }
      } catch {}
      return NaN;
    }
    function tb(o, s) {
      for (
        var l = o.length, d = s.length, u = l < d ? l : d, m = 0;
        m < u;
        ++m
      ) {
        var p = bt(o[m], s[m]);
        if (p !== 0) return p;
      }
      return l === d ? 0 : l < d ? -1 : 1;
    }
    function eb(o, s) {
      for (var l = o.length, d = s.length, u = l < d ? l : d, m = 0; m < u; ++m)
        if (o[m] !== s[m]) return o[m] < s[m] ? -1 : 1;
      return l === d ? 0 : l < d ? -1 : 1;
    }
    function Ph(o) {
      var s = typeof o;
      if (s !== "object") return s;
      if (ArrayBuffer.isView(o)) return "binary";
      var l = Pl(o);
      return l === "ArrayBuffer" ? "binary" : l;
    }
    function Lh(o) {
      return o instanceof Uint8Array
        ? o
        : ArrayBuffer.isView(o)
          ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
          : new Uint8Array(o);
    }
    var Nh = (function () {
      function o() {}
      return (
        (o.prototype._trans = function (s, l, d) {
          var u = this._tx || J.trans,
            m = this.name,
            p =
              ni &&
              typeof console < "u" &&
              console.createTask &&
              console.createTask(
                "Dexie: "
                  .concat(s === "readonly" ? "read" : "write", " ")
                  .concat(this.name),
              );
          function g(E, w, S) {
            if (!S.schema[m])
              throw new tt.NotFound("Table " + m + " not part of transaction");
            return l(S.idbtrans, S);
          }
          var v = Yn();
          try {
            var _ =
              u && u.db._novip === this.db._novip
                ? u === J.trans
                  ? u._promise(s, g, d)
                  : Pi(
                      function () {
                        return u._promise(s, g, d);
                      },
                      { trans: u, transless: J.transless || J },
                    )
                : Ql(this.db, s, [this.name], g);
            return (
              p &&
                ((_._consoleTask = p),
                (_ = _.catch(function (E) {
                  return console.trace(E), Wt(E);
                }))),
              _
            );
          } finally {
            v && Qn();
          }
        }),
        (o.prototype.get = function (s, l) {
          var d = this;
          return s && s.constructor === Object
            ? this.where(s).first(l)
            : s == null
              ? Wt(new tt.Type("Invalid argument to Table.get()"))
              : this._trans("readonly", function (u) {
                  return d.core.get({ trans: u, key: s }).then(function (m) {
                    return d.hook.reading.fire(m);
                  });
                }).then(l);
        }),
        (o.prototype.where = function (s) {
          if (typeof s == "string") return new this.db.WhereClause(this, s);
          if (c(s))
            return new this.db.WhereClause(this, "[".concat(s.join("+"), "]"));
          var l = a(s);
          if (l.length === 1) return this.where(l[0]).equals(s[l[0]]);
          var d = this.schema.indexes
            .concat(this.schema.primKey)
            .filter(function (w) {
              if (
                w.compound &&
                l.every(function (N) {
                  return w.keyPath.indexOf(N) >= 0;
                })
              ) {
                for (var S = 0; S < l.length; ++S)
                  if (l.indexOf(w.keyPath[S]) === -1) return !1;
                return !0;
              }
              return !1;
            })
            .sort(function (w, S) {
              return w.keyPath.length - S.keyPath.length;
            })[0];
          if (d && this.db._maxKey !== Cn) {
            var u = d.keyPath.slice(0, l.length);
            return this.where(u).equals(
              u.map(function (w) {
                return s[w];
              }),
            );
          }
          !d &&
            ni &&
            console.warn(
              "The query "
                .concat(JSON.stringify(s), " on ")
                .concat(this.name, " would benefit from a ") +
                "compound index [".concat(l.join("+"), "]"),
            );
          var m = this.schema.idxByName,
            p = this.db._deps.indexedDB;
          function g(w, S) {
            return p.cmp(w, S) === 0;
          }
          var v = l.reduce(
              function (w, S) {
                var N = w[0],
                  x = w[1],
                  I = m[S],
                  k = s[S];
                return [
                  N || I,
                  N || !I
                    ? En(
                        x,
                        I && I.multi
                          ? function (M) {
                              var R = Me(M, S);
                              return (
                                c(R) &&
                                R.some(function (F) {
                                  return g(k, F);
                                })
                              );
                            }
                          : function (M) {
                              return g(k, Me(M, S));
                            },
                      )
                    : x,
                ];
              },
              [null, null],
            ),
            _ = v[0],
            E = v[1];
          return _
            ? this.where(_.name).equals(s[_.keyPath]).filter(E)
            : d
              ? this.filter(E)
              : this.where(l).equals("");
        }),
        (o.prototype.filter = function (s) {
          return this.toCollection().and(s);
        }),
        (o.prototype.count = function (s) {
          return this.toCollection().count(s);
        }),
        (o.prototype.offset = function (s) {
          return this.toCollection().offset(s);
        }),
        (o.prototype.limit = function (s) {
          return this.toCollection().limit(s);
        }),
        (o.prototype.each = function (s) {
          return this.toCollection().each(s);
        }),
        (o.prototype.toArray = function (s) {
          return this.toCollection().toArray(s);
        }),
        (o.prototype.toCollection = function () {
          return new this.db.Collection(new this.db.WhereClause(this));
        }),
        (o.prototype.orderBy = function (s) {
          return new this.db.Collection(
            new this.db.WhereClause(
              this,
              c(s) ? "[".concat(s.join("+"), "]") : s,
            ),
          );
        }),
        (o.prototype.reverse = function () {
          return this.toCollection().reverse();
        }),
        (o.prototype.mapToClass = function (s) {
          var l = this,
            d = l.db,
            u = l.name;
          (this.schema.mappedClass = s),
            s.prototype instanceof Fh &&
              (s = (function (v) {
                e(_, v);
                function _() {
                  return (v !== null && v.apply(this, arguments)) || this;
                }
                return (
                  Object.defineProperty(_.prototype, "db", {
                    get: function () {
                      return d;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (_.prototype.table = function () {
                    return u;
                  }),
                  _
                );
              })(s));
          for (var m = new Set(), p = s.prototype; p; p = f(p))
            Object.getOwnPropertyNames(p).forEach(function (v) {
              return m.add(v);
            });
          var g = function (v) {
            if (!v) return v;
            var _ = Object.create(s.prototype);
            for (var E in v)
              if (!m.has(E))
                try {
                  _[E] = v[E];
                } catch {}
            return _;
          };
          return (
            this.schema.readHook &&
              this.hook.reading.unsubscribe(this.schema.readHook),
            (this.schema.readHook = g),
            this.hook("reading", g),
            s
          );
        }),
        (o.prototype.defineClass = function () {
          function s(l) {
            h(this, l);
          }
          return this.mapToClass(s);
        }),
        (o.prototype.add = function (s, l) {
          var d = this,
            u = this.schema.primKey,
            m = u.auto,
            p = u.keyPath,
            g = s;
          return (
            p && m && (g = As(p)(s)),
            this._trans("readwrite", function (v) {
              return d.core.mutate({
                trans: v,
                type: "add",
                keys: l != null ? [l] : null,
                values: [g],
              });
            })
              .then(function (v) {
                return v.numFailures ? $.reject(v.failures[0]) : v.lastResult;
              })
              .then(function (v) {
                if (p)
                  try {
                    Ce(s, p, v);
                  } catch {}
                return v;
              })
          );
        }),
        (o.prototype.update = function (s, l) {
          if (typeof s == "object" && !c(s)) {
            var d = Me(s, this.schema.primKey.keyPath);
            return d === void 0
              ? Wt(
                  new tt.InvalidArgument(
                    "Given object does not contain its primary key",
                  ),
                )
              : this.where(":id").equals(d).modify(l);
          } else return this.where(":id").equals(s).modify(l);
        }),
        (o.prototype.put = function (s, l) {
          var d = this,
            u = this.schema.primKey,
            m = u.auto,
            p = u.keyPath,
            g = s;
          return (
            p && m && (g = As(p)(s)),
            this._trans("readwrite", function (v) {
              return d.core.mutate({
                trans: v,
                type: "put",
                values: [g],
                keys: l != null ? [l] : null,
              });
            })
              .then(function (v) {
                return v.numFailures ? $.reject(v.failures[0]) : v.lastResult;
              })
              .then(function (v) {
                if (p)
                  try {
                    Ce(s, p, v);
                  } catch {}
                return v;
              })
          );
        }),
        (o.prototype.delete = function (s) {
          var l = this;
          return this._trans("readwrite", function (d) {
            return l.core.mutate({ trans: d, type: "delete", keys: [s] });
          }).then(function (d) {
            return d.numFailures ? $.reject(d.failures[0]) : void 0;
          });
        }),
        (o.prototype.clear = function () {
          var s = this;
          return this._trans("readwrite", function (l) {
            return s.core.mutate({ trans: l, type: "deleteRange", range: Oh });
          }).then(function (l) {
            return l.numFailures ? $.reject(l.failures[0]) : void 0;
          });
        }),
        (o.prototype.bulkGet = function (s) {
          var l = this;
          return this._trans("readonly", function (d) {
            return l.core.getMany({ keys: s, trans: d }).then(function (u) {
              return u.map(function (m) {
                return l.hook.reading.fire(m);
              });
            });
          });
        }),
        (o.prototype.bulkAdd = function (s, l, d) {
          var u = this,
            m = Array.isArray(l) ? l : void 0;
          d = d || (m ? void 0 : l);
          var p = d ? d.allKeys : void 0;
          return this._trans("readwrite", function (g) {
            var v = u.schema.primKey,
              _ = v.auto,
              E = v.keyPath;
            if (E && m)
              throw new tt.InvalidArgument(
                "bulkAdd(): keys argument invalid on tables with inbound keys",
              );
            if (m && m.length !== s.length)
              throw new tt.InvalidArgument(
                "Arguments objects and keys must have the same length",
              );
            var w = s.length,
              S = E && _ ? s.map(As(E)) : s;
            return u.core
              .mutate({
                trans: g,
                type: "add",
                keys: m,
                values: S,
                wantResults: p,
              })
              .then(function (N) {
                var x = N.numFailures,
                  I = N.results,
                  k = N.lastResult,
                  M = N.failures,
                  R = p ? I : k;
                if (x === 0) return R;
                throw new qn(
                  ""
                    .concat(u.name, ".bulkAdd(): ")
                    .concat(x, " of ")
                    .concat(w, " operations failed"),
                  M,
                );
              });
          });
        }),
        (o.prototype.bulkPut = function (s, l, d) {
          var u = this,
            m = Array.isArray(l) ? l : void 0;
          d = d || (m ? void 0 : l);
          var p = d ? d.allKeys : void 0;
          return this._trans("readwrite", function (g) {
            var v = u.schema.primKey,
              _ = v.auto,
              E = v.keyPath;
            if (E && m)
              throw new tt.InvalidArgument(
                "bulkPut(): keys argument invalid on tables with inbound keys",
              );
            if (m && m.length !== s.length)
              throw new tt.InvalidArgument(
                "Arguments objects and keys must have the same length",
              );
            var w = s.length,
              S = E && _ ? s.map(As(E)) : s;
            return u.core
              .mutate({
                trans: g,
                type: "put",
                keys: m,
                values: S,
                wantResults: p,
              })
              .then(function (N) {
                var x = N.numFailures,
                  I = N.results,
                  k = N.lastResult,
                  M = N.failures,
                  R = p ? I : k;
                if (x === 0) return R;
                throw new qn(
                  ""
                    .concat(u.name, ".bulkPut(): ")
                    .concat(x, " of ")
                    .concat(w, " operations failed"),
                  M,
                );
              });
          });
        }),
        (o.prototype.bulkUpdate = function (s) {
          var l = this,
            d = this.core,
            u = s.map(function (g) {
              return g.key;
            }),
            m = s.map(function (g) {
              return g.changes;
            }),
            p = [];
          return this._trans("readwrite", function (g) {
            return d
              .getMany({ trans: g, keys: u, cache: "clone" })
              .then(function (v) {
                var _ = [],
                  E = [];
                s.forEach(function (S, N) {
                  var x = S.key,
                    I = S.changes,
                    k = v[N];
                  if (k) {
                    for (var M = 0, R = Object.keys(I); M < R.length; M++) {
                      var F = R[M],
                        L = I[F];
                      if (F === l.schema.primKey.keyPath) {
                        if (bt(L, x) !== 0)
                          throw new tt.Constraint(
                            "Cannot update primary key in bulkUpdate()",
                          );
                      } else Ce(k, F, L);
                    }
                    p.push(N), _.push(x), E.push(k);
                  }
                });
                var w = _.length;
                return d
                  .mutate({
                    trans: g,
                    type: "put",
                    keys: _,
                    values: E,
                    updates: { keys: u, changeSpecs: m },
                  })
                  .then(function (S) {
                    var N = S.numFailures,
                      x = S.failures;
                    if (N === 0) return w;
                    for (var I = 0, k = Object.keys(x); I < k.length; I++) {
                      var M = k[I],
                        R = p[Number(M)];
                      if (R != null) {
                        var F = x[M];
                        delete x[M], (x[R] = F);
                      }
                    }
                    throw new qn(
                      ""
                        .concat(l.name, ".bulkUpdate(): ")
                        .concat(N, " of ")
                        .concat(w, " operations failed"),
                      x,
                    );
                  });
              });
          });
        }),
        (o.prototype.bulkDelete = function (s) {
          var l = this,
            d = s.length;
          return this._trans("readwrite", function (u) {
            return l.core.mutate({ trans: u, type: "delete", keys: s });
          }).then(function (u) {
            var m = u.numFailures,
              p = u.lastResult,
              g = u.failures;
            if (m === 0) return p;
            throw new qn(
              ""
                .concat(l.name, ".bulkDelete(): ")
                .concat(m, " of ")
                .concat(d, " operations failed"),
              g,
            );
          });
        }),
        o
      );
    })();
    function Zr(o) {
      var s = {},
        l = function (g, v) {
          if (v) {
            for (var _ = arguments.length, E = new Array(_ - 1); --_; )
              E[_ - 1] = arguments[_];
            return s[g].subscribe.apply(null, E), o;
          } else if (typeof g == "string") return s[g];
        };
      l.addEventType = m;
      for (var d = 1, u = arguments.length; d < u; ++d) m(arguments[d]);
      return l;
      function m(g, v, _) {
        if (typeof g == "object") return p(g);
        v || (v = zv), _ || (_ = Dt);
        var E = {
          subscribers: [],
          fire: _,
          subscribe: function (w) {
            E.subscribers.indexOf(w) === -1 &&
              (E.subscribers.push(w), (E.fire = v(E.fire, w)));
          },
          unsubscribe: function (w) {
            (E.subscribers = E.subscribers.filter(function (S) {
              return S !== w;
            })),
              (E.fire = E.subscribers.reduce(v, _));
          },
        };
        return (s[g] = l[g] = E), E;
      }
      function p(g) {
        a(g).forEach(function (v) {
          var _ = g[v];
          if (c(_)) m(v, g[v][0], g[v][1]);
          else if (_ === "asap")
            var E = m(v, Wr, function () {
              for (var S = arguments.length, N = new Array(S); S--; )
                N[S] = arguments[S];
              E.subscribers.forEach(function (x) {
                ii(function () {
                  x.apply(null, N);
                });
              });
            });
          else throw new tt.InvalidArgument("Invalid event config");
        });
      }
    }
    function Xr(o, s) {
      return G(s).from({ prototype: o }), s;
    }
    function ib(o) {
      return Xr(Nh.prototype, function (l, d, u) {
        (this.db = o),
          (this._tx = u),
          (this.name = l),
          (this.schema = d),
          (this.hook = o._allTables[l]
            ? o._allTables[l].hook
            : Zr(null, {
                creating: [jv, Dt],
                reading: [Nv, Wr],
                updating: [Bv, Dt],
                deleting: [Vv, Dt],
              }));
      });
    }
    function Jn(o, s) {
      return (
        !(o.filter || o.algorithm || o.or) &&
        (s ? o.justLimit : !o.replayFilter)
      );
    }
    function tc(o, s) {
      o.filter = En(o.filter, s);
    }
    function ec(o, s, l) {
      var d = o.replayFilter;
      (o.replayFilter = d
        ? function () {
            return En(d(), s());
          }
        : s),
        (o.justLimit = l && !d);
    }
    function nb(o, s) {
      o.isMatch = En(o.isMatch, s);
    }
    function Ss(o, s) {
      if (o.isPrimKey) return s.primaryKey;
      var l = s.getIndexByKeyPath(o.index);
      if (!l)
        throw new tt.Schema(
          "KeyPath " +
            o.index +
            " on object store " +
            s.name +
            " is not indexed",
        );
      return l;
    }
    function jh(o, s, l) {
      var d = Ss(o, s.schema);
      return s.openCursor({
        trans: l,
        values: !o.keysOnly,
        reverse: o.dir === "prev",
        unique: !!o.unique,
        query: { index: d, range: o.range },
      });
    }
    function ks(o, s, l, d) {
      var u = o.replayFilter ? En(o.filter, o.replayFilter()) : o.filter;
      if (o.or) {
        var m = {},
          p = function (g, v, _) {
            if (
              !u ||
              u(
                v,
                _,
                function (S) {
                  return v.stop(S);
                },
                function (S) {
                  return v.fail(S);
                },
              )
            ) {
              var E = v.primaryKey,
                w = "" + E;
              w === "[object ArrayBuffer]" && (w = "" + new Uint8Array(E)),
                y(m, w) || ((m[w] = !0), s(g, v, _));
            }
          };
        return Promise.all([
          o.or._iterate(p, l),
          Vh(jh(o, d, l), o.algorithm, p, !o.keysOnly && o.valueMapper),
        ]);
      } else
        return Vh(
          jh(o, d, l),
          En(o.algorithm, u),
          s,
          !o.keysOnly && o.valueMapper,
        );
    }
    function Vh(o, s, l, d) {
      var u = d
          ? function (p, g, v) {
              return l(d(p), g, v);
            }
          : l,
        m = Pt(u);
      return o.then(function (p) {
        if (p)
          return p.start(function () {
            var g = function () {
              return p.continue();
            };
            (!s ||
              s(
                p,
                function (v) {
                  return (g = v);
                },
                function (v) {
                  p.stop(v), (g = Dt);
                },
                function (v) {
                  p.fail(v), (g = Dt);
                },
              )) &&
              m(p.value, p, function (v) {
                return (g = v);
              }),
              g();
          });
      });
    }
    var rb = Symbol(),
      Jr = (function () {
        function o(s) {
          Object.assign(this, s);
        }
        return (
          (o.prototype.execute = function (s) {
            var l;
            if (this.add !== void 0) {
              var d = this.add;
              if (c(d)) return i(i([], c(s) ? s : [], !0), d, !0).sort();
              if (typeof d == "number") return (Number(s) || 0) + d;
              if (typeof d == "bigint")
                try {
                  return BigInt(s) + d;
                } catch {
                  return BigInt(0) + d;
                }
              throw new TypeError("Invalid term ".concat(d));
            }
            if (this.remove !== void 0) {
              var u = this.remove;
              if (c(u))
                return c(s)
                  ? s
                      .filter(function (p) {
                        return !u.includes(p);
                      })
                      .sort()
                  : [];
              if (typeof u == "number") return Number(s) - u;
              if (typeof u == "bigint")
                try {
                  return BigInt(s) - u;
                } catch {
                  return BigInt(0) - u;
                }
              throw new TypeError("Invalid subtrahend ".concat(u));
            }
            var m =
              (l = this.replacePrefix) === null || l === void 0 ? void 0 : l[0];
            return m && typeof s == "string" && s.startsWith(m)
              ? this.replacePrefix[1] + s.substring(m.length)
              : s;
          }),
          o
        );
      })(),
      ob = (function () {
        function o() {}
        return (
          (o.prototype._read = function (s, l) {
            var d = this._ctx;
            return d.error
              ? d.table._trans(null, Wt.bind(null, d.error))
              : d.table._trans("readonly", s).then(l);
          }),
          (o.prototype._write = function (s) {
            var l = this._ctx;
            return l.error
              ? l.table._trans(null, Wt.bind(null, l.error))
              : l.table._trans("readwrite", s, "locked");
          }),
          (o.prototype._addAlgorithm = function (s) {
            var l = this._ctx;
            l.algorithm = En(l.algorithm, s);
          }),
          (o.prototype._iterate = function (s, l) {
            return ks(this._ctx, s, l, this._ctx.table.core);
          }),
          (o.prototype.clone = function (s) {
            var l = Object.create(this.constructor.prototype),
              d = Object.create(this._ctx);
            return s && h(d, s), (l._ctx = d), l;
          }),
          (o.prototype.raw = function () {
            return (this._ctx.valueMapper = null), this;
          }),
          (o.prototype.each = function (s) {
            var l = this._ctx;
            return this._read(function (d) {
              return ks(l, s, d, l.table.core);
            });
          }),
          (o.prototype.count = function (s) {
            var l = this;
            return this._read(function (d) {
              var u = l._ctx,
                m = u.table.core;
              if (Jn(u, !0))
                return m
                  .count({
                    trans: d,
                    query: { index: Ss(u, m.schema), range: u.range },
                  })
                  .then(function (g) {
                    return Math.min(g, u.limit);
                  });
              var p = 0;
              return ks(
                u,
                function () {
                  return ++p, !1;
                },
                d,
                m,
              ).then(function () {
                return p;
              });
            }).then(s);
          }),
          (o.prototype.sortBy = function (s, l) {
            var d = s.split(".").reverse(),
              u = d[0],
              m = d.length - 1;
            function p(_, E) {
              return E ? p(_[d[E]], E - 1) : _[u];
            }
            var g = this._ctx.dir === "next" ? 1 : -1;
            function v(_, E) {
              var w = p(_, m),
                S = p(E, m);
              return w < S ? -g : w > S ? g : 0;
            }
            return this.toArray(function (_) {
              return _.sort(v);
            }).then(l);
          }),
          (o.prototype.toArray = function (s) {
            var l = this;
            return this._read(function (d) {
              var u = l._ctx;
              if (u.dir === "next" && Jn(u, !0) && u.limit > 0) {
                var m = u.valueMapper,
                  p = Ss(u, u.table.core.schema);
                return u.table.core
                  .query({
                    trans: d,
                    limit: u.limit,
                    values: !0,
                    query: { index: p, range: u.range },
                  })
                  .then(function (v) {
                    var _ = v.result;
                    return m ? _.map(m) : _;
                  });
              } else {
                var g = [];
                return ks(
                  u,
                  function (v) {
                    return g.push(v);
                  },
                  d,
                  u.table.core,
                ).then(function () {
                  return g;
                });
              }
            }, s);
          }),
          (o.prototype.offset = function (s) {
            var l = this._ctx;
            return s <= 0
              ? this
              : ((l.offset += s),
                Jn(l)
                  ? ec(l, function () {
                      var d = s;
                      return function (u, m) {
                        return d === 0
                          ? !0
                          : d === 1
                            ? (--d, !1)
                            : (m(function () {
                                u.advance(d), (d = 0);
                              }),
                              !1);
                      };
                    })
                  : ec(l, function () {
                      var d = s;
                      return function () {
                        return --d < 0;
                      };
                    }),
                this);
          }),
          (o.prototype.limit = function (s) {
            return (
              (this._ctx.limit = Math.min(this._ctx.limit, s)),
              ec(
                this._ctx,
                function () {
                  var l = s;
                  return function (d, u, m) {
                    return --l <= 0 && u(m), l >= 0;
                  };
                },
                !0,
              ),
              this
            );
          }),
          (o.prototype.until = function (s, l) {
            return (
              tc(this._ctx, function (d, u, m) {
                return s(d.value) ? (u(m), l) : !0;
              }),
              this
            );
          }),
          (o.prototype.first = function (s) {
            return this.limit(1)
              .toArray(function (l) {
                return l[0];
              })
              .then(s);
          }),
          (o.prototype.last = function (s) {
            return this.reverse().first(s);
          }),
          (o.prototype.filter = function (s) {
            return (
              tc(this._ctx, function (l) {
                return s(l.value);
              }),
              nb(this._ctx, s),
              this
            );
          }),
          (o.prototype.and = function (s) {
            return this.filter(s);
          }),
          (o.prototype.or = function (s) {
            return new this.db.WhereClause(this._ctx.table, s, this);
          }),
          (o.prototype.reverse = function () {
            return (
              (this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev"),
              this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
              this
            );
          }),
          (o.prototype.desc = function () {
            return this.reverse();
          }),
          (o.prototype.eachKey = function (s) {
            var l = this._ctx;
            return (
              (l.keysOnly = !l.isMatch),
              this.each(function (d, u) {
                s(u.key, u);
              })
            );
          }),
          (o.prototype.eachUniqueKey = function (s) {
            return (this._ctx.unique = "unique"), this.eachKey(s);
          }),
          (o.prototype.eachPrimaryKey = function (s) {
            var l = this._ctx;
            return (
              (l.keysOnly = !l.isMatch),
              this.each(function (d, u) {
                s(u.primaryKey, u);
              })
            );
          }),
          (o.prototype.keys = function (s) {
            var l = this._ctx;
            l.keysOnly = !l.isMatch;
            var d = [];
            return this.each(function (u, m) {
              d.push(m.key);
            })
              .then(function () {
                return d;
              })
              .then(s);
          }),
          (o.prototype.primaryKeys = function (s) {
            var l = this._ctx;
            if (l.dir === "next" && Jn(l, !0) && l.limit > 0)
              return this._read(function (u) {
                var m = Ss(l, l.table.core.schema);
                return l.table.core.query({
                  trans: u,
                  values: !1,
                  limit: l.limit,
                  query: { index: m, range: l.range },
                });
              })
                .then(function (u) {
                  var m = u.result;
                  return m;
                })
                .then(s);
            l.keysOnly = !l.isMatch;
            var d = [];
            return this.each(function (u, m) {
              d.push(m.primaryKey);
            })
              .then(function () {
                return d;
              })
              .then(s);
          }),
          (o.prototype.uniqueKeys = function (s) {
            return (this._ctx.unique = "unique"), this.keys(s);
          }),
          (o.prototype.firstKey = function (s) {
            return this.limit(1)
              .keys(function (l) {
                return l[0];
              })
              .then(s);
          }),
          (o.prototype.lastKey = function (s) {
            return this.reverse().firstKey(s);
          }),
          (o.prototype.distinct = function () {
            var s = this._ctx,
              l = s.index && s.table.schema.idxByName[s.index];
            if (!l || !l.multi) return this;
            var d = {};
            return (
              tc(this._ctx, function (u) {
                var m = u.primaryKey.toString(),
                  p = y(d, m);
                return (d[m] = !0), !p;
              }),
              this
            );
          }),
          (o.prototype.modify = function (s) {
            var l = this,
              d = this._ctx;
            return this._write(function (u) {
              var m;
              if (typeof s == "function") m = s;
              else {
                var p = a(s),
                  g = p.length;
                m = function (M) {
                  for (var R = !1, F = 0; F < g; ++F) {
                    var L = p[F],
                      O = s[L],
                      j = Me(M, L);
                    O instanceof Jr
                      ? (Ce(M, L, O.execute(j)), (R = !0))
                      : j !== O && (Ce(M, L, O), (R = !0));
                  }
                  return R;
                };
              }
              var v = d.table.core,
                _ = v.schema.primaryKey,
                E = _.outbound,
                w = _.extractKey,
                S = l.db._options.modifyChunkSize || 200,
                N = [],
                x = 0,
                I = [],
                k = function (M, R) {
                  var F = R.failures,
                    L = R.numFailures;
                  x += M - L;
                  for (var O = 0, j = a(F); O < j.length; O++) {
                    var K = j[O];
                    N.push(F[K]);
                  }
                };
              return l
                .clone()
                .primaryKeys()
                .then(function (M) {
                  var R = Jn(d) &&
                      d.limit === 1 / 0 &&
                      (typeof s != "function" || s === ic) && {
                        index: d.index,
                        range: d.range,
                      },
                    F = function (L) {
                      var O = Math.min(S, M.length - L);
                      return v
                        .getMany({
                          trans: u,
                          keys: M.slice(L, L + O),
                          cache: "immutable",
                        })
                        .then(function (j) {
                          for (
                            var K = [],
                              q = [],
                              ot = E ? [] : null,
                              X = [],
                              nt = 0;
                            nt < O;
                            ++nt
                          ) {
                            var vt = j[nt],
                              lt = { value: vn(vt), primKey: M[L + nt] };
                            m.call(lt, lt.value, lt) !== !1 &&
                              (lt.value == null
                                ? X.push(M[L + nt])
                                : !E && bt(w(vt), w(lt.value)) !== 0
                                  ? (X.push(M[L + nt]), K.push(lt.value))
                                  : (q.push(lt.value),
                                    E && ot.push(M[L + nt])));
                          }
                          return Promise.resolve(
                            K.length > 0 &&
                              v
                                .mutate({ trans: u, type: "add", values: K })
                                .then(function (At) {
                                  for (var rt in At.failures)
                                    X.splice(parseInt(rt), 1);
                                  k(K.length, At);
                                }),
                          )
                            .then(function () {
                              return (
                                (q.length > 0 || (R && typeof s == "object")) &&
                                v
                                  .mutate({
                                    trans: u,
                                    type: "put",
                                    keys: ot,
                                    values: q,
                                    criteria: R,
                                    changeSpec: typeof s != "function" && s,
                                    isAdditionalChunk: L > 0,
                                  })
                                  .then(function (At) {
                                    return k(q.length, At);
                                  })
                              );
                            })
                            .then(function () {
                              return (
                                (X.length > 0 || (R && s === ic)) &&
                                v
                                  .mutate({
                                    trans: u,
                                    type: "delete",
                                    keys: X,
                                    criteria: R,
                                    isAdditionalChunk: L > 0,
                                  })
                                  .then(function (At) {
                                    return k(X.length, At);
                                  })
                              );
                            })
                            .then(function () {
                              return M.length > L + O && F(L + S);
                            });
                        });
                    };
                  return F(0).then(function () {
                    if (N.length > 0)
                      throw new gs(
                        "Error modifying one or more objects",
                        N,
                        x,
                        I,
                      );
                    return M.length;
                  });
                });
            });
          }),
          (o.prototype.delete = function () {
            var s = this._ctx,
              l = s.range;
            return Jn(s) && (s.isPrimKey || l.type === 3)
              ? this._write(function (d) {
                  var u = s.table.core.schema.primaryKey,
                    m = l;
                  return s.table.core
                    .count({ trans: d, query: { index: u, range: m } })
                    .then(function (p) {
                      return s.table.core
                        .mutate({ trans: d, type: "deleteRange", range: m })
                        .then(function (g) {
                          var v = g.failures;
                          g.lastResult, g.results;
                          var _ = g.numFailures;
                          if (_)
                            throw new gs(
                              "Could not delete some values",
                              Object.keys(v).map(function (E) {
                                return v[E];
                              }),
                              p - _,
                            );
                          return p - _;
                        });
                    });
                })
              : this.modify(ic);
          }),
          o
        );
      })(),
      ic = function (o, s) {
        return (s.value = null);
      };
    function sb(o) {
      return Xr(ob.prototype, function (l, d) {
        this.db = o;
        var u = Oh,
          m = null;
        if (d)
          try {
            u = d();
          } catch (_) {
            m = _;
          }
        var p = l._ctx,
          g = p.table,
          v = g.hook.reading.fire;
        this._ctx = {
          table: g,
          index: p.index,
          isPrimKey:
            !p.index ||
            (g.schema.primKey.keyPath && p.index === g.schema.primKey.name),
          range: u,
          keysOnly: !1,
          dir: "next",
          unique: "",
          algorithm: null,
          filter: null,
          replayFilter: null,
          justLimit: !0,
          isMatch: null,
          offset: 0,
          limit: 1 / 0,
          error: m,
          or: p.or,
          valueMapper: v !== Wr ? v : null,
        };
      });
    }
    function ab(o, s) {
      return o < s ? -1 : o === s ? 0 : 1;
    }
    function lb(o, s) {
      return o > s ? -1 : o === s ? 0 : 1;
    }
    function Ee(o, s, l) {
      var d = o instanceof zh ? new o.Collection(o) : o;
      return (d._ctx.error = l ? new l(s) : new TypeError(s)), d;
    }
    function tr(o) {
      return new o.Collection(o, function () {
        return Bh("");
      }).limit(0);
    }
    function cb(o) {
      return o === "next"
        ? function (s) {
            return s.toUpperCase();
          }
        : function (s) {
            return s.toLowerCase();
          };
    }
    function db(o) {
      return o === "next"
        ? function (s) {
            return s.toLowerCase();
          }
        : function (s) {
            return s.toUpperCase();
          };
    }
    function ub(o, s, l, d, u, m) {
      for (var p = Math.min(o.length, d.length), g = -1, v = 0; v < p; ++v) {
        var _ = s[v];
        if (_ !== d[v])
          return u(o[v], l[v]) < 0
            ? o.substr(0, v) + l[v] + l.substr(v + 1)
            : u(o[v], d[v]) < 0
              ? o.substr(0, v) + d[v] + l.substr(v + 1)
              : g >= 0
                ? o.substr(0, g) + s[g] + l.substr(g + 1)
                : null;
        u(o[v], _) < 0 && (g = v);
      }
      return p < d.length && m === "next"
        ? o + l.substr(o.length)
        : p < o.length && m === "prev"
          ? o.substr(0, l.length)
          : g < 0
            ? null
            : o.substr(0, g) + d[g] + l.substr(g + 1);
    }
    function Ms(o, s, l, d) {
      var u,
        m,
        p,
        g,
        v,
        _,
        E,
        w = l.length;
      if (
        !l.every(function (I) {
          return typeof I == "string";
        })
      )
        return Ee(o, Th);
      function S(I) {
        (u = cb(I)), (m = db(I)), (p = I === "next" ? ab : lb);
        var k = l
          .map(function (M) {
            return { lower: m(M), upper: u(M) };
          })
          .sort(function (M, R) {
            return p(M.lower, R.lower);
          });
        (g = k.map(function (M) {
          return M.upper;
        })),
          (v = k.map(function (M) {
            return M.lower;
          })),
          (_ = I),
          (E = I === "next" ? "" : d);
      }
      S("next");
      var N = new o.Collection(o, function () {
        return ji(g[0], v[w - 1] + d);
      });
      N._ondirectionchange = function (I) {
        S(I);
      };
      var x = 0;
      return (
        N._addAlgorithm(function (I, k, M) {
          var R = I.key;
          if (typeof R != "string") return !1;
          var F = m(R);
          if (s(F, v, x)) return !0;
          for (var L = null, O = x; O < w; ++O) {
            var j = ub(R, F, g[O], v[O], p, _);
            j === null && L === null
              ? (x = O + 1)
              : (L === null || p(L, j) > 0) && (L = j);
          }
          return (
            k(
              L !== null
                ? function () {
                    I.continue(L + E);
                  }
                : M,
            ),
            !1
          );
        }),
        N
      );
    }
    function ji(o, s, l, d) {
      return { type: 2, lower: o, upper: s, lowerOpen: l, upperOpen: d };
    }
    function Bh(o) {
      return { type: 1, lower: o, upper: o };
    }
    var zh = (function () {
      function o() {}
      return (
        Object.defineProperty(o.prototype, "Collection", {
          get: function () {
            return this._ctx.table.db.Collection;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (o.prototype.between = function (s, l, d, u) {
          (d = d !== !1), (u = u === !0);
          try {
            return this._cmp(s, l) > 0 ||
              (this._cmp(s, l) === 0 && (d || u) && !(d && u))
              ? tr(this)
              : new this.Collection(this, function () {
                  return ji(s, l, !d, !u);
                });
          } catch {
            return Ee(this, fi);
          }
        }),
        (o.prototype.equals = function (s) {
          return s == null
            ? Ee(this, fi)
            : new this.Collection(this, function () {
                return Bh(s);
              });
        }),
        (o.prototype.above = function (s) {
          return s == null
            ? Ee(this, fi)
            : new this.Collection(this, function () {
                return ji(s, void 0, !0);
              });
        }),
        (o.prototype.aboveOrEqual = function (s) {
          return s == null
            ? Ee(this, fi)
            : new this.Collection(this, function () {
                return ji(s, void 0, !1);
              });
        }),
        (o.prototype.below = function (s) {
          return s == null
            ? Ee(this, fi)
            : new this.Collection(this, function () {
                return ji(void 0, s, !1, !0);
              });
        }),
        (o.prototype.belowOrEqual = function (s) {
          return s == null
            ? Ee(this, fi)
            : new this.Collection(this, function () {
                return ji(void 0, s);
              });
        }),
        (o.prototype.startsWith = function (s) {
          return typeof s != "string"
            ? Ee(this, Th)
            : this.between(s, s + Cn, !0, !0);
        }),
        (o.prototype.startsWithIgnoreCase = function (s) {
          return s === ""
            ? this.startsWith(s)
            : Ms(
                this,
                function (l, d) {
                  return l.indexOf(d[0]) === 0;
                },
                [s],
                Cn,
              );
        }),
        (o.prototype.equalsIgnoreCase = function (s) {
          return Ms(
            this,
            function (l, d) {
              return l === d[0];
            },
            [s],
            "",
          );
        }),
        (o.prototype.anyOfIgnoreCase = function () {
          var s = mi.apply(Wn, arguments);
          return s.length === 0
            ? tr(this)
            : Ms(
                this,
                function (l, d) {
                  return d.indexOf(l) !== -1;
                },
                s,
                "",
              );
        }),
        (o.prototype.startsWithAnyOfIgnoreCase = function () {
          var s = mi.apply(Wn, arguments);
          return s.length === 0
            ? tr(this)
            : Ms(
                this,
                function (l, d) {
                  return d.some(function (u) {
                    return l.indexOf(u) === 0;
                  });
                },
                s,
                Cn,
              );
        }),
        (o.prototype.anyOf = function () {
          var s = this,
            l = mi.apply(Wn, arguments),
            d = this._cmp;
          try {
            l.sort(d);
          } catch {
            return Ee(this, fi);
          }
          if (l.length === 0) return tr(this);
          var u = new this.Collection(this, function () {
            return ji(l[0], l[l.length - 1]);
          });
          u._ondirectionchange = function (p) {
            (d = p === "next" ? s._ascending : s._descending), l.sort(d);
          };
          var m = 0;
          return (
            u._addAlgorithm(function (p, g, v) {
              for (var _ = p.key; d(_, l[m]) > 0; )
                if ((++m, m === l.length)) return g(v), !1;
              return d(_, l[m]) === 0
                ? !0
                : (g(function () {
                    p.continue(l[m]);
                  }),
                  !1);
            }),
            u
          );
        }),
        (o.prototype.notEqual = function (s) {
          return this.inAnyRange(
            [
              [Zl, s],
              [s, this.db._maxKey],
            ],
            { includeLowers: !1, includeUppers: !1 },
          );
        }),
        (o.prototype.noneOf = function () {
          var s = mi.apply(Wn, arguments);
          if (s.length === 0) return new this.Collection(this);
          try {
            s.sort(this._ascending);
          } catch {
            return Ee(this, fi);
          }
          var l = s.reduce(function (d, u) {
            return d ? d.concat([[d[d.length - 1][1], u]]) : [[Zl, u]];
          }, null);
          return (
            l.push([s[s.length - 1], this.db._maxKey]),
            this.inAnyRange(l, { includeLowers: !1, includeUppers: !1 })
          );
        }),
        (o.prototype.inAnyRange = function (s, l) {
          var d = this,
            u = this._cmp,
            m = this._ascending,
            p = this._descending,
            g = this._min,
            v = this._max;
          if (s.length === 0) return tr(this);
          if (
            !s.every(function (O) {
              return O[0] !== void 0 && O[1] !== void 0 && m(O[0], O[1]) <= 0;
            })
          )
            return Ee(
              this,
              "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
              tt.InvalidArgument,
            );
          var _ = !l || l.includeLowers !== !1,
            E = l && l.includeUppers === !0;
          function w(O, j) {
            for (var K = 0, q = O.length; K < q; ++K) {
              var ot = O[K];
              if (u(j[0], ot[1]) < 0 && u(j[1], ot[0]) > 0) {
                (ot[0] = g(ot[0], j[0])), (ot[1] = v(ot[1], j[1]));
                break;
              }
            }
            return K === q && O.push(j), O;
          }
          var S = m;
          function N(O, j) {
            return S(O[0], j[0]);
          }
          var x;
          try {
            (x = s.reduce(w, [])), x.sort(N);
          } catch {
            return Ee(this, fi);
          }
          var I = 0,
            k = E
              ? function (O) {
                  return m(O, x[I][1]) > 0;
                }
              : function (O) {
                  return m(O, x[I][1]) >= 0;
                },
            M = _
              ? function (O) {
                  return p(O, x[I][0]) > 0;
                }
              : function (O) {
                  return p(O, x[I][0]) >= 0;
                };
          function R(O) {
            return !k(O) && !M(O);
          }
          var F = k,
            L = new this.Collection(this, function () {
              return ji(x[0][0], x[x.length - 1][1], !_, !E);
            });
          return (
            (L._ondirectionchange = function (O) {
              O === "next" ? ((F = k), (S = m)) : ((F = M), (S = p)), x.sort(N);
            }),
            L._addAlgorithm(function (O, j, K) {
              for (var q = O.key; F(q); )
                if ((++I, I === x.length)) return j(K), !1;
              return R(q)
                ? !0
                : (d._cmp(q, x[I][1]) === 0 ||
                    d._cmp(q, x[I][0]) === 0 ||
                    j(function () {
                      S === m ? O.continue(x[I][0]) : O.continue(x[I][1]);
                    }),
                  !1);
            }),
            L
          );
        }),
        (o.prototype.startsWithAnyOf = function () {
          var s = mi.apply(Wn, arguments);
          return s.every(function (l) {
            return typeof l == "string";
          })
            ? s.length === 0
              ? tr(this)
              : this.inAnyRange(
                  s.map(function (l) {
                    return [l, l + Cn];
                  }),
                )
            : Ee(this, "startsWithAnyOf() only works with strings");
        }),
        o
      );
    })();
    function hb(o) {
      return Xr(zh.prototype, function (l, d, u) {
        if (
          ((this.db = o),
          (this._ctx = { table: l, index: d === ":id" ? null : d, or: u }),
          (this._cmp = this._ascending = bt),
          (this._descending = function (m, p) {
            return bt(p, m);
          }),
          (this._max = function (m, p) {
            return bt(m, p) > 0 ? m : p;
          }),
          (this._min = function (m, p) {
            return bt(m, p) < 0 ? m : p;
          }),
          (this._IDBKeyRange = o._deps.IDBKeyRange),
          !this._IDBKeyRange)
        )
          throw new tt.MissingAPI();
      });
    }
    function ri(o) {
      return Pt(function (s) {
        return to(s), o(s.target.error), !1;
      });
    }
    function to(o) {
      o.stopPropagation && o.stopPropagation(),
        o.preventDefault && o.preventDefault();
    }
    var eo = "storagemutated",
      nc = "x-storagemutated-1",
      Vi = Zr(null, eo),
      mb = (function () {
        function o() {}
        return (
          (o.prototype._lock = function () {
            return (
              ze(!J.global),
              ++this._reculock,
              this._reculock === 1 && !J.global && (J.lockOwnerFor = this),
              this
            );
          }),
          (o.prototype._unlock = function () {
            if ((ze(!J.global), --this._reculock === 0))
              for (
                J.global || (J.lockOwnerFor = null);
                this._blockedFuncs.length > 0 && !this._locked();

              ) {
                var s = this._blockedFuncs.shift();
                try {
                  xn(s[1], s[0]);
                } catch {}
              }
            return this;
          }),
          (o.prototype._locked = function () {
            return this._reculock && J.lockOwnerFor !== this;
          }),
          (o.prototype.create = function (s) {
            var l = this;
            if (!this.mode) return this;
            var d = this.db.idbdb,
              u = this.db._state.dbOpenError;
            if ((ze(!this.idbtrans), !s && !d))
              switch (u && u.name) {
                case "DatabaseClosedError":
                  throw new tt.DatabaseClosed(u);
                case "MissingAPIError":
                  throw new tt.MissingAPI(u.message, u);
                default:
                  throw new tt.OpenFailed(u);
              }
            if (!this.active) throw new tt.TransactionInactive();
            return (
              ze(this._completion._state === null),
              (s = this.idbtrans =
                s ||
                (this.db.core
                  ? this.db.core.transaction(this.storeNames, this.mode, {
                      durability: this.chromeTransactionDurability,
                    })
                  : d.transaction(this.storeNames, this.mode, {
                      durability: this.chromeTransactionDurability,
                    }))),
              (s.onerror = Pt(function (m) {
                to(m), l._reject(s.error);
              })),
              (s.onabort = Pt(function (m) {
                to(m),
                  l.active && l._reject(new tt.Abort(s.error)),
                  (l.active = !1),
                  l.on("abort").fire(m);
              })),
              (s.oncomplete = Pt(function () {
                (l.active = !1),
                  l._resolve(),
                  "mutatedParts" in s && Vi.storagemutated.fire(s.mutatedParts);
              })),
              this
            );
          }),
          (o.prototype._promise = function (s, l, d) {
            var u = this;
            if (s === "readwrite" && this.mode !== "readwrite")
              return Wt(new tt.ReadOnly("Transaction is readonly"));
            if (!this.active) return Wt(new tt.TransactionInactive());
            if (this._locked())
              return new $(function (p, g) {
                u._blockedFuncs.push([
                  function () {
                    u._promise(s, l, d).then(p, g);
                  },
                  J,
                ]);
              });
            if (d)
              return Pi(function () {
                var p = new $(function (g, v) {
                  u._lock();
                  var _ = l(g, v, u);
                  _ && _.then && _.then(g, v);
                });
                return (
                  p.finally(function () {
                    return u._unlock();
                  }),
                  (p._lib = !0),
                  p
                );
              });
            var m = new $(function (p, g) {
              var v = l(p, g, u);
              v && v.then && v.then(p, g);
            });
            return (m._lib = !0), m;
          }),
          (o.prototype._root = function () {
            return this.parent ? this.parent._root() : this;
          }),
          (o.prototype.waitFor = function (s) {
            var l = this._root(),
              d = $.resolve(s);
            if (l._waitingFor)
              l._waitingFor = l._waitingFor.then(function () {
                return d;
              });
            else {
              (l._waitingFor = d), (l._waitingQueue = []);
              var u = l.idbtrans.objectStore(l.storeNames[0]);
              (function p() {
                for (++l._spinCount; l._waitingQueue.length; )
                  l._waitingQueue.shift()();
                l._waitingFor && (u.get(-1 / 0).onsuccess = p);
              })();
            }
            var m = l._waitingFor;
            return new $(function (p, g) {
              d.then(
                function (v) {
                  return l._waitingQueue.push(Pt(p.bind(null, v)));
                },
                function (v) {
                  return l._waitingQueue.push(Pt(g.bind(null, v)));
                },
              ).finally(function () {
                l._waitingFor === m && (l._waitingFor = null);
              });
            });
          }),
          (o.prototype.abort = function () {
            this.active &&
              ((this.active = !1),
              this.idbtrans && this.idbtrans.abort(),
              this._reject(new tt.Abort()));
          }),
          (o.prototype.table = function (s) {
            var l = this._memoizedTables || (this._memoizedTables = {});
            if (y(l, s)) return l[s];
            var d = this.schema[s];
            if (!d)
              throw new tt.NotFound("Table " + s + " not part of transaction");
            var u = new this.db.Table(s, d, this);
            return (u.core = this.db.core.table(s)), (l[s] = u), u;
          }),
          o
        );
      })();
    function fb(o) {
      return Xr(mb.prototype, function (l, d, u, m, p) {
        var g = this;
        (this.db = o),
          (this.mode = l),
          (this.storeNames = d),
          (this.schema = u),
          (this.chromeTransactionDurability = m),
          (this.idbtrans = null),
          (this.on = Zr(this, "complete", "error", "abort")),
          (this.parent = p || null),
          (this.active = !0),
          (this._reculock = 0),
          (this._blockedFuncs = []),
          (this._resolve = null),
          (this._reject = null),
          (this._waitingFor = null),
          (this._waitingQueue = null),
          (this._spinCount = 0),
          (this._completion = new $(function (v, _) {
            (g._resolve = v), (g._reject = _);
          })),
          this._completion.then(
            function () {
              (g.active = !1), g.on.complete.fire();
            },
            function (v) {
              var _ = g.active;
              return (
                (g.active = !1),
                g.on.error.fire(v),
                g.parent
                  ? g.parent._reject(v)
                  : _ && g.idbtrans && g.idbtrans.abort(),
                Wt(v)
              );
            },
          );
      });
    }
    function rc(o, s, l, d, u, m, p) {
      return {
        name: o,
        keyPath: s,
        unique: l,
        multi: d,
        auto: u,
        compound: m,
        src: (l && !p ? "&" : "") + (d ? "*" : "") + (u ? "++" : "") + Uh(s),
      };
    }
    function Uh(o) {
      return typeof o == "string"
        ? o
        : o
          ? "[" + [].join.call(o, "+") + "]"
          : "";
    }
    function oc(o, s, l) {
      return {
        name: o,
        primKey: s,
        indexes: l,
        mappedClass: null,
        idxByName: gn(l, function (d) {
          return [d.name, d];
        }),
      };
    }
    function pb(o) {
      return o.length === 1 ? o[0] : o;
    }
    var io = function (o) {
      try {
        return (
          o.only([[]]),
          (io = function () {
            return [[]];
          }),
          [[]]
        );
      } catch {
        return (
          (io = function () {
            return Cn;
          }),
          Cn
        );
      }
    };
    function sc(o) {
      return o == null
        ? function () {}
        : typeof o == "string"
          ? gb(o)
          : function (s) {
              return Me(s, o);
            };
    }
    function gb(o) {
      var s = o.split(".");
      return s.length === 1
        ? function (l) {
            return l[o];
          }
        : function (l) {
            return Me(l, o);
          };
    }
    function Hh(o) {
      return [].slice.call(o);
    }
    var vb = 0;
    function no(o) {
      return o == null
        ? ":id"
        : typeof o == "string"
          ? o
          : "[".concat(o.join("+"), "]");
    }
    function bb(o, s, l) {
      function d(w, S) {
        var N = Hh(w.objectStoreNames);
        return {
          schema: {
            name: w.name,
            tables: N.map(function (x) {
              return S.objectStore(x);
            }).map(function (x) {
              var I = x.keyPath,
                k = x.autoIncrement,
                M = c(I),
                R = I == null,
                F = {},
                L = {
                  name: x.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: R,
                    compound: M,
                    keyPath: I,
                    autoIncrement: k,
                    unique: !0,
                    extractKey: sc(I),
                  },
                  indexes: Hh(x.indexNames)
                    .map(function (O) {
                      return x.index(O);
                    })
                    .map(function (O) {
                      var j = O.name,
                        K = O.unique,
                        q = O.multiEntry,
                        ot = O.keyPath,
                        X = c(ot),
                        nt = {
                          name: j,
                          compound: X,
                          keyPath: ot,
                          unique: K,
                          multiEntry: q,
                          extractKey: sc(ot),
                        };
                      return (F[no(ot)] = nt), nt;
                    }),
                  getIndexByKeyPath: function (O) {
                    return F[no(O)];
                  },
                };
              return (
                (F[":id"] = L.primaryKey),
                I != null && (F[no(I)] = L.primaryKey),
                L
              );
            }),
          },
          hasGetAll:
            N.length > 0 &&
            "getAll" in S.objectStore(N[0]) &&
            !(
              typeof navigator < "u" &&
              /Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
            ),
        };
      }
      function u(w) {
        if (w.type === 3) return null;
        if (w.type === 4)
          throw new Error("Cannot convert never type to IDBKeyRange");
        var S = w.lower,
          N = w.upper,
          x = w.lowerOpen,
          I = w.upperOpen,
          k =
            S === void 0
              ? N === void 0
                ? null
                : s.upperBound(N, !!I)
              : N === void 0
                ? s.lowerBound(S, !!x)
                : s.bound(S, N, !!x, !!I);
        return k;
      }
      function m(w) {
        var S = w.name;
        function N(k) {
          var M = k.trans,
            R = k.type,
            F = k.keys,
            L = k.values,
            O = k.range;
          return new Promise(function (j, K) {
            j = Pt(j);
            var q = M.objectStore(S),
              ot = q.keyPath == null,
              X = R === "put" || R === "add";
            if (!X && R !== "delete" && R !== "deleteRange")
              throw new Error("Invalid operation type: " + R);
            var nt = (F || L || { length: 1 }).length;
            if (F && L && F.length !== L.length)
              throw new Error(
                "Given keys array must have same length as given values array.",
              );
            if (nt === 0)
              return j({
                numFailures: 0,
                failures: {},
                results: [],
                lastResult: void 0,
              });
            var vt,
              lt = [],
              At = [],
              rt = 0,
              re = function (si) {
                ++rt, to(si);
              };
            if (R === "deleteRange") {
              if (O.type === 4)
                return j({
                  numFailures: rt,
                  failures: At,
                  results: [],
                  lastResult: void 0,
                });
              O.type === 3
                ? lt.push((vt = q.clear()))
                : lt.push((vt = q.delete(u(O))));
            } else {
              var Ue = X ? (ot ? [L, F] : [L, null]) : [F, null],
                Ui = Ue[0],
                oi = Ue[1];
              if (X)
                for (var Re = 0; Re < nt; ++Re)
                  lt.push(
                    (vt =
                      oi && oi[Re] !== void 0
                        ? q[R](Ui[Re], oi[Re])
                        : q[R](Ui[Re])),
                  ),
                    (vt.onerror = re);
              else
                for (var Re = 0; Re < nt; ++Re)
                  lt.push((vt = q[R](Ui[Re]))), (vt.onerror = re);
            }
            var Hi = function (si) {
              var so = si.target.result;
              lt.forEach(function (He, Us) {
                return He.error != null && (At[Us] = He.error);
              }),
                j({
                  numFailures: rt,
                  failures: At,
                  results:
                    R === "delete"
                      ? F
                      : lt.map(function (He) {
                          return He.result;
                        }),
                  lastResult: so,
                });
            };
            (vt.onerror = function (si) {
              re(si), Hi(si);
            }),
              (vt.onsuccess = Hi);
          });
        }
        function x(k) {
          var M = k.trans,
            R = k.values,
            F = k.query,
            L = k.reverse,
            O = k.unique;
          return new Promise(function (j, K) {
            j = Pt(j);
            var q = F.index,
              ot = F.range,
              X = M.objectStore(S),
              nt = q.isPrimaryKey ? X : X.index(q.name),
              vt = L ? (O ? "prevunique" : "prev") : O ? "nextunique" : "next",
              lt =
                R || !("openKeyCursor" in nt)
                  ? nt.openCursor(u(ot), vt)
                  : nt.openKeyCursor(u(ot), vt);
            (lt.onerror = ri(K)),
              (lt.onsuccess = Pt(function (At) {
                var rt = lt.result;
                if (!rt) {
                  j(null);
                  return;
                }
                (rt.___id = ++vb), (rt.done = !1);
                var re = rt.continue.bind(rt),
                  Ue = rt.continuePrimaryKey;
                Ue && (Ue = Ue.bind(rt));
                var Ui = rt.advance.bind(rt),
                  oi = function () {
                    throw new Error("Cursor not started");
                  },
                  Re = function () {
                    throw new Error("Cursor not stopped");
                  };
                (rt.trans = M),
                  (rt.stop =
                    rt.continue =
                    rt.continuePrimaryKey =
                    rt.advance =
                      oi),
                  (rt.fail = Pt(K)),
                  (rt.next = function () {
                    var Hi = this,
                      si = 1;
                    return this.start(function () {
                      return si-- ? Hi.continue() : Hi.stop();
                    }).then(function () {
                      return Hi;
                    });
                  }),
                  (rt.start = function (Hi) {
                    var si = new Promise(function (He, Us) {
                        (He = Pt(He)),
                          (lt.onerror = ri(Us)),
                          (rt.fail = Us),
                          (rt.stop = function (o_) {
                            (rt.stop =
                              rt.continue =
                              rt.continuePrimaryKey =
                              rt.advance =
                                Re),
                              He(o_);
                          });
                      }),
                      so = function () {
                        if (lt.result)
                          try {
                            Hi();
                          } catch (He) {
                            rt.fail(He);
                          }
                        else
                          (rt.done = !0),
                            (rt.start = function () {
                              throw new Error("Cursor behind last entry");
                            }),
                            rt.stop();
                      };
                    return (
                      (lt.onsuccess = Pt(function (He) {
                        (lt.onsuccess = so), so();
                      })),
                      (rt.continue = re),
                      (rt.continuePrimaryKey = Ue),
                      (rt.advance = Ui),
                      so(),
                      si
                    );
                  }),
                  j(rt);
              }, K));
          });
        }
        function I(k) {
          return function (M) {
            return new Promise(function (R, F) {
              R = Pt(R);
              var L = M.trans,
                O = M.values,
                j = M.limit,
                K = M.query,
                q = j === 1 / 0 ? void 0 : j,
                ot = K.index,
                X = K.range,
                nt = L.objectStore(S),
                vt = ot.isPrimaryKey ? nt : nt.index(ot.name),
                lt = u(X);
              if (j === 0) return R({ result: [] });
              if (k) {
                var At = O ? vt.getAll(lt, q) : vt.getAllKeys(lt, q);
                (At.onsuccess = function (Ui) {
                  return R({ result: Ui.target.result });
                }),
                  (At.onerror = ri(F));
              } else {
                var rt = 0,
                  re =
                    O || !("openKeyCursor" in vt)
                      ? vt.openCursor(lt)
                      : vt.openKeyCursor(lt),
                  Ue = [];
                (re.onsuccess = function (Ui) {
                  var oi = re.result;
                  if (!oi) return R({ result: Ue });
                  if ((Ue.push(O ? oi.value : oi.primaryKey), ++rt === j))
                    return R({ result: Ue });
                  oi.continue();
                }),
                  (re.onerror = ri(F));
              }
            });
          };
        }
        return {
          name: S,
          schema: w,
          mutate: N,
          getMany: function (k) {
            var M = k.trans,
              R = k.keys;
            return new Promise(function (F, L) {
              F = Pt(F);
              for (
                var O = M.objectStore(S),
                  j = R.length,
                  K = new Array(j),
                  q = 0,
                  ot = 0,
                  X,
                  nt = function (rt) {
                    var re = rt.target;
                    (K[re._pos] = re.result) != null, ++ot === q && F(K);
                  },
                  vt = ri(L),
                  lt = 0;
                lt < j;
                ++lt
              ) {
                var At = R[lt];
                At != null &&
                  ((X = O.get(R[lt])),
                  (X._pos = lt),
                  (X.onsuccess = nt),
                  (X.onerror = vt),
                  ++q);
              }
              q === 0 && F(K);
            });
          },
          get: function (k) {
            var M = k.trans,
              R = k.key;
            return new Promise(function (F, L) {
              F = Pt(F);
              var O = M.objectStore(S),
                j = O.get(R);
              (j.onsuccess = function (K) {
                return F(K.target.result);
              }),
                (j.onerror = ri(L));
            });
          },
          query: I(v),
          openCursor: x,
          count: function (k) {
            var M = k.query,
              R = k.trans,
              F = M.index,
              L = M.range;
            return new Promise(function (O, j) {
              var K = R.objectStore(S),
                q = F.isPrimaryKey ? K : K.index(F.name),
                ot = u(L),
                X = ot ? q.count(ot) : q.count();
              (X.onsuccess = Pt(function (nt) {
                return O(nt.target.result);
              })),
                (X.onerror = ri(j));
            });
          },
        };
      }
      var p = d(o, l),
        g = p.schema,
        v = p.hasGetAll,
        _ = g.tables.map(function (w) {
          return m(w);
        }),
        E = {};
      return (
        _.forEach(function (w) {
          return (E[w.name] = w);
        }),
        {
          stack: "dbcore",
          transaction: o.transaction.bind(o),
          table: function (w) {
            var S = E[w];
            if (!S) throw new Error("Table '".concat(w, "' not found"));
            return E[w];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: io(s),
          schema: g,
        }
      );
    }
    function _b(o, s) {
      return s.reduce(function (l, d) {
        var u = d.create;
        return t(t({}, l), u(l));
      }, o);
    }
    function yb(o, s, l, d) {
      var u = l.IDBKeyRange;
      l.indexedDB;
      var m = _b(bb(s, u, d), o.dbcore);
      return { dbcore: m };
    }
    function Rs(o, s) {
      var l = s.db,
        d = yb(o._middlewares, l, o._deps, s);
      (o.core = d.dbcore),
        o.tables.forEach(function (u) {
          var m = u.name;
          o.core.schema.tables.some(function (p) {
            return p.name === m;
          }) &&
            ((u.core = o.core.table(m)),
            o[m] instanceof o.Table && (o[m].core = u.core));
        });
    }
    function Ts(o, s, l, d) {
      l.forEach(function (u) {
        var m = d[u];
        s.forEach(function (p) {
          var g = it(p, u);
          (!g || ("value" in g && g.value === void 0)) &&
            (p === o.Transaction.prototype || p instanceof o.Transaction
              ? z(p, u, {
                  get: function () {
                    return this.table(u);
                  },
                  set: function (v) {
                    U(this, u, {
                      value: v,
                      writable: !0,
                      configurable: !0,
                      enumerable: !0,
                    });
                  },
                })
              : (p[u] = new o.Table(u, m)));
        });
      });
    }
    function ac(o, s) {
      s.forEach(function (l) {
        for (var d in l) l[d] instanceof o.Table && delete l[d];
      });
    }
    function wb(o, s) {
      return o._cfg.version - s._cfg.version;
    }
    function xb(o, s, l, d) {
      var u = o._dbSchema;
      l.objectStoreNames.contains("$meta") &&
        !u.$meta &&
        ((u.$meta = oc("$meta", Kh("")[0], [])), o._storeNames.push("$meta"));
      var m = o._createTransaction("readwrite", o._storeNames, u);
      m.create(l), m._completion.catch(d);
      var p = m._reject.bind(m),
        g = J.transless || J;
      Pi(function () {
        if (((J.trans = m), (J.transless = g), s === 0))
          a(u).forEach(function (v) {
            cc(l, v, u[v].primKey, u[v].indexes);
          }),
            Rs(o, l),
            $.follow(function () {
              return o.on.populate.fire(m);
            }).catch(p);
        else
          return (
            Rs(o, l),
            Eb(o, m, s)
              .then(function (v) {
                return Ib(o, v, m, l);
              })
              .catch(p)
          );
      });
    }
    function Cb(o, s) {
      $h(o._dbSchema, s),
        s.db.version % 10 === 0 &&
          !s.objectStoreNames.contains("$meta") &&
          s.db
            .createObjectStore("$meta")
            .add(Math.ceil(s.db.version / 10 - 1), "version");
      var l = Fs(o, o.idbdb, s);
      Ps(o, o._dbSchema, s);
      for (
        var d = lc(l, o._dbSchema),
          u = function (_) {
            if (_.change.length || _.recreate)
              return (
                console.warn(
                  "Unable to patch indexes of table ".concat(
                    _.name,
                    " because it has changes on the type of index or primary key.",
                  ),
                ),
                { value: void 0 }
              );
            var E = s.objectStore(_.name);
            _.add.forEach(function (w) {
              ni &&
                console.debug(
                  "Dexie upgrade patch: Creating missing index "
                    .concat(_.name, ".")
                    .concat(w.src),
                ),
                Os(E, w);
            });
          },
          m = 0,
          p = d.change;
        m < p.length;
        m++
      ) {
        var g = p[m],
          v = u(g);
        if (typeof v == "object") return v.value;
      }
    }
    function Eb(o, s, l) {
      return s.storeNames.includes("$meta")
        ? s
            .table("$meta")
            .get("version")
            .then(function (d) {
              return d ?? l;
            })
        : $.resolve(l);
    }
    function Ib(o, s, l, d) {
      var u = [],
        m = o._versions,
        p = (o._dbSchema = Fs(o, o.idbdb, d)),
        g = m.filter(function (_) {
          return _._cfg.version >= s;
        });
      if (g.length === 0) return $.resolve();
      g.forEach(function (_) {
        u.push(function () {
          var E = p,
            w = _._cfg.dbschema;
          Ps(o, E, d), Ps(o, w, d), (p = o._dbSchema = w);
          var S = lc(E, w);
          S.add.forEach(function (R) {
            cc(d, R[0], R[1].primKey, R[1].indexes);
          }),
            S.change.forEach(function (R) {
              if (R.recreate)
                throw new tt.Upgrade(
                  "Not yet support for changing primary key",
                );
              var F = d.objectStore(R.name);
              R.add.forEach(function (L) {
                return Os(F, L);
              }),
                R.change.forEach(function (L) {
                  F.deleteIndex(L.name), Os(F, L);
                }),
                R.del.forEach(function (L) {
                  return F.deleteIndex(L);
                });
            });
          var N = _._cfg.contentUpgrade;
          if (N && _._cfg.version > s) {
            Rs(o, d), (l._memoizedTables = {});
            var x = ph(w);
            S.del.forEach(function (R) {
              x[R] = E[R];
            }),
              ac(o, [o.Transaction.prototype]),
              Ts(o, [o.Transaction.prototype], a(x), x),
              (l.schema = x);
            var I = Nl(N);
            I && Zn();
            var k,
              M = $.follow(function () {
                if (((k = N(l)), k && I)) {
                  var R = Li.bind(null, null);
                  k.then(R, R);
                }
              });
            return k && typeof k.then == "function"
              ? $.resolve(k)
              : M.then(function () {
                  return k;
                });
          }
        }),
          u.push(function (E) {
            var w = _._cfg.dbschema;
            Db(w, E),
              ac(o, [o.Transaction.prototype]),
              Ts(o, [o.Transaction.prototype], o._storeNames, o._dbSchema),
              (l.schema = o._dbSchema);
          }),
          u.push(function (E) {
            o.idbdb.objectStoreNames.contains("$meta") &&
              (Math.ceil(o.idbdb.version / 10) === _._cfg.version
                ? (o.idbdb.deleteObjectStore("$meta"),
                  delete o._dbSchema.$meta,
                  (o._storeNames = o._storeNames.filter(function (w) {
                    return w !== "$meta";
                  })))
                : E.objectStore("$meta").put(_._cfg.version, "version"));
          });
      });
      function v() {
        return u.length
          ? $.resolve(u.shift()(l.idbtrans)).then(v)
          : $.resolve();
      }
      return v().then(function () {
        $h(p, d);
      });
    }
    function lc(o, s) {
      var l = { del: [], add: [], change: [] },
        d;
      for (d in o) s[d] || l.del.push(d);
      for (d in s) {
        var u = o[d],
          m = s[d];
        if (!u) l.add.push([d, m]);
        else {
          var p = {
            name: d,
            def: m,
            recreate: !1,
            del: [],
            add: [],
            change: [],
          };
          if (
            "" + (u.primKey.keyPath || "") != "" + (m.primKey.keyPath || "") ||
            u.primKey.auto !== m.primKey.auto
          )
            (p.recreate = !0), l.change.push(p);
          else {
            var g = u.idxByName,
              v = m.idxByName,
              _ = void 0;
            for (_ in g) v[_] || p.del.push(_);
            for (_ in v) {
              var E = g[_],
                w = v[_];
              E ? E.src !== w.src && p.change.push(w) : p.add.push(w);
            }
            (p.del.length > 0 || p.add.length > 0 || p.change.length > 0) &&
              l.change.push(p);
          }
        }
      }
      return l;
    }
    function cc(o, s, l, d) {
      var u = o.db.createObjectStore(
        s,
        l.keyPath
          ? { keyPath: l.keyPath, autoIncrement: l.auto }
          : { autoIncrement: l.auto },
      );
      return (
        d.forEach(function (m) {
          return Os(u, m);
        }),
        u
      );
    }
    function $h(o, s) {
      a(o).forEach(function (l) {
        s.db.objectStoreNames.contains(l) ||
          (ni && console.debug("Dexie: Creating missing table", l),
          cc(s, l, o[l].primKey, o[l].indexes));
      });
    }
    function Db(o, s) {
      [].slice.call(s.db.objectStoreNames).forEach(function (l) {
        return o[l] == null && s.db.deleteObjectStore(l);
      });
    }
    function Os(o, s) {
      o.createIndex(s.name, s.keyPath, {
        unique: s.unique,
        multiEntry: s.multi,
      });
    }
    function Fs(o, s, l) {
      var d = {},
        u = Kt(s.objectStoreNames, 0);
      return (
        u.forEach(function (m) {
          for (
            var p = l.objectStore(m),
              g = p.keyPath,
              v = rc(
                Uh(g),
                g || "",
                !0,
                !1,
                !!p.autoIncrement,
                g && typeof g != "string",
                !0,
              ),
              _ = [],
              E = 0;
            E < p.indexNames.length;
            ++E
          ) {
            var w = p.index(p.indexNames[E]);
            g = w.keyPath;
            var S = rc(
              w.name,
              g,
              !!w.unique,
              !!w.multiEntry,
              !1,
              g && typeof g != "string",
              !1,
            );
            _.push(S);
          }
          d[m] = oc(m, v, _);
        }),
        d
      );
    }
    function Ab(o, s, l) {
      o.verno = s.version / 10;
      var d = (o._dbSchema = Fs(o, s, l));
      (o._storeNames = Kt(s.objectStoreNames, 0)),
        Ts(o, [o._allTables], a(d), d);
    }
    function Sb(o, s) {
      var l = Fs(o, o.idbdb, s),
        d = lc(l, o._dbSchema);
      return !(
        d.add.length ||
        d.change.some(function (u) {
          return u.add.length || u.change.length;
        })
      );
    }
    function Ps(o, s, l) {
      for (var d = l.db.objectStoreNames, u = 0; u < d.length; ++u) {
        var m = d[u],
          p = l.objectStore(m);
        o._hasGetAll = "getAll" in p;
        for (var g = 0; g < p.indexNames.length; ++g) {
          var v = p.indexNames[g],
            _ = p.index(v).keyPath,
            E = typeof _ == "string" ? _ : "[" + Kt(_).join("+") + "]";
          if (s[m]) {
            var w = s[m].idxByName[E];
            w &&
              ((w.name = v), delete s[m].idxByName[E], (s[m].idxByName[v] = w));
          }
        }
      }
      typeof navigator < "u" &&
        /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        r.WorkerGlobalScope &&
        r instanceof r.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
        (o._hasGetAll = !1);
    }
    function Kh(o) {
      return o.split(",").map(function (s, l) {
        s = s.trim();
        var d = s.replace(/([&*]|\+\+)/g, ""),
          u = /^\[/.test(d) ? d.match(/^\[(.*)\]$/)[1].split("+") : d;
        return rc(
          d,
          u || null,
          /\&/.test(s),
          /\*/.test(s),
          /\+\+/.test(s),
          c(u),
          l === 0,
        );
      });
    }
    var kb = (function () {
      function o() {}
      return (
        (o.prototype._parseStoresSpec = function (s, l) {
          a(s).forEach(function (d) {
            if (s[d] !== null) {
              var u = Kh(s[d]),
                m = u.shift();
              if (((m.unique = !0), m.multi))
                throw new tt.Schema("Primary key cannot be multi-valued");
              u.forEach(function (p) {
                if (p.auto)
                  throw new tt.Schema(
                    "Only primary key can be marked as autoIncrement (++)",
                  );
                if (!p.keyPath)
                  throw new tt.Schema(
                    "Index must have a name and cannot be an empty string",
                  );
              }),
                (l[d] = oc(d, m, u));
            }
          });
        }),
        (o.prototype.stores = function (s) {
          var l = this.db;
          this._cfg.storesSource = this._cfg.storesSource
            ? h(this._cfg.storesSource, s)
            : s;
          var d = l._versions,
            u = {},
            m = {};
          return (
            d.forEach(function (p) {
              h(u, p._cfg.storesSource),
                (m = p._cfg.dbschema = {}),
                p._parseStoresSpec(u, m);
            }),
            (l._dbSchema = m),
            ac(l, [l._allTables, l, l.Transaction.prototype]),
            Ts(
              l,
              [l._allTables, l, l.Transaction.prototype, this._cfg.tables],
              a(m),
              m,
            ),
            (l._storeNames = a(m)),
            this
          );
        }),
        (o.prototype.upgrade = function (s) {
          return (
            (this._cfg.contentUpgrade = Bl(this._cfg.contentUpgrade || Dt, s)),
            this
          );
        }),
        o
      );
    })();
    function Mb(o) {
      return Xr(kb.prototype, function (l) {
        (this.db = o),
          (this._cfg = {
            version: l,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null,
          });
      });
    }
    function dc(o, s) {
      var l = o._dbNamesDB;
      return (
        l ||
          ((l = o._dbNamesDB =
            new pi(Ds, { addons: [], indexedDB: o, IDBKeyRange: s })),
          l.version(1).stores({ dbnames: "name" })),
        l.table("dbnames")
      );
    }
    function uc(o) {
      return o && typeof o.databases == "function";
    }
    function Rb(o) {
      var s = o.indexedDB,
        l = o.IDBKeyRange;
      return uc(s)
        ? Promise.resolve(s.databases()).then(function (d) {
            return d
              .map(function (u) {
                return u.name;
              })
              .filter(function (u) {
                return u !== Ds;
              });
          })
        : dc(s, l).toCollection().primaryKeys();
    }
    function Tb(o, s) {
      var l = o.indexedDB,
        d = o.IDBKeyRange;
      !uc(l) && s !== Ds && dc(l, d).put({ name: s }).catch(Dt);
    }
    function Ob(o, s) {
      var l = o.indexedDB,
        d = o.IDBKeyRange;
      !uc(l) && s !== Ds && dc(l, d).delete(s).catch(Dt);
    }
    function hc(o) {
      return Pi(function () {
        return (J.letThrough = !0), o();
      });
    }
    function Fb() {
      var o =
        !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
      if (!o || !indexedDB.databases) return Promise.resolve();
      var s;
      return new Promise(function (l) {
        var d = function () {
          return indexedDB.databases().finally(l);
        };
        (s = setInterval(d, 100)), d();
      }).finally(function () {
        return clearInterval(s);
      });
    }
    var mc;
    function fc(o) {
      return !("from" in o);
    }
    var ue = function (o, s) {
      if (this)
        h(
          this,
          arguments.length
            ? { d: 1, from: o, to: arguments.length > 1 ? s : o }
            : { d: 0 },
        );
      else {
        var l = new ue();
        return o && "d" in o && h(l, o), l;
      }
    };
    D(
      ue.prototype,
      ((mc = {
        add: function (o) {
          return oo(this, o), this;
        },
        addKey: function (o) {
          return ro(this, o, o), this;
        },
        addKeys: function (o) {
          var s = this;
          return (
            o.forEach(function (l) {
              return ro(s, l, l);
            }),
            this
          );
        },
        hasKey: function (o) {
          var s = Ls(this).next(o).value;
          return s && bt(s.from, o) <= 0 && bt(s.to, o) >= 0;
        },
      }),
      (mc[Ll] = function () {
        return Ls(this);
      }),
      mc),
    );
    function ro(o, s, l) {
      var d = bt(s, l);
      if (!isNaN(d)) {
        if (d > 0) throw RangeError();
        if (fc(o)) return h(o, { from: s, to: l, d: 1 });
        var u = o.l,
          m = o.r;
        if (bt(l, o.from) < 0)
          return (
            u
              ? ro(u, s, l)
              : (o.l = { from: s, to: l, d: 1, l: null, r: null }),
            Gh(o)
          );
        if (bt(s, o.to) > 0)
          return (
            m
              ? ro(m, s, l)
              : (o.r = { from: s, to: l, d: 1, l: null, r: null }),
            Gh(o)
          );
        bt(s, o.from) < 0 &&
          ((o.from = s), (o.l = null), (o.d = m ? m.d + 1 : 1)),
          bt(l, o.to) > 0 &&
            ((o.to = l), (o.r = null), (o.d = o.l ? o.l.d + 1 : 1));
        var p = !o.r;
        u && !o.l && oo(o, u), m && p && oo(o, m);
      }
    }
    function oo(o, s) {
      function l(d, u) {
        var m = u.from,
          p = u.to,
          g = u.l,
          v = u.r;
        ro(d, m, p), g && l(d, g), v && l(d, v);
      }
      fc(s) || l(o, s);
    }
    function Wh(o, s) {
      var l = Ls(s),
        d = l.next();
      if (d.done) return !1;
      for (
        var u = d.value, m = Ls(o), p = m.next(u.from), g = p.value;
        !d.done && !p.done;

      ) {
        if (bt(g.from, u.to) <= 0 && bt(g.to, u.from) >= 0) return !0;
        bt(u.from, g.from) < 0
          ? (u = (d = l.next(g.from)).value)
          : (g = (p = m.next(u.from)).value);
      }
      return !1;
    }
    function Ls(o) {
      var s = fc(o) ? null : { s: 0, n: o };
      return {
        next: function (l) {
          for (var d = arguments.length > 0; s; )
            switch (s.s) {
              case 0:
                if (((s.s = 1), d))
                  for (; s.n.l && bt(l, s.n.from) < 0; )
                    s = { up: s, n: s.n.l, s: 1 };
                else for (; s.n.l; ) s = { up: s, n: s.n.l, s: 1 };
              case 1:
                if (((s.s = 2), !d || bt(l, s.n.to) <= 0))
                  return { value: s.n, done: !1 };
              case 2:
                if (s.n.r) {
                  (s.s = 3), (s = { up: s, n: s.n.r, s: 0 });
                  continue;
                }
              case 3:
                s = s.up;
            }
          return { done: !0 };
        },
      };
    }
    function Gh(o) {
      var s,
        l,
        d =
          (((s = o.r) === null || s === void 0 ? void 0 : s.d) || 0) -
          (((l = o.l) === null || l === void 0 ? void 0 : l.d) || 0),
        u = d > 1 ? "r" : d < -1 ? "l" : "";
      if (u) {
        var m = u === "r" ? "l" : "r",
          p = t({}, o),
          g = o[u];
        (o.from = g.from),
          (o.to = g.to),
          (o[u] = g[u]),
          (p[u] = g[m]),
          (o[m] = p),
          (p.d = qh(p));
      }
      o.d = qh(o);
    }
    function qh(o) {
      var s = o.r,
        l = o.l;
      return (s ? (l ? Math.max(s.d, l.d) : s.d) : l ? l.d : 0) + 1;
    }
    function Ns(o, s) {
      return (
        a(s).forEach(function (l) {
          o[l] ? oo(o[l], s[l]) : (o[l] = bh(s[l]));
        }),
        o
      );
    }
    function pc(o, s) {
      return (
        o.all ||
        s.all ||
        Object.keys(o).some(function (l) {
          return s[l] && Wh(s[l], o[l]);
        })
      );
    }
    var In = {},
      gc = {},
      vc = !1;
    function js(o, s) {
      Ns(gc, o),
        vc ||
          ((vc = !0),
          setTimeout(function () {
            vc = !1;
            var l = gc;
            (gc = {}), bc(l, !1);
          }, 0));
    }
    function bc(o, s) {
      s === void 0 && (s = !1);
      var l = new Set();
      if (o.all)
        for (var d = 0, u = Object.values(In); d < u.length; d++) {
          var m = u[d];
          Yh(m, o, l, s);
        }
      else
        for (var p in o) {
          var g = /^idb\:\/\/(.*)\/(.*)\//.exec(p);
          if (g) {
            var v = g[1],
              _ = g[2],
              m = In["idb://".concat(v, "/").concat(_)];
            m && Yh(m, o, l, s);
          }
        }
      l.forEach(function (E) {
        return E();
      });
    }
    function Yh(o, s, l, d) {
      for (
        var u = [], m = 0, p = Object.entries(o.queries.query);
        m < p.length;
        m++
      ) {
        for (
          var g = p[m], v = g[0], _ = g[1], E = [], w = 0, S = _;
          w < S.length;
          w++
        ) {
          var N = S[w];
          pc(s, N.obsSet)
            ? N.subscribers.forEach(function (M) {
                return l.add(M);
              })
            : d && E.push(N);
        }
        d && u.push([v, E]);
      }
      if (d)
        for (var x = 0, I = u; x < I.length; x++) {
          var k = I[x],
            v = k[0],
            E = k[1];
          o.queries.query[v] = E;
        }
    }
    function Pb(o) {
      var s = o._state,
        l = o._deps.indexedDB;
      if (s.isBeingOpened || o.idbdb)
        return s.dbReadyPromise.then(function () {
          return s.dbOpenError ? Wt(s.dbOpenError) : o;
        });
      (s.isBeingOpened = !0), (s.dbOpenError = null), (s.openComplete = !1);
      var d = s.openCanceller,
        u = Math.round(o.verno * 10),
        m = !1;
      function p() {
        if (s.openCanceller !== d)
          throw new tt.DatabaseClosed("db.open() was cancelled");
      }
      var g = s.dbReadyResolve,
        v = null,
        _ = !1,
        E = function () {
          return new $(function (w, S) {
            if ((p(), !l)) throw new tt.MissingAPI();
            var N = o.name,
              x = s.autoSchema || !u ? l.open(N) : l.open(N, u);
            if (!x) throw new tt.MissingAPI();
            (x.onerror = ri(S)),
              (x.onblocked = Pt(o._fireOnBlocked)),
              (x.onupgradeneeded = Pt(function (I) {
                if (
                  ((v = x.transaction),
                  s.autoSchema && !o._options.allowEmptyDB)
                ) {
                  (x.onerror = to), v.abort(), x.result.close();
                  var k = l.deleteDatabase(N);
                  k.onsuccess = k.onerror = Pt(function () {
                    S(
                      new tt.NoSuchDatabase(
                        "Database ".concat(N, " doesnt exist"),
                      ),
                    );
                  });
                } else {
                  v.onerror = ri(S);
                  var M = I.oldVersion > Math.pow(2, 62) ? 0 : I.oldVersion;
                  (_ = M < 1),
                    (o.idbdb = x.result),
                    m && Cb(o, v),
                    xb(o, M / 10, v, S);
                }
              }, S)),
              (x.onsuccess = Pt(function () {
                v = null;
                var I = (o.idbdb = x.result),
                  k = Kt(I.objectStoreNames);
                if (k.length > 0)
                  try {
                    var M = I.transaction(pb(k), "readonly");
                    if (s.autoSchema) Ab(o, I, M);
                    else if ((Ps(o, o._dbSchema, M), !Sb(o, M) && !m))
                      return (
                        console.warn(
                          "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.",
                        ),
                        I.close(),
                        (u = I.version + 1),
                        (m = !0),
                        w(E())
                      );
                    Rs(o, M);
                  } catch {}
                Xn.push(o),
                  (I.onversionchange = Pt(function (R) {
                    (s.vcFired = !0), o.on("versionchange").fire(R);
                  })),
                  (I.onclose = Pt(function (R) {
                    o.on("close").fire(R);
                  })),
                  _ && Tb(o._deps, N),
                  w();
              }, S));
          }).catch(function (w) {
            switch (w?.name) {
              case "UnknownError":
                if (s.PR1398_maxLoop > 0)
                  return (
                    s.PR1398_maxLoop--,
                    console.warn(
                      "Dexie: Workaround for Chrome UnknownError on open()",
                    ),
                    E()
                  );
                break;
              case "VersionError":
                if (u > 0) return (u = 0), E();
                break;
            }
            return $.reject(w);
          });
        };
      return $.race([d, (typeof navigator > "u" ? $.resolve() : Fb()).then(E)])
        .then(function () {
          return (
            p(),
            (s.onReadyBeingFired = []),
            $.resolve(
              hc(function () {
                return o.on.ready.fire(o.vip);
              }),
            ).then(function w() {
              if (s.onReadyBeingFired.length > 0) {
                var S = s.onReadyBeingFired.reduce(Bl, Dt);
                return (
                  (s.onReadyBeingFired = []),
                  $.resolve(
                    hc(function () {
                      return S(o.vip);
                    }),
                  ).then(w)
                );
              }
            })
          );
        })
        .finally(function () {
          s.openCanceller === d &&
            ((s.onReadyBeingFired = null), (s.isBeingOpened = !1));
        })
        .catch(function (w) {
          s.dbOpenError = w;
          try {
            v && v.abort();
          } catch {}
          return d === s.openCanceller && o._close(), Wt(w);
        })
        .finally(function () {
          (s.openComplete = !0), g();
        })
        .then(function () {
          if (_) {
            var w = {};
            o.tables.forEach(function (S) {
              S.schema.indexes.forEach(function (N) {
                N.name &&
                  (w[
                    "idb://"
                      .concat(o.name, "/")
                      .concat(S.name, "/")
                      .concat(N.name)
                  ] = new ue(-1 / 0, [[[]]]));
              }),
                (w["idb://".concat(o.name, "/").concat(S.name, "/")] = w[
                  "idb://".concat(o.name, "/").concat(S.name, "/:dels")
                ] =
                  new ue(-1 / 0, [[[]]]));
            }),
              Vi(eo).fire(w),
              bc(w, !0);
          }
          return o;
        });
    }
    function _c(o) {
      var s = function (p) {
          return o.next(p);
        },
        l = function (p) {
          return o.throw(p);
        },
        d = m(s),
        u = m(l);
      function m(p) {
        return function (g) {
          var v = p(g),
            _ = v.value;
          return v.done
            ? _
            : !_ || typeof _.then != "function"
              ? c(_)
                ? Promise.all(_).then(d, u)
                : d(_)
              : _.then(d, u);
        };
      }
      return m(s)();
    }
    function Lb(o, s, l) {
      var d = arguments.length;
      if (d < 2) throw new tt.InvalidArgument("Too few arguments");
      for (var u = new Array(d - 1); --d; ) u[d - 1] = arguments[d];
      l = u.pop();
      var m = gh(u);
      return [o, m, l];
    }
    function Qh(o, s, l, d, u) {
      return $.resolve().then(function () {
        var m = J.transless || J,
          p = o._createTransaction(s, l, o._dbSchema, d);
        p.explicit = !0;
        var g = { trans: p, transless: m };
        if (d) p.idbtrans = d.idbtrans;
        else
          try {
            p.create(),
              (p.idbtrans._explicit = !0),
              (o._state.PR1398_maxLoop = 3);
          } catch (w) {
            return w.name === Vl.InvalidState &&
              o.isOpen() &&
              --o._state.PR1398_maxLoop > 0
              ? (console.warn("Dexie: Need to reopen db"),
                o.close({ disableAutoOpen: !1 }),
                o.open().then(function () {
                  return Qh(o, s, l, null, u);
                }))
              : Wt(w);
          }
        var v = Nl(u);
        v && Zn();
        var _,
          E = $.follow(function () {
            if (((_ = u.call(p, p)), _))
              if (v) {
                var w = Li.bind(null, null);
                _.then(w, w);
              } else
                typeof _.next == "function" &&
                  typeof _.throw == "function" &&
                  (_ = _c(_));
          }, g);
        return (
          _ && typeof _.then == "function"
            ? $.resolve(_).then(function (w) {
                return p.active
                  ? w
                  : Wt(
                      new tt.PrematureCommit(
                        "Transaction committed too early. See http://bit.ly/2kdckMn",
                      ),
                    );
              })
            : E.then(function () {
                return _;
              })
        )
          .then(function (w) {
            return (
              d && p._resolve(),
              p._completion.then(function () {
                return w;
              })
            );
          })
          .catch(function (w) {
            return p._reject(w), Wt(w);
          });
      });
    }
    function Vs(o, s, l) {
      for (var d = c(o) ? o.slice() : [o], u = 0; u < l; ++u) d.push(s);
      return d;
    }
    function Nb(o) {
      return t(t({}, o), {
        table: function (s) {
          var l = o.table(s),
            d = l.schema,
            u = {},
            m = [];
          function p(I, k, M) {
            var R = no(I),
              F = (u[R] = u[R] || []),
              L = I == null ? 0 : typeof I == "string" ? 1 : I.length,
              O = k > 0,
              j = t(t({}, M), {
                name: O
                  ? "".concat(R, "(virtual-from:").concat(M.name, ")")
                  : M.name,
                lowLevelIndex: M,
                isVirtual: O,
                keyTail: k,
                keyLength: L,
                extractKey: sc(I),
                unique: !O && M.unique,
              });
            if ((F.push(j), j.isPrimaryKey || m.push(j), L > 1)) {
              var K = L === 2 ? I[0] : I.slice(0, L - 1);
              p(K, k + 1, M);
            }
            return (
              F.sort(function (q, ot) {
                return q.keyTail - ot.keyTail;
              }),
              j
            );
          }
          var g = p(d.primaryKey.keyPath, 0, d.primaryKey);
          u[":id"] = [g];
          for (var v = 0, _ = d.indexes; v < _.length; v++) {
            var E = _[v];
            p(E.keyPath, 0, E);
          }
          function w(I) {
            var k = u[no(I)];
            return k && k[0];
          }
          function S(I, k) {
            return {
              type: I.type === 1 ? 2 : I.type,
              lower: Vs(I.lower, I.lowerOpen ? o.MAX_KEY : o.MIN_KEY, k),
              lowerOpen: !0,
              upper: Vs(I.upper, I.upperOpen ? o.MIN_KEY : o.MAX_KEY, k),
              upperOpen: !0,
            };
          }
          function N(I) {
            var k = I.query.index;
            return k.isVirtual
              ? t(t({}, I), {
                  query: {
                    index: k.lowLevelIndex,
                    range: S(I.query.range, k.keyTail),
                  },
                })
              : I;
          }
          var x = t(t({}, l), {
            schema: t(t({}, d), {
              primaryKey: g,
              indexes: m,
              getIndexByKeyPath: w,
            }),
            count: function (I) {
              return l.count(N(I));
            },
            query: function (I) {
              return l.query(N(I));
            },
            openCursor: function (I) {
              var k = I.query.index,
                M = k.keyTail,
                R = k.isVirtual,
                F = k.keyLength;
              if (!R) return l.openCursor(I);
              function L(O) {
                function j(q) {
                  q != null
                    ? O.continue(Vs(q, I.reverse ? o.MAX_KEY : o.MIN_KEY, M))
                    : I.unique
                      ? O.continue(
                          O.key
                            .slice(0, F)
                            .concat(I.reverse ? o.MIN_KEY : o.MAX_KEY, M),
                        )
                      : O.continue();
                }
                var K = Object.create(O, {
                  continue: { value: j },
                  continuePrimaryKey: {
                    value: function (q, ot) {
                      O.continuePrimaryKey(Vs(q, o.MAX_KEY, M), ot);
                    },
                  },
                  primaryKey: {
                    get: function () {
                      return O.primaryKey;
                    },
                  },
                  key: {
                    get: function () {
                      var q = O.key;
                      return F === 1 ? q[0] : q.slice(0, F);
                    },
                  },
                  value: {
                    get: function () {
                      return O.value;
                    },
                  },
                });
                return K;
              }
              return l.openCursor(N(I)).then(function (O) {
                return O && L(O);
              });
            },
          });
          return x;
        },
      });
    }
    var jb = {
      stack: "dbcore",
      name: "VirtualIndexMiddleware",
      level: 1,
      create: Nb,
    };
    function yc(o, s, l, d) {
      return (
        (l = l || {}),
        (d = d || ""),
        a(o).forEach(function (u) {
          if (!y(s, u)) l[d + u] = void 0;
          else {
            var m = o[u],
              p = s[u];
            if (typeof m == "object" && typeof p == "object" && m && p) {
              var g = Pl(m),
                v = Pl(p);
              g !== v
                ? (l[d + u] = s[u])
                : g === "Object"
                  ? yc(m, p, l, d + u + ".")
                  : m !== p && (l[d + u] = s[u]);
            } else m !== p && (l[d + u] = s[u]);
          }
        }),
        a(s).forEach(function (u) {
          y(o, u) || (l[d + u] = s[u]);
        }),
        l
      );
    }
    function wc(o, s) {
      return s.type === "delete"
        ? s.keys
        : s.keys || s.values.map(o.extractKey);
    }
    var Vb = {
      stack: "dbcore",
      name: "HooksMiddleware",
      level: 2,
      create: function (o) {
        return t(t({}, o), {
          table: function (s) {
            var l = o.table(s),
              d = l.schema.primaryKey,
              u = t(t({}, l), {
                mutate: function (m) {
                  var p = J.trans,
                    g = p.table(s).hook,
                    v = g.deleting,
                    _ = g.creating,
                    E = g.updating;
                  switch (m.type) {
                    case "add":
                      if (_.fire === Dt) break;
                      return p._promise(
                        "readwrite",
                        function () {
                          return w(m);
                        },
                        !0,
                      );
                    case "put":
                      if (_.fire === Dt && E.fire === Dt) break;
                      return p._promise(
                        "readwrite",
                        function () {
                          return w(m);
                        },
                        !0,
                      );
                    case "delete":
                      if (v.fire === Dt) break;
                      return p._promise(
                        "readwrite",
                        function () {
                          return w(m);
                        },
                        !0,
                      );
                    case "deleteRange":
                      if (v.fire === Dt) break;
                      return p._promise(
                        "readwrite",
                        function () {
                          return S(m);
                        },
                        !0,
                      );
                  }
                  return l.mutate(m);
                  function w(x) {
                    var I = J.trans,
                      k = x.keys || wc(d, x);
                    if (!k) throw new Error("Keys missing");
                    return (
                      (x =
                        x.type === "add" || x.type === "put"
                          ? t(t({}, x), { keys: k })
                          : t({}, x)),
                      x.type !== "delete" && (x.values = i([], x.values, !0)),
                      x.keys && (x.keys = i([], x.keys, !0)),
                      Bb(l, x, k).then(function (M) {
                        var R = k.map(function (F, L) {
                          var O = M[L],
                            j = { onerror: null, onsuccess: null };
                          if (x.type === "delete") v.fire.call(j, F, O, I);
                          else if (x.type === "add" || O === void 0) {
                            var K = _.fire.call(j, F, x.values[L], I);
                            F == null &&
                              K != null &&
                              ((F = K),
                              (x.keys[L] = F),
                              d.outbound || Ce(x.values[L], d.keyPath, F));
                          } else {
                            var q = yc(O, x.values[L]),
                              ot = E.fire.call(j, q, F, O, I);
                            if (ot) {
                              var X = x.values[L];
                              Object.keys(ot).forEach(function (nt) {
                                y(X, nt) ? (X[nt] = ot[nt]) : Ce(X, nt, ot[nt]);
                              });
                            }
                          }
                          return j;
                        });
                        return l
                          .mutate(x)
                          .then(function (F) {
                            for (
                              var L = F.failures,
                                O = F.results,
                                j = F.numFailures,
                                K = F.lastResult,
                                q = 0;
                              q < k.length;
                              ++q
                            ) {
                              var ot = O ? O[q] : k[q],
                                X = R[q];
                              ot == null
                                ? X.onerror && X.onerror(L[q])
                                : X.onsuccess &&
                                  X.onsuccess(
                                    x.type === "put" && M[q] ? x.values[q] : ot,
                                  );
                            }
                            return {
                              failures: L,
                              results: O,
                              numFailures: j,
                              lastResult: K,
                            };
                          })
                          .catch(function (F) {
                            return (
                              R.forEach(function (L) {
                                return L.onerror && L.onerror(F);
                              }),
                              Promise.reject(F)
                            );
                          });
                      })
                    );
                  }
                  function S(x) {
                    return N(x.trans, x.range, 1e4);
                  }
                  function N(x, I, k) {
                    return l
                      .query({
                        trans: x,
                        values: !1,
                        query: { index: d, range: I },
                        limit: k,
                      })
                      .then(function (M) {
                        var R = M.result;
                        return w({ type: "delete", keys: R, trans: x }).then(
                          function (F) {
                            return F.numFailures > 0
                              ? Promise.reject(F.failures[0])
                              : R.length < k
                                ? {
                                    failures: [],
                                    numFailures: 0,
                                    lastResult: void 0,
                                  }
                                : N(
                                    x,
                                    t(t({}, I), {
                                      lower: R[R.length - 1],
                                      lowerOpen: !0,
                                    }),
                                    k,
                                  );
                          },
                        );
                      });
                  }
                },
              });
            return u;
          },
        });
      },
    };
    function Bb(o, s, l) {
      return s.type === "add"
        ? Promise.resolve([])
        : o.getMany({ trans: s.trans, keys: l, cache: "immutable" });
    }
    function Zh(o, s, l) {
      try {
        if (!s || s.keys.length < o.length) return null;
        for (var d = [], u = 0, m = 0; u < s.keys.length && m < o.length; ++u)
          bt(s.keys[u], o[m]) === 0 &&
            (d.push(l ? vn(s.values[u]) : s.values[u]), ++m);
        return d.length === o.length ? d : null;
      } catch {
        return null;
      }
    }
    var zb = {
      stack: "dbcore",
      level: -1,
      create: function (o) {
        return {
          table: function (s) {
            var l = o.table(s);
            return t(t({}, l), {
              getMany: function (d) {
                if (!d.cache) return l.getMany(d);
                var u = Zh(d.keys, d.trans._cache, d.cache === "clone");
                return u
                  ? $.resolve(u)
                  : l.getMany(d).then(function (m) {
                      return (
                        (d.trans._cache = {
                          keys: d.keys,
                          values: d.cache === "clone" ? vn(m) : m,
                        }),
                        m
                      );
                    });
              },
              mutate: function (d) {
                return d.type !== "add" && (d.trans._cache = null), l.mutate(d);
              },
            });
          },
        };
      },
    };
    function Xh(o, s) {
      return (
        o.trans.mode === "readonly" &&
        !!o.subscr &&
        !o.trans.explicit &&
        o.trans.db._options.cache !== "disabled" &&
        !s.schema.primaryKey.outbound
      );
    }
    function Jh(o, s) {
      switch (o) {
        case "query":
          return s.values && !s.unique;
        case "get":
          return !1;
        case "getMany":
          return !1;
        case "count":
          return !1;
        case "openCursor":
          return !1;
      }
    }
    var Ub = {
      stack: "dbcore",
      level: 0,
      name: "Observability",
      create: function (o) {
        var s = o.schema.name,
          l = new ue(o.MIN_KEY, o.MAX_KEY);
        return t(t({}, o), {
          transaction: function (d, u, m) {
            if (J.subscr && u !== "readonly")
              throw new tt.ReadOnly(
                "Readwrite transaction in liveQuery context. Querier source: ".concat(
                  J.querier,
                ),
              );
            return o.transaction(d, u, m);
          },
          table: function (d) {
            var u = o.table(d),
              m = u.schema,
              p = m.primaryKey,
              g = m.indexes,
              v = p.extractKey,
              _ = p.outbound,
              E =
                p.autoIncrement &&
                g.filter(function (x) {
                  return x.compound && x.keyPath.includes(p.keyPath);
                }),
              w = t(t({}, u), {
                mutate: function (x) {
                  var I = x.trans,
                    k = x.mutatedParts || (x.mutatedParts = {}),
                    M = function (nt) {
                      var vt = "idb://"
                        .concat(s, "/")
                        .concat(d, "/")
                        .concat(nt);
                      return k[vt] || (k[vt] = new ue());
                    },
                    R = M(""),
                    F = M(":dels"),
                    L = x.type,
                    O =
                      x.type === "deleteRange"
                        ? [x.range]
                        : x.type === "delete"
                          ? [x.keys]
                          : x.values.length < 50
                            ? [
                                wc(p, x).filter(function (nt) {
                                  return nt;
                                }),
                                x.values,
                              ]
                            : [],
                    j = O[0],
                    K = O[1],
                    q = x.trans._cache;
                  if (c(j)) {
                    R.addKeys(j);
                    var ot =
                      L === "delete" || j.length === K.length ? Zh(j, q) : null;
                    ot || F.addKeys(j), (ot || K) && Hb(M, m, ot, K);
                  } else if (j) {
                    var X = { from: j.lower, to: j.upper };
                    F.add(X), R.add(X);
                  } else
                    R.add(l),
                      F.add(l),
                      m.indexes.forEach(function (nt) {
                        return M(nt.name).add(l);
                      });
                  return u.mutate(x).then(function (nt) {
                    return (
                      j &&
                        (x.type === "add" || x.type === "put") &&
                        (R.addKeys(nt.results),
                        E &&
                          E.forEach(function (vt) {
                            var lt = x.values.map(function (rt) {
                                return vt.extractKey(rt);
                              }),
                              At = vt.keyPath.findIndex(function (rt) {
                                return rt === p.keyPath;
                              });
                            nt.results.forEach(function (rt) {
                              return (lt[At] = rt);
                            }),
                              M(vt.name).addKeys(lt);
                          })),
                      (I.mutatedParts = Ns(I.mutatedParts || {}, k)),
                      nt
                    );
                  });
                },
              }),
              S = function (x) {
                var I,
                  k,
                  M = x.query,
                  R = M.index,
                  F = M.range;
                return [
                  R,
                  new ue(
                    (I = F.lower) !== null && I !== void 0 ? I : o.MIN_KEY,
                    (k = F.upper) !== null && k !== void 0 ? k : o.MAX_KEY,
                  ),
                ];
              },
              N = {
                get: function (x) {
                  return [p, new ue(x.key)];
                },
                getMany: function (x) {
                  return [p, new ue().addKeys(x.keys)];
                },
                count: S,
                query: S,
                openCursor: S,
              };
            return (
              a(N).forEach(function (x) {
                w[x] = function (I) {
                  var k = J.subscr,
                    M = !!k,
                    R = Xh(J, u) && Jh(x, I),
                    F = R ? (I.obsSet = {}) : k;
                  if (M) {
                    var L = function (nt) {
                        var vt = "idb://"
                          .concat(s, "/")
                          .concat(d, "/")
                          .concat(nt);
                        return F[vt] || (F[vt] = new ue());
                      },
                      O = L(""),
                      j = L(":dels"),
                      K = N[x](I),
                      q = K[0],
                      ot = K[1];
                    if (
                      (x === "query" && q.isPrimaryKey && !I.values
                        ? j.add(ot)
                        : L(q.name || "").add(ot),
                      !q.isPrimaryKey)
                    )
                      if (x === "count") j.add(l);
                      else {
                        var X =
                          x === "query" &&
                          _ &&
                          I.values &&
                          u.query(t(t({}, I), { values: !1 }));
                        return u[x].apply(this, arguments).then(function (nt) {
                          if (x === "query") {
                            if (_ && I.values)
                              return X.then(function (rt) {
                                var re = rt.result;
                                return O.addKeys(re), nt;
                              });
                            var vt = I.values ? nt.result.map(v) : nt.result;
                            I.values ? O.addKeys(vt) : j.addKeys(vt);
                          } else if (x === "openCursor") {
                            var lt = nt,
                              At = I.values;
                            return (
                              lt &&
                              Object.create(lt, {
                                key: {
                                  get: function () {
                                    return j.addKey(lt.primaryKey), lt.key;
                                  },
                                },
                                primaryKey: {
                                  get: function () {
                                    var rt = lt.primaryKey;
                                    return j.addKey(rt), rt;
                                  },
                                },
                                value: {
                                  get: function () {
                                    return (
                                      At && O.addKey(lt.primaryKey), lt.value
                                    );
                                  },
                                },
                              })
                            );
                          }
                          return nt;
                        });
                      }
                  }
                  return u[x].apply(this, arguments);
                };
              }),
              w
            );
          },
        });
      },
    };
    function Hb(o, s, l, d) {
      function u(m) {
        var p = o(m.name || "");
        function g(_) {
          return _ != null ? m.extractKey(_) : null;
        }
        var v = function (_) {
          return m.multiEntry && c(_)
            ? _.forEach(function (E) {
                return p.addKey(E);
              })
            : p.addKey(_);
        };
        (l || d).forEach(function (_, E) {
          var w = l && g(l[E]),
            S = d && g(d[E]);
          bt(w, S) !== 0 && (w != null && v(w), S != null && v(S));
        });
      }
      s.indexes.forEach(u);
    }
    function tm(o, s, l) {
      if (l.numFailures === 0) return s;
      if (s.type === "deleteRange") return null;
      var d = s.keys
        ? s.keys.length
        : "values" in s && s.values
          ? s.values.length
          : 1;
      if (l.numFailures === d) return null;
      var u = t({}, s);
      return (
        c(u.keys) &&
          (u.keys = u.keys.filter(function (m, p) {
            return !(p in l.failures);
          })),
        "values" in u &&
          c(u.values) &&
          (u.values = u.values.filter(function (m, p) {
            return !(p in l.failures);
          })),
        u
      );
    }
    function $b(o, s) {
      return s.lower === void 0
        ? !0
        : s.lowerOpen
          ? bt(o, s.lower) > 0
          : bt(o, s.lower) >= 0;
    }
    function Kb(o, s) {
      return s.upper === void 0
        ? !0
        : s.upperOpen
          ? bt(o, s.upper) < 0
          : bt(o, s.upper) <= 0;
    }
    function xc(o, s) {
      return $b(o, s) && Kb(o, s);
    }
    function em(o, s, l, d, u, m) {
      if (!l || l.length === 0) return o;
      var p = s.query.index,
        g = p.multiEntry,
        v = s.query.range,
        _ = d.schema.primaryKey,
        E = _.extractKey,
        w = p.extractKey,
        S = (p.lowLevelIndex || p).extractKey,
        N = l.reduce(function (x, I) {
          var k = x,
            M = [];
          if (I.type === "add" || I.type === "put")
            for (var R = new ue(), F = I.values.length - 1; F >= 0; --F) {
              var L = I.values[F],
                O = E(L);
              if (!R.hasKey(O)) {
                var j = w(L);
                (g && c(j)
                  ? j.some(function (X) {
                      return xc(X, v);
                    })
                  : xc(j, v)) && (R.addKey(O), M.push(L));
              }
            }
          switch (I.type) {
            case "add":
              k = x.concat(
                s.values
                  ? M
                  : M.map(function (X) {
                      return E(X);
                    }),
              );
              break;
            case "put":
              var K = new ue().addKeys(
                I.values.map(function (X) {
                  return E(X);
                }),
              );
              k = x
                .filter(function (X) {
                  return !K.hasKey(s.values ? E(X) : X);
                })
                .concat(
                  s.values
                    ? M
                    : M.map(function (X) {
                        return E(X);
                      }),
                );
              break;
            case "delete":
              var q = new ue().addKeys(I.keys);
              k = x.filter(function (X) {
                return !q.hasKey(s.values ? E(X) : X);
              });
              break;
            case "deleteRange":
              var ot = I.range;
              k = x.filter(function (X) {
                return !xc(E(X), ot);
              });
              break;
          }
          return k;
        }, o);
      return N === o
        ? o
        : (N.sort(function (x, I) {
            return bt(S(x), S(I)) || bt(E(x), E(I));
          }),
          s.limit &&
            s.limit < 1 / 0 &&
            (N.length > s.limit
              ? (N.length = s.limit)
              : o.length === s.limit && N.length < s.limit && (u.dirty = !0)),
          m ? Object.freeze(N) : N);
    }
    function im(o, s) {
      return (
        bt(o.lower, s.lower) === 0 &&
        bt(o.upper, s.upper) === 0 &&
        !!o.lowerOpen == !!s.lowerOpen &&
        !!o.upperOpen == !!s.upperOpen
      );
    }
    function Wb(o, s, l, d) {
      if (o === void 0) return s !== void 0 ? -1 : 0;
      if (s === void 0) return 1;
      var u = bt(o, s);
      if (u === 0) {
        if (l && d) return 0;
        if (l) return 1;
        if (d) return -1;
      }
      return u;
    }
    function Gb(o, s, l, d) {
      if (o === void 0) return s !== void 0 ? 1 : 0;
      if (s === void 0) return -1;
      var u = bt(o, s);
      if (u === 0) {
        if (l && d) return 0;
        if (l) return -1;
        if (d) return 1;
      }
      return u;
    }
    function qb(o, s) {
      return (
        Wb(o.lower, s.lower, o.lowerOpen, s.lowerOpen) <= 0 &&
        Gb(o.upper, s.upper, o.upperOpen, s.upperOpen) >= 0
      );
    }
    function Yb(o, s, l, d) {
      var u = In["idb://".concat(o, "/").concat(s)];
      if (!u) return [];
      var m = u.queries[l];
      if (!m) return [null, !1, u, null];
      var p = d.query ? d.query.index.name : null,
        g = m[p || ""];
      if (!g) return [null, !1, u, null];
      switch (l) {
        case "query":
          var v = g.find(function (w) {
            return (
              w.req.limit === d.limit &&
              w.req.values === d.values &&
              im(w.req.query.range, d.query.range)
            );
          });
          if (v) return [v, !0, u, g];
          var _ = g.find(function (w) {
            var S = "limit" in w.req ? w.req.limit : 1 / 0;
            return (
              S >= d.limit &&
              (d.values ? w.req.values : !0) &&
              qb(w.req.query.range, d.query.range)
            );
          });
          return [_, !1, u, g];
        case "count":
          var E = g.find(function (w) {
            return im(w.req.query.range, d.query.range);
          });
          return [E, !!E, u, g];
      }
    }
    function Qb(o, s, l, d) {
      o.subscribers.add(l),
        d.addEventListener("abort", function () {
          o.subscribers.delete(l), o.subscribers.size === 0 && Zb(o, s);
        });
    }
    function Zb(o, s) {
      setTimeout(function () {
        o.subscribers.size === 0 && bn(s, o);
      }, 3e3);
    }
    var Xb = {
      stack: "dbcore",
      level: 0,
      name: "Cache",
      create: function (o) {
        var s = o.schema.name,
          l = t(t({}, o), {
            transaction: function (d, u, m) {
              var p = o.transaction(d, u, m);
              if (u === "readwrite") {
                var g = new AbortController(),
                  v = g.signal,
                  _ = function (E) {
                    return function () {
                      if ((g.abort(), u === "readwrite")) {
                        for (
                          var w = new Set(), S = 0, N = d;
                          S < N.length;
                          S++
                        ) {
                          var x = N[S],
                            I = In["idb://".concat(s, "/").concat(x)];
                          if (I) {
                            var k = o.table(x),
                              M = I.optimisticOps.filter(function (At) {
                                return At.trans === p;
                              });
                            if (p._explicit && E && p.mutatedParts)
                              for (
                                var R = 0, F = Object.values(I.queries.query);
                                R < F.length;
                                R++
                              )
                                for (
                                  var L = F[R], O = 0, j = L.slice();
                                  O < j.length;
                                  O++
                                ) {
                                  var K = j[O];
                                  pc(K.obsSet, p.mutatedParts) &&
                                    (bn(L, K),
                                    K.subscribers.forEach(function (At) {
                                      return w.add(At);
                                    }));
                                }
                            else if (M.length > 0) {
                              I.optimisticOps = I.optimisticOps.filter(
                                function (At) {
                                  return At.trans !== p;
                                },
                              );
                              for (
                                var q = 0, ot = Object.values(I.queries.query);
                                q < ot.length;
                                q++
                              )
                                for (
                                  var L = ot[q], X = 0, nt = L.slice();
                                  X < nt.length;
                                  X++
                                ) {
                                  var K = nt[X];
                                  if (K.res != null && p.mutatedParts)
                                    if (E && !K.dirty) {
                                      var vt = Object.isFrozen(K.res),
                                        lt = em(K.res, K.req, M, k, K, vt);
                                      K.dirty
                                        ? (bn(L, K),
                                          K.subscribers.forEach(function (re) {
                                            return w.add(re);
                                          }))
                                        : lt !== K.res &&
                                          ((K.res = lt),
                                          (K.promise = $.resolve({
                                            result: lt,
                                          })));
                                    } else
                                      K.dirty && bn(L, K),
                                        K.subscribers.forEach(function (re) {
                                          return w.add(re);
                                        });
                                }
                            }
                          }
                        }
                        w.forEach(function (At) {
                          return At();
                        });
                      }
                    };
                  };
                p.addEventListener("abort", _(!1), { signal: v }),
                  p.addEventListener("error", _(!1), { signal: v }),
                  p.addEventListener("complete", _(!0), { signal: v });
              }
              return p;
            },
            table: function (d) {
              var u = o.table(d),
                m = u.schema.primaryKey,
                p = t(t({}, u), {
                  mutate: function (g) {
                    var v = J.trans;
                    if (
                      m.outbound ||
                      v.db._options.cache === "disabled" ||
                      v.explicit
                    )
                      return u.mutate(g);
                    var _ = In["idb://".concat(s, "/").concat(d)];
                    if (!_) return u.mutate(g);
                    var E = u.mutate(g);
                    return (
                      (g.type === "add" || g.type === "put") &&
                      (g.values.length >= 50 ||
                        wc(m, g).some(function (w) {
                          return w == null;
                        }))
                        ? E.then(function (w) {
                            var S = t(t({}, g), {
                                values: g.values.map(function (x, I) {
                                  var k,
                                    M =
                                      !(
                                        (k = m.keyPath) === null || k === void 0
                                      ) && k.includes(".")
                                        ? vn(x)
                                        : t({}, x);
                                  return Ce(M, m.keyPath, w.results[I]), M;
                                }),
                              }),
                              N = tm(_, S, w);
                            _.optimisticOps.push(N),
                              queueMicrotask(function () {
                                return g.mutatedParts && js(g.mutatedParts);
                              });
                          })
                        : (_.optimisticOps.push(g),
                          g.mutatedParts && js(g.mutatedParts),
                          E.then(function (w) {
                            if (w.numFailures > 0) {
                              bn(_.optimisticOps, g);
                              var S = tm(_, g, w);
                              S && _.optimisticOps.push(S),
                                g.mutatedParts && js(g.mutatedParts);
                            }
                          }),
                          E.catch(function () {
                            bn(_.optimisticOps, g),
                              g.mutatedParts && js(g.mutatedParts);
                          })),
                      E
                    );
                  },
                  query: function (g) {
                    var v;
                    if (!Xh(J, u) || !Jh("query", g)) return u.query(g);
                    var _ =
                        ((v = J.trans) === null || v === void 0
                          ? void 0
                          : v.db._options.cache) === "immutable",
                      E = J,
                      w = E.requery,
                      S = E.signal,
                      N = Yb(s, d, "query", g),
                      x = N[0],
                      I = N[1],
                      k = N[2],
                      M = N[3];
                    if (x && I) x.obsSet = g.obsSet;
                    else {
                      var R = u
                        .query(g)
                        .then(function (F) {
                          var L = F.result;
                          if ((x && (x.res = L), _)) {
                            for (var O = 0, j = L.length; O < j; ++O)
                              Object.freeze(L[O]);
                            Object.freeze(L);
                          } else F.result = vn(L);
                          return F;
                        })
                        .catch(function (F) {
                          return M && x && bn(M, x), Promise.reject(F);
                        });
                      (x = {
                        obsSet: g.obsSet,
                        promise: R,
                        subscribers: new Set(),
                        type: "query",
                        req: g,
                        dirty: !1,
                      }),
                        M
                          ? M.push(x)
                          : ((M = [x]),
                            k ||
                              (k = In["idb://".concat(s, "/").concat(d)] =
                                {
                                  queries: { query: {}, count: {} },
                                  objs: new Map(),
                                  optimisticOps: [],
                                  unsignaledParts: {},
                                }),
                            (k.queries.query[g.query.index.name || ""] = M));
                    }
                    return (
                      Qb(x, M, w, S),
                      x.promise.then(function (F) {
                        return {
                          result: em(F.result, g, k?.optimisticOps, u, x, _),
                        };
                      })
                    );
                  },
                });
              return p;
            },
          });
        return l;
      },
    };
    function Bs(o, s) {
      return new Proxy(o, {
        get: function (l, d, u) {
          return d === "db" ? s : Reflect.get(l, d, u);
        },
      });
    }
    var pi = (function () {
        function o(s, l) {
          var d = this;
          (this._middlewares = {}), (this.verno = 0);
          var u = o.dependencies;
          (this._options = l =
            t(
              {
                addons: o.addons,
                autoOpen: !0,
                indexedDB: u.indexedDB,
                IDBKeyRange: u.IDBKeyRange,
                cache: "cloned",
              },
              l,
            )),
            (this._deps = {
              indexedDB: l.indexedDB,
              IDBKeyRange: l.IDBKeyRange,
            });
          var m = l.addons;
          (this._dbSchema = {}),
            (this._versions = []),
            (this._storeNames = []),
            (this._allTables = {}),
            (this.idbdb = null),
            (this._novip = this);
          var p = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: Dt,
            dbReadyPromise: null,
            cancelOpen: Dt,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: l.autoOpen,
          };
          (p.dbReadyPromise = new $(function (v) {
            p.dbReadyResolve = v;
          })),
            (p.openCanceller = new $(function (v, _) {
              p.cancelOpen = _;
            })),
            (this._state = p),
            (this.name = s),
            (this.on = Zr(
              this,
              "populate",
              "blocked",
              "versionchange",
              "close",
              { ready: [Bl, Dt] },
            )),
            (this.on.ready.subscribe = It(
              this.on.ready.subscribe,
              function (v) {
                return function (_, E) {
                  o.vip(function () {
                    var w = d._state;
                    if (w.openComplete)
                      w.dbOpenError || $.resolve().then(_), E && v(_);
                    else if (w.onReadyBeingFired)
                      w.onReadyBeingFired.push(_), E && v(_);
                    else {
                      v(_);
                      var S = d;
                      E ||
                        v(function N() {
                          S.on.ready.unsubscribe(_), S.on.ready.unsubscribe(N);
                        });
                    }
                  });
                };
              },
            )),
            (this.Collection = sb(this)),
            (this.Table = ib(this)),
            (this.Transaction = fb(this)),
            (this.Version = Mb(this)),
            (this.WhereClause = hb(this)),
            this.on("versionchange", function (v) {
              v.newVersion > 0
                ? console.warn(
                    "Another connection wants to upgrade database '".concat(
                      d.name,
                      "'. Closing db now to resume the upgrade.",
                    ),
                  )
                : console.warn(
                    "Another connection wants to delete database '".concat(
                      d.name,
                      "'. Closing db now to resume the delete request.",
                    ),
                  ),
                d.close({ disableAutoOpen: !1 });
            }),
            this.on("blocked", function (v) {
              !v.newVersion || v.newVersion < v.oldVersion
                ? console.warn(
                    "Dexie.delete('".concat(d.name, "') was blocked"),
                  )
                : console.warn(
                    "Upgrade '"
                      .concat(
                        d.name,
                        "' blocked by other connection holding version ",
                      )
                      .concat(v.oldVersion / 10),
                  );
            }),
            (this._maxKey = io(l.IDBKeyRange)),
            (this._createTransaction = function (v, _, E, w) {
              return new d.Transaction(
                v,
                _,
                E,
                d._options.chromeTransactionDurability,
                w,
              );
            }),
            (this._fireOnBlocked = function (v) {
              d.on("blocked").fire(v),
                Xn.filter(function (_) {
                  return _.name === d.name && _ !== d && !_._state.vcFired;
                }).map(function (_) {
                  return _.on("versionchange").fire(v);
                });
            }),
            this.use(zb),
            this.use(Xb),
            this.use(Ub),
            this.use(jb),
            this.use(Vb);
          var g = new Proxy(this, {
            get: function (v, _, E) {
              if (_ === "_vip") return !0;
              if (_ === "table")
                return function (S) {
                  return Bs(d.table(S), g);
                };
              var w = Reflect.get(v, _, E);
              return w instanceof Nh
                ? Bs(w, g)
                : _ === "tables"
                  ? w.map(function (S) {
                      return Bs(S, g);
                    })
                  : _ === "_createTransaction"
                    ? function () {
                        var S = w.apply(this, arguments);
                        return Bs(S, g);
                      }
                    : w;
            },
          });
          (this.vip = g),
            m.forEach(function (v) {
              return v(d);
            });
        }
        return (
          (o.prototype.version = function (s) {
            if (isNaN(s) || s < 0.1)
              throw new tt.Type("Given version is not a positive number");
            if (
              ((s = Math.round(s * 10) / 10),
              this.idbdb || this._state.isBeingOpened)
            )
              throw new tt.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, s);
            var l = this._versions,
              d = l.filter(function (u) {
                return u._cfg.version === s;
              })[0];
            return (
              d ||
              ((d = new this.Version(s)),
              l.push(d),
              l.sort(wb),
              d.stores({}),
              (this._state.autoSchema = !1),
              d)
            );
          }),
          (o.prototype._whenReady = function (s) {
            var l = this;
            return this.idbdb &&
              (this._state.openComplete || J.letThrough || this._vip)
              ? s()
              : new $(function (d, u) {
                  if (l._state.openComplete)
                    return u(new tt.DatabaseClosed(l._state.dbOpenError));
                  if (!l._state.isBeingOpened) {
                    if (!l._state.autoOpen) {
                      u(new tt.DatabaseClosed());
                      return;
                    }
                    l.open().catch(Dt);
                  }
                  l._state.dbReadyPromise.then(d, u);
                }).then(s);
          }),
          (o.prototype.use = function (s) {
            var l = s.stack,
              d = s.create,
              u = s.level,
              m = s.name;
            m && this.unuse({ stack: l, name: m });
            var p = this._middlewares[l] || (this._middlewares[l] = []);
            return (
              p.push({ stack: l, create: d, level: u ?? 10, name: m }),
              p.sort(function (g, v) {
                return g.level - v.level;
              }),
              this
            );
          }),
          (o.prototype.unuse = function (s) {
            var l = s.stack,
              d = s.name,
              u = s.create;
            return (
              l &&
                this._middlewares[l] &&
                (this._middlewares[l] = this._middlewares[l].filter(
                  function (m) {
                    return u ? m.create !== u : d ? m.name !== d : !1;
                  },
                )),
              this
            );
          }),
          (o.prototype.open = function () {
            var s = this;
            return xn(Fi, function () {
              return Pb(s);
            });
          }),
          (o.prototype._close = function () {
            var s = this._state,
              l = Xn.indexOf(this);
            if ((l >= 0 && Xn.splice(l, 1), this.idbdb)) {
              try {
                this.idbdb.close();
              } catch {}
              this.idbdb = null;
            }
            s.isBeingOpened ||
              ((s.dbReadyPromise = new $(function (d) {
                s.dbReadyResolve = d;
              })),
              (s.openCanceller = new $(function (d, u) {
                s.cancelOpen = u;
              })));
          }),
          (o.prototype.close = function (s) {
            var l = s === void 0 ? { disableAutoOpen: !0 } : s,
              d = l.disableAutoOpen,
              u = this._state;
            d
              ? (u.isBeingOpened && u.cancelOpen(new tt.DatabaseClosed()),
                this._close(),
                (u.autoOpen = !1),
                (u.dbOpenError = new tt.DatabaseClosed()))
              : (this._close(),
                (u.autoOpen = this._options.autoOpen || u.isBeingOpened),
                (u.openComplete = !1),
                (u.dbOpenError = null));
          }),
          (o.prototype.delete = function (s) {
            var l = this;
            s === void 0 && (s = { disableAutoOpen: !0 });
            var d = arguments.length > 0 && typeof arguments[0] != "object",
              u = this._state;
            return new $(function (m, p) {
              var g = function () {
                l.close(s);
                var v = l._deps.indexedDB.deleteDatabase(l.name);
                (v.onsuccess = Pt(function () {
                  Ob(l._deps, l.name), m();
                })),
                  (v.onerror = ri(p)),
                  (v.onblocked = l._fireOnBlocked);
              };
              if (d)
                throw new tt.InvalidArgument(
                  "Invalid closeOptions argument to db.delete()",
                );
              u.isBeingOpened ? u.dbReadyPromise.then(g) : g();
            });
          }),
          (o.prototype.backendDB = function () {
            return this.idbdb;
          }),
          (o.prototype.isOpen = function () {
            return this.idbdb !== null;
          }),
          (o.prototype.hasBeenClosed = function () {
            var s = this._state.dbOpenError;
            return s && s.name === "DatabaseClosed";
          }),
          (o.prototype.hasFailed = function () {
            return this._state.dbOpenError !== null;
          }),
          (o.prototype.dynamicallyOpened = function () {
            return this._state.autoSchema;
          }),
          Object.defineProperty(o.prototype, "tables", {
            get: function () {
              var s = this;
              return a(this._allTables).map(function (l) {
                return s._allTables[l];
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          (o.prototype.transaction = function () {
            var s = Lb.apply(this, arguments);
            return this._transaction.apply(this, s);
          }),
          (o.prototype._transaction = function (s, l, d) {
            var u = this,
              m = J.trans;
            (!m || m.db !== this || s.indexOf("!") !== -1) && (m = null);
            var p = s.indexOf("?") !== -1;
            s = s.replace("!", "").replace("?", "");
            var g, v;
            try {
              if (
                ((v = l.map(function (E) {
                  var w = E instanceof u.Table ? E.name : E;
                  if (typeof w != "string")
                    throw new TypeError(
                      "Invalid table argument to Dexie.transaction(). Only Table or String are allowed",
                    );
                  return w;
                })),
                s == "r" || s === Xl)
              )
                g = Xl;
              else if (s == "rw" || s == Jl) g = Jl;
              else
                throw new tt.InvalidArgument("Invalid transaction mode: " + s);
              if (m) {
                if (m.mode === Xl && g === Jl)
                  if (p) m = null;
                  else
                    throw new tt.SubTransaction(
                      "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY",
                    );
                m &&
                  v.forEach(function (E) {
                    if (m && m.storeNames.indexOf(E) === -1)
                      if (p) m = null;
                      else
                        throw new tt.SubTransaction(
                          "Table " + E + " not included in parent transaction.",
                        );
                  }),
                  p && m && !m.active && (m = null);
              }
            } catch (E) {
              return m
                ? m._promise(null, function (w, S) {
                    S(E);
                  })
                : Wt(E);
            }
            var _ = Qh.bind(null, this, g, v, m, d);
            return m
              ? m._promise(g, _, "lock")
              : J.trans
                ? xn(J.transless, function () {
                    return u._whenReady(_);
                  })
                : this._whenReady(_);
          }),
          (o.prototype.table = function (s) {
            if (!y(this._allTables, s))
              throw new tt.InvalidTable("Table ".concat(s, " does not exist"));
            return this._allTables[s];
          }),
          o
        );
      })(),
      Jb =
        typeof Symbol < "u" && "observable" in Symbol
          ? Symbol.observable
          : "@@observable",
      t_ = (function () {
        function o(s) {
          this._subscribe = s;
        }
        return (
          (o.prototype.subscribe = function (s, l, d) {
            return this._subscribe(
              !s || typeof s == "function"
                ? { next: s, error: l, complete: d }
                : s,
            );
          }),
          (o.prototype[Jb] = function () {
            return this;
          }),
          o
        );
      })(),
      zs;
    try {
      zs = {
        indexedDB:
          r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
        IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange,
      };
    } catch {
      zs = { indexedDB: null, IDBKeyRange: null };
    }
    function nm(o) {
      var s = !1,
        l,
        d = new t_(function (u) {
          var m = Nl(o);
          function p(M) {
            var R = Yn();
            try {
              m && Zn();
              var F = Pi(o, M);
              return m && (F = F.finally(Li)), F;
            } finally {
              R && Qn();
            }
          }
          var g = !1,
            v,
            _ = {},
            E = {},
            w = {
              get closed() {
                return g;
              },
              unsubscribe: function () {
                g ||
                  ((g = !0),
                  v && v.abort(),
                  S && Vi.storagemutated.unsubscribe(I));
              },
            };
          u.start && u.start(w);
          var S = !1,
            N = function () {
              return Yl(k);
            };
          function x() {
            return pc(E, _);
          }
          var I = function (M) {
              Ns(_, M), x() && N();
            },
            k = function () {
              if (!(g || !zs.indexedDB)) {
                _ = {};
                var M = {};
                v && v.abort(), (v = new AbortController());
                var R = {
                    subscr: M,
                    signal: v.signal,
                    requery: N,
                    querier: o,
                    trans: null,
                  },
                  F = p(R);
                Promise.resolve(F).then(
                  function (L) {
                    (s = !0),
                      (l = L),
                      !(g || R.signal.aborted) &&
                        ((_ = {}),
                        (E = M),
                        !Mv(E) && !S && (Vi(eo, I), (S = !0)),
                        Yl(function () {
                          return !g && u.next && u.next(L);
                        }));
                  },
                  function (L) {
                    (s = !1),
                      ["DatabaseClosedError", "AbortError"].includes(L?.name) ||
                        g ||
                        Yl(function () {
                          g || (u.error && u.error(L));
                        });
                  },
                );
              }
            };
          return setTimeout(N, 0), w;
        });
      return (
        (d.hasValue = function () {
          return s;
        }),
        (d.getValue = function () {
          return l;
        }),
        d
      );
    }
    var Dn = pi;
    D(
      Dn,
      t(t({}, vs), {
        delete: function (o) {
          var s = new Dn(o, { addons: [] });
          return s.delete();
        },
        exists: function (o) {
          return new Dn(o, { addons: [] })
            .open()
            .then(function (s) {
              return s.close(), !0;
            })
            .catch("NoSuchDatabaseError", function () {
              return !1;
            });
        },
        getDatabaseNames: function (o) {
          try {
            return Rb(Dn.dependencies).then(o);
          } catch {
            return Wt(new tt.MissingAPI());
          }
        },
        defineClass: function () {
          function o(s) {
            h(this, s);
          }
          return o;
        },
        ignoreTransaction: function (o) {
          return J.trans ? xn(J.transless, o) : o();
        },
        vip: hc,
        async: function (o) {
          return function () {
            try {
              var s = _c(o.apply(this, arguments));
              return !s || typeof s.then != "function" ? $.resolve(s) : s;
            } catch (l) {
              return Wt(l);
            }
          };
        },
        spawn: function (o, s, l) {
          try {
            var d = _c(o.apply(l, s || []));
            return !d || typeof d.then != "function" ? $.resolve(d) : d;
          } catch (u) {
            return Wt(u);
          }
        },
        currentTransaction: {
          get: function () {
            return J.trans || null;
          },
        },
        waitFor: function (o, s) {
          var l = $.resolve(
            typeof o == "function" ? Dn.ignoreTransaction(o) : o,
          ).timeout(s || 6e4);
          return J.trans ? J.trans.waitFor(l) : l;
        },
        Promise: $,
        debug: {
          get: function () {
            return ni;
          },
          set: function (o) {
            xh(o);
          },
        },
        derive: G,
        extend: h,
        props: D,
        override: It,
        Events: Zr,
        on: Vi,
        liveQuery: nm,
        extendObservabilitySet: Ns,
        getByKeyPath: Me,
        setByKeyPath: Ce,
        delByKeyPath: Av,
        shallowClone: ph,
        deepClone: vn,
        getObjectDiff: yc,
        cmp: bt,
        asap: ii,
        minKey: Zl,
        addons: [],
        connections: Xn,
        errnames: Vl,
        dependencies: zs,
        cache: In,
        semVer: Rh,
        version: Rh.split(".")
          .map(function (o) {
            return parseInt(o);
          })
          .reduce(function (o, s, l) {
            return o + s / Math.pow(10, l * 2);
          }),
      }),
    ),
      (Dn.maxKey = io(Dn.dependencies.IDBKeyRange)),
      typeof dispatchEvent < "u" &&
        typeof addEventListener < "u" &&
        (Vi(eo, function (o) {
          if (!Bi) {
            var s;
            (s = new CustomEvent(nc, { detail: o })),
              (Bi = !0),
              dispatchEvent(s),
              (Bi = !1);
          }
        }),
        addEventListener(nc, function (o) {
          var s = o.detail;
          Bi || Cc(s);
        }));
    function Cc(o) {
      var s = Bi;
      try {
        (Bi = !0), Vi.storagemutated.fire(o), bc(o, !0);
      } finally {
        Bi = s;
      }
    }
    var Bi = !1,
      zi,
      Ec = function () {};
    typeof BroadcastChannel < "u" &&
      ((Ec = function () {
        (zi = new BroadcastChannel(nc)),
          (zi.onmessage = function (o) {
            return o.data && Cc(o.data);
          });
      }),
      Ec(),
      typeof zi.unref == "function" && zi.unref(),
      Vi(eo, function (o) {
        Bi || zi.postMessage(o);
      })),
      typeof addEventListener < "u" &&
        (addEventListener("pagehide", function (o) {
          if (!pi.disableBfCache && o.persisted) {
            ni && console.debug("Dexie: handling persisted pagehide"),
              zi?.close();
            for (var s = 0, l = Xn; s < l.length; s++) {
              var d = l[s];
              d.close({ disableAutoOpen: !1 });
            }
          }
        }),
        addEventListener("pageshow", function (o) {
          !pi.disableBfCache &&
            o.persisted &&
            (ni && console.debug("Dexie: handling persisted pageshow"),
            Ec(),
            Cc({ all: new ue(-1 / 0, [[]]) }));
        }));
    function e_(o) {
      return new Jr({ add: o });
    }
    function i_(o) {
      return new Jr({ remove: o });
    }
    function n_(o, s) {
      return new Jr({ replacePrefix: [o, s] });
    }
    ($.rejectionMapper = Lv), xh(ni);
    var r_ = Object.freeze({
      __proto__: null,
      Dexie: pi,
      liveQuery: nm,
      Entity: Fh,
      cmp: bt,
      PropModSymbol: rb,
      PropModification: Jr,
      replacePrefix: n_,
      add: e_,
      remove: i_,
      default: pi,
      RangeSet: ue,
      mergeRanges: oo,
      rangesOverlap: Wh,
    });
    return t(pi, r_, { default: pi }), pi;
  });
});
var _o = class {},
  sa = class {},
  xi = class n {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`,
                    )
                    .forEach((t) => {
                      let i = t.indexOf(":");
                      if (i > 0) {
                        let r = t.slice(0, i),
                          a = r.toLowerCase(),
                          c = t.slice(i + 1).trim();
                        this.maybeSetNormalizedName(r, a),
                          this.headers.has(a)
                            ? this.headers.get(a).push(c)
                            : this.headers.set(a, [c]);
                      }
                    });
              })
            : typeof Headers < "u" && e instanceof Headers
              ? ((this.headers = new Map()),
                e.forEach((t, i) => {
                  this.setHeaderEntries(i, t);
                }))
              : (this.lazyInit = () => {
                  (this.headers = new Map()),
                    Object.entries(e).forEach(([t, i]) => {
                      this.setHeaderEntries(t, i);
                    });
                })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let t = this.headers.get(e.toLowerCase());
      return t && t.length > 0 ? t[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, t) {
      return this.clone({ name: e, value: t, op: "a" });
    }
    set(e, t) {
      return this.clone({ name: e, value: t, op: "s" });
    }
    delete(e, t) {
      return this.clone({ name: e, value: t, op: "d" });
    }
    maybeSetNormalizedName(e, t) {
      this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof n
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((t) => {
          this.headers.set(t, e.headers.get(t)),
            this.normalizedNames.set(t, e.normalizedNames.get(t));
        });
    }
    clone(e) {
      let t = new n();
      return (
        (t.lazyInit =
          this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
        (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        t
      );
    }
    applyUpdate(e) {
      let t = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let i = e.value;
          if ((typeof i == "string" && (i = [i]), i.length === 0)) return;
          this.maybeSetNormalizedName(e.name, t);
          let r = (e.op === "a" ? this.headers.get(t) : void 0) || [];
          r.push(...i), this.headers.set(t, r);
          break;
        case "d":
          let a = e.value;
          if (!a) this.headers.delete(t), this.normalizedNames.delete(t);
          else {
            let c = this.headers.get(t);
            if (!c) return;
            (c = c.filter((h) => a.indexOf(h) === -1)),
              c.length === 0
                ? (this.headers.delete(t), this.normalizedNames.delete(t))
                : this.headers.set(t, c);
          }
          break;
      }
    }
    setHeaderEntries(e, t) {
      let i = (Array.isArray(t) ? t : [t]).map((a) => a.toString()),
        r = e.toLowerCase();
      this.headers.set(r, i), this.maybeSetNormalizedName(e, r);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((t) =>
          e(this.normalizedNames.get(t), this.headers.get(t)),
        );
    }
  };
var Hc = class {
  encodeKey(e) {
    return qm(e);
  }
  encodeValue(e) {
    return qm(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function c_(n, e) {
  let t = new Map();
  return (
    n.length > 0 &&
      n
        .replace(/^\?/, "")
        .split("&")
        .forEach((r) => {
          let a = r.indexOf("="),
            [c, h] =
              a == -1
                ? [e.decodeKey(r), ""]
                : [e.decodeKey(r.slice(0, a)), e.decodeValue(r.slice(a + 1))],
            f = t.get(c) || [];
          f.push(h), t.set(c, f);
        }),
    t
  );
}
var d_ = /%(\d[a-f0-9])/gi,
  u_ = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function qm(n) {
  return encodeURIComponent(n).replace(d_, (e, t) => u_[t] ?? e);
}
function oa(n) {
  return `${n}`;
}
var Ji = class n {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new Hc()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = c_(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((t) => {
            let i = e.fromObject[t],
              r = Array.isArray(i) ? i.map(oa) : [oa(i)];
            this.map.set(t, r);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let t = this.map.get(e);
    return t ? t[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, t) {
    return this.clone({ param: e, value: t, op: "a" });
  }
  appendAll(e) {
    let t = [];
    return (
      Object.keys(e).forEach((i) => {
        let r = e[i];
        Array.isArray(r)
          ? r.forEach((a) => {
              t.push({ param: i, value: a, op: "a" });
            })
          : t.push({ param: i, value: r, op: "a" });
      }),
      this.clone(t)
    );
  }
  set(e, t) {
    return this.clone({ param: e, value: t, op: "s" });
  }
  delete(e, t) {
    return this.clone({ param: e, value: t, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let t = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((i) => t + "=" + this.encoder.encodeValue(i))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let t = new n({ encoder: this.encoder });
    return (
      (t.cloneFrom = this.cloneFrom || this),
      (t.updates = (this.updates || []).concat(e)),
      t
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let t = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              t.push(oa(e.value)), this.map.set(e.param, t);
              break;
            case "d":
              if (e.value !== void 0) {
                let i = this.map.get(e.param) || [],
                  r = i.indexOf(oa(e.value));
                r !== -1 && i.splice(r, 1),
                  i.length > 0
                    ? this.map.set(e.param, i)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var $c = class {
  constructor() {
    this.map = new Map();
  }
  set(e, t) {
    return this.map.set(e, t), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function h_(n) {
  switch (n) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Ym(n) {
  return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function Qm(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function Zm(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function m_(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var bo = class n {
    constructor(e, t, i, r) {
      (this.url = t),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = e.toUpperCase());
      let a;
      if (
        (h_(this.method) || r
          ? ((this.body = i !== void 0 ? i : null), (a = r))
          : (a = i),
        a &&
          ((this.reportProgress = !!a.reportProgress),
          (this.withCredentials = !!a.withCredentials),
          a.responseType && (this.responseType = a.responseType),
          a.headers && (this.headers = a.headers),
          a.context && (this.context = a.context),
          a.params && (this.params = a.params),
          (this.transferCache = a.transferCache)),
        (this.headers ??= new xi()),
        (this.context ??= new $c()),
        !this.params)
      )
        (this.params = new Ji()), (this.urlWithParams = t);
      else {
        let c = this.params.toString();
        if (c.length === 0) this.urlWithParams = t;
        else {
          let h = t.indexOf("?"),
            f = h === -1 ? "?" : h < t.length - 1 ? "&" : "";
          this.urlWithParams = t + f + c;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            Ym(this.body) ||
            Qm(this.body) ||
            Zm(this.body) ||
            m_(this.body)
          ? this.body
          : this.body instanceof Ji
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Zm(this.body)
        ? null
        : Qm(this.body)
          ? this.body.type || null
          : Ym(this.body)
            ? null
            : typeof this.body == "string"
              ? "text/plain"
              : this.body instanceof Ji
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? "application/json"
                  : null;
    }
    clone(e = {}) {
      let t = e.method || this.method,
        i = e.url || this.url,
        r = e.responseType || this.responseType,
        a = e.transferCache ?? this.transferCache,
        c = e.body !== void 0 ? e.body : this.body,
        h = e.withCredentials ?? this.withCredentials,
        f = e.reportProgress ?? this.reportProgress,
        b = e.headers || this.headers,
        y = e.params || this.params,
        D = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (b = Object.keys(e.setHeaders).reduce(
            (U, z) => U.set(z, e.setHeaders[z]),
            b,
          )),
        e.setParams &&
          (y = Object.keys(e.setParams).reduce(
            (U, z) => U.set(z, e.setParams[z]),
            y,
          )),
        new n(t, i, c, {
          params: y,
          headers: b,
          context: D,
          reportProgress: f,
          responseType: r,
          withCredentials: h,
          transferCache: a,
        })
      );
    }
  },
  tn = (function (n) {
    return (
      (n[(n.Sent = 0)] = "Sent"),
      (n[(n.UploadProgress = 1)] = "UploadProgress"),
      (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
      (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
      (n[(n.Response = 4)] = "Response"),
      (n[(n.User = 5)] = "User"),
      n
    );
  })(tn || {}),
  yo = class {
    constructor(e, t = 200, i = "OK") {
      (this.headers = e.headers || new xi()),
        (this.status = e.status !== void 0 ? e.status : t),
        (this.statusText = e.statusText || i),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  aa = class n extends yo {
    constructor(e = {}) {
      super(e), (this.type = tn.ResponseHeader);
    }
    clone(e = {}) {
      return new n({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  wo = class n extends yo {
    constructor(e = {}) {
      super(e),
        (this.type = tn.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new n({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Xi = class extends yo {
    constructor(e) {
      super(e, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${e.url || "(unknown url)"}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  ef = 200,
  f_ = 204;
function Uc(n, e) {
  return {
    body: e,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var xo = (() => {
    class n {
      constructor(t) {
        this.handler = t;
      }
      request(t, i, r = {}) {
        let a;
        if (t instanceof bo) a = t;
        else {
          let f;
          r.headers instanceof xi ? (f = r.headers) : (f = new xi(r.headers));
          let b;
          r.params &&
            (r.params instanceof Ji
              ? (b = r.params)
              : (b = new Ji({ fromObject: r.params }))),
            (a = new bo(t, i, r.body !== void 0 ? r.body : null, {
              headers: f,
              context: r.context,
              params: b,
              reportProgress: r.reportProgress,
              responseType: r.responseType || "json",
              withCredentials: r.withCredentials,
              transferCache: r.transferCache,
            }));
        }
        let c = W(a).pipe(gi((f) => this.handler.handle(f)));
        if (t instanceof bo || r.observe === "events") return c;
        let h = c.pipe(Ct((f) => f instanceof wo));
        switch (r.observe || "body") {
          case "body":
            switch (a.responseType) {
              case "arraybuffer":
                return h.pipe(
                  Q((f) => {
                    if (f.body !== null && !(f.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return f.body;
                  }),
                );
              case "blob":
                return h.pipe(
                  Q((f) => {
                    if (f.body !== null && !(f.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return f.body;
                  }),
                );
              case "text":
                return h.pipe(
                  Q((f) => {
                    if (f.body !== null && typeof f.body != "string")
                      throw new Error("Response is not a string.");
                    return f.body;
                  }),
                );
              case "json":
              default:
                return h.pipe(Q((f) => f.body));
            }
          case "response":
            return h;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${r.observe}}`,
            );
        }
      }
      delete(t, i = {}) {
        return this.request("DELETE", t, i);
      }
      get(t, i = {}) {
        return this.request("GET", t, i);
      }
      head(t, i = {}) {
        return this.request("HEAD", t, i);
      }
      jsonp(t, i) {
        return this.request("JSONP", t, {
          params: new Ji().append(i, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(t, i = {}) {
        return this.request("OPTIONS", t, i);
      }
      patch(t, i, r = {}) {
        return this.request("PATCH", t, Uc(r, i));
      }
      post(t, i, r = {}) {
        return this.request("POST", t, Uc(r, i));
      }
      put(t, i, r = {}) {
        return this.request("PUT", t, Uc(r, i));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(_o));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  p_ = /^\)\]\}',?\n/,
  g_ = "X-Request-URL";
function Xm(n) {
  if (n.url) return n.url;
  let e = g_.toLocaleLowerCase();
  return n.headers.get(e);
}
var v_ = (() => {
    class n {
      constructor() {
        (this.fetchImpl =
          B(Kc, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t))),
          (this.ngZone = B(st));
      }
      handle(t) {
        return new ai((i) => {
          let r = new AbortController();
          return (
            this.doRequest(t, r.signal, i).then(Wc, (a) =>
              i.error(new Xi({ error: a })),
            ),
            () => r.abort()
          );
        });
      }
      doRequest(t, i, r) {
        return $e(this, null, function* () {
          let a = this.createRequestInit(t),
            c;
          try {
            let z = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(t.urlWithParams, C({ signal: i }, a)),
            );
            b_(z), r.next({ type: tn.Sent }), (c = yield z);
          } catch (z) {
            r.error(
              new Xi({
                error: z,
                status: z.status ?? 0,
                statusText: z.statusText,
                url: t.urlWithParams,
                headers: z.headers,
              }),
            );
            return;
          }
          let h = new xi(c.headers),
            f = c.statusText,
            b = Xm(c) ?? t.urlWithParams,
            y = c.status,
            D = null;
          if (
            (t.reportProgress &&
              r.next(new aa({ headers: h, status: y, statusText: f, url: b })),
            c.body)
          ) {
            let z = c.headers.get("content-length"),
              G = [],
              H = c.body.getReader(),
              it = 0,
              Ft,
              Kt,
              It = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              $e(this, null, function* () {
                for (;;) {
                  let { done: ii, value: gn } = yield H.read();
                  if (ii) break;
                  if ((G.push(gn), (it += gn.length), t.reportProgress)) {
                    Kt =
                      t.responseType === "text"
                        ? (Kt ?? "") +
                          (Ft ??= new TextDecoder()).decode(gn, { stream: !0 })
                        : void 0;
                    let Me = () =>
                      r.next({
                        type: tn.DownloadProgress,
                        total: z ? +z : void 0,
                        loaded: it,
                        partialText: Kt,
                      });
                    It ? It.run(Me) : Me();
                  }
                }
              }),
            );
            let ze = this.concatChunks(G, it);
            try {
              let ii = c.headers.get("Content-Type") ?? "";
              D = this.parseBody(t, ze, ii);
            } catch (ii) {
              r.error(
                new Xi({
                  error: ii,
                  headers: new xi(c.headers),
                  status: c.status,
                  statusText: c.statusText,
                  url: Xm(c) ?? t.urlWithParams,
                }),
              );
              return;
            }
          }
          y === 0 && (y = D ? ef : 0),
            y >= 200 && y < 300
              ? (r.next(
                  new wo({
                    body: D,
                    headers: h,
                    status: y,
                    statusText: f,
                    url: b,
                  }),
                ),
                r.complete())
              : r.error(
                  new Xi({
                    error: D,
                    headers: h,
                    status: y,
                    statusText: f,
                    url: b,
                  }),
                );
        });
      }
      parseBody(t, i, r) {
        switch (t.responseType) {
          case "json":
            let a = new TextDecoder().decode(i).replace(p_, "");
            return a === "" ? null : JSON.parse(a);
          case "text":
            return new TextDecoder().decode(i);
          case "blob":
            return new Blob([i], { type: r });
          case "arraybuffer":
            return i.buffer;
        }
      }
      createRequestInit(t) {
        let i = {},
          r = t.withCredentials ? "include" : void 0;
        if (
          (t.headers.forEach((a, c) => (i[a] = c.join(","))),
          t.headers.has("Accept") ||
            (i.Accept = "application/json, text/plain, */*"),
          !t.headers.has("Content-Type"))
        ) {
          let a = t.detectContentTypeHeader();
          a !== null && (i["Content-Type"] = a);
        }
        return {
          body: t.serializeBody(),
          method: t.method,
          headers: i,
          credentials: r,
        };
      }
      concatChunks(t, i) {
        let r = new Uint8Array(i),
          a = 0;
        for (let c of t) r.set(c, a), (a += c.length);
        return r;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Kc = class {};
function Wc() {}
function b_(n) {
  n.then(Wc, Wc);
}
function __(n, e) {
  return e(n);
}
function y_(n, e, t) {
  return (i, r) => Ge(t, () => e(i, (a) => n(a, r)));
}
var nf = new Y(""),
  w_ = new Y(""),
  x_ = new Y("", { providedIn: "root", factory: () => !0 });
var Jm = (() => {
  class n extends _o {
    constructor(t, i) {
      super(),
        (this.backend = t),
        (this.injector = i),
        (this.chain = null),
        (this.pendingTasks = B(Ws)),
        (this.contributeToStability = B(x_));
    }
    handle(t) {
      if (this.chain === null) {
        let i = Array.from(
          new Set([...this.injector.get(nf), ...this.injector.get(w_, [])]),
        );
        this.chain = i.reduceRight((r, a) => y_(r, a, this.injector), __);
      }
      if (this.contributeToStability) {
        let i = this.pendingTasks.add();
        return this.chain(t, (r) => this.backend.handle(r)).pipe(
          Ki(() => this.pendingTasks.remove(i)),
        );
      } else return this.chain(t, (i) => this.backend.handle(i));
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(sa), A(Gi));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac });
    }
  }
  return n;
})();
var C_ = /^\)\]\}',?\n/;
function E_(n) {
  return "responseURL" in n && n.responseURL
    ? n.responseURL
    : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
      ? n.getResponseHeader("X-Request-URL")
      : null;
}
var tf = (() => {
    class n {
      constructor(t) {
        this.xhrFactory = t;
      }
      handle(t) {
        if (t.method === "JSONP") throw new Et(-2800, !1);
        let i = this.xhrFactory;
        return (i.ɵloadImpl ? oe(i.ɵloadImpl()) : W(null)).pipe(
          Ut(
            () =>
              new ai((a) => {
                let c = i.build();
                if (
                  (c.open(t.method, t.urlWithParams),
                  t.withCredentials && (c.withCredentials = !0),
                  t.headers.forEach((H, it) =>
                    c.setRequestHeader(H, it.join(",")),
                  ),
                  t.headers.has("Accept") ||
                    c.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*",
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  let H = t.detectContentTypeHeader();
                  H !== null && c.setRequestHeader("Content-Type", H);
                }
                if (t.responseType) {
                  let H = t.responseType.toLowerCase();
                  c.responseType = H !== "json" ? H : "text";
                }
                let h = t.serializeBody(),
                  f = null,
                  b = () => {
                    if (f !== null) return f;
                    let H = c.statusText || "OK",
                      it = new xi(c.getAllResponseHeaders()),
                      Ft = E_(c) || t.url;
                    return (
                      (f = new aa({
                        headers: it,
                        status: c.status,
                        statusText: H,
                        url: Ft,
                      })),
                      f
                    );
                  },
                  y = () => {
                    let {
                        headers: H,
                        status: it,
                        statusText: Ft,
                        url: Kt,
                      } = b(),
                      It = null;
                    it !== f_ &&
                      (It =
                        typeof c.response > "u" ? c.responseText : c.response),
                      it === 0 && (it = It ? ef : 0);
                    let ze = it >= 200 && it < 300;
                    if (t.responseType === "json" && typeof It == "string") {
                      let ii = It;
                      It = It.replace(C_, "");
                      try {
                        It = It !== "" ? JSON.parse(It) : null;
                      } catch (gn) {
                        (It = ii),
                          ze && ((ze = !1), (It = { error: gn, text: It }));
                      }
                    }
                    ze
                      ? (a.next(
                          new wo({
                            body: It,
                            headers: H,
                            status: it,
                            statusText: Ft,
                            url: Kt || void 0,
                          }),
                        ),
                        a.complete())
                      : a.error(
                          new Xi({
                            error: It,
                            headers: H,
                            status: it,
                            statusText: Ft,
                            url: Kt || void 0,
                          }),
                        );
                  },
                  D = (H) => {
                    let { url: it } = b(),
                      Ft = new Xi({
                        error: H,
                        status: c.status || 0,
                        statusText: c.statusText || "Unknown Error",
                        url: it || void 0,
                      });
                    a.error(Ft);
                  },
                  U = !1,
                  z = (H) => {
                    U || (a.next(b()), (U = !0));
                    let it = { type: tn.DownloadProgress, loaded: H.loaded };
                    H.lengthComputable && (it.total = H.total),
                      t.responseType === "text" &&
                        c.responseText &&
                        (it.partialText = c.responseText),
                      a.next(it);
                  },
                  G = (H) => {
                    let it = { type: tn.UploadProgress, loaded: H.loaded };
                    H.lengthComputable && (it.total = H.total), a.next(it);
                  };
                return (
                  c.addEventListener("load", y),
                  c.addEventListener("error", D),
                  c.addEventListener("timeout", D),
                  c.addEventListener("abort", D),
                  t.reportProgress &&
                    (c.addEventListener("progress", z),
                    h !== null &&
                      c.upload &&
                      c.upload.addEventListener("progress", G)),
                  c.send(h),
                  a.next({ type: tn.Sent }),
                  () => {
                    c.removeEventListener("error", D),
                      c.removeEventListener("abort", D),
                      c.removeEventListener("load", y),
                      c.removeEventListener("timeout", D),
                      t.reportProgress &&
                        (c.removeEventListener("progress", z),
                        h !== null &&
                          c.upload &&
                          c.upload.removeEventListener("progress", G)),
                      c.readyState !== c.DONE && c.abort();
                  }
                );
              }),
          ),
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(ra));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  rf = new Y(""),
  I_ = "XSRF-TOKEN",
  D_ = new Y("", { providedIn: "root", factory: () => I_ }),
  A_ = "X-XSRF-TOKEN",
  S_ = new Y("", { providedIn: "root", factory: () => A_ }),
  la = class {},
  k_ = (() => {
    class n {
      constructor(t, i, r) {
        (this.doc = t),
          (this.platform = i),
          (this.cookieName = r),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let t = this.doc.cookie || "";
        return (
          t !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = ia(t, this.cookieName)),
            (this.lastCookieString = t)),
          this.lastToken
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt), A(bi), A(D_));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })();
function M_(n, e) {
  let t = n.url.toLowerCase();
  if (
    !B(rf) ||
    n.method === "GET" ||
    n.method === "HEAD" ||
    t.startsWith("http://") ||
    t.startsWith("https://")
  )
    return e(n);
  let i = B(la).getToken(),
    r = B(S_);
  return (
    i != null &&
      !n.headers.has(r) &&
      (n = n.clone({ headers: n.headers.set(r, i) })),
    e(n)
  );
}
function of(...n) {
  let e = [
    xo,
    tf,
    Jm,
    { provide: _o, useExisting: Jm },
    { provide: sa, useFactory: () => B(v_, { optional: !0 }) ?? B(tf) },
    { provide: nf, useValue: M_, multi: !0 },
    { provide: rf, useValue: !0 },
    { provide: la, useClass: k_ },
  ];
  for (let t of n) e.push(...t.ɵproviders);
  return kn(e);
}
var Yc = class extends jm {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Qc = class n extends Yc {
    static makeCurrent() {
      Nm(new n());
    }
    onAndCancel(e, t, i) {
      return (
        e.addEventListener(t, i),
        () => {
          e.removeEventListener(t, i);
        }
      );
    }
    dispatchEvent(e, t) {
      e.dispatchEvent(t);
    }
    remove(e) {
      e.remove();
    }
    createElement(e, t) {
      return (t = t || this.getDefaultDocument()), t.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, t) {
      return t === "window"
        ? window
        : t === "document"
          ? e
          : t === "body"
            ? e.body
            : null;
    }
    getBaseHref(e) {
      let t = O_();
      return t == null ? null : F_(t);
    }
    resetBaseElement() {
      Co = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return ia(document.cookie, e);
    }
  },
  Co = null;
function O_() {
  return (
    (Co = Co || document.querySelector("base")),
    Co ? Co.getAttribute("href") : null
  );
}
function F_(n) {
  return new URL(n, document.baseURI).pathname;
}
var P_ = (() => {
    class n {
      build() {
        return new XMLHttpRequest();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Zc = new Y(""),
  cf = (() => {
    class n {
      constructor(t, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          t.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, i, r) {
        return this._findPluginFor(i).addEventListener(t, i, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let i = this._eventNameToPlugin.get(t);
        if (i) return i;
        if (((i = this._plugins.find((a) => a.supports(t))), !i))
          throw new Et(5101, !1);
        return this._eventNameToPlugin.set(t, i), i;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(Zc), A(st));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  da = class {
    constructor(e) {
      this._doc = e;
    }
  },
  Gc = "ng-app-id",
  df = (() => {
    class n {
      constructor(t, i, r, a = {}) {
        (this.doc = t),
          (this.appId = i),
          (this.nonce = r),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = na(a)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let i of t)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(t) {
        for (let i of t)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((i) => i.remove()), t.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let i of this.getAllStyles()) this.addStyleToHost(t, i);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let i of this.hostNodes) this.addStyleToHost(i, t);
      }
      onStyleRemoved(t) {
        let i = this.styleRef;
        i.get(t)?.elements?.forEach((r) => r.remove()), i.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${Gc}="${this.appId}"]`);
        if (t?.length) {
          let i = new Map();
          return (
            t.forEach((r) => {
              r.textContent != null && i.set(r.textContent, r);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(t, i) {
        let r = this.styleRef;
        if (r.has(t)) {
          let a = r.get(t);
          return (a.usage += i), a.usage;
        }
        return r.set(t, { usage: i, elements: [] }), i;
      }
      getStyleElement(t, i) {
        let r = this.styleNodesInDOM,
          a = r?.get(i);
        if (a?.parentNode === t) return r.delete(i), a.removeAttribute(Gc), a;
        {
          let c = this.doc.createElement("style");
          return (
            this.nonce && c.setAttribute("nonce", this.nonce),
            (c.textContent = i),
            this.platformIsServer && c.setAttribute(Gc, this.appId),
            t.appendChild(c),
            c
          );
        }
      }
      addStyleToHost(t, i) {
        let r = this.getStyleElement(t, i),
          a = this.styleRef,
          c = a.get(i)?.elements;
        c ? c.push(r) : a.set(i, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt), A(Gs), A(mo, 8), A(bi));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  qc = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  td = /%COMP%/g,
  uf = "%COMP%",
  L_ = `_nghost-${uf}`,
  N_ = `_ngcontent-${uf}`,
  j_ = !0,
  V_ = new Y("", { providedIn: "root", factory: () => j_ });
function B_(n) {
  return N_.replace(td, n);
}
function z_(n) {
  return L_.replace(td, n);
}
function hf(n, e) {
  return e.map((t) => t.replace(td, n));
}
var ua = (() => {
    class n {
      constructor(t, i, r, a, c, h, f, b = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = i),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = c),
          (this.platformId = h),
          (this.ngZone = f),
          (this.nonce = b),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = na(h)),
          (this.defaultRenderer = new Eo(t, c, f, this.platformIsServer));
      }
      createRenderer(t, i) {
        if (!t || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === uo.ShadowDom &&
          (i = Z(C({}, i), { encapsulation: uo.Emulated }));
        let r = this.getOrCreateRenderer(t, i);
        return (
          r instanceof ha
            ? r.applyToHost(t)
            : r instanceof Io && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(t, i) {
        let r = this.rendererByCompId,
          a = r.get(i.id);
        if (!a) {
          let c = this.doc,
            h = this.ngZone,
            f = this.eventManager,
            b = this.sharedStylesHost,
            y = this.removeStylesOnCompDestroy,
            D = this.platformIsServer;
          switch (i.encapsulation) {
            case uo.Emulated:
              a = new ha(f, b, i, this.appId, y, c, h, D);
              break;
            case uo.ShadowDom:
              return new Xc(f, b, t, i, c, h, this.nonce, D);
            default:
              a = new Io(f, b, i, y, c, h, D);
              break;
          }
          r.set(i.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            A(cf),
            A(df),
            A(Gs),
            A(V_),
            A(dt),
            A(bi),
            A(st),
            A(mo),
          );
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Eo = class {
    constructor(e, t, i, r) {
      (this.eventManager = e),
        (this.doc = t),
        (this.ngZone = i),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, t) {
      return t
        ? this.doc.createElementNS(qc[t] || t, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, t) {
      (sf(e) ? e.content : e).appendChild(t);
    }
    insertBefore(e, t, i) {
      e && (sf(e) ? e.content : e).insertBefore(t, i);
    }
    removeChild(e, t) {
      t.remove();
    }
    selectRootElement(e, t) {
      let i = typeof e == "string" ? this.doc.querySelector(e) : e;
      if (!i) throw new Et(-5104, !1);
      return t || (i.textContent = ""), i;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, t, i, r) {
      if (r) {
        t = r + ":" + t;
        let a = qc[r];
        a ? e.setAttributeNS(a, t, i) : e.setAttribute(t, i);
      } else e.setAttribute(t, i);
    }
    removeAttribute(e, t, i) {
      if (i) {
        let r = qc[i];
        r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${i}:${t}`);
      } else e.removeAttribute(t);
    }
    addClass(e, t) {
      e.classList.add(t);
    }
    removeClass(e, t) {
      e.classList.remove(t);
    }
    setStyle(e, t, i, r) {
      r & (fo.DashCase | fo.Important)
        ? e.style.setProperty(t, i, r & fo.Important ? "important" : "")
        : (e.style[t] = i);
    }
    removeStyle(e, t, i) {
      i & fo.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
    }
    setProperty(e, t, i) {
      e != null && (e[t] = i);
    }
    setValue(e, t) {
      e.nodeValue = t;
    }
    listen(e, t, i) {
      if (
        typeof e == "string" &&
        ((e = dr().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${t}`);
      return this.eventManager.addEventListener(
        e,
        t,
        this.decoratePreventDefault(i),
      );
    }
    decoratePreventDefault(e) {
      return (t) => {
        if (t === "__ngUnwrap__") return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(t)) : e(t)) ===
          !1 && t.preventDefault();
      };
    }
  };
function sf(n) {
  return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var Xc = class extends Eo {
    constructor(e, t, i, r, a, c, h, f) {
      super(e, a, c, f),
        (this.sharedStylesHost = t),
        (this.hostEl = i),
        (this.shadowRoot = i.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let b = hf(r.id, r.styles);
      for (let y of b) {
        let D = document.createElement("style");
        h && D.setAttribute("nonce", h),
          (D.textContent = y),
          this.shadowRoot.appendChild(D);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, t) {
      return super.appendChild(this.nodeOrShadowRoot(e), t);
    }
    insertBefore(e, t, i) {
      return super.insertBefore(this.nodeOrShadowRoot(e), t, i);
    }
    removeChild(e, t) {
      return super.removeChild(null, t);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Io = class extends Eo {
    constructor(e, t, i, r, a, c, h, f) {
      super(e, a, c, h),
        (this.sharedStylesHost = t),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = f ? hf(f, i.styles) : i.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ha = class extends Io {
    constructor(e, t, i, r, a, c, h, f) {
      let b = r + "-" + i.id;
      super(e, t, i, a, c, h, f, b),
        (this.contentAttr = B_(b)),
        (this.hostAttr = z_(b));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, "");
    }
    createElement(e, t) {
      let i = super.createElement(e, t);
      return super.setAttribute(i, this.contentAttr, ""), i;
    }
  },
  U_ = (() => {
    class n extends da {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, i, r) {
        return (
          t.addEventListener(i, r, !1), () => this.removeEventListener(t, i, r)
        );
      }
      removeEventListener(t, i, r) {
        return t.removeEventListener(i, r);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  af = ["alt", "control", "meta", "shift"],
  H_ = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  $_ = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  K_ = (() => {
    class n extends da {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return n.parseEventName(t) != null;
      }
      addEventListener(t, i, r) {
        let a = n.parseEventName(i),
          c = n.eventCallback(a.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => dr().onAndCancel(t, a.domEventName, c));
      }
      static parseEventName(t) {
        let i = t.toLowerCase().split("."),
          r = i.shift();
        if (i.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let a = n._normalizeKey(i.pop()),
          c = "",
          h = i.indexOf("code");
        if (
          (h > -1 && (i.splice(h, 1), (c = "code.")),
          af.forEach((b) => {
            let y = i.indexOf(b);
            y > -1 && (i.splice(y, 1), (c += b + "."));
          }),
          (c += a),
          i.length != 0 || a.length === 0)
        )
          return null;
        let f = {};
        return (f.domEventName = r), (f.fullKey = c), f;
      }
      static matchEventFullKeyCode(t, i) {
        let r = H_[t.key] || t.key,
          a = "";
        return (
          i.indexOf("code.") > -1 && ((r = t.code), (a = "code.")),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === " " ? (r = "space") : r === "." && (r = "dot"),
              af.forEach((c) => {
                if (c !== r) {
                  let h = $_[c];
                  h(t) && (a += c + ".");
                }
              }),
              (a += r),
              a === i)
        );
      }
      static eventCallback(t, i, r) {
        return (a) => {
          n.matchEventFullKeyCode(a, t) && r.runGuarded(() => i(a));
        };
      }
      static _normalizeKey(t) {
        return t === "esc" ? "escape" : t;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })();
function mf(n, e) {
  return Lm(C({ rootComponent: n }, W_(e)));
}
function W_(n) {
  return {
    appProviders: [...Z_, ...(n?.providers ?? [])],
    platformProviders: Q_,
  };
}
function G_() {
  Qc.makeCurrent();
}
function q_() {
  return new Mn();
}
function Y_() {
  return vm(document), document;
}
var Q_ = [
  { provide: bi, useValue: Um },
  { provide: bm, useValue: G_, multi: !0 },
  { provide: dt, useFactory: Y_, deps: [] },
];
var Z_ = [
  { provide: gm, useValue: "root" },
  { provide: Mn, useFactory: q_, deps: [] },
  { provide: Zc, useClass: U_, multi: !0, deps: [dt, st, bi] },
  { provide: Zc, useClass: K_, multi: !0, deps: [dt] },
  ua,
  df,
  cf,
  { provide: Ys, useExisting: ua },
  { provide: ra, useClass: P_, deps: [] },
  [],
];
var ff = (() => {
  class n {
    constructor(t) {
      this._doc = t;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(t) {
      this._doc.title = t || "";
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(dt));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var ed = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({
          token: n,
          factory: function (i) {
            let r = null;
            return i ? (r = new (i || n)()) : (r = A(X_)), r;
          },
          providedIn: "root",
        });
      }
    }
    return n;
  })(),
  X_ = (() => {
    class n extends ed {
      constructor(t) {
        super(), (this._doc = t);
      }
      sanitize(t, i) {
        if (i == null) return null;
        switch (t) {
          case De.NONE:
            return i;
          case De.HTML:
            return sr(i, "HTML") ? or(i) : Im(this._doc, String(i)).toString();
          case De.STYLE:
            return sr(i, "Style") ? or(i) : i;
          case De.SCRIPT:
            if (sr(i, "Script")) return or(i);
            throw new Et(5200, !1);
          case De.URL:
            return sr(i, "URL") ? or(i) : Em(String(i));
          case De.RESOURCE_URL:
            if (sr(i, "ResourceURL")) return or(i);
            throw new Et(5201, !1);
          default:
            throw new Et(5202, !1);
        }
      }
      bypassSecurityTrustHtml(t) {
        return _m(t);
      }
      bypassSecurityTrustStyle(t) {
        return ym(t);
      }
      bypassSecurityTrustScript(t) {
        return wm(t);
      }
      bypassSecurityTrustUrl(t) {
        return xm(t);
      }
      bypassSecurityTrustResourceUrl(t) {
        return Cm(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var pt = "primary",
  Uo = Symbol("RouteTitle"),
  sd = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let t = this.params[e];
        return Array.isArray(t) ? t[0] : t;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let t = this.params[e];
        return Array.isArray(t) ? t : [t];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function gr(n) {
  return new sd(n);
}
function ty(n, e, t) {
  let i = t.path.split("/");
  if (
    i.length > n.length ||
    (t.pathMatch === "full" && (e.hasChildren() || i.length < n.length))
  )
    return null;
  let r = {};
  for (let a = 0; a < i.length; a++) {
    let c = i[a],
      h = n[a];
    if (c[0] === ":") r[c.substring(1)] = h;
    else if (c !== h.path) return null;
  }
  return { consumed: n.slice(0, i.length), posParams: r };
}
function ey(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0; t < n.length; ++t) if (!di(n[t], e[t])) return !1;
  return !0;
}
function di(n, e) {
  let t = n ? ad(n) : void 0,
    i = e ? ad(e) : void 0;
  if (!t || !i || t.length != i.length) return !1;
  let r;
  for (let a = 0; a < t.length; a++)
    if (((r = t[a]), !Cf(n[r], e[r]))) return !1;
  return !0;
}
function ad(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function Cf(n, e) {
  if (Array.isArray(n) && Array.isArray(e)) {
    if (n.length !== e.length) return !1;
    let t = [...n].sort(),
      i = [...e].sort();
    return t.every((r, a) => i[a] === r);
  } else return n === e;
}
function Ef(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function en(n) {
  return he(n) ? n : ea(n) ? oe(Promise.resolve(n)) : W(n);
}
var iy = { exact: Df, subset: Af },
  If = { exact: ny, subset: ry, ignored: () => !0 };
function gf(n, e, t) {
  return (
    iy[t.paths](n.root, e.root, t.matrixParams) &&
    If[t.queryParams](n.queryParams, e.queryParams) &&
    !(t.fragment === "exact" && n.fragment !== e.fragment)
  );
}
function ny(n, e) {
  return di(n, e);
}
function Df(n, e, t) {
  if (
    !Fn(n.segments, e.segments) ||
    !pa(n.segments, e.segments, t) ||
    n.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let i in e.children)
    if (!n.children[i] || !Df(n.children[i], e.children[i], t)) return !1;
  return !0;
}
function ry(n, e) {
  return (
    Object.keys(e).length <= Object.keys(n).length &&
    Object.keys(e).every((t) => Cf(n[t], e[t]))
  );
}
function Af(n, e, t) {
  return Sf(n, e, e.segments, t);
}
function Sf(n, e, t, i) {
  if (n.segments.length > t.length) {
    let r = n.segments.slice(0, t.length);
    return !(!Fn(r, t) || e.hasChildren() || !pa(r, t, i));
  } else if (n.segments.length === t.length) {
    if (!Fn(n.segments, t) || !pa(n.segments, t, i)) return !1;
    for (let r in e.children)
      if (!n.children[r] || !Af(n.children[r], e.children[r], i)) return !1;
    return !0;
  } else {
    let r = t.slice(0, n.segments.length),
      a = t.slice(n.segments.length);
    return !Fn(n.segments, r) || !pa(n.segments, r, i) || !n.children[pt]
      ? !1
      : Sf(n.children[pt], e, a, i);
  }
}
function pa(n, e, t) {
  return e.every((i, r) => If[t](n[r].parameters, i.parameters));
}
var Ei = class {
    constructor(e = new xt([], {}), t = {}, i = null) {
      (this.root = e), (this.queryParams = t), (this.fragment = i);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= gr(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return ay.serialize(this);
    }
  },
  xt = class {
    constructor(e, t) {
      (this.segments = e),
        (this.children = t),
        (this.parent = null),
        Object.values(t).forEach((i) => (i.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return ga(this);
    }
  },
  On = class {
    constructor(e, t) {
      (this.path = e), (this.parameters = t);
    }
    get parameterMap() {
      return (this._parameterMap ??= gr(this.parameters)), this._parameterMap;
    }
    toString() {
      return Mf(this);
    }
  };
function oy(n, e) {
  return Fn(n, e) && n.every((t, i) => di(t.parameters, e[i].parameters));
}
function Fn(n, e) {
  return n.length !== e.length ? !1 : n.every((t, i) => t.path === e[i].path);
}
function sy(n, e) {
  let t = [];
  return (
    Object.entries(n.children).forEach(([i, r]) => {
      i === pt && (t = t.concat(e(r, i)));
    }),
    Object.entries(n.children).forEach(([i, r]) => {
      i !== pt && (t = t.concat(e(r, i)));
    }),
    t
  );
}
var Od = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({
          token: n,
          factory: () => new To(),
          providedIn: "root",
        });
      }
    }
    return n;
  })(),
  To = class {
    parse(e) {
      let t = new cd(e);
      return new Ei(
        t.parseRootSegment(),
        t.parseQueryParams(),
        t.parseFragment(),
      );
    }
    serialize(e) {
      let t = `/${Do(e.root, !0)}`,
        i = dy(e.queryParams),
        r = typeof e.fragment == "string" ? `#${ly(e.fragment)}` : "";
      return `${t}${i}${r}`;
    }
  },
  ay = new To();
function ga(n) {
  return n.segments.map((e) => Mf(e)).join("/");
}
function Do(n, e) {
  if (!n.hasChildren()) return ga(n);
  if (e) {
    let t = n.children[pt] ? Do(n.children[pt], !1) : "",
      i = [];
    return (
      Object.entries(n.children).forEach(([r, a]) => {
        r !== pt && i.push(`${r}:${Do(a, !1)}`);
      }),
      i.length > 0 ? `${t}(${i.join("//")})` : t
    );
  } else {
    let t = sy(n, (i, r) =>
      r === pt ? [Do(n.children[pt], !1)] : [`${r}:${Do(i, !1)}`],
    );
    return Object.keys(n.children).length === 1 && n.children[pt] != null
      ? `${ga(n)}/${t[0]}`
      : `${ga(n)}/(${t.join("//")})`;
  }
}
function kf(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function ma(n) {
  return kf(n).replace(/%3B/gi, ";");
}
function ly(n) {
  return encodeURI(n);
}
function ld(n) {
  return kf(n)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function va(n) {
  return decodeURIComponent(n);
}
function vf(n) {
  return va(n.replace(/\+/g, "%20"));
}
function Mf(n) {
  return `${ld(n.path)}${cy(n.parameters)}`;
}
function cy(n) {
  return Object.entries(n)
    .map(([e, t]) => `;${ld(e)}=${ld(t)}`)
    .join("");
}
function dy(n) {
  let e = Object.entries(n)
    .map(([t, i]) =>
      Array.isArray(i)
        ? i.map((r) => `${ma(t)}=${ma(r)}`).join("&")
        : `${ma(t)}=${ma(i)}`,
    )
    .filter((t) => t);
  return e.length ? `?${e.join("&")}` : "";
}
var uy = /^[^\/()?;#]+/;
function id(n) {
  let e = n.match(uy);
  return e ? e[0] : "";
}
var hy = /^[^\/()?;=#]+/;
function my(n) {
  let e = n.match(hy);
  return e ? e[0] : "";
}
var fy = /^[^=?&#]+/;
function py(n) {
  let e = n.match(fy);
  return e ? e[0] : "";
}
var gy = /^[^&#]+/;
function vy(n) {
  let e = n.match(gy);
  return e ? e[0] : "";
}
var cd = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new xt([], {})
        : new xt([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(e);
      while (this.consumeOptional("&"));
    return e;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let e = [];
    for (
      this.peekStartsWith("(") || e.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), e.push(this.parseSegment());
    let t = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (t = this.parseParens(!0)));
    let i = {};
    return (
      this.peekStartsWith("(") && (i = this.parseParens(!1)),
      (e.length > 0 || Object.keys(t).length > 0) && (i[pt] = new xt(e, t)),
      i
    );
  }
  parseSegment() {
    let e = id(this.remaining);
    if (e === "" && this.peekStartsWith(";")) throw new Et(4009, !1);
    return this.capture(e), new On(va(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(";"); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let t = my(this.remaining);
    if (!t) return;
    this.capture(t);
    let i = "";
    if (this.consumeOptional("=")) {
      let r = id(this.remaining);
      r && ((i = r), this.capture(i));
    }
    e[va(t)] = va(i);
  }
  parseQueryParam(e) {
    let t = py(this.remaining);
    if (!t) return;
    this.capture(t);
    let i = "";
    if (this.consumeOptional("=")) {
      let c = vy(this.remaining);
      c && ((i = c), this.capture(i));
    }
    let r = vf(t),
      a = vf(i);
    if (e.hasOwnProperty(r)) {
      let c = e[r];
      Array.isArray(c) || ((c = [c]), (e[r] = c)), c.push(a);
    } else e[r] = a;
  }
  parseParens(e) {
    let t = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let i = id(this.remaining),
        r = this.remaining[i.length];
      if (r !== "/" && r !== ")" && r !== ";") throw new Et(4010, !1);
      let a;
      i.indexOf(":") > -1
        ? ((a = i.slice(0, i.indexOf(":"))), this.capture(a), this.capture(":"))
        : e && (a = pt);
      let c = this.parseChildren();
      (t[a] = Object.keys(c).length === 1 ? c[pt] : new xt([], c)),
        this.consumeOptional("//");
    }
    return t;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new Et(4011, !1);
  }
};
function Rf(n) {
  return n.segments.length > 0 ? new xt([], { [pt]: n }) : n;
}
function Tf(n) {
  let e = {};
  for (let [i, r] of Object.entries(n.children)) {
    let a = Tf(r);
    if (i === pt && a.segments.length === 0 && a.hasChildren())
      for (let [c, h] of Object.entries(a.children)) e[c] = h;
    else (a.segments.length > 0 || a.hasChildren()) && (e[i] = a);
  }
  let t = new xt(n.segments, e);
  return by(t);
}
function by(n) {
  if (n.numberOfChildren === 1 && n.children[pt]) {
    let e = n.children[pt];
    return new xt(n.segments.concat(e.segments), e.children);
  }
  return n;
}
function Oo(n) {
  return n instanceof Ei;
}
function _y(n, e, t = null, i = null) {
  let r = Of(n);
  return Ff(r, e, t, i);
}
function Of(n) {
  let e;
  function t(a) {
    let c = {};
    for (let f of a.children) {
      let b = t(f);
      c[f.outlet] = b;
    }
    let h = new xt(a.url, c);
    return a === n && (e = h), h;
  }
  let i = t(n.root),
    r = Rf(i);
  return e ?? r;
}
function Ff(n, e, t, i) {
  let r = n;
  for (; r.parent; ) r = r.parent;
  if (e.length === 0) return nd(r, r, r, t, i);
  let a = yy(e);
  if (a.toRoot()) return nd(r, r, new xt([], {}), t, i);
  let c = wy(a, r, n),
    h = c.processChildren
      ? ko(c.segmentGroup, c.index, a.commands)
      : Lf(c.segmentGroup, c.index, a.commands);
  return nd(r, c.segmentGroup, h, t, i);
}
function ba(n) {
  return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function Fo(n) {
  return typeof n == "object" && n != null && n.outlets;
}
function nd(n, e, t, i, r) {
  let a = {};
  i &&
    Object.entries(i).forEach(([f, b]) => {
      a[f] = Array.isArray(b) ? b.map((y) => `${y}`) : `${b}`;
    });
  let c;
  n === e ? (c = t) : (c = Pf(n, e, t));
  let h = Rf(Tf(c));
  return new Ei(h, a, r);
}
function Pf(n, e, t) {
  let i = {};
  return (
    Object.entries(n.children).forEach(([r, a]) => {
      a === e ? (i[r] = t) : (i[r] = Pf(a, e, t));
    }),
    new xt(n.segments, i)
  );
}
var _a = class {
  constructor(e, t, i) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = t),
      (this.commands = i),
      e && i.length > 0 && ba(i[0]))
    )
      throw new Et(4003, !1);
    let r = i.find(Fo);
    if (r && r !== Ef(i)) throw new Et(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function yy(n) {
  if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
    return new _a(!0, 0, n);
  let e = 0,
    t = !1,
    i = n.reduce((r, a, c) => {
      if (typeof a == "object" && a != null) {
        if (a.outlets) {
          let h = {};
          return (
            Object.entries(a.outlets).forEach(([f, b]) => {
              h[f] = typeof b == "string" ? b.split("/") : b;
            }),
            [...r, { outlets: h }]
          );
        }
        if (a.segmentPath) return [...r, a.segmentPath];
      }
      return typeof a != "string"
        ? [...r, a]
        : c === 0
          ? (a.split("/").forEach((h, f) => {
              (f == 0 && h === ".") ||
                (f == 0 && h === ""
                  ? (t = !0)
                  : h === ".."
                    ? e++
                    : h != "" && r.push(h));
            }),
            r)
          : [...r, a];
    }, []);
  return new _a(t, e, i);
}
var mr = class {
  constructor(e, t, i) {
    (this.segmentGroup = e), (this.processChildren = t), (this.index = i);
  }
};
function wy(n, e, t) {
  if (n.isAbsolute) return new mr(e, !0, 0);
  if (!t) return new mr(e, !1, NaN);
  if (t.parent === null) return new mr(t, !0, 0);
  let i = ba(n.commands[0]) ? 0 : 1,
    r = t.segments.length - 1 + i;
  return xy(t, r, n.numberOfDoubleDots);
}
function xy(n, e, t) {
  let i = n,
    r = e,
    a = t;
  for (; a > r; ) {
    if (((a -= r), (i = i.parent), !i)) throw new Et(4005, !1);
    r = i.segments.length;
  }
  return new mr(i, !1, r - a);
}
function Cy(n) {
  return Fo(n[0]) ? n[0].outlets : { [pt]: n };
}
function Lf(n, e, t) {
  if (((n ??= new xt([], {})), n.segments.length === 0 && n.hasChildren()))
    return ko(n, e, t);
  let i = Ey(n, e, t),
    r = t.slice(i.commandIndex);
  if (i.match && i.pathIndex < n.segments.length) {
    let a = new xt(n.segments.slice(0, i.pathIndex), {});
    return (
      (a.children[pt] = new xt(n.segments.slice(i.pathIndex), n.children)),
      ko(a, 0, r)
    );
  } else
    return i.match && r.length === 0
      ? new xt(n.segments, {})
      : i.match && !n.hasChildren()
        ? dd(n, e, t)
        : i.match
          ? ko(n, 0, r)
          : dd(n, e, t);
}
function ko(n, e, t) {
  if (t.length === 0) return new xt(n.segments, {});
  {
    let i = Cy(t),
      r = {};
    if (
      Object.keys(i).some((a) => a !== pt) &&
      n.children[pt] &&
      n.numberOfChildren === 1 &&
      n.children[pt].segments.length === 0
    ) {
      let a = ko(n.children[pt], e, t);
      return new xt(n.segments, a.children);
    }
    return (
      Object.entries(i).forEach(([a, c]) => {
        typeof c == "string" && (c = [c]),
          c !== null && (r[a] = Lf(n.children[a], e, c));
      }),
      Object.entries(n.children).forEach(([a, c]) => {
        i[a] === void 0 && (r[a] = c);
      }),
      new xt(n.segments, r)
    );
  }
}
function Ey(n, e, t) {
  let i = 0,
    r = e,
    a = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < n.segments.length; ) {
    if (i >= t.length) return a;
    let c = n.segments[r],
      h = t[i];
    if (Fo(h)) break;
    let f = `${h}`,
      b = i < t.length - 1 ? t[i + 1] : null;
    if (r > 0 && f === void 0) break;
    if (f && b && typeof b == "object" && b.outlets === void 0) {
      if (!_f(f, b, c)) return a;
      i += 2;
    } else {
      if (!_f(f, {}, c)) return a;
      i++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: i };
}
function dd(n, e, t) {
  let i = n.segments.slice(0, e),
    r = 0;
  for (; r < t.length; ) {
    let a = t[r];
    if (Fo(a)) {
      let f = Iy(a.outlets);
      return new xt(i, f);
    }
    if (r === 0 && ba(t[0])) {
      let f = n.segments[e];
      i.push(new On(f.path, bf(t[0]))), r++;
      continue;
    }
    let c = Fo(a) ? a.outlets[pt] : `${a}`,
      h = r < t.length - 1 ? t[r + 1] : null;
    c && h && ba(h)
      ? (i.push(new On(c, bf(h))), (r += 2))
      : (i.push(new On(c, {})), r++);
  }
  return new xt(i, {});
}
function Iy(n) {
  let e = {};
  return (
    Object.entries(n).forEach(([t, i]) => {
      typeof i == "string" && (i = [i]),
        i !== null && (e[t] = dd(new xt([], {}), 0, i));
    }),
    e
  );
}
function bf(n) {
  let e = {};
  return Object.entries(n).forEach(([t, i]) => (e[t] = `${i}`)), e;
}
function _f(n, e, t) {
  return n == t.path && di(e, t.parameters);
}
var Mo = "imperative",
  ae = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = "NavigationStart"),
      (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
      (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
      (n[(n.NavigationError = 3)] = "NavigationError"),
      (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
      (n[(n.ResolveStart = 5)] = "ResolveStart"),
      (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
      (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
      (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (n[(n.ActivationStart = 13)] = "ActivationStart"),
      (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
      (n[(n.Scroll = 15)] = "Scroll"),
      (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
      n
    );
  })(ae || {}),
  Pe = class {
    constructor(e, t) {
      (this.id = e), (this.url = t);
    }
  },
  Po = class extends Pe {
    constructor(e, t, i = "imperative", r = null) {
      super(e, t),
        (this.type = ae.NavigationStart),
        (this.navigationTrigger = i),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Pn = class extends Pe {
    constructor(e, t, i) {
      super(e, t), (this.urlAfterRedirects = i), (this.type = ae.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Se = (function (n) {
    return (
      (n[(n.Redirect = 0)] = "Redirect"),
      (n[(n.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (n[(n.GuardRejected = 3)] = "GuardRejected"),
      n
    );
  })(Se || {}),
  ud = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      n
    );
  })(ud || {}),
  Ci = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.reason = i),
        (this.code = r),
        (this.type = ae.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Ln = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.reason = i),
        (this.code = r),
        (this.type = ae.NavigationSkipped);
    }
  },
  Lo = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.error = i),
        (this.target = r),
        (this.type = ae.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ya = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = ae.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  hd = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = ae.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  md = class extends Pe {
    constructor(e, t, i, r, a) {
      super(e, t),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.shouldActivate = a),
        (this.type = ae.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  fd = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = ae.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  pd = class extends Pe {
    constructor(e, t, i, r) {
      super(e, t),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = ae.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  gd = class {
    constructor(e) {
      (this.route = e), (this.type = ae.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  vd = class {
    constructor(e) {
      (this.route = e), (this.type = ae.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  bd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = ae.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  _d = class {
    constructor(e) {
      (this.snapshot = e), (this.type = ae.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  yd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = ae.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  wd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = ae.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  };
var No = class {},
  vr = class {
    constructor(e, t) {
      (this.url = e), (this.navigationBehaviorOptions = t);
    }
  };
function Dy(n, e) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = Mm(n.providers, e, `Route: ${n.path}`)),
    n._injector ?? e
  );
}
function Je(n) {
  return n.outlet || pt;
}
function Ay(n, e) {
  let t = n.filter((i) => Je(i) === e);
  return t.push(...n.filter((i) => Je(i) !== e)), t;
}
function Ho(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let e = n.parent; e; e = e.parent) {
    let t = e.routeConfig;
    if (t?._loadedInjector) return t._loadedInjector;
    if (t?._injector) return t._injector;
  }
  return null;
}
var xd = class {
    get injector() {
      return Ho(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(e) {}
    constructor(e) {
      (this.rootInjector = e),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Aa(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Aa = (() => {
    class n {
      constructor(t) {
        (this.rootInjector = t), (this.contexts = new Map());
      }
      onChildOutletCreated(t, i) {
        let r = this.getOrCreateContext(t);
        (r.outlet = i), this.contexts.set(t, r);
      }
      onChildOutletDestroyed(t) {
        let i = this.getContext(t);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let i = this.getContext(t);
        return (
          i || ((i = new xd(this.rootInjector)), this.contexts.set(t, i)), i
        );
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(Gi));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  wa = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let t = this.pathFromRoot(e);
      return t.length > 1 ? t[t.length - 2] : null;
    }
    children(e) {
      let t = Cd(e, this._root);
      return t ? t.children.map((i) => i.value) : [];
    }
    firstChild(e) {
      let t = Cd(e, this._root);
      return t && t.children.length > 0 ? t.children[0].value : null;
    }
    siblings(e) {
      let t = Ed(e, this._root);
      return t.length < 2
        ? []
        : t[t.length - 2].children.map((r) => r.value).filter((r) => r !== e);
    }
    pathFromRoot(e) {
      return Ed(e, this._root).map((t) => t.value);
    }
  };
function Cd(n, e) {
  if (n === e.value) return e;
  for (let t of e.children) {
    let i = Cd(n, t);
    if (i) return i;
  }
  return null;
}
function Ed(n, e) {
  if (n === e.value) return [e];
  for (let t of e.children) {
    let i = Ed(n, t);
    if (i.length) return i.unshift(e), i;
  }
  return [];
}
var Ae = class {
  constructor(e, t) {
    (this.value = e), (this.children = t);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function hr(n) {
  let e = {};
  return n && n.children.forEach((t) => (e[t.value.outlet] = t)), e;
}
var xa = class extends wa {
  constructor(e, t) {
    super(e), (this.snapshot = t), Fd(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Nf(n) {
  let e = Sy(n),
    t = new Gt([new On("", {})]),
    i = new Gt({}),
    r = new Gt({}),
    a = new Gt({}),
    c = new Gt(""),
    h = new br(t, i, a, c, r, pt, n, e.root);
  return (h.snapshot = e.root), new xa(new Ae(h, []), e);
}
function Sy(n) {
  let e = {},
    t = {},
    i = {},
    r = "",
    a = new fr([], e, i, r, t, pt, n, null, {});
  return new Ea("", new Ae(a, []));
}
var br = class {
  constructor(e, t, i, r, a, c, h, f) {
    (this.urlSubject = e),
      (this.paramsSubject = t),
      (this.queryParamsSubject = i),
      (this.fragmentSubject = r),
      (this.dataSubject = a),
      (this.outlet = c),
      (this.component = h),
      (this._futureSnapshot = f),
      (this.title = this.dataSubject?.pipe(Q((b) => b[Uo])) ?? W(void 0)),
      (this.url = e),
      (this.params = t),
      (this.queryParams = i),
      (this.fragment = r),
      (this.data = a);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(Q((e) => gr(e)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(Q((e) => gr(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Ca(n, e, t = "emptyOnly") {
  let i,
    { routeConfig: r } = n;
  return (
    e !== null &&
    (t === "always" ||
      r?.path === "" ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (i = {
          params: C(C({}, e.params), n.params),
          data: C(C({}, e.data), n.data),
          resolve: C(C(C(C({}, n.data), e.data), r?.data), n._resolvedData),
        })
      : (i = {
          params: C({}, n.params),
          data: C({}, n.data),
          resolve: C(C({}, n.data), n._resolvedData ?? {}),
        }),
    r && Vf(r) && (i.resolve[Uo] = r.title),
    i
  );
}
var fr = class {
    get title() {
      return this.data?.[Uo];
    }
    constructor(e, t, i, r, a, c, h, f, b) {
      (this.url = e),
        (this.params = t),
        (this.queryParams = i),
        (this.fragment = r),
        (this.data = a),
        (this.outlet = c),
        (this.component = h),
        (this.routeConfig = f),
        (this._resolve = b);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= gr(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= gr(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map((i) => i.toString()).join("/"),
        t = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${e}', path:'${t}')`;
    }
  },
  Ea = class extends wa {
    constructor(e, t) {
      super(t), (this.url = e), Fd(this, t);
    }
    toString() {
      return jf(this._root);
    }
  };
function Fd(n, e) {
  (e.value._routerState = n), e.children.forEach((t) => Fd(n, t));
}
function jf(n) {
  let e = n.children.length > 0 ? ` { ${n.children.map(jf).join(", ")} } ` : "";
  return `${n.value}${e}`;
}
function rd(n) {
  if (n.snapshot) {
    let e = n.snapshot,
      t = n._futureSnapshot;
    (n.snapshot = t),
      di(e.queryParams, t.queryParams) ||
        n.queryParamsSubject.next(t.queryParams),
      e.fragment !== t.fragment && n.fragmentSubject.next(t.fragment),
      di(e.params, t.params) || n.paramsSubject.next(t.params),
      ey(e.url, t.url) || n.urlSubject.next(t.url),
      di(e.data, t.data) || n.dataSubject.next(t.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function Id(n, e) {
  let t = di(n.params, e.params) && oy(n.url, e.url),
    i = !n.parent != !e.parent;
  return t && !i && (!n.parent || Id(n.parent, e.parent));
}
function Vf(n) {
  return typeof n.title == "string" || n.title === null;
}
var Pd = (() => {
    class n {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = pt),
          (this.activateEvents = new St()),
          (this.deactivateEvents = new St()),
          (this.attachEvents = new St()),
          (this.detachEvents = new St()),
          (this.parentContexts = B(Aa)),
          (this.location = B(ar)),
          (this.changeDetector = B(ye)),
          (this.inputBinder = B(Ld, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: i, previousValue: r } = t.name;
          if (i) return;
          this.isTrackedInParentContexts(r) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new Et(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new Et(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new Et(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, i) {
        (this.activated = t),
          (this._activatedRoute = i),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, i) {
        if (this.isActivated) throw new Et(4013, !1);
        this._activatedRoute = t;
        let r = this.location,
          c = t.snapshot.component,
          h = this.parentContexts.getOrCreateContext(this.name).children,
          f = new Dd(t, h, r.injector);
        (this.activated = r.createComponent(c, {
          index: r.length,
          injector: f,
          environmentInjector: i,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["router-outlet"]],
          inputs: { name: "name" },
          outputs: {
            activateEvents: "activate",
            deactivateEvents: "deactivate",
            attachEvents: "attach",
            detachEvents: "detach",
          },
          exportAs: ["outlet"],
          standalone: !0,
          features: [Ie],
        });
      }
    }
    return n;
  })(),
  Dd = class n {
    __ngOutletInjector(e) {
      return new n(this.route, this.childContexts, e);
    }
    constructor(e, t, i) {
      (this.route = e), (this.childContexts = t), (this.parent = i);
    }
    get(e, t) {
      return e === br
        ? this.route
        : e === Aa
          ? this.childContexts
          : this.parent.get(e, t);
    }
  },
  Ld = new Y("");
function ky(n, e, t) {
  let i = jo(n, e._root, t ? t._root : void 0);
  return new xa(i, e);
}
function jo(n, e, t) {
  if (t && n.shouldReuseRoute(e.value, t.value.snapshot)) {
    let i = t.value;
    i._futureSnapshot = e.value;
    let r = My(n, e, t);
    return new Ae(i, r);
  } else {
    if (n.shouldAttach(e.value)) {
      let a = n.retrieve(e.value);
      if (a !== null) {
        let c = a.route;
        return (
          (c.value._futureSnapshot = e.value),
          (c.children = e.children.map((h) => jo(n, h))),
          c
        );
      }
    }
    let i = Ry(e.value),
      r = e.children.map((a) => jo(n, a));
    return new Ae(i, r);
  }
}
function My(n, e, t) {
  return e.children.map((i) => {
    for (let r of t.children)
      if (n.shouldReuseRoute(i.value, r.value.snapshot)) return jo(n, i, r);
    return jo(n, i);
  });
}
function Ry(n) {
  return new br(
    new Gt(n.url),
    new Gt(n.params),
    new Gt(n.queryParams),
    new Gt(n.fragment),
    new Gt(n.data),
    n.outlet,
    n.component,
    n,
  );
}
var Vo = class {
    constructor(e, t) {
      (this.redirectTo = e), (this.navigationBehaviorOptions = t);
    }
  },
  Bf = "ngNavigationCancelingError";
function Ia(n, e) {
  let { redirectTo: t, navigationBehaviorOptions: i } = Oo(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    r = zf(!1, Se.Redirect);
  return (r.url = t), (r.navigationBehaviorOptions = i), r;
}
function zf(n, e) {
  let t = new Error(`NavigationCancelingError: ${n || ""}`);
  return (t[Bf] = !0), (t.cancellationCode = e), t;
}
function Ty(n) {
  return Uf(n) && Oo(n.url);
}
function Uf(n) {
  return !!n && n[Bf];
}
var Oy = (n, e, t, i) =>
    Q(
      (r) => (
        new Ad(e, r.targetRouterState, r.currentRouterState, t, i).activate(n),
        r
      ),
    ),
  Ad = class {
    constructor(e, t, i, r, a) {
      (this.routeReuseStrategy = e),
        (this.futureState = t),
        (this.currState = i),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = a);
    }
    activate(e) {
      let t = this.futureState._root,
        i = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(t, i, e),
        rd(this.futureState.root),
        this.activateChildRoutes(t, i, e);
    }
    deactivateChildRoutes(e, t, i) {
      let r = hr(t);
      e.children.forEach((a) => {
        let c = a.value.outlet;
        this.deactivateRoutes(a, r[c], i), delete r[c];
      }),
        Object.values(r).forEach((a) => {
          this.deactivateRouteAndItsChildren(a, i);
        });
    }
    deactivateRoutes(e, t, i) {
      let r = e.value,
        a = t ? t.value : null;
      if (r === a)
        if (r.component) {
          let c = i.getContext(r.outlet);
          c && this.deactivateChildRoutes(e, t, c.children);
        } else this.deactivateChildRoutes(e, t, i);
      else a && this.deactivateRouteAndItsChildren(t, i);
    }
    deactivateRouteAndItsChildren(e, t) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, t)
        : this.deactivateRouteAndOutlet(e, t);
    }
    detachAndStoreRouteSubtree(e, t) {
      let i = t.getContext(e.value.outlet),
        r = i && e.value.component ? i.children : t,
        a = hr(e);
      for (let c of Object.values(a)) this.deactivateRouteAndItsChildren(c, r);
      if (i && i.outlet) {
        let c = i.outlet.detach(),
          h = i.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: c,
          route: e,
          contexts: h,
        });
      }
    }
    deactivateRouteAndOutlet(e, t) {
      let i = t.getContext(e.value.outlet),
        r = i && e.value.component ? i.children : t,
        a = hr(e);
      for (let c of Object.values(a)) this.deactivateRouteAndItsChildren(c, r);
      i &&
        (i.outlet && (i.outlet.deactivate(), i.children.onOutletDeactivated()),
        (i.attachRef = null),
        (i.route = null));
    }
    activateChildRoutes(e, t, i) {
      let r = hr(t);
      e.children.forEach((a) => {
        this.activateRoutes(a, r[a.value.outlet], i),
          this.forwardEvent(new wd(a.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new _d(e.value.snapshot));
    }
    activateRoutes(e, t, i) {
      let r = e.value,
        a = t ? t.value : null;
      if ((rd(r), r === a))
        if (r.component) {
          let c = i.getOrCreateContext(r.outlet);
          this.activateChildRoutes(e, t, c.children);
        } else this.activateChildRoutes(e, t, i);
      else if (r.component) {
        let c = i.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let h = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            c.children.onOutletReAttached(h.contexts),
            (c.attachRef = h.componentRef),
            (c.route = h.route.value),
            c.outlet && c.outlet.attach(h.componentRef, h.route.value),
            rd(h.route.value),
            this.activateChildRoutes(e, null, c.children);
        } else
          (c.attachRef = null),
            (c.route = r),
            c.outlet && c.outlet.activateWith(r, c.injector),
            this.activateChildRoutes(e, null, c.children);
      } else this.activateChildRoutes(e, null, i);
    }
  },
  Da = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  pr = class {
    constructor(e, t) {
      (this.component = e), (this.route = t);
    }
  };
function Fy(n, e, t) {
  let i = n._root,
    r = e ? e._root : null;
  return Ao(i, r, t, [i.value]);
}
function Py(n) {
  let e = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: n, guards: e };
}
function yr(n, e) {
  let t = Symbol(),
    i = e.get(n, t);
  return i === t ? (typeof n == "function" && !mm(n) ? n : e.get(n)) : i;
}
function Ao(
  n,
  e,
  t,
  i,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let a = hr(e);
  return (
    n.children.forEach((c) => {
      Ly(c, a[c.value.outlet], t, i.concat([c.value]), r),
        delete a[c.value.outlet];
    }),
    Object.entries(a).forEach(([c, h]) => Ro(h, t.getContext(c), r)),
    r
  );
}
function Ly(
  n,
  e,
  t,
  i,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let a = n.value,
    c = e ? e.value : null,
    h = t ? t.getContext(n.value.outlet) : null;
  if (c && a.routeConfig === c.routeConfig) {
    let f = Ny(c, a, a.routeConfig.runGuardsAndResolvers);
    f
      ? r.canActivateChecks.push(new Da(i))
      : ((a.data = c.data), (a._resolvedData = c._resolvedData)),
      a.component ? Ao(n, e, h ? h.children : null, i, r) : Ao(n, e, t, i, r),
      f &&
        h &&
        h.outlet &&
        h.outlet.isActivated &&
        r.canDeactivateChecks.push(new pr(h.outlet.component, c));
  } else
    c && Ro(e, h, r),
      r.canActivateChecks.push(new Da(i)),
      a.component
        ? Ao(n, null, h ? h.children : null, i, r)
        : Ao(n, null, t, i, r);
  return r;
}
function Ny(n, e, t) {
  if (typeof t == "function") return t(n, e);
  switch (t) {
    case "pathParamsChange":
      return !Fn(n.url, e.url);
    case "pathParamsOrQueryParamsChange":
      return !Fn(n.url, e.url) || !di(n.queryParams, e.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Id(n, e) || !di(n.queryParams, e.queryParams);
    case "paramsChange":
    default:
      return !Id(n, e);
  }
}
function Ro(n, e, t) {
  let i = hr(n),
    r = n.value;
  Object.entries(i).forEach(([a, c]) => {
    r.component
      ? e
        ? Ro(c, e.children.getContext(a), t)
        : Ro(c, null, t)
      : Ro(c, e, t);
  }),
    r.component
      ? e && e.outlet && e.outlet.isActivated
        ? t.canDeactivateChecks.push(new pr(e.outlet.component, r))
        : t.canDeactivateChecks.push(new pr(null, r))
      : t.canDeactivateChecks.push(new pr(null, r));
}
function $o(n) {
  return typeof n == "function";
}
function jy(n) {
  return typeof n == "boolean";
}
function Vy(n) {
  return n && $o(n.canLoad);
}
function By(n) {
  return n && $o(n.canActivate);
}
function zy(n) {
  return n && $o(n.canActivateChild);
}
function Uy(n) {
  return n && $o(n.canDeactivate);
}
function Hy(n) {
  return n && $o(n.canMatch);
}
function Hf(n) {
  return n instanceof am || n?.name === "EmptyError";
}
var fa = Symbol("INITIAL_VALUE");
function _r() {
  return Ut((n) =>
    lo(n.map((e) => e.pipe(Lt(1), vi(fa)))).pipe(
      Q((e) => {
        for (let t of e)
          if (t !== !0) {
            if (t === fa) return fa;
            if (t === !1 || $y(t)) return t;
          }
        return !0;
      }),
      Ct((e) => e !== fa),
      Lt(1),
    ),
  );
}
function $y(n) {
  return Oo(n) || n instanceof Vo;
}
function Ky(n, e) {
  return Te((t) => {
    let {
      targetSnapshot: i,
      currentSnapshot: r,
      guards: { canActivateChecks: a, canDeactivateChecks: c },
    } = t;
    return c.length === 0 && a.length === 0
      ? W(Z(C({}, t), { guardsResult: !0 }))
      : Wy(c, i, r, n).pipe(
          Te((h) => (h && jy(h) ? Gy(i, a, n, e) : W(h))),
          Q((h) => Z(C({}, t), { guardsResult: h })),
        );
  });
}
function Wy(n, e, t, i) {
  return oe(n).pipe(
    Te((r) => Xy(r.component, r.route, t, e, i)),
    Wi((r) => r !== !0, !0),
  );
}
function Gy(n, e, t, i) {
  return oe(e).pipe(
    gi((r) =>
      Sn(
        Yy(r.route.parent, i),
        qy(r.route, i),
        Zy(n, r.path, t),
        Qy(n, r.route, t),
      ),
    ),
    Wi((r) => r !== !0, !0),
  );
}
function qy(n, e) {
  return n !== null && e && e(new yd(n)), W(!0);
}
function Yy(n, e) {
  return n !== null && e && e(new bd(n)), W(!0);
}
function Qy(n, e, t) {
  let i = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!i || i.length === 0) return W(!0);
  let r = i.map((a) =>
    ci(() => {
      let c = Ho(e) ?? t,
        h = yr(a, c),
        f = By(h) ? h.canActivate(e, n) : Ge(c, () => h(e, n));
      return en(f).pipe(Wi());
    }),
  );
  return W(r).pipe(_r());
}
function Zy(n, e, t) {
  let i = e[e.length - 1],
    a = e
      .slice(0, e.length - 1)
      .reverse()
      .map((c) => Py(c))
      .filter((c) => c !== null)
      .map((c) =>
        ci(() => {
          let h = c.guards.map((f) => {
            let b = Ho(c.node) ?? t,
              y = yr(f, b),
              D = zy(y) ? y.canActivateChild(i, n) : Ge(b, () => y(i, n));
            return en(D).pipe(Wi());
          });
          return W(h).pipe(_r());
        }),
      );
  return W(a).pipe(_r());
}
function Xy(n, e, t, i, r) {
  let a = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!a || a.length === 0) return W(!0);
  let c = a.map((h) => {
    let f = Ho(e) ?? r,
      b = yr(h, f),
      y = Uy(b) ? b.canDeactivate(n, e, t, i) : Ge(f, () => b(n, e, t, i));
    return en(y).pipe(Wi());
  });
  return W(c).pipe(_r());
}
function Jy(n, e, t, i) {
  let r = e.canLoad;
  if (r === void 0 || r.length === 0) return W(!0);
  let a = r.map((c) => {
    let h = yr(c, n),
      f = Vy(h) ? h.canLoad(e, t) : Ge(n, () => h(e, t));
    return en(f);
  });
  return W(a).pipe(_r(), $f(i));
}
function $f(n) {
  return sm(
    Vt((e) => {
      if (typeof e != "boolean") throw Ia(n, e);
    }),
    Q((e) => e === !0),
  );
}
function t0(n, e, t, i) {
  let r = e.canMatch;
  if (!r || r.length === 0) return W(!0);
  let a = r.map((c) => {
    let h = yr(c, n),
      f = Hy(h) ? h.canMatch(e, t) : Ge(n, () => h(e, t));
    return en(f);
  });
  return W(a).pipe(_r(), $f(i));
}
var Bo = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  zo = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function ur(n) {
  return An(new Bo(n));
}
function e0(n) {
  return An(new Et(4e3, !1));
}
function i0(n) {
  return An(zf(!1, Se.GuardRejected));
}
var Sd = class {
    constructor(e, t) {
      (this.urlSerializer = e), (this.urlTree = t);
    }
    lineralizeSegments(e, t) {
      let i = [],
        r = t.root;
      for (;;) {
        if (((i = i.concat(r.segments)), r.numberOfChildren === 0)) return W(i);
        if (r.numberOfChildren > 1 || !r.children[pt])
          return e0(`${e.redirectTo}`);
        r = r.children[pt];
      }
    }
    applyRedirectCommands(e, t, i, r, a) {
      if (typeof t != "string") {
        let h = t,
          {
            queryParams: f,
            fragment: b,
            routeConfig: y,
            url: D,
            outlet: U,
            params: z,
            data: G,
            title: H,
          } = r,
          it = Ge(a, () =>
            h({
              params: z,
              data: G,
              queryParams: f,
              fragment: b,
              routeConfig: y,
              url: D,
              outlet: U,
              title: H,
            }),
          );
        if (it instanceof Ei) throw new zo(it);
        t = it;
      }
      let c = this.applyRedirectCreateUrlTree(
        t,
        this.urlSerializer.parse(t),
        e,
        i,
      );
      if (t[0] === "/") throw new zo(c);
      return c;
    }
    applyRedirectCreateUrlTree(e, t, i, r) {
      let a = this.createSegmentGroup(e, t.root, i, r);
      return new Ei(
        a,
        this.createQueryParams(t.queryParams, this.urlTree.queryParams),
        t.fragment,
      );
    }
    createQueryParams(e, t) {
      let i = {};
      return (
        Object.entries(e).forEach(([r, a]) => {
          if (typeof a == "string" && a[0] === ":") {
            let h = a.substring(1);
            i[r] = t[h];
          } else i[r] = a;
        }),
        i
      );
    }
    createSegmentGroup(e, t, i, r) {
      let a = this.createSegments(e, t.segments, i, r),
        c = {};
      return (
        Object.entries(t.children).forEach(([h, f]) => {
          c[h] = this.createSegmentGroup(e, f, i, r);
        }),
        new xt(a, c)
      );
    }
    createSegments(e, t, i, r) {
      return t.map((a) =>
        a.path[0] === ":"
          ? this.findPosParam(e, a, r)
          : this.findOrReturn(a, i),
      );
    }
    findPosParam(e, t, i) {
      let r = i[t.path.substring(1)];
      if (!r) throw new Et(4001, !1);
      return r;
    }
    findOrReturn(e, t) {
      let i = 0;
      for (let r of t) {
        if (r.path === e.path) return t.splice(i), r;
        i++;
      }
      return e;
    }
  },
  kd = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function n0(n, e, t, i, r) {
  let a = Kf(n, e, t);
  return a.matched
    ? ((i = Dy(e, i)),
      t0(i, e, t, r).pipe(Q((c) => (c === !0 ? a : C({}, kd)))))
    : W(a);
}
function Kf(n, e, t) {
  if (e.path === "**") return r0(t);
  if (e.path === "")
    return e.pathMatch === "full" && (n.hasChildren() || t.length > 0)
      ? C({}, kd)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: t,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (e.matcher || ty)(t, n, e);
  if (!r) return C({}, kd);
  let a = {};
  Object.entries(r.posParams ?? {}).forEach(([h, f]) => {
    a[h] = f.path;
  });
  let c =
    r.consumed.length > 0
      ? C(C({}, a), r.consumed[r.consumed.length - 1].parameters)
      : a;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: t.slice(r.consumed.length),
    parameters: c,
    positionalParamSegments: r.posParams ?? {},
  };
}
function r0(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? Ef(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function yf(n, e, t, i) {
  return t.length > 0 && a0(n, t, i)
    ? {
        segmentGroup: new xt(e, s0(i, new xt(t, n.children))),
        slicedSegments: [],
      }
    : t.length === 0 && l0(n, t, i)
      ? {
          segmentGroup: new xt(n.segments, o0(n, t, i, n.children)),
          slicedSegments: t,
        }
      : { segmentGroup: new xt(n.segments, n.children), slicedSegments: t };
}
function o0(n, e, t, i) {
  let r = {};
  for (let a of t)
    if (Sa(n, e, a) && !i[Je(a)]) {
      let c = new xt([], {});
      r[Je(a)] = c;
    }
  return C(C({}, i), r);
}
function s0(n, e) {
  let t = {};
  t[pt] = e;
  for (let i of n)
    if (i.path === "" && Je(i) !== pt) {
      let r = new xt([], {});
      t[Je(i)] = r;
    }
  return t;
}
function a0(n, e, t) {
  return t.some((i) => Sa(n, e, i) && Je(i) !== pt);
}
function l0(n, e, t) {
  return t.some((i) => Sa(n, e, i));
}
function Sa(n, e, t) {
  return (n.hasChildren() || e.length > 0) && t.pathMatch === "full"
    ? !1
    : t.path === "";
}
function c0(n, e, t) {
  return e.length === 0 && !n.children[t];
}
var Md = class {};
function d0(n, e, t, i, r, a, c = "emptyOnly") {
  return new Rd(n, e, t, i, r, c, a).recognize();
}
var u0 = 31,
  Rd = class {
    constructor(e, t, i, r, a, c, h) {
      (this.injector = e),
        (this.configLoader = t),
        (this.rootComponentType = i),
        (this.config = r),
        (this.urlTree = a),
        (this.paramsInheritanceStrategy = c),
        (this.urlSerializer = h),
        (this.applyRedirects = new Sd(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new Et(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = yf(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        Q(({ children: t, rootSnapshot: i }) => {
          let r = new Ae(i, t),
            a = new Ea("", r),
            c = _y(i, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (c.queryParams = this.urlTree.queryParams),
            (a.url = this.urlSerializer.serialize(c)),
            { state: a, tree: c }
          );
        }),
      );
    }
    match(e) {
      let t = new fr(
        [],
        Object.freeze({}),
        Object.freeze(C({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        pt,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(
        this.injector,
        this.config,
        e,
        pt,
        t,
      ).pipe(
        Q((i) => ({ children: i, rootSnapshot: t })),
        $i((i) => {
          if (i instanceof zo)
            return (this.urlTree = i.urlTree), this.match(i.urlTree.root);
          throw i instanceof Bo ? this.noMatchError(i) : i;
        }),
      );
    }
    processSegmentGroup(e, t, i, r, a) {
      return i.segments.length === 0 && i.hasChildren()
        ? this.processChildren(e, t, i, a)
        : this.processSegment(e, t, i, i.segments, r, !0, a).pipe(
            Q((c) => (c instanceof Ae ? [c] : [])),
          );
    }
    processChildren(e, t, i, r) {
      let a = [];
      for (let c of Object.keys(i.children))
        c === "primary" ? a.unshift(c) : a.push(c);
      return oe(a).pipe(
        gi((c) => {
          let h = i.children[c],
            f = Ay(t, c);
          return this.processSegmentGroup(e, f, h, c, r);
        }),
        um((c, h) => (c.push(...h), c)),
        Mc(null),
        dm(),
        Te((c) => {
          if (c === null) return ur(i);
          let h = Wf(c);
          return h0(h), W(h);
        }),
      );
    }
    processSegment(e, t, i, r, a, c, h) {
      return oe(t).pipe(
        gi((f) =>
          this.processSegmentAgainstRoute(
            f._injector ?? e,
            t,
            f,
            i,
            r,
            a,
            c,
            h,
          ).pipe(
            $i((b) => {
              if (b instanceof Bo) return W(null);
              throw b;
            }),
          ),
        ),
        Wi((f) => !!f),
        $i((f) => {
          if (Hf(f)) return c0(i, r, a) ? W(new Md()) : ur(i);
          throw f;
        }),
      );
    }
    processSegmentAgainstRoute(e, t, i, r, a, c, h, f) {
      return Je(i) !== c && (c === pt || !Sa(r, a, i))
        ? ur(r)
        : i.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(e, r, i, a, c, f)
          : this.allowRedirects && h
            ? this.expandSegmentAgainstRouteUsingRedirect(e, r, t, i, a, c, f)
            : ur(r);
    }
    expandSegmentAgainstRouteUsingRedirect(e, t, i, r, a, c, h) {
      let {
        matched: f,
        parameters: b,
        consumedSegments: y,
        positionalParamSegments: D,
        remainingSegments: U,
      } = Kf(t, r, a);
      if (!f) return ur(t);
      typeof r.redirectTo == "string" &&
        r.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > u0 && (this.allowRedirects = !1));
      let z = new fr(
          a,
          b,
          Object.freeze(C({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          wf(r),
          Je(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          xf(r),
        ),
        G = Ca(z, h, this.paramsInheritanceStrategy);
      (z.params = Object.freeze(G.params)), (z.data = Object.freeze(G.data));
      let H = this.applyRedirects.applyRedirectCommands(
        y,
        r.redirectTo,
        D,
        z,
        e,
      );
      return this.applyRedirects
        .lineralizeSegments(r, H)
        .pipe(Te((it) => this.processSegment(e, i, t, it.concat(U), c, !1, h)));
    }
    matchSegmentAgainstRoute(e, t, i, r, a, c) {
      let h = n0(t, i, r, e, this.urlSerializer);
      return (
        i.path === "**" && (t.children = {}),
        h.pipe(
          Ut((f) =>
            f.matched
              ? ((e = i._injector ?? e),
                this.getChildConfig(e, i, r).pipe(
                  Ut(({ routes: b }) => {
                    let y = i._loadedInjector ?? e,
                      {
                        parameters: D,
                        consumedSegments: U,
                        remainingSegments: z,
                      } = f,
                      G = new fr(
                        U,
                        D,
                        Object.freeze(C({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        wf(i),
                        Je(i),
                        i.component ?? i._loadedComponent ?? null,
                        i,
                        xf(i),
                      ),
                      H = Ca(G, c, this.paramsInheritanceStrategy);
                    (G.params = Object.freeze(H.params)),
                      (G.data = Object.freeze(H.data));
                    let { segmentGroup: it, slicedSegments: Ft } = yf(
                      t,
                      U,
                      z,
                      b,
                    );
                    if (Ft.length === 0 && it.hasChildren())
                      return this.processChildren(y, b, it, G).pipe(
                        Q((It) => new Ae(G, It)),
                      );
                    if (b.length === 0 && Ft.length === 0)
                      return W(new Ae(G, []));
                    let Kt = Je(i) === a;
                    return this.processSegment(
                      y,
                      b,
                      it,
                      Ft,
                      Kt ? pt : a,
                      !0,
                      G,
                    ).pipe(Q((It) => new Ae(G, It instanceof Ae ? [It] : [])));
                  }),
                ))
              : ur(t),
          ),
        )
      );
    }
    getChildConfig(e, t, i) {
      return t.children
        ? W({ routes: t.children, injector: e })
        : t.loadChildren
          ? t._loadedRoutes !== void 0
            ? W({ routes: t._loadedRoutes, injector: t._loadedInjector })
            : Jy(e, t, i, this.urlSerializer).pipe(
                Te((r) =>
                  r
                    ? this.configLoader.loadChildren(e, t).pipe(
                        Vt((a) => {
                          (t._loadedRoutes = a.routes),
                            (t._loadedInjector = a.injector);
                        }),
                      )
                    : i0(t),
                ),
              )
          : W({ routes: [], injector: e });
    }
  };
function h0(n) {
  n.sort((e, t) =>
    e.value.outlet === pt
      ? -1
      : t.value.outlet === pt
        ? 1
        : e.value.outlet.localeCompare(t.value.outlet),
  );
}
function m0(n) {
  let e = n.value.routeConfig;
  return e && e.path === "";
}
function Wf(n) {
  let e = [],
    t = new Set();
  for (let i of n) {
    if (!m0(i)) {
      e.push(i);
      continue;
    }
    let r = e.find((a) => i.value.routeConfig === a.value.routeConfig);
    r !== void 0 ? (r.children.push(...i.children), t.add(r)) : e.push(i);
  }
  for (let i of t) {
    let r = Wf(i.children);
    e.push(new Ae(i.value, r));
  }
  return e.filter((i) => !t.has(i));
}
function wf(n) {
  return n.data || {};
}
function xf(n) {
  return n.resolve || {};
}
function f0(n, e, t, i, r, a) {
  return Te((c) =>
    d0(n, e, t, i, c.extractedUrl, r, a).pipe(
      Q(({ state: h, tree: f }) =>
        Z(C({}, c), { targetSnapshot: h, urlAfterRedirects: f }),
      ),
    ),
  );
}
function p0(n, e) {
  return Te((t) => {
    let {
      targetSnapshot: i,
      guards: { canActivateChecks: r },
    } = t;
    if (!r.length) return W(t);
    let a = new Set(r.map((f) => f.route)),
      c = new Set();
    for (let f of a) if (!c.has(f)) for (let b of Gf(f)) c.add(b);
    let h = 0;
    return oe(c).pipe(
      gi((f) =>
        a.has(f)
          ? g0(f, i, n, e)
          : ((f.data = Ca(f, f.parent, n).resolve), W(void 0)),
      ),
      Vt(() => h++),
      Rc(1),
      Te((f) => (h === c.size ? W(t) : li)),
    );
  });
}
function Gf(n) {
  let e = n.children.map((t) => Gf(t)).flat();
  return [n, ...e];
}
function g0(n, e, t, i) {
  let r = n.routeConfig,
    a = n._resolve;
  return (
    r?.title !== void 0 && !Vf(r) && (a[Uo] = r.title),
    v0(a, n, e, i).pipe(
      Q(
        (c) => (
          (n._resolvedData = c), (n.data = Ca(n, n.parent, t).resolve), null
        ),
      ),
    )
  );
}
function v0(n, e, t, i) {
  let r = ad(n);
  if (r.length === 0) return W({});
  let a = {};
  return oe(r).pipe(
    Te((c) =>
      b0(n[c], e, t, i).pipe(
        Wi(),
        Vt((h) => {
          if (h instanceof Vo) throw Ia(new To(), h);
          a[c] = h;
        }),
      ),
    ),
    Rc(1),
    lm(a),
    $i((c) => (Hf(c) ? li : An(c))),
  );
}
function b0(n, e, t, i) {
  let r = Ho(e) ?? i,
    a = yr(n, r),
    c = a.resolve ? a.resolve(e, t) : Ge(r, () => a(e, t));
  return en(c);
}
function od(n) {
  return Ut((e) => {
    let t = n(e);
    return t ? oe(t).pipe(Q(() => e)) : W(e);
  });
}
var qf = (() => {
    class n {
      buildTitle(t) {
        let i,
          r = t.root;
        for (; r !== void 0; )
          (i = this.getResolvedTitleForRoute(r) ?? i),
            (r = r.children.find((a) => a.outlet === pt));
        return i;
      }
      getResolvedTitleForRoute(t) {
        return t.data[Uo];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: () => B(_0), providedIn: "root" });
      }
    }
    return n;
  })(),
  _0 = (() => {
    class n extends qf {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let i = this.buildTitle(t);
        i !== void 0 && this.title.setTitle(i);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(ff));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Nd = new Y("", { providedIn: "root", factory: () => ({}) }),
  y0 = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["ng-component"]],
          standalone: !0,
          features: [Tt],
          decls: 1,
          vars: 0,
          template: function (i, r) {
            i & 1 && qt(0, "router-outlet");
          },
          dependencies: [Pd],
          encapsulation: 2,
        });
      }
    }
    return n;
  })();
function jd(n) {
  let e = n.children && n.children.map(jd),
    t = e ? Z(C({}, n), { children: e }) : C({}, n);
  return (
    !t.component &&
      !t.loadComponent &&
      (e || t.loadChildren) &&
      t.outlet &&
      t.outlet !== pt &&
      (t.component = y0),
    t
  );
}
var Vd = new Y(""),
  w0 = (() => {
    class n {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = B(Vc));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return W(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let i = en(t.loadComponent()).pipe(
            Q(Yf),
            Vt((a) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = a);
            }),
            Ki(() => {
              this.componentLoaders.delete(t);
            }),
          ),
          r = new Ac(i, () => new et()).pipe(Dc());
        return this.componentLoaders.set(t, r), r;
      }
      loadChildren(t, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return W({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let a = x0(i, this.compiler, t, this.onLoadEndListener).pipe(
            Ki(() => {
              this.childrenLoaders.delete(i);
            }),
          ),
          c = new Ac(a, () => new et()).pipe(Dc());
        return this.childrenLoaders.set(i, c), c;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function x0(n, e, t, i) {
  return en(n.loadChildren()).pipe(
    Q(Yf),
    Te((r) =>
      r instanceof km || Array.isArray(r) ? W(r) : oe(e.compileModuleAsync(r)),
    ),
    Q((r) => {
      i && i(n);
      let a,
        c,
        h = !1;
      return (
        Array.isArray(r)
          ? ((c = r), (h = !0))
          : ((a = r.create(t).injector),
            (c = a.get(Vd, [], { optional: !0, self: !0 }).flat())),
        { routes: c.map(jd), injector: a }
      );
    }),
  );
}
function C0(n) {
  return n && typeof n == "object" && "default" in n;
}
function Yf(n) {
  return C0(n) ? n.default : n;
}
var Bd = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: () => B(E0), providedIn: "root" });
      }
    }
    return n;
  })(),
  E0 = (() => {
    class n {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, i) {
        return t;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  I0 = new Y("");
var D0 = new Y(""),
  A0 = (() => {
    class n {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new et()),
          (this.transitionAbortSubject = new et()),
          (this.configLoader = B(w0)),
          (this.environmentInjector = B(Gi)),
          (this.urlSerializer = B(Od)),
          (this.rootContexts = B(Aa)),
          (this.location = B(Zi)),
          (this.inputBindingEnabled = B(Ld, { optional: !0 }) !== null),
          (this.titleStrategy = B(qf)),
          (this.options = B(Nd, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = B(Bd)),
          (this.createViewTransition = B(I0, { optional: !0 })),
          (this.navigationErrorHandler = B(D0, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => W(void 0)),
          (this.rootComponentType = null);
        let t = (r) => this.events.next(new gd(r)),
          i = (r) => this.events.next(new vd(r));
        (this.configLoader.onLoadEndListener = i),
          (this.configLoader.onLoadStartListener = t);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(t) {
        let i = ++this.navigationId;
        this.transitions?.next(
          Z(C(C({}, this.transitions.value), t), { id: i }),
        );
      }
      setupNavigations(t, i, r) {
        return (
          (this.transitions = new Gt({
            id: 0,
            currentUrlTree: i,
            currentRawUrl: i,
            extractedUrl: this.urlHandlingStrategy.extract(i),
            urlAfterRedirects: this.urlHandlingStrategy.extract(i),
            rawUrl: i,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: Mo,
            restoredState: null,
            currentSnapshot: r.snapshot,
            targetSnapshot: null,
            currentRouterState: r,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Ct((a) => a.id !== 0),
            Q((a) =>
              Z(C({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              }),
            ),
            Ut((a) => {
              let c = !1,
                h = !1;
              return W(a).pipe(
                Ut((f) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        Se.SupersededByNewNavigation,
                      ),
                      li
                    );
                  (this.currentTransition = a),
                    (this.currentNavigation = {
                      id: f.id,
                      initialUrl: f.rawUrl,
                      extractedUrl: f.extractedUrl,
                      targetBrowserUrl:
                        typeof f.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(f.extras.browserUrl)
                          : f.extras.browserUrl,
                      trigger: f.source,
                      extras: f.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Z(C({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let b =
                      !t.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    y = f.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                  if (!b && y !== "reload") {
                    let D = "";
                    return (
                      this.events.next(
                        new Ln(
                          f.id,
                          this.urlSerializer.serialize(f.rawUrl),
                          D,
                          ud.IgnoredSameUrlNavigation,
                        ),
                      ),
                      f.resolve(!1),
                      li
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(f.rawUrl))
                    return W(f).pipe(
                      Ut((D) => {
                        let U = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new Po(
                              D.id,
                              this.urlSerializer.serialize(D.extractedUrl),
                              D.source,
                              D.restoredState,
                            ),
                          ),
                          U !== this.transitions?.getValue()
                            ? li
                            : Promise.resolve(D)
                        );
                      }),
                      f0(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        t.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      Vt((D) => {
                        (a.targetSnapshot = D.targetSnapshot),
                          (a.urlAfterRedirects = D.urlAfterRedirects),
                          (this.currentNavigation = Z(
                            C({}, this.currentNavigation),
                            { finalUrl: D.urlAfterRedirects },
                          ));
                        let U = new ya(
                          D.id,
                          this.urlSerializer.serialize(D.extractedUrl),
                          this.urlSerializer.serialize(D.urlAfterRedirects),
                          D.targetSnapshot,
                        );
                        this.events.next(U);
                      }),
                    );
                  if (
                    b &&
                    this.urlHandlingStrategy.shouldProcessUrl(f.currentRawUrl)
                  ) {
                    let {
                        id: D,
                        extractedUrl: U,
                        source: z,
                        restoredState: G,
                        extras: H,
                      } = f,
                      it = new Po(D, this.urlSerializer.serialize(U), z, G);
                    this.events.next(it);
                    let Ft = Nf(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        Z(C({}, f), {
                          targetSnapshot: Ft,
                          urlAfterRedirects: U,
                          extras: Z(C({}, H), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = U),
                      W(a)
                    );
                  } else {
                    let D = "";
                    return (
                      this.events.next(
                        new Ln(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          D,
                          ud.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      f.resolve(!1),
                      li
                    );
                  }
                }),
                Vt((f) => {
                  let b = new hd(
                    f.id,
                    this.urlSerializer.serialize(f.extractedUrl),
                    this.urlSerializer.serialize(f.urlAfterRedirects),
                    f.targetSnapshot,
                  );
                  this.events.next(b);
                }),
                Q(
                  (f) => (
                    (this.currentTransition = a =
                      Z(C({}, f), {
                        guards: Fy(
                          f.targetSnapshot,
                          f.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    a
                  ),
                ),
                Ky(this.environmentInjector, (f) => this.events.next(f)),
                Vt((f) => {
                  if (
                    ((a.guardsResult = f.guardsResult),
                    f.guardsResult && typeof f.guardsResult != "boolean")
                  )
                    throw Ia(this.urlSerializer, f.guardsResult);
                  let b = new md(
                    f.id,
                    this.urlSerializer.serialize(f.extractedUrl),
                    this.urlSerializer.serialize(f.urlAfterRedirects),
                    f.targetSnapshot,
                    !!f.guardsResult,
                  );
                  this.events.next(b);
                }),
                Ct((f) =>
                  f.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(f, "", Se.GuardRejected),
                      !1),
                ),
                od((f) => {
                  if (f.guards.canActivateChecks.length)
                    return W(f).pipe(
                      Vt((b) => {
                        let y = new fd(
                          b.id,
                          this.urlSerializer.serialize(b.extractedUrl),
                          this.urlSerializer.serialize(b.urlAfterRedirects),
                          b.targetSnapshot,
                        );
                        this.events.next(y);
                      }),
                      Ut((b) => {
                        let y = !1;
                        return W(b).pipe(
                          p0(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          Vt({
                            next: () => (y = !0),
                            complete: () => {
                              y ||
                                this.cancelNavigationTransition(
                                  b,
                                  "",
                                  Se.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      Vt((b) => {
                        let y = new pd(
                          b.id,
                          this.urlSerializer.serialize(b.extractedUrl),
                          this.urlSerializer.serialize(b.urlAfterRedirects),
                          b.targetSnapshot,
                        );
                        this.events.next(y);
                      }),
                    );
                }),
                od((f) => {
                  let b = (y) => {
                    let D = [];
                    y.routeConfig?.loadComponent &&
                      !y.routeConfig._loadedComponent &&
                      D.push(
                        this.configLoader.loadComponent(y.routeConfig).pipe(
                          Vt((U) => {
                            y.component = U;
                          }),
                          Q(() => {}),
                        ),
                      );
                    for (let U of y.children) D.push(...b(U));
                    return D;
                  };
                  return lo(b(f.targetSnapshot.root)).pipe(Mc(null), Lt(1));
                }),
                od(() => this.afterPreactivation()),
                Ut(() => {
                  let { currentSnapshot: f, targetSnapshot: b } = a,
                    y = this.createViewTransition?.(
                      this.environmentInjector,
                      f.root,
                      b.root,
                    );
                  return y ? oe(y).pipe(Q(() => a)) : W(a);
                }),
                Q((f) => {
                  let b = ky(
                    t.routeReuseStrategy,
                    f.targetSnapshot,
                    f.currentRouterState,
                  );
                  return (
                    (this.currentTransition = a =
                      Z(C({}, f), { targetRouterState: b })),
                    (this.currentNavigation.targetRouterState = b),
                    a
                  );
                }),
                Vt(() => {
                  this.events.next(new No());
                }),
                Oy(
                  this.rootContexts,
                  t.routeReuseStrategy,
                  (f) => this.events.next(f),
                  this.inputBindingEnabled,
                ),
                Lt(1),
                Vt({
                  next: (f) => {
                    (c = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new Pn(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          this.urlSerializer.serialize(f.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        f.targetRouterState.snapshot,
                      ),
                      f.resolve(!0);
                  },
                  complete: () => {
                    c = !0;
                  },
                }),
                me(
                  this.transitionAbortSubject.pipe(
                    Vt((f) => {
                      throw f;
                    }),
                  ),
                ),
                Ki(() => {
                  !c &&
                    !h &&
                    this.cancelNavigationTransition(
                      a,
                      "",
                      Se.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                $i((f) => {
                  if (((h = !0), Uf(f)))
                    this.events.next(
                      new Ci(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        f.message,
                        f.cancellationCode,
                      ),
                    ),
                      Ty(f)
                        ? this.events.next(
                            new vr(f.url, f.navigationBehaviorOptions),
                          )
                        : a.resolve(!1);
                  else {
                    let b = new Lo(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      f,
                      a.targetSnapshot ?? void 0,
                    );
                    try {
                      let y = Ge(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(b),
                      );
                      if (y instanceof Vo) {
                        let { message: D, cancellationCode: U } = Ia(
                          this.urlSerializer,
                          y,
                        );
                        this.events.next(
                          new Ci(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            D,
                            U,
                          ),
                        ),
                          this.events.next(
                            new vr(y.redirectTo, y.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(b);
                        let D = t.errorHandler(f);
                        a.resolve(!!D);
                      }
                    } catch (y) {
                      this.options.resolveNavigationPromiseOnError
                        ? a.resolve(!1)
                        : a.reject(y);
                    }
                  }
                  return li;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(t, i, r) {
        let a = new Ci(
          t.id,
          this.urlSerializer.serialize(t.extractedUrl),
          i,
          r,
        );
        this.events.next(a), t.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let t = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          i =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          t.toString() !== i?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function S0(n) {
  return n !== Mo;
}
var k0 = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: () => B(M0), providedIn: "root" });
      }
    }
    return n;
  })(),
  Td = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, t) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, t) {
      return e.routeConfig === t.routeConfig;
    }
  },
  M0 = (() => {
    class n extends Td {
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = fe(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Qf = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: () => B(R0), providedIn: "root" });
      }
    }
    return n;
  })(),
  R0 = (() => {
    class n extends Qf {
      constructor() {
        super(...arguments),
          (this.location = B(Zi)),
          (this.urlSerializer = B(Od)),
          (this.options = B(Nd, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = B(Bd)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new Ei()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Nf(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((i) => {
          i.type === "popstate" && t(i.url, i.state);
        });
      }
      handleRouterEvent(t, i) {
        if (t instanceof Po) this.stateMemento = this.createStateMemento();
        else if (t instanceof Ln) this.rawUrlTree = i.initialUrl;
        else if (t instanceof ya) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(i.targetBrowserUrl ?? r, i);
          }
        } else
          t instanceof No
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl,
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !i.extras.skipLocationChange &&
                this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i))
            : t instanceof Ci &&
                (t.code === Se.GuardRejected ||
                  t.code === Se.NoDataFromResolver)
              ? this.restoreHistory(i)
              : t instanceof Lo
                ? this.restoreHistory(i, !0)
                : t instanceof Pn &&
                  ((this.lastSuccessfulId = t.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, i) {
        let r = t instanceof Ei ? this.urlSerializer.serialize(t) : t;
        if (this.location.isCurrentPathEqualTo(r) || i.extras.replaceUrl) {
          let a = this.browserPageId,
            c = C(C({}, i.extras.state), this.generateNgRouterState(i.id, a));
          this.location.replaceState(r, "", c);
        } else {
          let a = C(
            C({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1),
          );
          this.location.go(r, "", a);
        }
      }
      restoreHistory(t, i = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let r = this.browserPageId,
            a = this.currentPageId - r;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === t.finalUrl &&
              a === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (i && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(t, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: t, ɵrouterPageId: i }
          : { navigationId: t };
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = fe(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  So = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = "COMPLETE"),
      (n[(n.FAILED = 1)] = "FAILED"),
      (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
      n
    );
  })(So || {});
function T0(n, e) {
  n.events
    .pipe(
      Ct(
        (t) =>
          t instanceof Pn ||
          t instanceof Ci ||
          t instanceof Lo ||
          t instanceof Ln,
      ),
      Q((t) =>
        t instanceof Pn || t instanceof Ln
          ? So.COMPLETE
          : (
                t instanceof Ci
                  ? t.code === Se.Redirect ||
                    t.code === Se.SupersededByNewNavigation
                  : !1
              )
            ? So.REDIRECTING
            : So.FAILED,
      ),
      Ct((t) => t !== So.REDIRECTING),
      Lt(1),
    )
    .subscribe(() => {
      e();
    });
}
function O0(n) {
  throw n;
}
var F0 = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  P0 = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Zf = (() => {
    class n {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = B(ta)),
          (this.stateManager = B(Qf)),
          (this.options = B(Nd, { optional: !0 }) || {}),
          (this.pendingTasks = B(Ws)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = B(A0)),
          (this.urlSerializer = B(Od)),
          (this.location = B(Zi)),
          (this.urlHandlingStrategy = B(Bd)),
          (this._events = new et()),
          (this.errorHandler = this.options.errorHandler || O0),
          (this.navigated = !1),
          (this.routeReuseStrategy = B(k0)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = B(Vd, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!B(Ld, { optional: !0 })),
          (this.eventsSubscription = new Ke()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((i) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (r !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, a),
                i instanceof Ci &&
                  i.code !== Se.Redirect &&
                  i.code !== Se.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof Pn) this.navigated = !0;
              else if (i instanceof vr) {
                let c = i.navigationBehaviorOptions,
                  h = this.urlHandlingStrategy.merge(i.url, r.currentRawUrl),
                  f = C(
                    {
                      browserUrl: r.extras.browserUrl,
                      info: r.extras.info,
                      skipLocationChange: r.extras.skipLocationChange,
                      replaceUrl:
                        r.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        S0(r.source),
                    },
                    c,
                  );
                this.scheduleNavigation(h, Mo, null, f, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            N0(i) && this._events.next(i);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Mo,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, "popstate", i);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(t, i, r) {
        let a = { replaceUrl: !0 },
          c = r?.navigationId ? r : null;
        if (r) {
          let f = C({}, r);
          delete f.navigationId,
            delete f.ɵrouterPageId,
            Object.keys(f).length !== 0 && (a.state = f);
        }
        let h = this.parseUrl(t);
        this.scheduleNavigation(h, i, c, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(t) {
        (this.config = t.map(jd)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(t, i = {}) {
        let {
            relativeTo: r,
            queryParams: a,
            fragment: c,
            queryParamsHandling: h,
            preserveFragment: f,
          } = i,
          b = f ? this.currentUrlTree.fragment : c,
          y = null;
        switch (h ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            y = C(C({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            y = this.currentUrlTree.queryParams;
            break;
          default:
            y = a || null;
        }
        y !== null && (y = this.removeEmptyProps(y));
        let D;
        try {
          let U = r ? r.snapshot : this.routerState.snapshot.root;
          D = Of(U);
        } catch {
          (typeof t[0] != "string" || t[0][0] !== "/") && (t = []),
            (D = this.currentUrlTree.root);
        }
        return Ff(D, t, y, b ?? null);
      }
      navigateByUrl(t, i = { skipLocationChange: !1 }) {
        let r = Oo(t) ? t : this.parseUrl(t),
          a = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(a, Mo, null, i);
      }
      navigate(t, i = { skipLocationChange: !1 }) {
        return L0(t), this.navigateByUrl(this.createUrlTree(t, i), i);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(t, i) {
        let r;
        if (
          (i === !0 ? (r = C({}, F0)) : i === !1 ? (r = C({}, P0)) : (r = i),
          Oo(t))
        )
          return gf(this.currentUrlTree, t, r);
        let a = this.parseUrl(t);
        return gf(this.currentUrlTree, a, r);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (i, [r, a]) => (a != null && (i[r] = a), i),
          {},
        );
      }
      scheduleNavigation(t, i, r, a, c) {
        if (this.disposed) return Promise.resolve(!1);
        let h, f, b;
        c
          ? ((h = c.resolve), (f = c.reject), (b = c.promise))
          : (b = new Promise((D, U) => {
              (h = D), (f = U);
            }));
        let y = this.pendingTasks.add();
        return (
          T0(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(y));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: a,
            resolve: h,
            reject: f,
            promise: b,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          b.catch((D) => Promise.reject(D))
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function L0(n) {
  for (let e = 0; e < n.length; e++) if (n[e] == null) throw new Et(4008, !1);
}
function N0(n) {
  return !(n instanceof No) && !(n instanceof vr);
}
var j0 = new Y("");
function Xf(n, ...e) {
  return kn([
    { provide: Vd, multi: !0, useValue: n },
    [],
    { provide: br, useFactory: V0, deps: [Zf] },
    { provide: jc, multi: !0, useFactory: B0 },
    e.map((t) => t.ɵproviders),
  ]);
}
function V0(n) {
  return n.routerState.root;
}
function B0() {
  let n = B(ee);
  return (e) => {
    let t = n.get(cr);
    if (e !== t.components[0]) return;
    let i = n.get(Zf),
      r = n.get(z0);
    n.get(U0) === 1 && i.initialNavigation(),
      n.get(H0, null, Tc.Optional)?.setUpPreloading(),
      n.get(j0, null, Tc.Optional)?.init(),
      i.resetRootComponentType(t.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var z0 = new Y("", { factory: () => new et() }),
  U0 = new Y("", { providedIn: "root", factory: () => 1 });
var H0 = new Y("");
var rn = class {},
  Jf = (() => {
    class n extends rn {
      getTranslation(t) {
        return W({});
      }
      static ɵfac = (() => {
        let t;
        return function (r) {
          return (t || (t = fe(n)))(r || n);
        };
      })();
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Ko = class {},
  tp = (() => {
    class n {
      handle(t) {
        return t.key;
      }
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
function ka(n, e) {
  if (n === e) return !0;
  if (n === null || e === null) return !1;
  if (n !== n && e !== e) return !0;
  let t = typeof n,
    i = typeof e,
    r,
    a,
    c;
  if (t == i && t == "object")
    if (Array.isArray(n)) {
      if (!Array.isArray(e)) return !1;
      if ((r = n.length) == e.length) {
        for (a = 0; a < r; a++) if (!ka(n[a], e[a])) return !1;
        return !0;
      }
    } else {
      if (Array.isArray(e)) return !1;
      c = Object.create(null);
      for (a in n) {
        if (!ka(n[a], e[a])) return !1;
        c[a] = !0;
      }
      for (a in e) if (!(a in c) && typeof e[a] < "u") return !1;
      return !0;
    }
  return !1;
}
function nn(n) {
  return typeof n < "u" && n !== null;
}
function zd(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function np(n, e) {
  let t = Object.assign({}, n);
  return (
    zd(n) &&
      zd(e) &&
      Object.keys(e).forEach((i) => {
        zd(e[i])
          ? i in n
            ? (t[i] = np(n[i], e[i]))
            : Object.assign(t, { [i]: e[i] })
          : Object.assign(t, { [i]: e[i] });
      }),
    t
  );
}
var wr = class {},
  ep = (() => {
    class n extends wr {
      templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
      interpolate(t, i) {
        let r;
        return (
          typeof t == "string"
            ? (r = this.interpolateString(t, i))
            : typeof t == "function"
              ? (r = this.interpolateFunction(t, i))
              : (r = t),
          r
        );
      }
      getValue(t, i) {
        let r = typeof i == "string" ? i.split(".") : [i];
        i = "";
        do
          (i += r.shift()),
            nn(t) && nn(t[i]) && (typeof t[i] == "object" || !r.length)
              ? ((t = t[i]), (i = ""))
              : r.length
                ? (i += ".")
                : (t = void 0);
        while (r.length);
        return t;
      }
      interpolateFunction(t, i) {
        return t(i);
      }
      interpolateString(t, i) {
        return i
          ? t.replace(this.templateMatcher, (r, a) => {
              let c = this.getValue(i, a);
              return nn(c) ? c : r;
            })
          : t;
      }
      static ɵfac = (() => {
        let t;
        return function (r) {
          return (t || (t = fe(n)))(r || n);
        };
      })();
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  xr = class {},
  ip = (() => {
    class n extends xr {
      compile(t, i) {
        return t;
      }
      compileTranslations(t, i) {
        return t;
      }
      static ɵfac = (() => {
        let t;
        return function (r) {
          return (t || (t = fe(n)))(r || n);
        };
      })();
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Ma = class {
    defaultLang;
    currentLang = this.defaultLang;
    translations = {};
    langs = [];
    onTranslationChange = new St();
    onLangChange = new St();
    onDefaultLangChange = new St();
  },
  Ud = new Y("USE_STORE"),
  Hd = new Y("USE_DEFAULT_LANG"),
  $d = new Y("DEFAULT_LANGUAGE"),
  Kd = new Y("USE_EXTEND"),
  Wo = (() => {
    class n {
      store;
      currentLoader;
      compiler;
      parser;
      missingTranslationHandler;
      useDefaultLang;
      isolate;
      extend;
      loadingTranslations;
      pending = !1;
      _onTranslationChange = new St();
      _onLangChange = new St();
      _onDefaultLangChange = new St();
      _defaultLang;
      _currentLang;
      _langs = [];
      _translations = {};
      _translationRequests = {};
      get onTranslationChange() {
        return this.isolate
          ? this._onTranslationChange
          : this.store.onTranslationChange;
      }
      get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
      }
      get onDefaultLangChange() {
        return this.isolate
          ? this._onDefaultLangChange
          : this.store.onDefaultLangChange;
      }
      get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
      }
      set defaultLang(t) {
        this.isolate ? (this._defaultLang = t) : (this.store.defaultLang = t);
      }
      get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
      }
      set currentLang(t) {
        this.isolate ? (this._currentLang = t) : (this.store.currentLang = t);
      }
      get langs() {
        return this.isolate ? this._langs : this.store.langs;
      }
      set langs(t) {
        this.isolate ? (this._langs = t) : (this.store.langs = t);
      }
      get translations() {
        return this.isolate ? this._translations : this.store.translations;
      }
      set translations(t) {
        this.isolate ? (this._translations = t) : (this.store.translations = t);
      }
      constructor(t, i, r, a, c, h = !0, f = !1, b = !1, y) {
        (this.store = t),
          (this.currentLoader = i),
          (this.compiler = r),
          (this.parser = a),
          (this.missingTranslationHandler = c),
          (this.useDefaultLang = h),
          (this.isolate = f),
          (this.extend = b),
          y && this.setDefaultLang(y);
      }
      setDefaultLang(t) {
        if (t === this.defaultLang) return;
        let i = this.retrieveTranslations(t);
        typeof i < "u"
          ? (this.defaultLang == null && (this.defaultLang = t),
            i.pipe(Lt(1)).subscribe((r) => {
              this.changeDefaultLang(t);
            }))
          : this.changeDefaultLang(t);
      }
      getDefaultLang() {
        return this.defaultLang;
      }
      use(t) {
        if (t === this.currentLang) return W(this.translations[t]);
        let i = this.retrieveTranslations(t);
        return typeof i < "u"
          ? (this.currentLang || (this.currentLang = t),
            i.pipe(Lt(1)).subscribe((r) => {
              this.changeLang(t);
            }),
            i)
          : (this.changeLang(t), W(this.translations[t]));
      }
      retrieveTranslations(t) {
        let i;
        return (
          (typeof this.translations[t] > "u" || this.extend) &&
            ((this._translationRequests[t] =
              this._translationRequests[t] || this.getTranslation(t)),
            (i = this._translationRequests[t])),
          i
        );
      }
      getTranslation(t) {
        this.pending = !0;
        let i = this.currentLoader.getTranslation(t).pipe(nr(1), Lt(1));
        return (
          (this.loadingTranslations = i.pipe(
            Q((r) => this.compiler.compileTranslations(r, t)),
            nr(1),
            Lt(1),
          )),
          this.loadingTranslations.subscribe({
            next: (r) => {
              (this.translations[t] =
                this.extend && this.translations[t]
                  ? C(C({}, r), this.translations[t])
                  : r),
                this.updateLangs(),
                (this.pending = !1);
            },
            error: (r) => {
              this.pending = !1;
            },
          }),
          i
        );
      }
      setTranslation(t, i, r = !1) {
        (i = this.compiler.compileTranslations(i, t)),
          (r || this.extend) && this.translations[t]
            ? (this.translations[t] = np(this.translations[t], i))
            : (this.translations[t] = i),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: t,
            translations: this.translations[t],
          });
      }
      getLangs() {
        return this.langs;
      }
      addLangs(t) {
        t.forEach((i) => {
          this.langs.indexOf(i) === -1 && this.langs.push(i);
        });
      }
      updateLangs() {
        this.addLangs(Object.keys(this.translations));
      }
      getParsedResult(t, i, r) {
        let a;
        if (i instanceof Array) {
          let c = {},
            h = !1;
          for (let f of i)
            (c[f] = this.getParsedResult(t, f, r)), he(c[f]) && (h = !0);
          if (h) {
            let f = i.map((b) => (he(c[b]) ? c[b] : W(c[b])));
            return er(f).pipe(
              Q((b) => {
                let y = {};
                return (
                  b.forEach((D, U) => {
                    y[i[U]] = D;
                  }),
                  y
                );
              }),
            );
          }
          return c;
        }
        if (
          (t && (a = this.parser.interpolate(this.parser.getValue(t, i), r)),
          typeof a > "u" &&
            this.defaultLang != null &&
            this.defaultLang !== this.currentLang &&
            this.useDefaultLang &&
            (a = this.parser.interpolate(
              this.parser.getValue(this.translations[this.defaultLang], i),
              r,
            )),
          typeof a > "u")
        ) {
          let c = { key: i, translateService: this };
          typeof r < "u" && (c.interpolateParams = r),
            (a = this.missingTranslationHandler.handle(c));
        }
        return typeof a < "u" ? a : i;
      }
      get(t, i) {
        if (!nn(t) || !t.length) throw new Error('Parameter "key" required');
        if (this.pending)
          return this.loadingTranslations.pipe(
            gi((r) => ((r = this.getParsedResult(r, t, i)), he(r) ? r : W(r))),
          );
        {
          let r = this.getParsedResult(
            this.translations[this.currentLang],
            t,
            i,
          );
          return he(r) ? r : W(r);
        }
      }
      getStreamOnTranslationChange(t, i) {
        if (!nn(t) || !t.length) throw new Error('Parameter "key" required');
        return Sn(
          ci(() => this.get(t, i)),
          this.onTranslationChange.pipe(
            Ut((r) => {
              let a = this.getParsedResult(r.translations, t, i);
              return typeof a.subscribe == "function" ? a : W(a);
            }),
          ),
        );
      }
      stream(t, i) {
        if (!nn(t) || !t.length) throw new Error('Parameter "key" required');
        return Sn(
          ci(() => this.get(t, i)),
          this.onLangChange.pipe(
            Ut((r) => {
              let a = this.getParsedResult(r.translations, t, i);
              return he(a) ? a : W(a);
            }),
          ),
        );
      }
      instant(t, i) {
        if (!nn(t) || !t.length) throw new Error('Parameter "key" required');
        let r = this.getParsedResult(this.translations[this.currentLang], t, i);
        if (he(r)) {
          if (t instanceof Array) {
            let a = {};
            return (
              t.forEach((c, h) => {
                a[t[h]] = t[h];
              }),
              a
            );
          }
          return t;
        } else return r;
      }
      set(t, i, r = this.currentLang) {
        (this.translations[r][t] = this.compiler.compile(i, r)),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: r,
            translations: this.translations[r],
          });
      }
      changeLang(t) {
        (this.currentLang = t),
          this.onLangChange.emit({
            lang: t,
            translations: this.translations[t],
          }),
          this.defaultLang == null && this.changeDefaultLang(t);
      }
      changeDefaultLang(t) {
        (this.defaultLang = t),
          this.onDefaultLangChange.emit({
            lang: t,
            translations: this.translations[t],
          });
      }
      reloadLang(t) {
        return this.resetLang(t), this.getTranslation(t);
      }
      resetLang(t) {
        (this._translationRequests[t] = void 0),
          (this.translations[t] = void 0);
      }
      getBrowserLang() {
        if (typeof window > "u" || typeof window.navigator > "u") return;
        let t = window.navigator.languages
          ? window.navigator.languages[0]
          : null;
        if (
          ((t =
            t ||
            window.navigator.language ||
            window.navigator.browserLanguage ||
            window.navigator.userLanguage),
          !(typeof t > "u"))
        )
          return (
            t.indexOf("-") !== -1 && (t = t.split("-")[0]),
            t.indexOf("_") !== -1 && (t = t.split("_")[0]),
            t
          );
      }
      getBrowserCultureLang() {
        if (typeof window > "u" || typeof window.navigator > "u") return;
        let t = window.navigator.languages
          ? window.navigator.languages[0]
          : null;
        return (
          (t =
            t ||
            window.navigator.language ||
            window.navigator.browserLanguage ||
            window.navigator.userLanguage),
          t
        );
      }
      static ɵfac = function (i) {
        return new (i || n)(
          A(Ma),
          A(rn),
          A(xr),
          A(wr),
          A(Ko),
          A(Hd),
          A(Ud),
          A(Kd),
          A($d),
        );
      };
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
var Cr = (() => {
    class n {
      translate;
      _ref;
      value = "";
      lastKey = null;
      lastParams = [];
      onTranslationChange;
      onLangChange;
      onDefaultLangChange;
      constructor(t, i) {
        (this.translate = t), (this._ref = i);
      }
      updateValue(t, i, r) {
        let a = (c) => {
          (this.value = c !== void 0 ? c : t),
            (this.lastKey = t),
            this._ref.markForCheck();
        };
        if (r) {
          let c = this.translate.getParsedResult(r, t, i);
          he(c.subscribe) ? c.subscribe(a) : a(c);
        }
        this.translate.get(t, i).subscribe(a);
      }
      transform(t, ...i) {
        if (!t || !t.length) return t;
        if (ka(t, this.lastKey) && ka(i, this.lastParams)) return this.value;
        let r;
        if (nn(i[0]) && i.length)
          if (typeof i[0] == "string" && i[0].length) {
            let a = i[0]
              .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
              .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
            try {
              r = JSON.parse(a);
            } catch {
              throw new SyntaxError(
                `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`,
              );
            }
          } else typeof i[0] == "object" && !Array.isArray(i[0]) && (r = i[0]);
        return (
          (this.lastKey = t),
          (this.lastParams = i),
          this.updateValue(t, r),
          this._dispose(),
          this.onTranslationChange ||
            (this.onTranslationChange =
              this.translate.onTranslationChange.subscribe((a) => {
                this.lastKey &&
                  a.lang === this.translate.currentLang &&
                  ((this.lastKey = null),
                  this.updateValue(t, r, a.translations));
              })),
          this.onLangChange ||
            (this.onLangChange = this.translate.onLangChange.subscribe((a) => {
              this.lastKey &&
                ((this.lastKey = null), this.updateValue(t, r, a.translations));
            })),
          this.onDefaultLangChange ||
            (this.onDefaultLangChange =
              this.translate.onDefaultLangChange.subscribe(() => {
                this.lastKey && ((this.lastKey = null), this.updateValue(t, r));
              })),
          this.value
        );
      }
      _dispose() {
        typeof this.onTranslationChange < "u" &&
          (this.onTranslationChange.unsubscribe(),
          (this.onTranslationChange = void 0)),
          typeof this.onLangChange < "u" &&
            (this.onLangChange.unsubscribe(), (this.onLangChange = void 0)),
          typeof this.onDefaultLangChange < "u" &&
            (this.onDefaultLangChange.unsubscribe(),
            (this.onDefaultLangChange = void 0));
      }
      ngOnDestroy() {
        this._dispose();
      }
      static ɵfac = function (i) {
        return new (i || n)(P(Wo, 16), P(ye, 16));
      };
      static ɵpipe = fm({ name: "translate", type: n, pure: !1 });
      static ɵprov = V({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  on = (() => {
    class n {
      static forRoot(t = {}) {
        return {
          ngModule: n,
          providers: [
            t.loader || { provide: rn, useClass: Jf },
            t.compiler || { provide: xr, useClass: ip },
            t.parser || { provide: wr, useClass: ep },
            t.missingTranslationHandler || { provide: Ko, useClass: tp },
            Ma,
            { provide: Ud, useValue: t.isolate },
            { provide: Hd, useValue: t.useDefaultLang },
            { provide: Kd, useValue: t.extend },
            { provide: $d, useValue: t.defaultLanguage },
            Wo,
          ],
        };
      }
      static forChild(t = {}) {
        return {
          ngModule: n,
          providers: [
            t.loader || { provide: rn, useClass: Jf },
            t.compiler || { provide: xr, useClass: ip },
            t.parser || { provide: wr, useClass: ep },
            t.missingTranslationHandler || { provide: Ko, useClass: tp },
            { provide: Ud, useValue: t.isolate },
            { provide: Hd, useValue: t.useDefaultLang },
            { provide: Kd, useValue: t.extend },
            { provide: $d, useValue: t.defaultLanguage },
            Wo,
          ],
        };
      }
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵmod = ht({ type: n });
      static ɵinj = ut({});
    }
    return n;
  })();
var Gd;
try {
  Gd = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Gd = !1;
}
var wt = (() => {
  class n {
    constructor(t) {
      (this._platformId = t),
        (this.isBrowser = this._platformId
          ? Hm(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Gd) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(bi));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var Er,
  rp = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function qd() {
  if (Er) return Er;
  if (typeof document != "object" || !document) return (Er = new Set(rp)), Er;
  let n = document.createElement("input");
  return (
    (Er = new Set(rp.filter((e) => (n.setAttribute("type", e), n.type === e)))),
    Er
  );
}
var Go;
function $0() {
  if (Go == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Go = !0) }),
      );
    } finally {
      Go = Go || !1;
    }
  return Go;
}
function sn(n) {
  return $0() ? n : !!n.capture;
}
var ti = (function (n) {
    return (
      (n[(n.NORMAL = 0)] = "NORMAL"),
      (n[(n.NEGATED = 1)] = "NEGATED"),
      (n[(n.INVERTED = 2)] = "INVERTED"),
      n
    );
  })(ti || {}),
  Ta,
  Nn;
function Oa() {
  if (Nn == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (Nn = !1), Nn;
    if ("scrollBehavior" in document.documentElement.style) Nn = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? (Nn = !/\{\s*\[native code\]\s*\}/.test(n.toString())) : (Nn = !1);
    }
  }
  return Nn;
}
function Ir() {
  if (typeof document != "object" || !document) return ti.NORMAL;
  if (Ta == null) {
    let n = document.createElement("div"),
      e = n.style;
    (n.dir = "rtl"),
      (e.width = "1px"),
      (e.overflow = "auto"),
      (e.visibility = "hidden"),
      (e.pointerEvents = "none"),
      (e.position = "absolute");
    let t = document.createElement("div"),
      i = t.style;
    (i.width = "2px"),
      (i.height = "1px"),
      n.appendChild(t),
      document.body.appendChild(n),
      (Ta = ti.NORMAL),
      n.scrollLeft === 0 &&
        ((n.scrollLeft = 1),
        (Ta = n.scrollLeft === 0 ? ti.NEGATED : ti.INVERTED)),
      n.remove();
  }
  return Ta;
}
var Wd;
function K0() {
  if (Wd == null) {
    let n = typeof document < "u" ? document.head : null;
    Wd = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return Wd;
}
function op(n) {
  if (K0()) {
    let e = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && e instanceof ShadowRoot)
      return e;
  }
  return null;
}
function qo() {
  let n = typeof document < "u" && document ? document.activeElement : null;
  for (; n && n.shadowRoot; ) {
    let e = n.shadowRoot.activeElement;
    if (e === n) break;
    n = e;
  }
  return n;
}
function Le(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function Yo() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Fa(n, ...e) {
  return e.length
    ? e.some((t) => n[t])
    : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
function jn(n) {
  return n != null && `${n}` != "false";
}
function Dr(n, e = 0) {
  return W0(n) ? Number(n) : arguments.length === 2 ? e : 0;
}
function W0(n) {
  return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function Ar(n) {
  return Array.isArray(n) ? n : [n];
}
function Xt(n) {
  return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function Ne(n) {
  return n instanceof gt ? n.nativeElement : n;
}
var G0 = (() => {
  class n {
    create(t) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(t);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var Sr = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ providers: [G0] });
    }
  }
  return n;
})();
var sp = new Set(),
  Vn,
  q0 = (() => {
    class n {
      constructor(t, i) {
        (this._platform = t),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : Q0);
      }
      matchMedia(t) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Y0(t, this._nonce),
          this._matchMedia(t)
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(wt), A(mo, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function Y0(n, e) {
  if (!sp.has(n))
    try {
      Vn ||
        ((Vn = document.createElement("style")),
        e && Vn.setAttribute("nonce", e),
        Vn.setAttribute("type", "text/css"),
        document.head.appendChild(Vn)),
        Vn.sheet &&
          (Vn.sheet.insertRule(`@media ${n} {body{ }}`, 0), sp.add(n));
    } catch (t) {
      console.error(t);
    }
}
function Q0(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var lp = (() => {
  class n {
    constructor(t, i) {
      (this._mediaMatcher = t),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new et());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(t) {
      return ap(Ar(t)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(t) {
      let r = ap(Ar(t)).map((c) => this._registerQuery(c).observable),
        a = lo(r);
      return (
        (a = Sn(a.pipe(Lt(1)), a.pipe(co(1), kc(0)))),
        a.pipe(
          Q((c) => {
            let h = { matches: !1, breakpoints: {} };
            return (
              c.forEach(({ matches: f, query: b }) => {
                (h.matches = h.matches || f), (h.breakpoints[b] = f);
              }),
              h
            );
          }),
        )
      );
    }
    _registerQuery(t) {
      if (this._queries.has(t)) return this._queries.get(t);
      let i = this._mediaMatcher.matchMedia(t),
        a = {
          observable: new ai((c) => {
            let h = (f) => this._zone.run(() => c.next(f));
            return (
              i.addListener(h),
              () => {
                i.removeListener(h);
              }
            );
          }).pipe(
            vi(i),
            Q(({ matches: c }) => ({ query: t, matches: c })),
            me(this._destroySubject),
          ),
          mql: i,
        };
      return this._queries.set(t, a), a;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(q0), A(st));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
function ap(n) {
  return n
    .map((e) => e.split(","))
    .reduce((e, t) => e.concat(t))
    .map((e) => e.trim());
}
var Qo = (() => {
  class n {
    constructor(t) {
      this._platform = t;
    }
    isDisabled(t) {
      return t.hasAttribute("disabled");
    }
    isVisible(t) {
      return X0(t) && getComputedStyle(t).visibility === "visible";
    }
    isTabbable(t) {
      if (!this._platform.isBrowser) return !1;
      let i = Z0(sw(t));
      if (i && (cp(i) === -1 || !this.isVisible(i))) return !1;
      let r = t.nodeName.toLowerCase(),
        a = cp(t);
      return t.hasAttribute("contenteditable")
        ? a !== -1
        : r === "iframe" ||
            r === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !rw(t))
          ? !1
          : r === "audio"
            ? t.hasAttribute("controls")
              ? a !== -1
              : !1
            : r === "video"
              ? a === -1
                ? !1
                : a !== null
                  ? !0
                  : this._platform.FIREFOX || t.hasAttribute("controls")
              : t.tabIndex >= 0;
    }
    isFocusable(t, i) {
      return (
        ow(t) &&
        !this.isDisabled(t) &&
        (i?.ignoreVisibility || this.isVisible(t))
      );
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(wt));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
function Z0(n) {
  try {
    return n.frameElement;
  } catch {
    return null;
  }
}
function X0(n) {
  return !!(
    n.offsetWidth ||
    n.offsetHeight ||
    (typeof n.getClientRects == "function" && n.getClientRects().length)
  );
}
function J0(n) {
  let e = n.nodeName.toLowerCase();
  return e === "input" || e === "select" || e === "button" || e === "textarea";
}
function tw(n) {
  return iw(n) && n.type == "hidden";
}
function ew(n) {
  return nw(n) && n.hasAttribute("href");
}
function iw(n) {
  return n.nodeName.toLowerCase() == "input";
}
function nw(n) {
  return n.nodeName.toLowerCase() == "a";
}
function hp(n) {
  if (!n.hasAttribute("tabindex") || n.tabIndex === void 0) return !1;
  let e = n.getAttribute("tabindex");
  return !!(e && !isNaN(parseInt(e, 10)));
}
function cp(n) {
  if (!hp(n)) return null;
  let e = parseInt(n.getAttribute("tabindex") || "", 10);
  return isNaN(e) ? -1 : e;
}
function rw(n) {
  let e = n.nodeName.toLowerCase(),
    t = e === "input" && n.type;
  return t === "text" || t === "password" || e === "select" || e === "textarea";
}
function ow(n) {
  return tw(n)
    ? !1
    : J0(n) || ew(n) || n.hasAttribute("contenteditable") || hp(n);
}
function sw(n) {
  return (n.ownerDocument && n.ownerDocument.defaultView) || window;
}
var Qd = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      (this._enabled = e),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(e, this._startAnchor),
          this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    constructor(e, t, i, r, a = !1, c) {
      (this._element = e),
        (this._checker = t),
        (this._ngZone = i),
        (this._document = r),
        (this._injector = c),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        a || this.attachAnchors();
    }
    destroy() {
      let e = this._startAnchor,
        t = this._endAnchor;
      e &&
        (e.removeEventListener("focus", this.startAnchorListener), e.remove()),
        t &&
          (t.removeEventListener("focus", this.endAnchorListener), t.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener,
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener,
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element,
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling,
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusInitialElement(e)));
      });
    }
    focusFirstTabbableElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusFirstTabbableElement(e)));
      });
    }
    focusLastTabbableElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusLastTabbableElement(e)));
      });
    }
    _getRegionBoundary(e) {
      let t = this._element.querySelectorAll(
        `[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`,
      );
      return e == "start"
        ? t.length
          ? t[0]
          : this._getFirstTabbableElement(this._element)
        : t.length
          ? t[t.length - 1]
          : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(e) {
      let t = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]",
      );
      if (t) {
        if (!this._checker.isFocusable(t)) {
          let i = this._getFirstTabbableElement(t);
          return i?.focus(e), !!i;
        }
        return t.focus(e), !0;
      }
      return this.focusFirstTabbableElement(e);
    }
    focusFirstTabbableElement(e) {
      let t = this._getRegionBoundary("start");
      return t && t.focus(e), !!t;
    }
    focusLastTabbableElement(e) {
      let t = this._getRegionBoundary("end");
      return t && t.focus(e), !!t;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let t = e.children;
      for (let i = 0; i < t.length; i++) {
        let r =
          t[i].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(t[i])
            : null;
        if (r) return r;
      }
      return null;
    }
    _getLastTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let t = e.children;
      for (let i = t.length - 1; i >= 0; i--) {
        let r =
          t[i].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(t[i])
            : null;
        if (r) return r;
      }
      return null;
    }
    _createAnchor() {
      let e = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, e),
        e.classList.add("cdk-visually-hidden"),
        e.classList.add("cdk-focus-trap-anchor"),
        e.setAttribute("aria-hidden", "true"),
        e
      );
    }
    _toggleAnchorTabIndex(e, t) {
      e ? t.setAttribute("tabindex", "0") : t.removeAttribute("tabindex");
    }
    toggleAnchors(e) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(e, this._startAnchor),
        this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    _executeOnStable(e) {
      this._injector ? Rn(e, { injector: this._injector }) : setTimeout(e);
    }
  },
  Na = (() => {
    class n {
      constructor(t, i, r) {
        (this._checker = t),
          (this._ngZone = i),
          (this._injector = B(ee)),
          (this._document = r);
      }
      create(t, i = !1) {
        return new Qd(
          t,
          this._checker,
          this._ngZone,
          this._document,
          i,
          this._injector,
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(Qo), A(st), A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function Zd(n) {
  return n.buttons === 0 || n.detail === 0;
}
function Xd(n) {
  let e =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var aw = new Y("cdk-input-modality-detector-options"),
  lw = { ignoreKeys: [18, 17, 224, 91, 16] },
  mp = 650,
  kr = sn({ passive: !0, capture: !0 }),
  cw = (() => {
    class n {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(t, i, r, a) {
        (this._platform = t),
          (this._mostRecentTarget = null),
          (this._modality = new Gt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (c) => {
            this._options?.ignoreKeys?.some((h) => h === c.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Le(c)));
          }),
          (this._onMousedown = (c) => {
            Date.now() - this._lastTouchMs < mp ||
              (this._modality.next(Zd(c) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Le(c)));
          }),
          (this._onTouchstart = (c) => {
            if (Xd(c)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Le(c));
          }),
          (this._options = C(C({}, lw), a)),
          (this.modalityDetected = this._modality.pipe(co(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Oe())),
          t.isBrowser &&
            i.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, kr),
                r.addEventListener("mousedown", this._onMousedown, kr),
                r.addEventListener("touchstart", this._onTouchstart, kr);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, kr),
            document.removeEventListener("mousedown", this._onMousedown, kr),
            document.removeEventListener("touchstart", this._onTouchstart, kr));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(wt), A(st), A(dt), A(aw, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var La = (function (n) {
    return (
      (n[(n.IMMEDIATE = 0)] = "IMMEDIATE"),
      (n[(n.EVENTUAL = 1)] = "EVENTUAL"),
      n
    );
  })(La || {}),
  dw = new Y("cdk-focus-monitor-default-options"),
  Pa = sn({ passive: !0, capture: !0 }),
  Mr = (() => {
    class n {
      constructor(t, i, r, a, c) {
        (this._ngZone = t),
          (this._platform = i),
          (this._inputModalityDetector = r),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new et()),
          (this._rootNodeFocusAndBlurListener = (h) => {
            let f = Le(h);
            for (let b = f; b; b = b.parentElement)
              h.type === "focus" ? this._onFocus(h, b) : this._onBlur(h, b);
          }),
          (this._document = a),
          (this._detectionMode = c?.detectionMode || La.IMMEDIATE);
      }
      monitor(t, i = !1) {
        let r = Ne(t);
        if (!this._platform.isBrowser || r.nodeType !== 1) return W();
        let a = op(r) || this._getDocument(),
          c = this._elementInfo.get(r);
        if (c) return i && (c.checkChildren = !0), c.subject;
        let h = { checkChildren: i, subject: new et(), rootNode: a };
        return (
          this._elementInfo.set(r, h),
          this._registerGlobalListeners(h),
          h.subject
        );
      }
      stopMonitoring(t) {
        let i = Ne(t),
          r = this._elementInfo.get(i);
        r &&
          (r.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(r));
      }
      focusVia(t, i, r) {
        let a = Ne(t),
          c = this._getDocument().activeElement;
        a === c
          ? this._getClosestElementsInfo(a).forEach(([h, f]) =>
              this._originChanged(h, i, f),
            )
          : (this._setOrigin(i), typeof a.focus == "function" && a.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((t, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(t) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(t)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : t && this._isLastInteractionFromInputLabel(t)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(t) {
        return (
          this._detectionMode === La.EVENTUAL ||
          !!t?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(t, i) {
        t.classList.toggle("cdk-focused", !!i),
          t.classList.toggle("cdk-touch-focused", i === "touch"),
          t.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          t.classList.toggle("cdk-mouse-focused", i === "mouse"),
          t.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(t, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = t),
            (this._originFromTouchInteraction = t === "touch" && i),
            this._detectionMode === La.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? mp : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(t, i) {
        let r = this._elementInfo.get(i),
          a = Le(t);
        !r ||
          (!r.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), r);
      }
      _onBlur(t, i) {
        let r = this._elementInfo.get(i);
        !r ||
          (r.checkChildren &&
            t.relatedTarget instanceof Node &&
            i.contains(t.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(r, null));
      }
      _emitOrigin(t, i) {
        t.subject.observers.length && this._ngZone.run(() => t.subject.next(i));
      }
      _registerGlobalListeners(t) {
        if (!this._platform.isBrowser) return;
        let i = t.rootNode,
          r = this._rootNodeFocusListenerCount.get(i) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, Pa),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Pa,
              );
          }),
          this._rootNodeFocusListenerCount.set(i, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(me(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(t) {
        let i = t.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let r = this._rootNodeFocusListenerCount.get(i);
          r > 1
            ? this._rootNodeFocusListenerCount.set(i, r - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                Pa,
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Pa,
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(t, i, r) {
        this._setClasses(t, i),
          this._emitOrigin(r, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(t) {
        let i = [];
        return (
          this._elementInfo.forEach((r, a) => {
            (a === t || (r.checkChildren && a.contains(t))) && i.push([a, r]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(t) {
        let { _mostRecentTarget: i, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !i ||
          i === t ||
          (t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA") ||
          t.disabled
        )
          return !1;
        let a = t.labels;
        if (a) {
          for (let c = 0; c < a.length; c++) if (a[c].contains(i)) return !0;
        }
        return !1;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(st), A(wt), A(cw), A(dt, 8), A(dw, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var Bn = (function (n) {
    return (
      (n[(n.NONE = 0)] = "NONE"),
      (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      n
    );
  })(Bn || {}),
  dp = "cdk-high-contrast-black-on-white",
  up = "cdk-high-contrast-white-on-black",
  Yd = "cdk-high-contrast-active",
  Jd = (() => {
    class n {
      constructor(t, i) {
        (this._platform = t),
          (this._document = i),
          (this._breakpointSubscription = B(lp)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Bn.NONE;
        let t = this._document.createElement("div");
        (t.style.backgroundColor = "rgb(1,2,3)"),
          (t.style.position = "absolute"),
          this._document.body.appendChild(t);
        let i = this._document.defaultView || window,
          r = i && i.getComputedStyle ? i.getComputedStyle(t) : null,
          a = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((t.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Bn.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Bn.BLACK_ON_WHITE;
        }
        return Bn.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let t = this._document.body.classList;
          t.remove(Yd, dp, up), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === Bn.BLACK_ON_WHITE
            ? t.add(Yd, dp)
            : i === Bn.WHITE_ON_BLACK && t.add(Yd, up);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(wt), A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  fp = (() => {
    class n {
      constructor(t) {
        t._applyBodyHighContrastModeCssClasses();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(Jd));
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [Sr] });
      }
    }
    return n;
  })();
var uw = new Y("cdk-dir-doc", { providedIn: "root", factory: hw });
function hw() {
  return B(dt);
}
var mw =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function fw(n) {
  let e = n?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language
    ? mw.test(navigator.language)
      ? "rtl"
      : "ltr"
    : e === "rtl"
      ? "rtl"
      : "ltr";
}
var Di = (() => {
  class n {
    constructor(t) {
      if (((this.value = "ltr"), (this.change = new St()), t)) {
        let i = t.body ? t.body.dir : null,
          r = t.documentElement ? t.documentElement.dir : null;
        this.value = fw(i || r || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(A(uw, 8));
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var an = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({});
    }
  }
  return n;
})();
function pw() {
  return !0;
}
var gw = new Y("mat-sanity-checks", { providedIn: "root", factory: pw }),
  zt = (() => {
    class n {
      constructor(t, i, r) {
        (this._sanityChecks = i),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          t._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(t) {
        return Yo()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[t];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(Jd), A(gw, 8), A(dt));
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [an, an] });
      }
    }
    return n;
  })();
var Va = class {
  constructor(e, t, i, r, a) {
    (this._defaultMatcher = e),
      (this.ngControl = t),
      (this._parentFormGroup = i),
      (this._parentForm = r),
      (this._stateChanges = a),
      (this.errorState = !1);
  }
  updateErrorState() {
    let e = this.errorState,
      t = this._parentFormGroup || this._parentForm,
      i = this.matcher || this._defaultMatcher,
      r = this.ngControl ? this.ngControl.control : null,
      a = i?.isErrorState(r, t) ?? !1;
    a !== e && ((this.errorState = a), this._stateChanges.next());
  }
};
var Cp = (() => {
  class n {
    isErrorState(t, i) {
      return !!(t && t.invalid && (t.touched || (i && i.submitted)));
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var je = (function (n) {
    return (
      (n[(n.FADING_IN = 0)] = "FADING_IN"),
      (n[(n.VISIBLE = 1)] = "VISIBLE"),
      (n[(n.FADING_OUT = 2)] = "FADING_OUT"),
      (n[(n.HIDDEN = 3)] = "HIDDEN"),
      n
    );
  })(je || {}),
  ru = class {
    constructor(e, t, i, r = !1) {
      (this._renderer = e),
        (this.element = t),
        (this.config = i),
        (this._animationForciblyDisabledThroughCss = r),
        (this.state = je.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  pp = sn({ passive: !0, capture: !0 }),
  ou = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (e) => {
          let t = Le(e);
          t &&
            this._events.get(e.type)?.forEach((i, r) => {
              (r === t || r.contains(t)) && i.forEach((a) => a.handleEvent(e));
            });
        });
    }
    addHandler(e, t, i, r) {
      let a = this._events.get(t);
      if (a) {
        let c = a.get(i);
        c ? c.add(r) : a.set(i, new Set([r]));
      } else
        this._events.set(t, new Map([[i, new Set([r])]])),
          e.runOutsideAngular(() => {
            document.addEventListener(t, this._delegateEventHandler, pp);
          });
    }
    removeHandler(e, t, i) {
      let r = this._events.get(e);
      if (!r) return;
      let a = r.get(t);
      a &&
        (a.delete(i),
        a.size === 0 && r.delete(t),
        r.size === 0 &&
          (this._events.delete(e),
          document.removeEventListener(e, this._delegateEventHandler, pp)));
    }
  },
  gp = { enterDuration: 225, exitDuration: 150 },
  vw = 800,
  vp = sn({ passive: !0, capture: !0 }),
  bp = ["mousedown", "touchstart"],
  _p = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Ba = class n {
    static {
      this._eventManager = new ou();
    }
    constructor(e, t, i, r) {
      (this._target = e),
        (this._ngZone = t),
        (this._platform = r),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        r.isBrowser && (this._containerElement = Ne(i));
    }
    fadeInRipple(e, t, i = {}) {
      let r = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        a = C(C({}, gp), i.animation);
      i.centered && ((e = r.left + r.width / 2), (t = r.top + r.height / 2));
      let c = i.radius || bw(e, t, r),
        h = e - r.left,
        f = t - r.top,
        b = a.enterDuration,
        y = document.createElement("div");
      y.classList.add("mat-ripple-element"),
        (y.style.left = `${h - c}px`),
        (y.style.top = `${f - c}px`),
        (y.style.height = `${c * 2}px`),
        (y.style.width = `${c * 2}px`),
        i.color != null && (y.style.backgroundColor = i.color),
        (y.style.transitionDuration = `${b}ms`),
        this._containerElement.appendChild(y);
      let D = window.getComputedStyle(y),
        U = D.transitionProperty,
        z = D.transitionDuration,
        G =
          U === "none" ||
          z === "0s" ||
          z === "0s, 0s" ||
          (r.width === 0 && r.height === 0),
        H = new ru(this, y, i, G);
      (y.style.transform = "scale3d(1, 1, 1)"),
        (H.state = je.FADING_IN),
        i.persistent || (this._mostRecentTransientRipple = H);
      let it = null;
      return (
        !G &&
          (b || a.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let Ft = () => {
                it && (it.fallbackTimer = null),
                  clearTimeout(It),
                  this._finishRippleTransition(H);
              },
              Kt = () => this._destroyRipple(H),
              It = setTimeout(Kt, b + 100);
            y.addEventListener("transitionend", Ft),
              y.addEventListener("transitioncancel", Kt),
              (it = {
                onTransitionEnd: Ft,
                onTransitionCancel: Kt,
                fallbackTimer: It,
              });
          }),
        this._activeRipples.set(H, it),
        (G || !b) && this._finishRippleTransition(H),
        H
      );
    }
    fadeOutRipple(e) {
      if (e.state === je.FADING_OUT || e.state === je.HIDDEN) return;
      let t = e.element,
        i = C(C({}, gp), e.config.animation);
      (t.style.transitionDuration = `${i.exitDuration}ms`),
        (t.style.opacity = "0"),
        (e.state = je.FADING_OUT),
        (e._animationForciblyDisabledThroughCss || !i.exitDuration) &&
          this._finishRippleTransition(e);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((e) => e.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((e) => {
        e.config.persistent || e.fadeOut();
      });
    }
    setupTriggerEvents(e) {
      let t = Ne(e);
      !this._platform.isBrowser ||
        !t ||
        t === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = t),
        bp.forEach((i) => {
          n._eventManager.addHandler(this._ngZone, i, t, this);
        }));
    }
    handleEvent(e) {
      e.type === "mousedown"
        ? this._onMousedown(e)
        : e.type === "touchstart"
          ? this._onTouchStart(e)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            _p.forEach((t) => {
              this._triggerElement.addEventListener(t, this, vp);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(e) {
      e.state === je.FADING_IN
        ? this._startFadeOutTransition(e)
        : e.state === je.FADING_OUT && this._destroyRipple(e);
    }
    _startFadeOutTransition(e) {
      let t = e === this._mostRecentTransientRipple,
        { persistent: i } = e.config;
      (e.state = je.VISIBLE), !i && (!t || !this._isPointerDown) && e.fadeOut();
    }
    _destroyRipple(e) {
      let t = this._activeRipples.get(e) ?? null;
      this._activeRipples.delete(e),
        this._activeRipples.size || (this._containerRect = null),
        e === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (e.state = je.HIDDEN),
        t !== null &&
          (e.element.removeEventListener("transitionend", t.onTransitionEnd),
          e.element.removeEventListener(
            "transitioncancel",
            t.onTransitionCancel,
          ),
          t.fallbackTimer !== null && clearTimeout(t.fallbackTimer)),
        e.element.remove();
    }
    _onMousedown(e) {
      let t = Zd(e),
        i =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + vw;
      !this._target.rippleDisabled &&
        !t &&
        !i &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig));
    }
    _onTouchStart(e) {
      if (!this._target.rippleDisabled && !Xd(e)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let t = e.changedTouches;
        if (t)
          for (let i = 0; i < t.length; i++)
            this.fadeInRipple(
              t[i].clientX,
              t[i].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((e) => {
          let t =
            e.state === je.VISIBLE ||
            (e.config.terminateOnPointerUp && e.state === je.FADING_IN);
          !e.config.persistent && t && e.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let e = this._triggerElement;
      e &&
        (bp.forEach((t) => n._eventManager.removeHandler(t, e, this)),
        this._pointerUpEventsRegistered &&
          (_p.forEach((t) => e.removeEventListener(t, this, vp)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
function bw(n, e, t) {
  let i = Math.max(Math.abs(n - t.left), Math.abs(n - t.right)),
    r = Math.max(Math.abs(e - t.top), Math.abs(e - t.bottom));
  return Math.sqrt(i * i + r * r);
}
var su = new Y("mat-ripple-global-options"),
  _w = (() => {
    class n {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        t && this.fadeOutAllNonPersistent(),
          (this._disabled = t),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(t) {
        (this._trigger = t), this._setupTriggerEventsIfEnabled();
      }
      constructor(t, i, r, a, c) {
        (this._elementRef = t),
          (this._animationMode = c),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new Ba(this, i, t, r));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: C(
            C(
              C({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(t, i = 0, r) {
        return typeof t == "number"
          ? this._rippleRenderer.fadeInRipple(
              t,
              i,
              C(C({}, this.rippleConfig), r),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              C(C({}, this.rippleConfig), t),
            );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(gt), P(st), P(wt), P(su, 8), P(pe, 8));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "mat-ripple", ""],
            ["", "matRipple", ""],
          ],
          hostAttrs: [1, "mat-ripple"],
          hostVars: 2,
          hostBindings: function (i, r) {
            i & 2 && Rt("mat-ripple-unbounded", r.unbounded);
          },
          inputs: {
            color: [0, "matRippleColor", "color"],
            unbounded: [0, "matRippleUnbounded", "unbounded"],
            centered: [0, "matRippleCentered", "centered"],
            radius: [0, "matRippleRadius", "radius"],
            animation: [0, "matRippleAnimation", "animation"],
            disabled: [0, "matRippleDisabled", "disabled"],
            trigger: [0, "matRippleTrigger", "trigger"],
          },
          exportAs: ["matRipple"],
          standalone: !0,
        });
      }
    }
    return n;
  })(),
  za = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [zt, zt] });
      }
    }
    return n;
  })();
var Ep = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ imports: [zt] });
    }
  }
  return n;
})();
var yp = { capture: !0 },
  wp = ["focus", "mousedown", "mouseenter", "touchstart"],
  iu = "mat-ripple-loader-uninitialized",
  nu = "mat-ripple-loader-class-name",
  xp = "mat-ripple-loader-centered",
  ja = "mat-ripple-loader-disabled",
  Ip = (() => {
    class n {
      constructor() {
        (this._document = B(dt, { optional: !0 })),
          (this._animationMode = B(pe, { optional: !0 })),
          (this._globalRippleOptions = B(su, { optional: !0 })),
          (this._platform = B(wt)),
          (this._ngZone = B(st)),
          (this._hosts = new Map()),
          (this._onInteraction = (t) => {
            let i = Le(t);
            if (i instanceof HTMLElement) {
              let r = i.closest(
                `[${iu}="${this._globalRippleOptions?.namespace ?? ""}"]`,
              );
              r && this._createRipple(r);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let t of wp)
              this._document?.addEventListener(t, this._onInteraction, yp);
          });
      }
      ngOnDestroy() {
        let t = this._hosts.keys();
        for (let i of t) this.destroyRipple(i);
        for (let i of wp)
          this._document?.removeEventListener(i, this._onInteraction, yp);
      }
      configureRipple(t, i) {
        t.setAttribute(iu, this._globalRippleOptions?.namespace ?? ""),
          (i.className || !t.hasAttribute(nu)) &&
            t.setAttribute(nu, i.className || ""),
          i.centered && t.setAttribute(xp, ""),
          i.disabled && t.setAttribute(ja, "");
      }
      getRipple(t) {
        return this._hosts.get(t) || this._createRipple(t);
      }
      setDisabled(t, i) {
        let r = this._hosts.get(t);
        if (r) {
          r.disabled = i;
          return;
        }
        i ? t.setAttribute(ja, "") : t.removeAttribute(ja);
      }
      _createRipple(t) {
        if (!this._document) return;
        let i = this._hosts.get(t);
        if (i) return i;
        t.querySelector(".mat-ripple")?.remove();
        let r = this._document.createElement("span");
        r.classList.add("mat-ripple", t.getAttribute(nu)), t.append(r);
        let a = new _w(
          new gt(r),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = t),
          (a.centered = t.hasAttribute(xp)),
          (a.disabled = t.hasAttribute(ja)),
          this.attachRipple(t, a),
          a
        );
      }
      attachRipple(t, i) {
        t.removeAttribute(iu), this._hosts.set(t, i);
      }
      destroyRipple(t) {
        let i = this._hosts.get(t);
        i && (i.ngOnDestroy(), this._hosts.delete(t));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var ww = ["mat-button", ""],
  xw = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  Cw = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var Ew =
  ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Iw = ["mat-icon-button", ""],
  Dw = ["*"];
var Aw = new Y("MAT_BUTTON_CONFIG");
var Sw = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    {
      attribute: "mat-fab",
      mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
    },
    {
      attribute: "mat-mini-fab",
      mdcClasses: [
        "mdc-fab",
        "mat-mdc-fab-base",
        "mdc-fab--mini",
        "mat-mdc-mini-fab",
      ],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Dp = (() => {
    class n {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(t) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, t);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(t) {
        (this._disableRipple = t), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = t), this._updateRippleDisabled();
      }
      constructor(t, i, r, a) {
        (this._elementRef = t),
          (this._platform = i),
          (this._ngZone = r),
          (this._animationMode = a),
          (this._focusMonitor = B(Mr)),
          (this._rippleLoader = B(Ip)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let c = B(Aw, { optional: !0 }),
          h = t.nativeElement,
          f = h.classList;
        (this.disabledInteractive = c?.disabledInteractive ?? !1),
          (this.color = c?.color ?? null),
          this._rippleLoader?.configureRipple(h, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: b, mdcClasses: y } of Sw)
          h.hasAttribute(b) && f.add(...y);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(t = "program", i) {
        t
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, t, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
      static {
        this.ɵfac = function (i) {
          po();
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          inputs: {
            color: "color",
            disableRipple: [2, "disableRipple", "disableRipple", we],
            disabled: [2, "disabled", "disabled", we],
            ariaDisabled: [2, "aria-disabled", "ariaDisabled", we],
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              we,
            ],
          },
          features: [Qe],
        });
      }
    }
    return n;
  })();
var Ap = (() => {
  class n extends Dp {
    constructor(t, i, r, a) {
      super(t, i, r, a);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(P(gt), P(wt), P(st), P(pe, 8));
      };
    }
    static {
      this.ɵcmp = kt({
        type: n,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            (Mt("disabled", r._getDisabledAttribute())(
              "aria-disabled",
              r._getAriaDisabled(),
            ),
            vo(r.color ? "mat-" + r.color : ""),
            Rt("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive,
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [Ht, Tt],
        attrs: ww,
        ngContentSelectors: Cw,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ze(xw),
            qt(0, "span", 0),
            Yt(1),
            at(2, "span", 1),
            Yt(3, 1),
            ct(),
            Yt(4, 2),
            qt(5, "span", 2)(6, "span", 3)),
            i & 2 &&
              Rt("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
        },
        styles: [
          '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return n;
})();
var Ua = (() => {
  class n extends Dp {
    constructor(t, i, r, a) {
      super(t, i, r, a),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(P(gt), P(wt), P(st), P(pe, 8));
      };
    }
    static {
      this.ɵcmp = kt({
        type: n,
        selectors: [["button", "mat-icon-button", ""]],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            (Mt("disabled", r._getDisabledAttribute())(
              "aria-disabled",
              r._getAriaDisabled(),
            ),
            vo(r.color ? "mat-" + r.color : ""),
            Rt("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive,
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [Ht, Tt],
        attrs: Iw,
        ngContentSelectors: Dw,
        decls: 4,
        vars: 0,
        consts: [
          [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ze(), qt(0, "span", 0), Yt(1), qt(2, "span", 1)(3, "span", 2));
        },
        styles: [
          '.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);color:var(--mdc-icon-button-icon-color, var(--mat-app-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
          Ew,
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return n;
})();
var Rr = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ imports: [zt, za, zt] });
    }
  }
  return n;
})();
var Sp = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ imports: [zt, zt] });
    }
  }
  return n;
})();
var Lp = (() => {
    class n {
      constructor(t, i) {
        (this._renderer = t),
          (this._elementRef = i),
          (this.onChange = (r) => {}),
          (this.onTouched = () => {});
      }
      setProperty(t, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, t, i);
      }
      registerOnTouched(t) {
        this.onTouched = t;
      }
      registerOnChange(t) {
        this.onChange = t;
      }
      setDisabledState(t) {
        this.setProperty("disabled", t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(Qs), P(gt));
        };
      }
      static {
        this.ɵdir = mt({ type: n });
      }
    }
    return n;
  })(),
  kw = (() => {
    class n extends Lp {
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = fe(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵdir = mt({ type: n, features: [Ht] });
      }
    }
    return n;
  })(),
  Np = new Y("");
var Mw = { provide: Np, useExisting: rr(() => el), multi: !0 };
function Rw() {
  let n = dr() ? dr().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var Tw = new Y(""),
  el = (() => {
    class n extends Lp {
      constructor(t, i, r) {
        super(t, i),
          (this._compositionMode = r),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !Rw());
      }
      writeValue(t) {
        let i = t ?? "";
        this.setProperty("value", i);
      }
      _handleInput(t) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(t);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(t) {
        (this._composing = !1), this._compositionMode && this.onChange(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(Qs), P(gt), P(Tw, 8));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["input", "formControlName", "", 3, "type", "checkbox"],
            ["textarea", "formControlName", ""],
            ["input", "formControl", "", 3, "type", "checkbox"],
            ["textarea", "formControl", ""],
            ["input", "ngModel", "", 3, "type", "checkbox"],
            ["textarea", "ngModel", ""],
            ["", "ngDefaultControl", ""],
          ],
          hostBindings: function (i, r) {
            i & 1 &&
              $t("input", function (c) {
                return r._handleInput(c.target.value);
              })("blur", function () {
                return r.onTouched();
              })("compositionstart", function () {
                return r._compositionStart();
              })("compositionend", function (c) {
                return r._compositionEnd(c.target.value);
              });
          },
          features: [ce([Mw]), Ht],
        });
      }
    }
    return n;
  })();
function ln(n) {
  return (
    n == null || ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
  );
}
function jp(n) {
  return n != null && typeof n.length == "number";
}
var il = new Y(""),
  uu = new Y(""),
  Ow =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  $a = class {
    static min(e) {
      return Fw(e);
    }
    static max(e) {
      return Pw(e);
    }
    static required(e) {
      return Vp(e);
    }
    static requiredTrue(e) {
      return Lw(e);
    }
    static email(e) {
      return Nw(e);
    }
    static minLength(e) {
      return jw(e);
    }
    static maxLength(e) {
      return Vw(e);
    }
    static pattern(e) {
      return Bw(e);
    }
    static nullValidator(e) {
      return Ka(e);
    }
    static compose(e) {
      return Kp(e);
    }
    static composeAsync(e) {
      return Wp(e);
    }
  };
function Fw(n) {
  return (e) => {
    if (ln(e.value) || ln(n)) return null;
    let t = parseFloat(e.value);
    return !isNaN(t) && t < n ? { min: { min: n, actual: e.value } } : null;
  };
}
function Pw(n) {
  return (e) => {
    if (ln(e.value) || ln(n)) return null;
    let t = parseFloat(e.value);
    return !isNaN(t) && t > n ? { max: { max: n, actual: e.value } } : null;
  };
}
function Vp(n) {
  return ln(n.value) ? { required: !0 } : null;
}
function Lw(n) {
  return n.value === !0 ? null : { required: !0 };
}
function Nw(n) {
  return ln(n.value) || Ow.test(n.value) ? null : { email: !0 };
}
function jw(n) {
  return (e) =>
    ln(e.value) || !jp(e.value)
      ? null
      : e.value.length < n
        ? { minlength: { requiredLength: n, actualLength: e.value.length } }
        : null;
}
function Vw(n) {
  return (e) =>
    jp(e.value) && e.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: e.value.length } }
      : null;
}
function Bw(n) {
  if (!n) return Ka;
  let e, t;
  return (
    typeof n == "string"
      ? ((t = ""),
        n.charAt(0) !== "^" && (t += "^"),
        (t += n),
        n.charAt(n.length - 1) !== "$" && (t += "$"),
        (e = new RegExp(t)))
      : ((t = n.toString()), (e = n)),
    (i) => {
      if (ln(i.value)) return null;
      let r = i.value;
      return e.test(r)
        ? null
        : { pattern: { requiredPattern: t, actualValue: r } };
    }
  );
}
function Ka(n) {
  return null;
}
function Bp(n) {
  return n != null;
}
function zp(n) {
  return ea(n) ? oe(n) : n;
}
function Up(n) {
  let e = {};
  return (
    n.forEach((t) => {
      e = t != null ? C(C({}, e), t) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function Hp(n, e) {
  return e.map((t) => t(n));
}
function zw(n) {
  return !n.validate;
}
function $p(n) {
  return n.map((e) => (zw(e) ? e : (t) => e.validate(t)));
}
function Kp(n) {
  if (!n) return null;
  let e = n.filter(Bp);
  return e.length == 0
    ? null
    : function (t) {
        return Up(Hp(t, e));
      };
}
function hu(n) {
  return n != null ? Kp($p(n)) : null;
}
function Wp(n) {
  if (!n) return null;
  let e = n.filter(Bp);
  return e.length == 0
    ? null
    : function (t) {
        let i = Hp(t, e).map(zp);
        return er(i).pipe(Q(Up));
      };
}
function mu(n) {
  return n != null ? Wp($p(n)) : null;
}
function kp(n, e) {
  return n === null ? [e] : Array.isArray(n) ? [...n, e] : [n, e];
}
function Gp(n) {
  return n._rawValidators;
}
function qp(n) {
  return n._rawAsyncValidators;
}
function lu(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function Wa(n, e) {
  return Array.isArray(n) ? n.includes(e) : n === e;
}
function Mp(n, e) {
  let t = lu(e);
  return (
    lu(n).forEach((r) => {
      Wa(t, r) || t.push(r);
    }),
    t
  );
}
function Rp(n, e) {
  return lu(e).filter((t) => !Wa(n, t));
}
var Ga = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = hu(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = mu(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((e) => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, t) {
      return this.control ? this.control.hasError(e, t) : !1;
    }
    getError(e, t) {
      return this.control ? this.control.getError(e, t) : null;
    }
  },
  cn = class extends Ga {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  zn = class extends Ga {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  qa = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  Uw = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  gA = Z(C({}, Uw), { "[class.ng-submitted]": "isSubmitted" }),
  Yp = (() => {
    class n extends qa {
      constructor(t) {
        super(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(zn, 2));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""],
          ],
          hostVars: 14,
          hostBindings: function (i, r) {
            i & 2 &&
              Rt("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
                "ng-pristine",
                r.isPristine,
              )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
                "ng-invalid",
                r.isInvalid,
              )("ng-pending", r.isPending);
          },
          features: [Ht],
        });
      }
    }
    return n;
  })(),
  Qp = (() => {
    class n extends qa {
      constructor(t) {
        super(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(cn, 10));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "formGroupName", ""],
            ["", "formArrayName", ""],
            ["", "ngModelGroup", ""],
            ["", "formGroup", ""],
            ["form", 3, "ngNoForm", ""],
            ["", "ngForm", ""],
          ],
          hostVars: 16,
          hostBindings: function (i, r) {
            i & 2 &&
              Rt("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
                "ng-pristine",
                r.isPristine,
              )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
                "ng-invalid",
                r.isInvalid,
              )("ng-pending", r.isPending)("ng-submitted", r.isSubmitted);
          },
          features: [Ht],
        });
      }
    }
    return n;
  })();
var Zo = "VALID",
  Ha = "INVALID",
  Tr = "PENDING",
  Xo = "DISABLED",
  dn = class {},
  Ya = class extends dn {
    constructor(e, t) {
      super(), (this.value = e), (this.source = t);
    }
  },
  ts = class extends dn {
    constructor(e, t) {
      super(), (this.pristine = e), (this.source = t);
    }
  },
  es = class extends dn {
    constructor(e, t) {
      super(), (this.touched = e), (this.source = t);
    }
  },
  Or = class extends dn {
    constructor(e, t) {
      super(), (this.status = e), (this.source = t);
    }
  },
  cu = class extends dn {
    constructor(e) {
      super(), (this.source = e);
    }
  },
  du = class extends dn {
    constructor(e) {
      super(), (this.source = e);
    }
  };
function Zp(n) {
  return (nl(n) ? n.validators : n) || null;
}
function Hw(n) {
  return Array.isArray(n) ? hu(n) : n || null;
}
function Xp(n, e) {
  return (nl(e) ? e.asyncValidators : n) || null;
}
function $w(n) {
  return Array.isArray(n) ? mu(n) : n || null;
}
function nl(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function Kw(n, e, t) {
  let i = n.controls;
  if (!(e ? Object.keys(i) : i).length) throw new Et(1e3, "");
  if (!i[t]) throw new Et(1001, "");
}
function Ww(n, e, t) {
  n._forEachChild((i, r) => {
    if (t[r] === void 0) throw new Et(1002, "");
  });
}
var Qa = class {
    constructor(e, t) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = yi(() => this.statusReactive())),
        (this.statusReactive = qi(void 0)),
        (this._pristine = yi(() => this.pristineReactive())),
        (this.pristineReactive = qi(!0)),
        (this._touched = yi(() => this.touchedReactive())),
        (this.touchedReactive = qi(!1)),
        (this._events = new et()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(t);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return Xe(this.statusReactive);
    }
    set status(e) {
      Xe(() => this.statusReactive.set(e));
    }
    get valid() {
      return this.status === Zo;
    }
    get invalid() {
      return this.status === Ha;
    }
    get pending() {
      return this.status == Tr;
    }
    get disabled() {
      return this.status === Xo;
    }
    get enabled() {
      return this.status !== Xo;
    }
    get pristine() {
      return Xe(this.pristineReactive);
    }
    set pristine(e) {
      Xe(() => this.pristineReactive.set(e));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Xe(this.touchedReactive);
    }
    set touched(e) {
      Xe(() => this.touchedReactive.set(e));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(Mp(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(Mp(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(Rp(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(Rp(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return Wa(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return Wa(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      let t = this.touched === !1;
      this.touched = !0;
      let i = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsTouched(Z(C({}, e), { sourceControl: i })),
        t && e.emitEvent !== !1 && this._events.next(new es(!0, i));
    }
    markAllAsTouched(e = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: e.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((t) => t.markAllAsTouched(e));
    }
    markAsUntouched(e = {}) {
      let t = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let i = e.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: e.emitEvent,
          sourceControl: i,
        });
      }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, i),
        t && e.emitEvent !== !1 && this._events.next(new es(!1, i));
    }
    markAsDirty(e = {}) {
      let t = this.pristine === !0;
      this.pristine = !1;
      let i = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsDirty(Z(C({}, e), { sourceControl: i })),
        t && e.emitEvent !== !1 && this._events.next(new ts(!1, i));
    }
    markAsPristine(e = {}) {
      let t = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let i = e.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, i),
        t && e.emitEvent !== !1 && this._events.next(new ts(!0, i));
    }
    markAsPending(e = {}) {
      this.status = Tr;
      let t = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Or(this.status, t)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.markAsPending(Z(C({}, e), { sourceControl: t }));
    }
    disable(e = {}) {
      let t = this._parentMarkedDirty(e.onlySelf);
      (this.status = Xo),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(Z(C({}, e), { onlySelf: !0 }));
        }),
        this._updateValue();
      let i = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Ya(this.value, i)),
        this._events.next(new Or(this.status, i)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(Z(C({}, e), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(e = {}) {
      let t = this._parentMarkedDirty(e.onlySelf);
      (this.status = Zo),
        this._forEachChild((i) => {
          i.enable(Z(C({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors(Z(C({}, e), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(e, t) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine({}, t),
        this._parent._updateTouched({}, t));
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let i = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Zo || this.status === Tr) &&
            this._runAsyncValidator(i, e.emitEvent);
      }
      let t = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Ya(this.value, t)),
        this._events.next(new Or(this.status, t)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.updateValueAndValidity(
            Z(C({}, e), { sourceControl: t }),
          );
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild((t) => t._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Xo : Zo;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e, t) {
      if (this.asyncValidator) {
        (this.status = Tr),
          (this._hasOwnPendingAsyncValidator = { emitEvent: t !== !1 });
        let i = zp(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: t, shouldHaveEmitted: e });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let e = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), e;
      }
      return !1;
    }
    setErrors(e, t = {}) {
      (this.errors = e),
        this._updateControlsErrors(
          t.emitEvent !== !1,
          this,
          t.shouldHaveEmitted,
        );
    }
    get(e) {
      let t = e;
      return t == null ||
        (Array.isArray(t) || (t = t.split(".")), t.length === 0)
        ? null
        : t.reduce((i, r) => i && i._find(r), this);
    }
    getError(e, t) {
      let i = t ? this.get(t) : this;
      return i && i.errors ? i.errors[e] : null;
    }
    hasError(e, t) {
      return !!this.getError(e, t);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e, t, i) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        (e || i) && this._events.next(new Or(this.status, t)),
        this._parent && this._parent._updateControlsErrors(e, t, i);
    }
    _initObservables() {
      (this.valueChanges = new St()), (this.statusChanges = new St());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? Xo
        : this.errors
          ? Ha
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Tr)
            ? Tr
            : this._anyControlsHaveStatus(Ha)
              ? Ha
              : Zo;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls((t) => t.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls((e) => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((e) => e.touched);
    }
    _updatePristine(e, t) {
      let i = !this._anyControlsDirty(),
        r = this.pristine !== i;
      (this.pristine = i),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, t),
        r && this._events.next(new ts(this.pristine, t));
    }
    _updateTouched(e = {}, t) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new es(this.touched, t)),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, t);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      nl(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let t = this._parent && this._parent.dirty;
      return !e && !!t && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = Hw(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = $w(this._rawAsyncValidators));
    }
  },
  Za = class extends Qa {
    constructor(e, t, i) {
      super(Zp(t), Xp(i, t)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(t),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, t) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = t),
          t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange),
          t);
    }
    addControl(e, t, i = {}) {
      this.registerControl(e, t),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, t = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, t, i = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        t && this.registerControl(e, t),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, t = {}) {
      Ww(this, !0, e),
        Object.keys(e).forEach((i) => {
          Kw(this, !0, i),
            this.controls[i].setValue(e[i], {
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }),
        this.updateValueAndValidity(t);
    }
    patchValue(e, t = {}) {
      e != null &&
        (Object.keys(e).forEach((i) => {
          let r = this.controls[i];
          r && r.patchValue(e[i], { onlySelf: !0, emitEvent: t.emitEvent });
        }),
        this.updateValueAndValidity(t));
    }
    reset(e = {}, t = {}) {
      this._forEachChild((i, r) => {
        i.reset(e ? e[r] : null, { onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._updatePristine(t, this),
        this._updateTouched(t, this),
        this.updateValueAndValidity(t);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, t, i) => ((e[i] = t.getRawValue()), e),
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (t, i) =>
        i._syncPendingControls() ? !0 : t,
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach((t) => {
        let i = this.controls[t];
        i && e(i, t);
      });
    }
    _setUpControls() {
      this._forEachChild((e) => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [t, i] of Object.entries(this.controls))
        if (this.contains(t) && e(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (t, i, r) => ((i.enabled || this.disabled) && (t[r] = i.value), t),
      );
    }
    _reduceChildren(e, t) {
      let i = e;
      return (
        this._forEachChild((r, a) => {
          i = t(i, r, a);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var rl = new Y("CallSetDisabledState", {
    providedIn: "root",
    factory: () => fu,
  }),
  fu = "always";
function Gw(n, e) {
  return [...e.path, n];
}
function Xa(n, e, t = fu) {
  pu(n, e),
    e.valueAccessor.writeValue(n.value),
    (n.disabled || t === "always") &&
      e.valueAccessor.setDisabledState?.(n.disabled),
    Yw(n, e),
    Zw(n, e),
    Qw(n, e),
    qw(n, e);
}
function Tp(n, e, t = !0) {
  let i = () => {};
  e.valueAccessor &&
    (e.valueAccessor.registerOnChange(i), e.valueAccessor.registerOnTouched(i)),
    tl(n, e),
    n &&
      (e._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Ja(n, e) {
  n.forEach((t) => {
    t.registerOnValidatorChange && t.registerOnValidatorChange(e);
  });
}
function qw(n, e) {
  if (e.valueAccessor.setDisabledState) {
    let t = (i) => {
      e.valueAccessor.setDisabledState(i);
    };
    n.registerOnDisabledChange(t),
      e._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(t);
      });
  }
}
function pu(n, e) {
  let t = Gp(n);
  e.validator !== null
    ? n.setValidators(kp(t, e.validator))
    : typeof t == "function" && n.setValidators([t]);
  let i = qp(n);
  e.asyncValidator !== null
    ? n.setAsyncValidators(kp(i, e.asyncValidator))
    : typeof i == "function" && n.setAsyncValidators([i]);
  let r = () => n.updateValueAndValidity();
  Ja(e._rawValidators, r), Ja(e._rawAsyncValidators, r);
}
function tl(n, e) {
  let t = !1;
  if (n !== null) {
    if (e.validator !== null) {
      let r = Gp(n);
      if (Array.isArray(r) && r.length > 0) {
        let a = r.filter((c) => c !== e.validator);
        a.length !== r.length && ((t = !0), n.setValidators(a));
      }
    }
    if (e.asyncValidator !== null) {
      let r = qp(n);
      if (Array.isArray(r) && r.length > 0) {
        let a = r.filter((c) => c !== e.asyncValidator);
        a.length !== r.length && ((t = !0), n.setAsyncValidators(a));
      }
    }
  }
  let i = () => {};
  return Ja(e._rawValidators, i), Ja(e._rawAsyncValidators, i), t;
}
function Yw(n, e) {
  e.valueAccessor.registerOnChange((t) => {
    (n._pendingValue = t),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && Jp(n, e);
  });
}
function Qw(n, e) {
  e.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && Jp(n, e),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function Jp(n, e) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function Zw(n, e) {
  let t = (i, r) => {
    e.valueAccessor.writeValue(i), r && e.viewToModelUpdate(i);
  };
  n.registerOnChange(t),
    e._registerOnDestroy(() => {
      n._unregisterOnChange(t);
    });
}
function tg(n, e) {
  n == null, pu(n, e);
}
function Xw(n, e) {
  return tl(n, e);
}
function Jw(n, e) {
  if (!n.hasOwnProperty("model")) return !1;
  let t = n.model;
  return t.isFirstChange() ? !0 : !Object.is(e, t.currentValue);
}
function tx(n) {
  return Object.getPrototypeOf(n.constructor) === kw;
}
function eg(n, e) {
  n._syncPendingControls(),
    e.forEach((t) => {
      let i = t.control;
      i.updateOn === "submit" &&
        i._pendingChange &&
        (t.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function ex(n, e) {
  if (!e) return null;
  Array.isArray(e);
  let t, i, r;
  return (
    e.forEach((a) => {
      a.constructor === el ? (t = a) : tx(a) ? (i = a) : (r = a);
    }),
    r || i || t || null
  );
}
function ix(n, e) {
  let t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}
var nx = { provide: cn, useExisting: rr(() => is) },
  Jo = Promise.resolve(),
  is = (() => {
    class n extends cn {
      get submitted() {
        return Xe(this.submittedReactive);
      }
      constructor(t, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = yi(() => this.submittedReactive())),
          (this.submittedReactive = qi(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new St()),
          (this.form = new Za({}, hu(t), mu(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(t) {
        Jo.then(() => {
          let i = this._findContainer(t.path);
          (t.control = i.registerControl(t.name, t.control)),
            Xa(t.control, t, this.callSetDisabledState),
            t.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(t);
        });
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        Jo.then(() => {
          let i = this._findContainer(t.path);
          i && i.removeControl(t.name), this._directives.delete(t);
        });
      }
      addFormGroup(t) {
        Jo.then(() => {
          let i = this._findContainer(t.path),
            r = new Za({});
          tg(r, t),
            i.registerControl(t.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(t) {
        Jo.then(() => {
          let i = this._findContainer(t.path);
          i && i.removeControl(t.name);
        });
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      updateModel(t, i) {
        Jo.then(() => {
          this.form.get(t.path).setValue(i);
        });
      }
      setValue(t) {
        this.control.setValue(t);
      }
      onSubmit(t) {
        return (
          this.submittedReactive.set(!0),
          eg(this.form, this._directives),
          this.ngSubmit.emit(t),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(t) {
        return t.pop(), t.length ? this.form.get(t) : this.form;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(il, 10), P(uu, 10), P(rl, 8));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
            ["ng-form"],
            ["", "ngForm", ""],
          ],
          hostBindings: function (i, r) {
            i & 1 &&
              $t("submit", function (c) {
                return r.onSubmit(c);
              })("reset", function () {
                return r.onReset();
              });
          },
          inputs: { options: [0, "ngFormOptions", "options"] },
          outputs: { ngSubmit: "ngSubmit" },
          exportAs: ["ngForm"],
          features: [ce([nx]), Ht],
        });
      }
    }
    return n;
  })();
function Op(n, e) {
  let t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}
function Fp(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var ig = class extends Qa {
  constructor(e = null, t, i) {
    super(Zp(t), Xp(i, t)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(t),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      nl(t) &&
        (t.nonNullable || t.initialValueIsDefault) &&
        (Fp(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, t = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        t.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, t.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(t);
  }
  patchValue(e, t = {}) {
    this.setValue(e, t);
  }
  reset(e = this.defaultValue, t = {}) {
    this._applyFormState(e),
      this.markAsPristine(t),
      this.markAsUntouched(t),
      this.setValue(this.value, t),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    Op(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    Op(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    Fp(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var rx = (n) => n instanceof ig;
var ox = { provide: zn, useExisting: rr(() => gu) },
  Pp = Promise.resolve(),
  gu = (() => {
    class n extends zn {
      constructor(t, i, r, a, c, h) {
        super(),
          (this._changeDetectorRef = c),
          (this.callSetDisabledState = h),
          (this.control = new ig()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new St()),
          (this._parent = t),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = ex(this, a));
      }
      ngOnChanges(t) {
        if ((this._checkForErrors(), !this._registered || "name" in t)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = t.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in t && this._updateDisabled(t),
          Jw(t, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(t) {
        (this.viewModel = t), this.update.emit(t);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        Xa(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(t) {
        Pp.then(() => {
          this.control.setValue(t, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(t) {
        let i = t.isDisabled.currentValue,
          r = i !== 0 && we(i);
        Pp.then(() => {
          r && !this.control.disabled
            ? this.control.disable()
            : !r && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(t) {
        return this._parent ? Gw(t, this._parent) : [t];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(cn, 9),
            P(il, 10),
            P(uu, 10),
            P(Np, 10),
            P(ye, 8),
            P(rl, 8),
          );
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
          ],
          inputs: {
            name: "name",
            isDisabled: [0, "disabled", "isDisabled"],
            model: [0, "ngModel", "model"],
            options: [0, "ngModelOptions", "options"],
          },
          outputs: { update: "ngModelChange" },
          exportAs: ["ngModel"],
          features: [ce([ox]), Ht, Ie],
        });
      }
    }
    return n;
  })(),
  ng = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
          hostAttrs: ["novalidate", ""],
        });
      }
    }
    return n;
  })();
var sx = { provide: cn, useExisting: rr(() => vu) },
  vu = (() => {
    class n extends cn {
      get submitted() {
        return Xe(this._submittedReactive);
      }
      set submitted(t) {
        this._submittedReactive.set(t);
      }
      constructor(t, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = yi(() => this._submittedReactive())),
          (this._submittedReactive = qi(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new St()),
          this._setValidators(t),
          this._setAsyncValidators(i);
      }
      ngOnChanges(t) {
        this._checkFormPresent(),
          t.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (tl(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(t) {
        let i = this.form.get(t.path);
        return (
          Xa(i, t, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(t),
          i
        );
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        Tp(t.control || null, t, !1), ix(this.directives, t);
      }
      addFormGroup(t) {
        this._setUpFormContainer(t);
      }
      removeFormGroup(t) {
        this._cleanUpFormContainer(t);
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      addFormArray(t) {
        this._setUpFormContainer(t);
      }
      removeFormArray(t) {
        this._cleanUpFormContainer(t);
      }
      getFormArray(t) {
        return this.form.get(t.path);
      }
      updateModel(t, i) {
        this.form.get(t.path).setValue(i);
      }
      onSubmit(t) {
        return (
          this._submittedReactive.set(!0),
          eg(this.form, this.directives),
          this.ngSubmit.emit(t),
          this.form._events.next(new cu(this.control)),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t),
          this._submittedReactive.set(!1),
          this.form._events.next(new du(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((t) => {
          let i = t.control,
            r = this.form.get(t.path);
          i !== r &&
            (Tp(i || null, t),
            rx(r) && (Xa(r, t, this.callSetDisabledState), (t.control = r)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(t) {
        let i = this.form.get(t.path);
        tg(i, t), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(t) {
        if (this.form) {
          let i = this.form.get(t.path);
          i && Xw(i, t) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        pu(this.form, this), this._oldForm && tl(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(il, 10), P(uu, 10), P(rl, 8));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["", "formGroup", ""]],
          hostBindings: function (i, r) {
            i & 1 &&
              $t("submit", function (c) {
                return r.onSubmit(c);
              })("reset", function () {
                return r.onReset();
              });
          },
          inputs: { form: [0, "formGroup", "form"] },
          outputs: { ngSubmit: "ngSubmit" },
          exportAs: ["ngForm"],
          features: [ce([sx]), Ht, Ie],
        });
      }
    }
    return n;
  })();
var ax = (() => {
  class n {
    constructor() {
      this._validator = Ka;
    }
    ngOnChanges(t) {
      if (this.inputName in t) {
        let i = this.normalizeInput(t[this.inputName].currentValue);
        (this._enabled = this.enabled(i)),
          (this._validator = this._enabled ? this.createValidator(i) : Ka),
          this._onChange && this._onChange();
      }
    }
    validate(t) {
      return this._validator(t);
    }
    registerOnValidatorChange(t) {
      this._onChange = t;
    }
    enabled(t) {
      return t != null;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵdir = mt({ type: n, features: [Ie] });
    }
  }
  return n;
})();
var lx = { provide: il, useExisting: rr(() => bu), multi: !0 };
var bu = (() => {
  class n extends ax {
    constructor() {
      super(...arguments),
        (this.inputName = "required"),
        (this.normalizeInput = we),
        (this.createValidator = (t) => Vp);
    }
    enabled(t) {
      return t;
    }
    static {
      this.ɵfac = (() => {
        let t;
        return function (r) {
          return (t || (t = fe(n)))(r || n);
        };
      })();
    }
    static {
      this.ɵdir = mt({
        type: n,
        selectors: [
          ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
          ["", "required", "", "formControl", "", 3, "type", "checkbox"],
          ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
        ],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 2 && Mt("required", r._enabled ? "" : null);
        },
        inputs: { required: "required" },
        features: [ce([lx]), Ht],
      });
    }
  }
  return n;
})();
var cx = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({});
    }
  }
  return n;
})();
var rg = (() => {
  class n {
    static withConfig(t) {
      return {
        ngModule: n,
        providers: [{ provide: rl, useValue: t.callSetDisabledState ?? fu }],
      };
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ imports: [cx] });
    }
  }
  return n;
})();
var sg = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ imports: [Sr, wi, zt, za, Ep, Sp] });
    }
  }
  return n;
})();
var dx = ["*"],
  ol;
function ux() {
  if (ol === void 0 && ((ol = null), typeof window < "u")) {
    let n = window;
    n.trustedTypes !== void 0 &&
      (ol = n.trustedTypes.createPolicy("angular#components", {
        createHTML: (e) => e,
      }));
  }
  return ol;
}
function ns(n) {
  return ux()?.createHTML(n) || n;
}
function ag(n) {
  return Error(`Unable to find icon with the name "${n}"`);
}
function hx() {
  return Error(
    "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.",
  );
}
function lg(n) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`,
  );
}
function cg(n) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`,
  );
}
var Ai = class {
    constructor(e, t, i) {
      (this.url = e), (this.svgText = t), (this.options = i);
    }
  },
  mx = (() => {
    class n {
      constructor(t, i, r, a) {
        (this._httpClient = t),
          (this._sanitizer = i),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = r);
      }
      addSvgIcon(t, i, r) {
        return this.addSvgIconInNamespace("", t, i, r);
      }
      addSvgIconLiteral(t, i, r) {
        return this.addSvgIconLiteralInNamespace("", t, i, r);
      }
      addSvgIconInNamespace(t, i, r, a) {
        return this._addSvgIconConfig(t, i, new Ai(r, null, a));
      }
      addSvgIconResolver(t) {
        return this._resolvers.push(t), this;
      }
      addSvgIconLiteralInNamespace(t, i, r, a) {
        let c = this._sanitizer.sanitize(De.HTML, r);
        if (!c) throw cg(r);
        let h = ns(c);
        return this._addSvgIconConfig(t, i, new Ai("", h, a));
      }
      addSvgIconSet(t, i) {
        return this.addSvgIconSetInNamespace("", t, i);
      }
      addSvgIconSetLiteral(t, i) {
        return this.addSvgIconSetLiteralInNamespace("", t, i);
      }
      addSvgIconSetInNamespace(t, i, r) {
        return this._addSvgIconSetConfig(t, new Ai(i, null, r));
      }
      addSvgIconSetLiteralInNamespace(t, i, r) {
        let a = this._sanitizer.sanitize(De.HTML, i);
        if (!a) throw cg(i);
        let c = ns(a);
        return this._addSvgIconSetConfig(t, new Ai("", c, r));
      }
      registerFontClassAlias(t, i = t) {
        return this._fontCssClassesByAlias.set(t, i), this;
      }
      classNameForFontAlias(t) {
        return this._fontCssClassesByAlias.get(t) || t;
      }
      setDefaultFontSetClass(...t) {
        return (this._defaultFontSetClass = t), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(t) {
        let i = this._sanitizer.sanitize(De.RESOURCE_URL, t);
        if (!i) throw lg(t);
        let r = this._cachedIconsByUrl.get(i);
        return r
          ? W(sl(r))
          : this._loadSvgIconFromConfig(new Ai(t, null)).pipe(
              Vt((a) => this._cachedIconsByUrl.set(i, a)),
              Q((a) => sl(a)),
            );
      }
      getNamedSvgIcon(t, i = "") {
        let r = dg(i, t),
          a = this._svgIconConfigs.get(r);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(i, t)), a))
          return this._svgIconConfigs.set(r, a), this._getSvgFromConfig(a);
        let c = this._iconSetConfigs.get(i);
        return c ? this._getSvgFromIconSetConfigs(t, c) : An(ag(r));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(t) {
        return t.svgText
          ? W(sl(this._svgElementFromConfig(t)))
          : this._loadSvgIconFromConfig(t).pipe(Q((i) => sl(i)));
      }
      _getSvgFromIconSetConfigs(t, i) {
        let r = this._extractIconWithNameFromAnySet(t, i);
        if (r) return W(r);
        let a = i
          .filter((c) => !c.svgText)
          .map((c) =>
            this._loadSvgIconSetFromConfig(c).pipe(
              $i((h) => {
                let b = `Loading icon set URL: ${this._sanitizer.sanitize(De.RESOURCE_URL, c.url)} failed: ${h.message}`;
                return this._errorHandler.handleError(new Error(b)), W(null);
              }),
            ),
          );
        return er(a).pipe(
          Q(() => {
            let c = this._extractIconWithNameFromAnySet(t, i);
            if (!c) throw ag(t);
            return c;
          }),
        );
      }
      _extractIconWithNameFromAnySet(t, i) {
        for (let r = i.length - 1; r >= 0; r--) {
          let a = i[r];
          if (a.svgText && a.svgText.toString().indexOf(t) > -1) {
            let c = this._svgElementFromConfig(a),
              h = this._extractSvgIconFromSet(c, t, a.options);
            if (h) return h;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(t) {
        return this._fetchIcon(t).pipe(
          Vt((i) => (t.svgText = i)),
          Q(() => this._svgElementFromConfig(t)),
        );
      }
      _loadSvgIconSetFromConfig(t) {
        return t.svgText
          ? W(null)
          : this._fetchIcon(t).pipe(Vt((i) => (t.svgText = i)));
      }
      _extractSvgIconFromSet(t, i, r) {
        let a = t.querySelector(`[id="${i}"]`);
        if (!a) return null;
        let c = a.cloneNode(!0);
        if ((c.removeAttribute("id"), c.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(c, r);
        if (c.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(c), r);
        let h = this._svgElementFromString(ns("<svg></svg>"));
        return h.appendChild(c), this._setSvgAttributes(h, r);
      }
      _svgElementFromString(t) {
        let i = this._document.createElement("DIV");
        i.innerHTML = t;
        let r = i.querySelector("svg");
        if (!r) throw Error("<svg> tag not found");
        return r;
      }
      _toSvgElement(t) {
        let i = this._svgElementFromString(ns("<svg></svg>")),
          r = t.attributes;
        for (let a = 0; a < r.length; a++) {
          let { name: c, value: h } = r[a];
          c !== "id" && i.setAttribute(c, h);
        }
        for (let a = 0; a < t.childNodes.length; a++)
          t.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(t.childNodes[a].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(t, i) {
        return (
          t.setAttribute("fit", ""),
          t.setAttribute("height", "100%"),
          t.setAttribute("width", "100%"),
          t.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          t.setAttribute("focusable", "false"),
          i && i.viewBox && t.setAttribute("viewBox", i.viewBox),
          t
        );
      }
      _fetchIcon(t) {
        let { url: i, options: r } = t,
          a = r?.withCredentials ?? !1;
        if (!this._httpClient) throw hx();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let c = this._sanitizer.sanitize(De.RESOURCE_URL, i);
        if (!c) throw lg(i);
        let h = this._inProgressUrlFetches.get(c);
        if (h) return h;
        let f = this._httpClient
          .get(c, { responseType: "text", withCredentials: a })
          .pipe(
            Q((b) => ns(b)),
            Ki(() => this._inProgressUrlFetches.delete(c)),
            hm(),
          );
        return this._inProgressUrlFetches.set(c, f), f;
      }
      _addSvgIconConfig(t, i, r) {
        return this._svgIconConfigs.set(dg(t, i), r), this;
      }
      _addSvgIconSetConfig(t, i) {
        let r = this._iconSetConfigs.get(t);
        return r ? r.push(i) : this._iconSetConfigs.set(t, [i]), this;
      }
      _svgElementFromConfig(t) {
        if (!t.svgElement) {
          let i = this._svgElementFromString(t.svgText);
          this._setSvgAttributes(i, t.options), (t.svgElement = i);
        }
        return t.svgElement;
      }
      _getIconConfigFromResolvers(t, i) {
        for (let r = 0; r < this._resolvers.length; r++) {
          let a = this._resolvers[r](i, t);
          if (a)
            return fx(a) ? new Ai(a.url, null, a.options) : new Ai(a, null);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(xo, 8), A(ed), A(dt, 8), A(Mn));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function sl(n) {
  return n.cloneNode(!0);
}
function dg(n, e) {
  return n + ":" + e;
}
function fx(n) {
  return !!(n.url && n.options);
}
var px = new Y("MAT_ICON_DEFAULT_OPTIONS"),
  gx = new Y("mat-icon-location", { providedIn: "root", factory: vx });
function vx() {
  let n = B(dt),
    e = n ? n.location : null;
  return { getPathname: () => (e ? e.pathname + e.search : "") };
}
var ug = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  bx = ug.map((n) => `[${n}]`).join(", "),
  _x = /^url\(['"]?#(.*?)['"]?\)$/,
  al = (() => {
    class n {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(t) {
        this._color = t;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(t) {
        t !== this._svgIcon &&
          (t
            ? this._updateSvgIcon(t)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = t));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(t, i, r, a, c, h) {
        (this._elementRef = t),
          (this._iconRegistry = i),
          (this._location = a),
          (this._errorHandler = c),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = Ke.EMPTY),
          h &&
            (h.color && (this.color = this._defaultColor = h.color),
            h.fontSet && (this.fontSet = h.fontSet)),
          r || t.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(t) {
        if (!t) return ["", ""];
        let i = t.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${t}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let t = this._elementsWithExternalReferences;
        if (t && t.size) {
          let i = this._location.getPathname();
          i !== this._previousPath &&
            ((this._previousPath = i), this._prependPathToReferences(i));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(t) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(t),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(t);
      }
      _clearSvgElement() {
        let t = this._elementRef.nativeElement,
          i = t.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let r = t.childNodes[i];
          (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
            r.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let t = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((r) => r.length > 0);
        this._previousFontSetClass.forEach((r) => t.classList.remove(r)),
          i.forEach((r) => t.classList.add(r)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              t.classList.remove(this._previousFontIconClass),
            this.fontIcon && t.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(t) {
        return typeof t == "string" ? t.trim().split(" ")[0] : t;
      }
      _prependPathToReferences(t) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((r, a) => {
            r.forEach((c) => {
              a.setAttribute(c.name, `url('${t}#${c.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(t) {
        let i = t.querySelectorAll(bx),
          r = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < i.length; a++)
          ug.forEach((c) => {
            let h = i[a],
              f = h.getAttribute(c),
              b = f ? f.match(_x) : null;
            if (b) {
              let y = r.get(h);
              y || ((y = []), r.set(h, y)), y.push({ name: c, value: b[1] });
            }
          });
      }
      _updateSvgIcon(t) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          t)
        ) {
          let [i, r] = this._splitIconName(t);
          i && (this._svgNamespace = i),
            r && (this._svgName = r),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(r, i)
              .pipe(Lt(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let c = `Error retrieving icon ${i}:${r}! ${a.message}`;
                  this._errorHandler.handleError(new Error(c));
                },
              ));
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(gt),
            P(mx),
            ho("aria-hidden"),
            P(gx),
            P(Mn),
            P(px, 8),
          );
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["mat-icon"]],
          hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
          hostVars: 10,
          hostBindings: function (i, r) {
            i & 2 &&
              (Mt("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")(
                "data-mat-icon-name",
                r._svgName || r.fontIcon,
              )("data-mat-icon-namespace", r._svgNamespace || r.fontSet)(
                "fontIcon",
                r._usingFontIcon() ? r.fontIcon : null,
              ),
              vo(r.color ? "mat-" + r.color : ""),
              Rt("mat-icon-inline", r.inline)(
                "mat-icon-no-color",
                r.color !== "primary" &&
                  r.color !== "accent" &&
                  r.color !== "warn",
              ));
          },
          inputs: {
            color: "color",
            inline: [2, "inline", "inline", we],
            svgIcon: "svgIcon",
            fontSet: "fontSet",
            fontIcon: "fontIcon",
          },
          exportAs: ["matIcon"],
          standalone: !0,
          features: [Qe, Tt],
          ngContentSelectors: dx,
          decls: 1,
          vars: 0,
          template: function (i, r) {
            i & 1 && (Ze(), Yt(0));
          },
          styles: [
            "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return n;
  })(),
  ll = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [zt, zt] });
      }
    }
    return n;
  })();
var yx = 20,
  _u = (() => {
    class n {
      constructor(t, i, r) {
        (this._ngZone = t),
          (this._platform = i),
          (this._scrolled = new et()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = r);
      }
      register(t) {
        this.scrollContainers.has(t) ||
          this.scrollContainers.set(
            t,
            t.elementScrolled().subscribe(() => this._scrolled.next(t)),
          );
      }
      deregister(t) {
        let i = this.scrollContainers.get(t);
        i && (i.unsubscribe(), this.scrollContainers.delete(t));
      }
      scrolled(t = yx) {
        return this._platform.isBrowser
          ? new ai((i) => {
              this._globalSubscription || this._addGlobalListener();
              let r =
                t > 0
                  ? this._scrolled.pipe(Sc(t)).subscribe(i)
                  : this._scrolled.subscribe(i);
              return (
                this._scrolledCount++,
                () => {
                  r.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : W();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((t, i) => this.deregister(i)),
          this._scrolled.complete();
      }
      ancestorScrolled(t, i) {
        let r = this.getAncestorScrollContainers(t);
        return this.scrolled(i).pipe(Ct((a) => !a || r.indexOf(a) > -1));
      }
      getAncestorScrollContainers(t) {
        let i = [];
        return (
          this.scrollContainers.forEach((r, a) => {
            this._scrollableContainsElement(a, t) && i.push(a);
          }),
          i
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(t, i) {
        let r = Ne(i),
          a = t.getElementRef().nativeElement;
        do if (r == a) return !0;
        while ((r = r.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let t = this._getWindow();
          return Ks(t.document, "scroll").subscribe(() =>
            this._scrolled.next(),
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(st), A(wt), A(dt, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  fg = (() => {
    class n {
      constructor(t, i, r, a) {
        (this.elementRef = t),
          (this.scrollDispatcher = i),
          (this.ngZone = r),
          (this.dir = a),
          (this._destroyed = new et()),
          (this._elementScrolled = new ai((c) =>
            this.ngZone.runOutsideAngular(() =>
              Ks(this.elementRef.nativeElement, "scroll")
                .pipe(me(this._destroyed))
                .subscribe(c),
            ),
          ));
      }
      ngOnInit() {
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this.scrollDispatcher.deregister(this),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      elementScrolled() {
        return this._elementScrolled;
      }
      getElementRef() {
        return this.elementRef;
      }
      scrollTo(t) {
        let i = this.elementRef.nativeElement,
          r = this.dir && this.dir.value == "rtl";
        t.left == null && (t.left = r ? t.end : t.start),
          t.right == null && (t.right = r ? t.start : t.end),
          t.bottom != null &&
            (t.top = i.scrollHeight - i.clientHeight - t.bottom),
          r && Ir() != ti.NORMAL
            ? (t.left != null &&
                (t.right = i.scrollWidth - i.clientWidth - t.left),
              Ir() == ti.INVERTED
                ? (t.left = t.right)
                : Ir() == ti.NEGATED && (t.left = t.right ? -t.right : t.right))
            : t.right != null &&
              (t.left = i.scrollWidth - i.clientWidth - t.right),
          this._applyScrollToOptions(t);
      }
      _applyScrollToOptions(t) {
        let i = this.elementRef.nativeElement;
        Oa()
          ? i.scrollTo(t)
          : (t.top != null && (i.scrollTop = t.top),
            t.left != null && (i.scrollLeft = t.left));
      }
      measureScrollOffset(t) {
        let i = "left",
          r = "right",
          a = this.elementRef.nativeElement;
        if (t == "top") return a.scrollTop;
        if (t == "bottom") return a.scrollHeight - a.clientHeight - a.scrollTop;
        let c = this.dir && this.dir.value == "rtl";
        return (
          t == "start" ? (t = c ? r : i) : t == "end" && (t = c ? i : r),
          c && Ir() == ti.INVERTED
            ? t == i
              ? a.scrollWidth - a.clientWidth - a.scrollLeft
              : a.scrollLeft
            : c && Ir() == ti.NEGATED
              ? t == i
                ? a.scrollLeft + a.scrollWidth - a.clientWidth
                : -a.scrollLeft
              : t == i
                ? a.scrollLeft
                : a.scrollWidth - a.clientWidth - a.scrollLeft
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(gt), P(_u), P(st), P(Di, 8));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "cdk-scrollable", ""],
            ["", "cdkScrollable", ""],
          ],
          standalone: !0,
        });
      }
    }
    return n;
  })(),
  wx = 20,
  yu = (() => {
    class n {
      constructor(t, i, r) {
        (this._platform = t),
          (this._change = new et()),
          (this._changeListener = (a) => {
            this._change.next(a);
          }),
          (this._document = r),
          i.runOutsideAngular(() => {
            if (t.isBrowser) {
              let a = this._getWindow();
              a.addEventListener("resize", this._changeListener),
                a.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let t = this._getWindow();
          t.removeEventListener("resize", this._changeListener),
            t.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let t = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), t;
      }
      getViewportRect() {
        let t = this.getViewportScrollPosition(),
          { width: i, height: r } = this.getViewportSize();
        return {
          top: t.top,
          left: t.left,
          bottom: t.top + r,
          right: t.left + i,
          height: r,
          width: i,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let t = this._document,
          i = this._getWindow(),
          r = t.documentElement,
          a = r.getBoundingClientRect(),
          c = -a.top || t.body.scrollTop || i.scrollY || r.scrollTop || 0,
          h = -a.left || t.body.scrollLeft || i.scrollX || r.scrollLeft || 0;
        return { top: c, left: h };
      }
      change(t = wx) {
        return t > 0 ? this._change.pipe(Sc(t)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let t = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: t.innerWidth, height: t.innerHeight }
          : { width: 0, height: 0 };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(wt), A(st), A(dt, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var mg = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({});
      }
    }
    return n;
  })(),
  wu = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [an, mg, an, mg] });
      }
    }
    return n;
  })();
var rs = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  Fr = class extends rs {
    constructor(e, t, i, r, a) {
      super(),
        (this.component = e),
        (this.viewContainerRef = t),
        (this.injector = i),
        (this.componentFactoryResolver = r),
        (this.projectableNodes = a);
    }
  },
  Pr = class extends rs {
    constructor(e, t, i, r) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = t),
        (this.context = i),
        (this.injector = r);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, t = this.context) {
      return (this.context = t), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  xu = class extends rs {
    constructor(e) {
      super(), (this.element = e instanceof gt ? e.nativeElement : e);
    }
  },
  Lr = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof Fr)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof Pr)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof xu)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var cl = class extends Lr {
  constructor(e, t, i, r, a) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = t),
      (this._appRef = i),
      (this._defaultInjector = r),
      (this.attachDomPortal = (c) => {
        this._document;
        let h = c.element;
        h.parentNode;
        let f = this._document.createComment("dom-portal");
        h.parentNode.insertBefore(f, h),
          this.outletElement.appendChild(h),
          (this._attachedPortal = c),
          super.setDisposeFn(() => {
            f.parentNode && f.parentNode.replaceChild(h, f);
          });
      }),
      (this._document = a);
  }
  attachComponentPortal(e) {
    let i = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      r;
    return (
      e.viewContainerRef
        ? ((r = e.viewContainerRef.createComponent(
            i,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0,
          )),
          this.setDisposeFn(() => r.destroy()))
        : ((r = i.create(e.injector || this._defaultInjector || ee.NULL)),
          this._appRef.attachView(r.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(r.hostView),
              r.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(r)),
      (this._attachedPortal = e),
      r
    );
  }
  attachTemplatePortal(e) {
    let t = e.viewContainerRef,
      i = t.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      i.rootNodes.forEach((r) => this.outletElement.appendChild(r)),
      i.detectChanges(),
      this.setDisposeFn(() => {
        let r = t.indexOf(i);
        r !== -1 && t.remove(r);
      }),
      (this._attachedPortal = e),
      i
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var os = (() => {
  class n extends Lr {
    constructor(t, i, r) {
      super(),
        (this._componentFactoryResolver = t),
        (this._viewContainerRef = i),
        (this._isInitialized = !1),
        (this.attached = new St()),
        (this.attachDomPortal = (a) => {
          this._document;
          let c = a.element;
          c.parentNode;
          let h = this._document.createComment("dom-portal");
          a.setAttachedHost(this),
            c.parentNode.insertBefore(h, c),
            this._getRootNode().appendChild(c),
            (this._attachedPortal = a),
            super.setDisposeFn(() => {
              h.parentNode && h.parentNode.replaceChild(c, h);
            });
        }),
        (this._document = r);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(t) {
      (this.hasAttached() && !t && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        t && super.attach(t),
        (this._attachedPortal = t || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(t) {
      t.setAttachedHost(this);
      let i =
          t.viewContainerRef != null
            ? t.viewContainerRef
            : this._viewContainerRef,
        a = (
          t.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(t.component),
        c = i.createComponent(
          a,
          i.length,
          t.injector || i.injector,
          t.projectableNodes || void 0,
        );
      return (
        i !== this._viewContainerRef &&
          this._getRootNode().appendChild(c.hostView.rootNodes[0]),
        super.setDisposeFn(() => c.destroy()),
        (this._attachedPortal = t),
        (this._attachedRef = c),
        this.attached.emit(c),
        c
      );
    }
    attachTemplatePortal(t) {
      t.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(
        t.templateRef,
        t.context,
        { injector: t.injector },
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = t),
        (this._attachedRef = i),
        this.attached.emit(i),
        i
      );
    }
    _getRootNode() {
      let t = this._viewContainerRef.element.nativeElement;
      return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(P(qs), P(ar), P(dt));
      };
    }
    static {
      this.ɵdir = mt({
        type: n,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
        outputs: { attached: "attached" },
        exportAs: ["cdkPortalOutlet"],
        standalone: !0,
        features: [Ht],
      });
    }
  }
  return n;
})();
var Un = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({});
    }
  }
  return n;
})();
var gg = Oa(),
  Cu = class {
    constructor(e, t) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = t);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ""),
          (this._previousHTMLStyles.top = e.style.top || ""),
          (e.style.left = Xt(-this._previousScrollPosition.left)),
          (e.style.top = Xt(-this._previousScrollPosition.top)),
          e.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          t = this._document.body,
          i = e.style,
          r = t.style,
          a = i.scrollBehavior || "",
          c = r.scrollBehavior || "";
        (this._isEnabled = !1),
          (i.left = this._previousHTMLStyles.left),
          (i.top = this._previousHTMLStyles.top),
          e.classList.remove("cdk-global-scrollblock"),
          gg && (i.scrollBehavior = r.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          gg && ((i.scrollBehavior = a), (r.scrollBehavior = c));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) ||
        this._isEnabled
      )
        return !1;
      let t = this._document.body,
        i = this._viewportRuler.getViewportSize();
      return t.scrollHeight > i.height || t.scrollWidth > i.width;
    }
  };
var Eu = class {
    constructor(e, t, i, r) {
      (this._scrollDispatcher = e),
        (this._ngZone = t),
        (this._viewportRuler = i),
        (this._config = r),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          Ct(
            (t) =>
              !t ||
              !this._overlayRef.overlayElement.contains(
                t.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let t = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(t - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  dl = class {
    enable() {}
    disable() {}
    attach() {}
  };
function Iu(n, e) {
  return e.some((t) => {
    let i = n.bottom < t.top,
      r = n.top > t.bottom,
      a = n.right < t.left,
      c = n.left > t.right;
    return i || r || a || c;
  });
}
function vg(n, e) {
  return e.some((t) => {
    let i = n.top < t.top,
      r = n.bottom > t.bottom,
      a = n.left < t.left,
      c = n.right > t.right;
    return i || r || a || c;
  });
}
var Du = class {
    constructor(e, t, i, r) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = t),
        (this._ngZone = i),
        (this._config = r),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let t = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: i, height: r } = this._viewportRuler.getViewportSize();
              Iu(t, [
                { width: i, height: r, bottom: r, right: i, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  xx = (() => {
    class n {
      constructor(t, i, r, a) {
        (this._scrollDispatcher = t),
          (this._viewportRuler = i),
          (this._ngZone = r),
          (this.noop = () => new dl()),
          (this.close = (c) =>
            new Eu(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              c,
            )),
          (this.block = () => new Cu(this._viewportRuler, this._document)),
          (this.reposition = (c) =>
            new Du(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              c,
            )),
          (this._document = a);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(_u), A(yu), A(st), A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  ss = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new dl()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let t = Object.keys(e);
        for (let i of t) e[i] !== void 0 && (this[i] = e[i]);
      }
    }
  };
var Au = class {
  constructor(e, t) {
    (this.connectionPair = e), (this.scrollableViewProperties = t);
  }
};
var Cg = (() => {
    class n {
      constructor(t) {
        (this._attachedOverlays = []), (this._document = t);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(t) {
        this.remove(t), this._attachedOverlays.push(t);
      }
      remove(t) {
        let i = this._attachedOverlays.indexOf(t);
        i > -1 && this._attachedOverlays.splice(i, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Cx = (() => {
    class n extends Cg {
      constructor(t, i) {
        super(t),
          (this._ngZone = i),
          (this._keydownListener = (r) => {
            let a = this._attachedOverlays;
            for (let c = a.length - 1; c > -1; c--)
              if (a[c]._keydownEvents.observers.length > 0) {
                let h = a[c]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => h.next(r)) : h.next(r);
                break;
              }
          });
      }
      add(t) {
        super.add(t),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener,
                  ),
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener,
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener,
          ),
          (this._isAttached = !1));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt), A(st, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Ex = (() => {
    class n extends Cg {
      constructor(t, i, r) {
        super(t),
          (this._platform = i),
          (this._ngZone = r),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (a) => {
            this._pointerDownEventTarget = Le(a);
          }),
          (this._clickListener = (a) => {
            let c = Le(a),
              h =
                a.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : c;
            this._pointerDownEventTarget = null;
            let f = this._attachedOverlays.slice();
            for (let b = f.length - 1; b > -1; b--) {
              let y = f[b];
              if (
                y._outsidePointerEvents.observers.length < 1 ||
                !y.hasAttached()
              )
                continue;
              if (bg(y.overlayElement, c) || bg(y.overlayElement, h)) break;
              let D = y._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => D.next(a)) : D.next(a);
            }
          });
      }
      add(t) {
        if ((super.add(t), !this._isAttached)) {
          let i = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i))
            : this._addEventListeners(i),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = i.style.cursor),
              (i.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let t = this._document.body;
          t.removeEventListener("pointerdown", this._pointerDownListener, !0),
            t.removeEventListener("click", this._clickListener, !0),
            t.removeEventListener("auxclick", this._clickListener, !0),
            t.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((t.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(t) {
        t.addEventListener("pointerdown", this._pointerDownListener, !0),
          t.addEventListener("click", this._clickListener, !0),
          t.addEventListener("auxclick", this._clickListener, !0),
          t.addEventListener("contextmenu", this._clickListener, !0);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt), A(wt), A(st, 8));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function bg(n, e) {
  let t = typeof ShadowRoot < "u" && ShadowRoot,
    i = e;
  for (; i; ) {
    if (i === n) return !0;
    i = t && i instanceof ShadowRoot ? i.host : i.parentNode;
  }
  return !1;
}
var Nr = (() => {
    class n {
      constructor(t, i) {
        (this._platform = i), (this._document = t);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let t = "cdk-overlay-container";
        if (this._platform.isBrowser || Yo()) {
          let r = this._document.querySelectorAll(
            `.${t}[platform="server"], .${t}[platform="test"]`,
          );
          for (let a = 0; a < r.length; a++) r[a].remove();
        }
        let i = this._document.createElement("div");
        i.classList.add(t),
          Yo()
            ? i.setAttribute("platform", "test")
            : this._platform.isBrowser || i.setAttribute("platform", "server"),
          this._document.body.appendChild(i),
          (this._containerElement = i);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(dt), A(wt));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Si = class {
    constructor(e, t, i, r, a, c, h, f, b, y = !1, D) {
      (this._portalOutlet = e),
        (this._host = t),
        (this._pane = i),
        (this._config = r),
        (this._ngZone = a),
        (this._keyboardDispatcher = c),
        (this._document = h),
        (this._location = f),
        (this._outsideClickDispatcher = b),
        (this._animationsDisabled = y),
        (this._injector = D),
        (this._backdropElement = null),
        (this._backdropClick = new et()),
        (this._attachments = new et()),
        (this._detachments = new et()),
        (this._locationChanges = Ke.EMPTY),
        (this._backdropClickHandler = (U) => this._backdropClick.next(U)),
        (this._backdropTransitionendHandler = (U) => {
          this._disposeBackdrop(U.target);
        }),
        (this._keydownEvents = new et()),
        (this._outsidePointerEvents = new et()),
        (this._renders = new et()),
        r.scrollStrategy &&
          ((this._scrollStrategy = r.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = r.positionStrategy),
        (this._afterRenderRef = Xe(() =>
          Zs(
            () => {
              this._renders.next();
            },
            { injector: this._injector },
          ),
        ));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let t = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        (this._afterNextRenderRef = Rn(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector },
        )),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof t?.onDestroy == "function" &&
          t.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        t
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = C(C({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = Z(C({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == "string" ? e : e.value) : "ltr";
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = Xt(this._config.width)),
        (e.height = Xt(this._config.height)),
        (e.minWidth = Xt(this._config.minWidth)),
        (e.minHeight = Xt(this._config.minHeight)),
        (e.maxWidth = Xt(this._config.maxWidth)),
        (e.maxHeight = Xt(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? "" : "none";
    }
    _attachBackdrop() {
      let e = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation",
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            );
          }),
          (e.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500),
          ));
      }
    }
    _toggleClasses(e, t, i) {
      let r = Ar(t || []).filter((a) => !!a);
      r.length && (i ? e.classList.add(...r) : e.classList.remove(...r));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._renders
          .pipe(me(ir(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener("click", this._backdropClickHandler),
        e.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler,
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  _g = "cdk-overlay-connected-position-bounding-box",
  Ix = /([A-Za-z%]+)$/,
  Su = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, t, i, r, a) {
      (this._viewportRuler = t),
        (this._document = i),
        (this._platform = r),
        (this._overlayContainer = a),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new et()),
        (this._resizeSubscription = Ke.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(_g),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        t = this._overlayRect,
        i = this._viewportRect,
        r = this._containerRect,
        a = [],
        c;
      for (let h of this._preferredPositions) {
        let f = this._getOriginPoint(e, r, h),
          b = this._getOverlayPoint(f, t, h),
          y = this._getOverlayFit(b, t, i, h);
        if (y.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(h, f);
          return;
        }
        if (this._canFitWithFlexibleDimensions(y, b, i)) {
          a.push({
            position: h,
            origin: f,
            overlayRect: t,
            boundingBoxRect: this._calculateBoundingBoxRect(f, h),
          });
          continue;
        }
        (!c || c.overlayFit.visibleArea < y.visibleArea) &&
          (c = {
            overlayFit: y,
            overlayPoint: b,
            originPoint: f,
            position: h,
            overlayRect: t,
          });
      }
      if (a.length) {
        let h = null,
          f = -1;
        for (let b of a) {
          let y =
            b.boundingBoxRect.width *
            b.boundingBoxRect.height *
            (b.position.weight || 1);
          y > f && ((f = y), (h = b));
        }
        (this._isPushed = !1), this._applyPosition(h.position, h.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(c.position, c.originPoint);
        return;
      }
      this._applyPosition(c.position, c.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          Hn(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(_g),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let t = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, t);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, t, i) {
      let r;
      if (i.originX == "center") r = e.left + e.width / 2;
      else {
        let c = this._isRtl() ? e.right : e.left,
          h = this._isRtl() ? e.left : e.right;
        r = i.originX == "start" ? c : h;
      }
      t.left < 0 && (r -= t.left);
      let a;
      return (
        i.originY == "center"
          ? (a = e.top + e.height / 2)
          : (a = i.originY == "top" ? e.top : e.bottom),
        t.top < 0 && (a -= t.top),
        { x: r, y: a }
      );
    }
    _getOverlayPoint(e, t, i) {
      let r;
      i.overlayX == "center"
        ? (r = -t.width / 2)
        : i.overlayX === "start"
          ? (r = this._isRtl() ? -t.width : 0)
          : (r = this._isRtl() ? 0 : -t.width);
      let a;
      return (
        i.overlayY == "center"
          ? (a = -t.height / 2)
          : (a = i.overlayY == "top" ? 0 : -t.height),
        { x: e.x + r, y: e.y + a }
      );
    }
    _getOverlayFit(e, t, i, r) {
      let a = wg(t),
        { x: c, y: h } = e,
        f = this._getOffset(r, "x"),
        b = this._getOffset(r, "y");
      f && (c += f), b && (h += b);
      let y = 0 - c,
        D = c + a.width - i.width,
        U = 0 - h,
        z = h + a.height - i.height,
        G = this._subtractOverflows(a.width, y, D),
        H = this._subtractOverflows(a.height, U, z),
        it = G * H;
      return {
        visibleArea: it,
        isCompletelyWithinViewport: a.width * a.height === it,
        fitsInViewportVertically: H === a.height,
        fitsInViewportHorizontally: G == a.width,
      };
    }
    _canFitWithFlexibleDimensions(e, t, i) {
      if (this._hasFlexibleDimensions) {
        let r = i.bottom - t.y,
          a = i.right - t.x,
          c = yg(this._overlayRef.getConfig().minHeight),
          h = yg(this._overlayRef.getConfig().minWidth),
          f = e.fitsInViewportVertically || (c != null && c <= r),
          b = e.fitsInViewportHorizontally || (h != null && h <= a);
        return f && b;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, t, i) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let r = wg(t),
        a = this._viewportRect,
        c = Math.max(e.x + r.width - a.width, 0),
        h = Math.max(e.y + r.height - a.height, 0),
        f = Math.max(a.top - i.top - e.y, 0),
        b = Math.max(a.left - i.left - e.x, 0),
        y = 0,
        D = 0;
      return (
        r.width <= a.width
          ? (y = b || -c)
          : (y = e.x < this._viewportMargin ? a.left - i.left - e.x : 0),
        r.height <= a.height
          ? (D = f || -h)
          : (D = e.y < this._viewportMargin ? a.top - i.top - e.y : 0),
        (this._previousPushAmount = { x: y, y: D }),
        { x: e.x + y, y: e.y + D }
      );
    }
    _applyPosition(e, t) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(t, e),
        this._setBoundingBoxStyles(t, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let i = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !Dx(this._lastScrollVisibility, i)
        ) {
          let r = new Au(e, i);
          this._positionChanges.next(r);
        }
        this._lastScrollVisibility = i;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let t = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        i,
        r = e.overlayY;
      e.overlayX === "center"
        ? (i = "center")
        : this._isRtl()
          ? (i = e.overlayX === "start" ? "right" : "left")
          : (i = e.overlayX === "start" ? "left" : "right");
      for (let a = 0; a < t.length; a++)
        t[a].style.transformOrigin = `${i} ${r}`;
    }
    _calculateBoundingBoxRect(e, t) {
      let i = this._viewportRect,
        r = this._isRtl(),
        a,
        c,
        h;
      if (t.overlayY === "top")
        (c = e.y), (a = i.height - c + this._viewportMargin);
      else if (t.overlayY === "bottom")
        (h = i.height - e.y + this._viewportMargin * 2),
          (a = i.height - h + this._viewportMargin);
      else {
        let z = Math.min(i.bottom - e.y + i.top, e.y),
          G = this._lastBoundingBoxSize.height;
        (a = z * 2),
          (c = e.y - z),
          a > G &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (c = e.y - G / 2);
      }
      let f = (t.overlayX === "start" && !r) || (t.overlayX === "end" && r),
        b = (t.overlayX === "end" && !r) || (t.overlayX === "start" && r),
        y,
        D,
        U;
      if (b)
        (U = i.width - e.x + this._viewportMargin * 2),
          (y = e.x - this._viewportMargin);
      else if (f) (D = e.x), (y = i.right - e.x);
      else {
        let z = Math.min(i.right - e.x + i.left, e.x),
          G = this._lastBoundingBoxSize.width;
        (y = z * 2),
          (D = e.x - z),
          y > G &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (D = e.x - G / 2);
      }
      return { top: c, left: D, bottom: h, right: U, width: y, height: a };
    }
    _setBoundingBoxStyles(e, t) {
      let i = this._calculateBoundingBoxRect(e, t);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((i.height = Math.min(i.height, this._lastBoundingBoxSize.height)),
        (i.width = Math.min(i.width, this._lastBoundingBoxSize.width)));
      let r = {};
      if (this._hasExactPosition())
        (r.top = r.left = "0"),
          (r.bottom = r.right = r.maxHeight = r.maxWidth = ""),
          (r.width = r.height = "100%");
      else {
        let a = this._overlayRef.getConfig().maxHeight,
          c = this._overlayRef.getConfig().maxWidth;
        (r.height = Xt(i.height)),
          (r.top = Xt(i.top)),
          (r.bottom = Xt(i.bottom)),
          (r.width = Xt(i.width)),
          (r.left = Xt(i.left)),
          (r.right = Xt(i.right)),
          t.overlayX === "center"
            ? (r.alignItems = "center")
            : (r.alignItems = t.overlayX === "end" ? "flex-end" : "flex-start"),
          t.overlayY === "center"
            ? (r.justifyContent = "center")
            : (r.justifyContent =
                t.overlayY === "bottom" ? "flex-end" : "flex-start"),
          a && (r.maxHeight = Xt(a)),
          c && (r.maxWidth = Xt(c));
      }
      (this._lastBoundingBoxSize = i), Hn(this._boundingBox.style, r);
    }
    _resetBoundingBoxStyles() {
      Hn(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      Hn(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(e, t) {
      let i = {},
        r = this._hasExactPosition(),
        a = this._hasFlexibleDimensions,
        c = this._overlayRef.getConfig();
      if (r) {
        let y = this._viewportRuler.getViewportScrollPosition();
        Hn(i, this._getExactOverlayY(t, e, y)),
          Hn(i, this._getExactOverlayX(t, e, y));
      } else i.position = "static";
      let h = "",
        f = this._getOffset(t, "x"),
        b = this._getOffset(t, "y");
      f && (h += `translateX(${f}px) `),
        b && (h += `translateY(${b}px)`),
        (i.transform = h.trim()),
        c.maxHeight &&
          (r ? (i.maxHeight = Xt(c.maxHeight)) : a && (i.maxHeight = "")),
        c.maxWidth &&
          (r ? (i.maxWidth = Xt(c.maxWidth)) : a && (i.maxWidth = "")),
        Hn(this._pane.style, i);
    }
    _getExactOverlayY(e, t, i) {
      let r = { top: "", bottom: "" },
        a = this._getOverlayPoint(t, this._overlayRect, e);
      if (
        (this._isPushed &&
          (a = this._pushOverlayOnScreen(a, this._overlayRect, i)),
        e.overlayY === "bottom")
      ) {
        let c = this._document.documentElement.clientHeight;
        r.bottom = `${c - (a.y + this._overlayRect.height)}px`;
      } else r.top = Xt(a.y);
      return r;
    }
    _getExactOverlayX(e, t, i) {
      let r = { left: "", right: "" },
        a = this._getOverlayPoint(t, this._overlayRect, e);
      this._isPushed &&
        (a = this._pushOverlayOnScreen(a, this._overlayRect, i));
      let c;
      if (
        (this._isRtl()
          ? (c = e.overlayX === "end" ? "left" : "right")
          : (c = e.overlayX === "end" ? "right" : "left"),
        c === "right")
      ) {
        let h = this._document.documentElement.clientWidth;
        r.right = `${h - (a.x + this._overlayRect.width)}px`;
      } else r.left = Xt(a.x);
      return r;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        t = this._pane.getBoundingClientRect(),
        i = this._scrollables.map((r) =>
          r.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: vg(e, i),
        isOriginOutsideView: Iu(e, i),
        isOverlayClipped: vg(t, i),
        isOverlayOutsideView: Iu(t, i),
      };
    }
    _subtractOverflows(e, ...t) {
      return t.reduce((i, r) => i - Math.max(r, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        t = this._document.documentElement.clientHeight,
        i = this._viewportRuler.getViewportScrollPosition();
      return {
        top: i.top + this._viewportMargin,
        left: i.left + this._viewportMargin,
        right: i.left + e - this._viewportMargin,
        bottom: i.top + t - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: t - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, t) {
      return t === "x"
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
          ? this._offsetY
          : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        Ar(e).forEach((t) => {
          t !== "" &&
            this._appliedPanelClasses.indexOf(t) === -1 &&
            (this._appliedPanelClasses.push(t), this._pane.classList.add(t));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((e) => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof gt) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let t = e.width || 0,
        i = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + i,
        left: e.x,
        right: e.x + t,
        height: i,
        width: t,
      };
    }
  };
function Hn(n, e) {
  for (let t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function yg(n) {
  if (typeof n != "number" && n != null) {
    let [e, t] = n.split(Ix);
    return !t || t === "px" ? parseFloat(e) : null;
  }
  return n || null;
}
function wg(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function Dx(n, e) {
  return n === e
    ? !0
    : n.isOriginClipped === e.isOriginClipped &&
        n.isOriginOutsideView === e.isOriginOutsideView &&
        n.isOverlayClipped === e.isOverlayClipped &&
        n.isOverlayOutsideView === e.isOverlayOutsideView;
}
var xg = "cdk-global-overlay-wrapper",
  ku = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(e) {
      let t = e.getConfig();
      (this._overlayRef = e),
        this._width && !t.width && e.updateSize({ width: this._width }),
        this._height && !t.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(xg),
        (this._isDisposed = !1);
    }
    top(e = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = e),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(e = "") {
      return (this._xOffset = e), (this._xPosition = "left"), this;
    }
    bottom(e = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = e),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(e = "") {
      return (this._xOffset = e), (this._xPosition = "right"), this;
    }
    start(e = "") {
      return (this._xOffset = e), (this._xPosition = "start"), this;
    }
    end(e = "") {
      return (this._xOffset = e), (this._xPosition = "end"), this;
    }
    width(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = "") {
      return this.left(e), (this._xPosition = "center"), this;
    }
    centerVertically(e = "") {
      return this.top(e), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        t = this._overlayRef.hostElement.style,
        i = this._overlayRef.getConfig(),
        { width: r, height: a, maxWidth: c, maxHeight: h } = i,
        f =
          (r === "100%" || r === "100vw") &&
          (!c || c === "100%" || c === "100vw"),
        b =
          (a === "100%" || a === "100vh") &&
          (!h || h === "100%" || h === "100vh"),
        y = this._xPosition,
        D = this._xOffset,
        U = this._overlayRef.getConfig().direction === "rtl",
        z = "",
        G = "",
        H = "";
      f
        ? (H = "flex-start")
        : y === "center"
          ? ((H = "center"), U ? (G = D) : (z = D))
          : U
            ? y === "left" || y === "end"
              ? ((H = "flex-end"), (z = D))
              : (y === "right" || y === "start") &&
                ((H = "flex-start"), (G = D))
            : y === "left" || y === "start"
              ? ((H = "flex-start"), (z = D))
              : (y === "right" || y === "end") && ((H = "flex-end"), (G = D)),
        (e.position = this._cssPosition),
        (e.marginLeft = f ? "0" : z),
        (e.marginTop = b ? "0" : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = f ? "0" : G),
        (t.justifyContent = H),
        (t.alignItems = b ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        t = this._overlayRef.hostElement,
        i = t.style;
      t.classList.remove(xg),
        (i.justifyContent =
          i.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  Ax = (() => {
    class n {
      constructor(t, i, r, a) {
        (this._viewportRuler = t),
          (this._document = i),
          (this._platform = r),
          (this._overlayContainer = a);
      }
      global() {
        return new ku();
      }
      flexibleConnectedTo(t) {
        return new Su(
          t,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(yu), A(dt), A(wt), A(Nr));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Sx = 0,
  ei = (() => {
    class n {
      constructor(t, i, r, a, c, h, f, b, y, D, U, z) {
        (this.scrollStrategies = t),
          (this._overlayContainer = i),
          (this._componentFactoryResolver = r),
          (this._positionBuilder = a),
          (this._keyboardDispatcher = c),
          (this._injector = h),
          (this._ngZone = f),
          (this._document = b),
          (this._directionality = y),
          (this._location = D),
          (this._outsideClickDispatcher = U),
          (this._animationsModuleType = z);
      }
      create(t) {
        let i = this._createHostElement(),
          r = this._createPaneElement(i),
          a = this._createPortalOutlet(r),
          c = new ss(t);
        return (
          (c.direction = c.direction || this._directionality.value),
          new Si(
            a,
            i,
            r,
            c,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
            this._injector.get(Gi),
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(t) {
        let i = this._document.createElement("div");
        return (
          (i.id = `cdk-overlay-${Sx++}`),
          i.classList.add("cdk-overlay-pane"),
          t.appendChild(i),
          i
        );
      }
      _createHostElement() {
        let t = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(t), t;
      }
      _createPortalOutlet(t) {
        return (
          this._appRef || (this._appRef = this._injector.get(cr)),
          new cl(
            t,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document,
          )
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            A(xx),
            A(Nr),
            A(qs),
            A(Ax),
            A(Cx),
            A(ee),
            A(st),
            A(dt),
            A(Di),
            A(Zi),
            A(Ex),
            A(pe, 8),
          );
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var kx = new Y("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let n = B(ei);
    return () => n.scrollStrategies.reposition();
  },
});
function Mx(n) {
  return () => n.scrollStrategies.reposition();
}
var Rx = { provide: kx, deps: [ei], useFactory: Mx },
  ul = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ providers: [ei, Rx], imports: [an, Un, wu, wu] });
      }
    }
    return n;
  })();
function Tx(n, e) {}
var $n = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var Tu = (() => {
    class n extends Lr {
      constructor(t, i, r, a, c, h, f, b) {
        super(),
          (this._elementRef = t),
          (this._focusTrapFactory = i),
          (this._config = a),
          (this._interactivityChecker = c),
          (this._ngZone = h),
          (this._overlayRef = f),
          (this._focusMonitor = b),
          (this._platform = B(wt)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = B(ye)),
          (this._injector = B(ee)),
          (this._isDestroyed = !1),
          (this.attachDomPortal = (y) => {
            this._portalOutlet.hasAttached();
            let D = this._portalOutlet.attachDomPortal(y);
            return this._contentAttached(), D;
          }),
          (this._document = r),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(t) {
        this._ariaLabelledByQueue.push(t),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(t) {
        let i = this._ariaLabelledByQueue.indexOf(t);
        i > -1 &&
          (this._ariaLabelledByQueue.splice(i, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        (this._isDestroyed = !0), this._restoreFocus();
      }
      attachComponentPortal(t) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachComponentPortal(t);
        return this._contentAttached(), i;
      }
      attachTemplatePortal(t) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachTemplatePortal(t);
        return this._contentAttached(), i;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(t, i) {
        this._interactivityChecker.isFocusable(t) ||
          ((t.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let r = () => {
              t.removeEventListener("blur", r),
                t.removeEventListener("mousedown", r),
                t.removeAttribute("tabindex");
            };
            t.addEventListener("blur", r), t.addEventListener("mousedown", r);
          })),
          t.focus(i);
      }
      _focusByCssSelector(t, i) {
        let r = this._elementRef.nativeElement.querySelector(t);
        r && this._forceFocus(r, i);
      }
      _trapFocus() {
        this._isDestroyed ||
          Rn(
            () => {
              let t = this._elementRef.nativeElement;
              switch (this._config.autoFocus) {
                case !1:
                case "dialog":
                  this._containsFocus() || t.focus();
                  break;
                case !0:
                case "first-tabbable":
                  this._focusTrap?.focusInitialElement() ||
                    this._focusDialogContainer();
                  break;
                case "first-heading":
                  this._focusByCssSelector(
                    'h1, h2, h3, h4, h5, h6, [role="heading"]',
                  );
                  break;
                default:
                  this._focusByCssSelector(this._config.autoFocus);
                  break;
              }
            },
            { injector: this._injector },
          );
      }
      _restoreFocus() {
        let t = this._config.restoreFocus,
          i = null;
        if (
          (typeof t == "string"
            ? (i = this._document.querySelector(t))
            : typeof t == "boolean"
              ? (i = t ? this._elementFocusedBeforeDialogWasOpened : null)
              : t && (i = t),
          this._config.restoreFocus && i && typeof i.focus == "function")
        ) {
          let r = qo(),
            a = this._elementRef.nativeElement;
          (!r || r === this._document.body || r === a || a.contains(r)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(i, this._closeInteractionType),
                (this._closeInteractionType = null))
              : i.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let t = this._elementRef.nativeElement,
          i = qo();
        return t === i || t.contains(i);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement,
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = qo()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(gt),
            P(Na),
            P(dt, 8),
            P($n),
            P(Qo),
            P(st),
            P(Si),
            P(Mr),
          );
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["cdk-dialog-container"]],
          viewQuery: function (i, r) {
            if ((i & 1 && ve(os, 7), i & 2)) {
              let a;
              Qt((a = Zt())) && (r._portalOutlet = a.first);
            }
          },
          hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
          hostVars: 6,
          hostBindings: function (i, r) {
            i & 2 &&
              Mt("id", r._config.id || null)("role", r._config.role)(
                "aria-modal",
                r._config.ariaModal,
              )(
                "aria-labelledby",
                r._config.ariaLabel ? null : r._ariaLabelledByQueue[0],
              )("aria-label", r._config.ariaLabel)(
                "aria-describedby",
                r._config.ariaDescribedBy || null,
              );
          },
          standalone: !0,
          features: [Ht, Tt],
          decls: 1,
          vars: 0,
          consts: [["cdkPortalOutlet", ""]],
          template: function (i, r) {
            i & 1 && Nt(0, Tx, 0, 0, "ng-template", 0);
          },
          dependencies: [os],
          styles: [
            ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
          ],
          encapsulation: 2,
        });
      }
    }
    return n;
  })(),
  as = class {
    constructor(e, t) {
      (this.overlayRef = e),
        (this.config = t),
        (this.closed = new et()),
        (this.disableClose = t.disableClose),
        (this.backdropClick = e.backdropClick()),
        (this.keydownEvents = e.keydownEvents()),
        (this.outsidePointerEvents = e.outsidePointerEvents()),
        (this.id = t.id),
        this.keydownEvents.subscribe((i) => {
          i.keyCode === 27 &&
            !this.disableClose &&
            !Fa(i) &&
            (i.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = e.detachments().subscribe(() => {
          t.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(e, t) {
      if (this.containerInstance) {
        let i = this.closed;
        (this.containerInstance._closeInteractionType =
          t?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          i.next(e),
          i.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(e = "", t = "") {
      return this.overlayRef.updateSize({ width: e, height: t }), this;
    }
    addPanelClass(e) {
      return this.overlayRef.addPanelClass(e), this;
    }
    removePanelClass(e) {
      return this.overlayRef.removePanelClass(e), this;
    }
  },
  Ox = new Y("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let n = B(ei);
      return () => n.scrollStrategies.block();
    },
  }),
  Fx = new Y("DialogData"),
  Px = new Y("DefaultDialogConfig");
var Lx = 0,
  Ou = (() => {
    class n {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(t, i, r, a, c, h) {
        (this._overlay = t),
          (this._injector = i),
          (this._defaultOptions = r),
          (this._parentDialog = a),
          (this._overlayContainer = c),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new et()),
          (this._afterOpenedAtThisLevel = new et()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = ci(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(vi(void 0)),
          )),
          (this._scrollStrategy = h);
      }
      open(t, i) {
        let r = this._defaultOptions || new $n();
        (i = C(C({}, r), i)),
          (i.id = i.id || `cdk-dialog-${Lx++}`),
          i.id && this.getDialogById(i.id);
        let a = this._getOverlayConfig(i),
          c = this._overlay.create(a),
          h = new as(c, i),
          f = this._attachContainer(c, h, i);
        return (
          (h.containerInstance = f),
          this._attachDialogContent(t, h, f, i),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(h),
          h.closed.subscribe(() => this._removeOpenDialog(h, !0)),
          this.afterOpened.next(h),
          h
        );
      }
      closeAll() {
        Mu(this.openDialogs, (t) => t.close());
      }
      getDialogById(t) {
        return this.openDialogs.find((i) => i.id === t);
      }
      ngOnDestroy() {
        Mu(this._openDialogsAtThisLevel, (t) => {
          t.config.closeOnDestroy === !1 && this._removeOpenDialog(t, !1);
        }),
          Mu(this._openDialogsAtThisLevel, (t) => t.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(t) {
        let i = new ss({
          positionStrategy:
            t.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
          panelClass: t.panelClass,
          hasBackdrop: t.hasBackdrop,
          direction: t.direction,
          minWidth: t.minWidth,
          minHeight: t.minHeight,
          maxWidth: t.maxWidth,
          maxHeight: t.maxHeight,
          width: t.width,
          height: t.height,
          disposeOnNavigation: t.closeOnNavigation,
        });
        return t.backdropClass && (i.backdropClass = t.backdropClass), i;
      }
      _attachContainer(t, i, r) {
        let a = r.injector || r.viewContainerRef?.injector,
          c = [
            { provide: $n, useValue: r },
            { provide: as, useValue: i },
            { provide: Si, useValue: t },
          ],
          h;
        r.container
          ? typeof r.container == "function"
            ? (h = r.container)
            : ((h = r.container.type), c.push(...r.container.providers(r)))
          : (h = Tu);
        let f = new Fr(
          h,
          r.viewContainerRef,
          ee.create({ parent: a || this._injector, providers: c }),
          r.componentFactoryResolver,
        );
        return t.attach(f).instance;
      }
      _attachDialogContent(t, i, r, a) {
        if (t instanceof go) {
          let c = this._createInjector(a, i, r, void 0),
            h = { $implicit: a.data, dialogRef: i };
          a.templateContext &&
            (h = C(
              C({}, h),
              typeof a.templateContext == "function"
                ? a.templateContext()
                : a.templateContext,
            )),
            r.attachTemplatePortal(new Pr(t, null, h, c));
        } else {
          let c = this._createInjector(a, i, r, this._injector),
            h = r.attachComponentPortal(
              new Fr(t, a.viewContainerRef, c, a.componentFactoryResolver),
            );
          (i.componentRef = h), (i.componentInstance = h.instance);
        }
      }
      _createInjector(t, i, r, a) {
        let c = t.injector || t.viewContainerRef?.injector,
          h = [
            { provide: Fx, useValue: t.data },
            { provide: as, useValue: i },
          ];
        return (
          t.providers &&
            (typeof t.providers == "function"
              ? h.push(...t.providers(i, t, r))
              : h.push(...t.providers)),
          t.direction &&
            (!c || !c.get(Di, null, { optional: !0 })) &&
            h.push({
              provide: Di,
              useValue: { value: t.direction, change: W() },
            }),
          ee.create({ parent: c || a, providers: h })
        );
      }
      _removeOpenDialog(t, i) {
        let r = this.openDialogs.indexOf(t);
        r > -1 &&
          (this.openDialogs.splice(r, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((a, c) => {
              a
                ? c.setAttribute("aria-hidden", a)
                : c.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            i && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let t = this._overlayContainer.getContainerElement();
        if (t.parentElement) {
          let i = t.parentElement.children;
          for (let r = i.length - 1; r > -1; r--) {
            let a = i[r];
            a !== t &&
              a.nodeName !== "SCRIPT" &&
              a.nodeName !== "STYLE" &&
              !a.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(a, a.getAttribute("aria-hidden")),
              a.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let t = this._parentDialog;
        return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(ei), A(ee), A(Px, 8), A(n, 12), A(Nr), A(Ox));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function Mu(n, e) {
  let t = n.length;
  for (; t--; ) e(n[t]);
}
var Ig = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ providers: [Ou], imports: [ul, Un, fp, Un] });
    }
  }
  return n;
})();
function Nx(n, e) {}
var ls = class {
    constructor() {
      (this.role = "dialog"),
        (this.panelClass = ""),
        (this.hasBackdrop = !0),
        (this.backdropClass = ""),
        (this.disableClose = !1),
        (this.width = ""),
        (this.height = ""),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = "first-tabbable"),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0);
    }
  },
  Fu = "mdc-dialog--open",
  Dg = "mdc-dialog--opening",
  Ag = "mdc-dialog--closing",
  jx = 150,
  Vx = 75,
  Bx = (() => {
    class n extends Tu {
      constructor(t, i, r, a, c, h, f, b, y) {
        super(t, i, r, a, c, h, f, y),
          (this._animationMode = b),
          (this._animationStateChanged = new St()),
          (this._animationsEnabled = this._animationMode !== "NoopAnimations"),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? (kg(this._config.enterAnimationDuration) ?? jx)
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? (kg(this._config.exitAnimationDuration) ?? Vx)
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(),
              this._openAnimationDone(this._enterAnimationDuration);
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration,
              });
          });
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Sg,
                `${this._enterAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Dg, Fu),
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen,
              ))
            : (this._hostElement.classList.add(Fu),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(Fu),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Sg,
                `${this._exitAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Ag),
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose,
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(t) {
        (this._actionSectionCount += t), this._changeDetectorRef.markForCheck();
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Dg, Ag);
      }
      _waitForAnimationToComplete(t, i) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(i, t));
      }
      _requestAnimationFrame(t) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(t)
            : t();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(t) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: t });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(t) {
        let i = super.attachComponentPortal(t);
        return (
          i.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host",
          ),
          i
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(gt),
            P(Na),
            P(dt, 8),
            P(ls),
            P(Qo),
            P(st),
            P(Si),
            P(pe, 8),
            P(Mr),
          );
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["mat-dialog-container"]],
          hostAttrs: [
            "tabindex",
            "-1",
            1,
            "mat-mdc-dialog-container",
            "mdc-dialog",
          ],
          hostVars: 10,
          hostBindings: function (i, r) {
            i & 2 &&
              (_i("id", r._config.id),
              Mt("aria-modal", r._config.ariaModal)("role", r._config.role)(
                "aria-labelledby",
                r._config.ariaLabel ? null : r._ariaLabelledByQueue[0],
              )("aria-label", r._config.ariaLabel)(
                "aria-describedby",
                r._config.ariaDescribedBy || null,
              ),
              Rt("_mat-animation-noopable", !r._animationsEnabled)(
                "mat-mdc-dialog-container-with-actions",
                r._actionSectionCount > 0,
              ));
          },
          standalone: !0,
          features: [Ht, Tt],
          decls: 3,
          vars: 0,
          consts: [
            [1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"],
            [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
            ["cdkPortalOutlet", ""],
          ],
          template: function (i, r) {
            i & 1 &&
              (at(0, "div", 0)(1, "div", 1),
              Nt(2, Nx, 0, 0, "ng-template", 2),
              ct()());
          },
          dependencies: [os],
          styles: [
            '.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}',
          ],
          encapsulation: 2,
        });
      }
    }
    return n;
  })(),
  Sg = "--mat-dialog-transition-duration";
function kg(n) {
  return n == null
    ? null
    : typeof n == "number"
      ? n
      : n.endsWith("ms")
        ? Dr(n.substring(0, n.length - 2))
        : n.endsWith("s")
          ? Dr(n.substring(0, n.length - 1)) * 1e3
          : n === "0"
            ? 0
            : null;
}
var hl = (function (n) {
    return (
      (n[(n.OPEN = 0)] = "OPEN"),
      (n[(n.CLOSING = 1)] = "CLOSING"),
      (n[(n.CLOSED = 2)] = "CLOSED"),
      n
    );
  })(hl || {}),
  jr = class {
    constructor(e, t, i) {
      (this._ref = e),
        (this._containerInstance = i),
        (this._afterOpened = new et()),
        (this._beforeClosed = new et()),
        (this._state = hl.OPEN),
        (this.disableClose = t.disableClose),
        (this.id = e.id),
        e.addPanelClass("mat-mdc-dialog-panel"),
        i._animationStateChanged
          .pipe(
            Ct((r) => r.state === "opened"),
            Lt(1),
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        i._animationStateChanged
          .pipe(
            Ct((r) => r.state === "closed"),
            Lt(1),
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        e.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        ir(
          this.backdropClick(),
          this.keydownEvents().pipe(
            Ct((r) => r.keyCode === 27 && !this.disableClose && !Fa(r)),
          ),
        ).subscribe((r) => {
          this.disableClose ||
            (r.preventDefault(),
            zx(this, r.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(e) {
      (this._result = e),
        this._containerInstance._animationStateChanged
          .pipe(
            Ct((t) => t.state === "closing"),
            Lt(1),
          )
          .subscribe((t) => {
            this._beforeClosed.next(e),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                t.totalTime + 100,
              ));
          }),
        (this._state = hl.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(e) {
      let t = this._ref.config.positionStrategy;
      return (
        e && (e.left || e.right)
          ? e.left
            ? t.left(e.left)
            : t.right(e.right)
          : t.centerHorizontally(),
        e && (e.top || e.bottom)
          ? e.top
            ? t.top(e.top)
            : t.bottom(e.bottom)
          : t.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(e = "", t = "") {
      return this._ref.updateSize(e, t), this;
    }
    addPanelClass(e) {
      return this._ref.addPanelClass(e), this;
    }
    removePanelClass(e) {
      return this._ref.removePanelClass(e), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = hl.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function zx(n, e, t) {
  return (n._closeInteractionType = e), n.close(t);
}
var Pu = new Y("MatMdcDialogData"),
  Ux = new Y("mat-mdc-dialog-default-options"),
  Hx = new Y("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let n = B(ei);
      return () => n.scrollStrategies.block();
    },
  });
var $x = 0,
  ml = (() => {
    class n {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let t = this._parentDialog;
        return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      constructor(t, i, r, a, c, h, f, b) {
        (this._overlay = t),
          (this._defaultOptions = a),
          (this._scrollStrategy = c),
          (this._parentDialog = h),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new et()),
          (this._afterOpenedAtThisLevel = new et()),
          (this.dialogConfigClass = ls),
          (this.afterAllClosed = ci(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(vi(void 0)),
          )),
          (this._dialog = i.get(Ou)),
          (this._dialogRefConstructor = jr),
          (this._dialogContainerType = Bx),
          (this._dialogDataToken = Pu);
      }
      open(t, i) {
        let r;
        (i = C(C({}, this._defaultOptions || new ls()), i)),
          (i.id = i.id || `mat-mdc-dialog-${$x++}`),
          (i.scrollStrategy = i.scrollStrategy || this._scrollStrategy());
        let a = this._dialog.open(
          t,
          Z(C({}, i), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: i },
                { provide: $n, useValue: i },
              ],
            },
            templateContext: () => ({ dialogRef: r }),
            providers: (c, h, f) => (
              (r = new this._dialogRefConstructor(c, i, f)),
              r.updatePosition(i?.position),
              [
                { provide: this._dialogContainerType, useValue: f },
                { provide: this._dialogDataToken, useValue: h.data },
                { provide: this._dialogRefConstructor, useValue: r },
              ]
            ),
          }),
        );
        return (
          (r.componentRef = a.componentRef),
          (r.componentInstance = a.componentInstance),
          this.openDialogs.push(r),
          this.afterOpened.next(r),
          r.afterClosed().subscribe(() => {
            let c = this.openDialogs.indexOf(r);
            c > -1 &&
              (this.openDialogs.splice(c, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          r
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(t) {
        return this.openDialogs.find((i) => i.id === t);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(t) {
        let i = t.length;
        for (; i--; ) t[i].close();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            A(ei),
            A(ee),
            A(Zi, 8),
            A(Ux, 8),
            A(Hx),
            A(n, 12),
            A(Nr),
            A(pe, 8),
          );
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Kx = 0;
var Mg = (() => {
    class n {
      constructor(t, i, r) {
        (this._dialogRef = t), (this._elementRef = i), (this._dialog = r);
      }
      ngOnInit() {
        this._dialogRef ||
          (this._dialogRef = Wx(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd();
            });
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove();
          });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(jr, 8), P(gt), P(ml));
        };
      }
      static {
        this.ɵdir = mt({ type: n, standalone: !0 });
      }
    }
    return n;
  })(),
  Rg = (() => {
    class n extends Mg {
      constructor() {
        super(...arguments), (this.id = `mat-mdc-dialog-title-${Kx++}`);
      }
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = fe(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "mat-dialog-title", ""],
            ["", "matDialogTitle", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
          hostVars: 1,
          hostBindings: function (i, r) {
            i & 2 && _i("id", r.id);
          },
          inputs: { id: "id" },
          exportAs: ["matDialogTitle"],
          standalone: !0,
          features: [Ht],
        });
      }
    }
    return n;
  })(),
  Tg = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "mat-dialog-content", ""],
            ["mat-dialog-content"],
            ["", "matDialogContent", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
          standalone: !0,
          features: [Sm([fg])],
        });
      }
    }
    return n;
  })(),
  Og = (() => {
    class n extends Mg {
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = fe(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["", "mat-dialog-actions", ""],
            ["mat-dialog-actions"],
            ["", "matDialogActions", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
          hostVars: 6,
          hostBindings: function (i, r) {
            i & 2 &&
              Rt("mat-mdc-dialog-actions-align-start", r.align === "start")(
                "mat-mdc-dialog-actions-align-center",
                r.align === "center",
              )("mat-mdc-dialog-actions-align-end", r.align === "end");
          },
          inputs: { align: "align" },
          standalone: !0,
          features: [Ht],
        });
      }
    }
    return n;
  })();
function Wx(n, e) {
  let t = n.nativeElement.parentElement;
  for (; t && !t.classList.contains("mat-mdc-dialog-container"); )
    t = t.parentElement;
  return t ? e.find((i) => i.id === t.id) : null;
}
var Fg = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({ providers: [ml], imports: [Ig, ul, Un, zt, zt] });
    }
  }
  return n;
})();
var Lg = sn({ passive: !0 }),
  Ng = (() => {
    class n {
      constructor(t, i) {
        (this._platform = t),
          (this._ngZone = i),
          (this._monitoredElements = new Map());
      }
      monitor(t) {
        if (!this._platform.isBrowser) return li;
        let i = Ne(t),
          r = this._monitoredElements.get(i);
        if (r) return r.subject;
        let a = new et(),
          c = "cdk-text-field-autofilled",
          h = (f) => {
            f.animationName === "cdk-text-field-autofill-start" &&
            !i.classList.contains(c)
              ? (i.classList.add(c),
                this._ngZone.run(() =>
                  a.next({ target: f.target, isAutofilled: !0 }),
                ))
              : f.animationName === "cdk-text-field-autofill-end" &&
                i.classList.contains(c) &&
                (i.classList.remove(c),
                this._ngZone.run(() =>
                  a.next({ target: f.target, isAutofilled: !1 }),
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("animationstart", h, Lg),
              i.classList.add("cdk-text-field-autofill-monitored");
          }),
          this._monitoredElements.set(i, {
            subject: a,
            unlisten: () => {
              i.removeEventListener("animationstart", h, Lg);
            },
          }),
          a
        );
      }
      stopMonitoring(t) {
        let i = Ne(t),
          r = this._monitoredElements.get(i);
        r &&
          (r.unlisten(),
          r.subject.complete(),
          i.classList.remove("cdk-text-field-autofill-monitored"),
          i.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(i));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((t, i) => this.stopMonitoring(i));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(A(wt), A(st));
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var jg = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = ht({ type: n });
    }
    static {
      this.ɵinj = ut({});
    }
  }
  return n;
})();
var Lu = class {
    constructor(e) {
      (this._box = e),
        (this._destroyed = new et()),
        (this._resizeSubject = new et()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((t) =>
            this._resizeSubject.next(t),
          ));
    }
    observe(e) {
      return (
        this._elementObservables.has(e) ||
          this._elementObservables.set(
            e,
            new ai((t) => {
              let i = this._resizeSubject.subscribe(t);
              return (
                this._resizeObserver?.observe(e, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(e),
                    i.unsubscribe(),
                    this._elementObservables.delete(e);
                }
              );
            }).pipe(
              Ct((t) => t.some((i) => i.target === e)),
              nr({ bufferSize: 1, refCount: !0 }),
              me(this._destroyed),
            ),
          ),
        this._elementObservables.get(e)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  Vg = (() => {
    class n {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = B(st)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, t] of this._observers) t.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(t, i) {
        let r = i?.box || "content-box";
        return (
          this._observers.has(r) || this._observers.set(r, new Lu(r)),
          this._observers.get(r).observe(t)
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var qx = ["notch"],
  Yx = ["matFormFieldNotchedOutline", ""],
  Qx = ["*"],
  Zx = ["textField"],
  Xx = ["iconPrefixContainer"],
  Jx = ["textPrefixContainer"],
  tC = ["iconSuffixContainer"],
  eC = ["textSuffixContainer"],
  iC = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  nC = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function rC(n, e) {
  n & 1 && qt(0, "span", 21);
}
function oC(n, e) {
  if (
    (n & 1 && (at(0, "label", 20), Yt(1, 1), Nt(2, rC, 1, 0, "span", 21), ct()),
    n & 2)
  ) {
    let t = ge(2);
    le("floating", t._shouldLabelFloat())("monitorResize", t._hasOutline())(
      "id",
      t._labelId,
    ),
      Mt("for", t._control.disableAutomaticLabeling ? null : t._control.id),
      ft(2),
      te(!t.hideRequiredMarker && t._control.required ? 2 : -1);
  }
}
function sC(n, e) {
  if ((n & 1 && Nt(0, oC, 3, 5, "label", 20), n & 2)) {
    let t = ge();
    te(t._hasFloatingLabel() ? 0 : -1);
  }
}
function aC(n, e) {
  n & 1 && qt(0, "div", 7);
}
function lC(n, e) {}
function cC(n, e) {
  if ((n & 1 && Nt(0, lC, 0, 0, "ng-template", 13), n & 2)) {
    ge(2);
    let t = lr(1);
    le("ngTemplateOutlet", t);
  }
}
function dC(n, e) {
  if ((n & 1 && (at(0, "div", 9), Nt(1, cC, 1, 1, null, 13), ct()), n & 2)) {
    let t = ge();
    le("matFormFieldNotchedOutlineOpen", t._shouldLabelFloat()),
      ft(),
      te(t._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function uC(n, e) {
  n & 1 && (at(0, "div", 10, 2), Yt(2, 2), ct());
}
function hC(n, e) {
  n & 1 && (at(0, "div", 11, 3), Yt(2, 3), ct());
}
function mC(n, e) {}
function fC(n, e) {
  if ((n & 1 && Nt(0, mC, 0, 0, "ng-template", 13), n & 2)) {
    ge();
    let t = lr(1);
    le("ngTemplateOutlet", t);
  }
}
function pC(n, e) {
  n & 1 && (at(0, "div", 14, 4), Yt(2, 4), ct());
}
function gC(n, e) {
  n & 1 && (at(0, "div", 15, 5), Yt(2, 5), ct());
}
function vC(n, e) {
  n & 1 && qt(0, "div", 16);
}
function bC(n, e) {
  if ((n & 1 && (at(0, "div", 18), Yt(1, 6), ct()), n & 2)) {
    let t = ge();
    le("@transitionMessages", t._subscriptAnimationState);
  }
}
function _C(n, e) {
  if ((n & 1 && (at(0, "mat-hint", 22), Bt(1), ct()), n & 2)) {
    let t = ge(2);
    le("id", t._hintLabelId), ft(), Fe(t.hintLabel);
  }
}
function yC(n, e) {
  if (
    (n & 1 &&
      (at(0, "div", 19),
      Nt(1, _C, 2, 2, "mat-hint", 22),
      Yt(2, 7),
      qt(3, "div", 23),
      Yt(4, 8),
      ct()),
    n & 2)
  ) {
    let t = ge();
    le("@transitionMessages", t._subscriptAnimationState),
      ft(),
      te(t.hintLabel ? 1 : -1);
  }
}
var pl = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({ type: n, selectors: [["mat-label"]], standalone: !0 });
      }
    }
    return n;
  })(),
  wC = 0,
  qg = new Y("MatError"),
  Yg = (() => {
    class n {
      constructor(t, i) {
        (this.id = `mat-mdc-error-${wC++}`),
          t || i.nativeElement.setAttribute("aria-live", "polite");
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(ho("aria-live"), P(gt));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["mat-error"], ["", "matError", ""]],
          hostAttrs: [
            "aria-atomic",
            "true",
            1,
            "mat-mdc-form-field-error",
            "mat-mdc-form-field-bottom-align",
          ],
          hostVars: 1,
          hostBindings: function (i, r) {
            i & 2 && _i("id", r.id);
          },
          inputs: { id: "id" },
          standalone: !0,
          features: [ce([{ provide: qg, useExisting: n }])],
        });
      }
    }
    return n;
  })(),
  xC = 0,
  Bg = (() => {
    class n {
      constructor() {
        (this.align = "start"), (this.id = `mat-mdc-hint-${xC++}`);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["mat-hint"]],
          hostAttrs: [
            1,
            "mat-mdc-form-field-hint",
            "mat-mdc-form-field-bottom-align",
          ],
          hostVars: 4,
          hostBindings: function (i, r) {
            i & 2 &&
              (_i("id", r.id),
              Mt("align", null),
              Rt("mat-mdc-form-field-hint-end", r.align === "end"));
          },
          inputs: { align: "align", id: "id" },
          standalone: !0,
        });
      }
    }
    return n;
  })(),
  CC = new Y("MatPrefix");
var EC = new Y("MatSuffix");
var Qg = new Y("FloatingLabelParent"),
  zg = (() => {
    class n {
      get floating() {
        return this._floating;
      }
      set floating(t) {
        (this._floating = t), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(t) {
        (this._monitorResize = t),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(t) {
        (this._elementRef = t),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = B(Vg)),
          (this._ngZone = B(st)),
          (this._parent = B(Qg)),
          (this._resizeSubscription = new Ke());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return IC(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(gt));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["label", "matFormFieldFloatingLabel", ""]],
          hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
          hostVars: 2,
          hostBindings: function (i, r) {
            i & 2 && Rt("mdc-floating-label--float-above", r.floating);
          },
          inputs: { floating: "floating", monitorResize: "monitorResize" },
          standalone: !0,
        });
      }
    }
    return n;
  })();
function IC(n) {
  let e = n;
  if (e.offsetParent !== null) return e.scrollWidth;
  let t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"),
    t.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(t);
  let i = t.scrollWidth;
  return t.remove(), i;
}
var Ug = "mdc-line-ripple--active",
  fl = "mdc-line-ripple--deactivating",
  Hg = (() => {
    class n {
      constructor(t, i) {
        (this._elementRef = t),
          (this._handleTransitionEnd = (r) => {
            let a = this._elementRef.nativeElement.classList,
              c = a.contains(fl);
            r.propertyName === "opacity" && c && a.remove(Ug, fl);
          }),
          i.runOutsideAngular(() => {
            t.nativeElement.addEventListener(
              "transitionend",
              this._handleTransitionEnd,
            );
          });
      }
      activate() {
        let t = this._elementRef.nativeElement.classList;
        t.remove(fl), t.add(Ug);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(fl);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          "transitionend",
          this._handleTransitionEnd,
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(gt), P(st));
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [["div", "matFormFieldLineRipple", ""]],
          hostAttrs: [1, "mdc-line-ripple"],
          standalone: !0,
        });
      }
    }
    return n;
  })(),
  $g = (() => {
    class n {
      constructor(t, i) {
        (this._elementRef = t), (this._ngZone = i), (this.open = !1);
      }
      ngAfterViewInit() {
        let t = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label",
        );
        t
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded",
            ),
            typeof requestAnimationFrame == "function" &&
              ((t.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (t.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label",
            );
      }
      _setNotchWidth(t) {
        !this.open || !t
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(P(gt), P(st));
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["div", "matFormFieldNotchedOutline", ""]],
          viewQuery: function (i, r) {
            if ((i & 1 && ve(qx, 5), i & 2)) {
              let a;
              Qt((a = Zt())) && (r._notch = a.first);
            }
          },
          hostAttrs: [1, "mdc-notched-outline"],
          hostVars: 2,
          hostBindings: function (i, r) {
            i & 2 && Rt("mdc-notched-outline--notched", r.open);
          },
          inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] },
          standalone: !0,
          features: [Tt],
          attrs: Yx,
          ngContentSelectors: Qx,
          decls: 5,
          vars: 0,
          consts: [
            ["notch", ""],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"],
          ],
          template: function (i, r) {
            i & 1 &&
              (Ze(),
              qt(0, "div", 1),
              at(1, "div", 2, 0),
              Yt(3),
              ct(),
              qt(4, "div", 3));
          },
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return n;
  })(),
  DC = {
    transitionMessages: $m("transitionMessages", [
      Wm("enter", zc({ opacity: 1, transform: "translateY(0%)" })),
      Gm("void => enter", [
        zc({ opacity: 0, transform: "translateY(-5px)" }),
        Km("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  Nu = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = mt({ type: n });
      }
    }
    return n;
  })();
var ju = new Y("MatFormField"),
  AC = new Y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  Kg = 0,
  Wg = "fill",
  SC = "auto",
  Gg = "fixed",
  kC = "translateY(-50%)",
  Zg = (() => {
    class n {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(t) {
        this._hideRequiredMarker = jn(t);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || SC;
      }
      set floatLabel(t) {
        t !== this._floatLabel &&
          ((this._floatLabel = t), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(t) {
        let i = this._appearance,
          r = t || this._defaults?.appearance || Wg;
        (this._appearance = r),
          this._appearance === "outline" &&
            this._appearance !== i &&
            (this._needsOutlineLabelOffsetUpdate = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || Gg;
      }
      set subscriptSizing(t) {
        this._subscriptSizing = t || this._defaults?.subscriptSizing || Gg;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(t) {
        (this._hintLabel = t), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(t) {
        this._explicitFormFieldControl = t;
      }
      constructor(t, i, r, a, c, h, f, b) {
        (this._elementRef = t),
          (this._changeDetectorRef = i),
          (this._dir = a),
          (this._platform = c),
          (this._defaults = h),
          (this._animationMode = f),
          (this._labelChild = Am(pl)),
          (this._hideRequiredMarker = !1),
          (this.color = "primary"),
          (this._appearance = Wg),
          (this._subscriptSizing = null),
          (this._hintLabel = ""),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${Kg++}`),
          (this._hintLabelId = `mat-mdc-hint-${Kg++}`),
          (this._subscriptAnimationState = ""),
          (this._destroyed = new et()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdate = !1),
          (this._previousControl = null),
          (this._injector = B(ee)),
          (this.getLabelId = yi(() =>
            this._hasFloatingLabel() ? this._labelId : null,
          )),
          (this._hasFloatingLabel = yi(() => !!this._labelChild())),
          h &&
            (h.appearance && (this.appearance = h.appearance),
            (this._hideRequiredMarker = !!h?.hideRequiredMarker),
            h.color && (this.color = h.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = "enter"),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl(),
          this._control !== this._previousControl &&
            (this._initializeControl(this._previousControl),
            (this._previousControl = this._control));
      }
      ngOnDestroy() {
        this._stateChanges?.unsubscribe(),
          this._valueChanges?.unsubscribe(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl(t) {
        let i = this._control,
          r = "mat-mdc-form-field-type-";
        t && this._elementRef.nativeElement.classList.remove(r + t.controlType),
          i.controlType &&
            this._elementRef.nativeElement.classList.add(r + i.controlType),
          this._stateChanges?.unsubscribe(),
          (this._stateChanges = i.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          })),
          this._valueChanges?.unsubscribe(),
          i.ngControl &&
            i.ngControl.valueChanges &&
            (this._valueChanges = i.ngControl.valueChanges
              .pipe(me(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((t) => !t._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((t) => t._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (t) => !t._isText,
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((t) => t._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          ir(
            this._prefixChildren.changes,
            this._suffixChildren.changes,
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdate = !0),
        ),
          Zs(
            () => {
              this._needsOutlineLabelOffsetUpdate &&
                ((this._needsOutlineLabelOffsetUpdate = !1),
                this._updateOutlineLabelOffset());
            },
            { injector: this._injector },
          ),
          this._dir.change
            .pipe(me(this._destroyed))
            .subscribe(() => (this._needsOutlineLabelOffsetUpdate = !0));
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _shouldLabelFloat() {
        return this._hasFloatingLabel()
          ? this._control.shouldLabelFloat || this._shouldAlwaysFloat()
          : !1;
      }
      _shouldForward(t) {
        let i = this._control ? this._control.ngControl : null;
        return i && i[t];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth(),
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let t = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              t.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let i = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "start")
                : null,
              r = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "end")
                : null;
            i ? t.push(i.id) : this._hintLabel && t.push(this._hintLabelId),
              r && t.push(r.id);
          } else
            this._errorChildren &&
              t.push(...this._errorChildren.map((i) => i.id));
          this._control.setDescribedByIds(t);
        }
      }
      _updateOutlineLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) return;
        let t = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          t.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdate = !0;
          return;
        }
        let i = this._iconPrefixContainer?.nativeElement,
          r = this._textPrefixContainer?.nativeElement,
          a = this._iconSuffixContainer?.nativeElement,
          c = this._textSuffixContainer?.nativeElement,
          h = i?.getBoundingClientRect().width ?? 0,
          f = r?.getBoundingClientRect().width ?? 0,
          b = a?.getBoundingClientRect().width ?? 0,
          y = c?.getBoundingClientRect().width ?? 0,
          D = this._dir.value === "rtl" ? "-1" : "1",
          U = `${h + f}px`,
          G = `calc(${D} * (${U} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        t.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${kC} translateX(${G})
    )`;
        let H = h + f + b + y;
        this._elementRef.nativeElement.style.setProperty(
          "--mat-form-field-notch-max-width",
          `calc(100% - ${H}px)`,
        );
      }
      _isAttachedToDom() {
        let t = this._elementRef.nativeElement;
        if (t.getRootNode) {
          let i = t.getRootNode();
          return i && i !== t;
        }
        return document.documentElement.contains(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(gt),
            P(ye),
            P(st),
            P(Di),
            P(wt),
            P(AC, 8),
            P(pe, 8),
            P(dt),
          );
        };
      }
      static {
        this.ɵcmp = kt({
          type: n,
          selectors: [["mat-form-field"]],
          contentQueries: function (i, r, a) {
            if (
              (i & 1 &&
                (Rm(a, r._labelChild, pl, 5),
                Qi(a, Nu, 5),
                Qi(a, CC, 5),
                Qi(a, EC, 5),
                Qi(a, qg, 5),
                Qi(a, Bg, 5)),
              i & 2)
            ) {
              Tm();
              let c;
              Qt((c = Zt())) && (r._formFieldControl = c.first),
                Qt((c = Zt())) && (r._prefixChildren = c),
                Qt((c = Zt())) && (r._suffixChildren = c),
                Qt((c = Zt())) && (r._errorChildren = c),
                Qt((c = Zt())) && (r._hintChildren = c);
            }
          },
          viewQuery: function (i, r) {
            if (
              (i & 1 &&
                (ve(Zx, 5),
                ve(Xx, 5),
                ve(Jx, 5),
                ve(tC, 5),
                ve(eC, 5),
                ve(zg, 5),
                ve($g, 5),
                ve(Hg, 5)),
              i & 2)
            ) {
              let a;
              Qt((a = Zt())) && (r._textField = a.first),
                Qt((a = Zt())) && (r._iconPrefixContainer = a.first),
                Qt((a = Zt())) && (r._textPrefixContainer = a.first),
                Qt((a = Zt())) && (r._iconSuffixContainer = a.first),
                Qt((a = Zt())) && (r._textSuffixContainer = a.first),
                Qt((a = Zt())) && (r._floatingLabel = a.first),
                Qt((a = Zt())) && (r._notchedOutline = a.first),
                Qt((a = Zt())) && (r._lineRipple = a.first);
            }
          },
          hostAttrs: [1, "mat-mdc-form-field"],
          hostVars: 42,
          hostBindings: function (i, r) {
            i & 2 &&
              Rt(
                "mat-mdc-form-field-label-always-float",
                r._shouldAlwaysFloat(),
              )("mat-mdc-form-field-has-icon-prefix", r._hasIconPrefix)(
                "mat-mdc-form-field-has-icon-suffix",
                r._hasIconSuffix,
              )("mat-form-field-invalid", r._control.errorState)(
                "mat-form-field-disabled",
                r._control.disabled,
              )("mat-form-field-autofilled", r._control.autofilled)(
                "mat-form-field-no-animations",
                r._animationMode === "NoopAnimations",
              )("mat-form-field-appearance-fill", r.appearance == "fill")(
                "mat-form-field-appearance-outline",
                r.appearance == "outline",
              )(
                "mat-form-field-hide-placeholder",
                r._hasFloatingLabel() && !r._shouldLabelFloat(),
              )("mat-focused", r._control.focused)(
                "mat-primary",
                r.color !== "accent" && r.color !== "warn",
              )("mat-accent", r.color === "accent")(
                "mat-warn",
                r.color === "warn",
              )("ng-untouched", r._shouldForward("untouched"))(
                "ng-touched",
                r._shouldForward("touched"),
              )("ng-pristine", r._shouldForward("pristine"))(
                "ng-dirty",
                r._shouldForward("dirty"),
              )("ng-valid", r._shouldForward("valid"))(
                "ng-invalid",
                r._shouldForward("invalid"),
              )("ng-pending", r._shouldForward("pending"));
          },
          inputs: {
            hideRequiredMarker: "hideRequiredMarker",
            color: "color",
            floatLabel: "floatLabel",
            appearance: "appearance",
            subscriptSizing: "subscriptSizing",
            hintLabel: "hintLabel",
          },
          exportAs: ["matFormField"],
          standalone: !0,
          features: [
            ce([
              { provide: ju, useExisting: n },
              { provide: Qg, useExisting: n },
            ]),
            Tt,
          ],
          ngContentSelectors: nC,
          decls: 18,
          vars: 21,
          consts: [
            ["labelTemplate", ""],
            ["textField", ""],
            ["iconPrefixContainer", ""],
            ["textPrefixContainer", ""],
            ["textSuffixContainer", ""],
            ["iconSuffixContainer", ""],
            [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
            [1, "mat-mdc-form-field-focus-overlay"],
            [1, "mat-mdc-form-field-flex"],
            [
              "matFormFieldNotchedOutline",
              "",
              3,
              "matFormFieldNotchedOutlineOpen",
            ],
            [1, "mat-mdc-form-field-icon-prefix"],
            [1, "mat-mdc-form-field-text-prefix"],
            [1, "mat-mdc-form-field-infix"],
            [3, "ngTemplateOutlet"],
            [1, "mat-mdc-form-field-text-suffix"],
            [1, "mat-mdc-form-field-icon-suffix"],
            ["matFormFieldLineRipple", ""],
            [
              1,
              "mat-mdc-form-field-subscript-wrapper",
              "mat-mdc-form-field-bottom-align",
            ],
            [1, "mat-mdc-form-field-error-wrapper"],
            [1, "mat-mdc-form-field-hint-wrapper"],
            [
              "matFormFieldFloatingLabel",
              "",
              3,
              "floating",
              "monitorResize",
              "id",
            ],
            [
              "aria-hidden",
              "true",
              1,
              "mat-mdc-form-field-required-marker",
              "mdc-floating-label--required",
            ],
            [3, "id"],
            [1, "mat-mdc-form-field-hint-spacer"],
          ],
          template: function (i, r) {
            if (i & 1) {
              let a = Yi();
              Ze(iC),
                Nt(0, sC, 1, 1, "ng-template", null, 0, Nc),
                at(2, "div", 6, 1),
                $t("click", function (h) {
                  return qe(a), Ye(r._control.onContainerClick(h));
                }),
                Nt(4, aC, 1, 0, "div", 7),
                at(5, "div", 8),
                Nt(6, dC, 2, 2, "div", 9)(7, uC, 3, 0, "div", 10)(
                  8,
                  hC,
                  3,
                  0,
                  "div",
                  11,
                ),
                at(9, "div", 12),
                Nt(10, fC, 1, 1, null, 13),
                Yt(11),
                ct(),
                Nt(12, pC, 3, 0, "div", 14)(13, gC, 3, 0, "div", 15),
                ct(),
                Nt(14, vC, 1, 0, "div", 16),
                ct(),
                at(15, "div", 17),
                Nt(16, bC, 2, 1, "div", 18)(17, yC, 5, 2, "div", 19),
                ct();
            }
            if (i & 2) {
              let a;
              ft(2),
                Rt("mdc-text-field--filled", !r._hasOutline())(
                  "mdc-text-field--outlined",
                  r._hasOutline(),
                )("mdc-text-field--no-label", !r._hasFloatingLabel())(
                  "mdc-text-field--disabled",
                  r._control.disabled,
                )("mdc-text-field--invalid", r._control.errorState),
                ft(2),
                te(!r._hasOutline() && !r._control.disabled ? 4 : -1),
                ft(2),
                te(r._hasOutline() ? 6 : -1),
                ft(),
                te(r._hasIconPrefix ? 7 : -1),
                ft(),
                te(r._hasTextPrefix ? 8 : -1),
                ft(2),
                te(!r._hasOutline() || r._forceDisplayInfixLabel() ? 10 : -1),
                ft(2),
                te(r._hasTextSuffix ? 12 : -1),
                ft(),
                te(r._hasIconSuffix ? 13 : -1),
                ft(),
                te(r._hasOutline() ? -1 : 14),
                ft(),
                Rt(
                  "mat-mdc-form-field-subscript-dynamic-size",
                  r.subscriptSizing === "dynamic",
                ),
                ft(),
                te(
                  (a = r._getDisplayedMessages()) === "error"
                    ? 16
                    : a === "hint"
                      ? 17
                      : -1,
                );
            }
          },
          dependencies: [zg, $g, Bc, Hg, Bg],
          styles: [
            '.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-filled-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-outlined-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--disabled .cdk-high-contrast-active .mdc-text-field__input{background-color:Window}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top));border-top-right-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color, var(--mat-app-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)));padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px);padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.cdk-high-contrast-active .mdc-text-field--disabled .mdc-floating-label{z-index:1}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-filled-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-filled-text-field-hover-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-filled-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-filled-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-filled-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-filled-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-filled-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-outlined-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-hover-label-text-color, var(--mat-app-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-outlined-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-outlined-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-outlined-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-outlined-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-outline-color, var(--mat-app-outline));border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-hover-outline-color, var(--mat-app-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-focus-outline-color, var(--mat-app-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-hover-outline-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-focus-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),100% - max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))*2)}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none;--mat-form-field-notch-max-width: 100%}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color, var(--mat-app-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color, var(--mat-app-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color, var(--mat-app-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color, var(--mat-app-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-app-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-app-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-app-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-app-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-app-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-app-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-app-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-app-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-app-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-app-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-app-body-large-weight))}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-app-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-app-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-app-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
          ],
          encapsulation: 2,
          data: { animation: [DC.transitionMessages] },
          changeDetection: 0,
        });
      }
    }
    return n;
  })(),
  Vu = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [zt, wi, Sr, zt] });
      }
    }
    return n;
  })();
var RC = new Y("MAT_INPUT_VALUE_ACCESSOR"),
  TC = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  OC = 0,
  Xg = (() => {
    class n {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = jn(t)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator($a.required) ??
          !1
        );
      }
      set required(t) {
        this._required = jn(t);
      }
      get type() {
        return this._type;
      }
      set type(t) {
        (this._type = t || "text"),
          this._validateType(),
          !this._isTextarea &&
            qd().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type),
          this._ensureWheelDefaultBehavior();
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(t) {
        this._errorStateTracker.matcher = t;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(t) {
        t !== this.value &&
          ((this._inputValueAccessor.value = t), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(t) {
        this._readonly = jn(t);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(t) {
        this._errorStateTracker.errorState = t;
      }
      constructor(t, i, r, a, c, h, f, b, y, D) {
        (this._elementRef = t),
          (this._platform = i),
          (this.ngControl = r),
          (this._autofillMonitor = b),
          (this._ngZone = y),
          (this._formField = D),
          (this._uid = `mat-input-${OC++}`),
          (this._webkitBlinkWheelListenerAttached = !1),
          (this.focused = !1),
          (this.stateChanges = new et()),
          (this.controlType = "mat-input"),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = "text"),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
          ].filter((G) => qd().has(G))),
          (this._iOSKeyupListener = (G) => {
            let H = G.target;
            !H.value &&
              H.selectionStart === 0 &&
              H.selectionEnd === 0 &&
              (H.setSelectionRange(1, 1), H.setSelectionRange(0, 0));
          }),
          (this._webkitBlinkWheelListener = () => {});
        let U = this._elementRef.nativeElement,
          z = U.nodeName.toLowerCase();
        (this._inputValueAccessor = f || U),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          i.IOS &&
            y.runOutsideAngular(() => {
              t.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new Va(h, r, c, a, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = z === "select"),
          (this._isTextarea = z === "textarea"),
          (this._isInFormField = !!D),
          this._isNativeSelect &&
            (this.controlType = U.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select");
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((t) => {
              (this.autofilled = t.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement,
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              "keyup",
              this._iOSKeyupListener,
            ),
          this._webkitBlinkWheelListenerAttached &&
            this._elementRef.nativeElement.removeEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(t) {
        this._elementRef.nativeElement.focus(t);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(t) {
        t !== this.focused && ((this.focused = t), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let t = this._elementRef.nativeElement.value;
        this._previousNativeValue !== t &&
          ((this._previousNativeValue = t), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let t = this._getPlaceholder();
        if (t !== this._previousPlaceholder) {
          let i = this._elementRef.nativeElement;
          (this._previousPlaceholder = t),
            t
              ? i.setAttribute("placeholder", t)
              : i.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        TC.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let t = this._elementRef.nativeElement.validity;
        return t && t.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let t = this._elementRef.nativeElement,
            i = t.options[0];
          return (
            this.focused ||
            t.multiple ||
            !this.empty ||
            !!(t.selectedIndex > -1 && i && i.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(t) {
        t.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              t.join(" "),
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let t = this._elementRef.nativeElement;
        return this._isNativeSelect && (t.multiple || t.size > 1);
      }
      _ensureWheelDefaultBehavior() {
        !this._webkitBlinkWheelListenerAttached &&
          this._type === "number" &&
          (this._platform.BLINK || this._platform.WEBKIT) &&
          (this._ngZone.runOutsideAngular(() => {
            this._elementRef.nativeElement.addEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            );
          }),
          (this._webkitBlinkWheelListenerAttached = !0)),
          this._webkitBlinkWheelListenerAttached &&
            this._type !== "number" &&
            (this._elementRef.nativeElement.removeEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            ),
            (this._webkitBlinkWheelListenerAttached = !0));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            P(gt),
            P(wt),
            P(zn, 10),
            P(is, 8),
            P(vu, 8),
            P(Cp),
            P(RC, 10),
            P(Ng),
            P(st),
            P(ju, 8),
          );
        };
      }
      static {
        this.ɵdir = mt({
          type: n,
          selectors: [
            ["input", "matInput", ""],
            ["textarea", "matInput", ""],
            ["select", "matNativeControl", ""],
            ["input", "matNativeControl", ""],
            ["textarea", "matNativeControl", ""],
          ],
          hostAttrs: [1, "mat-mdc-input-element"],
          hostVars: 18,
          hostBindings: function (i, r) {
            i & 1 &&
              $t("focus", function () {
                return r._focusChanged(!0);
              })("blur", function () {
                return r._focusChanged(!1);
              })("input", function () {
                return r._onInput();
              }),
              i & 2 &&
                (_i("id", r.id)("disabled", r.disabled)("required", r.required),
                Mt("name", r.name || null)(
                  "readonly",
                  (r.readonly && !r._isNativeSelect) || null,
                )("aria-invalid", r.empty && r.required ? null : r.errorState)(
                  "aria-required",
                  r.required,
                )("id", r.id),
                Rt("mat-input-server", r._isServer)(
                  "mat-mdc-form-field-textarea-control",
                  r._isInFormField && r._isTextarea,
                )("mat-mdc-form-field-input-control", r._isInFormField)(
                  "mdc-text-field__input",
                  r._isInFormField,
                )("mat-mdc-native-select-inline", r._isInlineSelect()));
          },
          inputs: {
            disabled: "disabled",
            id: "id",
            placeholder: "placeholder",
            name: "name",
            required: "required",
            type: "type",
            errorStateMatcher: "errorStateMatcher",
            userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
            value: "value",
            readonly: "readonly",
          },
          exportAs: ["matInput"],
          standalone: !0,
          features: [ce([{ provide: Nu, useExisting: n }]), Ie],
        });
      }
    }
    return n;
  })(),
  Jg = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = ht({ type: n });
      }
      static {
        this.ɵinj = ut({ imports: [zt, Vu, Vu, jg, zt] });
      }
    }
    return n;
  })();
function PC(n, e) {
  n & 1 && (at(0, "mat-error"), Bt(1), be(2, "translate"), ct()),
    n & 2 && (ft(), Tn(" ", _e(2, 1, "MAIN.APPOINTMENT.TITLE_REQUIRED"), " "));
}
var gl = class n {
  constructor(e, t) {
    this.dialogRef = e;
    this.data = t;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.dialogRef.close(this.data);
  }
  static ɵfac = function (t) {
    return new (t || n)(P(jr), P(Pu));
  };
  static ɵcmp = kt({
    type: n,
    selectors: [["app-appointment-dialog"]],
    standalone: !0,
    features: [Tt],
    decls: 28,
    vars: 19,
    consts: [
      ["appointmentForm", "ngForm"],
      ["mat-dialog-title", ""],
      ["appearance", "fill", 1, "w-full", "pb-4"],
      [
        "matInput",
        "",
        "name",
        "title",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["appearance", "fill", 1, "w-full"],
      ["matInput", "", "name", "description", 3, "ngModelChange", "ngModel"],
      ["mat-button", "", "tabindex", "0", 3, "click"],
      ["mat-button", "", "tabindex", "0", 3, "click", "disabled"],
    ],
    template: function (t, i) {
      if (t & 1) {
        let r = Yi();
        at(0, "h2", 1),
          Bt(1),
          be(2, "translate"),
          ct(),
          at(3, "mat-dialog-content")(4, "form", null, 0)(6, "p"),
          Bt(7, 'Add an event, f.e. "Game Night"'),
          ct(),
          at(8, "mat-form-field", 2)(9, "mat-label"),
          Bt(10),
          be(11, "translate"),
          ct(),
          at(12, "input", 3),
          Lc("ngModelChange", function (c) {
            return qe(r), Pc(i.data.title, c) || (i.data.title = c), Ye(c);
          }),
          ct(),
          Nt(13, PC, 3, 3, "mat-error"),
          ct(),
          at(14, "p"),
          Bt(15, 'Add a description, f.e. "19:00 at Benjis, bring beer"'),
          ct(),
          at(16, "mat-form-field", 4)(17, "mat-label"),
          Bt(18),
          be(19, "translate"),
          ct(),
          at(20, "input", 5),
          Lc("ngModelChange", function (c) {
            return (
              qe(r),
              Pc(i.data.description, c) || (i.data.description = c),
              Ye(c)
            );
          }),
          ct()()()(),
          at(21, "mat-dialog-actions")(22, "button", 6),
          $t("click", function () {
            return qe(r), Ye(i.onCancel());
          }),
          Bt(23),
          be(24, "translate"),
          ct(),
          at(25, "button", 7),
          $t("click", function () {
            return qe(r), Ye(i.onSubmit());
          }),
          Bt(26),
          be(27, "translate"),
          ct()();
      }
      if (t & 2) {
        let r = lr(5);
        ft(),
          Fe(_e(2, 9, "MAIN.DIALOG.HEADER")),
          ft(9),
          Fe(_e(11, 11, "MAIN.APPOINTMENT.TITLE")),
          ft(2),
          Fc("ngModel", i.data.title),
          ft(),
          te(
            r.controls.title &&
              r.controls.title.invalid &&
              r.controls.title.touched
              ? 13
              : -1,
          ),
          ft(5),
          Fe(_e(19, 13, "MAIN.APPOINTMENT.DESCRIPTION")),
          ft(2),
          Fc("ngModel", i.data.description),
          ft(3),
          Fe(_e(24, 15, "MAIN.DIALOG.CANCEL")),
          ft(2),
          le("disabled", r.invalid),
          ft(),
          Fe(_e(27, 17, "MAIN.DIALOG.SUBMIT"));
      }
    },
    dependencies: [
      Fg,
      Rg,
      Og,
      Tg,
      Jg,
      Xg,
      Zg,
      pl,
      Yg,
      Rr,
      Ap,
      rg,
      ng,
      el,
      Yp,
      Qp,
      bu,
      gu,
      is,
      on,
      Cr,
    ],
  });
};
var Vr = { type: null, entityIds: null, skip: !1, payload: null },
  zu = !1;
function Uu() {
  zu = !1;
}
function ke(n, e, t) {
  ie(n, e, t), (zu = !0);
}
function ie(n, e, t) {
  zu === !1 && ((Vr.type = n), (Vr.entityIds = e), (Vr.payload = t));
}
function Hu(n, e) {
  return function (t, i, r) {
    let a = r.value;
    return (
      (r.value = function (...c) {
        return ke(n, e), a.apply(this, c);
      }),
      r
    );
  };
}
function ui(n, e) {
  return n.hasOwnProperty(e);
}
function se(n) {
  return Array.isArray(n);
}
function cs(n) {
  return n.hasOwnProperty("active");
}
function vl(n) {
  return se(n);
}
function ds({ active: n, ids: e, entities: t }) {
  return vl(n) ? tv(n, e) : ui(t, n) === !1 ? null : n;
}
function tv(n, e) {
  let t = n.filter((i) => e.indexOf(i) > -1);
  return t.length === n.length ? n : t;
}
function $u({
  state: n,
  entities: e,
  idKey: t,
  options: i = {},
  preAddEntity: r,
}) {
  let a = {},
    c = [],
    h = !1;
  for (let f of e)
    if (ui(n.entities, f[t]) === !1) {
      let b = r(f),
        y = b[t];
      (a[y] = b), i.prepend ? c.unshift(y) : c.push(y), (h = !0);
    }
  return h
    ? {
        newState: Z(C({}, n), {
          entities: C(C({}, n.entities), a),
          ids: i.prepend ? [...c, ...n.ids] : [...n.ids, ...c],
        }),
        newIds: c,
      }
    : null;
}
function Jt(n) {
  return n == null;
}
function Ot(n) {
  return Jt(n) ? [] : Array.isArray(n) ? n : [n];
}
var un = "id";
function Ve(n) {
  return se(n) ? n.length === 0 : !1;
}
function _t(n) {
  return typeof n == "function";
}
function Ku() {
  return Oe((n, e) =>
    n === e
      ? !0
      : !se(n) || !se(e)
        ? !1
        : Ve(n) && Ve(e)
          ? !0
          : n.length !== e.length
            ? !1
            : e.some((i, r) => n[r] !== i) === !1,
  );
}
function ki(n) {
  let e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var ev = { resettable: !1, ttl: null, producerFn: void 0 };
function Br() {
  return ev;
}
function iv() {
  return ev.producerFn;
}
function Mi(n) {
  return Jt(n) === !1;
}
var Wu = new et(),
  us = new $s(50, 5e3),
  nv = new et();
function rv(n) {
  Wu.next(n);
}
function ov(n) {
  us.next(n);
}
function sv(n, e) {
  nv.next({ storeName: n, action: e });
}
var hs = typeof window < "u";
var de = {},
  Gu = {};
hs && ((window.$$stores = de), (window.$$queries = Gu));
var bl = (function (n) {
  return (n.ASC = "asc"), (n.DESC = "desc"), n;
})(bl || {});
function qu(n, e = bl.ASC) {
  return function (t, i) {
    if (!t.hasOwnProperty(n) || !i.hasOwnProperty(n)) return 0;
    let r = typeof t[n] == "string" ? t[n].toUpperCase() : t[n],
      a = typeof i[n] == "string" ? i[n].toUpperCase() : i[n],
      c = 0;
    return r > a ? (c = 1) : r < a && (c = -1), e == bl.DESC ? c * -1 : c;
  };
}
function Yu(n, e) {
  let t = [],
    { ids: i, entities: r } = n,
    { filterBy: a, limitTo: c, sortBy: h, sortByOrder: f } = e;
  for (let y = 0; y < i.length; y++) {
    let D = r[i[y]];
    if (!a) {
      t.push(D);
      continue;
    }
    Ot(a).every((G) => G(D, y)) && t.push(D);
  }
  if (h) {
    let y = _t(h) ? h : qu(h, f);
    t = t.sort((D, U) => y(D, U, n));
  }
  let b = Math.min(c || t.length, t.length);
  return b === t.length ? t : t.slice(0, b);
}
function Qu(n, e) {
  let t = {},
    { filterBy: i, limitTo: r } = e,
    { ids: a, entities: c } = n;
  if (!i && !r) return c;
  let h = Jt(r) === !1;
  if (i && h) {
    let f = 0;
    for (let b = 0, y = a.length; b < y && f !== r; b++) {
      let D = a[b],
        U = c[D];
      Ot(i).every((G) => G(U, b)) && ((t[D] = U), f++);
    }
  } else {
    let f = Math.min(r || a.length, a.length);
    for (let b = 0; b < f; b++) {
      let y = a[b],
        D = c[y];
      if (!i) {
        t[y] = D;
        continue;
      }
      Ot(i).every((z) => z(D, b)) && (t[y] = D);
    }
  }
  return t;
}
var hn = (function (n) {
  return (
    (n.Set = "Set"),
    (n.Add = "Add"),
    (n.Update = "Update"),
    (n.Remove = "Remove"),
    n
  );
})(hn || {});
var _l = !0;
function jt() {
  return _l;
}
function Zu(n, e, t) {
  let i;
  if (se(n)) i = n;
  else if (ki(n)) {
    if (Jt(t)) return;
    n = Object.assign({ wrap: !0 }, n);
    let r = e.indexOf(t);
    if (n.prev) {
      let a = r === 0;
      if (a && !n.wrap) return;
      i = a ? e[e.length - 1] : e[r - 1];
    } else if (n.next) {
      let a = e.length === r + 1;
      if (a && !n.wrap) return;
      i = a ? e[0] : e[r + 1];
    }
  } else {
    if (n === t) return;
    i = n;
  }
  return i;
}
var Xu = () => ({ entities: {}, ids: [], loading: !0, error: null });
function Be(n) {
  return n === void 0;
}
function Ju({ state: n, ids: e }) {
  if (Jt(e)) return lv(n);
  let t = n.entities,
    i = {};
  for (let a of n.ids) e.includes(a) === !1 && (i[a] = t[a]);
  let r = Z(C({}, n), {
    entities: i,
    ids: n.ids.filter((a) => e.includes(a) === !1),
  });
  return cs(n) && (r.active = ds(r)), r;
}
function lv(n) {
  return Z(C({}, n), {
    entities: {},
    ids: [],
    active: vl(n.active) ? [] : null,
  });
}
function th(n, e, t) {
  let i = { entities: {}, ids: [] };
  for (let r of n) {
    let a = t(r);
    (i.entities[a[e]] = a), i.ids.push(a[e]);
  }
  return i;
}
function dv(n) {
  return n.entities && n.ids;
}
function cv(n, e) {
  let t = {};
  for (let i of Object.keys(n)) t[i] = e(n[i]);
  return t;
}
function eh({
  state: n,
  entities: e,
  idKey: t,
  preAddEntity: i,
  isNativePreAdd: r,
}) {
  let a, c;
  if (se(e)) {
    let f = th(e, t, i);
    (a = f.entities), (c = f.ids);
  } else
    dv(e)
      ? ((a = r ? e.entities : cv(e.entities, i)), (c = e.ids))
      : ((a = r ? e : cv(e, i)),
        (c = Object.keys(a).map((f) => (isNaN(f) ? f : Number(f)))));
  let h = Z(C({}, n), { entities: a, ids: c, loading: !1 });
  return cs(n) && (h.active = ds(h)), h;
}
function ih(n) {
  Object.freeze(n);
  let e = typeof n == "function",
    t = Object.prototype.hasOwnProperty;
  return (
    Object.getOwnPropertyNames(n).forEach(function (i) {
      t.call(n, i) &&
        (!e || (i !== "caller" && i !== "callee" && i !== "arguments")) &&
        n[i] !== null &&
        (typeof n[i] == "object" || typeof n[i] == "function") &&
        !Object.isFrozen(n[i]) &&
        ih(n[i]);
    }),
    n
  );
}
function uv(n, e) {
  n || console.error(`@StoreConfig({ name }) is missing in ${e}`);
}
function hi(n) {
  return n != null && `${n}` != "false";
}
function zr(n) {
  return hi(n) && n.constructor.name === "Object";
}
var Kn = "akitaConfig";
function nh(n) {
  return function (e) {
    e[Kn] = { idKey: "id" };
    for (let t = 0, i = Object.keys(n); t < i.length; t++) {
      let r = i[t];
      r === "name" ? (e[Kn].storeName = n[r]) : (e[Kn][r] = n[r]);
    }
  };
}
var VC = new et(),
  hv = new Gt(!1),
  Ri = { activeTransactions: 0, batchTransaction: null };
function mv() {
  yl() || (Ri.batchTransaction = new et()),
    Ri.activeTransactions++,
    hv.next(!0);
}
function fv() {
  --Ri.activeTransactions === 0 &&
    (Ri.batchTransaction.next(!0),
    Ri.batchTransaction.complete(),
    hv.next(!1),
    VC.next(!0));
}
function yl() {
  return Ri.activeTransactions > 0;
}
function rh() {
  return Ri.batchTransaction ? Ri.batchTransaction.asObservable() : W(!0);
}
function ms(n, e = void 0) {
  mv();
  try {
    return n.apply(e);
  } finally {
    ke("@Transaction"), fv();
  }
}
function wl() {
  return function (n, e, t) {
    let i = t.value;
    return (
      (t.value = function (...r) {
        return ms(() => i.apply(this, r), this);
      }),
      t
    );
  };
}
var Ur = class {
  constructor(e, t = {}) {
    (this.options = t),
      (this.inTransaction = !1),
      (this.cache = { active: new Gt(!1), ttl: null }),
      this.onInit(e);
  }
  setLoading(e = !1) {
    e !== this._value().loading &&
      (jt() && ie("Set Loading"),
      this._setState((t) => Z(C({}, t), { loading: e })));
  }
  setHasCache(e, t = { restartTTL: !1 }) {
    if (
      (e !== this.cache.active.value && this.cache.active.next(e), t.restartTTL)
    ) {
      let i = this.getCacheTTL();
      i &&
        (this.cache.ttl !== null && clearTimeout(this.cache.ttl),
        (this.cache.ttl = setTimeout(() => this.setHasCache(!1), i)));
    }
  }
  getValue() {
    return this.storeValue;
  }
  setError(e) {
    e !== this._value().error &&
      (jt() && ie("Set Error"),
      this._setState((t) => Z(C({}, t), { error: e })));
  }
  _select(e) {
    return this.store.asObservable().pipe(
      Q((t) => e(t.state)),
      Oe(),
    );
  }
  _value() {
    return this.storeValue;
  }
  _cache() {
    return this.cache.active;
  }
  get config() {
    return this.constructor[Kn] || {};
  }
  get storeName() {
    return this.config.storeName || this.options.storeName || this.options.name;
  }
  get deepFreeze() {
    return this.config.deepFreezeFn || this.options.deepFreezeFn || ih;
  }
  get cacheConfig() {
    return this.config.cache || this.options.cache;
  }
  get _producerFn() {
    return this.config.producerFn || this.options.producerFn || iv();
  }
  get resettable() {
    return Mi(this.config.resettable)
      ? this.config.resettable
      : this.options.resettable;
  }
  _setState(e, t = !0) {
    if (_t(e)) {
      let i = e(this._value());
      this.storeValue = _l ? this.deepFreeze(i) : i;
    } else this.storeValue = e;
    if (!this.store) {
      (this.store = new Gt({ state: this.storeValue })),
        jt() &&
          this.store.subscribe(({ action: i }) => {
            i && sv(this.storeName, i);
          });
      return;
    }
    if (yl()) {
      this.handleTransaction();
      return;
    }
    this.dispatch(this.storeValue, t);
  }
  reset() {
    this.isResettable() &&
      (jt() && ie("Reset"),
      this._setState(() => Object.assign({}, this._initialState)),
      this.setHasCache(!1));
  }
  update(e) {
    jt() && ie("Update");
    let t,
      i = this._value();
    _t(e)
      ? (t = _t(this._producerFn) ? this._producerFn(i, e) : e(i))
      : (t = e);
    let r = this.akitaPreUpdate(i, C(C({}, i), t)),
      a = zr(i) ? r : new i.constructor(r);
    this._setState(a);
  }
  updateStoreConfig(e) {
    this.options = C(C({}, this.options), e);
  }
  akitaPreUpdate(e, t) {
    return t;
  }
  destroy() {
    !(hs ? window.hmrEnabled : !1) &&
      this === de[this.storeName] &&
      (delete de[this.storeName],
      rv(this.storeName),
      this.setHasCache(!1),
      this.cache.active.complete(),
      this.store.complete());
  }
  onInit(e) {
    (de[this.storeName] = this),
      this._setState(() => e),
      ov(this.storeName),
      this.isResettable() && (this._initialState = e),
      jt() && uv(this.storeName, this.constructor.name);
  }
  dispatch(e, t = !0) {
    let i;
    t && ((i = Vr), Uu()), this.store.next({ state: e, action: i });
  }
  watchTransaction() {
    rh().subscribe(() => {
      (this.inTransaction = !1), this.dispatch(this._value());
    });
  }
  isResettable() {
    return this.resettable === !1 ? !1 : this.resettable || Br().resettable;
  }
  handleTransaction() {
    this.inTransaction || (this.watchTransaction(), (this.inTransaction = !0));
  }
  getCacheTTL() {
    return (this.cacheConfig && this.cacheConfig.ttl) || Br().ttl;
  }
};
function oh({
  state: n,
  ids: e,
  idKey: t,
  newStateOrFn: i,
  preUpdateEntity: r,
  producerFn: a,
  onEntityIdChanges: c,
}) {
  let h = {},
    f = !1,
    b;
  for (let z of e) {
    if (ui(n.entities, z) === !1) continue;
    let G = n.entities[z],
      H;
    _t(i) ? (H = _t(a) ? a(G, i) : i(G)) : (H = i);
    let it = H.hasOwnProperty(t) && H[t] !== G[t],
      Ft;
    (b = z), it && ((f = !0), (b = H[t]));
    let Kt = C(C({}, G), H);
    zr(G)
      ? (Ft = Kt)
      : zr(H)
        ? (Ft = new G.constructor(Kt))
        : (Ft = new H.constructor(Kt)),
      (h[b] = r(G, Ft));
  }
  let y = n.ids,
    D = n.entities;
  if (f) {
    let [z] = e,
      U = n.entities,
      { [z]: G } = U;
    (D = Hs(U, [rm(z)])), (y = n.ids.map((it) => (it === z ? b : it))), c(z, b);
  }
  return Z(C({}, n), { entities: C(C({}, D), h), ids: y });
}
var pv,
  Ti = class n extends Ur {
    constructor(e = {}, t = {}) {
      super(C(C({}, Xu()), e), t),
        (this.options = t),
        (this.entityActions = new et()),
        (this.entityIdChanges = new et());
    }
    get selectEntityAction$() {
      return this.entityActions.asObservable();
    }
    get selectEntityIdChanges$() {
      return this.entityIdChanges.asObservable();
    }
    get idKey() {
      return this.config.idKey || this.options.idKey || un;
    }
    set(e, t = {}) {
      if (Jt(e)) return;
      jt() && ie("Set Entity");
      let i = this.akitaPreAddEntity === n.prototype.akitaPreAddEntity;
      this.setHasCache(!0, { restartTTL: !0 }),
        this._setState((r) => {
          let a = eh({
            state: r,
            entities: e,
            idKey: this.idKey,
            preAddEntity: this.akitaPreAddEntity.bind(this),
            isNativePreAdd: i,
          });
          return Be(t.activeId) === !1 && (a.active = t.activeId), a;
        }),
        this.hasInitialUIState() && this.handleUICreation(),
        this.entityActions.next({ type: hn.Set, ids: this.ids });
    }
    add(e, t = { loading: !1 }) {
      let i = Ot(e);
      if (Ve(i)) return;
      let r = $u({
        state: this._value(),
        preAddEntity: this.akitaPreAddEntity.bind(this),
        entities: i,
        idKey: this.idKey,
        options: t,
      });
      r &&
        (jt() && ie("Add Entity"),
        (r.newState.loading = t.loading),
        this._setState(() => r.newState),
        this.hasInitialUIState() && this.handleUICreation(!0),
        this.entityActions.next({ type: hn.Add, ids: r.newIds }));
    }
    update(e, t) {
      if (Be(t)) {
        super.update(e);
        return;
      }
      let i = [];
      if (
        (_t(e)
          ? (i = this.ids.filter((a) => e(this.entities[a])))
          : (i = Jt(e) ? this.ids : Ot(e)),
        Ve(i))
      )
        return;
      jt() && ie("Update Entity", i);
      let r;
      this._setState((a) =>
        oh({
          idKey: this.idKey,
          ids: i,
          preUpdateEntity: this.akitaPreUpdateEntity.bind(this),
          state: a,
          newStateOrFn: t,
          producerFn: this._producerFn,
          onEntityIdChanges: (c, h) => {
            (r = { oldId: c, newId: h }),
              this.entityIdChanges.next(Z(C({}, r), { pending: !0 }));
          },
        }),
      ),
        r && this.entityIdChanges.next(Z(C({}, r), { pending: !1 })),
        this.entityActions.next({ type: hn.Update, ids: i });
    }
    upsert(e, t, i, r = {}) {
      let a = Ot(e),
        c = (D) => (U) => ui(this.entities, U) === D,
        h = _t(i) ? r.baseClass : i ? i.baseClass : void 0,
        f = _t(h),
        b = a.filter(c(!0)),
        y = a.filter(c(!1)).map((D) => {
          let U = typeof t == "function" ? t({}) : t,
            z = _t(i) ? i(D, U) : U,
            G = Z(C({}, z), { [this.idKey]: D });
          return f ? new h(G) : G;
        });
      this.update(b, t), this.add(y), jt() && ke("Upsert Entity");
    }
    upsertMany(e, t = {}) {
      let i = [],
        r = [],
        a = {};
      for (let c of e) {
        let h = this.akitaPreCheckEntity(c),
          f = h[this.idKey];
        if (ui(this.entities, f)) {
          let b = this._value().entities[f],
            y = C(C({}, this._value().entities[f]), h),
            D = t.baseClass ? new t.baseClass(y) : y,
            U = this.akitaPreUpdateEntity(b, D),
            z = U[this.idKey];
          (a[z] = U), r.push(z);
        } else {
          let b = t.baseClass ? new t.baseClass(h) : h,
            y = this.akitaPreAddEntity(b),
            D = y[this.idKey];
          i.push(D), (a[D] = y);
        }
      }
      jt() && ke("Upsert Many"),
        this._setState((c) =>
          Z(C({}, c), {
            ids: i.length ? [...c.ids, ...i] : c.ids,
            entities: C(C({}, c.entities), a),
            loading: !!t.loading,
          }),
        ),
        r.length && this.entityActions.next({ type: hn.Update, ids: r }),
        i.length && this.entityActions.next({ type: hn.Add, ids: i }),
        i.length && this.hasUIStore() && this.handleUICreation(!0);
    }
    replace(e, t) {
      let i = Ot(e);
      if (Ve(i)) return;
      let r = {};
      for (let a of i) r[a] = Z(C({}, t), { [this.idKey]: a });
      jt() && ie("Replace Entity", e),
        this._setState((a) =>
          Z(C({}, a), { entities: C(C({}, a.entities), r) }),
        );
    }
    move(e, t) {
      let i = this.ids.slice();
      i.splice(t < 0 ? i.length + t : t, 0, i.splice(e, 1)[0]),
        jt() && ie("Move Entity"),
        this._setState((r) =>
          Z(C({}, r), { entities: C({}, r.entities), ids: i }),
        );
    }
    remove(e) {
      if (Ve(this.ids)) return;
      let t = Mi(e),
        i = [];
      _t(e)
        ? (i = this.ids.filter((r) => e(this.entities[r])))
        : (i = t ? Ot(e) : this.ids),
        !Ve(i) &&
          (jt() && ie("Remove Entity", i),
          this._setState((r) => Ju({ state: r, ids: i })),
          t || this.setHasCache(!1),
          this.handleUIRemove(i),
          this.entityActions.next({ type: hn.Remove, ids: i }));
    }
    updateActive(e) {
      let t = Ot(this.active);
      jt() && ie("Update Active", t), this.update(t, e);
    }
    setActive(e) {
      let t = Zu(e, this.ids, this.active);
      t !== void 0 && (jt() && ie("Set Active", t), this._setActive(t));
    }
    addActive(e) {
      let t = Ot(e);
      Ve(t) ||
        t.every((r) => this.active.indexOf(r) > -1) ||
        (jt() && ie("Add Active", e),
        this._setState((r) => {
          let a = Array.from(new Set([...r.active, ...t]));
          return Z(C({}, r), { active: a });
        }));
    }
    removeActive(e) {
      let t = Ot(e);
      Ve(t) ||
        !t.some((r) => this.active.indexOf(r) > -1) ||
        (jt() && ie("Remove Active", e),
        this._setState((r) =>
          Z(C({}, r), {
            active: Array.isArray(r.active)
              ? r.active.filter((a) => t.indexOf(a) === -1)
              : null,
          }),
        ));
    }
    toggleActive(e) {
      let t = Ot(e),
        i = (c) => (h) => this.active.includes(h) === c,
        r = t.filter(i(!0)),
        a = t.filter(i(!1));
      this.removeActive(r), this.addActive(a), jt() && ke("Toggle Active");
    }
    createUIStore(e = {}, t = {}) {
      let i = { name: `UI/${this.storeName}`, idKey: this.idKey };
      return (this.ui = new fs(e, C(C({}, i), t))), this.ui;
    }
    destroy() {
      super.destroy(),
        this.ui instanceof n && this.ui.destroy(),
        this.entityActions.complete();
    }
    akitaPreUpdateEntity(e, t) {
      return t;
    }
    akitaPreAddEntity(e) {
      return e;
    }
    akitaPreCheckEntity(e) {
      return e;
    }
    get ids() {
      return this._value().ids;
    }
    get entities() {
      return this._value().entities;
    }
    get active() {
      return this._value().active;
    }
    _setActive(e) {
      this._setState((t) => Z(C({}, t), { active: e }));
    }
    handleUICreation(e = !1) {
      let t = this.ids,
        i = _t(this.ui._akitaCreateEntityFn),
        r,
        a = (c) => {
          let h = this.entities[c],
            f = i
              ? this.ui._akitaCreateEntityFn(h)
              : this.ui._akitaCreateEntityFn;
          return C({ [this.idKey]: h[this.idKey] }, f);
        };
      e
        ? (r = this.ids.filter((c) => Be(this.ui.entities[c])).map(a))
        : (r = t.map(a)),
        e ? this.ui.add(r) : this.ui.set(r);
    }
    hasInitialUIState() {
      return this.hasUIStore() && Be(this.ui._akitaCreateEntityFn) === !1;
    }
    handleUIRemove(e) {
      this.hasUIStore() && this.ui.remove(e);
    }
    hasUIStore() {
      return this.ui instanceof fs;
    }
  };
ao(
  [
    wl(),
    We("design:type", Function),
    We("design:paramtypes", [Object, Object, Object, Object]),
    We("design:returntype", void 0),
  ],
  Ti.prototype,
  "upsert",
  null,
);
ao(
  [
    wl(),
    We("design:type", Function),
    We("design:paramtypes", [
      typeof (pv = typeof T < "u" && T) == "function" ? pv : Object,
    ]),
    We("design:returntype", void 0),
  ],
  Ti.prototype,
  "toggleActive",
  null,
);
var fs = class extends Ti {
  constructor(e = {}, t = {}) {
    super(e, t);
  }
  setInitialEntityState(e) {
    this._akitaCreateEntityFn = e;
  }
};
function sh() {
  return Ct((n) => n != null);
}
function gv(n) {
  return function (e, t) {
    let i = _t(n[0]);
    return n.some((r) => (i ? r(e) !== r(t) : e[r] !== t[r])) === !1;
  };
}
function mn(n) {
  return typeof n == "string";
}
var ah = "akitaQueryConfig";
var Hr = class {
  constructor(e) {
    (this.store = e), (this.__store__ = e), jt() && (Gu[e.storeName] = this);
  }
  select(e) {
    let t;
    if (_t(e)) t = e;
    else if (mn(e)) t = (i) => i[e];
    else {
      if (Array.isArray(e))
        return this.store
          ._select((i) => i)
          .pipe(
            Oe(gv(e)),
            Q((i) =>
              _t(e[0])
                ? e.map((r) => r(i))
                : e.reduce((r, a) => ((r[a] = i[a]), r), {}),
            ),
          );
      t = (i) => i;
    }
    return this.store._select(t);
  }
  selectLoading() {
    return this.select((e) => e.loading);
  }
  selectError() {
    return this.select((e) => e.error);
  }
  getValue() {
    return this.store._value();
  }
  selectHasCache() {
    return this.store._cache().asObservable();
  }
  getHasCache() {
    return this.store._cache().value;
  }
  get config() {
    return this.constructor[ah];
  }
};
function vv(n, e) {
  for (let t of Object.keys(e)) if (n(e[t]) === !0) return t;
}
function lh(n, e) {
  return function (t) {
    let i = t[n];
    if (!Be(i)) return e ? (mn(e) ? i[e] : e(i)) : i;
  };
}
function bv(n, e) {
  return n.reduce((t, i, r, a) => {
    let c = e(i, r, a);
    return c !== void 0 && t.push(c), t;
  }, []);
}
function ch(n, e) {
  (n.sortBy = n.sortBy || (e && e.sortBy)),
    (n.sortByOrder = n.sortByOrder || (e && e.sortByOrder));
}
var fn = class extends Hr {
    constructor(e, t = {}) {
      super(e), (this.options = t), (this.__store__ = e);
    }
    selectAll(e = { asObject: !1 }) {
      return this.select((t) => t.entities).pipe(Q(() => this.getAll(e)));
    }
    getAll(e = { asObject: !1, filterBy: void 0, limitTo: void 0 }) {
      return e.asObject
        ? Qu(this.getValue(), e)
        : (ch(e, this.config || this.options), Yu(this.getValue(), e));
    }
    selectMany(e, t) {
      return !e || !e.length
        ? W([])
        : this.select((i) => i.entities).pipe(
            Q((i) => bv(e, (r) => lh(r, t)(i))),
            Ku(),
          );
    }
    selectEntity(e, t) {
      let i = e;
      return (
        _t(e) && (i = vv(e, this.getValue().entities)),
        this.select((r) => r.entities).pipe(Q(lh(i, t)), Oe())
      );
    }
    getEntity(e) {
      return this.getValue().entities[e];
    }
    selectActiveId() {
      return this.select((e) => e.active);
    }
    getActiveId() {
      return this.getValue().active;
    }
    selectActive(e) {
      return se(this.getActive())
        ? this.selectActiveId().pipe(Ut((t) => this.selectMany(t, e)))
        : this.selectActiveId().pipe(Ut((t) => this.selectEntity(t, e)));
    }
    getActive() {
      let e = this.getActiveId();
      return se(e)
        ? e.map((t) => this.getValue().entities[t])
        : hi(e)
          ? this.getEntity(e)
          : void 0;
    }
    selectCount(e) {
      return this.select((t) => t.entities).pipe(Q(() => this.getCount(e)));
    }
    getCount(e) {
      return _t(e)
        ? this.getAll().filter(e).length
        : this.getValue().ids.length;
    }
    selectLast(e) {
      return this.selectAt((t) => t[t.length - 1], e);
    }
    selectFirst(e) {
      return this.selectAt((t) => t[0], e);
    }
    selectEntityAction(e) {
      if (Jt(e)) return this.store.selectEntityAction$;
      let t = se(e) ? (r) => r : ({ ids: r }) => r,
        i = Ot(e);
      return this.store.selectEntityAction$.pipe(
        Ct(({ type: r }) => i.includes(r)),
        Q((r) => t(r)),
      );
    }
    hasEntity(e) {
      return Jt(e)
        ? this.getValue().ids.length > 0
        : _t(e)
          ? this.getAll().some(e)
          : se(e)
            ? e.every((t) => t in this.getValue().entities)
            : e in this.getValue().entities;
    }
    hasActive(e) {
      let t = this.getValue().active,
        i = Mi(e);
      return Array.isArray(t)
        ? i
          ? t.includes(e)
          : t.length > 0
        : i
          ? t === e
          : Mi(t);
    }
    createUIQuery() {
      this.ui = new xl(this.__store__.ui);
    }
    selectAt(e, t) {
      return this.select((i) => i.ids).pipe(
        Q(e),
        Oe(),
        Ut((i) => this.selectEntity(i, t)),
      );
    }
  },
  xl = class extends fn {
    constructor(e) {
      super(e);
    }
  };
function $r(n, e) {
  return e.split(".").length === 1
    ? n
    : e
        .split(".")
        .slice(1)
        .join(".")
        .split(".")
        .reduce((i, r) => i && i[r], n);
}
function ps(n, e, t, i = !1) {
  let r = e.split(".");
  if (r.length === 1) return C(C({}, n), t);
  n = C({}, n);
  let a = r.length - 2;
  return (
    e
      .split(".")
      .slice(1)
      .reduce(
        (h, f, b) =>
          b !== a
            ? ((h[f] = C({}, h[f])), h && h[f])
            : ((h[f] =
                i || Array.isArray(h[f]) || !ki(h[f]) ? t : C(C({}, h[f]), t)),
              h && h[f]),
        n,
      ),
    n
  );
}
var BC = !1,
  XO = new $s(1);
function dh(n) {
  BC = n;
}
var pn = class {
  constructor(e, t) {
    (this.query = e),
      t && t.resetFn && Br().resettable && this.onReset(t.resetFn);
  }
  getQuery() {
    return this.query;
  }
  getStore() {
    return this.getQuery().__store__;
  }
  isEntityBased(e) {
    return hi(e);
  }
  selectSource(e, t) {
    return this.isEntityBased(e)
      ? this.getQuery().selectEntity(e).pipe(sh())
      : t
        ? this.getQuery().select((i) => $r(i, this.withStoreName(t)))
        : this.getQuery().select();
  }
  getSource(e, t) {
    if (this.isEntityBased(e)) return this.getQuery().getEntity(e);
    let i = this.getQuery().getValue();
    return t ? $r(i, this.withStoreName(t)) : i;
  }
  withStoreName(e) {
    return `${this.storeName}.${e}`;
  }
  get storeName() {
    return this.getStore().storeName;
  }
  updateStore(e, t, i, r = !1) {
    if (this.isEntityBased(t)) {
      let a = this.getStore();
      r ? a.replace(t, e) : a.update(t, e);
    } else {
      if (i) {
        this.getStore()._setState((c) => ps(c, this.withStoreName(i), e, !0));
        return;
      }
      let a = r ? e : (c) => C(C({}, c), e);
      this.getStore()._setState(a);
    }
  }
  onReset(e) {
    let t = this.getStore().reset;
    this.getStore().reset = (...i) => {
      setTimeout(() => {
        t.apply(this.getStore(), i), e();
      });
    };
  }
};
var $C = {
    pagesControls: !1,
    range: !1,
    startWith: 1,
    cacheTimeout: void 0,
    clearStoreWithCache: !0,
  },
  Cl = class extends pn {
    constructor(e, t = {}) {
      super(e, {
        resetFn: () => {
          (this.initial = !1), this.destroy({ clearCache: !0, currentPage: 1 });
        },
      }),
        (this.query = e),
        (this.config = t),
        (this.metadata = new Map()),
        (this.pages = new Map()),
        (this.pagination = {
          currentPage: 1,
          perPage: 0,
          total: 0,
          lastPage: 0,
          data: [],
        }),
        (this.initial = !0),
        (this.isLoading$ = this.query.selectLoading().pipe(cm(0))),
        (this.config = C(C({}, $C), t));
      let { startWith: i, cacheTimeout: r } = this.config;
      (this.page = new Gt(i)),
        he(r) &&
          (this.clearCacheSubscription = r.subscribe(() => this.clearCache()));
    }
    get pageChanges() {
      return this.page.asObservable();
    }
    get currentPage() {
      return this.pagination.currentPage;
    }
    get isFirst() {
      return this.currentPage === 1;
    }
    get isLast() {
      return this.currentPage === this.pagination.lastPage;
    }
    withControls() {
      return (this.config.pagesControls = !0), this;
    }
    withRange() {
      return (this.config.range = !0), this;
    }
    setLoading(e = !0) {
      this.getStore().setLoading(e);
    }
    update(e) {
      (this.pagination = e), this.addPage(e.data);
    }
    addPage(e) {
      this.pages.set(this.currentPage, {
        ids: e.map((t) => t[this.getStore().idKey]),
      }),
        this.getStore().upsertMany(e);
    }
    clearCache(e = {}) {
      this.initial ||
        (ke("@Pagination - Clear Cache"),
        e.clearStore !== !1 &&
          (this.config.clearStoreWithCache || e.clearStore) &&
          this.getStore().remove(),
        (this.pages = new Map()),
        (this.metadata = new Map())),
        (this.initial = !1);
    }
    clearPage(e) {
      this.pages.delete(e);
    }
    destroy({ clearCache: e, currentPage: t } = {}) {
      this.clearCacheSubscription && this.clearCacheSubscription.unsubscribe(),
        e && this.clearCache(),
        Be(t) || this.setPage(t),
        (this.initial = !0);
    }
    isPageActive(e) {
      return this.currentPage === e;
    }
    setPage(e) {
      (e !== this.currentPage || !this.hasPage(e)) &&
        this.page.next((this.pagination.currentPage = e));
    }
    nextPage() {
      this.currentPage !== this.pagination.lastPage &&
        this.setPage(this.pagination.currentPage + 1);
    }
    prevPage() {
      this.pagination.currentPage > 1 &&
        this.setPage(this.pagination.currentPage - 1);
    }
    setLastPage() {
      this.setPage(this.pagination.lastPage);
    }
    setFirstPage() {
      this.setPage(1);
    }
    hasPage(e) {
      return this.pages.has(e);
    }
    getPage(e) {
      let t = this.pagination.currentPage;
      return this.hasPage(t)
        ? this.selectPage(t)
        : (this.setLoading(!0),
          oe(e()).pipe(
            Ut(
              (i) => (
                (t = i.currentPage),
                ms(() => {
                  this.setLoading(!1), this.update(i);
                }),
                this.selectPage(t)
              ),
            ),
          ));
    }
    getQuery() {
      return this.query;
    }
    refreshCurrentPage() {
      Jt(this.currentPage) === !1 &&
        (this.clearPage(this.currentPage), this.setPage(this.currentPage));
    }
    getFrom() {
      return this.isFirst
        ? 1
        : (this.currentPage - 1) * this.pagination.perPage + 1;
    }
    getTo() {
      return this.isLast
        ? this.pagination.total
        : this.currentPage * this.pagination.perPage;
    }
    selectPage(e) {
      return this.query.selectAll({ asObject: !0 }).pipe(
        Lt(1),
        Q((t) => {
          let i = Z(C({}, this.pagination), {
              data: this.pages.get(e).ids.map((c) => t[c]),
            }),
            { range: r, pagesControls: a } = this.config;
          return (
            isNaN(this.pagination.total) &&
              (i.lastPage === 1
                ? (i.total = i.data ? i.data.length : 0)
                : (i.total = i.perPage * i.lastPage),
              (this.pagination.total = i.total)),
            r && ((i.from = this.getFrom()), (i.to = this.getTo())),
            a &&
              (i.pageControls = KC(
                this.pagination.total,
                this.pagination.perPage,
              )),
            i
          );
        }),
      );
    }
  };
ao(
  [
    Hu("@Pagination - New Page"),
    We("design:type", Function),
    We("design:paramtypes", [Object]),
    We("design:returntype", void 0),
  ],
  Cl.prototype,
  "update",
  null,
);
function KC(n, e) {
  let t = Math.ceil(n / e),
    i = [];
  for (let r = 0; r < t; r++) i.push(r + 1);
  return i;
}
var uh = (function (n) {
    return (n.Update = "UPDATE"), n;
  })(uh || {}),
  o1 = { [uh.Update]: "update" },
  Oi = (function (n) {
    return (
      (n.Update = "UPDATE"),
      (n.AddEntities = "ADD_ENTITIES"),
      (n.SetEntities = "SET_ENTITIES"),
      (n.UpdateEntities = "UPDATE_ENTITIES"),
      (n.RemoveEntities = "REMOVE_ENTITIES"),
      (n.UpsertEntities = "UPSERT_ENTITIES"),
      (n.UpsertManyEntities = "UPSERT_MANY_ENTITIES"),
      n
    );
  })(Oi || {}),
  s1 = {
    [Oi.Update]: "update",
    [Oi.AddEntities]: "add",
    [Oi.SetEntities]: "set",
    [Oi.UpdateEntities]: "update",
    [Oi.RemoveEntities]: "remove",
    [Oi.UpsertEntities]: "upsert",
    [Oi.UpsertManyEntities]: "upsertMany",
  };
var El = class {
    getStoresSnapshot(e = []) {
      let t = {},
        r = e.length > 0 ? e : Object.keys(de);
      for (let a = 0; a < r.length; a++) {
        let c = r[a];
        c !== "router" && (t[c] = de[c]._value());
      }
      return t;
    }
    setStoresSnapshot(e, t) {
      let i = C({ skipStorageUpdate: !1, lazy: !1 }, t);
      i.skipStorageUpdate && dh(!0);
      let r = e;
      mn(e) && (r = JSON.parse(r));
      let a = Object.keys(r).length;
      if (i.lazy)
        us.pipe(
          Ct((c) => r.hasOwnProperty(c)),
          Lt(a),
        ).subscribe((c) => de[c]._setState(() => r[c]));
      else
        for (let c = 0, h = Object.keys(r); c < h.length; c++) {
          let f = h[c];
          de[f] && de[f]._setState(() => r[f]);
        }
      i.skipStorageUpdate && dh(!1);
    }
  },
  GC = new El();
var xe = class extends Ti {
  constructor() {
    super();
  }
};
Ic(xe, "\u0275fac", function (t) {
  return new (t || xe)();
}),
  Ic(xe, "\u0275prov", V({ token: xe, factory: xe.ɵfac, providedIn: "root" })),
  (xe = om([nh({ name: "appointment" })], xe));
var Il = a_(wv(), 1),
  xv = Symbol.for("Dexie"),
  Dl = globalThis[xv] || (globalThis[xv] = Il.default);
if (Il.default.semVer !== Dl.semVer)
  throw new Error(
    `Two different versions of Dexie loaded in the same app: ${Il.default.semVer} and ${Dl.semVer}`,
  );
var {
  liveQuery: kL,
  mergeRanges: ML,
  rangesOverlap: RL,
  RangeSet: TL,
  cmp: OL,
  Entity: FL,
  PropModSymbol: PL,
  PropModification: LL,
  replacePrefix: NL,
  add: jL,
  remove: VL,
} = Dl;
var Cv = Dl;
var Al = class n extends Cv {
  appointments;
  constructor() {
    super("AppointmentDatabase"),
      this.version(1).stores({
        appointments: "++id, title, date, description",
      }),
      (this.appointments = this.table("appointments"));
  }
  addAppointment(e) {
    return $e(this, null, function* () {
      return yield this.appointments.add(e);
    });
  }
  getAppointments() {
    return $e(this, null, function* () {
      return yield this.appointments.toArray();
    });
  }
  deleteAppointment(e) {
    return $e(this, null, function* () {
      return yield this.appointments.delete(e);
    });
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var Sl = class n {
  constructor(e, t) {
    this.appointmentStore = e;
    this.appointmentDbService = t;
  }
  addAppointment(e) {
    return $e(this, null, function* () {
      let t = yield this.appointmentDbService.addAppointment(e);
      this.appointmentStore.add(Z(C({}, e), { id: t }));
    });
  }
  loadAppointments() {
    return $e(this, null, function* () {
      let e = yield this.appointmentDbService.getAppointments();
      this.appointmentStore.set(e);
    });
  }
  deleteAppointment(e) {
    return $e(this, null, function* () {
      yield this.appointmentDbService.deleteAppointment(e),
        this.appointmentStore.remove(e);
    });
  }
  static ɵfac = function (t) {
    return new (t || n)(A(xe), A(Al));
  };
  static ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var kl = class n extends fn {
  constructor(t) {
    super(t);
    this.store = t;
  }
  selectAppointmentsByDate(t) {
    return this.selectAll().pipe(Q((i) => i.filter((r) => r.date === t)));
  }
  static ɵfac = function (i) {
    return new (i || n)(A(xe));
  };
  static ɵprov = V({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var ZC = (n, e) => e.id,
  XC = (n, e) => ({
    "today bg-blue-200 hover:bg-blue-300 dark:bg-gray-800 dark:hover:bg-gray-1000":
      n,
    first: e,
  });
function JC(n, e) {
  if (n & 1) {
    let t = Yi();
    at(0, "div", 7)(1, "button", 8),
      $t("click", function () {
        let r = qe(t).$implicit,
          a = ge(2);
        return Ye(a.deleteAppointment(r.id));
      }),
      at(2, "mat-icon", 5),
      Bt(3, "close"),
      ct()(),
      at(4, "div", 9)(5, "span", 10),
      Bt(6),
      ct(),
      at(7, "span", 3),
      Bt(8),
      ct()()();
  }
  if (n & 2) {
    let t = e.$implicit;
    ft(6), Tn("", t.title, " "), ft(2), Tn("", t.description, " ");
  }
}
function tE(n, e) {
  if (n & 1) {
    let t = Yi();
    at(0, "li", 0)(1, "div", 1)(2, "div")(3, "span", 2),
      Bt(4),
      ct(),
      at(5, "span", 3),
      Bt(6),
      be(7, "translate"),
      ct()(),
      at(8, "button", 4),
      be(9, "translate"),
      $t("click", function () {
        qe(t);
        let r = ge();
        return Ye(r.addAppointment());
      }),
      at(10, "mat-icon", 5),
      Bt(11, "add"),
      ct()()(),
      at(12, "div", 6),
      Xs(13, JC, 9, 2, "div", 7, ZC),
      be(15, "async"),
      ct()();
  }
  if (n & 2) {
    let t = ge();
    le("ngClass", Om(10, XC, t.calenderDay.today, t.calenderDay.date === 1)),
      ft(4),
      Tn("", t.calenderDay.date, " "),
      ft(2),
      Fe(_e(7, 4, "MAIN.WEEKDAY." + t.calenderDay.day)),
      ft(2),
      Mt("aria-label", _e(9, 6, "MAIN.ADDAPPOINTMENT")),
      ft(5),
      Js(_e(15, 8, t.appointments$));
  }
}
var Ml = class n {
  constructor(e, t, i) {
    this.appointmentService = e;
    this.appointmentQuery = t;
    this.dialog = i;
  }
  _calenderDay = qi(void 0);
  set calenderDay(e) {
    this._calenderDay.set(e),
      e &&
        (this.appointments$ = this.appointmentQuery.selectAppointmentsByDate(
          e.isoString,
        ));
  }
  get calenderDay() {
    return this._calenderDay();
  }
  appointments$;
  ngOnInit() {
    this.appointmentService.loadAppointments(),
      this.calenderDay &&
        (this.appointments$ = this.appointmentQuery.selectAppointmentsByDate(
          this.calenderDay.isoString,
        ));
  }
  addAppointment() {
    this.dialog
      .open(gl, {
        panelClass: "full-page-dialog",
        data: { title: "", description: "" },
      })
      .afterClosed()
      .pipe(Ct((e) => !!e))
      .subscribe((e) => {
        let t = Z(C({}, e), { date: this.calenderDay.isoString });
        this.appointmentService.addAppointment(t);
      });
  }
  deleteAppointment(e) {
    this.appointmentService.deleteAppointment(e);
  }
  static ɵfac = function (t) {
    return new (t || n)(P(Sl), P(kl), P(ml));
  };
  static ɵcmp = kt({
    type: n,
    selectors: [["app-day"]],
    inputs: { calenderDay: "calenderDay" },
    standalone: !0,
    features: [Tt],
    decls: 1,
    vars: 1,
    consts: [
      [
        1,
        "relative",
        "group",
        "hover:bg-gray-200",
        "p-4",
        "border-b",
        "border-gray-300",
        "dark:border-gray-700",
        "dark:hover:bg-gray-800",
        3,
        "ngClass",
      ],
      [1, "flex", "justify-between"],
      [1, "text-2xl"],
      [1, "text-sm", "font-light"],
      ["mat-icon-button", "", 3, "click"],
      [1, "text-rg"],
      [1, "flex", "flex-col"],
      [1, "flex", "gap-2"],
      ["mat-icon-button", "", 1, "self-center", 3, "click"],
      [1, "self-center"],
      [1, "text-xl"],
    ],
    template: function (t, i) {
      t & 1 && Nt(0, tE, 16, 13, "li", 0), t & 2 && te(i.calenderDay ? 0 : -1);
    },
    dependencies: [wi, Vm, Bm, on, Cr, Rr, Ua, ll, al],
  });
};
var eE = (n, e) => e.date;
function iE(n, e) {
  if ((n & 1 && qt(0, "app-day", 6), n & 2)) {
    let t = e.$implicit;
    le("calenderDay", t);
  }
}
var Rl = class n {
  currentDate = new Date();
  datesInMonth = [];
  constructor() {
    this.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
  }
  ngAfterViewInit() {
    this.scrollToToday();
  }
  generateMonth(e, t) {
    let i = new Date(e, t, 1),
      r = [];
    for (; i.getMonth() === t; ) {
      let a = new Date(i),
        c = {
          day: a.getDay(),
          date: a.getDate(),
          today: a.toDateString() === new Date().toDateString(),
          isoString: a.toISOString(),
        };
      r.push(c), i.setDate(i.getDate() + 1);
    }
    this.datesInMonth = r;
  }
  prevMonth() {
    this.incrementMonth(-1),
      this.generateMonth(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
      ),
      this.scrollToToday();
  }
  nextMonth() {
    this.incrementMonth(1),
      this.generateMonth(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
      ),
      this.scrollToToday();
  }
  incrementMonth(e) {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + e,
      this.currentDate.getDate(),
    );
  }
  scrollToToday() {
    setTimeout(() => {
      let e = document.querySelector(".first");
      e && e.scrollIntoView({ behavior: "smooth", block: "center" });
      let t = document.querySelector(".today");
      t && t.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = kt({
    type: n,
    selectors: [["app-calender"]],
    standalone: !0,
    features: [Tt],
    decls: 16,
    vars: 10,
    consts: [
      [1, "h-screen", "overflow-auto"],
      [
        1,
        "flex",
        "justify-between",
        "items-center",
        "p-4",
        "sticky",
        "top-0",
        "bg-blue-100",
        "z-10",
        "dark:bg-gray-900",
      ],
      ["mat-icon-button", "", 3, "click"],
      [1, "text-rg"],
      [1, "text-xl", "text-center"],
      [1, "list-none", "p-0"],
      [3, "calenderDay"],
    ],
    template: function (t, i) {
      t & 1 &&
        (at(0, "div", 0)(1, "div", 1)(2, "button", 2),
        be(3, "translate"),
        $t("click", function () {
          return i.prevMonth();
        }),
        at(4, "mat-icon", 3),
        Bt(5, "chevron_left"),
        ct()(),
        at(6, "span", 4),
        Bt(7),
        be(8, "date"),
        ct(),
        at(9, "button", 2),
        be(10, "translate"),
        $t("click", function () {
          return i.nextMonth();
        }),
        at(11, "mat-icon", 3),
        Bt(12, "chevron_right"),
        ct()()(),
        at(13, "ul", 5),
        Xs(14, iE, 1, 1, "app-day", 6, eE),
        ct()()),
        t & 2 &&
          (ft(2),
          Mt("aria-label", _e(3, 3, "MAIN.PREVIOUSMONTH")),
          ft(5),
          Fe(Fm(8, 5, i.currentDate, "MMMM yyyy")),
          ft(2),
          Mt("aria-label", _e(10, 8, "MAIN.NEXTMONTH")),
          ft(5),
          Js(i.datesInMonth));
    },
    dependencies: [sg, Rr, Ua, wi, zm, on, Cr, ll, al, Ml],
  });
};
var Ev = [{ path: "", component: Rl }];
var nE = "@",
  rE = (() => {
    class n {
      constructor(t, i, r, a, c) {
        (this.doc = t),
          (this.delegate = i),
          (this.zone = r),
          (this.animationType = a),
          (this.moduleImpl = c),
          (this._rendererFactoryPromise = null),
          (this.scheduler = B(Dm, { optional: !0 })),
          (this.loadingSchedulerFn = B(oE, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let t = () =>
            this.moduleImpl ?? import("./chunk-4S2OBHYJ.js").then((r) => r),
          i;
        return (
          this.loadingSchedulerFn
            ? (i = this.loadingSchedulerFn(t))
            : (i = t()),
          i
            .catch((r) => {
              throw new Et(5300, !1);
            })
            .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: a }) => {
              this._engine = r(this.animationType, this.doc);
              let c = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = c), c;
            })
        );
      }
      createRenderer(t, i) {
        let r = this.delegate.createRenderer(t, i);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let a = new fh(r);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((c) => {
              let h = c.createRenderer(t, i);
              a.use(h), this.scheduler?.notify(10);
            })
            .catch((c) => {
              a.use(r);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
      static {
        this.ɵfac = function (i) {
          po();
        };
      }
      static {
        this.ɵprov = V({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  fh = class {
    constructor(e) {
      (this.delegate = e), (this.replay = []), (this.ɵtype = 1);
    }
    use(e) {
      if (((this.delegate = e), this.replay !== null)) {
        for (let t of this.replay) t(e);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(e, t) {
      return this.delegate.createElement(e, t);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(e, t) {
      this.delegate.appendChild(e, t);
    }
    insertBefore(e, t, i, r) {
      this.delegate.insertBefore(e, t, i, r);
    }
    removeChild(e, t, i) {
      this.delegate.removeChild(e, t, i);
    }
    selectRootElement(e, t) {
      return this.delegate.selectRootElement(e, t);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, t, i, r) {
      this.delegate.setAttribute(e, t, i, r);
    }
    removeAttribute(e, t, i) {
      this.delegate.removeAttribute(e, t, i);
    }
    addClass(e, t) {
      this.delegate.addClass(e, t);
    }
    removeClass(e, t) {
      this.delegate.removeClass(e, t);
    }
    setStyle(e, t, i, r) {
      this.delegate.setStyle(e, t, i, r);
    }
    removeStyle(e, t, i) {
      this.delegate.removeStyle(e, t, i);
    }
    setProperty(e, t, i) {
      this.shouldReplay(t) && this.replay.push((r) => r.setProperty(e, t, i)),
        this.delegate.setProperty(e, t, i);
    }
    setValue(e, t) {
      this.delegate.setValue(e, t);
    }
    listen(e, t, i) {
      return (
        this.shouldReplay(t) && this.replay.push((r) => r.listen(e, t, i)),
        this.delegate.listen(e, t, i)
      );
    }
    shouldReplay(e) {
      return this.replay !== null && e.startsWith(nE);
    }
  },
  oE = new Y("");
function Iv(n = "animations") {
  return (
    Oc("NgAsyncAnimations"),
    kn([
      {
        provide: Ys,
        useFactory: (e, t, i) => new rE(e, t, i, n),
        deps: [dt, ua, st],
      },
      {
        provide: pe,
        useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Tl = class {
  http;
  prefix;
  suffix;
  constructor(e, t = "/assets/i18n/", i = ".json") {
    (this.http = e), (this.prefix = t), (this.suffix = i);
  }
  getTranslation(e) {
    return this.http.get(`${this.prefix}${e}${this.suffix}`);
  }
};
function sE(n) {
  return new Tl(n, "./i18n/", ".json");
}
var Dv = {
  providers: [
    Pm({ eventCoalescing: !0 }),
    Xf(Ev),
    Iv(),
    of(),
    pm(on.forRoot({ loader: { provide: rn, useFactory: sE, deps: [xo] } })),
  ],
};
var Ol = class n {
  constructor(e) {
    this.translate = e;
    e.addLangs(["de", "en", "fr", "it"]), e.setDefaultLang("en");
    let t = e.getBrowserLang();
    e.use(t?.match(/de|en|fr|it/) ? t : "en");
  }
  static ɵfac = function (t) {
    return new (t || n)(P(Wo));
  };
  static ɵcmp = kt({
    type: n,
    selectors: [["app-root"]],
    standalone: !0,
    features: [Tt],
    decls: 1,
    vars: 0,
    template: function (t, i) {
      t & 1 && qt(0, "router-outlet");
    },
    dependencies: [Pd],
  });
};
mf(Ol, Dv).catch((n) => console.error(n));
