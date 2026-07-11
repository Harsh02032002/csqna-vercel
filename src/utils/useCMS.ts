import { useState, useEffect } from 'react';

const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5003/v1/content'
  : 'https://api.csqna.com/v1/content';

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
