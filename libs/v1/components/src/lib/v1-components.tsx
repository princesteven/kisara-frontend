import styles from './v1-components.module.css';

/* eslint-disable-next-line */
export interface V1ComponentsProps {}

export function V1Components(props: V1ComponentsProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to V1Components!</h1>
        </div>
    );
}

export default V1Components;
