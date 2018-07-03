import React from "react";
import ApiKey from "../../Apikey";


// export class Container extends React.Component {
//   render() {
//     if (!this.props.loaded) {
//       return <div>Loading...</div>
//     }
//     return (
//       <div>Map will go here</div>
//     )
//   }
// }

// export default GoogleApiComponent({
//   apiKey: ApiKey
// })(Container)


//////////////////////////////
//  Google Maps API test  
//  https://tomchentw.github.io/react-google-maps/ top section

// import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.7764, lng: 84.3893 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.7764, lng: 84.3893 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;



/////////////// HOCS WITH GOOGLE MAP
// import {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapWithAMarker = withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 33.7764, lng: 84.3893 }}
//   >
//     <Marker
//       position={{ lat: 33.7764, lng: 84.3893 }}
//     />
//   </GoogleMap>
// );

// <MapWithAMarker
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />


/////////////////  WITH SCRIPTJS
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 33.7764, lng: 84.3893 }}
//   >
//     <Marker
//       position={{ lat: 33.7764, lng: 84.3893 }}
//     />
//   </GoogleMap>
// ));

// <MapWithAMarker
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />





















///////////////////
//React-Map-GL  Uber

// import {Component} from 'react';
// import ReactMapGL from 'react-map-gl';

// class Map extends Component {

//   state = {
//     viewport: {
//       width: 400,
//       height: 400,
//       latitude: 37.7577,
//       longitude: -122.4376,
//       zoom: 8
//     }
//   };

//   render() {
//     return (
//       <ReactMapGL
//         {...this.state.viewport}
//         onViewportChange={(viewport) => this.setState({viewport})}
//       />
//     );
//   }
// }