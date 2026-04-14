const pdfparse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const InterviewReportModel = require("../models/interviewReport.model");


 const generateInterviewReportController = async (req,res)=>{
    const resumeContent = await (new pdfparse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
    const {selfDescription,jobDescription} = req.body;

    const interviewReportByAi = await generateInterviewReport({
        resume:resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await InterviewReportModel.create({
        resume:resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    res.status(201).json({
        message:"interview report generated successfully..",
        interviewReport
    })
}

module.exports = {generateInterviewReportController}