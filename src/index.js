import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style';

export default function App() {
	const position = [35.45562693113854, 139.63408470153811]

	return <>
		<MapContainer center={position} zoom={15} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	</>
}
