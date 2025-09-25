// require('dotenv').config();
// const express = require('express');
// const mongodDB = require('mongodb');
// const cveRoutes = require('./routes/cveRoutes');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // View engine
// app.set('view engine', 'mjs');

// // Routes
// app.use('/', cveRoutes);

// // MongoDB Connection
// mongodDB.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => console.error(err));

require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const CVEModel = require('./models/CVE');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// MongoDB setup
const client = new MongoClient(process.env.MONGO_URI);

async function startServer() {
  try {
    await client.connect();
    const db = client.db(); 
    CVEModel.setDatabase(db); 

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

startServer();
