import ActionBtn from './ActionBtn';
import styles from './Actions.module.css';

type ActionsProps = {
	generateTask: () => void;
	generateQuestion: () => void;
};

export default function Actions({
	generateTask,
	generateQuestion,
}: ActionsProps) {
	return (
		<div className={styles.actions}>
			<ActionBtn
				type="question"
				generateTask={generateTask}
				generateQuestion={generateQuestion}
			/>
			<ActionBtn
				type="task"
				generateTask={generateTask}
				generateQuestion={generateQuestion}
			/>
		</div>
	);
}
