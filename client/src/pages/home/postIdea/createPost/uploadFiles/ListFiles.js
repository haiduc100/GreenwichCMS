import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const ListFiles = ({ props }) => {
    const { files, setFiles } = props;

    const handelDeleteFile = index => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    }

    return (
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
                    <ListItemText primary={`${file}`} />
                </ListItem>
            ))}
        </List>
    );
};

export default ListFiles;