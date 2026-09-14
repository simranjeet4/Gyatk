import React from 'react';
import ServiceLayout from '../components/common/ServiceLayout';

export default function PropositionPage() {
  return (
    <ServiceLayout
      badge="Strategic Proposition"
      title="Our Proposition"
      subtitle="Create newer markets of next-gen green machines. Tap into opportunities from RVCR technology and IPR to create new markets."
      image="/images/new-image.jpg"
      fallbackImage="/images/home-flowchart-1024x233-1.png"
    >
      <h2>Bridging the Fossil-to-Green Divide</h2>
      <p>
        The global automotive, freight, and energy industries face an existential challenge: comply with strict zero-emission mandates without destroying the trillions of dollars invested in internal combustion manufacturing infrastructure.
      </p>

      <h3>A Practical Mechanical Bridge</h3>
      <p>
        GYATK’s core proposition is providing an immediate engineering and licensing solution that allows equipment manufacturers to produce next-generation clean machines without abandoning their current capital equipment.
      </p>

      <ul>
        <li><strong>Manufacturing Infrastructure Compatibility:</strong> RVCR components are manufactured using standard metallurgical alloys and precision CNC machining centers already present in tier-1 automotive supplier factories.</li>
        <li><strong>Fuel-Agnostic Market Agility:</strong> Vehicles and gensets powered by RVCR engines can run cleanly on today's fossil fuel or CNG distribution networks, and switch immediately to green hydrogen or biofuels tomorrow.</li>
        <li><strong>Drastic Cost Optimization:</strong> By removing hundreds of reciprocating engine parts, overall bill-of-materials (BOM) cost drops significantly, offsetting the cost of clean fuel storage systems.</li>
      </ul>

      <h2>Commercial & Environmental ROI</h2>
      <p>
        Adopting RVCR enables early-moving OEMs to capture dominant market share in zero-carbon commercial transport, municipal transit, and off-grid power generation, backed by strong worldwide patent exclusivity.
      </p>
    </ServiceLayout>
  );
}
