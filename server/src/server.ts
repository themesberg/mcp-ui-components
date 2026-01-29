import { McpServer } from "skybridge/server";
import { basicTextWidget } from "./widgets/basic-text-server";
import { checkboxOptionsWidget } from "./widgets/checkbox-options-server";
import { dataTableWidget } from "./widgets/data-table-server";
import { ecomCarouselWidget } from "./widgets/e-commerce-server";
import { flowbiteCtaWidget } from "./widgets/flowbite-cta-server";
import { lineChartWidget } from "./widgets/line-chart-server";
import { qrCodeWidget } from "./widgets/qr-code-server";
import { radioOptionsWidget } from "./widgets/radio-options-server";

const server = new McpServer(
  {
    name: "mcp-ui-kit",
    version: "0.0.1",
  },
  { capabilities: {} }
)
  .registerWidget(
    basicTextWidget.name,
    basicTextWidget.metadata,
    basicTextWidget.toolConfig,
    basicTextWidget.handler
  )
  .registerWidget(
    radioOptionsWidget.name,
    radioOptionsWidget.metadata,
    radioOptionsWidget.toolConfig,
    radioOptionsWidget.handler
  )
  .registerWidget(
    checkboxOptionsWidget.name,
    checkboxOptionsWidget.metadata,
    checkboxOptionsWidget.toolConfig,
    checkboxOptionsWidget.handler
  )
  .registerWidget(
    ecomCarouselWidget.name,
    ecomCarouselWidget.metadata,
    ecomCarouselWidget.toolConfig,
    ecomCarouselWidget.handler
  )
  .registerWidget(
    lineChartWidget.name,
    lineChartWidget.metadata,
    lineChartWidget.toolConfig,
    lineChartWidget.handler
  )
  .registerWidget(
    dataTableWidget.name,
    dataTableWidget.metadata,
    dataTableWidget.toolConfig,
    dataTableWidget.handler
  )
  .registerWidget(
    qrCodeWidget.name,
    qrCodeWidget.metadata,
    qrCodeWidget.toolConfig,
    qrCodeWidget.handler
  )
  .registerWidget(
    flowbiteCtaWidget.name,
    flowbiteCtaWidget.metadata,
    flowbiteCtaWidget.toolConfig,
    flowbiteCtaWidget.handler
  );

export default server;
export type AppType = typeof server;
