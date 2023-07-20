import styles from './SCSS/cover.module.scss';

export default function BackCover(props) {
	const { style } = props;
	return <div className={styles.back_cover} style={style}></div>;
}
