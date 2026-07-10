import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-content rtbgprefix-full rt-pt-130 rt-pb-130 rt-pt-lg-0 rt-pb-lg-0 bg-elements-parent" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <h1 className="rt-section-title text-center" style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>
              Privacy Policy
            </h1>
            <div className="article tncnp" id="content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
              <p><strong>Data Fiduciary:</strong> [Legal Name of CSQNA Entity]<br />
              <strong>Registered Address:</strong> [Registered Office Address]<br />
              <strong>Website:</strong> csqna.com<br />
              <strong>Effective Date:</strong> [DD Mon YYYY]<br />
              <strong>Contact:</strong> <a href="mailto:privacy@csqna.com">privacy@csqna.com</a></p>

              <p>CSQNA ("we", "our", "us") is committed to protecting the digital personal data of all individuals ("Data Principals") who use csqna.com, in accordance with the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the DPDP Rules, 2025. This Privacy Policy explains how we collect, use, store, share, and protect your personal data.</p>

              <p>This Policy should be read together with the Notice and Consent Statement shown at the time of registration.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>1. Scope</h5>
              <p>This Policy applies to all users of csqna.com and covers all digital personal data processed through the platform, including account information and test-related data.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>2. Personal Data We Collect</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Personal Data Item</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Mandatory</td>
                    <td>Collected at registration</td>
                  </tr>
                  <tr>
                    <td>Email address</td>
                    <td>Mandatory</td>
                    <td>Collected at registration; used for account access and communication</td>
                  </tr>
                  <tr>
                    <td>Test results (overall scores)</td>
                    <td>Collected for all users</td>
                    <td>Retained per Section 5</td>
                  </tr>
                  <tr>
                    <td>Test results (question/answer-level detail)</td>
                    <td>Collected for paying users only</td>
                    <td>Retained for 6 months per Section 5</td>
                  </tr>
                </tbody>
              </table>

              <p>We collect only the personal data listed above. We do not collect financial information, health data, biometric data, or any other category of data beyond what is stated here, and we do not use any data collected for a purpose incompatible with Section 3 below.</p>

              <p><em>(Note: the DPDP Act does not create a distinct "sensitive personal data" category — all digital personal data is protected under a single standard. We therefore do not make a sensitive/non-sensitive distinction in this Policy.)</em></p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>3. Purpose of Processing</h5>
              <p>We process your personal data for the following specific purposes, on the basis of your consent:</p>
              <ul>
                <li>To create and manage your user account (name, email)</li>
                <li>To administer practice tests and generate/share your results (test scores; detailed results for paying users)</li>
                <li>To send you service-related communications — account alerts, password resets, result notifications (email)</li>
              </ul>

              <p>Separately, and independent of your consent, we may process limited personal data where necessary to comply with a legal obligation (e.g., a lawful request from a government or regulatory authority, or applicable tax/audit requirements) under Section 7 of the DPDP Act. This processing does not depend on consent and is not affected by consent withdrawal.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>4. Consent and Lawful Use</h5>
              <p>Where we rely on consent, that consent is free, specific, informed, unconditional, and unambiguous, given through a clear affirmative action at the time of registration.</p>

              <p>You may withdraw consent at any time:</p>
              <ul>
                <li><strong>In-app:</strong> Account Settings → Privacy → Withdraw Consent, or</li>
                <li><strong>By email:</strong> <a href="mailto:legal@csqna.com">legal@csqna.com</a></li>
              </ul>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>5. Data Retention</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Personal Data Item</th>
                    <th>Retention Trigger</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name, email, account credentials</td>
                    <td>Retained while your account is active; erased within 30 days of account deletion, or after 12 months of continuous inactivity, whichever is earlier</td>
                  </tr>
                  <tr>
                    <td>Overall test scores (all users)</td>
                    <td>Retained while your account is active; erased on account deletion or after 12 months of continuous inactivity</td>
                  </tr>
                  <tr>
                    <td>Detailed question/answer-level results (paying users)</td>
                    <td>Retained for 6 months from the date of generation, then automatically and permanently deleted</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>6. Data Sharing and Cross-Border Transfers</h5>
              <p>We do not sell your personal data. We share it only with service providers who host our platform or deliver emails, under strict contractual privacy agreements.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>7. Data Principal Rights</h5>
              <p>Under the DPDP Act, you have the right to access, correct, complete, and delete your personal data. You may also withdraw your consent at any time.</p>
              <p>To exercise any of these rights, write to <a href="mailto:legal@csqna.com">legal@csqna.com</a>.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>8. Grievance Redressal</h5>
              <p>If you have any questions or complaints regarding privacy, please contact our Grievance Officer at <a href="mailto:legal@csqna.com">legal@csqna.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
