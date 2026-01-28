import { z } from "zod";

// Basic Answer widget configuration
export const basicAnswerWidget = {
  name: "basic-answer" as const,
  metadata: {
    description: "Basic Answer",
  },
  toolConfig: {
    description: "Show an answer to a question.",
    inputSchema: {
      question: z.string().describe("The user's question."),
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
};