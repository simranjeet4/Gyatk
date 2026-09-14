import React from 'react';
import { Check, Layers, Cpu, Compass, Users } from 'lucide-react';
import './RVCRMarketPage.css';

export default function RVCRMarketPage() {
  const headsList = [
    "Market spread. TAM SAM SOM.",
    "Market Barriers and entry method.",
    "Price point analysis.",
    "Pricing and structuring",
    "Customer analysis.",
    "Trends; Competition overview."
  ];

  const consumerCategories = [
    "Private sector and public sector OEMs of any RVCR application (Auto sector, tractor, Railway, mining OEMs, Power sector, Agri equipment)",
    "Fluid handlers and fluid equipment handlers like OEMs in pump, compressors, metering devices and hydraulics",
    "Specialised fluid handlers like Oil rigs, refineries and chemical plants",
    "Bio medical, Bio chemical handlers",
    "Autonomous research organisations / Space organisations using hydraulic systems",
    "Government organisations (Defence applications & Aerospace)"
  ];

  return (
    <div className="rvcr-market-root">
      {/* 1. Hero Section */}
      <section className="market-hero">
        <div className="market-hero-overlay"></div>
        <div className="container market-hero-container">
          <h1 className="market-hero-title">RVCR Technology Ecosystem</h1>
          <p className="market-hero-subtitle">
            The unprecedented climate challenge needs is beyond the scope of conventional innovations RVCR enables OEM’s with newer long term strategies for Zero Carbon Technologies.
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="market-section overview-section">
        <div className="container">
          <h2 className="section-title">RVCR Market Overview</h2>
          <div className="overview-text-grid">
            <p className="overview-p">
              The New Generation RVCR Technology Machine systems are for transport energy industry players and OEM’s. It enhances the Client’s product line and making it the most attractive option available in the market. The RVCR Products demand is dependent on the end-Product demand and its Drivers and Dynamics.
            </p>
            <p className="overview-p">
              The ‘Total Addressable Market’ covers the entire range of applications of RVCR Technology is massive. The applications are classed in an easy to grasp Hierarchy and represented in a tree Model. It starts with the primary application aspect of the application being either a ‘Driving’ (Prime-Mover/Motor) type or a ‘Driven’ (Pumping) type and then are further classified.
            </p>
            <p className="overview-p highlight-p">
              The Zero Carbon Technology demand among Sector & Industry verticals is segment specific. We engage 3rd party market analyst and experts for Survey, analysis, and evaluation.
            </p>
          </div>

          {/* 3. The various heads include Card */}
          <div className="heads-card-box">
            <h3 className="heads-card-title">The various heads include:</h3>
            <div className="heads-grid">
              {headsList.map((head, idx) => (
                <div key={idx} className="head-item">
                  <div className="head-check-icon">
                    <Check size={18} />
                  </div>
                  <span>{head}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Creating Newer Markets */}
      <section className="market-section newer-markets-section">
        <div className="container">
          <div className="newer-markets-card">
            <h2 className="section-title white-title">Creating Newer markets</h2>
            <p className="newer-markets-p">
              RVCR technology prime-mover would replace today’s products and shall alter the markets and its demands. The RVCR Prime-Mover not just make the conventional prime-movers obsolete but adds new features which addresses differing market needs by a single product. The newer features (like multifuel-flexibility in I.C.Engine application caters to both petrol or diesel Engine segments) address across segment requirements, hence RVCR mergers conventional market segments creating newer markets. Segment specific markets are dealt under specific application development projects.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Market & Application Classification */}
      <section className="market-section classification-section">
        <div className="container">
          <h2 className="section-title">The Market</h2>
          <p className="classification-lead">
            GYATK’s market are covered in two heads namely the primary first priority ‘RVCR’ market and secondary market for latter diversification ‘Non RVCR’ and these are sub classified further.
          </p>

          <div className="app-classification-grid">
            {/* Category 1 */}
            <div className="class-card">
              <div className="class-card-header">
                <Layers className="class-icon" size={24} />
                <h3>1. Engines</h3>
              </div>
              <ul className="class-list">
                <li><strong>Land:</strong> Transport sector (passenger vehicles, commercial vehicles), Agri sector and material handling, Special purpose machines</li>
                <li><strong>Marine:</strong> Commercial vessels & coastal transport</li>
                <li><strong>Aviation:</strong> Regional transport & UAV powerplants</li>
                <li><strong>Standalone Prime Movers:</strong> Stationary generators & microgrids</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="class-card">
              <div className="class-card-header">
                <Cpu className="class-icon" size={24} />
                <h3>2. Independent Fluid Handling Machines</h3>
              </div>
              <ul className="class-list">
                <li><strong>Compressors:</strong> High efficiency, variable delivery industrial & HVAC compressors</li>
                <li><strong>Pumps:</strong> Positive displacement liquid transfer & metering systems</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="class-card">
              <div className="class-card-header">
                <Compass className="class-icon" size={24} />
                <h3>3. Independent Fluid Motors</h3>
              </div>
              <ul className="class-list">
                <li><strong>Positive Displacement Fluid Power Motors:</strong> High torque fluid expansion engines</li>
                <li><strong>Miscellaneous Fluid Motor Applications:</strong> Specialized energy capture units</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="class-card">
              <div className="class-card-header">
                <Users className="class-icon" size={24} />
                <h3>4. Hydraulics</h3>
              </div>
              <ul className="class-list">
                <li><strong>Pumps:</strong> Variable delivery hydraulic power packs</li>
                <li><strong>Motors:</strong> Precision heavy-duty hydraulic actuation motors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RVCR Consumers Categorization */}
      <section className="market-section consumer-section">
        <div className="container">
          <div className="consumer-card-box">
            <h2 className="consumer-title">RVCR Consumers Categorization</h2>
            <p className="consumer-intro">
              RVCR consumers are categorized for ease of strategic planning and targeted OEM partnership outreach:
            </p>

            <ul className="consumer-check-list">
              {consumerCategories.map((cat, idx) => (
                <li key={idx}>
                  <div className="consumer-check-icon">
                    <Check size={18} />
                  </div>
                  <span>{cat}</span>
                </li>
              ))}
            </ul>

            <p className="consumer-note">
              * Since RVCR applications crossover into multiple industry categories, the application-wise market categorization above is structured for ease of tabulation and is non-restrictive.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Detailed Market Verticals */}
      <section className="market-section verticals-section">
        <div className="container">
          <div className="verticals-grid">
            {/* Vertical 1 */}
            <div className="vertical-card">
              <h3 className="vertical-title">RVCR Green Fuel Engines Market</h3>
              <p className="vertical-p">
                The Auto sector market in the US alone is estimated at more than 250 billion dollars a year. Considering prime-movers as 20% to 35% of total vehicle cost, the RVCR market implications extend globally across multiples of the US market.
              </p>
              <p className="vertical-p">
                The auto engine market is just a part of the total engine market that ranges across power generators, agro industry, material handling, construction equipment, mass transport, and specialized vehicles. Auto sector companies have invested millions in pursuit of VCR feasibility; GYATK delivers the long-awaited commercial solution.
              </p>
            </div>

            {/* Vertical 2 */}
            <div className="vertical-card">
              <h3 className="vertical-title">RVCR Pumps, Compressors and Motors</h3>
              <p className="vertical-p">
                RVCR applications beyond engines are even more massive. Variable delivery features make RVCR ideal for HVAC compressors, industrial gas handling, and petrochemical transfer pumps.
              </p>
              <p className="vertical-p">
                In the Hydraulic industry, variable delivery pumps are complex and costly. RVCR simplifies variable displacement hydraulic units for cranes, heavy engineering equipment, ships, road transport, and space control mechanisms.
              </p>
            </div>

            {/* Vertical 3 */}
            <div className="vertical-card">
              <h3 className="vertical-title">Power Generator Motors</h3>
              <p className="vertical-p">
                There is a strong surge in wind turbines and ocean wave/tidal power generators. The simple rotary positive displacement feature of RVCR makes motor applications exceptionally efficient as fluid motors for Unconventional Power Generators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Summary Callout */}
      <section className="market-section summary-section">
        <div className="container">
          <div className="summary-banner-card">
            <h3 className="summary-title">Summary</h3>
            <p className="summary-text">
              The unprecedented climate challenge is beyond the scope of conventional incremental innovations. RVCR enables OEMs with long-term strategies for Zero Carbon Technologies to effectively master 21st-century market drivers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
