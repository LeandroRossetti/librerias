let carritoInput = document.getElementById("numberCarrito")


let a = document.body;

a.addEventListener("click", (e) => {

    let b = e.target;
    
    if ( b.tagName === 'A' && b.className.includes('btn')){

        change()
    }
        

})


function change(){
    
    let actualValue = Number(carritoInput.value);
    let newValue = actualValue + 1;
    carritoInput.value=newValue;

}
