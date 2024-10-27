import { useState } from 'react';
import { WYR_OPTIONS } from '../../../../lib/options';
import { GameProps } from '../../../../lib/types';
import styles from './Game.module.css';
import Option from './Option/Option';

export default function Game({ title }: GameProps) {
	const randomOption = (): string => {
		return WYR_OPTIONS[Math.floor(Math.random() * WYR_OPTIONS.length)];
	};

	const capitalize = (word: string): string => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const [optionOne, setOptionOne] = useState(capitalize(randomOption()));
	const [optionTwo, setOptionTwo] = useState(capitalize(randomOption()));

	const generateOptions = () => {
		const newOptionOne = capitalize(randomOption());
		const newOptionTwo = capitalize(randomOption());
		if (newOptionOne !== newOptionTwo) {
			setOptionOne(newOptionOne);
			setOptionTwo(newOptionTwo);
		}
	};

	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<div className={styles.options}>
				<Option text={optionOne} onClick={generateOptions} />
				<p className={styles.or}>или</p>
				<Option text={optionTwo} onClick={generateOptions} />
			</div>
		</div>
	);
}
