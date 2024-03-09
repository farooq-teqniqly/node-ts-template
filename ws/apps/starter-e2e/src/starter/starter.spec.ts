import axios from "axios";
import { expectedPlaylists } from "./data";
import { playlistsFeaturedQuery } from "./queries";

describe("query featured playlists /", () => {
  it("should return the featured playlists", async () => {
    const res = await axios.post("/graphql", playlistsFeaturedQuery);
    expect(res.status).toBe(200);
    expect(res.data.data.playlistsFeatured).toEqual(expectedPlaylists);
  });
});
