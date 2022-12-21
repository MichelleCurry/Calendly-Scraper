let scrapeCalendly = document.getElementById('scrapeCalendly');

scrapeCalendly.addEventListener("click", async () => {
    
    // Get current active tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})

    //Execute script to parse appointments on page
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeAppointmentsFromPage,
    })
})

//Function to scrape appointments
function scrapeAppointmentsFromPage() {
    // RegEx parses for emails from html text
    const emailRegEx = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/
    gim;

    // parse emails from html page
    let emails = document.body.innerHTML.match(emailRegEx)

    alert(emails);
}
