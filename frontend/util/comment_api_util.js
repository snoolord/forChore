export const postComment = (comment, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment },
    success,
    error
  });
};
