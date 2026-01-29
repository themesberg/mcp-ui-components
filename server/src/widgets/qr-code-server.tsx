import { z } from "zod";

// QR Code widget configuration
export const qrCodeWidget = {
  name: "qr-code" as const,
  metadata: {
    description: "QR Code Generator",
  },
  toolConfig: {
    description: "Generate a QR code from a URL or text.",
    inputSchema: {
      link: z.string().describe("The URL or text to encode in the QR code"),
    },
  },
  handler: async ({ link }: { link: string }) => {
    try {
      return {
        structuredContent: { link },
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
