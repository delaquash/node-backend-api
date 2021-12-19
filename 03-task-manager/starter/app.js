const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler')

// env file
require('dotenv').config();


// middleware
app.use(express.static('./public'))
app.use(express.json())

// route
// app.use('/hello', (req, res) => {
//     res.send("APP is RUNNING")
// });

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

// method
// app.get('/api/v1/tasks'); // get all task
// app.post('/api/v1/tasks'); // create new task
// app.get('/api/v1/tasks/:id'); // get a single task
// app.patch('/api/v1/tasks/:id'); // update a task
// app.delete('/api/v1/tasks/:id'); // delete a task

// To ensure server an load on another port except 500
const PORT = process.env.PORT || 5000;


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