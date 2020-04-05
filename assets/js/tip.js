// Get bill amount
// Get Service quality
// Get number of people sharing the bill

let billAmount = document.querySelector('#bill')
let serviceAmount = document.querySelector('#service')
let peopleAmount = document.querySelector('#people')
let calculateBtn = document.querySelector('#calculate');
let tipAmount = document.querySelector('#tipAmount')
let tipTitle = document.querySelector('#tipTitle')
let each = document.querySelector('#each')

calculateBtn.addEventListener('click', function() {
  let tip = (serviceAmount.value * billAmount.value) / peopleAmount.value;
  let value = tip.toLocaleString(
    undefined,
    { minimumFractionDigits: 2}
  )
  if (peopleAmount.value > 1) {
    each.textContent = 'each';
  }
  tipTitle.textContent = 'Tip Amount'
  tipAmount.textContent = `$${value}`
})







