const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://admin-hasib:1qaz<LP_@cluster0.s4ohkvl.mongodb.net/?retryWrites=true&w=majority";

// typeDefs -> GraphQL Type Definitions
// resolvers -> How do we resolve queries / mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connection Successful 🚀");
    return server.listen({ port: 5000 });
  })
  .then((res) => console.log(`Server running at ${res.url} 🚀`));
