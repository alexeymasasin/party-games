import { OptionsProps } from '../../../../../lib/types';
import styles from './Option.module.css';

export default function Option({ text, onClick }: OptionsProps) {
	return (
		<button onClick={onClick} className={styles.wrapper}>
			{text}
		</button>
	);
}
