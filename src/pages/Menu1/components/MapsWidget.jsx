import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import Card from "../../../components/Card";

export default function MapsWidget() {
  const jakarta = [-6.2088, 106.8456];
  const bandung = [-6.9175, 107.6191];

  return (
    <Card title="Maps">
      <MapContainer center={jakarta} zoom={7} className="h-80 w-full rounded">
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map 1">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Map 2">
            <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
        </LayersControl>

        <Marker position={jakarta}>
          <Popup>Jakarta</Popup>
        </Marker>

        <Marker position={bandung}>
          <Popup>Bandung</Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
}
