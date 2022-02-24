const path = require('path');
 const goDashboard = (req, res) =>
 {
    res.status(200).sendFile(path.join(__dirname, '../public/dashboard.html'));
     

     
 }

 module.exports = { goDashboard };