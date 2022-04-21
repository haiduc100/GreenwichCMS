import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TableDownload from './TableDownload'

const Body = () => {
    return (
        <div>
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }} spacing={3}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TableDownload />
                </Grid>
            </Grid>
        </div>
    );
};

export default Body;