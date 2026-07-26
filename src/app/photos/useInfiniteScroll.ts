"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollOptions {
  total: number;
  batchSize: number;
  rootMargin?: string;
}

export function useInfiniteScroll({
  total,
  batchSize,
  rootMargin = "600px",
}: UseInfiniteScrollOptions) {
  const [visible, setVisible] = useState(batchSize);
  const loadTriggerRef = useRef<HTMLDivElement | null>(null);
  const hasMore = visible < total;

  const loadMore = useCallback(() => {
    setVisible((prev) => Math.min(total, prev + batchSize));
  }, [total, batchSize]);

  useEffect(() => {
    const loadTrigger = loadTriggerRef.current;
    if (!loadTrigger || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin },
    );

    observer.observe(loadTrigger);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore, rootMargin]);

  return { visible, hasMore, loadTriggerRef };
}
