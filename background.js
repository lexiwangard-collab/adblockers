chrome.webNavigation.onCompleted.addListener(function (details) {
  // This fires when a navigation finishes on LinkedIn
  // We don't need to do much here because the actual removal
  // happens in linkedin.js as a content script.
  console.log("LinkedIn page loaded:", details.url);
}, {
  url: [{ hostContains: "linkedin.com" }]
});
