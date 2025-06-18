import PlayListItem from "@/presentionals/home/PlayListItem";
import { useAppStore } from "@/store";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export default function PlayListContainer() {
  const {
    playList,
    playLists,
    setCurrentSong,
    removeFromPlayList,
    addPlayList,
    addSongToPlayList,
    likeSong,
    setPlayList,
  } = useAppStore();

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(playList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlayList(items);
  };

  return (
    <div className="w-[522px] flex flex-col h-full">
      <h1 className="px-30 py-20 text-gray200 text-24 font-medium">재생목록</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="playList_1">
          {(provided) => (
            <ul
              className="flex-1 flex flex-col"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {playList.length === 0 ? (
                <li className="flex items-center justify-center h-full">
                  재생목록이 존재하지 않습니다.
                </li>
              ) : (
                playList.map((song, index) => (
                  <Draggable
                    key={song.id}
                    draggableId={`${song.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <PlayListItem
                          song={song}
                          playlists={playLists}
                          onClick={(song) => setCurrentSong(song)}
                          onRemoveFromPlaylist={(song) =>
                            removeFromPlayList(song)
                          }
                          onAddPlayList={addPlayList}
                          onAddSongToPlayList={addSongToPlayList}
                          onLikeSong={likeSong}
                        />
                      </li>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
