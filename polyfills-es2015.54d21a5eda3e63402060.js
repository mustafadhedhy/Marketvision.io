(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    2: function (t, e, n) {
      t.exports = n("hN/g");
    },
    "N/DB": function (t, e) {
      const n = "undefined" != typeof globalThis && globalThis,
        o = "undefined" != typeof window && window,
        r =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        i = "undefined" != typeof global && global,
        s = function (t, ...e) {
          if (s.translate) {
            const n = s.translate(t, e);
            (t = n[0]), (e = n[1]);
          }
          let n = a(t[0], t.raw[0]);
          for (let o = 1; o < t.length; o++) n += e[o - 1] + a(t[o], t.raw[o]);
          return n;
        };
      function a(t, e) {
        return ":" === e.charAt(0)
          ? t.substring(
              (function (t, e) {
                for (let n = 1, o = 1; n < t.length; n++, o++)
                  if ("\\" === e[o]) o++;
                  else if (":" === t[n]) return n;
                throw new Error(
                  `Unterminated $localize metadata block in "${e}".`
                );
              })(t, e) + 1
            )
          : t;
      }
      (n || i || o || r).$localize = s;
    },
    "hN/g": function (t, e, n) {
      "use strict";
      n.r(e), n("N/DB"), n("yLV6"), n("pDpN");
    },
    pDpN: function (t, e, n) {
      var o, r;
      void 0 ===
        (r =
          "function" ==
          typeof (o = function () {
            "use strict";
            !(function (t) {
              const e = t.performance;
              function n(t) {
                e && e.mark && e.mark(t);
              }
              function o(t, n) {
                e && e.measure && e.measure(t, n);
              }
              n("Zone");
              const r = t.__Zone_symbol_prefix || "__zone_symbol__";
              function i(t) {
                return r + t;
              }
              const s = !0 === t[i("forceDuplicateZoneCheck")];
              if (t.Zone) {
                if (s || "function" != typeof t.Zone.__symbol__)
                  throw new Error("Zone already loaded.");
                return t.Zone;
              }
              class a {
                constructor(t, e) {
                  (this._parent = t),
                    (this._name = e ? e.name || "unnamed" : "<root>"),
                    (this._properties = (e && e.properties) || {}),
                    (this._zoneDelegate = new l(
                      this,
                      this._parent && this._parent._zoneDelegate,
                      e
                    ));
                }
                static assertZonePatched() {
                  if (t.Promise !== Z.ZoneAwarePromise)
                    throw new Error(
                      "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                    );
                }
                static get root() {
                  let t = a.current;
                  for (; t.parent; ) t = t.parent;
                  return t;
                }
                static get current() {
                  return z.zone;
                }
                static get currentTask() {
                  return I;
                }
                static __load_patch(e, r) {
                  if (Z.hasOwnProperty(e)) {
                    if (s) throw Error("Already loaded patch: " + e);
                  } else if (!t["__Zone_disable_" + e]) {
                    const i = "Zone:" + e;
                    n(i), (Z[e] = r(t, a, O)), o(i, i);
                  }
                }
                get parent() {
                  return this._parent;
                }
                get name() {
                  return this._name;
                }
                get(t) {
                  const e = this.getZoneWith(t);
                  if (e) return e._properties[t];
                }
                getZoneWith(t) {
                  let e = this;
                  for (; e; ) {
                    if (e._properties.hasOwnProperty(t)) return e;
                    e = e._parent;
                  }
                  return null;
                }
                fork(t) {
                  if (!t) throw new Error("ZoneSpec required!");
                  return this._zoneDelegate.fork(this, t);
                }
                wrap(t, e) {
                  if ("function" != typeof t)
                    throw new Error("Expecting function got: " + t);
                  const n = this._zoneDelegate.intercept(this, t, e),
                    o = this;
                  return function () {
                    return o.runGuarded(n, this, arguments, e);
                  };
                }
                run(t, e, n, o) {
                  z = { parent: z, zone: this };
                  try {
                    return this._zoneDelegate.invoke(this, t, e, n, o);
                  } finally {
                    z = z.parent;
                  }
                }
                runGuarded(t, e = null, n, o) {
                  z = { parent: z, zone: this };
                  try {
                    try {
                      return this._zoneDelegate.invoke(this, t, e, n, o);
                    } catch (r) {
                      if (this._zoneDelegate.handleError(this, r)) throw r;
                    }
                  } finally {
                    z = z.parent;
                  }
                }
                runTask(t, e, n) {
                  if (t.zone != this)
                    throw new Error(
                      "A task can only be run in the zone of creation! (Creation: " +
                        (t.zone || _).name +
                        "; Execution: " +
                        this.name +
                        ")"
                    );
                  if (t.state === T && (t.type === C || t.type === P)) return;
                  const o = t.state != E;
                  o && t._transitionTo(E, b), t.runCount++;
                  const r = I;
                  (I = t), (z = { parent: z, zone: this });
                  try {
                    t.type == P &&
                      t.data &&
                      !t.data.isPeriodic &&
                      (t.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, t, e, n);
                    } catch (i) {
                      if (this._zoneDelegate.handleError(this, i)) throw i;
                    }
                  } finally {
                    t.state !== T &&
                      t.state !== S &&
                      (t.type == C || (t.data && t.data.isPeriodic)
                        ? o && t._transitionTo(b, E)
                        : ((t.runCount = 0),
                          this._updateTaskCount(t, -1),
                          o && t._transitionTo(T, E, T))),
                      (z = z.parent),
                      (I = r);
                  }
                }
                scheduleTask(t) {
                  if (t.zone && t.zone !== this) {
                    let e = this;
                    for (; e; ) {
                      if (e === t.zone)
                        throw Error(
                          `can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`
                        );
                      e = e.parent;
                    }
                  }
                  t._transitionTo(k, T);
                  const e = [];
                  (t._zoneDelegates = e), (t._zone = this);
                  try {
                    t = this._zoneDelegate.scheduleTask(this, t);
                  } catch (n) {
                    throw (
                      (t._transitionTo(S, k, T),
                      this._zoneDelegate.handleError(this, n),
                      n)
                    );
                  }
                  return (
                    t._zoneDelegates === e && this._updateTaskCount(t, 1),
                    t.state == k && t._transitionTo(b, k),
                    t
                  );
                }
                scheduleMicroTask(t, e, n, o) {
                  return this.scheduleTask(new u(D, t, e, n, o, void 0));
                }
                scheduleMacroTask(t, e, n, o, r) {
                  return this.scheduleTask(new u(P, t, e, n, o, r));
                }
                scheduleEventTask(t, e, n, o, r) {
                  return this.scheduleTask(new u(C, t, e, n, o, r));
                }
                cancelTask(t) {
                  if (t.zone != this)
                    throw new Error(
                      "A task can only be cancelled in the zone of creation! (Creation: " +
                        (t.zone || _).name +
                        "; Execution: " +
                        this.name +
                        ")"
                    );
                  t._transitionTo(w, b, E);
                  try {
                    this._zoneDelegate.cancelTask(this, t);
                  } catch (e) {
                    throw (
                      (t._transitionTo(S, w),
                      this._zoneDelegate.handleError(this, e),
                      e)
                    );
                  }
                  return (
                    this._updateTaskCount(t, -1),
                    t._transitionTo(T, w),
                    (t.runCount = 0),
                    t
                  );
                }
                _updateTaskCount(t, e) {
                  const n = t._zoneDelegates;
                  -1 == e && (t._zoneDelegates = null);
                  for (let o = 0; o < n.length; o++)
                    n[o]._updateTaskCount(t.type, e);
                }
              }
              a.__symbol__ = i;
              const c = {
                name: "",
                onHasTask: (t, e, n, o) => t.hasTask(n, o),
                onScheduleTask: (t, e, n, o) => t.scheduleTask(n, o),
                onInvokeTask: (t, e, n, o, r, i) => t.invokeTask(n, o, r, i),
                onCancelTask: (t, e, n, o) => t.cancelTask(n, o),
              };
              class l {
                constructor(t, e, n) {
                  (this._taskCounts = {
                    microTask: 0,
                    macroTask: 0,
                    eventTask: 0,
                  }),
                    (this.zone = t),
                    (this._parentDelegate = e),
                    (this._forkZS = n && (n && n.onFork ? n : e._forkZS)),
                    (this._forkDlgt = n && (n.onFork ? e : e._forkDlgt)),
                    (this._forkCurrZone =
                      n && (n.onFork ? this.zone : e._forkCurrZone)),
                    (this._interceptZS =
                      n && (n.onIntercept ? n : e._interceptZS)),
                    (this._interceptDlgt =
                      n && (n.onIntercept ? e : e._interceptDlgt)),
                    (this._interceptCurrZone =
                      n && (n.onIntercept ? this.zone : e._interceptCurrZone)),
                    (this._invokeZS = n && (n.onInvoke ? n : e._invokeZS)),
                    (this._invokeDlgt = n && (n.onInvoke ? e : e._invokeDlgt)),
                    (this._invokeCurrZone =
                      n && (n.onInvoke ? this.zone : e._invokeCurrZone)),
                    (this._handleErrorZS =
                      n && (n.onHandleError ? n : e._handleErrorZS)),
                    (this._handleErrorDlgt =
                      n && (n.onHandleError ? e : e._handleErrorDlgt)),
                    (this._handleErrorCurrZone =
                      n &&
                      (n.onHandleError ? this.zone : e._handleErrorCurrZone)),
                    (this._scheduleTaskZS =
                      n && (n.onScheduleTask ? n : e._scheduleTaskZS)),
                    (this._scheduleTaskDlgt =
                      n && (n.onScheduleTask ? e : e._scheduleTaskDlgt)),
                    (this._scheduleTaskCurrZone =
                      n &&
                      (n.onScheduleTask ? this.zone : e._scheduleTaskCurrZone)),
                    (this._invokeTaskZS =
                      n && (n.onInvokeTask ? n : e._invokeTaskZS)),
                    (this._invokeTaskDlgt =
                      n && (n.onInvokeTask ? e : e._invokeTaskDlgt)),
                    (this._invokeTaskCurrZone =
                      n &&
                      (n.onInvokeTask ? this.zone : e._invokeTaskCurrZone)),
                    (this._cancelTaskZS =
                      n && (n.onCancelTask ? n : e._cancelTaskZS)),
                    (this._cancelTaskDlgt =
                      n && (n.onCancelTask ? e : e._cancelTaskDlgt)),
                    (this._cancelTaskCurrZone =
                      n &&
                      (n.onCancelTask ? this.zone : e._cancelTaskCurrZone)),
                    (this._hasTaskZS = null),
                    (this._hasTaskDlgt = null),
                    (this._hasTaskDlgtOwner = null),
                    (this._hasTaskCurrZone = null);
                  const o = n && n.onHasTask;
                  (o || (e && e._hasTaskZS)) &&
                    ((this._hasTaskZS = o ? n : c),
                    (this._hasTaskDlgt = e),
                    (this._hasTaskDlgtOwner = this),
                    (this._hasTaskCurrZone = t),
                    n.onScheduleTask ||
                      ((this._scheduleTaskZS = c),
                      (this._scheduleTaskDlgt = e),
                      (this._scheduleTaskCurrZone = this.zone)),
                    n.onInvokeTask ||
                      ((this._invokeTaskZS = c),
                      (this._invokeTaskDlgt = e),
                      (this._invokeTaskCurrZone = this.zone)),
                    n.onCancelTask ||
                      ((this._cancelTaskZS = c),
                      (this._cancelTaskDlgt = e),
                      (this._cancelTaskCurrZone = this.zone)));
                }
                fork(t, e) {
                  return this._forkZS
                    ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e)
                    : new a(t, e);
                }
                intercept(t, e, n) {
                  return this._interceptZS
                    ? this._interceptZS.onIntercept(
                        this._interceptDlgt,
                        this._interceptCurrZone,
                        t,
                        e,
                        n
                      )
                    : e;
                }
                invoke(t, e, n, o, r) {
                  return this._invokeZS
                    ? this._invokeZS.onInvoke(
                        this._invokeDlgt,
                        this._invokeCurrZone,
                        t,
                        e,
                        n,
                        o,
                        r
                      )
                    : e.apply(n, o);
                }
                handleError(t, e) {
                  return (
                    !this._handleErrorZS ||
                    this._handleErrorZS.onHandleError(
                      this._handleErrorDlgt,
                      this._handleErrorCurrZone,
                      t,
                      e
                    )
                  );
                }
                scheduleTask(t, e) {
                  let n = e;
                  if (this._scheduleTaskZS)
                    this._hasTaskZS &&
                      n._zoneDelegates.push(this._hasTaskDlgtOwner),
                      (n = this._scheduleTaskZS.onScheduleTask(
                        this._scheduleTaskDlgt,
                        this._scheduleTaskCurrZone,
                        t,
                        e
                      )),
                      n || (n = e);
                  else if (e.scheduleFn) e.scheduleFn(e);
                  else {
                    if (e.type != D)
                      throw new Error("Task is missing scheduleFn.");
                    v(e);
                  }
                  return n;
                }
                invokeTask(t, e, n, o) {
                  return this._invokeTaskZS
                    ? this._invokeTaskZS.onInvokeTask(
                        this._invokeTaskDlgt,
                        this._invokeTaskCurrZone,
                        t,
                        e,
                        n,
                        o
                      )
                    : e.callback.apply(n, o);
                }
                cancelTask(t, e) {
                  let n;
                  if (this._cancelTaskZS)
                    n = this._cancelTaskZS.onCancelTask(
                      this._cancelTaskDlgt,
                      this._cancelTaskCurrZone,
                      t,
                      e
                    );
                  else {
                    if (!e.cancelFn) throw Error("Task is not cancelable");
                    n = e.cancelFn(e);
                  }
                  return n;
                }
                hasTask(t, e) {
                  try {
                    this._hasTaskZS &&
                      this._hasTaskZS.onHasTask(
                        this._hasTaskDlgt,
                        this._hasTaskCurrZone,
                        t,
                        e
                      );
                  } catch (n) {
                    this.handleError(t, n);
                  }
                }
                _updateTaskCount(t, e) {
                  const n = this._taskCounts,
                    o = n[t],
                    r = (n[t] = o + e);
                  if (r < 0)
                    throw new Error("More tasks executed then were scheduled.");
                  (0 != o && 0 != r) ||
                    this.hasTask(this.zone, {
                      microTask: n.microTask > 0,
                      macroTask: n.macroTask > 0,
                      eventTask: n.eventTask > 0,
                      change: t,
                    });
                }
              }
              class u {
                constructor(e, n, o, r, i, s) {
                  if (
                    ((this._zone = null),
                    (this.runCount = 0),
                    (this._zoneDelegates = null),
                    (this._state = "notScheduled"),
                    (this.type = e),
                    (this.source = n),
                    (this.data = r),
                    (this.scheduleFn = i),
                    (this.cancelFn = s),
                    !o)
                  )
                    throw new Error("callback is not defined");
                  this.callback = o;
                  const a = this;
                  this.invoke =
                    e === C && r && r.useG
                      ? u.invokeTask
                      : function () {
                          return u.invokeTask.call(t, a, this, arguments);
                        };
                }
                static invokeTask(t, e, n) {
                  t || (t = this), x++;
                  try {
                    return t.runCount++, t.zone.runTask(t, e, n);
                  } finally {
                    1 == x && y(), x--;
                  }
                }
                get zone() {
                  return this._zone;
                }
                get state() {
                  return this._state;
                }
                cancelScheduleRequest() {
                  this._transitionTo(T, k);
                }
                _transitionTo(t, e, n) {
                  if (this._state !== e && this._state !== n)
                    throw new Error(
                      `${this.type} '${
                        this.source
                      }': can not transition to '${t}', expecting state '${e}'${
                        n ? " or '" + n + "'" : ""
                      }, was '${this._state}'.`
                    );
                  (this._state = t), t == T && (this._zoneDelegates = null);
                }
                toString() {
                  return this.data && void 0 !== this.data.handleId
                    ? this.data.handleId.toString()
                    : Object.prototype.toString.call(this);
                }
                toJSON() {
                  return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount,
                  };
                }
              }
              const h = i("setTimeout"),
                p = i("Promise"),
                f = i("then");
              let d,
                g = [],
                m = !1;
              function v(e) {
                if (0 === x && 0 === g.length)
                  if ((d || (t[p] && (d = t[p].resolve(0))), d)) {
                    let t = d[f];
                    t || (t = d.then), t.call(d, y);
                  } else t[h](y, 0);
                e && g.push(e);
              }
              function y() {
                if (!m) {
                  for (m = !0; g.length; ) {
                    const e = g;
                    g = [];
                    for (let n = 0; n < e.length; n++) {
                      const o = e[n];
                      try {
                        o.zone.runTask(o, null, null);
                      } catch (t) {
                        O.onUnhandledError(t);
                      }
                    }
                  }
                  O.microtaskDrainDone(), (m = !1);
                }
              }
              const _ = { name: "NO ZONE" },
                T = "notScheduled",
                k = "scheduling",
                b = "scheduled",
                E = "running",
                w = "canceling",
                S = "unknown",
                D = "microTask",
                P = "macroTask",
                C = "eventTask",
                Z = {},
                O = {
                  symbol: i,
                  currentZoneFrame: () => z,
                  onUnhandledError: A,
                  microtaskDrainDone: A,
                  scheduleMicroTask: v,
                  showUncaughtError: () =>
                    !a[i("ignoreConsoleErrorUncaughtError")],
                  patchEventTarget: () => [],
                  patchOnProperties: A,
                  patchMethod: () => A,
                  bindArguments: () => [],
                  patchThen: () => A,
                  patchMacroTask: () => A,
                  setNativePromise: (t) => {
                    t && "function" == typeof t.resolve && (d = t.resolve(0));
                  },
                  patchEventPrototype: () => A,
                  isIEOrEdge: () => !1,
                  getGlobalObjects: () => {},
                  ObjectDefineProperty: () => A,
                  ObjectGetOwnPropertyDescriptor: () => {},
                  ObjectCreate: () => {},
                  ArraySlice: () => [],
                  patchClass: () => A,
                  wrapWithCurrentZone: () => A,
                  filterProperties: () => [],
                  attachOriginToPatched: () => A,
                  _redefineProperty: () => A,
                  patchCallbacks: () => A,
                };
              let z = { parent: null, zone: new a(null, null) },
                I = null,
                x = 0;
              function A() {}
              o("Zone", "Zone"), (t.Zone = a);
            })(
              ("undefined" != typeof window && window) ||
                ("undefined" != typeof self && self) ||
                global
            ),
              Zone.__load_patch("ZoneAwarePromise", (t, e, n) => {
                const o = Object.getOwnPropertyDescriptor,
                  r = Object.defineProperty,
                  i = n.symbol,
                  s = [],
                  a =
                    !0 === t[i("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                  c = i("Promise"),
                  l = i("then");
                (n.onUnhandledError = (t) => {
                  if (n.showUncaughtError()) {
                    const e = t && t.rejection;
                    e
                      ? console.error(
                          "Unhandled Promise rejection:",
                          e instanceof Error ? e.message : e,
                          "; Zone:",
                          t.zone.name,
                          "; Task:",
                          t.task && t.task.source,
                          "; Value:",
                          e,
                          e instanceof Error ? e.stack : void 0
                        )
                      : console.error(t);
                  }
                }),
                  (n.microtaskDrainDone = () => {
                    for (; s.length; ) {
                      const e = s.shift();
                      try {
                        e.zone.runGuarded(() => {
                          throw e;
                        });
                      } catch (t) {
                        h(t);
                      }
                    }
                  });
                const u = i("unhandledPromiseRejectionHandler");
                function h(t) {
                  n.onUnhandledError(t);
                  try {
                    const n = e[u];
                    "function" == typeof n && n.call(this, t);
                  } catch (o) {}
                }
                function p(t) {
                  return t && t.then;
                }
                function f(t) {
                  return t;
                }
                function d(t) {
                  return P.reject(t);
                }
                const g = i("state"),
                  m = i("value"),
                  v = i("finally"),
                  y = i("parentPromiseValue"),
                  _ = i("parentPromiseState");
                function T(t, e) {
                  return (n) => {
                    try {
                      b(t, e, n);
                    } catch (o) {
                      b(t, !1, o);
                    }
                  };
                }
                const k = i("currentTaskTrace");
                function b(t, o, i) {
                  const c = (function () {
                    let t = !1;
                    return function (e) {
                      return function () {
                        t || ((t = !0), e.apply(null, arguments));
                      };
                    };
                  })();
                  if (t === i)
                    throw new TypeError("Promise resolved with itself");
                  if (null === t[g]) {
                    let h = null;
                    try {
                      ("object" != typeof i && "function" != typeof i) ||
                        (h = i && i.then);
                    } catch (u) {
                      return (
                        c(() => {
                          b(t, !1, u);
                        })(),
                        t
                      );
                    }
                    if (
                      !1 !== o &&
                      i instanceof P &&
                      i.hasOwnProperty(g) &&
                      i.hasOwnProperty(m) &&
                      null !== i[g]
                    )
                      w(i), b(t, i[g], i[m]);
                    else if (!1 !== o && "function" == typeof h)
                      try {
                        h.call(i, c(T(t, o)), c(T(t, !1)));
                      } catch (u) {
                        c(() => {
                          b(t, !1, u);
                        })();
                      }
                    else {
                      t[g] = o;
                      const c = t[m];
                      if (
                        ((t[m] = i),
                        t[v] === v &&
                          !0 === o &&
                          ((t[g] = t[_]), (t[m] = t[y])),
                        !1 === o && i instanceof Error)
                      ) {
                        const t =
                          e.currentTask &&
                          e.currentTask.data &&
                          e.currentTask.data.__creationTrace__;
                        t &&
                          r(i, k, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: t,
                          });
                      }
                      for (let e = 0; e < c.length; )
                        S(t, c[e++], c[e++], c[e++], c[e++]);
                      if (0 == c.length && 0 == o) {
                        t[g] = 0;
                        let o = i;
                        if (!a)
                          try {
                            throw new Error(
                              "Uncaught (in promise): " +
                                ((l = i) &&
                                l.toString === Object.prototype.toString
                                  ? ((l.constructor && l.constructor.name) ||
                                      "") +
                                    ": " +
                                    JSON.stringify(l)
                                  : l
                                  ? l.toString()
                                  : Object.prototype.toString.call(l)) +
                                (i && i.stack ? "\n" + i.stack : "")
                            );
                          } catch (u) {
                            o = u;
                          }
                        (o.rejection = i),
                          (o.promise = t),
                          (o.zone = e.current),
                          (o.task = e.currentTask),
                          s.push(o),
                          n.scheduleMicroTask();
                      }
                    }
                  }
                  var l;
                  return t;
                }
                const E = i("rejectionHandledHandler");
                function w(t) {
                  if (0 === t[g]) {
                    try {
                      const n = e[E];
                      n &&
                        "function" == typeof n &&
                        n.call(this, { rejection: t[m], promise: t });
                    } catch (n) {}
                    t[g] = !1;
                    for (let e = 0; e < s.length; e++)
                      t === s[e].promise && s.splice(e, 1);
                  }
                }
                function S(t, e, n, o, r) {
                  w(t);
                  const i = t[g],
                    s = i
                      ? "function" == typeof o
                        ? o
                        : f
                      : "function" == typeof r
                      ? r
                      : d;
                  e.scheduleMicroTask(
                    "Promise.then",
                    () => {
                      try {
                        const o = t[m],
                          r = !!n && v === n[v];
                        r && ((n[y] = o), (n[_] = i));
                        const a = e.run(
                          s,
                          void 0,
                          r && s !== d && s !== f ? [] : [o]
                        );
                        b(n, !0, a);
                      } catch (o) {
                        b(n, !1, o);
                      }
                    },
                    n
                  );
                }
                const D = function () {};
                class P {
                  static toString() {
                    return "function ZoneAwarePromise() { [native code] }";
                  }
                  static resolve(t) {
                    return b(new this(null), !0, t);
                  }
                  static reject(t) {
                    return b(new this(null), !1, t);
                  }
                  static race(t) {
                    let e,
                      n,
                      o = new this((t, o) => {
                        (e = t), (n = o);
                      });
                    function r(t) {
                      e(t);
                    }
                    function i(t) {
                      n(t);
                    }
                    for (let s of t)
                      p(s) || (s = this.resolve(s)), s.then(r, i);
                    return o;
                  }
                  static all(t) {
                    return P.allWithCallback(t);
                  }
                  static allSettled(t) {
                    return (
                      this && this.prototype instanceof P ? this : P
                    ).allWithCallback(t, {
                      thenCallback: (t) => ({ status: "fulfilled", value: t }),
                      errorCallback: (t) => ({ status: "rejected", reason: t }),
                    });
                  }
                  static allWithCallback(t, e) {
                    let n,
                      o,
                      r = new this((t, e) => {
                        (n = t), (o = e);
                      }),
                      i = 2,
                      s = 0;
                    const a = [];
                    for (let l of t) {
                      p(l) || (l = this.resolve(l));
                      const t = s;
                      try {
                        l.then(
                          (o) => {
                            (a[t] = e ? e.thenCallback(o) : o),
                              i--,
                              0 === i && n(a);
                          },
                          (r) => {
                            e
                              ? ((a[t] = e.errorCallback(r)),
                                i--,
                                0 === i && n(a))
                              : o(r);
                          }
                        );
                      } catch (c) {
                        o(c);
                      }
                      i++, s++;
                    }
                    return (i -= 2), 0 === i && n(a), r;
                  }
                  constructor(t) {
                    const e = this;
                    if (!(e instanceof P))
                      throw new Error("Must be an instanceof Promise.");
                    (e[g] = null), (e[m] = []);
                    try {
                      t && t(T(e, !0), T(e, !1));
                    } catch (n) {
                      b(e, !1, n);
                    }
                  }
                  get [Symbol.toStringTag]() {
                    return "Promise";
                  }
                  get [Symbol.species]() {
                    return P;
                  }
                  then(t, n) {
                    let o = this.constructor[Symbol.species];
                    (o && "function" == typeof o) ||
                      (o = this.constructor || P);
                    const r = new o(D),
                      i = e.current;
                    return (
                      null == this[g]
                        ? this[m].push(i, r, t, n)
                        : S(this, i, r, t, n),
                      r
                    );
                  }
                  catch(t) {
                    return this.then(null, t);
                  }
                  finally(t) {
                    let n = this.constructor[Symbol.species];
                    (n && "function" == typeof n) || (n = P);
                    const o = new n(D);
                    o[v] = v;
                    const r = e.current;
                    return (
                      null == this[g]
                        ? this[m].push(r, o, t, t)
                        : S(this, r, o, t, t),
                      o
                    );
                  }
                }
                (P.resolve = P.resolve),
                  (P.reject = P.reject),
                  (P.race = P.race),
                  (P.all = P.all);
                const C = (t[c] = t.Promise),
                  Z = e.__symbol__("ZoneAwarePromise");
                let O = o(t, "Promise");
                (O && !O.configurable) ||
                  (O && delete O.writable,
                  O && delete O.value,
                  O || (O = { configurable: !0, enumerable: !0 }),
                  (O.get = function () {
                    return t[Z] ? t[Z] : t[c];
                  }),
                  (O.set = function (e) {
                    e === P
                      ? (t[Z] = e)
                      : ((t[c] = e),
                        e.prototype[l] || I(e),
                        n.setNativePromise(e));
                  }),
                  r(t, "Promise", O)),
                  (t.Promise = P);
                const z = i("thenPatched");
                function I(t) {
                  const e = t.prototype,
                    n = o(e, "then");
                  if (n && (!1 === n.writable || !n.configurable)) return;
                  const r = e.then;
                  (e[l] = r),
                    (t.prototype.then = function (t, e) {
                      return new P((t, e) => {
                        r.call(this, t, e);
                      }).then(t, e);
                    }),
                    (t[z] = !0);
                }
                if (((n.patchThen = I), C)) {
                  I(C);
                  const e = t.fetch;
                  "function" == typeof e &&
                    ((t[n.symbol("fetch")] = e),
                    (t.fetch =
                      ((x = e),
                      function () {
                        let t = x.apply(this, arguments);
                        if (t instanceof P) return t;
                        let e = t.constructor;
                        return e[z] || I(e), t;
                      })));
                }
                var x;
                return (Promise[e.__symbol__("uncaughtPromiseErrors")] = s), P;
              });
            const t = Object.getOwnPropertyDescriptor,
              e = Object.defineProperty,
              n = Object.getPrototypeOf,
              o = Object.create,
              r = Array.prototype.slice,
              i = Zone.__symbol__("addEventListener"),
              s = Zone.__symbol__("removeEventListener"),
              a = Zone.__symbol__("");
            function c(t, e) {
              return Zone.current.wrap(t, e);
            }
            function l(t, e, n, o, r) {
              return Zone.current.scheduleMacroTask(t, e, n, o, r);
            }
            const u = Zone.__symbol__,
              h = "undefined" != typeof window,
              p = h ? window : void 0,
              f = (h && p) || ("object" == typeof self && self) || global,
              d = [null];
            function g(t, e) {
              for (let n = t.length - 1; n >= 0; n--)
                "function" == typeof t[n] && (t[n] = c(t[n], e + "_" + n));
              return t;
            }
            function m(t) {
              return (
                !t ||
                (!1 !== t.writable &&
                  !("function" == typeof t.get && void 0 === t.set))
              );
            }
            const v =
                "undefined" != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope,
              y =
                !("nw" in f) &&
                void 0 !== f.process &&
                "[object process]" === {}.toString.call(f.process),
              _ = !y && !v && !(!h || !p.HTMLElement),
              T =
                void 0 !== f.process &&
                "[object process]" === {}.toString.call(f.process) &&
                !v &&
                !(!h || !p.HTMLElement),
              k = {},
              b = function (t) {
                if (!(t = t || f.event)) return;
                let e = k[t.type];
                e || (e = k[t.type] = u("ON_PROPERTY" + t.type));
                const n = this || t.target || f,
                  o = n[e];
                let r;
                if (_ && n === p && "error" === t.type) {
                  const e = t;
                  (r =
                    o &&
                    o.call(
                      this,
                      e.message,
                      e.filename,
                      e.lineno,
                      e.colno,
                      e.error
                    )),
                    !0 === r && t.preventDefault();
                } else
                  (r = o && o.apply(this, arguments)),
                    null == r || r || t.preventDefault();
                return r;
              };
            function E(n, o, r) {
              let i = t(n, o);
              if (
                (!i &&
                  r &&
                  t(r, o) &&
                  (i = { enumerable: !0, configurable: !0 }),
                !i || !i.configurable)
              )
                return;
              const s = u("on" + o + "patched");
              if (n.hasOwnProperty(s) && n[s]) return;
              delete i.writable, delete i.value;
              const a = i.get,
                c = i.set,
                l = o.substr(2);
              let h = k[l];
              h || (h = k[l] = u("ON_PROPERTY" + l)),
                (i.set = function (t) {
                  let e = this;
                  e || n !== f || (e = f),
                    e &&
                      (e[h] && e.removeEventListener(l, b),
                      c && c.apply(e, d),
                      "function" == typeof t
                        ? ((e[h] = t), e.addEventListener(l, b, !1))
                        : (e[h] = null));
                }),
                (i.get = function () {
                  let t = this;
                  if ((t || n !== f || (t = f), !t)) return null;
                  const e = t[h];
                  if (e) return e;
                  if (a) {
                    let e = a && a.call(this);
                    if (e)
                      return (
                        i.set.call(this, e),
                        "function" == typeof t.removeAttribute &&
                          t.removeAttribute(o),
                        e
                      );
                  }
                  return null;
                }),
                e(n, o, i),
                (n[s] = !0);
            }
            function w(t, e, n) {
              if (e) for (let o = 0; o < e.length; o++) E(t, "on" + e[o], n);
              else {
                const e = [];
                for (const n in t) "on" == n.substr(0, 2) && e.push(n);
                for (let o = 0; o < e.length; o++) E(t, e[o], n);
              }
            }
            const S = u("originalInstance");
            function D(t) {
              const n = f[t];
              if (!n) return;
              (f[u(t)] = n),
                (f[t] = function () {
                  const e = g(arguments, t);
                  switch (e.length) {
                    case 0:
                      this[S] = new n();
                      break;
                    case 1:
                      this[S] = new n(e[0]);
                      break;
                    case 2:
                      this[S] = new n(e[0], e[1]);
                      break;
                    case 3:
                      this[S] = new n(e[0], e[1], e[2]);
                      break;
                    case 4:
                      this[S] = new n(e[0], e[1], e[2], e[3]);
                      break;
                    default:
                      throw new Error("Arg list too long.");
                  }
                }),
                Z(f[t], n);
              const o = new n(function () {});
              let r;
              for (r in o)
                ("XMLHttpRequest" === t && "responseBlob" === r) ||
                  (function (n) {
                    "function" == typeof o[n]
                      ? (f[t].prototype[n] = function () {
                          return this[S][n].apply(this[S], arguments);
                        })
                      : e(f[t].prototype, n, {
                          set: function (e) {
                            "function" == typeof e
                              ? ((this[S][n] = c(e, t + "." + n)),
                                Z(this[S][n], e))
                              : (this[S][n] = e);
                          },
                          get: function () {
                            return this[S][n];
                          },
                        });
                  })(r);
              for (r in n)
                "prototype" !== r && n.hasOwnProperty(r) && (f[t][r] = n[r]);
            }
            function P(e, o, r) {
              let i = e;
              for (; i && !i.hasOwnProperty(o); ) i = n(i);
              !i && e[o] && (i = e);
              const s = u(o);
              let a = null;
              if (i && !(a = i[s]) && ((a = i[s] = i[o]), m(i && t(i, o)))) {
                const t = r(a, s, o);
                (i[o] = function () {
                  return t(this, arguments);
                }),
                  Z(i[o], a);
              }
              return a;
            }
            function C(t, e, n) {
              let o = null;
              function r(t) {
                const e = t.data;
                return (
                  (e.args[e.cbIdx] = function () {
                    t.invoke.apply(this, arguments);
                  }),
                  o.apply(e.target, e.args),
                  t
                );
              }
              o = P(
                t,
                e,
                (t) =>
                  function (e, o) {
                    const i = n(e, o);
                    return i.cbIdx >= 0 && "function" == typeof o[i.cbIdx]
                      ? l(i.name, o[i.cbIdx], i, r)
                      : t.apply(e, o);
                  }
              );
            }
            function Z(t, e) {
              t[u("OriginalDelegate")] = e;
            }
            let O = !1,
              z = !1;
            function I() {
              try {
                const t = p.navigator.userAgent;
                if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/"))
                  return !0;
              } catch (t) {}
              return !1;
            }
            function x() {
              if (O) return z;
              O = !0;
              try {
                const t = p.navigator.userAgent;
                (-1 === t.indexOf("MSIE ") &&
                  -1 === t.indexOf("Trident/") &&
                  -1 === t.indexOf("Edge/")) ||
                  (z = !0);
              } catch (t) {}
              return z;
            }
            Zone.__load_patch("toString", (t) => {
              const e = Function.prototype.toString,
                n = u("OriginalDelegate"),
                o = u("Promise"),
                r = u("Error"),
                i = function () {
                  if ("function" == typeof this) {
                    const i = this[n];
                    if (i)
                      return "function" == typeof i
                        ? e.call(i)
                        : Object.prototype.toString.call(i);
                    if (this === Promise) {
                      const n = t[o];
                      if (n) return e.call(n);
                    }
                    if (this === Error) {
                      const n = t[r];
                      if (n) return e.call(n);
                    }
                  }
                  return e.call(this);
                };
              (i[n] = e), (Function.prototype.toString = i);
              const s = Object.prototype.toString;
              Object.prototype.toString = function () {
                return this instanceof Promise
                  ? "[object Promise]"
                  : s.call(this);
              };
            });
            let A = !1;
            if ("undefined" != typeof window)
              try {
                const t = Object.defineProperty({}, "passive", {
                  get: function () {
                    A = !0;
                  },
                });
                window.addEventListener("test", t, t),
                  window.removeEventListener("test", t, t);
              } catch (at) {
                A = !1;
              }
            const R = { useG: !0 },
              N = {},
              j = {},
              M = new RegExp("^" + a + "(\\w+)(true|false)$"),
              L = u("propagationStopped");
            function F(t, e) {
              const n = (e ? e(t) : t) + "false",
                o = (e ? e(t) : t) + "true",
                r = a + n,
                i = a + o;
              (N[t] = {}), (N[t].false = r), (N[t].true = i);
            }
            function H(t, e, o) {
              const r = (o && o.add) || "addEventListener",
                i = (o && o.rm) || "removeEventListener",
                s = (o && o.listeners) || "eventListeners",
                c = (o && o.rmAll) || "removeAllListeners",
                l = u(r),
                h = "." + r + ":",
                p = function (t, e, n) {
                  if (t.isRemoved) return;
                  const o = t.callback;
                  "object" == typeof o &&
                    o.handleEvent &&
                    ((t.callback = (t) => o.handleEvent(t)),
                    (t.originalDelegate = o)),
                    t.invoke(t, e, [n]);
                  const r = t.options;
                  r &&
                    "object" == typeof r &&
                    r.once &&
                    e[i].call(
                      e,
                      n.type,
                      t.originalDelegate ? t.originalDelegate : t.callback,
                      r
                    );
                },
                f = function (e) {
                  if (!(e = e || t.event)) return;
                  const n = this || e.target || t,
                    o = n[N[e.type].false];
                  if (o)
                    if (1 === o.length) p(o[0], n, e);
                    else {
                      const t = o.slice();
                      for (let o = 0; o < t.length && (!e || !0 !== e[L]); o++)
                        p(t[o], n, e);
                    }
                },
                d = function (e) {
                  if (!(e = e || t.event)) return;
                  const n = this || e.target || t,
                    o = n[N[e.type].true];
                  if (o)
                    if (1 === o.length) p(o[0], n, e);
                    else {
                      const t = o.slice();
                      for (let o = 0; o < t.length && (!e || !0 !== e[L]); o++)
                        p(t[o], n, e);
                    }
                };
              function g(e, o) {
                if (!e) return !1;
                let p = !0;
                o && void 0 !== o.useG && (p = o.useG);
                const g = o && o.vh;
                let m = !0;
                o && void 0 !== o.chkDup && (m = o.chkDup);
                let v = !1;
                o && void 0 !== o.rt && (v = o.rt);
                let _ = e;
                for (; _ && !_.hasOwnProperty(r); ) _ = n(_);
                if ((!_ && e[r] && (_ = e), !_)) return !1;
                if (_[l]) return !1;
                const T = o && o.eventNameToString,
                  k = {},
                  b = (_[l] = _[r]),
                  E = (_[u(i)] = _[i]),
                  w = (_[u(s)] = _[s]),
                  S = (_[u(c)] = _[c]);
                let D;
                function P(t, e) {
                  return !A && "object" == typeof t && t
                    ? !!t.capture
                    : A && e
                    ? "boolean" == typeof t
                      ? { capture: t, passive: !0 }
                      : t
                      ? "object" == typeof t && !1 !== t.passive
                        ? Object.assign(Object.assign({}, t), { passive: !0 })
                        : t
                      : { passive: !0 }
                    : t;
                }
                o && o.prepend && (D = _[u(o.prepend)] = _[o.prepend]);
                const C = p
                    ? function (t) {
                        if (!k.isExisting)
                          return b.call(
                            k.target,
                            k.eventName,
                            k.capture ? d : f,
                            k.options
                          );
                      }
                    : function (t) {
                        return b.call(
                          k.target,
                          k.eventName,
                          t.invoke,
                          k.options
                        );
                      },
                  O = p
                    ? function (t) {
                        if (!t.isRemoved) {
                          const e = N[t.eventName];
                          let n;
                          e && (n = e[t.capture ? "true" : "false"]);
                          const o = n && t.target[n];
                          if (o)
                            for (let r = 0; r < o.length; r++)
                              if (o[r] === t) {
                                o.splice(r, 1),
                                  (t.isRemoved = !0),
                                  0 === o.length &&
                                    ((t.allRemoved = !0), (t.target[n] = null));
                                break;
                              }
                        }
                        if (t.allRemoved)
                          return E.call(
                            t.target,
                            t.eventName,
                            t.capture ? d : f,
                            t.options
                          );
                      }
                    : function (t) {
                        return E.call(
                          t.target,
                          t.eventName,
                          t.invoke,
                          t.options
                        );
                      },
                  z =
                    o && o.diff
                      ? o.diff
                      : function (t, e) {
                          const n = typeof e;
                          return (
                            ("function" === n && t.callback === e) ||
                            ("object" === n && t.originalDelegate === e)
                          );
                        },
                  I = Zone[u("BLACK_LISTED_EVENTS")],
                  x = t[u("PASSIVE_EVENTS")],
                  L = function (e, n, r, i, s = !1, a = !1) {
                    return function () {
                      const c = this || t;
                      let l = arguments[0];
                      o && o.transferEventName && (l = o.transferEventName(l));
                      let u = arguments[1];
                      if (!u) return e.apply(this, arguments);
                      if (y && "uncaughtException" === l)
                        return e.apply(this, arguments);
                      let h = !1;
                      if ("function" != typeof u) {
                        if (!u.handleEvent) return e.apply(this, arguments);
                        h = !0;
                      }
                      if (g && !g(e, u, c, arguments)) return;
                      const f = A && !!x && -1 !== x.indexOf(l),
                        d = P(arguments[2], f);
                      if (I)
                        for (let t = 0; t < I.length; t++)
                          if (l === I[t])
                            return f
                              ? e.call(c, l, u, d)
                              : e.apply(this, arguments);
                      const v = !!d && ("boolean" == typeof d || d.capture),
                        _ = !(!d || "object" != typeof d) && d.once,
                        b = Zone.current;
                      let E = N[l];
                      E || (F(l, T), (E = N[l]));
                      const w = E[v ? "true" : "false"];
                      let S,
                        D = c[w],
                        C = !1;
                      if (D) {
                        if (((C = !0), m))
                          for (let t = 0; t < D.length; t++)
                            if (z(D[t], u)) return;
                      } else D = c[w] = [];
                      const Z = c.constructor.name,
                        O = j[Z];
                      O && (S = O[l]),
                        S || (S = Z + n + (T ? T(l) : l)),
                        (k.options = d),
                        _ && (k.options.once = !1),
                        (k.target = c),
                        (k.capture = v),
                        (k.eventName = l),
                        (k.isExisting = C);
                      const M = p ? R : void 0;
                      M && (M.taskData = k);
                      const L = b.scheduleEventTask(S, u, M, r, i);
                      return (
                        (k.target = null),
                        M && (M.taskData = null),
                        _ && (d.once = !0),
                        (A || "boolean" != typeof L.options) && (L.options = d),
                        (L.target = c),
                        (L.capture = v),
                        (L.eventName = l),
                        h && (L.originalDelegate = u),
                        a ? D.unshift(L) : D.push(L),
                        s ? c : void 0
                      );
                    };
                  };
                return (
                  (_[r] = L(b, h, C, O, v)),
                  D &&
                    (_.prependListener = L(
                      D,
                      ".prependListener:",
                      function (t) {
                        return D.call(
                          k.target,
                          k.eventName,
                          t.invoke,
                          k.options
                        );
                      },
                      O,
                      v,
                      !0
                    )),
                  (_[i] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    o && o.transferEventName && (n = o.transferEventName(n));
                    const r = arguments[2],
                      i = !!r && ("boolean" == typeof r || r.capture),
                      s = arguments[1];
                    if (!s) return E.apply(this, arguments);
                    if (g && !g(E, s, e, arguments)) return;
                    const c = N[n];
                    let l;
                    c && (l = c[i ? "true" : "false"]);
                    const u = l && e[l];
                    if (u)
                      for (let t = 0; t < u.length; t++) {
                        const o = u[t];
                        if (z(o, s))
                          return (
                            u.splice(t, 1),
                            (o.isRemoved = !0),
                            0 === u.length &&
                              ((o.allRemoved = !0),
                              (e[l] = null),
                              "string" == typeof n) &&
                              (e[a + "ON_PROPERTY" + n] = null),
                            o.zone.cancelTask(o),
                            v ? e : void 0
                          );
                      }
                    return E.apply(this, arguments);
                  }),
                  (_[s] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    o && o.transferEventName && (n = o.transferEventName(n));
                    const r = [],
                      i = W(e, T ? T(n) : n);
                    for (let t = 0; t < i.length; t++) {
                      const e = i[t];
                      r.push(
                        e.originalDelegate ? e.originalDelegate : e.callback
                      );
                    }
                    return r;
                  }),
                  (_[c] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    if (n) {
                      o && o.transferEventName && (n = o.transferEventName(n));
                      const t = N[n];
                      if (t) {
                        const o = e[t.false],
                          r = e[t.true];
                        if (o) {
                          const t = o.slice();
                          for (let e = 0; e < t.length; e++) {
                            const o = t[e];
                            this[i].call(
                              this,
                              n,
                              o.originalDelegate
                                ? o.originalDelegate
                                : o.callback,
                              o.options
                            );
                          }
                        }
                        if (r) {
                          const t = r.slice();
                          for (let e = 0; e < t.length; e++) {
                            const o = t[e];
                            this[i].call(
                              this,
                              n,
                              o.originalDelegate
                                ? o.originalDelegate
                                : o.callback,
                              o.options
                            );
                          }
                        }
                      }
                    } else {
                      const t = Object.keys(e);
                      for (let e = 0; e < t.length; e++) {
                        const n = M.exec(t[e]);
                        let o = n && n[1];
                        o && "removeListener" !== o && this[c].call(this, o);
                      }
                      this[c].call(this, "removeListener");
                    }
                    if (v) return this;
                  }),
                  Z(_[r], b),
                  Z(_[i], E),
                  S && Z(_[c], S),
                  w && Z(_[s], w),
                  !0
                );
              }
              let m = [];
              for (let n = 0; n < e.length; n++) m[n] = g(e[n], o);
              return m;
            }
            function W(t, e) {
              if (!e) {
                const n = [];
                for (let o in t) {
                  const r = M.exec(o);
                  let i = r && r[1];
                  if (i && (!e || i === e)) {
                    const e = t[o];
                    if (e) for (let t = 0; t < e.length; t++) n.push(e[t]);
                  }
                }
                return n;
              }
              let n = N[e];
              n || (F(e), (n = N[e]));
              const o = t[n.false],
                r = t[n.true];
              return o ? (r ? o.concat(r) : o.slice()) : r ? r.slice() : [];
            }
            function X(t, e) {
              const n = t.Event;
              n &&
                n.prototype &&
                e.patchMethod(
                  n.prototype,
                  "stopImmediatePropagation",
                  (t) =>
                    function (e, n) {
                      (e[L] = !0), t && t.apply(e, n);
                    }
                );
            }
            function q(t, e, n, o, r) {
              const i = Zone.__symbol__(o);
              if (e[i]) return;
              const s = (e[i] = e[o]);
              (e[o] = function (i, a, c) {
                return (
                  a &&
                    a.prototype &&
                    r.forEach(function (e) {
                      const r = `${n}.${o}::` + e,
                        i = a.prototype;
                      if (i.hasOwnProperty(e)) {
                        const n = t.ObjectGetOwnPropertyDescriptor(i, e);
                        n && n.value
                          ? ((n.value = t.wrapWithCurrentZone(n.value, r)),
                            t._redefineProperty(a.prototype, e, n))
                          : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], r));
                      } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], r));
                    }),
                  s.call(e, i, a, c)
                );
              }),
                t.attachOriginToPatched(e[o], s);
            }
            const Y = [
                "absolutedeviceorientation",
                "afterinput",
                "afterprint",
                "appinstalled",
                "beforeinstallprompt",
                "beforeprint",
                "beforeunload",
                "devicelight",
                "devicemotion",
                "deviceorientation",
                "deviceorientationabsolute",
                "deviceproximity",
                "hashchange",
                "languagechange",
                "message",
                "mozbeforepaint",
                "offline",
                "online",
                "paint",
                "pageshow",
                "pagehide",
                "popstate",
                "rejectionhandled",
                "storage",
                "unhandledrejection",
                "unload",
                "userproximity",
                "vrdisplayconnected",
                "vrdisplaydisconnected",
                "vrdisplaypresentchange",
              ],
              G = [
                "encrypted",
                "waitingforkey",
                "msneedkey",
                "mozinterruptbegin",
                "mozinterruptend",
              ],
              U = ["load"],
              V = [
                "blur",
                "error",
                "focus",
                "load",
                "resize",
                "scroll",
                "messageerror",
              ],
              B = ["bounce", "finish", "start"],
              $ = [
                "loadstart",
                "progress",
                "abort",
                "error",
                "load",
                "progress",
                "timeout",
                "loadend",
                "readystatechange",
              ],
              J = [
                "upgradeneeded",
                "complete",
                "abort",
                "success",
                "error",
                "blocked",
                "versionchange",
                "close",
              ],
              K = ["close", "error", "open", "message"],
              Q = ["error", "message"],
              tt = [
                "abort",
                "animationcancel",
                "animationend",
                "animationiteration",
                "auxclick",
                "beforeinput",
                "blur",
                "cancel",
                "canplay",
                "canplaythrough",
                "change",
                "compositionstart",
                "compositionupdate",
                "compositionend",
                "cuechange",
                "click",
                "close",
                "contextmenu",
                "curechange",
                "dblclick",
                "drag",
                "dragend",
                "dragenter",
                "dragexit",
                "dragleave",
                "dragover",
                "drop",
                "durationchange",
                "emptied",
                "ended",
                "error",
                "focus",
                "focusin",
                "focusout",
                "gotpointercapture",
                "input",
                "invalid",
                "keydown",
                "keypress",
                "keyup",
                "load",
                "loadstart",
                "loadeddata",
                "loadedmetadata",
                "lostpointercapture",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseout",
                "mouseover",
                "mouseup",
                "mousewheel",
                "orientationchange",
                "pause",
                "play",
                "playing",
                "pointercancel",
                "pointerdown",
                "pointerenter",
                "pointerleave",
                "pointerlockchange",
                "mozpointerlockchange",
                "webkitpointerlockerchange",
                "pointerlockerror",
                "mozpointerlockerror",
                "webkitpointerlockerror",
                "pointermove",
                "pointout",
                "pointerover",
                "pointerup",
                "progress",
                "ratechange",
                "reset",
                "resize",
                "scroll",
                "seeked",
                "seeking",
                "select",
                "selectionchange",
                "selectstart",
                "show",
                "sort",
                "stalled",
                "submit",
                "suspend",
                "timeupdate",
                "volumechange",
                "touchcancel",
                "touchmove",
                "touchstart",
                "touchend",
                "transitioncancel",
                "transitionend",
                "waiting",
                "wheel",
              ].concat(
                [
                  "webglcontextrestored",
                  "webglcontextlost",
                  "webglcontextcreationerror",
                ],
                ["autocomplete", "autocompleteerror"],
                ["toggle"],
                [
                  "afterscriptexecute",
                  "beforescriptexecute",
                  "DOMContentLoaded",
                  "freeze",
                  "fullscreenchange",
                  "mozfullscreenchange",
                  "webkitfullscreenchange",
                  "msfullscreenchange",
                  "fullscreenerror",
                  "mozfullscreenerror",
                  "webkitfullscreenerror",
                  "msfullscreenerror",
                  "readystatechange",
                  "visibilitychange",
                  "resume",
                ],
                Y,
                [
                  "beforecopy",
                  "beforecut",
                  "beforepaste",
                  "copy",
                  "cut",
                  "paste",
                  "dragstart",
                  "loadend",
                  "animationstart",
                  "search",
                  "transitionrun",
                  "transitionstart",
                  "webkitanimationend",
                  "webkitanimationiteration",
                  "webkitanimationstart",
                  "webkittransitionend",
                ],
                [
                  "activate",
                  "afterupdate",
                  "ariarequest",
                  "beforeactivate",
                  "beforedeactivate",
                  "beforeeditfocus",
                  "beforeupdate",
                  "cellchange",
                  "controlselect",
                  "dataavailable",
                  "datasetchanged",
                  "datasetcomplete",
                  "errorupdate",
                  "filterchange",
                  "layoutcomplete",
                  "losecapture",
                  "move",
                  "moveend",
                  "movestart",
                  "propertychange",
                  "resizeend",
                  "resizestart",
                  "rowenter",
                  "rowexit",
                  "rowsdelete",
                  "rowsinserted",
                  "command",
                  "compassneedscalibration",
                  "deactivate",
                  "help",
                  "mscontentzoom",
                  "msmanipulationstatechanged",
                  "msgesturechange",
                  "msgesturedoubletap",
                  "msgestureend",
                  "msgesturehold",
                  "msgesturestart",
                  "msgesturetap",
                  "msgotpointercapture",
                  "msinertiastart",
                  "mslostpointercapture",
                  "mspointercancel",
                  "mspointerdown",
                  "mspointerenter",
                  "mspointerhover",
                  "mspointerleave",
                  "mspointermove",
                  "mspointerout",
                  "mspointerover",
                  "mspointerup",
                  "pointerout",
                  "mssitemodejumplistitemremoved",
                  "msthumbnailclick",
                  "stop",
                  "storagecommit",
                ]
              );
            function et(t, e, n) {
              if (!n || 0 === n.length) return e;
              const o = n.filter((e) => e.target === t);
              if (!o || 0 === o.length) return e;
              const r = o[0].ignoreProperties;
              return e.filter((t) => -1 === r.indexOf(t));
            }
            function nt(t, e, n, o) {
              t && w(t, et(t, e, n), o);
            }
            function ot(t, e) {
              if (y && !T) return;
              if (Zone[t.symbol("patchEvents")]) return;
              const o = "undefined" != typeof WebSocket,
                r = e.__Zone_ignore_on_properties;
              if (_) {
                const t = window,
                  e = I ? [{ target: t, ignoreProperties: ["error"] }] : [];
                nt(t, tt.concat(["messageerror"]), r ? r.concat(e) : r, n(t)),
                  nt(Document.prototype, tt, r),
                  void 0 !== t.SVGElement && nt(t.SVGElement.prototype, tt, r),
                  nt(Element.prototype, tt, r),
                  nt(HTMLElement.prototype, tt, r),
                  nt(HTMLMediaElement.prototype, G, r),
                  nt(HTMLFrameSetElement.prototype, Y.concat(V), r),
                  nt(HTMLBodyElement.prototype, Y.concat(V), r),
                  nt(HTMLFrameElement.prototype, U, r),
                  nt(HTMLIFrameElement.prototype, U, r);
                const o = t.HTMLMarqueeElement;
                o && nt(o.prototype, B, r);
                const i = t.Worker;
                i && nt(i.prototype, Q, r);
              }
              const i = e.XMLHttpRequest;
              i && nt(i.prototype, $, r);
              const s = e.XMLHttpRequestEventTarget;
              s && nt(s && s.prototype, $, r),
                "undefined" != typeof IDBIndex &&
                  (nt(IDBIndex.prototype, J, r),
                  nt(IDBRequest.prototype, J, r),
                  nt(IDBOpenDBRequest.prototype, J, r),
                  nt(IDBDatabase.prototype, J, r),
                  nt(IDBTransaction.prototype, J, r),
                  nt(IDBCursor.prototype, J, r)),
                o && nt(WebSocket.prototype, K, r);
            }
            Zone.__load_patch("util", (n, i, s) => {
              (s.patchOnProperties = w),
                (s.patchMethod = P),
                (s.bindArguments = g),
                (s.patchMacroTask = C);
              const l = i.__symbol__("BLACK_LISTED_EVENTS"),
                u = i.__symbol__("UNPATCHED_EVENTS");
              n[u] && (n[l] = n[u]),
                n[l] && (i[l] = i[u] = n[l]),
                (s.patchEventPrototype = X),
                (s.patchEventTarget = H),
                (s.isIEOrEdge = x),
                (s.ObjectDefineProperty = e),
                (s.ObjectGetOwnPropertyDescriptor = t),
                (s.ObjectCreate = o),
                (s.ArraySlice = r),
                (s.patchClass = D),
                (s.wrapWithCurrentZone = c),
                (s.filterProperties = et),
                (s.attachOriginToPatched = Z),
                (s._redefineProperty = Object.defineProperty),
                (s.patchCallbacks = q),
                (s.getGlobalObjects = () => ({
                  globalSources: j,
                  zoneSymbolEventNames: N,
                  eventNames: tt,
                  isBrowser: _,
                  isMix: T,
                  isNode: y,
                  TRUE_STR: "true",
                  FALSE_STR: "false",
                  ZONE_SYMBOL_PREFIX: a,
                  ADD_EVENT_LISTENER_STR: "addEventListener",
                  REMOVE_EVENT_LISTENER_STR: "removeEventListener",
                }));
            });
            const rt = u("zoneTask");
            function it(t, e, n, o) {
              let r = null,
                i = null;
              n += o;
              const s = {};
              function a(e) {
                const n = e.data;
                return (
                  (n.args[0] = function () {
                    try {
                      e.invoke.apply(this, arguments);
                    } finally {
                      (e.data && e.data.isPeriodic) ||
                        ("number" == typeof n.handleId
                          ? delete s[n.handleId]
                          : n.handleId && (n.handleId[rt] = null));
                    }
                  }),
                  (n.handleId = r.apply(t, n.args)),
                  e
                );
              }
              function c(t) {
                return i(t.data.handleId);
              }
              (r = P(
                t,
                (e += o),
                (n) =>
                  function (r, i) {
                    if ("function" == typeof i[0]) {
                      const t = l(
                        e,
                        i[0],
                        {
                          isPeriodic: "Interval" === o,
                          delay:
                            "Timeout" === o || "Interval" === o
                              ? i[1] || 0
                              : void 0,
                          args: i,
                        },
                        a,
                        c
                      );
                      if (!t) return t;
                      const n = t.data.handleId;
                      return (
                        "number" == typeof n ? (s[n] = t) : n && (n[rt] = t),
                        n &&
                          n.ref &&
                          n.unref &&
                          "function" == typeof n.ref &&
                          "function" == typeof n.unref &&
                          ((t.ref = n.ref.bind(n)),
                          (t.unref = n.unref.bind(n))),
                        "number" == typeof n || n ? n : t
                      );
                    }
                    return n.apply(t, i);
                  }
              )),
                (i = P(
                  t,
                  n,
                  (e) =>
                    function (n, o) {
                      const r = o[0];
                      let i;
                      "number" == typeof r
                        ? (i = s[r])
                        : ((i = r && r[rt]), i || (i = r)),
                        i && "string" == typeof i.type
                          ? "notScheduled" !== i.state &&
                            ((i.cancelFn && i.data.isPeriodic) ||
                              0 === i.runCount) &&
                            ("number" == typeof r
                              ? delete s[r]
                              : r && (r[rt] = null),
                            i.zone.cancelTask(i))
                          : e.apply(t, o);
                    }
                ));
            }
            function st(t, e) {
              if (Zone[e.symbol("patchEventTarget")]) return;
              const {
                eventNames: n,
                zoneSymbolEventNames: o,
                TRUE_STR: r,
                FALSE_STR: i,
                ZONE_SYMBOL_PREFIX: s,
              } = e.getGlobalObjects();
              for (let c = 0; c < n.length; c++) {
                const t = n[c],
                  e = s + (t + i),
                  a = s + (t + r);
                (o[t] = {}), (o[t][i] = e), (o[t][r] = a);
              }
              const a = t.EventTarget;
              return a && a.prototype
                ? (e.patchEventTarget(t, [a && a.prototype]), !0)
                : void 0;
            }
            Zone.__load_patch("legacy", (t) => {
              const e = t[Zone.__symbol__("legacyPatch")];
              e && e();
            }),
              Zone.__load_patch("timers", (t) => {
                it(t, "set", "clear", "Timeout"),
                  it(t, "set", "clear", "Interval"),
                  it(t, "set", "clear", "Immediate");
              }),
              Zone.__load_patch("requestAnimationFrame", (t) => {
                it(t, "request", "cancel", "AnimationFrame"),
                  it(t, "mozRequest", "mozCancel", "AnimationFrame"),
                  it(t, "webkitRequest", "webkitCancel", "AnimationFrame");
              }),
              Zone.__load_patch("blocking", (t, e) => {
                const n = ["alert", "prompt", "confirm"];
                for (let o = 0; o < n.length; o++)
                  P(
                    t,
                    n[o],
                    (n, o, r) =>
                      function (o, i) {
                        return e.current.run(n, t, i, r);
                      }
                  );
              }),
              Zone.__load_patch("EventTarget", (t, e, n) => {
                !(function (t, e) {
                  e.patchEventPrototype(t, e);
                })(t, n),
                  st(t, n);
                const o = t.XMLHttpRequestEventTarget;
                o && o.prototype && n.patchEventTarget(t, [o.prototype]),
                  D("MutationObserver"),
                  D("WebKitMutationObserver"),
                  D("IntersectionObserver"),
                  D("FileReader");
              }),
              Zone.__load_patch("on_property", (t, e, n) => {
                ot(n, t);
              }),
              Zone.__load_patch("customElements", (t, e, n) => {
                !(function (t, e) {
                  const { isBrowser: n, isMix: o } = e.getGlobalObjects();
                  (n || o) &&
                    t.customElements &&
                    "customElements" in t &&
                    e.patchCallbacks(
                      e,
                      t.customElements,
                      "customElements",
                      "define",
                      [
                        "connectedCallback",
                        "disconnectedCallback",
                        "adoptedCallback",
                        "attributeChangedCallback",
                      ]
                    );
                })(t, n);
              }),
              Zone.__load_patch("XHR", (t, e) => {
                !(function (t) {
                  const p = t.XMLHttpRequest;
                  if (!p) return;
                  const f = p.prototype;
                  let d = f[i],
                    g = f[s];
                  if (!d) {
                    const e = t.XMLHttpRequestEventTarget;
                    if (e) {
                      const t = e.prototype;
                      (d = t[i]), (g = t[s]);
                    }
                  }
                  function m(t) {
                    const o = t.data,
                      c = o.target;
                    (c[a] = !1), (c[h] = !1);
                    const l = c[r];
                    d || ((d = c[i]), (g = c[s])),
                      l && g.call(c, "readystatechange", l);
                    const u = (c[r] = () => {
                      if (c.readyState === c.DONE)
                        if (!o.aborted && c[a] && "scheduled" === t.state) {
                          const n = c[e.__symbol__("loadfalse")];
                          if (n && n.length > 0) {
                            const r = t.invoke;
                            (t.invoke = function () {
                              const n = c[e.__symbol__("loadfalse")];
                              for (let e = 0; e < n.length; e++)
                                n[e] === t && n.splice(e, 1);
                              o.aborted || "scheduled" !== t.state || r.call(t);
                            }),
                              n.push(t);
                          } else t.invoke();
                        } else o.aborted || !1 !== c[a] || (c[h] = !0);
                    });
                    return (
                      d.call(c, "readystatechange", u),
                      c[n] || (c[n] = t),
                      b.apply(c, o.args),
                      (c[a] = !0),
                      t
                    );
                  }
                  function v() {}
                  function y(t) {
                    const e = t.data;
                    return (e.aborted = !0), E.apply(e.target, e.args);
                  }
                  const _ = P(
                      f,
                      "open",
                      () =>
                        function (t, e) {
                          return (
                            (t[o] = 0 == e[2]), (t[c] = e[1]), _.apply(t, e)
                          );
                        }
                    ),
                    T = u("fetchTaskAborting"),
                    k = u("fetchTaskScheduling"),
                    b = P(
                      f,
                      "send",
                      () =>
                        function (t, n) {
                          if (!0 === e.current[k]) return b.apply(t, n);
                          if (t[o]) return b.apply(t, n);
                          {
                            const e = {
                                target: t,
                                url: t[c],
                                isPeriodic: !1,
                                args: n,
                                aborted: !1,
                              },
                              o = l("XMLHttpRequest.send", v, e, m, y);
                            t &&
                              !0 === t[h] &&
                              !e.aborted &&
                              "scheduled" === o.state &&
                              o.invoke();
                          }
                        }
                    ),
                    E = P(
                      f,
                      "abort",
                      () =>
                        function (t, o) {
                          const r = t[n];
                          if (r && "string" == typeof r.type) {
                            if (
                              null == r.cancelFn ||
                              (r.data && r.data.aborted)
                            )
                              return;
                            r.zone.cancelTask(r);
                          } else if (!0 === e.current[T]) return E.apply(t, o);
                        }
                    );
                })(t);
                const n = u("xhrTask"),
                  o = u("xhrSync"),
                  r = u("xhrListener"),
                  a = u("xhrScheduled"),
                  c = u("xhrURL"),
                  h = u("xhrErrorBeforeScheduled");
              }),
              Zone.__load_patch("geolocation", (e) => {
                e.navigator &&
                  e.navigator.geolocation &&
                  (function (e, n) {
                    const o = e.constructor.name;
                    for (let r = 0; r < n.length; r++) {
                      const i = n[r],
                        s = e[i];
                      if (s) {
                        if (!m(t(e, i))) continue;
                        e[i] = ((t) => {
                          const e = function () {
                            return t.apply(this, g(arguments, o + "." + i));
                          };
                          return Z(e, t), e;
                        })(s);
                      }
                    }
                  })(e.navigator.geolocation, [
                    "getCurrentPosition",
                    "watchPosition",
                  ]);
              }),
              Zone.__load_patch("PromiseRejectionEvent", (t, e) => {
                function n(e) {
                  return function (n) {
                    W(t, e).forEach((o) => {
                      const r = t.PromiseRejectionEvent;
                      if (r) {
                        const t = new r(e, {
                          promise: n.promise,
                          reason: n.rejection,
                        });
                        o.invoke(t);
                      }
                    });
                  };
                }
                t.PromiseRejectionEvent &&
                  ((e[u("unhandledPromiseRejectionHandler")] =
                    n("unhandledrejection")),
                  (e[u("rejectionHandledHandler")] = n("rejectionhandled")));
              });
          })
            ? o.call(e, n, e, t)
            : o) || (t.exports = r);
    },
    yLV6: function (t, e, n) {
      var o;
      !(function (r, i, s, a) {
        "use strict";
        var c,
          l = ["", "webkit", "Moz", "MS", "ms", "o"],
          u = i.createElement("div"),
          h = Math.round,
          p = Math.abs,
          f = Date.now;
        function d(t, e, n) {
          return setTimeout(k(t, n), e);
        }
        function g(t, e, n) {
          return !!Array.isArray(t) && (m(t, n[e], n), !0);
        }
        function m(t, e, n) {
          var o;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (void 0 !== t.length)
              for (o = 0; o < t.length; ) e.call(n, t[o], o, t), o++;
            else for (o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
        }
        function v(t, e, n) {
          var o = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function () {
            var e = new Error("get-stack-trace"),
              n =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              i = r.console && (r.console.warn || r.console.log);
            return i && i.call(r.console, o, n), t.apply(this, arguments);
          };
        }
        c =
          "function" != typeof Object.assign
            ? function (t) {
                if (null == t)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                  var o = arguments[n];
                  if (null != o)
                    for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r]);
                }
                return e;
              }
            : Object.assign;
        var y = v(
            function (t, e, n) {
              for (var o = Object.keys(e), r = 0; r < o.length; )
                (!n || (n && void 0 === t[o[r]])) && (t[o[r]] = e[o[r]]), r++;
              return t;
            },
            "extend",
            "Use `assign`."
          ),
          _ = v(
            function (t, e) {
              return y(t, e, !0);
            },
            "merge",
            "Use `assign`."
          );
        function T(t, e, n) {
          var o,
            r = e.prototype;
          ((o = t.prototype = Object.create(r)).constructor = t),
            (o._super = r),
            n && c(o, n);
        }
        function k(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        function b(t, e) {
          return "function" == typeof t ? t.apply((e && e[0]) || void 0, e) : t;
        }
        function E(t, e) {
          return void 0 === t ? e : t;
        }
        function w(t, e, n) {
          m(C(e), function (e) {
            t.addEventListener(e, n, !1);
          });
        }
        function S(t, e, n) {
          m(C(e), function (e) {
            t.removeEventListener(e, n, !1);
          });
        }
        function D(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function P(t, e) {
          return t.indexOf(e) > -1;
        }
        function C(t) {
          return t.trim().split(/\s+/g);
        }
        function Z(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var o = 0; o < t.length; ) {
            if ((n && t[o][n] == e) || (!n && t[o] === e)) return o;
            o++;
          }
          return -1;
        }
        function O(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function z(t, e, n) {
          for (var o = [], r = [], i = 0; i < t.length; ) {
            var s = e ? t[i][e] : t[i];
            Z(r, s) < 0 && o.push(t[i]), (r[i] = s), i++;
          }
          return (
            n &&
              (o = e
                ? o.sort(function (t, n) {
                    return t[e] > n[e];
                  })
                : o.sort()),
            o
          );
        }
        function I(t, e) {
          for (
            var n, o, r = e[0].toUpperCase() + e.slice(1), i = 0;
            i < l.length;

          ) {
            if ((o = (n = l[i]) ? n + r : e) in t) return o;
            i++;
          }
        }
        var x = 1;
        function A(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || r;
        }
        var R = "ontouchstart" in r,
          N = void 0 !== I(r, "PointerEvent"),
          j =
            R &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          M = ["x", "y"],
          L = ["clientX", "clientY"];
        function F(t, e) {
          var n = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
              b(t.options.enable, [t]) && n.handler(e);
            }),
            this.init();
        }
        function H(t, e, n) {
          var o = n.pointers.length,
            r = n.changedPointers.length,
            i = 1 & e && o - r == 0,
            s = 12 & e && o - r == 0;
          (n.isFirst = !!i),
            (n.isFinal = !!s),
            i && (t.session = {}),
            (n.eventType = e),
            (function (t, e) {
              var n = t.session,
                o = e.pointers,
                r = o.length;
              n.firstInput || (n.firstInput = W(e)),
                r > 1 && !n.firstMultiple
                  ? (n.firstMultiple = W(e))
                  : 1 === r && (n.firstMultiple = !1);
              var i = n.firstInput,
                s = n.firstMultiple,
                a = s ? s.center : i.center,
                c = (e.center = X(o));
              (e.timeStamp = f()),
                (e.deltaTime = e.timeStamp - i.timeStamp),
                (e.angle = U(a, c)),
                (e.distance = G(a, c)),
                (function (t, e) {
                  var n = e.center,
                    o = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    i = t.prevInput || {};
                  (1 !== e.eventType && 4 !== i.eventType) ||
                    ((r = t.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }),
                    (o = t.offsetDelta = { x: n.x, y: n.y })),
                    (e.deltaX = r.x + (n.x - o.x)),
                    (e.deltaY = r.y + (n.y - o.y));
                })(n, e),
                (e.offsetDirection = Y(e.deltaX, e.deltaY));
              var l,
                u,
                h = q(e.deltaTime, e.deltaX, e.deltaY);
              (e.overallVelocityX = h.x),
                (e.overallVelocityY = h.y),
                (e.overallVelocity = p(h.x) > p(h.y) ? h.x : h.y),
                (e.scale = s
                  ? ((l = s.pointers),
                    G((u = o)[0], u[1], L) / G(l[0], l[1], L))
                  : 1),
                (e.rotation = s
                  ? (function (t, e) {
                      return U(e[1], e[0], L) + U(t[1], t[0], L);
                    })(s.pointers, o)
                  : 0),
                (e.maxPointers = n.prevInput
                  ? e.pointers.length > n.prevInput.maxPointers
                    ? e.pointers.length
                    : n.prevInput.maxPointers
                  : e.pointers.length),
                (function (t, e) {
                  var n,
                    o,
                    r,
                    i,
                    s = t.lastInterval || e,
                    a = e.timeStamp - s.timeStamp;
                  if (8 != e.eventType && (a > 25 || void 0 === s.velocity)) {
                    var c = e.deltaX - s.deltaX,
                      l = e.deltaY - s.deltaY,
                      u = q(a, c, l);
                    (o = u.x),
                      (r = u.y),
                      (n = p(u.x) > p(u.y) ? u.x : u.y),
                      (i = Y(c, l)),
                      (t.lastInterval = e);
                  } else
                    (n = s.velocity),
                      (o = s.velocityX),
                      (r = s.velocityY),
                      (i = s.direction);
                  (e.velocity = n),
                    (e.velocityX = o),
                    (e.velocityY = r),
                    (e.direction = i);
                })(n, e);
              var d = t.element;
              D(e.srcEvent.target, d) && (d = e.srcEvent.target),
                (e.target = d);
            })(t, n),
            t.emit("hammer.input", n),
            t.recognize(n),
            (t.session.prevInput = n);
        }
        function W(t) {
          for (var e = [], n = 0; n < t.pointers.length; )
            (e[n] = {
              clientX: h(t.pointers[n].clientX),
              clientY: h(t.pointers[n].clientY),
            }),
              n++;
          return {
            timeStamp: f(),
            pointers: e,
            center: X(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY,
          };
        }
        function X(t) {
          var e = t.length;
          if (1 === e) return { x: h(t[0].clientX), y: h(t[0].clientY) };
          for (var n = 0, o = 0, r = 0; r < e; )
            (n += t[r].clientX), (o += t[r].clientY), r++;
          return { x: h(n / e), y: h(o / e) };
        }
        function q(t, e, n) {
          return { x: e / t || 0, y: n / t || 0 };
        }
        function Y(t, e) {
          return t === e ? 1 : p(t) >= p(e) ? (t < 0 ? 2 : 4) : e < 0 ? 8 : 16;
        }
        function G(t, e, n) {
          n || (n = M);
          var o = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return Math.sqrt(o * o + r * r);
        }
        function U(t, e, n) {
          return (
            n || (n = M),
            (180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]])) / Math.PI
          );
        }
        F.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && w(this.element, this.evEl, this.domHandler),
              this.evTarget && w(this.target, this.evTarget, this.domHandler),
              this.evWin && w(A(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && S(this.element, this.evEl, this.domHandler),
              this.evTarget && S(this.target, this.evTarget, this.domHandler),
              this.evWin && S(A(this.element), this.evWin, this.domHandler);
          },
        };
        var V = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function B() {
          (this.evEl = "mousedown"),
            (this.evWin = "mousemove mouseup"),
            (this.pressed = !1),
            F.apply(this, arguments);
        }
        T(B, F, {
          handler: function (t) {
            var e = V[t.type];
            1 & e && 0 === t.button && (this.pressed = !0),
              2 & e && 1 !== t.which && (e = 4),
              this.pressed &&
                (4 & e && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: "mouse",
                  srcEvent: t,
                }));
          },
        });
        var $ = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8,
          },
          J = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          K = "pointerdown",
          Q = "pointermove pointerup pointercancel";
        function tt() {
          (this.evEl = K),
            (this.evWin = Q),
            F.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        r.MSPointerEvent &&
          !r.PointerEvent &&
          ((K = "MSPointerDown"),
          (Q = "MSPointerMove MSPointerUp MSPointerCancel")),
          T(tt, F, {
            handler: function (t) {
              var e = this.store,
                n = !1,
                o = t.type.toLowerCase().replace("ms", ""),
                r = $[o],
                i = J[t.pointerType] || t.pointerType,
                s = "touch" == i,
                a = Z(e, t.pointerId, "pointerId");
              1 & r && (0 === t.button || s)
                ? a < 0 && (e.push(t), (a = e.length - 1))
                : 12 & r && (n = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, r, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: i,
                    srcEvent: t,
                  }),
                  n && e.splice(a, 1));
            },
          });
        var et = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function nt() {
          (this.evTarget = "touchstart"),
            (this.evWin = "touchstart touchmove touchend touchcancel"),
            (this.started = !1),
            F.apply(this, arguments);
        }
        function ot(t, e) {
          var n = O(t.touches),
            o = O(t.changedTouches);
          return 12 & e && (n = z(n.concat(o), "identifier", !0)), [n, o];
        }
        T(nt, F, {
          handler: function (t) {
            var e = et[t.type];
            if ((1 === e && (this.started = !0), this.started)) {
              var n = ot.call(this, t, e);
              12 & e && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, e, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: "touch",
                  srcEvent: t,
                });
            }
          },
        });
        var rt = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function it() {
          (this.evTarget = "touchstart touchmove touchend touchcancel"),
            (this.targetIds = {}),
            F.apply(this, arguments);
        }
        function st(t, e) {
          var n = O(t.touches),
            o = this.targetIds;
          if (3 & e && 1 === n.length) return (o[n[0].identifier] = !0), [n, n];
          var r,
            i,
            s = O(t.changedTouches),
            a = [],
            c = this.target;
          if (
            ((i = n.filter(function (t) {
              return D(t.target, c);
            })),
            1 === e)
          )
            for (r = 0; r < i.length; ) (o[i[r].identifier] = !0), r++;
          for (r = 0; r < s.length; )
            o[s[r].identifier] && a.push(s[r]),
              12 & e && delete o[s[r].identifier],
              r++;
          return a.length ? [z(i.concat(a), "identifier", !0), a] : void 0;
        }
        function at() {
          F.apply(this, arguments);
          var t = k(this.handler, this);
          (this.touch = new it(this.manager, t)),
            (this.mouse = new B(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function ct(t, e) {
          1 & t
            ? ((this.primaryTouch = e.changedPointers[0].identifier),
              lt.call(this, e))
            : 12 & t && lt.call(this, e);
        }
        function lt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(n);
            var o = this.lastTouches;
            setTimeout(function () {
              var t = o.indexOf(n);
              t > -1 && o.splice(t, 1);
            }, 2500);
          }
        }
        function ut(t) {
          for (
            var e = t.srcEvent.clientX, n = t.srcEvent.clientY, o = 0;
            o < this.lastTouches.length;
            o++
          ) {
            var r = this.lastTouches[o],
              i = Math.abs(e - r.x),
              s = Math.abs(n - r.y);
            if (i <= 25 && s <= 25) return !0;
          }
          return !1;
        }
        T(it, F, {
          handler: function (t) {
            var e = rt[t.type],
              n = st.call(this, t, e);
            n &&
              this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: t,
              });
          },
        }),
          T(at, F, {
            handler: function (t, e, n) {
              var o = "mouse" == n.pointerType;
              if (
                !(
                  o &&
                  n.sourceCapabilities &&
                  n.sourceCapabilities.firesTouchEvents
                )
              ) {
                if ("touch" == n.pointerType) ct.call(this, e, n);
                else if (o && ut.call(this, n)) return;
                this.callback(t, e, n);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            },
          });
        var ht = I(u.style, "touchAction"),
          pt = void 0 !== ht,
          ft = (function () {
            if (!pt) return !1;
            var t = {},
              e = r.CSS && r.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (n) {
                t[n] = !e || r.CSS.supports("touch-action", n);
              }),
              t
            );
          })();
        function dt(t, e) {
          (this.manager = t), this.set(e);
        }
        function gt(t) {
          (this.options = c({}, this.defaults, t || {})),
            (this.id = x++),
            (this.manager = null),
            (this.options.enable = E(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function mt(t) {
          return 16 & t
            ? "cancel"
            : 8 & t
            ? "end"
            : 4 & t
            ? "move"
            : 2 & t
            ? "start"
            : "";
        }
        function vt(t) {
          return 16 == t
            ? "down"
            : 8 == t
            ? "up"
            : 2 == t
            ? "left"
            : 4 == t
            ? "right"
            : "";
        }
        function yt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t;
        }
        function _t() {
          gt.apply(this, arguments);
        }
        function Tt() {
          _t.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function kt() {
          _t.apply(this, arguments);
        }
        function bt() {
          gt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Et() {
          _t.apply(this, arguments);
        }
        function wt() {
          _t.apply(this, arguments);
        }
        function St() {
          gt.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function Dt(t, e) {
          return (
            ((e = e || {}).recognizers = E(e.recognizers, Dt.defaults.preset)),
            new Pt(t, e)
          );
        }
        function Pt(t, e) {
          var n;
          (this.options = c({}, Dt.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = new ((n = this).options.inputClass ||
              (N ? tt : j ? it : R ? at : B))(n, H)),
            (this.touchAction = new dt(this, this.options.touchAction)),
            Ct(this, !0),
            m(
              this.options.recognizers,
              function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function Ct(t, e) {
          var n,
            o = t.element;
          o.style &&
            (m(t.options.cssProps, function (r, i) {
              (n = I(o.style, i)),
                e
                  ? ((t.oldCssProps[n] = o.style[n]), (o.style[n] = r))
                  : (o.style[n] = t.oldCssProps[n] || "");
            }),
            e || (t.oldCssProps = {}));
        }
        (dt.prototype = {
          set: function (t) {
            "compute" == t && (t = this.compute()),
              pt &&
                this.manager.element.style &&
                ft[t] &&
                (this.manager.element.style[ht] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var t = [];
            return (
              m(this.manager.recognizers, function (e) {
                b(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              (function (t) {
                if (P(t, "none")) return "none";
                var e = P(t, "pan-x"),
                  n = P(t, "pan-y");
                return e && n
                  ? "none"
                  : e || n
                  ? e
                    ? "pan-x"
                    : "pan-y"
                  : P(t, "manipulation")
                  ? "manipulation"
                  : "auto";
              })(t.join(" "))
            );
          },
          preventDefaults: function (t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var o = this.actions,
                r = P(o, "none") && !ft.none,
                i = P(o, "pan-y") && !ft["pan-y"],
                s = P(o, "pan-x") && !ft["pan-x"];
              if (
                r &&
                1 === t.pointers.length &&
                t.distance < 2 &&
                t.deltaTime < 250
              )
                return;
              if (!s || !i)
                return r || (i && 6 & n) || (s && 24 & n)
                  ? this.preventSrc(e)
                  : void 0;
            }
          },
          preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          },
        }),
          (gt.prototype = {
            defaults: {},
            set: function (t) {
              return (
                c(this.options, t),
                this.manager && this.manager.touchAction.update(),
                this
              );
            },
            recognizeWith: function (t) {
              if (g(t, "recognizeWith", this)) return this;
              var e = this.simultaneous;
              return (
                e[(t = yt(t, this)).id] ||
                  ((e[t.id] = t), t.recognizeWith(this)),
                this
              );
            },
            dropRecognizeWith: function (t) {
              return (
                g(t, "dropRecognizeWith", this) ||
                  ((t = yt(t, this)), delete this.simultaneous[t.id]),
                this
              );
            },
            requireFailure: function (t) {
              if (g(t, "requireFailure", this)) return this;
              var e = this.requireFail;
              return (
                -1 === Z(e, (t = yt(t, this))) &&
                  (e.push(t), t.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (t) {
              if (g(t, "dropRequireFailure", this)) return this;
              t = yt(t, this);
              var e = Z(this.requireFail, t);
              return e > -1 && this.requireFail.splice(e, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (t) {
              return !!this.simultaneous[t.id];
            },
            emit: function (t) {
              var e = this,
                n = this.state;
              function o(n) {
                e.manager.emit(n, t);
              }
              n < 8 && o(e.options.event + mt(n)),
                o(e.options.event),
                t.additionalEvent && o(t.additionalEvent),
                n >= 8 && o(e.options.event + mt(n));
            },
            tryEmit: function (t) {
              if (this.canEmit()) return this.emit(t);
              this.state = 32;
            },
            canEmit: function () {
              for (var t = 0; t < this.requireFail.length; ) {
                if (!(33 & this.requireFail[t].state)) return !1;
                t++;
              }
              return !0;
            },
            recognize: function (t) {
              var e = c({}, t);
              if (!b(this.options.enable, [this, e]))
                return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1),
                (this.state = this.process(e)),
                30 & this.state && this.tryEmit(e);
            },
            process: function (t) {},
            getTouchAction: function () {},
            reset: function () {},
          }),
          T(_t, gt, {
            defaults: { pointers: 1 },
            attrTest: function (t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
              var e = this.state,
                n = t.eventType,
                o = 6 & e,
                r = this.attrTest(t);
              return o && (8 & n || !r)
                ? 16 | e
                : o || r
                ? 4 & n
                  ? 8 | e
                  : 2 & e
                  ? 4 | e
                  : 2
                : 32;
            },
          }),
          T(Tt, _t, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: 30,
            },
            getTouchAction: function () {
              var t = this.options.direction,
                e = [];
              return 6 & t && e.push("pan-y"), 24 & t && e.push("pan-x"), e;
            },
            directionTest: function (t) {
              var e = this.options,
                n = !0,
                o = t.distance,
                r = t.direction,
                i = t.deltaX,
                s = t.deltaY;
              return (
                r & e.direction ||
                  (6 & e.direction
                    ? ((r = 0 === i ? 1 : i < 0 ? 2 : 4),
                      (n = i != this.pX),
                      (o = Math.abs(t.deltaX)))
                    : ((r = 0 === s ? 1 : s < 0 ? 8 : 16),
                      (n = s != this.pY),
                      (o = Math.abs(t.deltaY)))),
                (t.direction = r),
                n && o > e.threshold && r & e.direction
              );
            },
            attrTest: function (t) {
              return (
                _t.prototype.attrTest.call(this, t) &&
                (2 & this.state || (!(2 & this.state) && this.directionTest(t)))
              );
            },
            emit: function (t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = vt(t.direction);
              e && (t.additionalEvent = this.options.event + e),
                this._super.emit.call(this, t);
            },
          }),
          T(kt, _t, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.scale - 1) > this.options.threshold ||
                  2 & this.state)
              );
            },
            emit: function (t) {
              1 !== t.scale &&
                (t.additionalEvent =
                  this.options.event + (t.scale < 1 ? "in" : "out")),
                this._super.emit.call(this, t);
            },
          }),
          T(bt, gt, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                r = t.deltaTime > e.time;
              if (((this._input = t), !o || !n || (12 & t.eventType && !r)))
                this.reset();
              else if (1 & t.eventType)
                this.reset(),
                  (this._timer = d(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (4 & t.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (t) {
              8 === this.state &&
                (t && 4 & t.eventType
                  ? this.manager.emit(this.options.event + "up", t)
                  : ((this._input.timeStamp = f()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          T(Et, _t, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.rotation) > this.options.threshold ||
                  2 & this.state)
              );
            },
          }),
          T(wt, _t, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: 30,
              pointers: 1,
            },
            getTouchAction: function () {
              return Tt.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
              var e,
                n = this.options.direction;
              return (
                30 & n
                  ? (e = t.overallVelocity)
                  : 6 & n
                  ? (e = t.overallVelocityX)
                  : 24 & n && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  n & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  p(e) > this.options.velocity &&
                  4 & t.eventType
              );
            },
            emit: function (t) {
              var e = vt(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
                this.manager.emit(this.options.event, t);
            },
          }),
          T(St, gt, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return ["manipulation"];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                r = t.deltaTime < e.time;
              if ((this.reset(), 1 & t.eventType && 0 === this.count))
                return this.failTimeout();
              if (o && r && n) {
                if (4 != t.eventType) return this.failTimeout();
                var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  s =
                    !this.pCenter || G(this.pCenter, t.center) < e.posThreshold;
                if (
                  ((this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  s && i ? (this.count += 1) : (this.count = 1),
                  (this._input = t),
                  0 == this.count % e.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = d(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = d(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (Dt.VERSION = "2.0.7"),
          (Dt.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Et, { enable: !1 }],
              [kt, { enable: !1 }, ["rotate"]],
              [wt, { direction: 6 }],
              [Tt, { direction: 6 }, ["swipe"]],
              [St],
              [St, { event: "doubletap", taps: 2 }, ["tap"]],
              [bt],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          }),
          (Pt.prototype = {
            set: function (t) {
              return (
                c(this.options, t),
                t.touchAction && this.touchAction.update(),
                t.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = t.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (t) {
              this.session.stopped = t ? 2 : 1;
            },
            recognize: function (t) {
              var e = this.session;
              if (!e.stopped) {
                var n;
                this.touchAction.preventDefaults(t);
                var o = this.recognizers,
                  r = e.curRecognizer;
                (!r || (r && 8 & r.state)) && (r = e.curRecognizer = null);
                for (var i = 0; i < o.length; )
                  (n = o[i]),
                    2 === e.stopped || (r && n != r && !n.canRecognizeWith(r))
                      ? n.reset()
                      : n.recognize(t),
                    !r && 14 & n.state && (r = e.curRecognizer = n),
                    i++;
              }
            },
            get: function (t) {
              if (t instanceof gt) return t;
              for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
              return null;
            },
            add: function (t) {
              if (g(t, "add", this)) return this;
              var e = this.get(t.options.event);
              return (
                e && this.remove(e),
                this.recognizers.push(t),
                (t.manager = this),
                this.touchAction.update(),
                t
              );
            },
            remove: function (t) {
              if (g(t, "remove", this)) return this;
              if ((t = this.get(t))) {
                var e = this.recognizers,
                  n = Z(e, t);
                -1 !== n && (e.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (t, e) {
              if (void 0 !== t && void 0 !== e) {
                var n = this.handlers;
                return (
                  m(C(t), function (t) {
                    (n[t] = n[t] || []), n[t].push(e);
                  }),
                  this
                );
              }
            },
            off: function (t, e) {
              if (void 0 !== t) {
                var n = this.handlers;
                return (
                  m(C(t), function (t) {
                    e ? n[t] && n[t].splice(Z(n[t], e), 1) : delete n[t];
                  }),
                  this
                );
              }
            },
            emit: function (t, e) {
              this.options.domEvents &&
                (function (t, e) {
                  var n = i.createEvent("Event");
                  n.initEvent(t, !0, !0),
                    (n.gesture = e),
                    e.target.dispatchEvent(n);
                })(t, e);
              var n = this.handlers[t] && this.handlers[t].slice();
              if (n && n.length) {
                (e.type = t),
                  (e.preventDefault = function () {
                    e.srcEvent.preventDefault();
                  });
                for (var o = 0; o < n.length; ) n[o](e), o++;
              }
            },
            destroy: function () {
              this.element && Ct(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          c(Dt, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Pt,
            Input: F,
            TouchAction: dt,
            TouchInput: it,
            MouseInput: B,
            PointerEventInput: tt,
            TouchMouseInput: at,
            SingleTouchInput: nt,
            Recognizer: gt,
            AttrRecognizer: _t,
            Tap: St,
            Pan: Tt,
            Swipe: wt,
            Pinch: kt,
            Rotate: Et,
            Press: bt,
            on: w,
            off: S,
            each: m,
            merge: _,
            extend: y,
            assign: c,
            inherit: T,
            bindFn: k,
            prefixed: I,
          }),
          ((void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer =
            Dt),
          void 0 ===
            (o = function () {
              return Dt;
            }.call(e, n, e, t)) || (t.exports = o);
      })(window, document);
    },
  },
  [[2, 1]],
]);
