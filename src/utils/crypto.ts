import CryptoJS from 'crypto-js';

const SECRET_KEY = 'CramFamousDots25';

export const encrypt = (data: any): string => {
  try {
    if (!data) return '';
    const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
    
    let formattedData = data;
    if (typeof data === 'object') {
      formattedData = JSON.stringify(data);
    }
    
    const parsedData = CryptoJS.enc.Utf8.parse(formattedData);
    const encrypted = CryptoJS.AES.encrypt(parsedData, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return encrypted.toString();
  } catch (error) {
    console.error('Encryption failed:', error);
    throw error;
  }
};

export const decrypt = (encryptedData: string): string => {
  try {
    if (!encryptedData) return '';
    const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption failed:', error);
    throw error;
  }
};
