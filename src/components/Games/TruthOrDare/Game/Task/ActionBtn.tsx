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
		<button onClick={type === 'task' ? generateTask : generateQuestion}>
			{type === 'task' ? 'Действие' : 'Правда'}
		</button>
	);
}
