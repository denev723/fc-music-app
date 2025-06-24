import MixMakerContainer from "@/containers/home/MixMakerContainer";
import PlayListContainer from "@/containers/home/PlayListContainer";
import AudioContainer from "@/containers/player/AudioContainer";
import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
import SliderPanel from "@/presentionals/common/SliderPanel";
import RecommendationsContainer from "@/presentionals/home/RecommendationsContainer";
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
          <MixMakerContainer />
          <RecommendationsContainer />
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
  const { addToPlaylist } = useAppStore();

  return (
    <SectionPanel
      songs={data ?? []}
      title="패캠을 위한 믹스 & 추천"
      moreLink="/"
      onItemClick={(song) => addToPlaylist([song])}
    />
  );
}

export default App;
