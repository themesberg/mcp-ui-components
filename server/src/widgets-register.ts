import { McpServer } from "skybridge/server";
import { z } from "zod";

// Define widget configurations
const widgets = [
  {
    name: "magic-8-ball",
    metadata: {
      description: "Magic 8 Ball",
    },
    toolConfig: {
      description: "For fortune-telling or seeking advice.",
      inputSchema: {
        question: z.string().describe("The user question."),
      },
    },
    handler: async ({ question }: { question: string }) => {
      try {
        const answer = "Hello, world!";
        return {
          structuredContent: { answer },
          content: [],
          isError: false,
        };
      } catch (error) {
        return {
          content: [{ type: "text" as const, text: `Error: ${error}` }],
          isError: true,
        };
      }
    },
  },
  // Add more widgets here following the same structure
];

// Function to register all widgets with the server
export function registerWidgets(server: McpServer): McpServer {
  let registeredServer = server;
  
  for (const widget of widgets) {
    registeredServer = registeredServer.registerWidget(
      widget.name,
      widget.metadata,
      widget.toolConfig,
      widget.handler
    ) as McpServer;
  }
  
  return registeredServer;
}

export { widgets };
