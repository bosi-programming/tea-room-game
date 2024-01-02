import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainScreen } from './screens/MainScreen';
import { PreparationScreen } from './screens/PreparationScreen';

const queryClient = new QueryClient();
export const allRoutes = [
  { path: '/', element: <MainScreen /> },
  { path: '/preparation', element: <PreparationScreen /> },
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
