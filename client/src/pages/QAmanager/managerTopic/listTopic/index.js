import { useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TopicContext } from '../../../../contexts/TopicContext';
import { IdeaContext } from '../../../../contexts/IdeaContext';

const ListTopic = () => {

    const { getAllTopic, topicState: { topics }, deleteTopic, findTopic } = useContext(TopicContext)
    const { viewIdeaByCategoryName } = useContext(IdeaContext)
    useEffect(() => { getAllTopic() }, [])

    const handelDeleteTopic = async id => {
        const choose = window.confirm('Are you sure you want to delete this topic?')
        if (choose) {
            await deleteTopic(id)
        }
    }

    const chooseTopic = async (topic) => {
        findTopic(topic.ideaCategoryId)
        await viewIdeaByCategoryName(topic.title)
    }

    return (
        <div >
            <ul>
                {topics.map(topic => {
                    console.log(topic);
                    return (
                        <li key={topic.ideaCategoryId} onClick={chooseTopic.bind(this, topic)}>
                            <span style={{ lineHeight: '25px' }}>{topic.title}</span>
                            <div className="list-topic__control">
                                <IconButton onClick={handelDeleteTopic.bind(this, topic.ideaCategoryId)}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTopic;