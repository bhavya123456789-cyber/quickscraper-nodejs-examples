const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.reed.co.uk/jobs/lead-clinical-pharmacist-paediatrics/51204363?source=searchResults&filter=%2Fjobs%2Fhealth-medicine-jobs", {
          parserSubscriptionId: 'f51e4f06-8079-5ba6-8768-0757d1f02454'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
