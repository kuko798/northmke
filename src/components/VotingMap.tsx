"use client";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { APIProvider, Map, Polygon, useApiIsLoaded, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useMemo, useRef } from "react";
import { googleMapsApiKey } from "@/lib/config";
import {
  buildDistrictLabelIcon,
  buildInfoWindowContent,
  featuredDistrictIds,
  geoJsonToPathSets,
  getDistrictStyle,
  getRegionBounds,
  mapDefaults,
  mkeDistricts,
  type VotingLocation,
  votingLocations,
} from "@/lib/map";

type VotingMapProps = {
  className?: string;
  heightClassName?: string;
  showDistricts?: boolean;
};

function DistrictPolygons() {
  const polygons = useMemo(
    () =>
      mkeDistricts.flatMap((district) => {
        const style = getDistrictStyle(district.id);
        return geoJsonToPathSets(district.geometry).map((paths, index) => ({
          key: `${district.id}-${index}`,
          paths,
          style,
        }));
      }),
    [],
  );

  return (
    <>
      {polygons.map((poly) => (
        <Polygon
          key={poly.key}
          paths={poly.paths}
          strokeColor={poly.style.strokeColor}
          strokeOpacity={poly.style.strokeOpacity}
          strokeWeight={2}
          fillColor={poly.style.fillColor}
          fillOpacity={poly.style.fillOpacity}
          clickable={false}
        />
      ))}
    </>
  );
}

function DistrictLabels() {
  const map = useMap();
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!map) return;

    markersRef.current = mkeDistricts.map((district) => {
      const style = getDistrictStyle(district.id);
      return new google.maps.Marker({
        position: district.centroid,
        map,
        icon: buildDistrictLabelIcon(district.id),
        label: {
          text: district.label,
          color: style.labelColor,
          fontSize: "14px",
          fontWeight: "700",
        },
        clickable: false,
        zIndex: 1000,
      });
    });

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
    };
  }, [map]);

  return null;
}

function ClusteredPollingMarkers({ locations }: { locations: VotingLocation[] }) {
  const map = useMap();
  const clustererRef = useRef<MarkerClusterer | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    if (!map) return;

    infoWindowRef.current = new google.maps.InfoWindow();

    const markers = locations.map((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        title: location.name,
      });

      marker.addListener("click", () => {
        infoWindowRef.current?.setContent(buildInfoWindowContent(location));
        infoWindowRef.current?.open({ map, anchor: marker });
      });

      return marker;
    });

    clustererRef.current = new MarkerClusterer({ map, markers });

    return () => {
      clustererRef.current?.clearMarkers();
      clustererRef.current = null;
      infoWindowRef.current?.close();
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [map, locations]);

  return null;
}

function MapViewport({ fitBounds }: { fitBounds: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !fitBounds) return;
    map.fitBounds(getRegionBounds(), 48);
  }, [map, fitBounds]);

  return null;
}

function MapCanvas({ className, heightClassName, showDistricts }: VotingMapProps) {
  const districtList = featuredDistrictIds.join(", ");

  return (
    <div className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-brand-navy/15 bg-brand-navy/5 shadow-sm ${heightClassName ?? "h-[min(70vh,640px)]"}`}
      >
        <Map
          defaultCenter={{ lat: mapDefaults.lat, lng: mapDefaults.lng }}
          defaultZoom={mapDefaults.zoom}
          mapTypeId="hybrid"
          gestureHandling="greedy"
          disableDefaultUI={false}
          fullscreenControl
          zoomControl
          mapTypeControl
          streetViewControl={false}
          className="h-full w-full"
        >
          <MapViewport fitBounds={showDistricts ?? true} />
          {showDistricts ? (
            <>
              <DistrictPolygons />
              <DistrictLabels />
            </>
          ) : null}
          <ClusteredPollingMarkers locations={votingLocations} />
        </Map>
      </div>
      <p className="mt-3 text-center text-xs text-brand-black/55">
        MKE aldermanic districts {districtList} · {votingLocations.length} polling places · Tap a pin or cluster
        for location details.
      </p>
    </div>
  );
}

function MissingApiKeyNotice({ className, heightClassName }: VotingMapProps) {
  const districtList = featuredDistrictIds.join(", ");

  return (
    <div className={className}>
      <div
        className={`flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-brand-navy/20 bg-surface px-6 text-center ${heightClassName ?? "h-[min(70vh,640px)]"}`}
      >
        <p className="font-serif text-xl font-bold text-brand-navy">Map preview unavailable</p>
        <p className="max-w-md text-sm leading-relaxed text-brand-black/70">
          Add <code className="rounded bg-white px-1.5 py-0.5 text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">.env.local</code> to enable the interactive voting
          map.
        </p>
        <p className="text-xs text-brand-black/55">
          Districts {districtList} · {votingLocations.length} polling places loaded
        </p>
      </div>
    </div>
  );
}

function MapGate(props: VotingMapProps) {
  const loaded = useApiIsLoaded();
  if (!loaded) {
    return (
      <div className={props.className}>
        <div
          className={`flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-surface text-sm text-brand-black/60 ${props.heightClassName ?? "h-[min(70vh,640px)]"}`}
        >
          Loading map…
        </div>
      </div>
    );
  }
  return <MapCanvas {...props} />;
}

export function VotingMap(props: VotingMapProps) {
  if (!googleMapsApiKey) {
    return <MissingApiKeyNotice {...props} />;
  }

  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <MapGate {...props} />
    </APIProvider>
  );
}
