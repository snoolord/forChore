{
  current_user: {
    id: 1,
    username: 'winston'
    invites: {
      group1: {
        groupname: "app-academy",
        accepted: true
      }
      group2 : {
        groupname: "hack-reactor",
        accepted: false
      }
    }
  },

  forms: {
    signUp: { errors: [] },
    login: { errors: [] },
    createChore: { errors: ["Chore body cannot be blank"]},
    joinGroup: { errors: ["Email does not match any usernames"]},
    createGroup: { errors: ["Email does not match any usernames"]}
  }

  housemates: {
    user1: {
      chores: {
        1: {
          chore_body: "Clean dishes",
          date_complete: "11/11/16",
          complete: false,
          reminded: 0
        }
      }
    }  
  }

  group: {
    requests: {
      user1: {
        id: 1,
        username: "winston",
        accepted: false
      }
      user2: {
        id: 2,
        username: "bob",
        accepted: false
      }
    }
  }  

}
