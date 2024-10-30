import { Link } from 'react-router-dom';
import styles from './Rules.module.css';

export type RulesProps = {
	rules: string;
};

export default function Rules({ rules }: RulesProps) {
	return (
		<div className={`${styles.wrapper} yellow-bg`}>
			<div className={styles.text_block}>
				<h3>Правила</h3>
				<p>{rules}</p>
			</div>
			<Link to={'/party-games'} className={styles.back_btn}>
				Назад
			</Link>
		</div>
	);
}
