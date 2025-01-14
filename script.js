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




document.getElementById("rezervasyonFormu").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const ad = document.getElementById("ad").value;
    const email = document.getElementById("email").value;
    const tarih = document.getElementById("tarih").value;
    const saat = document.getElementById("saat").value;
  
    if (ad && email && tarih && saat) {
      alert(`Rezervasyon Başarılı! Ad: ${ad}, Tarih: ${tarih}, Saat: ${saat}`);
    } else {
      alert("Lütfen tüm alanları doldurun!");
    }
  });
  