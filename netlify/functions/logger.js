const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzHR371yHtmWV2qSGVYc8zFozoRnK2ybbVHZKn61kWrO-ZsEsov6uMRLrOkRasItx0h/exec';

  try {
    const response = await fetch(googleScriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.text();

    return {
      statusCode: 200,
      body: `Google Sheet updated: ${result}`,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};


