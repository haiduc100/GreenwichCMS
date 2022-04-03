import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Box from '@mui/material/Box'
import { useState } from 'react'
import { IconButton } from '@mui/material';

import '../Home.css'
const Vote = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)

    const handelLike = () => {
        if (likeActive) {
            setLikeActive(false)
            setLike(like - 1)
        }
        else {
            setLikeActive(true)
            setLike(like + 1)
            if (dislikeActive) {
                setDislikeActive(false)
                setLike(like + 1)
                setDislike(dislike - 1)
            }
        }
    }

    const handelDislike = () => {
        console.log('dashjdas');
        if (dislikeActive) {
            setDislikeActive(false)
            setDislike(dislike - 1)
        }
        else {
            setDislikeActive(true)
            setDislike(dislike + 1)
            if (likeActive) {
                setLikeActive(false)
                setDislike(dislike + 1)
                setLike(like - 1)
            }
        }
    }

    return (
        <div>
            <Box className="control">
                <IconButton onClick={handelLike}>
                    {likeActive
                        ? <ThumbUpIcon fontSize='small' />
                        : <ThumbUpOutlinedIcon fontSize='small' />
                    }
                </IconButton >
                <div>
                    {like - dislike} vote
                </div>
                <IconButton onClick={handelDislike}>
                    {dislikeActive
                        ? <ThumbDownIcon fontSize='small' />
                        : <ThumbDownOutlinedIcon fontSize='small' />
                    }
                </IconButton >
            </Box>
        </div>
    );
};

export default Vote;