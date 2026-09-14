import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Download, Globe2, Briefcase } from 'lucide-react';
import './PatentsPage.css';

export default function PatentsPage() {
  const iprFactors = [
    { title: "Geography", desc: "Territorial exclusivity tailored to client manufacturing and distribution markets." },
    { title: "Application", desc: "Customized for automotive propulsion, gensets, fluid handling, or marine." },
    { title: "Product", desc: "Specific displacement volumes, power ratings, and packaging envelopes." },
    { title: "Segment", desc: "Commercial heavy duty, passenger automotive, distributed microgrids, or agriculture." },
    { title: "Market", desc: "OEM direct supply, aftermarket retrofits, or tier-1 licensed sub-assemblies." }
  ];

  const valueRealizationSteps = [
    { step: "01", title: "High-Level Business Case", desc: "Development of market fit, preliminary ROI projections, and target vehicle/engine specifications." },
    { step: "02", title: "Initial Due Diligence", desc: "Verification of legal registrations, patent claims, and background IPR clean title." },
    { step: "03", title: "Suitability Assessment", desc: "Preliminary mechanical engineering review of client's current powertrain or machine platforms." },
    { step: "04", title: "Capability Mapping", desc: "Evaluating client's precision manufacturing, tooling, and supply chain readiness for RVCR integration." }
  ];

  const patentCerts = [
    { country: "United States", filename: "USA-Granted-Patent-pages-12.pdf", year: "USPTO" },
    { country: "India", filename: "20031224-Indian-CERTIFICATE.pdf", year: "Indian Patent Office" },
    { country: "China", filename: "china-Granted-pat0001.pdf", year: "SIPO / CNIPA" },
    { country: "Russia", filename: "Pat-cert-Russia.pdf", year: "Rospatent" },
    { country: "Australia", filename: "Aus-patent-cert.pdf", year: "IP Australia" },
    { country: "Singapore", filename: "singapore-patent.pdf", year: "IPOS" }
  ];

  return (
    <div className="patents-page">
      {/* Hero */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="badge-pill">Intellectual Property Portfolio</span>
          <h1 className="page-hero-title">IPR & Technology Licensing</h1>
          <p className="page-hero-subtitle">
            RVCR is a seed technology applicable across diverse product categories and sectors. We provide high-tech solutions backed by commercial exclusivity through secured global patents.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section section-dark">
        <div className="container">
          <div className="feature-row">
            <div className="feature-col-text">
              <span className="section-subtitle">Flexible IP Framework</span>
              <h2 className="section-title">Background & Foreground IPR Architecture</h2>
              <p className="feature-lead">
                The base background IPR is segregated to flexibly accommodate each client's specific interest area. It is further topped up with foreground IP while developing products for specific segments.
              </p>
              <p className="section-description">
                The first IPR license agreement was executed by GYATK in <strong>2007</strong>. Over two decades of commercial licensing experience ensures robust contractual protection, time-bound deliverables, and strategic risk mitigation for partner OEMs.
              </p>

              <div className="ipr-commitments">
                <div className="commitment-item">
                  <span className="commit-num">1</span>
                  <div>
                    <strong>Product Development Project Plan:</strong>
                    <p>Time-bound execution commitment, complete project planning, engineering milestones, and consultancy.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <span className="commit-num">2</span>
                  <div>
                    <strong>Technological Operations Management:</strong>
                    <p>High-end engineering excellence, D&D operations, and process management to ensure flawless hardware execution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-col-media">
              <div className="media-card-wrap">
                <img 
                  src="/images/shaft.png" 
                  alt="RVCR Kinematic Core Mechanism" 
                  className="feature-main-image"
                  onError={(e) => { e.target.src = '/images/patents-dashboard2-1-1.jpg'; }}
                />
                <div className="media-floating-badge">
                  <ShieldCheck size={22} className="badge-icon" />
                  <div>
                    <strong>50+ Countries Protected</strong>
                    <span>Exclusive Global Rights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specificity Factors */}
      <section className="section section-dark-elevated">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Tailored Licensing</span>
            <h2 className="section-title">IP Rights Specific To Your Business</h2>
            <p className="section-description">
              Our licensing agreements are modularly constructed across five key dimensions.
            </p>
          </div>

          <div className="grid-3 ipr-factors-grid">
            {iprFactors.map((factor) => (
              <div key={factor.title} className="factor-card card-dark">
                <div className="factor-icon-box"><Briefcase size={20} /></div>
                <h3 className="factor-title">{factor.title}</h3>
                <p className="factor-desc">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Realization Program */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Structured Process</span>
            <h2 className="section-title">IPR Value Realization Program</h2>
            <p className="section-description">
              Formulated as an engagement program of planned interactive sessions under formal MOU and Confidentiality Agreement (CA).
            </p>
          </div>

          <div className="grid-4 steps-grid">
            {valueRealizationSteps.map((s) => (
              <div key={s.step} className="step-card card-dark">
                <span className="step-badge">{s.step}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="value-conclusion-box">
            <p>
              By the conclusion of this structured program, parties formulate a comprehensive techno-commercial dossier and are fully prepared for the formal <strong>IP & Technology License Agreement</strong> and pilot product development.
            </p>
            <Link to="/contact-us" className="btn btn-primary">
              <span>Inquire for Technology Licensing</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Patent Certificates Download Showcase */}
      <section className="section section-dark-elevated">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Verified Grants</span>
            <h2 className="section-title">Granted Patent Documentation Excerpts</h2>
            <p className="section-description">
              Sample granted patent certificates from premier national patent offices.
            </p>
          </div>

          <div className="grid-3 certs-grid">
            {patentCerts.map((cert) => (
              <a 
                key={cert.country} 
                href={`/images/${cert.filename}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-card card-dark"
              >
                <div className="cert-header">
                  <FileText size={24} className="cert-icon" />
                  <span className="cert-badge">Official Grant</span>
                </div>
                <h4 className="cert-country">{cert.country}</h4>
                <span className="cert-authority">{cert.year}</span>
                <div className="cert-download-link">
                  <span>View Grant Document (PDF)</span>
                  <Download size={15} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
