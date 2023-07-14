import styles from './book.module.scss';

export default function Cover(props) {
	const { bookState, handleBookState } = props;
	return (
		<div
			className={styles.cover}
			data-cover={bookState}
			onClick={handleBookState}
		></div>
	);
}
