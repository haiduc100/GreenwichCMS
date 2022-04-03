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

import '../IdeaDetail.css'

const Comment = () => {
    return (
        <>
            <Grid container sx={{ mt: 1, mb: 3 }}>
                <Grid item xs={1} >
                    <Avatar
                        src="https://www.hashatit.com/images/uploads/users/44840/profile_picture/xinh.jpg"
                        sx={{ width: 60, height: 60 }}
                    />
                </Grid>
                <Grid item xs={11}>
                    <form className="idea-comment__content">
                        <TextField
                            id="standard-search"
                            label="Write your comment..."
                            variant="standard"
                            sx={{ width: '100%' }}
                        />
                        <div className="idea-comment__send-icon">
                            <IconButton >
                                <SendIcon />
                            </IconButton>
                        </div>
                    </form>
                </Grid>
            </Grid>
            <Grid container>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <>
                                    <span className="Comment-detail__name">Vũ Hoàng hà</span>
                                    <span className="Comment-detail__time">posted 11 hours ago</span>
                                </>
                            }
                            secondary={
                                <span>
                                    I'll be in your neighborhood doing errands this…
                                </span>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <>
                                    <span className="Comment-detail__name">Vũ Hoàng hà</span>
                                    <span className="Comment-detail__time">posted 11 hours ago</span>
                                </>
                            }
                            secondary={
                                <span>
                                    I'll be in your neighborhood doing errands this…
                                </span>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <>
                                    <span className="Comment-detail__name">Vũ Hoàng hà</span>
                                    <span className="Comment-detail__time">posted 11 hours ago</span>
                                </>
                            }
                            secondary={
                                <span>
                                    I'll be in your neighborhood doing errands this…
                                </span>
                            }
                        />
                    </ListItem>
                </List>
            </Grid>
        </>
    );
};

export default Comment;