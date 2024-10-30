import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

type SingleCategoryProps = {
	title: string;
	path: string;
};

export default function SingleCategory({ title, path }: SingleCategoryProps) {
	return (
		<Link to={path} className={`${styles.single_category} yellow-bg`}>
			{title}
		</Link>
	);
}
