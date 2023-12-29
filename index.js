const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;


mongoose.connect('mongodb://127.0.0.1:27017/Pesticide', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(cors());


const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);


app.post('/submitForm', async (req, res) => {
    try {
        const formData = req.body;
        const result = await FormData.create(formData);

        console.log('Form Data inserted:', result);

        res.status(200).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
