import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/graphqlClient";

const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      album {
        artist {
          id
          name
        }
        id
        title
        thumbnail
      }
      genres
    }
  }
`;

export default function useGetSongs() {
  return useQuery({
    queryKey: ["songs"],
    queryFn: async () => {
      const data = await graphqlClient.request<{
        songs: Song[];
      }>(GET_SONGS);

      return data.songs;
    },
    throwOnError: true,
  });
}
