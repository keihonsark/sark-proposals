import type { NextRequest } from "next/server";

const WEBHOOK_URL = "https://hook.us2.make.com/aq2mw7z8wsf1hfapabhw1rk8scb6786c";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.name || typeof body.name !== "string") {
      return Response.json({ ok: false, error: "Missing name" }, { status: 400 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const payload = {
      type: "proposal_accepted",
      client: body.client ?? "unknown",
      name: body.name.trim(),
      timestamp: body.timestamp ?? new Date().toISOString(),
      userAgent: body.userAgent ?? request.headers.get("user-agent") ?? "",
      ip,
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return Response.json({ ok: false }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}
