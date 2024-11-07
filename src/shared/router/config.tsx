import { createBrowserRouter } from 'react-router-dom';

import { StartPage } from '../../pages/start';
import { PageLayout } from '../ui/page-layout';
import { Routes } from './routes';

export const browserRouterConfig = createBrowserRouter(
  [
    {
      element: <PageLayout />,
      children: [
        {
          path: Routes.start,
          element: <StartPage />,
        },
        {
          path: Routes.sells,
          element: 'sells',
        },
        {
          path: Routes.predictions,
          element: 'predictions',
        },
        {
          path: Routes.orders,
          element: 'orders',
        },
      ],
    },
  ],
);