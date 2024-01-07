import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Credits, Main, Preparation } from './screens';

const queryClient = new QueryClient();
export const allRoutes = [
  { path: '/', element: <Main /> },
  { path: '/credits', element: <Credits /> },
  { path: '/preparation', element: <Preparation /> },
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
