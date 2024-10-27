import { Route, Routes } from 'react-router-dom';
import WouldYouRather from './Games/WouldYouRather/WouldYouRather';
import GamesSelection from './GamesSelection/GamesSelection';

export default function MainContent() {
	return (
		<main>
			<Routes>
				<Route path="/" Component={GamesSelection} />
				<Route path="/would-you-rather" Component={WouldYouRather} />
			</Routes>
		</main>
	);
}
