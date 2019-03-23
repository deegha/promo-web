import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapComponent extends React.Component {
  
  render () {

    const style = {
      width: '100%',
      height: '100%',
    }

    const {lat, lng} = this.props 

    return (
      <Map 
      google={this.props.google} 
      zoom={16} 
      initialCenter={{
        lat: lat,
        lng: lng
      }}
      style={style}>
  
        <Marker 
          position={{lat: lat, lng: lng}}
          name={'Current location'} />
  
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    )
  } 
}  

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDnRfb6EeIIxCDaB6nQ7scwatFEkcrIsHw')
})(MapComponent)