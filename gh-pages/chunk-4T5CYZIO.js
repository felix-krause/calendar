var af = Object.create;
var Fn = Object.defineProperty,
  uf = Object.defineProperties,
  Ia = Object.getOwnPropertyDescriptor,
  cf = Object.getOwnPropertyDescriptors,
  lf = Object.getOwnPropertyNames,
  On = Object.getOwnPropertySymbols,
  df = Object.getPrototypeOf,
  So = Object.prototype.hasOwnProperty,
  Ea = Object.prototype.propertyIsEnumerable;
var xo = (e, t, n) =>
    t in e
      ? Fn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Fe = (e, t) => {
    for (var n in (t ||= {})) So.call(t, n) && xo(e, n, t[n]);
    if (On) for (var n of On(t)) Ea.call(t, n) && xo(e, n, t[n]);
    return e;
  },
  Re = (e, t) => uf(e, cf(t));
var Jv = (e) => (typeof e == "symbol" ? e : e + ""),
  Xv = (e, t) => {
    var n = {};
    for (var r in e) So.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && On)
      for (var r of On(e)) t.indexOf(r) < 0 && Ea.call(e, r) && (n[r] = e[r]);
    return n;
  };
var eI = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ff = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let o of lf(t))
      !So.call(e, o) &&
        o !== n &&
        Fn(e, o, {
          get: () => t[o],
          enumerable: !(r = Ia(t, o)) || r.enumerable,
        });
  return e;
};
var tI = (e, t, n) => (
  (n = e != null ? af(df(e)) : {}),
  ff(
    t || !e || !e.__esModule
      ? Fn(n, "default", { value: e, enumerable: !0 })
      : n,
    e,
  )
);
var nI = (e, t, n, r) => {
  for (
    var o = r > 1 ? void 0 : r ? Ia(t, n) : t, i = e.length - 1, s;
    i >= 0;
    i--
  )
    (s = e[i]) && (o = (r ? s(t, n, o) : s(o)) || o);
  return r && o && Fn(t, n, o), o;
};
var rI = (e, t, n) => xo(e, typeof t != "symbol" ? t + "" : t, n);
var hf = (e, t, n) =>
  new Promise((r, o) => {
    var i = (u) => {
        try {
          a(n.next(u));
        } catch (c) {
          o(c);
        }
      },
      s = (u) => {
        try {
          a(n.throw(u));
        } catch (c) {
          o(c);
        }
      },
      a = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(i, s));
    a((n = n.apply(e, t)).next());
  });
function wa(e, t) {
  return Object.is(e, t);
}
var z = null,
  Rn = !1,
  Pn = 1,
  ye = Symbol("SIGNAL");
