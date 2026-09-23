import "@hackdanismo/component-library-react/component-library-react.css";
import { SectionIntro, PurchaseFlow } from "@hackdanismo/component-library-react";

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
        label: "Low cost service",
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
        label: "Fibre to the cabinet",
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
        label: "Fibre to the cabinet",
      },
    ],
  },
];

function App() {
  return (
    <main role="main" className="min-h-screen flex items-center justify-center">
      <section>
        <div class="container">
          <div class="py-10">
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
  )
}

export default App
