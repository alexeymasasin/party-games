import { TOD_CATEGORIES } from '../../../../../lib/games/tod';
import styles from './Categories.module.css';
import SingleCategory from './SingleCategory';

type CategoriesProps = {
	currentCategory: string;
	handleSetCategory: (category: string) => void;
};

export default function Categories({
	currentCategory,
	handleSetCategory,
}: CategoriesProps) {
	console.log(currentCategory);
	return (
		<div className={styles.wrapper}>
			{TOD_CATEGORIES.map((e) => (
				<SingleCategory
					handleSetCategory={handleSetCategory}
					currentCategory={currentCategory}
					title={e.title}
					key={e.title}
					type={e.type}
				/>
			))}
		</div>
	);
}
