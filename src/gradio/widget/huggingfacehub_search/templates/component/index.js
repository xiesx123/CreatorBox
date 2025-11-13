var Z1 = Object.defineProperty;
var Si = (r) => {
  throw TypeError(r);
};
var $1 = (r, e, t) => e in r ? Z1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ae = (r, e, t) => $1(r, typeof e != "symbol" ? e + "" : e, t), K1 = (r, e, t) => e.has(r) || Si("Cannot " + t);
var Fi = (r, e, t) => e.has(r) ? Si("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t);
var en = (r, e, t) => (K1(r, e, "access private method"), t);
const {
  SvelteComponent: Q1,
  assign: J1,
  children: eu,
  claim_element: tu,
  create_slot: ru,
  detach: Ei,
  element: nu,
  get_all_dirty_from_scope: au,
  get_slot_changes: iu,
  get_spread_update: lu,
  init: su,
  insert_hydration: ou,
  safe_not_equal: uu,
  set_dynamic_element_data: Ci,
  set_style: t0,
  toggle_class: B0,
  transition_in: vo,
  transition_out: bo,
  update_slot_base: cu
} = window.__gradio__svelte__internal;
function fu(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[22].default
  ), i = ru(
    a,
    r,
    /*$$scope*/
    r[21],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      r[10]
    ) },
    { id: (
      /*elem_id*/
      r[5]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      r[6].join(" ") + " svelte-1ezsyiy"
    }
  ], o = {};
  for (let s = 0; s < l.length; s += 1)
    o = J1(o, l[s]);
  return {
    c() {
      e = nu(
        /*tag*/
        r[18]
      ), i && i.c(), this.h();
    },
    l(s) {
      e = tu(
        s,
        /*tag*/
        (r[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var u = eu(e);
      i && i.l(u), u.forEach(Ei), this.h();
    },
    h() {
      Ci(
        /*tag*/
        r[18]
      )(e, o), B0(
        e,
        "hidden",
        /*visible*/
        r[13] === !1
      ), B0(
        e,
        "padded",
        /*padding*/
        r[9]
      ), B0(
        e,
        "flex",
        /*flex*/
        r[0]
      ), B0(
        e,
        "border_focus",
        /*border_mode*/
        r[8] === "focus"
      ), B0(
        e,
        "border_contrast",
        /*border_mode*/
        r[8] === "contrast"
      ), B0(e, "hide-container", !/*explicit_call*/
      r[11] && !/*container*/
      r[12]), t0(
        e,
        "height",
        /*get_dimension*/
        r[19](
          /*height*/
          r[1]
        )
      ), t0(
        e,
        "min-height",
        /*get_dimension*/
        r[19](
          /*min_height*/
          r[2]
        )
      ), t0(
        e,
        "max-height",
        /*get_dimension*/
        r[19](
          /*max_height*/
          r[3]
        )
      ), t0(e, "width", typeof /*width*/
      r[4] == "number" ? `calc(min(${/*width*/
      r[4]}px, 100%))` : (
        /*get_dimension*/
        r[19](
          /*width*/
          r[4]
        )
      )), t0(
        e,
        "border-style",
        /*variant*/
        r[7]
      ), t0(
        e,
        "overflow",
        /*allow_overflow*/
        r[14] ? (
          /*overflow_behavior*/
          r[15]
        ) : "hidden"
      ), t0(
        e,
        "flex-grow",
        /*scale*/
        r[16]
      ), t0(e, "min-width", `calc(min(${/*min_width*/
      r[17]}px, 100%))`), t0(e, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      ou(s, e, u), i && i.m(e, null), n = !0;
    },
    p(s, u) {
      i && i.p && (!n || u & /*$$scope*/
      2097152) && cu(
        i,
        a,
        s,
        /*$$scope*/
        s[21],
        n ? iu(
          a,
          /*$$scope*/
          s[21],
          u,
          null
        ) : au(
          /*$$scope*/
          s[21]
        ),
        null
      ), Ci(
        /*tag*/
        s[18]
      )(e, o = lu(l, [
        (!n || u & /*test_id*/
        1024) && { "data-testid": (
          /*test_id*/
          s[10]
        ) },
        (!n || u & /*elem_id*/
        32) && { id: (
          /*elem_id*/
          s[5]
        ) },
        (!n || u & /*elem_classes*/
        64 && t !== (t = "block " + /*elem_classes*/
        s[6].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), B0(
        e,
        "hidden",
        /*visible*/
        s[13] === !1
      ), B0(
        e,
        "padded",
        /*padding*/
        s[9]
      ), B0(
        e,
        "flex",
        /*flex*/
        s[0]
      ), B0(
        e,
        "border_focus",
        /*border_mode*/
        s[8] === "focus"
      ), B0(
        e,
        "border_contrast",
        /*border_mode*/
        s[8] === "contrast"
      ), B0(e, "hide-container", !/*explicit_call*/
      s[11] && !/*container*/
      s[12]), u & /*height*/
      2 && t0(
        e,
        "height",
        /*get_dimension*/
        s[19](
          /*height*/
          s[1]
        )
      ), u & /*min_height*/
      4 && t0(
        e,
        "min-height",
        /*get_dimension*/
        s[19](
          /*min_height*/
          s[2]
        )
      ), u & /*max_height*/
      8 && t0(
        e,
        "max-height",
        /*get_dimension*/
        s[19](
          /*max_height*/
          s[3]
        )
      ), u & /*width*/
      16 && t0(e, "width", typeof /*width*/
      s[4] == "number" ? `calc(min(${/*width*/
      s[4]}px, 100%))` : (
        /*get_dimension*/
        s[19](
          /*width*/
          s[4]
        )
      )), u & /*variant*/
      128 && t0(
        e,
        "border-style",
        /*variant*/
        s[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && t0(
        e,
        "overflow",
        /*allow_overflow*/
        s[14] ? (
          /*overflow_behavior*/
          s[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && t0(
        e,
        "flex-grow",
        /*scale*/
        s[16]
      ), u & /*min_width*/
      131072 && t0(e, "min-width", `calc(min(${/*min_width*/
      s[17]}px, 100%))`);
    },
    i(s) {
      n || (vo(i, s), n = !0);
    },
    o(s) {
      bo(i, s), n = !1;
    },
    d(s) {
      s && Ei(e), i && i.d(s);
    }
  };
}
function hu(r) {
  let e, t = (
    /*tag*/
    r[18] && fu(r)
  );
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, a) {
      t && t.m(n, a), e = !0;
    },
    p(n, [a]) {
      /*tag*/
      n[18] && t.p(n, a);
    },
    i(n) {
      e || (vo(t, n), e = !0);
    },
    o(n) {
      bo(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function mu(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: f = [] } = e, { variant: d = "solid" } = e, { border_mode: g = "base" } = e, { padding: v = !0 } = e, { type: E = "normal" } = e, { test_id: F = void 0 } = e, { explicit_call: z = !1 } = e, { container: T = !0 } = e, { visible: _ = !0 } = e, { allow_overflow: b = !0 } = e, { overflow_behavior: x = "auto" } = e, { scale: k = null } = e, { min_width: S = 0 } = e, { flex: C = !1 } = e;
  _ || (C = !1);
  let R = E === "fieldset" ? "fieldset" : "div";
  const N = (L) => {
    if (L !== void 0) {
      if (typeof L == "number")
        return L + "px";
      if (typeof L == "string")
        return L;
    }
  };
  return r.$$set = (L) => {
    "height" in L && t(1, i = L.height), "min_height" in L && t(2, l = L.min_height), "max_height" in L && t(3, o = L.max_height), "width" in L && t(4, s = L.width), "elem_id" in L && t(5, u = L.elem_id), "elem_classes" in L && t(6, f = L.elem_classes), "variant" in L && t(7, d = L.variant), "border_mode" in L && t(8, g = L.border_mode), "padding" in L && t(9, v = L.padding), "type" in L && t(20, E = L.type), "test_id" in L && t(10, F = L.test_id), "explicit_call" in L && t(11, z = L.explicit_call), "container" in L && t(12, T = L.container), "visible" in L && t(13, _ = L.visible), "allow_overflow" in L && t(14, b = L.allow_overflow), "overflow_behavior" in L && t(15, x = L.overflow_behavior), "scale" in L && t(16, k = L.scale), "min_width" in L && t(17, S = L.min_width), "flex" in L && t(0, C = L.flex), "$$scope" in L && t(21, a = L.$$scope);
  }, [
    C,
    i,
    l,
    o,
    s,
    u,
    f,
    d,
    g,
    v,
    F,
    z,
    T,
    _,
    b,
    x,
    k,
    S,
    R,
    N,
    E,
    a,
    n
  ];
}
class du extends Q1 {
  constructor(e) {
    super(), su(this, e, mu, hu, uu, {
      height: 1,
      min_height: 2,
      max_height: 3,
      width: 4,
      elem_id: 5,
      elem_classes: 6,
      variant: 7,
      border_mode: 8,
      padding: 9,
      type: 20,
      test_id: 10,
      explicit_call: 11,
      container: 12,
      visible: 13,
      allow_overflow: 14,
      overflow_behavior: 15,
      scale: 16,
      min_width: 17,
      flex: 0
    });
  }
}
class La {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new La(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Ia {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Ia(t, La.range(this, e));
  }
}
class Q {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + e, a, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var o = l.lexer.input;
      a = l.start, i = l.end, a === o.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var s = o.slice(a, i).replace(/[^]/g, "$&̲"), u;
      a > 15 ? u = "…" + o.slice(a - 15, a) : u = o.slice(0, a);
      var f;
      i + 15 < o.length ? f = o.slice(i, i + 15) + "…" : f = o.slice(i), n += u + s + f;
    }
    var d = new Error(n);
    return d.name = "ParseError", d.__proto__ = Q.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
Q.prototype.__proto__ = Error.prototype;
var pu = function(e, t) {
  return e.indexOf(t) !== -1;
}, gu = function(e, t) {
  return e === void 0 ? t : e;
}, vu = /([A-Z])/g, bu = function(e) {
  return e.replace(vu, "-$1").toLowerCase();
}, yu = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, wu = /[&><"']/g;
function _u(r) {
  return String(r).replace(wu, (e) => yu[e]);
}
var yo = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, ku = function(e) {
  var t = yo(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Du = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Au = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, te = {
  contains: pu,
  deflt: gu,
  escape: _u,
  hyphenate: bu,
  getBaseElem: yo,
  isCharacterBox: ku,
  protocolFromUrl: Au
};
class Pt {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return ft[xu[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return ft[Su[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return ft[Fu[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return ft[Eu[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return ft[Cu[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return ft[Tu[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Oa = 0, Sn = 1, gr = 2, zt = 3, Gr = 4, I0 = 5, br = 6, m0 = 7, ft = [new Pt(Oa, 0, !1), new Pt(Sn, 0, !0), new Pt(gr, 1, !1), new Pt(zt, 1, !0), new Pt(Gr, 2, !1), new Pt(I0, 2, !0), new Pt(br, 3, !1), new Pt(m0, 3, !0)], xu = [Gr, I0, Gr, I0, br, m0, br, m0], Su = [I0, I0, I0, I0, m0, m0, m0, m0], Fu = [gr, zt, Gr, I0, br, m0, br, m0], Eu = [zt, zt, I0, I0, m0, m0, m0, m0], Cu = [Sn, Sn, zt, zt, I0, I0, m0, m0], Tu = [Oa, Sn, gr, zt, gr, zt, gr, zt], re = {
  DISPLAY: ft[Oa],
  TEXT: ft[gr],
  SCRIPT: ft[Gr],
  SCRIPTSCRIPT: ft[br]
}, ba = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function Mu(r) {
  for (var e = 0; e < ba.length; e++)
    for (var t = ba[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var yn = [];
ba.forEach((r) => r.blocks.forEach((e) => yn.push(...e)));
function zu(r) {
  for (var e = 0; e < yn.length; e += 2)
    if (r >= yn[e] && r <= yn[e + 1])
      return !0;
  return !1;
}
var cr = 80, Bu = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Nu = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Ru = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Lu = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Iu = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Ou = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, qu = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Pu = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = Bu(t, cr);
      break;
    case "sqrtSize1":
      a = Nu(t, cr);
      break;
    case "sqrtSize2":
      a = Ru(t, cr);
      break;
    case "sqrtSize3":
      a = Lu(t, cr);
      break;
    case "sqrtSize4":
      a = Iu(t, cr);
      break;
    case "sqrtTall":
      a = qu(t, cr, n);
  }
  return a;
}, Hu = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Ti = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Uu = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Xr {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return te.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var Tt = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Mi = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function qa(r, e, t) {
  if (!Tt[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = Tt[e][n];
  if (!a && r[0] in Mi && (n = Mi[r[0]].charCodeAt(0), a = Tt[e][n]), !a && t === "text" && zu(n) && (a = Tt[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var ya = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, Vu = {
  ex: !0,
  em: !0,
  mu: !0
}, Gu = function(e) {
  return typeof e != "string" && (e = e.unit), e in ya || e in Vu || e === "ex";
}, Be = function(e, t) {
  var n;
  if (e.unit in ya)
    n = ya[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new Q("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, U = function(e) {
  return +e.toFixed(4) + "em";
}, Gt = function(e) {
  return e.filter((t) => t).join(" ");
}, wo = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, _o = function(e) {
  var t = document.createElement(e);
  t.className = Gt(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, ko = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + te.escape(Gt(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += te.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + te.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + te.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Pn {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, wo.call(this, e, n, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return te.contains(this.classes, e);
  }
  toNode() {
    return _o.call(this, "span");
  }
  toMarkup() {
    return ko.call(this, "span");
  }
}
class Do {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, wo.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return te.contains(this.classes, e);
  }
  toNode() {
    return _o.call(this, "a");
  }
  toMarkup() {
    return ko.call(this, "a");
  }
}
class Wu {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return te.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + te.escape(this.src) + '"' + (' alt="' + te.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += te.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + te.escape(t) + '"'), e += "'/>", e;
  }
}
var Yu = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class bt {
  constructor(e, t, n, a, i, l, o, s) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
    var u = Mu(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Yu[this.text]);
  }
  hasClass(e) {
    return te.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = U(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Gt(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += te.escape(Gt(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += te.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + te.escape(n) + '"');
    var i = te.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class Wt {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + te.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class nr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ti[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + te.escape(this.alternate) + '"/>' : '<path d="' + te.escape(Ti[this.pathName]) + '"/>';
  }
}
class zi {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + te.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Bi(r) {
  if (r instanceof bt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function ju(r) {
  if (r instanceof Pn)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Xu = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Pe = {
  math: {},
  text: {}
};
function c(r, e, t, n, a, i) {
  Pe[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (Pe[r][n] = Pe[r][a]);
}
var h = "math", I = "text", m = "main", y = "ams", Te = "accent-token", Y = "bin", p0 = "close", wr = "inner", ee = "mathord", Ye = "op-token", C0 = "open", Hn = "punct", w = "rel", Rt = "spacing", D = "textord";
c(h, m, w, "≡", "\\equiv", !0);
c(h, m, w, "≺", "\\prec", !0);
c(h, m, w, "≻", "\\succ", !0);
c(h, m, w, "∼", "\\sim", !0);
c(h, m, w, "⊥", "\\perp");
c(h, m, w, "⪯", "\\preceq", !0);
c(h, m, w, "⪰", "\\succeq", !0);
c(h, m, w, "≃", "\\simeq", !0);
c(h, m, w, "∣", "\\mid", !0);
c(h, m, w, "≪", "\\ll", !0);
c(h, m, w, "≫", "\\gg", !0);
c(h, m, w, "≍", "\\asymp", !0);
c(h, m, w, "∥", "\\parallel");
c(h, m, w, "⋈", "\\bowtie", !0);
c(h, m, w, "⌣", "\\smile", !0);
c(h, m, w, "⊑", "\\sqsubseteq", !0);
c(h, m, w, "⊒", "\\sqsupseteq", !0);
c(h, m, w, "≐", "\\doteq", !0);
c(h, m, w, "⌢", "\\frown", !0);
c(h, m, w, "∋", "\\ni", !0);
c(h, m, w, "∝", "\\propto", !0);
c(h, m, w, "⊢", "\\vdash", !0);
c(h, m, w, "⊣", "\\dashv", !0);
c(h, m, w, "∋", "\\owns");
c(h, m, Hn, ".", "\\ldotp");
c(h, m, Hn, "⋅", "\\cdotp");
c(h, m, D, "#", "\\#");
c(I, m, D, "#", "\\#");
c(h, m, D, "&", "\\&");
c(I, m, D, "&", "\\&");
c(h, m, D, "ℵ", "\\aleph", !0);
c(h, m, D, "∀", "\\forall", !0);
c(h, m, D, "ℏ", "\\hbar", !0);
c(h, m, D, "∃", "\\exists", !0);
c(h, m, D, "∇", "\\nabla", !0);
c(h, m, D, "♭", "\\flat", !0);
c(h, m, D, "ℓ", "\\ell", !0);
c(h, m, D, "♮", "\\natural", !0);
c(h, m, D, "♣", "\\clubsuit", !0);
c(h, m, D, "℘", "\\wp", !0);
c(h, m, D, "♯", "\\sharp", !0);
c(h, m, D, "♢", "\\diamondsuit", !0);
c(h, m, D, "ℜ", "\\Re", !0);
c(h, m, D, "♡", "\\heartsuit", !0);
c(h, m, D, "ℑ", "\\Im", !0);
c(h, m, D, "♠", "\\spadesuit", !0);
c(h, m, D, "§", "\\S", !0);
c(I, m, D, "§", "\\S");
c(h, m, D, "¶", "\\P", !0);
c(I, m, D, "¶", "\\P");
c(h, m, D, "†", "\\dag");
c(I, m, D, "†", "\\dag");
c(I, m, D, "†", "\\textdagger");
c(h, m, D, "‡", "\\ddag");
c(I, m, D, "‡", "\\ddag");
c(I, m, D, "‡", "\\textdaggerdbl");
c(h, m, p0, "⎱", "\\rmoustache", !0);
c(h, m, C0, "⎰", "\\lmoustache", !0);
c(h, m, p0, "⟯", "\\rgroup", !0);
c(h, m, C0, "⟮", "\\lgroup", !0);
c(h, m, Y, "∓", "\\mp", !0);
c(h, m, Y, "⊖", "\\ominus", !0);
c(h, m, Y, "⊎", "\\uplus", !0);
c(h, m, Y, "⊓", "\\sqcap", !0);
c(h, m, Y, "∗", "\\ast");
c(h, m, Y, "⊔", "\\sqcup", !0);
c(h, m, Y, "◯", "\\bigcirc", !0);
c(h, m, Y, "∙", "\\bullet", !0);
c(h, m, Y, "‡", "\\ddagger");
c(h, m, Y, "≀", "\\wr", !0);
c(h, m, Y, "⨿", "\\amalg");
c(h, m, Y, "&", "\\And");
c(h, m, w, "⟵", "\\longleftarrow", !0);
c(h, m, w, "⇐", "\\Leftarrow", !0);
c(h, m, w, "⟸", "\\Longleftarrow", !0);
c(h, m, w, "⟶", "\\longrightarrow", !0);
c(h, m, w, "⇒", "\\Rightarrow", !0);
c(h, m, w, "⟹", "\\Longrightarrow", !0);
c(h, m, w, "↔", "\\leftrightarrow", !0);
c(h, m, w, "⟷", "\\longleftrightarrow", !0);
c(h, m, w, "⇔", "\\Leftrightarrow", !0);
c(h, m, w, "⟺", "\\Longleftrightarrow", !0);
c(h, m, w, "↦", "\\mapsto", !0);
c(h, m, w, "⟼", "\\longmapsto", !0);
c(h, m, w, "↗", "\\nearrow", !0);
c(h, m, w, "↩", "\\hookleftarrow", !0);
c(h, m, w, "↪", "\\hookrightarrow", !0);
c(h, m, w, "↘", "\\searrow", !0);
c(h, m, w, "↼", "\\leftharpoonup", !0);
c(h, m, w, "⇀", "\\rightharpoonup", !0);
c(h, m, w, "↙", "\\swarrow", !0);
c(h, m, w, "↽", "\\leftharpoondown", !0);
c(h, m, w, "⇁", "\\rightharpoondown", !0);
c(h, m, w, "↖", "\\nwarrow", !0);
c(h, m, w, "⇌", "\\rightleftharpoons", !0);
c(h, y, w, "≮", "\\nless", !0);
c(h, y, w, "", "\\@nleqslant");
c(h, y, w, "", "\\@nleqq");
c(h, y, w, "⪇", "\\lneq", !0);
c(h, y, w, "≨", "\\lneqq", !0);
c(h, y, w, "", "\\@lvertneqq");
c(h, y, w, "⋦", "\\lnsim", !0);
c(h, y, w, "⪉", "\\lnapprox", !0);
c(h, y, w, "⊀", "\\nprec", !0);
c(h, y, w, "⋠", "\\npreceq", !0);
c(h, y, w, "⋨", "\\precnsim", !0);
c(h, y, w, "⪹", "\\precnapprox", !0);
c(h, y, w, "≁", "\\nsim", !0);
c(h, y, w, "", "\\@nshortmid");
c(h, y, w, "∤", "\\nmid", !0);
c(h, y, w, "⊬", "\\nvdash", !0);
c(h, y, w, "⊭", "\\nvDash", !0);
c(h, y, w, "⋪", "\\ntriangleleft");
c(h, y, w, "⋬", "\\ntrianglelefteq", !0);
c(h, y, w, "⊊", "\\subsetneq", !0);
c(h, y, w, "", "\\@varsubsetneq");
c(h, y, w, "⫋", "\\subsetneqq", !0);
c(h, y, w, "", "\\@varsubsetneqq");
c(h, y, w, "≯", "\\ngtr", !0);
c(h, y, w, "", "\\@ngeqslant");
c(h, y, w, "", "\\@ngeqq");
c(h, y, w, "⪈", "\\gneq", !0);
c(h, y, w, "≩", "\\gneqq", !0);
c(h, y, w, "", "\\@gvertneqq");
c(h, y, w, "⋧", "\\gnsim", !0);
c(h, y, w, "⪊", "\\gnapprox", !0);
c(h, y, w, "⊁", "\\nsucc", !0);
c(h, y, w, "⋡", "\\nsucceq", !0);
c(h, y, w, "⋩", "\\succnsim", !0);
c(h, y, w, "⪺", "\\succnapprox", !0);
c(h, y, w, "≆", "\\ncong", !0);
c(h, y, w, "", "\\@nshortparallel");
c(h, y, w, "∦", "\\nparallel", !0);
c(h, y, w, "⊯", "\\nVDash", !0);
c(h, y, w, "⋫", "\\ntriangleright");
c(h, y, w, "⋭", "\\ntrianglerighteq", !0);
c(h, y, w, "", "\\@nsupseteqq");
c(h, y, w, "⊋", "\\supsetneq", !0);
c(h, y, w, "", "\\@varsupsetneq");
c(h, y, w, "⫌", "\\supsetneqq", !0);
c(h, y, w, "", "\\@varsupsetneqq");
c(h, y, w, "⊮", "\\nVdash", !0);
c(h, y, w, "⪵", "\\precneqq", !0);
c(h, y, w, "⪶", "\\succneqq", !0);
c(h, y, w, "", "\\@nsubseteqq");
c(h, y, Y, "⊴", "\\unlhd");
c(h, y, Y, "⊵", "\\unrhd");
c(h, y, w, "↚", "\\nleftarrow", !0);
c(h, y, w, "↛", "\\nrightarrow", !0);
c(h, y, w, "⇍", "\\nLeftarrow", !0);
c(h, y, w, "⇏", "\\nRightarrow", !0);
c(h, y, w, "↮", "\\nleftrightarrow", !0);
c(h, y, w, "⇎", "\\nLeftrightarrow", !0);
c(h, y, w, "△", "\\vartriangle");
c(h, y, D, "ℏ", "\\hslash");
c(h, y, D, "▽", "\\triangledown");
c(h, y, D, "◊", "\\lozenge");
c(h, y, D, "Ⓢ", "\\circledS");
c(h, y, D, "®", "\\circledR");
c(I, y, D, "®", "\\circledR");
c(h, y, D, "∡", "\\measuredangle", !0);
c(h, y, D, "∄", "\\nexists");
c(h, y, D, "℧", "\\mho");
c(h, y, D, "Ⅎ", "\\Finv", !0);
c(h, y, D, "⅁", "\\Game", !0);
c(h, y, D, "‵", "\\backprime");
c(h, y, D, "▲", "\\blacktriangle");
c(h, y, D, "▼", "\\blacktriangledown");
c(h, y, D, "■", "\\blacksquare");
c(h, y, D, "⧫", "\\blacklozenge");
c(h, y, D, "★", "\\bigstar");
c(h, y, D, "∢", "\\sphericalangle", !0);
c(h, y, D, "∁", "\\complement", !0);
c(h, y, D, "ð", "\\eth", !0);
c(I, m, D, "ð", "ð");
c(h, y, D, "╱", "\\diagup");
c(h, y, D, "╲", "\\diagdown");
c(h, y, D, "□", "\\square");
c(h, y, D, "□", "\\Box");
c(h, y, D, "◊", "\\Diamond");
c(h, y, D, "¥", "\\yen", !0);
c(I, y, D, "¥", "\\yen", !0);
c(h, y, D, "✓", "\\checkmark", !0);
c(I, y, D, "✓", "\\checkmark");
c(h, y, D, "ℶ", "\\beth", !0);
c(h, y, D, "ℸ", "\\daleth", !0);
c(h, y, D, "ℷ", "\\gimel", !0);
c(h, y, D, "ϝ", "\\digamma", !0);
c(h, y, D, "ϰ", "\\varkappa");
c(h, y, C0, "┌", "\\@ulcorner", !0);
c(h, y, p0, "┐", "\\@urcorner", !0);
c(h, y, C0, "└", "\\@llcorner", !0);
c(h, y, p0, "┘", "\\@lrcorner", !0);
c(h, y, w, "≦", "\\leqq", !0);
c(h, y, w, "⩽", "\\leqslant", !0);
c(h, y, w, "⪕", "\\eqslantless", !0);
c(h, y, w, "≲", "\\lesssim", !0);
c(h, y, w, "⪅", "\\lessapprox", !0);
c(h, y, w, "≊", "\\approxeq", !0);
c(h, y, Y, "⋖", "\\lessdot");
c(h, y, w, "⋘", "\\lll", !0);
c(h, y, w, "≶", "\\lessgtr", !0);
c(h, y, w, "⋚", "\\lesseqgtr", !0);
c(h, y, w, "⪋", "\\lesseqqgtr", !0);
c(h, y, w, "≑", "\\doteqdot");
c(h, y, w, "≓", "\\risingdotseq", !0);
c(h, y, w, "≒", "\\fallingdotseq", !0);
c(h, y, w, "∽", "\\backsim", !0);
c(h, y, w, "⋍", "\\backsimeq", !0);
c(h, y, w, "⫅", "\\subseteqq", !0);
c(h, y, w, "⋐", "\\Subset", !0);
c(h, y, w, "⊏", "\\sqsubset", !0);
c(h, y, w, "≼", "\\preccurlyeq", !0);
c(h, y, w, "⋞", "\\curlyeqprec", !0);
c(h, y, w, "≾", "\\precsim", !0);
c(h, y, w, "⪷", "\\precapprox", !0);
c(h, y, w, "⊲", "\\vartriangleleft");
c(h, y, w, "⊴", "\\trianglelefteq");
c(h, y, w, "⊨", "\\vDash", !0);
c(h, y, w, "⊪", "\\Vvdash", !0);
c(h, y, w, "⌣", "\\smallsmile");
c(h, y, w, "⌢", "\\smallfrown");
c(h, y, w, "≏", "\\bumpeq", !0);
c(h, y, w, "≎", "\\Bumpeq", !0);
c(h, y, w, "≧", "\\geqq", !0);
c(h, y, w, "⩾", "\\geqslant", !0);
c(h, y, w, "⪖", "\\eqslantgtr", !0);
c(h, y, w, "≳", "\\gtrsim", !0);
c(h, y, w, "⪆", "\\gtrapprox", !0);
c(h, y, Y, "⋗", "\\gtrdot");
c(h, y, w, "⋙", "\\ggg", !0);
c(h, y, w, "≷", "\\gtrless", !0);
c(h, y, w, "⋛", "\\gtreqless", !0);
c(h, y, w, "⪌", "\\gtreqqless", !0);
c(h, y, w, "≖", "\\eqcirc", !0);
c(h, y, w, "≗", "\\circeq", !0);
c(h, y, w, "≜", "\\triangleq", !0);
c(h, y, w, "∼", "\\thicksim");
c(h, y, w, "≈", "\\thickapprox");
c(h, y, w, "⫆", "\\supseteqq", !0);
c(h, y, w, "⋑", "\\Supset", !0);
c(h, y, w, "⊐", "\\sqsupset", !0);
c(h, y, w, "≽", "\\succcurlyeq", !0);
c(h, y, w, "⋟", "\\curlyeqsucc", !0);
c(h, y, w, "≿", "\\succsim", !0);
c(h, y, w, "⪸", "\\succapprox", !0);
c(h, y, w, "⊳", "\\vartriangleright");
c(h, y, w, "⊵", "\\trianglerighteq");
c(h, y, w, "⊩", "\\Vdash", !0);
c(h, y, w, "∣", "\\shortmid");
c(h, y, w, "∥", "\\shortparallel");
c(h, y, w, "≬", "\\between", !0);
c(h, y, w, "⋔", "\\pitchfork", !0);
c(h, y, w, "∝", "\\varpropto");
c(h, y, w, "◀", "\\blacktriangleleft");
c(h, y, w, "∴", "\\therefore", !0);
c(h, y, w, "∍", "\\backepsilon");
c(h, y, w, "▶", "\\blacktriangleright");
c(h, y, w, "∵", "\\because", !0);
c(h, y, w, "⋘", "\\llless");
c(h, y, w, "⋙", "\\gggtr");
c(h, y, Y, "⊲", "\\lhd");
c(h, y, Y, "⊳", "\\rhd");
c(h, y, w, "≂", "\\eqsim", !0);
c(h, m, w, "⋈", "\\Join");
c(h, y, w, "≑", "\\Doteq", !0);
c(h, y, Y, "∔", "\\dotplus", !0);
c(h, y, Y, "∖", "\\smallsetminus");
c(h, y, Y, "⋒", "\\Cap", !0);
c(h, y, Y, "⋓", "\\Cup", !0);
c(h, y, Y, "⩞", "\\doublebarwedge", !0);
c(h, y, Y, "⊟", "\\boxminus", !0);
c(h, y, Y, "⊞", "\\boxplus", !0);
c(h, y, Y, "⋇", "\\divideontimes", !0);
c(h, y, Y, "⋉", "\\ltimes", !0);
c(h, y, Y, "⋊", "\\rtimes", !0);
c(h, y, Y, "⋋", "\\leftthreetimes", !0);
c(h, y, Y, "⋌", "\\rightthreetimes", !0);
c(h, y, Y, "⋏", "\\curlywedge", !0);
c(h, y, Y, "⋎", "\\curlyvee", !0);
c(h, y, Y, "⊝", "\\circleddash", !0);
c(h, y, Y, "⊛", "\\circledast", !0);
c(h, y, Y, "⋅", "\\centerdot");
c(h, y, Y, "⊺", "\\intercal", !0);
c(h, y, Y, "⋒", "\\doublecap");
c(h, y, Y, "⋓", "\\doublecup");
c(h, y, Y, "⊠", "\\boxtimes", !0);
c(h, y, w, "⇢", "\\dashrightarrow", !0);
c(h, y, w, "⇠", "\\dashleftarrow", !0);
c(h, y, w, "⇇", "\\leftleftarrows", !0);
c(h, y, w, "⇆", "\\leftrightarrows", !0);
c(h, y, w, "⇚", "\\Lleftarrow", !0);
c(h, y, w, "↞", "\\twoheadleftarrow", !0);
c(h, y, w, "↢", "\\leftarrowtail", !0);
c(h, y, w, "↫", "\\looparrowleft", !0);
c(h, y, w, "⇋", "\\leftrightharpoons", !0);
c(h, y, w, "↶", "\\curvearrowleft", !0);
c(h, y, w, "↺", "\\circlearrowleft", !0);
c(h, y, w, "↰", "\\Lsh", !0);
c(h, y, w, "⇈", "\\upuparrows", !0);
c(h, y, w, "↿", "\\upharpoonleft", !0);
c(h, y, w, "⇃", "\\downharpoonleft", !0);
c(h, m, w, "⊶", "\\origof", !0);
c(h, m, w, "⊷", "\\imageof", !0);
c(h, y, w, "⊸", "\\multimap", !0);
c(h, y, w, "↭", "\\leftrightsquigarrow", !0);
c(h, y, w, "⇉", "\\rightrightarrows", !0);
c(h, y, w, "⇄", "\\rightleftarrows", !0);
c(h, y, w, "↠", "\\twoheadrightarrow", !0);
c(h, y, w, "↣", "\\rightarrowtail", !0);
c(h, y, w, "↬", "\\looparrowright", !0);
c(h, y, w, "↷", "\\curvearrowright", !0);
c(h, y, w, "↻", "\\circlearrowright", !0);
c(h, y, w, "↱", "\\Rsh", !0);
c(h, y, w, "⇊", "\\downdownarrows", !0);
c(h, y, w, "↾", "\\upharpoonright", !0);
c(h, y, w, "⇂", "\\downharpoonright", !0);
c(h, y, w, "⇝", "\\rightsquigarrow", !0);
c(h, y, w, "⇝", "\\leadsto");
c(h, y, w, "⇛", "\\Rrightarrow", !0);
c(h, y, w, "↾", "\\restriction");
c(h, m, D, "‘", "`");
c(h, m, D, "$", "\\$");
c(I, m, D, "$", "\\$");
c(I, m, D, "$", "\\textdollar");
c(h, m, D, "%", "\\%");
c(I, m, D, "%", "\\%");
c(h, m, D, "_", "\\_");
c(I, m, D, "_", "\\_");
c(I, m, D, "_", "\\textunderscore");
c(h, m, D, "∠", "\\angle", !0);
c(h, m, D, "∞", "\\infty", !0);
c(h, m, D, "′", "\\prime");
c(h, m, D, "△", "\\triangle");
c(h, m, D, "Γ", "\\Gamma", !0);
c(h, m, D, "Δ", "\\Delta", !0);
c(h, m, D, "Θ", "\\Theta", !0);
c(h, m, D, "Λ", "\\Lambda", !0);
c(h, m, D, "Ξ", "\\Xi", !0);
c(h, m, D, "Π", "\\Pi", !0);
c(h, m, D, "Σ", "\\Sigma", !0);
c(h, m, D, "Υ", "\\Upsilon", !0);
c(h, m, D, "Φ", "\\Phi", !0);
c(h, m, D, "Ψ", "\\Psi", !0);
c(h, m, D, "Ω", "\\Omega", !0);
c(h, m, D, "A", "Α");
c(h, m, D, "B", "Β");
c(h, m, D, "E", "Ε");
c(h, m, D, "Z", "Ζ");
c(h, m, D, "H", "Η");
c(h, m, D, "I", "Ι");
c(h, m, D, "K", "Κ");
c(h, m, D, "M", "Μ");
c(h, m, D, "N", "Ν");
c(h, m, D, "O", "Ο");
c(h, m, D, "P", "Ρ");
c(h, m, D, "T", "Τ");
c(h, m, D, "X", "Χ");
c(h, m, D, "¬", "\\neg", !0);
c(h, m, D, "¬", "\\lnot");
c(h, m, D, "⊤", "\\top");
c(h, m, D, "⊥", "\\bot");
c(h, m, D, "∅", "\\emptyset");
c(h, y, D, "∅", "\\varnothing");
c(h, m, ee, "α", "\\alpha", !0);
c(h, m, ee, "β", "\\beta", !0);
c(h, m, ee, "γ", "\\gamma", !0);
c(h, m, ee, "δ", "\\delta", !0);
c(h, m, ee, "ϵ", "\\epsilon", !0);
c(h, m, ee, "ζ", "\\zeta", !0);
c(h, m, ee, "η", "\\eta", !0);
c(h, m, ee, "θ", "\\theta", !0);
c(h, m, ee, "ι", "\\iota", !0);
c(h, m, ee, "κ", "\\kappa", !0);
c(h, m, ee, "λ", "\\lambda", !0);
c(h, m, ee, "μ", "\\mu", !0);
c(h, m, ee, "ν", "\\nu", !0);
c(h, m, ee, "ξ", "\\xi", !0);
c(h, m, ee, "ο", "\\omicron", !0);
c(h, m, ee, "π", "\\pi", !0);
c(h, m, ee, "ρ", "\\rho", !0);
c(h, m, ee, "σ", "\\sigma", !0);
c(h, m, ee, "τ", "\\tau", !0);
c(h, m, ee, "υ", "\\upsilon", !0);
c(h, m, ee, "ϕ", "\\phi", !0);
c(h, m, ee, "χ", "\\chi", !0);
c(h, m, ee, "ψ", "\\psi", !0);
c(h, m, ee, "ω", "\\omega", !0);
c(h, m, ee, "ε", "\\varepsilon", !0);
c(h, m, ee, "ϑ", "\\vartheta", !0);
c(h, m, ee, "ϖ", "\\varpi", !0);
c(h, m, ee, "ϱ", "\\varrho", !0);
c(h, m, ee, "ς", "\\varsigma", !0);
c(h, m, ee, "φ", "\\varphi", !0);
c(h, m, Y, "∗", "*", !0);
c(h, m, Y, "+", "+");
c(h, m, Y, "−", "-", !0);
c(h, m, Y, "⋅", "\\cdot", !0);
c(h, m, Y, "∘", "\\circ", !0);
c(h, m, Y, "÷", "\\div", !0);
c(h, m, Y, "±", "\\pm", !0);
c(h, m, Y, "×", "\\times", !0);
c(h, m, Y, "∩", "\\cap", !0);
c(h, m, Y, "∪", "\\cup", !0);
c(h, m, Y, "∖", "\\setminus", !0);
c(h, m, Y, "∧", "\\land");
c(h, m, Y, "∨", "\\lor");
c(h, m, Y, "∧", "\\wedge", !0);
c(h, m, Y, "∨", "\\vee", !0);
c(h, m, D, "√", "\\surd");
c(h, m, C0, "⟨", "\\langle", !0);
c(h, m, C0, "∣", "\\lvert");
c(h, m, C0, "∥", "\\lVert");
c(h, m, p0, "?", "?");
c(h, m, p0, "!", "!");
c(h, m, p0, "⟩", "\\rangle", !0);
c(h, m, p0, "∣", "\\rvert");
c(h, m, p0, "∥", "\\rVert");
c(h, m, w, "=", "=");
c(h, m, w, ":", ":");
c(h, m, w, "≈", "\\approx", !0);
c(h, m, w, "≅", "\\cong", !0);
c(h, m, w, "≥", "\\ge");
c(h, m, w, "≥", "\\geq", !0);
c(h, m, w, "←", "\\gets");
c(h, m, w, ">", "\\gt", !0);
c(h, m, w, "∈", "\\in", !0);
c(h, m, w, "", "\\@not");
c(h, m, w, "⊂", "\\subset", !0);
c(h, m, w, "⊃", "\\supset", !0);
c(h, m, w, "⊆", "\\subseteq", !0);
c(h, m, w, "⊇", "\\supseteq", !0);
c(h, y, w, "⊈", "\\nsubseteq", !0);
c(h, y, w, "⊉", "\\nsupseteq", !0);
c(h, m, w, "⊨", "\\models");
c(h, m, w, "←", "\\leftarrow", !0);
c(h, m, w, "≤", "\\le");
c(h, m, w, "≤", "\\leq", !0);
c(h, m, w, "<", "\\lt", !0);
c(h, m, w, "→", "\\rightarrow", !0);
c(h, m, w, "→", "\\to");
c(h, y, w, "≱", "\\ngeq", !0);
c(h, y, w, "≰", "\\nleq", !0);
c(h, m, Rt, " ", "\\ ");
c(h, m, Rt, " ", "\\space");
c(h, m, Rt, " ", "\\nobreakspace");
c(I, m, Rt, " ", "\\ ");
c(I, m, Rt, " ", " ");
c(I, m, Rt, " ", "\\space");
c(I, m, Rt, " ", "\\nobreakspace");
c(h, m, Rt, null, "\\nobreak");
c(h, m, Rt, null, "\\allowbreak");
c(h, m, Hn, ",", ",");
c(h, m, Hn, ";", ";");
c(h, y, Y, "⊼", "\\barwedge", !0);
c(h, y, Y, "⊻", "\\veebar", !0);
c(h, m, Y, "⊙", "\\odot", !0);
c(h, m, Y, "⊕", "\\oplus", !0);
c(h, m, Y, "⊗", "\\otimes", !0);
c(h, m, D, "∂", "\\partial", !0);
c(h, m, Y, "⊘", "\\oslash", !0);
c(h, y, Y, "⊚", "\\circledcirc", !0);
c(h, y, Y, "⊡", "\\boxdot", !0);
c(h, m, Y, "△", "\\bigtriangleup");
c(h, m, Y, "▽", "\\bigtriangledown");
c(h, m, Y, "†", "\\dagger");
c(h, m, Y, "⋄", "\\diamond");
c(h, m, Y, "⋆", "\\star");
c(h, m, Y, "◃", "\\triangleleft");
c(h, m, Y, "▹", "\\triangleright");
c(h, m, C0, "{", "\\{");
c(I, m, D, "{", "\\{");
c(I, m, D, "{", "\\textbraceleft");
c(h, m, p0, "}", "\\}");
c(I, m, D, "}", "\\}");
c(I, m, D, "}", "\\textbraceright");
c(h, m, C0, "{", "\\lbrace");
c(h, m, p0, "}", "\\rbrace");
c(h, m, C0, "[", "\\lbrack", !0);
c(I, m, D, "[", "\\lbrack", !0);
c(h, m, p0, "]", "\\rbrack", !0);
c(I, m, D, "]", "\\rbrack", !0);
c(h, m, C0, "(", "\\lparen", !0);
c(h, m, p0, ")", "\\rparen", !0);
c(I, m, D, "<", "\\textless", !0);
c(I, m, D, ">", "\\textgreater", !0);
c(h, m, C0, "⌊", "\\lfloor", !0);
c(h, m, p0, "⌋", "\\rfloor", !0);
c(h, m, C0, "⌈", "\\lceil", !0);
c(h, m, p0, "⌉", "\\rceil", !0);
c(h, m, D, "\\", "\\backslash");
c(h, m, D, "∣", "|");
c(h, m, D, "∣", "\\vert");
c(I, m, D, "|", "\\textbar", !0);
c(h, m, D, "∥", "\\|");
c(h, m, D, "∥", "\\Vert");
c(I, m, D, "∥", "\\textbardbl");
c(I, m, D, "~", "\\textasciitilde");
c(I, m, D, "\\", "\\textbackslash");
c(I, m, D, "^", "\\textasciicircum");
c(h, m, w, "↑", "\\uparrow", !0);
c(h, m, w, "⇑", "\\Uparrow", !0);
c(h, m, w, "↓", "\\downarrow", !0);
c(h, m, w, "⇓", "\\Downarrow", !0);
c(h, m, w, "↕", "\\updownarrow", !0);
c(h, m, w, "⇕", "\\Updownarrow", !0);
c(h, m, Ye, "∐", "\\coprod");
c(h, m, Ye, "⋁", "\\bigvee");
c(h, m, Ye, "⋀", "\\bigwedge");
c(h, m, Ye, "⨄", "\\biguplus");
c(h, m, Ye, "⋂", "\\bigcap");
c(h, m, Ye, "⋃", "\\bigcup");
c(h, m, Ye, "∫", "\\int");
c(h, m, Ye, "∫", "\\intop");
c(h, m, Ye, "∬", "\\iint");
c(h, m, Ye, "∭", "\\iiint");
c(h, m, Ye, "∏", "\\prod");
c(h, m, Ye, "∑", "\\sum");
c(h, m, Ye, "⨂", "\\bigotimes");
c(h, m, Ye, "⨁", "\\bigoplus");
c(h, m, Ye, "⨀", "\\bigodot");
c(h, m, Ye, "∮", "\\oint");
c(h, m, Ye, "∯", "\\oiint");
c(h, m, Ye, "∰", "\\oiiint");
c(h, m, Ye, "⨆", "\\bigsqcup");
c(h, m, Ye, "∫", "\\smallint");
c(I, m, wr, "…", "\\textellipsis");
c(h, m, wr, "…", "\\mathellipsis");
c(I, m, wr, "…", "\\ldots", !0);
c(h, m, wr, "…", "\\ldots", !0);
c(h, m, wr, "⋯", "\\@cdots", !0);
c(h, m, wr, "⋱", "\\ddots", !0);
c(h, m, D, "⋮", "\\varvdots");
c(h, m, Te, "ˊ", "\\acute");
c(h, m, Te, "ˋ", "\\grave");
c(h, m, Te, "¨", "\\ddot");
c(h, m, Te, "~", "\\tilde");
c(h, m, Te, "ˉ", "\\bar");
c(h, m, Te, "˘", "\\breve");
c(h, m, Te, "ˇ", "\\check");
c(h, m, Te, "^", "\\hat");
c(h, m, Te, "⃗", "\\vec");
c(h, m, Te, "˙", "\\dot");
c(h, m, Te, "˚", "\\mathring");
c(h, m, ee, "", "\\@imath");
c(h, m, ee, "", "\\@jmath");
c(h, m, D, "ı", "ı");
c(h, m, D, "ȷ", "ȷ");
c(I, m, D, "ı", "\\i", !0);
c(I, m, D, "ȷ", "\\j", !0);
c(I, m, D, "ß", "\\ss", !0);
c(I, m, D, "æ", "\\ae", !0);
c(I, m, D, "œ", "\\oe", !0);
c(I, m, D, "ø", "\\o", !0);
c(I, m, D, "Æ", "\\AE", !0);
c(I, m, D, "Œ", "\\OE", !0);
c(I, m, D, "Ø", "\\O", !0);
c(I, m, Te, "ˊ", "\\'");
c(I, m, Te, "ˋ", "\\`");
c(I, m, Te, "ˆ", "\\^");
c(I, m, Te, "˜", "\\~");
c(I, m, Te, "ˉ", "\\=");
c(I, m, Te, "˘", "\\u");
c(I, m, Te, "˙", "\\.");
c(I, m, Te, "¸", "\\c");
c(I, m, Te, "˚", "\\r");
c(I, m, Te, "ˇ", "\\v");
c(I, m, Te, "¨", '\\"');
c(I, m, Te, "˝", "\\H");
c(I, m, Te, "◯", "\\textcircled");
var Ao = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(I, m, D, "–", "--", !0);
c(I, m, D, "–", "\\textendash");
c(I, m, D, "—", "---", !0);
c(I, m, D, "—", "\\textemdash");
c(I, m, D, "‘", "`", !0);
c(I, m, D, "‘", "\\textquoteleft");
c(I, m, D, "’", "'", !0);
c(I, m, D, "’", "\\textquoteright");
c(I, m, D, "“", "``", !0);
c(I, m, D, "“", "\\textquotedblleft");
c(I, m, D, "”", "''", !0);
c(I, m, D, "”", "\\textquotedblright");
c(h, m, D, "°", "\\degree", !0);
c(I, m, D, "°", "\\degree");
c(I, m, D, "°", "\\textdegree", !0);
c(h, m, D, "£", "\\pounds");
c(h, m, D, "£", "\\mathsterling", !0);
c(I, m, D, "£", "\\pounds");
c(I, m, D, "£", "\\textsterling", !0);
c(h, y, D, "✠", "\\maltese");
c(I, y, D, "✠", "\\maltese");
var Ni = '0123456789/@."';
for (var Zn = 0; Zn < Ni.length; Zn++) {
  var Ri = Ni.charAt(Zn);
  c(h, m, D, Ri, Ri);
}
var Li = '0123456789!@*()-=+";:?/.,';
for (var $n = 0; $n < Li.length; $n++) {
  var Ii = Li.charAt($n);
  c(I, m, D, Ii, Ii);
}
var Fn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Kn = 0; Kn < Fn.length; Kn++) {
  var tn = Fn.charAt(Kn);
  c(h, m, ee, tn, tn), c(I, m, D, tn, tn);
}
c(h, y, D, "C", "ℂ");
c(I, y, D, "C", "ℂ");
c(h, y, D, "H", "ℍ");
c(I, y, D, "H", "ℍ");
c(h, y, D, "N", "ℕ");
c(I, y, D, "N", "ℕ");
c(h, y, D, "P", "ℙ");
c(I, y, D, "P", "ℙ");
c(h, y, D, "Q", "ℚ");
c(I, y, D, "Q", "ℚ");
c(h, y, D, "R", "ℝ");
c(I, y, D, "R", "ℝ");
c(h, y, D, "Z", "ℤ");
c(I, y, D, "Z", "ℤ");
c(h, m, ee, "h", "ℎ");
c(I, m, ee, "h", "ℎ");
var ne = "";
for (var c0 = 0; c0 < Fn.length; c0++) {
  var Oe = Fn.charAt(c0);
  ne = String.fromCharCode(55349, 56320 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56372 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56424 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56580 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56684 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56736 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56788 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56840 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56944 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), c0 < 26 && (ne = String.fromCharCode(55349, 56632 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne), ne = String.fromCharCode(55349, 56476 + c0), c(h, m, ee, Oe, ne), c(I, m, D, Oe, ne));
}
ne = "𝕜";
c(h, m, ee, "k", ne);
c(I, m, D, "k", ne);
for (var Zt = 0; Zt < 10; Zt++) {
  var Ht = Zt.toString();
  ne = String.fromCharCode(55349, 57294 + Zt), c(h, m, ee, Ht, ne), c(I, m, D, Ht, ne), ne = String.fromCharCode(55349, 57314 + Zt), c(h, m, ee, Ht, ne), c(I, m, D, Ht, ne), ne = String.fromCharCode(55349, 57324 + Zt), c(h, m, ee, Ht, ne), c(I, m, D, Ht, ne), ne = String.fromCharCode(55349, 57334 + Zt), c(h, m, ee, Ht, ne), c(I, m, D, Ht, ne);
}
var Oi = "ÐÞþ";
for (var Qn = 0; Qn < Oi.length; Qn++) {
  var rn = Oi.charAt(Qn);
  c(h, m, ee, rn, rn), c(I, m, D, rn, rn);
}
var nn = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], qi = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], Zu = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [nn[o][2], nn[o][l]];
  } else if (120782 <= i && i <= 120831) {
    var s = Math.floor((i - 120782) / 10);
    return [qi[s][2], qi[s][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [nn[0][2], nn[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new Q("Unsupported character: " + e);
  }
}, Un = function(e, t, n) {
  return Pe[n][e] && Pe[n][e].replace && (e = Pe[n][e].replace), {
    value: e,
    metrics: qa(e, t, n)
  };
}, tt = function(e, t, n, a, i) {
  var l = Un(e, t, n), o = l.metrics;
  e = l.value;
  var s;
  if (o) {
    var u = o.italic;
    (n === "text" || a && a.font === "mathit") && (u = 0), s = new bt(e, o.height, o.depth, u, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), s = new bt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    s.maxFontSize = a.sizeMultiplier, a.style.isTight() && s.classes.push("mtight");
    var f = a.getColor();
    f && (s.style.color = f);
  }
  return s;
}, $u = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Un(e, "Main-Bold", t).metrics ? tt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || Pe[t][e].font === "main" ? tt(e, "Main-Regular", t, n, a) : tt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, Ku = function(e, t, n, a, i) {
  return i !== "textord" && Un(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Qu = function(e, t, n) {
  var a = e.mode, i = e.text, l = ["mord"], o = a === "math" || a === "text" && t.font, s = o ? t.font : t.fontFamily, u = "", f = "";
  if (i.charCodeAt(0) === 55349 && ([u, f] = Zu(i, a)), u.length > 0)
    return tt(i, u, a, t, l.concat(f));
  if (s) {
    var d, g;
    if (s === "boldsymbol") {
      var v = Ku(i, a, t, l, n);
      d = v.fontName, g = [v.fontClass];
    } else o ? (d = Fo[s].fontName, g = [s]) : (d = an(s, t.fontWeight, t.fontShape), g = [s, t.fontWeight, t.fontShape]);
    if (Un(i, d, a).metrics)
      return tt(i, d, a, t, l.concat(g));
    if (Ao.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var E = [], F = 0; F < i.length; F++)
        E.push(tt(i[F], d, a, t, l.concat(g)));
      return So(E);
    }
  }
  if (n === "mathord")
    return tt(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (n === "textord") {
    var z = Pe[a][i] && Pe[a][i].font;
    if (z === "ams") {
      var T = an("amsrm", t.fontWeight, t.fontShape);
      return tt(i, T, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (z === "main" || !z) {
      var _ = an("textrm", t.fontWeight, t.fontShape);
      return tt(i, _, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var b = an(z, t.fontWeight, t.fontShape);
      return tt(i, b, a, t, l.concat(b, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Ju = (r, e) => {
  if (Gt(r.classes) !== Gt(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n in r.style)
    if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  return !0;
}, e4 = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof bt && n instanceof bt && Ju(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Pa = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > n && (n = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, w0 = function(e, t, n, a) {
  var i = new Pn(e, t, n, a);
  return Pa(i), i;
}, xo = (r, e, t, n) => new Pn(r, e, t, n), t4 = function(e, t, n) {
  var a = w0([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = U(a.height), a.maxFontSize = 1, a;
}, r4 = function(e, t, n, a) {
  var i = new Do(e, t, n, a);
  return Pa(i), i;
}, So = function(e) {
  var t = new Xr(e);
  return Pa(t), t;
}, n4 = function(e, t) {
  return e instanceof Xr ? w0([], [e], t) : e;
}, a4 = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, l = 1; l < t.length; l++) {
      var o = -t[l].shift - i - t[l].elem.depth, s = o - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + o, n.push({
        type: "kern",
        size: s
      }), n.push(t[l]);
    }
    return {
      children: n,
      depth: a
    };
  }
  var u;
  if (e.positionType === "top") {
    for (var f = e.positionData, d = 0; d < e.children.length; d++) {
      var g = e.children[d];
      f -= g.type === "kern" ? g.size : g.elem.height + g.elem.depth;
    }
    u = f;
  } else if (e.positionType === "bottom")
    u = -e.positionData;
  else {
    var v = e.children[0];
    if (v.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      u = -v.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      u = -v.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: u
  };
}, i4 = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = a4(e), i = 0, l = 0; l < n.length; l++) {
    var o = n[l];
    if (o.type === "elem") {
      var s = o.elem;
      i = Math.max(i, s.maxFontSize, s.height);
    }
  }
  i += 2;
  var u = w0(["pstrut"], []);
  u.style.height = U(i);
  for (var f = [], d = a, g = a, v = a, E = 0; E < n.length; E++) {
    var F = n[E];
    if (F.type === "kern")
      v += F.size;
    else {
      var z = F.elem, T = F.wrapperClasses || [], _ = F.wrapperStyle || {}, b = w0(T, [u, z], void 0, _);
      b.style.top = U(-i - v - z.depth), F.marginLeft && (b.style.marginLeft = F.marginLeft), F.marginRight && (b.style.marginRight = F.marginRight), f.push(b), v += z.height + z.depth;
    }
    d = Math.min(d, v), g = Math.max(g, v);
  }
  var x = w0(["vlist"], f);
  x.style.height = U(g);
  var k;
  if (d < 0) {
    var S = w0([], []), C = w0(["vlist"], [S]);
    C.style.height = U(-d);
    var R = w0(["vlist-s"], [new bt("​")]);
    k = [w0(["vlist-r"], [x, R]), w0(["vlist-r"], [C])];
  } else
    k = [w0(["vlist-r"], [x])];
  var N = w0(["vlist-t"], k);
  return k.length === 2 && N.classes.push("vlist-t2"), N.height = g, N.depth = -d, N;
}, l4 = (r, e) => {
  var t = w0(["mspace"], [], e), n = Be(r, e);
  return t.style.marginRight = U(n), t;
}, an = function(e, t, n) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && n === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, Fo = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Eo = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, s4 = function(e, t) {
  var [n, a, i] = Eo[e], l = new nr(n), o = new Wt([l], {
    width: U(a),
    height: U(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + U(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), s = xo(["overlay"], [o], t);
  return s.height = i, s.style.height = U(i), s.style.width = U(a), s;
}, M = {
  fontMap: Fo,
  makeSymbol: tt,
  mathsym: $u,
  makeSpan: w0,
  makeSvgSpan: xo,
  makeLineSpan: t4,
  makeAnchor: r4,
  makeFragment: So,
  wrapFragment: n4,
  makeVList: i4,
  makeOrd: Qu,
  makeGlue: l4,
  staticSvg: s4,
  svgData: Eo,
  tryCombineChars: e4
}, Me = {
  number: 3,
  unit: "mu"
}, $t = {
  number: 4,
  unit: "mu"
}, Ft = {
  number: 5,
  unit: "mu"
}, o4 = {
  mord: {
    mop: Me,
    mbin: $t,
    mrel: Ft,
    minner: Me
  },
  mop: {
    mord: Me,
    mop: Me,
    mrel: Ft,
    minner: Me
  },
  mbin: {
    mord: $t,
    mop: $t,
    mopen: $t,
    minner: $t
  },
  mrel: {
    mord: Ft,
    mop: Ft,
    mopen: Ft,
    minner: Ft
  },
  mopen: {},
  mclose: {
    mop: Me,
    mbin: $t,
    mrel: Ft,
    minner: Me
  },
  mpunct: {
    mord: Me,
    mop: Me,
    mrel: Ft,
    mopen: Me,
    mclose: Me,
    mpunct: Me,
    minner: Me
  },
  minner: {
    mord: Me,
    mop: Me,
    mbin: $t,
    mrel: Ft,
    mopen: Me,
    mpunct: Me,
    minner: Me
  }
}, u4 = {
  mord: {
    mop: Me
  },
  mop: {
    mord: Me,
    mop: Me
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Me
  },
  mpunct: {},
  minner: {
    mop: Me
  }
}, Co = {}, En = {}, Cn = {};
function W(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, o = {
    type: e,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: a
  }, s = 0; s < t.length; ++s)
    Co[t[s]] = o;
  e && (i && (En[e] = i), l && (Cn[e] = l));
}
function lr(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  W({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: n
  });
}
var Tn = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, qe = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, yr = M.makeSpan, c4 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], f4 = ["rightmost", "mrel", "mclose", "mpunct"], h4 = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
}, m4 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, r0 = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var o = pe(e[l], t);
    if (o instanceof Xr) {
      var s = o.children;
      i.push(...s);
    } else
      i.push(o);
  }
  if (M.tryCombineChars(i), !n)
    return i;
  var u = t;
  if (e.length === 1) {
    var f = e[0];
    f.type === "sizing" ? u = t.havingSize(f.size) : f.type === "styling" && (u = t.havingStyle(h4[f.style]));
  }
  var d = yr([a[0] || "leftmost"], [], t), g = yr([a[1] || "rightmost"], [], t), v = n === "root";
  return Pi(i, (E, F) => {
    var z = F.classes[0], T = E.classes[0];
    z === "mbin" && te.contains(f4, T) ? F.classes[0] = "mord" : T === "mbin" && te.contains(c4, z) && (E.classes[0] = "mord");
  }, {
    node: d
  }, g, v), Pi(i, (E, F) => {
    var z = wa(F), T = wa(E), _ = z && T ? E.hasClass("mtight") ? u4[z][T] : o4[z][T] : null;
    if (_)
      return M.makeGlue(_, u);
  }, {
    node: d
  }, g, v), i;
}, Pi = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var o = e[l], s = To(o);
    if (s) {
      r(s.children, t, n, null, i);
      continue;
    }
    var u = !o.hasClass("mspace");
    if (u) {
      var f = t(o, n.node);
      f && (n.insertAfter ? n.insertAfter(f) : (e.unshift(f), l++));
    }
    u ? n.node = o : i && o.hasClass("newline") && (n.node = yr(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((d) => (g) => {
      e.splice(d + 1, 0, g), l++;
    })(l);
  }
  a && e.pop();
}, To = function(e) {
  return e instanceof Xr || e instanceof Do || e instanceof Pn && e.hasClass("enclosing") ? e : null;
}, d4 = function r(e, t) {
  var n = To(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return r(a[a.length - 1], "right");
      if (t === "left")
        return r(a[0], "left");
    }
  }
  return e;
}, wa = function(e, t) {
  return e ? (t && (e = d4(e, t)), m4[e.classes[0]] || null) : null;
}, Wr = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return yr(t.concat(n));
}, pe = function(e, t, n) {
  if (!e)
    return yr();
  if (En[e.type]) {
    var a = En[e.type](e, t);
    if (n && t.size !== n.size) {
      a = yr(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new Q("Got group of unknown type: '" + e.type + "'");
};
function Mo(r) {
  return new Xr(r);
}
class nt {
  constructor(e, t, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Gt(this.classes));
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += te.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + te.escape(Gt(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ir {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return te.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class p4 {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", U(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + U(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var O = {
  MathNode: nt,
  TextNode: Ir,
  SpaceNode: p4,
  newDocumentFragment: Mo
}, P0 = function(e, t, n) {
  return Pe[t][e] && Pe[t][e].replace && e.charCodeAt(0) !== 55349 && !(Ao.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = Pe[t][e].replace), new O.TextNode(e);
}, Ha = function(e) {
  return e.length === 1 ? e[0] : new O.MathNode("mrow", e);
}, Ua = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var n = t.font;
  if (!n || n === "mathnormal")
    return null;
  var a = e.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var i = e.text;
  if (te.contains(["\\imath", "\\jmath"], i))
    return null;
  Pe[a][i] && Pe[a][i].replace && (i = Pe[a][i].replace);
  var l = M.fontMap[n].fontName;
  return qa(i, l, a) ? M.fontMap[n].variant : null;
}, T0 = function(e, t, n) {
  if (e.length === 1) {
    var a = ke(e[0], t);
    return n && a instanceof nt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, o = 0; o < e.length; o++) {
    var s = ke(e[o], t);
    if (s instanceof nt && l instanceof nt) {
      if (s.type === "mtext" && l.type === "mtext" && s.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && l.type === "mn") {
        l.children.push(...s.children);
        continue;
      } else if (s.type === "mi" && s.children.length === 1 && l.type === "mn") {
        var u = s.children[0];
        if (u instanceof Ir && u.text === ".") {
          l.children.push(...s.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var f = l.children[0];
        if (f instanceof Ir && f.text === "̸" && (s.type === "mo" || s.type === "mi" || s.type === "mn")) {
          var d = s.children[0];
          d instanceof Ir && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(s), l = s;
  }
  return i;
}, Yt = function(e, t, n) {
  return Ha(T0(e, t, n));
}, ke = function(e, t) {
  if (!e)
    return new O.MathNode("mrow");
  if (Cn[e.type]) {
    var n = Cn[e.type](e, t);
    return n;
  } else
    throw new Q("Got group of unknown type: '" + e.type + "'");
}, g4 = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, v4 = function(e) {
  var t = new O.MathNode("mo", [new O.TextNode(g4[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, b4 = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, y4 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, w4 = function(e, t) {
  function n() {
    var o = 4e5, s = e.label.slice(1);
    if (te.contains(["widehat", "widecheck", "widetilde", "utilde"], s)) {
      var u = e, f = y4(u.base), d, g, v;
      if (f > 5)
        s === "widehat" || s === "widecheck" ? (d = 420, o = 2364, v = 0.42, g = s + "4") : (d = 312, o = 2340, v = 0.34, g = "tilde4");
      else {
        var E = [1, 1, 2, 2, 3, 3][f];
        s === "widehat" || s === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][E], d = [0, 239, 300, 360, 420][E], v = [0, 0.24, 0.3, 0.3, 0.36, 0.42][E], g = s + E) : (o = [0, 600, 1033, 2339, 2340][E], d = [0, 260, 286, 306, 312][E], v = [0, 0.26, 0.286, 0.3, 0.306, 0.34][E], g = "tilde" + E);
      }
      var F = new nr(g), z = new Wt([F], {
        width: "100%",
        height: U(v),
        viewBox: "0 0 " + o + " " + d,
        preserveAspectRatio: "none"
      });
      return {
        span: M.makeSvgSpan([], [z], t),
        minWidth: 0,
        height: v
      };
    } else {
      var T = [], _ = b4[s], [b, x, k] = _, S = k / 1e3, C = b.length, R, N;
      if (C === 1) {
        var L = _[3];
        R = ["hide-tail"], N = [L];
      } else if (C === 2)
        R = ["halfarrow-left", "halfarrow-right"], N = ["xMinYMin", "xMaxYMin"];
      else if (C === 3)
        R = ["brace-left", "brace-center", "brace-right"], N = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + C + " children.");
      for (var H = 0; H < C; H++) {
        var G = new nr(b[H]), ie = new Wt([G], {
          width: "400em",
          height: U(S),
          viewBox: "0 0 " + o + " " + k,
          preserveAspectRatio: N[H] + " slice"
        }), $ = M.makeSvgSpan([R[H]], [ie], t);
        if (C === 1)
          return {
            span: $,
            minWidth: x,
            height: S
          };
        $.style.height = U(S), T.push($);
      }
      return {
        span: M.makeSpan(["stretchy"], T, t),
        minWidth: x,
        height: S
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = n();
  return a.height = l, a.style.height = U(l), i > 0 && (a.style.minWidth = U(i)), a;
}, _4 = function(e, t, n, a, i) {
  var l, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = M.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var s = i.color && i.getColor();
      s && (l.style.borderColor = s);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new zi({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new zi({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var f = new Wt(u, {
      width: "100%",
      height: U(o)
    });
    l = M.makeSvgSpan([], [f], i);
  }
  return l.height = o, l.style.height = U(o), l;
}, Nt = {
  encloseSpan: _4,
  mathMLnode: v4,
  svgSpan: w4
};
function ce(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Va(r) {
  var e = Vn(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Vn(r) {
  return r && (r.type === "atom" || Xu.hasOwnProperty(r.type)) ? r : null;
}
var Ga = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = ce(r.base, "accent"), t = n.base, r.base = t, a = ju(pe(r, e)), r.base = n) : (n = ce(r, "accent"), t = n.base);
  var i = pe(t, e.havingCrampedStyle()), l = n.isShifty && te.isCharacterBox(t), o = 0;
  if (l) {
    var s = te.getBaseElem(t), u = pe(s, e.havingCrampedStyle());
    o = Bi(u).skew;
  }
  var f = n.label === "\\c", d = f ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), g;
  if (n.isStretchy)
    g = Nt.svgSpan(n, e), g = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: g,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + U(2 * o) + ")",
          marginLeft: U(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var v, E;
    n.label === "\\vec" ? (v = M.staticSvg("vec", e), E = M.svgData.vec[1]) : (v = M.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), v = Bi(v), v.italic = 0, E = v.width, f && (d += v.depth)), g = M.makeSpan(["accent-body"], [v]);
    var F = n.label === "\\textcircled";
    F && (g.classes.push("accent-full"), d = i.height);
    var z = o;
    F || (z -= E / 2), g.style.left = U(z), n.label === "\\textcircled" && (g.style.top = ".2em"), g = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -d
      }, {
        type: "elem",
        elem: g
      }]
    }, e);
  }
  var T = M.makeSpan(["mord", "accent"], [g], e);
  return a ? (a.children[0] = T, a.height = Math.max(T.height, a.height), a.classes[0] = "mord", a) : T;
}, zo = (r, e) => {
  var t = r.isStretchy ? Nt.mathMLnode(r.label) : new O.MathNode("mo", [P0(r.label, r.mode)]), n = new O.MathNode("mover", [ke(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, k4 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
W({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = Tn(e[0]), n = !k4.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Ga,
  mathmlBuilder: zo
});
W({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], n = r.parser.mode;
    return n === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Ga,
  mathmlBuilder: zo
});
W({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = pe(r.base, e), n = Nt.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Nt.mathMLnode(r.label), n = new O.MathNode("munder", [ke(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var ln = (r) => {
  var e = new O.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
W({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), a = M.wrapFragment(pe(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    r.below && (n = e.havingStyle(t.sub()), l = M.wrapFragment(pe(r.below, n, e), e), l.classes.push(i + "-arrow-pad"));
    var o = Nt.svgSpan(r, e), s = -e.fontMetrics().axisHeight + 0.5 * o.height, u = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
    var f;
    if (l) {
      var d = -e.fontMetrics().axisHeight + l.height + 0.5 * o.height + 0.111;
      f = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: o,
          shift: s
        }, {
          type: "elem",
          elem: l,
          shift: d
        }]
      }, e);
    } else
      f = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, e);
    return f.children[0].children[0].children[1].classes.push("svg-align"), M.makeSpan(["mrel", "x-arrow"], [f], e);
  },
  mathmlBuilder(r, e) {
    var t = Nt.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = ln(ke(r.body, e));
      if (r.below) {
        var i = ln(ke(r.below, e));
        n = new O.MathNode("munderover", [t, i, a]);
      } else
        n = new O.MathNode("mover", [t, a]);
    } else if (r.below) {
      var l = ln(ke(r.below, e));
      n = new O.MathNode("munder", [t, l]);
    } else
      n = ln(), n = new O.MathNode("mover", [t, n]);
    return n;
  }
});
var D4 = M.makeSpan;
function Bo(r, e) {
  var t = r0(r.body, e, !0);
  return D4([r.mclass], t, e);
}
function No(r, e) {
  var t, n = T0(r.body, e);
  return r.mclass === "minner" ? t = new O.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new O.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new O.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
W({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: qe(a),
      isCharacterBox: te.isCharacterBox(a)
    };
  },
  htmlBuilder: Bo,
  mathmlBuilder: No
});
var Gn = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
W({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Gn(e[0]),
      body: qe(e[1]),
      isCharacterBox: te.isCharacterBox(e[1])
    };
  }
});
W({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[1], i = e[0], l;
    n !== "\\stackrel" ? l = Gn(a) : l = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: qe(a)
    }, s = {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: n === "\\underset" ? null : i,
      sub: n === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [s],
      isCharacterBox: te.isCharacterBox(s)
    };
  },
  htmlBuilder: Bo,
  mathmlBuilder: No
});
W({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Gn(e[0]),
      body: qe(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = r0(r.body, e, !0), n = M.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = T0(r.body, e), n = new O.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var A4 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Hi = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ui = (r) => r.type === "textord" && r.text === "@", x4 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function S4(r, e, t) {
  var n = A4[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), o = t.callFunction("\\\\cdright", [e[1]], []), s = {
        type: "ordgroup",
        mode: "math",
        body: [a, l, o]
      };
      return t.callFunction("\\\\cdparent", [s], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var u = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [u], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function F4(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new Q("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var l = e[i], o = Hi(), s = 0; s < l.length; s++)
      if (!Ui(l[s]))
        o.body.push(l[s]);
      else {
        n.push(o), s += 1;
        var u = Va(l[s]).text, f = new Array(2);
        if (f[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, f[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var d = 0; d < 2; d++) {
            for (var g = !0, v = s + 1; v < l.length; v++) {
              if (x4(l[v], u)) {
                g = !1, s = v;
                break;
              }
              if (Ui(l[v]))
                throw new Q("Missing a " + u + " character to complete a CD arrow.", l[v]);
              f[d].body.push(l[v]);
            }
            if (g)
              throw new Q("Missing a " + u + " character to complete a CD arrow.", l[s]);
          }
        else
          throw new Q('Expected one of "<>AV=|." after @', l[s]);
        var E = S4(u, f, r), F = {
          type: "styling",
          body: [E],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(F), o = Hi();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var z = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: z,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
W({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), n = M.wrapFragment(pe(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = U(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mrow", [ke(r.label, e)]);
    return t = new O.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new O.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
W({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = M.wrapFragment(pe(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mrow", [ke(r.fragment, e)]);
  }
});
W({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = ce(e[0], "ordgroup"), a = n.body, i = "", l = 0; l < a.length; l++) {
      var o = ce(a[l], "textord");
      i += o.text;
    }
    var s = parseInt(i), u;
    if (isNaN(s))
      throw new Q("\\@char has non-numeric argument " + i);
    if (s < 0 || s >= 1114111)
      throw new Q("\\@char with invalid code point " + i);
    return s <= 65535 ? u = String.fromCharCode(s) : (s -= 65536, u = String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var Ro = (r, e) => {
  var t = r0(r.body, e.withColor(r.color), !1);
  return M.makeFragment(t);
}, Lo = (r, e) => {
  var t = T0(r.body, e.withColor(r.color)), n = new O.MathNode("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
W({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = ce(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: qe(a)
    };
  },
  htmlBuilder: Ro,
  mathmlBuilder: Lo
});
W({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, a = ce(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Ro,
  mathmlBuilder: Lo
});
W({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && ce(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = M.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = U(Be(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", U(Be(r.size, e)))), t;
  }
});
var _a = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Io = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new Q("Expected a control sequence", r);
  return e;
}, E4 = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Oo = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
W({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if (_a[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = _a[n.text]), ce(e.parseFunction(), "internal");
    throw new Q("Invalid token after macro prefix", n);
  }
});
W({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new Q("Expected a control sequence", n);
    for (var i = 0, l, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new Q('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new Q('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new Q("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: s
    } = e.gullet.consumeArg();
    return l && s.unshift(l), (t === "\\edef" || t === "\\xdef") && (s = e.gullet.expandTokens(s), s.reverse()), e.gullet.macros.set(a, {
      tokens: s,
      numArgs: i,
      delimiters: o
    }, t === _a[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
W({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Io(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = E4(e);
    return Oo(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
W({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Io(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Oo(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Nr = function(e, t, n) {
  var a = Pe.math[e] && Pe.math[e].replace, i = qa(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Wa = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), l = M.makeSpan(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return l.height *= o, l.depth *= o, l.maxFontSize = i.sizeMultiplier, l;
}, qo = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = U(i), e.height -= i, e.depth += i;
}, C4 = function(e, t, n, a, i, l) {
  var o = M.makeSymbol(e, "Main-Regular", i, a), s = Wa(o, t, a, l);
  return n && qo(s, a, t), s;
}, T4 = function(e, t, n, a) {
  return M.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, Po = function(e, t, n, a, i, l) {
  var o = T4(e, t, i, a), s = Wa(M.makeSpan(["delimsizing", "size" + t], [o], a), re.TEXT, a, l);
  return n && qo(s, a, re.TEXT), s;
}, Jn = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = M.makeSpan(["delimsizinginner", a], [M.makeSpan([], [M.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, ea = function(e, t, n) {
  var a = Tt["Size4-Regular"][e.charCodeAt(0)] ? Tt["Size4-Regular"][e.charCodeAt(0)][4] : Tt["Size1-Regular"][e.charCodeAt(0)][4], i = new nr("inner", Hu(e, Math.round(1e3 * t))), l = new Wt([i], {
    width: U(a),
    height: U(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + U(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = M.makeSvgSpan([], [l], n);
  return o.height = t, o.style.height = U(t), o.style.width = U(a), {
    type: "elem",
    elem: o
  };
}, ka = 8e-3, sn = {
  type: "kern",
  size: -1 * ka
}, M4 = ["|", "\\lvert", "\\rvert", "\\vert"], z4 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ho = function(e, t, n, a, i, l) {
  var o, s, u, f, d = "", g = 0;
  o = u = f = e, s = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? u = f = "⏐" : e === "\\Uparrow" ? u = f = "‖" : e === "\\downarrow" ? o = u = "⏐" : e === "\\Downarrow" ? o = u = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", u = "⏐", f = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", u = "‖", f = "\\Downarrow") : te.contains(M4, e) ? (u = "∣", d = "vert", g = 333) : te.contains(z4, e) ? (u = "∥", d = "doublevert", g = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", u = "⎢", f = "⎣", v = "Size4-Regular", d = "lbrack", g = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", u = "⎥", f = "⎦", v = "Size4-Regular", d = "rbrack", g = 667) : e === "\\lfloor" || e === "⌊" ? (u = o = "⎢", f = "⎣", v = "Size4-Regular", d = "lfloor", g = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", u = f = "⎢", v = "Size4-Regular", d = "lceil", g = 667) : e === "\\rfloor" || e === "⌋" ? (u = o = "⎥", f = "⎦", v = "Size4-Regular", d = "rfloor", g = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", u = f = "⎥", v = "Size4-Regular", d = "rceil", g = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", u = "⎜", f = "⎝", v = "Size4-Regular", d = "lparen", g = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", u = "⎟", f = "⎠", v = "Size4-Regular", d = "rparen", g = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", s = "⎨", f = "⎩", u = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", s = "⎬", f = "⎭", u = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", f = "⎩", u = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", f = "⎭", u = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", f = "⎭", u = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", f = "⎩", u = "⎪", v = "Size4-Regular");
  var E = Nr(o, v, i), F = E.height + E.depth, z = Nr(u, v, i), T = z.height + z.depth, _ = Nr(f, v, i), b = _.height + _.depth, x = 0, k = 1;
  if (s !== null) {
    var S = Nr(s, v, i);
    x = S.height + S.depth, k = 2;
  }
  var C = F + b + x, R = Math.max(0, Math.ceil((t - C) / (k * T))), N = C + R * k * T, L = a.fontMetrics().axisHeight;
  n && (L *= a.sizeMultiplier);
  var H = N / 2 - L, G = [];
  if (d.length > 0) {
    var ie = N - F - b, $ = Math.round(N * 1e3), V = Uu(d, Math.round(ie * 1e3)), Z = new nr(d, V), me = (g / 1e3).toFixed(3) + "em", be = ($ / 1e3).toFixed(3) + "em", Le = new Wt([Z], {
      width: me,
      height: be,
      viewBox: "0 0 " + g + " " + $
    }), Fe = M.makeSvgSpan([], [Le], a);
    Fe.height = $ / 1e3, Fe.style.width = me, Fe.style.height = be, G.push({
      type: "elem",
      elem: Fe
    });
  } else {
    if (G.push(Jn(f, v, i)), G.push(sn), s === null) {
      var fe = N - F - b + 2 * ka;
      G.push(ea(u, fe, a));
    } else {
      var ve = (N - F - b - x) / 2 + 2 * ka;
      G.push(ea(u, ve, a)), G.push(sn), G.push(Jn(s, v, i)), G.push(sn), G.push(ea(u, ve, a));
    }
    G.push(sn), G.push(Jn(o, v, i));
  }
  var ye = a.havingBaseStyle(re.TEXT), je = M.makeVList({
    positionType: "bottom",
    positionData: H,
    children: G
  }, ye);
  return Wa(M.makeSpan(["delimsizing", "mult"], [je], ye), re.TEXT, a, l);
}, ta = 80, ra = 0.08, na = function(e, t, n, a, i) {
  var l = Pu(e, a, n), o = new nr(e, l), s = new Wt([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: U(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return M.makeSvgSpan(["hide-tail"], [s], i);
}, B4 = function(e, t) {
  var n = t.havingBaseSizing(), a = Wo("\\surd", e * n.sizeMultiplier, Go, n), i = n.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, s = 0, u = 0, f = 0, d;
  return a.type === "small" ? (f = 1e3 + 1e3 * l + ta, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), s = (1 + l + ra) / i, u = (1 + l) / i, o = na("sqrtMain", s, f, l, t), o.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (f = (1e3 + ta) * Or[a.size], u = (Or[a.size] + l) / i, s = (Or[a.size] + l + ra) / i, o = na("sqrtSize" + a.size, s, f, l, t), o.style.minWidth = "1.02em", d = 1 / i) : (s = e + l + ra, u = e + l, f = Math.floor(1e3 * e + l) + ta, o = na("sqrtTall", s, f, l, t), o.style.minWidth = "0.742em", d = 1.056), o.height = u, o.style.height = U(s), {
    span: o,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Uo = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], N4 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Vo = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Or = [0, 1.2, 1.8, 2.4, 3], R4 = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), te.contains(Uo, e) || te.contains(Vo, e))
    return Po(e, t, !1, n, a, i);
  if (te.contains(N4, e))
    return Ho(e, Or[t], !1, n, a, i);
  throw new Q("Illegal delimiter: '" + e + "'");
}, L4 = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], I4 = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "stack"
}], Go = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], O4 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Wo = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < n.length && n[l].type !== "stack"; l++) {
    var o = Nr(e, O4(n[l]), "math"), s = o.height + o.depth;
    if (n[l].type === "small") {
      var u = a.havingBaseStyle(n[l].style);
      s *= u.sizeMultiplier;
    }
    if (s > t)
      return n[l];
  }
  return n[n.length - 1];
}, Yo = function(e, t, n, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  te.contains(Vo, e) ? o = L4 : te.contains(Uo, e) ? o = Go : o = I4;
  var s = Wo(e, t, o, a);
  return s.type === "small" ? C4(e, s.style, n, a, i, l) : s.type === "large" ? Po(e, s.size, n, a, i, l) : Ho(e, t, n, a, i, l);
}, q4 = function(e, t, n, a, i, l) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, s = 901, u = 5 / a.fontMetrics().ptPerEm, f = Math.max(t - o, n + o), d = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    f / 500 * s,
    2 * f - u
  );
  return Yo(e, d, !0, a, i, l);
}, Bt = {
  sqrtImage: B4,
  sizedDelim: R4,
  sizeToMaxHeight: Or,
  customSizedDelim: Yo,
  leftRightDelim: q4
}, Vi = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, P4 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Wn(r, e) {
  var t = Vn(r);
  if (t && te.contains(P4, t.text))
    return t;
  throw t ? new Q("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new Q("Invalid delimiter type '" + r.type + "'", r);
}
W({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Wn(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Vi[r.funcName].size,
      mclass: Vi[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? M.makeSpan([r.mclass]) : Bt.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(P0(r.delim, r.mode));
    var t = new O.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = U(Bt.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Gi(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
W({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new Q("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Wn(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
W({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Wn(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = ce(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    Gi(r);
    for (var t = r0(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (n = Math.max(t[l].height, n), a = Math.max(t[l].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var o;
    if (r.left === "." ? o = Wr(e, ["mopen"]) : o = Bt.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(o), i)
      for (var s = 1; s < t.length; s++) {
        var u = t[s], f = u.isMiddle;
        f && (t[s] = Bt.leftRightDelim(f.delim, n, a, f.options, r.mode, []));
      }
    var d;
    if (r.right === ".")
      d = Wr(e, ["mclose"]);
    else {
      var g = r.rightColor ? e.withColor(r.rightColor) : e;
      d = Bt.leftRightDelim(r.right, n, a, g, r.mode, ["mclose"]);
    }
    return t.push(d), M.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Gi(r);
    var t = T0(r.body, e);
    if (r.left !== ".") {
      var n = new O.MathNode("mo", [P0(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new O.MathNode("mo", [P0(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Ha(t);
  }
});
W({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Wn(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new Q("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = Wr(e, []);
    else {
      t = Bt.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? P0("|", "text") : P0(r.delim, r.mode), n = new O.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Ya = (r, e) => {
  var t = M.wrapFragment(pe(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, l = 0, o = te.isCharacterBox(r.body);
  if (n === "sout")
    i = M.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var s = Be({
      number: 0.6,
      unit: "pt"
    }, e), u = Be({
      number: 0.35,
      unit: "ex"
    }, e), f = e.havingBaseSizing();
    a = a / f.sizeMultiplier;
    var d = t.height + t.depth + s + u;
    t.style.paddingLeft = U(d / 2 + s);
    var g = Math.floor(1e3 * d * a), v = Ou(g), E = new Wt([new nr("phase", v)], {
      width: "400em",
      height: U(g / 1e3),
      viewBox: "0 0 400000 " + g,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = M.makeSvgSpan(["hide-tail"], [E], e), i.style.height = U(d), l = t.depth + s + u;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var F = 0, z = 0, T = 0;
    /box/.test(n) ? (T = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), F = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : T), z = F) : n === "angl" ? (T = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), F = 4 * T, z = Math.max(0, 0.25 - t.depth)) : (F = o ? 0.2 : 0, z = F), i = Nt.encloseSpan(t, n, F, z, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = U(T)) : n === "angl" && T !== 0.049 && (i.style.borderTopWidth = U(T), i.style.borderRightWidth = U(T)), l = t.depth + z, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var _;
  if (r.backgroundColor)
    _ = M.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var b = /cancel|phase/.test(n) ? ["svg-align"] : [];
    _ = M.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: b
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (_.height = t.height, _.depth = t.depth), /cancel/.test(n) && !o ? M.makeSpan(["mord", "cancel-lap"], [_], e) : M.makeSpan(["mord"], [_], e);
}, ja = (r, e) => {
  var t = 0, n = new O.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ke(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * t + "pt"), n.setAttribute("height", "+" + 2 * t + "pt"), n.setAttribute("lspace", t + "pt"), n.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + a + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
W({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = ce(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ya,
  mathmlBuilder: ja
});
W({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = ce(e[0], "color-token").color, l = ce(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: Ya,
  mathmlBuilder: ja
});
W({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
W({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  },
  htmlBuilder: Ya,
  mathmlBuilder: ja
});
W({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var jo = {};
function yt(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, s = 0; s < t.length; ++s)
    jo[t[s]] = o;
  i && (En[e] = i), l && (Cn[e] = l);
}
var H4 = {};
function p(r, e) {
  H4[r] = e;
}
function Wi(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Yn = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new Q("{" + r.envName + "} can be used only in display mode.");
};
function Xa(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function jt(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: o,
    autoTag: s,
    singleRow: u,
    emptySingleRow: f,
    maxNumCols: d,
    leqno: g
  } = e;
  if (r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var v = r.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      l = 1;
    else if (l = parseFloat(v), !l || l < 0)
      throw new Q("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var E = [], F = [E], z = [], T = [], _ = s != null ? [] : void 0;
  function b() {
    s && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function x() {
    _ && (r.gullet.macros.get("\\df@tag") ? (_.push(r.subparse([new Ia("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : _.push(!!s && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (b(), T.push(Wi(r)); ; ) {
    var k = r.parseExpression(!1, u ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), k = {
      type: "ordgroup",
      mode: r.mode,
      body: k
    }, t && (k = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [k]
    }), E.push(k);
    var S = r.fetch().text;
    if (S === "&") {
      if (d && E.length === d) {
        if (u || o)
          throw new Q("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (S === "\\end") {
      x(), E.length === 1 && k.type === "styling" && k.body[0].body.length === 0 && (F.length > 1 || !f) && F.pop(), T.length < F.length + 1 && T.push([]);
      break;
    } else if (S === "\\\\") {
      r.consume();
      var C = void 0;
      r.gullet.future().text !== " " && (C = r.parseSizeGroup(!0)), z.push(C ? C.value : null), x(), T.push(Wi(r)), E = [], F.push(E), b();
    } else
      throw new Q("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: l,
    body: F,
    cols: i,
    rowGaps: z,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: T,
    colSeparationType: o,
    tags: _,
    leqno: g
  };
}
function Za(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var wt = function(e, t) {
  var n, a, i = e.body.length, l = e.hLinesBeforeRow, o = 0, s = new Array(i), u = [], f = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, g = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(re.SCRIPT).sizeMultiplier;
    g = 0.2778 * (v / t.sizeMultiplier);
  }
  var E = e.colSeparationType === "CD" ? Be({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, F = 3 * d, z = e.arraystretch * E, T = 0.7 * z, _ = 0.3 * z, b = 0;
  function x(W0) {
    for (var Y0 = 0; Y0 < W0.length; ++Y0)
      Y0 > 0 && (b += 0.25), u.push({
        pos: b,
        isDashed: W0[Y0]
      });
  }
  for (x(l[0]), n = 0; n < e.body.length; ++n) {
    var k = e.body[n], S = T, C = _;
    o < k.length && (o = k.length);
    var R = new Array(k.length);
    for (a = 0; a < k.length; ++a) {
      var N = pe(k[a], t);
      C < N.depth && (C = N.depth), S < N.height && (S = N.height), R[a] = N;
    }
    var L = e.rowGaps[n], H = 0;
    L && (H = Be(L, t), H > 0 && (H += _, C < H && (C = H), H = 0)), e.addJot && (C += F), R.height = S, R.depth = C, b += S, R.pos = b, b += C + H, s[n] = R, x(l[n + 1]);
  }
  var G = b / 2 + t.fontMetrics().axisHeight, ie = e.cols || [], $ = [], V, Z, me = [];
  if (e.tags && e.tags.some((W0) => W0))
    for (n = 0; n < i; ++n) {
      var be = s[n], Le = be.pos - G, Fe = e.tags[n], fe = void 0;
      Fe === !0 ? fe = M.makeSpan(["eqn-num"], [], t) : Fe === !1 ? fe = M.makeSpan([], [], t) : fe = M.makeSpan([], r0(Fe, t, !0), t), fe.depth = be.depth, fe.height = be.height, me.push({
        type: "elem",
        elem: fe,
        shift: Le
      });
    }
  for (
    a = 0, Z = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || Z < ie.length;
    ++a, ++Z
  ) {
    for (var ve = ie[Z] || {}, ye = !0; ve.type === "separator"; ) {
      if (ye || (V = M.makeSpan(["arraycolsep"], []), V.style.width = U(t.fontMetrics().doubleRuleSep), $.push(V)), ve.separator === "|" || ve.separator === ":") {
        var je = ve.separator === "|" ? "solid" : "dashed", q = M.makeSpan(["vertical-separator"], [], t);
        q.style.height = U(b), q.style.borderRightWidth = U(f), q.style.borderRightStyle = je, q.style.margin = "0 " + U(-f / 2);
        var Qe = b - G;
        Qe && (q.style.verticalAlign = U(-Qe)), $.push(q);
      } else
        throw new Q("Invalid separator type: " + ve.separator);
      Z++, ve = ie[Z] || {}, ye = !1;
    }
    if (!(a >= o)) {
      var Ie = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Ie = te.deflt(ve.pregap, g), Ie !== 0 && (V = M.makeSpan(["arraycolsep"], []), V.style.width = U(Ie), $.push(V)));
      var He = [];
      for (n = 0; n < i; ++n) {
        var o0 = s[n], Xe = o0[a];
        if (Xe) {
          var n0 = o0.pos - G;
          Xe.depth = o0.depth, Xe.height = o0.height, He.push({
            type: "elem",
            elem: Xe,
            shift: n0
          });
        }
      }
      He = M.makeVList({
        positionType: "individualShift",
        children: He
      }, t), He = M.makeSpan(["col-align-" + (ve.align || "c")], [He]), $.push(He), (a < o - 1 || e.hskipBeforeAndAfter) && (Ie = te.deflt(ve.postgap, g), Ie !== 0 && (V = M.makeSpan(["arraycolsep"], []), V.style.width = U(Ie), $.push(V)));
    }
  }
  if (s = M.makeSpan(["mtable"], $), u.length > 0) {
    for (var g0 = M.makeLineSpan("hline", t, f), k0 = M.makeLineSpan("hdashline", t, f), Je = [{
      type: "elem",
      elem: s,
      shift: 0
    }]; u.length > 0; ) {
      var a0 = u.pop(), M0 = a0.pos - G;
      a0.isDashed ? Je.push({
        type: "elem",
        elem: k0,
        shift: M0
      }) : Je.push({
        type: "elem",
        elem: g0,
        shift: M0
      });
    }
    s = M.makeVList({
      positionType: "individualShift",
      children: Je
    }, t);
  }
  if (me.length === 0)
    return M.makeSpan(["mord"], [s], t);
  var z0 = M.makeVList({
    positionType: "individualShift",
    children: me
  }, t);
  return z0 = M.makeSpan(["tag"], [z0], t), M.makeFragment([s, z0]);
}, U4 = {
  c: "center ",
  l: "left ",
  r: "right "
}, _t = function(e, t) {
  for (var n = [], a = new O.MathNode("mtd", [], ["mtr-glue"]), i = new O.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var o = e.body[l], s = [], u = 0; u < o.length; u++)
      s.push(new O.MathNode("mtd", [ke(o[u], t)]));
    e.tags && e.tags[l] && (s.unshift(a), s.push(a), e.leqno ? s.unshift(i) : s.push(i)), n.push(new O.MathNode("mtr", s));
  }
  var f = new O.MathNode("mtable", n), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  f.setAttribute("rowspacing", U(d));
  var g = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var E = e.cols, F = "", z = !1, T = 0, _ = E.length;
    E[0].type === "separator" && (g += "top ", T = 1), E[E.length - 1].type === "separator" && (g += "bottom ", _ -= 1);
    for (var b = T; b < _; b++)
      E[b].type === "align" ? (v += U4[E[b].align], z && (F += "none "), z = !0) : E[b].type === "separator" && z && (F += E[b].separator === "|" ? "solid " : "dashed ", z = !1);
    f.setAttribute("columnalign", v.trim()), /[sd]/.test(F) && f.setAttribute("columnlines", F.trim());
  }
  if (e.colSeparationType === "align") {
    for (var x = e.cols || [], k = "", S = 1; S < x.length; S++)
      k += S % 2 ? "0em " : "1em ";
    f.setAttribute("columnspacing", k.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? f.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? f.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? f.setAttribute("columnspacing", "0.5em") : f.setAttribute("columnspacing", "1em");
  var C = "", R = e.hLinesBeforeRow;
  g += R[0].length > 0 ? "left " : "", g += R[R.length - 1].length > 0 ? "right " : "";
  for (var N = 1; N < R.length - 1; N++)
    C += R[N].length === 0 ? "none " : R[N][0] ? "dashed " : "solid ";
  return /[sd]/.test(C) && f.setAttribute("rowlines", C.trim()), g !== "" && (f = new O.MathNode("menclose", [f]), f.setAttribute("notation", g.trim())), e.arraystretch && e.arraystretch < 1 && (f = new O.MathNode("mstyle", [f]), f.setAttribute("scriptlevel", "1")), f;
}, Xo = function(e, t) {
  e.envName.indexOf("ed") === -1 && Yn(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = jt(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : Xa(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, s = 0, u = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var f = "", d = 0; d < t[0].body.length; d++) {
      var g = ce(t[0].body[d], "textord");
      f += g.text;
    }
    o = Number(f), s = o * 2;
  }
  var v = !s;
  l.body.forEach(function(T) {
    for (var _ = 1; _ < T.length; _ += 2) {
      var b = ce(T[_], "styling"), x = ce(b.body[0], "ordgroup");
      x.body.unshift(u);
    }
    if (v)
      s < T.length && (s = T.length);
    else {
      var k = T.length / 2;
      if (o < k)
        throw new Q("Too many math in a row: " + ("expected " + o + ", but got " + k), T[0]);
    }
  });
  for (var E = 0; E < s; ++E) {
    var F = "r", z = 0;
    E % 2 === 1 ? F = "l" : E > 0 && v && (z = 1), n[E] = {
      type: "align",
      align: F,
      pregap: z,
      postgap: 0
    };
  }
  return l.colSeparationType = v ? "align" : "alignat", l;
};
yt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Vn(e[0]), n = t ? [e[0]] : ce(e[0], "ordgroup").body, a = n.map(function(l) {
      var o = Va(l), s = o.text;
      if ("lcr".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      if (s === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (s === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new Q("Unknown column alignment: " + s, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return jt(r.parser, i, Za(r.envName));
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new Q("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = jt(r.parser, n, Za(r.envName)), l = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = jt(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Vn(e[0]), n = t ? [e[0]] : ce(e[0], "ordgroup").body, a = n.map(function(l) {
      var o = Va(l), s = o.text;
      if ("lc".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      throw new Q("Unknown column alignment: " + s, l);
    });
    if (a.length > 1)
      throw new Q("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = jt(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new Q("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = jt(r.parser, e, Za(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Xo,
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    te.contains(["gather", "gather*"], r.envName) && Yn(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Xa(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return jt(r.parser, e, "display");
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Xo,
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Yn(r);
    var e = {
      autoTag: Xa(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return jt(r.parser, e, "display");
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
yt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Yn(r), F4(r.parser);
  },
  htmlBuilder: wt,
  mathmlBuilder: _t
});
p("\\nonumber", "\\gdef\\@eqnsw{0}");
p("\\notag", "\\nonumber");
W({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new Q(r.funcName + " valid only within array environment");
  }
});
var Yi = jo;
W({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    if (a.type !== "ordgroup")
      throw new Q("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += ce(a.body[l], "textord").text;
    if (n === "\\begin") {
      if (!Yi.hasOwnProperty(i))
        throw new Q("No such environment: " + i, a);
      var o = Yi[i], {
        args: s,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", o), f = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = o.handler(f, s, u);
      t.expect("\\end", !1);
      var g = t.nextToken, v = ce(t.parseFunction(), "environment");
      if (v.name !== i)
        throw new Q("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", g);
      return d;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Zo = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return pe(r.body, n);
}, $o = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ke(r.body, n);
}, ji = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
W({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = Tn(e[0]), i = n;
    return i in ji && (i = ji[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Zo,
  mathmlBuilder: $o
});
W({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0], a = te.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Gn(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: a
    };
  }
});
W({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: a
    } = r, {
      mode: i
    } = t, l = t.parseExpression(!0, a), o = "math" + n.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: Zo,
  mathmlBuilder: $o
});
var Ko = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : r === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : r === "script" ? t = re.SCRIPT : r === "scriptscript" && (t = re.SCRIPTSCRIPT), t;
}, $a = (r, e) => {
  var t = Ko(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var l = pe(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, s = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < o ? o : l.height, l.depth = l.depth < s ? s : l.depth;
  }
  i = e.havingStyle(a);
  var u = pe(r.denom, i, e), f, d, g;
  r.hasBarLine ? (r.barSize ? (d = Be(r.barSize, e), f = M.makeLineSpan("frac-line", e, d)) : f = M.makeLineSpan("frac-line", e), d = f.height, g = f.height) : (f = null, d = 0, g = e.fontMetrics().defaultRuleThickness);
  var v, E, F;
  t.size === re.DISPLAY.size || r.size === "display" ? (v = e.fontMetrics().num1, d > 0 ? E = 3 * g : E = 7 * g, F = e.fontMetrics().denom1) : (d > 0 ? (v = e.fontMetrics().num2, E = g) : (v = e.fontMetrics().num3, E = 3 * g), F = e.fontMetrics().denom2);
  var z;
  if (f) {
    var _ = e.fontMetrics().axisHeight;
    v - l.depth - (_ + 0.5 * d) < E && (v += E - (v - l.depth - (_ + 0.5 * d))), _ - 0.5 * d - (u.height - F) < E && (F += E - (_ - 0.5 * d - (u.height - F)));
    var b = -(_ - 0.5 * d);
    z = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: F
      }, {
        type: "elem",
        elem: f,
        shift: b
      }, {
        type: "elem",
        elem: l,
        shift: -v
      }]
    }, e);
  } else {
    var T = v - l.depth - (u.height - F);
    T < E && (v += 0.5 * (E - T), F += 0.5 * (E - T)), z = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: F
      }, {
        type: "elem",
        elem: l,
        shift: -v
      }]
    }, e);
  }
  i = e.havingStyle(t), z.height *= i.sizeMultiplier / e.sizeMultiplier, z.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var x;
  t.size === re.DISPLAY.size ? x = e.fontMetrics().delim1 : t.size === re.SCRIPTSCRIPT.size ? x = e.havingStyle(re.SCRIPT).fontMetrics().delim2 : x = e.fontMetrics().delim2;
  var k, S;
  return r.leftDelim == null ? k = Wr(e, ["mopen"]) : k = Bt.customSizedDelim(r.leftDelim, x, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? S = M.makeSpan([]) : r.rightDelim == null ? S = Wr(e, ["mclose"]) : S = Bt.customSizedDelim(r.rightDelim, x, !0, e.havingStyle(t), r.mode, ["mclose"]), M.makeSpan(["mord"].concat(i.sizingClasses(e)), [k, M.makeSpan(["mfrac"], [z]), S], e);
}, Ka = (r, e) => {
  var t = new O.MathNode("mfrac", [ke(r.numer, e), ke(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Be(r.barSize, e);
    t.setAttribute("linethickness", U(n));
  }
  var a = Ko(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new O.MathNode("mstyle", [t]);
    var i = a.size === re.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var l = [];
    if (r.leftDelim != null) {
      var o = new O.MathNode("mo", [new O.TextNode(r.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    if (l.push(t), r.rightDelim != null) {
      var s = new O.MathNode("mo", [new O.TextNode(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    return Ha(l);
  }
  return t;
};
W({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1], l, o = null, s = null, u = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, o = "(", s = ")";
        break;
      case "\\\\bracefrac":
        l = !1, o = "\\{", s = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, o = "[", s = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        u = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        u = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: l,
      leftDelim: o,
      rightDelim: s,
      size: u,
      barSize: null
    };
  },
  htmlBuilder: $a,
  mathmlBuilder: Ka
});
W({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
W({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: n
    };
  }
});
var Xi = ["display", "text", "script", "scriptscript"], Zi = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
W({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], a = e[5], i = Tn(e[0]), l = i.type === "atom" && i.family === "open" ? Zi(i.text) : null, o = Tn(e[1]), s = o.type === "atom" && o.family === "close" ? Zi(o.text) : null, u = ce(e[2], "size"), f, d = null;
    u.isBlank ? f = !0 : (d = u.value, f = d.number > 0);
    var g = "auto", v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var E = ce(v.body[0], "textord");
        g = Xi[Number(E.text)];
      }
    } else
      v = ce(v, "textord"), g = Xi[Number(v.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: f,
      barSize: d,
      leftDelim: l,
      rightDelim: s,
      size: g
    };
  },
  htmlBuilder: $a,
  mathmlBuilder: Ka
});
W({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: ce(e[0], "size").value,
      token: a
    };
  }
});
W({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = Du(ce(e[1], "infix").size), l = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: l,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: $a,
  mathmlBuilder: Ka
});
var Qo = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? pe(r.sup, e.havingStyle(t.sup()), e) : pe(r.sub, e.havingStyle(t.sub()), e), a = ce(r.base, "horizBrace")) : a = ce(r, "horizBrace");
  var i = pe(a.base, e.havingBaseStyle(re.DISPLAY)), l = Nt.svgSpan(a, e), o;
  if (a.isOver ? (o = M.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = M.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), o.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var s = M.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, e) : o = M.makeVList({
      positionType: "bottom",
      positionData: s.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: s
      }]
    }, e);
  }
  return M.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
}, V4 = (r, e) => {
  var t = Nt.mathMLnode(r.label);
  return new O.MathNode(r.isOver ? "mover" : "munder", [ke(r.base, e), t]);
};
W({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0]
    };
  },
  htmlBuilder: Qo,
  mathmlBuilder: V4
});
W({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], a = ce(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: qe(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = r0(r.body, e, !1);
    return M.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = Yt(r.body, e);
    return t instanceof nt || (t = new nt("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
W({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = ce(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var l = n[i];
      l === "~" && (l = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var o = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: qe(o)
    };
  }
});
W({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: qe(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = r0(r.body, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mrow", T0(r.body, e));
  }
});
W({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r, i = ce(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, s = {};
    switch (n) {
      case "\\htmlClass":
        s.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        s.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        s.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var u = i.split(","), f = 0; f < u.length; f++) {
          var d = u[f].split("=");
          if (d.length !== 2)
            throw new Q("Error parsing key-value for \\htmlData");
          s["data-" + d[0].trim()] = d[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: s
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o) ? {
      type: "html",
      mode: t.mode,
      attributes: s,
      body: qe(l)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = r0(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = M.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => Yt(r.body, e)
});
W({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: qe(e[0]),
      mathml: qe(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = r0(r.html, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (r, e) => Yt(r.mathml, e)
});
var aa = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new Q("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Gu(n))
    throw new Q("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
W({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, o = "";
    if (t[0])
      for (var s = ce(t[0], "raw").string, u = s.split(","), f = 0; f < u.length; f++) {
        var d = u[f].split("=");
        if (d.length === 2) {
          var g = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              o = g;
              break;
            case "width":
              a = aa(g);
              break;
            case "height":
              i = aa(g);
              break;
            case "totalheight":
              l = aa(g);
              break;
            default:
              throw new Q("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = ce(e[0], "url").url;
    return o === "" && (o = v, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: v
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: a,
      height: i,
      totalheight: l,
      src: v
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = Be(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = Be(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = Be(r.width, e));
    var i = {
      height: U(t + n)
    };
    a > 0 && (i.width = U(a)), n > 0 && (i.verticalAlign = U(-n));
    var l = new Wu(r.src, r.alt, i);
    return l.height = t, l.depth = n, l;
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = Be(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = Be(r.totalheight, e) - n, t.setAttribute("valign", U(-a))), t.setAttribute("height", U(n + a)), r.width.number > 0) {
      var i = Be(r.width, e);
      t.setAttribute("width", U(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
W({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = ce(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m", l = a.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(r, e) {
    return M.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = Be(r.dimension, e);
    return new O.SpaceNode(t);
  }
});
W({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = M.makeSpan([], [pe(r.body, e)]), t = M.makeSpan(["inner"], [t], e)) : t = M.makeSpan(["inner"], [pe(r.body, e)]);
    var n = M.makeSpan(["fix"], []), a = M.makeSpan([r.alignment], [t, n], e), i = M.makeSpan(["strut"]);
    return i.style.height = U(a.height + a.depth), a.depth && (i.style.verticalAlign = U(-a.depth)), a.children.unshift(i), a = M.makeSpan(["thinbox"], [a], e), M.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mpadded", [ke(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
W({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: l
    };
  }
});
W({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new Q("Mismatched " + r.funcName);
  }
});
var $i = (r, e) => {
  switch (e.style.size) {
    case re.DISPLAY.size:
      return r.display;
    case re.TEXT.size:
      return r.text;
    case re.SCRIPT.size:
      return r.script;
    case re.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
W({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: qe(e[0]),
      text: qe(e[1]),
      script: qe(e[2]),
      scriptscript: qe(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = $i(r, e), n = r0(t, e, !1);
    return M.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = $i(r, e);
    return Yt(t, e);
  }
});
var Jo = (r, e, t, n, a, i, l) => {
  r = M.makeSpan([], [r]);
  var o = t && te.isCharacterBox(t), s, u;
  if (e) {
    var f = pe(e, n.havingStyle(a.sup()), n);
    u = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - f.depth)
    };
  }
  if (t) {
    var d = pe(t, n.havingStyle(a.sub()), n);
    s = {
      elem: d,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - d.height)
    };
  }
  var g;
  if (u && s) {
    var v = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + r.depth + l;
    g = M.makeVList({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: U(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: U(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (s) {
    var E = r.height - l;
    g = M.makeVList({
      positionType: "top",
      positionData: E,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: U(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, n);
  } else if (u) {
    var F = r.depth + l;
    g = M.makeVList({
      positionType: "bottom",
      positionData: F,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: U(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return r;
  var z = [g];
  if (s && i !== 0 && !o) {
    var T = M.makeSpan(["mspace"], [], n);
    T.style.marginRight = U(i), z.unshift(T);
  }
  return M.makeSpan(["mop", "op-limits"], z, n);
}, e1 = ["\\smallint"], _r = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ce(r.base, "op"), a = !0) : i = ce(r, "op");
  var l = e.style, o = !1;
  l.size === re.DISPLAY.size && i.symbol && !te.contains(e1, i.name) && (o = !0);
  var s;
  if (i.symbol) {
    var u = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (f = i.name.slice(1), i.name = f === "oiint" ? "\\iint" : "\\iiint"), s = M.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), f.length > 0) {
      var d = s.italic, g = M.staticSvg(f + "Size" + (o ? "2" : "1"), e);
      s = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: 0
        }, {
          type: "elem",
          elem: g,
          shift: o ? 0.08 : 0
        }]
      }, e), i.name = "\\" + f, s.classes.unshift("mop"), s.italic = d;
    }
  } else if (i.body) {
    var v = r0(i.body, e, !0);
    v.length === 1 && v[0] instanceof bt ? (s = v[0], s.classes[0] = "mop") : s = M.makeSpan(["mop"], v, e);
  } else {
    for (var E = [], F = 1; F < i.name.length; F++)
      E.push(M.mathsym(i.name[F], i.mode, e));
    s = M.makeSpan(["mop"], E, e);
  }
  var z = 0, T = 0;
  return (s instanceof bt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (z = (s.height - s.depth) / 2 - e.fontMetrics().axisHeight, T = s.italic), a ? Jo(s, t, n, e, l, T, z) : (z && (s.style.position = "relative", s.style.top = U(z)), s);
}, Zr = (r, e) => {
  var t;
  if (r.symbol)
    t = new nt("mo", [P0(r.name, r.mode)]), te.contains(e1, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new nt("mo", T0(r.body, e));
  else {
    t = new nt("mi", [new Ir(r.name.slice(1))]);
    var n = new nt("mo", [P0("⁡", "text")]);
    r.parentIsSupSub ? t = new nt("mrow", [t, n]) : t = Mo([t, n]);
  }
  return t;
}, G4 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
W({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = n;
    return a.length === 1 && (a = G4[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: _r,
  mathmlBuilder: Zr
});
W({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: qe(n)
    };
  },
  htmlBuilder: _r,
  mathmlBuilder: Zr
});
var W4 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
W({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: _r,
  mathmlBuilder: Zr
});
W({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: _r,
  mathmlBuilder: Zr
});
W({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = W4[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: _r,
  mathmlBuilder: Zr
});
var t1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ce(r.base, "operatorname"), a = !0) : i = ce(r, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var o = i.body.map((d) => {
      var g = d.text;
      return typeof g == "string" ? {
        type: "textord",
        mode: d.mode,
        text: g
      } : d;
    }), s = r0(o, e.withFont("mathrm"), !0), u = 0; u < s.length; u++) {
      var f = s[u];
      f instanceof bt && (f.text = f.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = M.makeSpan(["mop"], s, e);
  } else
    l = M.makeSpan(["mop"], [], e);
  return a ? Jo(l, t, n, e, e.style, 0, 0) : l;
}, Y4 = (r, e) => {
  for (var t = T0(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof O.SpaceNode)) if (i instanceof O.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof O.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = t.map((f) => f.toText()).join("");
    t = [new O.TextNode(o)];
  }
  var s = new O.MathNode("mi", t);
  s.setAttribute("mathvariant", "normal");
  var u = new O.MathNode("mo", [P0("⁡", "text")]);
  return r.parentIsSupSub ? new O.MathNode("mrow", [s, u]) : O.newDocumentFragment([s, u]);
};
W({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: qe(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: t1,
  mathmlBuilder: Y4
});
p("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
lr({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? M.makeFragment(r0(r.body, e, !1)) : M.makeSpan(["mord"], r0(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return Yt(r.body, e, !0);
  }
});
W({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e.havingCrampedStyle()), n = M.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return M.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [new O.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new O.MathNode("mover", [ke(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
W({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: qe(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = r0(r.body, e.withPhantom(), !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = T0(r.body, e);
    return new O.MathNode("mphantom", t);
  }
});
W({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = M.makeSpan([], [pe(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0, t.children[n].depth = 0;
    return t = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), M.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = T0(qe(r.body), e), n = new O.MathNode("mphantom", t), a = new O.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
W({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = M.makeSpan(["inner"], [pe(r.body, e.withPhantom())]), n = M.makeSpan(["fix"], []);
    return M.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = T0(qe(r.body), e), n = new O.MathNode("mphantom", t), a = new O.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
W({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = ce(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e), n = Be(r.dy, e);
    return M.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mpadded", [ke(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
W({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
W({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = ce(e[0], "size"), l = ce(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && ce(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(r, e) {
    var t = M.makeSpan(["mord", "rule"], [], e), n = Be(r.width, e), a = Be(r.height, e), i = r.shift ? Be(r.shift, e) : 0;
    return t.style.borderRightWidth = U(n), t.style.borderTopWidth = U(a), t.style.bottom = U(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Be(r.width, e), n = Be(r.height, e), a = r.shift ? Be(r.shift, e) : 0, i = e.color && e.getColor() || "black", l = new O.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", U(t)), l.setAttribute("height", U(n));
    var o = new O.MathNode("mpadded", [l]);
    return a >= 0 ? o.setAttribute("height", U(a)) : (o.setAttribute("height", U(a)), o.setAttribute("depth", U(-a))), o.setAttribute("voffset", U(a)), o;
  }
});
function r1(r, e, t) {
  for (var n = r0(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var l = n[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[l + 1] === "reset-size" + e.size && (n[i].classes[l + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return M.makeFragment(n);
}
var Ki = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], j4 = (r, e) => {
  var t = e.havingSize(r.size);
  return r1(r.body, t, e);
};
W({
  type: "sizing",
  names: Ki,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Ki.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: j4,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = T0(r.body, t), a = new O.MathNode("mstyle", n);
    return a.setAttribute("mathsize", U(t.sizeMultiplier)), a;
  }
});
W({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = !1, i = !1, l = t[0] && ce(t[0], "ordgroup");
    if (l)
      for (var o = "", s = 0; s < l.body.length; ++s) {
        var u = l.body[s];
        if (o = u.text, o === "t")
          a = !0;
        else if (o === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var f = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: f,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = M.makeSpan([], [pe(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mpadded", [ke(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
W({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = M.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < re.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, o = t.height + t.depth + l + a, {
      span: s,
      ruleWidth: u,
      advanceWidth: f
    } = Bt.sqrtImage(o, e), d = s.height - u;
    d > t.height + t.depth + l && (l = (l + d - t.height - t.depth) / 2);
    var g = s.height - t.height - l - u;
    t.style.paddingLeft = U(f);
    var v = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + g)
      }, {
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: u
      }]
    }, e);
    if (r.index) {
      var E = e.havingStyle(re.SCRIPTSCRIPT), F = pe(r.index, E, e), z = 0.6 * (v.height - v.depth), T = M.makeVList({
        positionType: "shift",
        positionData: -z,
        children: [{
          type: "elem",
          elem: F
        }]
      }, e), _ = M.makeSpan(["root"], [T]);
      return M.makeSpan(["mord", "sqrt"], [_, v], e);
    } else
      return M.makeSpan(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new O.MathNode("mroot", [ke(t, e), ke(n, e)]) : new O.MathNode("msqrt", [ke(t, e)]);
  }
});
var Qi = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
};
W({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!0, t), l = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = Qi[r.style], n = e.havingStyle(t).withFont("");
    return r1(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = Qi[r.style], n = e.havingStyle(t), a = T0(r.body, n), i = new O.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = l[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var X4 = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === re.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? _r : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || n.limits);
      return i ? t1 : null;
    } else {
      if (n.type === "accent")
        return te.isCharacterBox(n.base) ? Ga : null;
      if (n.type === "horizBrace") {
        var l = !e.sub;
        return l === n.isOver ? Qo : null;
      } else
        return null;
    }
  else return null;
};
lr({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = X4(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, l = pe(n, e), o, s, u = e.fontMetrics(), f = 0, d = 0, g = n && te.isCharacterBox(n);
    if (a) {
      var v = e.havingStyle(e.style.sup());
      o = pe(a, v, e), g || (f = l.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var E = e.havingStyle(e.style.sub());
      s = pe(i, E, e), g || (d = l.depth + E.fontMetrics().subDrop * E.sizeMultiplier / e.sizeMultiplier);
    }
    var F;
    e.style === re.DISPLAY ? F = u.sup1 : e.style.cramped ? F = u.sup3 : F = u.sup2;
    var z = e.sizeMultiplier, T = U(0.5 / u.ptPerEm / z), _ = null;
    if (s) {
      var b = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof bt || b) && (_ = U(-l.italic));
    }
    var x;
    if (o && s) {
      f = Math.max(f, F, o.depth + 0.25 * u.xHeight), d = Math.max(d, u.sub2);
      var k = u.defaultRuleThickness, S = 4 * k;
      if (f - o.depth - (s.height - d) < S) {
        d = S - (f - o.depth) + s.height;
        var C = 0.8 * u.xHeight - (f - o.depth);
        C > 0 && (f += C, d -= C);
      }
      var R = [{
        type: "elem",
        elem: s,
        shift: d,
        marginRight: T,
        marginLeft: _
      }, {
        type: "elem",
        elem: o,
        shift: -f,
        marginRight: T
      }];
      x = M.makeVList({
        positionType: "individualShift",
        children: R
      }, e);
    } else if (s) {
      d = Math.max(d, u.sub1, s.height - 0.8 * u.xHeight);
      var N = [{
        type: "elem",
        elem: s,
        marginLeft: _,
        marginRight: T
      }];
      x = M.makeVList({
        positionType: "shift",
        positionData: d,
        children: N
      }, e);
    } else if (o)
      f = Math.max(f, F, o.depth + 0.25 * u.xHeight), x = M.makeVList({
        positionType: "shift",
        positionData: -f,
        children: [{
          type: "elem",
          elem: o,
          marginRight: T
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var L = wa(l, "right") || "mord";
    return M.makeSpan([L], [l, M.makeSpan(["msupsub"], [x])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [ke(r.base, e)];
    r.sub && i.push(ke(r.sub, e)), r.sup && i.push(ke(r.sup, e));
    var l;
    if (t)
      l = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var u = r.base;
        u && u.type === "op" && u.limits && e.style === re.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === re.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var s = r.base;
        s && s.type === "op" && s.limits && (e.style === re.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === re.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === re.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === re.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new O.MathNode(l, i);
  }
});
lr({
  type: "atom",
  htmlBuilder(r, e) {
    return M.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [P0(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Ua(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var n1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
lr({
  type: "mathord",
  htmlBuilder(r, e) {
    return M.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mi", [P0(r.text, r.mode, e)]), n = Ua(r, e) || "italic";
    return n !== n1[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
lr({
  type: "textord",
  htmlBuilder(r, e) {
    return M.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = P0(r.text, r.mode, e), n = Ua(r, e) || "normal", a;
    return r.mode === "text" ? a = new O.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new O.MathNode("mn", [t]) : r.text === "\\prime" ? a = new O.MathNode("mo", [t]) : a = new O.MathNode("mi", [t]), n !== n1[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var ia = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, la = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
lr({
  type: "spacing",
  htmlBuilder(r, e) {
    if (la.hasOwnProperty(r.text)) {
      var t = la[r.text].className || "";
      if (r.mode === "text") {
        var n = M.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return M.makeSpan(["mspace", t], [M.mathsym(r.text, r.mode, e)], e);
    } else {
      if (ia.hasOwnProperty(r.text))
        return M.makeSpan(["mspace", ia[r.text]], [], e);
      throw new Q('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (la.hasOwnProperty(r.text))
      t = new O.MathNode("mtext", [new O.TextNode(" ")]);
    else {
      if (ia.hasOwnProperty(r.text))
        return new O.MathNode("mspace");
      throw new Q('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Ji = () => {
  var r = new O.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
lr({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mtable", [new O.MathNode("mtr", [Ji(), new O.MathNode("mtd", [Yt(r.body, e)]), Ji(), new O.MathNode("mtd", [Yt(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var el = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, tl = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Z4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, rl = (r, e) => {
  var t = r.font;
  if (t) {
    if (el[t])
      return e.withTextFontFamily(el[t]);
    if (tl[t])
      return e.withTextFontWeight(tl[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Z4[t]);
};
W({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: qe(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = rl(r, e), n = r0(r.body, t, !0);
    return M.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = rl(r, e);
    return Yt(r.body, t);
  }
});
W({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e), n = M.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [new O.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new O.MathNode("munder", [ke(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
W({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return M.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mpadded", [ke(r.body, e)], ["vcenter"]);
  }
});
W({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new Q("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = nl(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), n.push(M.makeSymbol(l, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return M.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), M.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new O.TextNode(nl(r)), n = new O.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var nl = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), $4 = Co;
p("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
p("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
p("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
p("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
p("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
p("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
p("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var al = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
p("\\char", function(r) {
  var e = r.popToken(), t, n = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new Q("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = al[e.text], n == null || n >= t)
      throw new Q("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = al[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Qa = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new Q("\\newcommand's first argument must be a macro name");
  var a = n[0].text, i = r.isDefined(a);
  if (i && !e)
    throw new Q("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new Q("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var o = "", s = r.expandNextToken(); s.text !== "]" && s.text !== "EOF"; )
      o += s.text, s = r.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new Q("Invalid number of arguments: " + o);
    l = parseInt(o), n = r.consumeArg().tokens;
  }
  return r.macros.set(a, {
    tokens: n,
    numArgs: l
  }), "";
};
p("\\newcommand", (r) => Qa(r, !1, !0));
p("\\renewcommand", (r) => Qa(r, !0, !1));
p("\\providecommand", (r) => Qa(r, !0, !0));
p("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
p("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
p("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), $4[t], Pe.math[t], Pe.text[t]), "";
});
p("\\bgroup", "{");
p("\\egroup", "}");
p("~", "\\nobreakspace");
p("\\lq", "`");
p("\\rq", "'");
p("\\aa", "\\r a");
p("\\AA", "\\r A");
p("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
p("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
p("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
p("ℬ", "\\mathscr{B}");
p("ℰ", "\\mathscr{E}");
p("ℱ", "\\mathscr{F}");
p("ℋ", "\\mathscr{H}");
p("ℐ", "\\mathscr{I}");
p("ℒ", "\\mathscr{L}");
p("ℳ", "\\mathscr{M}");
p("ℛ", "\\mathscr{R}");
p("ℭ", "\\mathfrak{C}");
p("ℌ", "\\mathfrak{H}");
p("ℨ", "\\mathfrak{Z}");
p("\\Bbbk", "\\Bbb{k}");
p("·", "\\cdotp");
p("\\llap", "\\mathllap{\\textrm{#1}}");
p("\\rlap", "\\mathrlap{\\textrm{#1}}");
p("\\clap", "\\mathclap{\\textrm{#1}}");
p("\\mathstrut", "\\vphantom{(}");
p("\\underbar", "\\underline{\\text{#1}}");
p("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
p("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
p("\\ne", "\\neq");
p("≠", "\\neq");
p("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
p("∉", "\\notin");
p("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
p("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
p("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
p("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
p("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
p("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
p("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
p("⟂", "\\perp");
p("‼", "\\mathclose{!\\mkern-0.8mu!}");
p("∌", "\\notni");
p("⌜", "\\ulcorner");
p("⌝", "\\urcorner");
p("⌞", "\\llcorner");
p("⌟", "\\lrcorner");
p("©", "\\copyright");
p("®", "\\textregistered");
p("️", "\\textregistered");
p("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
p("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
p("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
p("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
p("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
p("⋮", "\\vdots");
p("\\varGamma", "\\mathit{\\Gamma}");
p("\\varDelta", "\\mathit{\\Delta}");
p("\\varTheta", "\\mathit{\\Theta}");
p("\\varLambda", "\\mathit{\\Lambda}");
p("\\varXi", "\\mathit{\\Xi}");
p("\\varPi", "\\mathit{\\Pi}");
p("\\varSigma", "\\mathit{\\Sigma}");
p("\\varUpsilon", "\\mathit{\\Upsilon}");
p("\\varPhi", "\\mathit{\\Phi}");
p("\\varPsi", "\\mathit{\\Psi}");
p("\\varOmega", "\\mathit{\\Omega}");
p("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
p("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
p("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
p("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
p("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
p("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var il = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
p("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in il ? e = il[t] : (t.slice(0, 4) === "\\not" || t in Pe.math && te.contains(["bin", "rel"], Pe.math[t].group)) && (e = "\\dotsb"), e;
});
var Ja = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
p("\\dotso", function(r) {
  var e = r.future().text;
  return e in Ja ? "\\ldots\\," : "\\ldots";
});
p("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Ja && e !== "," ? "\\ldots\\," : "\\ldots";
});
p("\\cdots", function(r) {
  var e = r.future().text;
  return e in Ja ? "\\@cdots\\," : "\\@cdots";
});
p("\\dotsb", "\\cdots");
p("\\dotsm", "\\cdots");
p("\\dotsi", "\\!\\cdots");
p("\\dotsx", "\\ldots\\,");
p("\\DOTSI", "\\relax");
p("\\DOTSB", "\\relax");
p("\\DOTSX", "\\relax");
p("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
p("\\,", "\\tmspace+{3mu}{.1667em}");
p("\\thinspace", "\\,");
p("\\>", "\\mskip{4mu}");
p("\\:", "\\tmspace+{4mu}{.2222em}");
p("\\medspace", "\\:");
p("\\;", "\\tmspace+{5mu}{.2777em}");
p("\\thickspace", "\\;");
p("\\!", "\\tmspace-{3mu}{.1667em}");
p("\\negthinspace", "\\!");
p("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
p("\\negthickspace", "\\tmspace-{5mu}{.277em}");
p("\\enspace", "\\kern.5em ");
p("\\enskip", "\\hskip.5em\\relax");
p("\\quad", "\\hskip1em\\relax");
p("\\qquad", "\\hskip2em\\relax");
p("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
p("\\tag@paren", "\\tag@literal{({#1})}");
p("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new Q("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
p("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
p("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
p("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
p("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
p("\\newline", "\\\\\\relax");
p("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var a1 = U(Tt["Main-Regular"][84][1] - 0.7 * Tt["Main-Regular"][65][1]);
p("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + a1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
p("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + a1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
p("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
p("\\@hspace", "\\hskip #1\\relax");
p("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
p("\\ordinarycolon", ":");
p("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
p("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
p("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
p("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
p("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
p("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
p("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
p("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
p("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
p("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
p("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
p("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
p("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
p("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
p("∷", "\\dblcolon");
p("∹", "\\eqcolon");
p("≔", "\\coloneqq");
p("≕", "\\eqqcolon");
p("⩴", "\\Coloneqq");
p("\\ratio", "\\vcentcolon");
p("\\coloncolon", "\\dblcolon");
p("\\colonequals", "\\coloneqq");
p("\\coloncolonequals", "\\Coloneqq");
p("\\equalscolon", "\\eqqcolon");
p("\\equalscoloncolon", "\\Eqqcolon");
p("\\colonminus", "\\coloneq");
p("\\coloncolonminus", "\\Coloneq");
p("\\minuscolon", "\\eqcolon");
p("\\minuscoloncolon", "\\Eqcolon");
p("\\coloncolonapprox", "\\Colonapprox");
p("\\coloncolonsim", "\\Colonsim");
p("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
p("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
p("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
p("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
p("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
p("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
p("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
p("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
p("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
p("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
p("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
p("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
p("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
p("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
p("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
p("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
p("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
p("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
p("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
p("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
p("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
p("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
p("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
p("\\imath", "\\html@mathml{\\@imath}{ı}");
p("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
p("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
p("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
p("⟦", "\\llbracket");
p("⟧", "\\rrbracket");
p("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
p("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
p("⦃", "\\lBrace");
p("⦄", "\\rBrace");
p("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
p("⦵", "\\minuso");
p("\\darr", "\\downarrow");
p("\\dArr", "\\Downarrow");
p("\\Darr", "\\Downarrow");
p("\\lang", "\\langle");
p("\\rang", "\\rangle");
p("\\uarr", "\\uparrow");
p("\\uArr", "\\Uparrow");
p("\\Uarr", "\\Uparrow");
p("\\N", "\\mathbb{N}");
p("\\R", "\\mathbb{R}");
p("\\Z", "\\mathbb{Z}");
p("\\alef", "\\aleph");
p("\\alefsym", "\\aleph");
p("\\Alpha", "\\mathrm{A}");
p("\\Beta", "\\mathrm{B}");
p("\\bull", "\\bullet");
p("\\Chi", "\\mathrm{X}");
p("\\clubs", "\\clubsuit");
p("\\cnums", "\\mathbb{C}");
p("\\Complex", "\\mathbb{C}");
p("\\Dagger", "\\ddagger");
p("\\diamonds", "\\diamondsuit");
p("\\empty", "\\emptyset");
p("\\Epsilon", "\\mathrm{E}");
p("\\Eta", "\\mathrm{H}");
p("\\exist", "\\exists");
p("\\harr", "\\leftrightarrow");
p("\\hArr", "\\Leftrightarrow");
p("\\Harr", "\\Leftrightarrow");
p("\\hearts", "\\heartsuit");
p("\\image", "\\Im");
p("\\infin", "\\infty");
p("\\Iota", "\\mathrm{I}");
p("\\isin", "\\in");
p("\\Kappa", "\\mathrm{K}");
p("\\larr", "\\leftarrow");
p("\\lArr", "\\Leftarrow");
p("\\Larr", "\\Leftarrow");
p("\\lrarr", "\\leftrightarrow");
p("\\lrArr", "\\Leftrightarrow");
p("\\Lrarr", "\\Leftrightarrow");
p("\\Mu", "\\mathrm{M}");
p("\\natnums", "\\mathbb{N}");
p("\\Nu", "\\mathrm{N}");
p("\\Omicron", "\\mathrm{O}");
p("\\plusmn", "\\pm");
p("\\rarr", "\\rightarrow");
p("\\rArr", "\\Rightarrow");
p("\\Rarr", "\\Rightarrow");
p("\\real", "\\Re");
p("\\reals", "\\mathbb{R}");
p("\\Reals", "\\mathbb{R}");
p("\\Rho", "\\mathrm{P}");
p("\\sdot", "\\cdot");
p("\\sect", "\\S");
p("\\spades", "\\spadesuit");
p("\\sub", "\\subset");
p("\\sube", "\\subseteq");
p("\\supe", "\\supseteq");
p("\\Tau", "\\mathrm{T}");
p("\\thetasym", "\\vartheta");
p("\\weierp", "\\wp");
p("\\Zeta", "\\mathrm{Z}");
p("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
p("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
p("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
p("\\bra", "\\mathinner{\\langle{#1}|}");
p("\\ket", "\\mathinner{|{#1}\\rangle}");
p("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
p("\\Bra", "\\left\\langle#1\\right|");
p("\\Ket", "\\left|#1\\right\\rangle");
var i1 = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var s = (d) => (g) => {
    r && (g.macros.set("|", l), a.length && g.macros.set("\\|", o));
    var v = d;
    if (!d && a.length) {
      var E = g.future();
      E.text === "|" && (g.popToken(), v = !0);
    }
    return {
      tokens: v ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", s(!1)), a.length && e.macros.set("\\|", s(!0));
  var u = e.consumeArg().tokens, f = e.expandTokens([
    ...i,
    ...u,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: f.reverse(),
    numArgs: 0
  };
};
p("\\bra@ket", i1(!1));
p("\\bra@set", i1(!0));
p("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
p("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
p("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
p("\\angln", "{\\angl n}");
p("\\blue", "\\textcolor{##6495ed}{#1}");
p("\\orange", "\\textcolor{##ffa500}{#1}");
p("\\pink", "\\textcolor{##ff00af}{#1}");
p("\\red", "\\textcolor{##df0030}{#1}");
p("\\green", "\\textcolor{##28ae7b}{#1}");
p("\\gray", "\\textcolor{gray}{#1}");
p("\\purple", "\\textcolor{##9d38bd}{#1}");
p("\\blueA", "\\textcolor{##ccfaff}{#1}");
p("\\blueB", "\\textcolor{##80f6ff}{#1}");
p("\\blueC", "\\textcolor{##63d9ea}{#1}");
p("\\blueD", "\\textcolor{##11accd}{#1}");
p("\\blueE", "\\textcolor{##0c7f99}{#1}");
p("\\tealA", "\\textcolor{##94fff5}{#1}");
p("\\tealB", "\\textcolor{##26edd5}{#1}");
p("\\tealC", "\\textcolor{##01d1c1}{#1}");
p("\\tealD", "\\textcolor{##01a995}{#1}");
p("\\tealE", "\\textcolor{##208170}{#1}");
p("\\greenA", "\\textcolor{##b6ffb0}{#1}");
p("\\greenB", "\\textcolor{##8af281}{#1}");
p("\\greenC", "\\textcolor{##74cf70}{#1}");
p("\\greenD", "\\textcolor{##1fab54}{#1}");
p("\\greenE", "\\textcolor{##0d923f}{#1}");
p("\\goldA", "\\textcolor{##ffd0a9}{#1}");
p("\\goldB", "\\textcolor{##ffbb71}{#1}");
p("\\goldC", "\\textcolor{##ff9c39}{#1}");
p("\\goldD", "\\textcolor{##e07d10}{#1}");
p("\\goldE", "\\textcolor{##a75a05}{#1}");
p("\\redA", "\\textcolor{##fca9a9}{#1}");
p("\\redB", "\\textcolor{##ff8482}{#1}");
p("\\redC", "\\textcolor{##f9685d}{#1}");
p("\\redD", "\\textcolor{##e84d39}{#1}");
p("\\redE", "\\textcolor{##bc2612}{#1}");
p("\\maroonA", "\\textcolor{##ffbde0}{#1}");
p("\\maroonB", "\\textcolor{##ff92c6}{#1}");
p("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
p("\\maroonD", "\\textcolor{##ca337c}{#1}");
p("\\maroonE", "\\textcolor{##9e034e}{#1}");
p("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
p("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
p("\\purpleC", "\\textcolor{##aa87ff}{#1}");
p("\\purpleD", "\\textcolor{##7854ab}{#1}");
p("\\purpleE", "\\textcolor{##543b78}{#1}");
p("\\mintA", "\\textcolor{##f5f9e8}{#1}");
p("\\mintB", "\\textcolor{##edf2df}{#1}");
p("\\mintC", "\\textcolor{##e0e5cc}{#1}");
p("\\grayA", "\\textcolor{##f6f7f7}{#1}");
p("\\grayB", "\\textcolor{##f0f1f2}{#1}");
p("\\grayC", "\\textcolor{##e3e5e6}{#1}");
p("\\grayD", "\\textcolor{##d6d8da}{#1}");
p("\\grayE", "\\textcolor{##babec2}{#1}");
p("\\grayF", "\\textcolor{##888d93}{#1}");
p("\\grayG", "\\textcolor{##626569}{#1}");
p("\\grayH", "\\textcolor{##3b3e40}{#1}");
p("\\grayI", "\\textcolor{##21242c}{#1}");
p("\\kaBlue", "\\textcolor{##314453}{#1}");
p("\\kaGreen", "\\textcolor{##71B307}{#1}");
typeof document < "u" && document.compatMode !== "CSS1Compat" && typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
function ei() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let sr = ei();
function l1(r) {
  sr = r;
}
const s1 = /[&<>"']/, K4 = new RegExp(s1.source, "g"), o1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Q4 = new RegExp(o1.source, "g"), J4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ll = (r) => J4[r];
function F0(r, e) {
  if (e) {
    if (s1.test(r))
      return r.replace(K4, ll);
  } else if (o1.test(r))
    return r.replace(Q4, ll);
  return r;
}
const ec = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function tc(r) {
  return r.replace(ec, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const rc = /(^|[^\[])\^/g;
function _e(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(rc, "$1"), t = t.replace(a, l), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
function sl(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const qr = { exec: () => null };
function ol(r, e) {
  const t = r.replace(/\|/g, (i, l, o) => {
    let s = !1, u = l;
    for (; --u >= 0 && o[u] === "\\"; )
      s = !s;
    return s ? "|" : " |";
  }), n = t.split(/ \|/);
  let a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; a < n.length; a++)
    n[a] = n[a].trim().replace(/\\\|/g, "|");
  return n;
}
function on(r, e, t) {
  const n = r.length;
  if (n === 0)
    return "";
  let a = 0;
  for (; a < n; ) {
    const i = r.charAt(n - a - 1);
    if (i === e && !t)
      a++;
    else if (i !== e && t)
      a++;
    else
      break;
  }
  return r.slice(0, n - a);
}
function nc(r, e) {
  if (r.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++)
    if (r[n] === "\\")
      n++;
    else if (r[n] === e[0])
      t++;
    else if (r[n] === e[1] && (t--, t < 0))
      return n;
  return -1;
}
function ul(r, e, t, n) {
  const a = e.href, i = e.title ? F0(e.title) : null, l = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: a,
      title: i,
      text: l,
      tokens: n.inlineTokens(l)
    };
    return n.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: a,
    title: i,
    text: F0(l)
  };
}
function ac(r, e) {
  const t = r.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const n = t[1];
  return e.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [l] = i;
    return l.length >= n.length ? a.slice(n.length) : a;
  }).join(`
`);
}
class Mn {
  // set by the lexer
  constructor(e) {
    Ae(this, "options");
    Ae(this, "rules");
    // set by the lexer
    Ae(this, "lexer");
    this.options = e || sr;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : on(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], a = ac(n, t[3] || "");
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const a = on(n, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (n = a.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = on(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(n);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: n
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const a = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = a ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = a ? n : "[*+-]");
      const l = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", s = "", u = !1;
      for (; e; ) {
        let f = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (T) => " ".repeat(3 * T.length)), g = e.split(`
`, 1)[0], v = 0;
        this.options.pedantic ? (v = 2, s = d.trimStart()) : (v = t[2].search(/[^ ]/), v = v > 4 ? 1 : v, s = d.slice(v), v += t[1].length);
        let E = !1;
        if (!d && /^ *$/.test(g) && (o += g + `
`, e = e.substring(g.length + 1), f = !0), !f) {
          const T = new RegExp(`^ {0,${Math.min(3, v - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), _ = new RegExp(`^ {0,${Math.min(3, v - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), b = new RegExp(`^ {0,${Math.min(3, v - 1)}}(?:\`\`\`|~~~)`), x = new RegExp(`^ {0,${Math.min(3, v - 1)}}#`);
          for (; e; ) {
            const k = e.split(`
`, 1)[0];
            if (g = k, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), b.test(g) || x.test(g) || T.test(g) || _.test(e))
              break;
            if (g.search(/[^ ]/) >= v || !g.trim())
              s += `
` + g.slice(v);
            else {
              if (E || d.search(/[^ ]/) >= 4 || b.test(d) || x.test(d) || _.test(d))
                break;
              s += `
` + g;
            }
            !E && !g.trim() && (E = !0), o += k + `
`, e = e.substring(k.length + 1), d = g.slice(v);
          }
        }
        i.loose || (u ? i.loose = !0 : /\n *\n *$/.test(o) && (u = !0));
        let F = null, z;
        this.options.gfm && (F = /^\[[ xX]\] /.exec(s), F && (z = F[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: o,
          task: !!F,
          checked: z,
          loose: !1,
          text: s,
          tokens: []
        }), i.raw += o;
      }
      i.items[i.items.length - 1].raw = o.trimEnd(), i.items[i.items.length - 1].text = s.trimEnd(), i.raw = i.raw.trimEnd();
      for (let f = 0; f < i.items.length; f++)
        if (this.lexer.state.top = !1, i.items[f].tokens = this.lexer.blockTokens(i.items[f].text, []), !i.loose) {
          const d = i.items[f].tokens.filter((v) => v.type === "space"), g = d.length > 0 && d.some((v) => /\n.*\n/.test(v.raw));
          i.loose = g;
        }
      if (i.loose)
        for (let f = 0; f < i.items.length; f++)
          i.items[f].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), a = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: a,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const n = ol(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], l = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === a.length) {
      for (const o of a)
        /^ *-+: *$/.test(o) ? l.align.push("right") : /^ *:-+: *$/.test(o) ? l.align.push("center") : /^ *:-+ *$/.test(o) ? l.align.push("left") : l.align.push(null);
      for (const o of n)
        l.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of i)
        l.rows.push(ol(o, l.header.length).map((s) => ({
          text: s,
          tokens: this.lexer.inline(s)
        })));
      return l;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: F0(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n))
          return;
        const l = on(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0)
          return;
      } else {
        const l = nc(t[2], "()");
        if (l > -1) {
          const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let a = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        l && (a = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(n) ? a = a.slice(1) : a = a.slice(1, -1)), ul(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const a = (n[2] || n[1]).replace(/\s+/g, " "), i = t[a.toLowerCase()];
      if (!i) {
        const l = n[0].charAt(0);
        return {
          type: "text",
          raw: l,
          text: l
        };
      }
      return ul(n, i, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const l = [...a[0]].length - 1;
      let o, s, u = l, f = 0;
      const d = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = d.exec(t)) != null; ) {
        if (o = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !o)
          continue;
        if (s = [...o].length, a[3] || a[4]) {
          u += s;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + s) % 3)) {
          f += s;
          continue;
        }
        if (u -= s, u > 0)
          continue;
        s = Math.min(s, s + u + f);
        const g = [...a[0]][0].length, v = e.slice(0, l + a.index + g + s);
        if (Math.min(l, s) % 2) {
          const F = v.slice(1, -1);
          return {
            type: "em",
            raw: v,
            text: F,
            tokens: this.lexer.inlineTokens(F)
          };
        }
        const E = v.slice(2, -2);
        return {
          type: "strong",
          raw: v,
          text: E,
          tokens: this.lexer.inlineTokens(E)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(n), i = /^ /.test(n) && / $/.test(n);
      return a && i && (n = n.substring(1, n.length - 1)), n = F0(n, !0), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, a;
      return t[2] === "@" ? (n = F0(t[1]), a = "mailto:" + n) : (n = F0(t[1]), a = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: a,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, i;
      if (t[2] === "@")
        a = F0(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (l !== t[0]);
        a = F0(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: i,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return this.lexer.state.inRawBlock ? n = t[0] : n = F0(t[0]), {
        type: "text",
        raw: t[0],
        text: n
      };
    }
  }
}
const ic = /^(?: *(?:\n|$))+/, lc = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, sc = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, $r = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, oc = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, u1 = /(?:[*+-]|\d{1,9}[.)])/, c1 = _e(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, u1).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ti = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, uc = /^[^\n]+/, ri = /(?!\s*\])(?:\\.|[^\[\]\\])+/, cc = _e(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ri).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fc = _e(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, u1).getRegex(), jn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ni = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, hc = _e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ni).replace("tag", jn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), f1 = _e(ti).replace("hr", $r).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex(), mc = _e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", f1).getRegex(), ai = {
  blockquote: mc,
  code: lc,
  def: cc,
  fences: sc,
  heading: oc,
  hr: $r,
  html: hc,
  lheading: c1,
  list: fc,
  newline: ic,
  paragraph: f1,
  table: qr,
  text: uc
}, cl = _e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", $r).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex(), dc = {
  ...ai,
  table: cl,
  paragraph: _e(ti).replace("hr", $r).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", cl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex()
}, pc = {
  ...ai,
  html: _e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ni).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: qr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: _e(ti).replace("hr", $r).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", c1).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, h1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, gc = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, m1 = /^( {2,}|\\)\n(?!\s*$)/, vc = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Kr = "\\p{P}\\p{S}", bc = _e(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Kr).getRegex(), yc = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, wc = _e(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Kr).getRegex(), _c = _e("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Kr).getRegex(), kc = _e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Kr).getRegex(), Dc = _e(/\\([punct])/, "gu").replace(/punct/g, Kr).getRegex(), Ac = _e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), xc = _e(ni).replace("(?:-->|$)", "-->").getRegex(), Sc = _e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", xc).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), zn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Fc = _e(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", zn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), d1 = _e(/^!?\[(label)\]\[(ref)\]/).replace("label", zn).replace("ref", ri).getRegex(), p1 = _e(/^!?\[(ref)\](?:\[\])?/).replace("ref", ri).getRegex(), Ec = _e("reflink|nolink(?!\\()", "g").replace("reflink", d1).replace("nolink", p1).getRegex(), ii = {
  _backpedal: qr,
  // only used for GFM url
  anyPunctuation: Dc,
  autolink: Ac,
  blockSkip: yc,
  br: m1,
  code: gc,
  del: qr,
  emStrongLDelim: wc,
  emStrongRDelimAst: _c,
  emStrongRDelimUnd: kc,
  escape: h1,
  link: Fc,
  nolink: p1,
  punctuation: bc,
  reflink: d1,
  reflinkSearch: Ec,
  tag: Sc,
  text: vc,
  url: qr
}, Cc = {
  ...ii,
  link: _e(/^!?\[(label)\]\((.*?)\)/).replace("label", zn).getRegex(),
  reflink: _e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", zn).getRegex()
}, Da = {
  ...ii,
  escape: _e(h1).replace("])", "~|])").getRegex(),
  url: _e(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Tc = {
  ...Da,
  br: _e(m1).replace("{2,}", "*").getRegex(),
  text: _e(Da.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, un = {
  normal: ai,
  gfm: dc,
  pedantic: pc
}, Fr = {
  normal: ii,
  gfm: Da,
  breaks: Tc,
  pedantic: Cc
};
class ht {
  constructor(e) {
    Ae(this, "tokens");
    Ae(this, "options");
    Ae(this, "state");
    Ae(this, "tokenizer");
    Ae(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || sr, this.options.tokenizer = this.options.tokenizer || new Mn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: un.normal,
      inline: Fr.normal
    };
    this.options.pedantic ? (t.block = un.pedantic, t.inline = Fr.pedantic) : this.options.gfm && (t.block = un.gfm, this.options.breaks ? t.inline = Fr.breaks : t.inline = Fr.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: un,
      inline: Fr
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new ht(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new ht(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, s, u) => s + "    ".repeat(u.length));
    let n, a, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (n = o.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.space(e)) {
          e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
          continue;
        }
        if (n = this.tokenizer.code(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.fences(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.heading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.hr(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.blockquote(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.list(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.html(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.def(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + n.raw, a.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
          });
          continue;
        }
        if (n = this.tokenizer.table(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.lheading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const s = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach((f) => {
            u = f.call({ lexer: this }, s), typeof u == "number" && u >= 0 && (o = Math.min(o, u));
          }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(i))) {
          a = t[t.length - 1], l && a.type === "paragraph" ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n), l = i.length !== e.length, e = e.substring(n.raw.length);
          continue;
        }
        if (n = this.tokenizer.text(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && a.type === "text" ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let n, a, i, l = e, o, s, u;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          f.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, o.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (s || (u = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((f) => (n = f.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.escape(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.tag(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && n.type === "text" && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.link(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && n.type === "text" && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.emStrong(e, l, u)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.codespan(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.br(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.del(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.autolink(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e))) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let f = 1 / 0;
          const d = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((v) => {
            g = v.call({ lexer: this }, d), typeof g == "number" && g >= 0 && (f = Math.min(f, g));
          }), f < 1 / 0 && f >= 0 && (i = e.substring(0, f + 1));
        }
        if (n = this.tokenizer.inlineText(i)) {
          e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), s = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (e) {
          const f = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else
            throw new Error(f);
        }
      }
    return t;
  }
}
class Bn {
  constructor(e) {
    Ae(this, "options");
    this.options = e || sr;
  }
  code(e, t, n) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + F0(a) + '">' + (n ? e : F0(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : F0(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, n) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, n) {
    const a = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + a + i + `>
` + e + "</" + a + `>
`;
  }
  listitem(e, t, n) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, n) {
    const a = sl(e);
    if (a === null)
      return n;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i;
  }
  image(e, t, n) {
    const a = sl(e);
    if (a === null)
      return n;
    e = a;
    let i = `<img src="${e}" alt="${n}"`;
    return t && (i += ` title="${t}"`), i += ">", i;
  }
  text(e) {
    return e;
  }
}
class li {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class mt {
  constructor(e) {
    Ae(this, "options");
    Ae(this, "renderer");
    Ae(this, "textRenderer");
    this.options = e || sr, this.options.renderer = this.options.renderer || new Bn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new li();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new mt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new mt(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let n = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = i, o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          n += o || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          const l = i;
          n += this.renderer.heading(this.parseInline(l.tokens), l.depth, tc(this.parseInline(l.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const l = i;
          n += this.renderer.code(l.text, l.lang, !!l.escaped);
          continue;
        }
        case "table": {
          const l = i;
          let o = "", s = "";
          for (let f = 0; f < l.header.length; f++)
            s += this.renderer.tablecell(this.parseInline(l.header[f].tokens), { header: !0, align: l.align[f] });
          o += this.renderer.tablerow(s);
          let u = "";
          for (let f = 0; f < l.rows.length; f++) {
            const d = l.rows[f];
            s = "";
            for (let g = 0; g < d.length; g++)
              s += this.renderer.tablecell(this.parseInline(d[g].tokens), { header: !1, align: l.align[g] });
            u += this.renderer.tablerow(s);
          }
          n += this.renderer.table(o, u);
          continue;
        }
        case "blockquote": {
          const l = i, o = this.parse(l.tokens);
          n += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const l = i, o = l.ordered, s = l.start, u = l.loose;
          let f = "";
          for (let d = 0; d < l.items.length; d++) {
            const g = l.items[d], v = g.checked, E = g.task;
            let F = "";
            if (g.task) {
              const z = this.renderer.checkbox(!!v);
              u ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = z + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = z + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: z + " "
              }) : F += z + " ";
            }
            F += this.parse(g.tokens, u), f += this.renderer.listitem(F, E, !!v);
          }
          n += this.renderer.list(f, o, s);
          continue;
        }
        case "html": {
          const l = i;
          n += this.renderer.html(l.text, l.block);
          continue;
        }
        case "paragraph": {
          const l = i;
          n += this.renderer.paragraph(this.parseInline(l.tokens));
          continue;
        }
        case "text": {
          let l = i, o = l.tokens ? this.parseInline(l.tokens) : l.text;
          for (; a + 1 < e.length && e[a + 1].type === "text"; )
            l = e[++a], o += `
` + (l.tokens ? this.parseInline(l.tokens) : l.text);
          n += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += l || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const l = i;
          n += t.text(l.text);
          break;
        }
        case "html": {
          const l = i;
          n += t.html(l.text);
          break;
        }
        case "link": {
          const l = i;
          n += t.link(l.href, l.title, this.parseInline(l.tokens, t));
          break;
        }
        case "image": {
          const l = i;
          n += t.image(l.href, l.title, l.text);
          break;
        }
        case "strong": {
          const l = i;
          n += t.strong(this.parseInline(l.tokens, t));
          break;
        }
        case "em": {
          const l = i;
          n += t.em(this.parseInline(l.tokens, t));
          break;
        }
        case "codespan": {
          const l = i;
          n += t.codespan(l.text);
          break;
        }
        case "br": {
          n += t.br();
          break;
        }
        case "del": {
          const l = i;
          n += t.del(this.parseInline(l.tokens, t));
          break;
        }
        case "text": {
          const l = i;
          n += t.text(l.text);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}
class Pr {
  constructor(e) {
    Ae(this, "options");
    this.options = e || sr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
Ae(Pr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var ir, Aa, g1;
class Mc {
  constructor(...e) {
    Fi(this, ir);
    Ae(this, "defaults", ei());
    Ae(this, "options", this.setOptions);
    Ae(this, "parse", en(this, ir, Aa).call(this, ht.lex, mt.parse));
    Ae(this, "parseInline", en(this, ir, Aa).call(this, ht.lexInline, mt.parseInline));
    Ae(this, "Parser", mt);
    Ae(this, "Renderer", Bn);
    Ae(this, "TextRenderer", li);
    Ae(this, "Lexer", ht);
    Ae(this, "Tokenizer", Mn);
    Ae(this, "Hooks", Pr);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, i;
    let n = [];
    for (const l of e)
      switch (n = n.concat(t.call(this, l)), l.type) {
        case "table": {
          const o = l;
          for (const s of o.header)
            n = n.concat(this.walkTokens(s.tokens, t));
          for (const s of o.rows)
            for (const u of s)
              n = n.concat(this.walkTokens(u.tokens, t));
          break;
        }
        case "list": {
          const o = l;
          n = n.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = l;
          (i = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && i[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((s) => {
            const u = o[s].flat(1 / 0);
            n = n.concat(this.walkTokens(u, t));
          }) : o.tokens && (n = n.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const a = { ...n };
      if (a.async = this.defaults.async || a.async || !1, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const l = t.renderers[i.name];
          l ? t.renderers[i.name] = function(...o) {
            let s = i.renderer.apply(this, o);
            return s === !1 && (s = l.apply(this, o)), s;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const l = t[i.level];
          l ? l.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), a.extensions = t), n.renderer) {
        const i = this.defaults.renderer || new Bn(this.defaults);
        for (const l in n.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const o = l, s = n.renderer[o], u = i[o];
          i[o] = (...f) => {
            let d = s.apply(i, f);
            return d === !1 && (d = u.apply(i, f)), d || "";
          };
        }
        a.renderer = i;
      }
      if (n.tokenizer) {
        const i = this.defaults.tokenizer || new Mn(this.defaults);
        for (const l in n.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const o = l, s = n.tokenizer[o], u = i[o];
          i[o] = (...f) => {
            let d = s.apply(i, f);
            return d === !1 && (d = u.apply(i, f)), d;
          };
        }
        a.tokenizer = i;
      }
      if (n.hooks) {
        const i = this.defaults.hooks || new Pr();
        for (const l in n.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const o = l, s = n.hooks[o], u = i[o];
          Pr.passThroughHooks.has(l) ? i[o] = (f) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(i, f)).then((g) => u.call(i, g));
            const d = s.call(i, f);
            return u.call(i, d);
          } : i[o] = (...f) => {
            let d = s.apply(i, f);
            return d === !1 && (d = u.apply(i, f)), d;
          };
        }
        a.hooks = i;
      }
      if (n.walkTokens) {
        const i = this.defaults.walkTokens, l = n.walkTokens;
        a.walkTokens = function(o) {
          let s = [];
          return s.push(l.call(this, o)), i && (s = s.concat(i.call(this, o))), s;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return ht.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return mt.parse(e, t ?? this.defaults);
  }
}
ir = new WeakSet(), Aa = function(e, t) {
  return (n, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const o = en(this, ir, g1).call(this, !!l.silent, !!l.async);
    if (typeof n > "u" || n === null)
      return o(new Error("marked(): input parameter is undefined or null"));
    if (typeof n != "string")
      return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
    if (l.hooks && (l.hooks.options = l), l.async)
      return Promise.resolve(l.hooks ? l.hooks.preprocess(n) : n).then((s) => e(s, l)).then((s) => l.hooks ? l.hooks.processAllTokens(s) : s).then((s) => l.walkTokens ? Promise.all(this.walkTokens(s, l.walkTokens)).then(() => s) : s).then((s) => t(s, l)).then((s) => l.hooks ? l.hooks.postprocess(s) : s).catch(o);
    try {
      l.hooks && (n = l.hooks.preprocess(n));
      let s = e(n, l);
      l.hooks && (s = l.hooks.processAllTokens(s)), l.walkTokens && this.walkTokens(s, l.walkTokens);
      let u = t(s, l);
      return l.hooks && (u = l.hooks.postprocess(u)), u;
    } catch (s) {
      return o(s);
    }
  };
}, g1 = function(e, t) {
  return (n) => {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + F0(n.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(n);
    throw n;
  };
};
const ar = new Mc();
function we(r, e) {
  return ar.parse(r, e);
}
we.options = we.setOptions = function(r) {
  return ar.setOptions(r), we.defaults = ar.defaults, l1(we.defaults), we;
};
we.getDefaults = ei;
we.defaults = sr;
we.use = function(...r) {
  return ar.use(...r), we.defaults = ar.defaults, l1(we.defaults), we;
};
we.walkTokens = function(r, e) {
  return ar.walkTokens(r, e);
};
we.parseInline = ar.parseInline;
we.Parser = mt;
we.parser = mt.parse;
we.Renderer = Bn;
we.TextRenderer = li;
we.Lexer = ht;
we.lexer = ht.lex;
we.Tokenizer = Mn;
we.Hooks = Pr;
we.parse = we;
we.options;
we.setOptions;
we.use;
we.walkTokens;
we.parseInline;
mt.parse;
ht.lex;
const zc = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Bc = Object.hasOwnProperty;
class v1 {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const n = this;
    let a = Nc(e, t === !0);
    const i = a;
    for (; Bc.call(n.occurrences, a); )
      n.occurrences[i]++, a = i + "-" + n.occurrences[i];
    return n.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Nc(r, e) {
  return typeof r != "string" ? "" : (e || (r = r.toLowerCase()), r.replace(zc, "").replace(/ /g, "-"));
}
new v1();
var fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Rc = { exports: {} };
(function(r) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(n) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, o = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: n.Prism && n.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function _(b) {
          return b instanceof s ? new s(b.type, _(b.content), b.alias) : Array.isArray(b) ? b.map(_) : b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(_) {
          return Object.prototype.toString.call(_).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(_) {
          return _.__id || Object.defineProperty(_, "__id", { value: ++i }), _.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function _(b, x) {
          x = x || {};
          var k, S;
          switch (o.util.type(b)) {
            case "Object":
              if (S = o.util.objId(b), x[S])
                return x[S];
              k = /** @type {Record<string, any>} */
              {}, x[S] = k;
              for (var C in b)
                b.hasOwnProperty(C) && (k[C] = _(b[C], x));
              return (
                /** @type {any} */
                k
              );
            case "Array":
              return S = o.util.objId(b), x[S] ? x[S] : (k = [], x[S] = k, /** @type {Array} */
              /** @type {any} */
              b.forEach(function(R, N) {
                k[N] = _(R, x);
              }), /** @type {any} */
              k);
            default:
              return b;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(_) {
          for (; _; ) {
            var b = a.exec(_.className);
            if (b)
              return b[1].toLowerCase();
            _ = _.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(_, b) {
          _.className = _.className.replace(RegExp(a, "gi"), ""), _.classList.add("language-" + b);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (k) {
            var _ = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack) || [])[1];
            if (_) {
              var b = document.getElementsByTagName("script");
              for (var x in b)
                if (b[x].src == _)
                  return b[x];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(_, b, x) {
          for (var k = "no-" + b; _; ) {
            var S = _.classList;
            if (S.contains(b))
              return !0;
            if (S.contains(k))
              return !1;
            _ = _.parentElement;
          }
          return !!x;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(_, b) {
          var x = o.util.clone(o.languages[_]);
          for (var k in b)
            x[k] = b[k];
          return x;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(_, b, x, k) {
          k = k || /** @type {any} */
          o.languages;
          var S = k[_], C = {};
          for (var R in S)
            if (S.hasOwnProperty(R)) {
              if (R == b)
                for (var N in x)
                  x.hasOwnProperty(N) && (C[N] = x[N]);
              x.hasOwnProperty(R) || (C[R] = S[R]);
            }
          var L = k[_];
          return k[_] = C, o.languages.DFS(o.languages, function(H, G) {
            G === L && H != _ && (this[H] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function _(b, x, k, S) {
          S = S || {};
          var C = o.util.objId;
          for (var R in b)
            if (b.hasOwnProperty(R)) {
              x.call(b, R, b[R], k || R);
              var N = b[R], L = o.util.type(N);
              L === "Object" && !S[C(N)] ? (S[C(N)] = !0, _(N, x, null, S)) : L === "Array" && !S[C(N)] && (S[C(N)] = !0, _(N, x, R, S));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(_, b) {
        o.highlightAllUnder(document, _, b);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(_, b, x) {
        var k = {
          callback: x,
          container: _,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", k), k.elements = Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)), o.hooks.run("before-all-elements-highlight", k);
        for (var S = 0, C; C = k.elements[S++]; )
          o.highlightElement(C, b === !0, k.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(_, b, x) {
        var k = o.util.getLanguage(_), S = o.languages[k];
        o.util.setLanguage(_, k);
        var C = _.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && o.util.setLanguage(C, k);
        var R = _.textContent, N = {
          element: _,
          language: k,
          grammar: S,
          code: R
        };
        function L(G) {
          N.highlightedCode = G, o.hooks.run("before-insert", N), N.element.innerHTML = N.highlightedCode, o.hooks.run("after-highlight", N), o.hooks.run("complete", N), x && x.call(N.element);
        }
        if (o.hooks.run("before-sanity-check", N), C = N.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !N.code) {
          o.hooks.run("complete", N), x && x.call(N.element);
          return;
        }
        if (o.hooks.run("before-highlight", N), !N.grammar) {
          L(o.util.encode(N.code));
          return;
        }
        if (b && n.Worker) {
          var H = new Worker(o.filename);
          H.onmessage = function(G) {
            L(G.data);
          }, H.postMessage(JSON.stringify({
            language: N.language,
            code: N.code,
            immediateClose: !0
          }));
        } else
          L(o.highlight(N.code, N.grammar, N.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(_, b, x) {
        var k = {
          code: _,
          grammar: b,
          language: x
        };
        if (o.hooks.run("before-tokenize", k), !k.grammar)
          throw new Error('The language "' + k.language + '" has no grammar.');
        return k.tokens = o.tokenize(k.code, k.grammar), o.hooks.run("after-tokenize", k), s.stringify(o.util.encode(k.tokens), k.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(_, b) {
        var x = b.rest;
        if (x) {
          for (var k in x)
            b[k] = x[k];
          delete b.rest;
        }
        var S = new d();
        return g(S, S.head, _), f(_, S, b, S.head, 0), E(S);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(_, b) {
          var x = o.hooks.all;
          x[_] = x[_] || [], x[_].push(b);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(_, b) {
          var x = o.hooks.all[_];
          if (!(!x || !x.length))
            for (var k = 0, S; S = x[k++]; )
              S(b);
        }
      },
      Token: s
    };
    n.Prism = o;
    function s(_, b, x, k) {
      this.type = _, this.content = b, this.alias = x, this.length = (k || "").length | 0;
    }
    s.stringify = function _(b, x) {
      if (typeof b == "string")
        return b;
      if (Array.isArray(b)) {
        var k = "";
        return b.forEach(function(L) {
          k += _(L, x);
        }), k;
      }
      var S = {
        type: b.type,
        content: _(b.content, x),
        tag: "span",
        classes: ["token", b.type],
        attributes: {},
        language: x
      }, C = b.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(S.classes, C) : S.classes.push(C)), o.hooks.run("wrap", S);
      var R = "";
      for (var N in S.attributes)
        R += " " + N + '="' + (S.attributes[N] || "").replace(/"/g, "&quot;") + '"';
      return "<" + S.tag + ' class="' + S.classes.join(" ") + '"' + R + ">" + S.content + "</" + S.tag + ">";
    };
    function u(_, b, x, k) {
      _.lastIndex = b;
      var S = _.exec(x);
      if (S && k && S[1]) {
        var C = S[1].length;
        S.index += C, S[0] = S[0].slice(C);
      }
      return S;
    }
    function f(_, b, x, k, S, C) {
      for (var R in x)
        if (!(!x.hasOwnProperty(R) || !x[R])) {
          var N = x[R];
          N = Array.isArray(N) ? N : [N];
          for (var L = 0; L < N.length; ++L) {
            if (C && C.cause == R + "," + L)
              return;
            var H = N[L], G = H.inside, ie = !!H.lookbehind, $ = !!H.greedy, V = H.alias;
            if ($ && !H.pattern.global) {
              var Z = H.pattern.toString().match(/[imsuy]*$/)[0];
              H.pattern = RegExp(H.pattern.source, Z + "g");
            }
            for (var me = H.pattern || H, be = k.next, Le = S; be !== b.tail && !(C && Le >= C.reach); Le += be.value.length, be = be.next) {
              var Fe = be.value;
              if (b.length > _.length)
                return;
              if (!(Fe instanceof s)) {
                var fe = 1, ve;
                if ($) {
                  if (ve = u(me, Le, _, ie), !ve || ve.index >= _.length)
                    break;
                  var Qe = ve.index, ye = ve.index + ve[0].length, je = Le;
                  for (je += be.value.length; Qe >= je; )
                    be = be.next, je += be.value.length;
                  if (je -= be.value.length, Le = je, be.value instanceof s)
                    continue;
                  for (var q = be; q !== b.tail && (je < ye || typeof q.value == "string"); q = q.next)
                    fe++, je += q.value.length;
                  fe--, Fe = _.slice(Le, je), ve.index -= Le;
                } else if (ve = u(me, 0, Fe, ie), !ve)
                  continue;
                var Qe = ve.index, Ie = ve[0], He = Fe.slice(0, Qe), o0 = Fe.slice(Qe + Ie.length), Xe = Le + Fe.length;
                C && Xe > C.reach && (C.reach = Xe);
                var n0 = be.prev;
                He && (n0 = g(b, n0, He), Le += He.length), v(b, n0, fe);
                var g0 = new s(R, G ? o.tokenize(Ie, G) : Ie, V, Ie);
                if (be = g(b, n0, g0), o0 && g(b, be, o0), fe > 1) {
                  var k0 = {
                    cause: R + "," + L,
                    reach: Xe
                  };
                  f(_, b, x, be.prev, Le, k0), C && k0.reach > C.reach && (C.reach = k0.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var _ = { value: null, prev: null, next: null }, b = { value: null, prev: _, next: null };
      _.next = b, this.head = _, this.tail = b, this.length = 0;
    }
    function g(_, b, x) {
      var k = b.next, S = { value: x, prev: b, next: k };
      return b.next = S, k.prev = S, _.length++, S;
    }
    function v(_, b, x) {
      for (var k = b.next, S = 0; S < x && k !== _.tail; S++)
        k = k.next;
      b.next = k, k.prev = b, _.length -= S;
    }
    function E(_) {
      for (var b = [], x = _.head.next; x !== _.tail; )
        b.push(x.value), x = x.next;
      return b;
    }
    if (!n.document)
      return n.addEventListener && (o.disableWorkerMessageHandler || n.addEventListener("message", function(_) {
        var b = JSON.parse(_.data), x = b.language, k = b.code, S = b.immediateClose;
        n.postMessage(o.highlight(k, o.languages[x], x)), S && n.close();
      }, !1)), o;
    var F = o.util.currentScript();
    F && (o.filename = F.src, F.hasAttribute("data-manual") && (o.manual = !0));
    function z() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var T = document.readyState;
      T === "loading" || T === "interactive" && F && F.defer ? document.addEventListener("DOMContentLoaded", z) : window.requestAnimationFrame ? window.requestAnimationFrame(z) : window.setTimeout(z, 16);
    }
    return o;
  }(e);
  r.exports && (r.exports = t), typeof fl < "u" && (fl.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(n) {
    n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var l = {};
      l["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var o = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      o["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var s = {};
      s[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: o
      }, t.languages.insertBefore("markup", "cdata", s);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(n, a) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: t.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(n) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, n.languages.css.atrule.inside.rest = n.languages.css;
    var i = n.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var n = "Loading…", a = function(F, z) {
      return "✖ Error " + F + " while fetching file: " + z;
    }, i = "✖ Error: File does not exist or is empty", l = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, o = "data-src-status", s = "loading", u = "loaded", f = "failed", d = "pre[data-src]:not([" + o + '="' + u + '"]):not([' + o + '="' + s + '"])';
    function g(F, z, T) {
      var _ = new XMLHttpRequest();
      _.open("GET", F, !0), _.onreadystatechange = function() {
        _.readyState == 4 && (_.status < 400 && _.responseText ? z(_.responseText) : _.status >= 400 ? T(a(_.status, _.statusText)) : T(i));
      }, _.send(null);
    }
    function v(F) {
      var z = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F || "");
      if (z) {
        var T = Number(z[1]), _ = z[2], b = z[3];
        return _ ? b ? [T, Number(b)] : [T, void 0] : [T, T];
      }
    }
    t.hooks.add("before-highlightall", function(F) {
      F.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(F) {
      var z = (
        /** @type {HTMLPreElement} */
        F.element
      );
      if (z.matches(d)) {
        F.code = "", z.setAttribute(o, s);
        var T = z.appendChild(document.createElement("CODE"));
        T.textContent = n;
        var _ = z.getAttribute("data-src"), b = F.language;
        if (b === "none") {
          var x = (/\.(\w+)$/.exec(_) || [, "none"])[1];
          b = l[x] || x;
        }
        t.util.setLanguage(T, b), t.util.setLanguage(z, b);
        var k = t.plugins.autoloader;
        k && k.loadLanguages(b), g(
          _,
          function(S) {
            z.setAttribute(o, u);
            var C = v(z.getAttribute("data-range"));
            if (C) {
              var R = S.split(/\r\n?|\n/g), N = C[0], L = C[1] == null ? R.length : C[1];
              N < 0 && (N += R.length), N = Math.max(0, Math.min(N - 1, R.length)), L < 0 && (L += R.length), L = Math.max(0, Math.min(L, R.length)), S = R.slice(N, L).join(`
`), z.hasAttribute("data-start") || z.setAttribute("data-start", String(N + 1));
            }
            T.textContent = S, t.highlightElement(T);
          },
          function(S) {
            z.setAttribute(o, f), T.textContent = S;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(z) {
        for (var T = (z || document).querySelectorAll(d), _ = 0, b; b = T[_++]; )
          t.highlightElement(b);
      }
    };
    var E = !1;
    t.fileHighlight = function() {
      E || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), E = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Rc);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(r) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  r.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, r.languages.tex = r.languages.latex, r.languages.context = r.languages.latex;
})(Prism);
(function(r) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, n = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  r.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: n.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = r.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = n.variable[1].inside, l = 0; l < a.length; l++)
    i[a[l]] = r.languages.bash[a[l]];
  r.languages.sh = r.languages.bash, r.languages.shell = r.languages.bash;
})(Prism);
new v1();
const Lc = (r) => {
  const e = {};
  for (let t = 0, n = r.length; t < n; t++) {
    const a = r[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, Ic = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], Oc = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], qc = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], Pc = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], Hc = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Uc = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
[
  ...Ic,
  ...Oc.map((r) => `svg:${r}`),
  ...qc.map((r) => `math:${r}`)
], Lc([
  Object.fromEntries(Pc.map((r) => [r, ["*"]])),
  Object.fromEntries(Hc.map((r) => [r, ["svg:*"]])),
  Object.fromEntries(Uc.map((r) => [r, ["math:*"]]))
]);
const {
  SvelteComponent: Vc,
  append_hydration: xa,
  attr: Ct,
  bubble: Gc,
  check_outros: Wc,
  children: Sa,
  claim_component: Yc,
  claim_element: Fa,
  claim_space: jc,
  claim_text: Xc,
  construct_svelte_component: hl,
  create_component: ml,
  destroy_component: dl,
  detach: Hr,
  element: Ea,
  group_outros: Zc,
  init: $c,
  insert_hydration: b1,
  listen: Kc,
  mount_component: pl,
  safe_not_equal: Qc,
  set_data: Jc,
  set_style: cn,
  space: e2,
  text: t2,
  toggle_class: y0,
  transition_in: gl,
  transition_out: vl
} = window.__gradio__svelte__internal;
function bl(r) {
  let e, t;
  return {
    c() {
      e = Ea("span"), t = t2(
        /*label*/
        r[1]
      ), this.h();
    },
    l(n) {
      e = Fa(n, "SPAN", { class: !0 });
      var a = Sa(e);
      t = Xc(
        a,
        /*label*/
        r[1]
      ), a.forEach(Hr), this.h();
    },
    h() {
      Ct(e, "class", "svelte-vk34kx");
    },
    m(n, a) {
      b1(n, e, a), xa(e, t);
    },
    p(n, a) {
      a & /*label*/
      2 && Jc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Hr(e);
    }
  };
}
function r2(r) {
  let e, t, n, a, i, l, o, s = (
    /*show_label*/
    r[2] && bl(r)
  );
  var u = (
    /*Icon*/
    r[0]
  );
  function f(d, g) {
    return {};
  }
  return u && (a = hl(u, f())), {
    c() {
      e = Ea("button"), s && s.c(), t = e2(), n = Ea("div"), a && ml(a.$$.fragment), this.h();
    },
    l(d) {
      e = Fa(d, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var g = Sa(e);
      s && s.l(g), t = jc(g), n = Fa(g, "DIV", { class: !0 });
      var v = Sa(n);
      a && Yc(a.$$.fragment, v), v.forEach(Hr), g.forEach(Hr), this.h();
    },
    h() {
      Ct(n, "class", "svelte-vk34kx"), y0(
        n,
        "small",
        /*size*/
        r[4] === "small"
      ), y0(
        n,
        "large",
        /*size*/
        r[4] === "large"
      ), y0(
        n,
        "medium",
        /*size*/
        r[4] === "medium"
      ), e.disabled = /*disabled*/
      r[7], Ct(
        e,
        "aria-label",
        /*label*/
        r[1]
      ), Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        r[8]
      ), Ct(
        e,
        "title",
        /*label*/
        r[1]
      ), Ct(e, "class", "svelte-vk34kx"), y0(
        e,
        "pending",
        /*pending*/
        r[3]
      ), y0(
        e,
        "padded",
        /*padded*/
        r[5]
      ), y0(
        e,
        "highlight",
        /*highlight*/
        r[6]
      ), y0(
        e,
        "transparent",
        /*transparent*/
        r[9]
      ), cn(e, "color", !/*disabled*/
      r[7] && /*_color*/
      r[11] ? (
        /*_color*/
        r[11]
      ) : "var(--block-label-text-color)"), cn(e, "--bg-color", /*disabled*/
      r[7] ? "auto" : (
        /*background*/
        r[10]
      ));
    },
    m(d, g) {
      b1(d, e, g), s && s.m(e, null), xa(e, t), xa(e, n), a && pl(a, n, null), i = !0, l || (o = Kc(
        e,
        "click",
        /*click_handler*/
        r[13]
      ), l = !0);
    },
    p(d, [g]) {
      if (/*show_label*/
      d[2] ? s ? s.p(d, g) : (s = bl(d), s.c(), s.m(e, t)) : s && (s.d(1), s = null), g & /*Icon*/
      1 && u !== (u = /*Icon*/
      d[0])) {
        if (a) {
          Zc();
          const v = a;
          vl(v.$$.fragment, 1, 0, () => {
            dl(v, 1);
          }), Wc();
        }
        u ? (a = hl(u, f()), ml(a.$$.fragment), gl(a.$$.fragment, 1), pl(a, n, null)) : a = null;
      }
      (!i || g & /*size*/
      16) && y0(
        n,
        "small",
        /*size*/
        d[4] === "small"
      ), (!i || g & /*size*/
      16) && y0(
        n,
        "large",
        /*size*/
        d[4] === "large"
      ), (!i || g & /*size*/
      16) && y0(
        n,
        "medium",
        /*size*/
        d[4] === "medium"
      ), (!i || g & /*disabled*/
      128) && (e.disabled = /*disabled*/
      d[7]), (!i || g & /*label*/
      2) && Ct(
        e,
        "aria-label",
        /*label*/
        d[1]
      ), (!i || g & /*hasPopup*/
      256) && Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        d[8]
      ), (!i || g & /*label*/
      2) && Ct(
        e,
        "title",
        /*label*/
        d[1]
      ), (!i || g & /*pending*/
      8) && y0(
        e,
        "pending",
        /*pending*/
        d[3]
      ), (!i || g & /*padded*/
      32) && y0(
        e,
        "padded",
        /*padded*/
        d[5]
      ), (!i || g & /*highlight*/
      64) && y0(
        e,
        "highlight",
        /*highlight*/
        d[6]
      ), (!i || g & /*transparent*/
      512) && y0(
        e,
        "transparent",
        /*transparent*/
        d[9]
      ), g & /*disabled, _color*/
      2176 && cn(e, "color", !/*disabled*/
      d[7] && /*_color*/
      d[11] ? (
        /*_color*/
        d[11]
      ) : "var(--block-label-text-color)"), g & /*disabled, background*/
      1152 && cn(e, "--bg-color", /*disabled*/
      d[7] ? "auto" : (
        /*background*/
        d[10]
      ));
    },
    i(d) {
      i || (a && gl(a.$$.fragment, d), i = !0);
    },
    o(d) {
      a && vl(a.$$.fragment, d), i = !1;
    },
    d(d) {
      d && Hr(e), s && s.d(), a && dl(a), l = !1, o();
    }
  };
}
function n2(r, e, t) {
  let n, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: o = !1 } = e, { size: s = "small" } = e, { padded: u = !0 } = e, { highlight: f = !1 } = e, { disabled: d = !1 } = e, { hasPopup: g = !1 } = e, { color: v = "var(--block-label-text-color)" } = e, { transparent: E = !1 } = e, { background: F = "var(--block-background-fill)" } = e;
  function z(T) {
    Gc.call(this, r, T);
  }
  return r.$$set = (T) => {
    "Icon" in T && t(0, a = T.Icon), "label" in T && t(1, i = T.label), "show_label" in T && t(2, l = T.show_label), "pending" in T && t(3, o = T.pending), "size" in T && t(4, s = T.size), "padded" in T && t(5, u = T.padded), "highlight" in T && t(6, f = T.highlight), "disabled" in T && t(7, d = T.disabled), "hasPopup" in T && t(8, g = T.hasPopup), "color" in T && t(12, v = T.color), "transparent" in T && t(9, E = T.transparent), "background" in T && t(10, F = T.background);
  }, r.$$.update = () => {
    r.$$.dirty & /*highlight, color*/
    4160 && t(11, n = f ? "var(--color-accent)" : v);
  }, [
    a,
    i,
    l,
    o,
    s,
    u,
    f,
    d,
    g,
    E,
    F,
    n,
    v,
    z
  ];
}
class a2 extends Vc {
  constructor(e) {
    super(), $c(this, e, n2, r2, Qc, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: i2,
  append_hydration: sa,
  attr: $0,
  children: fn,
  claim_svg_element: hn,
  detach: Er,
  init: l2,
  insert_hydration: s2,
  noop: oa,
  safe_not_equal: o2,
  set_style: ct,
  svg_element: mn
} = window.__gradio__svelte__internal;
function u2(r) {
  let e, t, n, a;
  return {
    c() {
      e = mn("svg"), t = mn("g"), n = mn("path"), a = mn("path"), this.h();
    },
    l(i) {
      e = hn(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var l = fn(e);
      t = hn(l, "g", { transform: !0 });
      var o = fn(t);
      n = hn(o, "path", { d: !0, style: !0 }), fn(n).forEach(Er), o.forEach(Er), a = hn(l, "path", { d: !0, style: !0 }), fn(a).forEach(Er), l.forEach(Er), this.h();
    },
    h() {
      $0(n, "d", "M18,6L6.087,17.913"), ct(n, "fill", "none"), ct(n, "fill-rule", "nonzero"), ct(n, "stroke-width", "2px"), $0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), $0(a, "d", "M4.364,4.364L19.636,19.636"), ct(a, "fill", "none"), ct(a, "fill-rule", "nonzero"), ct(a, "stroke-width", "2px"), $0(e, "width", "100%"), $0(e, "height", "100%"), $0(e, "viewBox", "0 0 24 24"), $0(e, "version", "1.1"), $0(e, "xmlns", "http://www.w3.org/2000/svg"), $0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $0(e, "xml:space", "preserve"), $0(e, "stroke", "currentColor"), ct(e, "fill-rule", "evenodd"), ct(e, "clip-rule", "evenodd"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      s2(i, e, l), sa(e, t), sa(t, n), sa(e, a);
    },
    p: oa,
    i: oa,
    o: oa,
    d(i) {
      i && Er(e);
    }
  };
}
class c2 extends i2 {
  constructor(e) {
    super(), l2(this, e, null, u2, o2, {});
  }
}
const f2 = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], yl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
f2.reduce(
  (r, { color: e, primary: t, secondary: n }) => ({
    ...r,
    [e]: {
      primary: yl[e][t],
      secondary: yl[e][n]
    }
  }),
  {}
);
function dr(r) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; r > 1e3 && t < e.length - 1; )
    r /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(r) ? r : r.toFixed(1)) + n;
}
function wn() {
}
function h2(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
const y1 = typeof window < "u";
let wl = y1 ? () => window.performance.now() : () => Date.now(), w1 = y1 ? (r) => requestAnimationFrame(r) : wn;
const vr = /* @__PURE__ */ new Set();
function _1(r) {
  vr.forEach((e) => {
    e.c(r) || (vr.delete(e), e.f());
  }), vr.size !== 0 && w1(_1);
}
function m2(r) {
  let e;
  return vr.size === 0 && w1(_1), {
    promise: new Promise((t) => {
      vr.add(e = { c: r, f: t });
    }),
    abort() {
      vr.delete(e);
    }
  };
}
const fr = [];
function d2(r, e = wn) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function a(o) {
    if (h2(r, o) && (r = o, t)) {
      const s = !fr.length;
      for (const u of n)
        u[1](), fr.push(u, r);
      if (s) {
        for (let u = 0; u < fr.length; u += 2)
          fr[u][0](fr[u + 1]);
        fr.length = 0;
      }
    }
  }
  function i(o) {
    a(o(r));
  }
  function l(o, s = wn) {
    const u = [o, s];
    return n.add(u), n.size === 1 && (t = e(a, i) || wn), o(r), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function _l(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function Ca(r, e, t, n) {
  if (typeof t == "number" || _l(t)) {
    const a = n - t, i = (t - e) / (r.dt || 1 / 60), l = r.opts.stiffness * a, o = r.opts.damping * i, s = (l - o) * r.inv_mass, u = (i + s) * r.dt;
    return Math.abs(u) < r.opts.precision && Math.abs(a) < r.opts.precision ? n : (r.settled = !1, _l(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => Ca(r, e[i], t[i], n[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = Ca(r, e[i], t[i], n[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function kl(r, e = {}) {
  const t = d2(r), { stiffness: n = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, o, s, u = r, f = r, d = 1, g = 0, v = !1;
  function E(z, T = {}) {
    f = z;
    const _ = s = {};
    return r == null || T.hard || F.stiffness >= 1 && F.damping >= 1 ? (v = !0, l = wl(), u = z, t.set(r = f), Promise.resolve()) : (T.soft && (g = 1 / ((T.soft === !0 ? 0.5 : +T.soft) * 60), d = 0), o || (l = wl(), v = !1, o = m2((b) => {
      if (v)
        return v = !1, o = null, !1;
      d = Math.min(d + g, 1);
      const x = {
        inv_mass: d,
        opts: F,
        settled: !0,
        dt: (b - l) * 60 / 1e3
      }, k = Ca(x, u, r, f);
      return l = b, u = r, t.set(r = k), x.settled && (o = null), !x.settled;
    })), new Promise((b) => {
      o.promise.then(() => {
        _ === s && b();
      });
    }));
  }
  const F = {
    set: E,
    update: (z, T) => E(z(f, r), T),
    subscribe: t.subscribe,
    stiffness: n,
    damping: a,
    precision: i
  };
  return F;
}
const {
  SvelteComponent: p2,
  append_hydration: K0,
  attr: de,
  children: N0,
  claim_element: g2,
  claim_svg_element: Q0,
  component_subscribe: Dl,
  detach: A0,
  element: v2,
  init: b2,
  insert_hydration: y2,
  noop: Al,
  safe_not_equal: w2,
  set_style: dn,
  svg_element: J0,
  toggle_class: xl
} = window.__gradio__svelte__internal, { onMount: _2 } = window.__gradio__svelte__internal;
function k2(r) {
  let e, t, n, a, i, l, o, s, u, f, d, g;
  return {
    c() {
      e = v2("div"), t = J0("svg"), n = J0("g"), a = J0("path"), i = J0("path"), l = J0("path"), o = J0("path"), s = J0("g"), u = J0("path"), f = J0("path"), d = J0("path"), g = J0("path"), this.h();
    },
    l(v) {
      e = g2(v, "DIV", { class: !0 });
      var E = N0(e);
      t = Q0(E, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var F = N0(t);
      n = Q0(F, "g", { style: !0 });
      var z = N0(n);
      a = Q0(z, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), N0(a).forEach(A0), i = Q0(z, "path", { d: !0, fill: !0, class: !0 }), N0(i).forEach(A0), l = Q0(z, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), N0(l).forEach(A0), o = Q0(z, "path", { d: !0, fill: !0, class: !0 }), N0(o).forEach(A0), z.forEach(A0), s = Q0(F, "g", { style: !0 });
      var T = N0(s);
      u = Q0(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), N0(u).forEach(A0), f = Q0(T, "path", { d: !0, fill: !0, class: !0 }), N0(f).forEach(A0), d = Q0(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), N0(d).forEach(A0), g = Q0(T, "path", { d: !0, fill: !0, class: !0 }), N0(g).forEach(A0), T.forEach(A0), F.forEach(A0), E.forEach(A0), this.h();
    },
    h() {
      de(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), de(a, "fill", "#FF7C00"), de(a, "fill-opacity", "0.4"), de(a, "class", "svelte-43sxxs"), de(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), de(i, "fill", "#FF7C00"), de(i, "class", "svelte-43sxxs"), de(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), de(l, "fill", "#FF7C00"), de(l, "fill-opacity", "0.4"), de(l, "class", "svelte-43sxxs"), de(o, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), de(o, "fill", "#FF7C00"), de(o, "class", "svelte-43sxxs"), dn(n, "transform", "translate(" + /*$top*/
      r[1][0] + "px, " + /*$top*/
      r[1][1] + "px)"), de(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), de(u, "fill", "#FF7C00"), de(u, "fill-opacity", "0.4"), de(u, "class", "svelte-43sxxs"), de(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), de(f, "fill", "#FF7C00"), de(f, "class", "svelte-43sxxs"), de(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), de(d, "fill", "#FF7C00"), de(d, "fill-opacity", "0.4"), de(d, "class", "svelte-43sxxs"), de(g, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), de(g, "fill", "#FF7C00"), de(g, "class", "svelte-43sxxs"), dn(s, "transform", "translate(" + /*$bottom*/
      r[2][0] + "px, " + /*$bottom*/
      r[2][1] + "px)"), de(t, "viewBox", "-1200 -1200 3000 3000"), de(t, "fill", "none"), de(t, "xmlns", "http://www.w3.org/2000/svg"), de(t, "class", "svelte-43sxxs"), de(e, "class", "svelte-43sxxs"), xl(
        e,
        "margin",
        /*margin*/
        r[0]
      );
    },
    m(v, E) {
      y2(v, e, E), K0(e, t), K0(t, n), K0(n, a), K0(n, i), K0(n, l), K0(n, o), K0(t, s), K0(s, u), K0(s, f), K0(s, d), K0(s, g);
    },
    p(v, [E]) {
      E & /*$top*/
      2 && dn(n, "transform", "translate(" + /*$top*/
      v[1][0] + "px, " + /*$top*/
      v[1][1] + "px)"), E & /*$bottom*/
      4 && dn(s, "transform", "translate(" + /*$bottom*/
      v[2][0] + "px, " + /*$bottom*/
      v[2][1] + "px)"), E & /*margin*/
      1 && xl(
        e,
        "margin",
        /*margin*/
        v[0]
      );
    },
    i: Al,
    o: Al,
    d(v) {
      v && A0(e);
    }
  };
}
function D2(r, e, t) {
  let n, a;
  var i = this && this.__awaiter || function(v, E, F, z) {
    function T(_) {
      return _ instanceof F ? _ : new F(function(b) {
        b(_);
      });
    }
    return new (F || (F = Promise))(function(_, b) {
      function x(C) {
        try {
          S(z.next(C));
        } catch (R) {
          b(R);
        }
      }
      function k(C) {
        try {
          S(z.throw(C));
        } catch (R) {
          b(R);
        }
      }
      function S(C) {
        C.done ? _(C.value) : T(C.value).then(x, k);
      }
      S((z = z.apply(v, E || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const o = kl([0, 0]);
  Dl(r, o, (v) => t(1, n = v));
  const s = kl([0, 0]);
  Dl(r, s, (v) => t(2, a = v));
  let u;
  function f() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([o.set([125, 140]), s.set([-125, -140])]), yield Promise.all([o.set([-125, 140]), s.set([125, -140])]), yield Promise.all([o.set([-125, 0]), s.set([125, -0])]), yield Promise.all([o.set([125, 0]), s.set([-125, 0])]);
    });
  }
  function d() {
    return i(this, void 0, void 0, function* () {
      yield f(), u || d();
    });
  }
  function g() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([o.set([125, 0]), s.set([-125, 0])]), d();
    });
  }
  return _2(() => (g(), () => u = !0)), r.$$set = (v) => {
    "margin" in v && t(0, l = v.margin);
  }, [l, n, a, o, s];
}
class A2 extends p2 {
  constructor(e) {
    super(), b2(this, e, D2, k2, w2, { margin: 0 });
  }
}
const {
  SvelteComponent: x2,
  append_hydration: er,
  attr: it,
  binding_callbacks: Sl,
  check_outros: Ta,
  children: dt,
  claim_component: k1,
  claim_element: pt,
  claim_space: O0,
  claim_text: Ne,
  create_component: D1,
  create_slot: A1,
  destroy_component: x1,
  destroy_each: S1,
  detach: K,
  element: gt,
  empty: H0,
  ensure_array_like: Nn,
  get_all_dirty_from_scope: F1,
  get_slot_changes: E1,
  group_outros: Ma,
  init: S2,
  insert_hydration: se,
  mount_component: C1,
  noop: za,
  safe_not_equal: F2,
  set_data: U0,
  set_style: Vt,
  space: q0,
  text: Re,
  toggle_class: L0,
  transition_in: at,
  transition_out: vt,
  update_slot_base: T1
} = window.__gradio__svelte__internal, { tick: E2 } = window.__gradio__svelte__internal, { onDestroy: C2 } = window.__gradio__svelte__internal, { createEventDispatcher: T2 } = window.__gradio__svelte__internal, M2 = (r) => ({}), Fl = (r) => ({}), z2 = (r) => ({}), El = (r) => ({});
function Cl(r, e, t) {
  const n = r.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Tl(r, e, t) {
  const n = r.slice();
  return n[41] = e[t], n;
}
function B2(r) {
  let e, t, n, a, i = (
    /*i18n*/
    r[1]("common.error") + ""
  ), l, o, s;
  t = new a2({
    props: {
      Icon: c2,
      label: (
        /*i18n*/
        r[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    r[32]
  );
  const u = (
    /*#slots*/
    r[30].error
  ), f = A1(
    u,
    r,
    /*$$scope*/
    r[29],
    Fl
  );
  return {
    c() {
      e = gt("div"), D1(t.$$.fragment), n = q0(), a = gt("span"), l = Re(i), o = q0(), f && f.c(), this.h();
    },
    l(d) {
      e = pt(d, "DIV", { class: !0 });
      var g = dt(e);
      k1(t.$$.fragment, g), g.forEach(K), n = O0(d), a = pt(d, "SPAN", { class: !0 });
      var v = dt(a);
      l = Ne(v, i), v.forEach(K), o = O0(d), f && f.l(d), this.h();
    },
    h() {
      it(e, "class", "clear-status svelte-17v219f"), it(a, "class", "error svelte-17v219f");
    },
    m(d, g) {
      se(d, e, g), C1(t, e, null), se(d, n, g), se(d, a, g), er(a, l), se(d, o, g), f && f.m(d, g), s = !0;
    },
    p(d, g) {
      const v = {};
      g[0] & /*i18n*/
      2 && (v.label = /*i18n*/
      d[1]("common.clear")), t.$set(v), (!s || g[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      d[1]("common.error") + "") && U0(l, i), f && f.p && (!s || g[0] & /*$$scope*/
      536870912) && T1(
        f,
        u,
        d,
        /*$$scope*/
        d[29],
        s ? E1(
          u,
          /*$$scope*/
          d[29],
          g,
          M2
        ) : F1(
          /*$$scope*/
          d[29]
        ),
        Fl
      );
    },
    i(d) {
      s || (at(t.$$.fragment, d), at(f, d), s = !0);
    },
    o(d) {
      vt(t.$$.fragment, d), vt(f, d), s = !1;
    },
    d(d) {
      d && (K(e), K(n), K(a), K(o)), x1(t), f && f.d(d);
    }
  };
}
function N2(r) {
  let e, t, n, a, i, l, o, s, u, f = (
    /*variant*/
    r[8] === "default" && /*show_eta_bar*/
    r[18] && /*show_progress*/
    r[6] === "full" && Ml(r)
  );
  function d(b, x) {
    if (
      /*progress*/
      b[7]
    ) return I2;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return L2;
    if (
      /*queue_position*/
      b[2] === 0
    ) return R2;
  }
  let g = d(r), v = g && g(r), E = (
    /*timer*/
    r[5] && Nl(r)
  );
  const F = [H2, P2], z = [];
  function T(b, x) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = T(r)) && (l = z[i] = F[i](r));
  let _ = !/*timer*/
  r[5] && Hl(r);
  return {
    c() {
      f && f.c(), e = q0(), t = gt("div"), v && v.c(), n = q0(), E && E.c(), a = q0(), l && l.c(), o = q0(), _ && _.c(), s = H0(), this.h();
    },
    l(b) {
      f && f.l(b), e = O0(b), t = pt(b, "DIV", { class: !0 });
      var x = dt(t);
      v && v.l(x), n = O0(x), E && E.l(x), x.forEach(K), a = O0(b), l && l.l(b), o = O0(b), _ && _.l(b), s = H0(), this.h();
    },
    h() {
      it(t, "class", "progress-text svelte-17v219f"), L0(
        t,
        "meta-text-center",
        /*variant*/
        r[8] === "center"
      ), L0(
        t,
        "meta-text",
        /*variant*/
        r[8] === "default"
      );
    },
    m(b, x) {
      f && f.m(b, x), se(b, e, x), se(b, t, x), v && v.m(t, null), er(t, n), E && E.m(t, null), se(b, a, x), ~i && z[i].m(b, x), se(b, o, x), _ && _.m(b, x), se(b, s, x), u = !0;
    },
    p(b, x) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, x) : (f = Ml(b), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), g === (g = d(b)) && v ? v.p(b, x) : (v && v.d(1), v = g && g(b), v && (v.c(), v.m(t, n))), /*timer*/
      b[5] ? E ? E.p(b, x) : (E = Nl(b), E.c(), E.m(t, null)) : E && (E.d(1), E = null), (!u || x[0] & /*variant*/
      256) && L0(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!u || x[0] & /*variant*/
      256) && L0(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let k = i;
      i = T(b), i === k ? ~i && z[i].p(b, x) : (l && (Ma(), vt(z[k], 1, 1, () => {
        z[k] = null;
      }), Ta()), ~i ? (l = z[i], l ? l.p(b, x) : (l = z[i] = F[i](b), l.c()), at(l, 1), l.m(o.parentNode, o)) : l = null), /*timer*/
      b[5] ? _ && (Ma(), vt(_, 1, 1, () => {
        _ = null;
      }), Ta()) : _ ? (_.p(b, x), x[0] & /*timer*/
      32 && at(_, 1)) : (_ = Hl(b), _.c(), at(_, 1), _.m(s.parentNode, s));
    },
    i(b) {
      u || (at(l), at(_), u = !0);
    },
    o(b) {
      vt(l), vt(_), u = !1;
    },
    d(b) {
      b && (K(e), K(t), K(a), K(o), K(s)), f && f.d(b), v && v.d(), E && E.d(), ~i && z[i].d(b), _ && _.d(b);
    }
  };
}
function Ml(r) {
  let e, t = `translateX(${/*eta_level*/
  (r[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = gt("div"), this.h();
    },
    l(n) {
      e = pt(n, "DIV", { class: !0 }), dt(e).forEach(K), this.h();
    },
    h() {
      it(e, "class", "eta-bar svelte-17v219f"), Vt(e, "transform", t);
    },
    m(n, a) {
      se(n, e, a);
    },
    p(n, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Vt(e, "transform", t);
    },
    d(n) {
      n && K(e);
    }
  };
}
function R2(r) {
  let e;
  return {
    c() {
      e = Re("processing |");
    },
    l(t) {
      e = Ne(t, "processing |");
    },
    m(t, n) {
      se(t, e, n);
    },
    p: za,
    d(t) {
      t && K(e);
    }
  };
}
function L2(r) {
  let e, t = (
    /*queue_position*/
    r[2] + 1 + ""
  ), n, a, i, l;
  return {
    c() {
      e = Re("queue: "), n = Re(t), a = Re("/"), i = Re(
        /*queue_size*/
        r[3]
      ), l = Re(" |");
    },
    l(o) {
      e = Ne(o, "queue: "), n = Ne(o, t), a = Ne(o, "/"), i = Ne(
        o,
        /*queue_size*/
        r[3]
      ), l = Ne(o, " |");
    },
    m(o, s) {
      se(o, e, s), se(o, n, s), se(o, a, s), se(o, i, s), se(o, l, s);
    },
    p(o, s) {
      s[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      o[2] + 1 + "") && U0(n, t), s[0] & /*queue_size*/
      8 && U0(
        i,
        /*queue_size*/
        o[3]
      );
    },
    d(o) {
      o && (K(e), K(n), K(a), K(i), K(l));
    }
  };
}
function I2(r) {
  let e, t = Nn(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = Bl(Tl(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = H0();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = H0();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      se(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = Nn(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = Tl(a, t, l);
          n[l] ? n[l].p(o, i) : (n[l] = Bl(o), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && K(e), S1(n, a);
    }
  };
}
function zl(r) {
  let e, t = (
    /*p*/
    r[41].unit + ""
  ), n, a, i = " ", l;
  function o(f, d) {
    return (
      /*p*/
      f[41].length != null ? q2 : O2
    );
  }
  let s = o(r), u = s(r);
  return {
    c() {
      u.c(), e = q0(), n = Re(t), a = Re(" | "), l = Re(i);
    },
    l(f) {
      u.l(f), e = O0(f), n = Ne(f, t), a = Ne(f, " | "), l = Ne(f, i);
    },
    m(f, d) {
      u.m(f, d), se(f, e, d), se(f, n, d), se(f, a, d), se(f, l, d);
    },
    p(f, d) {
      s === (s = o(f)) && u ? u.p(f, d) : (u.d(1), u = s(f), u && (u.c(), u.m(e.parentNode, e))), d[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && U0(n, t);
    },
    d(f) {
      f && (K(e), K(n), K(a), K(l)), u.d(f);
    }
  };
}
function O2(r) {
  let e = dr(
    /*p*/
    r[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Re(e);
    },
    l(n) {
      t = Ne(n, e);
    },
    m(n, a) {
      se(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = dr(
        /*p*/
        n[41].index || 0
      ) + "") && U0(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function q2(r) {
  let e = dr(
    /*p*/
    r[41].index || 0
  ) + "", t, n, a = dr(
    /*p*/
    r[41].length
  ) + "", i;
  return {
    c() {
      t = Re(e), n = Re("/"), i = Re(a);
    },
    l(l) {
      t = Ne(l, e), n = Ne(l, "/"), i = Ne(l, a);
    },
    m(l, o) {
      se(l, t, o), se(l, n, o), se(l, i, o);
    },
    p(l, o) {
      o[0] & /*progress*/
      128 && e !== (e = dr(
        /*p*/
        l[41].index || 0
      ) + "") && U0(t, e), o[0] & /*progress*/
      128 && a !== (a = dr(
        /*p*/
        l[41].length
      ) + "") && U0(i, a);
    },
    d(l) {
      l && (K(t), K(n), K(i));
    }
  };
}
function Bl(r) {
  let e, t = (
    /*p*/
    r[41].index != null && zl(r)
  );
  return {
    c() {
      t && t.c(), e = H0();
    },
    l(n) {
      t && t.l(n), e = H0();
    },
    m(n, a) {
      t && t.m(n, a), se(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[41].index != null ? t ? t.p(n, a) : (t = zl(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function Nl(r) {
  let e, t = (
    /*eta*/
    r[0] ? `/${/*formatted_eta*/
    r[19]}` : ""
  ), n, a;
  return {
    c() {
      e = Re(
        /*formatted_timer*/
        r[20]
      ), n = Re(t), a = Re("s");
    },
    l(i) {
      e = Ne(
        i,
        /*formatted_timer*/
        r[20]
      ), n = Ne(i, t), a = Ne(i, "s");
    },
    m(i, l) {
      se(i, e, l), se(i, n, l), se(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && U0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && U0(n, t);
    },
    d(i) {
      i && (K(e), K(n), K(a));
    }
  };
}
function P2(r) {
  let e, t;
  return e = new A2({
    props: { margin: (
      /*variant*/
      r[8] === "default"
    ) }
  }), {
    c() {
      D1(e.$$.fragment);
    },
    l(n) {
      k1(e.$$.fragment, n);
    },
    m(n, a) {
      C1(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      n[8] === "default"), e.$set(i);
    },
    i(n) {
      t || (at(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      x1(e, n);
    }
  };
}
function H2(r) {
  let e, t, n, a, i, l = `${/*last_progress_level*/
  r[15] * 100}%`, o = (
    /*progress*/
    r[7] != null && Rl(r)
  );
  return {
    c() {
      e = gt("div"), t = gt("div"), o && o.c(), n = q0(), a = gt("div"), i = gt("div"), this.h();
    },
    l(s) {
      e = pt(s, "DIV", { class: !0 });
      var u = dt(e);
      t = pt(u, "DIV", { class: !0 });
      var f = dt(t);
      o && o.l(f), f.forEach(K), n = O0(u), a = pt(u, "DIV", { class: !0 });
      var d = dt(a);
      i = pt(d, "DIV", { class: !0 }), dt(i).forEach(K), d.forEach(K), u.forEach(K), this.h();
    },
    h() {
      it(t, "class", "progress-level-inner svelte-17v219f"), it(i, "class", "progress-bar svelte-17v219f"), Vt(i, "width", l), it(a, "class", "progress-bar-wrap svelte-17v219f"), it(e, "class", "progress-level svelte-17v219f");
    },
    m(s, u) {
      se(s, e, u), er(e, t), o && o.m(t, null), er(e, n), er(e, a), er(a, i), r[31](i);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? o ? o.p(s, u) : (o = Rl(s), o.c(), o.m(t, null)) : o && (o.d(1), o = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      s[15] * 100}%`) && Vt(i, "width", l);
    },
    i: za,
    o: za,
    d(s) {
      s && K(e), o && o.d(), r[31](null);
    }
  };
}
function Rl(r) {
  let e, t = Nn(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = Pl(Cl(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = H0();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = H0();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      se(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Nn(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = Cl(a, t, l);
          n[l] ? n[l].p(o, i) : (n[l] = Pl(o), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && K(e), S1(n, a);
    }
  };
}
function Ll(r) {
  let e, t, n, a, i = (
    /*i*/
    r[43] !== 0 && U2()
  ), l = (
    /*p*/
    r[41].desc != null && Il(r)
  ), o = (
    /*p*/
    r[41].desc != null && /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[43]
    ] != null && Ol()
  ), s = (
    /*progress_level*/
    r[14] != null && ql(r)
  );
  return {
    c() {
      i && i.c(), e = q0(), l && l.c(), t = q0(), o && o.c(), n = q0(), s && s.c(), a = H0();
    },
    l(u) {
      i && i.l(u), e = O0(u), l && l.l(u), t = O0(u), o && o.l(u), n = O0(u), s && s.l(u), a = H0();
    },
    m(u, f) {
      i && i.m(u, f), se(u, e, f), l && l.m(u, f), se(u, t, f), o && o.m(u, f), se(u, n, f), s && s.m(u, f), se(u, a, f);
    },
    p(u, f) {
      /*p*/
      u[41].desc != null ? l ? l.p(u, f) : (l = Il(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[41].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[43]
      ] != null ? o || (o = Ol(), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, f) : (s = ql(u), s.c(), s.m(a.parentNode, a)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (K(e), K(t), K(n), K(a)), i && i.d(u), l && l.d(u), o && o.d(u), s && s.d(u);
    }
  };
}
function U2(r) {
  let e;
  return {
    c() {
      e = Re(" /");
    },
    l(t) {
      e = Ne(t, " /");
    },
    m(t, n) {
      se(t, e, n);
    },
    d(t) {
      t && K(e);
    }
  };
}
function Il(r) {
  let e = (
    /*p*/
    r[41].desc + ""
  ), t;
  return {
    c() {
      t = Re(e);
    },
    l(n) {
      t = Ne(n, e);
    },
    m(n, a) {
      se(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && U0(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function Ol(r) {
  let e;
  return {
    c() {
      e = Re("-");
    },
    l(t) {
      e = Ne(t, "-");
    },
    m(t, n) {
      se(t, e, n);
    },
    d(t) {
      t && K(e);
    }
  };
}
function ql(r) {
  let e = (100 * /*progress_level*/
  (r[14][
    /*i*/
    r[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Re(e), n = Re("%");
    },
    l(a) {
      t = Ne(a, e), n = Ne(a, "%");
    },
    m(a, i) {
      se(a, t, i), se(a, n, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && U0(t, e);
    },
    d(a) {
      a && (K(t), K(n));
    }
  };
}
function Pl(r) {
  let e, t = (
    /*p*/
    (r[41].desc != null || /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[43]
    ] != null) && Ll(r)
  );
  return {
    c() {
      t && t.c(), e = H0();
    },
    l(n) {
      t && t.l(n), e = H0();
    },
    m(n, a) {
      t && t.m(n, a), se(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, a) : (t = Ll(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function Hl(r) {
  let e, t, n, a;
  const i = (
    /*#slots*/
    r[30]["additional-loading-text"]
  ), l = A1(
    i,
    r,
    /*$$scope*/
    r[29],
    El
  );
  return {
    c() {
      e = gt("p"), t = Re(
        /*loading_text*/
        r[9]
      ), n = q0(), l && l.c(), this.h();
    },
    l(o) {
      e = pt(o, "P", { class: !0 });
      var s = dt(e);
      t = Ne(
        s,
        /*loading_text*/
        r[9]
      ), s.forEach(K), n = O0(o), l && l.l(o), this.h();
    },
    h() {
      it(e, "class", "loading svelte-17v219f");
    },
    m(o, s) {
      se(o, e, s), er(e, t), se(o, n, s), l && l.m(o, s), a = !0;
    },
    p(o, s) {
      (!a || s[0] & /*loading_text*/
      512) && U0(
        t,
        /*loading_text*/
        o[9]
      ), l && l.p && (!a || s[0] & /*$$scope*/
      536870912) && T1(
        l,
        i,
        o,
        /*$$scope*/
        o[29],
        a ? E1(
          i,
          /*$$scope*/
          o[29],
          s,
          z2
        ) : F1(
          /*$$scope*/
          o[29]
        ),
        El
      );
    },
    i(o) {
      a || (at(l, o), a = !0);
    },
    o(o) {
      vt(l, o), a = !1;
    },
    d(o) {
      o && (K(e), K(n)), l && l.d(o);
    }
  };
}
function V2(r) {
  let e, t, n, a, i;
  const l = [N2, B2], o = [];
  function s(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = s(r)) && (n = o[t] = l[t](r)), {
    c() {
      e = gt("div"), n && n.c(), this.h();
    },
    l(u) {
      e = pt(u, "DIV", { class: !0 });
      var f = dt(e);
      n && n.l(f), f.forEach(K), this.h();
    },
    h() {
      it(e, "class", a = "wrap " + /*variant*/
      r[8] + " " + /*show_progress*/
      r[6] + " svelte-17v219f"), L0(e, "hide", !/*status*/
      r[4] || /*status*/
      r[4] === "complete" || /*show_progress*/
      r[6] === "hidden" || /*status*/
      r[4] == "streaming"), L0(
        e,
        "translucent",
        /*variant*/
        r[8] === "center" && /*status*/
        (r[4] === "pending" || /*status*/
        r[4] === "error") || /*translucent*/
        r[11] || /*show_progress*/
        r[6] === "minimal"
      ), L0(
        e,
        "generating",
        /*status*/
        r[4] === "generating" && /*show_progress*/
        r[6] === "full"
      ), L0(
        e,
        "border",
        /*border*/
        r[12]
      ), Vt(
        e,
        "position",
        /*absolute*/
        r[10] ? "absolute" : "static"
      ), Vt(
        e,
        "padding",
        /*absolute*/
        r[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      se(u, e, f), ~t && o[t].m(e, null), r[33](e), i = !0;
    },
    p(u, f) {
      let d = t;
      t = s(u), t === d ? ~t && o[t].p(u, f) : (n && (Ma(), vt(o[d], 1, 1, () => {
        o[d] = null;
      }), Ta()), ~t ? (n = o[t], n ? n.p(u, f) : (n = o[t] = l[t](u), n.c()), at(n, 1), n.m(e, null)) : n = null), (!i || f[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && it(e, "class", a), (!i || f[0] & /*variant, show_progress, status, show_progress*/
      336) && L0(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && L0(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || f[0] & /*variant, show_progress, status, show_progress*/
      336) && L0(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || f[0] & /*variant, show_progress, border*/
      4416) && L0(
        e,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && Vt(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Vt(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      i || (at(n), i = !0);
    },
    o(u) {
      vt(n), i = !1;
    },
    d(u) {
      u && K(e), ~t && o[t].d(), r[33](null);
    }
  };
}
var G2 = function(r, e, t, n) {
  function a(i) {
    return i instanceof t ? i : new t(function(l) {
      l(i);
    });
  }
  return new (t || (t = Promise))(function(i, l) {
    function o(f) {
      try {
        u(n.next(f));
      } catch (d) {
        l(d);
      }
    }
    function s(f) {
      try {
        u(n.throw(f));
      } catch (d) {
        l(d);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(o, s);
    }
    u((n = n.apply(r, e || [])).next());
  });
};
let pn = [], ua = !1;
const W2 = typeof window < "u", M1 = W2 ? window.requestAnimationFrame : (r) => {
};
function Y2(r) {
  return G2(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (pn.push(e), !ua) ua = !0;
      else return;
      yield E2(), M1(() => {
        let n = [0, 0];
        for (let a = 0; a < pn.length; a++) {
          const l = pn[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= n[0]) && (n[0] = l.top + window.scrollY, n[1] = a);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), ua = !1, pn = [];
      });
    }
  });
}
function j2(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = T2();
  let { i18n: o } = e, { eta: s = null } = e, { queue_position: u } = e, { queue_size: f } = e, { status: d } = e, { scroll_to_output: g = !1 } = e, { timer: v = !0 } = e, { show_progress: E = "full" } = e, { message: F = null } = e, { progress: z = null } = e, { variant: T = "default" } = e, { loading_text: _ = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: x = !1 } = e, { border: k = !1 } = e, { autoscroll: S } = e, C, R = !1, N = 0, L = 0, H = null, G = null, ie = 0, $ = null, V, Z = null, me = !0;
  const be = () => {
    t(0, s = t(27, H = t(19, fe = null))), t(25, N = performance.now()), t(26, L = 0), R = !0, Le();
  };
  function Le() {
    M1(() => {
      t(26, L = (performance.now() - N) / 1e3), R && Le();
    });
  }
  function Fe() {
    t(26, L = 0), t(0, s = t(27, H = t(19, fe = null))), R && (R = !1);
  }
  C2(() => {
    R && Fe();
  });
  let fe = null;
  function ve(q) {
    Sl[q ? "unshift" : "push"](() => {
      Z = q, t(16, Z), t(7, z), t(14, $), t(15, V);
    });
  }
  const ye = () => {
    l("clear_status");
  };
  function je(q) {
    Sl[q ? "unshift" : "push"](() => {
      C = q, t(13, C);
    });
  }
  return r.$$set = (q) => {
    "i18n" in q && t(1, o = q.i18n), "eta" in q && t(0, s = q.eta), "queue_position" in q && t(2, u = q.queue_position), "queue_size" in q && t(3, f = q.queue_size), "status" in q && t(4, d = q.status), "scroll_to_output" in q && t(22, g = q.scroll_to_output), "timer" in q && t(5, v = q.timer), "show_progress" in q && t(6, E = q.show_progress), "message" in q && t(23, F = q.message), "progress" in q && t(7, z = q.progress), "variant" in q && t(8, T = q.variant), "loading_text" in q && t(9, _ = q.loading_text), "absolute" in q && t(10, b = q.absolute), "translucent" in q && t(11, x = q.translucent), "border" in q && t(12, k = q.border), "autoscroll" in q && t(24, S = q.autoscroll), "$$scope" in q && t(29, i = q.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (s === null && t(0, s = H), s != null && H !== s && (t(28, G = (performance.now() - N) / 1e3 + s), t(19, fe = G.toFixed(1)), t(27, H = s))), r.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, ie = G === null || G <= 0 || !L ? null : Math.min(L / G, 1)), r.$$.dirty[0] & /*progress*/
    128 && z != null && t(18, me = !1), r.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (z != null ? t(14, $ = z.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, $ = null), $ ? (t(15, V = $[$.length - 1]), Z && (V === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, V = void 0)), r.$$.dirty[0] & /*status*/
    16 && (d === "pending" ? be() : Fe()), r.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && g && (d === "pending" || d === "complete") && Y2(C, S), r.$$.dirty[0] & /*status, message*/
    8388624, r.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = L.toFixed(1));
  }, [
    s,
    o,
    u,
    f,
    d,
    v,
    E,
    z,
    T,
    _,
    b,
    x,
    k,
    C,
    $,
    V,
    Z,
    ie,
    me,
    fe,
    n,
    l,
    g,
    F,
    S,
    N,
    L,
    H,
    G,
    i,
    a,
    ve,
    ye,
    je
  ];
}
class X2 extends x2 {
  constructor(e) {
    super(), S2(
      this,
      e,
      j2,
      V2,
      F2,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
/*! @license DOMPurify 3.2.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.2/LICENSE */
const {
  entries: z1,
  setPrototypeOf: Ul,
  isFrozen: Z2,
  getPrototypeOf: $2,
  getOwnPropertyDescriptor: K2
} = Object;
let {
  freeze: d0,
  seal: V0,
  create: B1
} = Object, {
  apply: Ba,
  construct: Na
} = typeof Reflect < "u" && Reflect;
d0 || (d0 = function(e) {
  return e;
});
V0 || (V0 = function(e) {
  return e;
});
Ba || (Ba = function(e, t, n) {
  return e.apply(t, n);
});
Na || (Na = function(e, t) {
  return new e(...t);
});
const gn = E0(Array.prototype.forEach), Vl = E0(Array.prototype.pop), Cr = E0(Array.prototype.push), _n = E0(String.prototype.toLowerCase), ca = E0(String.prototype.toString), Gl = E0(String.prototype.match), Tr = E0(String.prototype.replace), Q2 = E0(String.prototype.indexOf), J2 = E0(String.prototype.trim), et = E0(Object.prototype.hasOwnProperty), f0 = E0(RegExp.prototype.test), Mr = ef(TypeError);
function E0(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    return Ba(r, e, n);
  };
}
function ef(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Na(r, t);
  };
}
function he(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _n;
  Ul && Ul(r, null);
  let n = e.length;
  for (; n--; ) {
    let a = e[n];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (Z2(e) || (e[n] = i), a = i);
    }
    r[a] = !0;
  }
  return r;
}
function tf(r) {
  for (let e = 0; e < r.length; e++)
    et(r, e) || (r[e] = null);
  return r;
}
function Kt(r) {
  const e = B1(null);
  for (const [t, n] of z1(r))
    et(r, t) && (Array.isArray(n) ? e[t] = tf(n) : n && typeof n == "object" && n.constructor === Object ? e[t] = Kt(n) : e[t] = n);
  return e;
}
function zr(r, e) {
  for (; r !== null; ) {
    const n = K2(r, e);
    if (n) {
      if (n.get)
        return E0(n.get);
      if (typeof n.value == "function")
        return E0(n.value);
    }
    r = $2(r);
  }
  function t() {
    return null;
  }
  return t;
}
const Wl = d0(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fa = d0(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ha = d0(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rf = d0(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ma = d0(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nf = d0(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yl = d0(["#text"]), jl = d0(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), da = d0(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xl = d0(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vn = d0(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), af = V0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lf = V0(/<%[\w\W]*|[\w\W]*%>/gm), sf = V0(/\${[\w\W]*}/gm), of = V0(/^data-[\-\w.\u00B7-\uFFFF]/), uf = V0(/^aria-[\-\w]+$/), N1 = V0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cf = V0(/^(?:\w+script|data):/i), ff = V0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), R1 = V0(/^html$/i), hf = V0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: uf,
  ATTR_WHITESPACE: ff,
  CUSTOM_ELEMENT: hf,
  DATA_ATTR: of,
  DOCTYPE_NAME: R1,
  ERB_EXPR: lf,
  IS_ALLOWED_URI: N1,
  IS_SCRIPT_OR_DATA: cf,
  MUSTACHE_EXPR: af,
  TMPLIT_EXPR: sf
});
const Br = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, mf = function() {
  return typeof window > "u" ? null : window;
}, df = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (n = t.getAttribute(a));
  const i = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, $l = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function L1() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mf();
  const e = (J) => L1(J);
  if (e.version = "3.2.2", e.removed = [], !r || !r.document || r.document.nodeType !== Br.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = r;
  const n = t, a = n.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: o,
    Element: s,
    NodeFilter: u,
    NamedNodeMap: f = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: g,
    trustedTypes: v
  } = r, E = s.prototype, F = zr(E, "cloneNode"), z = zr(E, "remove"), T = zr(E, "nextSibling"), _ = zr(E, "childNodes"), b = zr(E, "parentNode");
  if (typeof l == "function") {
    const J = t.createElement("template");
    J.content && J.content.ownerDocument && (t = J.content.ownerDocument);
  }
  let x, k = "";
  const {
    implementation: S,
    createNodeIterator: C,
    createDocumentFragment: R,
    getElementsByTagName: N
  } = t, {
    importNode: L
  } = n;
  let H = $l();
  e.isSupported = typeof z1 == "function" && typeof b == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: G,
    ERB_EXPR: ie,
    TMPLIT_EXPR: $,
    DATA_ATTR: V,
    ARIA_ATTR: Z,
    IS_SCRIPT_OR_DATA: me,
    ATTR_WHITESPACE: be,
    CUSTOM_ELEMENT: Le
  } = Zl;
  let {
    IS_ALLOWED_URI: Fe
  } = Zl, fe = null;
  const ve = he({}, [...Wl, ...fa, ...ha, ...ma, ...Yl]);
  let ye = null;
  const je = he({}, [...jl, ...da, ...Xl, ...vn]);
  let q = Object.seal(B1(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Qe = null, Ie = null, He = !0, o0 = !0, Xe = !1, n0 = !0, g0 = !1, k0 = !0, Je = !1, a0 = !1, M0 = !1, z0 = !1, W0 = !1, Y0 = !1, Qr = !0, B = !1;
  const ue = "user-content-";
  let Ee = !0, De = !1, i0 = {}, Ue = null;
  const D0 = he({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let lt = null;
  const It = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let j0 = null;
  const v0 = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), X0 = "http://www.w3.org/1998/Math/MathML", st = "http://www.w3.org/2000/svg", Z0 = "http://www.w3.org/1999/xhtml";
  let Ot = Z0, kr = !1, Dr = null;
  const Ar = he({}, [X0, st, Z0], ca);
  let qt = he({}, ["mi", "mo", "mn", "ms", "mtext"]), le = he({}, ["annotation-xml"]);
  const V1 = he({}, ["title", "style", "font", "a", "script"]);
  let xr = null;
  const G1 = ["application/xhtml+xml", "text/html"], W1 = "text/html";
  let Ke = null, ur = null;
  const Y1 = t.createElement("form"), mi = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Xn = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ur && ur === A)) {
      if ((!A || typeof A != "object") && (A = {}), A = Kt(A), xr = // eslint-disable-next-line unicorn/prefer-includes
      G1.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? W1 : A.PARSER_MEDIA_TYPE, Ke = xr === "application/xhtml+xml" ? ca : _n, fe = et(A, "ALLOWED_TAGS") ? he({}, A.ALLOWED_TAGS, Ke) : ve, ye = et(A, "ALLOWED_ATTR") ? he({}, A.ALLOWED_ATTR, Ke) : je, Dr = et(A, "ALLOWED_NAMESPACES") ? he({}, A.ALLOWED_NAMESPACES, ca) : Ar, j0 = et(A, "ADD_URI_SAFE_ATTR") ? he(Kt(v0), A.ADD_URI_SAFE_ATTR, Ke) : v0, lt = et(A, "ADD_DATA_URI_TAGS") ? he(Kt(It), A.ADD_DATA_URI_TAGS, Ke) : It, Ue = et(A, "FORBID_CONTENTS") ? he({}, A.FORBID_CONTENTS, Ke) : D0, Qe = et(A, "FORBID_TAGS") ? he({}, A.FORBID_TAGS, Ke) : {}, Ie = et(A, "FORBID_ATTR") ? he({}, A.FORBID_ATTR, Ke) : {}, i0 = et(A, "USE_PROFILES") ? A.USE_PROFILES : !1, He = A.ALLOW_ARIA_ATTR !== !1, o0 = A.ALLOW_DATA_ATTR !== !1, Xe = A.ALLOW_UNKNOWN_PROTOCOLS || !1, n0 = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, g0 = A.SAFE_FOR_TEMPLATES || !1, k0 = A.SAFE_FOR_XML !== !1, Je = A.WHOLE_DOCUMENT || !1, z0 = A.RETURN_DOM || !1, W0 = A.RETURN_DOM_FRAGMENT || !1, Y0 = A.RETURN_TRUSTED_TYPE || !1, M0 = A.FORCE_BODY || !1, Qr = A.SANITIZE_DOM !== !1, B = A.SANITIZE_NAMED_PROPS || !1, Ee = A.KEEP_CONTENT !== !1, De = A.IN_PLACE || !1, Fe = A.ALLOWED_URI_REGEXP || N1, Ot = A.NAMESPACE || Z0, qt = A.MATHML_TEXT_INTEGRATION_POINTS || qt, le = A.HTML_INTEGRATION_POINTS || le, q = A.CUSTOM_ELEMENT_HANDLING || {}, A.CUSTOM_ELEMENT_HANDLING && mi(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = A.CUSTOM_ELEMENT_HANDLING.tagNameCheck), A.CUSTOM_ELEMENT_HANDLING && mi(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), A.CUSTOM_ELEMENT_HANDLING && typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), g0 && (o0 = !1), W0 && (z0 = !0), i0 && (fe = he({}, Yl), ye = [], i0.html === !0 && (he(fe, Wl), he(ye, jl)), i0.svg === !0 && (he(fe, fa), he(ye, da), he(ye, vn)), i0.svgFilters === !0 && (he(fe, ha), he(ye, da), he(ye, vn)), i0.mathMl === !0 && (he(fe, ma), he(ye, Xl), he(ye, vn))), A.ADD_TAGS && (fe === ve && (fe = Kt(fe)), he(fe, A.ADD_TAGS, Ke)), A.ADD_ATTR && (ye === je && (ye = Kt(ye)), he(ye, A.ADD_ATTR, Ke)), A.ADD_URI_SAFE_ATTR && he(j0, A.ADD_URI_SAFE_ATTR, Ke), A.FORBID_CONTENTS && (Ue === D0 && (Ue = Kt(Ue)), he(Ue, A.FORBID_CONTENTS, Ke)), Ee && (fe["#text"] = !0), Je && he(fe, ["html", "head", "body"]), fe.table && (he(fe, ["tbody"]), delete Qe.tbody), A.TRUSTED_TYPES_POLICY) {
        if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Mr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Mr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = A.TRUSTED_TYPES_POLICY, k = x.createHTML("");
      } else
        x === void 0 && (x = df(v, a)), x !== null && typeof k == "string" && (k = x.createHTML(""));
      d0 && d0(A), ur = A;
    }
  }, di = he({}, [...fa, ...ha, ...rf]), pi = he({}, [...ma, ...nf]), j1 = function(A) {
    let P = b(A);
    (!P || !P.tagName) && (P = {
      namespaceURI: Ot,
      tagName: "template"
    });
    const X = _n(A.tagName), Ce = _n(P.tagName);
    return Dr[A.namespaceURI] ? A.namespaceURI === st ? P.namespaceURI === Z0 ? X === "svg" : P.namespaceURI === X0 ? X === "svg" && (Ce === "annotation-xml" || qt[Ce]) : !!di[X] : A.namespaceURI === X0 ? P.namespaceURI === Z0 ? X === "math" : P.namespaceURI === st ? X === "math" && le[Ce] : !!pi[X] : A.namespaceURI === Z0 ? P.namespaceURI === st && !le[Ce] || P.namespaceURI === X0 && !qt[Ce] ? !1 : !pi[X] && (V1[X] || !di[X]) : !!(xr === "application/xhtml+xml" && Dr[A.namespaceURI]) : !1;
  }, ot = function(A) {
    Cr(e.removed, {
      element: A
    });
    try {
      b(A).removeChild(A);
    } catch {
      z(A);
    }
  }, Jr = function(A, P) {
    try {
      Cr(e.removed, {
        attribute: P.getAttributeNode(A),
        from: P
      });
    } catch {
      Cr(e.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(A), A === "is")
      if (z0 || W0)
        try {
          ot(P);
        } catch {
        }
      else
        try {
          P.setAttribute(A, "");
        } catch {
        }
  }, gi = function(A) {
    let P = null, X = null;
    if (M0)
      A = "<remove></remove>" + A;
    else {
      const e0 = Gl(A, /^[\r\n\t ]+/);
      X = e0 && e0[0];
    }
    xr === "application/xhtml+xml" && Ot === Z0 && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const Ce = x ? x.createHTML(A) : A;
    if (Ot === Z0)
      try {
        P = new g().parseFromString(Ce, xr);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = S.createDocument(Ot, "template", null);
      try {
        P.documentElement.innerHTML = kr ? k : Ce;
      } catch {
      }
    }
    const l0 = P.body || P.documentElement;
    return A && X && l0.insertBefore(t.createTextNode(X), l0.childNodes[0] || null), Ot === Z0 ? N.call(P, Je ? "html" : "body")[0] : Je ? P.documentElement : l0;
  }, vi = function(A) {
    return C.call(
      A.ownerDocument || A,
      A,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, bi = function(A) {
    return A instanceof d && (typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || !(A.attributes instanceof f) || typeof A.removeAttribute != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function");
  }, yi = function(A) {
    return typeof o == "function" && A instanceof o;
  };
  function St(J, A, P) {
    gn(J, (X) => {
      X.call(e, A, P, ur);
    });
  }
  const wi = function(A) {
    let P = null;
    if (St(H.beforeSanitizeElements, A, null), bi(A))
      return ot(A), !0;
    const X = Ke(A.nodeName);
    if (St(H.uponSanitizeElement, A, {
      tagName: X,
      allowedTags: fe
    }), A.hasChildNodes() && !yi(A.firstElementChild) && f0(/<[/\w]/g, A.innerHTML) && f0(/<[/\w]/g, A.textContent) || A.nodeType === Br.progressingInstruction || k0 && A.nodeType === Br.comment && f0(/<[/\w]/g, A.data))
      return ot(A), !0;
    if (!fe[X] || Qe[X]) {
      if (!Qe[X] && ki(X) && (q.tagNameCheck instanceof RegExp && f0(q.tagNameCheck, X) || q.tagNameCheck instanceof Function && q.tagNameCheck(X)))
        return !1;
      if (Ee && !Ue[X]) {
        const Ce = b(A) || A.parentNode, l0 = _(A) || A.childNodes;
        if (l0 && Ce) {
          const e0 = l0.length;
          for (let b0 = e0 - 1; b0 >= 0; --b0) {
            const ut = F(l0[b0], !0);
            ut.__removalCount = (A.__removalCount || 0) + 1, Ce.insertBefore(ut, T(A));
          }
        }
      }
      return ot(A), !0;
    }
    return A instanceof s && !j1(A) || (X === "noscript" || X === "noembed" || X === "noframes") && f0(/<\/no(script|embed|frames)/i, A.innerHTML) ? (ot(A), !0) : (g0 && A.nodeType === Br.text && (P = A.textContent, gn([G, ie, $], (Ce) => {
      P = Tr(P, Ce, " ");
    }), A.textContent !== P && (Cr(e.removed, {
      element: A.cloneNode()
    }), A.textContent = P)), St(H.afterSanitizeElements, A, null), !1);
  }, _i = function(A, P, X) {
    if (Qr && (P === "id" || P === "name") && (X in t || X in Y1))
      return !1;
    if (!(o0 && !Ie[P] && f0(V, P))) {
      if (!(He && f0(Z, P))) {
        if (!ye[P] || Ie[P]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ki(A) && (q.tagNameCheck instanceof RegExp && f0(q.tagNameCheck, A) || q.tagNameCheck instanceof Function && q.tagNameCheck(A)) && (q.attributeNameCheck instanceof RegExp && f0(q.attributeNameCheck, P) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(P)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            P === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && f0(q.tagNameCheck, X) || q.tagNameCheck instanceof Function && q.tagNameCheck(X)))
          ) return !1;
        } else if (!j0[P]) {
          if (!f0(Fe, Tr(X, be, ""))) {
            if (!((P === "src" || P === "xlink:href" || P === "href") && A !== "script" && Q2(X, "data:") === 0 && lt[A])) {
              if (!(Xe && !f0(me, Tr(X, be, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ki = function(A) {
    return A !== "annotation-xml" && Gl(A, Le);
  }, Di = function(A) {
    St(H.beforeSanitizeAttributes, A, null);
    const {
      attributes: P
    } = A;
    if (!P)
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let Ce = P.length;
    for (; Ce--; ) {
      const l0 = P[Ce], {
        name: e0,
        namespaceURI: b0,
        value: ut
      } = l0, Sr = Ke(e0);
      let u0 = e0 === "value" ? ut : J2(ut);
      if (X.attrName = Sr, X.attrValue = u0, X.keepAttr = !0, X.forceKeepAttr = void 0, St(H.uponSanitizeAttribute, A, X), u0 = X.attrValue, B && (Sr === "id" || Sr === "name") && (Jr(e0, A), u0 = ue + u0), k0 && f0(/((--!?|])>)|<\/(style|title)/i, u0)) {
        Jr(e0, A);
        continue;
      }
      if (X.forceKeepAttr || (Jr(e0, A), !X.keepAttr))
        continue;
      if (!n0 && f0(/\/>/i, u0)) {
        Jr(e0, A);
        continue;
      }
      g0 && gn([G, ie, $], (xi) => {
        u0 = Tr(u0, xi, " ");
      });
      const Ai = Ke(A.nodeName);
      if (_i(Ai, Sr, u0)) {
        if (x && typeof v == "object" && typeof v.getAttributeType == "function" && !b0)
          switch (v.getAttributeType(Ai, Sr)) {
            case "TrustedHTML": {
              u0 = x.createHTML(u0);
              break;
            }
            case "TrustedScriptURL": {
              u0 = x.createScriptURL(u0);
              break;
            }
          }
        try {
          b0 ? A.setAttributeNS(b0, e0, u0) : A.setAttribute(e0, u0), bi(A) ? ot(A) : Vl(e.removed);
        } catch {
        }
      }
    }
    St(H.afterSanitizeAttributes, A, null);
  }, X1 = function J(A) {
    let P = null;
    const X = vi(A);
    for (St(H.beforeSanitizeShadowDOM, A, null); P = X.nextNode(); )
      St(H.uponSanitizeShadowNode, P, null), !wi(P) && (P.content instanceof i && J(P.content), Di(P));
    St(H.afterSanitizeShadowDOM, A, null);
  };
  return e.sanitize = function(J) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, X = null, Ce = null, l0 = null;
    if (kr = !J, kr && (J = "<!-->"), typeof J != "string" && !yi(J))
      if (typeof J.toString == "function") {
        if (J = J.toString(), typeof J != "string")
          throw Mr("dirty is not a string, aborting");
      } else
        throw Mr("toString is not a function");
    if (!e.isSupported)
      return J;
    if (a0 || Xn(A), e.removed = [], typeof J == "string" && (De = !1), De) {
      if (J.nodeName) {
        const ut = Ke(J.nodeName);
        if (!fe[ut] || Qe[ut])
          throw Mr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof o)
      P = gi("<!---->"), X = P.ownerDocument.importNode(J, !0), X.nodeType === Br.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? P = X : P.appendChild(X);
    else {
      if (!z0 && !g0 && !Je && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return x && Y0 ? x.createHTML(J) : J;
      if (P = gi(J), !P)
        return z0 ? null : Y0 ? k : "";
    }
    P && M0 && ot(P.firstChild);
    const e0 = vi(De ? J : P);
    for (; Ce = e0.nextNode(); )
      wi(Ce) || (Ce.content instanceof i && X1(Ce.content), Di(Ce));
    if (De)
      return J;
    if (z0) {
      if (W0)
        for (l0 = R.call(P.ownerDocument); P.firstChild; )
          l0.appendChild(P.firstChild);
      else
        l0 = P;
      return (ye.shadowroot || ye.shadowrootmode) && (l0 = L.call(n, l0, !0)), l0;
    }
    let b0 = Je ? P.outerHTML : P.innerHTML;
    return Je && fe["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && f0(R1, P.ownerDocument.doctype.name) && (b0 = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + b0), g0 && gn([G, ie, $], (ut) => {
      b0 = Tr(b0, ut, " ");
    }), x && Y0 ? x.createHTML(b0) : b0;
  }, e.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xn(J), a0 = !0;
  }, e.clearConfig = function() {
    ur = null, a0 = !1;
  }, e.isValidAttribute = function(J, A, P) {
    ur || Xn({});
    const X = Ke(J), Ce = Ke(A);
    return _i(X, Ce, P);
  }, e.addHook = function(J, A) {
    typeof A == "function" && Cr(H[J], A);
  }, e.removeHook = function(J) {
    return Vl(H[J]);
  }, e.removeHooks = function(J) {
    H[J] = [];
  }, e.removeAllHooks = function() {
    H = $l();
  }, e;
}
L1();
const {
  SvelteComponent: pf,
  append_hydration: gf,
  attr: x0,
  children: Kl,
  claim_svg_element: Ql,
  detach: pa,
  init: vf,
  insert_hydration: bf,
  noop: Jl,
  safe_not_equal: yf,
  svg_element: es
} = window.__gradio__svelte__internal;
function wf(r) {
  let e, t;
  return {
    c() {
      e = es("svg"), t = es("path"), this.h();
    },
    l(n) {
      e = Ql(n, "svg", {
        class: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "aria-hidden": !0,
        focusable: !0,
        role: !0,
        width: !0,
        height: !0,
        preserveAspectRatio: !0,
        viewBox: !0
      });
      var a = Kl(e);
      t = Ql(a, "path", { d: !0, fill: !0 }), Kl(t).forEach(pa), a.forEach(pa), this.h();
    },
    h() {
      x0(t, "d", "M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z"), x0(t, "fill", "currentColor"), x0(
        e,
        "class",
        /*classNames*/
        r[0]
      ), x0(e, "xmlns", "http://www.w3.org/2000/svg"), x0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), x0(e, "aria-hidden", "true"), x0(e, "focusable", "false"), x0(e, "role", "img"), x0(e, "width", "1em"), x0(e, "height", "1em"), x0(e, "preserveAspectRatio", "xMidYMid meet"), x0(e, "viewBox", "0 0 32 32");
    },
    m(n, a) {
      bf(n, e, a), gf(e, t);
    },
    p(n, [a]) {
      a & /*classNames*/
      1 && x0(
        e,
        "class",
        /*classNames*/
        n[0]
      );
    },
    i: Jl,
    o: Jl,
    d(n) {
      n && pa(e);
    }
  };
}
function _f(r, e, t) {
  let { classNames: n = "" } = e;
  return r.$$set = (a) => {
    "classNames" in a && t(0, n = a.classNames);
  }, [n];
}
class kf extends pf {
  constructor(e) {
    super(), vf(this, e, _f, wf, yf, { classNames: 0 });
  }
}
const {
  SvelteComponent: Df,
  attr: hr,
  claim_element: Af,
  detach: xf,
  element: Sf,
  init: Ff,
  insert_hydration: Ef,
  noop: ts,
  safe_not_equal: Cf,
  src_url_equal: rs
} = window.__gradio__svelte__internal;
function Tf(r) {
  let e, t, n;
  return {
    c() {
      e = Sf("img"), this.h();
    },
    l(a) {
      e = Af(a, "IMG", {
        alt: !0,
        class: !0,
        src: !0,
        crossorigin: !0
      }), this.h();
    },
    h() {
      hr(e, "alt", ""), hr(e, "class", t = /*SIZE_CLASS*/
      r[3][
        /*size*/
        r[2]
      ] + " " + /*author*/
      (r[0].type === "user" ? "rounded-full" : "rounded") + " " + /*classNames*/
      r[1] + " flex-none"), rs(e.src, n = /*author*/
      r[0].avatarUrl) || hr(e, "src", n), hr(e, "crossorigin", "anonymous");
    },
    m(a, i) {
      Ef(a, e, i);
    },
    p(a, [i]) {
      i & /*size, author, classNames*/
      7 && t !== (t = /*SIZE_CLASS*/
      a[3][
        /*size*/
        a[2]
      ] + " " + /*author*/
      (a[0].type === "user" ? "rounded-full" : "rounded") + " " + /*classNames*/
      a[1] + " flex-none") && hr(e, "class", t), i & /*author*/
      1 && !rs(e.src, n = /*author*/
      a[0].avatarUrl) && hr(e, "src", n);
    },
    i: ts,
    o: ts,
    d(a) {
      a && xf(e);
    }
  };
}
function Mf(r, e, t) {
  let { author: n } = e, { classNames: a = "" } = e, { size: i = "md" } = e;
  const l = {
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-5 h-5",
    xl: "w-9 h-9",
    xxl: "w-24 h-24"
  };
  return r.$$set = (o) => {
    "author" in o && t(0, n = o.author), "classNames" in o && t(1, a = o.classNames), "size" in o && t(2, i = o.size);
  }, [n, a, i, l];
}
class zf extends Df {
  constructor(e) {
    super(), Ff(this, e, Mf, Tf, Cf, { author: 0, classNames: 1, size: 2 });
  }
}
const {
  SvelteComponent: Bf,
  append_hydration: Nf,
  attr: S0,
  children: ns,
  claim_svg_element: as,
  detach: ga,
  init: Rf,
  insert_hydration: Lf,
  noop: is,
  safe_not_equal: If,
  svg_element: ls
} = window.__gradio__svelte__internal;
function Of(r) {
  let e, t;
  return {
    c() {
      e = ls("svg"), t = ls("path"), this.h();
    },
    l(n) {
      e = as(n, "svg", {
        class: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "aria-hidden": !0,
        focusable: !0,
        role: !0,
        width: !0,
        height: !0,
        preserveAspectRatio: !0,
        viewBox: !0
      });
      var a = ns(e);
      t = as(a, "path", { d: !0, fill: !0 }), ns(t).forEach(ga), a.forEach(ga), this.h();
    },
    h() {
      S0(t, "d", "M18 6l-1.4 1.4l7.5 7.6H3v2h21.1l-7.5 7.6L18 26l10-10z"), S0(t, "fill", "currentColor"), S0(
        e,
        "class",
        /*classNames*/
        r[0]
      ), S0(e, "xmlns", "http://www.w3.org/2000/svg"), S0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), S0(e, "aria-hidden", "true"), S0(e, "focusable", "false"), S0(e, "role", "img"), S0(e, "width", "1em"), S0(e, "height", "1em"), S0(e, "preserveAspectRatio", "xMidYMid meet"), S0(e, "viewBox", "0 0 32 32");
    },
    m(n, a) {
      Lf(n, e, a), Nf(e, t);
    },
    p(n, [a]) {
      a & /*classNames*/
      1 && S0(
        e,
        "class",
        /*classNames*/
        n[0]
      );
    },
    i: is,
    o: is,
    d(n) {
      n && ga(e);
    }
  };
}
function qf(r, e, t) {
  let { classNames: n = "" } = e;
  return r.$$set = (a) => {
    "classNames" in a && t(0, n = a.classNames);
  }, [n];
}
class I1 extends Bf {
  constructor(e) {
    super(), Rf(this, e, qf, Of, If, { classNames: 0 });
  }
}
const {
  SvelteComponent: Pf,
  append_hydration: Qt,
  attr: rt,
  check_outros: ss,
  children: Rn,
  claim_component: si,
  claim_element: Yr,
  claim_space: kn,
  claim_text: oi,
  create_component: ui,
  destroy_component: ci,
  detach: Mt,
  element: jr,
  get_svelte_dataset: Hf,
  group_outros: os,
  init: Uf,
  insert_hydration: Ur,
  listen: Vf,
  mount_component: fi,
  noop: Ra,
  prevent_default: Gf,
  safe_not_equal: Wf,
  set_data: O1,
  space: Dn,
  stop_propagation: Yf,
  text: hi,
  transition_in: Ut,
  transition_out: tr
} = window.__gradio__svelte__internal;
function jf(r) {
  let e, t, n;
  return {
    c() {
      e = jr("span"), t = hi("new"), this.h();
    },
    l(a) {
      e = Yr(a, "SPAN", { class: !0 });
      var i = Rn(e);
      t = oi(i, "new"), i.forEach(Mt), this.h();
    },
    h() {
      rt(e, "class", n = "mr-1.5 rounded px-1 text-xs leading-tight " + /*isSelected*/
      (r[1] ? "bg-white/10 text-white" : "bg-blue-500/10 text-blue-700 dark:text-blue-200"));
    },
    m(a, i) {
      Ur(a, e, i), Qt(e, t);
    },
    p(a, i) {
      i & /*isSelected*/
      2 && n !== (n = "mr-1.5 rounded px-1 text-xs leading-tight " + /*isSelected*/
      (a[1] ? "bg-white/10 text-white" : "bg-blue-500/10 text-blue-700 dark:text-blue-200")) && rt(e, "class", n);
    },
    i: Ra,
    o: Ra,
    d(a) {
      a && Mt(e);
    }
  };
}
function Xf(r) {
  let e, t;
  return e = new zf({
    props: {
      author: {
        avatarUrl: (
          /*entry*/
          r[0].imgUrl
        ),
        type: (
          /*entry*/
          r[0].type === "user" ? "user" : "org"
        )
      },
      classNames: "mr-1.5"
    }
  }), {
    c() {
      ui(e.$$.fragment);
    },
    l(n) {
      si(e.$$.fragment, n);
    },
    m(n, a) {
      fi(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*entry*/
      1 && (i.author = {
        avatarUrl: (
          /*entry*/
          n[0].imgUrl
        ),
        type: (
          /*entry*/
          n[0].type === "user" ? "user" : "org"
        )
      }), e.$set(i);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tr(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ci(e, n);
    }
  };
}
function Zf(r) {
  let e, t;
  return e = new I1({
    props: { classNames: "flex-none mr-1 h-3 w-3" }
  }), {
    c() {
      ui(e.$$.fragment);
    },
    l(n) {
      si(e.$$.fragment, n);
    },
    m(n, a) {
      fi(e, n, a), t = !0;
    },
    p: Ra,
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tr(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ci(e, n);
    }
  };
}
function us(r) {
  let e, t = "·", n, a, i = (
    /*entry*/
    r[0].description + ""
  ), l, o;
  return {
    c() {
      e = jr("span"), e.textContent = t, n = Dn(), a = jr("span"), l = hi(i), this.h();
    },
    l(s) {
      e = Yr(s, "SPAN", { class: !0, "data-svelte-h": !0 }), Hf(e) !== "svelte-4af8ry" && (e.textContent = t), n = kn(s), a = Yr(s, "SPAN", { class: !0 });
      var u = Rn(a);
      l = oi(u, i), u.forEach(Mt), this.h();
    },
    h() {
      rt(e, "class", "pl-0.5 pr-1.5 text-gray-300"), rt(a, "class", o = "mr-2 truncate " + /*isSelected*/
      (r[1] ? "text-white" : "text-gray-400"));
    },
    m(s, u) {
      Ur(s, e, u), Ur(s, n, u), Ur(s, a, u), Qt(a, l);
    },
    p(s, u) {
      u & /*entry*/
      1 && i !== (i = /*entry*/
      s[0].description + "") && O1(l, i), u & /*isSelected*/
      2 && o !== (o = "mr-2 truncate " + /*isSelected*/
      (s[1] ? "text-white" : "text-gray-400")) && rt(a, "class", o);
    },
    d(s) {
      s && (Mt(e), Mt(n), Mt(a));
    }
  };
}
function cs(r) {
  let e, t;
  return e = new I1({
    props: {
      classNames: "flex-none ml-auto h-3.5 w-3.5 "
    }
  }), {
    c() {
      ui(e.$$.fragment);
    },
    l(n) {
      si(e.$$.fragment, n);
    },
    m(n, a) {
      fi(e, n, a), t = !0;
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tr(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ci(e, n);
    }
  };
}
function $f(r) {
  let e, t, n, a, i, l, o, s = (
    /*entry*/
    r[0].label + ""
  ), u, f, d, g, v, E, F, z, T;
  const _ = [Zf, Xf, jf], b = [];
  function x(C, R) {
    return R & /*entry*/
    1 && (t = null), R & /*entry*/
    1 && (n = null), t == null && (t = !!["all-datasets", "all-models", "all-spaces"].includes(
      /*entry*/
      C[0].type
    )), t ? 0 : (n == null && (n = !!(["org", "user"].includes(
      /*entry*/
      C[0].type
    ) && /*entry*/
    C[0].imgUrl)), n ? 1 : (
      /*entry*/
      C[0].type === "full-text-search" ? 2 : -1
    ));
  }
  ~(a = x(r, -1)) && (i = b[a] = _[a](r));
  let k = (
    /*entry*/
    r[0].description && us(r)
  ), S = (
    /*entry*/
    r[0].type === "full-text-search" && cs()
  );
  return {
    c() {
      e = jr("a"), i && i.c(), l = Dn(), o = jr("span"), u = hi(s), d = Dn(), k && k.c(), g = Dn(), S && S.c(), this.h();
    },
    l(C) {
      e = Yr(C, "A", { class: !0, href: !0 });
      var R = Rn(e);
      i && i.l(R), l = kn(R), o = Yr(R, "SPAN", { class: !0 });
      var N = Rn(o);
      u = oi(N, s), N.forEach(Mt), d = kn(R), k && k.l(R), g = kn(R), S && S.l(R), R.forEach(Mt), this.h();
    },
    h() {
      rt(o, "class", f = "flex-shrink-0 truncate " + /*entry*/
      (r[0].type === "model" && !/*isSelected*/
      r[1] ? "rounded bg-gradient-to-b from-gray-50 to-gray-100 px-1 dark:from-gray-925 dark:to-gray-950" : "px-1")), rt(e, "class", v = "flex h-8 cursor-pointer items-center px-2 " + (["dataset", "model", "no-results", "space"].includes(
        /*entry*/
        r[0].type
      ) ? "font-mono text-xs" : "") + " " + (["all-datasets", "all-models", "all-spaces"].includes(
        /*entry*/
        r[0].type
      ) && !/*isSelected*/
      r[1] ? "text-gray-400" : "") + " " + /*isSelected*/
      (r[1] ? "bg-blue-500 text-white dark:bg-blue-700" : "hover:bg-gray-50 dark:hover:bg-gray-900")), rt(e, "href", E = /*entry*/
      r[0].href);
    },
    m(C, R) {
      Ur(C, e, R), ~a && b[a].m(e, null), Qt(e, l), Qt(e, o), Qt(o, u), Qt(e, d), k && k.m(e, null), Qt(e, g), S && S.m(e, null), F = !0, z || (T = Vf(e, "click", Yf(Gf(
        /*click_handler*/
        r[3]
      ))), z = !0);
    },
    p(C, [R]) {
      let N = a;
      a = x(C, R), a === N ? ~a && b[a].p(C, R) : (i && (os(), tr(b[N], 1, 1, () => {
        b[N] = null;
      }), ss()), ~a ? (i = b[a], i ? i.p(C, R) : (i = b[a] = _[a](C), i.c()), Ut(i, 1), i.m(e, l)) : i = null), (!F || R & /*entry*/
      1) && s !== (s = /*entry*/
      C[0].label + "") && O1(u, s), (!F || R & /*entry, isSelected*/
      3 && f !== (f = "flex-shrink-0 truncate " + /*entry*/
      (C[0].type === "model" && !/*isSelected*/
      C[1] ? "rounded bg-gradient-to-b from-gray-50 to-gray-100 px-1 dark:from-gray-925 dark:to-gray-950" : "px-1"))) && rt(o, "class", f), /*entry*/
      C[0].description ? k ? k.p(C, R) : (k = us(C), k.c(), k.m(e, g)) : k && (k.d(1), k = null), /*entry*/
      C[0].type === "full-text-search" ? S ? R & /*entry*/
      1 && Ut(S, 1) : (S = cs(), S.c(), Ut(S, 1), S.m(e, null)) : S && (os(), tr(S, 1, 1, () => {
        S = null;
      }), ss()), (!F || R & /*entry, isSelected*/
      3 && v !== (v = "flex h-8 cursor-pointer items-center px-2 " + (["dataset", "model", "no-results", "space"].includes(
        /*entry*/
        C[0].type
      ) ? "font-mono text-xs" : "") + " " + (["all-datasets", "all-models", "all-spaces"].includes(
        /*entry*/
        C[0].type
      ) && !/*isSelected*/
      C[1] ? "text-gray-400" : "") + " " + /*isSelected*/
      (C[1] ? "bg-blue-500 text-white dark:bg-blue-700" : "hover:bg-gray-50 dark:hover:bg-gray-900"))) && rt(e, "class", v), (!F || R & /*entry*/
      1 && E !== (E = /*entry*/
      C[0].href)) && rt(e, "href", E);
    },
    i(C) {
      F || (Ut(i), Ut(S), F = !0);
    },
    o(C) {
      tr(i), tr(S), F = !1;
    },
    d(C) {
      C && Mt(e), ~a && b[a].d(), k && k.d(), S && S.d(), z = !1, T();
    }
  };
}
function Kf(r, e, t) {
  let { entry: n } = e, { isSelected: a } = e, { onClick: i } = e;
  const l = () => i(n);
  return r.$$set = (o) => {
    "entry" in o && t(0, n = o.entry), "isSelected" in o && t(1, a = o.isSelected), "onClick" in o && t(2, i = o.onClick);
  }, [n, a, i, l];
}
class Lt extends Pf {
  constructor(e) {
    super(), Uf(this, e, Kf, $f, Wf, { entry: 0, isSelected: 1, onClick: 2 });
  }
}
function Qf(r) {
  const e = new URLSearchParams();
  for (const [n, a] of Object.entries(r))
    if (a !== void 0)
      if (Array.isArray(a))
        for (const i of a)
          e.append(n, String(i));
      else
        e.set(n, String(a));
  const t = e.toString();
  return t ? `?${t}` : "";
}
async function fs(r, e) {
  var t;
  try {
    return (t = r.headers.get("content-type")) != null && t.includes("json") ? await r.json() : e === "blob" ? await r.blob() : await r.text();
  } catch {
    return;
  }
}
async function Jf(r, e, t = {}) {
  try {
    const n = {
      ...t.headers,
      ...t.responseType === "json" ? { Accept: "application/json" } : t.responseType === "text" ? { Accept: "text/plain" } : {}
    }, a = await fetch(e, {
      body: t.data instanceof File ? t.data : t.data ? JSON.stringify(t.data) : void 0,
      headers: n,
      method: r,
      ...t.signal ? { signal: t.signal } : {},
      ...t.credentials ? { credentials: t.credentials } : {}
    }), i = a.clone();
    if (!a.ok) {
      let s = `${a.status} ${a.statusText}`;
      const u = await fs(a);
      return typeof u == "object" && u && ("message" in u && typeof u.message == "string" ? s = u.message : "error" in u && typeof u.error == "string" && (s = u.error)), {
        aborted: !1,
        error: s,
        isError: !0,
        payload: u,
        rawResponse: i,
        statusCode: a.status
      };
    }
    const l = await fs(a, t.responseType), o = a.headers.get("Link") ? th(a.headers.get("Link")) : void 0;
    return l !== void 0 ? {
      isError: !1,
      payload: l,
      rawResponse: i,
      statusCode: a.status,
      links: o
    } : {
      aborted: !1,
      error: t.responseType === "json" ? "Error parsing JSON" : "Error parsing server response",
      isError: !0,
      payload: l,
      rawResponse: i,
      statusCode: a.status,
      links: o
    };
  } catch (n) {
    return {
      aborted: n instanceof DOMException && n.name === "AbortError",
      error: (n instanceof TypeError || n instanceof DOMException) && n.message ? n.message : "Failed to fetch",
      isError: !0,
      payload: void 0,
      rawResponse: void 0,
      statusCode: 0
    };
  }
}
function eh(r, e = {}) {
  return Jf("GET", r, { ...e });
}
function th(r) {
  const e = /<(https?:[/][/][^>]+)>;\s+rel="([^"]+)"/g;
  return Object.fromEntries([...r.matchAll(e)].map(([t, n, a]) => [a, n]));
}
function rh(r, e) {
  let t, n;
  return function(...a) {
    const i = Date.now();
    t && i < t + e ? (clearTimeout(n), n = setTimeout(function() {
      t = i, r(...a);
    }, e)) : (t = i, r(...a));
  };
}
const {
  SvelteComponent: nh,
  append_hydration: Ve,
  attr: ze,
  binding_callbacks: R0,
  check_outros: Ze,
  children: G0,
  claim_component: kt,
  claim_element: Ge,
  claim_space: xe,
  create_component: Dt,
  destroy_component: At,
  destroy_each: Xt,
  detach: oe,
  element: We,
  empty: _0,
  ensure_array_like: s0,
  get_svelte_dataset: or,
  group_outros: $e,
  init: ah,
  insert_hydration: ge,
  listen: bn,
  mount_component: xt,
  run_all: ih,
  safe_not_equal: lh,
  set_input_value: hs,
  space: Se,
  transition_in: j,
  transition_out: ae
} = window.__gradio__svelte__internal, { createEventDispatcher: sh, onMount: oh, tick: uh } = window.__gradio__svelte__internal;
function ms(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[55] = e, n[56] = t, n;
}
function ds(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[57] = e, n[58] = t, n;
}
function ps(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[59] = e, n[60] = t, n;
}
function gs(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[61] = e, n[62] = t, n;
}
function vs(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[63] = e, n[64] = t, n;
}
function bs(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[65] = e, n[66] = t, n;
}
function ys(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[67] = e, n[68] = t, n;
}
function ws(r, e, t) {
  const n = r.slice();
  return n[54] = e[t], n[69] = e, n[70] = t, n;
}
function _s(r) {
  let e, t;
  return e = new kf({
    props: {
      classNames: "absolute left-2.5 text-gray-400 top-1/2 transform -translate-y-1/2"
    }
  }), {
    c() {
      Dt(e.$$.fragment);
    },
    l(n) {
      kt(e.$$.fragment, n);
    },
    m(n, a) {
      xt(e, n, a), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function ks(r) {
  let e, t, n, a = (
    /*entries*/
    r[15].some(eo)
  ), i, l = (
    /*entries*/
    r[15].some(Js)
  ), o, s = (
    /*entries*/
    r[15].some(Qs)
  ), u, f = (
    /*entries*/
    r[15].some(Ks)
  ), d, g = (
    /*entries*/
    r[15].some($s)
  ), v, E = (
    /*entries*/
    r[15].some(Zs)
  ), F, z = (
    /*entries*/
    r[15].some(Xs)
  ), T, _, b = (
    /*entries*/
    r[15].some(js)
  ), x, k, S = !/*numResults*/
  r[16] && Ds(), C = a && As(r), R = l && Fs(r), N = s && Ts(r), L = f && Bs(r), H = g && Ls(r), G = E && qs(r), ie = z && Us(r), $ = b && Ws(r);
  return {
    c() {
      e = We("div"), t = We("ul"), S && S.c(), n = Se(), C && C.c(), i = Se(), R && R.c(), o = Se(), N && N.c(), u = Se(), L && L.c(), d = Se(), H && H.c(), v = Se(), G && G.c(), F = Se(), ie && ie.c(), _ = Se(), $ && $.c(), this.h();
    },
    l(V) {
      e = Ge(V, "DIV", { class: !0 });
      var Z = G0(e);
      t = Ge(Z, "UL", { class: !0 });
      var me = G0(t);
      S && S.l(me), n = xe(me), C && C.l(me), i = xe(me), R && R.l(me), o = xe(me), N && N.l(me), u = xe(me), L && L.l(me), d = xe(me), H && H.l(me), v = xe(me), G && G.l(me), F = xe(me), ie && ie.l(me), me.forEach(oe), _ = xe(Z), $ && $.l(Z), Z.forEach(oe), this.h();
    },
    h() {
      ze(t, "class", T = "dark:bg-gray-950 mt-1 max-h-[calc(100vh-100px)] w-full divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg border border-gray-100 bg-white text-sm shadow-lg dark:divide-gray-900 " + /*bodyClassNames*/
      r[2]), ze(e, "class", x = /*position*/
      r[10] + " z-40 w-full md:min-w-[24rem]");
    },
    m(V, Z) {
      ge(V, e, Z), Ve(e, t), S && S.m(t, null), Ve(t, n), C && C.m(t, null), Ve(t, i), R && R.m(t, null), Ve(t, o), N && N.m(t, null), Ve(t, u), L && L.m(t, null), Ve(t, d), H && H.m(t, null), Ve(t, v), G && G.m(t, null), Ve(t, F), ie && ie.m(t, null), r[40](t), Ve(e, _), $ && $.m(e, null), r[42](e), k = !0;
    },
    p(V, Z) {
      /*numResults*/
      V[16] ? S && ($e(), ae(S, 1, 1, () => {
        S = null;
      }), Ze()) : S ? Z[0] & /*numResults*/
      65536 && j(S, 1) : (S = Ds(), S.c(), j(S, 1), S.m(t, n)), Z[0] & /*entries*/
      32768 && (a = /*entries*/
      V[15].some(eo)), a ? C ? (C.p(V, Z), Z[0] & /*entries*/
      32768 && j(C, 1)) : (C = As(V), C.c(), j(C, 1), C.m(t, i)) : C && ($e(), ae(C, 1, 1, () => {
        C = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (l = /*entries*/
      V[15].some(Js)), l ? R ? (R.p(V, Z), Z[0] & /*entries*/
      32768 && j(R, 1)) : (R = Fs(V), R.c(), j(R, 1), R.m(t, o)) : R && ($e(), ae(R, 1, 1, () => {
        R = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (s = /*entries*/
      V[15].some(Qs)), s ? N ? (N.p(V, Z), Z[0] & /*entries*/
      32768 && j(N, 1)) : (N = Ts(V), N.c(), j(N, 1), N.m(t, u)) : N && ($e(), ae(N, 1, 1, () => {
        N = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (f = /*entries*/
      V[15].some(Ks)), f ? L ? (L.p(V, Z), Z[0] & /*entries*/
      32768 && j(L, 1)) : (L = Bs(V), L.c(), j(L, 1), L.m(t, d)) : L && ($e(), ae(L, 1, 1, () => {
        L = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (g = /*entries*/
      V[15].some($s)), g ? H ? (H.p(V, Z), Z[0] & /*entries*/
      32768 && j(H, 1)) : (H = Ls(V), H.c(), j(H, 1), H.m(t, v)) : H && ($e(), ae(H, 1, 1, () => {
        H = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (E = /*entries*/
      V[15].some(Zs)), E ? G ? (G.p(V, Z), Z[0] & /*entries*/
      32768 && j(G, 1)) : (G = qs(V), G.c(), j(G, 1), G.m(t, F)) : G && ($e(), ae(G, 1, 1, () => {
        G = null;
      }), Ze()), Z[0] & /*entries*/
      32768 && (z = /*entries*/
      V[15].some(Xs)), z ? ie ? (ie.p(V, Z), Z[0] & /*entries*/
      32768 && j(ie, 1)) : (ie = Us(V), ie.c(), j(ie, 1), ie.m(t, null)) : ie && ($e(), ae(ie, 1, 1, () => {
        ie = null;
      }), Ze()), (!k || Z[0] & /*bodyClassNames*/
      4 && T !== (T = "dark:bg-gray-950 mt-1 max-h-[calc(100vh-100px)] w-full divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg border border-gray-100 bg-white text-sm shadow-lg dark:divide-gray-900 " + /*bodyClassNames*/
      V[2])) && ze(t, "class", T), Z[0] & /*entries*/
      32768 && (b = /*entries*/
      V[15].some(js)), b ? $ ? ($.p(V, Z), Z[0] & /*entries*/
      32768 && j($, 1)) : ($ = Ws(V), $.c(), j($, 1), $.m(e, null)) : $ && ($e(), ae($, 1, 1, () => {
        $ = null;
      }), Ze()), (!k || Z[0] & /*position*/
      1024 && x !== (x = /*position*/
      V[10] + " z-40 w-full md:min-w-[24rem]")) && ze(e, "class", x);
    },
    i(V) {
      k || (j(S), j(C), j(R), j(N), j(L), j(H), j(G), j(ie), j($), k = !0);
    },
    o(V) {
      ae(S), ae(C), ae(R), ae(N), ae(L), ae(H), ae(G), ae(ie), ae($), k = !1;
    },
    d(V) {
      V && oe(e), S && S.d(), C && C.d(), R && R.d(), N && N.d(), L && L.d(), H && H.d(), G && G.d(), ie && ie.d(), r[40](null), $ && $.d(), r[42](null);
    }
  };
}
function Ds(r) {
  let e, t;
  return e = new Lt({
    props: {
      entry: {
        id: "no-result",
        label: "No results found :(",
        type: "no-results"
      },
      isSelected: !1,
      onClick: hh
    }
  }), {
    c() {
      Dt(e.$$.fragment);
    },
    l(n) {
      kt(e.$$.fragment, n);
    },
    m(n, a) {
      xt(e, n, a), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function As(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && xs()
  ), i = s0(
    /*entries*/
    r[15].filter(to)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Ss(ws(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = xs(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(to)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = ws(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Ss(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function xs(r) {
  let e, t = "Models";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-bluz2c" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-blue-50 to-white px-2 font-semibold text-blue-800 dark:from-blue-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Ss(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding*/
    r[33](e, a)
  ), o = () => (
    /*li_binding*/
    r[33](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Fs(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Es()
  ), i = s0(
    /*entries*/
    r[15].filter(ro)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Cs(ys(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Es(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(ro)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = ys(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Cs(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Es(r) {
  let e, t = "Datasets";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-uxv3nm" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-red-50 to-white px-2 font-semibold text-red-800 dark:from-red-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Cs(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_1*/
    r[34](e, a)
  ), o = () => (
    /*li_binding_1*/
    r[34](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Ts(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Ms()
  ), i = s0(
    /*entries*/
    r[15].filter(no)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = zs(bs(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Ms(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(no)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = bs(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = zs(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Ms(r) {
  let e, t = "Spaces";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-rrht49" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-orange-50 to-white px-2 font-semibold text-orange-800 dark:from-orange-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function zs(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_2*/
    r[35](e, a)
  ), o = () => (
    /*li_binding_2*/
    r[35](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Bs(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Ns()
  ), i = s0(
    /*entries*/
    r[15].filter(ao)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Rs(vs(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Ns(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(ao)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = vs(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Rs(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Ns(r) {
  let e, t = "Organizations";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-10mm8tq" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-purple-50 to-white px-2 font-semibold text-indigo-800 dark:from-indigo-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Rs(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_3*/
    r[36](e, a)
  ), o = () => (
    /*li_binding_3*/
    r[36](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Ls(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Is()
  ), i = s0(
    /*entries*/
    r[15].filter(io)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Os(gs(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Is(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(io)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = gs(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Os(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Is(r) {
  let e, t = "Users";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-120du9y" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-teal-50 to-white px-2 font-semibold text-teal-800 dark:from-teal-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Os(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_4*/
    r[37](e, a)
  ), o = () => (
    /*li_binding_4*/
    r[37](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function qs(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Ps()
  ), i = s0(
    /*entries*/
    r[15].filter(lo)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Hs(ps(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Ps(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(lo)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = ps(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Hs(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Ps(r) {
  let e, t = "Papers";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-6f53io" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-gray-50 to-white px-2 font-semibold text-gray-800 dark:from-gray-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Hs(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_5*/
    r[38](e, a)
  ), o = () => (
    /*li_binding_5*/
    r[38](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Us(r) {
  let e, t, n, a = (
    /*showSearchType*/
    r[11] && Vs()
  ), i = s0(
    /*entries*/
    r[15].filter(so)
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Gs(ds(r, i, s));
  const o = (s) => ae(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      a && a.c(), e = Se();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = _0();
    },
    l(s) {
      a && a.l(s), e = xe(s);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(s);
      t = _0();
    },
    m(s, u) {
      a && a.m(s, u), ge(s, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, u);
      ge(s, t, u), n = !0;
    },
    p(s, u) {
      if (/*showSearchType*/
      s[11] ? a || (a = Vs(), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        i = s0(
          /*entries*/
          s[15].filter(so)
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = ds(s, i, f);
          l[f] ? (l[f].p(d, u), j(l[f], 1)) : (l[f] = Gs(d), l[f].c(), j(l[f], 1), l[f].m(t.parentNode, t));
        }
        for ($e(), f = i.length; f < l.length; f += 1)
          o(f);
        Ze();
      }
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          j(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ae(l[u]);
      n = !1;
    },
    d(s) {
      s && (oe(e), oe(t)), a && a.d(s), Xt(l, s);
    }
  };
}
function Vs(r) {
  let e, t = "Collections";
  return {
    c() {
      e = We("li"), e.textContent = t, this.h();
    },
    l(n) {
      e = Ge(n, "LI", { class: !0, "data-svelte-h": !0 }), or(e) !== "svelte-1ln07nm" && (e.textContent = t), this.h();
    },
    h() {
      ze(e, "class", "flex h-7 items-center bg-gradient-to-r from-gray-50 to-white px-2 font-semibold text-gray-800 dark:from-gray-900 dark:to-gray-950 dark:text-gray-300");
    },
    m(n, a) {
      ge(n, e, a);
    },
    d(n) {
      n && oe(e);
    }
  };
}
function Gs(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_6*/
    r[39](e, a)
  ), o = () => (
    /*li_binding_6*/
    r[39](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function Ws(r) {
  let e, t, n = s0(
    /*entries*/
    r[15].filter(oo)
  ), a = [];
  for (let l = 0; l < n.length; l += 1)
    a[l] = Ys(ms(r, n, l));
  const i = (l) => ae(a[l], 1, 1, () => {
    a[l] = null;
  });
  return {
    c() {
      e = We("ul");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      e = Ge(l, "UL", { class: !0 });
      var o = G0(e);
      for (let s = 0; s < a.length; s += 1)
        a[s].l(o);
      o.forEach(oe), this.h();
    },
    h() {
      ze(e, "class", "mt-1 max-h-[calc(100vh-100px)] w-full divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg border border-gray-100 bg-white text-sm shadow-lg");
    },
    m(l, o) {
      ge(l, e, o);
      for (let s = 0; s < a.length; s += 1)
        a[s] && a[s].m(e, null);
      t = !0;
    },
    p(l, o) {
      if (o[0] & /*resultElements, entries, isSelected, selectedEntryIdx, handleClickEntry*/
      36995072) {
        n = s0(
          /*entries*/
          l[15].filter(oo)
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = ms(l, n, s);
          a[s] ? (a[s].p(u, o), j(a[s], 1)) : (a[s] = Ys(u), a[s].c(), j(a[s], 1), a[s].m(e, null));
        }
        for ($e(), s = n.length; s < a.length; s += 1)
          i(s);
        Ze();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1)
          j(a[o]);
        t = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let o = 0; o < a.length; o += 1)
        ae(a[o]);
      t = !1;
    },
    d(l) {
      l && oe(e), Xt(a, l);
    }
  };
}
function Ys(r) {
  let e, t, n, a = (
    /*entry*/
    r[54]
  ), i;
  t = new Lt({
    props: {
      entry: (
        /*entry*/
        r[54]
      ),
      isSelected: (
        /*isSelected*/
        r[25](
          /*selectedEntryIdx*/
          r[18],
          /*entry*/
          r[54]
        )
      ),
      onClick: (
        /*handleClickEntry*/
        r[21]
      )
    }
  });
  const l = () => (
    /*li_binding_7*/
    r[41](e, a)
  ), o = () => (
    /*li_binding_7*/
    r[41](null, a)
  );
  return {
    c() {
      e = We("li"), Dt(t.$$.fragment), n = Se();
    },
    l(s) {
      e = Ge(s, "LI", {});
      var u = G0(e);
      kt(t.$$.fragment, u), n = xe(u), u.forEach(oe);
    },
    m(s, u) {
      ge(s, e, u), xt(t, e, null), Ve(e, n), l(), i = !0;
    },
    p(s, u) {
      r = s;
      const f = {};
      u[0] & /*entries*/
      32768 && (f.entry = /*entry*/
      r[54]), u[0] & /*selectedEntryIdx, entries*/
      294912 && (f.isSelected = /*isSelected*/
      r[25](
        /*selectedEntryIdx*/
        r[18],
        /*entry*/
        r[54]
      )), t.$set(f), a !== /*entry*/
      r[54] && (o(), a = /*entry*/
      r[54], l());
    },
    i(s) {
      i || (j(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && oe(e), At(t), o();
    }
  };
}
function ch(r) {
  let e, t, n, a, i, l, o, s, u, f = (
    /*showIcon*/
    r[5] && _s()
  ), d = (
    /*isOpen*/
    r[12] && ks(r)
  );
  return {
    c() {
      e = We("div"), t = We("input"), a = Se(), f && f.c(), i = Se(), d && d.c(), this.h();
    },
    l(g) {
      e = Ge(g, "DIV", { class: !0 });
      var v = G0(e);
      t = Ge(v, "INPUT", {
        autocomplete: !0,
        class: !0,
        name: !0,
        placeholder: !0,
        spellcheck: !0,
        type: !0
      }), a = xe(v), f && f.l(v), i = xe(v), d && d.l(v), v.forEach(oe), this.h();
    },
    h() {
      t.disabled = /*disabled*/
      r[9], ze(t, "autocomplete", "off"), ze(t, "class", n = "relative z-0 w-full dark:bg-gray-950 " + /*showIcon*/
      (r[5] ? "pl-8" : "") + " " + /*header*/
      (r[4] ? "form-input-alt h-9 pr-3 focus:shadow-xl" : "form-input") + " " + /*inputClassNames*/
      r[3]), ze(
        t,
        "name",
        /*inputName*/
        r[6]
      ), ze(
        t,
        "placeholder",
        /*placeholder*/
        r[7]
      ), t.required = /*required*/
      r[8], ze(t, "spellcheck", "false"), ze(t, "type", "text"), ze(e, "class", l = "relative " + /*classNames*/
      r[1]);
    },
    m(g, v) {
      ge(g, e, v), Ve(e, t), hs(
        t,
        /*inputValue*/
        r[0]
      ), r[32](t), Ve(e, a), f && f.m(e, null), Ve(e, i), d && d.m(e, null), r[43](e), o = !0, s || (u = [
        bn(
          t,
          "input",
          /*input_input_handler*/
          r[31]
        ),
        bn(
          t,
          "focus",
          /*handleFocus*/
          r[22]
        ),
        bn(
          t,
          "input",
          /*handleInput*/
          r[24]
        ),
        bn(
          t,
          "keydown",
          /*handleKeyDown*/
          r[23]
        )
      ], s = !0);
    },
    p(g, v) {
      (!o || v[0] & /*disabled*/
      512) && (t.disabled = /*disabled*/
      g[9]), (!o || v[0] & /*showIcon, header, inputClassNames*/
      56 && n !== (n = "relative z-0 w-full dark:bg-gray-950 " + /*showIcon*/
      (g[5] ? "pl-8" : "") + " " + /*header*/
      (g[4] ? "form-input-alt h-9 pr-3 focus:shadow-xl" : "form-input") + " " + /*inputClassNames*/
      g[3])) && ze(t, "class", n), (!o || v[0] & /*inputName*/
      64) && ze(
        t,
        "name",
        /*inputName*/
        g[6]
      ), (!o || v[0] & /*placeholder*/
      128) && ze(
        t,
        "placeholder",
        /*placeholder*/
        g[7]
      ), (!o || v[0] & /*required*/
      256) && (t.required = /*required*/
      g[8]), v[0] & /*inputValue*/
      1 && t.value !== /*inputValue*/
      g[0] && hs(
        t,
        /*inputValue*/
        g[0]
      ), /*showIcon*/
      g[5] ? f ? v[0] & /*showIcon*/
      32 && j(f, 1) : (f = _s(), f.c(), j(f, 1), f.m(e, i)) : f && ($e(), ae(f, 1, 1, () => {
        f = null;
      }), Ze()), /*isOpen*/
      g[12] ? d ? (d.p(g, v), v[0] & /*isOpen*/
      4096 && j(d, 1)) : (d = ks(g), d.c(), j(d, 1), d.m(e, null)) : d && ($e(), ae(d, 1, 1, () => {
        d = null;
      }), Ze()), (!o || v[0] & /*classNames*/
      2 && l !== (l = "relative " + /*classNames*/
      g[1])) && ze(e, "class", l);
    },
    i(g) {
      o || (j(f), j(d), o = !0);
    },
    o(g) {
      ae(f), ae(d), o = !1;
    },
    d(g) {
      g && oe(e), r[32](null), f && f.d(), d && d.d(), r[43](null), s = !1, ih(u);
    }
  };
}
const fh = 300;
function Et(r) {
  return `${r.type}__${r.id}`;
}
const js = (r) => r.type === "full-text-search", Xs = (r) => r.type === "collection", Zs = (r) => r.type === "paper", $s = (r) => r.type === "user", Ks = (r) => r.type === "org", Qs = (r) => r.type === "space", Js = (r) => r.type === "dataset", eo = (r) => r.type === "model", hh = () => {
}, to = (r) => ["model", "all-models"].includes(r.type), ro = (r) => ["dataset", "all-datasets"].includes(r.type), no = (r) => ["space", "all-spaces"].includes(r.type), ao = (r) => r.type === "org", io = (r) => r.type === "user", lo = (r) => r.type === "paper", so = (r) => r.type === "collection", oo = (r) => r.type === "full-text-search";
function mh(r, e, t) {
  var n = this && this.__awaiter || function(B, ue, Ee, De) {
    function i0(Ue) {
      return Ue instanceof Ee ? Ue : new Ee(function(D0) {
        D0(Ue);
      });
    }
    return new (Ee || (Ee = Promise))(function(Ue, D0) {
      function lt(v0) {
        try {
          j0(De.next(v0));
        } catch (X0) {
          D0(X0);
        }
      }
      function It(v0) {
        try {
          j0(De.throw(v0));
        } catch (X0) {
          D0(X0);
        }
      }
      function j0(v0) {
        v0.done ? Ue(v0.value) : i0(v0.value).then(lt, It);
      }
      j0((De = De.apply(B, ue || [])).next());
    });
  };
  const a = !0;
  let { classNames: i = "" } = e, { bodyClassNames: l = "" } = e, { inputClassNames: o = "" } = e, { header: s = !1 } = e, { showIcon: u = !1 } = e, { inputName: f = "" } = e, { placeholder: d = "" } = e, { required: g = !1 } = e, { inputValue: v = "" } = e, { disabled: E = !1 } = e, { searchParams: F = {} } = e, { url: z = "https://hf-mirror.com/api/quicksearch" } = e, { initialFocus: T = !1 } = e, { position: _ = "absolute" } = e, { showSearchType: b = !0 } = e, { resetLastQueryOnCommit: x = !1 } = e, k = [], S = !1, C = null, R = 0, N, L, H, G = -1, ie, $ = new AbortController();
  const V = {}, Z = sh();
  oh(() => (document.addEventListener("click", me), T && H.focus(), () => {
    document.removeEventListener("click", me);
  }));
  function me(B) {
    if (!S)
      return;
    const ue = B.target;
    ue !== ie && !(ie != null && ie.contains(ue)) && t(12, S = !1);
  }
  function be(B) {
    t(18, G = k.findIndex((ue) => ue.id === B.id && ue.type === B.type)), Le();
  }
  function Le() {
    if (k[G]) {
      const B = k[G];
      t(0, v = B.id), Z("selected", B), x && (C = null), t(12, S = !1);
    }
  }
  function Fe(B) {
    var ue;
    B === 1 ? t(18, G = G + 1 > k.length - 1 ? 0 : G + 1) : t(18, G = G - 1 < 0 ? k.length - 1 : G - 1);
    const Ee = k[G];
    if (!Ee)
      return;
    const De = V[Et(Ee)];
    if (De.offsetTop < N.scrollTop) {
      const i0 = ((ue = N.firstElementChild) === null || ue === void 0 ? void 0 : ue.clientHeight) || 0;
      N.scrollTo({ top: De.offsetTop - i0 });
    } else De.offsetTop + De.offsetHeight > N.scrollTop + N.offsetHeight && N.scrollTo({ top: De.offsetTop });
  }
  function fe() {
    return n(this, void 0, void 0, function* () {
      C === null && (yield ye()), t(12, S = !0);
    });
  }
  function ve(B) {
    B.key === "Escape" && S ? (B.preventDefault(), B.stopPropagation(), t(12, S = !1)) : B.key === "Enter" && S ? (B.preventDefault(), Le()) : B.altKey && B.key === "ArrowUp" && S ? (B.preventDefault(), t(12, S = !1)) : B.altKey && B.key === "ArrowDown" && !S ? (B.preventDefault(), t(12, S = !0)) : B.key === "ArrowUp" && S ? (B.preventDefault(), Fe(-1)) : B.key === "ArrowDown" && S ? (B.preventDefault(), Fe(1)) : (B.metaKey || B.ctrlKey) && B.code === "KeyK" && (B.preventDefault(), t(12, S = !1));
  }
  function ye() {
    return n(this, void 0, void 0, function* () {
      const B = v.trim();
      if (B !== C) {
        const ue = yield Qe(B);
        if (ue.isError) {
          ue.aborted || console.error(`QuickSearch Error: ${ue.error}`);
          return;
        }
        const Ee = Ie(ue.payload);
        t(15, k = [...Ee]), t(16, R = Ee.length), C = B, t(18, G = k.length ? 0 : -1);
      }
    });
  }
  const je = rh(
    () => n(void 0, void 0, void 0, function* () {
      t(12, S = !0), yield uh(), yield ye();
    }),
    fh
  );
  function q(B, ue) {
    var Ee, De;
    return ((Ee = k[B]) === null || Ee === void 0 ? void 0 : Ee.id) === ue.id && ((De = k[B]) === null || De === void 0 ? void 0 : De.type) === ue.type;
  }
  function Qe() {
    return n(this, arguments, void 0, function* (B = "") {
      $.abort(), $ = new AbortController();
      const { lang: ue, library: Ee, limit: De, orgsFilter: i0, pipelines: Ue, reposFilter: D0, searchType: lt, exclude: It, namespace: j0 } = F, v0 = Ue == null ? void 0 : Ue.filter((st) => st == null ? void 0 : st.trim()).join(",");
      return yield eh(
        z + Qf({
          q: B,
          lang: ue,
          library: Ee,
          limit: De,
          orgsFilter: i0,
          pipelines: v0,
          reposFilter: D0,
          type: lt,
          exclude: It,
          namespace: j0
        }),
        { signal: $.signal }
      );
    });
  }
  function Ie(B) {
    var ue, Ee, De, i0, Ue, D0, lt;
    const It = ((ue = B == null ? void 0 : B.datasets.length) !== null && ue !== void 0 ? ue : 0) + ((Ee = B == null ? void 0 : B.models.length) !== null && Ee !== void 0 ? Ee : 0) + ((De = B == null ? void 0 : B.orgs.length) !== null && De !== void 0 ? De : 0) + ((i0 = B == null ? void 0 : B.spaces.length) !== null && i0 !== void 0 ? i0 : 0) + ((Ue = B == null ? void 0 : B.users.length) !== null && Ue !== void 0 ? Ue : 0) + ((D0 = B == null ? void 0 : B.papers.length) !== null && D0 !== void 0 ? D0 : 0) + ((lt = B == null ? void 0 : B.collections.length) !== null && lt !== void 0 ? lt : 0);
    if (!B || !It)
      return [];
    const j0 = B.models.map((le) => ({
      href: F.withLinks ? `/${le.id}` : void 0,
      id: le.id,
      _id: le._id,
      label: le.id,
      type: "model"
    })), v0 = F.withLinks && B.modelsCount && B.q ? [] : [], X0 = B.datasets.map((le) => ({
      href: F.withLinks ? `/datasets/${le.id}` : void 0,
      id: le.id,
      _id: le._id,
      label: le.id,
      type: "dataset"
    })), st = F.withLinks && B.datasetsCount && B.q ? [] : [], Z0 = B.spaces.map((le) => ({
      href: F.withLinks ? `/spaces/${le.id}` : void 0,
      id: le.id,
      _id: le._id,
      label: le.id,
      type: "space"
    })), Ot = F.withLinks && B.spacesCount && B.q ? [] : [], kr = B.orgs.map((le) => ({
      href: F.withLinks ? `/${le.name}` : void 0,
      id: le.name,
      _id: le._id,
      imgUrl: le.avatarUrl,
      label: le.fullname,
      type: "org"
    })), Dr = B.users.map((le) => ({
      href: F.withLinks ? `/${le.user}` : void 0,
      id: le.user,
      _id: le._id,
      imgUrl: le.avatarUrl,
      label: le.user,
      type: "user",
      description: le.fullname
    })), Ar = B.papers.map((le) => ({
      _id: le._id,
      id: le._id,
      href: F.withLinks ? `/paper/${le._id}` : void 0,
      label: le._id,
      description: le.id,
      type: "paper"
    })), qt = B.collections.map((le) => ({
      _id: le._id,
      id: le._id,
      href: F.withLinks ? `/collections/${le._id}` : void 0,
      label: le.title,
      description: le.description,
      type: "collection"
    }));
    return [
      ...j0,
      ...v0,
      ...X0,
      ...st,
      ...Z0,
      ...Ot,
      ...kr,
      ...Dr,
      ...Ar ?? [],
      ...qt ?? []
    ];
  }
  function He() {
    v = this.value, t(0, v);
  }
  function o0(B) {
    R0[B ? "unshift" : "push"](() => {
      H = B, t(14, H);
    });
  }
  function Xe(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function n0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function g0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function k0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function Je(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function a0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function M0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function z0(B) {
    R0[B ? "unshift" : "push"](() => {
      N = B, t(17, N);
    });
  }
  function W0(B, ue) {
    R0[B ? "unshift" : "push"](() => {
      V[Et(ue)] = B, t(20, V);
    });
  }
  function Y0(B) {
    R0[B ? "unshift" : "push"](() => {
      L = B, t(13, L), t(10, _), t(14, H);
    });
  }
  function Qr(B) {
    R0[B ? "unshift" : "push"](() => {
      ie = B, t(19, ie);
    });
  }
  return r.$$set = (B) => {
    "classNames" in B && t(1, i = B.classNames), "bodyClassNames" in B && t(2, l = B.bodyClassNames), "inputClassNames" in B && t(3, o = B.inputClassNames), "header" in B && t(4, s = B.header), "showIcon" in B && t(5, u = B.showIcon), "inputName" in B && t(6, f = B.inputName), "placeholder" in B && t(7, d = B.placeholder), "required" in B && t(8, g = B.required), "inputValue" in B && t(0, v = B.inputValue), "disabled" in B && t(9, E = B.disabled), "searchParams" in B && t(27, F = B.searchParams), "url" in B && t(28, z = B.url), "initialFocus" in B && t(29, T = B.initialFocus), "position" in B && t(10, _ = B.position), "showSearchType" in B && t(11, b = B.showSearchType), "resetLastQueryOnCommit" in B && t(30, x = B.resetLastQueryOnCommit);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*position, resultsContainerWrapperElement, inputElement*/
    25600 && _ === "fixed" && L && t(13, L.style.width = `${H.clientWidth}px`, L), r.$$.dirty[0] & /*isOpen*/
    4096 && (S || Z("close"));
  }, [
    v,
    i,
    l,
    o,
    s,
    u,
    f,
    d,
    g,
    E,
    _,
    b,
    S,
    L,
    H,
    k,
    R,
    N,
    G,
    ie,
    V,
    be,
    fe,
    ve,
    je,
    q,
    a,
    F,
    z,
    T,
    x,
    He,
    o0,
    Xe,
    n0,
    g0,
    k0,
    Je,
    a0,
    M0,
    z0,
    W0,
    Y0,
    Qr
  ];
}
class dh extends nh {
  constructor(e) {
    super(), ah(
      this,
      e,
      mh,
      ch,
      lh,
      {
        hydrate: 26,
        classNames: 1,
        bodyClassNames: 2,
        inputClassNames: 3,
        header: 4,
        showIcon: 5,
        inputName: 6,
        placeholder: 7,
        required: 8,
        inputValue: 0,
        disabled: 9,
        searchParams: 27,
        url: 28,
        initialFocus: 29,
        position: 10,
        showSearchType: 11,
        resetLastQueryOnCommit: 30
      },
      null,
      [-1, -1, -1]
    );
  }
  get hydrate() {
    return this.$$.ctx[26];
  }
}
const {
  SvelteComponent: ph,
  attr: gh,
  children: vh,
  claim_element: bh,
  create_slot: yh,
  detach: uo,
  element: wh,
  get_all_dirty_from_scope: _h,
  get_slot_changes: kh,
  init: Dh,
  insert_hydration: Ah,
  safe_not_equal: xh,
  transition_in: Sh,
  transition_out: Fh,
  update_slot_base: Eh
} = window.__gradio__svelte__internal;
function Ch(r) {
  let e, t;
  const n = (
    /*#slots*/
    r[1].default
  ), a = yh(
    n,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = wh("div"), a && a.c(), this.h();
    },
    l(i) {
      e = bh(i, "DIV", { class: !0 });
      var l = vh(e);
      a && a.l(l), l.forEach(uo), this.h();
    },
    h() {
      gh(e, "class", "svelte-bv8rca");
    },
    m(i, l) {
      Ah(i, e, l), a && a.m(e, null), t = !0;
    },
    p(i, [l]) {
      a && a.p && (!t || l & /*$$scope*/
      1) && Eh(
        a,
        n,
        i,
        /*$$scope*/
        i[0],
        t ? kh(
          n,
          /*$$scope*/
          i[0],
          l,
          null
        ) : _h(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (Sh(a, i), t = !0);
    },
    o(i) {
      Fh(a, i), t = !1;
    },
    d(i) {
      i && uo(e), a && a.d(i);
    }
  };
}
function Th(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, a = i.$$scope);
  }, [a, n];
}
class Mh extends ph {
  constructor(e) {
    super(), Dh(this, e, Th, Ch, xh, {});
  }
}
const {
  SvelteComponent: zh,
  attr: va,
  check_outros: Bh,
  children: Nh,
  claim_component: Rh,
  claim_element: Lh,
  claim_space: Ih,
  claim_text: Oh,
  create_component: qh,
  create_slot: Ph,
  destroy_component: Hh,
  detach: Rr,
  element: Uh,
  empty: co,
  get_all_dirty_from_scope: Vh,
  get_slot_changes: Gh,
  group_outros: Wh,
  init: Yh,
  insert_hydration: An,
  mount_component: jh,
  null_to_empty: fo,
  safe_not_equal: Xh,
  set_data: Zh,
  space: $h,
  text: Kh,
  toggle_class: mr,
  transition_in: Lr,
  transition_out: xn,
  update_slot_base: Qh
} = window.__gradio__svelte__internal;
function ho(r) {
  let e, t;
  return e = new Mh({
    props: {
      $$slots: { default: [Jh] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      qh(e.$$.fragment);
    },
    l(n) {
      Rh(e.$$.fragment, n);
    },
    m(n, a) {
      jh(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*$$scope, info*/
      18 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (Lr(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hh(e, n);
    }
  };
}
function Jh(r) {
  let e;
  return {
    c() {
      e = Kh(
        /*info*/
        r[1]
      );
    },
    l(t) {
      e = Oh(
        t,
        /*info*/
        r[1]
      );
    },
    m(t, n) {
      An(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Zh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Rr(e);
    }
  };
}
function e5(r) {
  let e, t, n, a, i;
  const l = (
    /*#slots*/
    r[3].default
  ), o = Ph(
    l,
    r,
    /*$$scope*/
    r[4],
    null
  );
  let s = (
    /*info*/
    r[1] && ho(r)
  );
  return {
    c() {
      e = Uh("span"), o && o.c(), n = $h(), s && s.c(), a = co(), this.h();
    },
    l(u) {
      e = Lh(u, "SPAN", { "data-testid": !0, class: !0 });
      var f = Nh(e);
      o && o.l(f), f.forEach(Rr), n = Ih(u), s && s.l(u), a = co(), this.h();
    },
    h() {
      va(e, "data-testid", "block-info"), va(e, "class", t = fo(
        /*classNames*/
        r[2]
      ) + " svelte-10jur7g"), mr(e, "sr-only", !/*show_label*/
      r[0]), mr(e, "hide", !/*show_label*/
      r[0]), mr(
        e,
        "has-info",
        /*info*/
        r[1] != null
      );
    },
    m(u, f) {
      An(u, e, f), o && o.m(e, null), An(u, n, f), s && s.m(u, f), An(u, a, f), i = !0;
    },
    p(u, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      16) && Qh(
        o,
        l,
        u,
        /*$$scope*/
        u[4],
        i ? Gh(
          l,
          /*$$scope*/
          u[4],
          f,
          null
        ) : Vh(
          /*$$scope*/
          u[4]
        ),
        null
      ), (!i || f & /*classNames*/
      4 && t !== (t = fo(
        /*classNames*/
        u[2]
      ) + " svelte-10jur7g")) && va(e, "class", t), (!i || f & /*classNames, show_label*/
      5) && mr(e, "sr-only", !/*show_label*/
      u[0]), (!i || f & /*classNames, show_label*/
      5) && mr(e, "hide", !/*show_label*/
      u[0]), (!i || f & /*classNames, info*/
      6) && mr(
        e,
        "has-info",
        /*info*/
        u[1] != null
      ), /*info*/
      u[1] ? s ? (s.p(u, f), f & /*info*/
      2 && Lr(s, 1)) : (s = ho(u), s.c(), Lr(s, 1), s.m(a.parentNode, a)) : s && (Wh(), xn(s, 1, 1, () => {
        s = null;
      }), Bh());
    },
    i(u) {
      i || (Lr(o, u), Lr(s), i = !0);
    },
    o(u) {
      xn(o, u), xn(s), i = !1;
    },
    d(u) {
      u && (Rr(e), Rr(n), Rr(a)), o && o.d(u), s && s.d(u);
    }
  };
}
function t5(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { show_label: i = !0 } = e, { info: l = void 0 } = e, { classNames: o = "" } = e;
  return r.$$set = (s) => {
    "show_label" in s && t(0, i = s.show_label), "info" in s && t(1, l = s.info), "classNames" in s && t(2, o = s.classNames), "$$scope" in s && t(4, a = s.$$scope);
  }, [i, l, o, n, a];
}
class r5 extends zh {
  constructor(e) {
    super(), Yh(this, e, t5, e5, Xh, { show_label: 0, info: 1, classNames: 2 });
  }
}
const {
  SvelteComponent: n5,
  add_flush_callback: a5,
  assign: i5,
  attr: q1,
  bind: l5,
  binding_callbacks: s5,
  check_outros: o5,
  children: P1,
  claim_component: Ln,
  claim_element: H1,
  claim_space: mo,
  claim_text: u5,
  create_component: In,
  destroy_component: On,
  detach: rr,
  element: U1,
  flush: h0,
  get_spread_object: c5,
  get_spread_update: f5,
  group_outros: h5,
  init: m5,
  insert_hydration: Vr,
  mount_component: qn,
  safe_not_equal: d5,
  set_data: p5,
  space: po,
  text: g5,
  transition_in: Jt,
  transition_out: pr
} = window.__gradio__svelte__internal;
function go(r) {
  let e, t;
  const n = [
    { autoscroll: (
      /*gradio*/
      r[1].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      r[1].i18n
    ) },
    /*loading_status*/
    r[10]
  ];
  let a = {};
  for (let i = 0; i < n.length; i += 1)
    a = i5(a, n[i]);
  return e = new X2({ props: a }), {
    c() {
      In(e.$$.fragment);
    },
    l(i) {
      Ln(e.$$.fragment, i);
    },
    m(i, l) {
      qn(e, i, l), t = !0;
    },
    p(i, l) {
      const o = l & /*gradio, loading_status*/
      1026 ? f5(n, [
        l & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          i[1].autoscroll
        ) },
        l & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          i[1].i18n
        ) },
        l & /*loading_status*/
        1024 && c5(
          /*loading_status*/
          i[10]
        )
      ]) : {};
      e.$set(o);
    },
    i(i) {
      t || (Jt(e.$$.fragment, i), t = !0);
    },
    o(i) {
      pr(e.$$.fragment, i), t = !1;
    },
    d(i) {
      On(e, i);
    }
  };
}
function v5(r) {
  let e;
  return {
    c() {
      e = g5(
        /*label*/
        r[2]
      );
    },
    l(t) {
      e = u5(
        t,
        /*label*/
        r[2]
      );
    },
    m(t, n) {
      Vr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      4 && p5(
        e,
        /*label*/
        t[2]
      );
    },
    d(t) {
      t && rr(e);
    }
  };
}
function b5(r) {
  let e, t, n, a, i, l, o, s = (
    /*loading_status*/
    r[10] && go(r)
  );
  t = new r5({
    props: {
      classNames: "z-0",
      show_label: (
        /*show_label*/
        r[7]
      ),
      info: void 0,
      $$slots: { default: [v5] },
      $$scope: { ctx: r }
    }
  });
  function u(d) {
    r[15](d);
  }
  let f = {
    classNames: "flex-1",
    header: !0,
    showIcon: !0,
    disabled: !/*interactive*/
    r[11],
    placeholder: (
      /*placeholder*/
      r[6]
    ),
    searchParams: {
      withLinks: !0,
      searchType: (
        /*search_type*/
        r[12]
      )
    }
  };
  return (
    /*value*/
    r[0] !== void 0 && (f.inputValue = /*value*/
    r[0]), i = new dh({ props: f }), s5.push(() => l5(i, "inputValue", u)), i.$on(
      "selected",
      /*selected_handler*/
      r[16]
    ), {
      c() {
        s && s.c(), e = po(), In(t.$$.fragment), n = po(), a = U1("div"), In(i.$$.fragment), this.h();
      },
      l(d) {
        s && s.l(d), e = mo(d), Ln(t.$$.fragment, d), n = mo(d), a = H1(d, "DIV", { class: !0 });
        var g = P1(a);
        Ln(i.$$.fragment, g), g.forEach(rr), this.h();
      },
      h() {
        q1(a, "class", "relative");
      },
      m(d, g) {
        s && s.m(d, g), Vr(d, e, g), qn(t, d, g), Vr(d, n, g), Vr(d, a, g), qn(i, a, null), o = !0;
      },
      p(d, g) {
        /*loading_status*/
        d[10] ? s ? (s.p(d, g), g & /*loading_status*/
        1024 && Jt(s, 1)) : (s = go(d), s.c(), Jt(s, 1), s.m(e.parentNode, e)) : s && (h5(), pr(s, 1, 1, () => {
          s = null;
        }), o5());
        const v = {};
        g & /*show_label*/
        128 && (v.show_label = /*show_label*/
        d[7]), g & /*$$scope, label*/
        524292 && (v.$$scope = { dirty: g, ctx: d }), t.$set(v);
        const E = {};
        g & /*interactive*/
        2048 && (E.disabled = !/*interactive*/
        d[11]), g & /*placeholder*/
        64 && (E.placeholder = /*placeholder*/
        d[6]), g & /*search_type*/
        4096 && (E.searchParams = {
          withLinks: !0,
          searchType: (
            /*search_type*/
            d[12]
          )
        }), !l && g & /*value*/
        1 && (l = !0, E.inputValue = /*value*/
        d[0], a5(() => l = !1)), i.$set(E);
      },
      i(d) {
        o || (Jt(s), Jt(t.$$.fragment, d), Jt(i.$$.fragment, d), o = !0);
      },
      o(d) {
        pr(s), pr(t.$$.fragment, d), pr(i.$$.fragment, d), o = !1;
      },
      d(d) {
        d && (rr(e), rr(n), rr(a)), s && s.d(d), On(t, d), On(i);
      }
    }
  );
}
function y5(r) {
  let e, t, n;
  return t = new du({
    props: {
      visible: (
        /*visible*/
        r[5]
      ),
      elem_id: (
        /*elem_id*/
        r[3]
      ),
      elem_classes: (
        /*elem_classes*/
        r[4]
      ),
      scale: (
        /*scale*/
        r[8]
      ),
      min_width: (
        /*min_width*/
        r[9]
      ),
      allow_overflow: !0,
      padding: !0,
      $$slots: { default: [b5] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      e = U1("div"), In(t.$$.fragment), this.h();
    },
    l(a) {
      e = H1(a, "DIV", { class: !0 });
      var i = P1(e);
      Ln(t.$$.fragment, i), i.forEach(rr), this.h();
    },
    h() {
      q1(e, "class", "custom-component");
    },
    m(a, i) {
      Vr(a, e, i), qn(t, e, null), n = !0;
    },
    p(a, [i]) {
      const l = {};
      i & /*visible*/
      32 && (l.visible = /*visible*/
      a[5]), i & /*elem_id*/
      8 && (l.elem_id = /*elem_id*/
      a[3]), i & /*elem_classes*/
      16 && (l.elem_classes = /*elem_classes*/
      a[4]), i & /*scale*/
      256 && (l.scale = /*scale*/
      a[8]), i & /*min_width*/
      512 && (l.min_width = /*min_width*/
      a[9]), i & /*$$scope, interactive, placeholder, search_type, value, sumbit_on_select, gradio, show_label, label, loading_status*/
      539847 && (l.$$scope = { dirty: i, ctx: a }), t.$set(l);
    },
    i(a) {
      n || (Jt(t.$$.fragment, a), n = !0);
    },
    o(a) {
      pr(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && rr(e), On(t);
    }
  };
}
function w5(r, e, t) {
  let { gradio: n } = e, { label: a = "Textbox" } = e, { elem_id: i = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = "" } = e, { placeholder: u = "Search models, datasets, users..." } = e, { show_label: f } = e, { scale: d = null } = e, { min_width: g = void 0 } = e, { loading_status: v = void 0 } = e, { value_is_output: E = !1 } = e, { interactive: F } = e, { search_type: z = ["model", "dataset", "space", "org", "user"] } = e, { sumbit_on_select: T = !0 } = e;
  function _() {
    n.dispatch("change"), E || n.dispatch("input");
  }
  function b(k) {
    s = k, t(0, s);
  }
  const x = () => {
    T && n.dispatch("submit");
  };
  return r.$$set = (k) => {
    "gradio" in k && t(1, n = k.gradio), "label" in k && t(2, a = k.label), "elem_id" in k && t(3, i = k.elem_id), "elem_classes" in k && t(4, l = k.elem_classes), "visible" in k && t(5, o = k.visible), "value" in k && t(0, s = k.value), "placeholder" in k && t(6, u = k.placeholder), "show_label" in k && t(7, f = k.show_label), "scale" in k && t(8, d = k.scale), "min_width" in k && t(9, g = k.min_width), "loading_status" in k && t(10, v = k.loading_status), "value_is_output" in k && t(14, E = k.value_is_output), "interactive" in k && t(11, F = k.interactive), "search_type" in k && t(12, z = k.search_type), "sumbit_on_select" in k && t(13, T = k.sumbit_on_select);
  }, r.$$.update = () => {
    r.$$.dirty & /*value*/
    1 && s === null && t(0, s = ""), r.$$.dirty & /*value*/
    1 && _();
  }, [
    s,
    n,
    a,
    i,
    l,
    o,
    u,
    f,
    d,
    g,
    v,
    F,
    z,
    T,
    E,
    b,
    x
  ];
}
class k5 extends n5 {
  constructor(e) {
    super(), m5(this, e, w5, y5, d5, {
      gradio: 1,
      label: 2,
      elem_id: 3,
      elem_classes: 4,
      visible: 5,
      value: 0,
      placeholder: 6,
      show_label: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      value_is_output: 14,
      interactive: 11,
      search_type: 12,
      sumbit_on_select: 13
    });
  }
  get gradio() {
    return this.$$.ctx[1];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), h0();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), h0();
  }
  get elem_id() {
    return this.$$.ctx[3];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), h0();
  }
  get elem_classes() {
    return this.$$.ctx[4];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), h0();
  }
  get visible() {
    return this.$$.ctx[5];
  }
  set visible(e) {
    this.$$set({ visible: e }), h0();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), h0();
  }
  get placeholder() {
    return this.$$.ctx[6];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), h0();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), h0();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(e) {
    this.$$set({ scale: e }), h0();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), h0();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), h0();
  }
  get value_is_output() {
    return this.$$.ctx[14];
  }
  set value_is_output(e) {
    this.$$set({ value_is_output: e }), h0();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h0();
  }
  get search_type() {
    return this.$$.ctx[12];
  }
  set search_type(e) {
    this.$$set({ search_type: e }), h0();
  }
  get sumbit_on_select() {
    return this.$$.ctx[13];
  }
  set sumbit_on_select(e) {
    this.$$set({ sumbit_on_select: e }), h0();
  }
}
export {
  k5 as default
};
