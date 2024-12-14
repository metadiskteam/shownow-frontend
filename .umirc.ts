import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/login",
      component: "@/layouts/LoginLayout",
      layout: false,
      routes: [
        {
          path: "",
          component: "@/pages/index",
        },
      ],
    },
    {
      path: "/",
      component: "@/layouts/index",
      wrappers: ["@/wrappers/auth"],
      layout: false,
      routes: [
        { path: "", component: "@/pages/home" },
        { path: "home", component: "@/pages/home" },
        { path: "follow", component: "@/pages/follow" },
        { path: "profile", component: "@/pages/profile" },
        { path: "profile/:address", component: "@/pages/profile" },
        { path: "tweet/:id", component: "@/pages/tweet" },
        { path: "setting", component: "@/pages/setting" },
      ],
    },
    {
      path: "/dashboardLogin",
      component: "@/pages/dashboard/login",
      layout: false,
    },
    {
      path: "/dashboard",
      component: "@/layouts/dashboard",
      layout: false,
      routes: [
        { path: "/dashboard/styles", component: "@/pages/dashboard/styles" },
        { path: "/dashboard/fees", component: "@/pages/dashboard/fees" },
        { path: "/dashboard/rpc", component: "@/pages/dashboard/rpc" },
      ],
    },
  ],

  plugins: [
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/request",
    "@umijs/plugins/dist/locale",
  ],
  locale: {
    default: "en-US",
    baseSeparator: "-",
    antd: true,
    baseNavigator: false,
  },
  model: {},
  request: {},
  npmClient: "pnpm",
  outputPath: "../server-shownow/public",
  // process.env.BUILD_ENV === "docker" ? "../server-shownow/public" : "dist",
  esbuildMinifyIIFE: true,
  jsMinifier: "none",
  favicons: ["/favicon.ico"],
});