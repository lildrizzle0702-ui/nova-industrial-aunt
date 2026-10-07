import { useId } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { Finish, ProductVisualSpec } from '../../data/types';
import { brand } from '../../config/brand';

/* ============================================================
   PRODUCT VISUAL SYSTEM
   Deterministic SVG "photography" for every SKU: a front render,
   a dimensioned technical drawing and a material detail view.
   No external images — nothing can break.
   ============================================================ */

export type ProductView = 'hero' | 'technical' | 'detail';

interface FinishPalette {
  face: [string, string];
  edge: string;
  rocker: [string, string];
  deep: string;
  engraving: string;
}

const FINISHES: Record<Finish, FinishPalette> = {
  white: {
    face: ['#fcfbf8', '#e9e5dd'],
    edge: '#d3cfc6',
    rocker: ['#f1efe9', '#d9d5cc'],
    deep: '#b9b5ac',
    engraving: 'rgba(23,27,30,0.32)',
  },
  black: {
    face: ['#3a4147', '#20252a'],
    edge: '#12161a',
    rocker: ['#464e55', '#272d32'],
    deep: '#15191d',
    engraving: 'rgba(255,255,255,0.38)',
  },
  chrome: {
    face: ['#f5f6f7', '#c4c9cd'],
    edge: '#959ba1',
    rocker: ['#eef0f2', '#bdc2c7'],
    deep: '#9aa0a6',
    engraving: 'rgba(23,27,30,0.34)',
  },
  champagne: {
    face: ['#eddaba', '#d5b98a'],
    edge: '#b9975f',
    rocker: ['#e7d3b1', '#cbae80'],
    deep: '#a8864e',
    engraving: 'rgba(90,66,30,0.4)',
  },
  graphite: {
    face: ['#5b6167', '#3d4249'],
    edge: '#2c3036',
    rocker: ['#666d74', '#484e55'],
    deep: '#23272c',
    engraving: 'rgba(255,255,255,0.4)',
  },
};

const INK = '#1b2328';
const ACCENT = 'var(--accent)';

/** Shared gradients/filters referenced by every visual instance.
 *  Rendered once from App; ids are document-global. */
export function VisualDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="vis-sheen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vis-cover-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#cfd6da" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-face`} x1="0" y1="0" x2="0" y2="1">
        <StopVar var1={`--vis-face-top-${id}`} var2={`--vis-face-bottom-${id}`} />
      </linearGradient>
      <linearGradient id={`${id}-rocker`} x1="0" y1="0" x2="0" y2="1">
        <StopVar var1={`--vis-rocker-top-${id}`} var2={`--vis-rocker-bottom-${id}`} />
      </linearGradient>
      <filter id={`${id}-ds`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#14181b" floodOpacity="0.16" />
      </filter>
      <linearGradient id={`macro-${id}`} x1="0" y1="0" x2="1" y2="1">
        <StopVar var1={`--vis-face-top-${id}`} var2={`--vis-edge-${id}`} />
      </linearGradient>
    </defs>
  );
}

/** stop-color must be set via style for CSS variables to apply */
function StopVar({ var1, var2 }: { var1: string; var2: string }) {
  return (
    <>
      <stop offset="0" style={{ stopColor: `var(${var1})` }} />
      <stop offset="1" style={{ stopColor: `var(${var2})` }} />
    </>
  );
}

function Plate({
  id,
  x,
  y,
  w,
  h,
  finish,
  r = 7,
}: {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  finish: Finish;
  r?: number;
}) {
  const f = FINISHES[finish];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={r}
        fill={`url(#${id}-face)`}
        stroke={f.edge}
        strokeWidth={0.8}
      />
      <rect
        x={x + 5}
        y={y + 5}
        width={w - 10}
        height={h - 10}
        rx={Math.max(r - 2.5, 1)}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={0.7}
        opacity={finish === 'white' ? 0.55 : 0.25}
      />
    </g>
  );
}

