// Liste mit 3 String-Elementen erstellen
const persons = [
    { name: "Miralem", age: 27 },
    { name: "Manuel", age: 31 },
    { name: "Chris", age: 25 },
   ];
   console.log(persons)   

// Das zweite Element ausgeben
console.log(persons[1])

// Element hinzufügen
persons.push({ name: "Anna", age: 29 });

// Element entfernen
persons.splice(0, 1);
