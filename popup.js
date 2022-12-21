let scrapeCalendly = document.getElementById('scrapeCalendly');

scrapeCalendly.addEventListener("click", async () => {
    
    // Get current active tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})

    //Execute script to parse appointments on page
    chrome.scripting.excuteScript({
        target: {tabId: tab.id},
        func: scrapeAppointmentsFromPage,
    })
})

//Function to scrape appointments
function scrapeAppointmentsFromPage() {
    alert('hi');
}
