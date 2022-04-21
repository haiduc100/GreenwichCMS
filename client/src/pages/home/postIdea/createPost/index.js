import * as React from 'react';
import Switch from '@mui/material/Switch';
import { TopicContext } from '../../../../contexts/TopicContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { IdeaContext } from '../../../../contexts/IdeaContext';
import { EditorState } from "draft-js";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { TextareaAutosize } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

const CreatePost = () => {
    const [files, setFiles] = React.useState([]);
    const [content, setContent] = React.useState('')
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { createNewIdea } = React.useContext(IdeaContext);
    const { topicState: { topic }, getAllTopic } = React.useContext(TopicContext);
    const { authState: { user } } = React.useContext(AuthContext);

    React.useEffect(() => getAllTopic(), []);

    const handelChangeFile = (e) => {
        const file = e.target.files[0];
        setFiles(prev => ([...prev, file]))
    };

    const handelDeleteFile = index => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    }

    const handlePost = () => {
        const today = new Date();
        const someday = new Date();
        const year = topic.firstClosureDate.slice(0, 4)
        const month = topic.firstClosureDate.slice(5, 7)
        const day = topic.firstClosureDate.slice(8, 10)
        someday.setFullYear(year, month, day);
        if (content === "") {
            window.alert('Please enter content for idea!')
        }
        else if (today > someday) {
            window.alert('You were late for the deadline.!')
        }
        else {
            handleOpen()
        }
    }

    const handelSubmitIdeaForm = async (e) => {
        e.preventDefault()
        let formData = new FormData()

        files.map(file => {
            formData.append("files", file)
        })

        formData.append("Author", user.userId)
        formData.append("Title", 'ok')
        formData.append("Slug", 'ok')
        formData.append("Content", content)
        formData.append("Privacy", checked)
        formData.append("IdeaCategoryName", topic.title)

        await createNewIdea(formData)
        handleClose()
        window.alert("Create idea successfully!")
    }
    return (
        <>
            <h1 className='idea-form__title' >Create new Idea</h1>
            <div style={{ textAlign: 'center' }}>
                <h4>Topic:
                    <span style={{ fontWeight: '400', color: '#424242' }}>
                        {!topic
                            ? "Topic"
                            : topic.title
                        }
                    </span>
                </h4>
            </div>
            <div>
                <span>Privacy</span>
                <Switch
                    edge="end"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                />
            </div>
            <div style={{ minHeight: '200px' }}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="enter your idea..."
                    style={{ width: '100%' }}
                    minRows={14}
                    name="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <div >
                <input
                    name="files"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={e => handelChangeFile(e)}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span" sx={{ mt: 2 }}>
                        <UploadFileIcon />
                        <span>upload</span>
                    </Button>
                </label>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {files.map((file, index) => (
                        <ListItem
                            key={index}
                            disableGutters
                            secondaryAction={
                                <IconButton onClick={() => handelDeleteFile(index)} >
                                    <CloseIcon />
                                </IconButton>
                            }
                            sx={{ borderBottom: '1px solid #cac3c3' }}
                        >
                            <ListItemText primary={`${file.name}`} />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div>
                <div className="idea-form__post">
                    <Button variant="contained" onClick={handlePost}>Post</Button>
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
                            <Button variant="contained" onClick={handelSubmitIdeaForm}>Agree</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default CreatePost;