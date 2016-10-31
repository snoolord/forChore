# API Endpoints #
## HTML API ##
### Root ###
  * GET/ - loads React WebApp

## JSON Api ##

### Users ###
  * POST /api/users

### Session ###
  * POST /api/session
  * NEW /api/session
  * DELETE /api/session

### Groups ###
  * POST /api/groups
  * DELETE /api/groups
  * GET /api/groups/:group_id
  * PATCH /api/groups/:group_id

### Requested Groups ###
  * POST /api/requested_groups
  * DELETE /api/requested_groups
  * GET /api/requested_groups
  * PATCH /api/requested_groups/:requested_group_id
  * GET /api/requested_groups/:requested_group_id

### Invited Groups ###
  * POST /api/invited_groups
  * DELETE /api/invited_groups
  * GET /api/invited_groups
  * PATCH /api/invited_groups/:invited_groups
  * GET /api/invited_groups/:invited_groups

### Chores ###
  * POST /api/chores
  * GET /api/chores
  * PATCH /api/chores/:chore_id
  * GET /api/chores/:chore_id
