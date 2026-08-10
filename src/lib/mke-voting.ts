/**
 * City of Milwaukee MyMilwaukeeHome GIS voting lookup (justVoting.jsp data source).
 * @see https://itmdapps.milwaukee.gov/MyMilwaukeeHome/singleEmbed.jsp?page=justVoting.jsp
 */

const MKE_BASE = "https://itmdapps.milwaukee.gov";

type RpcBody = Record<string, unknown> & {
  method: string;
  jsonrpc: "2.0";
  id: number;
};

async function mkeRpc<T>(path: string, method: string, data: Record<string, unknown>): Promise<T> {
  const body: RpcBody = { ...data, method, jsonrpc: "2.0", id: 1 };
  const res = await fetch(`${MKE_BASE}${path}?method=${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Milwaukee GIS request failed (${res.status})`);
  }

  const json = (await res.json()) as { result?: T; success?: boolean };
  return json.result as T;
}

export type MkeStreet = {
  ID: number;
  Name: string;
  Type: string;
  Direction: string;
  Label: string;
};

export type MkeAddressMatch = {
  ID: number;
  Address: string;
  FullAddress: string;
  HouseNumber: number;
  Direction: string;
  StreetName: string;
  StreetType: string;
  Suffix: string;
  Unit: string;
  FK_Zip: number;
  Taxkey: number;
};

export type MkeWard = {
  Ward: number;
  PollingPl: string;
  Address: string;
  MainEntr: string;
  MainPkng: string;
  AcsblEntr: string;
  AcsblPkng: string;
};

export type VotingLookupResult = {
  propertyAddress: string;
  ward: number | null;
  pollingPlace: string | null;
  pollingAddress: string | null;
  mainEntrance: string | null;
  mainParking: string | null;
  accessibleEntrance: string | null;
  accessibleParking: string | null;
  sampleBallotUrl: string | null;
  similarAddresses: string[];
};

export async function getStreetsByDirection(direction: string): Promise<MkeStreet[]> {
  const streets = await mkeRpc<MkeStreet[]>("/ItmdServices/gis/Services", "getStreet", {
    Direction: direction,
  });
  return streets ?? [];
}

function formatPropertyAddress(address: MkeAddressMatch): string {
  const parts = [
    address.HouseNumber,
    address.Suffix,
    address.Direction,
    address.StreetName,
    address.StreetType,
    address.Unit,
    address.FK_Zip,
  ].filter((p) => p !== "" && p != null);
  return parts.join(" ");
}

export async function lookupVotingByAddress(inputAddress: string): Promise<VotingLookupResult | null> {
  const trimmed = inputAddress.trim().replace(/\s+/g, " ");
  if (!trimmed) return null;

  const matches = await mkeRpc<MkeAddressMatch[]>("/ItmdServices/gis/Address", "getAddressesByFullAddress", {
    address: trimmed,
  });

  const match = matches?.[0];
  if (!match) return null;

  const [addressDetail] =
    (await mkeRpc<MkeAddressMatch[]>("/ItmdServices/gis/Address", "getAddressById", { ID: match.ID })) ?? [];

  if (!addressDetail) return null;

  const similar =
    (await mkeRpc<MkeAddressMatch[]>(
      "/ItmdServices/gis/Address",
      "getAddressesWithDifferentUnitOrSuffixById",
      { ID: match.ID },
    )) ?? [];

  const [tax] =
    (await mkeRpc<Array<{ DistrictsMap?: { Ward?: Array<{ FK_DistrictLayer: number; FK__District: number }> } }>>(
      "/ItmdServices/gis/Tax",
      "getTaxById",
      { ID: addressDetail.Taxkey },
    )) ?? [];

  let ward: MkeWard | undefined;
  const wardRef = tax?.DistrictsMap?.Ward?.[0];
  if (wardRef) {
    const [wardResult] =
      (await mkeRpc<MkeWard[]>("/ItmdServices/gis/Services", "getDistrictByDistrictLayerIdDistrictId", {
        DistrictLayerId: wardRef.FK_DistrictLayer,
        DistrictId: wardRef.FK__District,
      })) ?? [];
    ward = wardResult;
  }

  let sampleBallotUrl: string | null = null;
  if (ward?.Ward) {
    const ballotHtml = await mkeRpc<string>("/MyMilwaukeeHome/Services", "sampleBallot", { ward: ward.Ward });
    const hrefMatch = typeof ballotHtml === "string" ? ballotHtml.match(/href=['"]([^'"]+)['"]/) : null;
    if (hrefMatch?.[1]) {
      sampleBallotUrl = hrefMatch[1].startsWith("http")
        ? hrefMatch[1]
        : `${MKE_BASE}${hrefMatch[1]}`;
    }
  }

  return {
    propertyAddress: formatPropertyAddress(addressDetail),
    ward: ward?.Ward ?? null,
    pollingPlace: ward?.PollingPl ?? null,
    pollingAddress: ward?.Address ?? null,
    mainEntrance: ward?.MainEntr ?? null,
    mainParking: ward?.MainPkng ?? null,
    accessibleEntrance: ward?.AcsblEntr ?? null,
    accessibleParking: ward?.AcsblPkng ?? null,
    sampleBallotUrl,
    similarAddresses: similar.map((s) => s.Address).filter(Boolean),
  };
}

export function buildAddressQuery(houseNumber: string, streetLabel: string, unit?: string): string {
  const parts = [houseNumber.trim(), streetLabel.trim()];
  if (unit?.trim()) parts.push(unit.trim());
  return parts.join(" ");
}

export const mkeVotingLookupSourceUrl =
  "https://itmdapps.milwaukee.gov/MyMilwaukeeHome/singleEmbed.jsp?page=justVoting.jsp";
