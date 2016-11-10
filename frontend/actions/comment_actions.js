
export const CREATE_COMMENT = "CREATE_COMMENT";

export const createComment = (comment, groupId) => ({
  type: CREATE_COMMENT,
  comment,
  groupId
});
