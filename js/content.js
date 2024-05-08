// content.js
// This script will be injected into the webpage of the inactive tab
// You can read values from the DOM here and send them to the background script

// Example: reading a value from the DOM
const value = document.getElementById('bankGood-0').innerText;

// Sending the value to the background script
chrome.runtime.sendMessage({
  action: 'getValue',
  value: value
});