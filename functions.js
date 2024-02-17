//Definieren Sie eine Funktion, welche 2 Parameter entgegennimmt und aus diesen 2 Zahlen das Produkt bildet und auf der Konsole ausgibt
function mul(number1, number2) {
    const result = number1 * number2;
    console.log(result);
   }
   mul(1, 2);
   mul(2, 3);
   mul(4, 5);

//Definieren Sie eine Funktion, welche 1 Parameter (Grad Celsius) entgegennimmt, diesen Wert in Fahrenheit umrechnet und auf der Konsole ausgibt
function fahrenheit(celsius) {
    const result = celsius * 1.8 + 32;
    console.log('Celsius:', celsius, 'Fahrenheit:', result);
   }
   fahrenheit(80)
   fahrenheit(200)

//Deklarieren Sie eine Variable, weisen Sie dieser Variable danach ein Lambda/Arrow Funktion zu, welche aus 2 Parametern das Modulo bestimmt. Rufen Sie dann die Funktion mit verschiedenen Parametern auf
const modulo = (a, b) => a % b;
console.log(modulo(10, 3));
console.log(modulo(10, 5));
