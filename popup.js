let scrapeEmails = document.getElementById('scrapeCalendly');

scrapeEmails.addEventListener("click", async () => {
    
    // Get current active tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    //Execute script to parse appointments on page
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage,
    });
})

//Function to scrape appointments
function scrapeEmailsFromPage() {
    // RegEx parses for emails from html text
    const emailRegEx = /[\w-]+@([\w-]+\.)+[\w-]+/g;
   
    // parse emails from html page
    let emails = document.body.innerHTML.match
    (emailRegEx);

    alert(emails);
}
