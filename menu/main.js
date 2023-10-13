const showMainBtn = document.querySelector('#showMain');
const showHkBtn = document.querySelector('#showHk');
const showDinnerBtn = document.querySelector('#showDinner');
const mainDiv = document.querySelector('#main');
const hkDiv = document.querySelector('#hk');
const dinnerDiv = document.querySelector('#dinner'); 
showMainBtn.addEventListener('click', () => {
  mainDiv.style.display = 'block';
  hkDiv.style.display = 'none';
  dinnerDiv.style.display = 'none'; 
});
showHkBtn.addEventListener('click', () => {
  mainDiv.style.display = 'none';
  hkDiv.style.display = 'block';
  dinnerDiv.style.display = 'none'; 
});
showDinnerBtn.addEventListener('click', () => {
  mainDiv.style.display = 'none';
  hkDiv.style.display = 'none';
  dinnerDiv.style.display = 'block';
});