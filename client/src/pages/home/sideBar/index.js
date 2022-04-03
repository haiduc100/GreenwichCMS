import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Logo from '../../../assets/images/logo1.png'
import Avatar from '@mui/material/Avatar';
import UserSetting from './UserSetting'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import '../Home.css'

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
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#333', position: 'fixed', zIndex: 1 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={1} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ width: '280px' }}
                            as={Link}
                            to='/home'
                        >
                            <img src={Logo} alt="" width="100%" />
                        </IconButton>
                    </Grid>

                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', ml: 15 }}>
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
                    <Grid item xs={3} >
                        <div className="side-bar__info">
                            <div>
                                <IconButton color="inherit" sx={{ ml: 10, mt: 1 }}>
                                    <Badge badgeContent={4} color="primary">
                                        <NotificationsOutlinedIcon sx={{ color: '#0c0f66' }} />
                                    </Badge>
                                </IconButton>
                            </div>
                            <div className="side-bar__info-name">
                                <Avatar
                                    src="https://www.hashatit.com/images/uploads/users/44840/profile_picture/xinh.jpg"
                                    sx={{ width: 30, height: 30, mr: 0.5 }}
                                />
                                <div>{user.firstName} {user.lastName}</div>
                                <IconButton sx={{ mt: 0.5 }} onClick={handelShowSetting}>
                                    <KeyboardArrowDownOutlinedIcon />
                                </IconButton>
                            </div>
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
