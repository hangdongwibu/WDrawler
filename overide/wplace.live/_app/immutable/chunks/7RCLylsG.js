import "./Bzak7iHL.js";
import {a2 as ce, v as ie, a3 as se, z as oe, bb as ve, p as W, aI as E, aS as B, y as i, aT as de, a as X, b as w, c as Z, f as U, t as S, aU as p, aC as $, d as o, r as v, s as m} from "./BUjsOn5w.js";
import {s as x} from "./tlM6Zgdz.js";
import {p as d, i as G, r as ee} from "./B1Dd8L33.js";
import {s as V, c as A, a as te, b as J} from "./Cx7BSLZW.js";
import {b as fe} from "./DZCdaKGh.js";
import {P as ue, c as me} from "./BIsWzXV6.js";
import {o as _e} from "./CVpIJCQG.js";
import {g as M} from "./C5GsJ62f.js";
import {L as he} from "./DJaMmT_4.js";
function be(r, e, a) {
    ce( () => {
        var n = ie( () => e(r, a == null ? void 0 : a()) || {});
        if (a && (n != null && n.update)) {
            var s = !1
              , _ = {};
            se( () => {
                var f = a();
                oe(f),
                s && ve(_, f) && (_ = f,
                n.update(f))
            }
            ),
            s = !0
        }
        if (n != null && n.destroy)
            return () => n.destroy()
    }
    )
}
const ge = r => `Login with ${r.name}`
  , xe = r => `Entrar com ${r.name}`
  , Q = (r, e={}) => (e.locale ?? M()) === "en" ? ge(r) : xe(r)
  , we = () => "By continuing, you agree to our"
  , ye = () => "Ao continuar, você concorda com nossos"
  , ke = (r={}, e={}) => (e.locale ?? M()) === "en" ? we() : ye()
  , Ce = () => "Terms of Service"
  , Ie = () => "Termos de Serviço"
  , Le = (r={}, e={}) => (e.locale ?? M()) === "en" ? Ce() : Ie()
  , ze = () => "and"
  , Te = () => "e"
  , Ee = (r={}, e={}) => (e.locale ?? M()) === "en" ? ze() : Te()
  , Be = () => "Privacy Policy"
  , Me = () => "Política de privacidade"
  , Pe = (r={}, e={}) => (e.locale ?? M()) === "en" ? Be() : Me();
