type AssignmentProps = {
	assignmentText: string;
};

export default function Assignment({ assignmentText }: AssignmentProps) {
	return <div>{assignmentText}</div>;
}
