import useGetSongs from "@/hooks/useGetSongs";
import ErrorFallback from "@/presentionals/common/ErrorFallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-red-100 w-full h-full">
        <h1>Hello World</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return <div>{data ? JSON.stringify(data) : "loading..."}</div>;
}

export default App;
