const ae = "https://backend.wplace.live/files"
  , a = location.pathname.split("/").slice(0, -1).join("/")
  , ne = [a + "/_app/immutable/entry/app.DtZzCEUN.js", a + "/_app/immutable/nodes/0.Dyi5wBM-.js", a + "/_app/immutable/assets/0.DlGU2TSy.css", a + "/_app/immutable/assets/Geist-cyrillic.CHSlOQsW.woff2", a + "/_app/immutable/assets/Geist-latin-ext.DMtmJ5ZE.woff2", a + "/_app/immutable/assets/Geist-latin.Dg_dQHbK.woff2", a + "/_app/immutable/assets/GeistMono-cyrillic.BZdD_g9V.woff2", a + "/_app/immutable/assets/GeistMono-latin-ext.b6lpi8_2.woff2", a + "/_app/immutable/assets/GeistMono-latin.Cjtb1TV-.woff2", a + "/_app/immutable/assets/PixelifySans-cyrillic.CPPz0Qvd.woff2", a + "/_app/immutable/assets/PixelifySans-latin.vdc2vUDH.woff2", a + "/_app/immutable/assets/NotoColorEmoji-flags.ClvgErYz.woff2", a + "/_app/immutable/assets/flags.a2kmUSbF.webp", a + "/_app/immutable/assets/flags@2x.gR6KPp3x.webp", a + "/_app/immutable/nodes/1.ByKD75xM.js", a + "/_app/immutable/nodes/2.bR915k4d.js", a + "/_app/immutable/assets/2.DyRArBtB.css", a + "/_app/immutable/nodes/3.D3ybHvcN.js", a + "/_app/immutable/nodes/4.BxR2OI2C.js", a + "/_app/immutable/nodes/5.Df3WwhsI.js", a + "/_app/immutable/nodes/6.DJYTHwaP.js", a + "/_app/immutable/nodes/7.CbR2lhuT.js", a + "/_app/immutable/assets/7.BD1hRFPA.css", a + "/_app/immutable/nodes/8.C0mZKvQt.js", a + "/_app/immutable/assets/8.B8VXfLeS.css", a + "/_app/immutable/nodes/9.molIwfoX.js", a + "/_app/immutable/chunks/1mTheT_N.js", a + "/_app/immutable/chunks/7RCLylsG.js", a + "/_app/immutable/assets/LoginForm.CxMG0irz.css", a + "/_app/immutable/chunks/B1Dd8L33.js", a + "/_app/immutable/chunks/BIsWzXV6.js", a + "/_app/immutable/chunks/BUjsOn5w.js", a + "/_app/immutable/chunks/BbaR7U-7.js", a + "/_app/immutable/chunks/ByjpUdWt.js", a + "/_app/immutable/chunks/Bzak7iHL.js", a + "/_app/immutable/chunks/C2N1yofn.js", a + "/_app/immutable/chunks/C5GsJ62f.js", a + "/_app/immutable/chunks/CHkrc43M.js", a + "/_app/immutable/chunks/CVpIJCQG.js", a + "/_app/immutable/chunks/Cj-nAB2C.js", a + "/_app/immutable/chunks/CmZTKXqr.js", a + "/_app/immutable/chunks/Cx7BSLZW.js", a + "/_app/immutable/chunks/DJaMmT_4.js", a + "/_app/immutable/chunks/DZ6afX6-.js", a + "/_app/immutable/chunks/DZCdaKGh.js", a + "/_app/immutable/chunks/Dgzk-Rmz.js", a + "/_app/immutable/assets/ProfileAvatarWithLevel.6dmPRSfx.css", a + "/_app/immutable/chunks/DmQhqxnR.js", a + "/_app/immutable/assets/notification.CPyrWqU1.mp3", a + "/_app/immutable/chunks/Dp1pzeXC.js", a + "/_app/immutable/chunks/dV0J5liF.js", a + "/_app/immutable/chunks/h2W_5Jzs.js", a + "/_app/immutable/chunks/tlM6Zgdz.js", a + "/_app/immutable/entry/start.Czmypl03.js", a + "/_app/immutable/chunks/1FgtjJRR.js"]
  , ie = [a + "/26/2025/08/12/horse.png", a + "/favicon.ico", a + "/img/apple-touch-icon.png", a + "/img/favicon-96x96.png", a + "/img/logo-512x512.png", a + "/img/logo.png", a + "/img/og-image-mobile.png", a + "/img/og-image.png", a + "/img/pwa-country-leaderboard-mobile.png", a + "/img/pwa-kiev-mobile.png", a + "/img/pwa-paint-heart-mobile.png", a + "/img/pwa-void-mobile.png", a + "/img/web-app-manifest-192x192.png", a + "/img/web-app-manifest-512x512.png", a + "/site.webmanifest"]
  , oe = "1755019348975";
