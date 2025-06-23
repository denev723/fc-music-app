import { gql } from "apollo-server";

export const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    albums: [Album!]
  }

  type Album {
    id: ID!
    title: String!
    artist: Artist!
    thumbnail: String!
    songs: [Song!]
  }

  type Song {
    id: ID!
    title: String!
    path: String!
    genres: [Genre!]!
    album: Album!
  }

  type Genre {
    id: ID!
    name: String!
  }

  type MixMaker {
    id: ID!
    name: String!
    description: String!
    songs: [Song!]
  }

  type Query {
    genres: [Genre!]!
    artists: [Artist!]!
    artist(id: ID!): Artist
    songs: [Song!]!
    albums: [Album!]!
    mixMakers: [MixMaker!]!
  }

  type Mutation {
    addGenre(name: String!): Genre!
    addArtist(name: String!): Artist!
    addSong(
      title: String!
      albumId: ID!
      genreIds: [ID!]!
      path: String!
    ): Song!
    addAlbum(
      title: String!
      artistId: ID!
      releaseDate: String!
      thumbnail: String!
    ): Album!
    addMixMaker(name: String!, description: String!, songIds: [ID!]!): MixMaker!
  }
`;
