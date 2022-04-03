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
                <Grid xs={12}>
                    <div className="manager-topic__add-topic">
                        <Button variant="contained" size="large" onClick={handleOpen}>
                            <AddCircleOutlineOutlinedIcon />
                            <span>Add Topic</span>
                        </Button>
                    </div>
                </Grid>
                <ModalCreateTopic props={props} />
                <Grid container>
                    <Grid item xs={3} >
                        <div className="manager-topic">
                            <LisTopic />
                        </div>
                    </Grid>
                    <Grid item xs={9} >
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