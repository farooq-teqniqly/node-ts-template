import { SpotifyAPI } from "@ws/spotify";

export type DataSourceContext = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
};
