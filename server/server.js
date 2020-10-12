let express = require('express');
let app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
let app_path = '../docs';
app.use('/', express.static(path.join(__dirname, app_path)))
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, app_path) })
})
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.get('*',(req,res)=> res.sendFile(path.join((__dirname, app_path +'/index.html'))))