function Rocker({
  id,
  cx,
  cy,
  w,
  h,
  finish,
}: {
  id: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  finish: Finish;
}) {
  const f = FINISHES[finish];
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - h / 2 + 3}
        width={w}
        height={h}
        rx={9}
        fill={f.deep}
        opacity={0.5}
      />
      <rect
        x={cx - w / 2}
        y={cy - h / 2}
        width={w}
        height={h}
        rx={9}
        fill={`url(#${id}-rocker)`}
        stroke="rgba(0,0,0,0.18)"
        strokeWidth={0.7}
      />
      <rect
        x={cx - w / 2 + 7}
        y={cy - h / 2 + 6}
        width={w - 14}
        height={h * 0.34}
        rx={6}
        fill="url(#vis-sheen)"
        opacity={0.35}
      />
    </g>
  );
}

function Engraving({ x, y, tone }: { x: number; y: number; tone: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="'IBM Plex Mono', monospace"
      fontSize={9}
      letterSpacing={4}
      fill={tone}
    >
      {brand.wordmarkPrimary}
    </text>
  );
}

/* ---------- Front renders per family ---------- */

function RockerRender({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  switch (spec.variant) {
    case 2: // 2-gang
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <Rocker id={id} cx={156} cy={192} w={86} h={88} finish={spec.finish} />
          <Rocker id={id} cx={244} cy={192} w={86} h={88} finish={spec.finish} />
          <Engraving x={200} y={286} tone={f.engraving} />
        </>
      );
    case 3: // bell press — round button
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <circle cx={200} cy={186} r={50} fill={f.deep} opacity={0.5} />
          <circle cx={200} cy={182} r={50} fill={`url(#${id}-rocker)`} stroke="rgba(0,0,0,0.18)" strokeWidth={0.7} />
          <circle cx={200} cy={170} r={34} fill="url(#vis-sheen)" opacity={0.4} />
          <Engraving x={200} y={272} tone={f.engraving} />
        </>
      );
    case 4: // rotary dimmer — knob
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          {[-45, 0, 45, 90, 135, 180, 225].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 74;
            const y1 = 186 + Math.sin(rad) * 74;
            const x2 = 200 + Math.cos(rad) * 84;
            const y2 = 186 + Math.sin(rad) * 84;
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,0,0,0.28)" strokeWidth={1.4} />;
          })}
          <circle cx={200} cy={190} r={52} fill={f.deep} opacity={0.5} />
          <circle cx={200} cy={186} r={52} fill={`url(#${id}-rocker)`} stroke="rgba(0,0,0,0.2)" strokeWidth={0.8} />
          <circle cx={200} cy={174} r={36} fill="url(#vis-sheen)" opacity={0.4} />
          <line x1={200} y1={186} x2={200} y2={148} style={{ stroke: ACCENT }} strokeWidth={3} strokeLinecap="round" />
          <Engraving x={200} y={286} tone={f.engraving} />
        </>
      );
    case 5: // weatherproof — enclosure with hinged cover
      return (
        <>
          <rect x={80} y={84} width={240} height={232} rx={10} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="rgba(0,0,0,0.14)" />
          <Rocker id={id} cx={200} cy={178} w={92} h={96} finish={spec.finish} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="url(#vis-cover-glass)" opacity={0.5} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={1.2} />
          <rect x={108} y={290} width={60} height={12} rx={3} fill={f.deep} />
          <Engraving x={200} y={302} tone="rgba(255,255,255,0.4)" />
        </>
      );
    default: // 1-gang rocker
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <Rocker id={id} cx={200} cy={190} w={118} h={92} finish={spec.finish} />
          <Engraving x={200} y={286} tone={f.engraving} />
        </>
      );
  }
}

