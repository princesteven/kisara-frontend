import {PortalProps} from "./portal-types";

/**
 * @function
 * @name Portal
 * @description Portals
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @returns {object} Portals
 */
const Portal: React.FC<PortalProps> = ({title, icon, path}) => {
  return (
    <a href={path} target={'_blank'}>
      <div className="portal">
        <div className="content">
          <div
            className="icon"
            style={{backgroundImage: `url(${icon})`}}
          />
          {title}
        </div>
      </div>
    </a>
  );
}

export default Portal;
