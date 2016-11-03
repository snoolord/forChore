export const CREATE_A_GROUP = "CREATE_A_GROUP";
export const FETCH_A_GROUP = "FETCH_A_GROUP";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createAGroup = (group) => ({
  type: CREATE_A_GROUP,
  group
});

export const fetchAGroup = (id) => ({
  type: FETCH_A_GROUP,
  id
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});
