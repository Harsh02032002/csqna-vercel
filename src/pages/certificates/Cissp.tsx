import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Cissp: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: 'cissp_faq_q1', key_a: 'cissp_faq_a1',
      question: 'Can I take the CISSP exam without the required experience?',
      answer: 'Yes, you can take the CISSP exam without the experience. If you pass, you will receive the Associate of ISC² designation and will have up to 6 years to gain the necessary 5 years of professional security work experience.'
    },
    {
      key_q: 'cissp_faq_q2', key_a: 'cissp_faq_a2',
      question: 'How difficult is the CISSP exam?',
      answer: 'The CISSP exam is considered highly challenging. It evaluates your security engineering and risk management mindset across 8 domains rather than just testing memorized technical facts. It requires solid analytical skills and extensive preparation.'
    },
    {
      key_q: 'cissp_faq_q3', key_a: 'cissp_faq_a3',
      question: 'What is the total cost of CISSP certification?',
      answer: 'The standard registration fee is $749 USD. To maintain the certification, you must earn 120 CPE credits every 3 years and pay an Annual Maintenance Fee (AMF) of $125 USD.'
    },
    {
      key_q: 'cissp_faq_q4', key_a: 'cissp_faq_a4',
      question: 'How should I prepare for the CISSP exam?',
      answer: 'Recommended preparation includes studying the official ISC² CISSP Study Guide, taking practice exams to assess knowledge, joining peer study groups or review courses, focusing on the 8 CISSP CBK domains, and gaining practical experience in security operations.'
    },
    {
      key_q: 'cissp_faq_q5', key_a: 'cissp_faq_a5',
      question: 'What is the endorsement process?',
      answer: 'After passing the exam, you must complete the endorsement application. This application must be signed by an active, certified ISC² professional who can verify your professional experience in the cybersecurity field.'
    }
  ];

  const domains = [
    { icon: '🛡️', title: 'Domain 1', desc: 'Security and Risk Management', badge: '15%' },
    { icon: '📁', title: 'Domain 2', desc: 'Asset Security', badge: '10%' },
    { icon: '⚙️', title: 'Domain 3', desc: 'Security Architecture and Engineering', badge: '13%' },
    { icon: '🌐', title: 'Domain 4', desc: 'Communication and Network Security', badge: '13%' },
    { icon: '🔑', title: 'Domain 5', desc: 'Identity and Access Management (IAM)', badge: '13%' },
    { icon: '🧪', title: 'Domain 6', desc: 'Security Assessment and Testing', badge: '12%' },
    { icon: '💻', title: 'Domain 7', desc: 'Security Operations', badge: '13%' },
    { icon: '🛠️', title: 'Domain 8', desc: 'Software Development Security', badge: '11%' }
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
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="cissp_banner_title">
                {t('cissp_banner_title', 'CISSP')}
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
              <h2 className="rt-section-title" data-content-key="cissp_hero_title">
                {t('cissp_hero_title', 'CISSP CERTIFICATION')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="cissp_hero_subtitle">
                {t('cissp_hero_subtitle', "Certified Information Systems Security Professional - World's Premier Cybersecurity Certification")}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="cissp_hero_desc">
                {t('cissp_hero_desc', "Validate your expertise in designing, engineering, and managing an organization's overall security posture.")}
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
              { title: 'Exam Duration', desc: '3 Hours for English CAT format. 6 Hours for non-English linear exams.' },
              { title: 'Questions', desc: '100–150 questions for English CAT format. 250 questions for non-English linear exams.' },
              { title: 'Passing Score', desc: 'Scaled score of 200 to 1000 points. Passing score: 700 points.' },
              { title: 'Testing Format', desc: 'Computer-based testing (CBT) at authorized Pearson VUE testing centers.' },
              { title: 'Question Format', desc: 'Multiple-choice and advanced innovative questions. Evaluates managerial and risk-based decision mindset.' },
              { title: 'Registration Fee', desc: 'Standard Registration Fee: $749 USD. Registration through official ISC² website.' }
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
          <h2 className="rt-section-title text-center">CISSP CBK Domains</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            {t('cissp_domains_intro', 'The CISSP Common Body of Knowledge (CBK) encompasses eight essential domains representing the most comprehensive body of knowledge in information security.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {domains.map((d, i) => (
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
              { title: 'Experience Requirements', items: ['Minimum 5 years of cumulative paid work experience in 2 or more of the 8 CISSP CBK domains.', 'Must be verified and endorsed by an active certified professional.', 'Work experience must be documented and verifiable.'] },
              { title: 'Substitutions & Waivers', items: ['Maximum of 1 year of experience waiver is allowed.', 'Satisfied by holding a 4-year college degree or regional equivalent.', 'Alternatively satisfied by holding an approved credential (e.g. CISA, Security+).'] },
              { title: 'Associate Path', items: ['Candidates CAN take the exam without the required experience.', 'Upon passing, candidates achieve the Associate of ISC² designation.', 'Candidates have up to 6 years to earn the required 5 years of experience.'] }
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

export default Cissp;
