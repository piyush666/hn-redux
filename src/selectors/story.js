const isNotArchived = archiveIds => story =>
    archiveIds.indexOf(story.objectID) === -1;

export const getReadableStories = ({ storyState, archiveState }) =>
    storyState.stories.filter(isNotArchived(archiveState));

export const getFetchError = ({ storyState }) =>
    storyState.error;
