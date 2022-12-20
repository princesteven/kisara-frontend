import { Tag } from "antd";

/**
 * @function
 * @name NotAvailableTag
 * @description Component to be shown whenever data is not available
 * @version 2.0.0
 * @since 2.0.0
 * @author Prince Malipula
 */
const NotAvailableTag = () => {
    return (
        <Tag color={'magenta'}>
            N/A
        </Tag>
    );
}

export default NotAvailableTag;
