import { create } from "zustand";

interface AppState {
  currentSong: Song | null;
  isPlayListExpanded: boolean;
  playList: Song[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlayList: (song: Song) => void;
  removeFromPlayList: (song: Song) => void;
}

export const useAppStore = create<AppState & Action>()((set) => ({
  currentSong: null,
  isPlayListExpanded: false,
  playList: [],
  setCurrentSong: (song: Song) => set({ currentSong: song }),
  togglePlayList: () =>
    set((state) => ({ isPlayListExpanded: !state.isPlayListExpanded })),
  addToPlayList: (song: Song) =>
    set((state) => ({ playList: [...state.playList, song] })),
  removeFromPlayList: (song: Song) =>
    set((state) => ({
      playList: state.playList.filter((s) => s.id !== song.id),
    })),
}));
