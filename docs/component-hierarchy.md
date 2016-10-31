==Component Hiearchy

## Main Page Container ##
* Header
* Description
* Auth Forms 1

## Auth Form Container ##
* Auth Forms 2

## Dashboard Container ##
  * Left Sidebar
  * Group Content

  * Right Sidebar
  * No Group Sidebars

## MyChores Container ##
  * Chores List
  * Complete Chore Form

## Housemate Hover/Click Container ##
  * Hover
    * Reminder form
  * Click    
    * Create Chore Form

## Join Group Container ##
  * Request Form

## Create Group Container ##
  * Create Group Form

## Add Chore Container Main Dash ##
  * Add Chore Form

## Me Container
  * Chore List
  * Complete Chore Form


     Routes       | Component
    ------------- | -------------
    "/"           | "MainPage Container"
    "/signup"     | "AuthFormContainer2"
    "/signin"     | "AuthFormContainer2"
    "/dashboard"  | "DashboardContainer"
    "/dashboard/current_user/:current_user | "MeContainer"
    "/dashboard/housemate/:housemate_id" | "HousemateHoverClickContainer"
    "/dashboard/addchore" | "MainDashAddChoreContainer"
    "/joingroup" | "JoinGroupContainer"
    "creategroup" | "CreateGroupContainer"
