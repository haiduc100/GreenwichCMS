import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Box from '@mui/material/Box'
import { useState } from 'react'
import { IconButton } from '@mui/material';
import { ReactionContext } from '../../contexts/ReactionContext'
import { AuthContext } from '../../contexts/AuthContext'
import { IdeaContext } from '../../contexts/IdeaContext'
// import axios from 'axios';

import './Home.css'
const Vote = ({ data }) => {
    const { ideaData, reaction } = data
    const [like, setLike] = useState(ideaData.likeCount)
    const [dislike, setDislike] = useState(ideaData.disLikeCount)
    const [likeActive, setLikeActive] = useState(reaction !== undefined ? reaction.context ? true : false : false)
    const [dislikeActive, setDislikeActive] = useState(reaction !== undefined ? reaction.context ? false : true : false)
    const { PostReaction, deleteReaction } = React.useContext(ReactionContext)
    const { authState: { user } } = React.useContext(AuthContext)
    const { ideaState: { idea } } = React.useContext(IdeaContext)

    const reactionDelete = {
        userId: user.userId,
        ideaId: ideaData.id,
    }

    const handelLike = async () => {
        if (likeActive) {
            setLikeActive(false)
            setLike(like - 1)
            await deleteReaction(reactionDelete)
        }
        else {
            if (dislikeActive) {
                setLikeActive(true)
                setDislikeActive(false)
                setLike(like + 1)
                setDislike(dislike - 1)
                await deleteReaction(reactionDelete)
                await PostReaction({
                    userId: user.userId,
                    ideaId: idea.id,
                    context: true
                })
            }
            else {
                setLikeActive(true)
                setLike(like + 1)
                await PostReaction({
                    userId: user.userId,
                    ideaId: idea.id,
                    context: true
                })
            }
        }
    }

    const handelDislike = async () => {
        if (dislikeActive) {
            setDislikeActive(false)
            setDislike(dislike - 1)
            await deleteReaction(reactionDelete)
        }
        else {
            if (likeActive) {
                setDislikeActive(true)
                setLikeActive(false)
                setDislike(dislike + 1)
                setLike(like - 1)
                await deleteReaction(reactionDelete)
                await PostReaction({
                    userId: user.userId,
                    ideaId: idea.id,
                    context: false
                })
            }
            else {
                setDislikeActive(true)
                setDislike(dislike + 1)
                PostReaction({
                    userId: user.userId,
                    ideaId: idea.id,
                    context: false
                })
            }
        }
    }

    return (
        <div>
            <Box className="control">
                <IconButton onClick={handelLike}>
                    {likeActive
                        ? <ThumbUpIcon fontSize='small' color='primary' />
                        : <ThumbUpOutlinedIcon fontSize='small' />
                    }
                </IconButton >
                <div>
                    {like}
                </div>
                <IconButton onClick={handelDislike}>
                    {dislikeActive
                        ? <ThumbDownIcon fontSize='small' color='primary' />
                        : <ThumbDownOutlinedIcon fontSize='small' />
                    }
                </IconButton >
                <div>
                    {dislike}
                </div>
            </Box>
        </div>
    );
};

export default Vote;