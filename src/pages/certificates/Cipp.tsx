import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Cipp: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: 'cipp_faq_q1', key_a: 'cipp_faq_a1',
      question: 'Which CIPP certification should I choose?',
      answer: 'The choice depends on your region of focus. CIPP/E covers European GDPR and is the global benchmark for international compliance. CIPP/US covers U.S. federal and state private-sector privacy laws. Many professionals pursue both.'
    },
    {
      key_q: 'cipp_faq_q2', key_a: 'cipp_faq_a2',
      question: 'How difficult is the CIPP exam and what is the passing rate?',
      answer: 'The CIPP exam is moderately challenging, with an estimated passing rate of 50-60%. It requires a thorough understanding of legal texts, compliance directives, and how they apply to operational business scenarios.'
    },
    {
      key_q: 'cipp_faq_q3', key_a: 'cipp_faq_a3',
      question: 'What is the total cost of CIPP certification?',
      answer: 'The standard exam fee is $550 USD. Certification renewal costs include maintaining an active IAPP membership ($275/yr) or paying a $250 USD biennial maintenance fee, along with submitting the necessary CPE credits.'
    },
    {
      key_q: 'cipp_faq_q4', key_a: 'cipp_faq_a4',
      question: 'How do I maintain my CIPP certification?',
      answer: 'To maintain CIPP status, you must earn and submit 20 Continuing Privacy Education (CPE) credits every 2 years, agree to the IAPP Code of Ethics, and maintain active membership status.'
    },
    {
      key_q: 'cipp_faq_q5', key_a: 'cipp_faq_a5',
      question: 'Is CIPP certification worth it for non-lawyers?',
      answer: 'Yes, privacy compliance is highly operational. IT professionals, software engineers, database administrators, security analysts, and project managers benefit greatly from CIPP to build privacy-by-design into systems.'
    }
  ];

  return (
    <div className="cert-page">
      <div className="rt-breadcump breaducump-style-2" style={{ 
        position: 'relative', 
        height: '280px', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #09132e 0%, #1c2b54 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Abstract Grid/Dot Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.4
        }}></div>
        {/* Glow circles */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}></div>

        {/* Dynamic SVG Object on the Right */}
        <div style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}>
          <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="url(#cippGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.5))' }}>
            <defs>
              <linearGradient id="cippGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <rect x="9" y="10" width="6" height="5" rx="1" />
            <path d="M10 10V8a2 2 0 0 1 4 0v2" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }} className="container">
          <div className="row align-items-left" style={{ paddingTop: '80px' }}>
            <div className="col-lg-7 col-md-9">
              <div className="disclaimer-banner">
                <span className="disclaimer-title">⚠️ Disclaimer:</span>
                <span className="disclaimer-text">We are not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with IAPP.</span>
              </div>
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-uppercase" data-content-key="cipp_banner_title">
                {t('cipp_banner_title', 'CIPP')}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="rt-spacer-10"></div>

      <section className="page-content-area bg-elements-parent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-left">

              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="cipp_hero_subtitle">
                {t('cipp_hero_subtitle', 'Certified Information Privacy Professional - The Global Gold Standard in Privacy Certification')}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="cipp_hero_desc">
                {t('cipp_hero_desc', 'Demonstrate comprehensive knowledge of privacy laws, regulations, and frameworks across all sectors and jurisdictions.')}
              </p>
              <div className="rt-spacer-30"></div>
              <div className="d-flex gap-3">
                <a href="#exam-details" className="rt-btn rt-gradient pill text-uppercase rt-Bshadow-1 rt-sm2">Exam Details</a>
                <a href="#eligibility" className="rt-btn pill text-uppercase rt-sm2 bg-secondary text-white">Check Eligibility</a>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="credential-card text-left">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>★</span>
                    </div>
                    <div>
                      <h4 className="text-uppercase m-0" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1px', color: '#d8b4fe' }}>CSQNA Prep Pack</h4>
                      <p className="m-0" style={{ fontSize: '9px', color: '#94a3b8' }}>VERIFIED PREP MATERIAL</p>
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-success text-white" style={{ fontSize: '9px', padding: '3px 8px', borderRadius: '50px' }}>Active</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-white text-uppercase mb-1" style={{ fontSize: '20px', fontWeight: 'bold' }}>CIPP</h3>
                  <p className="mb-3" style={{ fontSize: '12px', color: '#cbd5e1' }}>Certified Information Privacy Professional</p>
                  
                  <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                    <div className="row">
                      <div className="col-6">
                        <span style={{ display: 'block', fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>Exam Questions</span>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#fbbf24' }}>90 Qs</span>
                      </div>
                      <div className="col-6">
                        <span style={{ display: 'block', fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>Knowledge Areas</span>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#fbbf24' }}>4 Areas</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Support Email</span>
                    <span style={{ fontSize: '11px', color: '#d8b4fe' }}>info@csqna.com</span>
                  </div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid rgba(251,191,36,0.5)', background: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fbbf24' }}>SEAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="exam-details" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">Exam Metrics</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Exam Duration', desc: '2.5 Hours (150 minutes) to complete the exam. Fully proctored testing window.' },
              { title: 'Questions', desc: '90 Multiple-Choice Questions total. Includes scenario-based case studies.' },
              { title: 'Passing Score', desc: 'Scaled score of 300 to 800 points. Passing score: 500 points.' },
              { title: 'Testing Format', desc: 'Computer-based testing via Pearson VUE test centers or online proctoring.' },
              { title: 'Registration Fee', desc: 'Exam token: $550 USD for members and non-members. Retake fee: $375 USD.' },
              { title: 'Maintenance', desc: 'Earn 20 CPE credits every 2 years. Active IAPP membership or $250 USD biennial fee.' }
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
          <h2 className="rt-section-title text-center">Privacy Knowledge Areas (CIPP/E)</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            {t('cipp_domains_intro', 'The CIPP program offers five jurisdiction-specific specializations. Below is the exam content outline for CIPP/E (European Data Protection) which serves as the global benchmark.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { icon: '🇪🇺', title: 'Domain 1', desc: 'Introduction to European Data Protection (Origins, institutions, and legislative framework)', badge: '10%' },
              { icon: '⚖️', title: 'Domain 2', desc: 'European Data Protection Law & Regulation (GDPR principles, lawful basis, data subject rights)', badge: '25%' },
              { icon: '📋', title: 'Domain 3', desc: 'Compliance with European Data Protection Law (Controllers, processors, security, breaches, DPOs)', badge: '45%' },
              { icon: '🌐', title: 'Domain 4', desc: 'International Data Transfers (Adequacy, SCCs, BCRs, derogations, and Brexit implications)', badge: '20%' }
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
          <h2 className="rt-section-title text-center">Eligibility Requirements</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'No Prerequisites', items: ['There are no formal experience requirements or educational prerequisites to sit for CIPP exams.', 'Open to anyone seeking to validate their privacy compliance knowledge.'] },
              { title: 'Target Audience', items: ['Ideal for DPOs, lawyers, compliance officers, and risk managers.', 'Highly valuable for cybersecurity analysts and database administrators managing personal data.'] },
              { title: 'Maintenance Requirements', items: ['Must submit a certification application post-exam and agree to the IAPP code of ethics.', 'Required to earn 20 CPE credits every 2 years.', 'Requires active IAPP membership or biennial maintenance fee of $250 USD.'] }
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

export default Cipp;
