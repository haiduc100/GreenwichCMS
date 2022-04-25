import { useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TopicContext } from '../../../../contexts/TopicContext';
import { IdeaContext } from '../../../../contexts/IdeaContext';

const ListTopic = () => {

    const { getAllTopic, topicState: { topics, topic }, deleteTopic, findTopic } = useContext(TopicContext)
    const { ideaState: { ideas }, viewIdeaByCategoryName } = useContext(IdeaContext)
    useEffect(() => { getAllTopic() }, [topics.length])

    const handelDeleteTopic = async () => {
        const choose = window.confirm('Are you sure you want to delete this topic?')
        if (ideas.length > 0) {
            window.alert('This topic has an idea!')
        }
        else if (choose && ideas.length <= 0) {
            await deleteTopic(topic.ideaCategoryId)
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
                    return (
                        <li key={topic.ideaCategoryId} onClick={chooseTopic.bind(this, topic)}>
                            <span style={{ lineHeight: '25px' }}>{topic.title}</span>
                            <div className="list-topic__control">
                                <IconButton onClick={handelDeleteTopic}>
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