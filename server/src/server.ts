import { McpServer } from "skybridge/server";
import { registerWidgets } from "./widgets-register";

const baseServer = new McpServer(
  {
    name: "mcp-ui-kit",
    version: "0.0.1",
  },
  { capabilities: {} }
);

// Register all widgets from the widgets register
const server = registerWidgets(baseServer);

export default server;
export type AppType = typeof server;
