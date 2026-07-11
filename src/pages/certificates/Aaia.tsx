import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Aaia: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: 'aaia_faq_q1', key_a: 'aaia_faq_a1',
      question: 'What is the difference between AAIA and other certifications?',
      answer: 'Unlike technical certifications that focus on building AI models, AAIA is a governance, risk, and compliance certification focused on auditing and overseeing AI systems to ensure transparency, fairness, and compliance.'
    },
    {
      key_q: 'aaia_faq_q2', key_a: 'aaia_faq_a2',
      question: 'What are the prerequisites for the AAIA certification?',
      answer: 'Candidates must hold an active CISA certification or another qualified auditing/accounting designation (such as CIA or CPA) to satisfy the prerequisite requirement.'
    },
    {
      key_q: 'aaia_faq_q3', key_a: 'aaia_faq_a3',
      question: 'How long is the AAIA exam and how many questions does it have?',
      answer: 'The exam is 2.5 hours long and consists of 90 multiple-choice questions.'
    },
    {
      key_q: 'aaia_faq_q4', key_a: 'aaia_faq_a4',
      question: 'What is the cost of the AAIA exam?',
      answer: 'The exam fee is $459 USD for ISACA members and $599 USD for non-members.'
    },
    {
      key_q: 'aaia_faq_q5', key_a: 'aaia_faq_a5',
      question: 'How do I maintain the AAIA certification?',
      answer: 'You must earn and report 10 Continuing Professional Education (CPE) hours specifically in Artificial Intelligence (AI) domains annually and pay the maintenance fee.'
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
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="aaia_banner_title">
                {t('aaia_banner_title', 'AAIA')}
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
              <h2 className="rt-section-title" data-content-key="aaia_hero_title">
                {t('aaia_hero_title', 'AAIA CERTIFICATION')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="aaia_hero_subtitle">
                {t('aaia_hero_subtitle', 'Advanced in AI Audit (AAIA) - Governance, Risk, and Compliance for Artificial Intelligence')}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="aaia_hero_desc">
                {t('aaia_hero_desc', "ISACA's specialized credential validating your ability to audit operational risk, establish robust governance, and verify regulatory compliance for AI systems.")}
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
              { title: 'Exam Duration', desc: '2.5 Hours (150 minutes) to complete the exam. Secure, timed assessment environment.' },
              { title: 'Questions', desc: '90 Questions total. Evaluates auditing principles applied to AI models.' },
              { title: 'Passing Score', desc: 'Scaled score of 200 to 800 points. Passing score: 450 points.' },
              { title: 'Testing Format', desc: 'Computer-based testing. Online proctored option or authorized testing centers.' },
              { title: 'Question Format', desc: 'Multiple-choice format. Includes scenario-based evaluations of AI governance.' },
              { title: 'Registration Fee', desc: 'ISACA Member Fee: $459 USD. Non-Member Fee: $599 USD.' }
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
          <h2 className="rt-section-title text-center">AAIA Exam Domains</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            {t('aaia_domains_intro', 'The AAIA exam blueprint evaluates skills across three comprehensive governance and auditing areas developed by ISACA.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { icon: '⚖️', title: 'Domain 1', desc: 'AI Governance and Risk (Policy alignment, algorithmic bias identification, accountability, and EU AI Act regulatory compliance)', badge: '33% Weight' },
              { icon: '⚙️', title: 'Domain 2', desc: 'AI Operations (Data ingestion, pipeline integrity, training/testing controls, model deployment, and monitoring)', badge: '46% Weight' },
              { icon: '🔍', title: 'Domain 3', desc: 'AI Auditing Tools & Techniques (Independent assurance methodologies, audit trail verification, and explainability check)', badge: '21% Weight' }
            ].map((d, i) => (
              <div className="col-md-4 col-sm-6 rt-mb-30" key={i}>
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
          <h2 className="rt-section-title text-center">Eligibility & Prerequisites</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Active Prerequisite', items: ['Must hold an active CISA certification or other qualified auditing/accounting designation.', 'Examples include CISA, CIA, CPA (IT Audit/Advisory role), or ACCA/FCCA.'] },
              { title: 'Code of Ethics', items: ['Agree to and comply with the ISACA Code of Professional Ethics.', 'Agree to the ISACA Professional Standards.'] },
              { title: 'AI CPE Maintenance', items: ['Earn and report a minimum of 10 CPE hours specifically in AI annually.', 'Pay the annual certification maintenance fee to keep credential active.'] }
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

export default Aaia;
