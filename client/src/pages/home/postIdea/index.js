import React from 'react';
import Grid from '@mui/material/Grid'
import Topic from '../../../components/home/Topic';
import CreatePost from './createPost'

import './PostIdea.css'

const PostIdea = () => {
    return (
        <>
            <Grid container sx={{ width: '70%', margin: ' 0 auto 20px' }} spacing={2}>
                <Grid item md={8} xs={12} sx={{ marginTop: '0px' }} >
                    <Grid className='idea-form' sx={{ borderRadius: '3px' }} >
                        <CreatePost />
                    </Grid>
                </Grid>
                <Grid item md={4} sx={{ marginTop: '0px' }}>
                    <Topic />
                </Grid>
            </Grid>
        </>
    );
};

export default PostIdea;