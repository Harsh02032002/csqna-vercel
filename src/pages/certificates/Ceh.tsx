import React, { useState } from 'react';

export const Ceh: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      key_q: "ceh_faq_q1",
      key_a: "ceh_faq_a1",
      question: "What is the difference between CEH and CEH Practical?",
      answer: "CEH multiple-choice is a 4-hour conceptual and method-based assessment. CEH Practical is a 6-hour hands-on challenge in a live lab environment where you must exploit hosts, analyze payloads, and solve 20 penetration challenges. Earning both grants the CEH Master title."
    },
    {
      key_q: "ceh_faq_q2",
      key_a: "ceh_faq_a2",
      question: "How difficult is the CEH exam?",
      answer: "CEH is moderately challenging. Preparing requires solid networking foundations, knowledge of port scanning metrics, payload design, and command-line usage of key pentesting utilities like Nmap, Metasploit, Wireshark, and Hashcat."
    },
    {
      key_q: "ceh_faq_q3",
      key_a: "ceh_faq_a3",
      question: "What is the retake policy?",
      answer: "If you fail, there is no waiting period for the first retake. However, subsequent retakes require a 14-day waiting period. There is a maximum limit of 5 attempts per year, and exam retake fees apply."
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
              <h1 className="f-size-50 f-size-lg-40 f-size-md-30 f-size-xs-22 rt-strong text-white text-uppercase">
                CEH v12
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
              <h2 className="rt-section-title" style={{ color: '#854c93' }}>
                CEH v12 CERTIFICATION
              </h2>
              <p className="rt-light3 f-size-20 line-height-34 rt-mb-20 font-weight-bold">
                Certified Ethical Hacker - Master the hacking technologies and techniques used by threat groups.
              </p>
              <p className="f-size-16 line-height-30">
                EC-Council's Certified Ethical Hacker (CEH) is the premier credential validating your ability to audit operational risk, identify network vulnerabilities, and think like a hacker to secure enterprise systems.
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
          <h2 className="rt-section-title text-center" style={{ color: '#854c93' }}>Exam Metrics</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { title: 'Exam Duration', desc: 'Candidates will have exactly 4 Hours (240 minutes) to complete the theoretical exam.' },
              { title: 'Questions', desc: 'Consists of 125 Multiple-Choice Questions testing knowledge of security controls and tools.' },
              { title: 'Passing Score', desc: 'Varies dynamically based on exam difficulty, typically ranging between 60% and 85%.' },
              { title: 'Testing Format', desc: 'Delivered online via the ECC Exam Portal or at authorized Pearson VUE testing centers.' },
              { title: 'Exam Version', desc: 'Currently testing version v12, featuring updated modules on OT hacking and cloud threats.' },
              { title: 'Maintenance', desc: 'Requires reporting a minimum of 120 ECE credits every 3 years to maintain active credential.' }
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

      {/* Modules Section */}
      <div className="rt-spacer-100"></div>
      <section id="domains" className="page-content-area">
        <div className="container">
          <h2 className="rt-section-title text-center" style={{ color: '#854c93' }}>CEH v12 Module Phases</h2>
          <p className="text-center section-p-content max-w-2xl mx-auto">
            The CEH curriculum is structured into four main phases covering 20 security and hacking modules.
          </p>
          <div className="rt-spacer-40"></div>
          <div className="row">
            {[
              { icon: '🔍', title: 'Phase 1', desc: 'Information Gathering & Recon (Footprinting, Scanning, and Enumeration modules 1-4)' },
              { icon: '💻', title: 'Phase 2', desc: 'Threats & System Attacks (System Exploitation, Malware, and Sniffing modules 5-8)' },
              { icon: '🌐', title: 'Phase 3', desc: 'Web & Network Attacks (Evading Firewalls, SQLi, and Cloud/IoT hacking modules 9-15)' },
              { icon: '🛡️', title: 'Phase 4', desc: 'Controls & Protections (IDS Evasion, Cryptography, and Wireless Sec modules 16-20)' }
            ].map((d, i) => (
              <div className="col-md-3 col-sm-6 rt-mb-30" key={i}>
                <div className="blue-block text-center" style={{ height: '100%', padding: '25px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{d.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{d.title}</h3>
                  <p className="f-size-14">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <div className="rt-spacer-100"></div>
      <section id="eligibility" style={{ background: '#F6F7FA', padding: '60px 0' }}>
        <div className="container">
          <h2 className="rt-section-title text-center" style={{ color: '#854c93' }}>Eligibility Requirements</h2>
          <div className="rt-spacer-40"></div>
          <div className="row">
            
            <div className="col-md-6 rt-mb-30">
              <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>Self-Study Path</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                  <li className="rt-mb-10">Must document a minimum of 2 years of professional work experience in information security.</li>
                  <li className="rt-mb-10">Pay a non-refundable eligibility application processing fee of $100 USD.</li>
                  <li className="rt-mb-10">EC-Council reviews and verifies credentials before approving voucher purchases.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 rt-mb-30">
              <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#854c93', marginBottom: '15px' }}>Training Path</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                  <li className="rt-mb-10">Attend an official EC-Council training course (in-person, online, or self-paced).</li>
                  <li className="rt-mb-10">The 2-year work experience prerequisite is fully waived upon course completion.</li>
                  <li className="rt-mb-10">Voucher can be purchased immediately after concluding the training modules.</li>
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
              <h2 className="rt-section-title" style={{ color: '#854c93' }}>Frequently Asked Questions</h2>
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
                        <h5>{faq.question}</h5>
                        <div className="faq-icon" style={{ backgroundColor: '#854c93', color: '#fff' }}>
                          {isOpen ? '−' : '+'}
                        </div>
                      </div>
                      
                      {isOpen && (
                        <div className="faq-body">
                          {faq.answer}
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

export default Ceh;
