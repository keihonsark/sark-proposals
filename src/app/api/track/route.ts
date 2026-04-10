import type { NextRequest } from "next/server";

const WEBHOOK_URL = "https://hook.us2.make.com/ggqjbq692g80fgm8mpf8dt0285z2t43l";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const payload = {
      type: "proposal_viewed",
      client: body.client ?? "unknown",
      timestamp: body.timestamp ?? new Date().toISOString(),
      userAgent: body.userAgent ?? request.headers.get("user-agent") ?? "",
      referrer: body.referrer ?? request.headers.get("referer") ?? "",
      ip,
    };

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 200 });
  }
}
