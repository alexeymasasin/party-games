import { RulesProps } from '../../../../lib/types';
import styles from './Rules.module.css';

export default function Rules({ rules }: RulesProps) {
	return (
		<div className={`${styles.wrapper} purple-bg`}>
			<div className={styles.text_block}>
				<h3>Правила</h3>
				<p>{rules}</p>
			</div>
			<div className={styles.settings_block}></div>
		</div>
	);
}
