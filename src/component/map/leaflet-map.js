import React from "react"
import "./map.scss"
import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

class LeafletMap extends React.Component {
  componentDidMount() {
    let mymap = L.map("mapme").setView(this.props.coordinate, 18)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [24,41],
      iconAnchor: [12,41],
      popupAnchor:  [0, -30]
    });

    let marker = L.marker(this.props.coordinate).addTo(mymap)
    marker.bindPopup(this.props.popUpText).openPopup()
  }

  render() {
    return (
      <div id="mapme" />
    )
  }
}

export default LeafletMap