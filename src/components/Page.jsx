import styles from './book.module.scss';

export default function Page(props) {
	const { pageNum, pageState, setPageState } = props;
	const handlePageState = () => {
		setPageState((prev) => {
			if (prev === 'closed') {
				return 'open';
			} else {
				return 'closed';
			}
		});
	};
	return (
		<div
			className={`${styles.page} ${styles[pageNum]}`}
			data-page={pageState}
			onClick={handlePageState}
		>
			<p>hello</p>
		</div>
	);
}
