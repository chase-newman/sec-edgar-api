const URL = "https://data.sec.gov/submissions/CIK0000320193.json"

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