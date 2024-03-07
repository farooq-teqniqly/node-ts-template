import { Resolvers } from "@ws/graphql-lib";

export const resolvers: Resolvers = {
  Query: {
    playlistsFeatured: (_, __, { dataSources }) => dataSources.spotifyAPI.getFeaturedPlaylists(),
  },
};
