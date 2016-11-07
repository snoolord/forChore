
export const postChore = (chore, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/chores",
    data: {chore},
    success,
    error
  });
};
