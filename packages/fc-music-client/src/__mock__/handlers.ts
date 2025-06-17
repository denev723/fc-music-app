import { graphql, http, HttpResponse, passthrough } from "msw";

export const hanlders = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json<{ data: { songs: Song[] } }>({
      data: {
        songs: [
          {
            id: 1,
            title: "Song 1",
            album: {
              id: 1,
              title: "Album 1",
              artist: {
                id: 1,
                name: "Artist 1",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 1, name: "R&B" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
          },
          {
            id: 2,
            title: "Song 2",
            album: {
              id: 2,
              title: "Album 2",
              artist: {
                id: 2,
                name: "Artist 2",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 2, name: "Ballad" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
          },
          {
            id: 3,
            title: "Song 3",
            album: {
              id: 3,
              title: "Album 3",
              artist: {
                id: 3,
                name: "Artist 3",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 3, name: "Pop" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
          },
          {
            id: 4,
            title: "Song 4",
            album: {
              id: 4,
              title: "Album 4",
              artist: {
                id: 4,
                name: "Artist 4",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 4, name: "Jazz" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
          },
          {
            id: 5,
            title: "Song 5",
            album: {
              id: 5,
              title: "Album 5",
              artist: {
                id: 5,
                name: "Artist 5",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 5, name: "Hiphop" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
          },
          {
            id: 6,
            title: "Song 6",
            album: {
              id: 6,
              title: "Album 6",
              artist: {
                id: 6,
                name: "Artist 6",
              },
              thumbnail: "https://placehold.co/150",
            },
            genres: [{ id: 6, name: "Classic" }],
            path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
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
  http.get(/\/audio\/.*/, () => {
    return passthrough();
  }),
];
