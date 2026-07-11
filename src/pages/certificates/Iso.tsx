import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Iso: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: 'iso_faq_q1', key_a: 'iso_faq_a1',
      question: 'What is the difference between ISO 27001:2013 and ISO 27001:2022?',
      answer: 'The 2022 version consolidates the control structure from 14 domains (114 controls) to 4 themes (93 controls). It introduces 11 new controls (e.g. threat intelligence, cloud services, data leakage prevention) to align with modern threat landscapes.'
    },
    {
      key_q: 'iso_faq_q2', key_a: 'iso_faq_a2',
      question: 'How long does ISO 27001 certification take and what does it cost?',
      answer: 'Typically 6 to 12 months from planning to certificate. Costs range from $15,000 to $100,000+ depending on organization size, complexity of processes, and if external consultancy is hired to help build the ISMS.'
    },
    {
      key_q: 'iso_faq_q3', key_a: 'iso_faq_a3',
      question: 'Is ISO 27001 certification mandatory or voluntary?',
      answer: 'It is voluntary, but highly demanded by clients, partners, and regulators. Many software tenders, RFPs, and regulated industries require it as a baseline to prove information security capability.'
    },
    {
      key_q: 'iso_faq_q4', key_a: 'iso_faq_a4',
      question: 'What is the Statement of Applicability (SoA) in ISO 27001?',
      answer: 'The Statement of Applicability (SoA) is a mandatory document that lists which of the 93 Annex A controls apply to your organization, the justification for including or excluding them, and their current implementation status.'
    },
    {
      key_q: 'iso_faq_q5', key_a: 'iso_faq_a5',
      question: 'How does ISO 27001 relate to GDPR compliance?',
      answer: 'While GDPR focuses on personal data protection, ISO 27001 secures all information assets. Implementing ISO 27001 provides the technical and organizational security controls required under GDPR Article 32.'
    }
  ];

  return (
    <div className="cert-page">
      <div className="rt-breadcump breaducump-style-2">
        <div className="rt-page-bg rtbgprefix-full"
             style={{ backgroundImage: "url(/marketing-assets/images/banner/About-us-banner.png)", height: '350px' }}>
        </div>
        <div className="container">
          <div className="row align-items-left" style={{ paddingTop: '140px' }}>
            <div className="col-lg-8">
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="iso_banner_title">
                {t('iso_banner_title', 'ISO 27001')}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="rt-spacer-100"></div>

      <section className="page-content-area bg-elements-parent">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <h2 className="rt-section-title" data-content-key="iso_hero_title">
                {t('iso_hero_title', 'ISO/IEC 27001:2022 CERTIFICATION')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="iso_hero_subtitle">
                {t('iso_hero_subtitle', 'ISO/IEC 27001:2022 Certification - Information Security Management System (ISMS)')}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="iso_hero_desc">
                {t('iso_hero_desc', "Establish, implement, maintain, and continually improve your organization's information security management system to protect assets and build customer trust.")}
              </p>
              <div className="rt-spacer-30"></div>
              <div className="d-flex justify-content-center gap-3">
                <a href="#exam-details" className="rt-btn rt-gradient pill text-uppercase rt-Bshadow-1 rt-sm2">Audit Details</a>
                <a href="#eligibility" className="rt-btn pill text-uppercase rt-sm2 bg-secondary text-white">Check Readiness</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="exam-details" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">ISO 27001 Certification Details</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Audit Duration', desc: 'Stage 1 and Stage 2 audits completed by accredited bodies. Varies by organization size and scope complexity.' },
              { title: 'Accredited Bodies', desc: 'Certified by registrars like BSI, DNV, LRQA, SGS. Recognized globally via IAF accreditation.' },
              { title: 'Audit Format', desc: 'Stage 1: Documentation review of ISMS scope. Stage 2: On-site implementation audit and interviews.' },
              { title: 'Audit Mode', desc: 'On-site and remote audits consisting of evidence checking and process reviews.' },
              { title: 'Scoring & Passing', desc: 'Requires zero major non-conformities. Minor non-conformities require a Corrective Action Plan.' },
              { title: 'Implementation Costs', desc: 'Typical range: $15,000 – $100,000+. Depends on employee count, locations, and maturity.' }
            ].map((item, i) => (
              <div className="col-md-4 col-sm-6 rt-mb-30" key={i}>
                <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }}>{item.title}</h3>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="domains" className="page-content-area">
        <div className="container">
          <h2 className="rt-section-title text-center">ISO Clauses & Annex A Controls</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            {t('iso_domains_intro', 'ISO/IEC 27001:2022 organizes 93 controls into 4 thematic themes alongside 11 core clauses that mandate how the ISMS must be designed and reviewed.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { icon: '📋', title: 'Core Clauses', desc: 'ISMS Scope & Setup (Clauses 4-10 covering Leadership, Planning, Support, Operations, Evaluation, Improvement)', badge: 'Clauses 4-10' },
              { icon: '🏢', title: 'Theme 1', desc: 'Organizational Controls (Policies, roles, teleworking, threat intelligence, asset management, access controls)', badge: '37 Controls' },
              { icon: '👥', title: 'Theme 2 & 3', desc: 'People & Physical Controls (Screening, awareness, perimeters, entry control, clear desk, security in office)', badge: '22 Controls' },
              { icon: '💻', title: 'Theme 4', desc: 'Technological Controls (Access control, cryptography, vulnerability management, logging, secure development)', badge: '34 Controls' }
            ].map((d, i) => (
              <div className="col-md-3 col-sm-6 rt-mb-30" key={i}>
                <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{d.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{d.title}</h3>
                  <p className="f-size-14">{d.desc}</p>
                  <span style={{ display: 'inline-block', background: '#854c93', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', marginTop: '10px', fontSize: '13px' }}>{d.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="eligibility" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">Certification Readiness</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Organizational Scope', items: ['Applicable to organizations of all sizes and sectors seeking to secure client data.', 'Requires defining a clear ISMS scope detailing business processes and systems.'] },
              { title: 'System Implementation', items: ['Requires a fully implemented ISMS operating for a minimum of 3 months.', 'Must generate sufficient execution records to serve as audit evidence.'] },
              { title: 'Auditing & Review', items: ['An internal audit of all applicable controls must be completed.', 'A formal management review of the ISMS must be documented before external audit.'] }
            ].map((card, i) => (
              <div className="col-md-4 rt-mb-30" key={i}>
                <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>{card.title}</h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                    {card.items.map((item, j) => <li className="rt-mb-10" key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="faq" className="faq-area bg-elements-parent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="rt-section-title">Frequently Asked Questions</h2>
              <p className="rt-light3 line-height-34 rt-mb-0 section-p-content">Find answers to the most frequently asked questions here</p>
              <div className="rt-spacer-30"></div>
              <div id="accordion">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div className="faq-card" key={index}>
                      <div className="faq-header" onClick={() => setActiveFaq(isOpen ? null : index)}>
                        <h5 data-content-key={faq.key_q}>{t(faq.key_q, faq.question)}</h5>
                        <div className="faq-icon" style={{ backgroundColor: '#854c93', color: '#fff' }}>{isOpen ? '−' : '+'}</div>
                      </div>
                      {isOpen && <div className="faq-body" data-content-key={faq.key_a}>{t(faq.key_a, faq.answer)}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
    </div>
  );
};

export default Iso;
