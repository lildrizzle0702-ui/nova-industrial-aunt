import { useId } from 'react';
import { brand } from '../../config/brand';

/* ============================================================
   EDITORIAL VISUAL SYSTEM
   Large-format duotone compositions (warm paper / ink / copper)
   used where a company would place photography: hero, factory,
   quality, logistics. Abstract but engineering-flavoured.
   ============================================================ */

export type EditorialSubject =
  | 'hero'
  | 'production'
  | 'quality'
  | 'engineering'
  | 'warehouse'
  | 'packaging'
  | 'markets';

const INK = '#1b2328';
const INK_SOFT = 'rgba(27,35,40,0.45)';
const HAIR = 'rgba(27,35,40,0.14)';
const ACCENT = 'var(--accent)';
const PAPER = '#f1efe9';

interface EditorialProps {
  subject: EditorialSubject;
  title: string;
  className?: string;
}

export function EditorialVisual({ subject, title, className }: EditorialProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={title}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${uid}-paper`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={PAPER} />
          <stop offset="1" stopColor="#e5e2da" />
        </linearGradient>
        <linearGradient id={`${uid}-plate`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fcfbf8" />
          <stop offset="1" stopColor="#e6e2da" />
        </linearGradient>
        <linearGradient id={`${uid}-dark`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a4147" />
          <stop offset="1" stopColor="#20252a" />
        </linearGradient>
        <filter id={`${uid}-ds`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#14181b" floodOpacity="0.14" />
        </filter>
      </defs>

      <rect width="800" height="600" fill={`url(#${uid}-paper)`} />
      {subject === 'hero' && <Hero uid={uid} />}
      {subject === 'production' && <Production uid={uid} />}
      {subject === 'quality' && <Qc uid={uid} />}
      {subject === 'engineering' && <Engineering />}
      {subject === 'warehouse' && <Warehouse uid={uid} />}
      {subject === 'packaging' && <Logistics uid={uid} />}
      {subject === 'markets' && <Markets uid={uid} />}
    </svg>
  );
}

/* ---------- HERO: elevation drawing of the range on grid paper ---------- */

