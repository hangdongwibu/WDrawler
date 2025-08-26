var ee = t => {
    throw TypeError(t)
}
;
var Fe = (t, e, n) => e.has(t) || ee("Cannot " + n);
var b = (t, e, n) => (Fe(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , P = (t, e, n) => e.has(t) ? ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {o as ne, a as Ve} from "./CVpIJCQG.js";
import {ao as Lt, bb as qe, aS as C, y as N, aI as O, aA as re} from "./BUjsOn5w.js";
import {v as Me} from "./CHkrc43M.js";
const q = [];
function Dt(t, e=Lt) {
    let n = null;
    const a = new Set;
    function r(o) {
        if (qe(t, o) && (t = o,
        n)) {
            const c = !q.length;
            for (const l of a)
                l[1](),
                q.push(l, t);
            if (c) {
                for (let l = 0; l < q.length; l += 2)
                    q[l][0](q[l + 1]);
                q.length = 0
            }
        }
    }
    function s(o) {
        r(o(t))
    }
    function i(o, c=Lt) {
        const l = [o, c];
        return a.add(l),
        a.size === 1 && (n = e(r, s) || Lt),
        o(t),
        () => {
            a.delete(l),
            a.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: r,
        update: s,
        subscribe: i
    }
}
class At {
    constructor(e, n) {
        this.status = e,
        typeof n == "string" ? this.body = {
            message: n
        } : n ? this.body = n : this.body = {
            message: `Error: ${e}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class Bt {
    constructor(e, n) {
        this.status = e,
        this.location = n
    }
}
class Ft extends Error {
    constructor(e, n, a) {
        super(a),
        this.status = e,
        this.text = n
    }
}
new URL("sveltekit-internal://");
function Ge(t, e) {
    return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}
function He(t) {
    return t.split("%25").map(decodeURI).join("%25")
}
function Ke(t) {
    for (const e in t)
        t[e] = decodeURIComponent(t[e]);
    return t
}
function Tt({href: t}) {
    return t.split("#")[0]
}
function We(t, e, n, a=!1) {
    const r = new URL(t);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams,{
            get(i, o) {
                if (o === "get" || o === "getAll" || o === "has")
                    return l => (n(l),
                    i[o](l));
                e();
                const c = Reflect.get(i, o);
                return typeof c == "function" ? c.bind(i) : c
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    const s = ["href", "pathname", "search", "toString", "toJSON"];
    a && s.push("hash");
    for (const i of s)
        Object.defineProperty(r, i, {
            get() {
                return e(),
                t[i]
            },
            enumerable: !0,
            configurable: !0
        });
    return r
}
function Ye(...t) {
    let e = 5381;
    for (const n of t)
        if (typeof n == "string") {
            let a = n.length;
            for (; a; )
                e = e * 33 ^ n.charCodeAt(--a)
        } else if (ArrayBuffer.isView(n)) {
            const a = new Uint8Array(n.buffer,n.byteOffset,n.byteLength);
            let r = a.length;
            for (; r; )
                e = e * 33 ^ a[--r]
        } else
            throw new TypeError("value must be a string or TypedArray");
    return (e >>> 0).toString(36)
}
new TextEncoder;
const ze = new TextDecoder;
function Je(t) {
    const e = atob(t)
      , n = new Uint8Array(e.length);
    for (let a = 0; a < e.length; a++)
        n[a] = e.charCodeAt(a);
    return n
}
const Xe = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && Y.delete(Vt(t)),
                          console.log(t),
                          console.log(e),
                          Xe(t, e));


const Y = new Map;
function Ze(t, e) {
    const n = Vt(t, e)
      , a = document.querySelector(n);
    if (a != null && a.textContent) {
        a.remove();
        let {body: r, ...s} = JSON.parse(a.textContent);
        const i = a.getAttribute("data-ttl");
        return i && Y.set(n, {
            body: r,
            init: s,
            ttl: 1e3 * Number(i)
        }),
        a.getAttribute("data-b64") !== null && (r = Je(r)),
        Promise.resolve(new Response(r,s))
    }
    return window.fetch(t, e)
}
function Qe(t, e, n) {
    if (Y.size > 0) {
        const a = Vt(t, n)
          , r = Y.get(a);
        if (r) {
            if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache))
                return new Response(r.body,r.init);
            Y.delete(a)
        }
    }
    return window.fetch(e, n)
}
function Vt(t, e) {
    let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
    if (e != null && e.headers || e != null && e.body) {
        const r = [];
        e.headers && r.push([...new Headers(e.headers)].join(",")),
        e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && r.push(e.body),
        a += `[data-hash="${Ye(...r)}"]`
    }
    return a
}
const tn = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function en(t) {
    const e = [];
    return {
        pattern: t === "/" ? /^\/$/ : new RegExp(`^${rn(t).map(a => {
            const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
            if (r)
                return e.push({
                    name: r[1],
                    matcher: r[2],
                    optional: !1,
                    rest: !0,
                    chained: !0
                }),
                "(?:/([^]*))?";
            const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);
            if (s)
                return e.push({
                    name: s[1],
                    matcher: s[2],
                    optional: !0,
                    rest: !1,
                    chained: !0
                }),
                "(?:/([^/]+))?";
            if (!a)
                return;
            const i = a.split(/\[(.+?)\](?!\])/);
            return "/" + i.map( (c, l) => {
                if (l % 2) {
                    if (c.startsWith("x+"))
                        return xt(String.fromCharCode(parseInt(c.slice(2), 16)));
                    if (c.startsWith("u+"))
                        return xt(String.fromCharCode(...c.slice(2).split("-").map(u => parseInt(u, 16))));
                    const h = tn.exec(c)
                      , [,p,_,f,m] = h;
                    return e.push({
                        name: f,
                        matcher: m,
                        optional: !!p,
                        rest: !!_,
                        chained: _ ? l === 1 && i[0] === "" : !1
                    }),
                    _ ? "([^]*?)" : p ? "([^/]*)?" : "([^/]+?)"
                }
                return xt(c)
            }
            ).join("")
        }
        ).join("")}/?$`),
        params: e
    }
}
function nn(t) {
    return t !== "" && !/^\([^)]+\)$/.test(t)
}
function rn(t) {
    return t.slice(1).split("/").filter(nn)
}
function an(t, e, n) {
    const a = {}
      , r = t.slice(1)
      , s = r.filter(o => o !== void 0);
    let i = 0;
    for (let o = 0; o < e.length; o += 1) {
        const c = e[o];
        let l = r[o - i];
        if (c.chained && c.rest && i && (l = r.slice(o - i, o + 1).filter(h => h).join("/"),
        i = 0),
        l === void 0) {
            c.rest && (a[c.name] = "");
            continue
        }
        if (!c.matcher || n[c.matcher](l)) {
            a[c.name] = l;
            const h = e[o + 1]
              , p = r[o + 1];
            h && !h.rest && h.optional && p && c.chained && (i = 0),
            !h && !p && Object.keys(a).length === s.length && (i = 0);
            continue
        }
        if (c.optional && c.chained) {
            i++;
            continue
        }
        return
    }
    if (!i)
        return a
}
function xt(t) {
    return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
function on({nodes: t, server_loads: e, dictionary: n, matchers: a}) {
    const r = new Set(e);
    return Object.entries(n).map( ([o,[c,l,h]]) => {
        const {pattern: p, params: _} = en(o)
          , f = {
            id: o,
            exec: m => {
                const u = p.exec(m);
                if (u)
                    return an(u, _, a)
            }
            ,
            errors: [1, ...h || []].map(m => t[m]),
            layouts: [0, ...l || []].map(i),
            leaf: s(c)
        };
        return f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length),
        f
    }
    );
    function s(o) {
        const c = o < 0;
        return c && (o = ~o),
        [c, t[o]]
    }
    function i(o) {
        return o === void 0 ? o : [r.has(o), t[o]]
    }
}
function we(t, e=JSON.parse) {
    try {
        return e(sessionStorage[t])
    } catch {}
}
function ae(t, e, n=JSON.stringify) {
    const a = n(e);
    try {
        sessionStorage[t] = a
    } catch {}
}
var pe;
const x = ((pe = globalThis.__sveltekit_occtof) == null ? void 0 : pe.base) ?? "";
var ge;
const sn = ((ge = globalThis.__sveltekit_occtof) == null ? void 0 : ge.assets) ?? x
  , ve = "sveltekit:snapshot"
  , be = "sveltekit:scroll"
  , Ae = "sveltekit:states"
  , cn = "sveltekit:pageurl"
  , G = "sveltekit:history"
  , Z = "sveltekit:navigation"
  , B = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
}
  , ht = location.origin;
function qt(t) {
    if (t instanceof URL)
        return t;
    let e = document.baseURI;
    if (!e) {
        const n = document.getElementsByTagName("base");
        e = n.length ? n[0].href : document.URL
    }
    return new URL(t,e)
}
function Et() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}
function M(t, e) {
    return t.getAttribute(`data-sveltekit-${e}`)
}
const oe = {
    ...B,
    "": B.hover
};
function Ee(t) {
    let e = t.assignedSlot ?? t.parentNode;
    return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host),
    e
}
function Se(t, e) {
    for (; t && t !== e; ) {
        if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href"))
            return t;
        t = Ee(t)
    }
}
function Nt(t, e, n) {
    let a;
    try {
        if (a = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href,document.baseURI),
        n && a.hash.match(/^#[^/]/)) {
            const o = location.hash.split("#")[1] || "/";
            a.hash = `#${o}${a.hash}`
        }
    } catch {}
    const r = t instanceof SVGAElement ? t.target.baseVal : t.target
      , s = !a || !!r || St(a, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external")
      , i = (a == null ? void 0 : a.origin) === ht && t.hasAttribute("download");
    return {
        url: a,
        external: s,
        target: r,
        download: i
    }
}
function pt(t) {
    let e = null
      , n = null
      , a = null
      , r = null
      , s = null
      , i = null
      , o = t;
    for (; o && o !== document.documentElement; )
        a === null && (a = M(o, "preload-code")),
        r === null && (r = M(o, "preload-data")),
        e === null && (e = M(o, "keepfocus")),
        n === null && (n = M(o, "noscroll")),
        s === null && (s = M(o, "reload")),
        i === null && (i = M(o, "replacestate")),
        o = Ee(o);
    function c(l) {
        switch (l) {
        case "":
        case "true":
            return !0;
        case "off":
        case "false":
            return !1;
        default:
            return
        }
    }
    return {
        preload_code: oe[a ?? "off"],
        preload_data: oe[r ?? "off"],
        keepfocus: c(e),
        noscroll: c(n),
        reload: c(s),
        replace_state: c(i)
    }
}
function se(t) {
    const e = Dt(t);
    let n = !0;
    function a() {
        n = !0,
        e.update(i => i)
    }
    function r(i) {
        n = !1,
        e.set(i)
    }
    function s(i) {
        let o;
        return e.subscribe(c => {
            (o === void 0 || n && c !== o) && i(o = c)
        }
        )
    }
    return {
        notify: a,
        set: r,
        subscribe: s
    }
}
const ke = {
    v: () => {}
};
function ln() {
    const {set: t, subscribe: e} = Dt(!1);
    let n;
    async function a() {
        clearTimeout(n);
        try {
            const r = await fetch(`${sn}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok)
                return !1;
            const i = (await r.json()).version !== Me;
            return i && (t(!0),
            ke.v(),
            clearTimeout(n)),
            i
        } catch {
            return !1
        }
    }
    return {
        subscribe: e,
        check: a
    }
}
function St(t, e, n) {
    return t.origin !== ht || !t.pathname.startsWith(e) ? !0 : n ? !(t.pathname === e + "/" || t.pathname === e + "/index.html" || t.protocol === "file:" && t.pathname.replace(/\/[^/]+\.html?$/, "") === e) : !1
}
function Xn(t) {}
function ie(t) {
    const e = un(t)
      , n = new ArrayBuffer(e.length)
      , a = new DataView(n);
    for (let r = 0; r < n.byteLength; r++)
        a.setUint8(r, e.charCodeAt(r));
    return n
}
const fn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function un(t) {
    t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
    let e = ""
      , n = 0
      , a = 0;
    for (let r = 0; r < t.length; r++)
        n <<= 6,
        n |= fn.indexOf(t[r]),
        a += 6,
        a === 24 && (e += String.fromCharCode((n & 16711680) >> 16),
        e += String.fromCharCode((n & 65280) >> 8),
        e += String.fromCharCode(n & 255),
        n = a = 0);
    return a === 12 ? (n >>= 4,
    e += String.fromCharCode(n)) : a === 18 && (n >>= 2,
    e += String.fromCharCode((n & 65280) >> 8),
    e += String.fromCharCode(n & 255)),
    e
}
const hn = -1
  , dn = -2
  , pn = -3
  , gn = -4
  , mn = -5
  , _n = -6;
function yn(t, e) {
    if (typeof t == "number")
        return r(t, !0);
    if (!Array.isArray(t) || t.length === 0)
        throw new Error("Invalid input");
    const n = t
      , a = Array(n.length);
    function r(s, i=!1) {
        if (s === hn)
            return;
        if (s === pn)
            return NaN;
        if (s === gn)
            return 1 / 0;
        if (s === mn)
            return -1 / 0;
        if (s === _n)
            return -0;
        if (i)
            throw new Error("Invalid input");
        if (s in a)
            return a[s];
        const o = n[s];
        if (!o || typeof o != "object")
            a[s] = o;
        else if (Array.isArray(o))
            if (typeof o[0] == "string") {
                const c = o[0]
                  , l = e == null ? void 0 : e[c];
                if (l)
                    return a[s] = l(r(o[1]));
                switch (c) {
                case "Date":
                    a[s] = new Date(o[1]);
                    break;
                case "Set":
                    const h = new Set;
                    a[s] = h;
                    for (let f = 1; f < o.length; f += 1)
                        h.add(r(o[f]));
                    break;
                case "Map":
                    const p = new Map;
                    a[s] = p;
                    for (let f = 1; f < o.length; f += 2)
                        p.set(r(o[f]), r(o[f + 1]));
                    break;
                case "RegExp":
                    a[s] = new RegExp(o[1],o[2]);
                    break;
                case "Object":
                    a[s] = Object(o[1]);
                    break;
                case "BigInt":
                    a[s] = BigInt(o[1]);
                    break;
                case "null":
                    const _ = Object.create(null);
                    a[s] = _;
                    for (let f = 1; f < o.length; f += 2)
                        _[o[f]] = r(o[f + 1]);
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "BigInt64Array":
                case "BigUint64Array":
                    {
                        const f = globalThis[c]
                          , m = o[1]
                          , u = ie(m)
                          , d = new f(u);
                        a[s] = d;
                        break
                    }
                case "ArrayBuffer":
                    {
                        const f = o[1]
                          , m = ie(f);
                        a[s] = m;
                        break
                    }
                default:
                    throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(o.length);
                a[s] = c;
                for (let l = 0; l < o.length; l += 1) {
                    const h = o[l];
                    h !== dn && (c[l] = r(h))
                }
            }
        else {
            const c = {};
            a[s] = c;
            for (const l in o) {
                const h = o[l];
                c[l] = r(h)
            }
        }
        return a[s]
    }
    return r(0)
}
const Re = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Re];
const wn = new Set([...Re]);
[...wn];
function vn(t) {
    return t.filter(e => e != null)
}
const bn = "x-sveltekit-invalidated"
  , An = "x-sveltekit-trailing-slash";
function gt(t) {
    return t instanceof At || t instanceof Ft ? t.status : 500
}
function En(t) {
    return t instanceof Ft ? t.text : "Internal Error"
}
let U, Q, Pt;
const Sn = ne.toString().includes("$$") || /function \w+\(\) \{\}/.test(ne.toString());
var nt, rt, at, ot, st, it, ct, lt, me, ft, _e, ut, ye;
Sn ? (U = {
    data: {},
    form: null,
    error: null,
    params: {},
    route: {
        id: null
    },
    state: {},
    status: -1,
    url: new URL("https://example.com")
},
Q = {
    current: null
},
Pt = {
    current: !1
}) : (U = new (me = class {
    constructor() {
        P(this, nt, C({}));
        P(this, rt, C(null));
        P(this, at, C(null));
        P(this, ot, C({}));
        P(this, st, C({
            id: null
        }));
        P(this, it, C({}));
        P(this, ct, C(-1));
        P(this, lt, C(new URL("https://example.com")))
    }
    get data() {
        return N(b(this, nt))
    }
    set data(e) {
        O(b(this, nt), e)
    }
    get form() {
        return N(b(this, rt))
    }
    set form(e) {
        O(b(this, rt), e)
    }
    get error() {
        return N(b(this, at))
    }
    set error(e) {
        O(b(this, at), e)
    }
    get params() {
        return N(b(this, ot))
    }
    set params(e) {
        O(b(this, ot), e)
    }
    get route() {
        return N(b(this, st))
    }
    set route(e) {
        O(b(this, st), e)
    }
    get state() {
        return N(b(this, it))
    }
    set state(e) {
        O(b(this, it), e)
    }
    get status() {
        return N(b(this, ct))
    }
    set status(e) {
        O(b(this, ct), e)
    }
    get url() {
        return N(b(this, lt))
    }
    set url(e) {
        O(b(this, lt), e)
    }
}
,
nt = new WeakMap,
rt = new WeakMap,
at = new WeakMap,
ot = new WeakMap,
st = new WeakMap,
it = new WeakMap,
ct = new WeakMap,
lt = new WeakMap,
me),
Q = new (_e = class {
    constructor() {
        P(this, ft, C(null))
    }
    get current() {
        return N(b(this, ft))
    }
    set current(e) {
        O(b(this, ft), e)
    }
}
,
ft = new WeakMap,
_e),
Pt = new (ye = class {
    constructor() {
        P(this, ut, C(!1))
    }
    get current() {
        return N(b(this, ut))
    }
    set current(e) {
        O(b(this, ut), e)
    }
}
,
ut = new WeakMap,
ye),
ke.v = () => Pt.current = !0);
function kn(t) {
    Object.assign(U, t)
}
const Rn = "/__data.json"
  , In = ".html__data.json";
function Un(t) {
    return t.endsWith(".html") ? t.replace(/\.html$/, In) : t.replace(/\/$/, "") + Rn
}
const {onMount: Ln, tick: Tn} = Ve
  , xn = new Set(["icon", "shortcut icon", "apple-touch-icon"])
  , V = we(be) ?? {}
  , tt = we(ve) ?? {}
  , $ = {
    url: se({}),
    page: se({}),
    navigating: Dt(null),
    updated: ln()
};
function Mt(t) {
    V[t] = Et()
}
function Pn(t, e) {
    let n = t + 1;
    for (; V[n]; )
        delete V[n],
        n += 1;
    for (n = e + 1; tt[n]; )
        delete tt[n],
        n += 1
}
function K(t) {
    return location.href = t.href,
    new Promise( () => {}
    )
}
async function Ie() {
    if ("serviceWorker"in navigator) {
        const t = await navigator.serviceWorker.getRegistration(x || "/");
        t && await t.update()
    }
}
function ce() {}
let Gt, Ot, mt, j, jt, A;
globalThis.__sveltekit_occtof.data;
const _t = []
  , yt = [];
let L = null;
const dt = new Map
  , Ht = new Set
  , Cn = new Set
  , z = new Set;
let w = {
    branch: [],
    error: null,
    url: null
}, Kt = !1, wt = !1, le = !0, et = !1, W = !1, Ue = !1, Wt = !1, Le, k, T, F;
const J = new Set
  , fe = new Map;
async function er(t, e, n) {
    var s, i, o, c;
    document.URL !== location.href && (location.href = location.href),
    A = t,
    await ((i = (s = t.hooks).init) == null ? void 0 : i.call(s)),
    Gt = on(t),
    j = document.documentElement,
    jt = e,
    Ot = t.nodes[0],
    mt = t.nodes[1],
    Ot(),
    mt(),
    k = (o = history.state) == null ? void 0 : o[G],
    T = (c = history.state) == null ? void 0 : c[Z],
    k || (k = T = Date.now(),
    history.replaceState({
        ...history.state,
        [G]: k,
        [Z]: T
    }, ""));
    const a = V[k];
    function r() {
        a && (history.scrollRestoration = "manual",
        scrollTo(a.x, a.y))
    }
    n ? (r(),
    await Gn(jt, n)) : (await X({
        type: "enter",
        url: qt(A.hash ? Kn(new URL(location.href)) : location.href),
        replace_state: !0
    }),
    r()),
    Mn()
}
function Nn() {
    _t.length = 0,
    Wt = !1
}
function Te(t) {
    yt.some(e => e == null ? void 0 : e.snapshot) && (tt[t] = yt.map(e => {
        var n;
        return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
    }
    ))
}
function xe(t) {
    var e;
    (e = tt[t]) == null || e.forEach( (n, a) => {
        var r, s;
        (s = (r = yt[a]) == null ? void 0 : r.snapshot) == null || s.restore(n)
    }
    )
}
function ue() {
    Mt(k),
    ae(be, V),
    Te(T),
    ae(ve, tt)
}
async function Yt(t, e, n, a) {
    let r;
    const s = await X({
        type: "goto",
        url: qt(t),
        keepfocus: e.keepFocus,
        noscroll: e.noScroll,
        replace_state: e.replaceState,
        state: e.state,
        redirect_count: n,
        nav_token: a,
        accept: () => {
            e.invalidateAll && (Wt = !0,
            r = [...fe.keys()]),
            e.invalidate && e.invalidate.forEach(qn)
        }
    });
    return e.invalidateAll && re().then(re).then( () => {
        fe.forEach( ({resource: i}, o) => {
            var c;
            r != null && r.includes(o) && ((c = i.refresh) == null || c.call(i))
        }
        )
    }
    ),
    s
}
async function On(t) {
    if (t.id !== (L == null ? void 0 : L.id)) {
        const e = {};
        J.add(e),
        L = {
            id: t.id,
            token: e,
            promise: Ne({
                ...t,
                preload: e
            }).then(n => (J.delete(e),
            n.type === "loaded" && n.state.error && (L = null),
            n))
        }
    }
    return L.promise
}
async function Ct(t) {
    var n;
    const e = (n = await Rt(t, !1)) == null ? void 0 : n.route;
    e && await Promise.all([...e.layouts, e.leaf].map(a => a == null ? void 0 : a[1]()))
}
function Pe(t, e, n) {
    var r;
    w = t.state;
    const a = document.querySelector("style[data-sveltekit]");
    if (a && a.remove(),
    Object.assign(U, t.props.page),
    Le = new A.root({
        target: e,
        props: {
            ...t.props,
            stores: $,
            components: yt
        },
        hydrate: n,
        sync: !1
    }),
    xe(T),
    n) {
        const s = {
            from: null,
            to: {
                params: w.params,
                route: {
                    id: ((r = w.route) == null ? void 0 : r.id) ?? null
                },
                url: new URL(location.href)
            },
            willUnload: !1,
            type: "enter",
            complete: Promise.resolve()
        };
        z.forEach(i => i(s))
    }
    wt = !0
}
function vt({url: t, params: e, branch: n, status: a, error: r, route: s, form: i}) {
    let o = "never";
    if (x && (t.pathname === x || t.pathname === x + "/"))
        o = "always";
    else
        for (const f of n)
            (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
    t.pathname = Ge(t.pathname, o),
    t.search = t.search;
    const c = {
        type: "loaded",
        state: {
            url: t,
            params: e,
            branch: n,
            error: r,
            route: s
        },
        props: {
            constructors: vn(n).map(f => f.node.component),
            page: Zt(U)
        }
    };
    i !== void 0 && (c.props.form = i);
    let l = {}
      , h = !U
      , p = 0;
    for (let f = 0; f < Math.max(n.length, w.branch.length); f += 1) {
        const m = n[f]
          , u = w.branch[f];
        (m == null ? void 0 : m.data) !== (u == null ? void 0 : u.data) && (h = !0),
        m && (l = {
            ...l,
            ...m.data
        },
        h && (c.props[`data_${p}`] = l),
        p += 1)
    }
    return (!w.url || t.href !== w.url.href || w.error !== r || i !== void 0 && i !== U.form || h) && (c.props.page = {
        error: r,
        params: e,
        route: {
            id: (s == null ? void 0 : s.id) ?? null
        },
        state: {},
        status: a,
        url: new URL(t),
        form: i ?? null,
        data: h ? l : U.data
    }),
    c
}
async function zt({loader: t, parent: e, url: n, params: a, route: r, server_data_node: s}) {
    var h, p, _;
    let i = null
      , o = !0;
    const c = {
        dependencies: new Set,
        params: new Set,
        parent: !1,
        route: !1,
        url: !1,
        search_params: new Set
    }
      , l = await t();
    if ((h = l.universal) != null && h.load) {
        let f = function(...u) {
            for (const d of u) {
                const {href: E} = new URL(d,n);
                c.dependencies.add(E)
            }
        };
        const m = {
            route: new Proxy(r,{
                get: (u, d) => (o && (c.route = !0),
                u[d])
            }),
            params: new Proxy(a,{
                get: (u, d) => (o && c.params.add(d),
                u[d])
            }),
            data: (s == null ? void 0 : s.data) ?? null,
            url: We(n, () => {
                o && (c.url = !0)
            }
            , u => {
                o && c.search_params.add(u)
            }
            , A.hash),
            async fetch(u, d) {
                u instanceof Request && (d = {
                    body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(),
                    cache: u.cache,
                    credentials: u.credentials,
                    headers: [...u.headers].length > 0 ? u == null ? void 0 : u.headers : void 0,
                    integrity: u.integrity,
                    keepalive: u.keepalive,
                    method: u.method,
                    mode: u.mode,
                    redirect: u.redirect,
                    referrer: u.referrer,
                    referrerPolicy: u.referrerPolicy,
                    signal: u.signal,
                    ...d
                });
                const {resolved: E, promise: R} = Ce(u, d, n);
                return o && f(E.href),
                R
            },
            setHeaders: () => {}
            ,
            depends: f,
            parent() {
                return o && (c.parent = !0),
                e()
            },
            untrack(u) {
                o = !1;
                try {
                    return u()
                } finally {
                    o = !0
                }
            }
        };
        i = await l.universal.load.call(null, m) ?? null
    }
    return {
        node: l,
        loader: t,
        server: s,
        universal: (p = l.universal) != null && p.load ? {
            type: "data",
            data: i,
            uses: c
        } : null,
        data: i ?? (s == null ? void 0 : s.data) ?? null,
        slash: ((_ = l.universal) == null ? void 0 : _.trailingSlash) ?? (s == null ? void 0 : s.slash)
    }
}
function Ce(t, e, n) {
    let a = t instanceof Request ? t.url : t;
    const r = new URL(a,n);
    r.origin === n.origin && (a = r.href.slice(n.origin.length));
    const s = wt ? Qe(a, r.href, e) : Ze(a, e);
    return {
        resolved: r,
        promise: s
    }
}
function he(t, e, n, a, r, s) {
    if (Wt)
        return !0;
    if (!r)
        return !1;
    if (r.parent && t || r.route && e || r.url && n)
        return !0;
    for (const i of r.search_params)
        if (a.has(i))
            return !0;
    for (const i of r.params)
        if (s[i] !== w.params[i])
            return !0;
    for (const i of r.dependencies)
        if (_t.some(o => o(new URL(i))))
            return !0;
    return !1
}
function Jt(t, e) {
    return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null
}
function jn(t, e) {
    if (!t)
        return new Set(e.searchParams.keys());
    const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
    for (const a of n) {
        const r = t.searchParams.getAll(a)
          , s = e.searchParams.getAll(a);
        r.every(i => s.includes(i)) && s.every(i => r.includes(i)) && n.delete(a)
    }
    return n
}
function de({error: t, url: e, route: n, params: a}) {
    return {
        type: "loaded",
        state: {
            error: t,
            url: e,
            route: n,
            params: a,
            branch: []
        },
        props: {
            page: Zt(U),
            constructors: []
        }
    }
}
async function Ne({id: t, invalidating: e, url: n, params: a, route: r, preload: s}) {
    if ((L == null ? void 0 : L.id) === t)
        return J.delete(L.token),
        L.promise;
    const {errors: i, layouts: o, leaf: c} = r
      , l = [...o, c];
    i.forEach(g => g == null ? void 0 : g().catch( () => {}
    )),
    l.forEach(g => g == null ? void 0 : g[1]().catch( () => {}
    ));
    let h = null;
    const p = w.url ? t !== bt(w.url) : !1
      , _ = w.route ? r.id !== w.route.id : !1
      , f = jn(w.url, n);
    let m = !1;
    const u = l.map( (g, y) => {
        var D;
        const v = w.branch[y]
          , S = !!(g != null && g[0]) && ((v == null ? void 0 : v.loader) !== g[1] || he(m, _, p, f, (D = v.server) == null ? void 0 : D.uses, a));
        return S && (m = !0),
        S
    }
    );
    if (u.some(Boolean)) {
        try {
            h = await $e(n, u)
        } catch (g) {
            const y = await H(g, {
                url: n,
                params: a,
                route: {
                    id: t
                }
            });
            return J.has(s) ? de({
                error: y,
                url: n,
                params: a,
                route: r
            }) : kt({
                status: gt(g),
                error: y,
                url: n,
                route: r
            })
        }
        if (h.type === "redirect")
            return h
    }
    const d = h == null ? void 0 : h.nodes;
    let E = !1;
    const R = l.map(async (g, y) => {
        var It;
        if (!g)
            return;
        const v = w.branch[y]
          , S = d == null ? void 0 : d[y];
        if ((!S || S.type === "skip") && g[1] === (v == null ? void 0 : v.loader) && !he(E, _, p, f, (It = v.universal) == null ? void 0 : It.uses, a))
            return v;
        if (E = !0,
        (S == null ? void 0 : S.type) === "error")
            throw S;
        return zt({
            loader: g[1],
            url: n,
            params: a,
            route: r,
            parent: async () => {
                var te;
                const Qt = {};
                for (let Ut = 0; Ut < y; Ut += 1)
                    Object.assign(Qt, (te = await R[Ut]) == null ? void 0 : te.data);
                return Qt
            }
            ,
            server_data_node: Jt(S === void 0 && g[0] ? {
                type: "skip"
            } : S ?? null, g[0] ? v == null ? void 0 : v.server : void 0)
        })
    }
    );
    for (const g of R)
        g.catch( () => {}
        );
    const I = [];
    for (let g = 0; g < l.length; g += 1)
        if (l[g])
            try {
                I.push(await R[g])
            } catch (y) {
                if (y instanceof Bt)
                    return {
                        type: "redirect",
                        location: y.location
                    };
                if (J.has(s))
                    return de({
                        error: await H(y, {
                            params: a,
                            url: n,
                            route: {
                                id: r.id
                            }
                        }),
                        url: n,
                        params: a,
                        route: r
                    });
                let v = gt(y), S;
                if (d != null && d.includes(y))
                    v = y.status ?? v,
                    S = y.error;
                else if (y instanceof At)
                    S = y.body;
                else {
                    if (await $.updated.check())
                        return await Ie(),
                        await K(n);
                    S = await H(y, {
                        params: a,
                        url: n,
                        route: {
                            id: r.id
                        }
                    })
                }
                const D = await $n(g, I, i);
                return D ? vt({
                    url: n,
                    params: a,
                    branch: I.slice(0, D.idx).concat(D.node),
                    status: v,
                    error: S,
                    route: r
                }) : await je(n, {
                    id: r.id
                }, S, v)
            }
        else
            I.push(void 0);
    return vt({
        url: n,
        params: a,
        branch: I,
        status: 200,
        error: null,
        route: r,
        form: e ? void 0 : null
    })
}
async function $n(t, e, n) {
    for (; t--; )
        if (n[t]) {
            let a = t;
            for (; !e[a]; )
                a -= 1;
            try {
                return {
                    idx: a + 1,
                    node: {
                        node: await n[t](),
                        loader: n[t],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function kt({status: t, error: e, url: n, route: a}) {
    const r = {};
    let s = null;
    if (A.server_loads[0] === 0)
        try {
            const o = await $e(n, [!0]);
            if (o.type !== "data" || o.nodes[0] && o.nodes[0].type !== "data")
                throw 0;
            s = o.nodes[0] ?? null
        } catch {
            (n.origin !== ht || n.pathname !== location.pathname || Kt) && await K(n)
        }
    try {
        const o = await zt({
            loader: Ot,
            url: n,
            params: r,
            route: a,
            parent: () => Promise.resolve({}),
            server_data_node: Jt(s)
        })
          , c = {
            node: await mt(),
            loader: mt,
            universal: null,
            server: null,
            data: null
        };
        return vt({
            url: n,
            params: r,
            branch: [o, c],
            status: t,
            error: e,
            route: null
        })
    } catch (o) {
        if (o instanceof Bt)
            return Yt(new URL(o.location,location.href), {}, 0);
        throw o
    }
}
async function Dn(t) {
    const e = t.href;
    if (dt.has(e))
        return dt.get(e);
    let n;
    try {
        const a = (async () => {
            let r = await A.hooks.reroute({
                url: new URL(t),
                fetch: async (s, i) => Ce(s, i, t).promise
            }) ?? t;
            if (typeof r == "string") {
                const s = new URL(t);
                A.hash ? s.hash = r : s.pathname = r,
                r = s
            }
            return r
        }
        )();
        dt.set(e, a),
        n = await a
    } catch {
        dt.delete(e);
        return
    }
    return n
}
async function Rt(t, e) {
    if (t && !St(t, x, A.hash)) {
        const n = await Dn(t);
        if (!n)
            return;
        const a = Bn(n);
        for (const r of Gt) {
            const s = r.exec(a);
            if (s)
                return {
                    id: bt(t),
                    invalidating: e,
                    route: r,
                    params: Ke(s),
                    url: t
                }
        }
    }
}
function Bn(t) {
    return He(A.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(x.length)) || "/"
}
function bt(t) {
    return (A.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}
function Oe({url: t, type: e, intent: n, delta: a}) {
    let r = !1;
    const s = Xt(w, n, t, e);
    a !== void 0 && (s.navigation.delta = a);
    const i = {
        ...s.navigation,
        cancel: () => {
            r = !0,
            s.reject(new Error("navigation cancelled"))
        }
    };
    return et || Ht.forEach(o => o(i)),
    r ? null : s
}
async function X({type: t, url: e, popped: n, keepfocus: a, noscroll: r, replace_state: s, state: i={}, redirect_count: o=0, nav_token: c={}, accept: l=ce, block: h=ce}) {
    const p = F;
    F = c;
    const _ = await Rt(e, !1)
      , f = t === "enter" ? Xt(w, _, e, t) : Oe({
        url: e,
        type: t,
        delta: n == null ? void 0 : n.delta,
        intent: _
    });
    if (!f) {
        h(),
        F === c && (F = p);
        return
    }
    const m = k
      , u = T;
    l(),
    et = !0,
    wt && f.navigation.type !== "enter" && $.navigating.set(Q.current = f.navigation);
    let d = _ && await Ne(_);
    if (!d) {
        if (St(e, x, A.hash))
            return await K(e);
        d = await je(e, {
            id: null
        }, await H(new Ft(404,"Not Found",`Not found: ${e.pathname}`), {
            url: e,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (e = (_ == null ? void 0 : _.url) || e,
    F !== c)
        return f.reject(new Error("navigation aborted")),
        !1;
    if (d.type === "redirect")
        if (o >= 20)
            d = await kt({
                status: 500,
                error: await H(new Error("Redirect loop"), {
                    url: e,
                    params: {},
                    route: {
                        id: null
                    }
                }),
                url: e,
                route: {
                    id: null
                }
            });
        else
            return await Yt(new URL(d.location,e).href, {}, o + 1, c),
            !1;
    else
        d.props.page.status >= 400 && await $.updated.check() && (await Ie(),
        await K(e));
    if (Nn(),
    Mt(m),
    Te(u),
    d.props.page.url.pathname !== e.pathname && (e.pathname = d.props.page.url.pathname),
    i = n ? n.state : i,
    !n) {
        const g = s ? 0 : 1
          , y = {
            [G]: k += g,
            [Z]: T += g,
            [Ae]: i
        };
        (s ? history.replaceState : history.pushState).call(history, y, "", e),
        s || Pn(k, T)
    }
    if (L = null,
    d.props.page.state = i,
    wt) {
        const g = (await Promise.all(Array.from(Cn, y => y(f.navigation)))).filter(y => typeof y == "function");
        if (g.length > 0) {
            let y = function() {
                g.forEach(v => {
                    z.delete(v)
                }
                )
            };
            g.push(y),
            g.forEach(v => {
                z.add(v)
            }
            )
        }
        w = d.state,
        d.props.page && (d.props.page.url = e),
        Le.$set(d.props),
        kn(d.props.page),
        Ue = !0
    } else
        Pe(d, jt, !1);
    const {activeElement: E} = document;
    await Tn();
    const R = n ? n.scroll : r ? Et() : null;
    if (le) {
        const g = e.hash && document.getElementById(Be(e));
        R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0)
    }
    const I = document.activeElement !== E && document.activeElement !== document.body;
    !a && !I && Hn(e),
    le = !0,
    d.props.page && Object.assign(U, d.props.page),
    et = !1,
    t === "popstate" && xe(T),
    f.fulfil(void 0),
    z.forEach(g => g(f.navigation)),
    $.navigating.set(Q.current = null)
}
async function je(t, e, n, a) {
    return t.origin === ht && t.pathname === location.pathname && !Kt ? await kt({
        status: a,
        error: n,
        url: t,
        route: e
    }) : await K(t)
}
function Fn() {
    let t, e, n;
    j.addEventListener("mousemove", o => {
        const c = o.target;
        clearTimeout(t),
        t = setTimeout( () => {
            s(c, B.hover)
        }
        , 20)
    }
    );
    function a(o) {
        o.defaultPrevented || s(o.composedPath()[0], B.tap)
    }
    j.addEventListener("mousedown", a),
    j.addEventListener("touchstart", a, {
        passive: !0
    });
    const r = new IntersectionObserver(o => {
        for (const c of o)
            c.isIntersecting && (Ct(new URL(c.target.href)),
            r.unobserve(c.target))
    }
    ,{
        threshold: 0
    });
    async function s(o, c) {
        const l = Se(o, j)
          , h = l === e && c >= n;
        if (!l || h)
            return;
        const {url: p, external: _, download: f} = Nt(l, x, A.hash);
        if (_ || f)
            return;
        const m = pt(l)
          , u = p && bt(w.url) === bt(p);
        if (!(m.reload || u))
            if (c <= m.preload_data) {
                e = l,
                n = B.tap;
                const d = await Rt(p, !1);
                if (!d)
                    return;
                On(d)
            } else
                c <= m.preload_code && (e = l,
                n = c,
                Ct(p))
    }
    function i() {
        r.disconnect();
        for (const o of j.querySelectorAll("a")) {
            const {url: c, external: l, download: h} = Nt(o, x, A.hash);
            if (l || h)
                continue;
            const p = pt(o);
            p.reload || (p.preload_code === B.viewport && r.observe(o),
            p.preload_code === B.eager && Ct(c))
        }
    }
    z.add(i),
    i()
}
function H(t, e) {
    if (t instanceof At)
        return t.body;
    const n = gt(t)
      , a = En(t);
    return A.hooks.handleError({
        error: t,
        event: e,
        status: n,
        message: a
    }) ?? {
        message: a
    }
}
function Vn(t, e) {
    Ln( () => (t.add(e),
    () => {
        t.delete(e)
    }
    ))
}
function nr(t) {
    Vn(Ht, t)
}
function rr(t, e={}) {
    return t = new URL(qt(t)),
    t.origin !== ht ? Promise.reject(new Error("goto: invalid URL")) : Yt(t, e, 0)
}
function qn(t) {
    if (typeof t == "function")
        _t.push(t);
    else {
        const {href: e} = new URL(t,location.href);
        _t.push(n => n.href === e)
    }
}
function Mn() {
    var e;
    history.scrollRestoration = "manual",
    addEventListener("beforeunload", n => {
        let a = !1;
        if (ue(),
        !et) {
            const r = Xt(w, void 0, null, "leave")
              , s = {
                ...r.navigation,
                cancel: () => {
                    a = !0,
                    r.reject(new Error("navigation cancelled"))
                }
            };
            Ht.forEach(i => i(s))
        }
        a ? (n.preventDefault(),
        n.returnValue = "") : history.scrollRestoration = "auto"
    }
    ),
    addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && ue()
    }
    ),
    (e = navigator.connection) != null && e.saveData || Fn(),
    j.addEventListener("click", async n => {
        if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented)
            return;
        const a = Se(n.composedPath()[0], j);
        if (!a)
            return;
        const {url: r, external: s, target: i, download: o} = Nt(a, x, A.hash);
        if (!r)
            return;
        if (i === "_parent" || i === "_top") {
            if (window.parent !== window)
                return
        } else if (i && i !== "_self")
            return;
        const c = pt(a);
        if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || o)
            return;
        const [h,p] = (A.hash ? r.hash.replace(/^#/, "") : r.href).split("#")
          , _ = h === Tt(location);
        if (s || c.reload && (!_ || !p)) {
            Oe({
                url: r,
                type: "link"
            }) ? et = !0 : n.preventDefault();
            return
        }
        if (p !== void 0 && _) {
            const [,f] = w.url.href.split("#");
            if (f === p) {
                if (n.preventDefault(),
                p === "" || p === "top" && a.ownerDocument.getElementById("top") === null)
                    window.scrollTo({
                        top: 0
                    });
                else {
                    const m = a.ownerDocument.getElementById(decodeURIComponent(p));
                    m && (m.scrollIntoView(),
                    m.focus())
                }
                return
            }
            if (W = !0,
            Mt(k),
            t(r),
            !c.replace_state)
                return;
            W = !1
        }
        n.preventDefault(),
        await new Promise(f => {
            requestAnimationFrame( () => {
                setTimeout(f, 0)
            }
            ),
            setTimeout(f, 100)
        }
        ),
        await X({
            type: "link",
            url: r,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ?? r.href === location.href
        })
    }
    ),
    j.addEventListener("submit", n => {
        if (n.defaultPrevented)
            return;
        const a = HTMLFormElement.prototype.cloneNode.call(n.target)
          , r = n.submitter;
        if (((r == null ? void 0 : r.formTarget) || a.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || a.method) !== "get")
            return;
        const o = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
        if (St(o, x, !1))
            return;
        const c = n.target
          , l = pt(c);
        if (l.reload)
            return;
        n.preventDefault(),
        n.stopPropagation();
        const h = new FormData(c)
          , p = r == null ? void 0 : r.getAttribute("name");
        p && h.append(p, (r == null ? void 0 : r.getAttribute("value")) ?? ""),
        o.search = new URLSearchParams(h).toString(),
        X({
            type: "form",
            url: o,
            keepfocus: l.keepfocus,
            noscroll: l.noscroll,
            replace_state: l.replace_state ?? o.href === location.href
        })
    }
    ),
    addEventListener("popstate", async n => {
        var a;
        if (!$t) {
            if ((a = n.state) != null && a[G]) {
                const r = n.state[G];
                if (F = {},
                r === k)
                    return;
                const s = V[r]
                  , i = n.state[Ae] ?? {}
                  , o = new URL(n.state[cn] ?? location.href)
                  , c = n.state[Z]
                  , l = w.url ? Tt(location) === Tt(w.url) : !1;
                if (c === T && (Ue || l)) {
                    i !== U.state && (U.state = i),
                    t(o),
                    V[k] = Et(),
                    s && scrollTo(s.x, s.y),
                    k = r;
                    return
                }
                const p = r - k;
                await X({
                    type: "popstate",
                    url: o,
                    popped: {
                        state: i,
                        scroll: s,
                        delta: p
                    },
                    accept: () => {
                        k = r,
                        T = c
                    }
                    ,
                    block: () => {
                        history.go(-p)
                    }
                    ,
                    nav_token: F
                })
            } else if (!W) {
                const r = new URL(location.href);
                t(r),
                A.hash && location.reload()
            }
        }
    }
    ),
    addEventListener("hashchange", () => {
        W && (W = !1,
        history.replaceState({
            ...history.state,
            [G]: ++k,
            [Z]: T
        }, "", location.href))
    }
    );
    for (const n of document.querySelectorAll("link"))
        xn.has(n.rel) && (n.href = n.href);
    addEventListener("pageshow", n => {
        n.persisted && $.navigating.set(Q.current = null)
    }
    );
    function t(n) {
        w.url = U.url = n,
        $.page.set(Zt(U)),
        $.page.notify()
    }
}
async function Gn(t, {status: e=200, error: n, node_ids: a, params: r, route: s, server_route: i, data: o, form: c}) {
    Kt = !0;
    const l = new URL(location.href);
    let h;
    ({params: r={}, route: s={
        id: null
    }} = await Rt(l, !1) || {}),
    h = Gt.find( ({id: f}) => f === s.id);
    let p, _ = !0;
    try {
        const f = a.map(async (u, d) => {
            const E = o[d];
            return E != null && E.uses && (E.uses = De(E.uses)),
            zt({
                loader: A.nodes[u],
                url: l,
                params: r,
                route: s,
                parent: async () => {
                    const R = {};
                    for (let I = 0; I < d; I += 1)
                        Object.assign(R, (await f[I]).data);
                    return R
                }
                ,
                server_data_node: Jt(E)
            })
        }
        )
          , m = await Promise.all(f);
        if (h) {
            const u = h.layouts;
            for (let d = 0; d < u.length; d++)
                u[d] || m.splice(d, 0, void 0)
        }
        p = vt({
            url: l,
            params: r,
            branch: m,
            status: e,
            error: n,
            form: c,
            route: h ?? null
        })
    } catch (f) {
        if (f instanceof Bt) {
            await K(new URL(f.location,location.href));
            return
        }
        p = await kt({
            status: gt(f),
            error: await H(f, {
                url: l,
                params: r,
                route: s
            }),
            url: l,
            route: s
        }),
        t.textContent = "",
        _ = !1
    }
    p.props.page && (p.props.page.state = {}),
    Pe(p, t, _)
}
async function $e(t, e) {
    var s;
    const n = new URL(t);
    n.pathname = Un(t.pathname),
    t.pathname.endsWith("/") && n.searchParams.append(An, "1"),
    n.searchParams.append(bn, e.map(i => i ? "1" : "0").join(""));
    const a = window.fetch
      , r = await a(n.href, {});
    if (!r.ok) {
        let i;
        throw (s = r.headers.get("content-type")) != null && s.includes("application/json") ? i = await r.json() : r.status === 404 ? i = "Not Found" : r.status === 500 && (i = "Internal Error"),
        new At(r.status,i)
    }
    return new Promise(async i => {
        var p;
        const o = new Map
          , c = r.body.getReader();
        function l(_) {
            return yn(_, {
                ...A.decoders,
                Promise: f => new Promise( (m, u) => {
                    o.set(f, {
                        fulfil: m,
                        reject: u
                    })
                }
                )
            })
        }
        let h = "";
        for (; ; ) {
            const {done: _, value: f} = await c.read();
            if (_ && !h)
                break;
            for (h += !f && h ? `
` : ze.decode(f, {
                stream: !0
            }); ; ) {
                const m = h.indexOf(`
`);
                if (m === -1)
                    break;
                const u = JSON.parse(h.slice(0, m));
                if (h = h.slice(m + 1),
                u.type === "redirect")
                    return i(u);
                if (u.type === "data")
                    (p = u.nodes) == null || p.forEach(d => {
                        (d == null ? void 0 : d.type) === "data" && (d.uses = De(d.uses),
                        d.data = l(d.data))
                    }
                    ),
                    i(u);
                else if (u.type === "chunk") {
                    const {id: d, data: E, error: R} = u
                      , I = o.get(d);
                    o.delete(d),
                    R ? I.reject(l(R)) : I.fulfil(l(E))
                }
            }
        }
    }
    )
}
function De(t) {
    return {
        dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
        params: new Set((t == null ? void 0 : t.params) ?? []),
        parent: !!(t != null && t.parent),
        route: !!(t != null && t.route),
        url: !!(t != null && t.url),
        search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
    }
}
let $t = !1;
function Hn(t) {
    const e = document.querySelector("[autofocus]");
    if (e)
        e.focus();
    else {
        const n = Be(t);
        if (n && document.getElementById(n)) {
            const {x: r, y: s} = Et();
            setTimeout( () => {
                const i = history.state;
                $t = !0,
                location.replace(`#${n}`),
                A.hash && location.replace(t.hash),
                history.replaceState(i, "", t.hash),
                scrollTo(r, s),
                $t = !1
            }
            )
        } else {
            const r = document.body
              , s = r.getAttribute("tabindex");
            r.tabIndex = -1,
            r.focus({
                preventScroll: !0,
                focusVisible: !1
            }),
            s !== null ? r.setAttribute("tabindex", s) : r.removeAttribute("tabindex")
        }
        const a = getSelection();
        if (a && a.type !== "None") {
            const r = [];
            for (let s = 0; s < a.rangeCount; s += 1)
                r.push(a.getRangeAt(s));
            setTimeout( () => {
                if (a.rangeCount === r.length) {
                    for (let s = 0; s < a.rangeCount; s += 1) {
                        const i = r[s]
                          , o = a.getRangeAt(s);
                        if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset)
                            return
                    }
                    a.removeAllRanges()
                }
            }
            )
        }
    }
}
function Xt(t, e, n, a) {
    var c, l;
    let r, s;
    const i = new Promise( (h, p) => {
        r = h,
        s = p
    }
    );
    return i.catch( () => {}
    ),
    {
        navigation: {
            from: {
                params: t.params,
                route: {
                    id: ((c = t.route) == null ? void 0 : c.id) ?? null
                },
                url: t.url
            },
            to: n && {
                params: (e == null ? void 0 : e.params) ?? null,
                route: {
                    id: ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ?? null
                },
                url: n
            },
            willUnload: !e,
            type: a,
            complete: i
        },
        fulfil: r,
        reject: s
    }
}
function Zt(t) {
    return {
        data: t.data,
        error: t.error,
        form: t.form,
        params: t.params,
        route: t.route,
        state: t.state,
        status: t.status,
        url: t.url
    }
}
function Kn(t) {
    const e = new URL(t);
    return e.hash = decodeURIComponent(t.hash),
    e
}
function Be(t) {
    let e;
    if (A.hash) {
        const [,,n] = t.hash.split("#", 3);
        e = n ?? ""
    } else
        e = t.hash.slice(1);
    return decodeURIComponent(e)
}
export {er as a, nr as b, rr as g, Xn as l, U as p, $ as s};
