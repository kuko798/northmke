import { NextResponse } from "next/server";
import { getStreetsByDirection } from "@/lib/mke-voting";

const DIRECTIONS = new Set(["N", "S", "E", "W"]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const direction = searchParams.get("direction")?.toUpperCase() ?? "";

  if (!DIRECTIONS.has(direction)) {
    return NextResponse.json({ error: "Direction must be N, S, E, or W." }, { status: 400 });
  }

  try {
    const streets = await getStreetsByDirection(direction);
    return NextResponse.json({ streets });
  } catch {
    return NextResponse.json({ error: "Unable to load street list." }, { status: 502 });
  }
}