function Hero({ uid }: { uid: string }) {
  return (
    <>
      {/* grid paper */}
      <g stroke={HAIR} strokeWidth={1}>
        {Array.from({ length: 19 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 40} y1={0} x2={40 + i * 40} y2={600} />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={40 + i * 40} x2={800} y2={40 + i * 40} />
        ))}
      </g>

      {/* main elevation: 2-gang switch */}
      <g filter={`url(#${uid}-ds)`}>
        <rect x={96} y={96} width={288} height={288} rx={10} fill={`url(#${uid}-plate)`} stroke="#d3cfc6" />
        <rect x={126} y={140} width={106} height={116} rx={12} fill={`url(#${uid}-dark)`} />
        <rect x={248} y={140} width={106} height={116} rx={12} fill={`url(#${uid}-dark)`} />
        <rect x={126} y={140} width={106} height={40} rx={12} fill="url(#vis-sheen)" opacity={0.2} />
        <rect x={248} y={140} width={106} height={40} rx={12} fill="url(#vis-sheen)" opacity={0.2} />
        <text x={240} y={352} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={13} letterSpacing={6} fill="rgba(23,27,30,0.4)">
          {brand.wordmarkPrimary}
        </text>
      </g>

      {/* companion elevation: schuko socket, copper accent */}
      <g>
        <rect x={430} y={168} width={216} height={216} rx={9} fill={`url(#${uid}-plate)`} stroke="#d3cfc6" />
        <circle cx={538} cy={266} r={74} fill="none" stroke={INK_SOFT} strokeWidth={1.4} />
        <circle cx={538} cy={238} r={10} fill={INK_SOFT} />
        <circle cx={538} cy={294} r={10} fill={INK_SOFT} />
        <circle cx={502} cy={266} r={15} style={{ fill: ACCENT }} />
        <circle cx={574} cy={266} r={15} style={{ fill: ACCENT }} />
        <circle cx={502} cy={266} r={9} fill={PAPER} />
        <circle cx={574} cy={266} r={9} fill={PAPER} />
      </g>

      {/* dimension lines */}
      <g style={{ stroke: ACCENT }} strokeWidth={1.4} fill="none">
        <line x1={96} y1={64} x2={384} y2={64} />
        <line x1={96} y1={52} x2={96} y2={78} />
        <line x1={384} y1={52} x2={384} y2={78} />
        <polygon points="96,64 106,60 106,68" style={{ fill: ACCENT }} stroke="none" />
        <polygon points="384,64 374,60 374,68" style={{ fill: ACCENT }} stroke="none" />
      </g>
      <text x={240} y={48} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={15} fill={INK}>
        86
      </text>
      <g style={{ stroke: ACCENT }} strokeWidth={1.4} fill="none">
        <line x1={668} y1={168} x2={668} y2={384} />
        <line x1={656} y1={168} x2={682} y2={168} />
        <line x1={656} y1={384} x2={682} y2={384} />
        <polygon points="668,168 664,178 672,178" style={{ fill: ACCENT }} stroke="none" />
        <polygon points="668,384 664,374 672,374" style={{ fill: ACCENT }} stroke="none" />
      </g>
      <text
        x={694}
        y={276}
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize={15}
        fill={INK}
        transform="rotate(90 694 276)"
      >
        86
      </text>

      {/* callout */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT}>
        <line x1={384} y1={140} x2={470} y2={108} stroke={INK_SOFT} strokeWidth={1} />
        <circle cx={384} cy={140} r={2.5} style={{ fill: ACCENT }} />
        <text x={478} y={106}>Screwless plate · 1.4mm</text>
        <line x1={384} y1={330} x2={470} y2={396} stroke={INK_SOFT} strokeWidth={1} />
        <circle cx={384} cy={330} r={2.5} style={{ fill: ACCENT }} />
        <text x={478} y={404}>10AX silver-alloy contacts</text>
      </g>

      {/* crosshair registration marks */}
      <g stroke={INK_SOFT} strokeWidth={1}>
        <circle cx={60} cy={520} r={8} fill="none" />
        <line x1={48} y1={520} x2={72} y2={520} />
        <line x1={60} y1={508} x2={60} y2={532} />
        <circle cx={740} cy={80} r={8} fill="none" />
        <line x1={728} y1={80} x2={752} y2={80} />
        <line x1={740} y1={68} x2={740} y2={92} />
      </g>
    </>
  );
}

/* ---------- PRODUCTION: assembly line of plates ---------- */

function Production({ uid }: { uid: string }) {
  const rows = [0, 1, 2];
  return (
    <>
      {/* conveyor bands */}
      <g>
        {rows.map((r) => (
          <g key={r}>
            <line x1={0} y1={210 + r * 130} x2={800} y2={210 + r * 130} stroke={INK_SOFT} strokeWidth={1.4} />
            <line x1={0} y1={222 + r * 130} x2={800} y2={222 + r * 130} stroke={HAIR} strokeWidth={1} />
            {Array.from({ length: 20 }, (_, i) => (
              <line key={i} x1={i * 42 + (r % 2) * 20} y1={210 + r * 130} x2={i * 42 - 12 + (r % 2) * 20} y2={222 + r * 130} stroke={HAIR} strokeWidth={1} />
            ))}
          </g>
        ))}
      </g>

      {/* plates marching down the line */}
      {rows.map((r) =>
        Array.from({ length: 5 }, (_, i) => {
          const x = 58 + i * 152;
          const y = 128 + r * 130;
          const isAccent = r === 1 && i === 3;
          return (
            <g key={`${r}-${i}`}>
              <rect x={x} y={y} width={92} height={76} rx={5} fill={isAccent ? `url(#${uid}-dark)` : `url(#${uid}-plate)`} stroke={isAccent ? '#12161a' : '#d3cfc6'} />
              {isAccent ? (
                <rect x={x + 18} y={y + 22} width={56} height={32} rx={4} style={{ fill: ACCENT }} opacity={0.9} />
              ) : (
                <rect x={x + 20} y={y + 22} width={52} height={32} rx={4} fill="none" stroke={INK_SOFT} strokeWidth={1} />
              )}
              {/* drop line to conveyor */}
              <line x1={x + 46} y1={y + 76} x2={x + 46} y2={210 + r * 130} stroke={HAIR} strokeWidth={1} />
            </g>
          );
        }),
      )}

      {/* QC station flag on accent unit */}
      <g>
        <line x1={714} y1={258} x2={714} y2={170} stroke={INK_SOFT} strokeWidth={1.4} />
        <rect x={714} y={170} width={64} height={30} fill={INK} />
        <text x={746} y={189} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={11} fill={PAPER} letterSpacing={1}>
          QC
        </text>
      </g>
    </>
  );
}