let r;
const Z = typeof TextDecoder < "u" ? new TextDecoder("utf-8",{
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: () => {
        throw Error("TextDecoder not available")
    }
};
typeof TextDecoder < "u" && Z.decode();
let S = null;
function U() {
    return (S === null || S.byteLength === 0) && (S = new Uint8Array(r.memory.buffer)),
    S
}
function te(e, n) {
    return e = e >>> 0,
    Z.decode(U().subarray(e, e + n))
}
let C = null;
function de() {
    return (C === null || C.byteLength === 0) && (C = new Uint8ClampedArray(r.memory.buffer)),
    C
}
function le(e, n) {
    return e = e >>> 0,
    de().subarray(e / 1, e / 1 + n)
}
const b = new Array(128).fill(void 0);
b.push(void 0, null, !0, !1);
let D = b.length;
function se(e) {
    D === b.length && b.push(b.length + 1);
    const n = D;
    return D = b[n],
    b[n] = e,
    n
}
let K = 0;
function J(e, n) {
    const i = n(e.length * 1, 1) >>> 0;
    return U().set(e, i / 1),
    K = e.length,
    i
}
let M = null;
function z() {
    return (M === null || M.byteLength === 0) && (M = new Int32Array(r.memory.buffer)),
    M
}
function ce(e, n) {
    return e = e >>> 0,
    U().subarray(e / 1, e / 1 + n)
}
function re(e, n, i) {
    try {
        const m = r.__wbindgen_add_to_stack_pointer(-16)
          , y = J(e, r.__wbindgen_malloc)
          , t = K;
        r.encode(m, y, t, n, i);
        var l = z()[m / 4 + 0]
          , s = z()[m / 4 + 1]
          , u = ce(l, s).slice();
        return r.__wbindgen_free(l, s * 1, 1),
        u
    } finally {
        r.__wbindgen_add_to_stack_pointer(16)
    }
}
function me(e) {
    return b[e]
}
function ge(e) {
    e < 132 || (b[e] = D,
    D = e)
}
function fe(e) {
    const n = me(e);
    return ge(e),
    n
}
function ue(e) {
    const n = J(e, r.__wbindgen_malloc)
      , i = K
      , l = r.decode(n, i);
    return fe(l)
}
async function pe(e, n) {
    if (typeof Response == "function" && e instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming == "function")
            try {
                return await WebAssembly.instantiateStreaming(e, n)
            } catch (l) {
                if (e.headers.get("Content-Type") != "application/wasm")
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", l);
                else
                    throw l
            }
        const i = await e.arrayBuffer();
        return await WebAssembly.instantiate(i, n)
    } else {
        const i = await WebAssembly.instantiate(e, n);
        return i instanceof WebAssembly.Instance ? {
            instance: i,
            module: e
        } : i
    }
}
function be() {
    const e = {};
    return e.wbg = {},
    e.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function(n, i, l, s) {
        var u = le(n, i).slice();
        r.__wbindgen_free(n, i * 1, 1);
        const m = new ImageData(u,l >>> 0,s >>> 0);
        return se(m)
    }
    ,
    e.wbg.__wbindgen_throw = function(n, i) {
        throw new Error(te(n, i))
    }
    ,
    e
}
function he(e, n) {
    return r = e.exports,
    F.__wbindgen_wasm_module = n,
    M = null,
    S = null,
    C = null,
    r
}
async function F(e) {
    if (r !== void 0)
        return r;
    const n = be();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const {instance: i, module: l} = await pe(await e, n);
    return he(i, l)
}
const we = globalThis.ServiceWorkerGlobalScope !== void 0
  , ye = we && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0
  , _e = typeof process == "object" && process.release && process.release.name === "node";
