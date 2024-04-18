class Hotel {
  constructor(rom) {
    this.RomNavn = rom.RomNavn;
    this.RomBeskrivelse = rom.RomBeskrivelse;
    this.RomBildeSrc = rom.BildeSrc;
    this.RomPris = rom.Pris;
    this.createRoom();
    this.appendRoom();
  }

  createRoom() {
    this.Bilde = document.createElement("img");
    this.Bilde.src = this.RomBildeSrc;

    this.RomHeader = document.createElement("h4");
    this.RomHeader.textContent = this.RomNavn;

    this.Pris = document.createElement("h5");
    this.Pris.textContent = this.RomPris;

    this.Beskrivelse = document.createElement("p");
    this.Beskrivelse.textContent = this.RomBeskrivelse;
  }

  appendRoom() {
    this.container = document.createElement("div");
    this.container.classList.add("rom");

    this.container.append(
      this.Bilde,
      this.RomHeader,
      this.Pris,
      this.Beskrivelse
    );
  }
}
export { Hotel };
