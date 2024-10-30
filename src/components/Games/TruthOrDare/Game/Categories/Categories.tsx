import { TOD_CATEGORIES } from '../../../../../lib/games/tod';
import styles from './Categories.module.css';
import SingleCategory from './SingleCategory';

export default function Categories() {
	return (
		<div className={styles.wrapper}>
			{TOD_CATEGORIES.map((e) => (
				<SingleCategory path={e.path} title={e.title} key={e.title} />
			))}
		</div>
	);
}