function SocketRender({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  switch (spec.variant) {
    case 2: // BS 1363 — switched socket
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <Rocker id={id} cx={200} cy={148} w={120} h={46} finish={spec.finish} />
          <rect x={194} y={176} width={12} height={24} rx={2} fill={f.deep} stroke="rgba(0,0,0,0.25)" strokeWidth={0.6} />
          <rect x={148} y={216} width={20} height={30} rx={3} fill={f.deep} stroke="rgba(0,0,0,0.25)" strokeWidth={0.6} />
          <rect x={232} y={216} width={20} height={30} rx={3} fill={f.deep} stroke="rgba(0,0,0,0.25)" strokeWidth={0.6} />
          <Engraving x={200} y={292} tone={f.engraving} />
        </>
      );
    case 3: // universal multi-standard
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <circle cx={200} cy={190} r={82} fill="rgba(0,0,0,0.1)" />
          <circle cx={200} cy={190} r={82} fill="none" stroke={f.deep} strokeWidth={0.8} />
          <circle cx={164} cy={190} r={13} fill={f.deep} />
          <circle cx={236} cy={190} r={13} fill={f.deep} />
          <rect x={188} y={132} width={24} height={11} rx={2} fill={f.deep} />
          <rect x={172} y={226} width={12} height={22} rx={2} fill={f.deep} />
          <rect x={194} y={226} width={12} height={22} rx={2} fill={f.deep} />
          <rect x={216} y={226} width={12} height={22} rx={2} fill={f.deep} />
          <Engraving x={200} y={298} tone={f.engraving} />
        </>
      );
    case 4: // US duplex — tall strap
      return (
        <>
          <Plate id={id} x={104} y={74} w={192} h={252} finish={spec.finish} r={10} />
          <circle cx={200} cy={94} r={4} fill={f.deep} opacity={0.7} />
          {[138, 226].map((top) => (
            <g key={top}>
              <path
                d={`M182 ${top} h36 a10 10 0 0 1 10 10 v36 a10 10 0 0 1 -10 10 h-36 a10 10 0 0 1 -10 -10 v-36 a10 10 0 0 1 10 -10 z`}
                fill="rgba(0,0,0,0.12)"
                stroke={f.deep}
                strokeWidth={0.8}
              />
              <rect x={186} y={top + 10} width={8} height={14} rx={2} fill={f.deep} />
              <rect x={206} y={top + 10} width={8} height={14} rx={2} fill={f.deep} />
              <rect x={186} y={top + 30} width={8} height={18} rx={2} fill={f.deep} />
              <rect x={206} y={top + 30} width={8} height={18} rx={2} fill={f.deep} />
            </g>
          ))}
          <Engraving x={200} y={314} tone={f.engraving} />
        </>
      );
    case 5: // weatherproof socket — enclosure + schuko
      return (
        <>
          <rect x={80} y={84} width={240} height={232} rx={10} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="rgba(0,0,0,0.14)" />
          <circle cx={200} cy={178} r={62} fill="rgba(0,0,0,0.1)" stroke={f.deep} strokeWidth={0.8} />
          <circle cx={176} cy={178} r={11} fill={f.deep} />
          <circle cx={224} cy={178} r={11} fill={f.deep} />
          <rect x={108} y={244} width={60} height={12} rx={3} fill={f.deep} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="url(#vis-cover-glass)" opacity={0.5} />
          <rect x={98} y={102} width={204} height={196} rx={7} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={1.2} />
          <Engraving x={200} y={302} tone="rgba(255,255,255,0.4)" />
        </>
      );
    default: // Schuko
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <circle cx={200} cy={186} r={78} fill="rgba(0,0,0,0.1)" />
          <circle cx={200} cy={186} r={78} fill="none" stroke={f.deep} strokeWidth={0.8} />
          <circle cx={200} cy={152} r={9} fill={f.deep} />
          <circle cx={200} cy={220} r={9} fill={f.deep} />
          <circle cx={162} cy={186} r={17} fill={f.deep} />
          <circle cx={238} cy={186} r={17} fill={f.deep} />
          <circle cx={162} cy={186} r={11} fill="#0d0f11" />
          <circle cx={238} cy={186} r={11} fill="#0d0f11" />
          <Engraving x={200} y={292} tone={f.engraving} />
        </>
      );
  }
}

