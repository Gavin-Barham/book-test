import styles from './SCSS/cover.module.scss';

export default function Cover(props) {
	const { bookState, handleBookState, style } = props;
	return (
		<div
			className={styles.cover}
			style={style}
			data-cover={bookState}
			onClick={handleBookState}
		></div>
	);
}
