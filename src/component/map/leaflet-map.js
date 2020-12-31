import React from "react"
import "./map.scss"

/* leaflet.css must be imported before leaflet.js */

import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

/* react-leaflet doesn't work so I have to build it from the OG leaflet */

class LeafletMap extends React.Component {

  /* leaflet.js requires an existing div element to render so the logic must go
  * after the mount. Ref: https://stackoverflow.com/questions/37661136/react-and-leaflet
  * source code for this is from the tutorial of leaflet*/

  componentDidMount() {
    let myMap = L.map("leaflet-map").setView(this.props.coordinate, 16)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    /* The marker got error by default because it cannot detect marker images' path
    * so we need to explicitly redefine it like this. Ref:
    * https://leafletjs.com/examples/custom-icons/*/

    L.Marker.prototype.options.icon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [24,41],
      iconAnchor: [12,41],
      popupAnchor:  [0, -30]
    });

    let marker = L.marker(this.props.coordinate).addTo(myMap)
    marker.bindPopup(this.props.popUpText)

    /* To make sure the div is rendered before the map, otherwise the map will not
    * fully rendered. If the map still not fully rendered, increase timeout. Ref:
    * https://github.com/Leaflet/Leaflet/issues/4835 */
    setTimeout(function(){ myMap.invalidateSize()}, 100);
  }

  render() {
    return (
      <div id="leaflet-map" />
    )
  }
}

export default LeafletMap