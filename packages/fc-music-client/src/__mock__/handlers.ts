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
          {
            id: 2,
            title: "Song 2",
            artist: "Artist 2",
            genre: "ballad",
          },
          {
            id: 3,
            title: "Song 3",
            artist: "Artist 3",
            genre: "pop",
          },
          {
            id: 4,
            title: "Song 4",
            artist: "Artist 4",
            genre: "jazz",
          },
          {
            id: 5,
            title: "Song 5",
            artist: "Artist 5",
            genre: "hiphop",
          },
          {
            id: 6,
            title: "Song 6",
            artist: "Artist 6",
            genre: "classic",
          },
        ],
      },
    });
    // return HttpResponse.json({
    //   errors: [
    //     {
    //       message: "Internal server error",
    //     },
    //   ],
    // });
  }),
];
