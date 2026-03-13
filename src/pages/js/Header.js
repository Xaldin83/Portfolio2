const burgerMenu = document.getElementById('burgerMenu')

console.log(burgerMenu)
const hiddenMenu = document.querySelector('nav')
burgerMenu.addEventListener('click',()=>{
    let hiddenMenuActivated = hiddenMenu.classList.toggle("active")
    if(hiddenMenuActivated){
        hiddenMenu.classList.add('active');
    }else{
        hiddenMenu.classList.remove('active');
    }
})