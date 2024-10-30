import { GAME_CARDS } from '../../../lib/constants';
import Game from './Game/Game';
import Rules from './Rules/Rules';
import styles from './TruthOrDare.module.css';

export default function TruthOrDare() {
	return (
		<div className={`${styles.wrapper} game-bg`}>
			<Game title={GAME_CARDS[1].title} />
			<Rules rules={GAME_CARDS[1].rules} />
		</div>
	);
}
