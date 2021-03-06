$(function() {
    var n, t, e, r = {},
    i = {},
    o = {},
    u = {}; (function() {
        function t(n) {
            function t(t, e, r, i, o, u) {
                for (; o >= 0 && o < u; o += n) {
                    var a = i ? i[o] : o;
                    r = e(r, t[a], a, t)
                }
                return r
            }
            return function(e, r, i, o) {
                r = b(r, o, 4);
                var u = !k(e) && _.keys(e),
                a = (u || e).length,
                c = n > 0 ? 0 : a - 1;
                return arguments.length < 3 && (i = e[u ? u[c] : c], c += n),
                t(e, r, i, u, c, a)
            }
        }
        function e(n) {
            return function(t, e, r) {
                e = A(e, r);
                for (var i = I(t), o = n > 0 ? 0 : i - 1; o >= 0 && o < i; o += n) if (e(t[o], o, t)) return o;
                return - 1
            }
        }
        function r(n, t, e) {
            return function(r, i, o) {
                var u = 0,
                a = I(r);
                if ("number" == typeof o) n > 0 ? u = o >= 0 ? o: Math.max(o + a, u) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (e && o && a) return o = e(r, i),
                r[o] === i ? o: -1;
                if (i !== i) return o = t(s.call(r, u, a), _.isNaN),
                o >= 0 ? o + u: -1;
                for (o = n > 0 ? u: a - 1; o >= 0 && o < a; o += n) if (r[o] === i) return o;
                return - 1
            }
        }
        function i(n, t) {
            var e = R.length,
            r = n.constructor,
            i = _.isFunction(r) && r.prototype || c,
            o = "constructor";
            for (_.has(n, o) && !_.contains(t, o) && t.push(o); e--;) o = R[e],
            o in n && n[o] !== i[o] && !_.contains(t, o) && t.push(o)
        }
        var o = this,
        u = o._,
        a = Array.prototype,
        c = Object.prototype,
        l = Function.prototype,
        f = a.push,
        s = a.slice,
        p = c.toString,
        d = c.hasOwnProperty,
        v = Array.isArray,
        h = Object.keys,
        g = l.bind,
        y = Object.create,
        m = function() {},
        _ = function(n) {
            return n instanceof _ ? n: this instanceof _ ? void(this._wrapped = n) : new _(n)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : o._ = _,
        _.VERSION = "1.8.3";
        var b = function(n, t, e) {
            if (void 0 === t) return n;
            switch (null == e ? 3 : e) {
            case 1:
                return function(e) {
                    return n.call(t, e)
                };
            case 2:
                return function(e, r) {
                    return n.call(t, e, r)
                };
            case 3:
                return function(e, r, i) {
                    return n.call(t, e, r, i)
                };
            case 4:
                return function(e, r, i, o) {
                    return n.call(t, e, r, i, o)
                }
            }
            return function() {
                return n.apply(t, arguments)
            }
        },
        A = function(n, t, e) {
            return null == n ? _.identity: _.isFunction(n) ? b(n, t, e) : _.isObject(n) ? _.matcher(n) : _.property(n)
        };
        _.iteratee = function(n, t) {
            return A(n, t, 1 / 0)
        };
        var w = function(n, t) {
            return function(e) {
                var r = arguments.length;
                if (r < 2 || null == e) return e;
                for (var i = 1; i < r; i++) for (var o = arguments[i], u = n(o), a = u.length, c = 0; c < a; c++) {
                    var l = u[c];
                    t && void 0 !== e[l] || (e[l] = o[l])
                }
                return e
            }
        },
        E = function(n) {
            if (!_.isObject(n)) return {};
            if (y) return y(n);
            m.prototype = n;
            var t = new m;
            return m.prototype = null,
            t
        },
        O = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        },
        x = Math.pow(2, 53) - 1,
        I = O("length"),
        k = function(n) {
            var t = I(n);
            return "number" == typeof t && t >= 0 && t <= x
        };
        _.each = _.forEach = function(n, t, e) {
            t = b(t, e);
            var r, i;
            if (k(n)) for (r = 0, i = n.length; r < i; r++) t(n[r], r, n);
            else {
                var o = _.keys(n);
                for (r = 0, i = o.length; r < i; r++) t(n[o[r]], o[r], n)
            }
            return n
        },
        _.map = _.collect = function(n, t, e) {
            t = A(t, e);
            for (var r = !k(n) && _.keys(n), i = (r || n).length, o = Array(i), u = 0; u < i; u++) {
                var a = r ? r[u] : u;
                o[u] = t(n[a], a, n)
            }
            return o
        },
        _.reduce = _.foldl = _.inject = t(1),
        _.reduceRight = _.foldr = t( - 1),
        _.find = _.detect = function(n, t, e) {
            var r;
            if (r = k(n) ? _.findIndex(n, t, e) : _.findKey(n, t, e), void 0 !== r && r !== -1) return n[r]
        },
        _.filter = _.select = function(n, t, e) {
            var r = [];
            return t = A(t, e),
            _.each(n,
            function(n, e, i) {
                t(n, e, i) && r.push(n)
            }),
            r
        },
        _.reject = function(n, t, e) {
            return _.filter(n, _.negate(A(t)), e)
        },
        _.every = _.all = function(n, t, e) {
            t = A(t, e);
            for (var r = !k(n) && _.keys(n), i = (r || n).length, o = 0; o < i; o++) {
                var u = r ? r[o] : o;
                if (!t(n[u], u, n)) return ! 1
            }
            return ! 0
        },
        _.some = _.any = function(n, t, e) {
            t = A(t, e);
            for (var r = !k(n) && _.keys(n), i = (r || n).length, o = 0; o < i; o++) {
                var u = r ? r[o] : o;
                if (t(n[u], u, n)) return ! 0
            }
            return ! 1
        },
        _.contains = _.includes = _.include = function(n, t, e, r) {
            return k(n) || (n = _.values(n)),
            ("number" != typeof e || r) && (e = 0),
            _.indexOf(n, t, e) >= 0
        },
        _.invoke = function(n, t) {
            var e = s.call(arguments, 2),
            r = _.isFunction(t);
            return _.map(n,
            function(n) {
                var i = r ? t: n[t];
                return null == i ? i: i.apply(n, e)
            })
        },
        _.pluck = function(n, t) {
            return _.map(n, _.property(t))
        },
        _.where = function(n, t) {
            return _.filter(n, _.matcher(t))
        },
        _.findWhere = function(n, t) {
            return _.find(n, _.matcher(t))
        },
        _.max = function(n, t, e) {
            var r, i, o = -(1 / 0),
            u = -(1 / 0);
            if (null == t && null != n) {
                n = k(n) ? n: _.values(n);
                for (var a = 0,
                c = n.length; a < c; a++) r = n[a],
                r > o && (o = r)
            } else t = A(t, e),
            _.each(n,
            function(n, e, r) {
                i = t(n, e, r),
                (i > u || i === -(1 / 0) && o === -(1 / 0)) && (o = n, u = i)
            });
            return o
        },
        _.min = function(n, t, e) {
            var r, i, o = 1 / 0,
            u = 1 / 0;
            if (null == t && null != n) {
                n = k(n) ? n: _.values(n);
                for (var a = 0,
                c = n.length; a < c; a++) r = n[a],
                r < o && (o = r)
            } else t = A(t, e),
            _.each(n,
            function(n, e, r) {
                i = t(n, e, r),
                (i < u || i === 1 / 0 && o === 1 / 0) && (o = n, u = i)
            });
            return o
        },
        _.shuffle = function(n) {
            for (var t, e = k(n) ? n: _.values(n), r = e.length, i = Array(r), o = 0; o < r; o++) t = _.random(0, o),
            t !== o && (i[o] = i[t]),
            i[t] = e[o];
            return i
        },
        _.sample = function(n, t, e) {
            return null == t || e ? (k(n) || (n = _.values(n)), n[_.random(n.length - 1)]) : _.shuffle(n).slice(0, Math.max(0, t))
        },
        _.sortBy = function(n, t, e) {
            return t = A(t, e),
            _.pluck(_.map(n,
            function(n, e, r) {
                return {
                    value: n,
                    index: e,
                    criteria: t(n, e, r)
                }
            }).sort(function(n, t) {
                var e = n.criteria,
                r = t.criteria;
                if (e !== r) {
                    if (e > r || void 0 === e) return 1;
                    if (e < r || void 0 === r) return - 1
                }
                return n.index - t.index
            }), "value")
        };
        var j = function(n) {
            return function(t, e, r) {
                var i = {};
                return e = A(e, r),
                _.each(t,
                function(r, o) {
                    var u = e(r, o, t);
                    n(i, r, u)
                }),
                i
            }
        };
        _.groupBy = j(function(n, t, e) {
            _.has(n, e) ? n[e].push(t) : n[e] = [t]
        }),
        _.indexBy = j(function(n, t, e) {
            n[e] = t
        }),
        _.countBy = j(function(n, t, e) {
            _.has(n, e) ? n[e]++:n[e] = 1
        }),
        _.toArray = function(n) {
            return n ? _.isArray(n) ? s.call(n) : k(n) ? _.map(n, _.identity) : _.values(n) : []
        },
        _.size = function(n) {
            return null == n ? 0 : k(n) ? n.length: _.keys(n).length
        },
        _.partition = function(n, t, e) {
            t = A(t, e);
            var r = [],
            i = [];
            return _.each(n,
            function(n, e, o) { (t(n, e, o) ? r: i).push(n)
            }),
            [r, i]
        },
        _.first = _.head = _.take = function(n, t, e) {
            if (null != n) return null == t || e ? n[0] : _.initial(n, n.length - t)
        },
        _.initial = function(n, t, e) {
            return s.call(n, 0, Math.max(0, n.length - (null == t || e ? 1 : t)))
        },
        _.last = function(n, t, e) {
            if (null != n) return null == t || e ? n[n.length - 1] : _.rest(n, Math.max(0, n.length - t))
        },
        _.rest = _.tail = _.drop = function(n, t, e) {
            return s.call(n, null == t || e ? 1 : t)
        },
        _.compact = function(n) {
            return _.filter(n, _.identity)
        };
        var C = function(n, t, e, r) {
            for (var i = [], o = 0, u = r || 0, a = I(n); u < a; u++) {
                var c = n[u];
                if (k(c) && (_.isArray(c) || _.isArguments(c))) {
                    t || (c = C(c, t, e));
                    var l = 0,
                    f = c.length;
                    for (i.length += f; l < f;) i[o++] = c[l++]
                } else e || (i[o++] = c)
            }
            return i
        };
        _.flatten = function(n, t) {
            return C(n, t, !1)
        },
        _.without = function(n) {
            return _.difference(n, s.call(arguments, 1))
        },
        _.uniq = _.unique = function(n, t, e, r) {
            _.isBoolean(t) || (r = e, e = t, t = !1),
            null != e && (e = A(e, r));
            for (var i = [], o = [], u = 0, a = I(n); u < a; u++) {
                var c = n[u],
                l = e ? e(c, u, n) : c;
                t ? (u && o === l || i.push(c), o = l) : e ? _.contains(o, l) || (o.push(l), i.push(c)) : _.contains(i, c) || i.push(c)
            }
            return i
        },
        _.union = function() {
            return _.uniq(C(arguments, !0, !0))
        },
        _.intersection = function(n) {
            for (var t = [], e = arguments.length, r = 0, i = I(n); r < i; r++) {
                var o = n[r];
                if (!_.contains(t, o)) {
                    for (var u = 1; u < e && _.contains(arguments[u], o); u++);
                    u === e && t.push(o)
                }
            }
            return t
        },
        _.difference = function(n) {
            var t = C(arguments, !0, !0, 1);
            return _.filter(n,
            function(n) {
                return ! _.contains(t, n)
            })
        },
        _.zip = function() {
            return _.unzip(arguments)
        },
        _.unzip = function(n) {
            for (var t = n && _.max(n, I).length || 0, e = Array(t), r = 0; r < t; r++) e[r] = _.pluck(n, r);
            return e
        },
        _.object = function(n, t) {
            for (var e = {},
            r = 0,
            i = I(n); r < i; r++) t ? e[n[r]] = t[r] : e[n[r][0]] = n[r][1];
            return e
        },
        _.findIndex = e(1),
        _.findLastIndex = e( - 1),
        _.sortedIndex = function(n, t, e, r) {
            e = A(e, r, 1);
            for (var i = e(t), o = 0, u = I(n); o < u;) {
                var a = Math.floor((o + u) / 2);
                e(n[a]) < i ? o = a + 1 : u = a
            }
            return o
        },
        _.indexOf = r(1, _.findIndex, _.sortedIndex),
        _.lastIndexOf = r( - 1, _.findLastIndex),
        _.range = function(n, t, e) {
            null == t && (t = n || 0, n = 0),
            e = e || 1;
            for (var r = Math.max(Math.ceil((t - n) / e), 0), i = Array(r), o = 0; o < r; o++, n += e) i[o] = n;
            return i
        };
        var N = function(n, t, e, r, i) {
            if (! (r instanceof t)) return n.apply(e, i);
            var o = E(n.prototype),
            u = n.apply(o, i);
            return _.isObject(u) ? u: o
        };
        _.bind = function(n, t) {
            if (g && n.bind === g) return g.apply(n, s.call(arguments, 1));
            if (!_.isFunction(n)) throw new TypeError("Bind must be called on a function");
            var e = s.call(arguments, 2),
            r = function() {
                return N(n, r, t, this, e.concat(s.call(arguments)))
            };
            return r
        },
        _.partial = function(n) {
            var t = s.call(arguments, 1),
            e = function() {
                for (var r = 0,
                i = t.length,
                o = Array(i), u = 0; u < i; u++) o[u] = t[u] === _ ? arguments[r++] : t[u];
                for (; r < arguments.length;) o.push(arguments[r++]);
                return N(n, e, this, this, o)
            };
            return e
        },
        _.bindAll = function(n) {
            var t, e, r = arguments.length;
            if (r <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++) e = arguments[t],
            n[e] = _.bind(n[e], n);
            return n
        },
        _.memoize = function(n, t) {
            var e = function(r) {
                var i = e.cache,
                o = "" + (t ? t.apply(this, arguments) : r);
                return _.has(i, o) || (i[o] = n.apply(this, arguments)),
                i[o]
            };
            return e.cache = {},
            e
        },
        _.delay = function(n, t) {
            var e = s.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, e)
            },
            t)
        },
        _.defer = _.partial(_.delay, _, 1),
        _.throttle = function(n, t, e) {
            var r, i, o, u = null,
            a = 0;
            e || (e = {});
            var c = function() {
                a = e.leading === !1 ? 0 : _.now(),
                u = null,
                o = n.apply(r, i),
                u || (r = i = null)
            };
            return function() {
                var l = _.now();
                a || e.leading !== !1 || (a = l);
                var f = t - (l - a);
                return r = this,
                i = arguments,
                f <= 0 || f > t ? (u && (clearTimeout(u), u = null), a = l, o = n.apply(r, i), u || (r = i = null)) : u || e.trailing === !1 || (u = setTimeout(c, f)),
                o
            }
        },
        _.debounce = function(n, t, e) {
            var r, i, o, u, a, c = function() {
                var l = _.now() - u;
                l < t && l >= 0 ? r = setTimeout(c, t - l) : (r = null, e || (a = n.apply(o, i), r || (o = i = null)))
            };
            return function() {
                o = this,
                i = arguments,
                u = _.now();
                var l = e && !r;
                return r || (r = setTimeout(c, t)),
                l && (a = n.apply(o, i), o = i = null),
                a
            }
        },
        _.wrap = function(n, t) {
            return _.partial(t, n)
        },
        _.negate = function(n) {
            return function() {
                return ! n.apply(this, arguments)
            }
        },
        _.compose = function() {
            var n = arguments,
            t = n.length - 1;
            return function() {
                for (var e = t,
                r = n[t].apply(this, arguments); e--;) r = n[e].call(this, r);
                return r
            }
        },
        _.after = function(n, t) {
            return function() {
                if (--n < 1) return t.apply(this, arguments)
            }
        },
        _.before = function(n, t) {
            var e;
            return function() {
                return--n > 0 && (e = t.apply(this, arguments)),
                n <= 1 && (t = null),
                e
            }
        },
        _.once = _.partial(_.before, 2);
        var S = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        _.keys = function(n) {
            if (!_.isObject(n)) return [];
            if (h) return h(n);
            var t = [];
            for (var e in n) _.has(n, e) && t.push(e);
            return S && i(n, t),
            t
        },
        _.allKeys = function(n) {
            if (!_.isObject(n)) return [];
            var t = [];
            for (var e in n) t.push(e);
            return S && i(n, t),
            t
        },
        _.values = function(n) {
            for (var t = _.keys(n), e = t.length, r = Array(e), i = 0; i < e; i++) r[i] = n[t[i]];
            return r
        },
        _.mapObject = function(n, t, e) {
            t = A(t, e);
            for (var r, i = _.keys(n), o = i.length, u = {},
            a = 0; a < o; a++) r = i[a],
            u[r] = t(n[r], r, n);
            return u
        },
        _.pairs = function(n) {
            for (var t = _.keys(n), e = t.length, r = Array(e), i = 0; i < e; i++) r[i] = [t[i], n[t[i]]];
            return r
        },
        _.invert = function(n) {
            for (var t = {},
            e = _.keys(n), r = 0, i = e.length; r < i; r++) t[n[e[r]]] = e[r];
            return t
        },
        _.functions = _.methods = function(n) {
            var t = [];
            for (var e in n) _.isFunction(n[e]) && t.push(e);
            return t.sort()
        },
        _.extend = w(_.allKeys),
        _.extendOwn = _.assign = w(_.keys),
        _.findKey = function(n, t, e) {
            t = A(t, e);
            for (var r, i = _.keys(n), o = 0, u = i.length; o < u; o++) if (r = i[o], t(n[r], r, n)) return r
        },
        _.pick = function(n, t, e) {
            var r, i, o = {},
            u = n;
            if (null == u) return o;
            _.isFunction(t) ? (i = _.allKeys(u), r = b(t, e)) : (i = C(arguments, !1, !1, 1), r = function(n, t, e) {
                return t in e
            },
            u = Object(u));
            for (var a = 0,
            c = i.length; a < c; a++) {
                var l = i[a],
                f = u[l];
                r(f, l, u) && (o[l] = f)
            }
            return o
        },
        _.omit = function(n, t, e) {
            if (_.isFunction(t)) t = _.negate(t);
            else {
                var r = _.map(C(arguments, !1, !1, 1), String);
                t = function(n, t) {
                    return ! _.contains(r, t)
                }
            }
            return _.pick(n, t, e)
        },
        _.defaults = w(_.allKeys, !0),
        _.create = function(n, t) {
            var e = E(n);
            return t && _.extendOwn(e, t),
            e
        },
        _.clone = function(n) {
            return _.isObject(n) ? _.isArray(n) ? n.slice() : _.extend({},
            n) : n
        },
        _.tap = function(n, t) {
            return t(n),
            n
        },
        _.isMatch = function(n, t) {
            var e = _.keys(t),
            r = e.length;
            if (null == n) return ! r;
            for (var i = Object(n), o = 0; o < r; o++) {
                var u = e[o];
                if (t[u] !== i[u] || !(u in i)) return ! 1
            }
            return ! 0
        };
        var F = function(n, t, e, r) {
            if (n === t) return 0 !== n || 1 / n === 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof _ && (n = n._wrapped),
            t instanceof _ && (t = t._wrapped);
            var i = p.call(n);
            if (i !== p.call(t)) return ! 1;
            switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + t;
            case "[object Number]":
                return + n !== +n ? +t !== +t: 0 === +n ? 1 / +n === 1 / t: +n === +t;
            case "[object Date]":
            case "[object Boolean]":
                return + n === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof n || "object" != typeof t) return ! 1;
                var u = n.constructor,
                a = t.constructor;
                if (u !== a && !(_.isFunction(u) && u instanceof u && _.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return ! 1
            }
            e = e || [],
            r = r || [];
            for (var c = e.length; c--;) if (e[c] === n) return r[c] === t;
            if (e.push(n), r.push(t), o) {
                if (c = n.length, c !== t.length) return ! 1;
                for (; c--;) if (!F(n[c], t[c], e, r)) return ! 1
            } else {
                var l, f = _.keys(n);
                if (c = f.length, _.keys(t).length !== c) return ! 1;
                for (; c--;) if (l = f[c], !_.has(t, l) || !F(n[l], t[l], e, r)) return ! 1
            }
            return e.pop(),
            r.pop(),
            !0
        };
        _.isEqual = function(n, t) {
            return F(n, t)
        },
        _.isEmpty = function(n) {
            return null == n || (k(n) && (_.isArray(n) || _.isString(n) || _.isArguments(n)) ? 0 === n.length: 0 === _.keys(n).length)
        },
        _.isElement = function(n) {
            return ! (!n || 1 !== n.nodeType)
        },
        _.isArray = v ||
        function(n) {
            return "[object Array]" === p.call(n)
        },
        _.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        },
        _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
        function(n) {
            _["is" + n] = function(t) {
                return p.call(t) === "[object " + n + "]"
            }
        }),
        _.isArguments(arguments) || (_.isArguments = function(n) {
            return _.has(n, "callee")
        }),
        "function" != typeof / . / &&"object" != typeof Int8Array && (_.isFunction = function(n) {
            return "function" == typeof n || !1
        }),
        _.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        },
        _.isNaN = function(n) {
            return _.isNumber(n) && n !== +n
        },
        _.isBoolean = function(n) {
            return n === !0 || n === !1 || "[object Boolean]" === p.call(n)
        },
        _.isNull = function(n) {
            return null === n
        },
        _.isUndefined = function(n) {
            return void 0 === n
        },
        _.has = function(n, t) {
            return null != n && d.call(n, t)
        },
        _.noConflict = function() {
            return o._ = u,
            this
        },
        _.identity = function(n) {
            return n
        },
        _.constant = function(n) {
            return function() {
                return n
            }
        },
        _.noop = function() {},
        _.property = O,
        _.propertyOf = function(n) {
            return null == n ?
            function() {}: function(t) {
                return n[t]
            }
        },
        _.matcher = _.matches = function(n) {
            return n = _.extendOwn({},
            n),
            function(t) {
                return _.isMatch(t, n)
            }
        },
        _.times = function(n, t, e) {
            var r = Array(Math.max(0, n));
            t = b(t, e, 1);
            for (var i = 0; i < n; i++) r[i] = t(i);
            return r
        },
        _.random = function(n, t) {
            return null == t && (t = n, n = 0),
            n + Math.floor(Math.random() * (t - n + 1))
        },
        _.now = Date.now ||
        function() {
            return (new Date).getTime()
        };
        var T = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        D = _.invert(T),
        B = function(n) {
            var t = function(t) {
                return n[t]
            },
            e = "(?:" + _.keys(n).join("|") + ")",
            r = RegExp(e),
            i = RegExp(e, "g");
            return function(n) {
                return n = null == n ? "": "" + n,
                r.test(n) ? n.replace(i, t) : n
            }
        };
        _.escape = B(T),
        _.unescape = B(D),
        _.result = function(n, t, e) {
            var r = null == n ? void 0 : n[t];
            return void 0 === r && (r = e),
            _.isFunction(r) ? r.call(n) : r
        };
        var M = 0;
        _.uniqueId = function(n) {
            var t = ++M + "";
            return n ? n + t: t
        },
        _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
        P = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        U = /\\|'|\r|\n|\u2028|\u2029/g,
        G = function(n) {
            return "\\" + P[n]
        };
        _.template = function(n, t, e) { ! t && e && (t = e),
            t = _.defaults({},
            t, _.templateSettings);
            var r = RegExp([(t.escape || L).source, (t.interpolate || L).source, (t.evaluate || L).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
            n.replace(r,
            function(t, e, r, u, a) {
                return o += n.slice(i, a).replace(U, G),
                i = a + t.length,
                e ? o += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'": r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": u && (o += "';\n" + u + "\n__p+='"),
                t
            }),
            o += "';\n",
            t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var u = new Function(t.variable || "obj", "_", o)
            } catch(a) {
                throw a.source = o,
                a
            }
            var c = function(n) {
                return u.call(this, n, _)
            },
            l = t.variable || "obj";
            return c.source = "function(" + l + "){\n" + o + "}",
            c
        },
        _.chain = function(n) {
            var t = _(n);
            return t._chain = !0,
            t
        };

        var K = function(n, t) {
            return n._chain ? _(t).chain() : t
        };
        _.mixin = function(n) {
            _.each(_.functions(n),
            function(t) {
                var e = _[t] = n[t];
                _.prototype[t] = function() {
                    var n = [this._wrapped];
                    return f.apply(n, arguments),
                    K(this, e.apply(_, n))
                }
            })
        },
        _.mixin(_),
        _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function(n) {
            var t = a[n];
            _.prototype[n] = function() {
                var e = this._wrapped;
                return t.apply(e, arguments),
                "shift" !== n && "splice" !== n || 0 !== e.length || delete e[0],
                K(this, e)
            }
        }),
        _.each(["concat", "join", "slice"],
        function(n) {
            var t = a[n];
            _.prototype[n] = function() {
                return K(this, t.apply(this._wrapped, arguments))
            }
        }),
        _.prototype.value = function() {
            return this._wrapped
        },
        _.prototype.valueOf = _.prototype.toJSON = _.prototype.value,
        _.prototype.toString = function() {
            return "" + this._wrapped
        },
        n = function() {
            return _
        } ()
    }).call(this),
    t = function() {
        for (var n, t = this,
        e = t.DEBUG,
        r = t.console,
        i = {},
        o = function() {},
        u = "log warn error time timeEnd profile profileEnd".split(" "), a = u.length; --a >= 0;) n = u[a],
        e && r[n] ? i[n] = r[n].bind(r) : i[n] = o;
        return i.DEBUG = e,
        i
    } (),
    r = function(n) {
        var e, r = t;
        return e = {
            Ready: function() {
                r.log("nativeApi.Ready.........")
            },
            OnContentChange: function() {
                r.log("nativeApi.OnContentChange")
            },
            OnFindText: function() {
                r.log("nativeApi.OnFindText")
            },
            OnAreaClick: function() {
                r.log("nativeApi.OnAreaClick")
            },
            OnImageFileUpload: function() {
                r.log("nativeApi.OnImageFileUpload")
            },
            OnImagePaste: function() {
                r.log("nativeApi.OnImagePaste")
            },
            OnImageFileDrop: function() {
                r.log("nativeApi.OnImageFileDrop")
            },
            Log: function(n, t) {
                r.log("debug", n, t)
            },
            LOG_TEST: 4,
            LOG_DEBUG: 3,
            LOG_INFO: 2,
            LOG_WARN: 1,
            LOG_FATAL: 0
        }
    } (r),
    i = function(n) {
        var e, r = t;
        return e = {
            setContent: function(n) {
                var t = this._editor;
                t.unbindEvents(),
                t.setContent(n),
                t.bindEvents()
            },
            getContent: function() {
                return this._editor.getContent()
            },
            getHtmlContent: function() {
                return this._editor.getHtmlContent()
            },
            print: function() {
                window.print()
            },
            setReadOnly: function(n) {
                return n ? window.unbindIcon() : (window.unbindIcon(), window.bindIcon()),
                this._editor._mdEditor.setReadOnly(n)
            },
            trigger: function(n) {
                r.log("editor api trigger: " + n);
                var t = this._editor.bridge;
                t.trigger.apply(t, arguments)
            },
            setMode: function(n) {
                r.log("set mode:" + n),
                document.body.dispatchEvent(new Event("mode." + n)),
                this._editor.clearSelection(),
                lazy_change()
            },
            focusEditor: function() {
                this._editor.focus()
            },
            addImageByUrl: function(n) {
                this._editor.addImageByUrl(n)
            },
            getResources: function() {
                return this._editor.getResources()
            }
        }
    } (i),
    o = function(e) {
        var o = n,
        u = t,
        a = r,
        c = i,
        l = function(n) {
            return n = n.toString(),
            n.replace(/%/g,
            function() {
                return "%%"
            })
        },
        f = {
            _editorApi: c,
            nativeApiInterface: a,
            _nativeApi: window.YNote || {},
            _hasReadyRun: !1,
            ready: function(n, t) {
                var e = this;
                e._hasReadyRun || (e._hasReadyRun = !0, e._checkNativeApi(), e._provideEditorApi(t))
            },
            _provideEditorApi: function(n) {
                return n ? void(this._editorApi._editor = n) : void u.error("param editor is not valid", "pc/io/bridge")
            },
            _checkNativeApi: function() {
                var n = this,
                t = n._nativeApi,
                e = n.nativeApiInterface;
                o.each(e,
                function(n, e) {
                    null == t[e] && u.error("Native does not implement api: " + e, "pc/io/bridge")
                })
            },
            execEditorApi: function(n, t) {
                var e, r = this,
                i = r._editorApi,
                o = Date.now();
                if (u.log("### execEditorApi: " + n), u.DEBUG) u.time("api." + n),
                e = i[n].apply(i, t);
                else try {
                    e = i[n].apply(i, t)
                } catch(a) {}
                return u.DEBUG && u.timeEnd("api." + n),
                r._nativeApi.Log(r._nativeApi.LOG_TEST, l("@@ANALYSIS@@ javascript:" + n + "=" + (Date.now() - o))),
                e
            },

            callNativeApi: function(n, t) {
                var e = this,
                r = e._nativeApi;
                return u.log("=== Native Api:" + n),
                r[n] ? r[n].apply(r, t || []) : void u.warn("no native api: " + n, "pc/io/bridge")
            },
            asyncCallNativeApi: function(n, t, e) {
                var r, i = this,
                o = "on" + n;
                i.off(o),
                "function" == typeof t && (e = t, t = []),
                r = function() {
                    i.off(o, r),
                    e.apply(null, arguments)
                },
                i.on(o, r, i),
                i._nativeApi[n].apply(i._nativeApi, t)
            }
        };
        
        return u.DEBUG && (f._nativeApi = f._nativeApi || {},
        o.defaults(f._nativeApi, a)),
        f
    } (o),
    e = function() {
        var n = window.navigator.userAgent,
        t = /Windows/.test(n),
        e = /Android|iPhone|iPad|iPod/i.test(n),
        r = /Android/i.test(n),
        i = /iPhone|iPad|iPod/i.test(n),
        o = i && /OS 7/i.test(n);
        return {
            COMPAT: "compat",
            INTERM: "interm",
            INDENT_WIDTH: 40,
            LINE_BREAK: t ? "\r\n": "\n",
            IS_MAC: /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
            IS_MOBILE: e,
            IS_ANDROID: r,
            IS_IPHONE: i,
            IS_IOS7: o,
            RENDERED_INDENT_WIDTH: e ? 20 : 40
        }
    } (),
    u = function(r) {
        function i() {
            var n = document.createRange(),
            t = window.getSelection();
            n.selectNode($(".markdown-body").get(0)),
            t.removeAllRanges(),
            t.addRange(n)
        }
        var a = window.editor,

        c = window.mdc,
        l = o,
        f = t,
        s = n,
        p = e,
        d = {
            _mdEditor: a,
            _mdCore: c,
            bridge: l,
            _onChange: null,
            ready: function() {

                var n = this,
                t = n._mdEditor;
                n.bridge.ready(document, n),
                pcReady.resolve(n.bridge),
                n._onChange = s.debounce(function(t) {
                    
                    n.bridge.callNativeApi("OnContentChange", [])
                },
                256, !1),
                t.on("focus",
                function() {

                    n.bridge.callNativeApi("OnAreaClick")
                }),
                document.querySelector(".markdown-body").addEventListener("click",
                function() {
                    n.bridge.callNativeApi("OnAreaClick")
                }),
                window.unbindIcon(),
                window.bindIcon()
            },

            setContent: function(n) {
                var t = this._mdEditor;
                mdc.init("", !1),
                t.setValue(n, -1),
                setTimeout(function() {
                    t.session.getUndoManager().reset()
                },
                512)
            },
            focus: function() {
                u.focus()
            },
            clearSelection: function() {
                var n = window.getSelection();
                n.rangeCount > 0 && n.collapseToStart()
            },
            getContent: function() {
                return this._mdEditor.getValue()
            },
            getHtmlContent: function() {
                return $(".markdown-body").html()
            },
            bindEvents: function() {
                var n = this,
                t = n._mdEditor,
                e = t.keyBinding.getKeyboardHandler();
                t.on("change", n._onChange),
                e.bindKey("Ctrl-f|Command-f",
                function(t) {
                    n.bridge.callNativeApi("OnFindText")
                })
            },
            unbindEvents: function() {
                var n = this,
                t = n._mdEditor,
                e = t.keyBinding.getKeyboardHandler();
                t.off("change", n._onChange),
                e.removeCommand("Ctrl-f|Command-f")
            },
            addImageByUrl: function(n) {
                var t = this,
                e = t._mdEditor;
                e.insert("![image](" + n + ")"),
                e.focus()
            },
            getResources: function() {
                var n = this._mdEditor.backImage() || [];
                return n.join(";")
            }
        };
        if (d.ready(), $(document.getElementById('but')).on("click",
        
        function (n) {

            var t = p.IS_MAC && n.metaKey || n.ctrlKey;
            var Content =  d.getContent();
            localStorage.setItem("name",Content);
            var ContentHtml =  d.getHtmlContent();
            localStorage.setItem("htmlname",ContentHtml);
            layer.msg('保存成功');
            return Content;
            // console.log(d.getContent())



        }));

            // 下载之前先保存
         if (d.ready(), $(document.getElementById('bbt')).on("click",
            function (n) {
                
            var t = p.IS_MAC && n.metaKey || n.ctrlKey;
            var Content =  d.getContent();
            localStorage.setItem("name",Content);
            var ContentHtml =  d.getHtmlContent();
            localStorage.setItem("htmlname",ContentHtml);
            layer.msg('保存成功');
            return Content;
            
        }))
        // 下载之前先保存
        if (d.ready(), $(document.getElementById('bbhtml')).on("click",
            function (n) {
                
            var t = p.IS_MAC && n.metaKey || n.ctrlKey;
            var Content =  d.getContent();
            localStorage.setItem("name",Content);
            var ContentHtml =  d.getHtmlContent();
            localStorage.setItem("htmlname",ContentHtml);
            layer.msg('保存成功');
            return Content;
            
        }))

        // 内容监控
      
        
        if (d.ready(), $(document).on("keydown",
        function(n) {
            var Content =  d.getContent();
            localStorage.setItem("name",Content);
            var ContentHtml =  d.getHtmlContent();
            localStorage.setItem("htmlname",ContentHtml);

            var t = p.IS_MAC && n.metaKey || n.ctrlKey;
            switch (n.which) {
            case 65:
                t && (n.preventDefault(), i());
                break;
            case 70:
                t && (n.preventDefault(), d.bridge.callNativeApi("OnFindText"));
                 break;
            case 83:
                t && (localStorage.setItem("name",  d.getContent()))
                 if ((event.ctrlKey)&&(event.keyCode==83)) //屏蔽 Ctrl+n   
                {  
                    // console.log(d);
                    
                  　　 
                 
                event.returnValue=false;  
              
            }
            }
        }), f.DEBUG) {
            window.debugEditor = d,
            d.bridge.execEditorApi("setContent", ["# Hello Markdown!"]),
            d.bridge.execEditorApi("setReadOnly", [!1]),
            setTimeout(function() {
                a.focus()
            },
            10),
            d.bridge.callNativeApi("OnContentChange", []);
            var v = d.bridge.execEditorApi("getContent");
            f.log("getContent: " + v)
        }
        return d
    } (u)
     $(document.getElementById('bbt')).click(function(){

         var ss = window.localStorage.getItem("name");
            if(!ss){
                layer.msg('请先保存')
                return false;
            }
       
        var blob = new Blob([ss], {type: "text/plain;charset=utf-8"});  
       layer.prompt({title: '输入文件名', formType: 0}, function(pass, index){
          layer.close(index);
          
            
            saveAs(blob, pass+".html");  
        });
        
       
     


    })
         $(document.getElementById('bbhtml')).click(function(){
         var htmltxt = window.localStorage.getItem("htmlname");
         
            if(!htmltxt){
                 layer.msg('请先保存')
                return false;
            }
            
        var blob = new Blob([htmltxt], {type: "text/plain;charset=utf-8"});
        layer.prompt({title: '输入文件名', formType: 0}, function(pass, index){
          layer.close(index);
          
            
            saveAs(blob, pass+".html");  
        });
        
       
        // window.localStorage.clear()

    })
});