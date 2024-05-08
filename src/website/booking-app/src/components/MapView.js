import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

const customIcon = L.divIcon({
    html: svgIcon,
    className: '',
    iconSize: [24, 24],     // Size of the icon
    iconAnchor: [12, 24],     // Point of the icon
    popupAnchor: [0, -24]
});

const MapView = ({ location }) => {
    if (!location) return <p>No location data provided.</p>;

    return (
        <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} icon={customIcon}>
                <Popup>
                    Here's the location!
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapView;
