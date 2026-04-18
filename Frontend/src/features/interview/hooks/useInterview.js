import { generateReport,getAllReports,getReportById } from "../services/interview.api";
import { useContext,useEffect } from "react";
import { InterviewContext } from "../interview.context";
import { useParams } from "react-router";
import { generateResumePdf } from "../services/interview.api";

export const useInterview = ()=>{
    const context = useContext(InterviewContext);
    const {interviewId } = useParams();

    if(!context) {
        throw new Error("useInterview must be used within an interviewProvider")
    }
    const {loading, setLoading, report, setReport, reports, setReports} = context;

    const generateReportHook = async ({selfDescription, jobDescription, resumeFile})=>{
        setLoading(true);
        let response = null;
        try {
           response = await generateReport({selfDescription,jobDescription,resumeFile});
           setReport(response.interviewReport);
        } catch (error) {
            console.log("Error generating interview report",error)
        } finally{
            setLoading(false);
        }
        
        return response.interviewReport
    }
    

    const getReportByIdHook = async (interviewId)=>{
        setLoading(true);
        let response = null;
        try {
            response = await getReportById(interviewId);
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error);
        }finally{
           setLoading(false);  
        }
        return response.interviewReport;
    }

    const getReports = async ()=>{
        setLoading(true); 
        let response = null;  
        try {
            response = await getAllReports();
            setReports(response.interviewReports);
        } catch (error) {
            console.log(error);
        }        finally{
            setLoading(false);
        }

        return response.interviewReports;
    }

    const getResumePdf = async (interviewReportId)=>{
        setLoading(true);
        let response = null;
        try {
            response = await generateResumePdf({interviewReportId});
            const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `resume_${interviewId}.pdf`);
            document.body.appendChild(link);
            link.click();
            
        } catch (error) {
            console.log("Error generating resume PDF", error);
        }finally{
            setLoading(false);
        }
    }

     useEffect(() => {
        if (interviewId) {
            getReportByIdHook(interviewId)
        } else {
            getReports()
        }
    }, [ interviewId ])

    
    return {loading, report, reports, generateReportHook, getReportByIdHook, getReports, getResumePdf};
}