function UsbRender({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  const usbA = (x: number, y: number, w = 56) => (
    <g>
      <rect x={x - w / 2} y={y - 13} width={w} height={26} rx={3} fill="#0d0f11" stroke={f.deep} strokeWidth={0.7} />
      <rect x={x - w / 2 + 6} y={y - 6} width={w - 12} height={12} rx={1.5} fill="#3c4147" />
      <rect x={x - w / 2 + 6} y={y - 6} width={w - 12} height={5} rx={1.5} fill="#565c62" />
    </g>
  );
  const usbC = (x: number, y: number) => (
    <g>
      <rect x={x - 22} y={y - 9} width={44} height={18} rx={9} fill="#0d0f11" stroke={f.deep} strokeWidth={0.7} />
      <rect x={x - 17} y={y - 3.5} width={34} height={7} rx={3.5} fill="#3c4147" />
    </g>
  );
  switch (spec.variant) {
    case 2: // USB-C PD 30W
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          {usbC(200, 186)}
          <circle cx={200} cy={224} r={3.5} style={{ fill: ACCENT }} opacity={0.85} />
          <Engraving x={200} y={272} tone={f.engraving} />
        </>
      );
    case 3: // A + C combo
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          {usbC(168, 186)}
          {usbA(242, 186)}
          <Engraving x={200} y={282} tone={f.engraving} />
        </>
      );
    case 4: // GaN module — 55-format face
      return (
        <>
          <rect x={126} y={98} width={148} height={204} rx={9} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
          <rect x={134} y={106} width={132} height={188} rx={6} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={0.8} />
          {usbC(200, 168)}
          {usbA(200, 226, 52)}
          <circle cx={200} cy={266} r={3.2} style={{ fill: ACCENT }} opacity={0.85} />
          <Engraving x={200} y={126} tone={f.engraving} />
        </>
      );
    default: // dual USB-A
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          {usbA(158, 186)}
          {usbA(242, 186)}
          <Engraving x={200} y={282} tone={f.engraving} />
        </>
      );
  }
}

function SmartRender({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  const glass = (
    <>
      <rect x={90} y={90} width={220} height={220} rx={7} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
      <path d="M90 176 L310 118 L310 90 L90 90 Z" fill="url(#vis-sheen)" opacity={0.14} />
    </>
  );
  switch (spec.variant) {
    case 2: // 2-gang touch dimmer — two slide bars
      return (
        <>
          {glass}
          <rect x={132} y={132} width={58} height={136} rx={29} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.28)" strokeWidth={1} />
          <rect x={210} y={132} width={58} height={136} rx={29} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.28)" strokeWidth={1} />
          <circle cx={161} cy={172} r={13} fill="url(#vis-sheen)" opacity={0.7} />
          <circle cx={239} cy={214} r={13} fill="url(#vis-sheen)" opacity={0.7} />
          <rect x={148} y={288} width={104} height={3} rx={1.5} style={{ fill: ACCENT }} opacity={0.8} />
        </>
      );
    case 3: // smart socket — schuko + metering strip
      return (
        <>
          <rect x={90} y={90} width={220} height={220} rx={7} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
          <circle cx={200} cy={180} r={64} fill="rgba(0,0,0,0.1)" stroke={f.deep} strokeWidth={0.8} />
          <circle cx={200} cy={150} r={8} fill={f.deep} />
          <circle cx={200} cy={210} r={8} fill={f.deep} />
          <circle cx={166} cy={180} r={14} fill={f.deep} />
          <circle cx={234} cy={180} r={14} fill={f.deep} />
          <circle cx={166} cy={180} r={9} fill="#0d0f11" />
          <circle cx={234} cy={180} r={9} fill="#0d0f11" />
          <rect x={128} y={266} width={144} height={4} rx={2} style={{ fill: ACCENT }} opacity={0.8} />
          <path d="M266 116 a20 20 0 0 1 14 8" style={{ stroke: ACCENT }} strokeWidth={1.6} fill="none" opacity={0.9} strokeLinecap="round" />
          <path d="M272 108 a30 30 0 0 1 20 11" style={{ stroke: ACCENT }} strokeWidth={1.6} fill="none" opacity={0.55} strokeLinecap="round" />
        </>
      );
    case 4: // 4-zone scene panel — four bars
      return (
        <>
          {glass}
          {[136, 184, 232, 280].map((y) => (
            <g key={y}>
              <rect x={126} y={y} width={148} height={34} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
              <rect x={126} y={y} width={148} height={34} rx={6} fill="url(#vis-sheen)" opacity={0.08} />
            </g>
          ))}
          <circle cx={146} cy={153} r={4} style={{ fill: ACCENT }} opacity={0.9} />
          <circle cx={146} cy={201} r={4} fill="rgba(255,255,255,0.3)" />
          <circle cx={146} cy={249} r={4} fill="rgba(255,255,255,0.3)" />
          <circle cx={146} cy={297} r={4} fill="rgba(255,255,255,0.3)" />
        </>
      );
    default: // 1-gang touch
      return (
        <>
          {glass}
          <circle cx={200} cy={186} r={52} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.3)" strokeWidth={1.2} />
          <circle cx={200} cy={186} r={44} fill="url(#vis-sheen)" opacity={0.12} />
          <circle cx={200} cy={186} r={4} style={{ fill: ACCENT }} opacity={0.9} />
          <rect x={148} y={288} width={104} height={3} rx={1.5} fill="rgba(255,255,255,0.35)" />
        </>
      );
  }
}

