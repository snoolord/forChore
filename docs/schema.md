# Schema #


## Users ##

     column name | data-type | details
    ------------ | --------- | -------
          id     | integer   | not null, primary_key
        email    | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique


## Groups/Users Join Table ##

        column name | data-type | details
       ------------ | --------- | -------
             id     | integer   | not null, primary_key
          user_id   | integer   | not null, foreign_key, indexed
          group_id  | integer   | not null, foreign_key, indexed

## Groups ##

          column name | data-type | details
         ------------ | --------- | -------
               id     | integer   | not null, primary_key
         creator_id   | integer   | not null, foreign_key, indexed
            title     | string    | not null

## Chores ##

    column name | data-type | details
   ------------ | --------- | -------
         id     | integer   | not null, primary_key
      user_id   | integer   | not null, foreign_key, indexed
      group_id  | integer   | not null, foreign_key, indexed
      completed | boolean   |
    complete_by | date      | not null
  completed_on  | date      |
  
