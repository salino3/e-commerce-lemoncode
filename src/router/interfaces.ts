export interface Routes {
  root: string;
  man: string;
  woman: string;
  product: string;
  cart: string;
}

export const SwitchRoutes: Routes = {
  root: "/",
  man: "/man",
  woman: "/woman",
  product: "product",
  cart: "/cart"
};

export const { root, man, woman, product, cart } = SwitchRoutes;
