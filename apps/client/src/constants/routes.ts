type RoutesNames = "home" | "search";

type AllRoutes = { [key in RoutesNames]: string };

export const ALL_ROUTES: AllRoutes = {
  home: "/home",
  search: "/search",
};
