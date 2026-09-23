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
    featuresTitle: "ADSL FEATURES",
    features: [
      {
        label: "Download speeds up to 20Mbps",
      },
      {
        label: "Low cost service",
      },
      {
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
    featuresTitle: "SoGEA FEATURES",
    features: [
      {
        label: "Download speeds up to 80Mbps",
      },
      {
        label: "Fibre to the cabinet",
      },
      {
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
    featuresTitle: "Ultrafast Fibre Features",
    features: [
      {
        label: "Download speeds up to 1Gbps",
      },
      {
        label: "Dedicated fibre to the premises",
      },
      {
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