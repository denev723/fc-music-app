import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import RootLayout from "@/presentionals/common/RootLayout";
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

  return <div>{data ? JSON.stringify(data) : "loading..."}</div>;
}

export default App;
