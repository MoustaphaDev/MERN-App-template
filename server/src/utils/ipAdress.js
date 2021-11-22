import { networkInterfaces } from "os";
export const getIpAddress = () =>
  []
    .concat(...Object.values(networkInterfaces()))
    .find((x) => !x.internal && x.family === "IPv4")?.address;
