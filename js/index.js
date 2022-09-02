import '../css/style.scss'
import { itemDisplay } from './displayItems.js'
import { ListItem } from './listItems.js';

const galBox = document.querySelector('.gallaryBox');

ListItem.forEach(element => {
    galBox.insertAdjacentHTML('beforeend', itemDisplay(element));
});  