(ye || _e) && (globalThis.ImageData || (globalThis.ImageData = class {
    constructor(n, i, l) {
        this.data = n,
        this.width = i,
        this.height = l
    }
}
),
typeof self < "u" && self.location === void 0 && (self.location = {
    href: ""
}));
let E;
async function Se(e) {
    return E || (E = F(e)),
    E
}
async function Ce(e) {
    await Se();
    const n = await ue(new Uint8Array(e));
    if (!n)
        throw new Error("Encoding error.");
    return n
}
let j;
async function q(e) {
    return j || (j = F(e)),
    j
}
async function H(e) {
    await q();
    const n = await re(e.data, e.width, e.height);
    if (!n)
        throw new Error("Encoding error.");
    return n.buffer
}
const Me = "" + new URL("_app/immutable/assets/squoosh_png_bg.BsfxGNEB.wasm",location.href).pathname;
function V({pixel: e, season: n, tile: i}) {
    return `t=(${i[0]},${i[1]});p=(${e[0]},${e[1]});s=${n}`
}
const De = [{
    tileSize: 1e3,
    zoom: 11
}]
  , ke = 4
  , Te = 6e3
  , Be = [{
    name: "Transparent",
    rgb: [0, 0, 0]
}, {
    name: "Black",
    rgb: [0, 0, 0]
}, {
    name: "Dark Gray",
    rgb: [60, 60, 60]
}, {
    name: "Gray",
    rgb: [120, 120, 120]
}, {
    name: "Light Gray",
    rgb: [210, 210, 210]
}, {
    name: "White",
    rgb: [255, 255, 255]
}, {
    name: "Deep Red",
    rgb: [96, 0, 24]
}, {
    name: "Red",
    rgb: [237, 28, 36]
}, {
    name: "Orange",
    rgb: [255, 127, 39]
}, {
    name: "Gold",
    rgb: [246, 170, 9]
}, {
    name: "Yellow",
    rgb: [249, 221, 59]
}, {
    name: "Light Yellow",
    rgb: [255, 250, 188]
}, {
    name: "Dark Green",
    rgb: [14, 185, 104]
}, {
    name: "Green",
    rgb: [19, 230, 123]
}, {
    name: "Light Green",
    rgb: [135, 255, 94]
}, {
    name: "Dark Teal",
    rgb: [12, 129, 110]
}, {
    name: "Teal",
    rgb: [16, 174, 166]
}, {
    name: "Light Teal",
    rgb: [19, 225, 190]
}, {
    name: "Dark Blue",
    rgb: [40, 80, 158]
}, {
    name: "Blue",
    rgb: [64, 147, 228]
}, {
    name: "Cyan",
    rgb: [96, 247, 242]
}, {
    name: "Indigo",
    rgb: [107, 80, 246]
}, {
    name: "Light Indigo",
    rgb: [153, 177, 251]
}, {
    name: "Dark Purple",
    rgb: [120, 12, 153]
}, {
    name: "Purple",
    rgb: [170, 56, 185]
}, {
    name: "Light Purple",
    rgb: [224, 159, 249]
}, {
    name: "Dark Pink",
    rgb: [203, 0, 122]
}, {
    name: "Pink",
    rgb: [236, 31, 128]
}, {
    name: "Light Pink",
    rgb: [243, 141, 169]
}, {
    name: "Dark Brown",
    rgb: [104, 70, 52]
}, {
    name: "Brown",
    rgb: [149, 104, 42]
}, {
    name: "Beige",
    rgb: [248, 178, 119]
}, {
    name: "Medium Gray",
    rgb: [170, 170, 170]
}, {
    name: "Dark Red",
    rgb: [165, 14, 30]
}, {
    name: "Light Red",
    rgb: [250, 128, 114]
}, {
    name: "Dark Orange",
    rgb: [228, 92, 26]
}, {
    name: "Light Tan",
    rgb: [214, 181, 148]
}, {
    name: "Dark Goldenrod",
    rgb: [156, 132, 49]
}, {
    name: "Goldenrod",
    rgb: [197, 173, 49]
}, {
    name: "Light Goldenrod",
    rgb: [232, 212, 95]
}, {
    name: "Dark Olive",
    rgb: [74, 107, 58]
}, {
    name: "Olive",
    rgb: [90, 148, 74]
}, {
    name: "Light Olive",
    rgb: [132, 197, 115]
}, {
    name: "Dark Cyan",
    rgb: [15, 121, 159]
}, {
    name: "Light Cyan",
    rgb: [187, 250, 242]
}, {
    name: "Light Blue",
    rgb: [125, 199, 255]
}, {
    name: "Dark Indigo",
    rgb: [77, 49, 184]
}, {
    name: "Dark Slate Blue",
    rgb: [74, 66, 132]
}, {
    name: "Slate Blue",
    rgb: [122, 113, 196]
}, {
    name: "Light Slate Blue",
    rgb: [181, 174, 241]
}, {
    name: "Light Brown",
    rgb: [219, 164, 99]
}, {
    name: "Dark Beige",
    rgb: [209, 128, 81]
}, {
    name: "Light Beige",
    rgb: [255, 197, 165]
}, {
    name: "Dark Peach",
    rgb: [155, 82, 73]
}, {
    name: "Peach",
    rgb: [209, 128, 120]
}, {
    name: "Light Peach",
    rgb: [250, 182, 164]
}, {
    name: "Dark Tan",
    rgb: [123, 99, 82]
}, {
    name: "Tan",
    rgb: [156, 132, 107]
}, {
    name: "Dark Slate",
    rgb: [51, 57, 65]
}, {
    name: "Slate",
    rgb: [109, 117, 141]
}, {
    name: "Light Slate",
    rgb: [179, 185, 209]
}, {
    name: "Dark Stone",
    rgb: [109, 100, 63]
}, {
    name: "Stone",
    rgb: [148, 140, 107]
}, {
    name: "Light Stone",
    rgb: [205, 197, 158]
}]
  , Ie = {
    needsPhoneVerification: "needs_phone_verification"
}
  , Pe = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
}
  , Ge = {
    10: {
        name: "25,000 Droplets",
        price: 500,
        isDollar: !0,
        lookupKey: "droplets_5",
        items: [{
            name: "Droplet",
            amount: 25e3
        }]
    },
    20: {
        name: "78,750 Droplets",
        price: 1500,
        isDollar: !0,
        lookupKey: "droplets_15",
        items: [{
            name: "Droplet",
            amount: 76750
        }]
    },
    30: {
        name: "165,000 Droplets",
        price: 3e3,
        isDollar: !0,
        lookupKey: "droplets_30",
        items: [{
            name: "Droplet",
            amount: 165e3
        }]
    },
    40: {
        name: "287,500 Droplets",
        price: 5e3,
        isDollar: !0,
        lookupKey: "droplets_50",
        items: [{
            name: "Droplet",
            amount: 287500
        }]
    },
    50: {
        name: "450,000 Droplets",
        price: 7500,
        isDollar: !0,
        lookupKey: "droplets_75",
        items: [{
            name: "Droplet",
            amount: 45e4
        }]
    },
    60: {
        name: "625,000 Droplets",
        price: 1e4,
        isDollar: !0,
        lookupKey: "droplets_100",
        items: [{
            name: "Droplet",
            amount: 625e3
        }]
    },
    70: {
        name: "+5 Max. Charges",
        price: 500,
        isDollar: !1,
        items: [{
            name: "Max. Charge",
            amount: 5
        }]
    },
    80: {
        name: "+30 Paint Charges",
        price: 500,
        isDollar: !1,
        items: [{
            name: "Paint Charge",
            amount: 30
        }]
    },
    100: {
        name: "Unlock Color",
        price: 2e3,
        isDollar: !1,
        items: [{
            name: "Color",
            amount: 1
        }]
    },
    110: {
        name: "Flag",
        price: 2e4,
        isDollar: !1,
        items: [{
            name: "Flag",
            amount: 1
        }]
    },
    120: {
        name: "Profile Picture",
        price: 2e4,
        isDollar: !1,
        items: [{
            name: "Profile Picture",
            amount: 1
        }]
    }
}
  , Ae = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`)
  , P = {
    seasons: De,
    regionSize: ke,
    refreshIntervalMs: Te,
    colors: Be,
    errors: Ie,
    items: Pe,
    products: Ge,
    countries: Ae
}
  , B = P
  , Y = P.seasons.length - 1;
P.seasons[Y].zoom;
P.seasons[Y].tileSize;
const Le = q(Me)
  , W = `cache-${oe}`
  , Re = new Set([...ne, ...ie])
  , k = self
  , I = new Map;
let w = [];
k.addEventListener("install", e => {
    async function n() {
        await (await caches.open(W)).addAll([...Re, "/offline"])
    }
    e.waitUntil(n())
}
);
k.addEventListener("activate", e => {
    async function n() {
        for (const i of await caches.keys())
            i !== W && await caches.delete(i)
    }
    e.waitUntil(n())
}
);
k.addEventListener("fetch", e => {
    if (e.request.method !== "GET")
        return;
    async function n() {
        const l = new URL(e.request.url);
        try {
            return await i(l)
        } catch (s) {
            const m = await (await caches.open(W)).match(e.request);
            if (m)
                return m;
            throw s
        }
    }
    async function i(l) {
        var m, y;
        const s = e.request.url.startsWith(ae) && l.pathname.match(/^.*\/s(\d+).*\/tiles\/(\d+)\/(\d+).png$/);
        if (s) {
            const t = I.get(e.clientId);
            if (t || w.length) {
                const _ = parseInt(s[1])
                  , G = parseInt(s[2])
                  , A = parseInt(s[3])
                  , x = Date.now()
                  , $ = 1.9 * B.refreshIntervalMs;
                w = w.filter(o => x - o.time.getTime() < $);
                const Q = w.filter( ({data: o}) => G === o.tile[0] && A === o.tile[1] && o.season === _).map( ({data: o}) => ({
                    ...o
                }))
                  , X = ((m = t == null ? void 0 : t.data) == null ? void 0 : m.filter(o => G === o.tile[0] && A === o.tile[1] && o.season === _)) ?? []
                  , v = Q.concat(X);
                if (v.length || t) {
                    await Le;
                    let o, L;
                    const T = Ee(G, A, _)
                      , f = await ((y = t == null ? void 0 : t.cachedTiles) == null ? void 0 : y.get(T))
                      , O = f && x - f.time.getTime() < B.refreshIntervalMs;
                    if (O)
                        o = structuredClone(f.png),
                        L = f.init;
                    else {
                        let g = f;
                        if (t)
                            if (f === void 0) {
                                t.cachedTiles.set(T, p());
                                const c = await t.cachedTiles.get(T);
                                c && (g = c)
                            } else
                                !O && !f.refreshing && (f.refreshing = !0,
                                setTimeout(async () => {
                                    try {
                                        const c = await p();
                                        t.cachedTiles.set(T, new Promise(h => h(c)));
                                        const d = await k.clients.get(e == null ? void 0 : e.clientId);
                                        d == null || d.postMessage({
                                            type: "refreshPixelArt"
                                        })
                                    } catch {
                                        f.refreshing = !1
                                    }
                                }
                                ));
                        g || (g = await p()),
                        o = structuredClone(g.png),
                        L = g.init;
                        async function p() {
                            try {
                                const c = await fetch(e == null ? void 0 : e.request);
                                if (c && c.status !== 404) {
                                    const d = await c.blob();
                                    return {
                                        png: await Ce(await d.arrayBuffer()),
                                        init: {
                                            headers: c.headers,
                                            status: c.status,
                                            statusText: c.statusText
                                        },
                                        time: new Date,
                                        refreshing: !1
                                    }
                                } else {
                                    console.warn("painting 404 tile");
                                    const d = B.seasons[_].tileSize;
                                    return {
                                        png: N(d, d),
                                        init: {
                                            headers: {
                                                "Content-Type": "image/png"
                                            },
                                            status: 200
                                        },
                                        time: new Date,
                                        refreshing: !1
                                    }
                                }
                            } catch (c) {
                                if (console.error("Error while fetching in servicer worker: ", c),
                                f)
                                    return f;
                                {
                                    const d = B.seasons[_].tileSize;
                                    return {
                                        png: N(d, d),
                                        init: {
                                            headers: {
                                                "Content-Type": "image/png"
                                            },
                                            status: 200
                                        },
                                        time: new Date,
                                        refreshing: !1
                                    }
                                }
                            }
                        }
                    }
                    const R = new Map;
                    for (const g of v) {
                        const [p,c] = g.pixel
                          , d = p + c * o.width << 2
                          , h = g.color;
                        R.get(d) || R.set(d, [o.data[d], o.data[d + 1], o.data[d + 2], o.data[d + 3]]),
                        o.data[d] = h.r,
                        o.data[d + 1] = h.g,
                        o.data[d + 2] = h.b,
                        o.data[d + 3] = h.a
                    }
                    const ee = await H(o);
                    for (const [g,p] of R.entries())
                        o.data[g] = p[0],
                        o.data[g + 1] = p[1],
                        o.data[g + 2] = p[2],
                        o.data[g + 3] = p[3];
                    return new Response(ee,L)
                }
            }
        }
        const u = await fetch(e == null ? void 0 : e.request);
        if (s && u.status === 404) {
            const t = await H(N(1, 1));
            return new Response(t,{
                headers: {
                    "Content-Type": "image/png"
                },
                status: 200
            })
        }
        return u
    }
    e.respondWith(n())
}
);
k.addEventListener("message", e => {
    var i, l;
    const n = e.data;
    try {
        const s = ((i = e.source) == null ? void 0 : i.id) ?? "none";
        switch (n == null ? void 0 : n.type) {
        case "previewPixels":
            const u = n.data
              , m = I.get(s);
            m ? m.data = u : I.set(s, {
                data: u,
                cachedTiles: new Map
            });
            break;
        case "clearPixelPreview":
            I.delete(s);
            break;
        case "paintPixels":
            console.log(t);
            w.push(...n.data.map(t => ({
                data: t,
                time: new Date
            })));
            break;
        case "unpaintPixels":
            const y = new Set(n.data.map(t => V(t)));
            w = w.filter( ({data: t}) => !y.has(V(t)));
            break
        }
    } finally {
        (l = e.source) == null || l.postMessage({
            id: n.id
        })
    }
}
);
function Ee(e, n, i) {
    return `t=(${e},${n});s=${i}`
}
function N(e, n) {
    return {
        data: new Uint8ClampedArray(e * n * 4),
        width: e,
        height: n,
        colorSpace: "srgb"
    }
}
