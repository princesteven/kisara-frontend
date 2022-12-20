import styles from './v1-hooks.module.css';

/* eslint-disable-next-line */
export interface V1HooksProps {}

export function V1Hooks(props: V1HooksProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to V1Hooks!</h1>
        </div>
    );
}

export default V1Hooks;
