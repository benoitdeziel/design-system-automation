import { jsx as V } from "react/jsx-runtime";
function S(r) {
  return typeof r == "object" && r != null && !Array.isArray(r);
}
var D = (r) => typeof r == "object" && r !== null;
function R(r) {
  return Object.fromEntries(Object.entries(r ?? {}).filter(([t, o]) => o !== void 0));
}
var L = (r) => r === "base";
function X(r) {
  return r.slice().filter((t) => !L(t));
}
function v(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
}
function Y(r) {
  let t = "", o;
  for (o = Math.abs(r); o > 52; o = o / 52 | 0)
    t = v(o % 52) + t;
  return v(o % 52) + t;
}
function F(r, t) {
  let o = t.length;
  for (; o; )
    r = r * 33 ^ t.charCodeAt(--o);
  return r;
}
function N(r) {
  return Y(F(5381, r) >>> 0);
}
var O = /\s*!(important)?/i;
function G(r) {
  return typeof r == "string" ? O.test(r) : !1;
}
function q(r) {
  return typeof r == "string" ? r.replace(O, "").trim() : r;
}
function E(r) {
  return typeof r == "string" ? r.replaceAll(" ", "_") : r;
}
var _ = (r) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const e = JSON.stringify(n);
    if (t.has(e))
      return t.get(e);
    const i = r(...n);
    return t.set(e, i), i;
  };
}, H = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function k(...r) {
  return r.reduce((t, o) => (o && Object.keys(o).forEach((n) => {
    if (H.has(n))
      return;
    const e = t[n], i = o[n];
    S(e) && S(i) ? t[n] = k(e, i) : t[n] = i;
  }), t), {});
}
var K = (r) => r != null;
function T(r, t, o = {}) {
  const { stop: n, getKey: e } = o;
  function i(a, s = []) {
    if (D(a)) {
      const d = {};
      for (const [c, p] of Object.entries(a)) {
        const g = (e == null ? void 0 : e(c, p)) ?? c, l = [...s, g];
        if (n != null && n(a, l))
          return t(a, s);
        const b = i(p, l);
        K(b) && (d[g] = b);
      }
      return d;
    }
    return t(a, s);
  }
  return i(r);
}
function $(r, t) {
  return r.reduce(
    (o, n, e) => {
      const i = t[e];
      return n != null && (o[i] = n), o;
    },
    {}
  );
}
function j(r, t, o = !0) {
  const { utility: n, conditions: e } = t, { hasShorthand: i, resolveShorthand: a } = n;
  return T(
    r,
    (s) => Array.isArray(s) ? $(s, e.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: o ? (s) => i ? a(s) : s : void 0
    }
  );
}
var Z = {
  shift: (r) => r,
  finalize: (r) => r,
  breakpoints: { keys: [] }
}, U = (r) => typeof r == "string" ? r.replaceAll(/[\n\s]+/g, " ") : r;
function J(r) {
  const { utility: t, hash: o, conditions: n = Z } = r, e = (a) => [t.prefix, a].filter(Boolean).join("-"), i = (a, s) => {
    let d;
    if (o) {
      const c = [...n.finalize(a), s];
      d = e(t.toHash(c, N));
    } else
      d = [...n.finalize(a), e(s)].join(":");
    return d;
  };
  return _(({ base: a, ...s } = {}) => {
    const d = Object.assign(s, a), c = j(d, r), p = /* @__PURE__ */ new Set();
    return T(c, (g, l) => {
      if (g == null)
        return;
      const b = G(g), [m, ...u] = n.shift(l), y = X(u), x = t.transform(m, q(U(g)));
      let h = i(y, x.className);
      b && (h = `${h}!`), p.add(h);
    }), Array.from(p).join(" ");
  });
}
function Q(...r) {
  return r.flat().filter((t) => S(t) && Object.keys(R(t)).length > 0);
}
function rr(r) {
  function t(e) {
    const i = Q(...e);
    return i.length === 1 ? i : i.map((a) => j(a, r));
  }
  function o(...e) {
    return k(...t(e));
  }
  function n(...e) {
    return Object.assign({}, ...t(e));
  }
  return { mergeCss: _(o), assignCss: n };
}
var tr = /([A-Z])/g, or = /^ms-/, nr = _((r) => r.startsWith("--") ? r : r.replace(tr, "-$1").replace(or, "-ms-").toLowerCase()), er = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${er.split(",").join("|")}`;
function ir(r, ...t) {
  const o = Object.getOwnPropertyDescriptors(r), n = Object.keys(o), e = (a) => {
    const s = {};
    for (let d = 0; d < a.length; d++) {
      const c = a[d];
      o[c] && (Object.defineProperty(s, c, o[c]), delete o[c]);
    }
    return s;
  }, i = (a) => e(Array.isArray(a) ? a : n.filter(a));
  return t.map(i).concat(e(n));
}
var ar = (...r) => {
  const t = r.reduce((o, n) => (n && n.forEach((e) => o.add(e)), o), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const sr = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", P = new Set(sr.split(",")), lr = /^@|&|&$/;
function w(r) {
  return P.has(r) || lr.test(r);
}
const dr = /^_/, cr = /&|@/;
function br(r) {
  return r.map((t) => P.has(t) ? t.replace(dr, "") : cr.test(t) ? `[${E(t.trim())}]` : t);
}
function gr(r) {
  return r.sort((t, o) => {
    const n = w(t), e = w(o);
    return n && !e ? 1 : !n && e ? -1 : 0;
  });
}
const pr = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", I = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
pr.split(",").forEach((r) => {
  const [t, o] = r.split(":"), [n, ...e] = o.split("/");
  I.set(t, n), e.length && e.forEach((i) => {
    A.set(i === "1" ? n : i, t);
  });
});
const C = (r) => A.get(r) || r, M = {
  conditions: {
    shift: gr,
    finalize: br,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (r, t) => {
      const o = C(r);
      return { className: `${I.get(o) || nr(o)}_${E(t)}` };
    },
    hasShorthand: !0,
    toHash: (r, t) => t(r.join(":")),
    resolveShorthand: C
  }
}, mr = J(M), W = (...r) => mr(f(...r));
W.raw = (...r) => f(...r);
const { mergeCss: f } = rr(M), B = (r) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...r
});
function z(r) {
  const { base: t, variants: o, defaultVariants: n, compoundVariants: e } = B(r), i = (l) => ({ ...n, ...R(l) });
  function a(l = {}) {
    var y;
    const b = i(l);
    let m = { ...t };
    for (const [x, h] of Object.entries(b))
      (y = o[x]) != null && y[h] && (m = f(m, o[x][h]));
    const u = ur(e, b);
    return f(m, u);
  }
  function s(l) {
    const b = B(l.config), m = ar(l.variantKeys, Object.keys(o));
    return z({
      base: f(t, b.base),
      variants: Object.fromEntries(
        m.map((u) => [u, f(o[u], b.variants[u])])
      ),
      defaultVariants: k(n, b.defaultVariants),
      compoundVariants: [...e, ...b.compoundVariants]
    });
  }
  function d(l) {
    return W(a(l));
  }
  const c = Object.keys(o);
  function p(l) {
    return ir(l, c);
  }
  const g = Object.fromEntries(Object.entries(o).map(([l, b]) => [l, Object.keys(b)]));
  return Object.assign(_(d), {
    __cva__: !0,
    variantMap: g,
    variantKeys: c,
    raw: a,
    config: r,
    merge: s,
    splitVariantProps: p,
    getVariantProps: i
  });
}
function ur(r, t) {
  let o = {};
  return r.forEach((n) => {
    Object.entries(n).every(([i, a]) => i === "css" ? !0 : (Array.isArray(a) ? a : [a]).some((d) => t[i] === d)) && (o = f(o, n.css));
  }), o;
}
const fr = z({
  base: {
    display: "inline-flex",
    paddingY: "2",
    paddingX: "4",
    backgroundColor: "primary.bg",
    borderRadius: "md",
    color: "primary.fg",
    fontWeight: "bold",
    cursor: "pointer"
  }
});
function yr(r) {
  const { children: t, ...o } = r, n = fr();
  return /* @__PURE__ */ V("button", { ...o, className: n, children: t });
}
export {
  yr as Button
};
