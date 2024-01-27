enum Routes {
  dashboard = "/",
  chess = "/chess",
  dota = "/dota",
  dotaHero = "/dota/hero/",
}

const sidebarRoutes = [
  {
    id: 1,
    label: "Dashboard",
    url: Routes.dashboard,
  },
  {
    id: 2,
    label: "Chess",
    url: Routes.chess,
  },
  {
    id: 3,
    label: "Dota",
    url: Routes.dota,
  },
];

export { Routes, sidebarRoutes };
