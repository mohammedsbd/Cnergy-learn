import { replaceMongoIdInObject } from "@/lib/convertData";
import { Assessment } from "@/model/assessment-model";
import { Report } from "@/model/report-model";


export async function getReport(filter){
    try {
        const report = await Report.findOne(filter)
        .populate({
            path: "quizAssessment",
            model: Assessment,
        }).lean();
        return replaceMongoIdInObject(report);
    } catch (error) {
        throw new Error(error);
    }
    
}