function AccessoryRender({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  switch (spec.variant) {
    case 2: // 2-module frame
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <rect x={112} y={146} width={80} height={80} rx={5} fill="rgba(0,0,0,0.14)" stroke={f.deep} strokeWidth={0.8} />
          <rect x={208} y={146} width={80} height={80} rx={5} fill="rgba(0,0,0,0.14)" stroke={f.deep} strokeWidth={0.8} />
          <rect x={112} y={146} width={80} height={26} fill="url(#vis-sheen)" opacity={0.25} />
          <rect x={208} y={146} width={80} height={26} fill="url(#vis-sheen)" opacity={0.25} />
          <Engraving x={200} y={286} tone={f.engraving} />
        </>
      );
    case 3: // surface box — extruded depth
      return (
        <>
          <path d="M124 280 v14 h180 v-14" fill={f.deep} opacity={0.7} />
          <rect x={110} y={112} width={180} height={168} rx={8} fill={`url(#${id}-face)`} stroke={f.edge} strokeWidth={1} />
          <rect x={124} y={126} width={152} height={140} rx={5} fill="rgba(0,0,0,0.12)" stroke={f.deep} strokeWidth={0.8} />
          <circle cx={140} cy={232} r={5} fill={f.deep} />
          <circle cx={260} cy={232} r={5} fill={f.deep} />
          <rect x={176} y={126} width={48} height={10} fill={f.deep} opacity={0.6} />
          <rect x={176} y={256} width={48} height={10} fill={f.deep} opacity={0.6} />
          <Engraving x={200} y={296} tone={f.engraving} />
        </>
      );
    case 4: // TV + network
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <rect x={138} y={150} width={124} height={34} rx={5} fill="#0d0f11" stroke={f.deep} strokeWidth={0.7} />
          <rect x={158} y={162} width={12} height={10} fill="#3c4147" />
          <rect x={138} y={150} width={124} height={34} rx={5} fill="url(#vis-sheen)" opacity={0.2} />
          <circle cx={228} cy={230} r={22} fill="#0d0f11" stroke={f.deep} strokeWidth={0.7} />
          <circle cx={228} cy={230} r={7} fill="#3c4147" />
          <Engraving x={200} y={292} tone={f.engraving} />
        </>
      );
    case 5: // cord outlet
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <rect x={146} y={132} width={108} height={44} rx={5} fill="rgba(0,0,0,0.12)" stroke={f.deep} strokeWidth={0.8} />
          <rect x={158} y={142} width={30} height={24} rx={3} fill={f.deep} />
          <rect x={212} y={142} width={30} height={24} rx={3} fill={f.deep} />
          <path d="M178 208 a22 16 0 0 0 44 0 z" fill="#0d0f11" stroke={f.deep} strokeWidth={0.7} />
          <path d="M186 200 q14 18 28 0" stroke="#3c4147" strokeWidth={3} fill="none" />
          <Engraving x={200} y={286} tone={f.engraving} />
        </>
      );
    default: // blank screwless plate — the range signature
      return (
        <>
          <Plate id={id} x={90} y={90} w={220} h={220} finish={spec.finish} />
          <Engraving x={200} y={212} tone={f.engraving} />
        </>
      );
  }
}

/* ---------- View 2: dimensioned technical drawing ---------- */

function Arrow({ x, y, dir }: { x: number; y: number; dir: 'l' | 'r' | 'u' | 'd' }) {
  const s = 5;
  const map: Record<string, string> = {
    l: `${x},${y} ${x + s},${y - s * 0.6} ${x + s},${y + s * 0.6}`,
    r: `${x},${y} ${x - s},${y - s * 0.6} ${x - s},${y + s * 0.6}`,
    u: `${x},${y} ${x - s * 0.6},${y + s} ${x + s * 0.6},${y + s}`,
    d: `${x},${y} ${x - s * 0.6},${y - s} ${x + s * 0.6},${y - s}`,
  };
  return <polygon points={map[dir]} style={{ fill: ACCENT }} />;
}

