import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
import SongCard from "@/presentionals/common/SongCard";
import PlayerWrapper from "@/presentionals/player/PlayerWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
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
