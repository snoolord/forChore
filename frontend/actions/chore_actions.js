export const CREATE_CHORE = "CREATE_CHORE";
export const COMPLETE_CHORE = "COMPLETE_CHORE";
export const RECEIVE_CHORE = "RECEIVE_CHORE";

export const createChore = (chore) => ({
  type: CREATE_CHORE,
  chore
});

export const completeChore = (id) => ({
  type: COMPLETE_CHORE,
  id
});
