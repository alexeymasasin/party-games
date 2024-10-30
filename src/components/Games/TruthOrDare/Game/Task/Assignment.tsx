import styles from './Assignment.module.css';

type AssignmentProps = {
	assignmentText: string;
};

export default function Assignment({ assignmentText }: AssignmentProps) {
	return <h3 className={styles.assignment}>{assignmentText}</h3>;
}
