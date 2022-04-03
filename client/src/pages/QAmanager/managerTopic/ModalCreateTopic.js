import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { TopicContext } from '../../../contexts/TopicContext';

import '../index.css'

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


const ModalCreateTopic = ({ props }) => {
    const { open, handleClose } = props;
    const { createNewTopic } = React.useContext(TopicContext)
    const [formTopic, setFormTopic] = React.useState({
        title: ''
    })
    const { title } = formTopic;

    const handelOnchangeTopic = e => {
        setFormTopic({ ...formTopic, [e.target.name]: e.target.value });
    }

    const handelCreateTopic = async (e) => {
        e.preventDefault();
        await createNewTopic(formTopic)
        handleClose();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="modal-create__title">Create new Topic</h1>
                    <form action="" >
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="Topic"
                            name="title"
                            autoComplete="title"
                            value={title}
                            onChange={handelOnchangeTopic}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onSubmit={handelCreateTopic}
                        >
                            create
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalCreateTopic;