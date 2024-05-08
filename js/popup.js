const getValueFromTab = () => {
  const value = document.getElementById('someElement').innerText;
  chrome.runtime.sendMessage({
    action: 'getValue',
    value: value
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('showAllStocks').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getValueFromTab
      });
    });
  });
});

//document.getElementById('hideAllStocks').addEventListener('click', showHideStocks);