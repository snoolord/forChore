export const CREATE_GROUP = "CREATE_GROUP";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createGroup = (group) => ({
  type: CREATE_GROUP,
  group
});

export const receiveGroup = (id) => ({
  type: RECEIVE_GROUP,
  id
});
