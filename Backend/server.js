require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/config/database');


connectToDB();
// generateInterviewReport({resume,selfDescription,jobDescription});


app.listen(3000,()=>{
    console.log("server live on 3000")
})