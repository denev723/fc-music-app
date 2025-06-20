import PlayListContainer from "@/containers/home/PlayListContainer";
import AudioContainer from "@/containers/player/AudioContainer";
import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
import SliderPanel from "@/presentionals/common/SliderPanel";
import SectionPanel from "@/presentionals/home/SectionPanel";
import PlayerWrapper from "@/presentionals/player/PlayerWrapper";
import { useAppStore } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  const { currentSong, isPlayListExpanded } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
        <SliderPanel open={isPlayListExpanded}>
          <PlayListContainer />
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
  const { addToPlayList } = useAppStore();

  return (
    <SectionPanel
      songs={data ?? []}
      title="패캠을 위한 믹스 & 추천"
      moreLink="/"
      onItemClick={(song) => addToPlayList(song)}
    />
  );
}

export default App;
