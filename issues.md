
Either two things to eliminate refresh...
Can add new actions! These actions will only merge the state. Right now i'm doing a full refresh that results in a complete re-render...

Or I need to refactor the state.
I think a full refactor of my redux cycle will make code more easy to understand...

Current State:  

state: {
  filter: {
    id: 0
  }
  <!-- ok for now    -->
  group: {
    chores: {
      1: {
        chore: {
          all linformation about chore
        }
        comments: [comments about chores]
      }
    }
    title: "charlie browns' house"
    housemates: {
      1:  {
        chore_ids: [1,2,3],
        id: 1,
        username: "charlie"  
      }
    }
  }  

  session: {
    currentUser: {
      username: "charlie",
      id: 1
    }
  }

  user: {
    groups: [groupobjects],
    users: {
      charlie: 2,
      franklin: 11,
    }
  }
}

Just looking at this state I should definitely be moving my user's groups into the "currentUser" there is quite a lot of overlap there.
I think that when I create a group I should merge the state of the currentUser...
I think that first of all that this would make al ot more sense
and user should become users

In my group reducers I should be updating the state at the reducer and merge with a the old state... RIght now when I create a comment. I go all the way and fetch the userGroups which forces a rerender for some reason. After I've fetched userGroups

Right now the re-render is happening becomes I'm fetching dashboard which is completly different from fetching currentgroup when I click on the group.
These actions in the redux cycle need to be more explicit. I'm reusing actions and it is causing a lot of difficulty. I should be updating the group's chore's comments..
