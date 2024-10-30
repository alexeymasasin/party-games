import styles from './Game.module.css';

export type GameProps = {
	title: string;
};

export default function Game({ title }: GameProps) {
	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
		</div>
	);
}
