
  


  const soruHavuzu = [
    {
      soru: "Bir kenar uzunluğu 5 cm olan bir karenin çevresi kaç cm'dir?",
      secenekler: ["15 cm", "20 cm", "25 cm", "30 cm"],
      dogruCevap: "20 cm"
    },
    {
      soru: "Bir sınıfta 24 öğrenci var. Öğrenciler 6'şar kişilik gruplara ayrılırsa kaç grup oluşur?",
      secenekler: ["3", "4", "5", "6"],
      dogruCevap: "4"
    },
    {
      soru: "Bir tren saatte 80 km hızla gidiyor. 3 saatte kaç km yol alır?",
      secenekler: ["200 km", "240 km", "160 km", "80 km"],
      dogruCevap: "240 km"
    },
    {
      soru: "Bir kitapta toplam 300 sayfa var. Her gün 20 sayfa okursanız kitabı kaç günde bitirirsiniz?",
      secenekler: ["10 gün", "15 gün", "20 gün", "25 gün"],
      dogruCevap: "15 gün"
    },
    {
      soru: "6 ile 4'ün çarpımı kaçtır?",
      secenekler: ["20", "24", "30", "36"],
      dogruCevap: "24"
    }
  ];




  function getHaftaNumarasi() {
    const tarih = new Date();
    const yil = tarih.getFullYear();
    const yilBasi = new Date(yil, 0, 1);
    const gunFarki = (tarih - yilBasi) / (1000 * 60 * 60 * 24);
    return Math.ceil((gunFarki + yilBasi.getDay() + 1) / 7);
  }
  
  function haftaninSorusu(soruHavuzu) {
    const haftaNumarasi = getHaftaNumarasi();
    const index = haftaNumarasi % soruHavuzu.length;
    return soruHavuzu[index];
  }
  
  function soruyuGoster() {
    const haftalikSoru = haftaninSorusu(soruHavuzu);
    const soruAlani = document.getElementById("soru-alani");
    const secenekAlani = document.getElementById("secenek-alani");
    


    soruAlani.innerText = haftalikSoru.soru;
    secenekAlani.innerHTML = "";
  
    haftalikSoru.secenekler.forEach(secenek => {
      const buton = document.createElement("button");
      buton.innerText= secenek;
      buton.classList.add("secenek-buton");
      buton.onclick = () => {
        if (secenek === haftalikSoru.dogruCevap) {
          alert("Tebrikler! Doğru cevap.");
        } else {
          alert("Yanlış cevap. Tekrar deneyin.");
        }
      };
      secenekAlani.appendChild(buton);
    });
  }
  
 
  soruyuGoster(); // İlk soruyu hemen göster
setInterval(soruyuGoster, 60 * 1000);
document.addEventListener("DOMContentLoaded", () => {
  soruyuGoster();
});


document.addEventListener("DOMContentLoaded", () => {
  loadReviews();
  displayReviewsOnPage();
});

function addReview() {
  const username = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;
  if (!username || !comment) return alert("Lütfen adınızı ve yorumunuzu girin.");
  
  const reviewData = { username, comment };
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(reviewData);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  
  displayReviews();
  displayReviewsOnPage();
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
}

function loadReviews() {
  displayReviews();
}

function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewContainer = document.getElementById("reviews");
  reviewContainer.innerHTML = "";
  reviews.forEach(review => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.innerHTML = `<strong>${review.username}:</strong> ${review.comment}`;
      reviewContainer.appendChild(reviewElement);
  });
}

function displayReviewsOnPage() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const displayContainer = document.getElementById("display-reviews");
  displayContainer.innerHTML = "";
  reviews.forEach(review => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.innerHTML = `<strong>${review.username}:</strong> ${review.comment}`;
      displayContainer.appendChild(reviewElement);
  });
}

function toggleReviews() {
  const reviewSection = document.getElementById("review-section");
  if (reviewSection.style.display === "none" || reviewSection.style.display === "") {
      reviewSection.style.display = "block";
  } else {
      reviewSection.style.display = "none";
  }
}