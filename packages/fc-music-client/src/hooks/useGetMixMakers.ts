import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/graphqlClient";

const GET_MIX_MAKERS = gql`
  query GetMixMaker {
    mixMakers {
      id
      name
      description
      songs {
        id
        title
        album {
          id
          title
          artist {
            id
            name
          }
        }
      }
    }
  }
`;

export default function useMixMakers() {
  return useQuery({
    queryKey: ["mixMakers"],
    queryFn: async () => {
      const data = await graphqlClient.request<{
        mixMakers: MixMaker[];
      }>(GET_MIX_MAKERS);

      return data.mixMakers;
    },
    throwOnError: true,
  });
}
