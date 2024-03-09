import axios from "axios";
import { expectedPlaylists, expectedPlaylistWithTracks } from "./data";
import { playlistsFeaturedQuery, playlistQuery } from "./queries";

describe("query featured playlists", () => {
  it("should return the featured playlists", async () => {
    const res = await axios.post("/graphql", playlistsFeaturedQuery);
    expect(res.status).toBe(200);
    expect(res.data.data.playlistsFeatured).toEqual(expectedPlaylists);
  });

  describe("query single playlist with tracks", () => {
    it("should return the playlist with its tracks", async () => {
      const res = await axios.post("/graphql", playlistQuery("6Fl8d6KF0O4V5kFdbzalfW"));
      expect(res.status).toBe(200);
      expect(res.data.data.playlist).toEqual(expectedPlaylistWithTracks);
    });
  });
});