var Fe = U("<div></div>");
function Se(r, e) {
    W(e, !0);
    let a = d(e, "widgetId", 15)
      , n = d(e, "appearance", 3, "always")
      , s = d(e, "language", 3, "auto")
      , _ = d(e, "execution", 3, "render")
      , f = d(e, "retryInterval", 3, 8e3)
      , C = d(e, "retry", 3, "auto")
      , H = d(e, "refreshExpired", 3, "auto")
      , y = d(e, "theme", 3, "auto")
      , I = d(e, "size", 3, "normal")
      , K = d(e, "tabIndex", 3, 0);
    d(e, "reset", 15)( () => {
        var t;
        a() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(a()))
    }
    );
    const P = p( () => ({
        
        sitekey: e.siteKey,
        callback: (t, c) => {
            var l;
            (l = e.callback) == null || l.call(e, t, c)
        }
        ,
        "error-callback": t => {
            var c;
            (c = e.errorCallback) == null || c.call(e, t)
        }
        ,
        "timeout-callback": () => {
            var t;
            (t = e.timeoutCallback) == null || t.call(e)
        }
        ,
        "expired-callback": () => {
            var t;
            (t = e.expiredCallback) == null || t.call(e)
        }
        ,
        "before-interactive-callback": () => {
            var t;
            (t = e.beforeInteractiveCallback) == null || t.call(e)
        }
        ,
        "after-interactive-callback": () => {
            var t;
            (t = e.afterInteractiveCallback) == null || t.call(e)
        }
        ,
        "unsupported-callback": () => {
            var t;
            return (t = e.unsupportedCallback) == null ? void 0 : t.call(e)
        }
        ,
        "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
        "response-field": e.responseField ?? e.forms ?? !0,
        "refresh-expired": H(),
        "retry-interval": f(),
        tabindex: K(),
        appearance: n(),
        execution: _(),
        language: s(),
        action: e.action,
        retry: C(),
        theme: y(),
        cData: e.cData,
        size: I()
    }))
      , k = (t, c) => {
        let l = window.turnstile.render(t, c);
          console.log("Hey! look at me!");
        console.log(c);
        return a(l),
        {
            destroy() {
                window.turnstile.remove(l)
            },
            update(u) {
                window.turnstile.remove(l),
                l = window.turnstile.render(t, u),
                a(l)
            }
        }
    }
    ;
    let h = B(!1)
      , L = B(!1);
    _e( () => {
        if (E(L, !0),
        !i(h)) {
            const t = document.createElement("script");
            t.type = "text/javascript",
            t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            t.async = !0,
            t.addEventListener("load", () => E(h, !0), {
                once: !0
            }),
            document.head.appendChild(t)
        }
        return () => {
            E(L, !1)
        }
    }
    );
    var z = de()
      , F = X(z);
    {
        var N = t => {
            var c = Fe();
            let l;
            be(c, (u, j) => k == null ? void 0 : k(u, j), () => i(P)),
            S(u => l = V(c, 1, A(e.class), "svelte-1gvfki5", l, u), [ () => ({
                flexible: I() == "flexible"
            })]),
            w(t, c)
        }
        ;
        G(F, t => {
            i(h) && i(L) && t(N)
        }
        )
    }
    w(r, z),
    Z()
}
var Ue = $('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');
function He(r, e) {
    let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Ue();
    te(n, () => ({
        viewBox: "0 0 256 262",
        xmlns: "http://www.w3.org/2000/svg",
        ...a
    })),
    w(r, n)
}
var Ke = $('<svg><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"></path><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"></path><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z"></path></g></svg>');
function Ne(r, e) {
    let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Ke();
    te(n, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        "xml:space": "preserve",
        viewBox: "0 0 2400 2800",
        ...a
    })),
    w(r, n)
}
var je = U('<div class="text-error text-sm"> </div>')
  , De = U('<a><!> </a> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1)
  , Ge = U('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');
function Ze(r, e) {
    W(e, !0);
    let a = B("")
      , n = B(null)
      , s = B("");
    function _(t, c) {
        return `${me}/auth/${t}?token=${c}${e.redirect ? `&r=${e.redirect}` : ""}`
    }
    var f = Ge()
      , C = o(f)
      , H = o(C);
    he(H, {
        hasText: !0
    }),
    v(C);
    var y = m(C, 2)
      , I = o(y)
      , K = o(I);
    {
        var R = t => {
            var c = De()
              , l = X(c)
              , u = o(l);
            He(u, {
                class: "mr-1 size-5"
            });
            var j = m(u);
            v(l);
            var T = m(l, 2)
              , q = o(T);
            Ne(q, {
                class: "mr-1 size-5"
            });
            var ae = m(q);
            v(T);
            var O = m(T, 2)
              , Y = o(O);
            {
                let b = p( () => ue.trim());
                Se(Y, {
                    get siteKey() {
                        return i(b)
                    },
                    callback: g => {
                        E(s, g, !0)
                    }
                })
            }
            var re = m(Y, 2);
            {
                var ne = b => {
                    var g = je()
                      , D = o(g, !0);
                    v(g),
                    S( () => x(D, i(a))),
                    w(b, g)
                }
                ;
                G(re, b => {
                    i(a) && b(ne)
                }
                )
            }
            v(O),
            S( (b, g, D, le) => {
                V(l, 1, A({
                    "btn btn-lg bg-base-100 w-full text-base": !0,
                    "bg-base-content/10 pointer-events-none": !i(s)
                })),
                J(l, "href", b),
                x(j, ` ${g ?? ""}`),
                V(T, 1, A({
                    "btn btn-lg bg-base-100 w-full text-base": !0,
                    "bg-base-content/10 pointer-events-none": !i(s)
                })),
                J(T, "href", D),
                x(ae, ` ${le ?? ""}`)
            }
            , [ () => i(s) ? _("google", i(s)) : "#", () => Q({
                name: "Google"
            }), () => i(s) ? _("twitch", i(s)) : "#", () => Q({
                name: "Twitch"
            })]),
            w(t, c)
        }
        ;
        G(K, t => {
            t(R, !1)
        }
        )
    }
    v(I),
    v(y),
    fe(y, t => E(n, t), () => i(n));
    var P = m(y, 2)
      , k = o(P)
      , h = m(k)
      , L = o(h, !0);
    v(h);
    var z = m(h)
      , F = m(z)
      , N = o(F, !0);
    v(F),
    v(P),
    v(f),
    S( (t, c, l, u) => {
        x(k, `${t ?? ""} `),
        x(L, c),
        x(z, ` ${l ?? ""} `),
        x(N, u)
    }
    , [ () => ke(), () => Le(), () => Ee(), () => Pe()]),
    w(r, f),
    Z()
}
export {Ze as L, Ne as T, Se as a};
