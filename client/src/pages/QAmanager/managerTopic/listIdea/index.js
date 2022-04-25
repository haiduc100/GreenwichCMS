import * as React from 'react';
import { IdeaContext } from '../../../../contexts/IdeaContext';
import { TopicContext } from '../../../../contexts/TopicContext';

const ListIdea = () => {
    const { ideaState: { ideas } } = React.useContext(IdeaContext)
    const { topicState: { topic } } = React.useContext(TopicContext)

    return (
        <div>
            <div className="list-idea__title">
                {topic === null
                    ?
                    <h1>Topic</h1>
                    :
                    <h1>{topic.title}</h1>
                }
            </div>
            {ideas.length > 0 && topic !== null
                ?
                <ul>
                    {ideas.map(idea => {
                        return (
                            <li key={idea.id}>
                                <div className="idea-item__name">
                                    {idea.userName}
                                </div>
                                <div className="idea-item__content">
                                    {idea.content}
                                </div>
                                <div className="idea-item__date">
                                    {topic.firstClosureDate.slice(0, 10)}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                :
                <ul>
                    <li>
                        <div className="idea-item__name">
                            User's name
                        </div>
                        <div className="idea-item__content" style={{ textAlign: 'center' }}>
                            Idea's content
                        </div>
                        <div className="idea-item__date">
                            Initiated date
                        </div>
                    </li>
                </ul>
            }
        </div>
    )
}

export default ListIdea;