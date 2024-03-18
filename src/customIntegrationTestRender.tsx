import { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { allRoutes } from './App';

const queryClient = new QueryClient();
export let routerListener: ReturnType<typeof createMemoryRouter>;

function AllTheProviders({ initialRoute }: { initialRoute: string }) {
  routerListener = createMemoryRouter(allRoutes, {
    initialEntries: [initialRoute],
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerListener} />
    </QueryClientProvider>
  );
}

export const customIntegrationTestRender = (
  ui: ReactElement,
  initialRoute = '/',
  options?: RenderOptions,
) =>
  render(ui, {
    wrapper: () => <AllTheProviders initialRoute={initialRoute} />,
    ...options,
  });

export * from '@testing-library/react';
