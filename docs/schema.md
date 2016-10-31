# Schema #


## Users ##

     column name | data-type | details
    ------------ | --------- | -------
          id     | integer   | not null, primary_key
        email    | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique

## Requested Groups ##
    column name | data-type | details
    ------------ | --------- | -------
         id     | integer   | not null, primary_key
      user_id   | integer    | not null, foreign_key, indexed
    password_digest  | string    | not null
    session_token    | string    | not null, indexed, unique  
