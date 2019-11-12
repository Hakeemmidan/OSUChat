# OSUSCN

Oregon State University Student Chat Network (OSUSCN) is a chat room that only users with an @oregonstate.edu domain can get access to. It is a place for people to get to know each other and potentially meetup later on.

# MVP List
## 1. User auth (11/8/2019 - 11/9/2019, 2 days)
- Users can sign up and sign in
- Errors show if user enters wrong credentials
- Only users @oregonstate.edu domains can sign up

## 2. General chat room (11/10/2019 - 11/11/2019, 2 days)
- Once a user logs in or signs up, they are directed to general chat room
  - That is where they can chat live with other people

## 3. Flagging (11/12/2019, 1 day)
- You should be able to flag a user onClick of their username
- Once a user gets flagged 3 times, their chatting abilities would be disabled

## 4. Direct messaging (11/13/2019 - 11/14/2019, 2 days)
- Users can direct message other users onClick of their username
- Direct messaging should be live as well

## 5. Hosting (11/15/2019, 1 day)
- Host this on either Heroku or somewhere else

## 6. Soft launch (11/15/2019)

## Bonus 
- Users can search for other users from an index of users
- You can search all the messages in the platform
- Infinite scroll (up)


# Database Schema
## users
| column name | data type |  details |
| ----------- | --------- | -------  |
| id      | integer     |    not null, primary key    |
| username   | string      |    not null, indexed, unique   |
| email   | string      |    not null, indexed, unique   |
| session_token   | string      |    not null, indexed, unique |
| password_digest   | string      |    not null |
| created_at   | datetime      |    not null |
| updated_at   | datetime      |    not null |

## messages
| column name | data type |  details |
| ----------- | --------- | -------  |
| id      | integer     |    not null, primary key    |
| body   | string      |    not null, indexed   |
| user_id   | integer      |    not null, indexed  |
| created_at   | datetime      |    not null |
| updated_at   | datetime      |    not null |



# Sample state
```JavaScript
{
  entities: {
    users: {
      3: {
        id: 3,
        username: "starPa",
        authoredMessageIds: [2,3,13,14]
      },
      1: {
        id: 1,
        username: "almidana",
        authoredMessageIds: [1, 12],        
      }
    },
    messages: {
      1: {
        id: 1,
        body: "hello world",
        author_id: 1
      },
      2: {
        id: 2,
        body: "is mayonnaise an instrument?",
        author_id: 3
      },
      3: {
        id: 3,
        body: "is mayonnaise an instrument!!!?",
        author_id: 3
      }
    }
  },
  errors: {
    login: ["Incorrect username/password combination"],
    signup: ["You must have an @oregonstate.edu domain in order to sign up for this platform"],
    password: ["Password must be at least 7 characters"],
    messages: ["body can't be blank"]
  },
  session: { currentUserId: 3 }
}
```

# Frontend routes
Frontend routes are organized as follows:
- `App`
  - `NavBar`
  - (main component here)

The following will render under `NavBar`:
- `/`
  - `Splash`
    - Will have intro to platform and login / signup nav buttons
- `/login`
  - `SesssionForm`
- `/signup`
  - `SesssionForm`
- `/converse`
  - `GeneralChat`
- `/converse/:userId`
  - `DirectChat`


# Backend routes
## HTML
`GET` `StaticPagesController#root`

## API Endpoints
### `users`
- `POST /api/users` 
    - Signup

### `session`
- `POST /api/session` 
    - log in
- `DELETE /api/session`
    - log out

### `messages`
- `POST /api/messages`
    - creates message
- `DELETE /api/messages/:id` 
    - remove message