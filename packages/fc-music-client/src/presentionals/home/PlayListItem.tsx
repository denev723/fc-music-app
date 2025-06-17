import SongCard from "@/presentionals/common/SongCard";

interface Props {
  song: Song;
  onClick: (song: Song) => void;
}

export default function PlayListItem({ song, onClick }: Props) {
  return (
    <li className="flex" onClick={() => onClick(song)}>
      <SongCard variant="horizontal">
        <SongCard.Image src={song.album.thumbnail} alt={song.album.title} />
        <SongCard.Content>
          <SongCard.Title>{song.title}</SongCard.Title>
          <SongCard.Description>{song.album.artist.name}</SongCard.Description>
        </SongCard.Content>
      </SongCard>
    </li>
  );
}
