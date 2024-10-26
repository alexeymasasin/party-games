import { PersonIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { GameCardProps } from '../../lib/types';
import styles from './GameCard.module.css';

export default function GameCard({
	title,
	description,
	playersRequired,
	bgColor,
}: GameCardProps) {
	return (
		<div className={`${bgColor} ${styles.wrapper}`}>
			<div>
				<h3>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.right_side}>
				<p className={styles.players}>
					<span className={styles.person_icon}>
						<PersonIcon />
					</span>
					<span className={styles.person_count}>{playersRequired}+</span>
				</p>
				<span className={styles.play_icon}>
					<TriangleRightIcon />
				</span>
			</div>
		</div>
	);
}
