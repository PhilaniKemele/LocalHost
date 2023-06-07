const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your_database_name';

// Connect to MongoDB
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);

  // Add your code for storing and retrieving cards here

  // Close the connection
  client.close();
});

