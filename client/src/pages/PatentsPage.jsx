import React from 'react';
import { Check, FileText, Download } from 'lucide-react';
import './PatentsPage.css';

export default function PatentsPage() {
  const patentCerts = [
    { country: "United States", filename: "USA-Granted-Patent-pages-12.pdf", year: "USPTO" },
    { country: "India", filename: "20031224-Indian-CERTIFICATE.pdf", year: "Indian Patent Office" },
    { country: "China", filename: "china-Granted-pat0001.pdf", year: "SIPO / CNIPA" },
    { country: "Russia", filename: "Pat-cert-Russia.pdf", year: "Rospatent" },
    { country: "Australia", filename: "Aus-patent-cert.pdf", year: "IP Australia" },
    { country: "Singapore", filename: "singapore-patent.pdf", year: "IPOS" }
  ];

  const applicableSectors = [
    "Automotive",
    "Agriculture",
    "Defense",
    "Aerospace",
    "Industrial"
  ];

  return (
    <div className="patents-page-root">
      {/* 1. Hero Banner with Dark Circuit Pattern & Bottom-Right Patent Seal Badge */}
      <section className="patents-hero">
        <div className="patents-hero-overlay"></div>
        <div className="container patents-hero-container">
          <div className="patents-hero-content-grid">
            <div className="patents-hero-text">
              <h1 className="patents-hero-title">
                We provide high tech solutions with IPR - intellectual property rights
              </h1>
            </div>
            
            <div className="patents-hero-media">
              <img 
                src="/images/shaft.png" 
                alt="RVCR Kinematic Core Mechanism" 
                className="patents-hero-shaft-img"
              />
            </div>
          </div>

          {/* Bottom Right Badge Image matching screenshot exactly */}
          <div className="patents-gold-seal-badge">
            <img 
              src="/images/patent-seal-badge.jpg" 
              alt="An Invention Originating from India Was Patented Globally in 49 Countries" 
              className="patents-seal-badge-img"
            />
          </div>
        </div>
      </section>

      {/* 2. IPR & Technology Licensing Section */}
      <section className="patents-section patents-licensing-section">
        <div className="container">
          <h2 className="patents-section-title">IPR & Technology Licensing</h2>
          
          <div className="patents-narrative-text">
            <p>
              RVCR is a seed technology applicable across diverse product categories and sectors. The base background IPR is segregated to flexibly accommodate client's interest area. It is further topped up with foreground IP while developing products for specific segments. Over two decades of commercial licensing experience ensures robust contractual protection, time-bound deliverables, and strategic risk mitigation for partner OEMs.
            </p>
            
            <p className="patents-applicable-intro">The IPR is applicable for :</p>
            
            <ul className="patents-check-list">
              {applicableSectors.map((sector) => (
                <li key={sector}>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Global World Map Reach Graphic */}
          <div className="patents-map-container">
            <img 
              src="/images/map-world.png" 
              alt="Global Patent Reach Map Across 49 Countries" 
              className="patents-map-img"
            />
          </div>

          {/* 4. Highlight Banner Box */}
          <div className="patents-highlight-banner">
            <h3 className="highlight-banner-title">
              THE 1ST IPR LICENSE AGREEMENT WAS EXECUTED BY GYATK IN 2007.
            </h3>
            <p className="highlight-banner-sub">
              We built an open innovation network with leading OEMs.
            </p>
          </div>

          {/* 5. Two Numbered Cards Section */}
          <div className="patents-numbered-section">
            <p className="patents-intro-p">
              GYATK R&D is committed to augment 'innovation management' and product development techniques for continually enhancing the commercial potency of RVCR technology system for a completely self-sustainable 'Zero Carbon' industrial ecosystem.
            </p>

            <div className="patents-grid-2col">
              {/* Card 1 */}
              <div className="numbered-card">
                <span className="card-big-number">1</span>
                <p className="card-body-text">
                  A company wide holistic R&D program of Gyatk in India which was framed in concert with IC2 Institute (UT Austin) Global Commercialization Program. Under this program we derived key strategic initiatives for creating scalable revenue models suitable for global markets.
                </p>
              </div>

              {/* Card 2 */}
              <div className="numbered-card">
                <span className="card-big-number">2</span>
                <p className="card-body-text">
                  The International Open Innovation Framework created by Gyatk enabled multi-country collaboration for adopting green technology products. This strategic advantage allowed fast deployment of RVCR technology across diverse market segments and geographical locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 2: IPR Value Realization */}
      <section className="patents-section patents-realization-section">
        <div className="container">
          <h2 className="patents-section-title">IPR Value Realization</h2>
          
          <div className="patents-realization-intro">
            <p>
              The business model of GYATK is structured around IP value realization through licensing agreements. GYATK owns the background IP and licenses both IPR and technology to OEMs. This value-realization program is executed over structured interactive sessions.
            </p>
          </div>

          {/* Flowchart Diagram Box */}
          <div className="patents-flowchart-container">
            <div className="flowchart-left-tree">
              {/* Root Box */}
              <div className="flowchart-node root-node">
                <span>GYATK IP Rights & Licensing</span>
              </div>
              
              <div className="flowchart-connector-line"></div>
              
              {/* Branch Nodes */}
              <div className="flowchart-branches">
                <div className="flowchart-node branch-red">
                  <span>Segment Specific IP Rights</span>
                </div>
                <div className="flowchart-node branch-cyan">
                  <span>Market Specific IP Rights</span>
                </div>
              </div>
            </div>

            {/* Flowchart Right Features List */}
            <div className="flowchart-right-features">
              <ul className="patents-check-list">
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Highly lucrative revenue sharing model</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Secured exclusive rights across 49 countries</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Agility for non-disruptive integration in existing supply chains</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Thermal expansion & dynamic compression ratio for Net Zero roadmap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Concluding Narrative */}
          <div className="patents-realization-conclude">
            <p>
              In part this program's outcome is a preliminary assessment dossier, which evaluates client's specific interest area and business fit. The dossier provides a roadmap for technology development, validation, and commercialization.
            </p>
            <p>
              Dossiers also include recommendations for the scope of licensing, specific product specifications, and licensing terms. This enables both GYATK and the client to proceed with confidence into the formal License Agreement and joint product realization.
            </p>
          </div>

          {/* Patent Documentation Downloads */}
          <div className="patents-downloads-block">
            <h3 className="downloads-block-title">Official Granted Patent Certificates</h3>
            <div className="grid-3 certs-grid">
              {patentCerts.map((cert) => (
                <a 
                  key={cert.country} 
                  href={`/images/${cert.filename}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-card"
                >
                  <div className="cert-header">
                    <FileText size={22} className="cert-icon" />
                    <span className="cert-badge">Verified Grant</span>
                  </div>
                  <h4 className="cert-country">{cert.country}</h4>
                  <span className="cert-authority">{cert.year}</span>
                  <div className="cert-download-link">
                    <span>View Grant PDF</span>
                    <Download size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
