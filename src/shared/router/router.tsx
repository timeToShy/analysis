import { RouterProvider } from "react-router";

import { browserRouterConfig } from './config';

export const Router = () => <RouterProvider router={browserRouterConfig} />;