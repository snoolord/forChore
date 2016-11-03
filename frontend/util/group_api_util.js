export const createGroup = (group, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: { group },
    success,
    error
  });
};

export const receiveGroup = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`,
    success,
    error
  });
};
