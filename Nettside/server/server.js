const express = require("express");

const admin = require("firebase-admin");
const serviceAccount = require("./skyggefjell-85e93-firebase-adminsdk-wo0tv-ff0c921f00.json");

const bodyParser = require("body-parser");
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const port = 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../public"));

app.get("/api/rom", async (req, res) => {
  try {
    const RomSnapshot = await admin.firestore().collection("hotelrom").get();
    const hotelrom = [];
    await Promise.all(
      RomSnapshot.docs.map(async (romDoc) => {
        const romData = romDoc.data();
        const romId = romDoc.id;

        const TilbudSnapshot = await admin
          .firestore()
          .collection("hotelrom")
          .doc(romId)
          .collection("Tilbud")
          .get();
        const tilbudData = TilbudSnapshot.docs.map((romDoc) => romDoc.data());
        hotelrom.push({
          RomNavn: romData.RomNavn,
          RomBeskrivelse: romData.RomBeskrivelse,
          BildeSrc: romData.BildeSrc,
          Pris: romData.Pris,
          Tilbud: tilbudData,
        });
      })
    );
    res.json(hotelrom);
  } catch (error) {
    console.error("Innhenting av hotelrom feilet:", error);
    res.status(500).json({ error: "Innhenting av hotelrom feilet" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
