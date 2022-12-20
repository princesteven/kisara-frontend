import 'antd/dist/antd.css';
import './portals-popover.css';
import {Col, Row} from "antd";
import { PortalProps, PortalsPopoverProps } from "./portals-popover-types";

/**
 * @function
 * @name PortalsPopover
 * @description A Popover component for displaying portals
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @param portals array of portals with each portal having icon, title and url
 * @returns Portals Popover
 */

const Portal: React.FC<PortalProps> = ({title, icon, path}) => {
  return (
    <Col span={8}>
      {
        path
          ? <a href={path} target='_blank'>
            <div className='portal'>
              <div className='content px-2 text-center'>
                {icon && <div className='logo' style={{ backgroundImage: `url(${icon})` }} />}
                {title}
              </div>
            </div>
          </a>
          : <div className='portal'>
            <div className='content px-2 text-center'>
              {icon && <div className='logo' style={{ backgroundImage: `url(${icon})` }} />}
              {title}
            </div>
          </div>
      }
    </Col>
  )
}

export const PortalsPopover: React.FC<PortalsPopoverProps> = ({ userPortals }) => {
  const portals = userPortals.map(portal => {
    return {
      title: portal.name,
      icon: portal.icon,
      path: portal.portalUrl,
    }
  })

  return (
    <Row
      gutter={[8, 8]}
      className="portal-container"
    >
      { portals.map((portal, k) => <Portal key={k} {...portal }/>) }
    </Row>
  );
}

export default PortalsPopover;
