const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const logEntry = `${data.date} – ${data.ip} – ${data.city}, ${data.region}, ${data.country}\n`;

  const filePath = path.join('/tmp', 'location.txt');
  fs.appendFileSync(filePath, logEntry);

  return {
    statusCode: 200,
    body: 'Logged successfully',
  };
};
