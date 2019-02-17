const https = require('http');

https.get({host:'35.204.27.255', port: 8080}, (res) => {
  res.on('data', function(d){
    console.log('data: ' + d)
  });
  res.on('end', function(){
    console.log('** done **')
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});