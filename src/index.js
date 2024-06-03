import './style.css'
import { page } from "./home";
import { showmenu } from './menu';
import { address } from './contact';

const home=document.querySelector("#home");
home.addEventListener("click",page);


const menu=document.querySelector('#menu')
menu.addEventListener('click',showmenu)

const add=document.querySelector("#address")
add.addEventListener('click',address)
