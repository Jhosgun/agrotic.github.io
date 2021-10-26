const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');



readMoreBtn.addEventListener('click',(e)=>{
text.classList.toggle('show-more');
if(readMoreBtn.innerText === 'Ver Mas'){
    readMoreBtn.innerText = 'Ver Menos';
}else{
    readMoreBtn.innerText = 'Ver Mas';

}

})
