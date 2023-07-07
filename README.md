# Hex Monscape Go

Welcome to this repo!

In this repo you will learn about Haraj Solutions Team's secret technique in writing maintainable code for Haraj projects. 🤫

The secret actually lies in the special software architecture we use to work on these projects: [Hexagonal Architecture](./docs/reference/hex-architecture.md). In this repo we will share to you our knowledge about this special architecture through simple server-client game named `Hex Monscape`.

We are using [Hexagonal Architecture](./docs/reference/hex-architecture.md) to build `Hex Monscape` game server while coding it using [Go](https://go.dev/). As for the web client, we code it using [Vue 3](https://vuejs.org/).

To understand the details on how we apply [Hexagonal Architecture](./docs/reference/hex-architecture.md) to this game, please refer to [this doc](./docs/reference/hex-architecture.md).

To start playing the game, please refer to [How to Run The Game](#how-to-run-the-game) section.

> **Note:**
>
> As Solutions Team member, your understanding towards [Hexagonal Architecture](./docs/reference/hex-architecture.md) is mandatory since it is the main architecture we used for building Haraj production services.
>
> So if you understand this architecture well, you will be in no time contributing to Haraj production.

## Background Story

One of the biggest engineering issue in Haraj is code maintainability.

What is code maintainability? Essentially it is the ability of a codebase to be easily maintained by other developers. So when a developer no longer able to maintain the codebase, other developers could easily take over the code he/she left behind.

In the early days of Haraj, we used to assign project ownership to a single developer. So every developer in the team will own at least one project. However we made a mistake by not setting up common standards on how to write code in Haraj. So every developer in the team will write code based on their own style.

Usually our developers will stay for quite a long time (> 5 years) before they left. So when a developer left the team, usually he/she already owned several projects that valuable for Haraj business. The problem is since the projects written by the developer's own style, no one in the team could easily take over those projects. 😅

This is why one of the biggest engineering issue in Haraj is code maintainability and the solution for this issue is non other than to set up common standards on how to write code in Haraj. This is where [Hexagonal Architecture](./docs/reference/hex-architecture.md) comes into play.

## Game Design

In the game you will play as a `10 years` old monster hunter that dreams to become the very best. In order to reach that, you need to make journey together with your monster partner to seek `3` strong wild monsters and kick them in the butt. 💥💪🏻

The game scenario is pretty simple, player just need to choose monster partner then won battle for `3` times to beat the game. After that player may choose to end the game or continue playing.

Here is the flowchart for the game scenario:

<p align="center">
    <img src="./docs/reference/assets/game-flow.drawio.svg" alt="Game Flow" height="400" />
</p>

Here is the flowchart for each battle in the game:

<p align="center">
    <img src="./docs/reference/assets/battle-flow.drawio.svg" alt="Battle Flow" height="400" />
</p>

To see the REST API specification for this game, please see [this doc](./docs/api-design/rest-api.md).

## How to Run The Game

There are `3` variants of game server in this project:

- Server using Memory storage
- Server using DynamoDB storage
- Server using MySQL storage

All of them will serve the same game, the only difference is the place where they store the game data.

All of these servers could be run by using this command:

```bash
> make run
```

This command will create & run the stack defined in this [docker-compose.yml](./deploy/local/run/docker-compose.yml). 

Wait a moment until the entire stack is running. You will see something like this in the console after it is done:

```bash
hex_mem_1     | 2022/05/11 16:29:50 server is listening on :9185...
hex_mysql_1   | 2022/05/11 16:30:21 server is listening on :9186...
hex_ddb_1     | 2022/05/11 16:30:21 server is listening on :9187...
```

After that you could access each of these servers by visiting endpoints below:

- Memory storage => http://localhost:9185
- DynamoDB storage => http://localhost:9186
- MySQL storage => http://localhost:9187

> **Note:**
>
> When we use [Hexagonal Architecture](./docs/reference/hex-architecture.md) to build a system, it is quite easy to swap its infrastructure code with another technologies.
>
> So for example, if initially we used in-memory storage to store our data, we could easily swap it with MySQL storage or something else. This is why in this project we provide `3` variants of game server for you, this is to demonstrate exactly this point.

## Attribution

The monster characters used in this project is designed by [Freepik](http://www.freepik.com). To be exact we are using [this asset](https://www.freepik.com/free-vector/set-funny-monsters-hand-drawn-style_1933029.htm).

## License

MIT