import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import { AppBar, Drawer } from '../../styled/AdminStyled'
import CreateAccount from './CreateAccount'
import ViewAllAccount from './ViewAllAccount'
import CreateDeadline from './CreateDeadline'
import LogoutIcon from '@mui/icons-material/Logout';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../contexts/AuthContext'
import { useEffect } from 'react'

import './index.css';

const AdminPage = ({ task }) => {
    const [open, setOpen] = React.useState(true);
    const { authState: { user, isAuthenticated }, logoutUser } = React.useContext(AuthContext);

    useEffect(() => {

    }, [user])
    const toggleDrawer = () => {
        setOpen(!open);
    };

    if (!user) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Admin Page
                    </Typography>
                    <div className="admin-control__logout">
                        <p>Wellcome <span className="admin-control__name">{user.lastName} {user.firstName}</span> </p>
                        <IconButton color="inherit" size="small" onClick={logoutUser}>
                            <LogoutIcon />
                            Logout
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
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
                                    : <ViewAllAccount />
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AdminPage;