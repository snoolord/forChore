export const FETCH_USER_GROUPS = "FETCH_USER_GROUPS";
export const RECEIVE_USER_GROUPS = "RECEIVE_USER_GROUPS";
export const FETCH_USERS = "FETCH_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUserGroups = () => ({
  type: FETCH_USER_GROUPS
});

export const receiveUserGroups = (groups) => ({
  type: RECEIVE_USER_GROUPS,
  groups
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
