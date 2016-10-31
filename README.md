# forChore #
+[Heroku Link]


## Minimum Viable Product ##
forChore is a web application that aims to help people live better together through a streamlined chores interface.
By the end of week 9, forChore will satisfy the following criteria

*Hosting on Heroku
*New account creation, login, guest/demo login
*Creating groups/houses
*Assigning chores
*Finishing chores
*Chores NewsFeed
*Production README sample

## Design Docs ##

[View Wireframes](./docs/wireframe)

[Api EndPoints](./docs/api-endpoints.md)

[Component Hierarchy](./docs/component-hierarchy)

[Sample State](./docs/sample-state.md)

[Schema](./docs/schema.md)

## Implementation Timeline ##

### Phase 1 Backend Setup and Front-End Authentication (2 days) ###

Objective: Have a functioning styled rails project with front-end Authentication

### Phase 2 Groups, api, components (3 days) ###

Objective:
Create Groups/Joins Groups (Group request/invite)
Functioning components that recognize if the user is in a group or not.
If the user is not in a group (e.g just made an account), they will be prompted to either join or create a group.
Users not in a group should be able to be see and accept group invites from other users.
Otherwise, they will be directed to the main page. Users in a group should be able to accept user requests to join the group

### Phase 3 Assign Chores (1 day) ###

Objective: Have functioning form to create chores for members of your forChore group. These chores will show up in your myChores Page

### Phase 4 Finish Chores (1 day) ###

Objective:  Allow users to complete chores

### Phase 5 Chores NewsFeed (2 days) ###

Objective: Allow users to see a news feed of chores as they are completed

### Bonus (tbd) ###

*Gmail login
*Hover/click housemates to make chores and send Reminders
*Reminders
*Google Calendar integration
