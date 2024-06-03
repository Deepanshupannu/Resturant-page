import pic from'./pic.jpeg';
function page(){
    const content=document.querySelector("#content")
    const homecard=document.createElement('div');
    homecard.id="homecard";
    const cont=new Image()
    cont.src=pic;
    homecard.appendChild(cont)

    content.appendChild(homecard)


  
    

}
page()
export {page}