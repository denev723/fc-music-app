import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    genres: async () => prisma.genre.findMany(),
    artists: async () =>
      prisma.artist.findMany({
        include: { albums: true },
      }),
    artist: async (_: any, { id }: { id: string }) => {
      const artist = await prisma.artist.findUnique({
        where: {
          id: parseInt(id),
        },
        include: { albums: true },
      });

      return artist;
    },
    songs: async () =>
      prisma.song.findMany({
        include: {
          genres: true,
          album: {
            include: {
              artist: true,
            },
          },
          tags: true,
        },
      }),
    albums: async () =>
      prisma.album.findMany({
        include: { artist: true, songs: true },
      }),
    mixMakers: async () =>
      prisma.mixMaker.findMany({
        include: {
          songs: {
            include: {
              genres: true,
              album: {
                include: { artist: true },
              },
            },
          },
        },
      }),
    tags: async () =>
      prisma.tag.findMany({
        include: {
          songs: true,
        },
      }),
  },
  Mutation: {
    addGenre: async (_: any, { name }: { name: string }) => {
      const genre = await prisma.genre.create({
        data: { name },
      });

      return genre;
    },
    addArtist: async (_: any, { name }: { name: string }) => {
      const artist = await prisma.artist.create({
        data: { name },
      });

      return artist;
    },
    addSong: async (
      _: any,
      {
        title,
        albumId,
        genreIds,
        path,
      }: { title: string; albumId: string; genreIds: string[]; path: string }
    ) => {
      const song = await prisma.song.create({
        data: {
          title,
          album: {
            connect: {
              id: parseInt(albumId),
            },
          },
          genres: {
            connect: genreIds.map((id) => ({ id: parseInt(id) })),
          },
          path,
        },
        include: {
          genres: true,
          album: true,
        },
      });

      return song;
    },
    addAlbum: async (
      _: any,
      {
        title,
        artistId,
        releaseDate,
        thumbnail,
      }: {
        title: string;
        artistId: string;
        releaseDate: string;
        thumbnail: string;
      }
    ) => {
      const artist = await prisma.artist.findUnique({
        where: {
          id: parseInt(artistId),
        },
      });

      if (!artist) {
        throw new Error("Artist not found");
      }

      const album = await prisma.album.create({
        data: {
          title,
          artist: {
            connect: {
              id: parseInt(artistId),
            },
          },
          releaseDate: new Date(releaseDate),
          thumbnail,
        },
        include: {
          artist: true,
        },
      });

      return album;
    },
    addMixMaker: async (
      _: any,
      {
        name,
        description,
        songIds,
      }: {
        name: string;
        description: string;
        songIds: string[];
      }
    ) => {
      const mixMaker = await prisma.mixMaker.create({
        data: {
          name,
          description,
          songs: { connect: songIds.map((id) => ({ id: parseInt(id) })) },
        },
        include: { songs: true },
      });
      return mixMaker;
    },
    addTag: async (
      _: any,
      { name, songIds }: { name: string; songIds: string[] }
    ) => {
      const tag = await prisma.tag.create({
        data: {
          name,
          songs: songIds
            ? { connect: songIds.map((id) => ({ id: parseInt(id) })) }
            : undefined,
        },
        include: {
          songs: true,
        },
      });

      return tag;
    },
    addTagToSong: async (
      _: any,
      { tagId, songId }: { tagId: string; songId: string }
    ) => {
      const song = await prisma.song.update({
        where: { id: parseInt(songId) },
        data: {
          tags: {
            connect: { id: parseInt(tagId) },
          },
        },
        include: {
          tags: true,
        },
      });

      return song;
    },
  },
};
