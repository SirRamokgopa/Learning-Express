# Boss Machine

## Project Overview

In this project, I created an API to serve information to a "Boss Machine", a unique management application for today's most accomplished (evil) entrepreneurs. I created routes to manage the "minions", "brilliant million dollar ideas", and to handle all the "annoying meetings that keep getting added to your busy schedule".

## Implementation Details

To complete the project, yI had to complete code in a few sections of the project. Everything inside the **browser**, **public**, or **node_modules** was alreay supplied.

### Server Boilerplate

In **server.js**, there some boilerplate code and the server was missing key functionality to allow it to run. I had to:

- Set up body-parsing middleware with the `body-parser` packagae.
- Set up CORS middleware with the `cors`.
- Mount the existing `apiRouter` at `/api`. This router will serve as the starting point for all the API routes.
- Start the server listening on the provided `PORT`.


### API Routes

- The routes should live inside the **server** folder. 
- The 'database' exists in **server/db.js**. 

#### Routes Required

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.

For all `/api/minions` and `/api/ideas routes`, any POST or PUT requests will send their new/updated resources in the request body. POST request bodies will not have an `id` property, and is set based on the next id in sequence.

For `/api/meetings` POST route, no request body is necessary, as meetings are generated automatically by the server upon request. The provided `createMeeting` function exported from **db.js** is used to create a new meeting object.

### Working with the 'Database'

The **server/db.js** file exports helper functions for working with the database arrays. The goal of this project was to focus on Express routes and not worry about how the database works.

#### Schemas

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string



### Custom Middleware

- A custom middleware function `checkMillionDollarIdea` is created that comes in handy in some /api/ideas routes. This function is written in the **server/checkMillionDollarIdea.js** file. This function makes sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its `numWeeks` and `weeklyRevenue` properties.

