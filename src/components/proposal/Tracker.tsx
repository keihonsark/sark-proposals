"use client";

import { useEffect } from "react";

export function Tracker({ client }: { client: string }) {
  useEffect(() => {
    const key = `proposal_tracked_${client}`;
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(key)) {
      return;
    }
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || "",
      }),
      keepalive: true,
    }).catch(() => {});
    try {
      sessionStorage.setItem(key, "1");
    } catch {}
  }, [client]);

  return null;
}
