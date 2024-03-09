import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync, existsSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "@ws/resolvers";
import { SpotifyAPI } from "@ws/spotify";

let schemaPath = path.resolve(__dirname, "../../../libs/graphql-lib/src/lib/schema.graphql");

if (!existsSync(schemaPath)) {
  schemaPath = path.resolve(__dirname, "schema.graphql");
}

if (!existsSync(schemaPath)) {
  throw `GraphQL schema not found at ${schemaPath}`;
}

const typeDefs = gql(
  readFileSync(schemaPath, {
    encoding: "utf-8",
  }),
);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

export async function startApolloServer() {
  const server = new ApolloServer<{ dataSources: { spotifyAPI: SpotifyAPI } }>({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer<{ dataSources: { spotifyAPI: SpotifyAPI } }>(server, {
    listen: { port: port },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          spotifyAPI: new SpotifyAPI({ cache }),
        },
      };
    },
  });

  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

startApolloServer();
