import PlayListItem from "@/presentionals/home/PlayListItem";
import { useAppStore } from "@/store";

export default function PlayListContainer() {
  const { playList, setCurrentSong } = useAppStore();

  return (
    <div className="w-[522px] flex flex-col h-full">
      <h1 className="px-30 py-20 text-gray200 text-24 font-medium">재생목록</h1>
      <ul className="flex-1">
        {playList.length === 0 ? (
          <li className="flex items-center justify-center h-full">
            재생목록이 존재하지 않습니다.
          </li>
        ) : (
          playList.map((song) => (
            <PlayListItem
              key={song.id}
              song={song}
              onClick={(song) => setCurrentSong(song)}
            />
          ))
        )}
      </ul>
    </div>
  );
}
