import { GAME_CARDS } from '../../../lib/constants';
import Game from './Game/Game';
import Rules from './Rules/Rules';
import styles from './WouldYouRather.module.css';

export default function WouldYouRather() {
	return (
		<div className={`${styles.wrapper} game-bg`}>
			<Game title={GAME_CARDS[0].title} />
			<Rules rules={GAME_CARDS[0].rules} />
		</div>
	);
}
