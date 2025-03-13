document.addEventListener("DOMContentLoaded", function () {
  function flipCard(card) {
    const inner = card.querySelector(".flip-card-inner");
    if (inner.style.transform === "rotateY(180deg)") {
      inner.style.transform = "rotateY(0deg)";
    } else {
      inner.style.transform = "rotateY(180deg)";
    }
  }

  window.searchEquipment = function () {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cards = document.querySelectorAll(".flip-card");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByClassName("card-title")[0].innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? "block" : "none";
    }
    }   
});



