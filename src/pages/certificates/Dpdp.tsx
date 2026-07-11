import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Dpdp: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: 'dpdp_faq_q1', key_a: 'dpdp_faq_a1',
      question: 'When does the DPDP Act come into effect?',
      answer: 'The DPDP Act was passed by Parliament and received Presidential Assent on August 11, 2023. The rules are being drafted by MeitY, and compliance enforcement will begin as per the officially notified timeline.'
    },
    {
      key_q: 'dpdp_faq_q2', key_a: 'dpdp_faq_a2',
      question: 'Which organizations need to comply with the DPDP Act?',
      answer: 'All organizations (domestic or international) processing digital personal data of individuals located within India, or offering goods/services to individuals in India, must comply.'
    },
    {
      key_q: 'dpdp_faq_q3', key_a: 'dpdp_faq_a3',
      question: 'What are the key differences between DPDP and GDPR?',
      answer: 'DPDP is simpler, has no distinct "sensitive personal data" categories, places duties on the Data Principal (e.g. no false complaints), requires notices in local Indian languages, and relies on the DPBI for enforcement with high structural penalties.'
    },
    {
      key_q: 'dpdp_faq_q4', key_a: 'dpdp_faq_a4',
      question: 'What are the consent requirements under DPDP?',
      answer: 'Consent must be free, specific, informed, unconditional, and unambiguous. It must be accompanied by a notice explaining what data is collected, why it is processed, and how the principal can withdraw consent or raise grievances.'
    },
    {
      key_q: 'dpdp_faq_q5', key_a: 'dpdp_faq_a5',
      question: 'What are the penalties for non-compliance?',
      answer: 'Penalties are structural, capping at ₹250 crores (~$30 million USD) for failure to take reasonable security safeguards to prevent data breaches, and ₹150 crores for violating rules regarding processing children\'s data.'
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
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="dpdp_banner_title">
                {t('dpdp_banner_title', 'DPDP ACT 2023')}
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
              <h2 className="rt-section-title" data-content-key="dpdp_hero_title">
                {t('dpdp_hero_title', 'DPDP ACT 2023')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="dpdp_hero_subtitle">
                {t('dpdp_hero_subtitle', "Digital Personal Data Protection Compliance - India's Comprehensive Data Protection Law")}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="dpdp_hero_desc">
                {t('dpdp_hero_desc', 'A landmark legislation establishing a robust framework for personal data protection, balancing individual digital rights with organizational needs for lawful processing.')}
              </p>
              <div className="rt-spacer-30"></div>
              <div className="d-flex justify-content-center gap-3">
                <a href="#exam-details" className="rt-btn rt-gradient pill text-uppercase rt-Bshadow-1 rt-sm2">Compliance Details</a>
                <a href="#eligibility" className="rt-btn pill text-uppercase rt-sm2 bg-secondary text-white">Check Obligations</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rt-spacer-100"></div>
      <section id="exam-details" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">DPDP Compliance Details</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Territorial Scope', desc: 'Applies to processing personal data in India. Also applies outside India if in connection with offering goods/services to individuals in India.' },
              { title: 'Maximum Penalty', desc: 'Fines up to ₹250 crores (~$30 million USD) for failing to prevent data breaches. Enforced by the Data Protection Board of India.' },
              { title: 'Key Regulator', desc: 'Data Protection Board of India (DPBI) established as statutory body to enforce compliance and resolve grievances.' },
              { title: 'DPO Requirement', desc: 'Significant Data Fiduciaries (SDFs) must appoint an India-based Data Protection Officer responsible directly to the board.' },
              { title: 'Consent Standard', desc: 'Consent must be free, specific, informed, unconditional, and unambiguous with a clear notice accompanying it.' },
              { title: 'Notice Language', desc: 'Notice must be in English or any of the 22 languages listed in the 8th Schedule of the Indian Constitution.' }
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
          <h2 className="rt-section-title text-center">Key Stakeholders</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            {t('dpdp_domains_intro', 'The DPDP Act establishes specific roles with defined responsibilities and rights for entities involved in personal data processing.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { icon: '👤', title: 'Data Principal', desc: 'The individual to whom the personal data relates. Has rights to access, correction, erasure, and grievance redressal.', badge: 'Key Stakeholder 1' },
              { icon: '🏢', title: 'Data Fiduciary', desc: 'The entity determining the purpose and means of data processing. Responsible for ensuring compliance and security safeguards.', badge: 'Key Stakeholder 2' },
              { icon: '🛡️', title: 'Significant Data Fiduciary', desc: 'Designated organizations meeting thresholds of data volume, sensitivity, or risk. Subject to audits and DPIA requirements.', badge: 'Key Stakeholder 3' },
              { icon: '⚙️', title: 'Data Processor', desc: 'The entity processing digital personal data on behalf of a Data Fiduciary. Must follow instructions of the fiduciary.', badge: 'Key Stakeholder 4' }
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
          <h2 className="rt-section-title text-center">Compliance Obligations</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Notice and Consent', items: ['Fiduciaries must provide a clear notice detailing personal data items collected and purpose of processing.', 'Must offer option to withdraw consent easily in-app or via email.'] },
              { title: 'Reasonable Security', items: ['Implement reasonable security safeguards to prevent personal data breaches.', 'Required to notify the DPBI and affected individuals in case of a breach.'] },
              { title: 'Data Minimization & Erasure', items: ['Only collect data that is necessary for the specified purpose.', 'Delete and erase personal data as soon as the purpose is served or consent is withdrawn.'] }
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

export default Dpdp;
