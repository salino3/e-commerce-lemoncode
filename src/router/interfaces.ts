export interface Routes {
  root: string;
  man: string;
  woman: string;
  info: string;
}

export const SwitchRoutes: Routes = {
  root: "/",
  man: "/man",
  woman: "/woman",
  info: "/info/:id",
};

export const { root, man, woman, info } = SwitchRoutes;
