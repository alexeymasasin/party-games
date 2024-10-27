import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<a
				className={styles.link}
				href="https://github.com/alexeymasasin/"
				target="_blank"
			>
				&copy; alexeymasasin
			</a>
			<Link className={styles.link} to={'/'}>
				Домой
			</Link>
		</footer>
	);
}
