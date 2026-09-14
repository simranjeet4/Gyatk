import React from 'react';
import ServiceLayout from '../components/common/ServiceLayout';

export default function RVCRMarketPage() {
  return (
    <ServiceLayout
      badge="Market Horizons"
      title="RVCR Market"
      subtitle="Addressing Zero Carbon tech market demand: RVCR TAM covers the entire global transport and energy sector."
      image="/images/rvcr-market.png"
      fallbackImage="/images/energy-and-transport.jpg"
    >
      <h2>Addressing Multi-Billion Dollar Zero-Carbon Demand</h2>
      <p>
        The Total Addressable Market (TAM) for high-efficiency mechanical energy conversion spans the entirety of global transport, industrial fluid systems, and decentralized power generation.
      </p>

      <h3>Target Industry Verticals</h3>
      <ul>
        <li><strong>Commercial Road Transport:</strong> Long-haul freight trucks, intercity buses, and municipal transit fleets requiring continuous heavy-duty duty cycles without battery degradation or long charging pauses.</li>
        <li><strong>Marine & Coastal Waterways:</strong> Clean hybrid propulsion units and auxiliary gensets operating on bio-methane or green hydrogen to comply with IMO maritime carbon tax thresholds.</li>
        <li><strong>Off-Highway & Agriculture:</strong> Tractors, excavators, and construction machinery operating in remote zones where high torque and multi-fuel flexibility are mandatory.</li>
        <li><strong>Stationary Power Generation & Microgrids:</strong> Distributed backup gensets, combined heat and power (CHP) installations, and kinetic wind motor units.</li>
        <li><strong>Industrial Fluid Machinery:</strong> Positive-displacement industrial pumps, compressors, and high-pressure cryogenic fluid handling.</li>
      </ul>

      <h2>Global Regulatory Drivers</h2>
      <p>
        Accelerating mandates such as Euro 7 in Europe, Bharat Stage VI in India, and EPA Phase 3 in the United States leave fleet operators and manufacturers with no choice but to reduce emissions drastically. RVCR provides the most cost-effective and scalable pathway to full regulatory compliance.
      </p>
    </ServiceLayout>
  );
}
