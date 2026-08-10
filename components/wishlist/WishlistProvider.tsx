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

export type WishlistItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  subcategoryLabel: string;
};

type WishlistContextValue = {
  items: WishlistItem[];
  ids: Set<string>;
  count: number;
  has: (id: string) => boolean;
  toggle: (product: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "svarniq-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const toggle = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some((x) => x.id === product.id)) {
        return prev.filter((x) => x.id !== product.id);
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
        },
      ];
    });
  }, []);

  const remove = useCallback(
    (id: string) => setItems((prev) => prev.filter((x) => x.id !== id)),
    [],
  );
  const clear = useCallback(() => setItems([]), []);

  const ids = useMemo(() => new Set(items.map((x) => x.id)), [items]);
  const has = useCallback((id: string) => ids.has(id), [ids]);

  const value = useMemo(
    () => ({ items, ids, count: items.length, has, toggle, remove, clear }),
    [items, ids, has, toggle, remove, clear],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
