import styles from './loading.module.css';
import { Spin } from 'antd';

const Loading = () => {
    return (
        <div className="table absolute top-0 left-0 h-full w-full">
            <div className="table-cell align-middle">
                <div className="grid place-content-center font-semibold w-full">
                    <Spin spinning={true} />
                </div>
            </div>
        </div>
    );
}

export default Loading;
