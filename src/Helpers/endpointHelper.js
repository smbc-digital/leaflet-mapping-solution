export default function mapEndpoints(origin, chapterName) {
    switch (origin) {
        case 'https://localhost:44325':
            return `https://localhost:44325/RetrieveData/ChapterStages?chapterName=${chapterName}`
        case 'http://localplan-int.stockport.gov.uk':
            return `http://localplan-int.stockport.gov.uk/RetrieveData/ChapterStages?chapterName=${chapterName}`
        case 'https://localplan.stockport.gov.uk':
            return `https://localplan.stockport.gov.uk/RetrieveData/ChapterStages?chapterName=${chapterName}`
        default: 
            return `https://localplan.stockport.gov.uk/RetrieveData/ChapterStages?chapterName=${chapterName}`
    }
}



