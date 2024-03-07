import { spotify } from "./spotify";

describe("spotify", () => {
  it("should work", () => {
    expect(spotify()).toEqual("spotify");
  });
});