/* ---------- QC: test schedule with gauge ---------- */

function Qc({ uid }: { uid: string }) {
  return (
    <>
      {/* batch grid */}
      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 7 }, (_, c) => {
          const x = 70 + c * 96;
          const y = 84 + r * 118;
          const pass = !(r === 2 && c === 4);
          return (
            <g key={`${r}-${c}`}>
              <rect x={x} y={y} width={64} height={64} rx={5} fill={pass ? `url(#${uid}-plate)` : PAPER} stroke={pass ? '#d3cfc6' : ACCENT} strokeWidth={pass ? 1 : 1.6} />
              {pass ? (
                <circle cx={x + 32} cy={y + 30} r={11} fill="none" stroke={INK_SOFT} strokeWidth={1.2} />
              ) : (
                <g>
                  <line x1={x + 16} y1={y + 16} x2={x + 48} y2={y + 48} style={{ stroke: ACCENT }} strokeWidth={2} />
                  <line x1={x + 48} y1={y + 16} x2={x + 16} y2={y + 48} style={{ stroke: ACCENT }} strokeWidth={2} />
                </g>
              )}
            </g>
          );
        }),
      )}

      {/* gauge dial */}
      <g transform="translate(628 456)">
        <circle r={96} fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <circle r={74} fill="none" stroke={HAIR} strokeWidth={1} />
        {Array.from({ length: 11 }, (_, i) => {
          const deg = -210 + i * 21;
          const rad = (deg * Math.PI) / 180;
          const x1 = Math.cos(rad) * 62;
          const y1 = Math.sin(rad) * 62;
          const x2 = Math.cos(rad) * 74;
          const y2 = Math.sin(rad) * 74;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK_SOFT} strokeWidth={1.4} />;
        })}
        {/* needle in the green zone */}
        <line x1={0} y1={0} x2={-34} y2={-52} style={{ stroke: ACCENT }} strokeWidth={3} strokeLinecap="round" />
        <circle r={6} fill={INK} />
        <path d="M -60 -34 A 68 68 0 0 1 -12 -66" fill="none" style={{ stroke: ACCENT }} strokeWidth={4} strokeLinecap="round" />
        <text y={44} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT}>
          2.0 kV / 1 min
        </text>
      </g>
    </>
  );
}

/* ---------- ENGINEERING: mold development blueprint ---------- */

function Engineering() {
  return (
    <>
      {/* mold halves */}
      <g stroke={INK} fill="none" strokeWidth={1.6}>
        <rect x={110} y={130} width={260} height={200} rx={10} />
        <rect x={430} y={130} width={260} height={200} rx={10} strokeDasharray="10 6" />
      </g>
      <circle cx={240} cy={230} r={62} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <circle cx={240} cy={230} r={34} fill="none" stroke={INK_SOFT} strokeDasharray="4 3" />
      <circle cx={560} cy={230} r={62} fill="none" stroke={INK_SOFT} strokeWidth={1.4} />
      <rect x={528} y={198} width={64} height={64} rx={6} fill="none" stroke={INK_SOFT} strokeDasharray="4 3" />

      {/* sprue channels */}
      <g style={{ stroke: ACCENT }} strokeWidth={1.4} fill="none">
        <line x1={240} y1={168} x2={240} y2={120} />
        <line x1={240} y1={292} x2={240} y2={340} />
        <line x1={178} y1={230} x2={140} y2={230} />
      </g>
      <polygon points="240,120 236,130 244,130" style={{ fill: ACCENT }} />
      <polygon points="240,340 236,330 244,330" style={{ fill: ACCENT }} />
      <polygon points="140,230 150,226 150,234" style={{ fill: ACCENT }} />

      {/* parting line */}
      <line x1={400} y1={90} x2={400} y2={370} stroke={INK} strokeWidth={1.2} strokeDasharray="14 6 3 6" />
      <text x={400} y={78} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT}>
        PARTING LINE A–A
      </text>

      {/* dimension of cavity */}
      <g style={{ stroke: ACCENT }} strokeWidth={1}>
        <line x1={178} y1={470} x2={302} y2={470} />
        <polygon points="178,470 188,466 188,474" style={{ fill: ACCENT }} />
        <polygon points="302,470 292,466 292,474" style={{ fill: ACCENT }} />
      </g>
      <text x={240} y={494} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill={INK}>
        Ø 124
      </text>

      {/* spec block */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT}>
        <rect x={520} y={420} width={220} height={110} fill="none" stroke={HAIR} />
        <line x1={520} y1={452} x2={740} y2={452} stroke={HAIR} />
        <line x1={520} y1={486} x2={740} y2={486} stroke={HAIR} />
        <text x={532} y={441}>MOLD NI-2204 · CAVITY 1×4</text>
        <text x={532} y={475}>STEEL 1.2311 · HRC 32</text>
        <text x={532} y={509}>CYCLE 34 s · PC V-0</text>
      </g>

      {/* crosshair */}
      <g stroke={INK_SOFT} strokeWidth={1}>
        <circle cx={700} cy={100} r={9} fill="none" />
        <line x1={686} y1={100} x2={714} y2={100} />
        <line x1={700} y1={86} x2={700} y2={114} />
      </g>
    </>
  );
}

