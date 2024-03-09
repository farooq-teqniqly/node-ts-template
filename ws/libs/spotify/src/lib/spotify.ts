import { RESTDataSource } from "@apollo/datasource-rest";
import { PlaylistModel } from "@ws/graphql-lib";

export class SpotifyAPI extends RESTDataSource {
  baseURL = "https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/";

  async getFeaturedPlaylists(): Promise<PlaylistModel[]> {
    const response = await this.get<{ playlists: { items: PlaylistModel[] } }>(
      "browse/featured-playlists",
    );
    return response?.playlists?.items ?? [];
  }

  async getPlaylist(id: string): Promise<PlaylistModel> {
    return this.get(`playlists/${id}`);
  }
}
