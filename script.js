let ham = document.getElementById('ham');


function clickHam(){
if(ham.getAttribute('src') ==='imgs/icon-close.svg'){
    ham.src = 'imgs/icon-hamburger.svg'
 
} else{
    ham.src = 'imgs/icon-close.svg'
    
}
}