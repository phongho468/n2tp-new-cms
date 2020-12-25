import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./map.scss"

export default class Map extends React.Component {
  render() {

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    return (
      <MapContainer id="map" center={[21.0239512, 105.8063295]} zoom={20} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          >
          <Marker position={[21.0239512, 105.8063295]}>
            <Popup>
              OKOK
            </Popup>
          </Marker>
        </TileLayer>
      </MapContainer>
    )
  }
}
