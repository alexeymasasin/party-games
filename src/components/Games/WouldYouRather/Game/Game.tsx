import { useState } from 'react';
import { RiNumber1, RiNumber2 } from 'react-icons/ri';
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
				<Option
					text={optionOne}
					onClick={generateOptions}
					icon={<RiNumber1 />}
				/>
				<p className={styles.or}>или</p>
				<Option
					icon={<RiNumber2 />}
					text={optionTwo}
					onClick={generateOptions}
				/>
			</div>
		</div>
	);
}
