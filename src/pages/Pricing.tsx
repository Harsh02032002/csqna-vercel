import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  return (
    <div className="page-content rtbgprefix-full rt-pt-130 rt-pb-130 rt-pt-lg-0 rt-pb-lg-0 bg-elements-parent" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <br />
            <div className="container-fluid">
              <div className="row justify-content-center no-gutters">
                <table style={{ width: '100%', textAlign: 'left', borderSpacing: 0, borderCollapse: 'collapse' }}>
                  <colgroup>
                    <col style={{ width: '31%' }} />
                    <col style={{ width: '22%', border: '1px solid #ccc' }} />
                    <col style={{ width: '25%', border: '10px solid #59c7fb' }} />
                    <col style={{ width: '22%', border: '1px solid #ccc' }} />
                  </colgroup>

                  <thead>
                    <tr>
                      <th style={{ background: 'transparent' }}>&nbsp;</th>
                      <th style={{ textAlign: 'center', borderBottom: '1px solid #ccc', padding: '3em 0 2em', fontWeight: 400, color: '#999' }}>
                        <h2 style={{ fontWeight: 300, fontSize: '2.4em', lineHeight: 1.2, color: '#59c7fb' }}>Premium</h2>
                        <p>INR 750/-<br /><br />Billed as one payment<br />for 6 months.</p>
                      </th>
                      <th style={{ textAlign: 'center', borderBottom: '1px solid #ccc', padding: '2em 0 5em', fontWeight: 400, color: '#999', position: 'relative' }}>
                        <h2 style={{ fontWeight: 300, fontSize: '3.6em', lineHeight: 1.2, color: '#59c7fb' }}>Plus</h2>
                        <p>INR 550/-</p><br /><br />
                        <p className="promo" style={{
                          fontSize: '1em',
                          color: '#fff',
                          position: 'absolute',
                          top: '9em',
                          left: '-17px',
                          zIndex: 1000,
                          width: '100%',
                          margin: 0,
                          padding: '.625em 17px .75em',
                          background: 'linear-gradient(95deg, #f30070 0%, #ff7841 100%)',
                          boxShadow: '0 4px 10px rgba(243,0,112,.3)',
                          borderBottom: 'none'
                        }}>
                          Our most valuable package!<br />Billed as one payment for 3 months.
                        </p>
                      </th>
                      <th style={{ textAlign: 'center', borderBottom: '1px solid #ccc', padding: '3em 0 2em', fontWeight: 400, color: '#999' }}>
                        <h2 style={{ fontWeight: 300, fontSize: '2.4em', lineHeight: 1.2, color: '#59c7fb' }}>Basic</h2>
                        <p>Free Forever</p>
                      </th>
                    </tr>
                  </thead>

                  <tfoot>
                    <tr>
                      <th style={{ padding: '2em 1em', borderTop: '1px solid #ccc' }}>&nbsp;</th>
                      <td style={{ textAlign: 'center', padding: '2em 1em', borderTop: '1px solid #ccc' }}>
                        <Link to="/register" style={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', display: 'block', padding: '1.125em 2em', backgroundColor: '#59c7fb', borderRadius: '.5em' }}>Register Now</Link>
                      </td>
                      <td style={{ textAlign: 'center', padding: '2em 1em', borderTop: '1px solid #ccc' }}>
                        <Link to="/register" style={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', display: 'block', padding: '1.125em 2em', backgroundColor: '#59c7fb', borderRadius: '.5em' }}>Register Now</Link>
                      </td>
                      <td style={{ textAlign: 'center', padding: '2em 1em', borderTop: '1px solid #ccc' }}>
                        <Link to="/register" style={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', display: 'block', padding: '1.125em 2em', backgroundColor: '#59c7fb', borderRadius: '.5em' }}>Start For Free</Link>
                      </td>
                    </tr>
                  </tfoot>

                  <tbody>
                    <tr>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Unlimited Practice Tests
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Practice as many timed tests as you want. Test Your Skills in 23 CyberSec Categories.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f9f9' }}>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Detailed Analytical Reports
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Per-test performance breakdown: domain-wise strengths & weaknesses.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                    </tr>
                    <tr>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Restart Ongoing Assessments
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Pause & resume tests from where you left off within 24-48hrs.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f9f9' }}>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Saved Reports
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Keeps your scoring history for reference.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee', padding: '1.5em' }}>
                        6 months. After that all old reports are archived and shared on request.
                      </td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee', padding: '1.5em' }}>
                        3 months. After that all old reports are archived and shared on request.
                      </td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee', padding: '1.5em' }}>
                        1 month. After that all old reports are archived and shared on request.
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Certification Simulators
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Mock exams that mimic real certification conditions.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>&mdash;</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f9f9' }}>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #eee' }}>
                        Schedule Your Certification Test
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Book simulated proctored sessions.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>✓</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>&mdash;</td>
                    </tr>
                    <tr>
                      <th style={{ padding: '1.5em', borderLeft: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                        Priority Support & Mentoring
                        <span style={{ fontWeight: 'normal', fontSize: '87.5%', color: '#999', display: 'block', marginTop: '4px' }}>
                          Faster help and optional mentor guidance.
                        </span>
                      </th>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>✓ (1-to-1 mentoring is Paid)</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>✓ (1-to-1 mentoring is Paid)</td>
                      <td style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>✓ (1-to-1 mentoring is Paid)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
