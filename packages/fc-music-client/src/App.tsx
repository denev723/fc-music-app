import AudioContainer from "@/containers/player/AudioContainer";
import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
import SliderPanel from "@/presentionals/common/SliderPanel";
import SectionPanel from "@/presentionals/home/SectionPanel";
import PlayerWrapper from "@/presentionals/player/PlayerWrapper";
import { useAppStore } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const { currentSong, setCurrentSong } = useAppStore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setCurrentSong({
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      genre: "R&B",
      path: "http://localhost:4000/audio/read-your-mind-ft-jason-walker-by-atch.mp3",
    });
  }, [setCurrentSong]);

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
      <PlayerWrapper>
        <AudioContainer src={currentSong?.path} />
      </PlayerWrapper>
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return (
    <SectionPanel
      songs={data ?? []}
      title="패캠을 위한 믹스 & 추천"
      moreLink="/"
    />
  );
}

export default App;
