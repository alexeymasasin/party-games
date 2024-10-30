import styles from './Actions.module.css';

type ActionBtnProps = {
	type: string;
	generateTask: () => void;
	generateQuestion: () => void;
};

export default function ActionBtn({
	type,
	generateTask,
	generateQuestion,
}: ActionBtnProps) {
	return (
		<button
			className={`${type === 'task' ? styles.task : styles.question}`}
			onClick={type === 'task' ? generateTask : generateQuestion}
		>
			{type === 'task' ? 'Действие' : 'Правда'}
		</button>
	);
}