function DimText({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill={INK}>
      {children}
    </text>
  );
}

function DrawingView({ spec }: { spec: ProductVisualSpec }) {
  const tall = spec.kind === 'socket' && spec.variant === 4;
  const plate = tall ? { x: 128, y: 96, w: 144, h: 190 } : { x: 116, y: 116, w: 168, h: 168 };
  const { x, y, w, h } = plate;
  const stroke = 'rgba(27,35,40,0.85)';

  const inner: ReactNode = (() => {
    if (spec.kind === 'rocker')
      return spec.variant === 4 ? (
        <circle cx={x + w / 2} cy={y + h / 2 - 6} r={34} fill="none" stroke={stroke} strokeDasharray="4 3" />
      ) : (
        <rect
          x={x + w * 0.24}
          y={y + h * 0.3}
          width={w * 0.52}
          height={h * 0.42}
          rx={6}
          fill="none"
          stroke={stroke}
          strokeDasharray="4 3"
        />
      );
    if (spec.kind === 'socket')
      return (
        <>
          <circle cx={x + w / 2} cy={y + h / 2 - 4} r={w * 0.34} fill="none" stroke={stroke} strokeDasharray="4 3" />
          <circle cx={x + w / 2 - w * 0.18} cy={y + h / 2 - 4} r={7} fill="none" stroke={stroke} />
          <circle cx={x + w / 2 + w * 0.18} cy={y + h / 2 - 4} r={7} fill="none" stroke={stroke} />
        </>
      );
    if (spec.kind === 'usb')
      return (
        <>
          <rect x={x + w * 0.3} y={y + h * 0.44} width={w * 0.4} height={12} rx={6} fill="none" stroke={stroke} strokeDasharray="4 3" />
          <circle cx={x + w / 2} cy={y + h * 0.68} r={3} fill={stroke} />
        </>
      );
    if (spec.kind === 'smart')
      return (
        <>
          <rect x={x + w * 0.24} y={y + h * 0.26} width={w * 0.52} height={h * 0.5} rx={8} fill="none" stroke={stroke} strokeDasharray="4 3" />
          <rect x={x + w * 0.3} y={y + h * 0.86} width={w * 0.4} height={4} fill="none" stroke={stroke} />
        </>
      );
    return (
      <rect x={x + w * 0.12} y={y + h * 0.12} width={w * 0.76} height={h * 0.76} rx={4} fill="none" stroke={stroke} strokeDasharray="4 3" />
    );
  })();

  const depthY = y + h + 26;

  return (
    <g>
      {/* grid paper */}
      <g stroke="rgba(27,35,40,0.07)" strokeWidth={1}>
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 40} y1={24} x2={40 + i * 40} y2={376} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1={24} y1={40 + i * 40} x2={376} y2={40 + i * 40} />
        ))}
      </g>

      {/* plate outline */}
      <rect x={x} y={y} width={w} height={h} rx={6} fill="rgba(255,255,255,0.6)" stroke={INK} strokeWidth={1.6} />
      {inner}

      {/* screw centre marks */}
      <g stroke={stroke} strokeWidth={1}>
        <line x1={x + 24} y1={y + h - 18} x2={x + w - 24} y2={y + h - 18} strokeDasharray="8 3 2 3" opacity={0.7} />
        <circle cx={x + 24} cy={y + h - 18} r={2.5} fill="none" />
        <circle cx={x + w - 24} cy={y + h - 18} r={2.5} fill="none" />
      </g>

      {/* width dimension */}
      <g>
        <line x1={x} y1={y - 22} x2={x + w} y2={y - 22} style={{ stroke: ACCENT }} strokeWidth={1} />
        <line x1={x} y1={y - 30} x2={x} y2={y - 6} style={{ stroke: ACCENT }} strokeWidth={1} />
        <line x1={x + w} y1={y - 30} x2={x + w} y2={y - 6} style={{ stroke: ACCENT }} strokeWidth={1} />
        <Arrow x={x} y={y - 22} dir="r" />
        <Arrow x={x + w} y={y - 22} dir="l" />
        <DimText x={x + w / 2} y={y - 30}>{tall ? '70' : '86'}</DimText>
      </g>

      {/* height dimension */}
      <g>
        <line x1={x + w + 22} y1={y} x2={x + w + 22} y2={y + h} style={{ stroke: ACCENT }} strokeWidth={1} />
        <line x1={x + w + 6} y1={y} x2={x + w + 30} y2={y} style={{ stroke: ACCENT }} strokeWidth={1} />
        <line x1={x + w + 6} y1={y + h} x2={x + w + 30} y2={y + h} style={{ stroke: ACCENT }} strokeWidth={1} />
        <Arrow x={x + w + 22} y={y} dir="d" />
        <Arrow x={x + w + 22} y={y + h} dir="u" />
        <text
          x={x + w + 38}
          y={y + h / 2}
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize={13}
          fill={INK}
          transform={`rotate(90 ${x + w + 38} ${y + h / 2})`}
        >
          {tall ? '115' : '86'}
        </text>
      </g>

      {/* depth dimension */}
      <g>
        <line x1={x} y1={depthY} x2={x + w} y2={depthY} style={{ stroke: ACCENT }} strokeWidth={1} />
        <Arrow x={x} y={depthY} dir="r" />
        <Arrow x={x + w} y={depthY} dir="l" />
        <DimText x={x + w / 2} y={depthY - 8}>9</DimText>
      </g>
    </g>
  );
}

