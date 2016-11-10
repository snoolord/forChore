export const postComment = (comment, groupId, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment },
    success,
    error
  });
};
