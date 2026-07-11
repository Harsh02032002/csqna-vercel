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
      <div className="rt-breadcump breaducump-style-2">
        <div className="rt-page-bg rtbgprefix-full"
             style={{ backgroundImage: "url(/marketing-assets/images/banner/About-us-banner.png)", height: '350px' }}>
        </div>
        <div className="container">
          <div className="row align-items-left" style={{ paddingTop: '140px' }}>
            <div className="col-lg-8">
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="cipp_banner_title">
                {t('cipp_banner_title', 'CIPP')}
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
              <h2 className="rt-section-title" data-content-key="cipp_hero_title">
                {t('cipp_hero_title', 'CIPP CERTIFICATION')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="cipp_hero_subtitle">
                {t('cipp_hero_subtitle', 'Certified Information Privacy Professional - The Global Gold Standard in Privacy Certification')}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="cipp_hero_desc">
                {t('cipp_hero_desc', 'Demonstrate comprehensive knowledge of privacy laws, regulations, and frameworks across all sectors and jurisdictions.')}
              </p>
              <div className="rt-spacer-30"></div>
              <div className="d-flex justify-content-center gap-3">
                <a href="#exam-details" className="rt-btn rt-gradient pill text-uppercase rt-Bshadow-1 rt-sm2">Exam Details</a>
                <a href="#eligibility" className="rt-btn pill text-uppercase rt-sm2 bg-secondary text-white">Check Eligibility</a>
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
