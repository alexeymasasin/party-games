import { OptionsProps } from '../../../../../lib/types';
import styles from './Option.module.css';

export default function Option({ text, onClick, icon }: OptionsProps) {
	return (
		<button onClick={onClick} className={`${styles.wrapper} purple-bg`}>
			<span className={styles.logo}>{icon}</span>
			{text}
		</button>
	);
}
