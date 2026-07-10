import React, { useState } from 'react';
import api from '../../utils/api';

export const UploadQuestions: React.FC = () => {
  const [practiceFile, setPracticeFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [practiceMsg, setPracticeMsg] = useState('');
  const [certMsg, setCertMsg] = useState('');
  const [uploadingPractice, setUploadingPractice] = useState(false);
  const [uploadingCert, setUploadingCert] = useState(false);

  const handlePracticeUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceFile) return;
    setUploadingPractice(true);
    setPracticeMsg('');

    const formData = new FormData();
    formData.append('files', practiceFile);

    try {
      const res = await api.post('/admin/uploadpractice', formData);
      if (res.data && res.data.status) {
        setPracticeMsg('Practice questions database updated successfully.');
        setPracticeFile(null);
      } else {
        setPracticeMsg(res.data?.message || 'Upload failed.');
      }
    } catch (err: any) {
      setPracticeMsg(err.response?.data?.message || 'Error uploading practice database.');
    } finally {
      setUploadingPractice(false);
    }
  };

  const handleCertUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certFile) return;
    setUploadingCert(true);
    setCertMsg('');

    const formData = new FormData();
    formData.append('files', certFile);

    try {
      const res = await api.post('/admin/uploadcertification', formData);
      if (res.data && res.data.status) {
        setCertMsg('Certification questions database updated successfully.');
        setCertFile(null);
      } else {
        setCertMsg(res.data?.message || 'Upload failed.');
      }
    } catch (err: any) {
      setCertMsg(err.response?.data?.message || 'Error uploading certification database.');
    } finally {
      setUploadingCert(false);
    }
  };

  return (
    <div className="main-panel rt-pt-57" style={{ paddingLeft: 0 }}>
      <div className="content">
        <div className="container-fluid">
          <div className="row column_title page_title">
            <div className="col-md-12">
              <h2 className="rt-pt-10 rt-pb-10" style={{ fontWeight: 'bold', fontSize: '24px', color: '#1a3456' }}>Upload Database</h2>
            </div>
          </div>

          <div className="row">
            {/* Practice Database Uploader */}
            <div className="col-md-6 mb-4">
              <div className="white_card p-4" style={{ borderRadius: '15px', background: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minHeight: '380px' }}>
                <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#1a3456' }}>Practice Questions</h4>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  Upload Excel sheet with columns containing category tags, difficulty, questions, and option explanations.
                </p>

                {practiceMsg && (
                  <div className="alert alert-info mt-3" style={{ fontSize: '13px' }}>
                    {practiceMsg}
                  </div>
                )}

                <form onSubmit={handlePracticeUpload} className="mt-4">
                  <div className="form-group mb-4">
                    <input
                      type="file"
                      accept=".xlsx, .xls"
                      onChange={(e) => setPracticeFile(e.target.files?.[0] || null)}
                      className="form-control"
                      style={{ padding: '8px' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!practiceFile || uploadingPractice}
                    className="btn btn-primary w-100 rt-btn rt-gradient pill text-uppercase"
                    style={{ border: 'none', fontWeight: 'bold' }}
                  >
                    {uploadingPractice ? 'Uploading...' : 'Publish Practice'}
                  </button>
                </form>
              </div>
            </div>

            {/* Certification Database Uploader */}
            <div className="col-md-6 mb-4">
              <div className="white_card p-4" style={{ borderRadius: '15px', background: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minHeight: '380px' }}>
                <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#1a3456' }}>Certification Modules</h4>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  Upload Excel templates matching exam domains for CISA, CISSP, CEH, DPDP, CIPP, AAIA, and ISO 27001.
                </p>

                {certMsg && (
                  <div className="alert alert-info mt-3" style={{ fontSize: '13px' }}>
                    {certMsg}
                  </div>
                )}

                <form onSubmit={handleCertUpload} className="mt-4">
                  <div className="form-group mb-4">
                    <input
                      type="file"
                      accept=".xlsx, .xls"
                      onChange={(e) => setCertFile(e.target.files?.[0] || null)}
                      className="form-control"
                      style={{ padding: '8px' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!certFile || uploadingCert}
                    className="btn btn-primary w-100 rt-btn rt-gradient pill text-uppercase"
                    style={{ border: 'none', fontWeight: 'bold' }}
                  >
                    {uploadingCert ? 'Uploading...' : 'Publish Certification'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadQuestions;
