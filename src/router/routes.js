const routes = [
  {
    path: "/",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/settings", component: () => import("pages/PageSettings.vue") },
      { path: "/customer", component: () => import("pages/CustomerPage.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