/* ---------- View 3: material / finish macro ---------- */

function DetailView({ spec, id }: { spec: ProductVisualSpec; id: string }) {
  const f = FINISHES[spec.finish];
  return (
    <g>
      <rect x={0} y={0} width={400} height={400} fill={`url(#macro-${id})`} />
      {/* plate edge sweeping diagonally */}
      <g transform="rotate(-14 200 200)">
        <rect x={-60} y={-40} width={520} height={300} rx={26} fill={`url(#macro-${id})`} />
        <rect x={-60} y={-40} width={520} height={300} rx={26} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth={2} />
        <rect x={-60} y={252} width={520} height={10} fill={f.deep} opacity={0.85} />
        <rect x={-60} y={262} width={520} height={4} fill="rgba(0,0,0,0.3)" />
        <text x={40} y={210} fontFamily="'IBM Plex Mono', monospace" fontSize={26} letterSpacing={12} fill={f.engraving}>
          {brand.wordmarkPrimary}
        </text>
      </g>
      {/* specular band */}
      <path d="M0 90 L400 40 L400 78 L0 128 Z" fill="#ffffff" opacity={0.16} />
    </g>
  );
}

/* ============================================================
   PUBLIC COMPONENT
   ============================================================ */

interface VisualProps {
  spec: ProductVisualSpec;
  view?: ProductView;
  className?: string;
  /** alt text for accessibility */
  title: string;
}

/** Product imagery: hero render (default), technical drawing or material detail. */
export function ProductVisual({ spec, view = 'hero', className, title }: VisualProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const f = FINISHES[spec.finish];

  const cssVars = {
    [`--vis-face-top-${uid}`]: f.face[0],
    [`--vis-face-bottom-${uid}`]: f.face[1],
    [`--vis-edge-${uid}`]: f.edge,
    [`--vis-rocker-top-${uid}`]: f.rocker[0],
    [`--vis-rocker-bottom-${uid}`]: f.rocker[1],
  } as CSSProperties;

  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={title} className={className} style={cssVars}>
      <Defs id={uid} />
      {view === 'hero' && (
        <g filter={`url(#${uid}-ds)`}>
          {spec.kind === 'rocker' && <RockerRender spec={spec} id={uid} />}
          {spec.kind === 'socket' && <SocketRender spec={spec} id={uid} />}
          {spec.kind === 'usb' && <UsbRender spec={spec} id={uid} />}
          {spec.kind === 'smart' && <SmartRender spec={spec} id={uid} />}
          {spec.kind === 'accessory' && <AccessoryRender spec={spec} id={uid} />}
        </g>
      )}
      {view === 'technical' && <DrawingView spec={spec} />}
      {view === 'detail' && <DetailView spec={spec} id={uid} />}
    </svg>
  );
}
