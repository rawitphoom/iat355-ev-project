// ============================
// BC EV + Charging Line Chart (Vega-Lite prototype)
// ============================

const bcData = [
  { year: 2017, ev: 20000, stations: 500 },
  { year: 2018, ev: 45000, stations: 700 },
  { year: 2019, ev: 90000, stations: 950 },
  { year: 2020, ev: 150000, stations: 1400 },
  { year: 2021, ev: 250000, stations: 2100 },
  { year: 2022, ev: 330000, stations: 2800 },
  { year: 2023, ev: 430000, stations: 3700 },
  { year: 2024, ev: 520000, stations: 5300 }
];

const bcLineSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 800,
  height: 300,
  data: { values: bcData },
  layer: [
    {
      mark: { type: "line", point: true },
      encoding: {
        x: { field: "year", type: "ordinal", title: "Year" },
        y: {
          field: "ev",
          type: "quantitative",
          title: "EV Registrations"
        },
        color: { value: "#22c55e" } // green
      }
    },
    {
      mark: { type: "line", point: true },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: {
          field: "stations",
          type: "quantitative",
          title: "Charging Stations"
        },
        color: { value: "#3b82f6" } // blue
      }
    }
  ],
  resolve: {
    scale: { y: "independent" } // separate y-axes
  }
};

vegaEmbed("#bc-line-chart", bcLineSpec, { actions: false });

// ============================
// Battery vs Hybrid Bar Chart
// ============================

const barData = [
  { year: 2017, type: "Battery electric", value: 20000 },
  { year: 2017, type: "Hybrid electric", value: 100000 },
  { year: 2018, type: "Battery electric", value: 40000 },
  { year: 2018, type: "Hybrid electric", value: 120000 },
  { year: 2019, type: "Battery electric", value: 60000 },
  { year: 2019, type: "Hybrid electric", value: 140000 },
  { year: 2020, type: "Battery electric", value: 90000 },
  { year: 2020, type: "Hybrid electric", value: 170000 },
  { year: 2021, type: "Battery electric", value: 130000 },
  { year: 2021, type: "Hybrid electric", value: 200000 },
  { year: 2022, type: "Battery electric", value: 180000 },
  { year: 2022, type: "Hybrid electric", value: 230000 },
  { year: 2023, type: "Battery electric", value: 230000 },
  { year: 2023, type: "Hybrid electric", value: 260000 },
  { year: 2024, type: "Battery electric", value: 280000 },
  { year: 2024, type: "Hybrid electric", value: 300000 }
];

const barSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 380,
  height: 260,
  data: { values: barData },
  mark: "bar",
  encoding: {
    x: { field: "year", type: "ordinal", title: "Year" },
    y: { field: "value", type: "quantitative", title: "Number of Vehicles" },
    color: {
      field: "type",
      type: "nominal",
      title: "Fuel Type",
      scale: { range: ["#22c55e", "#f59e0b"] }
    }
  }
};

vegaEmbed("#battery-hybrid-chart", barSpec, { actions: false });
