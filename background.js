// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Social Media Grayscale Filter Extension installed.');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['contentScript.js']
  });
});