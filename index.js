// index.js
const express = require('express')
const axios = require('axios');
const app = express()
const PORT = 4000

app.post('/upload', , (req, res) => {

     res.write('Hello World');
     res.send();
 
});

app.get('/', (req, res) => {

     res.write('Hello World');
     res.send();
 
})

app.get('/dude.json', (req, res) => {
 
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.printify.com/v1/shops/14136938/products.json',
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImVjODRkYTZjMWEyNjRkNThiZjgwNTNkZDJiOTY0OTJjZWE2ZjViY2RlYWE5M2Q4YTY4NDMwYzZhOTRiYmQ5Y2NkZWE3MGIzM2M1MzIxOGQ4IiwiaWF0IjoxNzA2NzA2Mzk1LjcwNTk3NCwibmJmIjoxNzA2NzA2Mzk1LjcwNTk3NiwiZXhwIjoxNzM4MzI4Nzk1LjY5OTUyLCJzdWIiOiIxMzg4OTc3NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Aj0cBLyGVuvg5f8-FcJ2QtY3dncxL8kBiCuEu6wCXOExkcgFlOB_Nu_HB9qj3awCLuM4IHyLOC6jbfAunF0'    }
  };
  
  axios.request(config)
  .then((response) => {
  //  console.log(JSON.stringify(response.data));
  //  res.writeHead(200, { 'Content-Type': 'text/html' });

    // Set response content    
    res.write(JSON.stringify(response.data));
  //  res.status(200).json('Welcome, your app is working well');
    res.send();//end the response
  })
  .catch((error) => {
    console.log(error);
  });

})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app
