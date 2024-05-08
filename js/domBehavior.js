// Changing tabs behavior
const openTab = (tabName) => {
  switch (tabName) {
    case 'tab1':
      document.getElementById('tab1').style.display = 'block'
      document.getElementById('tab2').style.display = 'none'
      document.getElementById('tab1Btn').style.backgroundColor = '#ccc'
      document.getElementById('tab2Btn').style.backgroundColor = '#fff'
      break
    case 'tab2':
      document.getElementById('tab1').style.display = 'none'
      document.getElementById('tab2').style.display = 'block'
      document.getElementById('tab1Btn').style.backgroundColor = '#fff'
      document.getElementById('tab2Btn').style.backgroundColor = '#ccc'
      break
    default:
      console.log('An error has occured.')
  }
}

document.getElementById('tab1Btn').addEventListener('click', () => openTab('tab1'))
document.getElementById('tab2Btn').addEventListener('click', () => openTab('tab2'))

// Enable/disable input fields when stock options are checked
document.getElementById('checkStockAbove').addEventListener('change', e => {
  document.getElementById('stockAbovePrice').disabled = !e.target.checked;
  document.getElementById('stockAbovePrice').value = "";
})

document.getElementById('checkStockBelow').addEventListener('change', e => {
  document.getElementById('stockBelowPrice').disabled = !e.target.checked;
  document.getElementById('stockBelowPrice').value = "";
})