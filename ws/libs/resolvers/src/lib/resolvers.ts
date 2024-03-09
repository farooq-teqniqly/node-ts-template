import { Resolvers } from "@ws/graphql-lib";

export const resolvers: Resolvers = {
  Query: {
    playlistsFeatured: (_, __, { dataSources }) => dataSources.spotifyAPI.getFeaturedPlaylists(),
    playlist: (_, { id }, { dataSources }) => dataSources.spotifyAPI.getPlaylist(id),
  },
  Playlist: {
    tracks: ({ tracks }) => {
      const { items = [] } = tracks;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (items as any[]).map(({ track }) => track);
    },
  },
  Track: {
    durationMs: (parent) => parent.duration_ms,
  },
};
