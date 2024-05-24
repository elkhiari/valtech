import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

function Map() {
  const position = [33.97799059265195, -6.826527004220867];
  return (
    <div className="relative w-full overflow-hidden ">
      <MapContainer
        center={position as any}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[50vh] overflow-hidden w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position as any}
          icon={L.icon({
            iconUrl: "/logo.svg",
            iconSize: [80, 80],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })}
        >
          <Popup>
            <span className="text-2xl font-bold text-black">Siège Valtech</span>
            <p>Rue Abdelfattah Sebbata et Rue Abdellah El Ayachi, Rabat</p>
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
}

export default Map;
