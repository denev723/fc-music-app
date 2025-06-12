import Section from "@/presentionals/common/Section";
import SongCard from "@/presentionals/common/SongCard";

interface Props {
  songs: Song[];
  title: string;
  moreLink: string;
}

export default function SectionPanel({ songs, title, moreLink }: Props) {
  return (
    <Section>
      <Section.Title className="flex justify-between items-center">
        <span>{title}</span>
        <a className="text-gray300 text-16 font-medium" href={moreLink}>
          All
        </a>
      </Section.Title>
      <Section.Content>
        <div className="flex gap-x-18">
          {songs?.map((song) => (
            <SongCard key={song.id} variant="vertical" className="shrink-0">
              <SongCard.Image
                src={"https://placehold.co/150"}
                alt={song.title}
              />
              <SongCard.Content>
                <SongCard.Title>{song.title}</SongCard.Title>
                <SongCard.Description>{song.artist}</SongCard.Description>
              </SongCard.Content>
            </SongCard>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
