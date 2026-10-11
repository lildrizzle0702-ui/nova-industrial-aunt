import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { InquiryContactForm, InquiryLine, Product } from '../data/types';
import { productById } from '../data/products';

const STORAGE_KEY = 'nova.inquiry.v1';

interface InquiryState {
  lines: InquiryLine[];
  count: number;
  totalQuantity: number;
  contains: (productId: string) => boolean;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  /* Submit state (client-side only — see InquiryPage for the honest handoff) */
  submit: (contact: InquiryContactForm) => void;
  lastSubmission: (InquiryContactForm & { submittedAt: string }) | null;
}

const InquiryContext = createContext<InquiryState | null>(null);

function loadLines(): InquiryLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { lines?: InquiryLine[] };
    if (!Array.isArray(parsed.lines)) return [];
    return parsed.lines.filter(
      (l) => typeof l.productId === 'string' && Number.isFinite(l.quantity) && l.quantity > 0,
    );
  } catch {
    return [];
  }
}

function persist(lines: InquiryLine[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines }));
  } catch {
    /* storage unavailable — basket stays in memory only */
  }
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<InquiryLine[]>(() => loadLines());
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<InquiryState['lastSubmission']>(null);

  useEffect(() => {
    persist(lines);
  }, [lines]);

  const add = useCallback((productId: string) => {
    setLines((prev) =>
      prev.some((l) => l.productId === productId)
        ? prev
        : [...prev, { productId, quantity: 1 }],
    );
    setDrawerOpen(true);
  }, []);

  const remove = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.productId !== productId)
        : prev.map((l) => (l.productId === productId ? { ...l, quantity } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const contains = useCallback(
    (productId: string) => lines.some((l) => l.productId === productId),
    [lines],
  );

  const submit = useCallback((contact: InquiryContactForm) => {
    setLastSubmission({ ...contact, submittedAt: new Date().toISOString() });
  }, []);

  const totalQuantity = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  );

  const value = useMemo<InquiryState>(
    () => ({
      lines,
      count: lines.length,
      totalQuantity,
      contains,
      add,
      remove,
      setQuantity,
      clear,
      isDrawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      submit,
      lastSubmission,
    }),
    [lines, totalQuantity, contains, add, remove, setQuantity, clear, isDrawerOpen, submit, lastSubmission],
  );

  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export function useInquiry(): InquiryState {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider');
  return ctx;
}

/* ---------- Basket → renderable rows ---------- */

export interface InquiryRow {
  product: Product;
  quantity: number;
}

export function inquiryRows(lines: InquiryLine[]): InquiryRow[] {
  return lines
    .map((line) => {
      const product = productById(line.productId);
      return product ? { product, quantity: line.quantity } : null;
    })
    .filter((row): row is InquiryRow => row !== null);
}

/* ---------- Plain-text inquiry summary (mailto / clipboard handoff) ---------- */

export function inquirySummaryText(
  contact: InquiryContactForm,
  rows: InquiryRow[],
  footer: string,
  labels: {
    title: string;
    name: string;
    company: string;
    email: string;
    country: string;
    certification: string;
    packaging: string;
    productsOfInterest: string;
    message: string;
    none: string;
    productLine: (r: InquiryRow, i: number) => string;
  },
): string {
  const productLines = rows.map((r, i) => labels.productLine(r, i)).join('\n');

  return [
    labels.title,
    '——————————————————————————',
    `${labels.name}: ${contact.name}`,
    `${labels.company}: ${contact.company || labels.none}`,
    `${labels.email}: ${contact.email}`,
    `${labels.country}: ${contact.country || labels.none}`,
    `${labels.certification}: ${contact.certification || labels.none}`,
    `${labels.packaging}: ${contact.packaging || labels.none}`,
    '',
    `${labels.productsOfInterest}`,
    productLines || labels.none,
    '',
    `${labels.message}`,
    contact.message || labels.none,
    '',
    '——————————————————————————',
    footer,
  ].join('\n');
}
