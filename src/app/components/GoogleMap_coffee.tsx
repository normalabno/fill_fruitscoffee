'use client';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 36.808973, // 東京
  lng: 137.184324,
};


export default function GoogleMap_coffee() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* マーカーなどをここに追加可能 */}
      </GoogleMap>
    </LoadScript>
  );
}