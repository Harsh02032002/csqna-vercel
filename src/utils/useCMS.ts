import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5003/v1';
const API_URL = `${API_BASE}/content`;

export const useCMS = () => {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.status && data.data) {
          setContent(data.data);
        }
      })
      .catch(err => console.error("Failed to load CMS content:", err));
  }, []);

  const t = (key: string, fallback: string) => {
    return content[key] ? content[key] : fallback;
  };

  return { t };
};
