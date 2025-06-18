import { create } from "zustand";

interface AppState {
  currentSong: Song | null;
  isPlayListExpanded: boolean;
  playList: Song[];
  likedSongs: Song[];
  playLists: PlayList[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlayList: (song: Song) => void;
  removeFromPlayList: (song: Song) => void;
  likeSong: (song: Song) => void;
  unlikeSong: (song: Song) => void;
  addPlayList: (song: Song) => void;
  addSongToPlayList: (id: number, song: Song) => void;
}

export const useAppStore = create<AppState & Action>()((set) => ({
  currentSong: null,
  isPlayListExpanded: false,
  playList: [],
  likedSongs: [],
  playLists: [],
  setCurrentSong: (song: Song) => set({ currentSong: song }),
  togglePlayList: () =>
    set((state) => ({ isPlayListExpanded: !state.isPlayListExpanded })),
  addToPlayList: (song: Song) =>
    set((state) => ({ playList: [...state.playList, song] })),
  removeFromPlayList: (song: Song) =>
    set((state) => ({
      playList: state.playList.filter((s) => s.id !== song.id),
    })),
  likeSong: (song: Song) =>
    set((state) => ({ likedSongs: [...state.likedSongs, song] })),
  unlikeSong: (song: Song) =>
    set((state) => ({
      likedSongs: state.likedSongs.filter((s) => s.id !== song.id),
    })),
  addPlayList: (song: Song) =>
    set((state) => ({
      playLists: [
        ...state.playLists,
        { id: Date.now(), name: song.title, songs: [song] },
      ],
    })),
  addSongToPlayList: (id: number, song: Song) =>
    set((state) => ({
      playLists: state.playLists.map((playlist) =>
        playlist.id === id
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist
      ),
    })),
}));
