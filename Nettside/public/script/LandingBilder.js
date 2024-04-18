const LandingBilderEl = document.querySelectorAll(".Valg");
const LandingBackgroundEl = document.querySelector("#Landing-Background");
let intervalId;

LandingBilderEl.forEach((valg) => {
  valg.addEventListener("click", function (e) {
    clearInterval(intervalId);
    EndreBakgrunn(e);
    startAutoSwitch();
  });
});

function EndreBakgrunn(e) {
  const id = e.target.id;

  if (id === "Landing-Bilde1") {
    e.target.classList.add("ValgtBilde");

    LandingBilderEl.forEach((valg) => {
      valg.classList.add("Bildevalg");
    });

    if (e.target.classList.contains("Bildevalg")) {
      e.target.classList.remove("Bildevalg");
    }

    LandingBackgroundEl.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('../assets/Resort_Background.jpg')";
  }

  if (id === "Landing-Bilde2") {
    e.target.classList.add("ValgtBilde");

    LandingBilderEl.forEach((valg) => {
      valg.classList.add("Bildevalg");
    });

    if (e.target.classList.contains("Bildevalg")) {
      e.target.classList.remove("Bildevalg");
    }

    LandingBackgroundEl.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('../assets/Resort_Background2.jpeg')";
  }
  if (id === "Landing-Bilde3") {
    e.target.classList.add("ValgtBilde");

    LandingBilderEl.forEach((valg) => {
      valg.classList.add("Bildevalg");
    });

    if (e.target.classList.contains("Bildevalg")) {
      e.target.classList.remove("Bildevalg");
    }

    LandingBackgroundEl.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('../assets/Resort_Background3.jpg')";
  }
}

function startAutoSwitch() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const tilfeldigBilde = Math.floor(Math.random() * LandingBilderEl.length);
    const Bilde = LandingBilderEl[tilfeldigBilde];
    EndreBakgrunn({ target: Bilde });
  }, 30000);
}

startAutoSwitch();
