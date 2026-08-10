import { NextResponse } from "next/server";
import { buildAddressQuery, lookupVotingByAddress } from "@/lib/mke-voting";

type LookupBody = {
  address?: string;
  houseNumber?: string;
  streetLabel?: string;
  unit?: string;
};

export async function POST(request: Request) {
  let body: LookupBody;
  try {
    body = (await request.json()) as LookupBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const address =
    body.address?.trim() ||
    (body.houseNumber && body.streetLabel
      ? buildAddressQuery(body.houseNumber, body.streetLabel, body.unit)
      : "");

  if (!address) {
    return NextResponse.json({ error: "Enter a Milwaukee address to search." }, { status: 400 });
  }

  try {
    const result = await lookupVotingByAddress(address);
    if (!result) {
      return NextResponse.json(
        { error: "Address not found. Use a City of Milwaukee street address." },
        { status: 404 },
      );
    }
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Voting lookup is temporarily unavailable." }, { status: 502 });
  }
}
