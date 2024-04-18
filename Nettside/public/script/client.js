import { Hotel } from "./hotelrom.js";

fetch("/api/rom")
  .then((response) => response.json())
  .then((hotelrom) => {
    hotelrom.forEach((romData) => {
      const HotelRomContainer = document.querySelector("#HotelRom-Container");

      const rom = new Hotel(romData);

      HotelRomContainer.append(rom.container);
    });
  })
  .catch((error) => {
    console.error("Innhenting av hotelrom feilet:", error);
  });
