import React from 'react';
import GoodIdea from '../home/GoodIdea'
import Idea from '../home/idea'
import Grid from '@mui/material/Grid'

const Body = () => {
    return (
        <Grid container spacing={2} sx={{ width: '60%', margin: '0 auto' }}>
            <Grid container sx={{ marginTop: '90px' }} spacing={2}>
                <Grid item xs={3}>
                    <GoodIdea />
                </Grid>
                <Grid item xs={3}>
                    <GoodIdea />
                </Grid>
                <Grid item xs={3}>
                    <GoodIdea />
                </Grid>
                <Grid item xs={3}>
                    <GoodIdea />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={12} >
                    <Idea />
                </Grid>
                <Grid item xs={12} >
                    <Idea />
                </Grid>
                <Grid item xs={12} >
                    <Idea />
                </Grid>
                <Grid item xs={12} >
                    <Idea />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Body;