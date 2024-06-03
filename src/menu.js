import pizza1 from './pizza1.jpg';
import sandwich from './pizza2.jpeg'
import burger from './burger.jpeg'

function showmenu(){
   const content= document.querySelector('#content')
   content.innerHTML=" ";
   const menucard=document.createElement('div')
   menucard.id="menucard";
   let card1=document.createElement('h2')
   card1.innerText="Farmer Fresh  Pizza \n price:Rs 480"

   let card2=document.createElement("h2")
   card2.innerText="Sandwich \n Price:Rs 120"

   let card3=document.createElement("h2")
   card3.innerText=" Cheese Burger \n Price:Rs 120"
  

   const item1=new Image()
   item1.src=pizza1;
   const item2=new Image()
   item2.src=sandwich
   const item3=new Image()
   item3.src=burger


   
   menucard.appendChild(item1);
   menucard.appendChild(card1)
   menucard.appendChild(item2)
   menucard.appendChild(card2)
   menucard.appendChild(item3)
   menucard.appendChild(card3)
   content.appendChild(menucard)

}
// showmenu()
export {showmenu}