import { graphql, HttpResponse } from "msw";

export const hanlders = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json({
      errors: [
        {
          message: "Internal server error",
        },
      ],
    });
    // return HttpResponse.json({
    //   data: {
    //     songs: [
    //       {
    //         id: 1,
    //         title: "Song 1",
    //         artist: "Artist 1",
    //         genre: "rock",
    //       },
    //     ],
    //   },
    // });
  }),
];
