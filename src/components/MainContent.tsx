import { Route, Routes } from 'react-router-dom';
import TruthOrDare from './Games/TruthOrDare/TruthOrDare';
import WouldYouRather from './Games/WouldYouRather/WouldYouRather';
import GamesSelection from './GamesSelection/GamesSelection';

export default function MainContent() {
	return (
		<main>
			<Routes>
				<Route path="/" Component={GamesSelection} />
				<Route path="/would-you-rather" Component={WouldYouRather} />
				<Route path="/truth-or-dare" Component={TruthOrDare} />
			</Routes>
		</main>
	);
}
