import React from 'react'
import "./header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Forum from '@material-ui/icons/Forum';
function Header() {
    return (
       <div className='header'>
<IconButton>
<PersonIcon fontSize="large" className="header_icon"/>
</IconButton>
<img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="" />
    <IconButton><Forum fontSize="large" className="header_icon"/></IconButton>
       </div>


    )
}

export default Header
