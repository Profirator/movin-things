import { Config } from "@stencil/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import devvars from "./devsecrets.json";
export const config: Config = {
  namespace: "MovinThings",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  env: {
    DEVHEADER: devvars.DEVHEADER,
    DEVVALUE: devvars.DEVVALUE,
    DEVTENANTS: devvars.DEVTENANTS,
    DEVBACKEND: devvars.DEVBACKEND,
  },
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/",
    },
    {
      type: "dist",
    },
  ],
};