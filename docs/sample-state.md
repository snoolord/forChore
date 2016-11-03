```js{
  current_user: {
    id: 1,
    username: 'winston'
    groups: {
      group1: {
        title: "app-academy",
      }
      group2 : {
        title: "hack-reactor",
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


  group: {
    1: {
        housemates: {
          user_id: {
              chores: {
                1: {
                  chore_body: "Clean dishes",
                  date_complete: "11/11/16",
                  complete: false,
                  reminded: 0,
                  comments: {
                    body: "can you clean my pot too?",
                    time-added: "14:05:23",
                    date-added: "11/11/16"
                }
              }
            }
          }  
        }
    }
  }
}```
