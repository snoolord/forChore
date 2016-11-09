import values from 'lodash/values';

export const selectCurrentChores = (state) => {
  let current = [];
  let chores = state.group.chores;
  let filter = state.filter.id;

  values(chores).forEach((chore)=> {
    if (!chore.complete && (chore.user_id === filter || filter === 0)) {
      current.push(chore);
    }
  });
  current.sort((a,b)=> {
    return new Date(a.complete_by) - new Date(b.complete_by);
  });
  console.log(current);
  return current;
};

export const selectCompletedChores = (state) => {
  let completed = [];
  let chores = state.group.chores;
  let filter = state.filter.id;
  values(chores).forEach((chore) => {
    if (chore.complete && (chore.user_id === filter || filter === 0)) {
      completed.push(chore);
    }
  });
  completed.sort((a,b) => {
    return new Date(b.updated_at) - new Date (a.updated_at);
  });
  console.log(completed);
  return completed;
};
