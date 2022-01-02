let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')


function clickHam(){
if(ham.getAttribute('src') ==='imgs/icon-close.svg'){
    ham.src = 'imgs/icon-hamburger.svg'
    drop.style.display='none'
 
} else{
    ham.src = 'imgs/icon-close.svg'
    drop.style.display='flex'
    
}
}