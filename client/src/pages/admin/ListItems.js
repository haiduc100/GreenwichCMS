import * as React from 'react';
import { NavLink } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AssignmentIcon from '@mui/icons-material/Assignment';

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
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);