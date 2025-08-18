const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  // ✅ Replace with your actual Google Apps Script Web App URL
  const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyafXsf7ZgyMNQi3loPdSx1f3Eyqs-WunJRVv0xxANc4fkw_126JoN12Ye131FcWsY/exec';

  try {
    const response = await fetch(GOOGLE_SHEET_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Google Sheets logging failed');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'Logged to Google Sheets' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
