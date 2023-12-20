const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

// Use the cors middleware before defining routes
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: 'image/*', limit: '10mb' }));
// Import routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
