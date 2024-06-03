import pic from'./hm.jpg';
function page(){
    const content=document.querySelector("#content")
    const homecard=document.createElement('div');
    content.innerHTML=""
    homecard.id="homecard";
    const head1=document.createElement('h1');
    head1.textContent="THE BREAKFAST BAR";

    const head2=document.createElement('h2')
    head2.textContent="Best cafe in the city"



    homecard.appendChild(head1)
    homecard.appendChild(head2)
    const cont=new Image()
    cont.src=pic;
    homecard.appendChild(cont)

    content.appendChild(homecard)


  
    

}
page()
export {page}