import { useState } from 'react';
import {
	TOD_QUESTIONS_ENTERTAINMENT,
	TOD_QUESTIONS_FEARS,
	TOD_QUESTIONS_RELATIONSHIPS,
	TOD_QUESTIONS_SECRETS,
	TOD_TASKS_ENTERTAINMENT,
	TOD_TASKS_FEARS,
	TOD_TASKS_RELATIONSHIPS,
	TOD_TASKS_SECRETS,
} from '../../../../lib/games/tod';
import Actions from './Actions/Actions';
import Categories from './Categories/Categories';
import styles from './Game.module.css';
import Assignment from './Task/Assignment';
import DefaultAssignment from './Task/DefaultAssignment';

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
		if (currentCategory === 'fears') {
			setAssignmentText(
				TOD_TASKS_FEARS[Math.floor(Math.random() * TOD_TASKS_FEARS.length)]
			);
		}
		if (currentCategory === 'entertainment') {
			setAssignmentText(
				TOD_TASKS_ENTERTAINMENT[
					Math.floor(Math.random() * TOD_TASKS_ENTERTAINMENT.length)
				]
			);
		}
		if (currentCategory === 'secrets') {
			setAssignmentText(
				TOD_TASKS_SECRETS[Math.floor(Math.random() * TOD_TASKS_SECRETS.length)]
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
		if (currentCategory === 'fears') {
			setAssignmentText(
				TOD_QUESTIONS_FEARS[
					Math.floor(Math.random() * TOD_QUESTIONS_FEARS.length)
				]
			);
		}
		if (currentCategory === 'entertainment') {
			setAssignmentText(
				TOD_QUESTIONS_ENTERTAINMENT[
					Math.floor(Math.random() * TOD_QUESTIONS_ENTERTAINMENT.length)
				]
			);
		}
		if (currentCategory === 'secrets') {
			setAssignmentText(
				TOD_QUESTIONS_SECRETS[
					Math.floor(Math.random() * TOD_QUESTIONS_SECRETS.length)
				]
			);
		}
	};

	const [assignmentText, setAssignmentText] = useState('Выберите действие:');

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
			{currentCategory === 'default' && <DefaultAssignment />}
		</div>
	);
}