function C(e) {
  let t = z;
  return (z = e), t;
}
function Ca() {
  return z;
}
var un = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Ao(e) {
  if (Rn) throw new Error("");
  if (z === null) return;
  z.consumerOnSignalRead(e);
  let t = z.nextProducerIndex++;
  if ((Vn(z), t < z.producerNode.length && z.producerNode[t] !== e && an(z))) {
    let n = z.producerNode[t];
    jn(n, z.producerIndexOfThis[t]);
  }
  z.producerNode[t] !== e &&
    ((z.producerNode[t] = e),
    (z.producerIndexOfThis[t] = an(z) ? xa(e, z, t) : 0)),
    (z.producerLastReadVersion[t] = e.version);
}
function pf() {
  Pn++;
}
function ba(e) {
  if (!(an(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Pn)) {
    if (!e.producerMustRecompute(e) && !Fo(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Pn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Pn);
  }
}
function _a(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Rn;
  Rn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || gf(n);
  } finally {
    Rn = t;
  }
}
function Ma() {
  return z?.consumerAllowSignalWrites !== !1;
}
function gf(e) {
  (e.dirty = !0), _a(e), e.consumerMarkedDirty?.(e);
}
function Ln(e) {
  return e && (e.nextProducerIndex = 0), C(e);
}
function Oo(e, t) {
  if (
    (C(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (an(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        jn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Fo(e) {
  Vn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (ba(n), r !== n.version)) return !0;
  }
  return !1;
}
function Ro(e) {
  if ((Vn(e), an(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      jn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function xa(e, t, n) {
  if ((Sa(e), e.liveConsumerNode.length === 0 && Ta(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = xa(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function jn(e, t) {
  if ((Sa(e), e.liveConsumerNode.length === 1 && Ta(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      jn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Vn(o), (o.producerIndexOfThis[r] = t);
  }
}
function an(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Vn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Sa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Ta(e) {
  return e.producerNode !== void 0;
}
function Po(e) {
  let t = Object.create(mf);
  t.computation = e;
  let n = () => {
    if ((ba(t), Ao(t), t.value === kn)) throw t.error;
    return t.value;
  };
  return (n[ye] = t), n;
}
var To = Symbol("UNSET"),
  No = Symbol("COMPUTING"),
  kn = Symbol("ERRORED"),
  mf = Re(Fe({}, un), {
    value: To,
    dirty: !0,
    error: null,
    equal: wa,
    producerMustRecompute(e) {
      return e.value === To || e.value === No;
    },
    producerRecomputeValue(e) {
      if (e.value === No) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = No;
      let n = Ln(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = kn), (e.error = o);
      } finally {
        Oo(e, n);
      }
      if (t !== To && t !== kn && r !== kn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function yf() {
  throw new Error();
}
var Na = yf;
function Aa() {
  Na();
}
function Oa(e) {
  Na = e;
}
var Df = null;
function Fa(e) {
  let t = Object.create(Pa);
  t.value = e;
  let n = () => (Ao(t), t.value);
  return (n[ye] = t), n;
}
function ko(e, t) {
  Ma() || Aa(), e.equal(e.value, t) || ((e.value = t), vf(e));
}
function Ra(e, t) {
  Ma() || Aa(), ko(e, t(e.value));
}
var Pa = Re(Fe({}, un), { equal: wa, value: void 0 });
function vf(e) {
  e.version++, pf(), _a(e), Df?.();
}
function g(e) {
  return typeof e == "function";
}
function Ot(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Bn = Ot(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    },
);
function ot(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var H = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (g(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Bn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            ka(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Bn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Bn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) ka(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && ot(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && ot(n, t), t instanceof e && t._removeParent(this);
  }
};
H.EMPTY = (() => {
  let e = new H();
  return (e.closed = !0), e;
})();
var Lo = H.EMPTY;
function $n(e) {
  return (
    e instanceof H ||
    (e && "closed" in e && g(e.remove) && g(e.add) && g(e.unsubscribe))
  );
}
function ka(e) {
  g(e) ? e() : e.unsubscribe();
}
var De = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var Ft = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = Ft;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = Ft;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Hn(e) {
  Ft.setTimeout(() => {
    let { onUnhandledError: t } = De;
    if (t) t(e);
    else throw e;
  });
}
function it() {}
var La = jo("C", void 0, void 0);
function ja(e) {
  return jo("E", void 0, e);
}
function Va(e) {
  return jo("N", e, void 0);
}
function jo(e, t, n) {
  return { kind: e, value: t, error: n };
}
var st = null;
function Rt(e) {
  if (De.useDeprecatedSynchronousErrorHandling) {
    let t = !st;
    if ((t && (st = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = st;
      if (((st = null), n)) throw r;
    }
  } else e();
}
function Ba(e) {
  De.useDeprecatedSynchronousErrorHandling &&
    st &&
    ((st.errorThrown = !0), (st.error = e));
}
var at = class extends H {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), $n(t) && t.add(this))
          : (this.destination = wf);
    }
    static create(t, n, r) {
      return new Pe(t, n, r);
    }
    next(t) {
      this.isStopped ? Bo(Va(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Bo(ja(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Bo(La, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  If = Function.prototype.bind;
function Vo(e, t) {
  return If.call(e, t);
}
var $o = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Un(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Un(r);
        }
      else Un(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Un(n);
        }
    }
  },
  Pe = class extends at {
    constructor(t, n, r) {
      super();
      let o;
      if (g(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && De.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Vo(t.next, i),
              error: t.error && Vo(t.error, i),
              complete: t.complete && Vo(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new $o(o);
    }
  };
function Un(e) {
  De.useDeprecatedSynchronousErrorHandling ? Ba(e) : Hn(e);
}
function Ef(e) {
  throw e;
}
function Bo(e, t) {
  let { onStoppedNotification: n } = De;
  n && Ft.setTimeout(() => n(e, t));
}
var wf = { closed: !0, next: it, error: Ef, complete: it };
var Pt = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function K(e) {
  return e;
}
function Cf(...e) {
  return Ho(e);
}
function Ho(e) {
  return e.length === 0
    ? K
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var _ = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = _f(n) ? n : new Pe(n, r, o);
      return (
        Rt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = $a(r)),
        new r((o, i) => {
          let s = new Pe({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [Pt]() {
      return this;
    }
    pipe(...n) {
      return Ho(n)(this);
    }
    toPromise(n) {
      return (
        (n = $a(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function $a(e) {
  var t;
  return (t = e ?? De.Promise) !== null && t !== void 0 ? t : Promise;
}
function bf(e) {
  return e && g(e.next) && g(e.error) && g(e.complete);
}
function _f(e) {
  return (e && e instanceof at) || (bf(e) && $n(e));
}
function Uo(e) {
  return g(e?.lift);
}
function I(e) {
  return (t) => {
    if (Uo(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function D(e, t, n, r, o) {
  return new zo(e, t, n, r, o);
}
var zo = class extends at {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Go() {
  return I((e, t) => {
    let n = null;
    e._refCount++;
    let r = D(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var Wo = class extends _ {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Uo(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new H();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          D(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = H.EMPTY));
    }
    return t;
  }
  refCount() {
    return Go()(this);
  }
};
var Ha = Ot(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var ce = (() => {
    class e extends _ {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new zn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Ha();
      }
      next(n) {
        Rt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        Rt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        Rt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Lo
          : ((this.currentObservers = null),
            i.push(n),
            new H(() => {
              (this.currentObservers = null), ot(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new _();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new zn(t, n)), e;
  })(),
  zn = class extends ce {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Lo;
    }
  };
var cn = class extends ce {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var ln = {
  now() {
    return (ln.delegate || Date).now();
  },
  delegate: void 0,
};
var dn = class extends ce {
  constructor(t = 1 / 0, n = 1 / 0, r = ln) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var Gn = class extends H {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var fn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = fn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = fn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Wn = class extends Gn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return fn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && fn.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        ot(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var kt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
kt.now = ln.now;
var qn = class extends kt {
  constructor(t, n = kt.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var ut = new qn(Wn),
  Ua = ut;
var ct = new _((e) => e.complete());
function Zn(e) {
  return e && g(e.schedule);
}
function qo(e) {
  return e[e.length - 1];
}
function Yn(e) {
  return g(qo(e)) ? e.pop() : void 0;
}
function _e(e) {
  return Zn(qo(e)) ? e.pop() : void 0;
}
function za(e, t) {
  return typeof qo(e) == "number" ? e.pop() : t;
}
function BE(e, t, n, r) {
  var o = arguments.length,
    i =
      o < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
  return o > 3 && i && Object.defineProperty(t, n, i), i;
}
function $E(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Wa(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Ga(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function lt(e) {
  return this instanceof lt ? ((this.v = e), this) : new lt(e);
}
function qa(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    s("next"),
    s("throw"),
    s("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(h) {
    r[h] &&
      (o[h] = function (f) {
        return new Promise(function (p, m) {
          i.push([h, f, p, m]) > 1 || a(h, f);
        });
      });
  }
  function a(h, f) {
    try {
      u(r[h](f));
    } catch (p) {
      d(i[0][3], p);
    }
  }
  function u(h) {
    h.value instanceof lt
      ? Promise.resolve(h.value.v).then(c, l)
      : d(i[0][2], h);
  }
  function c(h) {
    a("next", h);
  }
  function l(h) {
    a("throw", h);
  }
  function d(h, f) {
    h(f), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Za(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Ga == "function" ? Ga(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var Lt = (e) => e && typeof e.length == "number" && typeof e != "function";
function Qn(e) {
  return g(e?.then);
}
function Kn(e) {
  return g(e[Pt]);
}
function Jn(e) {
  return Symbol.asyncIterator && g(e?.[Symbol.asyncIterator]);
}
function Xn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Mf() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var er = Mf();
function tr(e) {
  return g(e?.[er]);
}
function nr(e) {
  return qa(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield lt(n.read());
        if (o) return yield lt(void 0);
        yield yield lt(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function rr(e) {
  return g(e?.getReader);
}
function T(e) {
  if (e instanceof _) return e;
  if (e != null) {
    if (Kn(e)) return xf(e);
    if (Lt(e)) return Sf(e);
    if (Qn(e)) return Tf(e);
    if (Jn(e)) return Ya(e);
    if (tr(e)) return Nf(e);
    if (rr(e)) return Af(e);
  }
  throw Xn(e);
}
function xf(e) {
  return new _((t) => {
    let n = e[Pt]();
    if (g(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Sf(e) {
  return new _((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Tf(e) {
  return new _((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Hn);
  });
}
function Nf(e) {
  return new _((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ya(e) {
  return new _((t) => {
    Of(e, t).catch((n) => t.error(n));
  });
}
function Af(e) {
  return Ya(nr(e));
}
function Of(e, t) {
  var n, r, o, i;
  return Wa(this, void 0, void 0, function* () {
    try {
      for (n = Za(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function ee(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function or(e, t = 0) {
  return I((n, r) => {
    n.subscribe(
      D(
        r,
        (o) => ee(r, e, () => r.next(o), t),
        () => ee(r, e, () => r.complete(), t),
        (o) => ee(r, e, () => r.error(o), t),
      ),
    );
  });
}
function ir(e, t = 0) {
  return I((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Qa(e, t) {
  return T(e).pipe(ir(t), or(t));
}
function Ka(e, t) {
  return T(e).pipe(ir(t), or(t));
}
function Ja(e, t) {
  return new _((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Xa(e, t) {
  return new _((n) => {
    let r;
    return (
      ee(n, t, () => {
        (r = e[er]()),
          ee(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => g(r?.return) && r.return()
    );
  });
}
function sr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new _((n) => {
    ee(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      ee(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function eu(e, t) {
  return sr(nr(e), t);
}
function tu(e, t) {
  if (e != null) {
    if (Kn(e)) return Qa(e, t);
    if (Lt(e)) return Ja(e, t);
    if (Qn(e)) return Ka(e, t);
    if (Jn(e)) return sr(e, t);
    if (tr(e)) return Xa(e, t);
    if (rr(e)) return eu(e, t);
  }
  throw Xn(e);
}
function Me(e, t) {
  return t ? tu(e, t) : T(e);
}
function Ff(...e) {
  let t = _e(e);
  return Me(e, t);
}
function Rf(e, t) {
  let n = g(e) ? e : () => e,
    r = (o) => o.error(n());
  return new _(t ? (o) => t.schedule(r, 0, o) : r);
}
function Pf(e) {
  return !!e && (e instanceof _ || (g(e.lift) && g(e.subscribe)));
}
var dt = Ot(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function nu(e) {
  return e instanceof Date && !isNaN(e);
}
function xe(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(
      D(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: kf } = Array;
function Lf(e, t) {
  return kf(t) ? e(...t) : e(t);
}
function jt(e) {
  return xe((t) => Lf(e, t));
}
var { isArray: jf } = Array,
  { getPrototypeOf: Vf, prototype: Bf, keys: $f } = Object;
function ar(e) {
  if (e.length === 1) {
    let t = e[0];
    if (jf(t)) return { args: t, keys: null };
    if (Hf(t)) {
      let n = $f(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Hf(e) {
  return e && typeof e == "object" && Vf(e) === Bf;
}
function ur(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Uf(...e) {
  let t = _e(e),
    n = Yn(e),
    { args: r, keys: o } = ar(e);
  if (r.length === 0) return Me([], t);
  let i = new _(zf(r, t, o ? (s) => ur(o, s) : K));
  return n ? i.pipe(jt(n)) : i;
}
function zf(e, t, n = K) {
  return (r) => {
    ru(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          ru(
            t,
            () => {
              let c = Me(e[u], t),
                l = !1;
              c.subscribe(
                D(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function ru(e, t, n) {
  e ? ee(n, e, t) : t();
}
function ou(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !u.length && !c && t.complete();
    },
    f = (m) => (c < r ? p(m) : u.push(m)),
    p = (m) => {
      i && t.next(m), c++;
      let F = !1;
      T(n(m, l++)).subscribe(
        D(
          t,
          (x) => {
            o?.(x), i ? f(x) : t.next(x);
          },
          () => {
            F = !0;
          },
          void 0,
          () => {
            if (F)
              try {
                for (c--; u.length && c < r; ) {
                  let x = u.shift();
                  s ? ee(t, s, () => p(x)) : p(x);
                }
                h();
              } catch (x) {
                t.error(x);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      D(t, f, () => {
        (d = !0), h();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function ve(e, t, n = 1 / 0) {
  return g(t)
    ? ve((r, o) => xe((i, s) => t(r, i, o, s))(T(e(r, o))), n)
    : (typeof t == "number" && (n = t), I((r, o) => ou(r, o, e, n)));
}
function cr(e = 1 / 0) {
  return ve(K, e);
}
function iu() {
  return cr(1);
}
function Vt(...e) {
  return iu()(Me(e, _e(e)));
}
function Gf(e) {
  return new _((t) => {
    T(e()).subscribe(t);
  });
}
function Wf(...e) {
  let t = Yn(e),
    { args: n, keys: r } = ar(e),
    o = new _((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        T(n[l]).subscribe(
          D(
            i,
            (h) => {
              d || ((d = !0), c--), (a[l] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? ur(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(jt(t)) : o;
}
var qf = ["addListener", "removeListener"],
  Zf = ["addEventListener", "removeEventListener"],
  Yf = ["on", "off"];
function Zo(e, t, n, r) {
  if ((g(n) && ((r = n), (n = void 0)), r)) return Zo(e, t, n).pipe(jt(r));
  let [o, i] = Jf(e)
    ? Zf.map((s) => (a) => e[s](t, a, n))
    : Qf(e)
      ? qf.map(su(e, t))
      : Kf(e)
        ? Yf.map(su(e, t))
        : [];
  if (!o && Lt(e)) return ve((s) => Zo(s, t, n))(T(e));
  if (!o) throw new TypeError("Invalid event target");
  return new _((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}
function su(e, t) {
  return (n) => (r) => e[n](t, r);
}
function Qf(e) {
  return g(e.addListener) && g(e.removeListener);
}
function Kf(e) {
  return g(e.on) && g(e.off);
}
function Jf(e) {
  return g(e.addEventListener) && g(e.removeEventListener);
}
function lr(e = 0, t, n = Ua) {
  let r = -1;
  return (
    t != null && (Zn(t) ? (n = t) : (r = t)),
    new _((o) => {
      let i = nu(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function Xf(...e) {
  let t = _e(e),
    n = za(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? T(r[0]) : cr(n)(Me(r, t))) : ct;
}
function We(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(D(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function au(e) {
  return I((t, n) => {
    let r = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if ((i?.unsubscribe(), (i = null), r)) {
          r = !1;
          let c = o;
          (o = null), n.next(c);
        }
        s && n.complete();
      },
      u = () => {
        (i = null), s && n.complete();
      };
    t.subscribe(
      D(
        n,
        (c) => {
          (r = !0), (o = c), i || T(e(c)).subscribe((i = D(n, a, u)));
        },
        () => {
          (s = !0), (!r || !i || i.closed) && n.complete();
        },
      ),
    );
  });
}
function eh(e, t = ut) {
  return au(() => lr(e, t));
}
function uu(e) {
  return I((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      D(n, void 0, void 0, (s) => {
        (i = T(e(s, uu(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function cu(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      D(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function th(e, t) {
  return g(t) ? ve(e, t, 1) : ve(e, 1);
}
function nh(e, t = ut) {
  return I((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      D(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function hn(e) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      D(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function ft(e) {
  return e <= 0
    ? () => ct
    : I((t, n) => {
        let r = 0;
        t.subscribe(
          D(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function lu() {
  return I((e, t) => {
    e.subscribe(D(t, it));
  });
}
function Yo(e) {
  return xe(() => e);
}
function Qo(e, t) {
  return t
    ? (n) => Vt(t.pipe(ft(1), lu()), n.pipe(Qo(e)))
    : ve((n, r) => T(e(n, r)).pipe(ft(1), Yo(n)));
}
function rh(e, t = ut) {
  let n = lr(e, t);
  return Qo(() => n);
}
function du(e, t = K) {
  return (
    (e = e ?? oh),
    I((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        D(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function oh(e, t) {
  return e === t;
}
function dr(e = ih) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      D(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function ih() {
  return new dt();
}
function sh(e) {
  return I((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function fu(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? We((o, i) => e(o, i, r)) : K,
      ft(1),
      n ? hn(t) : dr(() => new dt()),
    );
}
function Ko(e) {
  return e <= 0
    ? () => ct
    : I((t, n) => {
        let r = [];
        t.subscribe(
          D(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function ah(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? We((o, i) => e(o, i, r)) : K,
      Ko(1),
      n ? hn(t) : dr(() => new dt()),
    );
}
function uh(e, t) {
  return I(cu(e, t, arguments.length >= 2, !0));
}
function Xo(e = {}) {
  let {
    connector: t = () => new ce(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        h(), (s = u = void 0), (l = d = !1);
      },
      p = () => {
        let m = s;
        f(), m?.unsubscribe();
      };
    return I((m, F) => {
      c++, !d && !l && h();
      let x = (u = u ?? t());
      F.add(() => {
        c--, c === 0 && !d && !l && (a = Jo(p, o));
      }),
        x.subscribe(F),
        !s &&
          c > 0 &&
          ((s = new Pe({
            next: (L) => x.next(L),
            error: (L) => {
              (d = !0), h(), (a = Jo(f, n, L)), x.error(L);
            },
            complete: () => {
              (l = !0), h(), (a = Jo(f, r)), x.complete();
            },
          })),
          T(m).subscribe(s));
    })(i);
  };
}
function Jo(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Pe({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return T(t(...n)).subscribe(r);
}
function ch(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    Xo({
      connector: () => new dn(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function lh(e) {
  return We((t, n) => e <= n);
}
function dh(...e) {
  let t = _e(e);
  return I((n, r) => {
    (t ? Vt(e, n, t) : Vt(e, n)).subscribe(r);
  });
}
function hu(e, t) {
  return I((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      D(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          T(e(u, l)).subscribe(
            (o = D(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function fh(e) {
  return I((t, n) => {
    T(e).subscribe(D(n, () => n.complete(), it)), !n.closed && t.subscribe(n);
  });
}
function hh(e, t, n) {
  let r = g(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? I((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          D(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : K;
}
var ec = "https://g.co/ng/security#xss",
  S = class extends Error {
    constructor(t, n) {
      super(tc(t, n)), (this.code = t);
    }
  };
function tc(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function Qr(e) {
  return { toString: e }.toString();
}
var Bt = globalThis;
function R(e) {
  for (let t in e) if (e[t] === R) return t;
  throw Error("Could not find renamed property on target object.");
}
function ph(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function ne(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(ne).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function gi(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var gh = R({ __forward_ref__: R });
function nc(e) {
  return (
    (e.__forward_ref__ = nc),
    (e.toString = function () {
      return ne(this());
    }),
    e
  );
}
function G(e) {
  return rc(e) ? e() : e;
}
function rc(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(gh) && e.__forward_ref__ === nc
  );
}
function V(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function oc(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Kr(e) {
  return pu(e, ic) || pu(e, sc);
}
function F0(e) {
  return Kr(e) !== null;
}
function pu(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function mh(e) {
  let t = e && (e[ic] || e[sc]);
  return t || null;
}
function gu(e) {
  return e && (e.hasOwnProperty(mu) || e.hasOwnProperty(yh)) ? e[mu] : null;
}
var ic = R({ ɵprov: R }),
  mu = R({ ɵinj: R }),
  sc = R({ ngInjectableDef: R }),
  yh = R({ ngInjectorDef: R }),
  O = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = V({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function ac(e) {
  return e && !!e.ɵproviders;
}
var Dh = R({ ɵcmp: R }),
  vh = R({ ɵdir: R }),
  Ih = R({ ɵpipe: R }),
  Eh = R({ ɵmod: R }),
  Cr = R({ ɵfac: R }),
  gn = R({ __NG_ELEMENT_ID__: R }),
  yu = R({ __NG_ENV_ID__: R });
function ws(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function wh(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : ws(e);
}
function Ch(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new S(-200, e);
}
function Cs(e, t) {
  throw new S(-201, !1);
}
var b = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(b || {}),
  mi;
function uc() {
  return mi;
}
function te(e) {
  let t = mi;
  return (mi = e), t;
}
function cc(e, t, n) {
  let r = Kr(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & b.Optional) return null;
  if (t !== void 0) return t;
  Cs(e, "Injector");
}
var bh = {},
  mn = bh,
  _h = "__NG_DI_FLAG__",
  br = "ngTempTokenPath",
  Mh = "ngTokenPath",
  xh = /\n/gm,
  Sh = "\u0275",
  Du = "__source",
  Gt;
function Th() {
  return Gt;
}
function qe(e) {
  let t = Gt;
  return (Gt = e), t;
}
function Nh(e, t = b.Default) {
  if (Gt === void 0) throw new S(-203, !1);
  return Gt === null
    ? cc(e, void 0, t)
    : Gt.get(e, t & b.Optional ? null : void 0, t);
}
function oe(e, t = b.Default) {
  return (uc() || Nh)(G(e), t);
}
function M(e, t = b.Default) {
  return oe(e, Jr(t));
}
function Jr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function yi(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = G(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new S(900, !1);
      let o,
        i = b.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = Ah(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(oe(o, i));
    } else t.push(oe(r));
  }
  return t;
}
function Ah(e) {
  return e[_h];
}
function Oh(e, t, n, r) {
  let o = e[br];
  throw (
    (t[Du] && o.unshift(t[Du]),
    (e.message = Fh(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Mh] = o),
    (e[br] = null),
    e)
  );
}
function Fh(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Sh
      ? e.slice(2)
      : e;
  let o = ne(t);
  if (Array.isArray(t)) o = t.map(ne).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : ne(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    xh,
    `
  `,
  )}`;
}
function gt(e, t) {
  let n = e.hasOwnProperty(Cr);
  return n ? e[Cr] : null;
}
function Rh(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Ph(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function bs(e, t) {
  e.forEach((n) => (Array.isArray(n) ? bs(n, t) : t(n)));
}
function lc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function _r(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function kh(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Lh(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function _s(e, t, n) {
  let r = _n(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Lh(e, r, t, n)), r;
}
function ei(e, t) {
  let n = _n(e, t);
  if (n >= 0) return e[n | 1];
}
function _n(e, t) {
  return jh(e, t, 1);
}
function jh(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var ke = {},
  J = [],
  Mr = new O(""),
  dc = new O("", -1),
  fc = new O(""),
  xr = class {
    get(t, n = mn) {
      if (n === mn) {
        let r = new Error(`NullInjectorError: No provider for ${ne(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  hc = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(hc || {}),
  yn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(yn || {}),
  Qe = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Qe || {});
function Vh(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function Di(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      Bh(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function pc(e) {
  return e === 3 || e === 4 || e === 6;
}
function Bh(e) {
  return e.charCodeAt(0) === 64;
}
function Dn(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? vu(e, n, o, null, t[++r])
              : vu(e, n, o, null, null));
      }
    }
  return e;
}
function vu(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var gc = "ng-template";
function $h(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && Vh(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Ms(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Ms(e) {
  return e.type === 4 && e.value !== gc;
}
function Hh(e, t, n) {
  let r = e.type === 4 && !n ? gc : e.value;
  return t === r;
}
function Uh(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Wh(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !Ie(r) && !Ie(u)) return !1;
      if (s && Ie(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !Hh(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (Ie(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !$h(e, o, u, n)) {
          if (Ie(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = zh(u, o, Ms(e), n);
        if (l === -1) {
          if (Ie(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (Ie(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return Ie(r) || s;
}
function Ie(e) {
  return (e & 1) === 0;
}
function zh(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return qh(t, e);
}
function mc(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Uh(e, t[r], n)) return !0;
  return !1;
}
function Gh(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Wh(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (pc(n)) return t;
  }
  return e.length;
}
function qh(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Zh(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Iu(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Yh(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !Ie(s) && ((t += Iu(i, o)), (o = "")),
        (r = s),
        (i = i || !Ie(r));
    n++;
  }
  return o !== "" && (t += Iu(i, o)), t;
}
function Qh(e) {
  return e.map(Yh).join(",");
}
function Kh(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!Ie(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function R0(e) {
  return Qr(() => {
    let t = Ic(e),
      n = Re(Fe({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === hc.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || yn.Emulated,
        styles: e.styles || J,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Ec(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = wu(r, !1)), (n.pipeDefs = wu(r, !0)), (n.id = tp(n)), n
    );
  });
}
function Jh(e) {
  return mt(e) || Ts(e);
}
function Xh(e) {
  return e !== null;
}
function yc(e) {
  return Qr(() => ({
    type: e.type,
    bootstrap: e.bootstrap || J,
    declarations: e.declarations || J,
    imports: e.imports || J,
    exports: e.exports || J,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Eu(e, t) {
  if (e == null) return ke;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Qe.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Qe.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function xs(e) {
  return Qr(() => {
    let t = Ic(e);
    return Ec(t), t;
  });
}
function Ss(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function mt(e) {
  return e[Dh] || null;
}
function Ts(e) {
  return e[vh] || null;
}
function Dc(e) {
  return e[Ih] || null;
}
function ep(e) {
  let t = mt(e) || Ts(e) || Dc(e);
  return t !== null ? t.standalone : !1;
}
function vc(e, t) {
  let n = e[Eh] || null;
  if (!n && t === !0)
    throw new Error(`Type ${ne(e)} does not have '\u0275mod' property.`);
  return n;
}
function Ic(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || ke,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || J,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Eu(e.inputs, t),
    outputs: Eu(e.outputs),
    debugInfo: null,
  };
}
function Ec(e) {
  e.features?.forEach((t) => t(e));
}
function wu(e, t) {
  if (!e) return null;
  let n = t ? Dc : Jh;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Xh);
}
function tp(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function np(e) {
  return { ɵproviders: e };
}
function rp(...e) {
  return { ɵproviders: wc(!0, e), ɵfromNgModule: !0 };
}
function wc(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    bs(t, (s) => {
      let a = s;
      vi(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Cc(o, i),
    n
  );
}
function Cc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ns(o, (i) => {
      t(i, r);
    });
  }
}
function vi(e, t, n, r) {
  if (((e = G(e)), !e)) return !1;
  let o = null,
    i = gu(e),
    s = !i && mt(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = gu(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) vi(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        bs(i.imports, (l) => {
          vi(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Cc(c, t);
    }
    if (!a) {
      let c = gt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: J }, o),
        t({ provide: fc, useValue: o, multi: !0 }, o),
        t({ provide: Mr, useValue: () => oe(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Ns(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ns(e, t) {
  for (let n of e)
    ac(n) && (n = n.ɵproviders), Array.isArray(n) ? Ns(n, t) : t(n);
}
var op = R({ provide: String, useValue: R });
function bc(e) {
  return e !== null && typeof e == "object" && op in e;
}
function ip(e) {
  return !!(e && e.useExisting);
}
function sp(e) {
  return !!(e && e.useFactory);
}
function qt(e) {
  return typeof e == "function";
}
function ap(e) {
  return !!e.useClass;
}
var _c = new O(""),
  yr = {},
  up = {},
  ti;
function As() {
  return ti === void 0 && (ti = new xr()), ti;
}
var Ke = class {},
  vn = class extends Ke {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        Ei(t, (s) => this.processProvider(s)),
        this.records.set(dc, $t(void 0, this)),
        o.has("environment") && this.records.set(Ke, $t(void 0, this));
      let i = this.records.get(_c);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(fc, J, b.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = C(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          C(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = qe(this),
        r = te(void 0),
        o;
      try {
        return t();
      } finally {
        qe(n), te(r);
      }
    }
    get(t, n = mn, r = b.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(yu))) return t[yu](this);
      r = Jr(r);
      let o,
        i = qe(this),
        s = te(void 0);
      try {
        if (!(r & b.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = hp(t) && Kr(t);
            c && this.injectableDefInScope(c)
              ? (u = $t(Ii(t), yr))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & b.Self ? As() : this.parent;
        return (n = r & b.Optional && n === mn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[br] = a[br] || []).unshift(ne(t)), i)) throw a;
          return Oh(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        te(s), qe(i);
      }
    }
    resolveInjectorInitializers() {
      let t = C(null),
        n = qe(this),
        r = te(void 0),
        o;
      try {
        let i = this.get(Mr, J, b.Self);
        for (let s of i) s();
      } finally {
        qe(n), te(r), C(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(ne(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new S(205, !1);
    }
    processProvider(t) {
      t = G(t);
      let n = qt(t) ? t : G(t && t.provide),
        r = lp(t);
      if (!qt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = $t(void 0, yr, !0)),
          (o.factory = () => yi(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = C(null);
      try {
        return (
          n.value === yr && ((n.value = up), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            fp(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        C(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = G(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Ii(e) {
  let t = Kr(e),
    n = t !== null ? t.factory : gt(e);
  if (n !== null) return n;
  if (e instanceof O) throw new S(204, !1);
  if (e instanceof Function) return cp(e);
  throw new S(204, !1);
}
function cp(e) {
  if (e.length > 0) throw new S(204, !1);
  let n = mh(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function lp(e) {
  if (bc(e)) return $t(void 0, e.useValue);
  {
    let t = Mc(e);
    return $t(t, yr);
  }
}
function Mc(e, t, n) {
  let r;
  if (qt(e)) {
    let o = G(e);
    return gt(o) || Ii(o);
  } else if (bc(e)) r = () => G(e.useValue);
  else if (sp(e)) r = () => e.useFactory(...yi(e.deps || []));
  else if (ip(e)) r = () => oe(G(e.useExisting));
  else {
    let o = G(e && (e.useClass || e.provide));
    if (dp(e)) r = () => new o(...yi(e.deps));
    else return gt(o) || Ii(o);
  }
  return r;
}
function $t(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function dp(e) {
  return !!e.deps;
}
function fp(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function hp(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof O);
}
function Ei(e, t) {
  for (let n of e)
    Array.isArray(n) ? Ei(n, t) : n && ac(n) ? Ei(n.ɵproviders, t) : t(n);
}
function P0(e, t) {
  e instanceof vn && e.assertNotDestroyed();
  let n,
    r = qe(e),
    o = te(void 0);
  try {
    return t();
  } finally {
    qe(r), te(o);
  }
}
function xc() {
  return uc() !== void 0 || Th() != null;
}
function Sc(e) {
  if (!xc()) throw new S(-203, !1);
}
function pp(e) {
  return typeof e == "function";
}
var Be = 0,
  v = 1,
  y = 2,
  Y = 3,
  Ce = 4,
  ie = 5,
  Zt = 6,
  Sr = 7,
  q = 8,
  Yt = 9,
  Le = 10,
  j = 11,
  In = 12,
  Cu = 13,
  on = 14,
  ae = 15,
  yt = 16,
  Ht = 17,
  je = 18,
  Xr = 19,
  Tc = 20,
  Ze = 21,
  ni = 22,
  le = 23,
  W = 25,
  Nc = 1;
var Dt = 7,
  Tr = 8,
  Qt = 9,
  Z = 10,
  Nr = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Nr || {});
function Ye(e) {
  return Array.isArray(e) && typeof e[Nc] == "object";
}
function $e(e) {
  return Array.isArray(e) && e[Nc] === !0;
}
function Ac(e) {
  return (e.flags & 4) !== 0;
}
function eo(e) {
  return e.componentOffset > -1;
}
function Os(e) {
  return (e.flags & 1) === 1;
}
function Je(e) {
  return !!e.template;
}
function wi(e) {
  return (e[y] & 512) !== 0;
}
var Ci = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Oc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function Fs() {
  return Fc;
}
function Fc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = mp), gp;
}
Fs.ngInherit = !0;
function gp() {
  let e = Pc(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === ke) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function mp(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Pc(e) || yp(e, { previous: ke, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new Ci(c && c.currentValue, n, u === ke)), Oc(e, t, o, n);
}
var Rc = "__ngSimpleChanges__";
function Pc(e) {
  return e[Rc] || null;
}
function yp(e, t) {
  return (e[Rc] = t);
}
var bu = null;
var Se = function (e, t, n) {
    bu?.(e, t, n);
  },
  Dp = "svg",
  vp = "math";
function Ne(e) {
  for (; Array.isArray(e); ) e = e[Be];
  return e;
}
function kc(e, t) {
  return Ne(t[e]);
}
function fe(e, t) {
  return Ne(t[e.index]);
}
function Rs(e, t) {
  return e.data[t];
}
function Ps(e, t) {
  return e[t];
}
function tt(e, t) {
  let n = t[e];
  return Ye(n) ? n : n[Be];
}
function Ip(e) {
  return (e[y] & 4) === 4;
}
function ks(e) {
  return (e[y] & 128) === 128;
}
function Ep(e) {
  return $e(e[Y]);
}
function Kt(e, t) {
  return t == null ? null : e[t];
}
function Lc(e) {
  e[Ht] = 0;
}
function jc(e) {
  e[y] & 1024 || ((e[y] |= 1024), ks(e) && no(e));
}
function wp(e, t) {
  for (; e > 0; ) (t = t[on]), e--;
  return t;
}
function to(e) {
  return !!(e[y] & 9216 || e[le]?.dirty);
}
function bi(e) {
  e[Le].changeDetectionScheduler?.notify(8),
    e[y] & 64 && (e[y] |= 1024),
    to(e) && no(e);
}
function no(e) {
  e[Le].changeDetectionScheduler?.notify(0);
  let t = vt(e);
  for (; t !== null && !(t[y] & 8192 || ((t[y] |= 8192), !ks(t))); ) t = vt(t);
}
function Vc(e, t) {
  if ((e[y] & 256) === 256) throw new S(911, !1);
  e[Ze] === null && (e[Ze] = []), e[Ze].push(t);
}
function Cp(e, t) {
  if (e[Ze] === null) return;
  let n = e[Ze].indexOf(t);
  n !== -1 && e[Ze].splice(n, 1);
}
function vt(e) {
  let t = e[Y];
  return $e(t) ? t[Y] : t;
}
var w = { lFrame: Qc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Bc = !1;
function bp() {
  return w.lFrame.elementDepthCount;
}
function _p() {
  w.lFrame.elementDepthCount++;
}
function Mp() {
  w.lFrame.elementDepthCount--;
}
function $c() {
  return w.bindingsEnabled;
}
function Hc() {
  return w.skipHydrationRootTNode !== null;
}
function xp(e) {
  return w.skipHydrationRootTNode === e;
}
function Sp() {
  w.skipHydrationRootTNode = null;
}
function E() {
  return w.lFrame.lView;
}
function B() {
  return w.lFrame.tView;
}
function k0(e) {
  return (w.lFrame.contextLView = e), e[q];
}
function L0(e) {
  return (w.lFrame.contextLView = null), e;
}
function Q() {
  let e = Uc();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function Uc() {
  return w.lFrame.currentTNode;
}
function Tp() {
  let e = w.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function Mn(e, t) {
  let n = w.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function zc() {
  return w.lFrame.isParent;
}
function Gc() {
  w.lFrame.isParent = !1;
}
function Np() {
  return w.lFrame.contextLView;
}
function Wc() {
  return Bc;
}
function _u(e) {
  Bc = e;
}
function Ls() {
  let e = w.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function Ap(e) {
  return (w.lFrame.bindingIndex = e);
}
function Mt() {
  return w.lFrame.bindingIndex++;
}
function qc(e) {
  let t = w.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function Op() {
  return w.lFrame.inI18n;
}
function Fp(e, t) {
  let n = w.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), _i(t);
}
function Rp() {
  return w.lFrame.currentDirectiveIndex;
}
function _i(e) {
  w.lFrame.currentDirectiveIndex = e;
}
function Pp(e) {
  let t = w.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function js() {
  return w.lFrame.currentQueryIndex;
}
function ro(e) {
  w.lFrame.currentQueryIndex = e;
}
function kp(e) {
  let t = e[v];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ie] : null;
}
function Zc(e, t, n) {
  if (n & b.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & b.Host); )
      if (((o = kp(i)), o === null || ((i = i[on]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (w.lFrame = Yc());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function Vs(e) {
  let t = Yc(),
    n = e[v];
  (w.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Yc() {
  let e = w.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Qc(e) : t;
}
function Qc(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Kc() {
  let e = w.lFrame;
  return (w.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Jc = Kc;
function Bs() {
  let e = Kc();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Lp(e) {
  return (w.lFrame.contextLView = wp(e, w.lFrame.contextLView))[q];
}
function nt() {
  return w.lFrame.selectedIndex;
}
function It(e) {
  w.lFrame.selectedIndex = e;
}
function oo() {
  let e = w.lFrame;
  return Rs(e.tView, e.selectedIndex);
}
function jp() {
  return w.lFrame.currentNamespace;
}
var Xc = !0;
function $s() {
  return Xc;
}
function Hs(e) {
  Xc = e;
}
function Vp(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Fc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Us(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function Dr(e, t, n) {
  el(e, t, 3, n);
}
function vr(e, t, n, r) {
  (e[y] & 3) === n && el(e, t, n, r);
}
function ri(e, t) {
  let n = e[y];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[y] = n));
}
function el(e, t, n, r) {
  let o = r !== void 0 ? e[Ht] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[Ht] += 65536),
        (a < i || i == -1) &&
          (Bp(e, n, t, u), (e[Ht] = (e[Ht] & 4294901760) + u + 2)),
        u++;
}
function Mu(e, t) {
  Se(4, e, t);
  let n = C(null);
  try {
    t.call(e);
  } finally {
    C(n), Se(5, e, t);
  }
}
function Bp(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[y] >> 14 < e[Ht] >> 16 &&
      (e[y] & 3) === t &&
      ((e[y] += 16384), Mu(a, i))
    : Mu(a, i);
}
var Wt = -1,
  Et = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function $p(e) {
  return e instanceof Et;
}
function Hp(e) {
  return (e.flags & 8) !== 0;
}
function Up(e) {
  return (e.flags & 16) !== 0;
}
var oi = {},
  Mi = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Jr(r);
      let o = this.injector.get(t, oi, r);
      return o !== oi || n === oi ? o : this.parentInjector.get(t, n, r);
    }
  };
function tl(e) {
  return e !== Wt;
}
function Ar(e) {
  return e & 32767;
}
function zp(e) {
  return e >> 16;
}
function Or(e, t) {
  let n = zp(e),
    r = t;
  for (; n > 0; ) (r = r[on]), n--;
  return r;
}
var xi = !0;
function Fr(e) {
  let t = xi;
  return (xi = e), t;
}
var Gp = 256,
  nl = Gp - 1,
  rl = 5,
  Wp = 0,
  Te = {};
function qp(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(gn) && (r = n[gn]),
    r == null && (r = n[gn] = Wp++);
  let o = r & nl,
    i = 1 << o;
  t.data[e + (o >> rl)] |= i;
}
function Rr(e, t) {
  let n = ol(e, t);
  if (n !== -1) return n;
  let r = t[v];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    ii(r.data, e),
    ii(t, null),
    ii(r.blueprint, null));
  let o = zs(e, t),
    i = e.injectorIndex;
  if (tl(o)) {
    let s = Ar(o),
      a = Or(o, t),
      u = a[v].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function ii(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function ol(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function zs(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = cl(o)), r === null)) return Wt;
    if ((n++, (o = o[on]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Wt;
}
function Si(e, t, n) {
  qp(e, t, n);
}
function Zp(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (pc(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < r && typeof n[o] == "string"; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function il(e, t, n) {
  if (n & b.Optional || e !== void 0) return e;
  Cs(t, "NodeInjector");
}
function sl(e, t, n, r) {
  if (
    (n & b.Optional && r === void 0 && (r = null), !(n & (b.Self | b.Host)))
  ) {
    let o = e[Yt],
      i = te(void 0);
    try {
      return o ? o.get(t, r, n & b.Optional) : cc(t, r, n & b.Optional);
    } finally {
      te(i);
    }
  }
  return il(r, t, n);
}
function al(e, t, n, r = b.Default, o) {
  if (e !== null) {
    if (t[y] & 2048 && !(r & b.Self)) {
      let s = Jp(e, t, n, r, Te);
      if (s !== Te) return s;
    }
    let i = ul(e, t, n, r, Te);
    if (i !== Te) return i;
  }
  return sl(t, n, r, o);
}
function ul(e, t, n, r, o) {
  let i = Qp(n);
  if (typeof i == "function") {
    if (!Zc(t, e, r)) return r & b.Host ? il(o, n, r) : sl(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & b.Optional))) Cs(n);
      else return s;
    } finally {
      Jc();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = ol(e, t),
      u = Wt,
      c = r & b.Host ? t[ae][ie] : null;
    for (
      (a === -1 || r & b.SkipSelf) &&
      ((u = a === -1 ? zs(e, t) : t[a + 8]),
      u === Wt || !Su(r, !1)
        ? (a = -1)
        : ((s = t[v]), (a = Ar(u)), (t = Or(u, t))));
      a !== -1;

    ) {
      let l = t[v];
      if (xu(i, a, l.data)) {
        let d = Yp(a, t, n, s, r, c);
        if (d !== Te) return d;
      }
      (u = t[a + 8]),
        u !== Wt && Su(r, t[v].data[a + 8] === c) && xu(i, a, t)
          ? ((s = l), (a = Ar(u)), (t = Or(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Yp(e, t, n, r, o, i) {
  let s = t[v],
    a = s.data[e + 8],
    u = r == null ? eo(a) && xi : r != s && (a.type & 3) !== 0,
    c = o & b.Host && i === a,
    l = Ir(a, s, n, u, c);
  return l !== null ? wt(t, s, l, a) : Te;
}
function Ir(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    h = o ? a + l : c;
  for (let f = d; f < h; f++) {
    let p = s[f];
    if ((f < u && n === p) || (f >= u && p.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Je(f) && f.type === n) return u;
  }
  return null;
}
function wt(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if ($p(o)) {
    let s = o;
    s.resolving && Ch(wh(i[n]));
    let a = Fr(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? te(s.injectImpl) : null,
      l = Zc(e, r, b.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Vp(n, i[n], t);
    } finally {
      c !== null && te(c), Fr(a), (s.resolving = !1), Jc();
    }
  }
  return o;
}
function Qp(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(gn) ? e[gn] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & nl : Kp) : t;
}
function xu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> rl)] & r);
}
function Su(e, t) {
  return !(e & b.Self) && !(e & b.Host && t);
}
var pt = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return al(this._tNode, this._lView, t, Jr(r), n);
  }
};
function Kp() {
  return new pt(Q(), E());
}
function j0(e) {
  return Qr(() => {
    let t = e.prototype.constructor,
      n = t[Cr] || Ti(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Cr] || Ti(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Ti(e) {
  return rc(e)
    ? () => {
        let t = Ti(G(e));
        return t && t();
      }
    : gt(e);
}
function Jp(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[y] & 2048 && !(s[y] & 512); ) {
    let a = ul(i, s, n, r | b.Self, Te);
    if (a !== Te) return a;
    let u = i.parent;
    if (!u) {
      let c = s[Tc];
      if (c) {
        let l = c.get(n, Te, r);
        if (l !== Te) return l;
      }
      (u = cl(s)), (s = s[on]);
    }
    i = u;
  }
  return o;
}
function cl(e) {
  let t = e[v],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ie] : null;
}
function Xp(e) {
  return Zp(Q(), e);
}
function Tu(e, t = null, n = null, r) {
  let o = ll(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function ll(e, t = null, n = null, r, o = new Set()) {
  let i = [n || J, rp(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : ne(e))),
    new vn(i, t || As(), r || null, o)
  );
}
var Xe = class e {
  static {
    this.THROW_IF_NOT_FOUND = mn;
  }
  static {
    this.NULL = new xr();
  }
  static create(t, n) {
    if (Array.isArray(t)) return Tu({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Tu({ name: r }, t.parent, t.providers, r);
    }
  }
  static {
    this.ɵprov = V({ token: e, providedIn: "any", factory: () => oe(dc) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var eg = new O("");
eg.__NG_ELEMENT_ID__ = (e) => {
  let t = Q();
  if (t === null) throw new S(204, !1);
  if (t.type & 2) return t.value;
  if (e & b.Optional) return null;
  throw new S(204, !1);
};
var tg = "ngOriginalError";
function si(e) {
  return e[tg];
}
var dl = !0,
  Gs = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = ng;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  Ni = class extends Gs {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return Vc(this._lView, t), () => Cp(this._lView, t);
    }
  };
function ng() {
  return new Ni(E());
}
var io = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new cn(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
    static {
      this.ɵprov = V({ token: e, providedIn: "root", factory: () => new e() });
    }
  }
  return e;
})();
var Ai = class extends ce {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        xc() &&
          ((this.destroyRef = M(Gs, { optional: !0 }) ?? void 0),
          (this.pendingTasks = M(io, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = C(null);
      try {
        super.next(t);
      } finally {
        C(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof H && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  we = Ai;
function Pr(...e) {}
function fl(e) {
  let t, n;
  function r() {
    e = Pr;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function Nu(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Pr;
    }
  );
}
var Ws = "isAngularZone",
  kr = Ws + "_ID",
  rg = 0,
  re = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new we(!1)),
        (this.onMicrotaskEmpty = new we(!1)),
        (this.onStable = new we(!1)),
        (this.onError = new we(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = dl,
      } = t;
      if (typeof Zone > "u") throw new S(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        sg(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Ws) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new S(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new S(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, og, Pr, Pr);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  og = {};
function qs(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function ig(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    fl(() => {
      (e.callbackScheduled = !1),
        Oi(e),
        (e.isCheckStableRunning = !0),
        qs(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    Oi(e);
}
function sg(e) {
  let t = () => {
      ig(e);
    },
    n = rg++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Ws]: !0, [kr]: n, [kr + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (ag(u)) return r.invokeTask(i, s, a, u);
      try {
        return Au(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Ou(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return Au(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !ug(u) &&
          t(),
          Ou(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), Oi(e), qs(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function Oi(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Au(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Ou(e) {
  e._nesting--, qs(e);
}
var Fi = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new we()),
      (this.onMicrotaskEmpty = new we()),
      (this.onStable = new we()),
      (this.onError = new we());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function ag(e) {
  return hl(e, "__ignore_ng_zone__");
}
function ug(e) {
  return hl(e, "__scheduler_tick__");
}
function hl(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Jt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && si(t);
      for (; n && si(n); ) n = si(n);
      return n || null;
    }
  },
  cg = new O("", {
    providedIn: "root",
    factory: () => {
      let e = M(re),
        t = M(Jt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function lg() {
  return sn(Q(), E());
}
function sn(e, t) {
  return new xt(fe(e, t));
}
var xt = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = lg;
    }
  }
  return e;
})();
function pl(e) {
  return e instanceof xt ? e.nativeElement : e;
}
function dg() {
  return this._results[Symbol.iterator]();
}
var Ri = class e {
  get changes() {
    return (this._changes ??= new we());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = dg);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Ph(t);
    (this._changesDetected = !Rh(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function gl(e) {
  return (e.flags & 128) === 128;
}
var ml = new Map(),
  fg = 0;
function hg() {
  return fg++;
}
function pg(e) {
  ml.set(e[Xr], e);
}
function Pi(e) {
  ml.delete(e[Xr]);
}
var Fu = "__ngContext__";
function Ct(e, t) {
  Ye(t) ? ((e[Fu] = t[Xr]), pg(t)) : (e[Fu] = t);
}
function yl(e) {
  return vl(e[In]);
}
function Dl(e) {
  return vl(e[Ce]);
}
function vl(e) {
  for (; e !== null && !$e(e); ) e = e[Ce];
  return e;
}
var ki;
function V0(e) {
  ki = e;
}
function gg() {
  if (ki !== void 0) return ki;
  if (typeof document < "u") return document;
  throw new S(210, !1);
}
var B0 = new O("", { providedIn: "root", factory: () => mg }),
  mg = "ng",
  yg = new O(""),
  Il = new O("", { providedIn: "platform", factory: () => "unknown" });
var $0 = new O(""),
  H0 = new O("", {
    providedIn: "root",
    factory: () =>
      gg().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Dg = "h",
  vg = "b";
var Ig = () => null;
function Zs(e, t, n = !1) {
  return Ig(e, t, n);
}
var El = !1,
  Eg = new O("", { providedIn: "root", factory: () => El });
var fr;
function wg() {
  if (fr === void 0 && ((fr = null), Bt.trustedTypes))
    try {
      fr = Bt.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return fr;
}
function so(e) {
  return wg()?.createHTML(e) || e;
}
var Ve = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ec})`;
    }
  },
  Li = class extends Ve {
    getTypeName() {
      return "HTML";
    }
  },
  ji = class extends Ve {
    getTypeName() {
      return "Style";
    }
  },
  Vi = class extends Ve {
    getTypeName() {
      return "Script";
    }
  },
  Bi = class extends Ve {
    getTypeName() {
      return "URL";
    }
  },
  $i = class extends Ve {
    getTypeName() {
      return "ResourceURL";
    }
  };
function Ys(e) {
  return e instanceof Ve ? e.changingThisBreaksApplicationSecurity : e;
}
function U0(e, t) {
  let n = Cg(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${ec})`);
  }
  return n === t;
}
function Cg(e) {
  return (e instanceof Ve && e.getTypeName()) || null;
}
function z0(e) {
  return new Li(e);
}
function G0(e) {
  return new ji(e);
}
function W0(e) {
  return new Vi(e);
}
function q0(e) {
  return new Bi(e);
}
function Z0(e) {
  return new $i(e);
}
function bg(e) {
  let t = new Ui(e);
  return _g() ? new Hi(t) : t;
}
var Hi = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(so(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  Ui = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = so(t)), n;
    }
  };
function _g() {
  try {
    return !!new window.DOMParser().parseFromString(so(""), "text/html");
  } catch {
    return !1;
  }
}
var Mg = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function xg(e) {
  return (e = String(e)), e.match(Mg) ? e : "unsafe:" + e;
}
function He(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function xn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var wl = He("area,br,col,hr,img,wbr"),
  Cl = He("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  bl = He("rp,rt"),
  Sg = xn(bl, Cl),
  Tg = xn(
    Cl,
    He(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  Ng = xn(
    bl,
    He(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  Ru = xn(wl, Tg, Ng, Sg),
  _l = He("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Ag = He(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  Og = He(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  Fg = xn(_l, Ag, Og),
  Rg = He("script,style,template"),
  zi = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
              ? this.chars(n.nodeValue)
              : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          o.push(n), (n = Lg(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = kg(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = Pu(t).toLowerCase();
      if (!Ru.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Rg.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Fg.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        _l[a] && (u = xg(u)), this.buf.push(" ", s, '="', ku(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = Pu(t).toLowerCase();
      Ru.hasOwnProperty(n) &&
        !wl.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(ku(t));
    }
  };
function Pg(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function kg(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw Ml(t);
  return t;
}
function Lg(e) {
  let t = e.firstChild;
  if (t && Pg(e, t)) throw Ml(t);
  return t;
}
function Pu(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function Ml(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var jg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Vg = /([^\#-~ |!])/g;
function ku(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(jg, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(Vg, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var hr;
function Y0(e, t) {
  let n = null;
  try {
    hr = hr || bg(e);
    let r = t ? String(t) : "";
    n = hr.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      o--, (r = i), (i = n.innerHTML), (n = hr.getInertBodyElement(r));
    } while (r !== i);
    let a = new zi().sanitizeChildren(Lu(n) || n);
    return so(a);
  } finally {
    if (n) {
      let r = Lu(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function Lu(e) {
  return "content" in e && Bg(e) ? e.content : null;
}
function Bg(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var $g = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})($g || {});
function xl(e) {
  return e instanceof Function ? e() : e;
}
function Sl(e) {
  return (e ?? M(Xe)).get(Il) === "browser";
}
var Lr = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(Lr || {}),
  Hg;
function Qs(e, t) {
  return Hg(e, t);
}
function Ut(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    $e(r) ? (i = r) : Ye(r) && ((s = !0), (r = r[Be]));
    let a = Ne(r);
    e === 0 && n !== null
      ? o == null
        ? Fl(t, n, a)
        : jr(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? jr(t, n, a, o || null, !0)
        : e === 2
          ? tm(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && rm(t, e, i, n, o);
  }
}
function Ug(e, t) {
  return e.createText(t);
}
function zg(e, t, n) {
  e.setValue(t, n);
}
function Tl(e, t, n) {
  return e.createElement(t, n);
}
function Gg(e, t) {
  Nl(e, t), (t[Be] = null), (t[ie] = null);
}
function Wg(e, t, n, r, o, i) {
  (r[Be] = o), (r[ie] = t), uo(e, r, n, 1, o, i);
}
function Nl(e, t) {
  t[Le].changeDetectionScheduler?.notify(9), uo(e, t, t[j], 2, null, null);
}
function qg(e) {
  let t = e[In];
  if (!t) return ai(e[v], e);
  for (; t; ) {
    let n = null;
    if (Ye(t)) n = t[In];
    else {
      let r = t[Z];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Ce] && t !== e; ) Ye(t) && ai(t[v], t), (t = t[Y]);
      t === null && (t = e), Ye(t) && ai(t[v], t), (n = t && t[Ce]);
    }
    t = n;
  }
}
function Zg(e, t, n, r) {
  let o = Z + r,
    i = n.length;
  r > 0 && (n[o - 1][Ce] = t),
    r < i - Z ? ((t[Ce] = n[o]), lc(n, Z + r, t)) : (n.push(t), (t[Ce] = null)),
    (t[Y] = n);
  let s = t[yt];
  s !== null && n !== s && Al(s, t);
  let a = t[je];
  a !== null && a.insertView(e), bi(t), (t[y] |= 128);
}
function Al(e, t) {
  let n = e[Qt],
    r = t[Y];
  if (Ye(r)) e[y] |= Nr.HasTransplantedViews;
  else {
    let o = r[Y][ae];
    t[ae] !== o && (e[y] |= Nr.HasTransplantedViews);
  }
  n === null ? (e[Qt] = [t]) : n.push(t);
}
function Ks(e, t) {
  let n = e[Qt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function En(e, t) {
  if (e.length <= Z) return;
  let n = Z + t,
    r = e[n];
  if (r) {
    let o = r[yt];
    o !== null && o !== e && Ks(o, r), t > 0 && (e[n - 1][Ce] = r[Ce]);
    let i = _r(e, Z + t);
    Gg(r[v], r);
    let s = i[je];
    s !== null && s.detachView(i[v]),
      (r[Y] = null),
      (r[Ce] = null),
      (r[y] &= -129);
  }
  return r;
}
function ao(e, t) {
  if (!(t[y] & 256)) {
    let n = t[j];
    n.destroyNode && uo(e, t, n, 3, null, null), qg(t);
  }
}
function ai(e, t) {
  if (t[y] & 256) return;
  let n = C(null);
  try {
    (t[y] &= -129),
      (t[y] |= 256),
      t[le] && Ro(t[le]),
      Qg(e, t),
      Yg(e, t),
      t[v].type === 1 && t[j].destroy();
    let r = t[yt];
    if (r !== null && $e(t[Y])) {
      r !== t[Y] && Ks(r, t);
      let o = t[je];
      o !== null && o.detachView(e);
    }
    Pi(t);
  } finally {
    C(n);
  }
}
function Yg(e, t) {
  let n = e.cleanup,
    r = t[Sr];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Sr] = null);
  let o = t[Ze];
  if (o !== null) {
    t[Ze] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function Qg(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Et)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            Se(4, a, u);
            try {
              u.call(a);
            } finally {
              Se(5, a, u);
            }
          }
        else {
          Se(4, o, i);
          try {
            i.call(o);
          } finally {
            Se(5, o, i);
          }
        }
      }
    }
}
function Ol(e, t, n) {
  return Kg(e, t.parent, n);
}
function Kg(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[Be];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === yn.None || i === yn.Emulated) return null;
    }
    return fe(r, n);
  }
}
function jr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function Fl(e, t, n) {
  e.appendChild(t, n);
}
function ju(e, t, n, r, o) {
  r !== null ? jr(e, t, n, r, o) : Fl(e, t, n);
}
function Rl(e, t) {
  return e.parentNode(t);
}
function Jg(e, t) {
  return e.nextSibling(t);
}
function Pl(e, t, n) {
  return em(e, t, n);
}
function Xg(e, t, n) {
  return e.type & 40 ? fe(e, n) : null;
}
var em = Xg,
  Vu;
function Js(e, t, n, r) {
  let o = Ol(e, r, t),
    i = t[j],
    s = r.parent || t[ie],
    a = Pl(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) ju(i, o, n[u], a, !1);
    else ju(i, o, n, a, !1);
  Vu !== void 0 && Vu(i, r, t, n, o);
}
function pn(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return fe(t, e);
    if (n & 4) return Gi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return pn(e, r);
      {
        let o = e[t.index];
        return $e(o) ? Gi(-1, o) : Ne(o);
      }
    } else {
      if (n & 128) return pn(e, t.next);
      if (n & 32) return Qs(t, e)() || Ne(e[t.index]);
      {
        let r = kl(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = vt(e[ae]);
          return pn(o, r);
        } else return pn(e, t.next);
      }
    }
  }
  return null;
}
function kl(e, t) {
  if (t !== null) {
    let r = e[ae][ie],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Gi(e, t) {
  let n = Z + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[v].firstChild;
    if (o !== null) return pn(r, o);
  }
  return t[Dt];
}
function tm(e, t, n) {
  e.removeChild(null, t, n);
}
function Xs(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && Ct(Ne(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) Xs(e, t, n.child, r, o, i, !1), Ut(t, e, o, a, i);
      else if (u & 32) {
        let c = Qs(n, r),
          l;
        for (; (l = c()); ) Ut(t, e, o, l, i);
        Ut(t, e, o, a, i);
      } else u & 16 ? Ll(e, t, r, n, o, i) : Ut(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function uo(e, t, n, r, o, i) {
  Xs(n, r, e.firstChild, t, o, i, !1);
}
function nm(e, t, n) {
  let r = t[j],
    o = Ol(e, n, t),
    i = n.parent || t[ie],
    s = Pl(i, n, t);
  Ll(r, 0, t, n, o, s);
}
function Ll(e, t, n, r, o, i) {
  let s = n[ae],
    u = s[ie].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Ut(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[Y];
    gl(r) && (c.flags |= 128), Xs(e, t, c, l, o, i, !0);
  }
}
function rm(e, t, n, r, o) {
  let i = n[Dt],
    s = Ne(n);
  i !== s && Ut(t, e, r, i, o);
  for (let a = Z; a < n.length; a++) {
    let u = n[a];
    uo(u[v], u, e, t, r, i);
  }
}
function om(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Lr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Lr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function im(e, t, n) {
  e.setAttribute(t, "style", n);
}
function jl(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function Vl(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Di(e, t, r),
    o !== null && jl(e, t, o),
    i !== null && im(e, t, i);
}
var Ae = {};
function Q0(e = 1) {
  Bl(B(), E(), nt() + e, !1);
}
function Bl(e, t, n, r) {
  if (!r)
    if ((t[y] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && Dr(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && vr(t, i, 0, n);
    }
  It(n);
}
function he(e, t = b.Default) {
  let n = E();
  if (n === null) return oe(e, t);
  let r = Q();
  return al(r, n, G(e), t);
}
function K0() {
  let e = "invalid";
  throw new Error(e);
}
function $l(e, t, n, r, o, i) {
  let s = C(null);
  try {
    let a = null;
    o & Qe.SignalBased && (a = t[r][ye]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Qe.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Oc(t, a, r, i);
  } finally {
    C(s);
  }
}
function sm(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) It(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Fp(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      It(-1);
    }
}
function co(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[Be] = o),
    (d[y] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[y] & 2048)) && (d[y] |= 2048),
    Lc(d),
    (d[Y] = d[on] = e),
    (d[q] = n),
    (d[Le] = s || (e && e[Le])),
    (d[j] = a || (e && e[j])),
    (d[Yt] = u || (e && e[Yt]) || null),
    (d[ie] = i),
    (d[Xr] = hg()),
    (d[Zt] = l),
    (d[Tc] = c),
    (d[ae] = t.type == 2 ? e[ae] : d),
    d
  );
}
function Sn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = am(e, t, n, r, o)), Op() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Tp();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return Mn(i, !0), i;
}
function am(e, t, n, r, o) {
  let i = Uc(),
    s = zc(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = hm(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function Hl(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function Ul(e, t, n, r, o) {
  let i = nt(),
    s = r & 2;
  try {
    It(-1), s && t.length > W && Bl(e, t, W, !1), Se(s ? 2 : 0, o), n(r, o);
  } finally {
    It(i), Se(s ? 3 : 1, o);
  }
}
function zl(e, t, n) {
  if (Ac(t)) {
    let r = C(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      C(r);
    }
  }
}
function Gl(e, t, n) {
  $c() && (vm(e, t, n, fe(n, t)), (n.flags & 64) === 64 && Ql(e, t, n));
}
function Wl(e, t, n = fe) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function ql(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = ea(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function ea(e, t, n, r, o, i, s, a, u, c, l) {
  let d = W + r,
    h = d + o,
    f = um(d, h),
    p = typeof c == "function" ? c() : c;
  return (f[v] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: h,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function um(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Ae);
  return n;
}
function cm(e, t, n, r) {
  let i = r.get(Eg, El) || n === yn.ShadowDom,
    s = e.selectRootElement(t, i);
  return lm(s), s;
}
function lm(e) {
  dm(e);
}
var dm = () => null;
function fm(e, t, n, r) {
  let o = Xl(t);
  o.push(n), e.firstCreatePass && ed(e).push(r, o.length - 1);
}
function hm(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Hc() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function Bu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Qe.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? $u(r, n, c, a, u) : $u(r, n, c, a);
  }
  return r;
}
function $u(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function pm(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      h = n ? n.get(d) : null,
      f = h ? h.inputs : null,
      p = h ? h.outputs : null;
    (u = Bu(0, d.inputs, l, u, f)), (c = Bu(1, d.outputs, l, c, p));
    let m = u !== null && s !== null && !Ms(t) ? Nm(u, l, s) : null;
    a.push(m);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function gm(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function ta(e, t, n, r, o, i, s, a) {
  let u = fe(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (na(e, n, l, r, o), eo(t) && mm(n, t.index))
    : t.type & 3
      ? ((r = gm(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function mm(e, t) {
  let n = tt(t, e);
  n[y] & 16 || (n[y] |= 64);
}
function Zl(e, t, n, r) {
  if ($c()) {
    let o = r === null ? null : { "": -1 },
      i = Em(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Yl(e, t, n, s, o, a),
      o && wm(n, r, o);
  }
  n.mergedAttrs = Dn(n.mergedAttrs, n.attrs);
}
function Yl(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Si(Rr(n, t), e, r[c].type);
  bm(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = Hl(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = Dn(n.mergedAttrs, l.hostAttrs)),
      _m(e, n, t, u, l),
      Cm(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  pm(e, n, i);
}
function ym(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Dm(s) != a && s.push(a), s.push(n, r, i);
  }
}
function Dm(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function vm(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  eo(n) && Mm(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || Rr(n, t),
    Ct(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = wt(t, e, a, n);
    if ((Ct(c, t), s !== null && Tm(t, a - o, c, u, n, s), Je(u))) {
      let l = tt(n.index, t);
      l[q] = wt(t, e, a, n);
    }
  }
}
function Ql(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = Rp();
  try {
    It(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      _i(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          Im(u, c);
    }
  } finally {
    It(-1), _i(s);
  }
}
function Im(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Em(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (mc(t, s.selectors, !1))
        if ((r || (r = []), Je(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Wi(e, t, u);
          } else r.unshift(s), Wi(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Wi(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function wm(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new S(-301, !1);
      r.push(t[o], i);
    }
  }
}
function Cm(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Je(t) && (n[""] = e);
  }
}
function bm(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function _m(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = gt(o.type, !0)),
    s = new Et(i, Je(o), he);
  (e.blueprint[r] = s), (n[r] = s), ym(e, t, r, Hl(e, n, o.hostVars, Ae), o);
}
function Mm(e, t, n) {
  let r = fe(t, e),
    o = ql(n),
    i = e[Le].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = lo(
    e,
    co(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function xm(e, t, n, r, o, i) {
  let s = fe(e, t);
  Sm(t[j], s, i, e.value, n, r, o);
}
function Sm(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? ws(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Tm(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      $l(r, n, u, c, l, d);
    }
}
function Nm(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function Kl(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Jl(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = C(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          ro(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      C(r);
    }
  }
}
function lo(e, t) {
  return e[In] ? (e[Cu][Ce] = t) : (e[In] = t), (e[Cu] = t), t;
}
function qi(e, t, n) {
  ro(0);
  let r = C(null);
  try {
    t(e, n);
  } finally {
    C(r);
  }
}
function Xl(e) {
  return (e[Sr] ??= []);
}
function ed(e) {
  return (e.cleanup ??= []);
}
function td(e, t) {
  let n = e[Yt],
    r = n ? n.get(Jt, null) : null;
  r && r.handleError(t);
}
function na(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    $l(l, c, r, a, u, o);
  }
}
function Am(e, t, n) {
  let r = kc(t, e);
  zg(e[j], r, n);
}
function Om(e, t) {
  let n = tt(t, e),
    r = n[v];
  Fm(r, n);
  let o = n[Be];
  o !== null && n[Zt] === null && (n[Zt] = Zs(o, n[Yt])), ra(r, n, n[q]);
}
function Fm(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function ra(e, t, n) {
  Vs(t);
  try {
    let r = e.viewQuery;
    r !== null && qi(1, r, n);
    let o = e.template;
    o !== null && Ul(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[je]?.finishViewCreation(e),
      e.staticContentQueries && Jl(e, t),
      e.staticViewQueries && qi(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Rm(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[y] &= -5), Bs();
  }
}
function Rm(e, t) {
  for (let n = 0; n < t.length; n++) Om(e, t[n]);
}
function Tn(e, t, n, r) {
  let o = C(null);
  try {
    let i = t.tView,
      a = e[y] & 4096 ? 4096 : 16,
      u = co(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[yt] = c;
    let l = e[je];
    return l !== null && (u[je] = l.createEmbeddedView(i)), ra(i, u, n), u;
  } finally {
    C(o);
  }
}
function nd(e, t) {
  let n = Z + t;
  if (n < e.length) return e[n];
}
function Xt(e, t) {
  return !t || t.firstChild === null || gl(e);
}
function Nn(e, t, n, r = !0) {
  let o = t[v];
  if ((Zg(o, t, e, n), r)) {
    let s = Gi(n, e),
      a = t[j],
      u = Rl(a, e[Dt]);
    u !== null && Wg(o, e[ie], a, t, u, s);
  }
  let i = t[Zt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function rd(e, t) {
  let n = En(e, t);
  return n !== void 0 && ao(n[v], n), n;
}
function Vr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(Ne(i)), $e(i) && Pm(i, r);
    let s = n.type;
    if (s & 8) Vr(e, t, n.child, r);
    else if (s & 32) {
      let a = Qs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = kl(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = vt(t[ae]);
        Vr(u[v], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function Pm(e, t) {
  for (let n = Z; n < e.length; n++) {
    let r = e[n],
      o = r[v].firstChild;
    o !== null && Vr(r[v], r, o, t);
  }
  e[Dt] !== e[Be] && t.push(e[Dt]);
}
var od = [];
function km(e) {
  return e[le] ?? Lm(e);
}
function Lm(e) {
  let t = od.pop() ?? Object.create(Vm);
  return (t.lView = e), t;
}
function jm(e) {
  e.lView[le] !== e && ((e.lView = null), od.push(e));
}
var Vm = Re(Fe({}, un), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    no(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[le] = this;
  },
});
function Bm(e) {
  let t = e[le] ?? Object.create($m);
  return (t.lView = e), t;
}
var $m = Re(Fe({}, un), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = vt(e.lView);
    for (; t && !id(t[v]); ) t = vt(t);
    t && jc(t);
  },
  consumerOnSignalRead() {
    this.lView[le] = this;
  },
});
function id(e) {
  return e.type !== 2;
}
var Hm = 100;
function sd(e, t = !0, n = 0) {
  let r = e[Le],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Um(e, n);
  } catch (s) {
    throw (t && td(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Um(e, t) {
  let n = Wc();
  try {
    _u(!0), Zi(e, t);
    let r = 0;
    for (; to(e); ) {
      if (r === Hm) throw new S(103, !1);
      r++, Zi(e, 1);
    }
  } finally {
    _u(n);
  }
}
function zm(e, t, n, r) {
  let o = t[y];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[Le].inlineEffectRunner?.flush(), Vs(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (id(e)
      ? ((c = km(t)), (u = Ln(c)))
      : Ca() === null
        ? ((a = !1), (c = Bm(t)), (u = Ln(c)))
        : t[le] && (Ro(t[le]), (t[le] = null)));
  try {
    Lc(t), Ap(e.bindingStartIndex), n !== null && Ul(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && Dr(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && vr(t, f, 0, null), ri(t, 0);
      }
    if ((s || Gm(t), ad(t, 0), e.contentQueries !== null && Jl(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && Dr(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && vr(t, f, 1), ri(t, 1);
      }
    sm(e, t);
    let d = e.components;
    d !== null && cd(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && qi(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && Dr(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && vr(t, f, 2), ri(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ni])) {
      for (let f of t[ni]) f();
      t[ni] = null;
    }
    i || (t[y] &= -73);
  } catch (l) {
    throw (i || no(t), l);
  } finally {
    c !== null && (Oo(c, u), a && jm(c)), Bs();
  }
}
function ad(e, t) {
  for (let n = yl(e); n !== null; n = Dl(n))
    for (let r = Z; r < n.length; r++) {
      let o = n[r];
      ud(o, t);
    }
}
function Gm(e) {
  for (let t = yl(e); t !== null; t = Dl(t)) {
    if (!(t[y] & Nr.HasTransplantedViews)) continue;
    let n = t[Qt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      jc(o);
    }
  }
}
function Wm(e, t, n) {
  let r = tt(t, e);
  ud(r, n);
}
function ud(e, t) {
  ks(e) && Zi(e, t);
}
function Zi(e, t) {
  let r = e[v],
    o = e[y],
    i = e[le],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Fo(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[y] &= -9217),
    s)
  )
    zm(r, e, r.template, e[q]);
  else if (o & 8192) {
    ad(e, 1);
    let a = r.components;
    a !== null && cd(e, a, 1);
  }
}
function cd(e, t, n) {
  for (let r = 0; r < t.length; r++) Wm(e, t[r], n);
}
function oa(e, t) {
  let n = Wc() ? 64 : 1088;
  for (e[Le].changeDetectionScheduler?.notify(t); e; ) {
    e[y] |= n;
    let r = vt(e);
    if (wi(e) && !r) return e;
    e = r;
  }
  return null;
}
var bt = class {
    get rootNodes() {
      let t = this._lView,
        n = t[v];
      return Vr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[q];
    }
    set context(t) {
      this._lView[q] = t;
    }
    get destroyed() {
      return (this._lView[y] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[Y];
        if ($e(t)) {
          let n = t[Tr],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (En(t, r), _r(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      ao(this._lView[v], this._lView);
    }
    onDestroy(t) {
      Vc(this._lView, t);
    }
    markForCheck() {
      oa(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[y] &= -129;
    }
    reattach() {
      bi(this._lView), (this._lView[y] |= 128);
    }
    detectChanges() {
      (this._lView[y] |= 1024), sd(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new S(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = wi(this._lView),
        n = this._lView[yt];
      n !== null && !t && Ks(n, this._lView), Nl(this._lView[v], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new S(902, !1);
      this._appRef = t;
      let n = wi(this._lView),
        r = this._lView[yt];
      r !== null && !n && Al(r, this._lView), bi(this._lView);
    }
  },
  wn = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Ym;
      }
    }
    return e;
  })(),
  qm = wn,
  Zm = class extends qm {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Tn(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new bt(o);
    }
  };
function Ym() {
  return fo(Q(), E());
}
function fo(e, t) {
  return e.type & 4 ? new Zm(t, e, sn(e, t)) : null;
}
var X0 = new RegExp(`^(\\d+)*(${vg}|${Dg})*(.*)`);
var Qm = () => null;
function en(e, t) {
  return Qm(e, t);
}
var tn = class {},
  ia = new O("", { providedIn: "root", factory: () => !1 });
var ld = new O(""),
  dd = new O(""),
  Yi = class {},
  Br = class {};
function Km(e) {
  let t = Error(`No component factory found for ${ne(e)}.`);
  return (t[Jm] = e), t;
}
var Jm = "ngComponent";
var Qi = class {
    resolveComponentFactory(t) {
      throw Km(t);
    }
  },
  nn = class {
    static {
      this.NULL = new Qi();
    }
  },
  $r = class {},
  sa = (() => {
    class e {
      constructor() {
        this.destroyNode = null;
      }
      static {
        this.__NG_ELEMENT_ID__ = () => Xm();
      }
    }
    return e;
  })();
function Xm() {
  let e = E(),
    t = Q(),
    n = tt(t.index, e);
  return (Ye(n) ? n : e)[j];
}
var ey = (() => {
  class e {
    static {
      this.ɵprov = V({ token: e, providedIn: "root", factory: () => null });
    }
  }
  return e;
})();
function Ki(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = gi(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = gi(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Hr = class extends nn {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = mt(t);
    return new Cn(n, this.ngModule);
  }
};
function Hu(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Qe.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Qe.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function ty(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Dp : t === "math" ? vp : null;
}
var Cn = class extends Br {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = Hu(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return Hu(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Qh(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = C(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Ke ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Mi(t, s) : t,
          u = a.get($r, null);
        if (u === null) throw new S(407, !1);
        let c = a.get(ey, null),
          l = a.get(tn, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? cm(h, r, this.componentDef.encapsulation, a)
            : Tl(h, f, ty(f)),
          m = 512;
        this.componentDef.signals
          ? (m |= 4096)
          : this.componentDef.onPush || (m |= 16);
        let F = null;
        p !== null && (F = Zs(p, a, !0));
        let x = ea(0, null, null, 1, 0, null, null, null, null, null, null),
          L = co(null, x, null, m, null, null, d, h, a, null, F);
        Vs(L);
        let Oe,
          me,
          Nt = null;
        try {
          let se = this.componentDef,
            At,
            Mo = null;
          se.findHostDirectiveDefs
            ? ((At = []),
              (Mo = new Map()),
              se.findHostDirectiveDefs(se, At, Mo),
              At.push(se))
            : (At = [se]);
          let sf = ny(L, p);
          (Nt = ry(sf, p, se, At, L, d, h)),
            (me = Rs(x, W)),
            p && sy(h, se, p, r),
            n !== void 0 && ay(me, this.ngContentSelectors, n),
            (Oe = iy(Nt, se, At, Mo, L, [uy])),
            ra(x, L, null);
        } catch (se) {
          throw (Nt !== null && Pi(Nt), Pi(L), se);
        } finally {
          Bs();
        }
        return new Ji(this.componentType, Oe, sn(me, L), L, me);
      } finally {
        C(i);
      }
    }
  },
  Ji = class extends Yi {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new bt(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        na(i[v], i, o, t, n), this.previousInputValues.set(t, n);
        let s = tt(this._tNode.index, i);
        oa(s, 1);
      }
    }
    get injector() {
      return new pt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function ny(e, t) {
  let n = e[v],
    r = W;
  return (e[r] = t), Sn(n, r, 2, "#host", null);
}
function ry(e, t, n, r, o, i, s) {
  let a = o[v];
  oy(r, e, t, s);
  let u = null;
  t !== null && (u = Zs(t, o[Yt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = co(o, ql(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Wi(a, e, r.length - 1), lo(o, d), (o[e.index] = d)
  );
}
function oy(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Dn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Ki(t, t.mergedAttrs, !0), n !== null && Vl(r, n, t));
}
function iy(e, t, n, r, o, i) {
  let s = Q(),
    a = o[v],
    u = fe(s, o);
  Yl(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = wt(o, a, d, s);
    Ct(h, o);
  }
  Ql(a, o, s), u && Ct(u, o);
  let c = wt(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[q] = o[q] = c), i !== null)) for (let l of i) l(c, t);
  return zl(a, s, o), c;
}
function sy(e, t, n, r) {
  if (r) Di(e, n, ["ng-version", "18.2.8"]);
  else {
    let { attrs: o, classes: i } = Kh(t.selectors[0]);
    o && Di(e, n, o), i && i.length > 0 && jl(e, n, i.join(" "));
  }
}
function ay(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function uy() {
  let e = Q();
  Us(E()[v], e);
}
var An = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = cy;
    }
  }
  return e;
})();
function cy() {
  let e = Q();
  return hd(e, E());
}
var ly = An,
  fd = class extends ly {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return sn(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new pt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = zs(this._hostTNode, this._hostLView);
      if (tl(t)) {
        let n = Or(t, this._hostLView),
          r = Ar(t),
          o = n[v].data[r + 8];
        return new pt(o, n);
      } else return new pt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Uu(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - Z;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = en(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Xt(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !pp(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new Cn(mt(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let m = (s ? c : this.parentInjector).get(Ke, null);
        m && (i = m);
      }
      let l = mt(u.componentType ?? {}),
        d = en(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, Xt(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Ep(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[Y],
            c = new fd(u, u[ie], u[Y]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Nn(s, o, i, r), t.attachToViewContainerRef(), lc(ui(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Uu(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = En(this._lContainer, n);
      r && (_r(ui(this._lContainer), n), ao(r[v], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = En(this._lContainer, n);
      return r && _r(ui(this._lContainer), n) != null ? new bt(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Uu(e) {
  return e[Tr];
}
function ui(e) {
  return e[Tr] || (e[Tr] = []);
}
function hd(e, t) {
  let n,
    r = t[e.index];
  return (
    $e(r) ? (n = r) : ((n = Kl(r, t, null, e)), (t[e.index] = n), lo(t, n)),
    fy(n, t, e, r),
    new fd(n, e, t)
  );
}
function dy(e, t) {
  let n = e[j],
    r = n.createComment(""),
    o = fe(t, e),
    i = Rl(n, o);
  return jr(n, i, r, Jg(n, o), !1), r;
}
var fy = gy,
  hy = () => !1;
function py(e, t, n) {
  return hy(e, t, n);
}
function gy(e, t, n, r) {
  if (e[Dt]) return;
  let o;
  n.type & 8 ? (o = Ne(r)) : (o = dy(t, n)), (e[Dt] = o);
}
var Xi = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  es = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        ua(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Ur = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Ey(t)) : (this.predicate = t);
    }
  },
  ts = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  ns = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, my(n, i)),
            this.matchTNodeWithReadOption(t, n, Ir(n, t, i, !1, !1));
        }
      else
        r === wn
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Ir(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === xt || o === An || (o === wn && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Ir(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function my(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function yy(e, t) {
  return e.type & 11 ? sn(e, t) : e.type & 4 ? fo(e, t) : null;
}
function Dy(e, t, n, r) {
  return n === -1 ? yy(t, e) : n === -2 ? vy(e, t, r) : wt(e, e[v], n, t);
}
function vy(e, t, n) {
  if (n === xt) return sn(t, e);
  if (n === wn) return fo(t, e);
  if (n === An) return hd(t, e);
}
function pd(e, t, n, r) {
  let o = t[je].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(Dy(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function rs(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = pd(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = Z; d < l.length; d++) {
          let h = l[d];
          h[yt] === h[Y] && rs(h[v], h, c, r);
        }
        if (l[Qt] !== null) {
          let d = l[Qt];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            rs(f[v], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function aa(e, t) {
  return e[je].queries[t].queryList;
}
function gd(e, t, n) {
  let r = new Ri((n & 4) === 4);
  return (
    fm(e, t, r, r.destroy), (t[je] ??= new es()).queries.push(new Xi(r)) - 1
  );
}
function Iy(e, t, n) {
  let r = B();
  return (
    r.firstCreatePass &&
      (yd(r, new Ur(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    gd(r, E(), t)
  );
}
function md(e, t, n, r) {
  let o = B();
  if (o.firstCreatePass) {
    let i = Q();
    yd(o, new Ur(t, n, r), i.index),
      wy(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return gd(o, E(), n);
}
function Ey(e) {
  return e.split(",").map((t) => t.trim());
}
function yd(e, t, n) {
  e.queries === null && (e.queries = new ts()), e.queries.track(new ns(t, n));
}
function wy(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function ua(e, t) {
  return e.queries.getByIndex(t);
}
function Dd(e, t) {
  let n = e[v],
    r = ua(n, t);
  return r.crossesNgTemplate ? rs(n, e, t, []) : pd(n, e, r, t);
}
var zu = new Set();
function Ue(e) {
  zu.has(e) ||
    (zu.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function Cy(e) {
  return typeof e == "function" && e[ye] !== void 0;
}
function by(e, t) {
  Ue("NgSignals");
  let n = Fa(e),
    r = n[ye];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => ko(r, o)),
    (n.update = (o) => Ra(r, o)),
    (n.asReadonly = _y.bind(n)),
    n
  );
}
function _y() {
  let e = this[ye];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ye] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function vd(e) {
  return Cy(e) && typeof e.set == "function";
}
function Id(e, t) {
  let n,
    r = Po(() => {
      n._dirtyCounter();
      let o = Ty(n, e);
      if (t && o === void 0) throw new S(-951, !1);
      return o;
    });
  return (n = r[ye]), (n._dirtyCounter = by(0)), (n._flatValue = void 0), r;
}
function My() {
  return Id(!0, !1);
}
function xy() {
  return Id(!0, !0);
}
function Sy(e, t) {
  let n = e[ye];
  (n._lView = E()),
    (n._queryIndex = t),
    (n._queryList = aa(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function Ty(e, t) {
  let n = e._lView,
    r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[y] & 4) return t ? void 0 : J;
  let o = aa(n, r),
    i = Dd(n, r);
  return (
    o.reset(i, pl),
    t
      ? o.first
      : o._changesDetected || e._flatValue === void 0
        ? (e._flatValue = o.toArray())
        : e._flatValue
  );
}
function Gu(e, t) {
  return My();
}
function Ny(e, t) {
  return xy();
}
var tx = ((Gu.required = Ny), Gu);
function Ay(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function Oy(e) {
  let t = Ay(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Je(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new S(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = pr(e.inputs)),
          (s.inputTransforms = pr(e.inputTransforms)),
          (s.declaredInputs = pr(e.declaredInputs)),
          (s.outputs = pr(e.outputs));
        let a = o.hostBindings;
        a && Ly(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && Py(e, u),
          c && ky(e, c),
          Fy(e, o),
          ph(e.outputs, o.outputs),
          Je(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === Oy && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Ry(r);
}
function Fy(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function Ry(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Dn(o.hostAttrs, (n = Dn(n, o.hostAttrs))));
  }
}
function pr(e) {
  return e === ke ? {} : e === J ? [] : e;
}
function Py(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function ky(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function Ly(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function nx(e) {
  let t = (n) => {
    let r = (Array.isArray(e) ? e : e()).map((o) =>
      typeof o == "function"
        ? { directive: G(o), inputs: ke, outputs: ke }
        : {
            directive: G(o.directive),
            inputs: Wu(o.inputs),
            outputs: Wu(o.outputs),
          },
    );
    n.hostDirectives === null
      ? ((n.findHostDirectiveDefs = Ed), (n.hostDirectives = r))
      : n.hostDirectives.unshift(...r);
  };
  return (t.ngInherit = !0), t;
}
function Ed(e, t, n) {
  if (e.hostDirectives !== null)
    for (let r of e.hostDirectives) {
      let o = Ts(r.directive);
      jy(o.declaredInputs, r.inputs), Ed(o, t, n), n.set(o, r), t.push(o);
    }
}
function Wu(e) {
  if (e === void 0 || e.length === 0) return ke;
  let t = {};
  for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
  return t;
}
function jy(e, t) {
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let r = t[n],
        o = e[n];
      e[r] = o;
    }
}
function Vy(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var et = class {},
  os = class {};
var is = class extends et {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Hr(this));
      let i = vc(t);
      (this._bootstrapComponents = xl(i.bootstrap)),
        (this._r3Injector = ll(
          t,
          n,
          [
            { provide: et, useValue: this },
            { provide: nn, useValue: this.componentFactoryResolver },
            ...r,
          ],
          ne(t),
          new Set(["environment"]),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  ss = class extends os {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new is(this.moduleType, t, []);
    }
  };
var zr = class extends et {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Hr(this)),
      (this.instance = null);
    let n = new vn(
      [
        ...t.providers,
        { provide: et, useValue: this },
        { provide: nn, useValue: this.componentFactoryResolver },
      ],
      t.parent || As(),
      t.debugName,
      new Set(["environment"]),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function By(e, t, n = null) {
  return new zr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function wd(e, t, n) {
  return (e[t] = n);
}
function de(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function $y(e, t, n, r) {
  let o = de(e, t, n);
  return de(e, t + 1, r) || o;
}
function Hy(e) {
  return (e.flags & 32) === 32;
}
function Uy(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = Sn(t, e, 4, s || null, a || null);
  Zl(t, n, l, Kt(c, u)), Us(t, l);
  let d = (l.tView = ea(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Gr(e, t, n, r, o, i, s, a, u, c) {
  let l = n + W,
    d = t.firstCreatePass ? Uy(l, t, e, r, o, i, s, a, u) : t.data[l];
  Mn(d, !1);
  let h = Gy(t, e, d, n);
  $s() && Js(t, e, h, d), Ct(h, e);
  let f = Kl(h, e, h, d);
  return (
    (e[l] = f),
    lo(e, f),
    py(f, d, e),
    Os(d) && Gl(t, e, d),
    u != null && Wl(e, d, c),
    d
  );
}
function zy(e, t, n, r, o, i, s, a) {
  let u = E(),
    c = B(),
    l = Kt(c.consts, i);
  return Gr(u, c, e, t, n, r, o, l, s, a), zy;
}
var Gy = Wy;
function Wy(e, t, n, r) {
  return Hs(!0), t[j].createComment("");
}
var zt = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(zt || {}),
  Cd = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = V({
          token: e,
          providedIn: "root",
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  as = class e {
    constructor() {
      (this.ngZone = M(re)),
        (this.scheduler = M(tn)),
        (this.errorHandler = M(Jt, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [zt.EarlyRead, zt.Write, zt.MixedReadWrite, zt.Read];
    }
    execute() {
      this.executing = !0;
      for (let t of e.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue),
              );
            } catch (r) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && (this.sequences.delete(t), t.destroy());
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
    static {
      this.ɵprov = V({ token: e, providedIn: "root", factory: () => new e() });
    }
  },
  us = class {
    constructor(t, n, r, o) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = r),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function qy(e, t) {
  !t?.injector && Sc(qy);
  let n = t?.injector ?? M(Xe);
  return Sl(n) ? (Ue("NgAfterRender"), bd(e, n, t, !1)) : _d;
}
function Zy(e, t) {
  !t?.injector && Sc(Zy);
  let n = t?.injector ?? M(Xe);
  return Sl(n) ? (Ue("NgAfterNextRender"), bd(e, n, t, !0)) : _d;
}
function Yy(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function bd(e, t, n, r) {
  let o = t.get(Cd);
  o.impl ??= t.get(as);
  let i = n?.phase ?? zt.MixedReadWrite,
    s = n?.manualCleanup !== !0 ? t.get(Gs) : null,
    a = new us(o.impl, Yy(e, i), r, s);
  return o.impl.register(a), a;
}
var _d = { destroy() {} };
function Qy(e, t, n, r) {
  let o = E(),
    i = Mt();
  if (de(o, i, t)) {
    let s = B(),
      a = oo();
    xm(a, o, e, t, n, r);
  }
  return Qy;
}
function Ky(e, t, n, r) {
  return de(e, Mt(), n) ? t + ws(n) + r : Ae;
}
function gr(e, t) {
  return (e << 17) | (t << 2);
}
function _t(e) {
  return (e >> 17) & 32767;
}
function Jy(e) {
  return (e & 2) == 2;
}
function Xy(e, t) {
  return (e & 131071) | (t << 17);
}
function cs(e) {
  return e | 2;
}
function rn(e) {
  return (e & 131068) >> 2;
}
function ci(e, t) {
  return (e & -131069) | (t << 2);
}
function eD(e) {
  return (e & 1) === 1;
}
function ls(e) {
  return e | 1;
}
function tD(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = _t(s),
    u = rn(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || _n(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = _t(e[a + 1]);
      (e[r + 1] = gr(h, a)),
        h !== 0 && (e[h + 1] = ci(e[h + 1], r)),
        (e[a + 1] = Xy(e[a + 1], r));
    } else
      (e[r + 1] = gr(a, 0)), a !== 0 && (e[a + 1] = ci(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = gr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = ci(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = cs(e[r + 1])),
    qu(e, l, r, !0),
    qu(e, l, r, !1),
    nD(t, l, e, r, i),
    (s = gr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function nD(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    _n(i, t) >= 0 &&
    (n[r + 1] = ls(n[r + 1]));
}
function qu(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? _t(o) : rn(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    rD(u, t) && ((a = !0), (e[s + 1] = r ? ls(c) : cs(c))),
      (s = r ? _t(c) : rn(c));
  }
  a && (e[n + 1] = r ? cs(o) : ls(o));
}
function rD(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? _n(e, t) >= 0
      : !1;
}
var Ee = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function oD(e) {
  return e.substring(Ee.key, Ee.keyEnd);
}
function iD(e) {
  return sD(e), Md(e, xd(e, 0, Ee.textEnd));
}
function Md(e, t) {
  let n = Ee.textEnd;
  return n === t ? -1 : ((t = Ee.keyEnd = aD(e, (Ee.key = t), n)), xd(e, t, n));
}
function sD(e) {
  (Ee.key = 0),
    (Ee.keyEnd = 0),
    (Ee.value = 0),
    (Ee.valueEnd = 0),
    (Ee.textEnd = e.length);
}
function xd(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function aD(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function uD(e, t, n) {
  let r = E(),
    o = Mt();
  if (de(r, o, t)) {
    let i = B(),
      s = oo();
    ta(i, s, r, e, t, r[j], n, !1);
  }
  return uD;
}
function ds(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  na(e, n, i[s], s, r);
}
function cD(e, t) {
  return dD(e, t, null, !0), cD;
}
function rx(e) {
  fD(DD, lD, e, !0);
}
function lD(e, t) {
  for (let n = iD(t); n >= 0; n = Md(t, n)) _s(e, oD(t), !0);
}
function dD(e, t, n, r) {
  let o = E(),
    i = B(),
    s = qc(2);
  if ((i.firstUpdatePass && Td(i, e, s, r), t !== Ae && de(o, s, t))) {
    let a = i.data[nt()];
    Nd(i, a, o, o[j], e, (o[s + 1] = ID(t, n)), r, s);
  }
}
function fD(e, t, n, r) {
  let o = B(),
    i = qc(2);
  o.firstUpdatePass && Td(o, null, i, r);
  let s = E();
  if (n !== Ae && de(s, i, n)) {
    let a = o.data[nt()];
    if (Ad(a, r) && !Sd(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = gi(u, n || "")), ds(o, a, s, n, r);
    } else vD(o, a, s, s[j], s[i + 1], (s[i + 1] = yD(e, t, n)), r, i);
  }
}
function Sd(e, t) {
  return t >= e.expandoStartIndex;
}
function Td(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[nt()],
      s = Sd(e, n);
    Ad(i, r) && t === null && !s && (t = !1),
      (t = hD(o, i, t, r)),
      tD(o, i, t, n, s, r);
  }
}
function hD(e, t, n, r) {
  let o = Pp(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = li(null, e, t, n, r)), (n = bn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = li(o, e, t, n, r)), i === null)) {
        let u = pD(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = li(null, e, t, u[1], r)),
          (u = bn(u, t.attrs, r)),
          gD(e, t, r, u));
      } else i = mD(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function pD(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (rn(r) !== 0) return e[_t(r)];
}
function gD(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[_t(o)] = r;
}
function mD(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = bn(r, s, n);
  }
  return bn(r, t.attrs, n);
}
function li(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = bn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function bn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          _s(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function yD(e, t, n) {
  if (n == null || n === "") return J;
  let r = [],
    o = Ys(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function DD(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && _s(e, r, n);
}
function vD(e, t, n, r, o, i, s, a) {
  o === Ae && (o = J);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      p = null,
      m;
    l === d
      ? ((u += 2), (c += 2), h !== f && ((p = d), (m = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (p = l))
        : ((c += 2), (p = d), (m = f)),
      p !== null && Nd(e, t, n, r, p, m, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function Nd(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = eD(c) ? Zu(u, t, n, o, rn(c), s) : void 0;
  if (!Wr(l)) {
    Wr(i) || (Jy(c) && (i = Zu(u, null, n, o, a, s)));
    let d = kc(nt(), n);
    om(r, s, d, o, i);
  }
}
function Zu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === Ae && (h = d ? J : void 0);
    let f = d ? ei(h, r) : l === r ? h : void 0;
    if ((c && !Wr(f) && (f = ei(u, r)), Wr(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? _t(p) : rn(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = ei(u, r));
  }
  return a;
}
function Wr(e) {
  return e !== void 0;
}
function ID(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = ne(Ys(e)))),
    e
  );
}
function Ad(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
var fs = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let r = Math.min(t, n),
      o = Math.max(t, n),
      i = this.detach(o);
    if (o - r > 1) {
      let s = this.detach(r);
      this.attach(r, i), this.attach(o, s);
    } else this.attach(r, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function di(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function ED(e, t, n) {
  let r,
    o,
    i = 0,
    s = e.length - 1,
    a = void 0;
  if (Array.isArray(t)) {
    let u = t.length - 1;
    for (; i <= s && i <= u; ) {
      let c = e.at(i),
        l = t[i],
        d = di(i, c, i, l, n);
      if (d !== 0) {
        d < 0 && e.updateValue(i, l), i++;
        continue;
      }
      let h = e.at(s),
        f = t[u],
        p = di(s, h, u, f, n);
      if (p !== 0) {
        p < 0 && e.updateValue(s, f), s--, u--;
        continue;
      }
      let m = n(i, c),
        F = n(s, h),
        x = n(i, l);
      if (Object.is(x, F)) {
        let L = n(u, f);
        Object.is(L, m)
          ? (e.swap(i, s), e.updateValue(s, f), u--, s--)
          : e.move(s, i),
          e.updateValue(i, l),
          i++;
        continue;
      }
      if (((r ??= new qr()), (o ??= Qu(e, i, s, n)), hs(e, r, i, x)))
        e.updateValue(i, l), i++, s++;
      else if (o.has(x)) r.set(m, e.detach(i)), s--;
      else {
        let L = e.create(i, t[i]);
        e.attach(i, L), i++, s++;
      }
    }
    for (; i <= u; ) Yu(e, r, n, i, t[i]), i++;
  } else if (t != null) {
    let u = t[Symbol.iterator](),
      c = u.next();
    for (; !c.done && i <= s; ) {
      let l = e.at(i),
        d = c.value,
        h = di(i, l, i, d, n);
      if (h !== 0) h < 0 && e.updateValue(i, d), i++, (c = u.next());
      else {
        (r ??= new qr()), (o ??= Qu(e, i, s, n));
        let f = n(i, d);
        if (hs(e, r, i, f)) e.updateValue(i, d), i++, s++, (c = u.next());
        else if (!o.has(f))
          e.attach(i, e.create(i, d)), i++, s++, (c = u.next());
        else {
          let p = n(i, l);
          r.set(p, e.detach(i)), s--;
        }
      }
    }
    for (; !c.done; ) Yu(e, r, n, e.length, c.value), (c = u.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  r?.forEach((u) => {
    e.destroy(u);
  });
}
function hs(e, t, n, r) {
  return t !== void 0 && t.has(r)
    ? (e.attach(n, t.get(r)), t.delete(r), !0)
    : !1;
}
function Yu(e, t, n, r, o) {
  if (hs(e, t, r, n(r, o))) e.updateValue(r, o);
  else {
    let i = e.create(r, o);
    e.attach(r, i);
  }
}
function Qu(e, t, n, r) {
  let o = new Set();
  for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
  return o;
}
var qr = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(r); ) r = o.get(r);
      o.set(r, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if ((t(r, n), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(r); ) (r = o.get(r)), t(r, n);
      }
  }
};
function ox(e, t) {
  Ue("NgControlFlow");
  let n = E(),
    r = Mt(),
    o = n[r] !== Ae ? n[r] : -1,
    i = o !== -1 ? Zr(n, W + o) : void 0,
    s = 0;
  if (de(n, r, e)) {
    let a = C(null);
    try {
      if ((i !== void 0 && rd(i, s), e !== -1)) {
        let u = W + e,
          c = Zr(n, u),
          l = ys(n[v], u),
          d = en(c, l.tView.ssrId),
          h = Tn(n, l, t, { dehydratedView: d });
        Nn(c, h, s, Xt(l, d));
      }
    } finally {
      C(a);
    }
  } else if (i !== void 0) {
    let a = nd(i, s);
    a !== void 0 && (a[q] = t);
  }
}
var ps = class {
  constructor(t, n, r) {
    (this.lContainer = t), (this.$implicit = n), (this.$index = r);
  }
  get $count() {
    return this.lContainer.length - Z;
  }
};
var gs = class {
  constructor(t, n, r) {
    (this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = r);
  }
};
function ix(e, t, n, r, o, i, s, a, u, c, l, d, h) {
  Ue("NgControlFlow");
  let f = E(),
    p = B(),
    m = u !== void 0,
    F = E(),
    x = a ? s.bind(F[ae][q]) : s,
    L = new gs(m, x);
  (F[W + e] = L),
    Gr(f, p, e + 1, t, n, r, o, Kt(p.consts, i)),
    m && Gr(f, p, e + 2, u, c, l, d, Kt(p.consts, h));
}
var ms = class extends fs {
  constructor(t, n, r) {
    super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = r),
      (this.operationsCounter = void 0),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - Z;
  }
  at(t) {
    return this.getLView(t)[q].$implicit;
  }
  attach(t, n) {
    let r = n[Zt];
    (this.needsIndexUpdate ||= t !== this.length),
      Nn(this.lContainer, n, t, Xt(this.templateTNode, r));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), wD(this.lContainer, t)
    );
  }
  create(t, n) {
    let r = en(this.lContainer, this.templateTNode.tView.ssrId),
      o = Tn(
        this.hostLView,
        this.templateTNode,
        new ps(this.lContainer, n, t),
        { dehydratedView: r },
      );
    return this.operationsCounter?.recordCreate(), o;
  }
  destroy(t) {
    ao(t[v], t), this.operationsCounter?.recordDestroy();
  }
  updateValue(t, n) {
    this.getLView(t)[q].$implicit = n;
  }
  reset() {
    (this.needsIndexUpdate = !1), this.operationsCounter?.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[q].$index = t;
  }
  getLView(t) {
    return CD(this.lContainer, t);
  }
};
function sx(e) {
  let t = C(null),
    n = nt();
  try {
    let r = E(),
      o = r[v],
      i = r[n],
      s = n + 1,
      a = Zr(r, s);
    if (i.liveCollection === void 0) {
      let c = ys(o, s);
      i.liveCollection = new ms(a, r, c);
    } else i.liveCollection.reset();
    let u = i.liveCollection;
    if ((ED(u, e, i.trackByFn), u.updateIndexes(), i.hasEmptyBlock)) {
      let c = Mt(),
        l = u.length === 0;
      if (de(r, c, l)) {
        let d = n + 2,
          h = Zr(r, d);
        if (l) {
          let f = ys(o, d),
            p = en(h, f.tView.ssrId),
            m = Tn(r, f, void 0, { dehydratedView: p });
          Nn(h, m, 0, Xt(f, p));
        } else rd(h, 0);
      }
    }
  } finally {
    C(t);
  }
}
function Zr(e, t) {
  return e[t];
}
function wD(e, t) {
  return En(e, t);
}
function CD(e, t) {
  return nd(e, t);
}
function ys(e, t) {
  return Rs(e, t);
}
function bD(e, t, n, r, o, i) {
  let s = t.consts,
    a = Kt(s, o),
    u = Sn(t, e, 2, r, a);
  return (
    Zl(t, n, u, Kt(s, i)),
    u.attrs !== null && Ki(u, u.attrs, !1),
    u.mergedAttrs !== null && Ki(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function Od(e, t, n, r) {
  let o = E(),
    i = B(),
    s = W + e,
    a = o[j],
    u = i.firstCreatePass ? bD(s, i, o, t, n, r) : i.data[s],
    c = MD(i, o, u, a, t, e);
  o[s] = c;
  let l = Os(u);
  return (
    Mn(u, !0),
    Vl(a, c, u),
    !Hy(u) && $s() && Js(i, o, c, u),
    bp() === 0 && Ct(c, o),
    _p(),
    l && (Gl(i, o, u), zl(i, u, o)),
    r !== null && Wl(o, u),
    Od
  );
}
function Fd() {
  let e = Q();
  zc() ? Gc() : ((e = e.parent), Mn(e, !1));
  let t = e;
  xp(t) && Sp(), Mp();
  let n = B();
  return (
    n.firstCreatePass && (Us(n, e), Ac(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Hp(t) &&
      ds(n, t, E(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Up(t) &&
      ds(n, t, E(), t.stylesWithoutHost, !1),
    Fd
  );
}
function _D(e, t, n, r) {
  return Od(e, t, n, r), Fd(), _D;
}
var MD = (e, t, n, r, o, i) => (Hs(!0), Tl(r, o, jp()));
function ax() {
  return E();
}
function xD(e, t, n) {
  let r = E(),
    o = Mt();
  if (de(r, o, t)) {
    let i = B(),
      s = oo();
    ta(i, s, r, e, t, r[j], n, !0);
  }
  return xD;
}
var ht = void 0;
function SD(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    r = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && r === 0 ? 1 : 5;
}
var TD = [
    "en",
    [["a", "p"], ["AM", "PM"], ht],
    [["AM", "PM"], ht, ht],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    ht,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    ht,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", ht, "{1} 'at' {0}", ht],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    SD,
  ],
  fi = {};
function pe(e) {
  let t = ND(e),
    n = Ku(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = Ku(r)), n)) return n;
  if (r === "en") return TD;
  throw new S(701, !1);
}
function Ku(e) {
  return (
    e in fi ||
      (fi[e] =
        Bt.ng &&
        Bt.ng.common &&
        Bt.ng.common.locales &&
        Bt.ng.common.locales[e]),
    fi[e]
  );
}
var $ = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})($ || {});
function ND(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var Yr = "en-US";
var AD = Yr;
function OD(e) {
  typeof e == "string" && (AD = e.toLowerCase().replace(/_/g, "-"));
}
var FD = (e, t, n) => {};
function RD(e, t, n, r) {
  let o = E(),
    i = B(),
    s = Q();
  return Rd(i, o, o[j], s, e, t, r), RD;
}
function PD(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Sr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function Rd(e, t, n, r, o, i, s) {
  let a = Os(r),
    c = e.firstCreatePass && ed(e),
    l = t[q],
    d = Xl(t),
    h = !0;
  if (r.type & 3 || s) {
    let m = fe(r, t),
      F = s ? s(m) : m,
      x = d.length,
      L = s ? (me) => s(Ne(me[r.index])) : r.index,
      Oe = null;
    if ((!s && a && (Oe = PD(e, t, o, r.index)), Oe !== null)) {
      let me = Oe.__ngLastListenerFn__ || Oe;
      (me.__ngNextListenerFn__ = i), (Oe.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Xu(r, t, l, i)), FD(m, o, i);
      let me = n.listen(F, o, i);
      d.push(i, me), c && c.push(o, L, x, x + 1);
    }
  } else i = Xu(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let m = p.length;
    if (m)
      for (let F = 0; F < m; F += 2) {
        let x = p[F],
          L = p[F + 1],
          Nt = t[x][L].subscribe(i),
          se = d.length;
        d.push(i, Nt), c && c.push(o, r.index, se, -(se + 1));
      }
  }
}
function Ju(e, t, n, r) {
  let o = C(null);
  try {
    return Se(6, t, n), n(r) !== !1;
  } catch (i) {
    return td(e, i), !1;
  } finally {
    Se(7, t, n), C(o);
  }
}
function Xu(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? tt(e.index, t) : t;
    oa(s, 5);
    let a = Ju(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = Ju(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function ux(e = 1) {
  return Lp(e);
}
function kD(e, t) {
  let n = null,
    r = Gh(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? mc(e, i, !0) : Zh(r, i)) return o;
  }
  return n;
}
function cx(e) {
  let t = E()[ae][ie];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = kh(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? kD(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function lx(e, t = 0, n, r, o, i) {
  let s = E(),
    a = B(),
    u = r ? e + 1 : null;
  u !== null && Gr(s, a, u, r, o, i, null, n);
  let c = Sn(a, W + e, 16, null, n || null);
  c.projection === null && (c.projection = t), Gc();
  let d = !s[Zt] || Hc();
  s[ae][ie].projection[c.projection] === null && u !== null
    ? LD(s, a, u)
    : d && (c.flags & 32) !== 32 && nm(a, s, c);
}
function LD(e, t, n) {
  let r = W + n,
    o = t.data[r],
    i = e[r],
    s = en(i, o.tView.ssrId),
    a = Tn(e, o, void 0, { dehydratedView: s });
  Nn(i, a, 0, Xt(o, s));
}
function dx(e, t, n, r) {
  md(e, t, n, r);
}
function fx(e, t, n) {
  Iy(e, t, n);
}
function hx(e) {
  let t = E(),
    n = B(),
    r = js();
  ro(r + 1);
  let o = ua(n, r);
  if (e.dirty && Ip(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Dd(t, r);
      e.reset(i, pl), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function px() {
  return aa(E(), js());
}
function gx(e, t, n, r, o) {
  Sy(t, md(e, n, r, o));
}
function mx(e = 1) {
  ro(js() + e);
}
function jD(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function yx(e) {
  let t = Np();
  return Ps(t, W + e);
}
function Dx(e, t = "") {
  let n = E(),
    r = B(),
    o = e + W,
    i = r.firstCreatePass ? Sn(r, o, 1, t, null) : r.data[o],
    s = VD(r, n, i, t, e);
  (n[o] = s), $s() && Js(r, n, s, i), Mn(i, !1);
}
var VD = (e, t, n, r, o) => (Hs(!0), Ug(t[j], r));
function BD(e) {
  return Pd("", e, ""), BD;
}
function Pd(e, t, n) {
  let r = E(),
    o = Ky(r, e, t, n);
  return o !== Ae && Am(r, nt(), o), Pd;
}
function $D(e, t, n) {
  vd(t) && (t = t());
  let r = E(),
    o = Mt();
  if (de(r, o, t)) {
    let i = B(),
      s = oo();
    ta(i, s, r, e, t, r[j], n, !1);
  }
  return $D;
}
function vx(e, t) {
  let n = vd(e);
  return n && e.set(t), n;
}
function HD(e, t) {
  let n = E(),
    r = B(),
    o = Q();
  return Rd(r, n, n[j], o, e, t), HD;
}
function UD(e, t, n) {
  let r = B();
  if (r.firstCreatePass) {
    let o = Je(e);
    Ds(n, r.data, r.blueprint, o, !0), Ds(t, r.data, r.blueprint, o, !1);
  }
}
function Ds(e, t, n, r, o) {
  if (((e = G(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Ds(e[i], t, n, r, o);
  else {
    let i = B(),
      s = E(),
      a = Q(),
      u = qt(e) ? e : G(e.provide),
      c = Mc(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (qt(e) || !e.multi) {
      let f = new Et(c, o, he),
        p = pi(u, t, o ? l : l + h, d);
      p === -1
        ? (Si(Rr(a, s), i, u),
          hi(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = pi(u, t, l + h, d),
        p = pi(u, t, l, l + h),
        m = f >= 0 && n[f],
        F = p >= 0 && n[p];
      if ((o && !F) || (!o && !m)) {
        Si(Rr(a, s), i, u);
        let x = WD(o ? GD : zD, n.length, o, r, c);
        !o && F && (n[p].providerFactory = x),
          hi(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(x),
          s.push(x);
      } else {
        let x = kd(n[o ? p : f], c, !o && r);
        hi(i, e, f > -1 ? f : p, x);
      }
      !o && r && F && n[p].componentProviders++;
    }
  }
}
function hi(e, t, n, r) {
  let o = qt(t),
    i = ap(t);
  if (o || i) {
    let u = (i ? G(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function kd(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function pi(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function zD(e, t, n, r) {
  return vs(this.multi, []);
}
function GD(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = wt(n, n[v], this.providerFactory.index, r);
    (i = a.slice(0, s)), vs(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), vs(o, i);
  return i;
}
function vs(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function WD(e, t, n, r, o) {
  let i = new Et(e, n, he);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    kd(i, o, r && !n),
    i
  );
}
function Ix(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => UD(r, o ? o(e) : e, t);
  };
}
var qD = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = wc(!1, n.type),
          o =
            r.length > 0
              ? By([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static {
      this.ɵprov = V({
        token: e,
        providedIn: "environment",
        factory: () => new e(oe(Ke)),
      });
    }
  }
  return e;
})();
function Ex(e) {
  Ue("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(qD).getOrCreateStandaloneInjector(e));
}
function wx(e, t, n, r, o) {
  return jd(E(), Ls(), e, t, n, r, o);
}
function Ld(e, t) {
  let n = e[t];
  return n === Ae ? void 0 : n;
}
function ZD(e, t, n, r, o, i) {
  let s = t + n;
  return de(e, s, o) ? wd(e, s + 1, i ? r.call(i, o) : r(o)) : Ld(e, s + 1);
}
function jd(e, t, n, r, o, i, s) {
  let a = t + n;
  return $y(e, a, o, i)
    ? wd(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : Ld(e, a + 2);
}
function Cx(e, t) {
  let n = B(),
    r,
    o = e + W;
  n.firstCreatePass
    ? ((r = YD(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = gt(r.type, !0)),
    s,
    a = te(he);
  try {
    let u = Fr(!1),
      c = i();
    return Fr(u), jD(n, E(), o, c), c;
  } finally {
    te(a);
  }
}
function YD(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function bx(e, t, n) {
  let r = e + W,
    o = E(),
    i = Ps(o, r);
  return Vd(o, r) ? ZD(o, Ls(), t, i.transform, n, i) : i.transform(n);
}
function _x(e, t, n, r) {
  let o = e + W,
    i = E(),
    s = Ps(i, o);
  return Vd(i, o) ? jd(i, Ls(), t, s.transform, n, r, s) : s.transform(n, r);
}
function Vd(e, t) {
  return e[v].data[t].pure;
}
function Mx(e, t) {
  return fo(e, t);
}
var xx = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "platform" });
    }
  }
  return e;
})();
var QD = new O("");
function ho(e) {
  return !!e && typeof e.then == "function";
}
function ca(e) {
  return !!e && typeof e.subscribe == "function";
}
var KD = new O(""),
  Bd = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = M(KD, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = o();
          if (ho(i)) n.push(i);
          else if (ca(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  JD = new O("");
function XD() {
  Oa(() => {
    throw new S(600, !1);
  });
}
function ev(e) {
  return e.isBoundToModule;
}
var tv = 10;
function nv(e, t, n) {
  try {
    let r = n();
    return ho(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var po = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = M(cg)),
        (this.afterRenderManager = M(Cd)),
        (this.zonelessEnabled = M(ia)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new ce()),
        (this.afterTick = new ce()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = M(io).hasPendingTasks.pipe(xe((n) => !n))),
        (this._injector = M(Ke));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof Br;
      if (!this._injector.get(Bd).done) {
        let h = !o && ep(n),
          f = !1;
        throw new S(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(nn).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = ev(s) ? void 0 : this._injector.get(et),
        u = r || s.selector,
        c = s.create(Xe.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(QD, null);
      return (
        d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            Er(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new S(101, !1);
      let n = C(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), C(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get($r, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let r = 0;
      for (; this.dirtyFlags !== 0 && r++ < tv; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let r = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(r);
        for (let { _lView: o, notifyErrorHandler: i } of this._views)
          rv(o, i, r, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => to(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      Er(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(JD, []);
      [...this._bootstrapListeners, ...r].forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => Er(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new S(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function Er(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function rv(e, t, n, r) {
  if (!n && !to(e)) return;
  sd(e, t, n && !r ? 0 : 1);
}
var Is = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  Sx = (() => {
    class e {
      compileModuleSync(n) {
        return new ss(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = vc(n),
          i = xl(o.declarations).reduce((s, a) => {
            let u = mt(a);
            return u && s.push(new Cn(u)), s;
          }, []);
        return new Is(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var ov = (() => {
    class e {
      constructor() {
        (this.zone = M(re)),
          (this.changeDetectionScheduler = M(tn)),
          (this.applicationRef = M(po));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  iv = new O("", { factory: () => !1 });
function $d({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new re(Re(Fe({}, Hd()), { scheduleInRootZone: n }))),
    [
      { provide: re, useFactory: e },
      {
        provide: Mr,
        multi: !0,
        useFactory: () => {
          let r = M(ov, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: Mr,
        multi: !0,
        useFactory: () => {
          let r = M(sv);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: ld, useValue: !0 } : [],
      { provide: dd, useValue: n ?? dl },
    ]
  );
}
function Tx(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = $d({
      ngZoneFactory: () => {
        let o = Hd(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && Ue("NgZone_CoalesceEvent"),
          new re(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return np([{ provide: iv, useValue: !0 }, { provide: ia, useValue: !1 }, r]);
}
function Hd(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var sv = (() => {
  class e {
    constructor() {
      (this.subscription = new H()),
        (this.initialized = !1),
        (this.zone = M(re)),
        (this.pendingTasks = M(io));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              re.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            re.assertInAngularZone(), (n ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var av = (() => {
  class e {
    constructor() {
      (this.appRef = M(po)),
        (this.taskService = M(io)),
        (this.ngZone = M(re)),
        (this.zonelessEnabled = M(ia)),
        (this.disableScheduling = M(ld, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new H()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(kr)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (M(dd, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Fi || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let r = this.useMicrotaskScheduler ? Nu : fl;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              r(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              r(() => this.tick()),
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(kr + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        Nu(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function uv() {
  return (typeof $localize < "u" && $localize.locale) || Yr;
}
var go = new O("", {
  providedIn: "root",
  factory: () => M(go, b.Optional | b.SkipSelf) || uv(),
});
var Es = new O("");
function mr(e) {
  return !e.moduleRef;
}
function cv(e) {
  let t = mr(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(re);
  return n.run(() => {
    mr(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Jt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      mr(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Es);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(Es);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          Er(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return nv(r, n, () => {
      let i = t.get(Bd);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(go, Yr);
          if ((OD(s || Yr), mr(e))) {
            let a = t.get(po);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return lv(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function lv(e, t) {
  let n = e.injector.get(po);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new S(-403, !1);
  t.push(e);
}
var wr = null;
function dv(e = [], t) {
  return Xe.create({
    name: t,
    providers: [
      { provide: _c, useValue: "platform" },
      { provide: Es, useValue: new Set([() => (wr = null)]) },
      ...e,
    ],
  });
}
function fv(e = []) {
  if (wr) return wr;
  let t = dv(e);
  return (wr = t), XD(), hv(t), t;
}
function hv(e) {
  e.get(yg, null)?.forEach((n) => n());
}
var la = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = pv;
    }
  }
  return e;
})();
function pv(e) {
  return gv(Q(), E(), (e & 16) === 16);
}
function gv(e, t, n) {
  if (eo(e) && !n) {
    let r = tt(e.index, t);
    return new bt(r, r);
  } else if (e.type & 175) {
    let r = t[ae];
    return new bt(r, t);
  }
  return null;
}
function Nx(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = fv(r),
      i = [$d({}), { provide: tn, useExisting: av }, ...(n || [])],
      s = new zr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return cv({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function mv(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Ax(e, t) {
  Ue("NgSignals");
  let n = Po(e);
  return t?.equal && (n[ye].equal = t.equal), n;
}
function da(e) {
  let t = C(null);
  try {
    return e();
  } finally {
    C(t);
  }
}
var Yd = null;
function fa() {
  return Yd;
}
function rS(e) {
  Yd ??= e;
}
var Ud = class {};
var Qd = new O(""),
  Kd = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = V({
          token: e,
          factory: () => M(Dv),
          providedIn: "platform",
        });
      }
    }
    return e;
  })();
var Dv = (() => {
  class e extends Kd {
    constructor() {
      super(),
        (this._doc = M(Qd)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return fa().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = fa().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n)
      );
    }
    onHashChange(n) {
      let r = fa().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("hashchange", n, !1),
        () => r.removeEventListener("hashchange", n)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = V({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
  }
  return e;
})();
function Jd(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function zd(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function St(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var va = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = V({ token: e, factory: () => M(Iv), providedIn: "root" });
      }
    }
    return e;
  })(),
  vv = new O(""),
  Iv = (() => {
    class e extends va {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            M(Qd).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Jd(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + St(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + St(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + St(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(oe(Kd), oe(vv, 8));
        };
      }
      static {
        this.ɵprov = V({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Ev = (() => {
  class e {
    constructor(n) {
      (this._subject = new we()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = bv(zd(Gd(r)))),
        this._locationStrategy.onPopState((o) => {
          this._subject.emit({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(),
        (this._urlChangeListeners = []);
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = "") {
      return this.path() == this.normalize(n + St(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(Cv(this._basePath, Gd(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + St(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + St(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return (
        this._urlChangeListeners.push(n),
        (this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        })),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
              (this._urlChangeSubscription?.unsubscribe(),
              (this._urlChangeSubscription = null));
        }
      );
    }
    _notifyUrlChangeListeners(n = "", r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({ next: n, error: r, complete: o });
    }
    static {
      this.normalizeQueryParams = St;
    }
    static {
      this.joinWithSlash = Jd;
    }
    static {
      this.stripTrailingSlash = zd;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(oe(va));
      };
    }
    static {
      this.ɵprov = V({ token: e, factory: () => wv(), providedIn: "root" });
    }
  }
  return e;
})();
function wv() {
  return new Ev(oe(va));
}
function Cv(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function Gd(e) {
  return e.replace(/\/index.html$/, "");
}
function bv(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var X = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(X || {}),
  P = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(P || {}),
  ue = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(ue || {}),
  rt = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
  };
function _v(e) {
  return pe(e)[$.LocaleId];
}
function Mv(e, t, n) {
  let r = pe(e),
    o = [r[$.DayPeriodsFormat], r[$.DayPeriodsStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function xv(e, t, n) {
  let r = pe(e),
    o = [r[$.DaysFormat], r[$.DaysStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function Sv(e, t, n) {
  let r = pe(e),
    o = [r[$.MonthsFormat], r[$.MonthsStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function Tv(e, t) {
  let r = pe(e)[$.Eras];
  return ge(r, t);
}
function mo(e, t) {
  let n = pe(e);
  return ge(n[$.DateFormat], t);
}
function yo(e, t) {
  let n = pe(e);
  return ge(n[$.TimeFormat], t);
}
function Do(e, t) {
  let r = pe(e)[$.DateTimeFormat];
  return ge(r, t);
}
function _o(e, t) {
  let n = pe(e),
    r = n[$.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === rt.CurrencyDecimal) return n[$.NumberSymbols][rt.Decimal];
    if (t === rt.CurrencyGroup) return n[$.NumberSymbols][rt.Group];
  }
  return r;
}
function Xd(e) {
  if (!e[$.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${e[$.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`,
    );
}
function Nv(e) {
  let t = pe(e);
  return (
    Xd(t),
    (t[$.ExtraData][2] || []).map((r) =>
      typeof r == "string" ? ha(r) : [ha(r[0]), ha(r[1])],
    )
  );
}
function Av(e, t, n) {
  let r = pe(e);
  Xd(r);
  let o = [r[$.ExtraData][0], r[$.ExtraData][1]],
    i = ge(o, t) || [];
  return ge(i, n) || [];
}
function ge(e, t) {
  for (let n = t; n > -1; n--) if (typeof e[n] < "u") return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function ha(e) {
  let [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
var Ov =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  vo = {},
  Fv =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  Ge = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.ShortGMT = 1)] = "ShortGMT"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Extended = 3)] = "Extended"),
      e
    );
  })(Ge || {}),
  A = (function (e) {
    return (
      (e[(e.FullYear = 0)] = "FullYear"),
      (e[(e.Month = 1)] = "Month"),
      (e[(e.Date = 2)] = "Date"),
      (e[(e.Hours = 3)] = "Hours"),
      (e[(e.Minutes = 4)] = "Minutes"),
      (e[(e.Seconds = 5)] = "Seconds"),
      (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
      (e[(e.Day = 7)] = "Day"),
      e
    );
  })(A || {}),
  N = (function (e) {
    return (
      (e[(e.DayPeriods = 0)] = "DayPeriods"),
      (e[(e.Days = 1)] = "Days"),
      (e[(e.Months = 2)] = "Months"),
      (e[(e.Eras = 3)] = "Eras"),
      e
    );
  })(N || {});
function Rv(e, t, n, r) {
  let o = Uv(e);
  t = ze(n, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = Fv.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let l = s.pop();
      if (!l) break;
      t = l;
    } else {
      s.push(t);
      break;
    }
  let u = o.getTimezoneOffset();
  r && ((u = tf(r, u)), (o = Hv(o, r, !0)));
  let c = "";
  return (
    s.forEach((l) => {
      let d = Bv(l);
      c += d
        ? d(o, n, u)
        : l === "''"
          ? "'"
          : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    c
  );
}
function bo(e, t, n) {
  let r = new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function ze(e, t) {
  let n = _v(e);
  if (((vo[n] ??= {}), vo[n][t])) return vo[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = mo(e, ue.Short);
      break;
    case "mediumDate":
      r = mo(e, ue.Medium);
      break;
    case "longDate":
      r = mo(e, ue.Long);
      break;
    case "fullDate":
      r = mo(e, ue.Full);
      break;
    case "shortTime":
      r = yo(e, ue.Short);
      break;
    case "mediumTime":
      r = yo(e, ue.Medium);
      break;
    case "longTime":
      r = yo(e, ue.Long);
      break;
    case "fullTime":
      r = yo(e, ue.Full);
      break;
    case "short":
      let o = ze(e, "shortTime"),
        i = ze(e, "shortDate");
      r = Io(Do(e, ue.Short), [o, i]);
      break;
    case "medium":
      let s = ze(e, "mediumTime"),
        a = ze(e, "mediumDate");
      r = Io(Do(e, ue.Medium), [s, a]);
      break;
    case "long":
      let u = ze(e, "longTime"),
        c = ze(e, "longDate");
      r = Io(Do(e, ue.Long), [u, c]);
      break;
    case "full":
      let l = ze(e, "fullTime"),
        d = ze(e, "fullDate");
      r = Io(Do(e, ue.Full), [l, d]);
      break;
  }
  return r && (vo[n][t] = r), r;
}
function Io(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (n, r) {
        return t != null && r in t ? t[r] : n;
      })),
    e
  );
}
function be(e, t, n = "-", r, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = n)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return r && (s = s.slice(s.length - t)), i + s;
}
function Pv(e, t) {
  return be(e, 3).substring(0, t);
}
function U(e, t, n = 0, r = !1, o = !1) {
  return function (i, s) {
    let a = kv(e, i);
    if (((n > 0 || a > -n) && (a += n), e === A.Hours))
      a === 0 && n === -12 && (a = 12);
    else if (e === A.FractionalSeconds) return Pv(a, t);
    let u = _o(s, rt.MinusSign);
    return be(a, t, u, r, o);
  };
}
function kv(e, t) {
  switch (e) {
    case A.FullYear:
      return t.getFullYear();
    case A.Month:
      return t.getMonth();
    case A.Date:
      return t.getDate();
    case A.Hours:
      return t.getHours();
    case A.Minutes:
      return t.getMinutes();
    case A.Seconds:
      return t.getSeconds();
    case A.FractionalSeconds:
      return t.getMilliseconds();
    case A.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function k(e, t, n = X.Format, r = !1) {
  return function (o, i) {
    return Lv(o, i, e, t, n, r);
  };
}
function Lv(e, t, n, r, o, i) {
  switch (n) {
    case N.Months:
      return Sv(t, o, r)[e.getMonth()];
    case N.Days:
      return xv(t, o, r)[e.getDay()];
    case N.DayPeriods:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let c = Nv(t),
          l = Av(t, o, r),
          d = c.findIndex((h) => {
            if (Array.isArray(h)) {
              let [f, p] = h,
                m = s >= f.hours && a >= f.minutes,
                F = s < p.hours || (s === p.hours && a < p.minutes);
              if (f.hours < p.hours) {
                if (m && F) return !0;
              } else if (m || F) return !0;
            } else if (h.hours === s && h.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return l[d];
      }
      return Mv(t, o, r)[s < 12 ? 0 : 1];
    case N.Eras:
      return Tv(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let u = n;
      throw new Error(`unexpected translation type ${u}`);
  }
}
function Eo(e) {
  return function (t, n, r) {
    let o = -1 * r,
      i = _o(n, rt.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case Ge.Short:
        return (o >= 0 ? "+" : "") + be(s, 2, i) + be(Math.abs(o % 60), 2, i);
      case Ge.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + be(s, 1, i);
      case Ge.Long:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          be(s, 2, i) +
          ":" +
          be(Math.abs(o % 60), 2, i)
        );
      case Ge.Extended:
        return r === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              be(s, 2, i) +
              ":" +
              be(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var jv = 0,
  Co = 4;
function Vv(e) {
  let t = bo(e, jv, 1).getDay();
  return bo(e, 0, 1 + (t <= Co ? Co : Co + 7) - t);
}
function ef(e) {
  let t = e.getDay(),
    n = t === 0 ? -3 : Co - t;
  return bo(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function pa(e, t = !1) {
  return function (n, r) {
    let o;
    if (t) {
      let i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
        s = n.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = ef(n),
        s = Vv(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return be(o, e, _o(r, rt.MinusSign));
  };
}
function wo(e, t = !1) {
  return function (n, r) {
    let i = ef(n).getFullYear();
    return be(i, e, _o(r, rt.MinusSign), t);
  };
}
var ga = {};
function Bv(e) {
  if (ga[e]) return ga[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = k(N.Eras, P.Abbreviated);
      break;
    case "GGGG":
      t = k(N.Eras, P.Wide);
      break;
    case "GGGGG":
      t = k(N.Eras, P.Narrow);
      break;
    case "y":
      t = U(A.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = U(A.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = U(A.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = U(A.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = wo(1);
      break;
    case "YY":
      t = wo(2, !0);
      break;
    case "YYY":
      t = wo(3);
      break;
    case "YYYY":
      t = wo(4);
      break;
    case "M":
    case "L":
      t = U(A.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = U(A.Month, 2, 1);
      break;
    case "MMM":
      t = k(N.Months, P.Abbreviated);
      break;
    case "MMMM":
      t = k(N.Months, P.Wide);
      break;
    case "MMMMM":
      t = k(N.Months, P.Narrow);
      break;
    case "LLL":
      t = k(N.Months, P.Abbreviated, X.Standalone);
      break;
    case "LLLL":
      t = k(N.Months, P.Wide, X.Standalone);
      break;
    case "LLLLL":
      t = k(N.Months, P.Narrow, X.Standalone);
      break;
    case "w":
      t = pa(1);
      break;
    case "ww":
      t = pa(2);
      break;
    case "W":
      t = pa(1, !0);
      break;
    case "d":
      t = U(A.Date, 1);
      break;
    case "dd":
      t = U(A.Date, 2);
      break;
    case "c":
    case "cc":
      t = U(A.Day, 1);
      break;
    case "ccc":
      t = k(N.Days, P.Abbreviated, X.Standalone);
      break;
    case "cccc":
      t = k(N.Days, P.Wide, X.Standalone);
      break;
    case "ccccc":
      t = k(N.Days, P.Narrow, X.Standalone);
      break;
    case "cccccc":
      t = k(N.Days, P.Short, X.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = k(N.Days, P.Abbreviated);
      break;
    case "EEEE":
      t = k(N.Days, P.Wide);
      break;
    case "EEEEE":
      t = k(N.Days, P.Narrow);
      break;
    case "EEEEEE":
      t = k(N.Days, P.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = k(N.DayPeriods, P.Abbreviated);
      break;
    case "aaaa":
      t = k(N.DayPeriods, P.Wide);
      break;
    case "aaaaa":
      t = k(N.DayPeriods, P.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = k(N.DayPeriods, P.Abbreviated, X.Standalone, !0);
      break;
    case "bbbb":
      t = k(N.DayPeriods, P.Wide, X.Standalone, !0);
      break;
    case "bbbbb":
      t = k(N.DayPeriods, P.Narrow, X.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = k(N.DayPeriods, P.Abbreviated, X.Format, !0);
      break;
    case "BBBB":
      t = k(N.DayPeriods, P.Wide, X.Format, !0);
      break;
    case "BBBBB":
      t = k(N.DayPeriods, P.Narrow, X.Format, !0);
      break;
    case "h":
      t = U(A.Hours, 1, -12);
      break;
    case "hh":
      t = U(A.Hours, 2, -12);
      break;
    case "H":
      t = U(A.Hours, 1);
      break;
    case "HH":
      t = U(A.Hours, 2);
      break;
    case "m":
      t = U(A.Minutes, 1);
      break;
    case "mm":
      t = U(A.Minutes, 2);
      break;
    case "s":
      t = U(A.Seconds, 1);
      break;
    case "ss":
      t = U(A.Seconds, 2);
      break;
    case "S":
      t = U(A.FractionalSeconds, 1);
      break;
    case "SS":
      t = U(A.FractionalSeconds, 2);
      break;
    case "SSS":
      t = U(A.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = Eo(Ge.Short);
      break;
    case "ZZZZZ":
      t = Eo(Ge.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = Eo(Ge.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = Eo(Ge.Long);
      break;
    default:
      return null;
  }
  return (ga[e] = t), t;
}
function tf(e, t) {
  e = e.replace(/:/g, "");
  let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function $v(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function Hv(e, t, n) {
  let r = n ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = tf(t, o);
  return $v(e, r * (i - o));
}
function Uv(e) {
  if (Wd(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return bo(o, i - 1, s);
    }
    let n = parseFloat(e);
    if (!isNaN(e - n)) return new Date(n);
    let r;
    if ((r = e.match(Ov))) return zv(r);
  }
  let t = new Date(e);
  if (!Wd(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function zv(e) {
  let t = new Date(0),
    n = 0,
    r = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - n,
    a = Number(e[5] || 0) - r,
    u = Number(e[6] || 0),
    c = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, u, c), t;
}
function Wd(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
function oS(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var ma = /\s+/,
  qd = [],
  iS = (() => {
    class e {
      constructor(n, r) {
        (this._ngEl = n),
          (this._renderer = r),
          (this.initialClasses = qd),
          (this.stateMap = new Map());
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(ma) : qd;
      }
      set ngClass(n) {
        this.rawClass = typeof n == "string" ? n.trim().split(ma) : n;
      }
      ngDoCheck() {
        for (let r of this.initialClasses) this._updateState(r, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let r of n) this._updateState(r, !0);
        else if (n != null)
          for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
        this._applyStateDiff();
      }
      _updateState(n, r) {
        let o = this.stateMap.get(n);
        o !== void 0
          ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)),
            (o.touched = !0))
          : this.stateMap.set(n, { enabled: r, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let r = n[0],
            o = n[1];
          o.changed
            ? (this._toggleClass(r, o.enabled), (o.changed = !1))
            : o.touched ||
              (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
            (o.touched = !1);
        }
      }
      _toggleClass(n, r) {
        (n = n.trim()),
          n.length > 0 &&
            n.split(ma).forEach((o) => {
              r
                ? this._renderer.addClass(this._ngEl.nativeElement, o)
                : this._renderer.removeClass(this._ngEl.nativeElement, o);
            });
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(he(xt), he(sa));
        };
      }
      static {
        this.ɵdir = xs({
          type: e,
          selectors: [["", "ngClass", ""]],
          inputs: { klass: [0, "class", "klass"], ngClass: "ngClass" },
          standalone: !0,
        });
      }
    }
    return e;
  })();
var sS = (() => {
  class e {
    constructor(n) {
      (this._viewContainerRef = n),
        (this._viewRef = null),
        (this.ngTemplateOutletContext = null),
        (this.ngTemplateOutlet = null),
        (this.ngTemplateOutletInjector = null);
    }
    ngOnChanges(n) {
      if (this._shouldRecreateView(n)) {
        let r = this._viewContainerRef;
        if (
          (this._viewRef && r.remove(r.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let o = this._createContextForwardProxy();
        this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(n) {
      return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (n, r, o) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, r, o)
              : !1,
          get: (n, r, o) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, r, o);
          },
        },
      );
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(he(An));
      };
    }
    static {
      this.ɵdir = xs({
        type: e,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {
          ngTemplateOutletContext: "ngTemplateOutletContext",
          ngTemplateOutlet: "ngTemplateOutlet",
          ngTemplateOutletInjector: "ngTemplateOutletInjector",
        },
        standalone: !0,
        features: [Fs],
      });
    }
  }
  return e;
})();
function nf(e, t) {
  return new S(2100, !1);
}
var ya = class {
    createSubscription(t, n) {
      return da(() =>
        t.subscribe({
          next: n,
          error: (r) => {
            throw r;
          },
        }),
      );
    }
    dispose(t) {
      da(() => t.unsubscribe());
    }
  },
  Da = class {
    createSubscription(t, n) {
      return t.then(n, (r) => {
        throw r;
      });
    }
    dispose(t) {}
  },
  Gv = new Da(),
  Wv = new ya(),
  aS = (() => {
    class e {
      constructor(n) {
        (this._latestValue = null),
          (this.markForCheckOnValueUpdate = !0),
          (this._subscription = null),
          (this._obj = null),
          (this._strategy = null),
          (this._ref = n);
      }
      ngOnDestroy() {
        this._subscription && this._dispose(), (this._ref = null);
      }
      transform(n) {
        if (!this._obj) {
          if (n)
            try {
              (this.markForCheckOnValueUpdate = !1), this._subscribe(n);
            } finally {
              this.markForCheckOnValueUpdate = !0;
            }
          return this._latestValue;
        }
        return n !== this._obj
          ? (this._dispose(), this.transform(n))
          : this._latestValue;
      }
      _subscribe(n) {
        (this._obj = n),
          (this._strategy = this._selectStrategy(n)),
          (this._subscription = this._strategy.createSubscription(n, (r) =>
            this._updateLatestValue(n, r),
          ));
      }
      _selectStrategy(n) {
        if (ho(n)) return Gv;
        if (ca(n)) return Wv;
        throw nf(e, n);
      }
      _dispose() {
        this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null);
      }
      _updateLatestValue(n, r) {
        n === this._obj &&
          ((this._latestValue = r),
          this.markForCheckOnValueUpdate && this._ref?.markForCheck());
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(he(la, 16));
        };
      }
      static {
        this.ɵpipe = Ss({ name: "async", type: e, pure: !1, standalone: !0 });
      }
    }
    return e;
  })();
var qv = "mediumDate",
  Zv = new O(""),
  Yv = new O(""),
  uS = (() => {
    class e {
      constructor(n, r, o) {
        (this.locale = n),
          (this.defaultTimezone = r),
          (this.defaultOptions = o);
      }
      transform(n, r, o, i) {
        if (n == null || n === "" || n !== n) return null;
        try {
          let s = r ?? this.defaultOptions?.dateFormat ?? qv,
            a =
              o ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return Rv(n, s, i || this.locale, a);
        } catch (s) {
          throw nf(e, s.message);
        }
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(he(go, 16), he(Zv, 24), he(Yv, 24));
        };
      }
      static {
        this.ɵpipe = Ss({ name: "date", type: e, pure: !0, standalone: !0 });
      }
    }
    return e;
  })();
var cS = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵmod = yc({ type: e });
      }
      static {
        this.ɵinj = oc({});
      }
    }
    return e;
  })(),
  Qv = "browser",
  Kv = "server";
function lS(e) {
  return e === Qv;
}
function dS(e) {
  return e === Kv;
}
var Zd = class {};
var Tt = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(Tt || {}),
  pS = "*";
function gS(e, t) {
  return { type: Tt.Trigger, name: e, definitions: t, options: {} };
}
function mS(e, t = null) {
  return { type: Tt.Animate, styles: t, timings: e };
}
function yS(e, t = null) {
  return { type: Tt.Sequence, steps: e, options: t };
}
function DS(e) {
  return { type: Tt.Style, styles: e, offset: null };
}
function vS(e, t, n) {
  return { type: Tt.State, name: e, styles: t, options: n };
}
function IS(e, t, n = null) {
  return { type: Tt.Transition, expr: e, animation: t, options: n };
}
var rf = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  of = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  ES = "!";
export {
  Fe as a,
  Re as b,
  Jv as c,
  Xv as d,
  eI as e,
  tI as f,
  nI as g,
  rI as h,
  hf as i,
  H as j,
  Cf as k,
  _ as l,
  Go as m,
  Wo as n,
  ce as o,
  cn as p,
  dn as q,
  ct as r,
  BE as s,
  $E as t,
  Me as u,
  Ff as v,
  Rf as w,
  Pf as x,
  dt as y,
  xe as z,
  Uf as A,
  ve as B,
  Vt as C,
  Gf as D,
  Wf as E,
  Zo as F,
  Xf as G,
  We as H,
  eh as I,
  uu as J,
  th as K,
  nh as L,
  hn as M,
  ft as N,
  Yo as O,
  rh as P,
  du as Q,
  sh as R,
  fu as S,
  Ko as T,
  ah as U,
  uh as V,
  Xo as W,
  ch as X,
  lh as Y,
  dh as Z,
  hu as _,
  fh as $,
  hh as aa,
  S as ba,
  nc as ca,
  V as da,
  oc as ea,
  F0 as fa,
  O as ga,
  b as ha,
  oe as ia,
  M as ja,
  yn as ka,
  R0 as la,
  yc as ma,
  xs as na,
  Ss as oa,
  np as pa,
  rp as qa,
  _c as ra,
  Ke as sa,
  P0 as ta,
  Fs as ua,
  k0 as va,
  L0 as wa,
  j0 as xa,
  Xp as ya,
  Xe as za,
  io as Aa,
  we as Ba,
  re as Ca,
  Jt as Da,
  xt as Ea,
  V0 as Fa,
  B0 as Ga,
  yg as Ha,
  Il as Ia,
  $0 as Ja,
  H0 as Ka,
  Ys as La,
  U0 as Ma,
  z0 as Na,
  G0 as Oa,
  W0 as Pa,
  q0 as Qa,
  Z0 as Ra,
  xg as Sa,
  Y0 as Ta,
  $g as Ua,
  Lr as Va,
  Q0 as Wa,
  he as Xa,
  K0 as Ya,
  wn as Za,
  tn as _a,
  nn as $a,
  $r as ab,
  sa as bb,
  An as cb,
  Ue as db,
  by as eb,
  tx as fb,
  Oy as gb,
  nx as hb,
  Vy as ib,
  os as jb,
  By as kb,
  zy as lb,
  qy as mb,
  Zy as nb,
  Qy as ob,
  uD as pb,
  cD as qb,
  rx as rb,
  ox as sb,
  ix as tb,
  sx as ub,
  Od as vb,
  Fd as wb,
  _D as xb,
  ax as yb,
  xD as zb,
  RD as Ab,
  ux as Bb,
  cx as Cb,
  lx as Db,
  dx as Eb,
  fx as Fb,
  hx as Gb,
  px as Hb,
  gx as Ib,
  mx as Jb,
  yx as Kb,
  Dx as Lb,
  BD as Mb,
  Pd as Nb,
  $D as Ob,
  vx as Pb,
  HD as Qb,
  Ix as Rb,
  Ex as Sb,
  wx as Tb,
  Cx as Ub,
  bx as Vb,
  _x as Wb,
  Mx as Xb,
  xx as Yb,
  ho as Zb,
  JD as _b,
  po as $b,
  Sx as ac,
  Tx as bc,
  la as cc,
  Nx as dc,
  mv as ec,
  Ax as fc,
  da as gc,
  fa as hc,
  rS as ic,
  Ud as jc,
  Qd as kc,
  Ev as lc,
  oS as mc,
  iS as nc,
  sS as oc,
  aS as pc,
  uS as qc,
  cS as rc,
  Qv as sc,
  lS as tc,
  dS as uc,
  Zd as vc,
  Tt as wc,
  pS as xc,
  gS as yc,
  mS as zc,
  yS as Ac,
  DS as Bc,
  vS as Cc,
  IS as Dc,
  rf as Ec,
  of as Fc,
  ES as Gc,
};
