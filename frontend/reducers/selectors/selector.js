import values from 'lodash/values';

export const selectCurrentChores = (chores) => {
  let current = [];
  values(chores).forEach((chore)=> {
    if (!chore.complete) {
      current.push(chore);
    }
  });
  current.sort((a,b)=> {
    return new Date(a.complete_by) - new Date(b.complete_by);
  });
  console.log(current);
  return current;
};

export const selectCompletedChores = (chores) => {
  let completed = [];
  values(chores).forEach((chore) => {
    if (chore.complete) {
      completed.push(chore);
    }
  });
  completed.sort((a,b) => {
    return new Date(b.updated_at) - new Date (a.updated_at);
  });
  console.log(completed);
  return completed;
};
