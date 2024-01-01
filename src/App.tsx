import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Character } from './models/Character';

const queryClient = new QueryClient();
export const allRoutes = [];
const router = createBrowserRouter(allRoutes);

const girl = new Character('Dina', 'girl-1', [], []);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <img src={girl.assets.smug} alt="smug" />
    </QueryClientProvider>
  );
}

export default App;
