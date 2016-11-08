
export const postChore = (chore, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/chores",
    data: {chore},
    success,
    error
  });
};

export const finishChore = (id, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/chores/${id}`,
    success,
    error
  });
};