/* ---------- WAREHOUSE: rack elevation ---------- */

function Warehouse({ uid }: { uid: string }) {
  return (
    <>
      {/* racks */}
      {[0, 1].map((bay) => (
        <g key={bay}>
          {Array.from({ length: 4 }, (_, level) => {
            const y = 120 + level * 110;
            const x = 80 + bay * 360;
            return (
              <g key={level}>
                <line x1={x} y1={y} x2={x + 280} y2={y} stroke={INK} strokeWidth={2.4} />
                {/* cartons */}
                {Array.from({ length: 4 }, (_, c) => {
                  const filled = (bay + level + c) % 5 === 2;
                  return (
                    <rect
                      key={c}
                      x={x + 12 + c * 68}
                      y={y - 64}
                      width={56}
                      height={64}
                      fill={filled ? `url(#${uid}-dark)` : PAPER}
                      stroke={filled ? '#12161a' : INK_SOFT}
                      strokeWidth={1.2}
                    />
                  );
                })}
                <rect x={x + 12 + 2 * 68 + 18} y={y - 64} width={20} height={8} fill={PAPER} opacity={0.7} />
              </g>
            );
          })}
          {/* uprights */}
          <line x1={80 + bay * 360} y1={90} x2={80 + bay * 360} y2={520} stroke={INK} strokeWidth={2.4} />
          <line x1={360 + bay * 360} y1={90} x2={360 + bay * 360} y2={520} stroke={INK} strokeWidth={2.4} />
          {/* diagonal brace */}
          <line x1={80 + bay * 360} y1={520} x2={360 + bay * 360} y2={90} stroke={HAIR} strokeWidth={1} />
        </g>
      ))}

      {/* floor line */}
      <line x1={0} y1={520} x2={800} y2={520} stroke={INK} strokeWidth={2} />

      {/* pallet truck */}
      <g transform="translate(430 430)">
        <rect x={0} y={40} width={150} height={16} rx={4} fill={INK} />
        <rect x={96} y={-26} width={12} height={66} rx={4} fill={INK} />
        <path d="M96 -26 q0 -18 24 -18" fill="none" stroke={INK} strokeWidth={7} />
        <circle cx={26} cy={66} r={11} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <circle cx={124} cy={66} r={11} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <rect x={8} y={16} width={120} height={10} rx={2} style={{ fill: ACCENT }} />
      </g>
    </>
  );
}

/* ---------- LOGISTICS: export packing ---------- */

