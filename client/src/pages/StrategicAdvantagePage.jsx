import React from 'react';
import ServiceLayout from '../components/common/ServiceLayout';

export default function StrategicAdvantagePage() {
  return (
    <ServiceLayout
      badge="Competitive Edge"
      title="Strategic Advantage"
      subtitle="The gains: Technology evaluation, assessment, and D&D services for market-specific applications."
      image="/images/carbon-transition.jpg"
      fallbackImage="/images/Pre-emitive-product.jpg"
    >
      <h2>Leapfrogging Legacy Powertrains</h2>
      <p>
        GYATK's patented RVCR technology delivers an overwhelming competitive advantage to mobility and energy OEMs across cost, packaging, efficiency, and regulatory compliance.
      </p>

      <h3>1. Compact Volumetric Packaging (~54% Envelope Reduction)</h3>
      <p>
        By eliminating the reciprocating stroke, long connecting rods, crankshaft counterweights, and overhead camshafts, an RVCR prime mover occupies less than half the space of a conventional multi-cylinder reciprocating engine of identical displacement. This creates game-changing space for passenger seating, cargo payload, or onboard hydrogen storage tanks.
      </p>

      <h3>2. Thermodynamic Efficiency (~30% Higher BTE)</h3>
      <p>
        Real-time dynamic compression matching prevents engine knock while continuously maximizing the thermodynamic expansion ratio. Combined with lower friction from rotary motion, RVCR delivers brake thermal efficiency gains of 20% to 30% over conventional internal combustion engines.
      </p>

      <h3>3. Dramatic Reduction in Component Count</h3>
      <p>
        Fewer moving components translate directly into lower frictional losses, simplified assembly lines, reduced assembly worker training overhead, and enhanced long-term mean-time-between-failure (MTBF) reliability in commercial fleet duty.
      </p>

      <h3>4. Formidable First-Mover IP Protection</h3>
      <p>
        With foundational patents secured across more than 50 countries, licensing partners enjoy a powerful defensive barrier against competitors, safeguarding long-term market leadership and pricing power.
      </p>
    </ServiceLayout>
  );
}
