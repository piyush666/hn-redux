import { STORY_ARCHIVE } from "../constants/actionsTypes";

export const doArchiveStory = id => ({
    type: STORY_ARCHIVE,
    id
})
