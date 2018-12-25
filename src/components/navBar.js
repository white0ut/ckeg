import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Avatar style={{ marginRight: 10, height: 50, width: 50 }} src={require("../rescue-swimmer.png")} />
                <Typography variant="h5" color="inherit">
                  Rob's Beer on Tap
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;