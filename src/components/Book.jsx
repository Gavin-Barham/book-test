import styles from './book.module.scss';
import leather from '../assets/leather.jpeg';
import Cover from './Cover';
import BackCover from './BackCover';
import Page from './Page';

import { useState } from 'react';

export default function Book() {
	const [bookState, setBookState] = useState('neutral');
	const [pageState, setPageState] = useState('neutral');

	let handleStateMachine = () => {
		setBookState((prev) => {
			if (prev === 'closed' || prev === 'neutral') {
				return 'open';
			} else {
				return 'closed';
			}
		});
		setPageState((prev) => {
			if (
				(prev === 'neutral' && bookState === 'neutral') ||
				(prev === 'closed' && bookState === 'closed')
			) {
				return 'open';
			} else {
				return 'closed';
			}
		});
	};
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
		<>
			<div className={styles.book} data-book={bookState}>
				<Cover
					className={styles.cover}
					style={{ background: `url(${leather}) right top` }}
					bookState={bookState}
					handleBookState={handleStateMachine}
				/>
				<Page
					pageNum={'page1'}
					pageState={pageState}
					handlePageState={handlePageState}
				/>
				<Page pageNum={'page2'} />
				<BackCover
					style={{ background: `url(${leather}) right top` }}
				/>
			</div>
		</>
	);
}
