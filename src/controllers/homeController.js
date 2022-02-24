const path = require('path');
 const goHome = (req, res) =>
 {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
     

     
 }

 module.exports = { goHome };