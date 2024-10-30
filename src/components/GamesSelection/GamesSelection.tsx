import { GAME_CARDS } from '../../lib/constants';
import GameCard from './GameCard';
import styles from './GamesSelection.module.css';

export default function GamesSelection() {
	return (
		<div className={styles.wrapper}>
			{GAME_CARDS.map((g) => (
				<GameCard
					key={g.title}
					title={g.title}
					description={g.description}
					playersRequired={g.playersRequired}
					bgColor={g.bgColor}
					path={g.path}
				/>
			))}
		</div>
	);
}
