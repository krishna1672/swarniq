"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/types";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  subcategoryLabel: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "svarniq-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart after mount (keeps SSR markup === first client render).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota errors */
    }
  }, [items, hydrated]);

  const addItem = useCallback((product: Product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          imageAlt: product.imageAlt,
          subcategoryLabel: product.subcategoryLabel,
          qty,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((x) => x.id !== id)),
    [],
  );

  const setQty = useCallback(
    (id: string, qty: number) =>
      setItems((prev) =>
        prev.flatMap((x) =>
          x.id === id ? (qty <= 0 ? [] : [{ ...x, qty }]) : [x],
        ),
      ),
    [],
  );

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(() => items.reduce((s, x) => s + x.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, x) => s + x.qty * x.price, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      addItem,
      removeItem,
      setQty,
      clear,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, addItem, removeItem, setQty, clear, isOpen, openCart, closeCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
