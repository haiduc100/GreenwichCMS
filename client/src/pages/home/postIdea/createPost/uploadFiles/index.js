import * as React from "react";
import { Button } from '@mui/material';
import ListFiles from './ListFiles';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadMultiFiles = () => {
    const uploadFiles = React.useRef();
    const [files, setFiles] = React.useState([]);

    const handelChangeFile = () => {
        setFiles(prev => {
            return [...prev, uploadFiles.current.value]
        })
    };

    const props = { files, setFiles };

    return (
        <div >
            <input
                ref={uploadFiles}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handelChangeFile}
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" sx={{ mt: 2 }}>
                    <UploadFileIcon />
                    <span>upload</span>
                </Button>
            </label>
            <ListFiles props={props} />
        </div>
    );
};

export default UploadMultiFiles;