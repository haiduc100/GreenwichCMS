import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../../assets/images/logo1.png'
import Avatar from '@mui/material/Avatar';
import UserSetting from './UserSetting'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

import '../index.css'

const Header = () => {
    const [search, setSearch] = React.useState('');
    const [showSetting, setShowSetting] = React.useState(false)
    const { authState: { user }, logoutUser } = React.useContext(AuthContext)
    const props = { logoutUser, setShowSetting }

    const handelShowSetting = () => {
        if (!showSetting) {
            setShowSetting(true)
        }
        else {
            setShowSetting(false)
        }
    }

    if (!user) {
        return (
            <div className="admin-progress">
                <CircularProgress />
            </div>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#333', zIndex: 1 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={1} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ width: { lg: '280px', xs: '200px' } }}
                            as={Link}
                            to='/qa-manager'
                        >
                            <img src={Logo} alt="" width="100%" />
                        </IconButton>
                    </Grid>

                    <Grid item xs={6} sx={{ display: { md: 'flex', xs: 'none' }, alignItems: 'center', ml: 15 }}>
                        <input
                            className="search-input"
                            placeholder="Search ideas..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button >
                            <SearchIcon sx={{ fontSize: 35, color: '#0c0f66' }} />
                        </Button>
                    </Grid>
                    <Grid item md={3} xs={5} >
                        <div className="side-bar__info-name">
                            <Avatar
                                src="https://th.bing.com/th/id/R.03e726787c9f981a4954f521a80424af?rik=Ceuu5CZ8AH5Msw&riu=http%3a%2f%2fcreativeartsworkshop.org%2fwp-content%2fuploads%2f2020%2f02%2fblank-profile-picture-973460_960_720-300x300-1-300x300.png&ehk=J%2bDw294HSHRvhlyrl6fvIPVYRvi7ZoffP0BxPNVmtgw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                                sx={{ width: 30, height: 30, mr: 0.5 }}
                            />
                            <div>{user.firstName} {user.lastName}</div>
                            <IconButton sx={{ mt: 0.5 }} onClick={handelShowSetting}>
                                <KeyboardArrowDownOutlinedIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
            {showSetting
                ? <UserSetting props={props} />
                : null
            }

        </Box>
    );
};

export default Header;
