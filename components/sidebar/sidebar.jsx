import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'> Metro Eye</span>
      </div>
      <hr />
      <div className='center'>

        <ul>
          
          <li><DashboardIcon />
            <span>
              Dashboard</span></li>
              <p className='title'>MAIN</p>
          <li>
            <GroupIcon />
            <span>
              Records</span>
              </li>
          <li>
            <GroupIcon />
            <span>
              Search Case</span></li>
          <li>
            <GroupIcon />
            <span>
              Open Case</span></li>
          <li>
            <PersonSearchIcon />
            <span>
              Search Docket</span></li>
              <p className='title'>MAIN</p>
          <li>
            <AssessmentIcon />
            <span>
              Reports</span></li>

          <li><LocationOnIcon />
            <span>
              Crime Hotspot Areas</span></li>
          <li>
            <ReceiptLongIcon />
            <span>
              criminal record</span></li>

              <li>
            <LogoutIcon/>
            <span>
            Log out</span></li>
        </ul>
      </div>

      <div className='bottom'> LogoutIcon</div>
    </div>

  )
}

export default sidebar