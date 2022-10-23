const URL = "https://data.sec.gov/submissions/CIK0000320193.json"

const ext = "xslF345X03/wf-form4_166613234346671.xml"

https://www.sec.gov/Archives/edgar/data/1559053/000156761922018716/0001567619-22-018716-index.htm

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let cik = data.cik;
        let companyName = data.name;
        let companyDescription = data.sicDescription
        let mostRecentFiling = data.filings.recent.primaryDocDescription[0];
        document.getElementById("company-name").innerHTML = companyName;
        document.getElementById("company-description").innerHTML = companyDescription
        document.getElementById("cik").innerHTML = cik;
        document.getElementById("recent-filing").innerHTML = mostRecentFiling;
    });