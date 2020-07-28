import { STORIES_ADD, STORIES_FETCH_ERROR } from "../constants/actionsTypes";
/* 
const INITIAL_STATE = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    }, {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
 */

const INITIAL_STATE = {
    stories: [],
    error: null,
}
function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORIES_ADD: {
            return applyAddStories(state, action);
        }
        case STORIES_FETCH_ERROR: {
            return applyFetchErrorStories(state, action);
        }
        default: return state;
    }
}

const applyAddStories = (state, action) => ({
    stories: action.stories,
    error: null
})

const applyFetchErrorStories = (state, action) => ({
    stories: [],
    error: action.error
})
export default storyReducer;
