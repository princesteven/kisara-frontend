import "antd/dist/antd.css";
import "./notification-popover.css";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";
import { NotificationPopoverProps } from "./notification-popover-types";

/**
 * @function
 * @name NotificationPopover
 * @description A Popover component for displaying portals
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @param notifications array of notifications
 * @returns Notification Popover
 */

const NotificationPopover: React.FC<NotificationPopoverProps> = ({ notifications, defaultMessage }) => {
  return (
    <div className="notifications-container">
      {
        <ul>
          {
            notifications.map(({ title, path, action }, index) => {
              return (
                <li
                  key={index}
                  style={{
                    marginTop: notifications.length === 1 ? 0 : "",
                    marginBottom: notifications.length === 1 ? 0 : ""
                  }}>
                  <CaretRightFilled />
                  {
                    path
                      ? <Link to={path}>
                        {
                          `${title.substr(0, 37)} ${(title.length > 37) ? " ..." : ''}`
                        }
                      </Link>
                      : <div>
                        {
                          `${title.substr(0, 37)} ${(title.length > 37) ? " ..." : ''}`
                        }
                      </div>
                  }
                </li>
              );
            })
          }
        </ul>
      }
      {!notifications.length && <span>{defaultMessage}</span>}

    </div>
  );
};

export default NotificationPopover;
