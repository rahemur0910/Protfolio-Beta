const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000; // You can change this if needed

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection string
const mongoURI = process.env.MONGO_URI;  // Add your MongoDB URI here

// MongoDB client connection
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Handle POST request from contact form
app.post('/connect.php', async (req, res) => {
  const { fullname, email, phone, subject, message } = req.body;

  // Insert the data into MongoDB
  const contactCollection = client.db('your_database_name').collection('contacts'); // Replace with your database and collection name

  try {
    await contactCollection.insertOne({
      fullname,
      email,
      phone,
      subject,
      message,
      timestamp: new Date(),
    });

    res.send('Message sent successfully');
  } catch (err) {
    console.error('Error inserting message:', err);
    res.status(500).send('Failed to send message');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
