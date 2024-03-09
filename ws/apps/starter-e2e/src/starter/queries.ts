export const playlistsFeaturedQuery = {
  query: `{
      playlistsFeatured {
        id
        name
        description
      }
    }`,
};

export const playlistQuery = (id: string) => {
  return {
    query: `{
      playlist(id: "${id}") {
        id
        name
        description
        tracks {
          id
          name
          explicit
          durationMs
          uri
        }
      }
    }`,
  };
};
