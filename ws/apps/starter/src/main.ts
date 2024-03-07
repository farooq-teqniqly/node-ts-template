import * as path from "path";
import { readFileSync } from "fs";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = gql(
  readFileSync(path.resolve("./apps/starter/src/schema.graphql"), {
    encoding: "utf-8",
  }),
);

const mocks = {
  Query: () => ({
    playlistsFeatured: () => [...new Array(6)],
  }),
  Playlist: () => ({
    id: () => "playlist01",
    name: () => "Groovin' with GraphQL",
    description: () =>
      "Serving up the hottest development hits, Groovin' with GraphQL has everything you need to get into the coding mindspace... and stay there!",
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });

  const { url } = await startStandaloneServer(server);

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
