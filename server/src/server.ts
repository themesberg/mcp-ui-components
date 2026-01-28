import { McpServer } from "skybridge/server";
import { basicAnswerWidget } from "./widgets/basic-answer-server";

const server = new McpServer(
  {
    name: "mcp-ui-kit",
    version: "0.0.1",
  },
  { capabilities: {} }
).registerWidget(
  basicAnswerWidget.name,
  basicAnswerWidget.metadata,
  basicAnswerWidget.toolConfig,
  basicAnswerWidget.handler
);
// Chain more widgets here: .registerWidget(anotherWidget.name, ...)

export default server;
export type AppType = typeof server;
