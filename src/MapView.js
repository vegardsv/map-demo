import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import FETCH_STATUS from "./fetchStatus";

class MapView extends React.Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("yeah");
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
        this.setState({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      });

      Promise.resolve("")
        .then(() =>
          this.setState({
            fetchMeters: FETCH_STATUS.FETCHING
          })
        )
        .then(() => fetch("http://localhost:3001/meters"))
        .then(response => response.json())
        .then(json =>
          this.setState({
            fetchMeters: FETCH_STATUS.FETCH_DONE,
            meters: json
          })
        );
    }
  }

  constructor() {
    super();
    this.state = {
      lat: 63.376267,
      lng: 10.358736,
      zoom: 10,
      meters: [
        {
          id: "1",
          latitude: 63.398171,
          longitude: 10.359139,
          thumbnail: "http://placekitten.com/100/100"
        },
        {
          id: "2",
          latitude: 63.395202,
          longitude: 10.395073,
          thumbnail: "http://placekitten.com/200/200"
        },
        {
          id: "3",
          latitude: 63.404744,
          longitude: 10.367655,
          thumbnail: "http://placekitten.com/300/400"
        },
        {
          id: "4",
          latitude: 63.439163,
          longitude: 10.459903,
          thumbnail: "http://placekitten.com/400/400"
        }
      ],
      fetchMeters: FETCH_STATUS.UNTOUCHED
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.state.meters.map(({ latitude, longitude, thumbnail }) => (
          <Marker position={[latitude, longitude]}>
            <Popup>
              <span>
                <img src={thumbnail} width="80" height="80" alt="" />
              </span>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}

export default MapView;
