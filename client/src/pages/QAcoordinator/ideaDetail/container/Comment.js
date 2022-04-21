import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { CommentContext } from '../../../../contexts/CommentContext';

import '../../../home/ideaDetail/IdeaDetail.css';

const Comment = ({ data }) => {
    const { comments, users, idea, user } = data;
    const [comment, setComment] = React.useState('')
    const { PostComment } = React.useContext(CommentContext)

    const handelComment = async () => {
        const commentForm = {
            ideaId: idea.id,
            replyBy: user.userId,
            content: comment
        }
        await PostComment(commentForm)
        setComment('')
    }

    return (
        <>
            <Grid container sx={{ mt: 1, mb: 3 }}>
                <Grid item xs={1} >
                    <Avatar
                        alt="Remy Sharp" src="https://yt3.ggpht.com/a/AATXAJwI74H9DYnFUVvd4JicdbeQyy0eAsoMT6nScA=s900-c-k-c0xffffffff-no-rj-mo"
                        sx={{
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                            width: "60px",
                            height: "60px"
                        }}
                    />
                </Grid>
                <Grid item xs={11}>
                    <form className="idea-comment__content">
                        <TextField
                            id="standard-search"
                            label="Write your comment..."
                            variant="standard"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                        <div className="idea-comment__send-icon">
                            <IconButton onClick={handelComment}>
                                <SendIcon />
                            </IconButton>
                        </div>
                    </form>
                </Grid>
            </Grid>
            <Grid container>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {comments.map((comment) => {
                        const findUser = users.find(user => user.userId === comment.replyBy)
                        console.log(findUser);
                        return (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp" src="https://yt3.ggpht.com/a/AATXAJwI74H9DYnFUVvd4JicdbeQyy0eAsoMT6nScA=s900-c-k-c0xffffffff-no-rj-mo"
                                            sx={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <span className="Comment-detail__name">{findUser.userName}</span>
                                                <span className="Comment-detail__time">posted 11 hours ago</span>
                                            </>
                                        }
                                        secondary={
                                            <span>
                                                {comment.content}
                                            </span>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        )
                    })}
                </List>
            </Grid>
        </>
    );
};

export default Comment;