import { PiArrowArcRightFill } from 'react-icons/pi';
import styles from './Assignment.module.css';

export default function DefaultAssignment() {
	return (
		<p className={styles.default_text}>
			Выберите категорию!{' '}
			<span className={styles.default_arrow}>
				<PiArrowArcRightFill />
			</span>
		</p>
	);
}
