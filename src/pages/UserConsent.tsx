import React from 'react';

export const UserConsent: React.FC = () => {
  return (
    <div className="page-content rtbgprefix-full rt-pt-130 rt-pb-130 rt-pt-lg-0 rt-pb-lg-0 bg-elements-parent" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <h1 className="rt-section-title text-center" style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>
              Notice and Consent Statement
            </h1>
            <div className="article tncnp" id="content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
              <p><strong>Data Fiduciary:</strong> Open Security Alliance LLP<br />
              <strong>Website:</strong> csqna.com<br />
              <strong>Registered Address:</strong> G3/12 Jal Padma CHS, Mumbai 400104.<br />
              <strong>Effective Date:</strong> 01 January 2026<br />
              <strong>Contact for Privacy Queries:</strong> <a href="mailto:privacy@csqna.com">privacy@csqna.com</a> / <a href="mailto:legal@csqna.com">legal@csqna.com</a></p>

              <p>This Notice is issued under Section 5 of the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the Digital Personal Data Protection Rules, 2025. It explains what personal data csqna.com ("CSQNA", "we", "us") collects, why, and what rights you have. Please read this Notice before you provide your consent.</p>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>1. Personal Data We Collect and Why</h5>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
                  <thead>
                    <tr style={{ background: '#1a3456', color: '#fff' }}>
                      <th style={{ padding: '10px', border: '1px solid #ccc' }}>Personal Data Item</th>
                      <th style={{ padding: '10px', border: '1px solid #ccc' }}>Specific Purpose</th>
                      <th style={{ padding: '10px', border: '1px solid #ccc' }}>Applicable to</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Name</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Creating and identifying your user account</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>All users</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Email address</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Account login, OTP verification, system notifications</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>All users</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Phone number (optional)</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Account recovery, 2FA (if enabled)</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Users who provide it</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Test scores (aggregate)</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Displaying pass/fail and overall results</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>All users</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Detailed test results</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Providing question-level feedback and performance insights</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Paying users only</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Payment data</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Processed by Razorpay; we do not store card data</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>Paying users only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />

              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>2. Consent</h5>
              <p>We collect your personal data only with your free, informed, specific, and unambiguous consent, provided at the time of registration. By clicking "I Agree", you consent to the processing described above.</p>
              <p>You may withdraw your consent at any time by contacting <a href="mailto:legal@csqna.com">legal@csqna.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConsent;
