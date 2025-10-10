"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

function GpxTrack() {
  const map = useMap();

  useEffect(() => {
    let gpxLayer;
    

    import("leaflet-gpx")
      .then(() => {
        gpxLayer = new L.GPX("/Urfjellet.gpx", {
          async: true,
          marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null,
          },
          polyline_options: {
            color: "blue",
            weight: 4,
          },
        })
          .on("loaded", (e) => {
            map.fitBounds(e.target.getBounds());
          })
          .addTo(map);
      })
      .catch((err) => {
        console.error("Feil ved lasting av GPX:", err);
      });

    return () => {
      if (gpxLayer) {
        map.removeLayer(gpxLayer);
      }
    };
  }, [map]);

  return null;
}

export default function UrfjelletMap() {
  return (
    <MapContainer
      center={[62.32699, 6.71989]}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <GpxTrack />
    </MapContainer>
  );
}