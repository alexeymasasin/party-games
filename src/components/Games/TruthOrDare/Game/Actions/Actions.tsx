import ActionBtn from './ActionBtn';

type ActionsProps = {
	generateTask: () => void;
	generateQuestion: () => void;
};

export default function Actions({
	generateTask,
	generateQuestion,
}: ActionsProps) {
	return (
		<div>
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
