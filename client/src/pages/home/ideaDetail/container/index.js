import React from 'react';
import Grid from '@mui/material/Grid';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';
import Vote from '../../idea/Vote';
import Comment from './Comment';
import Avatar from '@mui/material/Avatar';

import '../IdeaDetail.css'

const Container = () => {
    return (
        <Grid container >
            <Grid className="idea-detail" sx={{ margin: ' 100px auto 0' }} container spacing={2}>
                <Grid item xs={1.5}>
                    <Avatar
                        src="https://www.hashatit.com/images/uploads/users/44840/profile_picture/xinh.jpg"
                        sx={{ width: 90, height: 90 }}
                    />
                </Grid>
                <Grid item xs={10.5} className="idea-detail__container">
                    <div className="idea-detail__container-name">
                        Vũ Hoàng Hà
                        <span>Posted 11 hour ago</span>
                    </div>
                    <div className="idea-detail__container-topic">
                        Đốt trường
                    </div>
                    <div className="idea-detail__container-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <Grid container className="idea-detail__container-file" spacing={2}>
                        <Grid item md={6} xs={12} >
                            <div className="idea-detail__container-file-item">
                                <div className="idea-detail__container-file-image">
                                    <img src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg" alt="" />
                                </div>
                                <div className="idea-detail__container-file-content">
                                    <div className="idea-detail__container-file-name">
                                        burn-down-chart.xls
                                    </div>
                                    <div className="idea-detail__container-file-type">
                                        Excel
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className="idea-detail__container-file-item">
                                <div className="idea-detail__container-file-image">
                                    <img src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg" alt="" />
                                </div>
                                <div className="idea-detail__container-file-content">
                                    <div className="idea-detail__container-file-name">
                                        burn-down-chart.xls
                                    </div>
                                    <div className="idea-detail__container-file-type">
                                        Excel
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} >
                            <div className="idea-detail__container-file-item">
                                <div className="idea-detail__container-file-image">
                                    <img src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg" alt="" />
                                </div>
                                <div className="idea-detail__container-file-content">
                                    <div className="idea-detail__container-file-name">
                                        burn-down-chart.xls
                                    </div>
                                    <div className="idea-detail__container-file-type">
                                        Excel
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="idea-detail__control">
                    <Button variant="secondary">
                        <ChatBubbleOutlineIcon fontSize='small' />
                        <div >
                            77 comments
                        </div>
                    </Button>
                    <Vote />
                </Grid>
            </Grid>
            <Grid className="idea-detail" sx={{ margin: '0 auto 20px' }} container>
                <Comment />
            </Grid>
        </Grid>
    );
};

export default Container;