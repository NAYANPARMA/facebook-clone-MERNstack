import React from 'react'
import './Sidebar.css'
import LoacalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExapandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <SidebarRow
          src="https://i.pinimg.com/474x/12/a0/f4/12a0f4398e5f7609c93327aedd7b8a0e.jpg"
          title="Warlock"
        />
        <SidebarRow
          Icon={LoacalHospitalIcon}
          title="COVID19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friedns" />
        <SidebarRow Icon={ChatIcon} title="Meassenger" />
        <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExapandMoreOutlined} title="More" />
      </div>
    );
}

export default Sidebar
