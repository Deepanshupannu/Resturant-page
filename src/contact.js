import pic from './pic.jpeg';

function address(){
    content.innerHTML=""
    const addcard=document.createElement('div')
    addcard.id="addcard"
    const ima=new Image()
    ima.src=pic
    addcard.appendChild(ima)
    const he1=document.createElement("h1")
    he1.textContent='The BREAKFAST BAR'
    const he2=document.createElement("h2")
    he2.textContent='502C, Nehru Palace, New Delhi'
    const he3=document.createElement("h3")
    he3.textContent="Mobile: 9090909090"
    addcard.appendChild(he1)
    addcard.appendChild(he2)
    addcard.appendChild(he3)
    content.appendChild(addcard)
}
export {address}