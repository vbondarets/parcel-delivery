/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { MainRouter } from './modules/navigation';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnReconnect: true,
        cacheTime: Number.POSITIVE_INFINITY
      }
    },
    queryCache: new QueryCache({
      onError: async (error: any, query) => {
        if (query.state.data !== undefined) {
          console.error(`Something went wrong: ${error.message}`);
        }
        if (error.response) {
          console.log(error.response.status, '🟡 query');
        }
      }
    })
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
