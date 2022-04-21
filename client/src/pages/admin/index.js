import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import { AppBar, Drawer } from '../../styled/AdminStyled';
import CreateAccount from './CreateAccount';
import ViewAllAccount from './ViewAllAccount';
import CreateDeadline from './CreateDeadline';
import ChangePassword from './ChangePassword';
import LogoutIcon from '@mui/icons-material/Logout';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItemsMobile from './ListItemsMobile';

import './index.css';

const AdminPage = ({ task }) => {
    const [open, setOpen] = React.useState(true);
    const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
    const { authState: { user }, logoutUser } = React.useContext(AuthContext);

    useEffect(() => {

    }, [user])
    const toggleDrawer = () => {
        setOpen(!open);
    };

    if (!user) {
        return (
            <div className="admin-progress">
                <CircularProgress />
            </div>
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} sx={{ width: '100%' }}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        sx={{
                            color: '#fff',
                            display: { xs: 'block', sm: 'none' }
                        }}
                        onClick={() => {
                            if (openMenuMobile) {
                                setOpenMenuMobile(false)
                            }
                            else setOpenMenuMobile(true)
                        }}
                    >
                        <MenuIcon />
                    </IconButton >
                    <ListItemsMobile openMenuMobile={openMenuMobile} />

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                            display: { xs: 'none', sm: 'block' }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <IconButton as={Link} to='/admin' sx={{
                                textDecoration: 'none',
                                color: '#fff',
                            }}>
                                Admin Page
                            </IconButton>
                        </div>
                        <div className="admin-control__logout">
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Wellcome <span className="admin-control__name">{user.firstName} {user.lastName}</span> </Box>
                            <IconButton color="inherit" size="small" onClick={logoutUser} as={Link} to='/login' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <LogoutIcon />
                                Logout
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 5, mb: 2 }} >
                    <Grid container >
                        {task === 'create'
                            ? <CreateAccount />
                            : task === 'viewAll'
                                ? <ViewAllAccount />
                                : task === 'deadline'
                                    ? <CreateDeadline />
                                    : task === 'changepassword'
                                        ? <ChangePassword />
                                        : <div className="admin-page__background">
                                            <img src="https://visco.edu.vn/wp-content/uploads/2020/12/maxresdefault-1.jpg" alt="" />
                                        </div>
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AdminPage;