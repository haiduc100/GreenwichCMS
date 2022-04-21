import React from 'react';
import Grid from '@mui/material/Grid';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Vote from '../Vote';
import Comment from '../../QAmanager/ideaDetail/container/Comment';
import Avatar from '@mui/material/Avatar';
import { IdeaContext } from '../../../contexts/IdeaContext';
import { ReactionContext } from '../../../contexts/ReactionContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { UserContext } from '../../../contexts/UserContext';
import { CommentContext } from '../../../contexts/CommentContext';
import { saveAs } from "file-saver";

import './IdeaDetail.css'

const IdeaDetail = () => {
    const { ideaState: { idea }, downloadFile } = React.useContext(IdeaContext)
    const { reactionState: { reactions }, getReactionByUser } = React.useContext(ReactionContext)
    const { authState: { user } } = React.useContext(AuthContext)
    const { userState, searchUser, getAllUsers } = React.useContext(UserContext)
    const { commentState: { comments }, getCommentByIdea } = React.useContext(CommentContext)

    React.useEffect(() => { getAllUsers() }, [])
    React.useEffect(() => { getReactionByUser(user.userId) }, [])
    React.useEffect(() => { searchUser(idea.author) }, [])
    React.useEffect(() => { getCommentByIdea(idea.id) }, [])

    let reaction = reactions.find(reaction => {
        return reaction.ideaId === idea.id
    })
    const dataVote = { reaction, ideaData: idea }
    const dataComment = { comments, users: userState.users, idea, user }

    const downloadSingleFile = async (url) => {
        await downloadFile(idea.id)
        saveAs(
            `https://localhost:5001/${url}`,
            "example.docx"
        );
    }

    if (!userState.user) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <Grid container >
            <Grid className="idea-detail" sx={{ margin: '20px auto' }} container spacing={2}>
                <Grid item xs={12} className="idea-detail__container">
                    <div className="idea-detail__container-name">
                        {userState.user.userName}
                    </div>
                    <div className="idea-detail__container-topic">
                        {idea.ideaCategoryName}
                    </div>
                    <div className="idea-detail__container-content">
                        {idea.content}
                    </div>
                    <Grid container className="idea-detail__container-file" spacing={2}>
                        {idea.files.map(file => {
                            return (
                                <Grid item md={6} xs={12} sx={{ cursor: 'pointer' }} onClick={downloadSingleFile.bind(this, file.filePath)}>
                                    <div className="idea-detail__container-file-item">
                                        <div className="idea-detail__container-file-image">
                                            <img src="http://icons.iconarchive.com/icons/wilnichols/alumin-folders/512/Downloads-Folder-icon.png" alt="" />
                                        </div>
                                        <div className="idea-detail__container-file-content" >
                                            <div className="idea-detail__container-file-name">
                                                {file.filePath.slice(12)}
                                            </div>
                                            <div className="idea-detail__container-file-type">
                                                Excel
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={12} className="idea-detail__control">
                    <Button variant="secondary">
                        <ChatBubbleOutlineIcon fontSize='small' />
                        {comments.length <= 1
                            ? <div> {comments.length} comment </div>
                            : <div> {comments.length} comments </div>
                        }
                    </Button>
                    <Vote data={dataVote} />
                </Grid>
            </Grid>
            <Grid className="idea-detail" sx={{ margin: '0 auto 20px' }} container>
                <Comment data={dataComment} />
            </Grid>
        </Grid>
    );
};

export default IdeaDetail;