import styles from './book.module.scss';
import leather from '../assets/leather.jpeg';
import Cover from './Cover';
import BackCover from './BackCover';
import Page from './Page';

import { useState } from 'react';

export default function Book() {
	const [bookState, setBookState] = useState('closed');
	const [pageState, setPageState] = useState('closed');

	let handleStateMachine = () => {
		setBookState((prev) => {
			if (prev === 'closed') {
				return 'open';
			} else {
				return 'closed';
			}
		});
		setPageState((prev) => {
			if (prev === 'closed' && bookState === 'closed') {
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
					setPageState={setPageState}
				/>
				<Page pageNum={'page2'} />
				<BackCover
					style={{ background: `url(${leather}) right top` }}
				/>
			</div>
		</>
	);
}
