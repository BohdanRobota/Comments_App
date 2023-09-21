import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouterNames {
  MAIN = '/',
  NOT_FOUND = '/not-found'
}

export const publicRoutes: IRoute[] = [
  { path: RouterNames.MAIN, component: MainPage },
  { path: RouterNames.NOT_FOUND, component: NotFound }
]

export const privateRoutes: IRoute[] = []