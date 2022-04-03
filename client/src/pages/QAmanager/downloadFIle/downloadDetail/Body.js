import React from 'react';
import Grid from '@mui/material/Grid';
import TableDownloadDetail from './TableDownloadDetail';

import '../../index.css'

const Body = () => {
    return (
        <div>
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }} spacing={3}>
                <Grid item xs={12} sx={{ mt: 9, textAlign: 'center' }}>
                    <h1>Đốt trường</h1>
                </Grid>
                <Grid item xs={12}>
                    <TableDownloadDetail />
                </Grid>
            </Grid>
        </div>
    );
};

export default Body;