import React from 'react';
import Grid from '@mui/material/Grid'
import GoodIdea from './GoodIdea'
import Topic from '../../components/home/Topic'
import Idea from './idea'

const Body = () => {
    return (
        <Grid container sx={{ width: '60%', margin: '0 auto 10px' }}>
            <Grid container spacing={2} sx={{ mt: '90px', mb: '10px' }}>
                <Grid item md={3} xs={12}>
                    <GoodIdea />
                </Grid>
                <Grid item md={3} xs={0}>
                    <GoodIdea />
                </Grid>
                <Grid item md={3} xs={0}>
                    <GoodIdea />
                </Grid>
                <Grid item md={3} xs={0}>
                    <GoodIdea />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} container spacing={2}>
                    <Grid item>
                        <Idea />
                    </Grid>
                    <Grid item>
                        <Idea />
                    </Grid>
                    <Grid item>
                        <Idea />
                    </Grid>
                    <Grid item>
                        <Idea />
                    </Grid>
                    <Grid item>
                        <Idea />
                    </Grid>
                </Grid>
                <Grid item md={4} xs={false}>
                    <Topic />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Body;