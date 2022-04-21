import { useState } from 'react';
import Grid from '@mui/material/Grid';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LisTopic from './listTopic';
import ListIdea from './listIdea';
import Button from '@mui/material/Button';
import ModalCreateTopic from './ModalCreateTopic'

import '../index.css';

const Body = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const props = { open, handleClose }
    return (
        <div>
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }} spacing={3}>
                <Grid xs={12} sx={{ textAlign: { md: 'left', xs: 'center' }, margin: '20px 0' }}>
                    <Button variant="contained" size="large" onClick={handleOpen}>
                        <AddCircleOutlineOutlinedIcon />
                        <span>Add Topic</span>
                    </Button>
                </Grid>
                <ModalCreateTopic props={props} />
                <Grid container>
                    <Grid item md={3} xs={10} sx={{ margin: '0 auto 20px' }}>
                        <div className="manager-topic">
                            <LisTopic />
                        </div>
                    </Grid>
                    <Grid item md={9} xs={12} sx={{ mb: 2 }}>
                        <div className="manager-idea">
                            <ListIdea />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Body;