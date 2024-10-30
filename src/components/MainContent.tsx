import { Route, Routes } from 'react-router-dom';
import TruthOrDare from './Games/TruthOrDare/TruthOrDare';
import WouldYouRather from './Games/WouldYouRather/WouldYouRather';
import GamesSelection from './GamesSelection/GamesSelection';

export default function MainContent() {
	return (
		<main>
			<Routes>
				<Route path="/party-games" Component={GamesSelection} />
				<Route
					path="/party-games/would-you-rather"
					Component={WouldYouRather}
				/>
				<Route path="/party-games/truth-or-dare" Component={TruthOrDare} />
			</Routes>
		</main>
	);
}
