import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'

import '../index.css';

const UserSetting = ({ props }) => {
    const { logoutUser, setShowSetting } = props;
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <div className="account-setting">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} onHide={() => setShowSetting(false)}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <DarkModeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="Dark mode" />
                            <Switch
                                edge="end"
                                onChange={handleToggle('bluetooth')}
                                checked={checked.indexOf('bluetooth') !== -1}
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-bluetooth',
                                }}
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={logoutUser} as={Link} to='/login'>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </div>
    );
};

export default UserSetting;