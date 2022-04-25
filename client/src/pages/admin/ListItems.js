import * as React from 'react';
import { NavLink } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const mainListItems = (

    <React.Fragment>
        <ListItemButton as={NavLink} activeclassname="active" to='/admin/create'>
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Create new account" style={{ color: 'rgb(61 55 47)' }} />
        </ListItemButton>
        <ListItemButton as={NavLink} activeclassname="active" to='/admin/viewAll'>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="View all accounts" style={{ color: 'rgb(61 55 47)' }} />
        </ListItemButton>
        <ListItemButton as={NavLink} activeclassname="active" to='/admin/deadline'>
            <ListItemIcon>
                <AccessTimeFilledIcon />
            </ListItemIcon>
            <ListItemText primary="Topic and Deadline" style={{ color: 'rgb(61 55 47)' }} />
        </ListItemButton>
        <ListItemButton as={NavLink} activeclassname="active" to='/admin/viewDeadline'>
            <ListItemIcon>
                <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Deadline manager" style={{ color: 'rgb(61 55 47)' }} />
        </ListItemButton>
        <ListItemButton as={NavLink} activeclassname="active" to='/admin/setting'>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Change password" style={{ color: 'rgb(61 55 47)' }} />
        </ListItemButton>
    </React.Fragment>
);

