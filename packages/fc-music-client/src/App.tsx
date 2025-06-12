import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
import SliderPanel from "@/presentionals/common/SliderPanel";
import SongCard from "@/presentionals/common/SongCard";
import PlayerWrapper from "@/presentionals/player/PlayerWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <button onClick={handleOpen}>Open</button>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
        <SliderPanel open={open} onClose={handleClose}>
          <div className="w-[300px]">
            <h1>재생목록</h1>
          </div>
        </SliderPanel>
      </RootLayout>
      <PlayerWrapper />
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return (
    <div className="flex gap-x-20">
      {data?.map((song) => (
        <SongCard key={song.id}>
          <SongCard.Image src={"https://placehold.co/150"} alt={song.title} />
          <SongCard.Content>
            <SongCard.Title>{song.title}</SongCard.Title>
            <SongCard.Description>{song.artist}</SongCard.Description>
          </SongCard.Content>
        </SongCard>
      ))}
    </div>
  );
}

export default App;
