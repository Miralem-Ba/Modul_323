// Deklaration eines Objekts mit mehreren Eigenschaften
const fahrzeug = {
    marke: "Toyota",
    modell: "Prius",
    jahr: 2012,
    eigenschaften: {
      farbe: "grau",
      istElektro: true,
      zusatzInfo: {
        besitzer: "Miralem",
        angemeldet: true
      }
    }
  }
  
  // Ausgabe der einzelnen Eigenschaften des Fahrzeugs
  console.log(fahrzeug.marke); // Toyota
  console.log(fahrzeug.modell); // Prius
  console.log(fahrzeug.jahr); // 2012
  
  // Ausgabe der verschachtelten Objekteigenschaften
  console.log(fahrzeug.eigenschaften.farbe); // grau
  console.log(fahrzeug.eigenschaften.istElektro); // true
  
  // Noch tiefer verschachtelte Eigenschaften
  console.log(fahrzeug.eigenschaften.zusatzInfo.besitzer); // Miralem
  console.log(fahrzeug.eigenschaften.zusatzInfo.angemeldet); // true

const person = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 29,
   };
   console.log(person.firstName, person.lastName, person.age);

const child = {
    firstName: "Eva",
    father: {
    firstName: "Max",
    lastName: "Mustermann",
    father: {
    firstName: "Peter",
    lastName: "Mustermann",
    }
    },
   }