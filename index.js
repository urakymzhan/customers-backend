const express = require('express');
const initAndConnectDB = require('./config/db');
const router = require('./api/routes');
const app = express();
const PORT = process.env.PORT || 5000;

// db
initAndConnectDB();

// middleware
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello Customer');
});
app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
