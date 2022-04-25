import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { mainListItems, secondaryListItems } from './ListItems';

import './index.css'

const ListItemsMobile = ({ openMenuMobile }) => {
    return (
        <Box className="list-items-mobile" sx={{ display: { xs: openMenuMobile ? 'block' : 'none', sm: 'none' } }}>
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
            </List>
        </Box>
    );
};

export default ListItemsMobile;