const secenekler=document.querySelectorAll('.secenek');
const geriBildirim=document.getElementById('geriBildirim');

secenekler.forEach((button)=>{
    button.addEventListener('click',()=>{
        const isCorrect = button.getAttribute('data-correct') === 'true';
        
        geriBildirim.classList.remove('hidden');
        if(isCorrect){
            geriBildirim.textContent='Tebrikler!';
            geriBildirim.style.color='green';
        }
        else{
            geriBildirim.textContent='Üzgünüm, yanlış cevap.Tekrar dene!';
            geriBildirim.style.color='red'
        }
    })
})



document.getElementById('gonderBtn').addEventListener('click',function(){
    alert('işleminiz yapıldı!');
})