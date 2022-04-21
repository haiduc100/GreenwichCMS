import React from 'react';
import GoodIdea from '../home/GoodIdea'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IdeaContext } from '../../contexts/IdeaContext';
import { ReactionContext } from '../../contexts/ReactionContext';
import { AuthContext } from '../../contexts/AuthContext'
import Vote from '../home/Vote';
import { Link } from 'react-router-dom';
import Paginations from '../../components/Pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { saveAs } from "file-saver";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Body = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [ideaPerPage] = React.useState(5);

    const { ideaState: { ideas }, getAllIdea, findIdea, downloadFile } = React.useContext(IdeaContext)
    const { reactionState: { reactions }, getReactionByUser } = React.useContext(ReactionContext)
    const { authState: { user } } = React.useContext(AuthContext)
    React.useEffect(() => { getReactionByUser(user.userId) }, [])
    React.useEffect(() => { getAllIdea() }, [])

    const newIdeas = ideas.sort((a, b) => {
        return b.likeCount - a.likeCount
    })

    const goodIdeas = newIdeas.slice(0, 4)


    const indexOfLastUser = currentPage * ideaPerPage
    const indexOfFirstUser = indexOfLastUser - ideaPerPage
    const currentIdeas = ideas.slice(indexOfFirstUser, indexOfLastUser)

    // change pagination
    const paginate = number => {
        setCurrentPage(number)
    }

    const download = async (id) => {
        const file = await downloadFile(id)
        const url = file.slice(61)
        saveAs(
            `https://localhost:5001/FileIdea\\${url}`,
            "example.docx"
        );
    }

    return (
        <Grid container spacing={2} sx={{ width: '60%', margin: '0 auto' }}>
            <Grid item xs={12} sx={{ margin: '10px 0 0' }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        "@2.00": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {goodIdeas.map(goodIdea => {
                        return (
                            <SwiperSlide>
                                <GoodIdea goodIdea={goodIdea} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1, mb: 2 }}>
                {currentIdeas.map(ideaData => {
                    let reaction = reactions.find(reaction => {
                        return reaction.ideaId === ideaData.id
                    })
                    const data = { reaction, ideaData }
                    return (
                        <Box sx={{ mb: 1 }} onClick={findIdea.bind(this, ideaData.id)}>
                            <Box className='post' >
                                <Box sx={{ display: 'flex', }}>
                                    <Box fontSize={{ fontWeight: 'bold' }}>{ideaData.userName}</Box>
                                </Box>
                                <Box>
                                    {ideaData.ideaCategoryName}
                                </Box>
                                <Box sx={{ textAlign: 'justify', fontSize: { md: '16px', xs: '14px' } }}>
                                    {ideaData.content}
                                </Box>
                                <Box>
                                    <IconButton
                                        color='primary'
                                        size="small"
                                        onClick={download.bind(this, ideaData.id)}
                                    >
                                        <FileDownloadIcon />
                                        download document
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Box className="control" >
                                        <Button as={Link} to="/ideaDetail-qa-manager" sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'flex-start', color: '#6c6b6b' }}>
                                            <div><ChatBubbleOutlineIcon fontSize='small' /></div>
                                            <span>comments</span>
                                        </Button>
                                    </Box>
                                    <Vote data={data} />
                                </Box>
                            </Box >
                        </Box>
                    )
                })}
            </Grid>
            {ideas.length / ideaPerPage <= 1
                ? null
                : <Paginations perPage={ideaPerPage} total={ideas.length} paginate={paginate} />
            }
        </Grid>
    );
};

export default Body;