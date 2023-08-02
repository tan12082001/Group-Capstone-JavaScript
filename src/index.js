import './style.css';
import getDish from './modules/getDishes.js';
import logoimg from './media/FoodHoodieslogo.png';

const LOGO = document.querySelector('.logo');
const limg = new Image();
limg.src = logoimg;
limg.className = 'logo-img';
limg.setAttribute('alt', 'FOOD-HOODIES logo');
LOGO.appendChild(limg);
getDish();
const pops = document.querySelector('.popups');
const clo = document.querySelector('.close-popup');
clo.addEventListener('click', () => {
  pops.classList.toggle('no');
});