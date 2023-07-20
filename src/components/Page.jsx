import styles from './SCSS/page.module.scss';

export default function Page(props) {
	const { pageNum, pageState, handlePageState } = props;
	return (
		<div
			className={`${styles.page} ${styles[pageNum]}`}
			data-page={pageState}
		>
			<div className={styles.front}>
				<div
					className={`${styles.page_corner} ${styles.front_corner_top}`}
					onClick={handlePageState}
				></div>
				<div
					className={`${styles.page_corner} ${styles.front_corner_bottom}`}
					onClick={handlePageState}
				></div>
				<p>front</p>
			</div>
			<div className={styles.back}>
				<div
					className={`${styles.page_corner} ${styles.back_corner_top}`}
					onClick={handlePageState}
				></div>
				<div
					className={`${styles.page_corner} ${styles.back_corner_bottom}`}
					onClick={handlePageState}
				></div>
				<p>back</p>
			</div>
		</div>
	);
}
