import {Spin} from "antd";

/**
 * @function
 * @name messages
 * @description component for displaying messages
 * @version 2.0.1
 * @since 2.0.1
 * @returns message component
 */
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
