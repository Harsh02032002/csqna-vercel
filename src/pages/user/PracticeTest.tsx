import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

export const PracticeTest: React.FC = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [testData, setTestData] = useState<any>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [remainingTime, setRemainingTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reportData, setReportData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await api.post('/user/practice/start', { testid: testId });
        if (res.data && res.data.status && res.data.data) {
          setTestData(res.data.data);
          setRemainingTime((res.data.data.duration || 40) * 60);
          
          // Re-populate already answered questions
          const initialAnswers: Record<string, string[]> = {};
          res.data.data.testQuestions?.forEach((q: any) => {
            if (q.userAnswer) {
              initialAnswers[q._id] = Array.isArray(q.userAnswer) ? q.userAnswer : [q.userAnswer];
            }
          });
          setSelectedAnswers(initialAnswers);
        } else {
          setErrorMessage('Failed to start test session.');
        }
      } catch (err: any) {
        setErrorMessage(err.response?.data?.message || 'Error occurred starting test.');
      } finally {
        setLoading(false);
      }
    };
    fetchTest();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testId]);

  useEffect(() => {
    if (remainingTime > 0 && !reportData) {
      timerRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [remainingTime, reportData]);

  const handleOptionSelect = async (questionId: string, optionId: string, isMultiple = false) => {
    let currentAnswers = selectedAnswers[questionId] || [];
    if (isMultiple) {
      if (currentAnswers.includes(optionId)) {
        currentAnswers = currentAnswers.filter((a) => a !== optionId);
      } else {
        currentAnswers = [...currentAnswers, optionId];
      }
    } else {
      currentAnswers = [optionId];
    }

    setSelectedAnswers({ ...selectedAnswers, [questionId]: currentAnswers });

    // Auto save response to backend
    try {
      await api.post('/user/practice/saveresponse', {
        testId: testId,
        questionId: questionId,
        answer: currentAnswers,
      });
    } catch {
      // Silent fail
    }
  };

  const handleSubmitTest = async () => {
    setSubmitting(true);
    setShowConfirmModal(false);
    try {
      const res = await api.post('/user/practice/submittest', { testId });
      if (res.data && res.data.status && res.data.data) {
        setReportData(res.data.data);
      } else {
        setErrorMessage('Failed to submit test.');
      }
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || 'Error submitting test.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="text-center p-5 font-weight-bold text-muted">
        Securing test session logs...
      </div>
    );
  }

  if (errorMessage && !reportData) {
    return (
      <div className="alert alert-danger">
        {errorMessage}
      </div>
    );
  }

  if (reportData) {
    return (
      <div className="white_card p-5 mx-auto" style={{ maxWidth: '800px', borderRadius: '15px', background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <div className="text-center mb-4">
          <h2 style={{ fontWeight: 'bold', color: '#1a3456' }}>Test Completed</h2>
          <p className="text-muted" style={{ fontSize: '14px' }}>Practice Score Report</p>
        </div>

        <div className="row text-center py-4 my-4" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
          <div className="col-4">
            <h5 className="text-muted" style={{ fontSize: '12px', fontWeight: 'bold' }}>TOTAL QUESTIONS</h5>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{reportData.totalQuestions || testData?.testQuestions?.length}</p>
          </div>
          <div className="col-4">
            <h5 className="text-muted" style={{ fontSize: '12px', fontWeight: 'bold' }}>CORRECT OPTIONS</h5>
            <p className="text-success" style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{reportData.correctAnswers || 0}</p>
          </div>
          <div className="col-4">
            <h5 className="text-muted" style={{ fontSize: '12px', fontWeight: 'bold' }}>FINAL SCORE</h5>
            <p className="text-primary" style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{reportData.score?.toFixed(1) || 0}%</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 style={{ fontWeight: 'bold', fontSize: '16px', color: '#1a3456', marginBottom: '20px' }}>Question Explanations</h4>
          <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
            {testData?.testQuestions?.map((q: any, idx: number) => {
              const uAns = selectedAnswers[q._id] || [];
              return (
                <div key={q._id} className="p-3 mb-3" style={{ border: '1px solid #eee', borderRadius: '8px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Q{idx + 1}. {q.questionText}</p>
                  <div className="row">
                    {q.options?.map((opt: any) => {
                      const isUserSelected = uAns.includes(opt.id);
                      return (
                        <div className="col-6 mb-2" key={opt.id}>
                          <div className="p-2" style={{
                            fontSize: '13px',
                            borderRadius: '5px',
                            border: isUserSelected ? '2px solid #59c7fb' : '1px solid #eee',
                            backgroundColor: isUserSelected ? '#def4fe' : '#f9f9f9',
                            color: '#333'
                          }}>
                            {opt.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {q.explanation && (
                    <div className="p-3 mt-2 bg-light border-left border-primary" style={{ fontSize: '12px', borderRadius: '0 5px 5px 0' }}>
                      <strong>Rationale:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={() => navigate('/panel/dashboard')} className="btn btn-primary w-100 rt-btn rt-gradient pill text-uppercase" style={{ border: 'none', fontWeight: 'bold' }}>
          Return to Dashboard
        </button>
      </div>
    );
  }

  const currentQuestion = testData.testQuestions[currentIdx];
  const isMulti = currentQuestion.questionType === 'MSQ';
  const userAnswersList = selectedAnswers[currentQuestion._id] || [];

  return (
    <div className="mx-auto" style={{ maxWidth: '900px' }}>
      <div className="d-flex justify-content-between align-items-center p-3 mb-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#1a3456' }}>{testData.testname}</h4>
          <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Question {currentIdx + 1} of {testData.testQuestions.length}</p>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#777' }}>
          <i className="fa fa-clock mr-2 text-primary animate-pulse"></i>
          {formatTime(remainingTime)}
        </div>
      </div>

      <div className="white_card p-5" style={{ borderRadius: '15px', background: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h3 className="mb-4" style={{ fontSize: '18px', fontWeight: '500', color: '#333', lineHeight: '1.6' }}>{currentQuestion.questionText}</h3>

        <div className="row">
          {currentQuestion.options?.map((opt: any) => {
            const isSelected = userAnswersList.includes(opt.id);
            return (
              <div className="col-md-6 mb-3" key={opt.id}>
                <button
                  type="button"
                  onClick={() => handleOptionSelect(currentQuestion._id, opt.id, isMulti)}
                  className="w-100 p-3 text-left d-flex align-items-center gap-3"
                  style={{
                    backgroundColor: isSelected ? '#def4fe' : '#fff',
                    borderColor: isSelected ? '#59c7fb' : '#eee',
                    borderRadius: '10px',
                    borderWidth: '2px',
                    outline: 'none',
                    cursor: 'pointer',
                    minHeight: '60px'
                  }}
                >
                  <input type={isMulti ? "checkbox" : "radio"} checked={isSelected} readOnly />
                  <span style={{ fontSize: '13px', color: '#333' }}>{opt.text}</span>
                </button>
              </div>
            );
          })}
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx(currentIdx - 1)}
            className="btn btn-outline-secondary"
            style={{ borderRadius: '8px', fontSize: '13px', padding: '8px 20px' }}
          >
            ← Prev
          </button>

          {currentIdx === testData.testQuestions.length - 1 ? (
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="btn btn-success"
              style={{ borderRadius: '8px', fontSize: '13px', padding: '8px 25px', fontWeight: 'bold' }}
            >
              Submit Test
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="btn btn-primary"
              style={{ borderRadius: '8px', fontSize: '13px', padding: '8px 20px' }}
            >
              Next →
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1050
        }}>
          <div className="card p-4 text-center" style={{ maxWidth: '400px', borderRadius: '15px', border: 'none' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1a3456' }}>Submit Assessment</h4>
            <p className="text-muted" style={{ fontSize: '13px', margin: '15px 0' }}>Are you sure you want to finish this practice test? Once submitted, your answers will be graded.</p>
            <div className="d-flex gap-3">
              <button onClick={() => setShowConfirmModal(false)} className="btn btn-light w-50" style={{ borderRadius: '8px' }}>Cancel</button>
              <button onClick={handleSubmitTest} disabled={submitting} className="btn btn-primary w-50" style={{ borderRadius: '8px' }}>
                {submitting ? 'Grading...' : 'Yes, Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeTest;
