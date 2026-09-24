import "@hackdanismo/component-library-react/component-library-react.css";
import {
  SectionIntro,
  PurchaseFlow,
} from "@hackdanismo/component-library-react";

const packages = [
  {
    id: "adsl",
    name: "ADSL broadband",
    title: "ADSL",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 9.99,
    secondaryActionLabel: "Explore ADSL",
    featuresTitle: "ADSL FEATURES",
    features: [
      {
        id: "speed",
        label: "Download speeds up to 20Mbps",
        highlighted: true,
      },
      {
        id: "cost",
        label: "Low cost service",
      },
      {
        id: "coverage",
        label: "Over 99% UK coverage",
      },
    ],
  },
  {
    id: "sogea",
    name: "SoGEA broadband",
    title: "SoGEA",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 24.95,
    secondaryActionLabel: "Explore SoGEA",
    featuresTitle: "SoGEA FEATURES",
    features: [
      {
        id: "speed",
        label: "Download speeds up to 80Mbps",
        highlighted: true,
      },
      {
        id: "cabinet",
        label: "Fibre to the cabinet",
      },
      {
        id: "coverage",
        label: "95% UK coverage",
      },
    ],
  },
  {
    id: "ultrafast",
    name: "Ultrafast fibre",
    title: "Ultrafast fibre",
    accentText: "",
    connectionFee: 0,
    monthlyPrice: 26.95,
    secondaryActionLabel: "Explore Fibre",
    featuresTitle: "Ultrafast Fibre Features",
    features: [
      {
        id: "speed",
        label: "Download speeds up to 1Gbps",
        highlighted: true,
      },
      {
        id: "dedicated",
        label: "Dedicated fibre to the premises",
      },
      {
        id: "fastest",
        label: "Fastest broadband available",
      },
    ],
  },
];

function App() {
  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center"
    >
      <section>
        <div className="container">
          <div className="py-10">
            <SectionIntro
              title="Business Broadband"
              subtitle="Choosing the right type of internet broadband to support your business..."
              description="Our fast and reliable connections keep you operating at all times. And when it comes to connectivity, the faster the better right?"
              secondaryDescription="Our team of business broadband specialists are here to deliver the right network and internet solutions for your business."
            />
          </div>

          <PurchaseFlow
            packages={packages}
            columns={3}
          />
        </div>
      </section>
    </main>
  );
}

export default App;