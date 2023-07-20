import styles from './book.module.scss';

export default function Page(props) {
	const { pageNum, pageState, handlePageState } = props;
	return (
		<div
			className={`${styles.page} ${styles[pageNum]}`}
			data-page={pageState}
			onClick={handlePageState}
		>
			<div className={styles.front}>
				<p>hello</p>
			</div>
			<div className={styles.back}>
				<p>hello</p>
			</div>
		</div>
	);
}
