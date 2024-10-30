import Actions from './Actions/Actions';
import Categories from './Categories/Categories';
import styles from './Game.module.css';
import Task from './Task/Task';

export type GameProps = {
	title: string;
};

export default function Game({ title }: GameProps) {
	const generateTask = () => {};

	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<Categories />
			<Task task={() => generateTask()} />
			<Actions />
		</div>
	);
}
