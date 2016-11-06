export const createGroup = (group, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: { group },
    success,
    error
  });
};

export const fetchGroup = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`,
    success,
    error
  });
};


export const fetchAndDeleteGrouping = (userId, groupId, success, error) => {
  let grouping = { user_id: userId, group_id: groupId };
  $.ajax({
    method: 'GET',
    url: 'api/groupings',
    data: {grouping},
    success: (data) => {
      $.ajax({
        method: "DELETE",
        url: `api/groupings/${data.id}`,
        success,
        error
      });
    },
    error
  });
};
