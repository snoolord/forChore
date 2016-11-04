export const getUsers = (success, error) => {
    $.ajax({
    method: 'GET',
    url: 'api/users',
    success,
    error
    });
};

export const getGroups = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/users/dashboard',
    success,
    error
  });
};
