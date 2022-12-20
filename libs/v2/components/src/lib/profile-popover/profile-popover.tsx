import 'antd/dist/antd.css';
import './profile-popover.css';
import {Avatar} from "antd";
import Button from "../button/button";
import {userIdentifier} from "@react-frontends/v2/helpers";
import {ProfilePopoverProps} from "./profile-popover-types";

/**
 * @function
 * @name ProfilePopover
 * @description A Popover component for displaying user profile detals
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @param name User's full name
 * @param username User's username or domain
 * @param onClick Reference to a click event
 * @returns Profile Popover
 */

const ProfilePopOver: React.FC<ProfilePopoverProps> = ({ user, onClick }) => {
  return (
    <div className="profile-popover">
      <div className="profile-photo-container-large">
        <div className="profile-photo-large-offset">
          <Avatar
            className='profile-picture'
            style={{
              backgroundColor: '#B24606',
              verticalAlign: 'middle',
            }}
            gap={0}
          >
            {userIdentifier(user.name)}
          </Avatar>
        </div>
      </div>
      <h3>{ user.name }</h3>
      <div className="space-y-3">
        <div className={'text-center'}>{ user.email }</div>
        <div className={'text-center'}>{ user.businessUnitName }</div>
      </div>
      <Button
        shape={"round"}
        title={"Back Home"}
        onClick={onClick}
        style={{
          marginTop: 20,
          paddingLeft: 30,
          paddingRight: 30
        }}
      />
    </div>
  )
}

export default ProfilePopOver;
