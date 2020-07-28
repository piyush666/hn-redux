import { STORY_ARCHIVE } from "../constants/actionsTypes";

export default function archiveReducer(state = [], action) {
    switch (action.type) {
        case STORY_ARCHIVE: {
            return applyArchiveStory(state, action);
        }
        default: return state;
    }
}

const applyArchiveStory = (state, action) =>
    [...state, action.id]