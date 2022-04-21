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
    const { topicState: { topics }, createNewTopic } = React.useContext(TopicContext)
    const [title, setTitle] = React.useState('')

    const handelCreateTopic = async (e) => {
        e.preventDefault();

        const checkTopic = topics.some((topic) => {
            return title === topic.title
        })

        if (checkTopic) {
            window.alert('this topic is already exists!')
            setTitle('')
        }
        else {
            const createTopic = await createNewTopic({ title: title });
            if (createTopic.status === 200) {
                setTitle('');
                handleClose();
                window.alert('create new topic successfully!')
            }
        }
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
                    <form action="" onSubmit={handelCreateTopic}>
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="Topic"
                            name="title"
                            autoComplete="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            create
                        </Button>
                    </form>
                    <div style={{ textAlign: 'right' }}>
                        <Button variant="outlined" onClick={handleClose} >Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalCreateTopic;