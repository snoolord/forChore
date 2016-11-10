import values from 'lodash/values';

export const selectCurrentChores = (state) => {
  let current = [];
  let chores = state.group.chores;
  let filter = state.filter.id;
  values(chores).forEach((chore)=> {
    let choreWithComments = chore.chore;
    choreWithComments.comments = chore.comments;
    if (!choreWithComments.complete && (choreWithComments.user_id === filter || filter === 0)) {
      current.push(choreWithComments);
    }
  });
  current.sort((a,b)=> {
    return new Date(a.complete_by) - new Date(b.complete_by);
  });
  return current;
};

export const selectCompletedChores = (state) => {
  let completed = [];
  let chores = state.group.chores;
  let filter = state.filter.id;
  values(chores).forEach((chore) => {
    let choreWithComments = chore.chore;
    choreWithComments.comments = chore.comments;
    if (choreWithComments.complete && (choreWithComments.user_id === filter || filter === 0) && !choreWithComments.dismissed) {
      completed.push(choreWithComments);
    }
  });
  completed.sort((a,b) => {
    return new Date(b.updated_at) - new Date (a.updated_at);
  });
  return completed;
};
