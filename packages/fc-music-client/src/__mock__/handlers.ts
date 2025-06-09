import { graphql, HttpResponse } from "msw";

export const hanlders = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json({
      data: {
        songs: [
          {
            id: 1,
            title: "Song 1",
            artist: "Artist 1",
            genre: "rock",
          },
        ],
      },
    });
  }),
];
