import styles from './Categories.module.css';

type SingleCategoryProps = {
	title: string;
	currentCategory: string;
	type: string;
	handleSetCategory: (category: string) => void;
};

export default function SingleCategory({
	title,
	currentCategory,
	handleSetCategory,
	type,
}: SingleCategoryProps) {
	return (
		<button
			onClick={() => handleSetCategory(type)}
			className={`${styles.single_category} ${
				currentCategory === type ? 'underline' : null
			} yellow-bg`}
		>
			{title}
		</button>
	);
}
