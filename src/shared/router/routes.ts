export const Routes = {
  start: '/start',
  sells: '/sells',
  predictions: '/predictions',
  orders: '/orders',
};

export type Route = typeof Routes[keyof typeof Routes];