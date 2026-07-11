import React, { useState } from 'react';
import { useCMS } from '../../utils/useCMS';

export const Cisa: React.FC = () => {
  const { t } = useCMS();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: "cisa_faq_q1",
      key_a: "cisa_faq_a1",
      question: "Can freshers take the CISA exam?",
      answer: "Yes, freshers can take the CISA exam without having the required work experience. You have up to 5 years after passing the exam to gain the necessary 5 years of professional experience in information systems auditing, control, or security work."
    },
    {
      key_q: "cisa_faq_q2",
      key_a: "cisa_faq_a2",
      question: "How difficult is the CISA exam?",
      answer: "The CISA exam is considered challenging and requires thorough preparation. The passing rate is typically around 50%. Success requires a combination of study, understanding of concepts, and practical experience in IT auditing."
    },
    {
      key_q: "cisa_faq_q3",
      key_a: "cisa_faq_a3",
      question: "What is the validity of CISA certification?",
      answer: "The CISA certification is valid for 3 years. To maintain certification, you must earn and report a minimum of 120 Continuing Professional Education (CPE) hours during the 3-year period and pay an annual maintenance fee."
    },
    {
      key_q: "cisa_faq_q4",
      key_a: "cisa_faq_a4",
      question: "How to prepare for the CISA exam?",
      answer: "Recommended preparation includes studying the official CISA Review Manual, practicing with the CISA Question Database, taking mock tests, attending review courses, and gaining hands-on IT audit experience."
    },
    {
      key_q: "cisa_faq_q5",
      key_a: "cisa_faq_a5",
      question: "What is the exam retake policy?",
      answer: "If you do not pass the CISA exam on your first attempt, you can retake it. You must wait 30 days for the first retake, and 90 days for subsequent retakes. There is a maximum of 4 attempts within a 12-month period, and full exam fees apply to each attempt."
    }
  ];

  return (
    <div className="cert-page">
      {/* Banner / Breadcrumb */}
      <div className="rt-breadcump breaducump-style-2">
        <div className="rt-page-bg rtbgprefix-full"
             style={{ backgroundImage: "url(/marketing-assets/images/banner/About-us-banner.png)", height: '350px' }}>
        </div>
        <div className="container">
          <div className="row align-items-left" style={{ paddingTop: '140px' }}>
            <div className="col-lg-8">
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase" data-content-key="cisa_banner_title">
                {t('cisa_banner_title', 'CISA')}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="rt-spacer-100"></div>

      {/* Hero Section / Overview */}
      <section className="page-content-area bg-elements-parent">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <h2 className="rt-section-title" data-content-key="cisa_hero_title">
                {t('cisa_hero_title', 'CISA CERTIFICATION')}
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold" data-content-key="cisa_hero_subtitle">
                {t('cisa_hero_subtitle', 'Certified Information Systems Auditor - The global standard for IT audit and control.')}
              </p>
              <p className="f-size-16 line-height-30" data-content-key="cisa_hero_desc">
                {t('cisa_hero_desc', "ISACA's Certified Information Systems Auditor (CISA) is the world-renowned credential validating your ability to audit operational systems, governance, acquisition processes, and security controls.")}
              </p>
              <div className="rt-spacer-30"></div>
              <div className="d-flex justify-content-center gap-3">
                <a href="#exam-details" className="rt-btn rt-gradient pill text-uppercase rt-Bshadow-1 rt-sm2">
                  Exam Details
                </a>
                <a href="#eligibility" className="rt-btn pill text-uppercase rt-sm2 bg-secondary text-white">
                  Check Eligibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details Section */}
      <div className="rt-spacer-100"></div>
      <section id="exam-details" className="lightpinkbg" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">Exam Metrics</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            
            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title1">
                  {t('cisa_detail_title1', 'Exam Duration')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc1">
                  {t('cisa_detail_desc1', 'Candidates will have exactly 4 Hours (240 minutes) to complete the exam.')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title2">
                  {t('cisa_detail_title2', 'Questions')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc2">
                  {t('cisa_detail_desc2', 'Consists of 150 Multiple-Choice Questions covering IS auditing standards and techniques.')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title3">
                  {t('cisa_detail_title3', 'Passing Score')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc3">
                  {t('cisa_detail_desc3', 'Scaled score of 450 or above (on a scale of 200 to 800 points) is required to pass.')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title4">
                  {t('cisa_detail_title4', 'Testing Format')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc4">
                  {t('cisa_detail_desc4', 'Delivered via Computer-Based Testing at Pearson VUE centers or online remote proctoring.')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title5">
                  {t('cisa_detail_title5', 'Registration Fee')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc5">
                  {t('cisa_detail_desc5', 'Voucher costs $575 USD for ISACA members and $760 USD for non-members.')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block" style={{ height: '100%', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#854c93' }} data-content-key="cisa_detail_title6">
                  {t('cisa_detail_title6', 'Maintenance')}
                </h3>
                <p className="mt-2" data-content-key="cisa_detail_desc6">
                  {t('cisa_detail_desc6', 'Requires reporting at least 20 CPE hours annually and 120 CPE hours triennially.')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Domains Section */}
      <div className="rt-spacer-100"></div>
      <section id="domains" className="page-content-area">
        <div className="container">
          <h2 className="rt-section-title text-center">CISA Exam Domains</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto" data-content-key="cisa_domains_intro">
            {t('cisa_domains_intro', 'The CISA curriculum evaluates auditing and cybersecurity competence across five core domains.')}
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            
            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔍</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }} data-content-key="cisa_domain_title1">
                  {t('cisa_domain_title1', 'Domain 1')}
                </h3>
                <p className="f-size-14" data-content-key="cisa_domain_desc1">
                  {t('cisa_domain_desc1', 'Information System Auditing Process (21% Weight)')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏢</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }} data-content-key="cisa_domain_title2">
                  {t('cisa_domain_title2', 'Domain 2')}
                </h3>
                <p className="f-size-14" data-content-key="cisa_domain_desc2">
                  {t('cisa_domain_desc2', 'Governance and Management of IT (17% Weight)')}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 rt-mb-30">
              <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>🛡️</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }} data-content-key="cisa_domain_title3">
                  {t('cisa_domain_title3', 'Domain 3')}
                </h3>
                <p className="f-size-14" data-content-key="cisa_domain_desc3">
                  {t('cisa_domain_desc3', 'Information Systems Acquisition, Development & Implementation (12% Weight)')}
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 rt-mb-30">
              <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚙️</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }} data-content-key="cisa_domain_title4">
                  {t('cisa_domain_title4', 'Domain 4')}
                </h3>
                <p className="f-size-14" data-content-key="cisa_domain_desc4">
                  {t('cisa_domain_desc4', 'Information Systems Operations and Business Resilience (23% Weight)')}
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 rt-mb-30">
              <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔒</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }} data-content-key="cisa_domain_title5">
                  {t('cisa_domain_title5', 'Domain 5')}
                </h3>
                <p className="f-size-14" data-content-key="cisa_domain_desc5">
                  {t('cisa_domain_desc5', 'Protection of Information Assets (27% Weight)')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <div className="rt-spacer-100"></div>
      <section id="eligibility" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center">Eligibility Requirements</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            
            <div className="col-md-4 rt-mb-30">
              <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>Experience Requirements</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                  <li className="rt-mb-10">Minimum 5 years of professional information systems auditing, control, or security work experience.</li>
                  <li className="rt-mb-10">Experience must be gained within the 10-year period preceding the application date.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 rt-mb-30">
              <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>Substitutions & Waivers</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                  <li className="rt-mb-10">Maximum of 3 years of substitutions allowed.</li>
                  <li className="rt-mb-10">1 year waiver for completed university degree (60-120 semester credits).</li>
                  <li className="rt-mb-10">2 years waiver for a Bachelor or Master degree from an ISACA-approved university.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 rt-mb-30">
              <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>For Freshers</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                  <li className="rt-mb-10">Freshers can take the CISA exam immediately without work experience.</li>
                  <li className="rt-mb-10">You have up to 5 years after passing the CISA exam to gain the required work experience.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="rt-spacer-100"></div>
      <section id="faq" className="faq-area bg-elements-parent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="rt-section-title">Frequently Asked Questions</h2>
              <p className="rt-light3 line-height-34 rt-mb-0 section-p-content">
                Find answers to the most frequently asked questions here
              </p>
              <div className="rt-spacer-30"></div>
              <div id="accordion">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div className="faq-card" key={index}>
                      <div className="faq-header" onClick={() => setActiveFaq(isOpen ? null : index)}>
                        <h5 data-content-key={faq.key_q}>
                          {t(faq.key_q, faq.question)}
                        </h5>
                        <div className="faq-icon" style={{ backgroundColor: '#854c93', color: '#fff' }}>
                          {isOpen ? '−' : '+'}
                        </div>
                      </div>
                      
                      {isOpen && (
                        <div className="faq-body" data-content-key={faq.key_a}>
                          {t(faq.key_a, faq.answer as string)}
                        </div>
                      )}
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

export default Cisa;
