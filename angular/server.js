// project/server.js
const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/person', personRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});