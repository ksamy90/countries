import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = ({ position }) => {
  return (
    <MapContainer
      center={[position[0], position[1]]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <Marker position={[position[1], position[0]]} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
