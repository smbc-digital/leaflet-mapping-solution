export default function mapEndpoints(origin, chapterName) {
    switch (origin) {
        case "https://localhost:44325":
            return `https://localhost:44325/RetrieveData/ChapterStages?chapterName=${chapterName}`
        case "http://localplan-int.stockport.gov.uk":
            return `http://scnwebappsdev1.stockport.gov.uk:8080/RetrieveData/ChapterStages?chapterName=${chapterName}`
        case "https://localplan.stockport.gov.uk":
            return `http://scnwebappsprd1.stockport.gov.uk:8080/RetrieveData/ChapterStages?chapterName=${chapterName}`
        default: 
            return `http://scnwebappsprd1.stockport.gov.uk:8080/RetrieveData/ChapterStages?chapterName=${chapterName}`
    }
}



