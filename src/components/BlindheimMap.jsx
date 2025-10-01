"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-gpx";

function GpxTrack() {
  const map = useMap();

  useEffect(() => {
   import("leaflet-gpx").then(() => {
      const gpx = new L.GPX("/Gimsdalstindbheim.gpx", {
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
      }).on("loaded", function (e) {
        map.fitBounds(e.target.getBounds());
      });

      gpx.addTo(map);
    });
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