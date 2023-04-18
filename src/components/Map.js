import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ position }) => {
  return (
    <MapContainer
      center={[position[0], position[1]]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
