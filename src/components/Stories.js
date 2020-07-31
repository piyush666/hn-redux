import React from 'react';
import Story from './Story';
import { getReadableStories, getFetchError } from '../selectors/story';
import { connect } from 'react-redux';

const Stories = ({ stories, error }) => (
    <div>
        {error && <p>Something went wrong...</p>}
        {
            (stories || []).map(story =>
                <Story
                    key={story.objectID}
                    story={story}
                />)
        }
    </div>
)


const mapStateToProps = state => ({
    stories: getReadableStories(state),
    error: getFetchError(state)
})

export default connect(mapStateToProps)(Stories);