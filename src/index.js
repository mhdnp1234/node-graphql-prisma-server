const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription')
const Feed = require('./resolvers/Feed')

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription,
  Feed
};

// 3
const server = new GraphQLServer({
  typeDefs : './src/schema.graphql',
  resolvers,
  context: req => Object.assign({
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/mhdnp1234-128068/prisma-demo-database/dev',
      secret: 'mysecret123',
      debug: true,
    })
  }, req)
})
server.start(() => console.log(`Server is running on http://localhost:4000`))