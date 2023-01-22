GraphQL allows for a single API endpoint where we can retrieve as much or as little data as we need from multiple resources such as databases, microservices, or even other third-party APIs, all in a single HTTP request.

Typically, with REST APIs, CRUD actions are implemented through HTTP verds: GET, POST, PUT, & DELETE.

GraphQL splits those four categories into two:

Queries: Queries are how we perform GET requests and ask for data from a GraphQL API.

Mutations: Mutations are how we perform POST, PUT, and DELETE requests to create or manipulate data through a GraphQL API.

The setup of a GraphQL API involves defining two very important things which work in unison:

TypeDefs- Defining every piece of data the client can expect to work with through a query or mutation .
Resolvers- The functions we connect to each query or mutation that perfrom the CRUD actions 

