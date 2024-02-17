//Eine Schleife, die von 0 bis 10 hochzählt
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
//Eine Schleife, die eine Zufallszahl generiert und bei einer Zahl größer als 8 abbricht
  let zufallszahl = Math.floor(Math.random() * 10);

  while (zufallszahl > 8) {
   console.log('zufallszahl is', zufallszahl);
   zufallszahl = Math.floor(Math.random() * 10);
  }

//Eine Schleife, die alle Elemente eines Arrays durchläuft
const fruits = ['�', '�', '�', '�', '�'];
for (const fruit of fruits) {
  console.log(fruit);
}
