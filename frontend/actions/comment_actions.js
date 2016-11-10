export const CREATE_MY_COMMENT = "CREATE_MY_COMMENT";
export const CREATE_GROUP_COMMENT = "CREATE_GROUP_COMMENT";

export const createComment = (comment) => ({
  type: CREATE_GROUP_COMMENT,
  comment,
});

export const postMyComment = (comment) => ({
  type: CREATE_MY_COMMENT,
  comment
});
