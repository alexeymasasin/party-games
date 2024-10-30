import styles from './Option.module.css';

export type OptionProps = {
	text: string;
	icon: JSX.Element;
	onClick: () => void;
};

export default function Option({ text, onClick, icon }: OptionProps) {
	return (
		<button onClick={onClick} className={`${styles.wrapper} purple-bg`}>
			<span className={styles.logo}>{icon}</span>
			{text}
		</button>
	);
}
