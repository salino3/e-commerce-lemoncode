export interface Routes {
  root: string;
  man: string;
  woman: string;
  product: string;
}

export const SwitchRoutes: Routes = {
  root: "/",
  man: "/man",
  woman: "/woman",
  product: "product",
};

export const { root, man, woman, product } = SwitchRoutes;
