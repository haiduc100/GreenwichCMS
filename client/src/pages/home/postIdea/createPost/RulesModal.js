import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import '../PostIdea.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const RulesModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="idea-form__post">
                <Button variant="contained" onClick={handleOpen}>Post</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Terms and Conditions
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                        Before posting material, by clicking "accept", you agree to the terms and conditions on our
                        website as described in
                        "<a href="http://google.com" target="_blank" rel="noreferrer">Our Terms and Conditions</a>"
                        <p>Do you agree to the terms before posting the material?</p>
                    </Typography>
                    <div className="modal-button">
                        <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={handleOpen}>Agree</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default RulesModal;