(function (sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_)
        return;
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var m, aa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
        , ca = function (a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }, da = ca(this), ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"), q = {}, fa = {}, r = function (a, b, c) {
            if (!c || null != a) {
                c = fa[b];
                if (null == c)
                    return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b]
            }
        }, t = function (a, b, c) {
            if (b)
                a: {
                    var d = a.split(".");
                    a = 1 === d.length;
                    var e = d[0], f;
                    !a && e in q ? f = q : f = da;
                    for (e = 0; e < d.length - 1; e++) {
                        var h = d[e];
                        if (!(h in f))
                            break a;
                        f = f[h]
                    }
                    d = d[d.length - 1];
                    c = ea && "es6" === c ? f[d] : null;
                    b = b(c);
                    null != b && (a ? ba(q, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0,
                        fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d),
                        ba(f, fa[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })))
                }
        };
    t("Symbol", function (a) {
        if (a)
            return a;
        var b = function (f, h) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function () {
            return this.g
        }
            ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
            , d = 0
            , e = function (f) {
                if (this instanceof e)
                    throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    t("Symbol.iterator", function (a) {
        if (a)
            return a;
        a = (0,
            q.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function (a) {
        a = {
            next: a
        };
        a[r(q.Symbol, "iterator")] = function () {
            return this
        }
            ;
        return a
    }
        , ia = function (a) {
            return a.raw = a
        }
        , v = function (a) {
            var b = "undefined" != typeof q.Symbol && r(q.Symbol, "iterator") && a[r(q.Symbol, "iterator")];
            if (b)
                return b.call(a);
            if ("number" == typeof a.length)
                return {
                    next: aa(a)
                };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        }
        , w = function (a) {
            if (!(a instanceof Array)) {
                a = v(a);
                for (var b, c = []; !(b = a.next()).done;)
                    c.push(b.value);
                a = c
            }
            return a
        }
        , x = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        , la = ea && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d)
                        x(d, e) && (a[e] = d[e])
            }
            return a
        }
        ;
    t("Object.assign", function (a) {
        return a || la
    }, "es6");
    var ma = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () { };
        b.prototype = a;
        return new b
    }
        , na;
    if (ea && "function" == typeof Object.setPrototypeOf)
        na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                a: !0
            }
                , qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) { }
            oa = !1
        }
        na = oa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
            : null
    }
    var ra = na
        , y = function (a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (ra)
                ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.Ra = b.prototype
        }
        , sa = function () {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
                b[c - a] = arguments[c];
            return b
        };
    t("WeakMap", function (a) {
        function b() { }
        function c(h) {
            var g = typeof h;
            return "object" === g && null !== h || "function" === g
        }
        if (function () {
            if (!a || !Object.seal)
                return !1;
            try {
                var h = Object.seal({})
                    , g = Object.seal({})
                    , k = new a([[h, 2], [g, 3]]);
                if (2 != k.get(h) || 3 != k.get(g))
                    return !1;
                k.delete(h);
                k.set(g, 4);
                return !k.has(h) && 4 == k.get(g)
            } catch (l) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
            , e = 0
            , f = function (h) {
                this.g = (e += Math.random() + 1).toString();
                if (h) {
                    h = v(h);
                    for (var g; !(g = h.next()).done;)
                        g = g.value,
                            this.set(g[0], g[1])
                }
            };
        f.prototype.set = function (h, g) {
            if (!c(h))
                throw Error("Invalid WeakMap key");
            if (!x(h, d)) {
                var k = new b;
                ba(h, d, {
                    value: k
                })
            }
            if (!x(h, d))
                throw Error("WeakMap key fail: " + h);
            h[d][this.g] = g;
            return this
        }
            ;
        f.prototype.get = function (h) {
            return c(h) && x(h, d) ? h[d][this.g] : void 0
        }
            ;
        f.prototype.has = function (h) {
            return c(h) && x(h, d) && x(h[d], this.g)
        }
            ;
        f.prototype.delete = function (h) {
            return c(h) && x(h, d) && x(h[d], this.g) ? delete h[d][this.g] : !1
        }
            ;
        return f
    }, "es6");
    t("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var g = Object.seal({
                    x: 4
                })
                    , k = new a(v([[g, "s"]]));
                if ("s" != k.get(g) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var l = k.entries()
                    , n = l.next();
                if (n.done || n.value[0] != g || "s" != n.value[1])
                    return !1;
                n = l.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
            } catch (u) {
                return !1
            }
        }())
            return a;
        var b = new q.WeakMap
            , c = function (g) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (g) {
                    g = v(g);
                    for (var k; !(k = g.next()).done;)
                        k = k.value,
                            this.set(k[0], k[1])
                }
            };
        c.prototype.set = function (g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.h[l.id] = []);
            l.m ? l.m.value = k : (l.m = {
                next: this.g,
                B: this.g.B,
                head: this.g,
                key: g,
                value: k
            },
                l.list.push(l.m),
                this.g.B.next = l.m,
                this.g.B = l.m,
                this.size++);
            return this
        }
            ;
        c.prototype.delete = function (g) {
            g = d(this, g);
            return g.m && g.list ? (g.list.splice(g.index, 1),
                g.list.length || delete this.h[g.id],
                g.m.B.next = g.m.next,
                g.m.next.B = g.m.B,
                g.m.head = null,
                this.size--,
                !0) : !1
        }
            ;
        c.prototype.clear = function () {
            this.h = {};
            this.g = this.g.B = f();
            this.size = 0
        }
            ;
        c.prototype.has = function (g) {
            return !!d(this, g).m
        }
            ;
        c.prototype.get = function (g) {
            return (g = d(this, g).m) && g.value
        }
            ;
        c.prototype.entries = function () {
            return e(this, function (g) {
                return [g.key, g.value]
            })
        }
            ;
        c.prototype.keys = function () {
            return e(this, function (g) {
                return g.key
            })
        }
            ;
        c.prototype.values = function () {
            return e(this, function (g) {
                return g.value
            })
        }
            ;
        c.prototype.forEach = function (g, k) {
            for (var l = this.entries(), n; !(n = l.next()).done;)
                n = n.value,
                    g.call(k, n[1], n[0], this)
        }
            ;
        c.prototype[r(q.Symbol, "iterator")] = c.prototype.entries;
        var d = function (g, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++h,
                b.set(k, l)) : l = "p_" + k;
            var n = g.h[l];
            if (n && x(g.h, l))
                for (g = 0; g < n.length; g++) {
                    var u = n[g];
                    if (k !== k && u.key !== u.key || k === u.key)
                        return {
                            id: l,
                            list: n,
                            index: g,
                            m: u
                        }
                }
            return {
                id: l,
                list: n,
                index: -1,
                m: void 0
            }
        }
            , e = function (g, k) {
                var l = g.g;
                return ha(function () {
                    if (l) {
                        for (; l.head != g.g;)
                            l = l.B;
                        for (; l.next != l.head;)
                            return l = l.next,
                            {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
            , f = function () {
                var g = {};
                return g.B = g.next = g.head = g
            }
            , h = 0;
        return c
    }, "es6");
    var ta = function (a, b) {
        a instanceof String && (a += "");
        var c = 0
            , d = !1
            , e = {
                next: function () {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(q.Symbol, "iterator")] = function () {
            return e
        }
            ;
        return e
    };
    t("Array.prototype.keys", function (a) {
        return a ? a : function () {
            return ta(this, function (b) {
                return b
            })
        }
    }, "es6");
    t("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (g) {
                return g
            }
                ;
            var e = []
                , f = "undefined" != typeof q.Symbol && r(q.Symbol, "iterator") && b[r(q.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;)
                    e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length,
                    h = 0; h < f; h++)
                    e.push(c.call(d, b[h], h));
            return e
        }
    }, "es6");
    t("Array.prototype.values", function (a) {
        return a ? a : function () {
            return ta(this, function (b, c) {
                return c
            })
        }
    }, "es8");
    t("Set", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                    , d = new a(v([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = d.entries()
                    , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }())
            return a;
        var b = function (c) {
            this.g = new q.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;)
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
            ;
        b.prototype.delete = function (c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
            ;
        b.prototype.clear = function () {
            this.g.clear();
            this.size = 0
        }
            ;
        b.prototype.has = function (c) {
            return this.g.has(c)
        }
            ;
        b.prototype.entries = function () {
            return this.g.entries()
        }
            ;
        b.prototype.values = function () {
            return r(this.g, "values").call(this.g)
        }
            ;
        b.prototype.keys = r(b.prototype, "values");
        b.prototype[r(q.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.g.forEach(function (f) {
                return c.call(d, f, f, e)
            })
        }
            ;
        return b
    }, "es6");
    var ua = function (a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    t("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = ua(this, b, "startsWith")
                , e = d.length
                , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;)
                if (d[c++] != b[h++])
                    return !1;
            return h >= f
        }
    }, "es6");
    t("String.prototype.repeat", function (a) {
        return a ? a : function (b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c),
                    b >>>= 1)
                    c += c;
            return d
        }
    }, "es6");
    t("globalThis", function (a) {
        return a || da
    }, "es_2020");
    t("String.prototype.padStart", function (a) {
        return a ? a : function (b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? r(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var z = this || self
        , va = function (a) {
            a = a.split(".");
            for (var b = z, c = 0; c < a.length; c++)
                if (b = b[a[c]],
                    null == b)
                    return null;
            return b
        }
        , wa = function (a, b) {
            a = a.split(".");
            var c = z;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());)
                a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var xa = function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
        , Fa = function (a) {
            if (!ya.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(za, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Da, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
            return a
        }
        , za = /&/g
        , Aa = /</g
        , Ba = />/g
        , Ca = /"/g
        , Da = /'/g
        , Ea = /\x00/g
        , ya = /[\x00&<>"']/
        , Ha = function (a, b) {
            var c = 0;
            a = xa(String(a)).split(".");
            b = xa(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || ""
                    , h = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == h[0].length)
                        break;
                    c = Ga(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ga(0 == f[2].length, 0 == h[2].length) || Ga(f[2], h[2]);
                    f = f[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        }
        , Ga = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ia, Ja = va("CLOSURE_FLAGS"), Ka = Ja && Ja[610401301];
    Ia = null != Ka ? Ka : !1;
    function La() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var A, Ma = z.navigator;
    A = Ma ? Ma.userAgentData || null : null;
    function Na(a) {
        return Ia ? A ? A.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }
    function B(a) {
        return -1 != La().indexOf(a)
    }
    ; function Oa() {
        return Ia ? !!A && 0 < A.brands.length : !1
    }
    function Pa() {
        return Oa() ? Na("Chromium") : (B("Chrome") || B("CriOS")) && !(Oa() ? 0 : B("Edge")) || B("Silk")
    }
    ; var Qa = function (a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
        , Ra = function (a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        }
        , Ta = function (a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };
    function Ua(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Va(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Wa(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    }
    ; var Xa = function (a) {
        Xa[" "](a);
        return a
    };
    Xa[" "] = function () { }
        ;
    var Ya = Oa() ? !1 : B("Trident") || B("MSIE");
    !B("Android") || Pa();
    Pa();
    B("Safari") && (Pa() || (Oa() ? 0 : B("Coast")) || (Oa() ? 0 : B("Opera")) || (Oa() ? 0 : B("Edge")) || (Oa() ? Na("Microsoft Edge") : B("Edg/")) || Oa() && Na("Opera"));
    var Za = {}
        , $a = null
        , bb = function (a) {
            var b = [];
            ab(a, function (c) {
                b.push(c)
            });
            return b
        }
        , ab = function (a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++)
                        , n = $a[l];
                    if (null != n)
                        return n;
                    if (!/^[\s\xa0]*$/.test(l))
                        throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            cb();
            for (var d = 0; ;) {
                var e = c(-1)
                    , f = c(0)
                    , h = c(64)
                    , g = c(64);
                if (64 === g && -1 === e)
                    break;
                b(e << 2 | f >> 4);
                64 != h && (b(f << 4 & 240 | h >> 2),
                    64 != g && b(h << 6 & 192 | g))
            }
        }
        , cb = function () {
            if (!$a) {
                $a = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Za[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === $a[f] && ($a[f] = e)
                    }
                }
            }
        };
    var db = "undefined" !== typeof Uint8Array
        , eb = !Ya && "function" === typeof btoa;
    var C = "function" === typeof q.Symbol && "symbol" === typeof (0,
        q.Symbol)() ? (0,
            q.Symbol)() : void 0;
    function fb(a, b) {
        if (C)
            return a[C] |= b;
        if (void 0 !== a.g)
            return a.g |= b;
        Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }
    function D(a) {
        var b;
        C ? b = a[C] : b = a.g;
        return null == b ? 0 : b
    }
    function E(a, b) {
        C ? a[C] = b : void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    function gb(a, b) {
        Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
        E(a, b);
        return a
    }
    function hb(a) {
        fb(a, 1);
        return a
    }
    function ib(a) {
        fb(a, 16);
        return a
    }
    function jb(a, b) {
        E(b, (a | 0) & -51)
    }
    function kb(a, b) {
        E(b, (a | 18) & -41)
    }
    ; var lb = {};
    function mb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var nb, ob = Object.freeze(E([], 23));
    function pb(a) {
        if (D(a.j) & 2)
            throw Error();
    }
    ; function qb(a) {
        if (null == a)
            return a;
        switch (typeof a) {
            case "string":
                return +a;
            case "number":
                return a
        }
    }
    function rb(a) {
        return a
    }
    function sb(a) {
        return a
    }
    function tb(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.O === lb)
            return a;
        if (d) {
            var e = d = D(a);
            0 === e && (e |= c & 16);
            e |= c & 2;
            e !== d && E(a, e);
            return new b(a)
        }
    }
    var ub = "function" === typeof q.Symbol && "symbol" === typeof (0,
        q.Symbol)() ? (0,
            q.Symbol)() : "di";
    var vb = function (a) {
        var b = a.h + a.g;
        return a.A || (a.A = a.j[b] = {})
    }
        , F = function (a, b, c) {
            return -1 === b ? null : b >= a.h ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b],
                null != c) ? c : a.j[b + a.g]
        }
        , H = function (a, b, c) {
            pb(a);
            return G(a, b, c)
        }
        , G = function (a, b, c, d) {
            a.i && (a.i = void 0);
            if (b >= a.h || d)
                return vb(a)[b] = c,
                    a;
            a.j[b + a.g] = c;
            (c = a.A) && b in c && delete c[b];
            return a
        };
    function wb(a, b, c) {
        a = F(a, b);
        Array.isArray(a) || (a = ob);
        b = D(a);
        b & 1 || hb(a);
        c ? b & 2 || fb(a, 18) : b & 16 && !(b & 2) && (c = a,
            C ? c[C] && (c[C] &= -17) : void 0 !== c.g && (c.g &= -17));
        return a
    }
    var xb = function (a, b) {
        a = F(a, b);
        return I(null == a ? a : !!a, !1)
    };
    function yb(a, b, c, d) {
        if (null == c)
            return H(a, b, ob);
        var e = D(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c))
                c = Array.prototype.slice.call(c);
            for (var f = 0; f < c.length; f++)
                c[f] = d(c[f]);
            E(c, e | 5)
        }
        return H(a, b, c)
    }
    function J(a, b, c, d) {
        pb(a);
        c !== d ? G(a, b, c) : G(a, b, void 0, !1);
        return a
    }
    var Ab = function (a, b, c, d) {
        pb(a);
        (c = zb(a, c)) && c !== b && null != d && G(a, c, void 0, !1);
        return G(a, b, d)
    }
        , K = function (a, b, c) {
            return zb(a, b) === c ? c : -1
        }
        , zb = function (a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != F(a, e) && (0 !== c && G(a, c, void 0, !1),
                    c = e)
            }
            return c
        }
        , Bb = function (a, b, c, d) {
            var e = F(a, c, d);
            b = tb(e, b, D(a.j));
            b !== e && null != b && G(a, c, b, d);
            return b
        }
        , Eb = function (a, b) {
            (a = Bb(a, b, 1, !1)) ? b = a : (a = b[ub]) ? b = a : (a = new b,
                fb(a.j, 18),
                b = b[ub] = a);
            return b
        }
        , L = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Bb(a, b, c, d);
            if (null == b)
                return b;
            if (!(D(a.j) & 2)) {
                var e = Fb(b);
                e !== b && (b = e,
                    G(a, c, b, d))
            }
            return b
        }
        , M = function (a, b, c) {
            var d = D(a.j)
                , e = !!(d & 2);
            var f = e ? 1 : 2
                , h = !!(d & 2)
                , g = wb(a, c, h);
            if (g !== ob && D(g) & 4)
                3 === f || h || (h = Object.isFrozen(g),
                    1 === f ? h || Object.freeze(g) : (f = D(g),
                        b = f & -19,
                        h && (g = Array.prototype.slice.call(g),
                            f = 0,
                            G(a, c, g)),
                        f !== b && E(g, b))),
                    a = g;
            else {
                var k = g;
                g = !!(d & 2);
                var l = !!(D(k) & 2);
                h = k;
                !g && l && (k = Array.prototype.slice.call(k));
                var n = d | (l ? 2 : 0);
                d = l;
                for (var u = l = 0; l < k.length; l++) {
                    var p = tb(k[l], b, n);
                    void 0 !== p && (d || (d = !!(2 & D(p.j))),
                        k[u++] = p)
                }
                u < l && (k.length = u);
                b = k;
                k = D(b);
                n = k | 5;
                d = d ? n & -9 : n | 8;
                k != d && (b = gb(b, d));
                k = b;
                h !== k && G(a, c, k);
                (g || 1 === f) && Object.freeze(k);
                a = k
            }
            if (!(e || D(a) & 8)) {
                for (e = 0; e < a.length; e++)
                    c = a[e],
                        f = Fb(c),
                        c !== f && (a[e] = f);
                fb(a, 8)
            }
            return a
        }
        , Gb = function (a, b, c) {
            pb(a);
            null == c && (c = void 0);
            return G(a, b, c)
        }
        , Hb = function (a, b, c, d) {
            pb(a);
            null == d && (d = void 0);
            return Ab(a, b, c, d)
        }
        , Ib = function (a, b, c) {
            pb(a);
            if (null != c) {
                for (var d = !!c.length, e = 0; e < c.length; e++) {
                    var f = c[e];
                    d = d && !(D(f.j) & 2)
                }
                e = D(c);
                f = e | 1;
                f = (d ? f | 8 : f & -9) | 4;
                f != e && (c = gb(c, f))
            }
            null == c && (c = ob);
            return G(a, b, c)
        }
        , Jb = function (a, b) {
            var c = !!(D(a.j) & 2)
                , d = wb(a, b, c)
                , e = D(d);
            if (!(e & 4)) {
                Object.isFrozen(d) && (d = hb(d.slice()),
                    G(a, b, d));
                for (var f = 0, h = 0; f < d.length; f++) {
                    var g = d[f];
                    null != g && (d[h++] = g)
                }
                h < f && (d.length = h);
                e |= 5;
                c && (e |= 18);
                E(d, e);
                e & 2 && Object.freeze(d)
            }
            !c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d),
                fb(d, 5),
                G(a, b, d));
            return d
        };
    function I(a, b) {
        return null == a ? b : a
    }
    var Kb = function (a, b) {
        return I(F(a, b), "")
    }
        , Lb = function (a, b) {
            var c = void 0 === c ? 0 : c;
            var d = F(a, b);
            var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
            null != e && e !== d && G(a, b, e);
            return I(e, c)
        }
        , N = function (a, b) {
            return I(F(a, b), 0)
        };
    var Mb;
    function Nb(a, b) {
        Mb = b;
        a = new a(b);
        Mb = void 0;
        return a
    }
    ; function Ob(a, b) {
        return Pb(b)
    }
    function Pb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && db && null != a && a instanceof Uint8Array) {
                    if (eb) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;)
                            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        cb();
                        b = Za[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var h = a[e]
                                , g = a[e + 1]
                                , k = a[e + 2]
                                , l = b[h >> 2];
                            h = b[(h & 3) << 4 | g >> 4];
                            g = b[(g & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + h + g + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                            case 2:
                                l = a[e + 1],
                                    k = b[(l & 15) << 2] || d;
                            case 1:
                                a = a[e],
                                    c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    }
    ; function Qb(a, b) {
        var c = a.j
            , d = c.length
            , e = ib([])
            , f = a.constructor.messageId;
        f && e.push(f);
        var h = a.A;
        if (h) {
            e.length = d;
            var g = {};
            e[d - 1] = g
        }
        var k = Nb(a.constructor, e);
        a.ga && (k.ga = a.ga.slice());
        a = h ? d - 1 : d;
        for (f = f ? 1 : 0; f < a; f++)
            e[f] = b(c[f]);
        if (h)
            for (var l in h)
                Object.prototype.hasOwnProperty.call(h, l) && (g[l] = b(h[l]));
        return k
    }
    function Rb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a))
                a = e && 0 == a.length && D(a) & 1 ? void 0 : f && D(a) & 2 ? a : Sb(a, b, c, void 0 !== d, e, f);
            else if (mb(a)) {
                var h = {}, g;
                for (g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (h[g] = Rb(a[g], b, c, d, e, f));
                a = h
            } else
                a = b(a, d);
            return a
        }
    }
    function Sb(a, b, c, d, e, f) {
        var h = D(a);
        d = d ? !!(h & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var g = 0; g < a.length; g++)
            a[g] = Rb(a[g], b, c, d, e, f);
        c && c(h, a);
        return a
    }
    function Tb(a) {
        return a.O === lb ? a.toJSON() : Pb(a)
    }
    ; function Ub(a, b, c) {
        c = void 0 === c ? kb : c;
        if (null != a) {
            if (db && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = D(a);
                if (d & 2)
                    return a;
                if (b && !(d & 32) && (d & 16 || 0 === d))
                    return E(a, d | 18),
                        a;
                a = Sb(a, Ub, d & 4 ? kb : c, !0, !1, !0);
                b = D(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.O === lb && (D(a.j) & 2 || (a = Vb(a, !0),
                fb(a.j, 18)));
            return a
        }
    }
    function Vb(a, b) {
        var c = b || D(a.j) & 2 ? kb : jb
            , d = !!(D(a.j) & 16);
        return Qb(a, function (e) {
            return Ub(e, d, c)
        })
    }
    function Fb(a) {
        if (!(D(a.j) & 2))
            return a;
        var b = Vb(a, !1);
        b.i = a;
        return b
    }
    ; var O = function (a, b, c) {
        null == a && (a = Mb);
        Mb = void 0;
        var d = this.constructor.messageId;
        if (null == a) {
            a = d ? [d] : [];
            var e = !0;
            E(a, 48)
        } else {
            if (!Array.isArray(a))
                throw Error();
            if (d && d !== a[0])
                throw Error();
            var f = fb(a, 0) | 32;
            e = 0 !== (16 & f);
            E(a, f)
        }
        this.g = d ? 0 : -1;
        this.j = a;
        a: {
            f = this.j.length;
            d = f - 1;
            if (f && (f = this.j[d],
                mb(f))) {
                this.A = f;
                this.h = d - this.g;
                break a
            }
            void 0 !== b && -1 < b ? (this.h = Math.max(b, d + 1 - this.g),
                this.A = void 0) : this.h = Number.MAX_VALUE
        }
        if (c) {
            b = e && !0;
            e = this.h;
            var h;
            for (d = 0; d < c.length; d++)
                if (f = c[d],
                    f < e) {
                    f += this.g;
                    var g = a[f];
                    g ? Wb(g, b) : a[f] = ob
                } else
                    h || (h = vb(this)),
                        (g = h[f]) ? Wb(g, b) : h[f] = ob
        }
    };
    O.prototype.toJSON = function () {
        var a = this.j, b;
        nb ? b = a : b = Sb(a, Tb, void 0, void 0, !1, !1);
        return b
    }
        ;
    var Xb = function (a) {
        nb = !0;
        try {
            return JSON.stringify(a.toJSON(), Ob)
        } finally {
            nb = !1
        }
    };
    function Wb(a, b) {
        if (Array.isArray(a)) {
            var c = D(a)
                , d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && E(a, c | d)
        }
    }
    O.prototype.O = lb;
    var Yb = void 0;
    function Zb() {
        var a = Yb;
        Yb = void 0;
        return a
    }
    ; function $b(a) {
        return function (b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = Nb(a, ib(b))
            }
            return b
        }
    }
    ; var ac = function (a) {
        O.call(this, a, -1, ac.g)
    };
    y(ac, O);
    ac.g = [6, 4];
    var bc = function (a) {
        O.call(this, a, -1, bc.g)
    };
    y(bc, O);
    bc.g = [4, 5, 6];
    var ec = function (a, b) {
        this.h = a === cc && b || "";
        this.i = dc
    };
    ec.prototype.D = !0;
    ec.prototype.g = function () {
        return this.h
    }
        ;
    var fc = function (a) {
        return a instanceof ec && a.constructor === ec && a.i === dc ? a.h : "type_error:Const"
    }
        , P = function (a) {
            return new ec(cc, a)
        }
        , dc = {}
        , cc = {};
    var gc = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(),
                b = !0);
            return c
        }
    };
    var hc = function (a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function ic(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ; var jc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Q = function (a) {
        this.h = a
    };
    Q.prototype.toString = function () {
        return this.h + ""
    }
        ;
    Q.prototype.D = !0;
    Q.prototype.g = function () {
        return this.h.toString()
    }
        ;
    var oc = function (a, b) {
        a = kc.exec(lc(a).toString());
        var c = a[3] || "";
        return new Q(a[1] + mc("?", a[2] || "", b) + mc("#", c), nc)
    }
        , lc = function (a) {
            return a instanceof Q && a.constructor === Q ? a.h : "type_error:TrustedResourceUrl"
        }
        , kc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
        , pc = function (a) {
            for (var b = "", c = 0; c < a.length; c++)
                b += fc(a[c]);
            return new Q(b, nc)
        }
        , nc = {}
        , mc = function (a, b, c) {
            if (null == c)
                return b;
            if ("string" === typeof c)
                return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var h = e[f];
                        null != h && (b || (b = a),
                            b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                    }
                }
            return b
        };
    var R = function (a) {
        this.h = a
    };
    R.prototype.toString = function () {
        return this.h.toString()
    }
        ;
    R.prototype.D = !0;
    R.prototype.g = function () {
        return this.h.toString()
    }
        ;
    var qc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
        , rc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
        , sc = {}
        , tc = new R("about:invalid#zClosurez", sc);
    var uc = {}
        , vc = function (a) {
            this.h = a;
            this.D = !0
        };
    vc.prototype.g = function () {
        return this.h.toString()
    }
        ;
    vc.prototype.toString = function () {
        return this.h.toString()
    }
        ;
    var wc = function (a) {
        return a instanceof vc && a.constructor === vc ? a.h : "type_error:SafeHtml"
    }
        , xc = function (a) {
            return a instanceof vc ? a : new vc(Fa("object" == typeof a && a.D ? a.g() : String(a)), uc)
        }
        , Bc = function (a, b) {
            var c = {
                src: a
            }
                , d = {};
            a = {};
            for (var e in c)
                Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d)
                Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var h in b)
                    if (Object.prototype.hasOwnProperty.call(b, h)) {
                        e = h.toLowerCase();
                        if (e in c)
                            throw Error("");
                        e in d && delete a[e];
                        a[h] = b[h]
                    }
            var g;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!yc.test(k))
                            throw Error("");
                        c = a[k];
                        if (null != c) {
                            h = k;
                            if (c instanceof ec)
                                c = fc(c);
                            else {
                                if ("style" == h.toLowerCase())
                                    throw Error("");
                                if (/^on/i.test(h))
                                    throw Error("");
                                if (h.toLowerCase() in zc)
                                    if (c instanceof Q)
                                        c = lc(c).toString();
                                    else if (c instanceof R)
                                        c = c instanceof R && c.constructor === R ? c.h : "type_error:SafeUrl";
                                    else if ("string" === typeof c)
                                        c instanceof R || (c = "object" == typeof c && c.D ? c.g() : String(c),
                                            rc.test(c) ? c = new R(c, sc) : (c = String(c),
                                                c = c.replace(/(%0A|%0D)/g, ""),
                                                c = c.match(qc) ? new R(c, sc) : null)),
                                            c = (c || tc).g();
                                    else
                                        throw Error("");
                            }
                            c.D && (c = c.g());
                            h = h + '="' + Fa(String(c)) + '"';
                            b += " " + h
                        }
                    }
            var k = "<script" + b;
            null == g ? g = [] : Array.isArray(g) || (g = [g]);
            !0 === jc.script ? k += ">" : (g = Ac(g),
                k += ">" + wc(g).toString() + "\x3c/script>");
            return new vc(k, uc)
        }
        , Dc = function (a) {
            var b = xc(Cc)
                , c = []
                , d = function (e) {
                    Array.isArray(e) ? e.forEach(d) : (e = xc(e),
                        c.push(wc(e).toString()))
                };
            a.forEach(d);
            return new vc(c.join(wc(b).toString()), uc)
        }
        , Ac = function (a) {
            return Dc(Array.prototype.slice.call(arguments))
        }
        , yc = /^[a-zA-Z0-9-]+$/
        , zc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        }
        , Cc = new vc(z.trustedTypes && z.trustedTypes.emptyHTML || "", uc);
    var Fc = function () {
        a: {
            var a = z.document;
            if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ec.test(a))
                break a;
            a = ""
        }
        return a
    }
        , Ec = /^[\w+/_-]+[=]{0,2}$/;
    var Gc = function () {
        return Ia && A ? !A.mobile && (B("iPad") || B("Android") || B("Silk")) : B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var Hc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
        , Ic = function (a) {
            return a ? decodeURI(a) : a
        }
        , Jc = /#|$/
        , Kc = function (a, b) {
            var c = a.search(Jc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e),
                            !f || 61 == f || 38 == f || 35 == f)
                            break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d)
                return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c)
                e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    function Lc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ; function Mc(a, b) {
        a.write(wc(b))
    }
    ; var Nc = function (a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Xa(a.foo);
                        b = !0;
                        break a
                    } catch (c) { }
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
        , Oc = function (a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? z : c;
            for (var d = 0; c && 40 > d++ && (!b && !Nc(c) || !a(c));)
                a: {
                    try {
                        var e = c.parent;
                        if (e && e != c) {
                            c = e;
                            break a
                        }
                    } catch (f) { }
                    c = null
                }
        }
        , Pc = function (a) {
            var b = a;
            Oc(function (c) {
                b = c;
                return !1
            });
            return b
        }
        , Qc = function (a) {
            return Nc(a.top) ? a.top : null
        }
        , Uc = function (a, b) {
            if (!Rc() && !Sc()) {
                var c = Math.random();
                if (c < b)
                    return c = Tc(),
                        a[Math.floor(c * a.length)]
            }
            return null
        }
        , Tc = function () {
            if (!q.globalThis.crypto)
                return Math.random();
            try {
                var a = new Uint32Array(1);
                q.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        }
        , Vc = function (a, b) {
            if (a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        }
        , Wc = function (a) {
            var b = a.length;
            if (0 == b)
                return 0;
            for (var c = 305419896, d = 0; d < b; d++)
                c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        }
        , Sc = gc(function () {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Xc, void 0) || 1E-4 > Math.random()
        })
        , Rc = gc(function () {
            return Xc("MSIE")
        })
        , Xc = function (a) {
            return -1 != La().indexOf(a)
        }
        , Yc = /^(-?[0-9.]{1,30})$/
        , Zc = function () {
            return /^true$/.test("false")
        }
        , $c = gc(function () {
            return (Ia && A ? A.mobile : !Gc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))) ? 2 : Gc() ? 1 : 0
        })
        , ad = function (a) {
            if ("number" !== typeof a.goog_pvsid)
                try {
                    var b = Object
                        , c = b.defineProperty
                        , d = void 0;
                    d = void 0 === d ? Math.random : d;
                    var e = Math.floor(d() * Math.pow(2, 52));
                    c.call(b, a, "goog_pvsid", {
                        value: e,
                        configurable: !1
                    })
                } catch (f) { }
            return Number(a.goog_pvsid) || -1
        }
        , bd = function (a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    function cd(a) {
        var b = sa.apply(1, arguments);
        if (0 === b.length)
            return new Q(a[0], nc);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return new Q(c, nc)
    }
    ; var dd = {
        Ia: 0,
        Ha: 1,
        Ea: 2,
        za: 3,
        Fa: 4,
        Aa: 5,
        Ga: 6,
        Ca: 7,
        Da: 8,
        ya: 9,
        Ba: 10
    };
    var ed = {
        Ka: 0,
        La: 1,
        Ja: 2
    };
    var fd = "a".charCodeAt()
        , gd = ic(dd)
        , hd = ic(ed);
    var id = function (a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }
        , ld = function (a) {
            var b = S(a, 16);
            return !0 === !!S(a, 1) ? (a = jd(a),
                a.forEach(function (c) {
                    if (c > b)
                        throw Error("ID " + c + " is past MaxVendorId " + b + "!");
                }),
                a) : kd(a, b)
        }
        , jd = function (a) {
            for (var b = S(a, 12), c = []; b--;) {
                var d = !0 === !!S(a, 1)
                    , e = S(a, 16);
                if (d)
                    for (d = S(a, 16); e <= d; e++)
                        c.push(e);
                else
                    c.push(e)
            }
            c.sort(function (f, h) {
                return f - h
            });
            return c
        }
        , kd = function (a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (S(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f))
                        throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        }
        , S = function (a, b) {
            if (a.g + b > a.h.length)
                throw Error("Requested length " + b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    var nd = function (a, b) {
        try {
            var c = bb(a.split(".")[0]).map(function (e) {
                return (m = e.toString(2),
                    r(m, "padStart")).call(m, 8, "0")
            }).join("")
                , d = new id(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = S(d, 12);
            c.cmpVersion = S(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = S(d, 6);
            c.isServiceSpecific = !!S(d, 1);
            c.useNonStandardStacks = !!S(d, 1);
            c.specialFeatureOptins = md(kd(d, 12, hd), hd);
            c.purpose = {
                consents: md(kd(d, 24, gd), gd),
                legitimateInterests: md(kd(d, 24, gd), gd)
            };
            c.purposeOneTreatment = !!S(d, 1);
            c.publisherCC = String.fromCharCode(fd + S(d, 6)) + String.fromCharCode(fd + S(d, 6));
            c.vendor = {
                consents: md(ld(d), b),
                legitimateInterests: md(ld(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }
        , md = function (a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = v(b);
                for (var d = b.next(); !d.done; d = b.next())
                    d = d.value,
                        c[d] = -1 !== a.indexOf(d)
            } else
                for (a = v(a),
                    d = a.next(); !d.done; d = a.next())
                    c[d.value] = !0;
            delete c[0];
            return c
        };
    function od(a) {
        return JSON.stringify([a.map(function (b) {
            var c = {};
            return [(c[b.ia] = b.message.toJSON(),
                c)]
        })])
    }
    ; var pd = function (a, b) {
        if (q.globalThis.fetch)
            q.globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: 65536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(function () { });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var qd = function (a) {
        O.call(this, a)
    };
    y(qd, O);
    var rd = function (a, b) {
        return J(a, 1, b, 0)
    }
        , sd = function (a, b) {
            return J(a, 2, b, 0)
        };
    var td = function (a) {
        O.call(this, a)
    };
    y(td, O);
    var ud = [1, 2];
    var vd = function (a) {
        O.call(this, a, -1, vd.g)
    };
    y(vd, O);
    var wd = function (a, b) {
        return Gb(a, 1, b)
    }
        , xd = function (a, b) {
            return Ib(a, 2, b)
        }
        , yd = function (a, b) {
            return yb(a, 4, b, rb)
        }
        , zd = function (a, b) {
            return Ib(a, 5, b)
        }
        , Ad = function (a, b) {
            return J(a, 6, b, 0)
        };
    vd.g = [2, 4, 5];
    var Bd = function (a) {
        O.call(this, a, -1, Bd.g)
    };
    y(Bd, O);
    Bd.g = [5];
    var Cd = [1, 2, 3, 4];
    var Dd = function (a) {
        O.call(this, a, -1, Dd.g)
    };
    y(Dd, O);
    Dd.g = [2, 3];
    var Ed = function (a) {
        O.call(this, a)
    };
    y(Ed, O);
    Ed.prototype.getTagSessionCorrelator = function () {
        return I(F(this, 2), 0)
    }
        ;
    var Gd = function (a) {
        var b = new Ed;
        return Hb(b, 4, Fd, a)
    }
        , Fd = [4, 5, 7];
    var Hd = function (a) {
        O.call(this, a, -1, Hd.g)
    };
    y(Hd, O);
    Hd.g = [3];
    var Id = function (a) {
        O.call(this, a, -1, Id.g)
    };
    y(Id, O);
    Id.g = [4, 5];
    var Jd = function (a) {
        O.call(this, a, -1, Jd.g)
    };
    y(Jd, O);
    Jd.prototype.getTagSessionCorrelator = function () {
        return I(F(this, 1), 0)
    }
        ;
    Jd.g = [2];
    var Kd = function (a) {
        O.call(this, a)
    };
    y(Kd, O);
    var Ld = [4];
    function Md(a) {
        a.ha.apply(a, w(sa.apply(1, arguments).map(function (b) {
            return {
                ia: 2,
                message: b
            }
        })))
    }
    function Nd(a) {
        a.ha.apply(a, w(sa.apply(1, arguments).map(function (b) {
            return {
                ia: 4,
                message: b
            }
        })))
    }
    ; var Od = function () {
        this.i = this.i;
        this.l = this.l
    };
    Od.prototype.i = !1;
    Od.prototype.P = function () {
        if (this.l)
            for (; this.l.length;)
                this.l.shift()()
    }
        ;
    var Pd = function (a, b, c, d, e) {
        this.C = a;
        this.s = b;
        this.G = c;
        this.i = d;
        this.l = e;
        this.g = [];
        this.h = null
    }
        , Qd = function (a) {
            null !== a.h && (clearTimeout(a.h),
                a.h = null);
            if (a.g.length) {
                var b = od(a.g);
                a.s(a.C + "?e=1", b);
                a.g = []
            }
        };
    Pd.prototype.ha = function () {
        var a = sa.apply(0, arguments)
            , b = this;
        this.l && 65536 <= od(this.g.concat(a)).length && Qd(this);
        this.g.push.apply(this.g, w(a));
        this.g.length >= this.i && Qd(this);
        this.g.length && null === this.h && (this.h = setTimeout(function () {
            Qd(b)
        }, this.G))
    }
        ;
    var Rd = function (a, b, c) {
        Pd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", pd, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!q.globalThis.fetch)
    };
    y(Rd, Pd);
    var Sd = function (a) {
        this.g = a;
        this.defaultValue = !1
    }
        , Td = function (a) {
            this.g = a;
            this.defaultValue = 0
        };
    var Ud = new Sd(501898423)
        , Vd = new Sd(494337909)
        , Wd = new Td(523264412)
        , Xd = new Sd(523253321)
        , Yd = new Td(24)
        , Zd = new function (a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        }
            (1934, ["A0VQgOQvA+kwCj319NCwgf8+syUgEQ8/LLpB8RxxlRC3AkJ9xx8IAvVuQ/dcwy0ok7sGKufLLu6WhsXbQR9/UwwAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6kRo9zXJhOvsR4D/VeZ9CiApPAxnOGzBkW88d8eIt9ex2oOzlX+AoUk/BS50Y9Ysy2jwyHR49Mb7XwP+l9yygIAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3mbHZoS4VJtJ8j1aE8+Z9vaGf/oMV1eTNIWMrvGqWgNnOmvaxnRGliqKIZU2eiTzCj5Qpz8B1/UTTLuony5bAAAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="])
        , $d = new Sd(203);
    var ae = function (a) {
        O.call(this, a)
    };
    y(ae, O);
    var be = function (a) {
        O.call(this, a)
    };
    y(be, O);
    var ce = function (a) {
        O.call(this, a, -1, ce.g)
    };
    y(ce, O);
    var de = $b(ce);
    ce.g = [7];
    var ee = function (a) {
        this.g = a || {
            cookie: ""
        }
    };
    ee.prototype.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Pa;
            d = c.Qa || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var g = c.ta
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === g && (g = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > g ? "" : 0 == g ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * g)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
        ;
    ee.prototype.get = function (a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = xa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
        ;
    ee.prototype.isEmpty = function () {
        return !this.g.cookie
    }
        ;
    ee.prototype.clear = function () {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = xa(a[f]),
                d = e.indexOf("="),
                -1 == d ? (b.push(""),
                    c.push(e)) : (b.push(e.substring(0, d)),
                        c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            c = b[a],
                this.get(c),
                this.set(c, "", {
                    ta: 0,
                    path: void 0,
                    domain: void 0
                })
    }
        ;
    function fe(a) {
        return (a = ge(a)) ? L(a, be, 4) : null
    }
    function ge(a) {
        if (a = (new ee(a)).get("FCCDCF", ""))
            if (r(a, "startsWith").call(a, "%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        try {
            return b ? de(b) : null
        } catch (c) {
            return null
        }
    }
    ; ic(dd).map(function (a) {
        return Number(a)
    });
    ic(ed).map(function (a) {
        return Number(a)
    });
    var he = function (a) {
        this.g = a;
        this.h = null
    }
        , je = function (a) {
            a.__tcfapiPostMessageReady || ie(new he(a))
        }
        , ie = function (a) {
            a.h = function (b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function (f, h) {
                    var g = {};
                    g.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: h,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(g) : g;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            }
                ;
            a.g.addEventListener("message", a.h);
            a.g.__tcfapiPostMessageReady = !0
        };
    var ke = function (a, b) {
        var c = a.document
            , d = function () {
                if (!a.frames[b])
                    if (c.body) {
                        var e = bd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else
                        a.setTimeout(d, 5)
            };
        d()
    };
    var le = function (a) {
        this.g = a;
        var b;
        this.l = (b = (b = ge(a.document)) ? L(b, ae, 5) || null : null) ? F(b, 2) : null;
        this.h = (b = fe(a.document)) && null != F(b, 1) ? F(b, 1) : null;
        this.i = (a = fe(a.document)) && null != F(a, 2) ? F(a, 2) : null
    }
        , oe = function (a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new le(a),
                me(a),
                ne(a))
        }
        , me = function (a) {
            !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
                ke(a.g, "__uspapiLocator"),
                wa("__uspapi", function () {
                    return a.C.apply(a, w(sa.apply(0, arguments)))
                }))
        };
    le.prototype.C = function (a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.l
        }, !0)
    }
        ;
    var ne = function (a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
            ke(a.g, "__tcfapiLocator"),
            a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
            wa("__tcfapi", function () {
                return a.s.apply(a, w(sa.apply(0, arguments)))
            }),
            je(a.g))
    };
    le.prototype.s = function (a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b)
                c(null, !1);
            else
                switch (b = this.g.__tcfapiEventListeners,
                a) {
                    case "getTCData":
                        !d || Array.isArray(d) && d.every(function (e) {
                            return "number" === typeof e
                        }) ? c(pe(this, d, null), !0) : c(null, !1);
                        break;
                    case "ping":
                        c({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.0",
                            cmpVersion: 1,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        a = b.push(c);
                        c(pe(this, null, a - 1), !0);
                        break;
                    case "removeEventListener":
                        b[d] ? (b[d] = null,
                            c(!0)) : c(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        c(null, !1)
                }
    }
        ;
    var pe = function (a, b, c) {
        if (!a.h)
            return null;
        b = nd(a.h, b);
        b.addtlConsent = null != a.i ? a.i : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var qe = function (a) {
        return "string" === typeof a
    };
    var re = function (a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var se = null
        , te = function () {
            if (null === se) {
                se = "";
                try {
                    var a = "";
                    try {
                        a = z.top.location.hash
                    } catch (c) {
                        a = z.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        se = b ? b[1] : ""
                    }
                } catch (c) { }
            }
            return se
        };
    var ue = function (a) {
        O.call(this, a, -1, ue.g)
    };
    y(ue, O);
    ue.g = [2, 8];
    var ve = [3, 4, 5]
        , we = [6, 7];
    function xe(a) {
        return null != a ? !a : a
    }
    function ye(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
    function ze(a, b) {
        var c = M(a, ue, 2);
        if (!c.length)
            return Ae(a, b);
        a = N(a, 1);
        if (1 === a)
            return xe(ze(c[0], b));
        c = Ta(c, function (d) {
            return function () {
                return ze(d, b)
            }
        });
        switch (a) {
            case 2:
                return ye(c, !1);
            case 3:
                return ye(c, !0)
        }
    }
    function Ae(a, b) {
        var c = zb(a, ve);
        a: {
            switch (c) {
                case 3:
                    var d = N(a, K(a, ve, 3));
                    break a;
                case 4:
                    d = N(a, K(a, ve, 4));
                    break a;
                case 5:
                    d = N(a, K(a, ve, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, w(Jb(a, 8)))
            } catch (f) {
                return
            }
            b = N(a, 1);
            if (4 === b)
                return !!e;
            if (5 === b)
                return null != e;
            if (12 === b)
                a = Kb(a, K(a, we, 7));
            else
                a: {
                    switch (c) {
                        case 4:
                            a = Lb(a, K(a, we, 6));
                            break a;
                        case 5:
                            a = Kb(a, K(a, we, 7));
                            break a
                    }
                    a = void 0
                }
            if (null != a) {
                if (6 === b)
                    return e === a;
                if (9 === b)
                    return null != e && 0 === Ha(String(e), a);
                if (null != e)
                    switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return qe(a) && qe(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Ha(String(e), a);
                        case 11:
                            return null != e && 1 === Ha(String(e), a)
                    }
            }
        }
    }
    function Be(a, b) {
        return !a || !(!b || !ze(a, b))
    }
    ; var Ce = function (a) {
        O.call(this, a, -1, Ce.g)
    };
    y(Ce, O);
    Ce.g = [4];
    var De = function (a) {
        O.call(this, a)
    };
    y(De, O);
    var T = function (a) {
        O.call(this, a, -1, T.g)
    };
    y(T, O);
    var Ee = $b(T);
    T.g = [5];
    var Fe = [1, 2, 3, 6, 7];
    var Ge = function (a, b, c) {
        var d = void 0 === d ? new Rd(b) : d;
        this.s = a;
        this.l = c;
        this.h = d;
        this.g = [];
        this.i = 0 < a && Tc() < 1 / a
    }
        , Ie = function (a, b, c, d, e, f) {
            if (a.i) {
                var h = sd(rd(new qd, b), c);
                b = Ad(xd(wd(zd(yd(new vd, d), e), h), a.g.slice()), f);
                b = Gd(b);
                Nd(a.h, He(a, b));
                if (1 === f || 3 === f || 4 === f && !a.g.some(function (g) {
                    return N(g, 1) === N(h, 1) && N(g, 2) === c
                }))
                    a.g.push(h),
                        100 < a.g.length && a.g.shift()
            }
        }
        , Je = function (a, b, c, d) {
            if (a.i && a.l) {
                var e = new Dd;
                b = Ib(e, 2, b);
                c = Ib(b, 3, c);
                d && J(c, 1, d, 0);
                d = new Ed;
                d = Hb(d, 7, Fd, c);
                Nd(a.h, He(a, d))
            }
        }
        , He = function (a, b) {
            b = J(b, 1, Date.now(), 0);
            var c = ad(window);
            b = J(b, 2, c, 0);
            return J(b, 6, a.s, 0)
        };
    var U = function (a) {
        var b = "M";
        if (a.M && a.hasOwnProperty(b))
            return a.M;
        b = new a;
        return a.M = b
    };
    var Ke = function () {
        var a = {};
        this.o = (a[3] = {},
            a[4] = {},
            a[5] = {},
            a)
    };
    var Le = Zc();
    function Me(a, b) {
        switch (b) {
            case 1:
                return N(a, K(a, Fe, 1));
            case 2:
                return N(a, K(a, Fe, 2));
            case 3:
                return N(a, K(a, Fe, 3));
            case 6:
                return N(a, K(a, Fe, 6));
            default:
                return null
        }
    }
    function Ne(a, b) {
        if (!a)
            return null;
        switch (b) {
            case 1:
                return xb(a, 1);
            case 7:
                return Kb(a, 3);
            case 2:
                return Lb(a, 2);
            case 3:
                return Kb(a, 3);
            case 6:
                return Jb(a, 4);
            default:
                return null
        }
    }
    var Oe = gc(function () {
        if (!Le)
            return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a)
                return JSON.parse(a)
        } catch (b) { }
        return {}
    });
    function Pe(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d, f, h;
        U(V).i[e] = null != (h = null == (f = U(V).i[e]) ? void 0 : f.add(b)) ? h : (new q.Set).add(b);
        e = Oe();
        if (null != e[b])
            return e[b];
        b = Qe(d)[b];
        if (!b)
            return c;
        b = Ee(JSON.stringify(b));
        b = Re(b);
        a = Ne(b, a);
        return null != a ? a : c
    }
    function Re(a) {
        var b = U(Ke).o;
        if (b) {
            var c = Va(M(a, De, 5), function (f) {
                return Be(L(f, ue, 1), b)
            });
            if (c) {
                var d;
                return null != (d = L(c, Ce, 2)) ? d : null
            }
        }
        var e;
        return null != (e = L(a, Ce, 4)) ? e : null
    }
    var V = function () {
        this.h = {};
        this.l = [];
        this.i = {};
        this.g = new q.Map
    };
    function Se(a, b, c) {
        return !!Pe(1, a, void 0 === b ? !1 : b, c)
    }
    function Te(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Pe(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function Ue(a, b, c) {
        b = void 0 === b ? "" : b;
        a = Pe(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function Ve(a, b, c) {
        b = void 0 === b ? [] : b;
        a = Pe(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Qe(a) {
        return U(V).h[a] || (U(V).h[a] = {})
    }
    function We(a, b) {
        var c = Qe(b);
        Vc(a, function (d, e) {
            return c[e] = d
        })
    }
    function Xe(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = []
            , h = [];
        Qa(b, function (g) {
            var k = Qe(g);
            Qa(a, function (l) {
                var n = zb(l, Fe)
                    , u = Me(l, n);
                if (u) {
                    var p, ja, Cb;
                    var Db = null != (Cb = null == (p = U(V).g.get(g)) ? void 0 : null == (ja = p.get(u)) ? void 0 : ja.slice(0)) ? Cb : [];
                    a: {
                        p = new Bd;
                        switch (n) {
                            case 1:
                                Ab(p, 1, Cd, u);
                                break;
                            case 2:
                                Ab(p, 2, Cd, u);
                                break;
                            case 3:
                                Ab(p, 3, Cd, u);
                                break;
                            case 6:
                                Ab(p, 4, Cd, u);
                                break;
                            default:
                                n = void 0;
                                break a
                        }
                        yb(p, 5, Db, rb);
                        n = p
                    }
                    if (Db = n) {
                        var Sa;
                        Db = !(null == (Sa = U(V).i[g]) || !Sa.has(u))
                    }
                    Db && f.push(n);
                    if (Sa = n) {
                        var ka;
                        Sa = !(null == (ka = U(V).g.get(g)) || !ka.has(u))
                    }
                    Sa && h.push(n);
                    e || (ka = U(V),
                        ka.g.has(g) || ka.g.set(g, new q.Map),
                        ka.g.get(g).has(u) || ka.g.get(g).set(u, []),
                        d && ka.g.get(g).get(u).push(d));
                    k[u] = l.toJSON()
                }
            })
        });
        (f.length || h.length) && Je(c, f, h, null != d ? d : void 0)
    }
    function Ye(a, b) {
        var c = Qe(b);
        Qa(a, function (d) {
            var e = Ee(JSON.stringify(d))
                , f = zb(e, Fe);
            (e = Me(e, f)) && (c[e] || (c[e] = d))
        })
    }
    function Ze() {
        return Ta(r(Object, "keys").call(Object, U(V).h), function (a) {
            return Number(a)
        })
    }
    function $e(a) {
        Wa(U(V).l, a) || We(Qe(4), a)
    }
    ; function W(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function X(a, b, c) {
        return b[a] || c
    }
    function af(a) {
        W(5, Se, a);
        W(6, Te, a);
        W(7, Ue, a);
        W(8, Ve, a);
        W(13, Ye, a);
        W(15, $e, a)
    }
    function bf(a) {
        W(4, function (b) {
            U(Ke).o = b
        }, a);
        W(9, function (b, c) {
            var d = U(Ke);
            null == d.o[3][b] && (d.o[3][b] = c)
        }, a);
        W(10, function (b, c) {
            var d = U(Ke);
            null == d.o[4][b] && (d.o[4][b] = c)
        }, a);
        W(11, function (b, c) {
            var d = U(Ke);
            null == d.o[5][b] && (d.o[5][b] = c)
        }, a);
        W(14, function (b) {
            for (var c = U(Ke), d = v([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                    r(Object, "assign").call(Object, c.o[e], b[e])
        }, a)
    }
    function cf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ; var df = function () { };
    df.prototype.h = function () { }
        ;
    df.prototype.g = function () {
        return []
    }
        ;
    var ef = function (a, b, c) {
        a.h = function (d, e) {
            X(2, b, function () {
                return []
            })(d, c, e)
        }
            ;
        a.g = function () {
            return X(3, b, function () {
                return []
            })(c)
        }
    };
    function ff(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = bd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    ; function gf(a, b) {
        try {
            var c = a.split(".");
            a = z;
            for (var d = 0, e; null != a && d < c.length; d++)
                e = a,
                    a = a[c[d]],
                    "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (h) { }
    }
    var hf = {}
        , jf = {}
        , kf = {}
        , lf = {}
        , mf = (lf[3] = (hf[8] = function (a) {
            try {
                return null != va(a)
            } catch (b) { }
        }
            ,
            hf[9] = function (a) {
                try {
                    var b = va(a)
                } catch (c) {
                    return
                }
                if (a = "function" === typeof b)
                    b = b && b.toString && b.toString(),
                        a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            }
            ,
            hf[10] = function () {
                return window === window.top
            }
            ,
            hf[6] = function (a) {
                return Wa(U(df).g(), Number(a))
            }
            ,
            hf[27] = function (a) {
                a = gf(a, "boolean");
                return void 0 !== a ? a : void 0
            }
            ,
            hf[60] = function (a) {
                try {
                    return !!z.document.querySelector(a)
                } catch (b) { }
            }
            ,
            hf[69] = function (a) {
                var b = z.document;
                b = void 0 === b ? document : b;
                var c;
                return !(null == (c = b.featurePolicy) || !(m = c.features(),
                    r(m, "includes")).call(m, a))
            }
            ,
            hf[70] = function (a) {
                var b = z.document;
                b = void 0 === b ? document : b;
                var c;
                return !(null == (c = b.featurePolicy) || !(m = c.allowedFeatures(),
                    r(m, "includes")).call(m, a))
            }
            ,
            hf),
            lf[4] = (jf[3] = function () {
                return $c()
            }
                ,
                jf[6] = function (a) {
                    a = gf(a, "number");
                    return void 0 !== a ? a : void 0
                }
                ,
                jf),
            lf[5] = (kf[2] = function () {
                return window.location.href
            }
                ,
                kf[3] = function () {
                    try {
                        return window.top.location.hash
                    } catch (a) {
                        return ""
                    }
                }
                ,
                kf[4] = function (a) {
                    a = gf(a, "string");
                    return void 0 !== a ? a : void 0
                }
                ,
                kf),
            lf);
    function nf() {
        var a = void 0 === a ? z : a;
        return a.ggeac || (a.ggeac = {})
    }
    ; var of = function (a) {
        O.call(this, a, -1, of.g)
    };
    y(of, O);
    of.prototype.getId = function () {
        return I(F(this, 1), 0)
    }
        ;
    of.g = [2];
    var pf = function (a) {
        O.call(this, a, -1, pf.g)
    };
    y(pf, O);
    pf.g = [2];
    var qf = function (a) {
        O.call(this, a, -1, qf.g)
    };
    y(qf, O);
    qf.g = [2];
    var rf = function (a) {
        O.call(this, a)
    };
    y(rf, O);
    var sf = function (a) {
        O.call(this, a, -1, sf.g)
    };
    y(sf, O);
    sf.g = [1, 4, 2, 3];
    var tf = [12, 13, 20]
        , uf = function (a, b, c, d) {
            var e = this
                , f = void 0 === d ? {} : d
                , h = void 0 === f.L ? !1 : f.L;
            d = void 0 === f.wa ? [] : f.wa;
            f = void 0 === f.F ? {} : f.F;
            this.u = c;
            this.i = a.slice();
            this.l = {};
            this.L = h;
            this.F = f;
            a = {};
            this.g = (a[b] = [],
                a[4] = [],
                a);
            this.h = {};
            (b = te()) && Qa(b.split(",") || [], function (g) {
                (g = Number(g)) && (e.h[g] = !0)
            });
            Qa(d, function (g) {
                e.h[g] = !0
            })
        }
        , yf = function (a, b, c) {
            var d = [], e = vf(a.i, b), f;
            if (f = 9 !== b)
                a.l[b] ? f = !0 : (a.l[b] = !0,
                    f = !1);
            if (f)
                return Ie(a.u, b, c, d, [], 4),
                    d;
            if (!e.length)
                return Ie(a.u, b, c, d, [], 3),
                    d;
            var h = Wa(tf, b)
                , g = [];
            Qa(e, function (k) {
                var l = new td;
                if (k = wf(a, k, c, l))
                    0 !== zb(l, ud) && g.push(l),
                        l = k.getId(),
                        d.push(l),
                        xf(a, l, h ? 4 : c),
                        (k = M(k, T, 2)) && (h ? Xe(k, Ze(), a.u, l) : Xe(k, [c], a.u, l))
            });
            Ie(a.u, b, c, d, g, 1);
            return d
        }
        , xf = function (a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            Wa(a, b) || a.push(b)
        }
        , zf = function (a, b) {
            a.i.push.apply(a.i, w(Ra(Ta(b, function (c) {
                return new qf(c)
            }), function (c) {
                return !Wa(tf, N(c, 1))
            })))
        }
        , wf = function (a, b, c, d) {
            var e = U(Ke).o;
            if (!Be(L(b, ue, 3), e))
                return null;
            var f = M(b, of, 2)
                , h = N(b, 6);
            if (h) {
                Ab(d, 1, ud, h);
                f = e[4];
                switch (c) {
                    case 2:
                        var g = f[8];
                        break;
                    case 1:
                        g = f[7]
                }
                c = void 0;
                if (g)
                    try {
                        c = g(h),
                            J(d, 3, c, 0)
                    } catch (k) { }
                return (b = Af(b, c)) ? Bf(a, [b], 1) : null
            }
            if (h = N(b, 10)) {
                Ab(d, 2, ud, h);
                g = null;
                switch (c) {
                    case 1:
                        g = e[4][9];
                        break;
                    case 2:
                        g = e[4][10];
                        break;
                    default:
                        return null
                }
                c = g ? g(String(h)) : void 0;
                if (void 0 === c && 1 === N(b, 11))
                    return null;
                void 0 !== c && J(d, 3, c, 0);
                return (b = Af(b, c)) ? Bf(a, [b], 1) : null
            }
            d = e ? Ra(f, function (k) {
                return Be(L(k, ue, 3), e)
            }) : f;
            if (!d.length)
                return null;
            c = d.length * I(qb(F(b, 1)), 0);
            return (b = N(b, 4)) ? Cf(a, b, c, d) : Bf(a, d, c / 1E3)
        }
        , Cf = function (a, b, c, d) {
            var e = null != a.F[b] ? a.F[b] : 1E3;
            if (0 >= e)
                return null;
            d = Bf(a, d, c / e);
            a.F[b] = d ? 0 : e - c;
            return d
        }
        , Bf = function (a, b, c) {
            var d = a.h
                , e = Ua(b, function (f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.L ? null : Uc(b, c)
        }
        , Df = function (a, b) {
            W(1, function (c) {
                a.h[c] = !0
            }, b);
            W(2, function (c, d) {
                return yf(a, c, d)
            }, b);
            W(3, function (c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            W(12, function (c) {
                return void zf(a, c)
            }, b);
            W(16, function (c, d) {
                return void xf(a, c, d)
            }, b)
        };
    function vf(a, b) {
        return (a = Ua(a, function (c) {
            return N(c, 1) === b
        })) && M(a, pf, 2) || []
    }
    function Af(a, b) {
        var c = M(a, of, 2)
            , d = c.length
            , e = I(qb(F(a, 8)), 0);
        a = d * I(qb(F(a, 1)), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Tc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a)
            return null;
        c = c[d];
        e = U(Ke).o;
        return !c || e && !Be(L(c, ue, 3), e) ? null : c
    }
    ; var Ef = function () {
        var a = {};
        this.h = function (b, c) {
            return null != a[b] ? a[b] : c
        }
            ;
        this.g = function (b, c) {
            return null != a[b] ? a[b] : c
        }
            ;
        this.s = function (b, c) {
            return null != a[b] ? a[b] : c
        }
            ;
        this.i = function (b, c) {
            return null != a[b] ? a[b] : c
        }
            ;
        this.l = function () { }
    };
    function Ff(a) {
        return U(Ef).h(a.g, a.defaultValue)
    }
    ; var Gf = function () {
        this.g = function () { }
    }
        , Hf = function (a, b) {
            a.g = X(14, b, function () { })
        };
    function If(a) {
        U(Gf).g(a)
    }
    ; var Jf, Kf, Lf, Mf, Nf, Of;
    function Pf(a) {
        var b = a.ma
            , c = a.o
            , d = a.Ma
            , e = void 0 === a.ja ? nf() : a.ja
            , f = void 0 === a.ea ? 0 : a.ea;
        a = void 0 === a.u ? new Ge(null != (Mf = null == (Jf = L(b, rf, 5)) ? void 0 : I(F(Jf, 2), 0)) ? Mf : 0, null != (Nf = null == (Kf = L(b, rf, 5)) ? void 0 : I(F(Kf, 4), 0)) ? Nf : 0, null != (Of = null == (Lf = L(b, rf, 5)) ? void 0 : xb(Lf, 3)) ? Of : !1) : a.u;
        e.hasOwnProperty("init-done") ? (X(12, e, function () { })(Ta(M(b, qf, 2), function (h) {
            return h.toJSON()
        })),
            X(13, e, function () { })(Ta(M(b, T, 1), function (h) {
                return h.toJSON()
            }), f),
            c && X(14, e, function () { })(c),
            Qf(f, e)) : (Df(new uf(M(b, qf, 2), f, a, d), e),
                af(e),
                bf(e),
                cf(e),
                Qf(f, e),
                Xe(M(b, T, 1), [f], a, void 0, !0),
                Le = Le || !(!d || !d.Na),
                If(mf),
                c && If(c))
    }
    function Qf(a, b) {
        var c = b = void 0 === b ? nf() : b;
        ef(U(df), c, a);
        Rf(b, a);
        a = b;
        Hf(U(Gf), a);
        U(Ef).l()
    }
    function Rf(a, b) {
        var c = U(Ef);
        c.h = function (d, e) {
            return X(5, a, function () {
                return !1
            })(d, e, b)
        }
            ;
        c.g = function (d, e) {
            return X(6, a, function () {
                return 0
            })(d, e, b)
        }
            ;
        c.s = function (d, e) {
            return X(7, a, function () {
                return ""
            })(d, e, b)
        }
            ;
        c.i = function (d, e) {
            return X(8, a, function () {
                return []
            })(d, e, b)
        }
            ;
        c.l = function () {
            X(15, a, function () { })(b)
        }
    }
    ; function Sf(a) {
        a = void 0 === a ? Tc() : a;
        return function (b) {
            return Wc(a + "." + b) % 1E3
        }
    }
    ; var Tf = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
        , Uf = function () {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? cd(Tf) : c;
            this.i = a;
            this.h = b;
            this.g = c
        };
    function Vf(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = bd("IMG", a.document);
        if (c) {
            var f = function () {
                if (c) {
                    var h = a.google_image_requests
                        , g = Array.prototype.indexOf.call(h, e, void 0);
                    0 <= g && Array.prototype.splice.call(h, g, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            hc(e, "load", f);
            hc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Xf = function (a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
        Vc(a, function (d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        Wf(c, b)
    }
        , Wf = function (a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            },
                d && (b.mode = "cors",
                    b.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    }),
                c.fetch(a, b)) : Vf(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Yf = P("gpt/pubads_impl_")
        , Zf = P("pagead/managed/js/gpt/");
    function $f(a) {
        a = void 0 === a ? z : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ; var ag = function (a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
        , bg = function (a, b) {
            var c = $f(b);
            c && ag({
                label: a,
                type: 9,
                value: c
            }, b)
        }
        , cg = function (a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window
                , f = "undefined" !== typeof queueMicrotask;
            return function () {
                d && f && queueMicrotask(function () {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var h = $f()
                    , g = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    g = 13;
                    if (!c)
                        throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && h && ag(r(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: h,
                        duration: ($f() || 0) - h,
                        type: g
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        }
        , dg = function (a, b) {
            return cg(a, b, function (c, d) {
                var e = new Uf;
                var f = void 0 === f ? e.h : f;
                var h = void 0 === h ? e.i : h;
                Math.random() > f || (d.error && d.meta && d.id || (d = new re(d, {
                    context: c,
                    id: h
                })),
                    z.google_js_errors = z.google_js_errors || [],
                    z.google_js_errors.push(d),
                    z.error_rep_loaded || (f = z.document,
                        c = bd("SCRIPT", f),
                        c.src = lc(e.g),
                        Lc(c),
                        (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e),
                        z.error_rep_loaded = !0))
            })
        };
    function Y(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }
    function eg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }
    function fg() {
        var a = new q.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b)
                return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next())
                a.add(e.value.getSlotId().getDomId())
        } catch (f) { }
        return a
    }
    function gg(a) {
        a = a.id;
        return null != a && (fg().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }
    function hg(a, b, c) {
        if (!a.sources)
            return !1;
        switch (ig(a)) {
            case 2:
                var d = jg(a);
                if (d)
                    return c.some(function (f) {
                        return kg(d, f)
                    });
                break;
            case 1:
                var e = lg(a);
                if (e)
                    return b.some(function (f) {
                        return kg(e, f)
                    })
        }
        return !1
    }
    function ig(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(function (b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function lg(a) {
        return mg(a, function (b) {
            return b.currentRect
        })
    }
    function jg(a) {
        return mg(a, function (b) {
            return b.previousRect
        })
    }
    function mg(a, b) {
        return a.sources.reduce(function (c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    function kg(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var ng = function () {
        Od.call(this);
        this.h = this.g = this.I = this.H = this.G = 0;
        this.aa = this.X = Number.NEGATIVE_INFINITY;
        this.T = this.V = this.W = this.Y = this.da = this.s = this.ca = this.K = 0;
        this.U = !1;
        this.J = this.R = this.C = 0;
        this.u = null;
        this.Z = !1;
        this.S = function () { }
            ;
        var a = document.querySelector("[data-google-query-id]");
        this.ba = a ? a.getAttribute("data-google-query-id") : null
    }, og, pg;
    y(ng, Od);
    var sg = function () {
        var a = new ng;
        if (Ff($d)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next())
                    c = c.value,
                        qg(a).observe({
                            type: c,
                            buffered: !0
                        });
                rg(a)
            }
        }
    }
        , qg = function (a) {
            a.u || (a.u = new PerformanceObserver(dg(640, function (b) {
                var c = og !== window.scrollX || pg !== window.scrollY ? [] : tg
                    , d = ug();
                b = v(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next())
                    switch (e = e.value,
                    e.entryType) {
                        case "layout-shift":
                            var f = a;
                            if (!e.hadRecentInput) {
                                f.G += Number(e.value);
                                Number(e.value) > f.H && (f.H = Number(e.value));
                                f.I += 1;
                                var h = hg(e, c, d);
                                h && (f.s += e.value,
                                    f.Y++);
                                if (5E3 < e.startTime - f.X || 1E3 < e.startTime - f.aa)
                                    f.X = e.startTime,
                                        f.g = 0,
                                        f.h = 0;
                                f.aa = e.startTime;
                                f.g += e.value;
                                h && (f.h += e.value);
                                f.g > f.K && (f.K = f.g,
                                    f.da = f.h,
                                    f.ca = e.startTime + e.duration)
                            }
                            break;
                        case "largest-contentful-paint":
                            a.W = Math.floor(e.renderTime || e.loadTime);
                            a.V = e.size;
                            break;
                        case "first-input":
                            a.T = Number((e.processingStart - e.startTime).toFixed(3));
                            a.U = !0;
                            break;
                        case "longtask":
                            e = Math.max(0, e.duration - 50),
                                a.C += e,
                                a.R = Math.max(a.R, e),
                                a.J += 1
                    }
            })));
            return a.u
        }
        , rg = function (a) {
            var b = dg(641, function () {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && vg(a)
            })
                , c = dg(641, function () {
                    return void vg(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.S = function () {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                qg(a).disconnect()
            }
        };
    ng.prototype.P = function () {
        Od.prototype.P.call(this);
        this.S()
    }
        ;
    var vg = function (a) {
        if (!a.Z) {
            a.Z = !0;
            qg(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += eg("cls", a.G),
                b += eg("mls", a.H),
                b += Y("nls", a.I),
                window.LayoutShiftAttribution && (b += eg("cas", a.s),
                    b += Y("nas", a.Y),
                    b += eg("was", a.da)),
                b += eg("wls", a.K),
                b += eg("tls", a.ca));
            window.LargestContentfulPaint && (b += Y("lcp", a.W),
                b += Y("lcps", a.V));
            window.PerformanceEventTiming && a.U && (b += Y("fid", a.T));
            window.PerformanceLongTaskTiming && (b += Y("cbt", a.C),
                b += Y("mbt", a.R),
                b += Y("nlt", a.J));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                gg(e.value) && c++;
            b += Y("nif", c);
            c = window.google_unique_id;
            b += Y("ifi", "number" === typeof c ? c : 0);
            c = U(df).g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (z === z.top ? 1 : 0);
            b += a.ba ? "&qqid=" + encodeURIComponent(a.ba) : Y("pvsid", ad(z));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.i || (a.i = !0,
                a.P())
        }
    }
        , ug = function () {
            var a = r(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(gg)
                , b = [].concat(w(fg())).map(function (c) {
                    return document.getElementById(c)
                }).filter(function (c) {
                    return null !== c
                });
            og = window.scrollX;
            pg = window.scrollY;
            return tg = [].concat(w(a), w(b)).map(function (c) {
                return c.getBoundingClientRect()
            })
        }
        , tg = [];
    var wg = function (a) {
        O.call(this, a)
    };
    y(wg, O);
    wg.prototype.getVersion = function () {
        return Kb(this, 2)
    }
        ;
    var xg = function (a) {
        O.call(this, a, -1, xg.g)
    };
    y(xg, O);
    var yg = function (a, b) {
        return H(a, 2, b)
    }
        , zg = function (a, b) {
            return H(a, 3, b)
        }
        , Ag = function (a, b) {
            return H(a, 4, b)
        }
        , Bg = function (a, b) {
            return H(a, 5, b)
        }
        , Cg = function (a, b) {
            return H(a, 9, b)
        }
        , Dg = function (a, b) {
            return Ib(a, 10, b)
        }
        , Eg = function (a, b) {
            return H(a, 11, b)
        }
        , Fg = function (a, b) {
            return H(a, 1, b)
        }
        , Gg = function (a, b) {
            return H(a, 7, b)
        };
    xg.g = [10, 6];
    var Hg = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Ig(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Jg(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function Kg(a) {
        if (!Jg(a))
            return null;
        var b = Ig(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Hg).then(function (c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function Lg(a) {
        var b;
        return Eg(Dg(Bg(yg(Fg(Ag(Gg(Cg(zg(new xg, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
            var d = new wg;
            d = H(d, 1, c.brand);
            return H(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function Mg(a) {
        var b, c;
        return null != (c = null == (b = Kg(a)) ? void 0 : b.then(function (d) {
            return Lg(d)
        })) ? c : null
    }
    ; function Ng(a, b) {
        var c = {};
        b = (c[0] = Sf(b.ua),
            c);
        U(df).h(a, b)
    }
    ; var Z = {}
        , Og = (Z[23] = .001,
            Z[253] = !1,
            Z[246] = [],
            Z[150] = "",
            Z[221] = Zc(),
            Z[36] = Zc(),
            Z[172] = null,
            Z[260] = void 0,
            Z[251] = null,
            Z)
        , Pg = function () {
            this.g = !1
        };
    function Qg(a) {
        U(Pg).g = !0;
        return Og[a]
    }
    function Rg(a, b) {
        U(Pg).g = !0;
        Og[a] = b
    }
    ; var Sg = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    function Tg(a) {
        return a ? !Sg.test(a.src) : !0
    }
    ; function Ug(a) {
        var b = a.ra
            , c = a.qa
            , d = a.la
            , e = a.na
            , f = Tg(a.fa);
        a = {};
        var h = {}
            , g = {};
        return g[3] = (a[3] = function () {
            return !f
        }
            ,
            a[59] = function () {
                var k = sa.apply(0, arguments), l = r(k, "includes"), n = String, u;
                var p = void 0 === p ? window : p;
                var ja;
                p = null != (ja = null == (u = Ic(p.location.href.match(Hc)[3] || null)) ? void 0 : u.split(".")) ? ja : [];
                u = 2 > p.length ? null : "uk" === p[p.length - 1] ? 3 > p.length ? null : Wc(p.splice(p.length - 3).join(".")) : Wc(p.splice(p.length - 2).join("."));
                return l.call(k, n(u))
            }
            ,
            a[61] = function () {
                return c
            }
            ,
            a[63] = function () {
                return c || ".google.ch" === e
            }
            ,
            a),
            g[4] = (h[1] = function () {
                return d
            }
                ,
                h[4] = function () {
                    if (Yc.test("0")) {
                        var k = Number("0");
                        k = isNaN(k) ? null : k
                    } else
                        k = null;
                    return k || 0
                }
                ,
                h[13] = function () {
                    return b || 0
                }
                ,
                h),
            g[5] = {},
            g
    }
    ; function Vg(a, b) {
        var c = new sf(Qg(246));
        if (!M(c, T, 1).length && M(a, T, 1).length) {
            var d = M(a, T, 1);
            Ib(c, 1, d)
        }
        !M(c, qf, 2).length && M(a, qf, 2).length && (d = M(a, qf, 2),
            Ib(c, 2, d));
        void 0 === Bb(c, rf, 5, !1) && void 0 !== Bb(a, rf, 5, !1) && (a = L(a, rf, 5),
            Gb(c, 5, a));
        Pf({
            ma: c,
            o: Ug(b),
            ea: 2
        })
    }
    ; function Wg(a, b, c, d, e) {
        a = a.location.host;
        var f = Kc(b.src, "domain");
        b = Kc(b.src, "network-code");
        if (a || f || b) {
            var h = {};
            a && (h.ippd = a);
            f && (h.pppd = f);
            b && (h.pppnc = b);
            U(Ef).g(Wd.g, Wd.defaultValue) && (h.ppc_eid = U(Ef).g(Wd.g, Wd.defaultValue).toString());
            a = h
        } else
            a = void 0;
        a ? (c = oc(pc([c ? P("https://pagead2.googlesyndication.com") : P("https://securepubads.g.doubleclick.net"), P("/pagead/ppub_config")]), a),
            Xg(c, d, e)) : e(new q.globalThis.Error("no provided or inferred data"))
    }
    function Xg(a, b, c) {
        var d = new q.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function () {
            300 > d.status ? (bg("13", window),
                b(204 === d.status ? "" : d.responseText)) : c(new q.globalThis.Error("resp:" + d.status))
        }
            ;
        d.onerror = function () {
            return void c(new q.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        }
            ;
        d.send()
    }
    ; var Yg = function () {
        this.g = []
    }
        , ah = function (a, b, c, d, e) {
            if (Pc(b) === Qc(b) && c) {
                Zg(a);
                var f = null == e ? void 0 : Kb(Eb(e, ac), 1);
                Ff(Xd) && f && f.length && r(b.location.hostname, "includes").call(b.location.hostname, f) ? $g(a, Xb(e)) : Wg(b.top, c, d, function (h) {
                    return void $g(a, h)
                }, function (h) {
                    $g(a, void 0, h)
                })
            }
        }
        , Zg = function (a) {
            Qg(260);
            Rg(260, function (b) {
                void 0 !== a.h || a.i ? b(a.h, a.i) : a.g.push(b)
            })
        }
        , $g = function (a, b, c) {
            a.h = b;
            a.i = c;
            for (var d = v(a.g), e = d.next(); !e.done; e = d.next())
                e = e.value,
                    e(b, c);
            a.g.length = 0
        };
    function bh() {
        var a;
        return null != (a = z.googletag) ? a : z.googletag = {
            cmd: []
        }
    }
    function ch(a, b) {
        var c = bh();
        c.hasOwnProperty(a) || (c[a] = b)
    }
    ; var eh = function () {
        return [].concat(w(r(dh, "values").call(dh))).reduce(function (a, b) {
            return a + b
        }, 0)
    }
        , dh = new q.Map;
    function fh(a, b, c) {
        if (a.xa) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new Kd
                , e = new Jd;
            try {
                var f = ad(window);
                J(e, 1, f, 0)
            } catch (p) { }
            try {
                var h = U(df).g();
                yb(e, 2, h, rb)
            } catch (p) { }
            try {
                J(e, 3, window.document.URL, "")
            } catch (p) { }
            f = Gb(d, 2, e);
            h = new Id;
            b = J(h, 1, b, 0);
            try {
                var g = qe(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                J(b, 2, g, "")
            } catch (p) { }
            try {
                var k = qe(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                J(b, 3, k, "")
            } catch (p) { }
            try {
                var l = qe(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && yb(b, 4, l.split(/\n\s*/), sb)
            } catch (p) { }
            g = Gb(f, 1, b);
            k = new Hd;
            try {
                J(k, 1, a.N || a.oa, "")
            } catch (p) { }
            try {
                var n = eh();
                J(k, 2, n, 0)
            } catch (p) { }
            try {
                var u = [].concat(w(r(dh, "keys").call(dh)));
                yb(k, 3, u, sb)
            } catch (p) { }
            Hb(g, 4, Ld, k);
            J(g, 5, a.ka, 0);
            Md(a.va, g)
        }
    }
    ; function gh() {
        var a = hh, b = Eb(ih, sf), c = jh, d = {
            qa: xb(ih, 5),
            ra: I(F(ih, 2), 0),
            la: I(F(ih, 7), 0),
            na: Kb(ih, 6)
        }, e = L(ih, bc, 9), f, h = null != (f = a.fifWin) ? f : window, g = h.document;
        f = a.fifWin ? window : h;
        ch("_loaded_", !0);
        var k = kh(c);
        ch("cmd", []);
        var l;
        c = null != (l = lh(g)) ? l : mh(g);
        nh(b, h, r(Object, "assign").call(Object, {}, {
            fa: c
        }, d), k);
        try {
            sg()
        } catch (Cb) { }
        bg("1", h);
        b = oh(k, c);
        d = !1;
        if (!ph(g)) {
            h = "gpt-impl-" + Math.random();
            try {
                Mc(g, Bc(b, {
                    id: h,
                    nonce: Fc()
                }))
            } catch (Cb) { }
            g.getElementById(h) && (Ff(Ud) ? d = !0 : a._loadStarted_ = !0)
        }
        if (Ff(Ud) ? !d : !a._loadStarted_) {
            var n = bd("SCRIPT");
            n.src = lc(b);
            Lc(n);
            n.async = !0;
            g = a.fifWin ? f.document : g;
            b = g.body;
            d = g.documentElement;
            var u, p, ja = null != (p = null != (u = g.head) ? u : b) ? p : d;
            "complete" !== f.document.readyState && a.fifWin ? hc(f, "load", function () {
                return void ja.appendChild(n)
            }) : ja.appendChild(n);
            Ff(Ud) || (a._loadStarted_ = !0)
        }
        f === f.top && oe(f);
        ah(new Yg, f, c, qh(c), e)
    }
    function rh() {
        var a = Number("2019072601");
        1 > a || Math.floor(a) !== a ? (Xf({
            v: "2019072601"
        }),
            a = "1") : a = "2019072601";
        return {
            oa: a,
            N: "m202305040101",
            ua: ad(window),
            va: new Rd,
            xa: .01 > Tc(),
            ka: 100
        }
    }
    function kh(a) {
        var b = P("2019072601");
        var c = a.N;
        /m\d+/.test(c) ? c = Number(c.substring(1)) : (c && Xf({
            mjsv: c
        }),
            c = void 0);
        return r(Object, "assign").call(Object, {}, a, {
            pa: b,
            Oa: c,
            sa: P("m202305040101")
        })
    }
    function lh(a) {
        return (a = a.currentScript) ? a : null
    }
    function mh(a) {
        var b;
        a = v(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value,
                r(b.src, "includes").call(b.src, "/tag/js/gpt"))
                return b;
        return null
    }
    function oh(a, b) {
        b = qh(b) ? P("https://pagead2.googlesyndication.com/") : P("https://securepubads.g.doubleclick.net/");
        a = a.N ? pc([b, Zf, a.sa, P("/pubads_impl.js")]) : pc([b, Yf, a.pa, P(".js")]);
        b = {};
        var c = U(Ef).g(Yd.g, Yd.defaultValue);
        c && (b.cb = c);
        return r(Object, "keys").call(Object, b).length ? oc(a, b) : a
    }
    function nh(a, b, c, d) {
        Rg(172, c.fa);
        Vg(a, c);
        Ng(12, d);
        Ng(5, d);
        Ff(Vd) || (a = Mg(b)) && a.then(function (e) {
            return void Rg(251, Xb(e))
        });
        ff(U(Ef).i(Zd.g, Zd.defaultValue), b.document)
    }
    function ph(a) {
        var b = lh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    function qh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Ic(a.src.match(Hc)[3] || null)
    }
    ; var sh = function (a) {
        O.call(this, a)
    };
    y(sh, O);
    var th = $b(sh);
    var uh = "undefined" === typeof sttc ? void 0 : sttc;
    try {
        var hh = bh(), jh = rh(), vh;
        var wh = jh;
        try {
            var xh = Zb();
            if (!qe(uh)) {
                var yh = xh ? xh() + "\n" : "";
                throw Error(yh + String(uh));
            }
            vh = th(uh)
        } catch (a) {
            fh(wh, 838, a),
                vh = new sh
        }
        var ih = vh
            , zh = hh
            , Ah = ih
            , Bh = !U(Pg).g
            , Ch = Zb();
        if (!Bh)
            throw Error(Ch && Ch() || String(Bh));
        r(Object, "assign").call(Object, Og, zh._vars_);
        zh._vars_ = Og;
        Ah && (xb(Ah, 3) && Rg(36, !0),
            xb(Ah, 5) && Rg(221, !0),
            Kb(Ah, 6) && Rg(150, Kb(Ah, 6)));
        gh()
    } catch (a) {
        try {
            fh(rh(), 420, a)
        } catch (b) { }
    }
    ;
}
).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[null,472785970,null,[null,500]],[null,7,null,[null,0.1]],[525525052,null,null,[1]],[514499457,null,null,[1]],[null,448338836,null,[null,0.01]],[null,427198696,null,[null,1]],[513133013,null,null,[1]],[null,408380992,null,[null,0.01]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[524091388,null,null,[1]],[512833161,null,null,[1]],[null,492,null,[null,0.01]],[437061931,null,null,[1]],[524098255,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[377936516,null,null,[1]],[503519166,null,null,[1]],[null,null,2,[null,null,\"1-0-40\"]],[478099816,null,null,[1]],[null,506394061,null,[null,100]],[526684968,null,null,[1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[45397804,null,null,[]],[45398607,null,null,[]],[null,397316938,null,[null,1000]],[507033477,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1917,null,[null,300]],[null,1916,null,[null,0.001]],[null,null,null,[null,null,null,[\"A0VQgOQvA+kwCj319NCwgf8+syUgEQ8\/LLpB8RxxlRC3AkJ9xx8IAvVuQ\/dcwy0ok7sGKufLLu6WhsXbQR9\/UwwAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6kRo9zXJhOvsR4D\/VeZ9CiApPAxnOGzBkW88d8eIt9ex2oOzlX+AoUk\/BS50Y9Ysy2jwyHR49Mb7XwP+l9yygIAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3mbHZoS4VJtJ8j1aE8+Z9vaGf\/oMV1eTNIWMrvGqWgNnOmvaxnRGliqKIZU2eiTzCj5Qpz8B1\/UTTLuony5bAAAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[1162,null,null,[1]],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1,[[31070955],[31070956],[31070957,[[null,514795754,null,[null,1]]]],[31072833],[31072834,[[null,514795754,null,[null,1]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[01])\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,63]]]]],59],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31073203],[31073204,[[45397804,null,null,[1]],[45398607,null,null,[1]]]]]],[10,[[31073452],[31073453],[31073454,[[null,514795754,null,[null,1]]]],[31073455],[31073456,[[null,514795754,null,[null,1]]]],[31074240],[31074297],[31074366]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[01])\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,63]]]]],59],[10,[[31073558],[31073559]]],[1,[[31074173],[31074174,[[null,45409629,null,[null,60000]],[null,522348973,null,[null,1]]]],[31074175,[[null,45409629,null,[null,60000]],[null,522348973,null,[null,2]]]]]],[1,[[31074249],[31074250,[[522730486,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0])\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[5,[[31074407],[31074408,[[501,null,null,[1]]]],[31074409,[[501,null,null,[1]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[01])\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,63]]]]],59],[10,[[44790317],[44790318,[[null,488,null,[null,1]]]]],null,42],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[100,[[31074437],[31074438,[[501545961,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,70,null,null,null,null,[\"browsing-topics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[200,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[100,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[10,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791426,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791427,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[44776073],[44776367],[44779108],[44779905],[44784467],[44785148]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[100,[[31072019],[31072020,[[471855283,null,null,[1]]]]]],[100,[[31072878],[31072879,[[494337909,null,null,[1]]]]]],[1000,[[31073384,null,[3,[[2,[[2,[[8,null,null,1,null,0],[7,null,null,1,null,6]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,10],[7,null,null,1,null,16]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,20],[7,null,null,1,null,35]]],[4,null,3]]]]]],[31073385,[[514876375,null,null,[1]]],[3,[[2,[[2,[[8,null,null,1,null,5],[7,null,null,1,null,11]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,15],[7,null,null,1,null,21]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,34],[7,null,null,1,null,49]]],[4,null,3]]]]]]]],[1000,[[31073560,null,[2,[[2,[[8,null,null,1,null,0],[7,null,null,1,null,11]]],[4,null,3]]]],[31073561,null,[2,[[2,[[8,null,null,1,null,10],[7,null,null,1,null,21]]],[4,null,3]]]]]],[10,[[31073863],[31073864,[[200,null,null,[1]]]]]],[50,[[31073865],[31073866,[[220,null,null,[1]]]]]],[100,[[31074171],[31074172,[[525208457,null,null,[1]]]]]],[1,[[31074300],[31074301,[[479390945,null,null,[1]]]]]],[100,[[31074302],[31074303,[[523253321,null,null,[1]]]]]],[10,[[31074368],[31074369,[[524540376,null,null,[1]]]]]],[100,[[31074370],[31074371,[[523209470,null,null,[1]]]]]],[10,[[31074398],[31074399,[[489217043,null,null,[1]]]],[31074400,[[495013820,null,null,[1]]]]]],[1000,[[31074405,[[null,523264412,null,[null,31074403]]],[2,[[2,[[8,null,null,1,null,0],[7,null,null,1,null,11]]],[4,null,3]]]],[31074406,[[null,523264412,null,[null,31074404]]],[2,[[2,[[8,null,null,1,null,10],[7,null,null,1,null,21]]],[4,null,3]]]]],[4,null,3]],[10,[[31074411],[31074412,[[null,524114909,null,[null,1]]]]]],[1000,[[31074442,[[null,24,null,[null,31074442]]],[6,null,null,13,null,31074442]],[31074443,[[null,24,null,[null,31074443]]],[6,null,null,13,null,31074443]]],[4,null,3],1],[1000,[[31074454,[[null,24,null,[null,31074454]]],[6,null,null,13,null,31074454]],[31074455,[[null,24,null,[null,31074455]]],[6,null,null,13,null,31074455]]],[4,null,3],1],[10,[[31074470],[31074471,[[503514558,null,null,[1]]]]]],[10,[[31074472],[31074473,[[523216054,null,null,[1]]]]]],[10,[[31074474],[31074475,[[527312070,null,null,[1]]]]]],[1000,[[31074488,[[null,24,null,[null,31074488]]],[6,null,null,13,null,31074488]],[31074489,[[null,24,null,[null,31074489]]],[6,null,null,13,null,31074489]]],[4,null,3],1],[10,[[44776366],[44779256]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[25,[[50,[[31068366],[31068367,[[null,455645877,null,[null,0.1]]]]]],[10,[[31068825],[31068826,[[null,462420536,null,[null,0.1]]]]]],[50,[[31070232],[31070233,[[476475256,null,null,[1]]]]]]]],[2,[[null,[[31071324],[31071325,[[null,363650251,null,[null,2]]]],[31071326,[[null,363650251,null,[null,1]]]]],null,null,null,null,null,1,null,102],[10,[[44752585],[44752586,[[392065905,null,null,[1]]]]],null,41],[50,[[44777628],[44777629,[[392065905,null,null,[]]]]],[4,null,68],41],[10,[[44789124],[44789125],[44789126],[44789127]],null,null,null,null,null,601,null,102],[20,[[44789878],[44789879,[[1122,null,null,[1]]]]],null,null,null,null,null,501,null,102]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],null,null,null,null,\".google.com.br\",996,2021]")