"use client";

import { useState, useEffect, useCallback } from "react";

const HERO_CACHE_KEY = "hero_spline_loaded";
const SECTIONS_READY_KEY = "hero_sections_ready";

export function useHeroCache() {
  const [isReturnVisit, setIsReturnVisit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMounted(true);
    try {
      setIsReturnVisit(!!localStorage.getItem(HERO_CACHE_KEY));
    } catch {
      setIsReturnVisit(false);
    }
  }, []);

  const markHeroLoaded = useCallback(() => {
    try {
      localStorage.setItem(HERO_CACHE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const markSectionsReady = useCallback(() => {
    try {
      sessionStorage.setItem(SECTIONS_READY_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  return { isReturnVisit: isMounted && isReturnVisit, markHeroLoaded, markSectionsReady };
}
