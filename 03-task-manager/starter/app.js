const express = require('express');
const app = express();
const task = require('./routes/task');
const connectDb = require('./db/connect');
const connectDB = require('./db/connect');

// env file
require('dotenv').config();


// middleware
app.use(express.json())

// route
app.use('/hello', (req, res) => {
    res.send("APP is RUNNING")
});

app.use('/api/v1/task', task)

// method
app.get('/api/v1/tasks'); // get all task
app.post('/api/v1/task'); // create new task
app.get('/api/v1/task/:id'); // get a single task
app.patch('/api/v1/task/:id'); // update a task
app.delete('/api/v1/task/:id'); // delete a task

const PORT = 5000


// Database connection merged with port response
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log (`Server is listening on PORT ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

start()