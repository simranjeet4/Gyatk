import React from 'react';
import ServiceLayout from '../components/common/ServiceLayout';

export default function RVCRBusinessCasePage() {
  return (
    <ServiceLayout
      badge="Commercial Viability"
      title="RVCR Business Case"
      subtitle="Creating newer markets: Developing the business case for RVCR pilot product commercialization."
      image="/images/engine-with-bg.png"
      fallbackImage="/images/technical-operation-management.jpg"
    >
      <h2>The Economics of Clean Mechanical Disruption</h2>
      <p>
        Adopting new powertrain technology must make economic sense from Day One. GYATK builds rigorous business cases that prove the commercial viability, rapid payback, and de-risked rollout of RVCR systems for OEMs and institutional investors.
      </p>

      <h3>1. CAPEX Minimization & Supply Chain Compatibility</h3>
      <p>
        Unlike alternative clean architectures that demand specialized factory retooling or exotic rare-earth materials, RVCR engines are manufactured using standard engineering steels, aluminum alloys, and conventional automotive machining equipment. Tooling amortizations are minimal, enabling rapid integration into existing product lines.
      </p>

      <h3>2. OPEX Reductions via Dynamic Fuel Arbitrage</h3>
      <p>
        Commercial fleet operators can switch dynamically between fuel types depending on price and regional availability—running on low-cost CNG or diesel during transit, and switching to clean biofuels or green hydrogen when entering zero-emission urban corridors.
      </p>

      <h3>3. Special Purpose Vehicle (SPV) Frameworks</h3>
      <p>
        GYATK structures SPVs for specific pilot commercialization programs. This isolates financial and development risk, attracts targeted private equity and clean-tech venture funding, and provides a clear equity path for all stakeholder partners.
      </p>

      <h3>4. Fast-Track Time-to-Market</h3>
      <p>
        With working Detroit prototypes and validated kinematic mathematical models, client engineering programs move quickly through TRL milestones to road-ready verification in compressed timelines.
      </p>
    </ServiceLayout>
  );
}
