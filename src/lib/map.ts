import districtsData from "@/data/mke-districts.json";
import locationsData from "@/data/voting-locations.json";

export type VotingLocation = {
  id: number;
  name: string;
  address: string;
  entrance: string;
  lat: number;
  lng: number;
  district: number;
};

export type DistrictGeometry =
  | { type: "Polygon"; coordinates: number[][][] }
  | { type: "MultiPolygon"; coordinates: number[][][][] };

export type DistrictBoundary = {
  id: number;
  label: string;
  alderperson: string;
  centroid: { lat: number; lng: number };
  geometry: DistrictGeometry;
};

export type DistrictStyle = {
  fillColor: string;
  strokeColor: string;
  labelColor: string;
  fillOpacity: number;
  strokeOpacity: number;
};

/** Aldermanic districts shown on the voting map. */
export const featuredDistrictIds = [1, 2, 5, 7, 9, 10] as const;

export const votingLocations = locationsData as VotingLocation[];
export const mkeDistricts = districtsData as DistrictBoundary[];

export const mapDefaults = {
  lat: 43.065,
  lng: -87.94,
  zoom: 11,
} as const;

const districtStyles: Record<number, DistrictStyle> = {
  1: { fillColor: "#64B5F6", strokeColor: "#1565C0", labelColor: "#0D47A1", fillOpacity: 0.3, strokeOpacity: 0.85 },
  2: { fillColor: "#CFD8DC", strokeColor: "#546E7A", labelColor: "#37474F", fillOpacity: 0.34, strokeOpacity: 0.8 },
  5: { fillColor: "#4DD0E1", strokeColor: "#00838F", labelColor: "#006064", fillOpacity: 0.28, strokeOpacity: 0.82 },
  7: { fillColor: "#CE93D8", strokeColor: "#7B1FA2", labelColor: "#4A148C", fillOpacity: 0.3, strokeOpacity: 0.82 },
  9: { fillColor: "#A5D6A7", strokeColor: "#2E7D32", labelColor: "#1B5E20", fillOpacity: 0.3, strokeOpacity: 0.82 },
  10: { fillColor: "#FFE082", strokeColor: "#F9A825", labelColor: "#E65100", fillOpacity: 0.32, strokeOpacity: 0.85 },
};

export function getDistrictStyle(districtId: number): DistrictStyle {
  return (
    districtStyles[districtId] ?? {
      fillColor: "#B0BEC5",
      strokeColor: "#78909C",
      labelColor: "#37474F",
      fillOpacity: 0.28,
      strokeOpacity: 0.75,
    }
  );
}

export function geoJsonToPathSets(geometry: DistrictGeometry): google.maps.LatLngLiteral[][] {
  if (geometry.type === "Polygon") {
    return [geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }))];
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map((poly) => poly[0].map(([lng, lat]) => ({ lat, lng })));
  }
  return [];
}

export function getRegionBounds(): google.maps.LatLngBoundsLiteral {
  const points: google.maps.LatLngLiteral[] = votingLocations.map((loc) => ({
    lat: loc.lat,
    lng: loc.lng,
  }));

  for (const district of mkeDistricts) {
    points.push(district.centroid);
    for (const pathSet of geoJsonToPathSets(district.geometry)) {
      points.push(...pathSet);
    }
  }

  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);

  return {
    north: Math.max(...lats) + 0.012,
    south: Math.min(...lats) - 0.012,
    east: Math.max(...lngs) + 0.012,
    west: Math.min(...lngs) - 0.012,
  };
}

export function buildInfoWindowContent(location: VotingLocation): string {
  const entrance = location.entrance
    ? `<p style="margin:4px 0 0;font-size:12px;color:#555">${location.entrance}</p>`
    : "";

  return `
    <div style="font-family:system-ui,sans-serif;padding:2px 0;max-width:260px">
      <p style="margin:0;font-size:14px;font-weight:600;color:#0a1f3c">${location.name}</p>
      <p style="margin:4px 0 0;font-size:13px;color:#333">${location.address}</p>
      ${entrance}
      <p style="margin:8px 0 0;font-size:11px;font-weight:600;color:#c9a227">Aldermanic District ${location.district}</p>
    </div>
  `;
}

export function buildDistrictLabelIcon(districtId: number): google.maps.Symbol {
  const style = getDistrictStyle(districtId);
  return {
    path: 0,
    scale: 16,
    fillColor: "#ffffff",
    fillOpacity: 0.95,
    strokeColor: style.strokeColor,
    strokeWeight: 2.5,
  };
}
