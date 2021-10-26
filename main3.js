const readMoreBtn3 = document.querySelector('.read-more-btn3');
const text3 = document.querySelector('.text3');



readMoreBtn3.addEventListener('click',(e)=>{
text3.classList.toggle('show-more3');
if(readMoreBtn3.innerText === 'Ver Mas'){
    readMoreBtn3.innerText = 'Ver Menos';
}else{
    readMoreBtn3.innerText = 'Ver Mas';

}

})
