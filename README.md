# Employee Tracker

## Description

A command line interface for viewing and editing a company's database of employees, roles, and departments.

## Installation

### Prerequisites

Make sure you have [Git Bash](https://gitforwindows.org/) if you are using Windows, along with [NodeJS](https://nodejs.org) and [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) installed. [Insomnia](https://insomnia.rest/download) is used the demonstration video to make requests to the API because it simplifies performing individual requests, but this isn't strictly necessary.

### Steps

1. Clone this repository in git with `git clone https://github.com/JaredSchips/SocialNet-API.git`
2. In your command line, move to the repository folder with the command `cd employee-tracker`
3. Run `npm start`

## Usage

Here is a demo video showcasing each request route:

[![Demo Video](./assets/demo-play.jpg)](https://drive.google.com/file/d/1McEIssIC1TReMaja93GFC8RyCoMxQjWs/view "Demo Video")

And here is a list of requests you can make to the API:

### User Routes:

#### **Get all users**

Route: `http://localhost:3001/api/users`

Method: `GET`

Parameters: None

Body: None

#### **Get one user**

Route: `http://localhost:3001/api/users/:userId`

Method: `GET`

Parameters:

- `userId` - The ID of the user to get

Body: None

#### **Create a new user**

Route: `http://localhost:3001/api/users`

Method: `POST`

Parameters: None

Body: A JSON file containing what properties the new user should have

#### **Update a user**

Route: `http://localhost:3001/api/users/:userId`

Method: `PUT`

Parameters: 

- `userId` - The ID of the user to update

Body: A JSON file containing what user properties to change

#### **Delete a user**

Route: `http://localhost:3001/api/users/:userId`

Method: `DELETE`

Parameters: 

- `userId` - The ID of the user to delete

Body: None

#### **Add a friend to a user**

Route: `http://localhost:3001/api/users/:userId/friends/:friendId`

Method: `POST`

Parameters: 

- `userId` - The ID of the user to add a friend to

- `friendId` - The ID of the user to be added as a friend

Body: None

#### **Remove a friend from a user**

Route: `http://localhost:3001/api/users/:userId/friends/:friendId`

Method: `DELETE`

Parameters: 

- `userId` - The ID of the user to remove a friend from

- `friendId` - The ID of the user to be removed as a friend

Body: None

#### **Remove a friend from a user**

Route: `http://localhost:3001/api/users/:userId/friends/:friendId`

Method: `DELETE`

Parameters: 

- `userId` - The ID of the user to remove a friend from

- `friendId` - The ID of the user to be removed as a friend

Body: None

### Thought Routes

#### **Get all thoughts**

Route: `http://localhost:3001/api/thoughts`

Method: `GET`

Parameters: None

Body: None

#### **Get one thought**

Route: `http://localhost:3001/api/thoughts/:thoughtId`

Method: `GET`

Parameters: 

- `thoughtId` - The ID of the thought to get

Body: None

#### **Create a thought**

Route: `http://localhost:3001/api/thoughts`

Method: `POST`

Parameters: None

Body: A JSON file containing what properties the new thought should have

#### **Update a thought**

Route: `http://localhost:3001/api/thoughts/:thoughtId`

Method: `PUT`

Parameters: 

- `thoughtId` - The ID of the thought to update

Body: A JSON file containing what thought properties to update

#### **Delete a thought**

Route: `http://localhost:3001/api/thoughts/:thoughtId`

Method: `DELETE`

Parameters: 

- `thoughtId` - The ID of the thought to delete

Body: None

#### **Add a reaction to a thought**

Route: `http://localhost:3001/api/thoughts/:thoughtId/reactions`

Method: `POST`

Parameters: 

- `thoughtId` - The ID of the thought to a a reaction to

Body: A JSON file containing what properties the new reaction should have

#### **Remove a reaction from a thought**

Route: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

Method: `DELETE`

Parameters: 

- `thoughtId` - The ID of the thought to remove a reaction from

- `reactionId` - The ID of the reaction to be removed

Body: None

---

## Credits

Jared Schips

## License

Licensed under the Unlicense