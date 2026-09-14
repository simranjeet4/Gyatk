import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ExternalLink, 
  TrendingUp, 
  Award, 
  Layers, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Anchor,
  Wind,
  Droplets
} from 'lucide-react';
import './RVCRBusinessCasePage.css';

export default function RVCRBusinessCasePage() {
  const acquiredMilestones = [
    {
      icon: <Layers size={22} className="milestone-icon" />,
      title: "Customized Engineering Knowhow",
      desc: "Acquired the knowhow to develop customized RVCR engineering systems for various Industrial applications."
    },
    {
      icon: <ShieldCheck size={22} className="milestone-icon" />,
      title: "2nd Generation IP Rights",
      desc: "The 2nd generation IP rights of RVCR technology secured in major economies around the world."
    },
    {
      icon: <Zap size={22} className="milestone-icon" />,
      title: "Kinematic Prototype Demonstrator",
      desc: "Progressed through the 1st tech demonstrator of RVCR kinematic prototype."
    },
    {
      icon: <Award size={22} className="milestone-icon" />,
      title: "IPR Licensing with Auto Major",
      desc: "Successfully executed the RVCR technology IPR licensing agreement with an Auto Major."
    },
    {
      icon: <TrendingUp size={22} className="milestone-icon" />,
      title: "EU & UK Ecosystem Recognition",
      desc: "RVCR system projects gained funding and recognition across EU (Horizon 2020, SME Instrument) and UK innovation ecosystems."
    },
    {
      icon: <Building2 size={22} className="milestone-icon" />,
      title: "OEM Joint Venture Competency",
      desc: "Developed full competency to execute Joint Venture (JV) commercial projects directly with global OEMs."
    }
  ];

  return (
    <div className="rvcr-business-page-root">
      {/* 1. Hero Section */}
      <section className="business-hero-section">
        <div className="business-hero-container">
          <div className="hero-left-content">
            <span className="hero-tag">Commercialization & Investment</span>
            <h1 className="hero-main-title">
              RVCR Business Case
            </h1>
            <p className="hero-desc">
              We develop business cases for Investors and Industry stake holders to monetize Segment specific product commercialization.
            </p>
          </div>
          <div className="hero-right-banner">
            <img 
              src="/images/Pre-emitive-product.jpg" 
              alt="RVCR Business Case Mechanical Blueprint" 
              className="hero-angled-img"
            />
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="business-section overview-section">
        <div className="container">
          <div className="overview-2col-row">
            <div className="overview-content-col">
              <span className="section-tag blue-tag">Market Strategy</span>
              <h2 className="section-title">Overview</h2>
              <p className="overview-text">
                RVCR technology commercialization opens new investment opportunities for investors and stake holders of the Transport and energy industry. We understand being a Deep Tech Innovation RVCR poses significant challenges to conjecture on its potency and outcome.
              </p>
              <p className="overview-text">
                We at GYATK ease out this challenge by developing a comprehensive Business plan for specific product project.
              </p>
            </div>
            <div className="overview-media-col">
              <div className="media-card-frame">
                <img 
                  src="/images/businessmen-businesswomen-meeting-brainstorming-ideas.jpg" 
                  alt="Business Strategy and Investor Analysis" 
                  className="overview-card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Acquired Knowhow & Milestones */}
      <section className="business-section milestones-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag green-tag">Track Record & Assets</span>
            <h2 className="section-title">Business Cases</h2>
            <p className="section-subtitle">
              Today after years of R&D in RVCR kinematics are showing results now. We have traversed a long way in the journey of taking the core RVCR concept to a viable product. We have acquired:
            </p>
          </div>

          <div className="milestones-grid">
            {acquiredMilestones.map((item, idx) => (
              <div key={idx} className="milestone-card">
                <div className="milestone-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="milestone-card-title">{item.title}</h3>
                <p className="milestone-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Post-Covid Opportunity Callout */}
          <div className="covid-opportunity-box">
            <div className="covid-box-content">
              <h3>Post-Pandemic Resurgence & Opportunity</h3>
              <p>
                The Covid pandemic was a very bad time for R&D projects that need lots of self-financing. It did put a halt to our endeavour. We see a great opportunity in the post covid era as industry gains composure for RVCR innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categorized Projects Portfolio (Ongoing, Upcoming, Planned) */}
      <section className="business-section portfolio-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag blue-tag">Project Classification</span>
            <h2 className="section-title">Segmented Business Case Projects</h2>
            <p className="section-subtitle">
              We now have segregated the entire endeavour to facilitate its commercialization in various industry verticals. The business case is developed for convenience of investors and stake holders. The specific business case projects are classed under the status whether ongoing/upcoming/planned:
            </p>
          </div>

          {/* ONGOING PROJECTS */}
          <div className="portfolio-category-block">
            <div className="category-header">
              <span className="category-status-badge ongoing-badge">Ongoing</span>
              <h3 className="category-title">Internal Combustion Engine (I.C.E) Projects</h3>
            </div>

            <div className="project-cards-stack">
              {/* Project 1 */}
              <div className="project-detail-card">
                <div className="project-card-header">
                  <h4 className="project-name">1. R-VCR I.C. Engine Technology Development</h4>
                  <span className="project-type-tag">Core I.C.E Platform</span>
                </div>
                <p className="project-desc">
                  This was the 1st project we started with and the most strategic one. It laid the foundation for all the subsequent downstream projects. This project’s objective was to develop the core knowhow of RVCR for I.C Engine applications. This could then further be customized for segment specific applications.
                </p>
                <div className="project-accolades">
                  <strong>Accolades & Funding:</strong> The project gained various credits and accolades including grant funding from DSIR (Department of Industrial Research) of GOI, EC Horizon 2020 scheme etc. It was winner of various international innovation competitions.
                </div>
                <div className="project-card-footer">
                  <a 
                    href="https://rvcr-engine.kgyat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-ext-btn"
                  >
                    <span>Click here for details</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-detail-card">
                <div className="project-card-header">
                  <h4 className="project-name">2. Rotary Green Fuel VCR I.C. Engine for Automotive Applications</h4>
                  <span className="project-type-tag">Automotive Joint Venture</span>
                </div>
                <p className="project-desc">
                  The project was kicked off in a Joint project with Tata Motors Ltd. The objective was to develop an TRL7 prototype engine. This could be then developed as a pilot for an automotive application. The project was under an IP licensing agreement which reached TRL5. However, the various limitations with Industrial Technological Base in India for designing and developing I.C.Engines was a major challenge. (And when it comes to developing one based on an entirely new kinematic system, it’s a completely different ball game). The project base was shifted to EU where the pedigree to all engine technologies lay. Here the project got traction with the western ecosystem and specifically the – SME instrument – of the European commission. The project was stalled for a number of disruptions form breakup with TML, lack of funding, Brexit and Covid challenge. The project is being reinitiated now. The MVP of the proto technology is now modified. This is in considerations to enquires from custom car manufacturers. The pilot would lead to the usage of the technology for multiple segments across sectors.
                </p>
                <div className="project-card-footer">
                  <a 
                    href="https://rvcr-windmotor.kgyat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-ext-btn"
                  >
                    <span>Click here for details</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UPCOMING PROJECTS */}
          <div className="portfolio-category-block">
            <div className="category-header">
              <span className="category-status-badge upcoming-badge">Upcoming</span>
              <h3 className="category-title">Maritime & Renewable Energy Projects</h3>
            </div>

            <div className="project-cards-grid-2col">
              {/* Upcoming 1 */}
              <div className="project-detail-card">
                <div className="project-card-header">
                  <h4 className="project-name">Rotary Green Fuel VCR I.C. Engine for Ship Propulsion (I.C.E)</h4>
                  <span className="project-type-tag">Maritime I.C.E</span>
                </div>
                <p className="project-desc">
                  This project Is an offshoot of the earlier I.C. Engine project. It was conceived the demand for duel fuel engines in the Maritime Industry for Ship Propulsion. A scaled down model is being envisaged.
                </p>
              </div>

              {/* Upcoming 2 */}
              <div className="project-detail-card">
                <div className="project-card-header">
                  <h4 className="project-name">RVCR Fluid Power Generator Demonstrator Development (Renewable Energy)</h4>
                  <span className="project-type-tag">Renewable Energy</span>
                </div>
                <p className="project-desc">
                  Though this project was conceived much earlier, and a patent was also filed for the new concept, it was abandoned for lack of resources to follow it up. The concept was mathematically modelled and latter a virtual model was created. RVCR renewable energy power generators (RVCR -REPG) adds a new concept in tapping energy from flowing fluid. This system shall revolutionize the Green Power sector in a number of ways. This ranges from creating newer market of REPG where none existed before.
                </p>
                <div className="project-card-footer">
                  <a 
                    href="https://rvcr-windmotor.kgyat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-ext-btn"
                  >
                    <span>Click here for details</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PLANNED PROJECTS */}
          <div className="portfolio-category-block">
            <div className="category-header">
              <span className="category-status-badge planned-badge">Planned</span>
              <h3 className="category-title">Renewable Energy Expansion</h3>
            </div>

            <div className="planned-3col-grid">
              <div className="planned-card">
                <div className="planned-card-icon"><Wind size={24} /></div>
                <h4>RVCR City Based Domestic Wind Power</h4>
                <p>Compact, high-efficiency urban wind energy generators utilizing variable delivery fluid kinematics.</p>
              </div>

              <div className="planned-card">
                <div className="planned-card-icon"><Anchor size={24} /></div>
                <h4>RVCR Shipboard Marine Wind Power Generator</h4>
                <p>Auxiliary power generation for ocean vessels tapping dynamic marine wind resources.</p>
              </div>

              <div className="planned-card">
                <div className="planned-card-icon"><Droplets size={24} /></div>
                <h4>RVCR Hydro Motor Technology</h4>
                <p>Next-generation positive displacement fluid motors for ocean waterpower and hydro generators.</p>
              </div>
            </div>

            <div className="planned-footer-action">
              <a 
                href="https://rvcr-windmotor.kgyat.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-ext-btn"
              >
                <span>Click here for details</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Licensing & Partnership Dark Banner */}
      <section className="business-dark-banner">
        <div className="banner-bg-image" style={{ backgroundImage: "url('/images/close-up-businessman-sitting-signing-contract.jpg')" }}></div>
        <div className="banner-overlay"></div>
        <div className="container banner-container">
          <div className="banner-content">
            <h2>Accelerate Commercialization & Licensing</h2>
            <p>
              Our RVCR drive in ‘Specific Market Segment’ is set to open new opportunities for partnerships, professional engagements, and investments.
            </p>
            <div className="banner-actions">
              <Link to="/contact-us" className="btn-primary-glow">
                Explore Business Prospects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Conclusion & Summary Section */}
      <section className="business-section summary-section">
        <div className="container">
          <div className="summary-2col">
            <div className="conclusion-col">
              <span className="section-tag green-tag">Conclusion</span>
              <h2 className="section-title">Conclusion</h2>
              <p className="conclusion-p">
                Our RVCR drive in ‘Specific Market Segment’ is set to open new opportunities for partnerships, professional engagements, and investments. We invite you to discover more about RVCR technology details and explore business prospects with RVCR technology.
              </p>
              <p className="conclusion-p">
                Express your interest to receive updates on our RVCR endeavour.
              </p>
              <p className="conclusion-p">
                Feel free to contact us for any queries and info on RVCR business cases.
              </p>

              <div className="cta-button-group">
                <Link to="/contact-us" className="btn-contact-main">
                  <span>Contact Us for Queries</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="summary-card-col">
              <div className="summary-highlight-card">
                <h3 className="summary-card-title">Summary</h3>
                <ul className="summary-checklist">
                  <li>
                    <div className="check-bullet"><Check size={16} /></div>
                    <span>We expertise in the RVCR technology commercialization.</span>
                  </li>
                  <li>
                    <div className="check-bullet"><Check size={16} /></div>
                    <span>RVCR business cases are open opportunities for investors to monetize the RVCR innovation.</span>
                  </li>
                  <li>
                    <div className="check-bullet"><Check size={16} /></div>
                    <span>We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
