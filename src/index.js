import './style.css';
import getDish from './modules/getDishes';
import logoimg from './media/FoodHoodieslogo.png';

const LOGO = document.querySelector('.logo');
const limg = new Image();
limg.src = logoimg;
limg.className = 'logo-img';
limg.setAttribute('alt', 'FOOD-HOODIES logo');
LOGO.appendChild(limg);
getDish();