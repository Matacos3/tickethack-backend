const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://feissoileali:Alifeissoile94@cluster0.zgzwxj6.mongodb.net/tickethack-backend'
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch(error => console.error(error));