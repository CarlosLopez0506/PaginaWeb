const fs = require('fs');
fs.readFile('file1.txt','utf-8', function(err, data){
    if (err)
    console.log(err);
    else {console.log(data)};
});


