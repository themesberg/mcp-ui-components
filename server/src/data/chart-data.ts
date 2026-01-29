// Website traffic data by date range
export const websiteTrafficData = {
  "flowbite.com": {
    "last-24-hours": {
      categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      series: [
        { name: "Visitors", data: [320, 180, 450, 890, 1200, 980, 650] },
        { name: "Page Views", data: [850, 420, 1200, 2400, 3200, 2600, 1800] },
      ],
    },
    "last-7-days": {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        { name: "Visitors", data: [3200, 3800, 4100, 3900, 4500, 2800, 2100] },
        { name: "Page Views", data: [8500, 10200, 11000, 10500, 12000, 7500, 5600] },
      ],
    },
    "last-30-days": {
      categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
      series: [
        { name: "Visitors", data: [12500, 14200, 13800, 16500, 18200, 21000, 24500] },
        { name: "Page Views", data: [35000, 42000, 38500, 48000, 52000, 61000, 72000] },
      ],
    },
    "last-90-days": {
      categories: ["Month 1", "Month 2", "Month 3"],
      series: [
        { name: "Visitors", data: [45000, 52000, 68000] },
        { name: "Page Views", data: [125000, 148000, 195000] },
      ],
    },
    "last-year": {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { name: "Visitors", data: [42000, 45000, 52000, 58000, 62000, 68000, 75000, 82000, 89000, 95000, 102000, 115000] },
        { name: "Page Views", data: [115000, 125000, 145000, 162000, 175000, 192000, 210000, 230000, 250000, 268000, 290000, 325000] },
      ],
    },
  },
  "themesberg.com": {
    "last-24-hours": {
      categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      series: [
        { name: "Visitors", data: [180, 95, 280, 520, 680, 580, 420] },
        { name: "Page Views", data: [480, 250, 720, 1400, 1850, 1550, 1100] },
      ],
    },
    "last-7-days": {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        { name: "Visitors", data: [1800, 2100, 2400, 2200, 2600, 1600, 1200] },
        { name: "Page Views", data: [4800, 5600, 6400, 5900, 6900, 4300, 3200] },
      ],
    },
    "last-30-days": {
      categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
      series: [
        { name: "Visitors", data: [8200, 9100, 8800, 10500, 11200, 12800, 14200] },
        { name: "Page Views", data: [22000, 26000, 24500, 31000, 33000, 38000, 42000] },
      ],
    },
    "last-90-days": {
      categories: ["Month 1", "Month 2", "Month 3"],
      series: [
        { name: "Visitors", data: [28000, 32000, 42000] },
        { name: "Page Views", data: [78000, 92000, 120000] },
      ],
    },
    "last-year": {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { name: "Visitors", data: [25000, 27000, 31000, 35000, 38000, 42000, 46000, 50000, 54000, 58000, 62000, 68000] },
        { name: "Page Views", data: [68000, 74000, 86000, 96000, 105000, 116000, 128000, 140000, 150000, 162000, 174000, 190000] },
      ],
    },
  },
};

export type WebsiteKey = keyof typeof websiteTrafficData;
export type DateRangeKey = keyof typeof websiteTrafficData["flowbite.com"];
