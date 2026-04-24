const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL || "http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

/* require all the routes here */
const authRouter = require('./routes/auth.routes')
const interviewRouter = require('./routes/interview.routes')

/* using all the routes here*/
app.use('/api/auth',authRouter);
app.use('/api/interview',interviewRouter);


const distPath = path.join(process.cwd(), "dist");
app.use(express.static(distPath));

app.use((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});


module.exports = app;