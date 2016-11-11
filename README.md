[groups]: docs/wireframe/images/group-feature.png "Group-Page"
[comments-show]: docs/wireframe/images/comment.png "Comment"
[group-create]: docs/wireframe/images/create-group.png "Create"
# forChore #

+[forChore live](https://forchore.herokuapp.com/#/)

forChore was inspired by my roommates and our troubles with organizing chores. Using facebook messenger and google calendar to track chores was a huge pain point. I wanted to make a chores app that could make all of our lives better. It uses Ruby on Rails on the backend, a postgreSQL database, and React.js with a Redux architectural framework on the front end.

## Features and Implementation

### Groups

Implementing CRUD for groups was the very first feature I planned to bring to life in forChore; the implementation was a great learning experience for learning all parts of the stack. On the backend, there is a users table, a groups table, and a user/groups join table that I called "groupings". I had to set up my controllers to create all the "groupings" table at the same time when a group is created.
![alt text][group-create]
In the middleware, I found the hardest challenge was getting groups to leave and re-render. On api request to leave a group, "the grouping" needs to be fetched before it can be deleted then it needs to refetch the user's current groups so that it can update in the sidebar. I had to solve this by nesting the delete request inside of the fetch request as the success callback for the fetch, then fetch the user's current groups on that delete success.
```javascript
export const fetchAndDeleteGrouping = (userId, groupId, success, error) => {
  let grouping = { user_id: userId, group_id: groupId };
  $.ajax({
    method: 'GET',
    url: 'api/groupings',
    data: {grouping},
    success: (data) => {
      $.ajax({
        method: "DELETE",
        url: `api/groupings/${data.id}`,
        success,
        error
      });
    },
    error
  });
};
```
### News Feed

Filtering on the sidebar allows the user to sort by housemate. Implementing the News Feed and the sidebar made me consider a lot of different possibilities for UI and UX. I used material ui for many of the hover effects, which proved to be a pain to style
![alt text][groups]
### Comments

The took a lot of inspiration from SplitWise. There newsfeed was super cool, so I let the comments show page appear by clicking on comments. When comments are posted to the server, on the success the current group is refetched so that the comments can re-render right away without a refresh.
![alt text][comments-show]



<!--
The challenge on my group creation was that I had to create a group and the associated "groupings" to that group at the same time. I was able to utilize the fabled "rails magic" to set "groupings" to the group.  -->
