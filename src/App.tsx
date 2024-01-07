import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Credits, Main, Preparation, TeaPartyScene } from './screens';

const queryClient = new QueryClient();
export const allRoutes = [
  { path: '/', element: <Main /> },
  { path: '/credits', element: <Credits /> },
  { path: '/preparation', element: <Preparation /> },
  { path: '/tea-party', element: <TeaPartyScene /> },
];
const router = createBrowserRouter(allRoutes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
