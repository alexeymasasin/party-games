import { useState } from 'react';
import {
	TOD_QUESTIONS_RELATIONSHIPS,
	TOD_TASKS_RELATIONSHIPS,
} from '../../../../lib/games/tod';
import Actions from './Actions/Actions';
import Categories from './Categories/Categories';
import styles from './Game.module.css';
import Assignment from './Task/Assignment';

export type GameProps = {
	title: string;
};

export default function Game({ title }: GameProps) {
	const [currentCategory, setCurrentCategory] = useState('default');

	const handleSetCategory = (category: string): void => {
		setCurrentCategory(category);
	};

	const generateTask = () => {
		if (currentCategory === 'relationships') {
			setAssignmentText(
				TOD_TASKS_RELATIONSHIPS[
					Math.floor(Math.random() * TOD_TASKS_RELATIONSHIPS.length)
				]
			);
		}
	};

	const generateQuestion = () => {
		if (currentCategory === 'relationships') {
			setAssignmentText(
				TOD_QUESTIONS_RELATIONSHIPS[
					Math.floor(Math.random() * TOD_QUESTIONS_RELATIONSHIPS.length)
				]
			);
		}
	};

	const [assignmentText, setAssignmentText] = useState('sd');

	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<Categories
				currentCategory={currentCategory}
				handleSetCategory={handleSetCategory}
			/>
			{currentCategory !== 'default' && (
				<Assignment assignmentText={assignmentText} />
			)}
			{currentCategory !== 'default' && (
				<Actions
					generateTask={generateTask}
					generateQuestion={generateQuestion}
				/>
			)}
		</div>
	);
}
