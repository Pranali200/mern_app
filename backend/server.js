const express = require('express')
const connectDB = require('./config/db')

const cors = require('cors')
require('dotenv').config()

const app = express()

connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
}); 

app.use('/api/auth', require('./routes/authRoute'))
app.use('/api/project', require('./routes/projectRoute'))
app.use('/api/podcast',require('./routes/podcastRoute'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
