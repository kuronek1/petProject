enum Routes {
  dashboard = "/",
  chess = "/chess",
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
];

export { Routes, sidebarRoutes };
