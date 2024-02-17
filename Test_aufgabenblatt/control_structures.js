// if Else 
let zufallszahl = Math.random();
if (zufallszahl > 0.5) {
  console.log("Größer als 0.5");
} else if (zufallszahl > 0.25) {
  console.log("Größer als 0.25");
} else {
  console.log("Kleiner oder gleich 0.25");
}

//switch
let zahl = Math.floor(Math.random() * 5);
switch (zahl) {
  case 1:
    console.log("Der Wert der Zahl ist exakt 1");
    break;
  case 3:
    console.log("Der Wert der Zahl ist exakt 3");
    break;
  default:
    console.log("Der Wert der Zahl ist weder 1 noch 3");
    break;
}