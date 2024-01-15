const readline = require('readline');
const fetch = require('node-fetch');

function mainPara() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Enter value for sentence: ', async (key1) => {
  rl.question('Enter value for option Professional, Creative, Urgent: ', async (key2) => {
    const result = await para1(key1, key2);
    console.log(result);
    rl.close();
  });
});
}

async function para1(key1, key2) {
  try {
    if (key1 === '' || key2 === '' || key1 == null || key2 == null) {
      console.log('User entered empty values. Exiting.');
    } else {
      const apiUrl = 'https://paraphraser.prod.hipcv.com/paraphrase';


      const requestData = {
        "text": key1,
        "mode": key2,
      };

 
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      
      if (data && data.data && data.data.length > 0) {
        return data.data[0];
      } else {
        console.log('API Response: Empty data array');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

mainPara();

module.exports = { para1 };