function Logistics({ uid }: { uid: string }) {
  return (
    <>
      {/* master carton stack */}
      <g>
        {[
          { x: 120, y: 380, w: 250, h: 96, accent: false },
          { x: 120, y: 284, w: 250, h: 96, accent: true },
          { x: 120, y: 188, w: 250, h: 96, accent: false },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={b.accent ? `url(#${uid}-dark)` : `url(#${uid}-plate)`} stroke={b.accent ? '#12161a' : INK_SOFT} strokeWidth={1.4} />
            <line x1={b.x} y1={b.y + b.h / 2} x2={b.x + b.w} y2={b.y + b.h / 2} stroke={b.accent ? 'rgba(255,255,255,0.25)' : HAIR} strokeWidth={1} />
            <text
              x={b.x + b.w / 2}
              y={b.y + b.h / 2 + 5}
              textAnchor="middle"
              fontFamily="'IBM Plex Mono', monospace"
              fontSize={12}
              fill={b.accent ? ACCENT : INK_SOFT}
              letterSpacing={2}
            >
              {b.accent ? `${brand.wordmarkPrimary} · NV-E116` : '100 PCS'}
            </text>
          </g>
        ))}
        {/* straps */}
        {[170, 300].map((x) => (
          <line key={x} x1={x} y1={188} x2={x} y2={476} style={{ stroke: ACCENT }} strokeWidth={2.4} />
        ))}
      </g>

      {/* container silhouette */}
      <g transform="translate(430 240)">
        <rect x={0} y={0} width={310} height={180} fill="none" stroke={INK} strokeWidth={2} />
        {Array.from({ length: 14 }, (_, i) => (
          <rect key={i} x={10 + i * 22} y={10} width={12} height={160} fill="none" stroke={INK_SOFT} strokeWidth={1} />
        ))}
        <rect x={0} y={0} width={310} height={180} fill="none" stroke={INK} strokeWidth={2} />
        <text x={155} y={-16} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT} letterSpacing={3}>
          1 × 40' HQ · 1,180 CTNS
        </text>
      </g>

      {/* route arc to port */}
      <g style={{ stroke: ACCENT }} strokeWidth={1.6} fill="none" strokeDasharray="2 6">
        <path d="M370 428 C 430 428 440 420 500 420" />
      </g>
      <circle cx={370} cy={428} r={4} style={{ fill: ACCENT }} />
      <circle cx={500} cy={420} r={4} style={{ fill: ACCENT }} />
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={12} fill={INK_SOFT}>
        <text x={508} y={416}>FOB NINGBO · 40 MIN</text>
      </g>
    </>
  );
}

/* ---------- MARKETS: abstract route map ---------- */

function Markets({ uid }: { uid: string }) {
  const nodes = [
    { x: 200, y: 200, label: 'EUROPE' },
    { x: 150, y: 330, label: 'N. AMERICA' },
    { x: 560, y: 330, label: 'MIDDLE EAST' },
    { x: 600, y: 200, label: 'SE ASIA' },
  ];
  return (
    <>
      {/* origin */}
      <g transform="translate(386 276)">
        <rect x={-44} y={-44} width={88} height={88} rx={8} fill={`url(#${uid}-dark)`} />
        <text y={6} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill={PAPER} letterSpacing={2}>
          {brand.wordmarkPrimary}
        </text>
      </g>

      {/* routes */}
      {nodes.map((n) => {
        const mx = (386 + n.x) / 2;
        const my = Math.min(276, n.y) - 60;
        return (
          <g key={n.label}>
            <path
              d={`M386 276 Q ${mx} ${my} ${n.x} ${n.y}`}
              fill="none"
              stroke={INK_SOFT}
              strokeWidth={1.2}
              strokeDasharray="1 7"
              strokeLinecap="round"
            />
            <circle cx={n.x} cy={n.y} r={7} fill={PAPER} style={{ stroke: ACCENT }} strokeWidth={2} />
            <text
              x={n.x}
              y={n.y + 26}
              textAnchor="middle"
              fontFamily="'IBM Plex Mono', monospace"
              fontSize={11}
              fill={INK_SOFT}
              letterSpacing={2}
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* latitude hairlines */}
      <g stroke={HAIR} strokeWidth={1}>
        <line x1={0} y1={140} x2={800} y2={140} />
        <line x1={0} y1={400} x2={800} y2={400} />
      </g>
      <text x={24} y={126} fontFamily="'IBM Plex Mono', monospace" fontSize={11} fill={INK_SOFT} letterSpacing={2}>
        40+ EXPORT MARKETS
      </text>
      <text x={24} y={560} fontFamily="'IBM Plex Mono', monospace" fontSize={11} fill={INK_SOFT} letterSpacing={2}>
        DIRECT SHIPPING · NINGBO / SHANGHAI
      </text>
    </>
  );
}
