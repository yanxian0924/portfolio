# iPet

This was originally a final project of the class INF 385T Personal Informatics taught by [Byron Wallace](http://users.ece.utexas.edu/~ethomaz/) at UT Austin.

## Background

iPet is a virtual pet application allowing users to breed their own virtual pets, and the health indicators of their pets reflect their own health status. The basic idea is that the virtual pet game can not only spice up the process of information tracking but also alleviate stress when users do not live in a very healthy way for a short-term time. Virtual pet game is a very classic game and back in the 1990s, it attracted a large amount of users. Tamagotchi, the first of a series of key-chain virtual pets, was created in that time. A virtual pet can go through several stages of growth, and look different depending on the degree of care the player provides. To ensure the virtual pets grow up to be healthy and happy, users are very willing to feed, clean and play with them. Besides, the virtual pet is not a direct representation of the user, he/she will less be affected by the negative feedback displayed by application. Generally, the life simulation games can adapt to the user behavior based on information collected from the user and environment. Their ultimate goal is to bring computer entertainment back to the real world, in this case, users will more care about their health.

## Implementation

The mobile game consists of client and server. The client, developed based on iOS platform, uses Cocoa framework and Object-C language. I used CoreData as the data service in the
client, which uses Sqlite3 as the database. The server is hosted locally and the program is written in Python. The server side provides RESTful Web APIs, including functions such as user
authentication, obtain the user ID and data extracting from Fitbit. In addition, Redis was used as the data structure server, which is an advanced key-value store. It has a very high performance because it works with an in-memory dataset, so it can respond user’s requests quickly. In terms of the configuration of Redis, I used point-in-time snapshots of dataset at specified intervals as the persistence strategy and asynchronous communication between the client and the server, making the data transmission to be transparent.

[Demo](https://www.youtube.com/watch?v=N9iZ3l7Drvw)
