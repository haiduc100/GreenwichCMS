import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TableDownload from './TableDownload'

const Body = () => {
    return (
        <div>
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }} spacing={3}>
                <Grid xs={12}>
                    <div className="manager-topic__add-topic">
                        <Button variant="contained" size="large">
                            <FileDownloadOutlinedIcon />
                            <span>Download File Zip</span>
                        </Button>
                    </div>
                </Grid>
                <Grid container>
                    <TableDownload />
                </Grid>
            </Grid>
        </div>
    );
};

export default Body;