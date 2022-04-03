import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Vote from './Vote'
import { Link } from 'react-router-dom';

import '../Home.css'

const Idea = () => {
    return (
        <Box className='post'>
            <Box sx={{ display: 'flex', }}>
                <Box fontSize={{ fontWeight: 'bold' }}>Hoàng Ka</Box>
                <Box>. Posted 11 hours ago</Box>
            </Box>
            <Box>
                Title
            </Box>
            <Box sx={{ textAlign: 'justify' }}>
                Em áudio, Mamãe Falei diz que ucranianas “são fáceis, pois são pobres”. Nas mensagens parlamentar afirma que as refugiadas “são fáceis porque são pobres”. Ele diz também que a fila da baladas brasileiras “não chega aos pés da fila de refugiados aqui”.
            </Box>
            <Box>
                <Button>
                    <FileDownloadIcon />
                    document 1
                </Button>
                <Button>
                    <FileDownloadIcon />
                    document 2
                </Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box className="control" >
                    <IconButton variant="secondary" as={Link} to='/ideaDetail' sx={{ textDecoration: 'none' }}>
                        <div className="home-idea__comment">
                            <div><ChatBubbleOutlineIcon fontSize='small' /></div>
                            <span>comments</span>
                        </div>
                    </IconButton>
                </Box>
                <Vote />
            </Box>
        </Box >
    );
};

export default Idea;